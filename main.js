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

function idEncode(id){
	return id.replace(/[\.\]\[\*,;'"`<>?]/g, "_"); //Unallowed chars: .][*,;'"`<>?
}

function idEncodePointAllowed(id){
	return id.replace(/[\]\[\*,;'"`<>?]/g, "_"); //Unallowed chars: .][*,;'"`<>?
}

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

	//----------------------------------------------------------------------------
	async createInfoConnection(){
		let that = this;
		let objName = "Adapter Connection";
		let objId = "info.connection";
		let obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "Shows working adapter connection",
				"type": "boolean",
				"role": "indicator.connected",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});		
	}
	
	async createPopup(){
		let that = this;
		let objName = "Message";
		let objId = "Popup.Message";
		let obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "Message to be displayed",
				"type": "string",
				"role": "text",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Clear";
		objId = "Popup.CLEAR";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "Clear Popup Settings",
				"type": "boolean",
				"role": "button",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Display Duration";
		objId = "Popup.Duration";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "Display duration of message in ms (0 = until clicked)",
				"type": "number",
				"role": "timer",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Clicked Value";
		objId = "Popup.ClickedValue";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "Value that will be sent if popup is clicked",
				"type": "string",
				"role": "text",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Clicked Destination State";
		objId = "Popup.ClickedDestinationState";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "The value will be sent to this state if popup is clicked",
				"type": "string",
				"role": "text",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Popup Clicked";
		objId = "Popup.POPUP_CLICKED";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "The value will be sent to this datapoint if popup is clicked",
				"type": "string",
				"role": "text",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Button Names";
		objId = "Popup.ButtonNames";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "Comma-separated list of buttons that will be displayd under the popup",
				"type": "string",
				"role": "text",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Button Values";
		objId = "Popup.ButtonValues";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "Comma-separated list of values that will be sent if the button is clicked",
				"type": "string",
				"role": "text",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Button Destination States";
		objId = "Popup.ButtonDestinationStates";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "Comma-separated list of states, the value will be sent to if the button is clicked",
				"type": "string",
				"role": "text",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Button Closes";
		objId = "Popup.ButtonCloses";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "Comma-separated list of booleans (true/false) if the popup should close when the button is clicked",
				"type": "string",
				"role": "text",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
		objName = "Button Clicked";
		objId = "Popup.BUTTON_CLICKED";
		obj = {
			"type": "state",
			"common": {
				"name": objName,
				"desc": "The value will be sent to this datapoint if button is clicked",
				"type": "string",
				"role": "text",
				"icon": ""
			},
			"native": {}
		};
		createdObjects.push(objId);
		await this.setObjectAsync(objId, obj, true).then(function(){ 
			that.log.debug("created: " + objId); 
		}, function(err){
			that.log.error("ERROR creating " + objId + ": " + err);
		});
	}
	
	async createWidgets(){
		if(typeof this.config.widgetsDatapoints != 'undefined'){
			for(var index = 0; index < this.config.widgetsDatapoints.length; index++){
				let that = this;
				let objName = this.config.widgetsDatapoints[index].name || idEncodePointAllowed(this.config.widgetsDatapoints[index].id);
				let objId = "Widgets." + idEncodePointAllowed(this.config.widgetsDatapoints[index].id);
				let obj = {
					"type": "state",
					"common": {
						"name": objName,
						"desc": "created by iQontrol",
						"type": this.config.widgetsDatapoints[index].type || "string",
						"role": this.config.widgetsDatapoints[index].role || "",
						"icon": ""
					},
					"native": {}
				};
				if(this.config.widgetsDatapoints[index].min) obj.common.min = this.config.widgetsDatapoints[index].min;
				if(this.config.widgetsDatapoints[index].max) obj.common.max = this.config.widgetsDatapoints[index].max;
				if(this.config.widgetsDatapoints[index].def) obj.common.def = this.config.widgetsDatapoints[index].def;
				if(this.config.widgetsDatapoints[index].unit) obj.common.unit = this.config.widgetsDatapoints[index].unit;
				createdObjects.push(objId);
				await this.setObjectAsync(objId, obj, true).then(function(){ 
					that.log.debug("created: " + objId); 
				}, function(err){
					that.log.error("ERROR creating " + objId + ": " + err);
				});
			}
		}
	}
	
	async createLists(){
		if(typeof this.config.lists != 'undefined'){
			let that = this;
			//Lists
			for(let configListIndex = 0; configListIndex < this.config.lists.length; configListIndex++){
				if (!this.config.lists[configListIndex].active) continue;
				let listName = this.config.lists[configListIndex].name || configListIndex.toString();
				this.log.debug("Creating List " + listName + "...");
				let listItems = [];
				//--Selectors
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
						var enumerationMembers = allObjects[selector.value]?.common?.members || [];
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
						var enumerationMembers = allObjects[selector.value]?.common?.members || [];
						if(selector.modifier == "add") { //Add enumWithChilds
							for(let object in allObjects){
								let listItemIndex = listItems.indexOf(allObjects[object]._id);
								if(listItemIndex == -1){
									for(let enumerationMemberIndex = 0; enumerationMemberIndex < enumerationMembers.length; enumerationMemberIndex++){
										if(await this.checkCondition(allObjects[object]._id, "bw", enumerationMembers[enumerationMemberIndex], ',')) {
											listItems.push(allObjects[object]._id);
											//break;
										}
									}
								}
							};
						} else { //Remove enumWithChilds
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								for(let enumerationMemberIndex = 0; enumerationMemberIndex < enumerationMembers.length; enumerationMemberIndex++){
										if(await this.checkCondition(listItems[listItemIndex], "bw", enumerationMembers[enumerationMemberIndex], ',')) {
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
								if(listItemIndex == -1 && await this.checkCondition(allObjects[object]._id, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove ids
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(await this.checkCondition(listItems[listItemIndex], selector.operator, selector.value, ',')){
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
								if(listItemIndex == -1 && await this.checkCondition(allObjects[object].type, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove types
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(await this.checkCondition(allObjects[listItems[listItemIndex]].type, selector.operator, selector.value, ',')){
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
								if(listItemIndex == -1 && await this.checkCondition(allObjects[object]?.common?.type, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove commonType
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(await this.checkCondition(allObjects[listItems[listItemIndex]]?.common?.type, selector.operator, selector.value, ',')){
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
								if(listItemIndex == -1 && await this.checkCondition(allObjects[object]?.common?.role, selector.operator, selector.value, ',')) listItems.push(allObjects[object]._id);
							};
						} else { //Remove commonRole
							for(let listItemIndex = 0; listItemIndex < listItems.length; listItemIndex++){
								if(await this.checkCondition(allObjects[listItems[listItemIndex]]?.common?.role, selector.operator, selector.value, ',')){
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
						if(await this.checkCondition(listItems[listItemIndex], "nbw", "alias.")) continue;
						let itemAlias = allObjects[listItems[listItemIndex]]?.common?.alias;
						let itemAliasLinks = [];
						if (itemAlias?.id) {
							if (typeof itemAlias.id == "string"){
								itemAliasLinks.push(itemAlias.id);
							} else {
								if (itemAlias.id?.read) itemAliasLinks.push(itemAlias.id.read);
								if (itemAlias.id?.write) itemAliasLinks.push(itemAlias.id.write);
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
				let objName = listName;
				let objId = "Lists." + idEncodePointAllowed(objName) + ".TOTAL";
				let obj = {
					"type": "state",
					"common": {
						"name": objName,
						"desc": "List created by iQontrol",
						"type": "number",
						"role": "value",
						"icon": ""
					},
					"native": {}
				};
				createdObjects.push(objId);
				await this.setObjectAsync(objId, obj, true).then(async function(){ 
					that.log.debug("created: " + objId); 
					await that.setStateValue(objId, listItems.length);
				}, function(err){
					that.log.error("ERROR creating " + objId + ": " + err);
				});
				objId = "Lists." + idEncodePointAllowed(objName) + ".TOTAL_LIST";
				obj = {
					"type": "state",
					"common": {
						"name": objName,
						"desc": "List created by iQontrol",
						"type": "string",
						"role": "value",
						"icon": ""
					},
					"native": {}
				};
				createdObjects.push(objId);
				await this.setObjectAsync(objId, obj, true).then(async function(){ 
					that.log.debug("created: " + objId); 
					await that.setStateValue(objId, listItems.join(', '));
				}, function(err){
					that.log.error("ERROR creating " + objId + ": " + err);
				});
				objId = "Lists." + idEncodePointAllowed(objName) + ".TOTAL_LIST_JSON";
				obj = {
					"type": "state",
					"common": {
						"name": objName,
						"desc": "List created by iQontrol",
						"type": "json",
						"role": "value",
						"icon": ""
					},
					"native": {}
				};
				createdObjects.push(objId);
				await this.setObjectAsync(objId, obj, true).then(async function(){ 
					that.log.debug("created: " + objId); 
					await that.setStateValue(objId, JSON.stringify(listItems));
				}, function(err){
					that.log.error("ERROR creating " + objId + ": " + err);
				});
				//--Create entry the lists-Array
				lists.push({name: listName, listItems: listItems, counterFunctions: [], timeout: false});
				let listIndex = lists.length - 1;
				//--Counters
				let counters = [];
				//-- --Find out, how many distict counters are in the list of conditions
				let counterName = "";
				for(let counterIndex = 0; counterIndex < this.config.lists[configListIndex].counters.length; counterIndex++){
					this.log.debug("...processing counter condition " + (counterIndex + 1) + "...");
					let counter = this.config.lists[configListIndex].counters[counterIndex];
					if(counterIndex == 0 || (counter.name && counter.name != "&&" && counter.name != "||" && counter.name != counterName)){ //Found new distict Counter (new name was given)
						counterName = counter.name;
						counters.push({name: counterName, conditions: [], listItems: []});
						//Create counter-objects
						objName = listName + " - " + counterName;
						objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counterName);
						obj = {
							"type": "state",
							"common": {
								"name": objName,
								"desc": "List created by iQontrol",
								"type": "number",
								"role": "value",
								"icon": ""
							},
							"native": {}
						};
						createdObjects.push(objId);
						await this.setObjectAsync(objId, obj, true).then(async function(){ 
							that.log.debug("created: " + objId); 
						}, function(err){
							that.log.error("ERROR creating " + objId + ": " + err);
						});
						objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counterName) + "_LIST";
						obj = {
							"type": "state",
							"common": {
								"name": objName,
								"desc": "List created by iQontrol",
								"type": "string",
								"role": "value",
								"icon": ""
							},
							"native": {}
						};
						createdObjects.push(objId);
						await this.setObjectAsync(objId, obj, true).then(async function(){ 
							that.log.debug("created: " + objId); 
						}, function(err){
							that.log.error("ERROR creating " + objId + ": " + err);
						});
						objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counterName) + "_LIST_JSON";
						obj = {
							"type": "state",
							"common": {
								"name": objName,
								"desc": "List created by iQontrol",
								"type": "json",
								"role": "value",
								"icon": ""
							},
							"native": {}
						};
						createdObjects.push(objId);
						await this.setObjectAsync(objId, obj, true).then(async function(){ 
							that.log.debug("created: " + objId); 
						}, function(err){
							that.log.error("ERROR creating " + objId + ": " + err);
						});
					}
					counters[counters.length - 1].conditions.push(counter);
				}
				//-- --Loop through the disctinct counters and create the counterFunctions
				for(let counterIndex = 0; counterIndex < counters.length; counterIndex++){
					this.log.debug("...processing counter " + listName + "_" + counters[counterIndex].name + "...");
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let counter = counters[counterIndex];
						//-- -- -- ###### Counter Function ######
						let counterFunction = async function(_listItems, triggeredBy){
							that.log.debug("COUNTER " + listName + "_" + counter.name + " function started, TRIGGERED BY " + triggeredBy);
							counter.listItems = [];
							counter.repeatTimeouts = [];
							//-- -- -- --Loop through the listItems the counter belongs to
							for(let _listItemIndex = 0; _listItemIndex < _listItems.length; _listItemIndex++){
								let conditionFullyFulfilled = false;
								let conditionPartFulfilled = (counter.conditions.length > 0);
								//-- -- -- -- --Loop through the conditions of this counter and check, if this list item fulfills als conditions
								for(let conditionIndex = 0; conditionIndex < counter.conditions.length; conditionIndex++){
									if(counter.conditions[conditionIndex].name == "||"){ //New condition OR-Partial
										that.log.silly("COUNTER " + listName + "_" + counter.name + ", item " + _listItems[_listItemIndex] + " |||| New OR-Part");
										if(conditionPartFulfilled) conditionFullyFulfilled = true;
										conditionPartFulfilled = true;
									}
									let value;
									if(!usedStates[_listItems[_listItemIndex]]) usedStates[_listItems[_listItemIndex]] = await that.getForeignStateAsync(_listItems[_listItemIndex]);
									switch(counter.conditions[conditionIndex].type){
										case "value":
										value = usedStates[_listItems[_listItemIndex]]?.val;
										break;
										
										case "ack":
										value = usedStates[_listItems[_listItemIndex]]?.ack;
										break;

										case "lc":
										value = usedStates[_listItems[_listItemIndex]]?.lc;
										break;

										case "lcs":
										value = (new Date() - usedStates[_listItems[_listItemIndex]]?.lc)/1000;
										counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
										break;

										case "ts":
										value = usedStates[_listItems[_listItemIndex]]?.ts;
										break;

										case "tss":
										value = (new Date() - usedStates[_listItems[_listItemIndex]]?.lc)/1000;
										counter.repeatTimeouts.push(counter.conditions[conditionIndex].value);
										break;
									}
									let check = await that.checkCondition(value, counter.conditions[conditionIndex].operator, counter.conditions[conditionIndex].value, ',');
									conditionPartFulfilled = conditionPartFulfilled && check;
									that.log.silly("COUNTER " + listName + "_" + counter.name + ", item " + _listItems[_listItemIndex] + " >>>> check condition " + (conditionIndex + 1) + " von " + counter.conditions.length + ": type: " + counter.conditions[conditionIndex].type + ", value: " + value + ", op: " + counter.conditions[conditionIndex].operator + ", condVal: " + counter.conditions[conditionIndex].value + " --> check: " + check + " ==> fulfilled: " + conditionPartFulfilled);
									//if(conditionFullyFulfilled) break;
								}
								if(conditionPartFulfilled) conditionFullyFulfilled = true;
								that.log.silly("COUNTER " + listName + "_" + counter.name + ", item: " + _listItems[_listItemIndex] + " >>>>>>>> check completed ==> fulfilled: " + conditionFullyFulfilled);
								if(conditionFullyFulfilled) counter.listItems.push(_listItems[_listItemIndex]);
							}
							that.log.info("COUNTER " + listName + "_" + counter.name + ": " + counter.listItems.length + " of " + lists[listIndex].listItems.length);
							//-- -- -- --Set States
							objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name);
							await that.setStateValue(objId, counter.listItems.length);
							objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_LIST";
							await that.setStateValue(objId, counter.listItems.join(', '));
							objId = "Lists." + idEncodePointAllowed(listName) + "." + idEncodePointAllowed(counter.name) + "_LIST_JSON";
							await that.setStateValue(objId, JSON.stringify(counter.listItems));
							//-- -- -- --Call repeatTimeouts (for conditions, that contain distances to timestamps as argument, the counterFunction has to be called again after that distance)
							counter.repeatTimeouts = await that.removeDuplicates(counter.repeatTimeouts);
							if(triggeredBy != "triggeredByRepeatTimeout" && triggeredBy != "triggeredByInterval" && triggeredBy != "triggeredByCreation") for(let repeatTimeoutIndex = 0; repeatTimeoutIndex < counter.repeatTimeouts.length; repeatTimeoutIndex++){
								if(counter.repeatTimeouts[repeatTimeoutIndex] && !isNaN(counter.repeatTimeouts[repeatTimeoutIndex])){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										let _listIndex = listIndex;
										that.log.debug("set trigger repeat-timeout for list " + lists[_listIndex].name + " to " + parseInt(counter.repeatTimeouts[repeatTimeoutIndex] + "s"));
										setTimeout(function(){
											if(!lists[_listIndex].timeout) lists[_listIndex].timeout = setTimeout(function(){ //Debouncing
												for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){							
													lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, "triggeredByRepeatTimeout");
												}
												lists[_listIndex].timeout = false;
											} , 200);
										}, parseInt(counter.repeatTimeouts[repeatTimeoutIndex] * 1000));
									})(); //<--End Closure
								}
							}
						}; // End of ##### COUNTER FUNCTION #####
						lists[listIndex].counterFunctions.push(counterFunction);
					})(); //<--End Closure
				}
				//--Subscribe to the list items
				this.log.debug("...subscribing to list items of list " + listName + " (" + listItems.length + " objects)...");										
				this.subscribeForeignStates(listItems);
				//--Start trigger interval (if activated)
				if (this.config.lists[configListIndex].triggerInterval && !isNaN(this.config.lists[configListIndex].triggerInterval)) {
					this.log.debug("...setting trigger interval of list " + listName + " to " + parseInt(that.config.lists[configListIndex].triggerInterval) + "s...");
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						let _listIndex = listIndex;
						triggerIntervals.push(setInterval(function(){
							if(!lists[_listIndex].timeout) lists[_listIndex].timeout = setTimeout(function(){ //Debouncing
								for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){							
									lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, "triggeredByInterval");
								}
								lists[_listIndex].timeout = false;
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
						if(!lists[_listIndex].timeout) lists[_listIndex].timeout = setTimeout(function(){ //Debouncing
							for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){
								that.log.silly("...triggering counter function " + counterFunctionIndex + "/" + lists[_listIndex].counterFunctions.length + " of list " + lists[_listIndex].name + " by creation NOW...");
								lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, "triggeredByCreation");
							}
							lists[_listIndex].timeout = false;
						} , 200);
					}, 200);
				})(); //<--End Closure
			}
		}
	}

	updateListCounters(id){
		for(let listIndex = 0; listIndex < lists.length; listIndex++){
			if(lists[listIndex].listItems.indexOf(id) > -1 && !lists[listIndex].timeout){
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					let _listIndex = listIndex;
					lists[_listIndex].timeout = setTimeout(function(){ //Debouncing
						for(let counterFunctionIndex = 0; counterFunctionIndex < lists[_listIndex].counterFunctions.length; counterFunctionIndex++){							
							lists[_listIndex].counterFunctions[counterFunctionIndex](lists[_listIndex].listItems, id);
						}
						lists[_listIndex].timeout = false;
					} , 200);
				})(); //<--End Closure
			}
		}
	}
	
	async checkCondition(value, condition, conditionValue, conditionValueSeparator){
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
	
	async removeDuplicates(array) { //Removes duplicates from an array
		let seen = {};
		return array.filter(function(item) {
			return seen.hasOwnProperty(item) ? false : (seen[item] = true);
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
		//this.log.info("config option1: " + this.config.option1);
		//this.log.info("config option2: " + this.config.option2);
		//
		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*/
		//await this.setObjectAsync("testVariable", {
		//	type: "state",
		//	common: {
		//		name: "testVariable",
		//		type: "boolean",
		//		role: "indicator",
		//		read: true,
		//		write: true,
		//	},
		//	native: {},
		//});
		//
		// in this template all states changes inside the adapters namespace are subscribed
		//this.subscribeStates("*");
		//
		/*
		setState examples
		you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
		// the variable testVariable is set to true as command (ack=false)
		//await this.setStateAsync("testVariable", true);
		//
		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system
		//await this.setStateAsync("testVariable", { val: true, ack: true });
		//
		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		//await this.setStateAsync("testVariable", { val: true, ack: true, expire: 30 });
		//
		// examples for the checkPassword/checkGroup functions
		//let result = await this.checkPasswordAsync("admin", "iobroker");
		//this.log.info("check user admin pw ioboker: " + result);
		//
		//result = await this.checkGroupAsync("admin", "admin");
		//this.log.info("check group user admin group admin: " + result);
		//---------------------------------------------------------------------------
	}

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
			this.log.debug(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
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
				this.updateListCounters(id);
			}
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
			if(this.config.listsActive) {
				delete usedStates[id];
				this.updateListCounters(id);
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
