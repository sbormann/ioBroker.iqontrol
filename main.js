"use strict";

/*
 * Created with @iobroker/create-adapter v1.11.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");

// Load your modules here, e.g.:
// const fs = require("fs");
var createdObjects = [];
var allObjects = [];
var usedStates = [];
var lists = [];
var triggerIntervals = [];
var udef = 'undefined';

//++++++++++ HELPERS: GENERAL FUNCTIONS ++++++++++
function idEncode(id){
	return id.replace(/[\.\]\[\*,;'"`<>?]/g, "_"); //Unallowed chars: .][*,;'"`<>?
}

function idEncodePointAllowed(id){
	return id.replace(/[\]\[\*,;'"`<>?]/g, "_"); //Unallowed chars: .][*,;'"`<>?
}

function checkCondition(value, condition, conditionValue, conditionValueSeparator){
	if(typeof conditionValue == udef) return null;
	let conditionValues = [];
	if(typeof conditionValue == "string" && conditionValueSeparator){
		conditionValues = conditionValue.split(conditionValueSeparator).map(str => str.trim());
	} else {
		conditionValues = [conditionValue];
	}
	value = value || 0;
	switch(condition || ""){
		case "at":
		return true;
		break;

		case "af":
		return false;
		break;

		case "eqt":
		if (value.toString().toLowerCase() == "false" || value.toString().toLowerCase() == "0" || value.toString().toLowerCase() == "-1" || value.toString().toLowerCase() == ""){
			return false;
		} else {
			return true;
		}

		case "eqf":
		if (value.toString().toLowerCase() == "false" || value.toString().toLowerCase() == "0" || value.toString().toLowerCase() == "-1" || value.toString().toLowerCase() == ""){
			return true;
		} else {
			return false;
		}
		break;

		case "eq":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase() == conditionValues[i].toString().toLowerCase()) return true;				
		}
		return false;
		break;

		case "ne":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase() == conditionValues[i].toString().toLowerCase()) return false;				
		}
		return true;
		break;

		case "gt":
		for(let i = 0; i < conditionValues.length; i++){
			if (!isNaN(value) && !isNaN(conditionValues[i]) && parseFloat(value) > parseFloat(conditionValues[i])) return true;				
		}
		return false;
		break;

		case "ge":
		for(let i = 0; i < conditionValues.length; i++){
			if (!isNaN(value) && !isNaN(conditionValues[i]) && parseFloat(value) >= parseFloat(conditionValues[i])) return true;				
		}
		return false;
		break;

		case "lt":
		for(let i = 0; i < conditionValues.length; i++){
			if (!isNaN(value) && !isNaN(conditionValues[i]) && parseFloat(value) < parseFloat(conditionValues[i])) return true;				
		}
		return false;
		break;

		case "le":
		for(let i = 0; i < conditionValues.length; i++){
			if (!isNaN(value) && !isNaN(conditionValues[i]) && parseFloat(value) <= parseFloat(conditionValues[i])) return true;				
		}
		return false;
		break;

		case "c":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().indexOf(conditionValues[i].toString().toLowerCase()) > -1) return true;				
		}
		return false;
		break;

		case "nc":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().indexOf(conditionValues[i].toString().toLowerCase()) > -1) return false;				
		}
		return true;
		break;

		case "bw":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().indexOf(conditionValues[i].toString().toLowerCase()) == 0) return true;				
		}
		return false;
		break;

		case "nbw":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().indexOf(conditionValues[i].toString().toLowerCase()) == 0) return false;				
		}
		return true;
		break;

		case "ew":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().endsWith(conditionValues[i].toString().toLowerCase())) return true;				
		}
		return false;
		break;
		
		case "new":
		for(let i = 0; i < conditionValues.length; i++){
			if (value.toString().toLowerCase().endsWith(conditionValues[i].toString().toLowerCase())) return false;				
		}
		return true;
		break;

		default:
		return null;
	}
	return null;
}

function tryParseJSON(jsonString){ //Returns parsed object or false, if jsonString is not valid
	try {
		var o = JSON.parse(jsonString);
		// Handle non-exception-throwing cases:
		// Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
		// but... JSON.parse(null) returns null, and typeof null === "object",
		// so we must check for that, too. Thankfully, null is falsey, so this suffices:
		if (o && typeof o === "object") {
			return o;
		}
	}
	catch (e) { }
	return false;
}

function removeDuplicates(array) { //Removes duplicates from an array
	let seen = {};
	return array.filter(function(item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
}

//++++++++++ ADAPTER FUNCTIONS ++++++++++
class Iqontrol extends utils.Adapter {
	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		//super( Object.assign({name: "iqontrol"}, options) );
		super({ 
			...options,
			name: "iqontrol",
		});
		this.on("ready", this.onReady.bind(this));
		this.on("objectChange", this.onObjectChange.bind(this));
		this.on("stateChange", this.onStateChange.bind(this));
		this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));
	}

	//++++++++++ INFO ++++++++++
	async createInfoConnection(){
		await this.createOrUpdateObject("info.connection", {type: "state"}, {name: "Adapter Connection", desc: "Shows working adapter connection", type: "boolean", role: "indicator.connected"});
	}

	//++++++++++ POPUP ++++++++++	
	async createPopup(){
		await this.createOrUpdateObject("Popup.Message", 					{type: "state"}, 	{name: "Message",					type: "string", 	role: "text", 		desc: "Message to be displayed", });
		await this.createOrUpdateObject("Popup.CLEAR", 						{type: "state"}, 	{name: "Clear", 					type: "boolean", 	role: "button", 	desc: "Clear Popup Settings"});
		await this.createOrUpdateObject("Popup.Duration", 					{type: "state"}, 	{name: "Display Duration", 			type: "number", 	role: "timer", 		desc: "Display duration of message in ms (0 = until clicked)"});
		await this.createOrUpdateObject("Popup.ClickedValue", 				{type: "state"}, 	{name: "Clicked Value", 			type: "string", 	role: "text", 		desc: "Value that will be sent if popup is clicked"});
		await this.createOrUpdateObject("Popup.ClickedDestinationState", 	{type: "state"}, 	{name: "Clicked Destination State", type: "string", 	role: "text", 		desc: "The value will be sent to this state if popup is clicked"});
		await this.createOrUpdateObject("Popup.POPUP_CLICKED", 				{type: "state"}, 	{name: "Popup Clicked", 			type: "string", 	role: "text", 		desc: "The value will be sent to this datapoint if popup is clicked"});
		await this.createOrUpdateObject("Popup.ButtonNames", 				{type: "state"}, 	{name: "Button Names", 				type: "string", 	role: "text", 		desc: "Comma-separated list of buttons that will be displayd under the popup"});
		await this.createOrUpdateObject("Popup.ButtonValues", 				{type: "state"}, 	{name: "Button Values", 			type: "string", 	role: "text", 		desc: "Comma-separated list of values that will be sent if the button is clicked"});
		await this.createOrUpdateObject("Popup.ButtonDestinationStates", 	{type: "state"}, 	{name: "Button Destination States", type: "string", 	role: "text", 		desc: "Comma-separated list of states, the value will be sent to if the button is clicked"});
		await this.createOrUpdateObject("Popup.ButtonCloses", 				{type: "state"}, 	{name: "Button Closes", 			type: "string", 	role: "text", 		desc: "Comma-separated list of booleans (true/false) if the popup should close when the button is clicked"});
		await this.createOrUpdateObject("Popup.BUTTON_CLICKED", 			{type: "state"}, 	{name: "Button Clicked", 			type: "string", 	role: "text", 		desc: "The value will be sent to this datapoint if button is clicked"});
	}
	
	//++++++++++ WIDGETS ++++++++++	
	async createWidgets(){
		if(typeof this.config.widgetsDatapoints != 'undefined'){
			for(var index = 0; index < this.config.widgetsDatapoints.length; index++){
				let objName = this.config.widgetsDatapoints[index].name || idEncodePointAllowed(this.config.widgetsDatapoints[index].id);
				let objId = "Widgets." + idEncodePointAllowed(this.config.widgetsDatapoints[index].id);
				let commonOptions = {
					name: objName,
					type: this.config.widgetsDatapoints[index].type || "string",
					role: this.config.widgetsDatapoints[index].role || "",
					desc: "Widget-State created by iQontrol"
				}
				if(this.config.widgetsDatapoints[index].min) commonOptions.min = this.config.widgetsDatapoints[index].min;
				if(this.config.widgetsDatapoints[index].max) commonOptions.max = this.config.widgetsDatapoints[index].max;
				if(this.config.widgetsDatapoints[index].def) commonOptions.def = this.config.widgetsDatapoints[index].def;
				if(this.config.widgetsDatapoints[index].unit) commonOptions.unit = this.config.widgetsDatapoints[index].unit;
				await this.createOrUpdateObject(objId, 	{type: "state"}, 	commonOptions);
			}
		}
	}
	
	//++++++++++ LISTS ++++++++++	
	async createLists(){
		if(typeof this.config.lists != 'undefined'){
			let that = this;
			//Lists
			for(let configListIndex = 0; configListIndex < this.config.lists.length; configListIndex++){
				if (!this.config.lists[configListIndex].active) continue;
				let listName = this.config.lists[configListIndex].name || configListIndex.toString();
				this.log.debug("Creating List " + listName + "...");
				let listItems = [];
				//--##### Selectors #####
				for(let selectorIndex = 0; selectorIndex < this.config.lists[configListIndex].selectors.length; selectorIndex++){
					this.log.debug("...processing Selector " + (selectorIndex + 1) + "...");
					let selector = this.config.lists[configListIndex].selectors[selectorIndex];
					switch(selector.type){
						case "all":
						if(selector.modifier == "add") { //Add all
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1) listItems.push(allObjects[object]._id);
							};
						} else { //Remove all (just in any case :))
							listItems = [];
						}
						break;
						
						case "enum":
						var enumerationMembers = allObjects[selector.value] && allObjects[selector.value].common && allObjects[selector.value].common.members || [];
						for(let enumerationMemberIndex = 0; enumerationMemberIndex < enumerationMembers.length; enumerationMemberIndex++){
							let listItemIndex = listItems.indexOf(enumerationMembers[enumerationMemberIndex]);
							if(selector.modifier == "add") { //Add Enum
								if(listItemIndex == -1) listItems.push(enumerationMembers[enumerationMemberIndex]);
							} else { //Remove Enum
								if(listItemIndex > -1) listItems.splice(listItemIndex, 1);
							}
						};
						break;
						
						case "enumWithChilds":
						var enumerationMembers = allObjects[selector.value] && allObjects[selector.value].common && allObjects[selector.value].common.members || [];
						if(selector.modifier == "add") { //Add enumWithChilds
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1){
									for(let enumerationMemberIndex = 0; enumerationMemberIndex < enumerationMembers.length; enumerationMemberIndex++){
										if(checkCondition(allObjects[object]._id, "bw", enumerationMembers[enumerationMemberIndex], ',')) {
											listItems.push(allObjects[object]._id);
											//break;
										}
									}
								}
							};
						} else { //Remove enumWithChilds
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								for(let enumerationMemberIndex = 0; enumerationMemberIndex < enumerationMembers.length; enumerationMemberIndex++){
										if(checkCondition(listItems[listItemIndex], "bw", enumerationMembers[enumerationMemberIndex], ',')) {
											listItems.splice(listItemIndex, 1);
											listItemIndex--; //because splicing inside the loop re-indexes the array
											//break;
										}
								}
							}
						}
						break;
						
						case "id":						
						if(selector.modifier == "add") { //Add ids
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object]._id, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove ids
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(checkCondition(listItems[listItemIndex], selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
						
						case "type":
							if(selector.modifier == "add") { //Add types
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object].type, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove types
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(checkCondition(allObjects[listItems[listItemIndex]].type, selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
						
						case "commonType":
						if(selector.modifier == "add") { //Add commonType
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object] && allObjects[object].common && allObjects[object].common.type, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove commonType
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(checkCondition(allObjects[listItems[listItemIndex]] && allObjects[listItems[listItemIndex]].common && allObjects[listItems[listItemIndex]].common.type, selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
						
						case "commonRole":
						if(selector.modifier == "add") { //Add commonRole
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1 && checkCondition(allObjects[object] && allObjects[object].common && allObjects[object].common.role, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove commonRole
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(checkCondition(allObjects[listItems[listItemIndex]] && allObjects[listItems[listItemIndex]].common && allObjects[listItems[listItemIndex]].common.role, selector.operator, selector.value, ',')){
									listItems.splice(listItemIndex, 1);
									listItemIndex--; //because splicing inside the loop re-indexes the array
								}
							};
						}
						break;
					}
				};
				//--Filtering Aliases
				if (this.config.lists[configListIndex].filterAliases) {
					this.log.debug("...filtering Aliases...");
					let removeTheseItems = [];
					for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
						if(checkCondition(listItems[listItemIndex], "nbw", "alias.")) continue;
						let itemAlias = allObjects[listItems[listItemIndex]] && allObjects[listItems[listItemIndex]].common && allObjects[listItems[listItemIndex]].common.alias;
						let itemAliasLinks = [];
						if (itemAlias && itemAlias.id) {
							if (typeof itemAlias.id == "string"){
								itemAliasLinks.push(itemAlias.id);
							} else {
								if (itemAlias.id && itemAlias.id.read) itemAliasLinks.push(itemAlias.id.read);
								if (itemAlias.id && itemAlias.id.write) itemAliasLinks.push(itemAlias.id.write);
							}
						}
						for(let itemAliasLinkIndex = 0; itemAliasLinkIndex < itemAliasLinks.length; itemAliasLinkIndex++){
							if(listItems.indexOf(itemAliasLinks[itemAliasLinkIndex]) > -1) removeTheseItems.push(itemAliasLinks[itemAliasLinkIndex]);
						}
					}
					for(let removeTheseItemIndex = 0; removeTheseItemIndex < removeTheseItems.length; removeTheseItemIndex++){
						let listItemsRemoveIndex = listItems.indexOf(removeTheseItems[removeTheseItemIndex]);
						if (listItemsRemoveIndex > -1) {
							listItems.splice(listItemsRemoveIndex, 1);
						}
					}
					this.log.debug("...found and removed " + removeTheseItems.length + " items which had aliases...");
				}
				//--Sort
				listItems.sort();
				//--Create TOTAL-objects and set States
				if (listItems.length){
					await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL", 				{type: "state"}, 	{name: listName, 	type: "number", 	role: "value", 		desc: "List created by iQontrol"}, false, listItems.length);
					await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_LIST", 			{type: "state"}, 	{name: listName, 	type: "string", 	role: "list", 		desc: "List created by iQontrol"}, false, listItems.join(', '));
					await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_LIST_JSON", 	{type: "state"}, 	{name: listName, 	type: "json", 		role: "list.json", 	desc: "List created by iQontrol"}, {iQontrolDatapointList: true}, JSON.stringify(listItems));
					//--Create optional NAMES and PARENT_NAMES lists
					let names = [];
					let parentNames = [];
					if (this.config.lists[configListIndex].createNamesList || this.config.lists[configListIndex].createParentNamesList) {
						for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
							names.push(allObjects[listItems[listItemIndex]] && allObjects[listItems[listItemIndex]].common && allObjects[listItems[listItemIndex]].common.name || listItems[listItemIndex]);
							let parentName = allObjects[listItems[listItemIndex].substring(0, listItems[listItemIndex].lastIndexOf('.'))] && allObjects[listItems[listItemIndex].substring(0, listItems[listItemIndex].lastIndexOf('.'))].common && allObjects[listItems[listItemIndex].substring(0, listItems[listItemIndex].lastIndexOf('.'))].common.name || listItems[listItemIndex];
							if(typeof parentName == "object") {
								if(parentName[that.systemLanguage]) parentName = parentName["en"];
								else if(parentName["en"]) parentName = parentName["en"];
								else if(Object.keys(parentName).length && typeof Object.keys(parentName)[0] == "string" && parentName[Object.keys(parentName)[0]]) parentName = parentName[Object.keys(parentName)[0]];
							}
							parentNames.push(parentName);
						}
					}
					names.sort();
					parentNames.sort();
					if (this.config.lists[configListIndex].createNamesList) {
						await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_NAMES_LIST", 			{type: "state"}, 	{name: listName, 	type: "string", 	role: "list", 		desc: "List created by iQontrol"}, false, names.join(', '));
						//await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_NAMES_LIST_JSON", 		{type: "state"}, 	{name: listName, 	type: "json", 		role: "list.json", 	desc: "List created by iQontrol"}, false, JSON.stringify(names));
					}
					if (this.config.lists[configListIndex].createParentNamesList) {
						await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_PARENTNAMES_LIST", 		{type: "state"}, 	{name: listName, 	type: "string", 	role: "list", 		desc: "List created by iQontrol"}, false, parentNames.join(', '));
						//await this.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + ".TOTAL_PARENTNAMES_LIST_JSON", {type: "state"}, 	{name: listName, 	type: "json", 		role: "list.json", 	desc: "List created by iQontrol"}, false, JSON.stringify(parentNames));
					}
				}
				//--Create entry the lists-Array
				lists.push({
					name: listName, 
					listItems: listItems, 
					counterFunctions: [], 
					counterTimeout: false,
					calculationItems: [],
					calculationFunctions: [],
					calculationTimeouts: [], 
					combinationItems: [],
					combinationFunctions: [],
					combinationTimeouts: []
				});
				let listIndex = lists.length - 1;
				//--##### Counters #####
				if(this.config.lists[configListIndex].counters) for(let counterIndex = 0; counterIndex < this.config.lists[configListIndex].counters.length; counterIndex++){
					this.log.debug("...processing counter " + listName + "_" + this.config.lists[configListIndex].counters[counterIndex].name + "...");
					let counterName = this.config.lists[configListIndex].counters[counterIndex].name || counterIndex.toString();
					//Create counter-objects
					let idRoot = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counterName);
					let commonName = listName + " - " + counterName;
					await this.createOrUpdateObject(idRoot, 								{type: "state"}, 	{name: commonName, 	type: "number", 	role: "value", 		unit: this.config.lists[configListIndex].counters[counterIndex].unit || "", 	desc: "List created by iQontrol"});
					await this.createOrUpdateObject(idRoot + "_LIST", 						{type: "state"}, 	{name: commonName, 	type: "string", 	role: "list",		desc: "List created by iQontrol"});
					await this.createOrUpdateObject(idRoot + "_LIST_JSON",					{type: "state"}, 	{name: commonName, 	type: "json", 		role: "list.json",	desc: "List created by iQontrol"}, {iQontrolDatapointList: true});

					//Names
					if (this.config.lists[configListIndex].createNamesList) {
						await this.createOrUpdateObject(idRoot + "_NAMES_LIST",				{type: "state"}, 	{name: commonName, 	type: "string", 	role: "list",		desc: "List created by iQontrol"});
						//await this.createOrUpdateObject(idRoot + "_NAMES_LIST_JSON",		{type: "state"}, 	{name: commonName, 	type: "json", 		role: "list.json",	desc: "List created by iQontrol"});
					}
					//ParentNames
					if (this.config.lists[configListIndex].createParentNamesList) {
						await this.createOrUpdateObject(idRoot + "_PARENTNAMES_LIST",		{type: "state"}, 	{name: commonName, 	type: "string", 	role: "list",		desc: "List created by iQontrol"});
						//await this.createOrUpdateObject(idRoot + "_PARENTNAMES_LIST_JSON",	{type: "state"}, 	{name: commonName, 	type: "json", 		role: "list.json",	desc: "List created by iQontrol"});
					}
					//-- --Creating counterFunctions
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let counter = that.config.lists[configListIndex].counters[counterIndex];
						let counterFunction = async function(_listItems, triggeredBy){ // ###### COUNTER FUNCTION ###### --> 
							that.log.debug("COUNTER " + listName + " " + counter.name + " function started, TRIGGERED BY " + triggeredBy);
							counter.listItems = [];
							counter.repeatTimeouts = [];
							counter.conditions = counter.conditions || [];
							//-- -- -- --Loop through the listItems the counter belongs to
							for(let _listItemIndex = 0; _listItemIndex < _listItems.length; _listItemIndex++){
								let conditionFullyFulfilled = false;
								let conditionPartFulfilled = (counter.conditions.length > 0);
								//-- -- -- -- --Loop through the conditions of this counter and check, if this list item fulfills als conditions
								for(let conditionIndex = 0; conditionIndex < counter.conditions.length; conditionIndex++){
									if(counter.conditions[conditionIndex].name == "||"){ //New condition OR-Partial
										that.log.silly("COUNTER " + listName + " " + counter.name + ", item " + _listItems[_listItemIndex] + " |||| New OR-Part");
										if(conditionPartFulfilled) conditionFullyFulfilled = true;
										conditionPartFulfilled = true;
									}
									let value;
									if(!usedStates[_listItems[_listItemIndex]]) usedStates[_listItems[_listItemIndex]] = await that.getForeignStateAsync(_listItems[_listItemIndex]);
									switch(counter.conditions[conditionIndex].type){
										case "value":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].val;
										break;
										
										case "valuelistValue":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].val;
										if(allObjects[_listItems[_listItemIndex]] && allObjects[_listItems[_listItemIndex]].common && allObjects[_listItems[_listItemIndex]].common.states && typeof allObjects[_listItems[_listItemIndex]].common.states[value] != "undefined") {
											value = allObjects[_listItems[_listItemIndex]].common.states[value];
										}
										break;
										
										case "ack":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].ack;
										break;

										case "lc":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].lc;
										break;

										case "lcs":
										value = (new Date() - (usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].lc || 0))/1000;
										counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
										break;

										case "ts":
										value = usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].ts;
										break;

										case "tss":
										value = (new Date() - (usedStates[_listItems[_listItemIndex]] && usedStates[_listItems[_listItemIndex]].lc || 0))/1000;
										counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
										break;
									}
									let check = checkCondition(value, counter.conditions[conditionIndex].operator, counter.conditions[conditionIndex].value, ',');
									conditionPartFulfilled = conditionPartFulfilled && check;
									that.log.silly("COUNTER " + listName + " " + counter.name + ", item " + _listItems[_listItemIndex] + " >>>> check condition " + (conditionIndex + 1) + " von " + counter.conditions.length + ": type: " + counter.conditions[conditionIndex].type + ", value: " + value + ", op: " + counter.conditions[conditionIndex].operator + ", condVal: " + counter.conditions[conditionIndex].value + " --> check: " + check + " ==> fulfilled: " + conditionPartFulfilled);
									//if(conditionFullyFulfilled) break;
								}
								if(conditionPartFulfilled) conditionFullyFulfilled = true;
								that.log.silly("COUNTER " + listName + " " + counter.name + ", item: " + _listItems[_listItemIndex] + " >>>>>>>> check completed ==> fulfilled: " + conditionFullyFulfilled);
								if(conditionFullyFulfilled) counter.listItems.push(_listItems[_listItemIndex]);
							}
							counter.listItems.sort();
							that.log.info("COUNTER " + listName + " " + counter.name + ": " + counter.listItems.length + " of " + lists[listIndex].listItems.length);
							//-- -- -- --Set States
							let objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name);
							await that.setStateValue(objId, counter.listItems.length);
							objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_LIST";
							await that.setStateValue(objId, counter.listItems.join(', '));
							objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_LIST_JSON";
							await that.setStateValue(objId, JSON.stringify(counter.listItems));
							//Names and ParentNames
							if (that.config.lists[configListIndex].createNamesList || that.config.lists[configListIndex].createParentNamesList) {
								let names = [];
								let parentNames = [];
								for(let counterListItemIndex = 0; counterListItemIndex < counter.listItems.length; counterListItemIndex++){
									names.push(allObjects[counter.listItems[counterListItemIndex]] && allObjects[counter.listItems[counterListItemIndex]].common && allObjects[counter.listItems[counterListItemIndex]].common.name || counter.listItems[counterListItemIndex]);
									let parentName = allObjects[counter.listItems[counterListItemIndex].substring(0, counter.listItems[counterListItemIndex].lastIndexOf('.'))] && allObjects[counter.listItems[counterListItemIndex].substring(0, counter.listItems[counterListItemIndex].lastIndexOf('.'))].common && allObjects[counter.listItems[counterListItemIndex].substring(0, counter.listItems[counterListItemIndex].lastIndexOf('.'))].common.name || counter.listItems[counterListItemIndex];
									if(typeof parentName == "object") {
										if(parentName[that.systemLanguage]) parentName = parentName["en"];
										else if(parentName["en"]) parentName = parentName["en"];
										else if(Object.keys(parentName).length && typeof Object.keys(parentName)[0] == "string" && parentName[Object.keys(parentName)[0]]) parentName = parentName[Object.keys(parentName)[0]];
									}
									parentNames.push(parentName);
								}
								names.sort();
								parentNames.sort();
								if (that.config.lists[configListIndex].createNamesList) {
									objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_NAMES_LIST";
									await that.setStateValue(objId, names.join(', '));
									objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_NAMES_LIST_JSON";
									await that.setStateValue(objId, JSON.stringify(names));
								}
								if (that.config.lists[configListIndex].createParentNamesList) {
									objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_PARENTNAMES_LIST";
									await that.setStateValue(objId, parentNames.join(', '));
									objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_PARENTNAMES_LIST_JSON";
									await that.setStateValue(objId, JSON.stringify(parentNames));
								}
							}
							//-- -- -- --Call repeatTimeouts (for conditions, that contain distances to timestamps as argument, the counterFunction has to be called again after that distance)
							counter.repeatTimeouts = removeDuplicates(counter.repeatTimeouts);
							if(triggeredBy != "triggeredByRepeatTimeout" && triggeredBy != "triggeredByInterval" && triggeredBy != "triggeredByCreation") for(let repeatTimeoutIndex = 0; repeatTimeoutIndex < counter.repeatTimeouts.length; repeatTimeoutIndex++){
								if(counter.repeatTimeouts[repeatTimeoutIndex] && !isNaN(counter.repeatTimeouts[repeatTimeoutIndex])){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										let _listIndex = listIndex;
										that.log.debug("set trigger repeat-timeout for list " + lists[_listIndex].name + " to " + parseInt(counter.repeatTimeouts[repeatTimeoutIndex] + "s"));
										setTimeout(function(){
											if(!lists[_listIndex].counterTimeout) lists[_listIndex].counterTimeout = setTimeout(function(){ //Debouncing
												for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){							
													lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, "triggeredByRepeatTimeout");
												}
												lists[_listIndex].counterTimeout = false;
											} , 200);
										}, parseInt(counter.repeatTimeouts[repeatTimeoutIndex] * 1000));
									})(); //<--End Closure
								}
							}
						}; //<-- End of ##### COUNTER FUNCTION #####
						lists[listIndex].counterFunctions.push(counterFunction);
					})(); //<--End Closure
				}
				//--Subscribe to the list items
				this.log.debug("...subscribing to items of list " + listName + " (" + listItems.length + " objects)...");										
				this.subscribeForeignStates(listItems);
				//--Start trigger interval (if activated)
				if (this.config.lists[configListIndex].triggerInterval && !isNaN(this.config.lists[configListIndex].triggerInterval)) {
					this.log.debug("...setting trigger interval of list " + listName + " to " + parseInt(that.config.lists[configListIndex].triggerInterval) + "s...");
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _listIndex = listIndex;
						triggerIntervals.push(setInterval(function(){
							if(!lists[_listIndex].counterTimeout) lists[_listIndex].counterTimeout = setTimeout(function(){ //Debouncing
								for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){							
									lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, "triggeredByInterval");
								}
								lists[_listIndex].counterTimeout = false;
							} , 200);
						}, parseInt(that.config.lists[configListIndex].triggerInterval * 1000)));
					})(); //<--End Closure
				} else {
					this.log.debug("...no trigger interval for list " + listName + "...");
				}
				//--Call function now one time
				this.log.debug("...triggering counter functions of list " + listName + " by creation...");
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					let _listIndex = listIndex;
					setTimeout(function(){
						if(!lists[_listIndex].counterTimeout) lists[_listIndex].counterTimeout = setTimeout(function(){ //Debouncing
							for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){
								that.log.silly("...triggering counter function " + counterFunctionIndex + "/" + lists[_listIndex].counterFunctions.length + " of list " + lists[_listIndex].name + " by creation NOW...");
								lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, "triggeredByCreation");
							}
							lists[_listIndex].counterTimeout = false;
						} , 200);
					}, 200);
				})(); //<--End Closure
				//--##### Calculations #####
				if(this.config.lists[configListIndex].calculations) for(let calculationIndex = 0; calculationIndex < this.config.lists[configListIndex].calculations.length; calculationIndex++){
					this.log.debug("...processing calculation " + listName + "_" + this.config.lists[configListIndex].calculations[calculationIndex].name + "...");
					let calculationName = this.config.lists[configListIndex].calculations[calculationIndex].name || "Calculation " + calculationIndex.toString();
					//-- --Create combination-object
					await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(calculationName),		{type: "state"}, 	{name: listName + " - " + calculationName, 		unit: this.config.lists[configListIndex].calculations[calculationIndex].unit || "",		desc: "Calculation created by iQontrol"});
					//-- --Get used IDs
					lists[listIndex].calculationItems[calculationIndex] = [];
					if (that.config.lists[configListIndex].calculations[calculationIndex].calculationSteps) for(let calculationStepIndex = 0; calculationStepIndex < that.config.lists[configListIndex].calculations[calculationIndex].calculationSteps.length; calculationStepIndex++){
						let id = that.config.lists[configListIndex].calculations[calculationIndex].calculationSteps[calculationStepIndex].id;
						lists[listIndex].calculationItems[calculationIndex].push(id);
					}
					//-- --Creating calculationFunctions
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _configListIndex = configListIndex;
						let _calculationIndex = calculationIndex;
						let calculation = that.config.lists[configListIndex].calculations[_calculationIndex];
						let calculationFunction = async function(_listItems, triggeredBy){ // ###### CALCULATION FUNCTION ###### --> 
							that.log.debug("CALCULATION " + listName + " " + calculation.name + " function started, TRIGGERED BY " + triggeredBy);
							calculation.calculationSteps = calculation.calculationSteps || [];
							let result;
							let calculationType = null;
							let iQontrolDatapointList = null;
							//-- -- --Loop through the calculationSteps of this counter
							if (calculation.calculationSteps) for(let calculationStepIndex = 0; calculationStepIndex < calculation.calculationSteps.length; calculationStepIndex++){
								let id = calculation.calculationSteps[calculationStepIndex].id;
								if(!usedStates[id]) usedStates[id] = await that.getForeignStateAsync(id);
								let value = usedStates[id] && usedStates[id].val;
								iQontrolDatapointList = (iQontrolDatapointList == null ? true : iQontrolDatapointList) && allObjects[id] && allObjects[id].native && allObjects[id].native.iQontrolDatapointList;
								if(isNaN(value)) value = tryParseJSON(value);
								if (typeof value == udef) continue;
								if (calculationType == null) {
									if(Array.isArray(value)){
										calculationType = "arrays";
										result = [];
									} else if (typeof value == "object") {
										calculationType = "objects";
										iQontrolDatapointList = false;
										result = {};
									} else if (!isNaN(value)) {
										calculationType = "numbers";
										iQontrolDatapointList = false;
										result = 0;
									} else {
										continue;
									}
								}
								that.log.silly("CALCULATION " + listName + "_" + calculation.name + " value: " + value + ", typeof: " + typeof value + ", isArray: " + Array.isArray(value) + ", isNaN: " + isNaN(value) + ", calculationType: " + calculationType);
								if (calculationType == "arrays" && Array.isArray(value)){
									switch (calculation.calculationSteps[calculationStepIndex].operator){
										case "+":
										result = result.concat(value);
										break;
										
										case "-":
										result = result.filter(o => !value.includes(o));
										break;										
									}
								} else if (calculationType == "objects" && typeof value == "object"){
									switch (calculation.calculationSteps[calculationStepIndex].operator){
										case "+":
										Object.assign(result, value);
										break;
										
										case "-":
										Object.keys(value).forEach(key => {if(typeof result[key] != "undefined") delete result[key]});
										break;										
									}
								} else if (calculationType == "numbers" && !isNaN(value)){
									if (!value) value = 0;
									value = parseFloat(value);
									switch (calculation.calculationSteps[calculationStepIndex].operator){
										case "+":
										result += value;
										break;
										
										case "-":
										result -= value;
										break;
										
										case "*":
										result *= value;
										break;
										
										case "\/":
										if (value != 0) result /= value;
										break;									
									}
								} else {
									continue;
								}
							}
							if(calculationType == "arrays" || calculationType == "objects") result = JSON.stringify(result);
							that.log.info("CALCULATION " + listName + " " + calculation.name + " result: " + result);
							//-- -- -- --Create calculation-object and set state
							let type = "number";
							let role = "value";
							let native = false;
							switch (calculationType){
								case "objects": case "arrays": 
								type = "json"; 
								role = "list.json"; 
								if(iQontrolDatapointList) native = {iQontrolDatapointList: true};
								break;
							}
							await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(calculation.name), false, {type: type, 	role: role}, native, result);
						}; //<-- End of ##### CALCULATION FUNCTION #####
						lists[listIndex].calculationFunctions.push(calculationFunction);
					})(); //<--End Closure
					//-- --Subscribe to the calculation items
					this.log.debug("...subscribing to items of calculation " + listName + " " + that.config.lists[configListIndex].calculations[calculationIndex].name + " (" + lists[listIndex].calculationItems[calculationIndex].length + " objects)...");										
					this.subscribeForeignStates(lists[listIndex].calculationItems[calculationIndex]);
					//-- --Call function now one time
					this.log.debug("...triggering calculation function " + listName + " " + that.config.lists[configListIndex].calculations[calculationIndex].name + " by creation...");
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _listIndex = listIndex;
						let _calculationIndex = calculationIndex;
						setTimeout(function(){
							if(!lists[_listIndex].calculationTimeouts[_calculationIndex]) lists[_listIndex].calculationTimeouts[_calculationIndex] = setTimeout(function(){ //Debouncing
								that.log.silly("...triggering calculation function " + _calculationIndex + " of list " + lists[_listIndex].name + " by creation NOW...");
								lists[_listIndex].calculationFunctions[_calculationIndex](lists[_listIndex].calculationItems[_calculationIndex], "triggeredByCreation");
								lists[_listIndex].calculationTimeouts[_calculationIndex] = false;
							} , 200);
						}, 200);
					})(); //<--End Closure
				}
				//--##### Combinations #####
				if(this.config.lists[configListIndex].combinations) for(let combinationIndex = 0; combinationIndex < this.config.lists[configListIndex].combinations.length; combinationIndex++){
					this.log.debug("...processing combination " + listName + " " + this.config.lists[configListIndex].combinations[combinationIndex].name + "...");
					let combinationName = this.config.lists[configListIndex].combinations[combinationIndex].name || "Combination " + combinationIndex.toString();
					//-- --Create combination-object
					await that.createOrUpdateObject("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(combinationName),		{type: "state"}, 	{name: listName + " - " + combinationName, 		type: "string", 	role: "text",		unit: this.config.lists[configListIndex].combinations[combinationIndex].unit || "",		desc: "Combination created by iQontrol"});
					//-- --Get used IDs
					lists[listIndex].combinationItems[combinationIndex] = [];
					if (that.config.lists[configListIndex].combinations[combinationIndex].combinationSteps) for(let combinationStepIndex = 0; combinationStepIndex < that.config.lists[configListIndex].combinations[combinationIndex].combinationSteps.length; combinationStepIndex++){
						let id = that.config.lists[configListIndex].combinations[combinationIndex].combinationSteps[combinationStepIndex].id;
						lists[listIndex].combinationItems[combinationIndex].push(id);
					}
					//-- --Creating combinationFunctions
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let combination = that.config.lists[configListIndex].combinations[combinationIndex];
						let combinationFunction = async function(_listItems, triggeredBy){ // ###### COMBINATION FUNCTION ###### --> 
							that.log.debug("COMBINATION " + listName + "_" + combination.name + " function started, TRIGGERED BY " + triggeredBy);
							combination.combinationSteps = combination.combinationSteps || [];
							let result = "";
							//-- -- --Loop through the combinationSteps of this counter
							if (combination.combinationSteps) for(let combinationStepIndex = 0; combinationStepIndex < combination.combinationSteps.length; combinationStepIndex++){
								let id = combination.combinationSteps[combinationStepIndex].id;
								let value;
								if(!usedStates[id]) usedStates[id] = await that.getForeignStateAsync(id);
								switch(combination.combinationSteps[combinationStepIndex].type){
									case "valuelistValue":
									value = usedStates[id] && usedStates[id].val;
									if(allObjects[id] && allObjects[id].common && allObjects[id].common.states && typeof allObjects[id].common.states[value] != "undefined") {
										value = allObjects[id].common.states[value];
									}
									break;
									
									case "ack":
									value = usedStates[id] && usedStates[id].ack;
									break;

									case "lc":
									value = usedStates[id] && usedStates[id].lc;
									break;

									case "lcs":
									value = (new Date() - (usedStates[id] && usedStates[id].lc || 0))/1000;
									counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
									break;

									case "ts":
									value = usedStates[id] && usedStates[id].ts;
									break;

									case "tss":
									value = (new Date() - (usedStates[id] && usedStates[id].lc || 0))/1000;
									counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
									break;

									case "value": case "": default:
									value = usedStates[id] && usedStates[id].val;
									break;
								}
								if (typeof value == udef) continue;
								let onlyIfOperator = combination.combinationSteps[combinationStepIndex].onlyIfOperator;
								that.log.silly("COMBINATION " + listName + "_" + combination.name + " value: " + value + ", onlyIfOperator: " + onlyIfOperator + ", onlyIfValue: " + combination.combinationSteps[combinationStepIndex].onlyIfValue);
								if(!onlyIfOperator || (checkCondition(value, onlyIfOperator, combination.combinationSteps[combinationStepIndex].onlyIfValue))){
									if(combination.combinationSteps[combinationStepIndex].prefix) result += combination.combinationSteps[combinationStepIndex].prefix;
									if(!combination.combinationSteps[combinationStepIndex].onlyIfJustPrefix) result += value;
									if(!combination.combinationSteps[combinationStepIndex].onlyIfJustPrefix && combination.combinationSteps[combinationStepIndex].postfix) result += combination.combinationSteps[combinationStepIndex].postfix;
								} else {
									if(combination.combinationSteps[combinationStepIndex].onlyIfElse) result += combination.combinationSteps[combinationStepIndex].onlyIfElse;
								}
							}
							that.log.info("COMBINATION " + listName + " " + combination.name + " result: " + result);
							//-- -- -- --Set States
							result = result.replace(/\\r\\n/g, "\r\n");
							await that.setStateValue("Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(combination.name), result);
						}; //<-- End of ##### COMBINATION FUNCTION #####
						lists[listIndex].combinationFunctions.push(combinationFunction);
					})(); //<--End Closure
					//-- --Subscribe to the combination items
					this.log.debug("...subscribing to items of combination " + listName + " " + that.config.lists[configListIndex].combinations[combinationIndex].name + " (" + lists[listIndex].combinationItems[combinationIndex].length + " objects)...");										
					this.subscribeForeignStates(lists[listIndex].combinationItems[combinationIndex]);
					//-- --Call function now one time
					this.log.debug("...triggering combination function " + listName + " " + that.config.lists[configListIndex].combinations[combinationIndex].name + " by creation...");
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _listIndex = listIndex;
						let _combinationIndex = combinationIndex;
						setTimeout(function(){
							if(!lists[_listIndex].combinationTimeouts[_combinationIndex]) lists[_listIndex].combinationTimeouts[_combinationIndex] = setTimeout(function(){ //Debouncing
								that.log.silly("...triggering combination function " + _combinationIndex + " of list " + lists[_listIndex].name + " by creation NOW...");
								lists[_listIndex].combinationFunctions[_combinationIndex](lists[_listIndex].combinationItems[_combinationIndex], "triggeredByCreation");
								lists[_listIndex].combinationTimeouts[_combinationIndex] = false;
							} , 200);
						}, 200);
					})(); //<--End Closure
				}
			}
		}
	}

	updateLists(id){
		for(let listIndex = 0; listIndex < lists.length; listIndex++){
			//Check, if id belongs to listItems and then trigger counterFunctions
			if(lists[listIndex].listItems.indexOf(id) > -1 && !lists[listIndex].counterTimeout){
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					let _id = id;
					let _listIndex = listIndex;
					lists[_listIndex].counterTimeout = setTimeout(function(){ //Debouncing
						for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){							
							lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, _id);
						}
						lists[_listIndex].counterTimeout = false;
					} , 200);
				})(); //<--End Closure
			}
			//Check, if id belongs to calculation
			for(let calculationIndex = 0; calculationIndex < lists[listIndex].calculationFunctions.length; calculationIndex++){
				if(lists[listIndex].calculationItems[calculationIndex].indexOf(id) > -1 && !lists[listIndex].calculationTimeouts[calculationIndex]){
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _id = id;
						let _listIndex = listIndex;
						let _calculationIndex = calculationIndex;
						lists[_listIndex].calculationTimeouts[_calculationIndex] = setTimeout(function(){ //Debouncing
							lists[_listIndex].calculationFunctions[_calculationIndex](lists[_listIndex].calculationItems[_calculationIndex], _id);
							lists[_listIndex].calculationTimeouts[_calculationIndex] = false;
						} , 200);
					})(); //<--End Closure
				}
			}
			//Check, if id belongs to combinations
			for(let combinationIndex = 0; combinationIndex < lists[listIndex].combinationFunctions.length; combinationIndex++){
				if(lists[listIndex].combinationItems[combinationIndex].indexOf(id) > -1 && !lists[listIndex].combinationTimeouts[combinationIndex]){
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _id = id;
						let _listIndex = listIndex;
						let _combinationIndex = combinationIndex;
						lists[_listIndex].combinationTimeouts[_combinationIndex] = setTimeout(function(){ //Debouncing
							lists[_listIndex].combinationFunctions[_combinationIndex](lists[_listIndex].combinationItems[_combinationIndex], _id);
							lists[_listIndex].combinationTimeouts[_combinationIndex] = false;
						} , 200);
					})(); //<--End Closure
				}
			}
		}
	}

	//++++++++++ OBJECT AND STATES-FUNCTIONS ++++++++++
	async createOrUpdateObject(objId, rootOptions, commonOptions, nativeOptions, setValue){
		if (!objId) return;
		let that = this;
		let created = false;
		let obj;
		if (allObjects[objId]) {
			this.log.silly("createOrUpdateObject: Object " + objId + " found in allObjects");
			obj = allObjects[objId];
		} else {			
			this.log.silly("createOrUpdateObject: Object " + objId + " NOT found in allObjects, fetching it now from ioBroker...");
			obj = {...await this.getObjectAsync(objId, 'state'), ...await this.getObjectAsync(objId, 'channel'), ...await this.getObjectAsync(objId, 'device'), ...await this.getObjectAsync(objId, 'enum')};
		}
		if (!obj){
			this.log.silly("createOrUpdateObject: Object " + objId + " NOT found - creating a new object...");
			created = true;
			obj = {
				"type": "state",
				"common": {
					"name": objId,
					"desc": "Created by iQontrol",
					"type": "string",
					"role": "",
					"icon": ""
				},
				"native": {}
			};
		}
		if (rootOptions) Object.assign(obj, rootOptions);
		if (!obj.common) obj.common = {};
		if (commonOptions) {
			Object.assign(obj.common, commonOptions);
		}
		if (!obj.native) obj.native = {};
		if (nativeOptions) {
			Object.assign(obj.native, nativeOptions);
		}
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(async function(){ 
			that.log.debug((created ? "created" : "updated") + " object: " + objId); 
			if (setValue) await that.setStateValue(objId, setValue);
		}, function(err){
			that.log.error("ERROR " + (created ? "creating" : "updating") + " object: " + objId + ": " + err);
		});
	}
		
	async setStateValue(id, value){
		let that = this;
		await this.setStateAsync(id, value).then(function(){ 
			that.log.debug("set state: " + id + " --> " + value); 
		}, function(err){
			that.log.debug("ERROR setting state " + id + " --> " + value + ": " + err); 
		});
	}

	async deleteUnusedObjects(){
		let that = this;
		this.getAdapterObjectsAsync().then(function(obj){
			that.log.debug("Got Adapter Objects");
			var ids = []
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) continue;
				ids.push(key);
			}
			that.log.debug("Adapter Object IDs: " + ids.length + " (" + ids.toString() + ")");
			for(var i = 0; i < ids.length; i++){
				let filter = ["Images"];
				let name = ids[i].substr(that.namespace.length + 1);
				if(createdObjects.indexOf(name) >= 0 || filter.indexOf(name) >= 0){
					that.log.silly("DeviceObject " + name + " ist still in use - not deleting.")
				} else {
					if(name.substr(-1) !== '.'){
						that.log.debug("<<<deleteObject " + name);
						that.delObjectAsync(name).then(function(){ 
							that.log.debug("deleted Object " + name);
						}, function(err){
							that.log.debug("ERROR deleting Object " + name + ": " + err); 
						});
					}
				}
			}
		});
	}
	
	//++++++++++ INITIALIZATION ++++++++++
	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here
		await this.createInfoConnection();
		this.setState('info.connection', { val: false, ack: true });
		
		this.log.info("Creating Popup States...");
		await this.createPopup();
		
		this.log.info("Creating Widget States...");
		await this.createWidgets();
		
		if(this.config.listsActive){
			this.log.info("Creating List States...");
			this.log.debug("...fetching all objects from ioBroker...");
			allObjects = {...await this.getForeignObjectsAsync('', 'state'), ...await this.getForeignObjectsAsync('', 'channel'), ...await this.getForeignObjectsAsync('', 'device'), ...await this.getForeignObjectsAsync('', 'enum')};
			await this.createLists();
		} else {
			this.log.info("Lists deactivated.");			
		}
		
		this.log.info("Deleting unused Objects...");
		this.deleteUnusedObjects();
		
		this.subscribeStates("*");
		
		this.setState('info.connection', { val: true, ack: true });
		this.log.info("iQontrol ready.");
		
		
		//--------------------------------- HELP ------------------------------------
		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		// this.log.info("config option1: " + this.config.option1);
		// this.log.info("config option2: " + this.config.option2);
		//
		//
		// For every state in the system there has to be also an object of type state
		// Here a simple template for a boolean variable named "testVariable"
		// Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		//
		// await this.setObjectAsync("testVariable", {
		//	type: "state",
		//	common: {
		//		name: "testVariable",
		//		type: "boolean",
		//		role: "indicator",
		//		read: true,
		//		write: true,
		//	},
		//	native: {},
		// });
		//
		// in this template all states changes inside the adapters namespace are subscribed
		// this.subscribeStates("*");
		//
		//
		// setState examples
		// you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		//
		// the variable testVariable is set to true as command (ack=false)
		// await this.setStateAsync("testVariable", true);
		//
		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system
		// await this.setStateAsync("testVariable", { val: true, ack: true });
		//
		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		// await this.setStateAsync("testVariable", { val: true, ack: true, expire: 30 });
		//
		// examples for the checkPassword/checkGroup functions
		// let result = await this.checkPasswordAsync("admin", "iobroker");
		// this.log.info("check user admin pw ioboker: " + result);
		//
		// result = await this.checkGroupAsync("admin", "admin");
		// this.log.info("check group user admin group admin: " + result);
		//---------------------------------------------------------------------------
	}

	//++++++++++ SOCKET-FUNCTIONS ++++++++++
	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			//Stop trigger intervals
			this.log.info("Stop trigger intervals");
			for(let triggerIntervalIndex = 0; triggerIntervalIndex < triggerIntervals.length; triggerIntervalIndex++){
				clearInterval(triggerIntervals[triggerIntervalIndex]);
			}
			triggerIntervals = [];
			this.log.info("cleaned everything up...");
			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed object changes
	 * @param {string} id
	 * @param {ioBroker.Object | null | undefined} obj
	 */
	onObjectChange(id, obj) {
		if(this.config.listsActive){
			if (obj) {
				// The object was changed
				this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
				allObjects[id] = obj;
			} else {
				// The object was deleted
				this.log.info(`object ${id} deleted`);
				if(allObjects[id]) delete allObjects.id;
			}
		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		if (state) {
			// The state was changed
			this.log.silly(`state ${id} updated: ${state.val} (ack = ${state.ack}) ts = ${state.ts} lc = ${state.lc} state changed: ${state.ts == state.lc}`);
			switch(id){
				case this.namespace + ".Popup.CLEAR":
					this.log.info("Popup.CLEAR");
					this.setState('Popup.Duration', { val: "", ack: true });
					this.setState('Popup.ClickedValue', { val: "", ack: true });
					this.setState('Popup.ClickedDestinationState', { val: "", ack: true });
					this.setState('Popup.ButtonNames', { val: "", ack: true });
					this.setState('Popup.ButtonValues', { val: "", ack: true });
					this.setState('Popup.ButtonDestinationStates', { val: "", ack: true });
					this.setState('Popup.ButtonCloses', { val: "", ack: true });
					this.setState('Popup.Message', { val: "", ack: true });
				break;
			}
			if(this.config.listsActive && (state.lc == state.ts)) { //State has CHANGED
				usedStates[id] = state;
				this.updateLists(id);
			}
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
			if(this.config.listsActive) {
				delete usedStates[id];
				this.updateLists(id);
			}
		}
	}
		 
	/**
	 * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	 * Using this method requires "common.message" property to be set to true in io-package.json
	 * @param {ioBroker.Message} obj
	 */
	onMessage(obj) {
		if (typeof obj === "object" && obj.message) {
			if (obj.command === "send") {
				// e.g. send email or pushover or whatever
				this.log.info("send command");
				if(obj.message.PopupMessage){
					let PopupDuration = 0;
					if(typeof obj.message.PopupDuration !== "undefined" && !isNaN(obj.message.PopupDuration)){
						PopupDuration = parseInt(obj.message.PopupDuration);
					}
					let PopupClickedValue = "";
					if(typeof obj.message.PopupClickedValue !== "undefined"){
						PopupClickedValue = obj.message.PopupClickedValue;
					}
					let PopupClickedDestinationState = "";
					if(typeof obj.message.PopupClickedDestinationState !== "undefined"){
						PopupClickedDestinationState = obj.message.PopupClickedDestinationState;
					}
					let PopupButtonNames = "";
					if(typeof obj.message.PopupButtonNames !== "undefined"){
						PopupButtonNames = obj.message.PopupButtonNames;
					}
					let PopupButtonValues = "";
					if(typeof obj.message.PopupButtonValues !== "undefined"){
						PopupButtonValues = obj.message.PopupButtonValues;
					}
					let PopupButtonDestinationStates = "";
					if(typeof obj.message.PopupButtonDestinationStates !== "undefined"){
						PopupButtonDestinationStates = obj.message.PopupButtonDestinationStates;
					}
					let PopupButtonCloses = "";
					if(typeof obj.message.PopupButtonCloses !== "undefined"){
						PopupButtonCloses = obj.message.PopupButtonCloses;
					}
					this.log.debug("PopupDuration: " + PopupDuration);
					this.setState('Popup.Duration', { val: PopupDuration, ack: true });
					this.log.debug("PopupClickedValue: " + PopupClickedValue);
					this.setState('Popup.ClickedValue', { val: PopupClickedValue, ack: true });
					this.log.debug("PopupClickedDestinationState: " + PopupClickedDestinationState);
					this.setState('Popup.ClickedDestinationState', { val: PopupClickedDestinationState, ack: true });
					this.log.debug("PopupButtonNames: " + PopupButtonNames);
					this.setState('Popup.ButtonNames', { val: PopupButtonNames, ack: true });
					this.log.debug("PopupButtonValues: " + PopupButtonValues);
					this.setState('Popup.ButtonValues', { val: PopupButtonValues, ack: true });
					this.log.debug("PopupButtonDestinationStates: " + PopupButtonDestinationStates);
					this.setState('Popup.ButtonDestinationStates', { val: PopupButtonDestinationStates, ack: true });
					this.log.debug("PopupButtonCloses: " + PopupButtonCloses);
					this.setState('Popup.ButtonCloses', { val: PopupButtonCloses, ack: true });
					this.log.info("Popup Message: " + obj.message.PopupMessage);
					this.setState('Popup.Message', { val: obj.message.PopupMessage, ack: true });
				}
				// Send response in callback if required
				if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
			}
		}
	}
}

if (module.parent) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new Iqontrol(options);
} else {
	// otherwise start the instance directly
	new Iqontrol();
}
