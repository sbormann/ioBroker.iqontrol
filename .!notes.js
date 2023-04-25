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

* <Role>.tile.tileUiElementStacks => <device>.tileUiElementStacks
 & <Role>.tile.aboveTileUiElementStacks => <device>.aboveTileUiElementStacks
 & <Role>.tile.behindTileUiElementStacks => <device>.behindTileUiElementStacks: [{
	name: "INFO_A",
	positionClass:  "Default Tile Definition.INFO_A",
	uiElements: [{uiElement: "iconText", uiElementOptions: {}}, ...]
}]

* <Role>.dialog.dialogUiElementStacks: 

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
//++++++++++ BACKUP V2 renderView ++++++++++



						//--Name
						var name = device.commonName.split('|')[0];
						var variablename = encodeURI(device.commonName.split('|').slice(1).join('|'));
						var hideDeviceName = (getDeviceOptionValue(device, "hideDeviceName") == "true");
						deviceContent += "<div class='iQontrolDeviceName" + ((getDeviceOptionValue(device, "hideDeviceNameIfInactive") == "true")?" hideIfInactive":"") + ((getDeviceOptionValue(device, "hideDeviceNameIfActive") == "true")?" hideIfActive":"") + ((getDeviceOptionValue(device, "hideDeviceNameIfEnlarged") == "true")?" hideIfEnlarged":"") + "' data-iQontrol-Device-ID='" + deviceIdEscaped + "' " + ((variablename && !hideDeviceName) ? "data-variablename='" + variablename + "' " : "") + ">";
							if(!hideDeviceName){
								deviceContent += name;
							}
						deviceContent += "</div>";	
						//--State
						deviceContent += "<div class='iQontrolDeviceState" + ((getDeviceOptionValue(device, "stateBigFontInactive") == "true")?" bigFontIfInactive":"") + ((getDeviceOptionValue(device, "stateBigFontActive") == "true")?" bigFontIfActive":"") + ((getDeviceOptionValue(device, "stateBigFontEnlarged") == "true")?" bigFontIfEnlarged":"") + ((getDeviceOptionValue(device, "hideStateIfInactive") == "true")?" hideIfInactive":"") + ((getDeviceOptionValue(device, "hideStateIfActive") == "true")?" hideIfActive":"") + ((getDeviceOptionValue(device, "hideStateIfEnlarged") == "true")?" hideIfEnlarged":"") + (stateHeightAdaptsContentInactive ? " adaptsHeightIfInactive" : "") + (stateHeightAdaptsContentActive ? " adaptsHeightIfActive" : "") + (stateHeightAdaptsContentEnlarged ? " adaptsHeightIfEnlarged" : "") + ((getDeviceOptionValue(device, "stateFillsDeviceInactive") == "true")?" stateFillsDeviceIfInactive":"") + ((getDeviceOptionValue(device, "stateFillsDeviceActive") == "true")?" stateFillsDeviceIfActive":"") + ((getDeviceOptionValue(device, "stateFillsDeviceEnlarged") == "true")?" stateFillsDeviceIfEnlarged":"") + "' data-iQontrol-Device-ID='" + deviceIdEscaped + "'>";
							switch(device.commonRole){
								case "iQontrolView":
								//Do nothing
								break;

								case "iQontrolButton": case "iQontrolProgram":
								if(deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceIdEscaped = deviceIdEscaped;
										var _device = device;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var state = getState(_linkedStateId);
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var showState = (getDeviceOptionValue(_device, "showState") == "true") || false;
											var result;
											var resultText = "";
											if(state && typeof state.val !== udef ){
												if(typeof state.plainText == 'number'){	//STATE = number (= level)
													result = state.val;
													resultText = result + state.unit;
												} else { 								//STATE = bool or text
													result = state.val;
													resultText = state.plainText;
												}
												if(resultText == "0%") resultText = _("off");
												resultText = unescape(resultText);
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result || false;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											var tileActiveStandard;
											if(tileActive == null){
												if(tileActiveValue.toString().toLowerCase() == "false" || tileActiveValue.toString().toLowerCase() == "0" || tileActiveValue.toString().toLowerCase() == "-1" || tileActiveValue.toString().toLowerCase() == ""){
													tileActiveStandard = false;
												} else {
													tileActiveStandard = true;
												}
											}
											if(showState || tileActive != null){
												if(tileActive == null) tileActive = tileActiveStandard;
												if(tileActive){
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												} else {
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
												}
											}
											if(showState){
												resultText = addTimestamp(resultText, [state], [_linkedStateId], _device, tileActive);
												if(typeof result !== udef && $("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
												}
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedStateId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedStateId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolScene":
								if(deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _device = device;
										var _deviceIdEscaped = deviceIdEscaped;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var state = getState(_linkedStateId);
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var result;
											var resultText = "";
											if(state && typeof state.val !== udef && state.val !== "false" && state.val !== false && state.val !== 0 && state.val !== "" && state.val !== -1) {
												result = true;
											} else {
												result = false;
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											var tileActiveStandard = result || false;
											if(tileActive == null) tileActive = tileActiveStandard;
											if(tileActive){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
											}
											resultText = addTimestamp(resultText, [state], [_linkedStateId], _device, tileActive);
											if($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedStateId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedStateId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolThermostat": case "iQontrolHomematicThermostat": case "iQontrolHomematicIpThermostat":
								if(deviceLinkedStateIds["SET_TEMPERATURE"] || deviceLinkedStateIds["CONTROL_MODE"] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _device = device;
										var _deviceIdEscaped = deviceIdEscaped;
										var _linkedSetTemperatureId = deviceLinkedStateIds["SET_TEMPERATURE"];
										var _linkedControlModeId = deviceLinkedStateIds["CONTROL_MODE"];
										var linkedParentId = (_linkedControlModeId || "").substring(0, (_linkedControlModeId || "").lastIndexOf("."));
										var _linkedBoostModeId = linkedParentId + ".BOOST_MODE"; //Only for HmIP
										var _linkedPartyTemperatureId = deviceLinkedStateIds["PARTY_TEMPERATURE"];
										var _linkedWindowOpenReportingId = deviceLinkedStateIds["WINDOW_OPEN_REPORTING"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var setTemperature = getState(_linkedSetTemperatureId);
											var controlMode = getState(_linkedControlModeId);
											var boostMode = getState(_linkedBoostModeId); //Only for HmIP
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var min = setTemperature && setTemperature.min || 0;
											var max = setTemperature && setTemperature.max || 100;
											var result = setTemperature && setTemperature.val || "";
											var unit = setTemperature && setTemperature.unit || "";
											var mode = "";
											var modeText = "";
											var resultText = "";
											var controlModeDisabledValue = getDeviceOptionValue(_device, "controlModeDisabledValue") || "";
											if(_linkedControlModeId) {
												if(controlMode && typeof controlMode.val !== udef) {
													mode = controlMode.val;
													modeText = controlMode.plainText;
													if(device.commonRole == "iQontrolHomematicIpThermostat") { //For HmIP valueList is not provided
														if(!controlMode.valueList){
															controlMode.valueList = {};
															controlMode.valueList[0] = "AUTO-MODE";
															controlMode.valueList[1] = "MANU-MODE";
															controlMode.valueList[2] = "PARTY-MODE";
															controlMode.valueList[3] = "BOOST-MODE";
															var plainText = _(controlMode.valueList[controlMode.val]);
															if(plainText) modeText = plainText;
															if(boostMode && boostMode.val) modeText = _("BOOST-MODE");
														}														
													}
												}
											}
											if(result !== "") modeText = "<span class='small'>&nbsp;" + modeText + "</span>";
											resultText = result + unit + modeText;
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											var tileActiveStandard;
											if((mode !== "" && controlModeDisabledValue !== "" && mode == controlModeDisabledValue) || (tileActiveValue !== "" && (tileActiveValue <= min || tileActiveValue >= max))) {
												tileActiveStandard = false;
											} else {
												tileActiveStandard = true;
											}
											if(tileActive == null) tileActive = tileActiveStandard;
											if(tileActive){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
											}
											resultText = addTimestamp(resultText, [setTemperature, controlMode], [_linkedSetTemperatureId, _linkedControlModeId], _device, tileActive);
											if(device.commonRole != "iQontrolHomematicIpThermostat" && _linkedPartyTemperatureId && typeof fetchedStates[_linkedPartyTemperatureId] !== udef && typeof fetchedStates[_linkedPartyTemperatureId].val !== udef && fetchedStates[_linkedPartyTemperatureId].val >= 6) resultText += "&nbsp;<image src='./images/party.png' style='width:12px; height:12px;' />";
											if(_linkedWindowOpenReportingId && typeof fetchedStates[_linkedWindowOpenReportingId] !== udef && fetchedStates[_linkedWindowOpenReportingId] !== null && typeof fetchedStates[_linkedWindowOpenReportingId].val !== udef && fetchedStates[_linkedWindowOpenReportingId].val) resultText += "&nbsp;<image src='./images/wot.png' style='width:12px; height:12px;' />";
											if($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedSetTemperatureId, _linkedControlModeId, _linkedPartyTemperatureId, _linkedWindowOpenReportingId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedSetTemperatureId && !_linkedControlModeId && !_linkedPartyTemperatureId && !_linkedWindowOpenReportingId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolDoor": case "iQontrolGarageDoor": case "iQontrolWindow":
								if(deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _device = device;
										var _deviceIdEscaped = deviceIdEscaped;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var state = getState(_linkedStateId);
											var stateClosedValue = getDeviceOptionValue(_device, "stateClosedValue") || _("closed");
											var stateTiltedValue = getDeviceOptionValue(_device, "stateTiltedValue") || _("tilted");
											var stateOpenedValue = getDeviceOptionValue(_device, "stateOpenedValue") || _("opened");
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var result;
											var resultText;
											if(state && typeof state.plainText == 'number'){		//STATE = number
												result = state.val;
												resultText = result + state.unit;
												if(result > 0){ //show as opened
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.tilted").removeClass("active");
												} else { //show as closed
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.tilted").removeClass("active");
												}
											} else if(state){ 										//STATE = bool or text
												result = state.val;
												if(typeof result == 'boolean') {					//STATE = bool -> force to opened or closed
													if(result) { //opened
														resultText = _("opened");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.tilted").removeClass("active");
													} else { //closed
														resultText = _("closed");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.tilted").removeClass("active");
													}
												} else {											//STATE = text
													resultText = state.plainText;
													switch (resultText) {
														case stateClosedValue: case _(stateClosedValue): case capitalize(stateClosedValue): case capitalize(_(stateClosedValue)): //closed
														result = false;
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.tilted").removeClass("active");
														break;

														case stateTiltedValue: case _(stateTiltedValue): case capitalize(stateTiltedValue): case capitalize(_(stateTiltedValue)): //tilted
														result = true;
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.tilted").addClass("active");
														break;

														case stateOpenedValue: case _(stateOpenedValue): case capitalize(stateOpenedValue): case capitalize(_(stateOpenedValue)): //opened
														result = true;
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
														$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.tilted").removeClass("active");
														break;

														default: 										//free text or undefined state
														if(typeof result == udef || result == 0 || result == false) { //show as closed
															$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
															$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
															$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.tilted").removeClass("active");
														} else { //show as opened
															$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
															$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
															$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.tilted").removeClass("active");
														}
														break;
													}
												}
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											var tileActiveStandard = tileActiveValue || false;
											if(tileActive == null) tileActive = tileActiveStandard;
											if(tileActive){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
											}
											resultText = unescape(resultText);
											resultText = addTimestamp(resultText, [state], [_linkedStateId], _device, tileActive);
											if(typeof result !== udef && $("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedStateId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedStateId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolDoorWithLock":
								if(deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["LOCK_STATE"] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _device = device;
										var _deviceIdEscaped = deviceIdEscaped;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedLockStateId = deviceLinkedStateIds["LOCK_STATE"];
										var _linkedLockStateUncertainId = deviceLinkedStateIds["LOCK_STATE_UNCERTAIN"];
										var _linkedLockOpenId = deviceLinkedStateIds["LOCK_OPEN"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var state = getState(_linkedStateId);
											var stateClosedValue = getDeviceOptionValue(_device, "stateClosedValue") || "false";
											var lockStateLockedValue = getDeviceOptionValue(_device, "lockStateLockedValue") || "false";
											var lockState = getState(_linkedLockStateId);
											var lockStateUncertain = getState(_linkedLockStateUncertainId);
											var lockOpen = getState(_linkedLockOpenId);
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var result;
											var resultText = "";
											if(state 
												&& typeof state.val !== udef 
												&& (
													(state.plainText == stateClosedValue || state.plainText == _(stateClosedValue) || state.plainText == capitalize(stateClosedValue) || state.plainText == capitalize(_(stateClosedValue)))
													|| (typeof state.val == "boolean" && state.val.toString() == stateClosedValue)
												)
											){ //Closed
												if(lockState 
													&& typeof lockState.val !== udef 
													&& (
														(lockState.plainText == lockStateLockedValue || lockState.plainText == _(lockStateLockedValue) || lockState.plainText == capitalize(lockStateLockedValue) || lockState.plainText == capitalize(_(lockStateLockedValue)))
														|| (typeof lockState.val == "boolean" && lockState.val.toString() == lockStateLockedValue)
													)
												) { //Closed and locked
													result = false;
													resultText = _("locked");
													if(lockStateUncertain && typeof lockStateUncertain.val !== udef && lockStateUncertain.val) resultText = "<i>" + resultText + "</i>";
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.locked").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.unlocked").removeClass("active");
												} else if(lockState && typeof lockState.val !== udef) { //Closed, but unlocked
													result = true;
													resultText = _("unlocked");
													if(lockStateUncertain && typeof lockStateUncertain.val !== udef && lockStateUncertain.val) resultText = "<i>" + resultText + "<i>";
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.locked").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.unlocked").addClass("active");
												} else { //Closed (and lockState not set)
													result = false;
													resultText = _("closed");
													if(lockStateUncertain && typeof lockStateUncertain.val !== udef && lockStateUncertain.val) resultText = "<i>" + resultText + "</i>";
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.locked").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.unlocked").removeClass("active");
												}
											} else { //Opened
												result = true;
												resultText = _("opened");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.locked").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.unlocked").removeClass("active");
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											var tileActiveStandard = tileActiveValue || false;
											if(tileActive == null) tileActive = tileActiveStandard;
											if(tileActive){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
 											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
											}
											resultText = addTimestamp(resultText, [state, lockState, lockStateUncertain, lockOpen], [_linkedStateId, _linkedLockStateId, _linkedLockStateUncertainId, _linkedLockOpenId], _device, tileActive);
											if($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedStateId, _linkedLockStateId, _linkedLockStateUncertainId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedStateId && !_linkedLockStateId && !_linkedLockStateUncertainId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions[].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolBlind":
								if(deviceLinkedStateIds["LEVEL"] || deviceLinkedStateIds["DIRECTION"] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _device = device;
										var _deviceIdEscaped = deviceIdEscaped;
										var _linkedLevelId = deviceLinkedStateIds["LEVEL"];
										var _linkedDirectionId = deviceLinkedStateIds["DIRECTION"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var level = getState(_linkedLevelId);
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var min = level.min || 0;
											var max = level.max || 100;
											var val = level.val;
											var invertActuatorLevel = false;
											if(getDeviceOptionValue(_device, "invertActuatorLevel") == "true") invertActuatorLevel = !invertActuatorLevel;
											if(invertActuatorLevel){ // 0 = open
												val = max - (level.val - min);
											}
											var direction = getState(_linkedDirectionId);
											var directionOpeningValue = getDeviceOptionValue(_device, "directionOpeningValue") || 1;
											var directionClosingValue = getDeviceOptionValue(_device, "directionClosingValue") || 2;
											var directionUncertainValue = getDeviceOptionValue(_device, "directionUncertainValue") || 3;
											var result;
											var resultText = "";
											var tileActiveStandard = false;
											if(level && typeof level.plainText == 'number'){
												result = level.val;
												resultText = result + level.unit;
											} else if(level){
												result = level.val;
												resultText = level.plainText;
											}
											if(direction && typeof direction.val !== udef && direction.val.toString() == directionOpeningValue.toString()){ //Middle, but opening
												tileActiveStandard = true;
												resultText = _("opening");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.middle").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.opening").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.closing").removeClass("active");
											} else if(direction && typeof direction.val !== udef && direction.val.toString() == directionClosingValue.toString()){ //Middle, but closing
												tileActiveStandard = true;
												resultText = _("closing");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.middle").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.opening").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.closing").addClass("active");
											} else if(level && typeof level.val !== udef && val == min){ //Closed
												tileActiveStandard = false;
												if(level && typeof level.plainText == 'number') resultText = _("closed");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.middle").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.opening").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.closing").removeClass("active");
											} else if(level && typeof level.val !== udef && val == max){ //Opened
												tileActiveStandard = true;
												if(level && typeof level.plainText == 'number') resultText = _("opened");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.middle").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.opening").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.closing").removeClass("active");
											} else { //Middle with no movement
												tileActiveStandard = true;
												if(direction && typeof direction.val !== udef && direction.val.toString() == directionUncertainValue.toString()) resultText = "<i>" + resultText + "</i>";
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.middle").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.opening").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.closing").removeClass("active");
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result || 0;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											if(tileActive == null) tileActive = tileActiveStandard;
											if(tileActive){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
											}
											resultText = addTimestamp(resultText, [level, direction], [_linkedLevelId, _linkedDirectionId], _device, tileActive);
											if($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedLevelId, _linkedDirectionId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedLevelId && !_linkedDirectionId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolAlarm":
								if(deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["CONTROL_MODE"] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _deviceIdEscaped = deviceIdEscaped;
										var _device = device;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedControlModeId = deviceLinkedStateIds["CONTROL_MODE"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var state = getState(_linkedStateId);
											var controlMode = getState(_linkedControlModeId);
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var controlModeDisarmedValue = getDeviceOptionValue(_device, "controlModeDisarmedValue") || 0;
											var result;
											var resultText = "";
											if(state && typeof state.val !== udef && state.val != 0){ //Triggered
												result = true;
												resultText = state.plainText;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.triggered").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
											} else { //Not triggered (or STATE not defined)
												if(controlMode && typeof controlMode.val != udef && controlMode.val != controlModeDisarmedValue){ //Armed
													result = true;
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.triggered").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												} else { //Disarmed (or CONTROL_MODE not defined)
													result = false;
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.triggered").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
												}
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											var tileActiveStandard = tileActiveValue || false;
											if(tileActive == null) tileActive = tileActiveStandard;
											if(tileActive){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
											}
											if(controlMode && controlMode.plainText){
												if(resultText == ""){
													resultText = controlMode.plainText;
												} else {
													resultText += ", " + controlMode.plainText;
												}
											}
											resultText = addTimestamp(resultText, [state, controlMode], [_linkedStateId, _linkedControlModeId], _device, tileActive);
											if($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedStateId, _linkedControlModeId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedStateId && !_linkedControlModeId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolBattery":
								if(deviceLinkedStateIds["STATE"] || deviceLinkedStateIds['CHARGING'] || deviceLinkedStateIds['DISCHARGING'] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _device = device;
										var _deviceIdEscaped = deviceIdEscaped;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedChargingId = deviceLinkedStateIds["CHARGING"];
										var _linkedDischargingId = deviceLinkedStateIds["DISCHARGING"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var state = getState(_linkedStateId);
											var charging = getState(_linkedChargingId);
											var discharging = getState(_linkedDischargingId);
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var result;
											var resultText;
											var tileActiveStandard = false;
											var min =  state.min || 0;
											var max =  state.max || 100;
											if(state && typeof state.plainText == 'number'){
												result = state.val;
												resultText = result + state.unit;
											} else if(state){
												result = state.val;
												resultText = state.plainText;
											}
											if(state && typeof state.val !== udef && state.val == min){ //Empty
												tileActiveStandard = false;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.empty").addClass("active");
											} else if(state && typeof state.val !== udef && state.val <= (min + ((max-min) * 0.10))){ //<10%
												tileActiveStandard = true;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged10").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.empty").removeClass("active");
											} else if(state && typeof state.val !== udef && state.val <= (min + ((max-min) * 0.25))){ //<25%
												tileActiveStandard = true;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged25").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.empty").removeClass("active");
											} else if(state && typeof state.val !== udef && state.val <= (min + ((max-min) * 0.50))){ //<50%
												tileActiveStandard = true;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged50").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.empty").removeClass("active");
											} else if(state && typeof state.val !== udef && state.val <= (min + ((max-min) * 0.75))){ //<75%
												tileActiveStandard = true;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.full").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged75").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.empty").removeClass("active");
											} else if(state && typeof state.val !== udef){ //>75%
												tileActiveStandard = true;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.full").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged75").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged50").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged25").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charged10").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.empty").removeClass("active");
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result || 0;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											if(tileActive == null) tileActive = tileActiveStandard;
											if(tileActive){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
											}
											resultText = addTimestamp(resultText, [state, charging, discharging], [_linkedStateId, _linkedDischargingId], _device, tileActive);
											if($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											if(charging && typeof charging.val !== udef && charging.val){ //Charging
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charging").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.charging").removeClass("active");
											}
											if(discharging && typeof discharging.val !== udef && discharging.val){ //Discharging
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.discharging").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.discharging").removeClass("active");
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedStateId, _linkedChargingId, _linkedDischargingId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedStateId && !_linkedChargingId && !_linkedDischargingId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
								break;
								
								case "iQontrolDateAndTime":
								if(deviceLinkedStateIds["STATE"] || deviceLinkedStateIds['SUBJECT'] || deviceLinkedStateIds['TIME'] || deviceLinkedStateIds['RINGING'] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _device = device;
										var _deviceIdEscaped = deviceIdEscaped;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedSubjectId = deviceLinkedStateIds["SUBJECT"];
										var _linkedTimeId = deviceLinkedStateIds["TIME"];
										var _linkedRingingId = deviceLinkedStateIds["RINGING"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var state = getState(_linkedStateId);
											var subject = getState(_linkedSubjectId);
											var time = getState(_linkedTimeId);
											var ringing = getState(_linkedRingingId);
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var _timeFormat = getTimeFormat((getDeviceOptionValue(_device, "timeFormat", true) != "~" && getDeviceOptionValue(_device, "timeFormat", true)) || (time.custom && time.custom.timeFormat) || "x");
											var _timeDisplayFormat = getTimeFormat((getDeviceOptionValue(_device, "timeDisplayFormat", true) != "~" && getDeviceOptionValue(_device, "timeDisplayFormat", true)) || (time.custom && time.custom.timeDisplayFormat) || "dddd, DD.MM.YYYY HH:mm:ss");
											var _periodDisplayFormat = getTimeFormat(replaceTokens(_timeDisplayFormat.string, momentToDurationDisplayFormatTokens));
											var _anypickerTimeDisplayFormat = getTimeFormat(replaceTokens("" + _timeDisplayFormat.string, momentToAnypickerDisplayFormatTokens), "AnyPickerMode");
											var _anypickerTimePickerFormat = getTimeFormat(replaceTokens("" + _anypickerTimeDisplayFormat.string, anypickerDisplayFormatToAnypickerPickerFormatTokens), "AnyPickerMode");
											var result = true;
											var resultText;
											//state
											if(state){
												if(state && typeof state.plainText == 'number'){
													result = state.val;
													resultText = result + state.unit;
												} else if(state){
													result = state.val;
													resultText = state.plainText;
												}
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result || 0;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											//time
											var nowMoment = moment(new Date());
											if(!(time && typeof time.val != udef)) time = {val: 0};
											if(_timeFormat.type == "period"){
												var timeMoment = moment.duration(time.val, _timeFormat.string);
											} else {
												var timeMoment = moment(time.val, _timeFormat.string);
											}
											if(!timeMoment.isValid()) timeMoment = moment(0);
											if(_timeFormat.type == "time" && timeMoment.format("DD.MM.YYYY") == nowMoment.format("DD.MM.YYYY")){
												timeMoment.year(1970).month(0).date(1);
											}									
											//distance
											var distanceText = "";
											var distanceSeconds = 0;
											if(_timeFormat.type != "period"){
												if(time.val != 0){
													var timeDistanceMoment = timeMoment.clone();
													if(_anypickerTimeDisplayFormat.type == "time" && timeDistanceMoment.toDate().getTime() <= 86400000){
														timeDistanceMoment.year(nowMoment.year()).month(nowMoment.month()).date(nowMoment.date()).add(1, 'd');
													}
													var distanceMoment = moment.duration(timeDistanceMoment.diff(nowMoment));
													distanceSeconds = distanceMoment.asSeconds();
													distanceText = distanceMoment.locale(systemLang).humanize(true);
												}
											} else { //period
												distanceSeconds = timeMoment.asSeconds();
												distanceText = timeMoment.locale(systemLang).humanize();
											}
											//tileActive
											if(tileActive == null){
												var dateAndTimeTileActiveConditions = getDeviceOptionValue(_device, "dateAndTimeTileActiveConditions") || [];
												tileActive = true;
												if(dateAndTimeTileActiveConditions.length == 0) tileActive = false;
												if(dateAndTimeTileActiveConditions.indexOf("activeIfStateActive") > -1) tileActive = !(tileActiveValue == false);
												if(dateAndTimeTileActiveConditions.indexOf("activeIfTimeNotZero") > -1 && time.val == 0) tileActive = false;
												if(dateAndTimeTileActiveConditions.indexOf("activeIfTimeInFuture") > -1 && distanceSeconds <= 0) tileActive = false;
												if(dateAndTimeTileActiveConditions.indexOf("activeIfTimeInPast") > -1 && distanceSeconds > 0) tileActive = false;
												var dateAndTimeTileActiveWhenRinging = getDeviceOptionValue(_device, "dateAndTimeTileActiveWhenRinging");
												if(dateAndTimeTileActiveWhenRinging && ringing && typeof ringing.val !== udef && ringing.val) tileActive = true;
											}
											if(tileActive){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
											}
											//resultText
											var resultTextParts = [];
											var dateAndTimeShowInState = getDeviceOptionValue(_device, "dateAndTimeShowInState") || "";
											//--state
											if(resultText && 
											((tileActive && dateAndTimeShowInState.indexOf("showStateIfActive") > -1) 
											|| (!tileActive && dateAndTimeShowInState.indexOf("showStateIfInactive") > -1))) resultTextParts.push(resultText);
											//--time
											if(timeMoment.isValid() &&
											((tileActive && distanceSeconds > 0 && dateAndTimeShowInState.indexOf("showTimeIfActiveAndInFuture") > -1) 
											|| (tileActive && distanceSeconds <= 0 && dateAndTimeShowInState.indexOf("showTimeIfActiveAndInPast") > -1)
											|| (!tileActive && distanceSeconds > 0 && dateAndTimeShowInState.indexOf("showTimeIfInactiveAndInFuture") > -1)
											|| (!tileActive && distanceSeconds <= 0 && dateAndTimeShowInState.indexOf("showTimeIfInactiveAndInPast") > -1)
											)){
												if(_timeFormat.type != "period"){
													resultTextParts.push(timeMoment.locale(systemLang).format(_timeDisplayFormat.string));
												} else {
													resultTextParts.push(timeMoment.locale(systemLang).format(_periodDisplayFormat.string));
												}
											}
											//--distance
											if(distanceText &&
											((tileActive && distanceSeconds > 0 && dateAndTimeShowInState.indexOf("showTimeDistanceIfActiveAndInFuture") > -1) 
											|| (tileActive && distanceSeconds <= 0 && dateAndTimeShowInState.indexOf("showTimeDistanceIfActiveAndInPast") > -1)
											|| (!tileActive && distanceSeconds > 0 && dateAndTimeShowInState.indexOf("showTimeDistanceeIfInactiveAndInFuture") > -1)
											|| (!tileActive && distanceSeconds <= 0 && dateAndTimeShowInState.indexOf("showTimeDistanceIfInactiveAndInPast") > -1)
											)){
												resultTextParts.push(distanceText);
												if(_linkedTimeId && viewTimestampElapsedTimerStates.indexOf(_linkedTimeId) == -1){
													viewTimestampElapsedTimerStates.push(_linkedTimeId);
												}
											}
											//--subject
											var subjectText;
											if(subject){
												if(subject && typeof subject.plainText == 'number'){
													subjectText = result + subject.unit;
												} else if(subject){
													subjectText = subject.plainText;
												}
												if(subjectText && ((tileActive && dateAndTimeShowInState.indexOf("showSubjectIfActive") > -1) || (!tileActive && dateAndTimeShowInState.indexOf("showSubjectIfInactive") > -1))) resultTextParts.push(subjectText);
											}
											resultText = resultTextParts.join(' - ');
											resultText = addTimestamp(resultText, [state, ringing, subject], [_linkedStateId, _linkedRingingId, _linkedSubjectId], _device, tileActive);
											if($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											if(ringing && typeof ringing.val !== udef && ringing.val){ //Ringing
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.ringing").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.ringing").removeClass("active");
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedStateId, _linkedSubjectId, _linkedTimeId, _linkedRingingId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedStateId && !_linkedRingingId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								case "iQontrolMedia":
								if(deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["POWER_SWITCH"] || deviceLinkedStateIds["ARTIST"] || deviceLinkedStateIds["ALBUM"] || deviceLinkedStateIds["TITLE"] || deviceLinkedStateIds["SEASON"] || deviceLinkedStateIds["EPISODE"] || deviceLinkedStateIds["PLAYLIST"] || deviceLinkedStateIds["SOURCE"] || deviceLinkedStateIds["COVER_URL"] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _device = device;
										var _deviceIdEscaped = deviceIdEscaped;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedPowerSwitchId = deviceLinkedStateIds["POWER_SWITCH"];
										var _linkedArtistId = deviceLinkedStateIds["ARTIST"];
										var _linkedAlbumId = deviceLinkedStateIds["ALBUM"];
										var _linkedTitleId = deviceLinkedStateIds["TITLE"];
										var _linkedSeasonId = deviceLinkedStateIds["SEASON"];
										var _linkedEpisodeId = deviceLinkedStateIds["EPISODE"];
										var _linkedPlaylistId = deviceLinkedStateIds["PLAYLIST"];
										var _linkedSourceId = deviceLinkedStateIds["SOURCE"];
										var _linkedCoverUrlId = deviceLinkedStateIds["COVER_URL"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(sourceId){
											var state = getState(_linkedStateId);
											var statePlayValue = getDeviceOptionValue(_device, "statePlayValue") || "play";
											var statePauseValue = getDeviceOptionValue(_device, "statePauseValue") || "pause";
											var stateStopValue = getDeviceOptionValue(_device, "stateStopValue") || "stop";
											var coverImageReloadDelay = 50 + (parseInt(getDeviceOptionValue(_device, "coverImageReloadDelay") || "0") || 0);
											var coverImageNoReloadOnTitleChange = (getDeviceOptionValue(_device, "coverImageNoReloadOnTitleChange") == "true");
											var statePowerSwitch = getState(_linkedPowerSwitchId);
											var artist = getState(_linkedArtistId);
											var album = getState(_linkedAlbumId);
											var title = getState(_linkedTitleId);
											var season = getState(_linkedSeasonId);
											var episode = getState(_linkedEpisodeId);
											var playlist = getState(_linkedPlaylistId);
											var source = getState(_linkedSourceId);
											var coverUrl = getState(_linkedCoverUrlId);
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var result;
											var resultText;
											var tileActiveStandard = false;
											if(state && typeof state.val !== udef) result = state.val;
											if(state && typeof state.val !== udef && ((typeof state.val == "boolean" && state.val) || state.val == statePlayValue)){ //Play
												tileActiveStandard = true;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.play").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.pause").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.stop").removeClass("active");
											} else if(state && typeof state.val !== udef && ((typeof state.val == "boolean" && !state.val) || state.val == statePauseValue)){ //Pause
												if(statePowerSwitch && typeof statePowerSwitch.val !== udef && statePowerSwitch.val) { //Power on
													tileActiveStandard = true;
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												} else { //Power off
													tileActiveStandard = false;
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
												}
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.play").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.pause").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.stop").removeClass("active");
											} else if(state && typeof state.val !== udef && state.val == stateStopValue){ //Stop
												if(statePowerSwitch && typeof statePowerSwitch.val !== udef && statePowerSwitch.val) { //Power on
													tileActiveStandard = true;
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												} else { //Power off
													tileActiveStandard = false;
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
												}
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.play").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.pause").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.stop").addClass("active");
											} else { //Undefined
												if(statePowerSwitch && typeof statePowerSwitch.val !== udef && statePowerSwitch.val) { //Power on
													tileActiveStandard = true;
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
												} else { //Power off
													tileActiveStandard = false;
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
													$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
												}
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.play").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.pause").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.stop").removeClass("active");
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											if(tileActive == null) tileActive = tileActiveStandard;
											if(tileActive){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
											} else {
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
											}
											var resultTextParts = [];
											if(artist && typeof artist.plainText !== udef && artist.plainText !== null && artist.plainText !== "") resultTextParts.push("<b>" + artist.plainText + "</b>");
											if(album && typeof album.plainText !== udef && album.plainText !== null && album.plainText !== "") resultTextParts.push(album.plainText);
											if(title && typeof title.plainText !== udef && title.plainText !== null && title.plainText !== "") resultTextParts.push("<i>" + title.plainText + "</i>");
											if(season && typeof season.plainText !== udef && season.plainText !== null && season.plainText !== "") resultTextParts.push(season.plainText);
											if(episode && typeof episode.plainText !== udef && episode.plainText !== null && episode.plainText !== "") resultTextParts.push(episode.plainText	);
											resultText = resultTextParts.join(" - ");
											if(resultText == "") {
												if(playlist && typeof playlist.plainText !== udef && playlist.plainText !== null && playlist.plainText !== "") {
													resultText = playlist.plainText;
												} else if(source && typeof source.plainText !== udef && source.plainText !== null && source.plainText !== "") {
													resultText = source.plainText;
												}
											}
											resultText = addTimestamp(resultText, [state], [_linkedStateId], _device, tileActive);
											if($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
											//Special: Also update viewUpdate-Functions with _linkedCoverUrlId datapoint (to update icons and background images that are updated via variable)
											if(typeof viewUpdateFunctions[_linkedCoverUrlId] != udef && !(coverImageNoReloadOnTitleChange && sourceId == _linkedTitleId)) viewUpdateFunctions[_linkedCoverUrlId].forEach(function(viewUpdateFunction){
												setTimeout(function(){ viewUpdateFunction(_linkedCoverUrlId, "forceReloadOfImage"); }, coverImageReloadDelay);
											});
											//Special: Also update icons and background-images, that contain the coverUrl and that are _not_ updated via variable
											if(coverUrl && typeof coverUrl.plainText !== udef && coverUrl.plainText !== null && coverUrl.plainText !== ""){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon:not([data-variablesrc])").each(function(){
													if($(this).attr('src').indexOf(coverUrl.plainText) == 0){
														console.log("Force reload of media player icon");
														var newSrc = coverUrl.plainText + "?forceReload = " + Math.floor(new Date().getTime() / 100);
														$(this).attr('src', newSrc);
													}
												});
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceBackgroundImage:not([data-variablebackgroundimage])").each(function(){
													if($(this).css('background-image').indexOf("url:(" + coverUrl.plainText) == 0){
														console.log("Force reload of media player background image");
														var newSrc = "url:(" + coverUrl.plainText + "?forceReload = " + Math.floor(new Date().getTime() / 100) + ")";
														$(this).css('background-image', newSrc);
													}
												});
											}
										};
                                        uiElements.addUpdateFunction([_linkedStateId, _linkedPowerSwitchId, _linkedArtistId, _linkedAlbumId, _linkedTitleId, _linkedSeasonId, _linkedEpisodeId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(!_linkedStateId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
								break;

								default:
								if(deviceLinkedStateIds["STATE"] || deviceLinkedStateIds["LEVEL"] || deviceLinkedStateIds["POWER"] || deviceLinkedStateIds["tileActiveStateId"] || getDeviceOptionValue(device, "tileActiveCondition")){
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _device = device;
										var _deviceIdEscaped = deviceIdEscaped;
										var _linkedStateId = deviceLinkedStateIds["STATE"];
										var _linkedLevelId = deviceLinkedStateIds["LEVEL"];
										var _linkedPowerId = deviceLinkedStateIds["POWER"];
										var _linkedTileActiveStateId = deviceLinkedStateIds["tileActiveStateId"];
										var updateFunction = function(){
											var state = getState(_linkedStateId);
											var level = getState(_linkedLevelId);
											var power = getState(_linkedPowerId);
											var tileActiveStateId = getState(_linkedTileActiveStateId);
											var showStateAndLevelSeparatelyInTile = getDeviceOptionValue(_device, "showStateAndLevelSeparatelyInTile") || "";
											var showPowerAsState = (getDeviceOptionValue(_device, "showPowerAsState") == "true");
											var result;
											var resultText;
											if(!level || typeof level == udef || typeof level.val == udef){
												if(state && typeof state.plainText == 'number'){							//STATE = number (= level); LEVEL = nothing
													result = state.val;
													resultText = result + state.unit;
												} else if(state){ 															//STATE = bool or text; LEVEL = nothing
													result = state.val;
													resultText = state.plainText;
												}
											} else if(level && level.type == 'valueList'){
												if(state && typeof state.val !== udef && typeof state.val !== 'string'){ 	//STATE = bool (or level - but that makes no sense); LEVEL = value-list
													if(state.val) {
														result = level.val;
														resultText = level.plainText;
													} else {
														result = state.val;
														resultText = state.plainText;
													}
												} else if(level) {															//STATE = undefined (or string - but that makes no sense); LEVEL = value-list
													result = level.val;
													resultText = level.plainText;
												}
											} else {
												if(state && typeof state.val !== udef && typeof state.val !== 'string'){ 	//STATE = bool (or level - but that makes no sense); LEVEL = level
													result = state.val * level.val;
													resultText = result + level.unit;
												} else if(level) {															//STATE = undefined (or string - but that makes no sense); LEVEL = level
													result = level.val;
													resultText = result + level.unit;
												}
											}
											if(showPowerAsState && power && power.type){ 
												state = power;
												var val = state.plainText;
												var unit = state.unit;
												if(state.plainText == state.val) val = val + unit;
												resultText = val;
											}												
											if(showStateAndLevelSeparatelyInTile.indexOf('devidedBy') != -1){
												resultText = "";
												if(state && typeof state != udef && state.val != udef){
													var val = state.plainText;
													var unit = state.unit;
													if(state.plainText == state.val) val = val + unit;
													if(showStateAndLevelSeparatelyInTile.indexOf('preceedCaptions') != -1){
														var type = getDeviceOptionValue(_device, "stateCaption");
														if(!type) switch(state.type){
															case "switch": type = "Switch"; break;
															case "button": type = "Button"; break;
															case "level": type = "Level"; break;
															case "valueList": type = "Selection"; break;
															case "string": type = "Text"; break;
															case "time": type = "Time"; break;
															default: type = "State"; break;
														}
														resultText += _(type) + ":&nbsp;";
													}
													resultText += val;
												}
												if(level && typeof level != udef && level.val != udef){
													var val = level.plainText;
													var unit = level.unit;
													if(level.plainText == level.val) val = val + unit;
													if(resultText != ""){
														if(showStateAndLevelSeparatelyInTile.indexOf('devidedByComma') != -1) resultText += ", ";
														else if(showStateAndLevelSeparatelyInTile.indexOf('devidedBySemicolon') != -1) resultText += "; ";
														else if(showStateAndLevelSeparatelyInTile.indexOf('devidedByHyphen') != -1) resultText += "&nbsp;- ";
													}
													if(showStateAndLevelSeparatelyInTile.indexOf('preceedCaptions') != -1){
														var type = getDeviceOptionValue(_device, "levelCaption");
														if(!type) switch(level.type){
															case "switch": type = "Switch"; break;
															case "button": type = "Button"; break;
															case "level": type = "Level"; break;
															case "valueList": type = "Selection"; break;
															case "string": type = "Text"; break;
															case "time": type = "Time"; break;
															default: type = "State"; break;
														}
														resultText += _(type) + ":&nbsp;";
													}
													resultText += val;
												}
											}
											var tileActiveCondition = getDeviceOptionValue(_device, "tileActiveCondition");
											var tileActiveConditionValue = getDeviceOptionValue(_device, "tileActiveConditionValue");
											var tileActiveValue = result;
											if(tileActiveStateId && typeof tileActiveStateId.val != udef){
												tileActiveValue = tileActiveStateId.val;
											}
											var tileActive = checkCondition(tileActiveValue, tileActiveCondition, tileActiveConditionValue);
											if(tileActive == false || (tileActive == null && tileActiveValue == 0)) {
												tileActive = false;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").removeClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").removeClass("active");
											} else {
												tileActive = true;
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevice").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDevicePressureIndicator").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.on").addClass("active");
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceIcon.off").removeClass("active");
											}
											if(resultText == "0%") resultText = _("off");
											resultText = unescape(resultText);
											resultText = addTimestamp(resultText, [state, level], [_linkedStateId, _linkedLevelId], _device, tileActive);
											if(typeof result !== udef && $("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value') !== resultText){
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").data('old-value', resultText);
												$("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState").html(resultText);
											}
											viewShuffleFilterHideDeviceIfInactive();
											stateFillsDeviceCheckForIconToFloat($("[data-iQontrol-Device-ID='" + _deviceIdEscaped + "'].iQontrolDeviceState"));
										};
                                        uiElements.addUpdateFunction([_linkedStateId, _linkedLevelId, _linkedPowerId, _linkedTileActiveStateId, "UPDATE_ONCE"], updateFunction);
//										if(_linkedPowerId && (getDeviceOptionValue(_device, "showPowerAsState") == "true")) viewUpdateFunctions[_linkedPowerId].push(updateFunction);
//										if(!_linkedStateId && !_linkedLevelId && !_linkedTileActiveStateId && getDeviceOptionValue(_device, "tileActiveCondition")) viewUpdateFunctions["UPDATE_ONCE"].push(updateFunction);
									})(); //<--End Closure
								}
							}
						deviceContent += "</div>";



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



