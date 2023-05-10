//#####################################################################################
//Notes and snippets
//#####################################################################################


//++++++++++ Next Steps ++++++++++
- contextMenu as uiElement
- Fehler beim Speichern von tile options beheben, standard Tile options aktualisieren

- updateFunction verbessern 

- enlarge/active funktion erstellen, die resize-observer ersetzt
- shrink to free space
- clickOnIconConfirmToggle: wie, wenn nicht über clickIconOption?? im toggleState() die device-option abfragen?<-- Option bei garage door invertieren beim converten
- define standard Tile Elements per Role
- variableSrc in icons & Bg-images, die über options kamen

- Remove pressure and shuffle from file system and index.html

	
//--Context Menu



* @param {boolean} uiElementOptions.renderLinkedViewInParentInstance
* @param {boolean} uiElementOptions.renderLinkedViewInParentInstanceClosesPanel --> beides auf für clickAction nutzen, auch bei iconClickAction!


?? Kann die clickAction auch auf das Icon bezogen werden? (über das Icon noch eine ClickAction setzen?)





//-------------
- deviceLinkedStateIds[deviceStateName] = device.deviceStates[deviceStateName].stateId (habe ich schon gemacht, aber für den hier folgenden Code vielleicht noch nicht)
				//--Hide
					/* if(deviceLinkedStateIds["HIDE"]){
						(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
							var _device = device;
							var _deviceIdEscaped = deviceIdEscaped;
							var _linkedHideId = deviceLinkedStateIds["HIDE"];
							var updateFunction = function(){
								var stateHide = getStateObject(_linkedGlowHideId);
								var invertHide = (getDeviceOptionValue(_device, "invertHide") == "true");
								var hide = !(stateHide && stateHide.val || false);
								if(invertHide) hide = !hide;
								if(hide){
									$("[data-device-id-escaped='" + _deviceIdEscaped + "'].pressureIndicator").addClass("hideDevice");
								} else {
									$("[data-device-id-escaped='" + _deviceIdEscaped + "'].pressureIndicator").removeClass("hideDevice");
								}
							};
                            uiElements.addUpdateFunction(_linkedHideId, updateFunction);
						})(); //<--End Closure
					} */
					function viewShuffleFilterHideDeviceIfInactive(){
						viewShuffleInstances.forEach(function(shuffleInstance, i){
							shuffleInstance.filter(function(shuffleElement){
								return !(
									($(shuffleElement).hasClass('hideDeviceIfInactive') && !$(shuffleElement).hasClass('active'))
									|| ($(shuffleElement).hasClass('hideDeviceIfActive') && $(shuffleElement).hasClass('active'))
									|| $(shuffleElement).hasClass('hideDevice')
								);
							});
						});
						//Hide subheadings, if no tile is visible
						$('#ViewContent h4').each(function(){ 
							if($(this).nextAll('.viewIsotopeContainer').find('.shuffle-item').hasClass('shuffle-item--visible')) $(this).show(500); else $(this).hide(500); 
						});
					}



						//----Background (Overlay) InactiveColor
						if(deviceLinkedStateIds["OVERLAY_INACTIVE_COLOR"]){
							(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceIdEscaped = deviceIdEscaped;
								var _linkedOverlayInactiveColorId = deviceLinkedStateIds["OVERLAY_INACTIVE_COLOR"];
								var updateFunction = function(){
									var stateOverlayInactiveColor = getState(_linkedOverlayInactiveColorId);
									var colorString = stateOverlayInactiveColor && isValidColorString(stateOverlayInactiveColor.val) && stateOverlayInactiveColor.val || null;
									if(colorString){
										$("[data-device-id-escaped='" + _deviceIdEscaped + "'].iQontrolDeviceBackgroundImage:not(.active)").css('background-color', colorString);
									} else {
										$("[data-device-id-escaped='" + _deviceIdEscaped + "'].iQontrolDeviceBackgroundImage:not(.active)").css('background-color', '');
									}
								};
								uiElements.addUpdateFunction(_linkedOverlayInactiveColorId, updateFunction);
							})(); //<--End Closure
						}

						//----Background (Overlay) ActiveColor
						var linkOverlayActiveColorToHue = (getDeviceOptionValue(device, "linkOverlayActiveColorToHue") == "true");
						if(deviceLinkedStateIds["OVERLAY_ACTIVE_COLOR"] || linkOverlayActiveColorToHue){
							(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceId = deviceId;
								var _deviceIdEscaped = deviceIdEscaped;
								var _linkedOverlayActiveColorId = deviceLinkedStateIds["OVERLAY_ACTIVE_COLOR"];
								var _linkOverlayActiveColorToHue = linkOverlayActiveColorToHue;
								var _linkedHueId = deviceLinkedStateIds["HUE"];
								var _linkedSaturationId = deviceLinkedStateIds["SATURATION"];
								var _linkedAlternativeColorspaceValueId = deviceLinkedStateIds["ALTERNATIVE_COLORSPACE_VALUE"];
								if(!_linkedHueId && _linkedAlternativeColorspaceValueId) _linkedHueId = "TEMP:" + _deviceId + ".HUE";
								var updateFunction = function(){
									var stateOverlayActiveColor = getState(_linkedOverlayActiveColorId);
									var stateHue = getState(_linkedHueId);
									if(_linkOverlayActiveColorToHue && stateHue && stateHue.val !== "" && stateHue.valRaw !== null){
										var hueMin = stateHue.min || 0;
										var hueMax = stateHue.max || 359;
										var hue = ((stateHue.val - hueMin) / (hueMax - hueMin)) * 359;
										var	saturation = 100;
										var stateSaturation = getState(_linkedSaturationId);
										if(stateSaturation && typeof stateSaturation.val != udef && stateSaturation.valRaw != null) {
											var saturationMin = stateSaturation.min || 0;
											var saturationMax = stateSaturation.max || 100;
											saturation = ((stateSaturation.val - saturationMin) / (saturationMax - saturationMin)) * 100;
										}
										var colorString = "hsl(" + hue + ", 100%," + (100-(saturation/2)) + "%)";
									} else if(_linkOverlayActiveColorToHue){
										var colorString = "rgb(255,245,157)";
									} else {
										var colorString = stateOverlayActiveColor && isValidColorString(stateOverlayActiveColor.val) && stateOverlayActiveColor.val || null;
									}
									if(colorString){
										$("[data-device-id-escaped='" + _deviceIdEscaped + "'].iQontrolDeviceBackgroundImage.active").css('background-color', colorString);
									} else {
										$("[data-device-id-escaped='" + _deviceIdEscaped + "'].iQontrolDeviceBackgroundImage.active").css('background-color', '');
									}
								};
								uiElements.addUpdateFunction([_linkedOverlayActiveColorId, _linkedHueId, _linkedAlternativeColorspaceValueId, "UPDATE_ONCE", _linkedSaturationId], updateFunction);
		/*								if(_linkedOverlayActiveColorId) viewUpdateFunctions[].push(updateFunction);
								if(_linkOverlayActiveColorToHue && _linkedHueId) viewUpdateFunctions[].push(updateFunction);
								if(_linkOverlayActiveColorToHue && !_linkedHueId && _linkedAlternativeColorspaceValueId) viewUpdateFunctions[].push(updateFunction);
								if(_linkOverlayActiveColorToHue && !_linkedHueId) viewUpdateFunctions[].push(updateFunction);
								if(_linkOverlayActiveColorToHue && _linkedSaturationId) viewUpdateFunctions[].push(updateFunction); */
							})(); //<--End Closure
						}




//++++++++++ Later Steps ++++++++++

* Popup: ack-flag setzen https://forum.iobroker.net/post/971356
* selectId-Icon: search or list or colorize
* ack-behaviour set ack|do not wait for ack|wait ___ seconds for ack (0 = forever) then assume its OK|not OK|...
* Options: User edited speichern?? Default, RoleEdited, UserEdited???
* nachdenken: wrapper funktion addUiElement("Icon", device, uiElmntOpt) ? Hier könnten standard, dinge drum rum erleding werden??


//++++++++++ V3-Conversion ++++++++++


* commonRole:
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
* Garage-Door Option noConfirmationForTogglingViaIcon -> Invert and clickOnIconConfirmToggle auf diese Option, Garage-Door: iconToggleAction = startProgram(TOGGLE)
* clickOnIconAction='' -> 'openLinkToOtherView' as default
* returnToOffSetValueAfter -> iconToggleFunction startButton/STATE/SET_VALUE/OFF_SET_VALUE/returnToOffSetValueAfter

* INFO A:
	case "iQontrolThermostat": case "iQontrolHomematicThermostat": case "iQontrolHomematicIpThermostat": case "iQontrolTemperature": case "iQontrolHumidity": case "iQontrolPressure":
	if(deviceLinkedStateIds["TEMPERATURE"]){
	case "iQontrolBrightness": case "iQontrolMotion":
	if(deviceLinkedStateIds["BRIGHTNESS"]){
	case "iQontrolBlind":
	if(deviceLinkedStateIds["SLATS_LEVEL"]){
	case "iQontrolBattery":
	if(deviceLinkedStateIds["VOLTAGE"]) {
		case "iQontrolLight":
		if(deviceLinkedStateIds["HUE"] || deviceLinkedStateIds["CT"] || deviceLinkedStateIds["ALTERNATIVE_COLORSPACE_VALUE"]){
	case "iQontrolMedia":
	if(deviceLinkedStateIds["VOLUME"]) {

* INFO B:
	case "iQontrolThermostat": case "iQontrolHomematicThermostat": case "iQontrolHomematicIpThermostat": case "iQontrolTemperature": case "iQontrolHumidity": case "iQontrolPressure":
	if(deviceLinkedStateIds["HUMIDITY"]) {
	case "iQontrolSwitch": case "iQontrolFan": case "iQontrolLight": case "iQontrolBattery":
	if(deviceLinkedStateIds["POWER"] && (getDeviceOptionValue(device, "showPowerAsState") != "true")) {
	case "iQontrolMedia":
	if(deviceLinkedStateIds["ELAPSED"]) {








* pressureIndicator wird neues device???

* fix coded im view: pressureIndicator, Glow, backgroundColor/overlayColor
* uiElements: Badge, iconText, iFrame, mediaControl, media..., input (abhängig vom STATE z.B. valueList,...), sound



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



