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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
			that.log.debug("ERROR creating " + objId + ": " + err);
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
		await this.createInfoConnection();
		this.setState('info.connection', { val: false, ack: true });
		
		this.log.info("Creating Popup States...");
		await this.createPopup();
		
		this.log.info("Creating Widget States...");
		await this.createWidgets();
		
		//this.log.debug("Created Objects: " + createdObjects.length + " (" + createdObjects.toString() + ")");

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
