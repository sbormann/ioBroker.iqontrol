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
var udef = 'undefined';

function idEncode(id){
	return id.replace(/[\.\]\[\*,;'"`<>?]/g, "_"); //Unallowed chars: .][*,;'"`<>?
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
		});
	}
	
	async createToolbar(){
		if(typeof this.config.toolbar != 'undefined'){
			for(var index = 0; index < this.config.toolbar.length; index++){
				let that = this;
				let objName = this.config.toolbar[index].commonName;
				let objId = "Toolbar." + ('000' + index).slice(-4) + "__" + idEncode(objName);
				let obj = {
					"type": "device",
					"common": {
						"name": objName,
						"desc": "created by iQontrol",
						"role": "iQontrolToolbar",
						"icon": ""
					},
					"native": {
						"sortPrefix": ('000' + index).slice(-4),
						"linkedView": (typeof this.config.toolbar[index].nativeLinkedView != udef && this.config.toolbar[index].nativeLinkedView != "" && (this.namespace + ".Views." + idEncode(this.config.toolbar[index].nativeLinkedView)) || ""),
						"icon": (typeof this.config.toolbar[index].nativeIcon != udef && this.config.toolbar[index].nativeIcon || "")
					}
				};
				createdObjects.push(objId);
				await this.setObjectAsync(objId, obj, true).then(function(){ 
					that.log.debug("created: " + objId); 
				}, function(err){
					that.log.debug("ERROR creating " + objId + ": " + err);
				});
			}
		}
	}
	
	async createViews(){
		if(typeof this.config.views != 'undefined'){
			for(var index = 0; index < this.config.views.length; index++){
				let that = this;
				let objName = this.config.views[index].commonName;
				let objId = "Views." + idEncode(objName);
				let nativeBackgroundImage = this.config.views[index].nativeBackgroundImage.replace(/\\/g, "/") || "";
				let obj = {
					"type": "device",
					"common": {
						"name": objName,
						"desc": "created by iQontrol",
						"role": "iQontrolView",
						"icon": ""
					},
					"native": {
						"sortPrefix": ('000' + index).slice(-4),
						"backgroundImage": (typeof this.config.views[index].nativeBackgroundImage != udef && this.config.views[index].nativeBackgroundImage || "").replace(/\\/g, "/")
					}
				};
				await this.createDevices(index);
				createdObjects.push(objId);
				await this.setObjectAsync(objId, obj, true).then(function(){ 
					that.log.debug("created: " + objId); 
				}, function(err){
					that.log.debug("ERROR creating " + objId + ": " + err);
				});
			}
		}
	}
	
	async createDevices(viewIndex){
		if(typeof this.config.views[viewIndex].devices != 'undefined'){
			for(var index = 0; index < this.config.views[viewIndex].devices.length; index++){
				let that = this;
				let objName = this.config.views[viewIndex].devices[index].commonName;
				let objId = "Views." + idEncode(this.config.views[viewIndex].commonName) + "." + ('000' + index).slice(-4) + "__" + idEncode(objName);
				let obj = {
					"type": "channel",
					"common": {
						"name": objName,
						"desc": "created by iQontrol",
						"role": (typeof this.config.views[viewIndex].devices[index].commonRole != udef && this.config.views[viewIndex].devices[index].commonRole || ""),
						"icon": ""
					},
					"native": {
						"sortPrefix": ('000' + index).slice(-4),
						"heading": (typeof this.config.views[viewIndex].devices[index].nativeHeading != udef && this.config.views[viewIndex].devices[index].nativeHeading || ""),
						"linkedView": (typeof this.config.views[viewIndex].devices[index].nativeLinkedView != udef && this.config.views[viewIndex].devices[index].nativeLinkedView != "" && (this.namespace + ".Views." + idEncode(this.config.views[viewIndex].devices[index].nativeLinkedView)) || ""),
						"backgroundImage": (typeof this.config.views[viewIndex].devices[index].nativeBackgroundImage != udef && this.config.views[viewIndex].devices[index].nativeBackgroundImage || "").replace(/\\/g, "/"),
						"backgroundImageActive": (typeof this.config.views[viewIndex].devices[index].nativeBackgroundImageActive != udef && this.config.views[viewIndex].devices[index].nativeBackgroundImageActive || "").replace(/\\/g, "/")
					}
				};
				if(typeof this.config.views[viewIndex].devices[index].options != 'undefined'){
					for(var i = 0; i < this.config.views[viewIndex].devices[index].options.length; i++){
						let option = this.config.views[viewIndex].devices[index].options[i].option;
						let value = this.config.views[viewIndex].devices[index].options[i].value || "";
						obj.native[option] = value;
					}
				}
				await this.createStates(viewIndex, index);
				createdObjects.push(objId);
				await this.setObjectAsync(objId, obj, true).then(function(){ 
					that.log.debug("created: " + objId); 
				}, function(err){
					that.log.debug("ERROR creating " + objId + ": " + err);
				});
			}
		}
	}

	async createStates(viewIndex, deviceIndex){
		if(typeof this.config.views[viewIndex].devices[deviceIndex].states != 'undefined'){
			for(var index = 0; index < this.config.views[viewIndex].devices[deviceIndex].states.length; index++){
				let that = this;
				let objName = this.config.views[viewIndex].devices[deviceIndex].states[index].state;
				let objId = "Views." + idEncode(this.config.views[viewIndex].commonName) + "." + ('000' + deviceIndex).slice(-4) + "__" + idEncode(this.config.views[viewIndex].devices[deviceIndex].commonName) + "." + objName;
				let objCommonRole = (typeof this.config.views[viewIndex].devices[deviceIndex].states[index].commonRole != udef && this.config.views[viewIndex].devices[deviceIndex].states[index].commonRole || "")
				//For Backward-compatibility: Set role of VALVE_STATES to 'array' and of 'SET_VALUE' to 'const'
				if (objCommonRole == "") {
					if (objName == "VALVE_STATES") {
						objCommonRole = "array";
					} else if (objName == "SET_VALUE") {
						objCommonRole = "const";
					} else {
						objCommonRole = "linkedState";
					}
				} 
				let obj = {
					"type": "state",
					"common": {
						"name": objName,
						"desc": "created by iQontrol",
						"role": objCommonRole,
						"type": "string",
						"icon": "",
						"read": true,
						"write": false,
						"def": ""
					},
					"native": {}
				};
				let stateValue = this.config.views[viewIndex].devices[deviceIndex].states[index].value || "";
				if (objCommonRole == 'const') {
					stateValue = stateValue.replace(/\\n/g, '\n');
					stateValue = "CONST:" + stateValue;
				} else if (objCommonRole == 'array') {
					stateValue = "ARRAY:" + stateValue;
				}					
				createdObjects.push(objId);
				await this.setObjectAsync(objId, obj, true).then(async function(){ 
					that.log.debug("created: " + objId); 
					await that.setStateValue(objId, stateValue);
				}, function(err){
					that.log.debug("ERROR creating " + objId + ": " + err);
				});
			}
		}
	}

	async setStateValue(id, value){
		let that = this;
		await this.setStateAsync(id, value).then(function(){ 
			that.log.debug("set state: " + id + " --> " + value); 
		}, function(err){
			that.log.debug("ERROR setting state " + id + " --> " + value + ": " + err); 
		});
	}

	async createOptions(){
		let that = this;
		let objName = "Options";
		let objId = objName;
		let obj = {
			"type": "device",
			"common": {
				"name": objName,
				"desc": "created by iQontrol",
				"role": "iQontrolOptions",
				"icon": "",
			},
			"native": {
				"version": (this.config.version || 0)
			}
		};
		//Toolbar
		if (this.config.optionsLayoutToolbarFooterColor) obj.native.LayoutToolbarFooterColor = this.config.optionsLayoutToolbarFooterColor;
		if (this.config.optionsLayoutToolbarFooterOpacity) obj.native.LayoutToolbarFooterOpacity = this.config.optionsLayoutToolbarFooterOpacity;
		if (this.config.optionsLayoutToolbarColor) obj.native.LayoutToolbarColor = this.config.optionsLayoutToolbarColor;
		if (this.config.optionsLayoutToolbarTextColor) obj.native.LayoutToolbarTextColor = this.config.optionsLayoutToolbarTextColor;
		if (this.config.optionsLayoutToolbarBorderColor) obj.native.LayoutToolbarBorderColor = this.config.optionsLayoutToolbarBorderColor;
		if (this.config.optionsLayoutToolbarHoverColor) obj.native.LayoutToolbarHoverColor = this.config.optionsLayoutToolbarHoverColor;
		if (this.config.optionsLayoutToolbarHoverTextColor) obj.native.LayoutToolbarHoverTextColor = this.config.optionsLayoutToolbarHoverTextColor;
		if (this.config.optionsLayoutToolbarSelectedColor) obj.native.LayoutToolbarSelectedColor = this.config.optionsLayoutToolbarSelectedColor;
		if (this.config.optionsLayoutToolbarSelectedTextColor) obj.native.LayoutToolbarSelectedTextColor = this.config.optionsLayoutToolbarSelectedTextColor;
		if (this.config.optionsLayoutToolbarSelectedHoverColor) obj.native.LayoutToolbarSelectedHoverColor = this.config.optionsLayoutToolbarSelectedHoverColor;
		if (this.config.optionsLayoutToolbarSelectedHoverTextColor) obj.native.LayoutToolbarSelectedHoverTextColor = this.config.optionsLayoutToolbarSelectedHoverTextColor;
		if (this.config.optionsLayoutToolbarFontSize) obj.native.LayoutToolbarFontSize = this.config.optionsLayoutToolbarFontSize;
		if (this.config.optionsLayoutToolbarFontFamily) obj.native.LayoutToolbarFontFamily = this.config.optionsLayoutToolbarFontFamily;
		if (this.config.optionsLayoutToolbarFontWeight) obj.native.LayoutToolbarFontWeight = this.config.optionsLayoutToolbarFontWeight;
		if (this.config.optionsLayoutToolbarFontStyle) obj.native.LayoutToolbarFontStyle = this.config.optionsLayoutToolbarFontStyle;
		if (this.config.optionsLayoutToolbarIconPosition) obj.native.LayoutToolbarIconPosition = this.config.optionsLayoutToolbarIconPosition;
		if (this.config.optionsLayoutToolbarIconSize) obj.native.LayoutToolbarIconSize = this.config.optionsLayoutToolbarIconSize;
		if (this.config.optionsLayoutToolbarIconColor) obj.native.LayoutToolbarIconColor = this.config.optionsLayoutToolbarIconColor;
		if (this.config.optionsLayoutToolbarIconBackgroundColor) obj.native.LayoutToolbarIconBackgroundColor = this.config.optionsLayoutToolbarIconBackgroundColor;
		if (this.config.optionsLayoutToolbarIconBackgroundSize) obj.native.LayoutToolbarIconBackgroundSize = this.config.optionsLayoutToolbarIconBackgroundSize;
		if (this.config.optionsLayoutToolbarIconBackgroundCornerSize) obj.native.LayoutToolbarIconBackgroundCornerSize = this.config.optionsLayoutToolbarIconBackgroundCornerSize;
		//Main-Header
		if (this.config.optionsLayoutViewMainHeaderColor) obj.native.LayoutViewMainHeaderColor = this.config.optionsLayoutViewMainHeaderColor;
		if (this.config.optionsLayoutViewMainHeaderTextColor) obj.native.LayoutViewMainHeaderTextColor = this.config.optionsLayoutViewMainHeaderTextColor;
		if (this.config.optionsLayoutViewMainHeaderFontSize) obj.native.LayoutViewMainHeaderFontSize = this.config.optionsLayoutViewMainHeaderFontSize;
		if (this.config.optionsLayoutViewMainHeaderFontFamily) obj.native.LayoutViewMainHeaderFontFamily = this.config.optionsLayoutViewMainHeaderFontFamily;
		if (this.config.optionsLayoutViewMainHeaderFontWeight) obj.native.LayoutViewMainHeaderFontWeight = this.config.optionsLayoutViewMainHeaderFontWeight;
		if (this.config.optionsLayoutViewMainHeaderFontStyle) obj.native.LayoutViewMainHeaderFontStyle = this.config.optionsLayoutViewMainHeaderFontStyle;
		if (this.config.optionsLayoutViewMainHeaderPaddingTop) obj.native.LayoutViewMainHeaderPaddingTop = this.config.optionsLayoutViewMainHeaderPaddingTop;
		if (this.config.optionsLayoutViewMainHeaderPaddingBottom) obj.native.LayoutViewMainHeaderPaddingBottom = this.config.optionsLayoutViewMainHeaderPaddingBottom;
		if (this.config.optionsLayoutViewMainHeaderPaddingLeft) obj.native.LayoutViewMainHeaderPaddingLeft = this.config.optionsLayoutViewMainHeaderPaddingLeft;
		if (this.config.optionsLayoutViewMainHeaderMarginTop) obj.native.LayoutViewMainHeaderMarginTop = this.config.optionsLayoutViewMainHeaderMarginTop;
		if (this.config.optionsLayoutViewMainHeaderMarginRight) obj.native.LayoutViewMainHeaderMarginRight = this.config.optionsLayoutViewMainHeaderMarginRight;
		if (this.config.optionsLayoutViewMainHeaderMarginBottom) obj.native.LayoutViewMainHeaderMarginBottom = this.config.optionsLayoutViewMainHeaderMarginBottom;
		if (this.config.optionsLayoutViewMainHeaderMarginLeft) obj.native.LayoutViewMainHeaderMarginLeft = this.config.optionsLayoutViewMainHeaderMarginLeft;
		//Sub-Header
		if (this.config.optionsLayoutViewSubHeaderColor) obj.native.LayoutViewSubHeaderColor = this.config.optionsLayoutViewSubHeaderColor;
		if (this.config.optionsLayoutViewSubHeaderTextColor) obj.native.LayoutViewSubHeaderTextColor = this.config.optionsLayoutViewSubHeaderTextColor;
		if (this.config.optionsLayoutViewSubHeaderFontSize) obj.native.LayoutViewSubHeaderFontSize = this.config.optionsLayoutViewSubHeaderFontSize;
		if (this.config.optionsLayoutViewSubHeaderFontFamily) obj.native.LayoutViewSubHeaderFontFamily = this.config.optionsLayoutViewSubHeaderFontFamily;
		if (this.config.optionsLayoutViewSubHeaderFontWeight) obj.native.LayoutViewSubHeaderFontWeight = this.config.optionsLayoutViewSubHeaderFontWeight;
		if (this.config.optionsLayoutViewSubHeaderFontStyle) obj.native.LayoutViewSubHeaderFontStyle = this.config.optionsLayoutViewSubHeaderFontStyle;
		if (this.config.optionsLayoutViewSubHeaderPaddingTop) obj.native.LayoutViewSubHeaderPaddingTop = this.config.optionsLayoutViewSubHeaderPaddingTop;
		if (this.config.optionsLayoutViewSubHeaderPaddingBottom) obj.native.LayoutViewSubHeaderPaddingBottom = this.config.optionsLayoutViewSubHeaderPaddingBottom;
		if (this.config.optionsLayoutViewSubHeaderPaddingLeft) obj.native.LayoutViewSubHeaderPaddingLeft = this.config.optionsLayoutViewSubHeaderPaddingLeft;
		if (this.config.optionsLayoutViewSubHeaderMarginTop) obj.native.LayoutViewSubHeaderMarginTop = this.config.optionsLayoutViewSubHeaderMarginTop;
		if (this.config.optionsLayoutViewSubHeaderMarginRight) obj.native.LayoutViewSubHeaderMarginRight = this.config.optionsLayoutViewSubHeaderMarginRight;
		if (this.config.optionsLayoutViewSubHeaderMarginBottom) obj.native.LayoutViewSubHeaderMarginBottom = this.config.optionsLayoutViewSubHeaderMarginBottom;
		if (this.config.optionsLayoutViewSubHeaderMarginLeft) obj.native.LayoutViewSubHeaderMarginLeft = this.config.optionsLayoutViewSubHeaderMarginLeft;
		//Inactive Devices - Background
		if (this.config.optionsLayoutViewDeviceColor) obj.native.LayoutViewDeviceColor = this.config.optionsLayoutViewDeviceColor;
		if (this.config.optionsLayoutViewDeviceOpacity) obj.native.LayoutViewDeviceOpacity = this.config.optionsLayoutViewDeviceOpacity;
		if (this.config.optionsLayoutViewDeviceHoverColor) obj.native.LayoutViewDeviceHoverColor = this.config.optionsLayoutViewDeviceHoverColor;
		if (this.config.optionsLayoutViewDeviceHoverOpacity) obj.native.LayoutViewDeviceHoverOpacity = this.config.optionsLayoutViewDeviceHoverOpacity;
		//Inactive Devices - Overlay
		if (this.config.optionsLayoutViewDeviceInactiveColor) obj.native.LayoutViewDeviceInactiveColor = this.config.optionsLayoutViewDeviceInactiveColor;
		if (this.config.optionsLayoutViewDeviceInactiveOpacity) obj.native.LayoutViewDeviceInactiveOpacity = this.config.optionsLayoutViewDeviceInactiveOpacity;
		if (this.config.optionsLayoutViewDeviceInactiveHoverColor) obj.native.LayoutViewDeviceInactiveHoverColor = this.config.optionsLayoutViewDeviceInactiveHoverColor;
		if (this.config.optionsLayoutViewDeviceInactiveHoverOpacity) obj.native.LayoutViewDeviceInactiveHoverOpacity = this.config.optionsLayoutViewDeviceInactiveHoverOpacity;
		//Active Devices - Background
		if (this.config.optionsLayoutViewActiveDeviceColor ) obj.native.LayoutViewActiveDeviceColor = this.config.optionsLayoutViewActiveDeviceColor ;
		if (this.config.optionsLayoutViewActiveDeviceOpacity) obj.native.LayoutViewActiveDeviceOpacity = this.config.optionsLayoutViewActiveDeviceOpacity;
		if (this.config.optionsLayoutViewActiveDeviceHoverColor) obj.native.LayoutViewActiveDeviceHoverColor = this.config.optionsLayoutViewActiveDeviceHoverColor;
		if (this.config.optionsLayoutViewActiveDeviceHoverOpacity) obj.native.LayoutViewActiveDeviceHoverOpacity = this.config.optionsLayoutViewActiveDeviceHoverOpacity;
		//Active Devices - Overlay
		if (this.config.optionsLayoutViewDeviceActiveColor) obj.native.LayoutViewDeviceActiveColor = this.config.optionsLayoutViewDeviceActiveColor;
		if (this.config.optionsLayoutViewDeviceActiveOpacity) obj.native.LayoutViewDeviceActiveOpacity = this.config.optionsLayoutViewDeviceActiveOpacity;
		if (this.config.optionsLayoutViewDeviceActiveHoverColor) obj.native.LayoutViewDeviceActiveHoverColor = this.config.optionsLayoutViewDeviceActiveHoverColor;
		if (this.config.optionsLayoutViewDeviceActiveHoverOpacity) obj.native.LayoutViewDeviceActiveHoverOpacity = this.config.optionsLayoutViewDeviceActiveHoverOpacity;
		//Device-Name
		if (this.config.optionsLayoutViewDeviceNameInactiveTextColor) obj.native.LayoutViewDeviceNameInactiveTextColor = this.config.optionsLayoutViewDeviceNameInactiveTextColor;
		if (this.config.optionsLayoutViewDeviceNameInactiveHoverTextColor) obj.native.LayoutViewDeviceNameInactiveHoverTextColor = this.config.optionsLayoutViewDeviceNameInactiveHoverTextColor;
		if (this.config.optionsLayoutViewDeviceNameActiveTextColor) obj.native.LayoutViewDeviceNameActiveTextColor = this.config.optionsLayoutViewDeviceNameActiveTextColor;
		if (this.config.optionsLayoutViewDeviceNameActiveHoverTextColor) obj.native.LayoutViewDeviceNameActiveHoverTextColor = this.config.optionsLayoutViewDeviceNameActiveHoverTextColor;
		if (this.config.optionsLayoutViewDeviceNameFontFamily) obj.native.LayoutViewDeviceNameFontFamily = this.config.optionsLayoutViewDeviceNameFontFamily;
		if (this.config.optionsLayoutViewDeviceNameFontWeight) obj.native.LayoutViewDeviceNameFontWeight = this.config.optionsLayoutViewDeviceNameFontWeight;
		if (this.config.optionsLayoutViewDeviceNameFontStyle) obj.native.LayoutViewDeviceNameFontStyle = this.config.optionsLayoutViewDeviceNameFontStyle;
		//State
		if (this.config.optionsLayoutViewDeviceStateInactiveTextColor) obj.native.LayoutViewDeviceStateInactiveTextColor = this.config.optionsLayoutViewDeviceStateInactiveTextColor;
		if (this.config.optionsLayoutViewDeviceStateInactiveHoverTextColor) obj.native.LayoutViewDeviceStateInactiveHoverTextColor = this.config.optionsLayoutViewDeviceStateInactiveHoverTextColor;
		if (this.config.optionsLayoutViewDeviceStateActiveTextColor) obj.native.LayoutViewDeviceStateActiveTextColor = this.config.optionsLayoutViewDeviceStateActiveTextColor;
		if (this.config.optionsLayoutViewDeviceStateActiveHoverTextColor) obj.native.LayoutViewDeviceStateActiveHoverTextColor = this.config.optionsLayoutViewDeviceStateActiveHoverTextColor;
		if (this.config.optionsLayoutViewDeviceStateFontFamily) obj.native.LayoutViewDeviceStateFontFamily = this.config.optionsLayoutViewDeviceStateFontFamily;
		if (this.config.optionsLayoutViewDeviceStateFontWeight) obj.native.LayoutViewDeviceStateFontWeight = this.config.optionsLayoutViewDeviceStateFontWeight;
		if (this.config.optionsLayoutViewDeviceStateFontStyle) obj.native.LayoutViewDeviceStateFontStyle = this.config.optionsLayoutViewDeviceStateFontStyle;
		//Info
		if (this.config.optionsLayoutViewDeviceInfoInactiveTextColor) obj.native.LayoutViewDeviceInfoInactiveTextColor = this.config.optionsLayoutViewDeviceInfoInactiveTextColor;
		if (this.config.optionsLayoutViewDeviceInfoInactiveHoverTextColor) obj.native.LayoutViewDeviceInfoInactiveHoverTextColor = this.config.optionsLayoutViewDeviceInfoInactiveHoverTextColor;
		if (this.config.optionsLayoutViewDeviceInfoActiveTextColor) obj.native.LayoutViewDeviceInfoActiveTextColor = this.config.optionsLayoutViewDeviceInfoActiveTextColor;
		if (this.config.optionsLayoutViewDeviceInfoActiveHoverTextColor) obj.native.LayoutViewDeviceInfoActiveHoverTextColor = this.config.optionsLayoutViewDeviceInfoActiveHoverTextColor;
		if (this.config.optionsLayoutViewDeviceInfoFontFamily) obj.native.LayoutViewDeviceInfoFontFamily = this.config.optionsLayoutViewDeviceInfoFontFamily;
		if (this.config.optionsLayoutViewDeviceInfoFontWeight) obj.native.LayoutViewDeviceInfoFontWeight = this.config.optionsLayoutViewDeviceInfoFontWeight;
		if (this.config.optionsLayoutViewDeviceInfoFontStyle) obj.native.LayoutViewDeviceInfoFontStyle = this.config.optionsLayoutViewDeviceInfoFontStyle;
		//Marquee
		if (this.config.optionsLayoutViewMarqueeDisabled) obj.native.LayoutViewMarqueeDisabled = this.config.optionsLayoutViewMarqueeDisabled;
		if (this.config.optionsLayoutViewMarqueeNamesEnabled) obj.native.LayoutViewMarqueeNamesEnabled = this.config.optionsLayoutViewMarqueeNamesEnabled;
		if (this.config.optionsLayoutViewMarqueeSpeed) obj.native.LayoutViewMarqueeSpeed = this.config.optionsLayoutViewMarqueeSpeed;
		//resizeDevicesToFitScreen
		if (this.config.optionsLayoutViewResizeDevicesToFitScreenDisabled) obj.native.LayoutViewResizeDevicesToFitScreenDisabled = this.config.optionsLayoutViewResizeDevicesToFitScreenDisabled;
		if (this.config.optionsLayoutViewResizeDevicesToFitScreenTreshold) obj.native.LayoutViewResizeDevicesToFitScreeTreshold = this.config.optionsLayoutViewResizeDevicesToFitScreenTreshold;
		if (this.config.optionsLayoutViewResizeDevicesToFitScreenOnBigScreens) obj.native.LayoutViewResizeDevicesToFitScreenOnBigScreens = this.config.optionsLayoutViewResizeDevicesToFitScreenOnBigScreens;
		//Return after time
		if (this.config.optionsLayoutViewReturnAfterTimeEnabled) obj.native.LayoutViewReturnAfterTimeEnabled = this.config.optionsLayoutViewReturnAfterTimeEnabled;
		if (this.config.optionsLayoutViewReturnAfterTimeTreshold) obj.native.LayoutViewReturnAfterTimeTreshold = this.config.optionsLayoutViewReturnAfterTimeTreshold;
		if (this.config.optionsLayoutViewReturnAfterTimeDestinationView) obj.native.LayoutViewReturnAfterTimeDestinationView = this.config.optionsLayoutViewReturnAfterTimeDestinationView;
		//Own CSS:
		if (this.config.optionsLayoutCSS) obj.native.LayoutCSS = this.config.optionsLayoutCSS;
		//Options ready
		createdObjects.push("Options");
		await this.setObjectAsync("Options", obj, true).then(function(){ 
			that.log.debug("created: Options"); 
		}, function(err){
			that.log.debug("ERROR creating Options: " + err); 
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
					that.log.debug("DeviceObject " + name + " ist still in use - not deleting.")
				} else {
					that.log.debug("<<<deleteObject " + name);
					that.delObjectAsync(name).then(function(){ 
						that.log.debug("deleted Object " + name);
					}, function(err){
						that.log.debug("ERROR deleting Object " + name + ": " + err); 
					});
				}
			}
		});
	}
	

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here
		this.setState('info.connection', { val: false, ack: true });
		
		this.log.info("Creating Popup States...");
		await this.createPopup();
		
		//this.log.info("Creating Toolbar...");
		//await this.createToolbar();
		
		//this.log.info("Creating Views...");
		//await this.createViews();
		
		//this.log.info("Creating Options...");
		//await this.createOptions();
		
		//this.log.debug("Created Objects: " + createdObjects.length + " (" + createdObjects.toString() + ")");

		this.log.info("Deleting unused Objects...");
		this.deleteUnusedObjects();
		
		//this.subscribeStates("*");
		
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
		if (obj) {
			// The object was changed
			this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
		} else {
			// The object was deleted
			this.log.info(`object ${id} deleted`);
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
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
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
					this.log.info("Popup Duration: " + PopupDuration);
					this.setState('Popup.Duration', { val: PopupDuration, ack: true });
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
