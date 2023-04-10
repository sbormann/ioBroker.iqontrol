//#####################################################################################
//Notes and snippets
//#####################################################################################

const { endianness } = require("os");






//++++++++++ ToDo ++++++++++
/*
* Popup: Options-Section with transparency, background-color; ack-flag setzen https://forum.iobroker.net/post/971356
* selectId: Icon search or list or colorize
* ack-behaviour set ack|do not wait for ack|wait ___ seconds for ack (0 = forever) then assume its OK|not OK|...
*/

//++++++++++ V3-Definition ++++++++++
/*

* configVersion: 3
				if (commonRole == ""){
					if (entry == "VALVE_STATES" || entry == "INFO_A" || entry == "INFO_B"  || entry == "ADDITIONAL_CONTROLS" || entry == "ADDITIONAL_INFO" || entry == "REMOTE_CHANNELS" || entry == "REMOTE_ADDITIONAL_BUTTONS"){
						commonRole = "array";
						var valueObj = tryParseJSON(value);
						if (Array.isArray(valueObj) == false) { //For backward-compatibility -> transfer old object-style to new array-style
							var valueArray = [];
							for(name in valueObj){
								valueArray.push({'name':name, 'commonRole':'linkedState', 'value':valueObj[name]});
							}
							value = JSON.stringify(valueArray);
						}
					} else if (entry == "SET_VALUE"  || entry == "OFF_SET_VALUE"  ||  entry == "UP_SET_VALUE" ||  entry == "STOP_SET_VALUE"  || entry == "DOWN_SET_VALUE"  || entry == "FAVORITE_POSITION_SET_VALUE"  || entry == "URL" || entry == "HTML" || entry == "BACKGROUND_VIEW" || entry == "BACKGROUND_URL" || entry == "BACKGROUND_HTML" || entry == "BADGE_COLOR" || entry == "OVERLAY_INACTIVE_COLOR" || entry == "OVERLAY_ACTIVE_COLOR" || entry == "GLOW_INACTIVE_COLOR"|| entry == "GLOW_ACTIVE_COLOR"){
						commonRole = "const";
					} else {
						commonRole = "linkedState";
					}
				}

* VALVE_STATES -> ADD INFO

* before Conversion: Ask to create backup. On imporint old version, do conversion.

* Makro??? Elements mit Array??: Add INFO_A, Add INFO_B??? StateAdaptsHeight: Text ist im iconText des DeviceIcons

* <Role>.states -> <Role>.deviceStateDefinitions

* <Role>.deviceStateDefinitions.states => <device>.deviceStates: [{
		commonName: "", 
		commonType: "string|color|url|view", 
		commonRole: "linkedState|calc|const", 
		defaultValue: "", 
		description: "", 
		groupName: "",
		editable: false
	}, ...]

* <Role>.deviceStateDefinitions.tileUiElementStacks => <device>.tileUiElementStacks
 & <Role>.deviceStateDefinitions.aboveTileUiElementStacks => <device>.aboveTileUiElementStacks
 & <Role>.deviceStateDefinitions.behindTileUiElementStacks => <device>.behindTileUiElementStacks: [{
	name: "INFO_A",
	positionClass:  "Default Tile Definition.INFO_A",
	uiElements: [{uiElement: "iconText", uiElementOptions: {}}, ...]
}]

* <Role>.deviceStateDefinitions.dialogUiElementStacks: 

* tilePositionClasses = [{
		groupname: "Default Tile Definition",
		editable: false,
		positionClasses: [{    
			name: "Device Name", 
			normal:{position: "absolute|float", nextLine: true,
					horizontalAnchor: "left|right|center", horizontalValue: "10px", widthMode: "fixed|tileWidthMinus|grow", widthValue: "10px" maxWidthValue: "",
					verticalAnchor:"top|bottom", verticalValue: "10px", heightMode:"fixed|tileHeightMinus|grow", heightValue: "10px", maxHeightValue: ""}, 
			enlarged: {wie bei normal}
		}, ...]
	}, ...]

* pressureIndicator wird neues device???

* fix coded im view: pressureIndicator, Glow, backgroundColor/overlayColor

* uiElements: Badge, iconText, iFrame, mediaControl, media..., input (abhängig vom STATE z.B. valueList,...), sound
* uiElements options: stackId, stackIndex, 
	states je nach uiElement mit stateProcessingFunction 
	activeDeviceStateName, activeCondition, activeValue	

*/








		//1.Discover Widgets
		var inbuiltWidgetsString = "";
		inbuiltWidgets.forEach(function(widget){
			if (widget && typeof widget.filename != udef) {
				inbuiltWidgetsString += ";" + ("./images/widgets/" + widget.filename).replace(/\//g, "\\") + "/" + (widget.name || widget.filename).replace(/\//g, "\\") + "/" + (previewLink + ("/images/widgets/" + widget.icon || "/images/icons/file_html.png")).replace(/\//g, "\\");
			}
		});
		if (inbuiltWidgets.length > 0){
			inbuiltWidgetsString = ";[" + _("Inbuilt Widgets") + ":]" + inbuiltWidgetsString;
		}
		var websitenames = [];
		imagesDirs.forEach(function(imagesDir){
			if (imagesDir.dirname.indexOf("/userwidgets") == 0 && imagesDir.files && imagesDir.files.length > 0){
				var websitenamesInThisDir = [];
				imagesDir.files.forEach(function(file){
					var filename = file.filename || "";
					if (filename.endsWith(".shtml") || filename.endsWith(".ehtml") || filename.endsWith(".shtm") || filename.endsWith(".htm") || filename.endsWith(".html")){
						var iconIndex = images.findIndex(function(element){ return (element.filename == file.filename.substring(0, file.filename.length - 5) + ".png"); });
						if (iconIndex > -1) var icon = previewLink + "/.." + userfilesImagePath + images[iconIndex].filename; else var icon = previewLink + "/images/icons/file_html.png";
						websitenamesInThisDir.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS + "/" + icon.replace(/\//g, "\\"));
					}
				});
				if (websitenamesInThisDir.length > 0){
					websitenames.push("[" + imagesDir.dirnameBS + ":]");
					websitenames.push(websitenamesInThisDir.join(";"));
				}
			}
		});
		if (websitenames.length > 0){
			websitenames.unshift(";[" + _("User Widgets") + ":]");
		}
		//2.Discover Views
		var viewIds = [""];
		views.forEach(function(element){ viewIds.push(adapter + "." + instance + ".Views." + element.commonName + "/" + element.commonName); });




//#####################################################################################
//++++++++++ Variables ++++++++++
$myDiv = $("<div id='myDiv'>Loading...|Variable 1: {javascript.0.Test.Teststring|1 not found}, Variable 2: {javascript.0.Test.Testnumber|2 not found} , Variable [2b]: {[javascript.0.Test.Testnumber]|2b not found}</div>");
$myDiv2 = $("<div id='myDiv2'>Loading...|Variable 3: {javascript.0.Test.Teststring2|3 not found}, Variable 4: {javascript.0.Test.Testnumber2|4 not found} , Variable [4b]: {[javascript.0.Test.Testnumber2]|4b not found}</div>");
$('body').append($myDiv);
$('body').append($myDiv2);


function activateVariables(selector){
	console.log("activateVariables");
	var $destination = $(selector);
	var originalHtmlParts = ($destination.html() || "").split('|');
	var variableSting = originalHtmlParts.slice(1).join('|');
	$destination.html(originalHtmlParts[0]);	
	var variables = (variableSting.match(/{([^}]+)}/g) || []).map(function(match){ return match.slice(1, -1); });
	var updateFunction = function(){
		var newHtml = variableSting.replace(/{([^}]+)}/g, function(match, p1){ 
			var parts = processVariable(p1);
			var state = getStateObject(parts.linkedStateId);
			var replacement = null;
			if(state && typeof state.val !== udef) {
				if(typeof state.plainText == 'number' && !parts.noUnit){	//STATE = number
					replacement = state.val + state.unit;
				} else {													//STATE = bool or text
					replacement = state.plainText;
				}
			} else if(parts.placeholder) {									//Replace by placeholder
				replacement = parts.placeholder;
			}
			if(replacement != null) return replacement; else return p1;
		});
		$destination.html(newHtml);
	};
	variables.forEach(function(variable){
		var parts = processVariable(variable);
		if(!viewUpdateFunctions[parts.linkedStateId]) viewUpdateFunctions[parts.linkedStateId] = [];
		viewUpdateFunctions[parts.linkedStateId].push(updateFunction);
		viewLinkedStateIdsToFetchAndUpdate.push(parts.linkedStateId);
	});
	function processVariable(variable){
		var result = {};
		var variableParts = variable.split('|');
		var linkedStateId = variableParts[0];
		var noUnit = false;
		if(linkedStateId.substr(0, 1) == "[" && linkedStateId.substr(-1) == "]"){
			linkedStateId = linkedStateId.substring(1, linkedStateId.length - 1);
			noUnit = true;
		}
		//linkedStateId = decodeURI(linkedStateId);
		result.linkedStateId = linkedStateId;
		result.noUnit = noUnit;
		result.placeholder = variableParts[1] || null;
		return result;		
	}	
}

activateVariables('#myDiv');
activateVariables('#myDiv2');


viewLinkedStateIdsToFetchAndUpdate = removeDuplicates(viewLinkedStateIdsToFetchAndUpdate);
fetchStates(viewLinkedStateIdsToFetchAndUpdate, function(){
	for (var i = 0; i < viewLinkedStateIdsToFetchAndUpdate.length; i++){
		if(typeof usedObjects[viewLinkedStateIdsToFetchAndUpdate[i]] == udef) {
			fetchObject(viewLinkedStateIdsToFetchAndUpdate[i], function(){
				updateState(viewLinkedStateIdsToFetchAndUpdate[i], "ignorePreventUpdateForView");
			});
		} else {
			updateState(viewLinkedStateIdsToFetchAndUpdate[i], "ignorePreventUpdateForView");
		}
	}
});

updateState("javascript.0.Test.Teststring");




//#####################################################################################
//++++++++++ Speed-Test for array duplicates ++++++++++
function test1(count){
	let begin = new Date();
	let array = [];
	for(let i=0; i<count; i++){
		array.push(i);
	}
	for(let i=0; i<count; i++){
		array.push(i);
	}
	array = removeDuplicates(array);
	let end = new Date();
	return end - begin;
}

function test2(count){
	let begin = new Date();
	let array = [];
	for(let i=0; i<count; i++){
		if(!array[i]) array.push(i);
	}
	for(let i=0; i<count; i++){
		if(!array[i]) array.push(i);
	}
	let end = new Date();
	return end - begin;
}

function test3(count){
	let begin = new Date();
	let array = [];
	for(let i=0; i<count; i++){
		if(!array[i]) array.push(i);
	}
	for(let i=0; i<count; i++){
		if(!array[i]) array.push(i);
	}
	array = removeDuplicates(array);
	let end = new Date();
	return end - begin;
}

function test4(count){
	let begin = new Date();
	let array = [];
	for(let i=0; i<count; i++){
		array[i] = i;
	}
	for(let i=0; i<count; i++){
		array[i] = i;
	}
	let end = new Date();
	return end - begin;
}

function test(count, testcount){
	count = count || 10;
	testcount = testcount || 100000;
	var test1dur = 0;
	var test2dur = 0;
	var test3dur = 0;
	var test4dur = 0;
	for(let i=0; i<count; i++){
		if(i%100 == 0) console.log(i);
		test1dur += test1(testcount);
		test2dur += test2(testcount);
		test3dur += test3(testcount);
		test4dur += test4(testcount);
	}
	console.log("------TEST------");
	console.log("Test 1: " + test1dur);
	console.log("Test 2: " + test2dur);
	console.log("Test 3: " + test3dur);
	console.log("Test 4: " + test4dur);
}

//Result 2+4 are the fastest - and nearly the same



