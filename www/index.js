//Settings
var namespace = getUrlParameter('namespace') || 'iqontrol.0';
var connectionLink = location.origin;


var useCache = true;
systemLang = "de";					//Used for translate.js -> _(string) translates string to this language


//Delcarations
var toolbar = {};					//Contains the toolbar (extracted form <namespace + '.Toolbar'>) in the form of {ID}
var toolbarSorted = [];				//Contains the IDs of the toolbar in sorted order
var homeId;							//Contains the ID of the view linked to the first toolbar-item
var actualViewId;					//Contains the ID of the actual View
var actualDialogId;					//Contains the ID of the actual Dialog
var views = {}; 					//Contains all views (extracted from <namespace + '.Views'>) in the form of {ID:[ChildIDs]}
									//Common attributes:
									//	role: Used to describe wich widget schould be displayed
									//Native attributes:
									//	sortPrefix and sortPostfix: are used to sort the views and widgets. They are sortet by the expression <sortPrefix + name + sortPostfix>.
var viewHistory = [];				//History for navigation between views via swipe
var viewHistoryPosition = 0;		//Position in history
var viewLinksToOtherViews = [];		//Will become History when clicking on a link to other view on actual view
var toolbarLinksToOtherViews = [];	//Will become History when clicking on a link to other view on actual view
var usedObjects = {}; 				//Contains all used Objekte in the form of {id:object}
var waitingForObject = {};			//Contains all IDs where actual tasks to retreive the object are running
var states = {}; 					//Contains all used and over the time changed States in the form of {id:stateobject}
var updateViewFunctions = {};		//Used to save all in the view-page currently visible state-ids and how updates have to be handled in the form of {State-ID:[functions(State-ID)]}
var updateDialogFunctions = {}; 	//Same as updateViewFunctions, but for dialog-page
var preventUpdate = {};				//Contains timer-ids in the form of {ID:{timerId, stateId, deviceId, newVal}}. When set, updating of the corresponding stateId is prevented. The contained timer-id is the id of the timer, that will set itself to null, after the time has expired.
const udef = 'undefined'


//++++++++++ WEBSOCKET ++++++++++
connOptions = {
	name:          namespace,  		// optional - default 'vis.0'
	connLink:      connectionLink,  // optional URL of the socket.io adapter
	socketSession: ''           	// optional - used by authentication
};
connCallbacks = {
	onConnChange: function(isConnected) {
		if(isConnected) {
			//Connected -> Starting point
			console.log('connected');
			getStarted();

		} else {
			console.log('disconnected');
		}
	},
	onRefresh: function() {
		console.log('refresh');
		getStarted();
		//window.location.reload();
	},
	onUpdate: function(stateId, state) {
		setTimeout(function() {
			//console.log('NEW VALUE of ' + id + ': ' + JSON.stringify(state));
			states[stateId] = state;
			updateState(stateId);
		}, 0);
	},
	onError: function(err) {
		window.alert(_('Cannot execute %s for %s, because of insufficient permissions', err.command, err.arg), _('Insufficient permissions'), 'alert', 600);
	}
};

//Websocket Help-Functions
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function getStarted(){
	//Fetch functions are synchronous, but before rendering the page the first all necessary information needs to be complete. This is why everything is stacked via callback functions.
	//Get Toolbar (and according objects)
	fetchToolbar(function(){
		console.log("Toolbar received.");
		renderToolbar();
		//Get Views (and according objects)
		renderView(homeId);
		viewHistory = toolbarLinksToOtherViews;
		viewHistoryPosition = 0;
		console.log("Home rendered.");
	});
}

function getEverything(){
	fetchAllViews(function(){
		console.log("All Views received.");
		renderView(actualViewId);
		fetchAllStates(function(){
			console.log("All States received.");
			renderView(actualViewId, "updateOnly");
			fetchAllObjects(function(){
				console.log("All objects received.");
				renderView(actualViewId, "updateOnly");
				renderDialog(actualDialogId, "updateOnly");
				$("#SettingsButtonRenderSettings").attr("disabled", false);
			});
		});
	});
}

function fetchToolbar(callback){
	servConn.getChildren(namespace + ".Toolbar", useCache, function(err, _toolbarIds) {
		toolbar = _toolbarIds;
		var i = 0;
		fetchObject(id = _toolbarIds[i], _callback = function (){
			if(++i < _toolbarIds.length) fetchObject(_toolbarIds[i], _callback); else {		//Iterating through all ToolbarIds
				if(callback) callback();
			}
		});
	});
}

function fetchView(id, callback){
	if(!views[id]){
		fetchChildren(id, views, function (){
			if(callback) callback();
		});
	} else {
		if(callback) callback();
	}
}

function fetchAllViews(callback){
	servConn.getChildren(namespace + ".Views", useCache, function(err, _viewIds) {
		var i = 0;
		fetchChildren(id = _viewIds[i], destination = views, _callback = function (){
			if(++i < _viewIds.length) fetchChildren(_viewIds[i], destination = views, _callback); else {		//Iterating through all ViewIds
				if(callback) callback();
			}
		});
	});
}

function fetchChildren(id, destination, callback){
	fetchObject(id, function(){ //Get Parent-Object
		servConn.getChildren(id, false, function(err, childs, parentId = id){
			if(childs.length > 0){
				destination[parentId] = childs;
				var j = 0;
				fetchObject(id = childs[j], _callback = function(){ //Get Child-Object
					if(++j < childs.length) fetchObject(childs[j], _callback); else {		//Iterating through all childs
						if(callback) callback();
					}
				});
			} else {
				destination[parentId] = [];
				if(callback) callback();
			}
		});
	});
}

function fetchObject(id, callback){
	if (usedObjects[id]) {
		console.log("Object was already Received: " + id);
		if(callback) callback(error = "objectWasAlreadyReceived");	//Do nothing - objects is already retreived
	} else if(waitingForObject[id]){
		console.log("Already waiting for object: " + id);
		if(callback) callback(error = "alreadyWaitingForObject");	//Do nothing - there is already a task running that trys to retrieve the object
	} else {
		waitingForObject[id] = true;
		servConn.getObject(id, useCache, function(err, _object) {
			if(_object) {
				var _id = _object._id;
				delete waitingForObject._id;
				usedObjects[_id] = _object;
				console.log("Fetched Object: " + _id);
				updateState(_id);
				if(callback) callback();
			} else {
				console.log("Object not found");
				if(callback) callback(error = "objectNotFound"); //Object not found
			}
		});
	}
}

function fetchAllObjects(callback){	//Gets all objects - due to performance reasons this is called after the first initialization, wich uses fetchObject(id) to retrieve only the used objects
	servConn.getObjects(useCache, function(err, _objects) {
		if(_objects) {
			usedObjects = _objects;
			waitingForObject = {};
		}
		if(callback) callback();
	});
}

function fetchStates(ids, callback){
	var _ids = [];
	if(ids.constructor === Array) _ids = ids; else _ids.push(ids);
	for(i = 0; i < _ids.length; i++){
		if(states[_ids]) _ids.splice(i, 1);
	}
	if(_ids.length > 0){
		servConn.getStates(_ids, function (err, _states) {
			if(_states){
				states = Object.assign(_states, states);
			}
			if(callback) callback();
		});
	} else {
		if(callback) callback();
	}
}

function fetchAllStates(callback){
	setTimeout(function(){
		servConn.getStates(function (err, _states) {
			if(_states){
				states = _states;
			}
			if(callback) callback();
		});
	}, 1000);
}

function setState(stateId, deviceId, newValue, forceSend, callback, preventUpdateTime){
	var oldValue = "";
	if (!preventUpdateTime) preventUpdateTime = 5000;
	if(typeof states[stateId] !== udef && states[stateId] !== null && typeof states[stateId].val !== udef) oldValue= states[stateId].val;
	if(newValue.toString() !== oldValue.toString() || forceSend == true){ //For pushbuttons send command even when oldValue equals newValue
		console.log(">>>>>> setState " + stateId + ": " + oldValue + " --> " + newValue);
		if (typeof newValue != typeof oldValue){
			switch(typeof oldValue){
				case "string":
				newValue = String(newValue);
				break;
				
				case "number":
				newValue = Number(newValue);
				break;
				
				case "boolean":
				if(newValue == false || newValue == "false" || newValue < 1){
					newValue = false;
				} else {
					newValue = true;
				} 
				break;
			}
			console.log("       converted state to " + typeof oldValue + ". New value is: " + newValue);
		}
		if(preventUpdate[stateId]) clearTimeout(preventUpdate[stateId].timerId);
		(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
			var _stateId = stateId;
			var _deviceId = deviceId;
			var _preventUpdateTime = preventUpdateTime;
			$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceLoading").addClass("active");
			preventUpdate[stateId] = {};
			preventUpdate[stateId].stateId = stateId;
			preventUpdate[stateId].deviceId = deviceId;
			preventUpdate[stateId].newVal = newValue;
			preventUpdate[stateId].timerId = setTimeout(function(){
				console.log("<< preventUpdate dexpired.")
				$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceLoading").removeClass("active");
				delete preventUpdate[_stateId];
				updateState(_stateId);
			}, _preventUpdateTime);
			servConn.setState(stateId, {val: newValue, ack: false} , function(error){
				setTimeout(function(){
					updateState(_stateId, "ignorePreventUpdate");
				}, 200);
				if(callback) callback(error);
			});
		})();
	} else {
		console.log("<<<<<< setState aborted (old Value = new Value = " + newValue.toString() + ")");
	}
}

function setObject(objId, obj, callback){
	servConn.addObject(objId, obj, function(error){
		console.log("setObject ready");
		if(callback) callback(error);
	});
}

//++++++++++ HELPERS ++++++++++
function getLinkedStateId(stateId){
	if (states[stateId]){
		var linkedStateId = states[stateId].val;
		if(!updateViewFunctions[linkedStateId]) updateViewFunctions[linkedStateId] = [];
		if(!updateDialogFunctions[linkedStateId]) updateDialogFunctions[linkedStateId] = [];
		if (linkedStateId && typeof usedObjects[linkedStateId] == udef) {
			fetchObject(linkedStateId, function(error){});
		}
		return linkedStateId;
	} else {
		return null;
	}
}

function getUnit(linkedStateId){
	var unit = "";
	if(usedObjects[linkedStateId]) if(usedObjects[linkedStateId].common.unit) unit = _(usedObjects[linkedStateId].common.unit);
	if(!(unit == "°C" || unit == "°F°" || unit == "%")) unit = "&nbsp;" + unit;
	return unit;
}

function getPlainText(linkedStateId){ //Gets plain text from a state that is a value-list
	var plainText = "";
	var state = getStateObject(linkedStateId);
	if(state) plainText = state.plainText;
	return plainText;
}

function getStateObject(linkedStateId){ //Extends state with, type, readonly-attribute and plain text (that is the text from a state that is a value-list)
	var result;
	if(linkedStateId !== "" && typeof states[linkedStateId] !== udef) {
		result = {};
		result = Object.assign(result, states[linkedStateId]);
	}
	if(linkedStateId !== "" && typeof usedObjects[linkedStateId] !== udef && typeof states[linkedStateId] !== udef && typeof states[linkedStateId].val !== udef) {
		result.unit = getUnit(linkedStateId);
		result.readonly = false;
		if(typeof usedObjects[linkedStateId].common.write !== udef) result.readonly = !usedObjects[linkedStateId].common.write;
		if(typeof usedObjects[linkedStateId].common.min !== udef) result.min = usedObjects[linkedStateId].common.min;
		if(typeof usedObjects[linkedStateId].common.max !== udef) result.max = usedObjects[linkedStateId].common.max;
		result.plainText = "";
		if(usedObjects[linkedStateId].common.role) {
			switch(usedObjects[linkedStateId].common.role){
				case "indicator.state":
				result.plainText = result.val;
				result.type = "string";
				result.readonly = true;
				break;

				case "sensor.window": case "sensor.door": case "sensor.lock":
				if(result.val) result.plainText = _("opened"); else result.plainText = _("closed");
				result.type = "string";
				result.readonly = true;
				break;

				case "sensor.alarm":
				if(result.val) result.plainText = _("OK"); else result.plainText = _("alarm");
				result.type = "string";
				result.readonly = true;
				break;

				case "switch": case "Switch": case "switch.light": case "switch.power": case "switch.boost": case "switch.enable":
				if(typeof result.val == 'string') if (result.val.toLowerCase() == "false" || result.val.toLowerCase() == "off" || result.val.toLowerCase() == "0" || result.val == "") result.val = false; else result.val = true;
				if(result.val) result.plainText = _("on"); else result.plainText = _("off");
				result.type = "switch";
				result.min = 0;
				result.max = 1;
				result.valueList = ["off", "on"];
				break;

				case "level": case "level.dimmer": case "level.blind":
				result.type = "level";
				break;

				case "state":
				result.type = "string";
				if(usedObjects[linkedStateId].native.CONTROL) {
					switch(usedObjects[linkedStateId].native.CONTROL) {
						case "DOOR_SENSOR.STATE":
						if(result.val) result.plainText = _("opened"); else result.plainText = _("closed");
						result.type = "string";
						result.readonly = true;
						break;

						case "DANGER.STATE":
						if(result.val) result.plainText = _("triggered"); else result.plainText = " ";
						result.type = "string";
						result.readonly = true;
						break;
					}
				}
				break;
			}
			if(usedObjects[linkedStateId].common.states){
				var val = result.val;
				if(val == true || val == "true") val = 1;
				if(val == false || val == "false") val = 0;
				if(usedObjects[linkedStateId].common.states[val]) result.plainText = _(usedObjects[linkedStateId].common.states[val]);
				result.valueList = usedObjects[linkedStateId].common.states;
				if (((result.max != udef && result.min != udef && Object.keys(result.valueList).length == result.max - result.min + 1) || (typeof usedObjects[linkedStateId].common.type != udef && usedObjects[linkedStateId].common.type == "boolean")) && result.type != "switch") {
						result.type = "valueList";
				}
			}
		}
		if(result.plainText == "") {
			result.plainText = result.val;
			if(typeof result.val == 'string') {
				var number = result.val * 1;
				if (number.toString() == result.val) result.val = number;
			}
			if(typeof result.val == 'number'){
				result.type = "level";
				var n = 2;
				result.val =  Math.round(result.val * Math.pow(10, n)) / Math.pow(10, n);
			} else { 
				result.type = "string";
			}
		}
	}
	return result;
}

function removeDuplicates(array) { //Removes duplicates from an array
    var seen = {};
    return array.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

function updateState(stateId, ignorePreventUpdate){
	if(preventUpdate[stateId]){
		console.log(">> ack: " + states[stateId].ack + " val: " + states[stateId].val + " newVal: " + preventUpdate[stateId].newVal);
	}
	if (preventUpdate[stateId] && states[stateId].ack && states[stateId].val.toString() == preventUpdate[stateId].newVal.toString()) { //An ack-true value has reached the new value - preventUpdate can be cancelled
		console.log("<< ack-val reached new val: preventUpdate regular ended.");
		$("[data-iQontrol-Device-ID='" + preventUpdate[stateId].deviceId + "'] .iQontrolDeviceLoading").removeClass("active");
		clearTimeout(preventUpdate[stateId].timerId);
		delete preventUpdate[stateId];
	}
	if(updateViewFunctions[stateId]) for (i = 0; i < updateViewFunctions[stateId].length; i++){
		if(!preventUpdate[stateId] || ignorePreventUpdate) updateViewFunctions[stateId][i](stateId);
	}
	if(updateDialogFunctions[stateId]) for (i = 0; i < updateDialogFunctions[stateId].length; i++){
		if(!preventUpdate[stateId] || ignorePreventUpdate == "ignorePreventUpdateForDialog") updateDialogFunctions[stateId][i](stateId);
	}
}

function toggleState(linkedStateId, deviceId, callback){
	var state = getStateObject(linkedStateId);
	if(state){
		switch(state.type){
			case "switch":
			var oldVal = state.val;
			var newVal;
			if(typeof oldVal == 'number'){
				if(oldVal) newVal = 0; else newVal = 1;
			} else {
				if(oldVal.toString() == "true") newVal = false; else newVal = true;
			}
			break;

			case "level":
			var oldVal = state.val;
			var min = 0;
			var max = 100;
			if(typeof usedObjects[linkedStateId] !== udef && typeof usedObjects[linkedStateId].common.min !== udef) min = usedObjects[linkedStateId].common.min;
			if(typeof usedObjects[linkedStateId] !== udef && typeof usedObjects[linkedStateId].common.max !== udef) max = usedObjects[linkedStateId].common.max;
			var newVal;
			if(oldVal > min) newVal = min; else newVal = max;
			break;

			case "valueList":
			var oldVal = state.val;
			if(oldVal == true || oldVal == "true") oldVal = 1;
			if(oldVal == false || oldVal == "false") oldVal = 0;
			var min = 0;
			if(typeof usedObjects[linkedStateId] !== udef && typeof usedObjects[linkedStateId].common.min !== udef) min = usedObjects[linkedStateId].common.min;
			if(typeof state.valueList !== udef && oldVal + 1 >= Object.keys(state.valueList).length) var newVal = min; else newVal = oldVal + 1;
			break;
		}
		setState(linkedStateId, deviceId, newVal, false, callback);
	}
}

function toggleBlind(linkedStateId, linkedDirectionId, linkedStopId, deviceId, callback){
	var state = getStateObject(linkedStateId);
	if(state){
		var direction = getStateObject(linkedDirectionId);
		var stop = getStateObject(linkedStopId);
		if(state.type == "level"){
			if(direction && direction.val > 0 && stop) { //working
				setState(linkedStopId, deviceId, true, false, callback);
			} else { //standing still
				var oldVal = state.val;
				var min = 0;
				var max = 100;
				if(typeof usedObjects[linkedStateId] !== udef && typeof usedObjects[linkedStateId].common.min !== udef) min = usedObjects[linkedStateId].common.min;
				if(typeof usedObjects[linkedStateId] !== udef && typeof usedObjects[linkedStateId].common.max !== udef) max = usedObjects[linkedStateId].common.max;
				var newVal;
				if(oldVal > min) newVal = min; else newVal = max;
				setState(linkedStateId, deviceId, newVal, false, callback);
			}
		}
	}
}

function startProgram(linkedStateId, deviceId, callback){
	console.log("Start");
	console.log(linkedStateId);
	if(linkedStateId){
		setState(linkedStateId, deviceId, true, true, callback);
	}
}

function getTimeFromHMTimeCode(HMTimeCode){
	if(typeof HMTimeCode == udef) return udef;
	//Decodes Homematic Timecode (for example in PARTY_START_TIME)
	var HMTimeCodeTable = [0,30,60,90,120,150,180,210,240,14,44,74,104,134,164,194,224,254,28,58,88,118,148,178,208,238,268,42,72,102,132,162,192,222,252,282,56,86,116,146,176,206,236,266,296,70,100,130];
	var MinutesSinceMidnight = HMTimeCode;
	if (HMTimeCodeTable.indexOf(1 * HMTimeCode) >= 0) MinutesSinceMidnight = 30 * HMTimeCodeTable.indexOf(1 * HMTimeCode);
	var Hour = Math.floor(MinutesSinceMidnight / 60);
	var Minutes = MinutesSinceMidnight - (Hour * 60);
	return Hour + ":" + Minutes;
}

function colorTemperatureToRGB(value,  min,  max){
	var rgbWW = {r: 255, g: 204, b: 82};
	var rgbCW = {r: 174, g: 228, b: 255};
	value = (Math.max(min, Math.min(value, max)) - min) / (max - min); //0...1
	if(value <0.5){
		var rgb = {r: rgbWW.r + ((value/0.5) * 255), g: rgbWW.g + ((value/0.5) * 255), b: rgbWW.b + ((value/0.5) * 255)};
	} else {
		var rgb = {r: rgbCW.r + (((1-value)/0.5) * 255), g: rgbCW.g + (((1-value)/0.5) * 255), b: rgbCW.b + (((1-value)/0.5) * 255)};		
	}
	return rgb;
}

//++++++++++ TOOLBAR ++++++++++
function renderToolbar(){
	toolbarSorted = [];
	for (var i = 0; i < toolbar.length; i++){
		var id = toolbar[i];
		var sortPrefix = "";
		if (usedObjects[id].native.sortPrefix) sortPrefix = usedObjects[id].native.sortPrefix;
		var sortPostfix = "";
		if (usedObjects[id].native.sortPostfix) sortPostfix = usedObjects[id].native.sortPostfix;
		toolbarSorted.push([sortPrefix + usedObjects[id].common.name + sortPostfix, id]);
	}
	toolbarSorted.sort();
	homeId = usedObjects[toolbarSorted[0][1]].native.linkedView;
	var toolbarContent = "";
	toolbarLinksToOtherViews = [];
	toolbarContent += "<div data-role='navbar' data-iconpos='top' id='iQontrolToolbar'><ul>";
		for (var i = 0; i < toolbarSorted.length; i++){
			var id = toolbarSorted[i][1];
			toolbarLinksToOtherViews.push(usedObjects[id].native.linkedView);
			toolbarContent += "<li><a data-icon='" + (usedObjects[id].native.icon || "") + "' onclick='renderView(\"" + usedObjects[id].native.linkedView + "\"); viewHistory = toolbarLinksToOtherViews; viewHistoryPosition = " + (toolbarLinksToOtherViews.length - 1) + ";' class='iQontrolToolbarLink ui-nodisc-icon' data-theme='b' id='iQontrolToolbarLink_" + i + "'>" + usedObjects[id].common.name + "</a></li>";
		}
	toolbarContent += "</ul></div>";
	$("#ToolbarContent").html(toolbarContent);
	$("#ToolbarContent").enhanceWithin();
}

//++++++++++ VIEW ++++++++++
function renderView(id, updateOnly){
	console.log("renderView " + id + ", updateOnly: " + updateOnly);
	if(!id) id = homeId;
	actualViewId = id;
	var toolbarIndex = -1;
	for (var i = 0; i < toolbarSorted.length; i++){
		if(usedObjects[ toolbarSorted[i][1] ].native.linkedView == id) {
			toolbarIndex = i;
			break;
		}
	}
	if(toolbarIndex >= 0) {
		$(".iQontrolToolbarLink").removeClass("ui-btn-active");
		$("#iQontrolToolbarLink_" + toolbarIndex).addClass("ui-btn-active");
	}
	fetchView(id, function(){
		updateViewFunctions = {};
		stateIdsToUpdate = [];
		stateIdsToFetch = [];
		//Sort Devices
		var viewSorted = [];
		for (var i = 0; i < views[id].length; i++){
			var _id = views[id][i];
			var sortPrefix = "";
			if (usedObjects[_id].native.sortPrefix) sortPrefix = usedObjects[_id].native.sortPrefix;
			var sortPostfix = "";
			if (usedObjects[_id].native.sortPostfix) sortPostfix = usedObjects[_id].native.sortPostfix;
			viewSorted.push([sortPrefix + usedObjects[_id].common.name + sortPostfix, _id]);
		}
		viewSorted.sort();
		//Render View
		if(!updateOnly)	if (usedObjects[id] && typeof usedObjects[id].native != udef && usedObjects[id].native.backgroundImage) {
			changeViewBackground(usedObjects[id].native.backgroundImage);
			window.scrollTo(0, 0);
		} else {
			changeViewBackground("");
		}
		var viewContent = "";
		viewLinksToOtherViews = [];
		for (var i = 0; i < viewSorted.length; i++){
			var deviceId = viewSorted[i][1];
			var deviceContent = "";
			if(usedObjects[deviceId].native.heading && usedObjects[deviceId].native.heading !== "") viewContent += "<br><h4>" + usedObjects[deviceId].native.heading + "</h4>";
			//Render Device
			//--Box
			viewContent += "<div class='iQontrolDevice' data-iQontrol-Device-ID='" + deviceId + "'>";
				//--Link to Dialog
				switch(usedObjects[deviceId].common.role){
					case "iQontrolView": case "iQontrolWindow": case "iQontrolDoor": case "iQontrolFire": case "iQontrolTemperature": case "iQontrolHumidity":		
					if (typeof usedObjects[deviceId].native != udef && typeof usedObjects[deviceId].native.linkedView != udef && usedObjects[deviceId].native.linkedView != "") { //Link to other view
						deviceContent += "<a class='iQontrolDeviceLinkToDialog' data-iQontrol-Device-ID='" + deviceId + "' onclick='renderView(\"" + usedObjects[deviceId].native.linkedView + "\"); viewHistory = viewLinksToOtherViews; viewHistoryPosition = " + viewLinksToOtherViews.length + ";'>";
						viewLinksToOtherViews.push(usedObjects[deviceId].native.linkedView);
					} else { //No link
						deviceContent += "<a class='iQontrolDeviceLinkToDialog' data-iQontrol-Device-ID='" + deviceId + "' onclick=''>";		
					}
					break;

					default:
					deviceContent += "<a class='iQontrolDeviceLinkToDialog' data-iQontrol-Device-ID='" + deviceId + "' data-rel='popup' data-transition='pop' data-position-to='window' href='#Dialog' onclick='renderDialog(\"" + deviceId + "\");'>";
				}
					//--BackgroundImage
					switch(usedObjects[deviceId].common.role){
						default:
						var url = "";
						if(usedObjects[deviceId].native.backgroundImage) url = usedObjects[deviceId].native.backgroundImage;
						deviceContent += "<div class='iQontrolDeviceBackgroundImage' data-iQontrol-Device-ID='" + deviceId + "' style='background-image:url(" + url + ");'>";
					}
						//--Background
						deviceContent += "<div class='iQontrolDeviceBackground' data-iQontrol-Device-ID='" + deviceId + "'></div>";
					deviceContent += "</div>";
					//--Icon with Link to Switch
					var linkContent = "";
					var iconContent = "";
					switch(usedObjects[deviceId].common.role){
						case "iQontrolView":
						//Do nothing
						break;

						case "iQontrolThermostat": case "iQontrolHomematicThermostat":
						iconContent += "<image class='iQontrolDeviceIcon on active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/radiator.png' />";
						break;

						case "iQontrolTemperature":
						iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/temperature.png' />";
						iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/temperature.png' />";
						break;

						case "iQontrolHumidity":
						iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/humidity.png' />";
						iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/humidity.png' />";
						break;

						case "iQontrolValue":
						iconContent += "<image class='iQontrolDeviceIcon on active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/value_on.png' />";
						iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/value_off.png' />";
						break;

						case "iQontrolDoor":
						iconContent += "<image class='iQontrolDeviceIcon opened on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/door_opened.png' />";
						iconContent += "<image class='iQontrolDeviceIcon closed off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/door_closed.png' />";
						break;

						case "iQontrolDoorWithLock":
						iconContent += "<image class='iQontrolDeviceIcon opened on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/door_opened.png' />";
						iconContent += "<image class='iQontrolDeviceIcon closed off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/door_closed.png' />";
						iconContent += "<image class='iQontrolDeviceIcon locked' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/door_locked.png' />";
						iconContent += "<image class='iQontrolDeviceIcon unlocked' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/door_unlocked.png' />";
						break;

						case "iQontrolWindow":
						iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/window_opened.png' />";
						iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/window_closed.png' />";
						break;

						case "iQontrolBlind":
						var levelId = deviceId + ".LEVEL";
						var linkedLevelId = getLinkedStateId(levelId);
						var directionId = deviceId + ".DIRECTION";
						var linkedDirectionId = getLinkedStateId(directionId);
						var stopId = deviceId + ".STOP";
						var linkedStopId = getLinkedStateId(stopId);
						var onclick = "";
						if(linkedLevelId) onclick = "toggleBlind(\"" + linkedLevelId + "\", \"" + (linkedDirectionId || "") + "\", \"" + (linkedStopId || "") + "\", \"" + deviceId + "\");";
						linkContent += "<a class='iQontrolDeviceLinkToSwitch' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
							iconContent += "<image class='iQontrolDeviceIcon opened on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/blind_opened.png' />";
							iconContent += "<image class='iQontrolDeviceIcon closed off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/blind_closed.png' />";
							iconContent += "<image class='iQontrolDeviceIcon middle' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/blind_middle.png' />";
							iconContent += "<image class='iQontrolDeviceIcon closing' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/blind_closing.png' />";
							iconContent += "<image class='iQontrolDeviceIcon opening' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/blind_opening.png' />";
						break;

						case "iQontrolFire":
						iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/fire_on.png' />";
						iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/fire_off.png' />";
						break;

						case "iQontrolAlarm":
						iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/alarm_on.png' />";
						iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/alarm_off.png' />";
						break;

						case "iQontrolLight":
						var stateId = deviceId + ".STATE";
						var linkedStateId = getLinkedStateId(stateId);
						var levelId = deviceId + ".LEVEL";
						var linkedLevelId = getLinkedStateId(levelId);
						var onclick = "";
						if(linkedLevelId) onclick = "toggleState(\"" + linkedLevelId + "\", \"" + deviceId + "\");";
						if(linkedStateId) onclick = "toggleState(\"" + linkedStateId + "\", \"" + deviceId + "\");";
						linkContent += "<a class='iQontrolDeviceLinkToSwitch' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
							iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/light_on.png' />";
							iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/light_off.png' />";
						break;

						case "iQontrolProgram": 
						var stateId = deviceId + ".STATE";
						var linkedStateId = getLinkedStateId(stateId);
						var onclick = "";
						//if(linkedStateId) onclick = "startProgram(\"" + linkedStateId + "\", \"" + deviceId + "\");";
						//linkContent += "<a class='iQontrolDeviceLinkToSwitch' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
							iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/play_on.png' />";
							iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/play.png' />";
						break;

						case "iQontrolScene":
						var stateId = deviceId + ".STATE";
						var linkedStateId = getLinkedStateId(stateId);
						var onclick = "";
						if(linkedStateId) onclick = "startProgram(\"" + linkedStateId + "\", \"" + deviceId + "\");";
						linkContent += "<a class='iQontrolDeviceLinkToSwitch' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
							iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/play.png' />";
							iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/play.png' />";
						break;

						case "iQontrolFan":
						var stateId = deviceId + ".STATE";
						var linkedStateId = getLinkedStateId(stateId);
						var onclick = "";
						if(linkedStateId) onclick = "toggleState(\"" + linkedStateId + "\", \"" + deviceId + "\");";
						linkContent += "<a class='iQontrolDeviceLinkToSwitch' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
							iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/fan_on.png' />";
							iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/fan_off.png' />";
						break;

						case "iQontrolSwitch": default:
						var stateId = deviceId + ".STATE";
						var linkedStateId = getLinkedStateId(stateId);
						var onclick = "";
						if(linkedStateId) onclick = "toggleState(\"" + linkedStateId + "\", \"" + deviceId + "\");";
						linkContent += "<a class='iQontrolDeviceLinkToSwitch' data-iQontrol-Device-ID='" + deviceId + "' onclick='" + onclick + "'>";
							iconContent += "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/switch_on.png' />";
							iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='./images/icons/switch_off.png' />";
					}
					if(usedObjects[deviceId] && typeof usedObjects[deviceId].native.icon_on !== udef && usedObjects[deviceId].native.icon_on !== "" && typeof usedObjects[deviceId].native.icon_off !== udef && usedObjects[deviceId].native.icon_off !== ""){
						iconContent = "<image class='iQontrolDeviceIcon on' data-iQontrol-Device-ID='" + deviceId + "' src='" + usedObjects[deviceId].native.icon_on + "' />";
						iconContent += "<image class='iQontrolDeviceIcon off active' data-iQontrol-Device-ID='" + deviceId + "' src='" + usedObjects[deviceId].native.icon_off + "' />";
					}
					if(linkContent !== "") {
						deviceContent += linkContent + iconContent + "</a>";
					} else {
						deviceContent += iconContent;
					}
					//--IconLoading
					deviceContent += "<image class='iQontrolDeviceLoading' data-iQontrol-Device-ID='" + deviceId + "' src='./images/loading.gif'/>";
					//--IconError
					deviceContent += "<image class='iQontrolDeviceError' data-iQontrol-Device-ID='" + deviceId + "' src='./images/error.png'>";
					var stateId = deviceId + ".ERROR";
					var linkedStateId = getLinkedStateId(stateId);
					if (linkedStateId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedStateId = linkedStateId;
							updateViewFunctions[linkedStateId].push(function(){
								var state = getStateObject(_linkedStateId)
								if (typeof state !== udef && state.val) {
									$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceError").addClass("active");
								} else {
									$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceError").removeClass("active");
								}
							});
						})();
						stateIdsToUpdate.push(linkedStateId);
					} else if (linkedStateId === null) stateIdsToFetch.push(stateId);
					//--IconUnreach
					deviceContent += "<image class='iQontrolDeviceUnreach' data-iQontrol-Device-ID='" + deviceId + "' src='./images/unreach.png'>";
					var stateId = deviceId + ".UNREACH";
					var linkedStateId = getLinkedStateId(stateId);
					if (linkedStateId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedStateId = linkedStateId;
							updateViewFunctions[linkedStateId].push(function(){
								if (typeof states[_linkedStateId] !== udef && states[_linkedStateId] !== null && typeof states[_linkedStateId].val !== udef && states[_linkedStateId].val) {
									$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceUnreach").addClass("active");
								} else {
									$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceUnreach").removeClass("active");
								}
							});
						})();
						stateIdsToUpdate.push(linkedStateId);
					} else if (linkedStateId === null) stateIdsToFetch.push(stateId);
					//--IconBattery
					deviceContent += "<image class='iQontrolDeviceBattery' data-iQontrol-Device-ID='" + deviceId + "' src='./images/battery.png'>";
					var stateId = deviceId + ".BATTERY";
					var linkedStateId = getLinkedStateId(stateId);
					if (linkedStateId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedStateId = linkedStateId;
							updateViewFunctions[linkedStateId].push(function(){
								if (typeof states[_linkedStateId] !== udef && states[_linkedStateId] !== null && typeof states[_linkedStateId].val !== udef && states[_linkedStateId].val) {
									$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBattery").addClass("active");
								} else {
									$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBattery").removeClass("active");
								}
							});
						})();
						stateIdsToUpdate.push(linkedStateId);
					} else if (linkedStateId === null) stateIdsToFetch.push(stateId);
					//--Info A
					switch(usedObjects[deviceId].common.role){
						case "iQontrolThermostat": case "iQontrolHomematicThermostat": case "iQontrolHumidity":
						var stateId = deviceId + ".TEMPERATURE";
						var linkedStateId = getLinkedStateId(stateId);
						if (linkedStateId){
							deviceContent += "<image class='iQontrolDeviceInfoAIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/temperature.png'>";
							deviceContent += "<div class='iQontrolDeviceInfoAText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
							(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceId = deviceId;
								var _linkedStateId = linkedStateId;
								updateViewFunctions[linkedStateId].push(function(){
									var unit = getUnit(_linkedStateId);
									if (states[_linkedStateId]) $("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceInfoAText").html(states[_linkedStateId].val + unit);
								});
							})();
							stateIdsToUpdate.push(linkedStateId);
						} else if (linkedStateId === null) stateIdsToFetch.push(stateId);
						break;

						case "iQontrolLight":
						var stateId = deviceId + ".HUE";
						var linkedStateId = getLinkedStateId(stateId);
						if (linkedStateId){
							deviceContent += "<image class='iQontrolDeviceInfoAIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/color.png'>";
							deviceContent += "<div class='iQontrolDeviceInfoAText' data-iQontrol-Device-ID='" + deviceId + "'>&nbsp;&#9608;&#9608;</div>";
							(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceId = deviceId;
								var _linkedStateId = linkedStateId;
								updateViewFunctions[linkedStateId].push(function(){
									if (states[_linkedStateId]){
										var min = 0;
										var max = 359;
										if(typeof usedObjects[_linkedStateId] !== udef && typeof usedObjects[_linkedStateId].common.min !== udef) min = usedObjects[_linkedStateId].common.min;
										if(typeof usedObjects[_linkedStateId] !== udef && typeof usedObjects[_linkedStateId].common.max !== udef) max = usedObjects[_linkedStateId].common.max;
										$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceInfoAText").css("color", "hsl(" + ((states[_linkedStateId].val - min) / (max - min)) * 359 + ", 100%, 50%)");
									}
								});
							})();
							stateIdsToUpdate.push(linkedStateId);
						} else if (linkedStateId === null) stateIdsToFetch.push(stateId);
						break;

						default:
						//Do nothing
					}
					//--Info B
					switch(usedObjects[deviceId].common.role){
						case "iQontrolThermostat": case "iQontrolHomematicThermostat": case "iQontrolTemperature":
						var stateId = deviceId + ".HUMIDITY";
						var linkedStateId = getLinkedStateId(stateId);
						if (linkedStateId) {
							deviceContent += "<image class='iQontrolDeviceInfoBIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/humidity.png' style='display:none;'>";
							deviceContent += "<div class='iQontrolDeviceInfoBText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
							(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceId = deviceId;
								var _linkedStateId = linkedStateId;
								updateViewFunctions[linkedStateId].push(function(){
									var unit = getUnit(_linkedStateId);
									if (states[_linkedStateId] && typeof states[_linkedStateId].val !== udef){
										$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceInfoBIcon").show();
										$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceInfoBText").html(states[_linkedStateId].val + unit);
									} else {
										$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceInfoBIcon").hide();
									}
								});
							})();
							stateIdsToUpdate.push(linkedStateId);
						} else if (linkedStateId === null) stateIdsToFetch.push(stateId);
						break;

						case "iQontrolLight":
						var stateId = deviceId + ".CT";
						var linkedStateId = getLinkedStateId(stateId);
						if (linkedStateId){
							deviceContent += "<image class='iQontrolDeviceInfoBIcon' data-iQontrol-Device-ID='" + deviceId + "' src='./images/colortemperature.png'>";
							deviceContent += "<div class='iQontrolDeviceInfoBText' data-iQontrol-Device-ID='" + deviceId + "'>&nbsp;&#9608;&#9608;</div>";
							(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
								var _deviceId = deviceId;
								var _linkedStateId = linkedStateId;
								updateViewFunctions[linkedStateId].push(function(){
									if (states[_linkedStateId]){
										var min = 0;
										var max = 100;
										if(typeof usedObjects[_linkedStateId] !== udef && typeof usedObjects[_linkedStateId].common.min !== udef) min = usedObjects[_linkedStateId].common.min;
										if(typeof usedObjects[_linkedStateId] !== udef && typeof usedObjects[_linkedStateId].common.max !== udef) max = usedObjects[_linkedStateId].common.max;
										var rgb = colorTemperatureToRGB(states[_linkedStateId].val, min, max);
										$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceInfoBText").css("color", "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")");
									}
								});
							})();
							stateIdsToUpdate.push(linkedStateId);
						} else if (linkedStateId === null) stateIdsToFetch.push(stateId);
						break;

						default:
						//Do nothing
					}
					//--Name
					deviceContent += "<div class='iQontrolDeviceName' data-iQontrol-Device-ID='" + deviceId + "'>";
						switch(usedObjects[deviceId].common.role){
							default:
							deviceContent += usedObjects[deviceId].common.name;
						}
					deviceContent += "</div>";
					//--State
					deviceContent += "<div class='iQontrolDeviceState' data-iQontrol-Device-ID='" + deviceId + "'>";
						switch(usedObjects[deviceId].common.role){
							case "iQontrolView":
							break;

							case "iQontrolProgram":
							var stateId = deviceId + ".STATE";
							var linkedStateId = getLinkedStateId(stateId);
							if (linkedStateId === null) stateIdsToFetch.push(stateId);
							if (linkedStateId){
								(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedStateId = linkedStateId;
									var updateFunction = function(){
										var state = getStateObject(_linkedStateId);
									};
									updateViewFunctions[linkedStateId].push(updateFunction);
								})();
								stateIdsToUpdate.push(linkedStateId);
							}
							break;

							case "iQontrolScene":
							var stateId = deviceId + ".STATE";
							var linkedStateId = getLinkedStateId(stateId);
							if (linkedStateId === null) stateIdsToFetch.push(stateId);
							if (linkedStateId){
								(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedStateId = linkedStateId;
									var updateFunction = function(){
										var state = getStateObject(_linkedStateId);
										if(state && typeof state.val !== udef && state.val !== "false" && state.val !== false && state.val !== 0 && state.val !== "" && state.val !== -1) {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").removeClass("active");
										}
									};
									updateViewFunctions[linkedStateId].push(updateFunction);
								})();
								stateIdsToUpdate.push(linkedStateId);
							}
							break;
														
							case "iQontrolThermostat": case "iQontrolHomematicThermostat":
							var stateId = deviceId + ".SET_TEMPERATURE";
							var linkedStateId = getLinkedStateId(stateId);
							if (linkedStateId === null) stateIdsToFetch.push(stateId);
							var controlModeId = deviceId + ".CONTROL_MODE";
							var linkedControlModeId = getLinkedStateId(controlModeId);
							if (linkedControlModeId === null) stateIdsToFetch.push(controlModeId);
							var partyTemperatureId = deviceId + ".PARTY_TEMPERATURE";
							var linkedPartyTemperatureId = getLinkedStateId(partyTemperatureId);
							if (linkedPartyTemperatureId === null) stateIdsToFetch.push(partyTemperatureId);
							var valveStatesId = deviceId + ".VALVE_STATES";
							var linkedValveStatesId = getLinkedStateId(valveStatesId);
							if (linkedValveStatesId === null) stateIdsToFetch.push(valveStatesId);
							if (linkedStateId){
								(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedStateId = linkedStateId;
									var _linkedControlModeId = linkedControlModeId;
									var _linkedPartyTemperatureId = linkedPartyTemperatureId;
									var updateFunction = function(){
										var unit = getUnit(_linkedStateId);
										var mode = "&nbsp;" + getPlainText(_linkedControlModeId);
										if (states[_linkedStateId]) $("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceState").html(states[_linkedStateId].val + unit + "<span class='small'>" + mode + "</span>");
										if (typeof states[_linkedPartyTemperatureId] !== udef && typeof states[_linkedPartyTemperatureId].val !== udef && states[_linkedPartyTemperatureId].val >= 6) $("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceState").append("&nbsp;<image src='./images/party.png' style='width:12px; height:12px;' />");
										if (typeof states[_linkedStateId] !== udef && typeof states[_linkedStateId].val !== udef && states[_linkedStateId].val > 0) {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").addClass("active");
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").removeClass("active");
										}
									};
									updateViewFunctions[linkedStateId].push(updateFunction);
									updateViewFunctions[linkedControlModeId].push(updateFunction);
									updateViewFunctions[linkedPartyTemperatureId].push(updateFunction);
								})();
								stateIdsToUpdate.push(linkedStateId);
								stateIdsToUpdate.push(linkedControlModeId);
								stateIdsToUpdate.push(linkedPartyTemperatureId);
							}
							break;

							case "iQontrolDoor": case "iQontrolWindow":
							var stateId = deviceId + ".STATE";
							var linkedStateId = getLinkedStateId(stateId);
							if (linkedStateId === null) stateIdsToFetch.push(stateId);
							if (linkedStateId){
								(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedStateId = linkedStateId;
									var updateFunction = function(){
										var state = getStateObject(_linkedStateId);
										var resultText;
										if(state && typeof state.plainText == 'number'){		//STATE = number
											result = state.val;
											resultText = result + state.unit;
										} else if(state){ 										//STATE = bool or text
											result = state.val;
											if(typeof state.val == 'boolean') {					//STATE = bool -> force to opened or closed
												if (result) {
													resultText = _("opened");
												} else {
													resultText = _("closed");
												}
											} else {											//STATE = text
												resultText = state.plainText;
											}
										}
										resultText = unescape(resultText);
										if (typeof result !== udef) $("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceState").html(resultText);
										if (result == 0) {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").removeClass("active");
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
										}
									};
									if(linkedStateId) updateViewFunctions[linkedStateId].push(updateFunction);
								})();
								stateIdsToUpdate.push(linkedStateId);
							}
							break;

							case "iQontrolDoorWithLock":
							var stateId = deviceId + ".STATE";
							var linkedStateId = getLinkedStateId(stateId);
							if (linkedStateId === null) stateIdsToFetch.push(stateId);
							var lockStateId = deviceId + ".LOCK_STATE";
							var linkedLockStateId = getLinkedStateId(lockStateId);
							if (linkedLockStateId === null) stateIdsToFetch.push(lockStateId);
							var lockStateUncertainId = deviceId + ".LOCK_STATE_UNCERTAIN";
							var linkedLockStateUncartainId = getLinkedStateId(lockStateUncertainId);
							if (linkedLockStateUncartainId === null) stateIdsToFetch.push(lockStateUncertainId);
							var lockOpenId = deviceId + ".LOCK_OPEN";
							var linkedLockOpenId = getLinkedStateId(lockOpenId);
							if (linkedLockOpenId === null) stateIdsToFetch.push(lockOpenId);
							if (linkedStateId || linkedLockStateId){
								(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedStateId = linkedStateId;
									var _linkedLockStateId = linkedLockStateId;
									var _linkedLockStateUncertainId = linkedLockStateUncartainId;
									var _linkedLockOpenId = linkedLockOpenId;
									var updateFunction = function(){
										var state = getStateObject(_linkedStateId);
										var lockState = getStateObject(_linkedLockStateId);
										var lockStateUncertain = getStateObject(_linkedLockStateUncertainId);
										var resultText = "";
										if(state && typeof state.val !== udef && state.val){ //Opened
											resultText = _("opened");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.locked").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.unlocked").removeClass("active");
										} else if(lockState && typeof lockState.val !== udef && lockState.val){ //Closed, but unlocked
											resultText = _("unlocked");
											if(lockStateUncertain && typeof lockStateUncertain.val !== udef && lockStateUncertain.val) resultText = "<i>" + resultText + "<i>";
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.locked").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.unlocked").addClass("active");
										} else { //Locked
											resultText = _("locked");
											if(lockStateUncertain && typeof lockStateUncertain.val !== udef && lockStateUncertain.val) resultText = "<i>" + resultText + "</i>";
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.locked").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.unlocked").removeClass("active");
										}
										$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceState").html(resultText);
									};
									if(linkedStateId) updateViewFunctions[linkedStateId].push(updateFunction);
									if(linkedLockStateId) updateViewFunctions[linkedLockStateId].push(updateFunction);
									if(linkedLockStateUncartainId) updateViewFunctions[linkedLockStateUncartainId].push(updateFunction);
								})();
								stateIdsToUpdate.push(linkedStateId);
								stateIdsToUpdate.push(linkedLockStateId);
								stateIdsToUpdate.push(linkedLockStateUncartainId);
								stateIdsToUpdate.push(linkedLockOpenId);
							}
							break;

							case "iQontrolBlind": 
							var levelId = deviceId + ".LEVEL";
							var linkedLevelId = getLinkedStateId(levelId);
							if (linkedLevelId === null) stateIdsToFetch.push(levelId);
							var directionId = deviceId + ".DIRECTION";
							var linkedDirectionId = getLinkedStateId(directionId);
							if (linkedDirectionId === null) stateIdsToFetch.push(directionId);
							var stopId = deviceId + ".STOP";
							var linkedStopId = getLinkedStateId(stopId);
							if (linkedStopId === null) stateIdsToFetch.push(stopId);
							if (linkedLevelId || linkedDirectionId){
								(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedLevelId = linkedLevelId;
									var _linkedDirectionId = linkedDirectionId;
									var updateFunction = function(){
										var level = getStateObject(_linkedLevelId);
										var min = 0;
										var max = 100;
										if(typeof usedObjects[_linkedLevelId] !== udef && typeof usedObjects[_linkedLevelId].common.min !== udef) min = usedObjects[_linkedLevelId].common.min;
										if(typeof usedObjects[_linkedLevelId] !== udef && typeof usedObjects[_linkedLevelId].common.max !== udef) max = usedObjects[_linkedLevelId].common.max;
										var direction = getStateObject(_linkedDirectionId);
										var resultText = "";
										if(level && typeof level.val !== udef && level.val == min){ //Closed
											resultText = _("closed");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.middle").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.opening").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.closing").removeClass("active");
										} else if(level && typeof level.val !== udef && level.val == max){ //Opened
											resultText = _("opened");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.middle").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.opening").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.closing").removeClass("active");

										} else if(direction && typeof direction.val !== udef && direction.val == 1){ //Middle, but opening
											resultText = _("opening");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.middle").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.opening").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.closing").removeClass("active");
										} else if(direction && typeof direction.val !== udef && direction.val == 2){ //Middle, but closing
											resultText = _("closing");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.middle").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.opening").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.closing").addClass("active");
										} else { //Middle with no movement
											resultText = level.val + level.unit;
											if(direction && typeof direction.val !== udef && direction.val == 3) resultText = "<i>" + resultText + "</i>";
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.middle").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.opening").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.closing").removeClass("active");
										}
										$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceState").html(resultText);
									};
									if(linkedLevelId) updateViewFunctions[linkedLevelId].push(updateFunction);
									if(linkedDirectionId) updateViewFunctions[linkedDirectionId].push(updateFunction);
								})();
								stateIdsToUpdate.push(linkedLevelId);
								stateIdsToUpdate.push(linkedDirectionId);
								stateIdsToUpdate.push(linkedStopId);
							}
							break;
							
							default:
							var stateId = deviceId + ".STATE";
							var linkedStateId = getLinkedStateId(stateId);
							if (linkedStateId === null) stateIdsToFetch.push(stateId);
							var levelId = deviceId + ".LEVEL";
							var linkedLevelId = getLinkedStateId(levelId);
							if (linkedLevelId === null) stateIdsToFetch.push(levelId);
							if (linkedStateId || linkedLevelId){
								(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
									var _deviceId = deviceId;
									var _linkedStateId = linkedStateId;
									var _linkedLevelId = linkedLevelId;
									var updateFunction = function(){
										var state = getStateObject(_linkedStateId);
										var level = getStateObject(_linkedLevelId);
										var levelUnit;
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
										} else {
											if(state && typeof state.val !== udef && typeof state.val !== 'string'){ 	//STATE = bool (or level - but that makes no sense); LEVEL = level
												result = state.val * level.val;
												resultText = result + level.unit;
											} else if(level) {															//STATE = undefined (or string - but that makes no sense); LEVEL = level
												result = level.val;
												resultText = result + level.unit;
											}
										}
										if(resultText == "0%") resultText = _("off");
										resultText = unescape(resultText);
										if (typeof result !== udef) $("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceState").html(resultText);
										if (result == 0) {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").removeClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").removeClass("active");
										} else {
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceBackground").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.on").addClass("active");
											$("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceIcon.off").removeClass("active");
										}
									};
									if(linkedStateId) updateViewFunctions[linkedStateId].push(updateFunction);
									if(linkedLevelId) updateViewFunctions[linkedLevelId].push(updateFunction);
								})();
								stateIdsToUpdate.push(linkedStateId);
								stateIdsToUpdate.push(linkedLevelId);
							}
						}
					deviceContent += "</div>";
				deviceContent += "</a>";
				if(updateOnly) $("div.iQontrolDevice [data-iQontrol-Device-ID='" + deviceId + "']").html = deviceContent;
			viewContent += deviceContent + "</div>";
			if(usedObjects[deviceId].native.iQontrolNextLine) viewContent += "<br>";
		}
		if(!updateOnly){
			$("#ViewHeaderTitle").html(usedObjects[id].common.name);
			$("#ViewContent").html(viewContent + "<br><br>");
			removeDuplicates(stateIdsToFetch);
			if(stateIdsToFetch.length > 0) fetchStates(stateIdsToFetch, function(){
				console.log(stateIdsToFetch.length + " states fetched while rendering view.");
				renderView(actualViewId);
			});
		}
		stateIdsToUpdate = removeDuplicates(stateIdsToUpdate);
		fetchStates(stateIdsToUpdate, function(){
			for (var i = 0; i < stateIdsToUpdate.length; i++){
				updateState(stateIdsToUpdate[i], "ignorePreventUpdateForDialog");
			}
			stateIdsToUpdate = [];
		});
	});
}

function changeViewBackground(url){
	$.backstretch(url, {fade: 300});
}

function viewSwipe(direction){
	if(direction == "right") {
		if(viewHistoryPosition > 0){
			viewHistoryPosition--;
			renderView(viewHistory[viewHistoryPosition ]);
		}
	} else if(direction == "left"){
		if(viewHistoryPosition < viewHistory.length - 1){
			viewHistoryPosition++;
			renderView(viewHistory[viewHistoryPosition]);
		}
	}
}

//++++++++++ DIALOG ++++++++++
function renderDialog(deviceId){
	if (typeof deviceId == udef || deviceId == "") return;
	actualDialogId = deviceId;
	updateDialogFunctions = {};
	stateIdsToUpdate = [];
	if(typeof usedObjects[deviceId] !== udef && typeof usedObjects[deviceId].native.readonly !== udef && usedObjects[deviceId].native.readonly !== "" && usedObjects[deviceId].native.readonly !== "false" && usedObjects[deviceId].native.readonly !== false) var dialogReadonly = true; else var dialogReadonly = false;
	//Render Dialog
	var dialogContent = "";
	var dialogBindingFunctions = [];
	dialogContent += "<form class='fullWidthSlider'>";
		//--State & Level
		switch(usedObjects[deviceId].common.role){
			case "iQontrolThermostat": case "iQontrolHomematicThermostat":
			var stateId = deviceId + ".SET_TEMPERATURE";
			var linkedStateId = getLinkedStateId(stateId);
			var state = getStateObject(linkedStateId);
			if(state){
				var min = 6;
				var max = 30;
				if(typeof usedObjects[linkedStateId] !== udef && typeof usedObjects[linkedStateId].common.min !== udef) min = usedObjects[linkedStateId].common.min;
				if(typeof usedObjects[linkedStateId] !== udef && typeof usedObjects[linkedStateId].common.max !== udef) max = usedObjects[linkedStateId].common.max;
				dialogContent += "<label for='DialogStateSlider' ><image src='./images/slider.png' / style='width:16px; height:16px;'>&nbsp;" + _("Goal-Temperature") + ":</label>";
				dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (state.readonly || dialogReadonly).toString() + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogStateSlider' id='DialogStateSlider' min='" + min + "' max='" + max + "' step='0.5'/>";
				if (linkedStateId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = linkedStateId;
						var DialogStateSliderReadoutTimer;
						var updateFunction = function(){
							if (states[_linkedStateId]){
								$("#DialogStateSlider").val(states[_linkedStateId].val);
								$("#DialogStateSlider").slider('refresh');
							}
						};
						updateDialogFunctions[linkedStateId].push(updateFunction);
						var bindingFunction = function(){
							$('#DialogStateSlider').slider({
								start: function(event, ui){
									clearInterval(DialogStateSliderReadoutTimer);
									DialogStateSliderReadoutTimer = setInterval(function(){
										setState(_linkedStateId, _deviceId, $("#DialogStateSlider").val() * 1);
									}, 500);
								},
								stop: function(event, ui) {
									clearInterval(DialogStateSliderReadoutTimer);
									setState(_linkedStateId, _deviceId, $("#DialogStateSlider").val() * 1);
								}
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})();
					stateIdsToUpdate.push(linkedStateId);
				}
			}
			break;

			case "iQontrolDoorWithLock":
			var stateId = deviceId + ".STATE";
			var linkedStateId = getLinkedStateId(stateId);
			var state = getStateObject(linkedStateId);
			if(state){
				dialogContent += "<label for='DialogStateValue'><image src='./images/door.png' / style='width:16px; height:16px;'>&nbsp;" + _("Door") + ":</label>";
				dialogContent += "<input type='button' class='iQontrolDialogValue DialogStateValue' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='true' name='DialogStateValue' id='DialogStateValue' value='' />";
				if (linkedStateId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = linkedStateId;
						var updateFunction = function(){
							if (states[_linkedStateId]){
								if(states[_linkedStateId].val) $("#DialogStateValue").val(_("opened")); else $("#DialogStateValue").val(_("closed"));
								$("#DialogStateValue").button('refresh');
							}
						};
						updateDialogFunctions[linkedStateId].push(updateFunction);
						var bindingFunction = function(){
							$('.DialogStateValueList').on('change', function(e) {
								setState(_linkedStateId, _deviceId, $("#DialogStateValueList option:selected").val());
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})();
					stateIdsToUpdate.push(linkedStateId);
				}
			}
			break;

			case "iQontrolProgram": case "iQontrolScene":
			var stateId = deviceId + ".STATE";
			var linkedStateId = getLinkedStateId(stateId);
			var state = getStateObject(linkedStateId);
			var type = "Program";
			if (usedObjects[deviceId].common.role == "iQontrolScene") type = "Scene";
			if(state){
				dialogContent += "<label for='DialogStateButton' ><image src='./images/program.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
				dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateButton' id='DialogStateButton'>" + _("execute") + "</a>";
				if (linkedStateId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = linkedStateId;
						var bindingFunction = function(){
							$('#DialogStateButton').on('click', function(e) {
								startProgram(_linkedStateId, _deviceId);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})();
					stateIdsToUpdate.push(linkedStateId);
				}
			}
			break;

			default:
			//----State
			var stateId = deviceId + ".STATE";
			var linkedStateId = getLinkedStateId(stateId);
			var state = getStateObject(linkedStateId);
			if(state){
				switch(state.type){
					case "switch":
					dialogContent += "<label for='DialogStateSwitch' ><image src='./images/switch.png' / style='width:16px; height:16px;'>&nbsp;" + _("Switch") + ":</label>";
					dialogContent += "<select data-role='flipswitch' data-mini='false' class='iQontrolDialogSwitch' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (state.readonly || dialogReadonly).toString() + "' name='DialogStateSwitch' id='DialogStateSwitch'>";
						dialogContent += "<option value='false'>0</option>";
						dialogContent += "<option value='true'>I</option>";
					dialogContent += "</select>";
					if (linkedStateId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedStateId = linkedStateId;
							var updateFunction = function(){
								if (states[_linkedStateId]){
									var index = 0;
									if(states[_linkedStateId].val.toString() == "true" || states[_linkedStateId].val.toString() > 0) index = 1; else index = 0;
									$("#DialogStateSwitch")[0].selectedIndex = index;
									$("#DialogStateSwitch").flipswitch('refresh');
								}
							};
							updateDialogFunctions[linkedStateId].push(updateFunction);
							var bindingFunction = function(){
								$('#DialogStateSwitch').on('change', function(e) {
									var newVal = $("#DialogStateSwitch option:selected").val();
									if(typeof states[_linkedStateId].val == 'number'){
										if(newVal) newVal = 1; else newVal = 0;
									}
									setState(_linkedStateId, _deviceId, newVal);
								});
							};
							dialogBindingFunctions.push(bindingFunction);
						})();
						stateIdsToUpdate.push(linkedStateId);
					}
					break;

					case "level":  
					var min = 0;
					var max = 100;
					if(typeof usedObjects[linkedStateId] !== udef && typeof usedObjects[linkedStateId].common.min !== udef) min = usedObjects[linkedStateId].common.min;
					if(typeof usedObjects[linkedStateId] !== udef && typeof usedObjects[linkedStateId].common.max !== udef) max = usedObjects[linkedStateId].common.max;
					dialogContent += "<label for='DialogStateSlider' ><image src='./images/slider.png' / style='width:16px; height:16px;'>&nbsp;" + _("Dimmer") + ":</label>";
					dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (state.readonly || dialogReadonly).toString() + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogStateSlider' id='DialogStateSlider' min='" + min + "' max='" + max + "' step='1'/>";
					if (linkedStateId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedStateId = linkedStateId;
							var DialogStateSliderReadoutTimer;
							var updateFunction = function(){
								if (states[_linkedStateId]){
									$("#DialogStateSlider").val(states[_linkedStateId].val);
									$("#DialogStateSlider").slider('refresh');
								}
							};
							updateDialogFunctions[linkedStateId].push(updateFunction);
							var bindingFunction = function(){
								$('#DialogStateSlider').slider({
									start: function(event, ui){
										clearInterval(DialogStateSliderReadoutTimer);
										DialogStateSliderReadoutTimer = setInterval(function(){
											setState(_linkedStateId, _deviceId, $("#DialogStateSlider").val());
										}, 500);
									},
									stop: function(event, ui) {
										clearInterval(DialogStateSliderReadoutTimer);
										setState(_linkedStateId, _deviceId, $("#DialogStateSlider").val());
									}
								});
							};
							dialogBindingFunctions.push(bindingFunction);
						})();
						stateIdsToUpdate.push(linkedStateId);
					}
					break;

					case "valueList":
					dialogContent += "<label for='DialogStateValueList' ><image src='./images/variable.png' / style='width:16px; height:16px;'>&nbsp;" + _("Selection") + ":</label>";
					dialogContent += "<select  class='iQontrolDialogValueList DialogStateValueList' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (state.readonly || dialogReadonly).toString() + "' name='DialogStateValueList' id='DialogStateValueList' data-native-menu='false'>";
						for(val in state.valueList){
							dialogContent += "<option value='" + val + "'>" + _(state.valueList[val]) + "</option>";
						}
					dialogContent += "</select>";
					if (linkedStateId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedStateId = linkedStateId;
							var updateFunction = function(){
								if (states[_linkedStateId]){
									$("#DialogStateValueList")[0].selectedIndex = states[_linkedStateId].val;
									$("#DialogStateValueList").selectmenu('refresh');
								}
							};
							updateDialogFunctions[linkedStateId].push(updateFunction);
							var bindingFunction = function(){
								$('.DialogStateValueList').on('change', function(e) {
									setState(_linkedStateId, _deviceId, $("#DialogStateValueList option:selected").val());
								});
							};
							dialogBindingFunctions.push(bindingFunction);
						})();
						stateIdsToUpdate.push(linkedStateId);
					}
					break;

					case "string":
					dialogContent += "<label for='DialogStateString' ><image src='./images/variable.png' / style='width:16px; height:16px;'>&nbsp;" + _("Text") + ":</label>";
					dialogContent += "<textarea class='iQontrolDialogString State' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (state.readonly || dialogReadonly).toString() + "' name='DialogStateString' id='DialogStateString'></textarea>";
					if (linkedStateId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedStateId = linkedStateId;
							var updateFunction = function(){
								if (states[_linkedStateId]){
									$("#DialogStateString").val(states[_linkedStateId].val);
									$("#DialogStateString").textinput('refresh');
								}
							};
							updateDialogFunctions[linkedStateId].push(updateFunction);
							var bindingFunction = function(){
								$('#DialogStateString').on('change', function(event, ui) {
									setState(_linkedStateId, _deviceId, $("#DialogStateString").val());
								});
							};
							dialogBindingFunctions.push(bindingFunction);
						})();
						stateIdsToUpdate.push(linkedStateId);
					}
					break;
				}
			}
			//----Level
			var levelId = deviceId + ".LEVEL";
			var linkedLevelId = getLinkedStateId(levelId);
			var level = getStateObject(linkedLevelId);
			if(level){
				if(level.type == "level"){
					var min = 0;
					var max = 100;
					if(typeof usedObjects[linkedLevelId] !== udef && typeof usedObjects[linkedLevelId].common.min !== udef) min = usedObjects[linkedLevelId].common.min;
					if(typeof usedObjects[linkedLevelId] !== udef && typeof usedObjects[linkedLevelId].common.max !== udef) max = usedObjects[linkedLevelId].common.max;
					var type = "Dimmer";
					if (usedObjects[deviceId].common.role == "iQontrolBlind") type = "Height";
					dialogContent += "<label for='DialogLevelSlider' ><image src='./images/slider.png' / style='width:16px; height:16px;'>&nbsp;" + _(type) + ":</label>";
					dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + level.readonly.toString() + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogLevelSlider' id='DialogLevelSlider' min='" + min + "' max='" + max + "' step='1'/>";
					if (linkedLevelId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedLevelId = linkedLevelId;
							var DialogLevelSliderReadoutTimer;
							var updateFunction = function(){
								if (states[_linkedLevelId]){
									$("#DialogLevelSlider").val(states[_linkedLevelId].val);
									$("#DialogLevelSlider").slider('refresh');
								}
							};
							updateDialogFunctions[linkedLevelId].push(updateFunction);
							var bindingFunction = function(){
								$('#DialogLevelSlider').slider({
									start: function(event, ui){
										clearInterval(DialogLevelSliderReadoutTimer);
										DialogLevelSliderReadoutTimer = setInterval(function(){
											setState(_linkedLevelId, _deviceId, $("#DialogLevelSlider").val());
										}, 500);
									},
									stop: function(event, ui) {
										clearInterval(DialogLevelSliderReadoutTimer);
										setState(_linkedLevelId, _deviceId, $("#DialogLevelSlider").val());
									}
								});
							};
							dialogBindingFunctions.push(bindingFunction);
						})();
						stateIdsToUpdate.push(linkedLevelId);
					}
				}
			}
		}
		//--Additional Content
		switch(usedObjects[deviceId].common.role){
			case "iQontrolBlind": 
			//----Blind
			var stateId = deviceId + ".STOP";
			var linkedStateId = getLinkedStateId(stateId);
			var state = getStateObject(linkedStateId);
			if(state){
				dialogContent += "<label for='DialogStateButton' ><image src='./images/stop.png' / style='width:16px; height:16px;'>&nbsp;" + _("Stop") + ":</label>";
				dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogStateButton' id='DialogStateButton'>" + _("Stop	") + "</a>";
				if (linkedStateId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = linkedStateId;
						var bindingFunction = function(){
							$('#DialogStateButton').on('click', function(e) {
								startProgram(_linkedStateId, _deviceId);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})();
					stateIdsToUpdate.push(linkedStateId);
				}
			}
			break;

			case "iQontrolDoorWithLock":
			//----DoorWithLock
			var stateId = deviceId + ".STATE";
			var linkedStateId = getLinkedStateId(stateId);
			var state = getStateObject(linkedStateId);
			var lockStateId = deviceId + ".LOCK_STATE";
			var linkedLockStateId = getLinkedStateId(lockStateId);
			var lockState = getStateObject(linkedLockStateId);
			var lockStateUncertainId = deviceId + ".LOCK_STATE_UNCERTAIN";
			var linkedLockStateUncartainId = getLinkedStateId(lockStateUncertainId);
			var lockStateUncertain = getStateObject(linkedLockStateUncartainId);
			var lockOpenId = deviceId + ".LOCK_OPEN";
			var linkedLockOpenId = getLinkedStateId(lockOpenId);
			var lockOpen = getStateObject(linkedLockOpenId);
			if(lockState || lockOpen){
					dialogContent += "<legend><image src='./images/door_lock.png' / style='width:16px; height:16px;'>&nbsp;" + _("Doorlock") + ":</legend>";
			}
			if(lockOpen){
				dialogContent += "<a data-role='button' data-mini='false' class='iQontrolDialogButton' data-iQontrol-Device-ID='" + deviceId + "' name='DialogLockOpenButton' id='DialogLockOpenButton'>" + _("Open Door") + "</a>";
				if (linkedLockOpenId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedLockOpenId = linkedLockOpenId;
						var bindingFunction = function(){
							$('#DialogLockOpenButton').on('click', function(e) {
								if(confirm(_("Open Door") + "?")) startProgram(_linkedLockOpenId, _deviceId);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})();
					stateIdsToUpdate.push(linkedLockOpenId);
				}
			}
			if(lockState){
				dialogContent += "<fieldset data-role='controlgroup' data-type='horizontal'>"
					dialogContent += "<input type='radio' class='iQontrolDialogCheckboxradio DialogLockStateCheckboxradio' data-iQontrol-Device-ID='" + deviceId + "' name='DialogLockStateCheckboxradio' id='DialogLockStateCheckboxradio_false' value='false' />";
					dialogContent += "<label for='DialogLockStateCheckboxradio_false'>" + _("locked") + "</label>";
					dialogContent += "<input type='radio' class='iQontrolDialogCheckboxradio DialogLockStateCheckboxradio' data-iQontrol-Device-ID='" + deviceId + "' name='DialogLockStateCheckboxradio' id='DialogLockStateCheckboxradio_true' value='true' />";
					dialogContent += "<label for='DialogLockStateCheckboxradio_true'>" + _("unlocked") + "</label>";
				dialogContent += "</fieldset>";
				dialogContent += "<div class='DialogLockStateUncertainText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
				if (linkedStateId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = linkedStateId; 
						var updateFunction = function(){
							if (states[_linkedStateId]){
								if(states[_linkedStateId].val){ //Doop opened - deactivate Doorlock
									$("input[name=DialogLockStateCheckboxradio]").attr("disabled", true);
								} else {
									$("input[name=DialogLockStateCheckboxradio]").attr("disabled", false);
								}
								$(".DialogLockStateCheckboxradio").checkboxradio('refresh');
							}
						};
						updateDialogFunctions[linkedStateId].push(updateFunction);
					})();
					stateIdsToUpdate.push(linkedStateId);
				}
				if (linkedLockStateId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedLockStateId = linkedLockStateId;
						var updateFunction = function(){
							if (states[_linkedLockStateId]){
								if(states[_linkedLockStateId].val == false || states[_linkedLockStateId].val == "false" || states[_linkedLockStateId].val == 0){ //Locked
									$("#DialogLockStateCheckboxradio_false").prop("checked", true);
								} else { //Unlocked
									$("#DialogLockStateCheckboxradio_true").prop("checked", true);
								}
								$(".DialogLockStateCheckboxradio").checkboxradio('refresh');
							}
						};
						updateDialogFunctions[linkedLockStateId].push(updateFunction);
						var bindingFunction = function(){
							$("input[name='DialogLockStateCheckboxradio']").on('click', function(e) {
								var value = $("input[name='DialogLockStateCheckboxradio']:checked").val();
								setState(_linkedLockStateId, _deviceId, value, true, function(){}, 15000);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})();
					stateIdsToUpdate.push(linkedLockStateId);
				}
				if (linkedLockStateUncartainId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedLockStateUncertainId = linkedLockStateUncartainId;
						var updateFunction = function(){
							if (states[_linkedLockStateUncertainId]){
								if(states[_linkedLockStateUncertainId].val == false || states[_linkedLockStateUncertainId].val == "false" || states[_linkedLockStateUncertainId].val == 0){ //State certain
									$("[data-iQontrol-Device-ID='" + _deviceId + "'].DialogLockStateUncertainText").html("");
								} else { //State Uncertain
									$("[data-iQontrol-Device-ID='" + _deviceId + "'].DialogLockStateUncertainText").html("<span class='small'>" + _("Exact position uncertain") + "</span>");
								}
							}
						};
						updateDialogFunctions[linkedLockStateUncartainId].push(updateFunction);
					})();
					stateIdsToUpdate.push(linkedLockStateUncartainId);
				}
			}
			break;

			case "iQontrolThermostat":
			//----Thermostat (but NOT Homematic!) Control Mode
			var stateId = deviceId + ".CONTROL_MODE";
			var linkedStateId = getLinkedStateId(stateId);
			var state = getStateObject(linkedStateId);
			if(state){
				dialogContent += "<label for='DialogThermostatControlModeValueList' ><image src='./images/config.png' / style='width:16px; height:16px;'>&nbsp;" + _("Mode") + ":</label>";
				dialogContent += "<select  class='iQontrolDialogValueList DialogThermostatControlModeValueList' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (state.readonly || dialogReadonly).toString() + "' name='DialogThermostatControlModeValueList' id='DialogThermostatControlModeValueList' data-native-menu='false'>";
					for(val in state.valueList){
						dialogContent += "<option value='" + val + "'>" + _(state.valueList[val]) + "</option>";
					}
				dialogContent += "</select>";
				if (linkedStateId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = linkedStateId;
						var updateFunction = function(){
							if (states[_linkedStateId]){
								$("#DialogThermostatControlModeValueList")[0].selectedIndex = states[_linkedStateId].val;
								$("#DialogThermostatControlModeValueList").selectmenu('refresh');
							}
						};
						updateDialogFunctions[linkedStateId].push(updateFunction);
						var bindingFunction = function(){
							$('.DialogThermostatControlModeValueList').on('change', function(e) {
								setState(_linkedStateId, _deviceId, $("#DialogThermostatControlModeValueList option:selected").val());
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})();
					stateIdsToUpdate.push(linkedStateId);
				}
			}
			break;

			case "iQontrolHomematicThermostat":
			//----Homematic-Thermostat (ONLY Homematic!)
			//------Control Mode
			var stateId = deviceId + ".CONTROL_MODE";
			var linkedStateId = getLinkedStateId(stateId);
			var state = getStateObject(linkedStateId);
			if(state){
				dialogContent += "<fieldset data-role='controlgroup' data-type='horizontal'>"
					dialogContent += "<legend><image src='./images/config.png' / style='width:16px; height:16px;'>&nbsp;" + _("Mode") + ":</legend>";
					for(val in state.valueList){
						if(state.valueList[val] == "PARTY-MODE"){
							var controlModeParty = val;
							continue;
						}
						dialogContent += "<input type='radio' class='iQontrolDialogCheckboxradio DialogThermostatControlModeCheckboxradio' data-iQontrol-Device-ID='" + deviceId + "' name='DialogThermostatControlModeCheckboxradio' id='DialogThermostatControlModeCheckboxradio_" + val + "' value='" + val + "' />";
						dialogContent += "<label for='DialogThermostatControlModeCheckboxradio_" + val + "'>" + _(state.valueList[val]) + "</label>";
					}
				dialogContent += "</fieldset>";
				dialogContent += "<div class='DialogThermostatControlModeText' data-iQontrol-Device-ID='" + deviceId + "'></div>";
				if (linkedStateId){
					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = linkedStateId;
						var _valueList = state.valueList;
						var linkedParentId = _linkedStateId.substring(0, _linkedStateId.lastIndexOf("."));
						var _linkedBoostState = linkedParentId + ".BOOST_STATE";
						var updateFunction = function(){
							if (states[_linkedStateId]){
								$("#DialogThermostatControlModeCheckboxradio_" + states[_linkedStateId].val).prop("checked", true);
								$(".DialogThermostatControlModeCheckboxradio").checkboxradio('refresh');
								var value = $("input[name='DialogThermostatControlModeCheckboxradio']:checked").val();
								if (_valueList[value] == "BOOST-MODE"){
									var unit = getUnit(_linkedBoostState);
									if (states[_linkedBoostState]){
										$("[data-iQontrol-Device-ID='" + _deviceId + "'].DialogThermostatControlModeText").html("<span class='small'>" + _("Remaining Boost Time") + ": " + states[_linkedBoostState].val + unit + "</span>");
									}
								} else {
									$("[data-iQontrol-Device-ID='" + _deviceId + "'].DialogThermostatControlModeText").html("");
								}
							}
						};
						updateDialogFunctions[linkedStateId].push(updateFunction);
						if(!updateDialogFunctions[_linkedBoostState]) updateDialogFunctions[_linkedBoostState] = [];
						updateDialogFunctions[_linkedBoostState].push(updateFunction);
						var bindingFunction = function(){
							$("input[name='DialogThermostatControlModeCheckboxradio']").on('click', function(e) {
								var value = $("input[name='DialogThermostatControlModeCheckboxradio']:checked").val();
								var linkedParentId = _linkedStateId.substring(0, _linkedStateId.lastIndexOf("."));
								var setValue = true;
								var SET_TEMPERATURE = $("#DialogStateSlider").val() * 1;
								if (_valueList[value] == "MANU-MODE") { modeStateId = ".MANU_MODE"; setValue = SET_TEMPERATURE; }
								if (_valueList[value] == "AUTO-MODE") modeStateId = ".AUTO_MODE";
								if (_valueList[value] == "BOOST-MODE") modeStateId = ".BOOST_MODE";
								setState(linkedParentId + modeStateId, _deviceId, setValue, true);
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})();
					stateIdsToUpdate.push(linkedStateId);
				}
				dialogContent += "<br>";

				//------Party-Mode
				var now = new Date();
				var year = now.getFullYear() - 2000;
				var	dialogThermostatPartyModeCollapsibleExpanded = false;

				var stateId = deviceId + ".PARTY_TEMPERATURE";
				var linkedStateId = getLinkedStateId(stateId);
				var state = getStateObject(linkedStateId);
				if(state){
					dialogContent += "<div data-role='collapsible' data-iconpos='right' data-inset='true' id='DialogThermostatPartyModeCollapsible' class=''>";
						dialogContent += "<h4><image src='./images/party.png' / style='width:16px; height:16px;'>&nbsp;" + _("Party-Mode") + ": <span id='DialogThermostatPartyModeText' class='small'></span></h4>";
						dialogContent += "<div id='DialogThermostatPartyModeContent'>";
							dialogContent += "<legend>" + _("Start") + ":</legend>";
							dialogContent += "<fieldset data-role='controlgroup' data-mini='true' data-type='horizontal'>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStartDay' id='DialogThermostatPartyModeStartDay' data-inline='true'>";
									for(var i=1; i<=31; i++){
										dialogContent += "<option>" + i + ".</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStartMonth' id='DialogThermostatPartyModeStartMonth' data-inline='true'>";
									for(var i=1; i<=12; i++){
										dialogContent += "<option>" + i + ".</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStartYear' id='DialogThermostatPartyModeStartYear' data-inline='true'>";
									for(var i=year; i <= year + 5; i++){
										var iString = "20" + i;
										dialogContent += "<option>" + iString + "</option>";
									}
								dialogContent += "</select>";
							dialogContent += "</fieldset>";
							dialogContent += "<fieldset data-role='controlgroup' data-mini='true' data-type='horizontal'>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStartHour' id='DialogThermostatPartyModeStartHour' data-inline='true'>";
									for(var i=0; i<=23; i++){
										if (i<10) var iString = "0" + i; else var iString = i;
										dialogContent += "<option>" + iString + ":</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStartMin' id='DialogThermostatPartyModeStartMin' data-inline='true'>";
									for(var i=0; i<=59; i=i+30){
										if (i<10) var iString = "0" + i; else var iString = i;
										dialogContent += "<option>" + iString + "</option>";
									}
								dialogContent += "</select>";
							dialogContent += "</fieldset>";
							dialogContent += "<div id='DialogThermostatPartyModeStartMomentError' style='display:none'><img src='./images/error.png' style='width: 16px; height: 16px;'><span class='small'>&nbsp;" + _("Must not lay in past") + "</span></img></div><br>"
							dialogContent += "<legend>" + _("End") + ":</legend>";
							dialogContent += "<fieldset data-role='controlgroup' data-mini='true' data-type='horizontal'>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStopDay' id='DialogThermostatPartyModeStopDay' data-inline='true'>";
									for(var i=1; i<=31; i++){
										dialogContent += "<option>" + i + ".</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStopMonth' id='DialogThermostatPartyModeStopMonth' data-inline='true'>";
									for(var i=1; i<=12; i++){
										dialogContent += "<option>" + i + ".</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStopYear' id='DialogThermostatPartyModeStopYear' data-inline='true'>";
									for(var i=year; i <= year + 5; i++){
										var iString = "20" + i;
										dialogContent += "<option>" + iString + "</option>";
									}
								dialogContent += "</select>";
							dialogContent += "</fieldset>";
							dialogContent += "<fieldset data-role='controlgroup' data-mini='true' data-type='horizontal'>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStopHour' id='DialogThermostatPartyModeStopHour' data-inline='true'>";
									for(var i=0; i<=23; i++){
										if (i<10) var iString = "0" + i; else var iString = i;
										dialogContent += "<option>" + iString + ":</option>";
									}
								dialogContent += "</select>";
								dialogContent += "<select class='DialogThermostatPartyModeMomentSelect' name='DialogThermostatPartyModeStopMin' id='DialogThermostatPartyModeStopMin' data-inline='true'>";
									for(var i=0; i<=59; i=i+30){
										if (i<10) var iString = "0" + i; else var iString = i;
										dialogContent += "<option>" + iString + "</option>";
									}
								dialogContent += "</select>";
							dialogContent += "</fieldset>";
							dialogContent += "<div id='DialogThermostatPartyModeStopMomentError' style='display:none'><img src='./images/error.png' style='width: 16px; height: 16px;'><span class='small'>&nbsp;" + _("Has to be after start") + "</span></img></div><br>"
							dialogContent += "<label for='DialogThermostatPartyModeTemperature' >" + _("Goal-Temperature") + ":</label>";
							dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider' data-iQontrol-Device-ID='" + deviceId + "' data-highlight='true' data-popup-enabled='true' data-show-value='true' name='DialogThermostatPartyModeTemperature' id='DialogThermostatPartyModeTemperature' min='5' max='30' step='0.5'/><br>";
							dialogContent += "<div class='ui-grid-a'>";
								dialogContent += "<div class='ui-block-a'><input type='button' value='" + _("Save") + "' name='DialogThermostatPartyModeSave'></div>";
								dialogContent += "<div class='ui-block-b'><input type='button' value='" + _("Delete") + "' name='DialogThermostatPartyModeDelete'></div>";
							dialogContent += "</div>";
						dialogContent += "</div>";
					dialogContent += "</div>";

					(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
						var _deviceId = deviceId;
						var _linkedStateId = linkedStateId;
						var _linkedParentId = _linkedStateId.substring(0, _linkedStateId.lastIndexOf("."));
						var updateFunction = function(){
							if (states[_linkedStateId]){
								state = getStateObject(_linkedStateId);
								var partyModeTemperature = state.val;
								partyModeObjectsToFetch = [];
								if(partyModeTemperature >= 6.0){ //Party-Mode active
									$("#DialogThermostatPartyModeText").html("<br>" + _("programmed to") + " " + partyModeTemperature + state.unit);
									var partyModeStartTimeObject = getStateObject(_linkedParentId + ".PARTY_START_TIME");
									if (partyModeStartTimeObject) {
										var partyModeStartTime = getTimeFromHMTimeCode(partyModeStartTimeObject.val);
										var partyModeStartHour = partyModeStartTime.split(":")[0];
										var partyModeStartMin = partyModeStartTime.split(":")[1];
									} else {
										partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_START_TIME");
									}
									var partyModeStartDayObject = getStateObject(_linkedParentId + ".PARTY_START_DAY")
									if (partyModeStartDayObject) var partyModeStartDay = partyModeStartDayObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_START_DAY");
									var partyModeStartMonthObject = getStateObject(_linkedParentId + ".PARTY_START_MONTH")
									if (partyModeStartMonthObject) var partyModeStartMonth = partyModeStartMonthObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_START_MONTH");
									var partyModeStartYEARObject = getStateObject(_linkedParentId + ".PARTY_START_YEAR")
									if (partyModeStartYEARObject) var partyModeStartYEAR = partyModeStartYEARObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_START_YEAR");
									var partyModeStopTimeObject = getStateObject(_linkedParentId + ".PARTY_STOP_TIME");
									if (partyModeStopTimeObject) {
										var partyModeStopTime = getTimeFromHMTimeCode(partyModeStopTimeObject.val);
										var partyModeStopHour = partyModeStopTime.split(":")[0];
										var partyModeStopMin = partyModeStopTime.split(":")[1];
									} else {
										partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_STOP_TIME");
									}
									var partyModeStopDayObject = getStateObject(_linkedParentId + ".PARTY_STOP_DAY")
									if (partyModeStopDayObject) var partyModeStopDay = partyModeStopDayObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_STOP_DAY");
									var partyModeStopMonthObject = getStateObject(_linkedParentId + ".PARTY_STOP_MONTH")
									if (partyModeStopMonthObject) var partyModeStopMonth = partyModeStopMonthObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_STOP_MONTH");
									var partyModeStopYEARObject = getStateObject(_linkedParentId + ".PARTY_STOP_YEAR")
									if (partyModeStopYEARObject) var partyModeStopYEAR = partyModeStopYEARObject.val; else partyModeObjectsToFetch.push(_linkedParentId + ".PARTY_STOP_YEAR");
								} else { //Party-Mode inactive
									$("#DialogThermostatPartyModeText").html("<br>" + _("inactive"));
									partyModeTemperature = "21";
									var	partyModeStartHour  = now.getHours()
									var partyModeStartMin = Math.floor(now.getMinutes() / 30) * 30;
									var partyModeStartDay = now.getDate();
									var partyModeStartMonth = now.getMonth() + 1;
									var partyModeStartYear = year;
									var	partyModeStopHour  = now.getHours()
									var partyModeStopMin = Math.floor(now.getMinutes() / 30) * 30;
									var partyModeStopDay = now.getDate();
									var partyModeStopMonth = now.getMonth() + 1;
									var partyModeStopYear = year;
								}
								if(!dialogThermostatPartyModeCollapsibleExpanded){
									$("#DialogThermostatPartyModeTemperature").val(partyModeTemperature);
									$("#DialogThermostatPartyModeTemperature").slider('refresh');
									$("#DialogThermostatPartyModeStartDay")[0].selectedIndex = partyModeStartDay - 1;
									$("#DialogThermostatPartyModeStartDay").selectmenu('refresh');
									$("#DialogThermostatPartyModeStartMonth")[0].selectedIndex = partyModeStartMonth - 1;
									$("#DialogThermostatPartyModeStartMonth").selectmenu('refresh');
									$("#DialogThermostatPartyModeStartYear")[0].selectedIndex = partyModeStartYear - year;
									$("#DialogThermostatPartyModeStartYear").selectmenu('refresh');
									$("#DialogThermostatPartyModeStartHour")[0].selectedIndex = partyModeStartHour;
									$("#DialogThermostatPartyModeStartHour").selectmenu('refresh');
									$("#DialogThermostatPartyModeStartMin")[0].selectedIndex = partyModeStartMin / 30;
									$("#DialogThermostatPartyModeStartMin").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopDay")[0].selectedIndex = partyModeStopDay - 1;
									$("#DialogThermostatPartyModeStopDay").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopMonth")[0].selectedIndex = partyModeStopMonth - 1;
									$("#DialogThermostatPartyModeStopMonth").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopYear")[0].selectedIndex = partyModeStopYear - year;
									$("#DialogThermostatPartyModeStopYear").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopHour")[0].selectedIndex = partyModeStopHour;
									$("#DialogThermostatPartyModeStopHour").selectmenu('refresh');
									$("#DialogThermostatPartyModeStopMin")[0].selectedIndex = partyModeStopMin / 30;
									$("#DialogThermostatPartyModeStopMin").selectmenu('refresh');
									dialogThermostatPartyModeCheckConsistency();
								}
								if(partyModeObjectsToFetch.length > 0) {
									fetchStates(partyModeObjectsToFetch, function(){ updateState(_linkedStateId); });
								}
							}
						};
						updateDialogFunctions[linkedStateId].push(updateFunction);
						var bindingFunction = function(){
							$("#DialogThermostatPartyModeCollapsible").on('collapsibleexpand', function() {
								dialogThermostatPartyModeCollapsibleExpanded = true;
							}).on('collapsiblecollapse', function() {
								dialogThermostatPartyModeCollapsibleExpanded = false;
							});
							$(".DialogThermostatPartyModeMomentSelect").on('change', dialogThermostatPartyModeCheckConsistency);
							$("input[name='DialogThermostatPartyModeDelete']").on('click', function(e) {
								$("#DialogThermostatPartyModeTemperature").val(5.0);
								$("#DialogThermostatPartyModeTemperature").slider('refresh');
								$("input[name='DialogThermostatPartyModeSave']").click();
							});
							$("input[name='DialogThermostatPartyModeSave']").on('click', function(e) {
								//Save Party-Mode
								var now = new Date();
								var year = now.getFullYear() - 2000;
								var partyModeTemperature = $("#DialogThermostatPartyModeTemperature").val();
								var partyModeStartTime = ($("#DialogThermostatPartyModeStartHour")[0].selectedIndex * 60) +  ($("#DialogThermostatPartyModeStartMin")[0].selectedIndex * 30);
								var partyModeStartDay = $("#DialogThermostatPartyModeStartDay")[0].selectedIndex + 1;
								var partyModeStartMonth = $("#DialogThermostatPartyModeStartMonth")[0].selectedIndex + 1;
								var partyModeStartYear = $("#DialogThermostatPartyModeStartYear")[0].selectedIndex + year;
								var partyModeStopTime = ($("#DialogThermostatPartyModeStopHour")[0].selectedIndex * 60) +  ($("#DialogThermostatPartyModeStopMin")[0].selectedIndex * 30);
								var partyModeStopDay = $("#DialogThermostatPartyModeStopDay")[0].selectedIndex + 1;
								var partyModeStopMonth = $("#DialogThermostatPartyModeStopMonth")[0].selectedIndex + 1;
								var partyModeStopYear = $("#DialogThermostatPartyModeStopYear")[0].selectedIndex + year;
								// The Value for PARTY_MODE_SUBMIT consists of the following: Temperature,Start_Time,Day,Month,Year,Stop_Time,Day,Month,Year
								if(partyModeTemperature >= 6.0){
									var partyModeSubmitValue = partyModeTemperature + "," + partyModeStartTime + "," + partyModeStartDay + "," + partyModeStartMonth + "," + partyModeStartYear + "," + partyModeStopTime + "," + partyModeStopDay + "," + partyModeStopMonth + "," + partyModeStopYear;
								} else {
									partyModeSubmitValue = "0,0,0,0,0,0,0,0,0";
								}
								setState(_linkedParentId + ".PARTY_MODE_SUBMIT", _deviceId, partyModeSubmitValue, true);
								$("#DialogThermostatPartyModeCollapsible").collapsible("collapse");
							});
						};
						dialogBindingFunctions.push(bindingFunction);
					})();
					stateIdsToUpdate.push(linkedStateId);
				}
			}

			//------Valve States
			var stateId = deviceId + ".VALVE_STATES"; //Special: VALVE_STATES is a JSON Object: {name:linkedStateId, name2:linkedStateId2, ...}
			if(typeof states[stateId] !== udef && typeof states[stateId].val !== udef && states[stateId].val !== "") {
				var linkedStateIds = JSON.parse(states[stateId].val);
			}
			var linkedStateIdsAreValid = false;
			if(linkedStateIds) for(name in linkedStateIds){
				if(typeof linkedStateIds[name] !== udef && linkedStateIds[name] !== "") {
					linkedStateIdsAreValid = true;
					break;
				}
			}
			if(linkedStateIdsAreValid){
				dialogContent += "<div data-role='collapsible' data-iconpos='right' data-inset='true' class=''>";
					dialogContent += "<h4><image src='./images/setpoint.png' / style='width:16px; height:16px;'>&nbsp;" + _("Heating-Valves") + ":</h4>";
					dialogContent += "<div id='DialogThermostatValveStatesContent'>";
						dialogContent += "<div id='DialogThermostatValveStatesContentList' data-iQontrol-Device-ID='" + deviceId + "'></div>";
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedStateIds = linkedStateIds;
							var updateFunction = function(){
								$("#DialogThermostatValveStatesContentList").html("");
								var valveStatesToFetch = [];
								for(name in _linkedStateIds){
									if(states[_linkedStateIds[name]]){
										if(typeof usedObjects[_linkedStateIds[name]] == udef){
											fetchObject(_linkedStateIds[name], function(error){ if(!error) updateState(_linkedStateIds[name]); });
										} else {
											var state = getStateObject(_linkedStateIds[name]);
											if(state) $("#DialogThermostatValveStatesContentList").append("<li>" + name + ": " + state.val + state.unit + "</li>");
										}
									} else {
										valveStatesToFetch.push(_linkedStateIds[name]);
									}
								}
								if(valveStatesToFetch.length > 0) {
									fetchStates(valveStatesToFetch, function(){ updateState(_linkedStateIds[name]); });
								}
							};
							for(name in _linkedStateIds){
								if(!updateDialogFunctions[linkedStateIds[name]]) updateDialogFunctions[linkedStateIds[name]] = [];
								updateDialogFunctions[linkedStateIds[name]].push(updateFunction);
							};
						})();
						for(name in linkedStateIds){stateIdsToUpdate.push(linkedStateIds[name]);};
					dialogContent += "</div>";
				dialogContent += "</div>";
			}
			break;

			default:
			//----ColorPicker
			var hueId = deviceId + ".HUE";
			var linkedHueId = getLinkedStateId(hueId);
			var hue = getStateObject(linkedHueId);
			if(hue){
				if(hue.type == "level"){
					var min = 0;
					var max = 100;
					if(typeof usedObjects[linkedHueId] !== udef && typeof usedObjects[linkedHueId].common.min !== udef) min = usedObjects[linkedHueId].common.min;
					if(typeof usedObjects[linkedHueId] !== udef && typeof usedObjects[linkedHueId].common.max !== udef) max = usedObjects[linkedHueId].common.max;
					dialogContent += "<label for='DialogHueSlider' ><image src='./images/color.png' / style='width:16px; height:16px;'>&nbsp;" + _("Color") + ":</label>";
					dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider colorPicker' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (state.readonly || dialogReadonly).toString() + "' data-highlight='false' data-popup-enabled='true' data-show-value='true' name='DialogHueSlider' id='DialogHueSlider' min='" + min + "' max='" + max + "' step='1'/>";
					if (linkedHueId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedHueId = linkedHueId;
							var DialogHueSliderReadoutTimer;
							var updateFunction = function(){
								if (states[_linkedHueId]){
									$("#DialogHueSlider").val(states[_linkedHueId].val);
									$("#DialogHueSlider").slider('refresh');
								}
							};
							updateDialogFunctions[linkedHueId].push(updateFunction);
							var bindingFunction = function(){
								$('#DialogHueSlider').slider({
									start: function(event, ui){
										clearInterval(DialogHueSliderReadoutTimer);
										DialogHueSliderReadoutTimer = setInterval(function(){
											setState(_linkedHueId, _deviceId, $("#DialogHueSlider").val());
										}, 500);
									},
									stop: function(event, ui) {
										clearInterval(DialogHueSliderReadoutTimer);
										setState(_linkedHueId, _deviceId, $("#DialogHueSlider").val());
									}
								});
							};
							dialogBindingFunctions.push(bindingFunction);
						})();
						stateIdsToUpdate.push(linkedHueId);
					}
				}
			}
			//----ColorTemperaturePicker
			var ctId = deviceId + ".CT";
			var linkedCtId = getLinkedStateId(ctId);
			var ct = getStateObject(linkedCtId);
			if(ct){
				if(ct.type == "level"){
					var min = 0;
					var max = 100;
					if(typeof usedObjects[linkedCtId] !== udef && typeof usedObjects[linkedCtId].common.min !== udef) min = usedObjects[linkedCtId].common.min;
					if(typeof usedObjects[linkedCtId] !== udef && typeof usedObjects[linkedCtId].common.max !== udef) max = usedObjects[linkedCtId].common.max;
					dialogContent += "<label for='DialogCtSlider' ><image src='./images/colortemperature.png' / style='width:16px; height:16px;'>&nbsp;" + _("Color-Temperature") + ":</label>";
					dialogContent += "<input type='number' data-type='range' class='iQontrolDialogSlider colorTemperaturePicker' data-iQontrol-Device-ID='" + deviceId + "' data-disabled='" + (state.readonly || dialogReadonly).toString() + "' data-highlight='false' data-popup-enabled='true' data-show-value='true' name='DialogCtSlider' id='DialogCtSlider' min='" + min + "' max='" + max + "' step='1'/>";
					if (linkedCtId){
						(function(){ //Closure (everything declared inside keeps its value as ist is at the time the function is created)
							var _deviceId = deviceId;
							var _linkedCtId = linkedCtId;
							var DialogCtSliderReadoutTimer;
							var updateFunction = function(){
								if (states[_linkedCtId]){
									$("#DialogCtSlider").val(states[_linkedCtId].val);
									$("#DialogCtSlider").slider('refresh');
								}
							};
							updateDialogFunctions[linkedCtId].push(updateFunction);
							var bindingFunction = function(){
								$('#DialogCtSlider').slider({
									start: function(event, ui){
										clearInterval(DialogCtSliderReadoutTimer);
										DialogCtSliderReadoutTimer = setInterval(function(){
											setState(_linkedCtId, _deviceId, $("#DialogCtSlider").val());
										}, 500);
									},
									stop: function(event, ui) {
										clearInterval(DialogCtSliderReadoutTimer);
										setState(_linkedCtId, _deviceId, $("#DialogCtSlider").val());
									}
								});
							};
							dialogBindingFunctions.push(bindingFunction);
						})();
						stateIdsToUpdate.push(linkedCtId);
					}
				}
			}
		}
	dialogContent += "</form>";
	$("#DialogHeaderTitle").html(usedObjects[deviceId].common.name + ":");
	$("#DialogContent").html(dialogContent);
	$("#Dialog").enhanceWithin();
	$("#Dialog").on("popupafterclose", function(event, ui){
		actualDialogId = "";
		//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Remove Binding Functions!!!!
	});
	for(var i = 0; i < dialogBindingFunctions.length; i++){ dialogBindingFunctions[i](); }
	dialogBindingFunctions = [];
	stateIdsToUpdate = removeDuplicates(stateIdsToUpdate);
	for (var i = 0; i < stateIdsToUpdate.length; i++){updateState(stateIdsToUpdate[i], "ignorePreventUpdateForDialog");}
	stateIdsToUpdate = [];
}

function dialogThermostatPartyModeCheckConsistency(){
	var now = new Date();
	var year = now.getFullYear() - 2000;
	var partyModeStartHour = $("#DialogThermostatPartyModeStartHour")[0].selectedIndex;
	var partyModeStartMin = $("#DialogThermostatPartyModeStartMin")[0].selectedIndex * 30;
	var partyModeStartDay = $("#DialogThermostatPartyModeStartDay")[0].selectedIndex + 1;
	var partyModeStartMonth = $("#DialogThermostatPartyModeStartMonth")[0].selectedIndex + 1;
	var partyModeStartYear = $("#DialogThermostatPartyModeStartYear")[0].selectedIndex + year;
	var partyModeStartMoment = new Date(partyModeStartYear + 2000, partyModeStartMonth - 1, partyModeStartDay, partyModeStartHour, partyModeStartMin);
	var partyModeStopHour = $("#DialogThermostatPartyModeStopHour")[0].selectedIndex;
	var partyModeStopMin = $("#DialogThermostatPartyModeStopMin")[0].selectedIndex * 30;
	var partyModeStopDay = $("#DialogThermostatPartyModeStopDay")[0].selectedIndex + 1;
	var partyModeStopMonth = $("#DialogThermostatPartyModeStopMonth")[0].selectedIndex + 1;
	var partyModeStopYear = $("#DialogThermostatPartyModeStopYear")[0].selectedIndex + year;
	var partyModeStopMoment = new Date(partyModeStopYear + 2000, partyModeStopMonth - 1, partyModeStopDay, partyModeStopHour, partyModeStopMin);
	var error = false;
	if(partyModeStartMoment < now) { $('#DialogThermostatPartyModeStartMomentError').show(); error = true; } else { $('#DialogThermostatPartyModeStartMomentError').hide(); }
	if(partyModeStopMoment <= partyModeStartMoment) { $('#DialogThermostatPartyModeStopMomentError').show(); error = true; } else { $('#DialogThermostatPartyModeStopMomentError').hide(); }
	if(error) $("input[name='DialogThermostatPartyModeSave']").attr("disabled", "disabled"); else $("input[name='DialogThermostatPartyModeSave']").attr("disabled", false);
}

//jQuery and window events
$(document).one("pagecreate", ".swipePage", function(){
	$(document).on("swiperight", ".ui-page", function(event){
		viewSwipe("right");
	});
	$(document).on("swipeleft", ".ui-page", function(event){
		viewSwipe("left");
	});
});

$(document).ready(function(){
	$("[data-role='header'], [data-role='footer']").toolbar();
	$(".settingsToBeRendered").hide();
	servConn.init(connOptions, connCallbacks);
});

$(window).on("orientationchange resize", function(){
	setTimeout(function(){
		$.backstretch("resize");
		console.log("orientationchange");
	}, 250);
});	




