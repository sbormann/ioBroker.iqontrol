//iQontrol - Copyright (c) by Sebatian Bormann
//Please visit https://github.com/sbormann/ioBroker.iqontrol for licence-agreement and further information

//Settings
//connectionLink are defined later inside load-function, because relevant informations are missing at this moment
var namespace = "iqontrol.meta";
var useCache = true;
var userfilesImagePath = "/iqontrol.meta/userimages";
var userfilesImagePathBS = userfilesImagePath.replace(/\//g, "\\");
var iQontrolRoles = {
	"iQontrolView": 				{
										name: "Link to other view", 	
										states: ["ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"]
									},
	"iQontrolSwitch": 				{
										name: "Switch", 				
										states: ["STATE", "POWER", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/switch_on.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolLight": 				{
										name: "Light",
										states: ["STATE", "LEVEL", "HUE", "SATURATION", "COLOR_BRIGHTNESS", "CT", "WHITE_BRIGHTNESS", "ALTERNATIVE_COLORSPACE_VALUE", "POWER", "EFFECT", "EFFECT_NEXT", "EFFECT_SPEED_UP", "EFFECT_SPEED_DOWN", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/light_on.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}, invertCt: {name: "Invert CT (use Kelvin instead of Mired)", type: "checkbox", default: "false"}, alternativeColorspace: {name: "Colorspace for ALTERNATIVE_COLORSPACE_VALUE", type: "select", selectOptions: "/None;RGB/RGB;#RGB/#RGB;RGBW/RGBW;#RGBW/#RGBW;RGBWWCW/RGBWWCW;#RGBWWCW/#RGBWWCW;RGBCWWW/RGBCWWW;#RGBCWWW/#RGBCWWW;RGB_HUEONLY/RGB (Hue only);#RGB_HUEONLY/#RGB (Hue only);HUE_MILIGHT/Hue for Milight", default: ""}}
									},
	"iQontrolFan": 					{
										name: "Fan",
										states: ["STATE", "BATTERY", "UNREACH", "POWER", "ERROR"], 
										icon: "/images/icons/fan_on.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolThermostat": 			{
										name: "Thermostat",
										states: ["SET_TEMPERATURE","TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/radiator.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolHomematicThermostat": 	{
										name: "Homematic-Thermostat",
										states: ["SET_TEMPERATURE", "TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "BOOST_STATE", "PARTY_TEMPERATURE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/radiator.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolTemperature": 			{
										name: "Temperature-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/temperature.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolHumidity": 			{
										name: "Humidity-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/humidity.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolBrightness": 			{
										name: "Brigthness-Sensor",
										states: ["STATE", "BRIGHTNESS", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/brightness_light.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolMotion": 				{
										name: "Motion-Sensor",
										states: ["STATE", "BRIGHTNESS", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/motion_on.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolDoor": 				{
										name: "Door", 
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/door_closed.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolGarageDoor": 				{
										name: "Garage Door", 
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/garagedoor_closed.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolDoorWithLock": 		{
										name: "Door with lock",
										states: ["STATE", "LOCK_STATE", "LOCK_STATE_UNCERTAIN", "LOCK_OPEN", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/door_locked.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolWindow": 				{
										name: "Window",
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/window_closed.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolBlind": 				{
										name: "Blind", 
										states: ["LEVEL", "DIRECTION", "STOP", "UP", "DOWN", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/blind_middle.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}, invertBlindLevel: {name: "Invert LEVEL (0 = open)", type: "checkbox", default: "false"}, directionOpeningValue: {name: "value of DIRECTION for 'opening'", type: "text", default: "1"}, directionClosingValue: {name: "value of DIRECTION for 'closing'", type: "text", default: "2"}, directionUncertainValue: {name: "value of DIRECTION for 'uncertain'", type: "text", default: "3"}}
									},
	"iQontrolFire": 				{
										name: "Fire-Sensor",
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/fire_on.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolAlarm": 				{
										name: "Alarm",
										states: ["STATE", "CONTROL_MODE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"],
										icon: "/images/icons/alarm_on.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolBattery": 				{
										name: "Battery", 
										states: ["STATE", "CHARGING", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/battery_full.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolValue": 				{
										name: "Value",
										states: ["STATE", "LEVEL", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/value_on.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolProgram": 				{
										name: "Program", 
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/play_on.png",
										options: {showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolScene": 				{
										name: "Scene", 	
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/play.png",
										options: {readonly: {name: "Readonly", type: "checkbox", default: "false"}, showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolButton": 				{
										name: "Button", 
										states: ["STATE", "SET_VALUE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/button.png",
										options: {showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolPopup": 				{
										name: "Popup", 	
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/popup.png",
										options: {showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									},
	"iQontrolExternalLink":			{
										name: "External Link",	
										states: ["STATE", "URL", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/link.png",
										options: {showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}}
									}
}

//Delcarations
const udef = 'undefined';

//++++++++++ GLOBAL FUNCTIONS ++++++++++
function initDialog(id, callback) {
	var $dialog = $('#' + id);
	if (!$dialog.data('inited')) {
		$dialog.data('inited', true);
		$dialog.modal({
			dismissible: false
		});

		$dialog.find('.btn-set').on('click', function () {
			var $dialog = $('#' + $(this).data('dialogid'));
			var callback = $dialog.data('callback');
			if (typeof callback === 'function') callback();
			$dialog.data('callback', null);
		});
	}
	$dialog.find('.btn-set').data('dialogid', id);
	$dialog.data('callback', callback);
}

var selectId;
function initSelectId(callback) {
	if (selectId) {
		$('#dialogSelectId').css('z-index', '99999');
		return callback(selectId);
	}
	var options = {
		noMultiselect: true,
		imgPath:       '../../lib/css/fancytree/',
		filter:        {type: 'state'},
		name:          'scenes-select-state',
		texts: {
			select:          _('Select'),
			cancel:          _('Cancel'),
			all:             _('All'),
			id:              _('ID'),
			name:            _('Name'),
			role:            _('Role'),
			room:            _('Room'),
			value:           _('Value'),
			selectid:        _('Select ID'),
			from:            _('From'),
			lc:              _('Last changed'),
			ts:              _('Time stamp'),
			wait:            _('Processing...'),
			ack:             _('Acknowledged'),
			selectAll:       _('Select all'),
			unselectAll:     _('Deselect all'),
			invertSelection: _('Invert selection')
		},
		columns: ['image', 'name', 'role', 'room']
	};
	var toDo = function(){
		options.objects = iobrokerObjects;
		selectId = $('#dialogSelectId').selectId('init', options);
		callback(selectId);
	}
	if (iobrokerObjectsReady) {
		toDo();
	} else {
		iobrokerObjectsReadyFunctions.push(toDo);
	}
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
};

var iobrokerObjects;
var iobrokerObjectsReady = false;
var iobrokerObjectsReadyFunctions = [];


/************** LOAD ********************************************************
*** This will be called by the admin adapter when the settings page loads ***
****************************************************************************/
function load(settings, onChange) {
//++++++++++ START ++++++++++
	//Loading begins
	var loading = true;

	//Hide Settings
	console.log("Loading Settings");
	$('.hideOnLoad').hide();
	$('.showOnLoad').show();

	//Init Colorpickers
	$('.MaterializeColorPicker').colorpicker().on('changeColor', function(event){
		$(this).css('border-right', '10px solid rgba(' + event.color.toRGB().r + ', ' + event.color.toRGB().g + ', ' + event.color.toRGB().b + ', ' + event.color.toRGB().a + ')');
		onChange();
	});
	$('.MaterializeColorPicker').on('change', function(){
		if ($(this).val() == "") {
			$(this).css('border-right', '0px solid black');
		}
	});

	//Add function to inputClear-Buttons
	$('.inputClear').on('click', function(){
		if($(this).data('default')){
			$(this).prevAll('input').val($(this).data('default')).trigger('change');
		} else {
			$(this).prevAll('input').val('').trigger('change');
		}
	});

	//Select elements with id=key and class=value and insert value
	if (!settings) return;
	$('.value').each(function () {
		var $key = $(this);
		var id = $key.attr('id');
		if ($key.attr('type') === 'checkbox') {
			//do not call onChange direct, because onChange could expect some arguments
			$key.prop('checked', settings[id])
				.on('change', () => onChange())
				;
		} else {
			//do not call onChange direct, because onChange could expect some arguments
			$key.val(settings[id])
				.on('change', () => onChange())
				.on('keyup', () => onChange())
				;
		}
	});

	//Get Subsettings
	toolbar = settings.toolbar || settings.demotoolbar || [];
	views = settings.views || settings.demoviews || [];
	version = settings.version;

	//Set initial values of further variables
	images = [];
	imagesDirs = [];
	devicesSelectedView = -1;

	//Update all Colorpickers
	$('.MaterializeColorPicker').trigger('change');

	//Init imageUpload
	initImageUpload();

	//Get Link of first Web-Adapter
	var link = "";
	console.log("getLink of first Web-Adapter");
	getExtendableInstances(function (result) {
		if (result) {
			link = location.protocol + "//" + location.hostname + ":" + result[0].native.port + "/iqontrol";
			console.log("Got Link: " + link);
			$('#mainLink').attr('href', link + "/index.html?namespace=" + adapter + "." + instance);

			//Add Roles to dialogDeviceEditCommonRole-Selectbox
			$('#dialogDeviceEditCommonRole').empty().append("<option disabled selected value>Select Role</option>");
			for (var element in iQontrolRoles){ $('#dialogDeviceEditCommonRole').append("<option value='" + element + "' data-icon='" + (iQontrolRoles[element].icon ? link + iQontrolRoles[element].icon : "") + "'>" + _(iQontrolRoles[element].name) + "</option>"); }
			$('select').select();

			//Try to init socket.io via conn.js and servConn-Object
			try {
				console.log("Try to init socket.io");
				var connectionLink = location.protocol + "//" + location.hostname + ":" + result[0].native.port;
				var connOptions = {
					name:          namespace,  			// optional - default 'vis.0'
					connLink:      connectionLink,  	// optional URL of the socket.io adapter
					socketSession: ''           		// optional - used by authentication
				};
				var connCallbacks = {
					onConnChange: function(isConnected) {
						if(isConnected) {
							console.log('Socket connected');
							goOnAfterSocketIsConnectedOrAfterSocketInitError();
						} else {
							console.log('Socket disconnected');
						}
					},
					onRefresh: function() {
						console.log('Socket refresh');
					},
					onError: function(err) {
						window.alert(_('Cannot execute %s for %s, because of insufficient permissions', err.command, err.arg), _('Insufficient permissions'), 'alert', 600);
					}
				};
				servConn.init(connOptions, connCallbacks);
				servConn.namespace = namespace;
				servConn.setReconnectInterval(5000);
				servConn.setReloadTimeout(300);
				console.log("Inited socket.io");
			} catch {
				//Error initing socket.io - Fallback to inbuilt socket of admin - wich has difficulties with file operations
				console.log("Error initing socket.io - Fallback");
				alert(_("No socket.io-Instance found. To get this working, enable integrated socket.IO and disable 'Force Web-Sockets' in the web adapter!"));
				goOnAfterSocketIsConnectedOrAfterSocketInitError();
			}
		} else {
			alert("Error on receiving extendable Instances");
		}
	});
	
	function goOnAfterSocketIsConnectedOrAfterSocketInitError(){
		//Get images
		console.log("getImages");
		getImages(async function(){
			//Backward-Compatibility: Move images from old local location to new userfilesImagePath-location
			console.log("Moving userfiles to new location...");
			var oldImagePath = "/" + adapter + "/userimages";
			var err = await renameFileAsync(oldImagePath + "/", userfilesImagePath + "/");
			if(typeof err == udef) {
				alert(_("The uploaded images have been moved to a new location. This is only done once and allowes automatic backup of these files by iobroker. Please reload this site and save the settings, so all filenames can be updated!"));
			} else console.log("...nothing to move.");
			
			//Backward-Compatibility: Check for image-links in views and devices that point to old local location but that were moved to new userfilesImagePath-location previously
			console.log("Adjusting image links to new userfiles location");
			var oldImagePathRelative = ".\\userimages";
			var fileLocationChanged = false;
			if (typeof views != udef) views.forEach(function(view){
				if(typeof view.nativeBackgroundImage != udef && view.nativeBackgroundImage.indexOf(oldImagePathRelative) == 0 && images.find(function(element){return element.filenameBS == view.nativeBackgroundImage.substring(oldImagePathRelative.length);})) {
					view.nativeBackgroundImage = ".\\.." + userfilesImagePathBS + view.nativeBackgroundImage.substring(oldImagePathRelative.length);
					fileLocationChanged = true;
				}
				if (typeof view.devices != udef) view.devices.forEach(function(device){
					if(typeof device.nativeBackgroundImage != udef && device.nativeBackgroundImage.indexOf(oldImagePathRelative) == 0 && images.find(function(element){return element.filenameBS == device.nativeBackgroundImage.substring(oldImagePathRelative.length);})) {
						device.nativeBackgroundImage = ".\\.." + userfilesImagePathBS + device.nativeBackgroundImage.substring(oldImagePathRelative.length);
						fileLocationChanged = true;
					}
				});
			});
			
			//Signal to admin, that no changes yet
			if (fileLocationChanged) onChange(true); else onChange(false);

			//Show Settings
			console.log("All settings loaded. Adapter ready.");
			$('.hideOnLoad').show();
			$('.showOnLoad').hide();
			loading = false;

			//Reinitialize all the Materialize labels on the page if you are dynamically adding inputs:
			if (M) M.updateTextFields();

			//Get iobrokerObjects
			socket.emit('getObjects', function (err, objs) {
				iobrokerObjects = objs;
				iobrokerObjectsReady = true;
				for(i = 0; i < iobrokerObjectsReadyFunctions.length; i++){
					if (typeof iobrokerObjectsReadyFunctions[i] == 'function') iobrokerObjectsReadyFunctions[i]();
				}
				iobrokerObjectsReadyFunctions = [];
			});
		});
	}


	//++++++++++ TABS ++++++++++
	//Enhance Tabs with onShow-Function
	$('ul.tabs li a').on('click', function(){ onTabShow($(this).attr('href'));});
	function onTabShow(tabId){
		switch(tabId){
			case "#tabViews":
			loadViews();
			break;

			case "#tabDevices":
			loadDevices();
			break;

			case "#tabToolbar":
			loadToolbar();
			break;

			case "#tabImages":
			loadImages();
			break;

			case "#tabOptions":
			loadOptions();
			break;
		}
	}


	//++++++++++ VIEWS ++++++++++
	//Load Views
	function loadViews(){
		//Add Images to Selectbox for BackgroundImage
		var imagenames = [];
		images.forEach(function(element){ imagenames.push(".\\.." + userfilesImagePathBS + element.filenameBS + "/" + element.filenameBS); });
		imagenames.sort();
		$('*[data-name="nativeBackgroundImage"]').data("options", ";" + imagenames.join(";"));
		$('select').select();
		//Fill Table
		values2table('tableViews', views, onChange, onTableViewsReady);
	}

	//Enhance TableViews with functions
	function onTableViewsReady(){
		var $div = $('#tableViews');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//CommonName changed
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonName') {
				$(this).on('focusin', function(){
					$(this).data('oldval', $(this).val());
				});
				$(this).on('change', function (){
					var index = $(this).data('index');
					var oldVal = $(this).data('oldval');
					var newVal = $(this).val();
					changeViewsCommonName(index, oldVal, newVal);
					if(viewsCheckDuplicates()) alert(_("No duplicates allowed! View Names must be unique."));
				});
			}
		});
		function changeViewsCommonName(index, oldVal, newVal){
			toolbar.forEach(function(element){
				if(element.nativeLinkedViewId == oldVal) element.nativeLinkedViewId = newVal;
			});
		}
		//Add Thumbs to SelectBox
		$lines.find('select[data-name]').each(function() {
			var name = $(this).data('name');
			if (name === 'nativeBackgroundImage') {
				var index = $(this).data('index');
				$(this).addClass('icons');
				$(this).find('option').each(function() {
					var icon = $(this).val().replace(/\\/g, "/").substring(1) || "";
					if (icon != "") $(this).attr('data-icon', link + icon);
					$(this).addClass('left');
				});
			}
		});
		$('select').select();
		viewsCheckDuplicates();
	}

	//Check for duplicates
	function viewsCheckDuplicates(){
		var duplicates = false;
		var viewCommonNames = [];
		views.forEach(function(element){
			if (viewCommonNames.indexOf(element.commonName) > -1){
				duplicates = true;
			} else {
				viewCommonNames.push(element.commonName);
			}
		});
		if(duplicates){
			$('#viewsNoDuplicatesAllowed').show();
		} else {
			$('#viewsNoDuplicatesAllowed').hide();
		}
		return duplicates;
	}


	//++++++++++ DEVICES ++++++++++
	//Load Devices
	function loadDevices(){
		//Add Views to Selectbox for Views and for LinkedView
		var viewIds = [""];
		views.forEach(function(element){ viewIds.push(element.commonName); });
		$('*[data-name="nativeLinkedView"]').data("options", viewIds.join(";"));
		$('#devicesSelectedView').empty().append("<option disabled selected value>" + _("Select view") + "</option>");
		views.forEach(function(element, index){ $('#devicesSelectedView').append("<option value='" + index + "'>" + element.commonName + "</option>"); });
		//Add Images to Selectbox for BackgroundImage
		var imagenames = [];
		images.forEach(function(element){ imagenames.push(".\\.." + userfilesImagePathBS + element.filenameBS + "/" + element.filenameBS); });
		imagenames.sort();
		$('*[data-name="nativeBackgroundImage"]').data("options", ";" + imagenames.join(";"));
		$('select').select();
		//Reset devicesSelecteView
		devicesSelectedView = -1;
		$('.divDevices').hide();
	}

	//Enhance devicesSelectedView-Selectbox with functions
	$('#devicesSelectedView').on('change', function(){
		devicesSelectedView = $('#devicesSelectedView').val();
		if(devicesSelectedView > -1){
			if(!views[devicesSelectedView].devices) views[devicesSelectedView].devices = [];
			//Fill Table
			values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
			$('.divDevicesNothingSelected').hide();
			$('.divDevices').show();
		} else {
			$('.divDevicesNothingSelected').show();
			$('.divDevices').hide();
		}
	});

	//Enhance TableDevices with functions
	function onTableDevicesReady(){
		$('#tableDevices td').css('vertical-align', 'top');
		var $div = $('#tableDevices');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonName') {
				var deviceIndex = $(this).data('index');
				if (views[devicesSelectedView].devices[deviceIndex].commonRole){
					$(this).next('span').remove();
					$(this).after('<span style="font-size:x-small;">' + _(iQontrolRoles[views[devicesSelectedView].devices[deviceIndex].commonRole].name) + '</span>');
				} else {
					$(this).next('span').remove();
					$(this).after('<span style="font-size:x-small; color: red;">' + _('Please assign a role in device settings') + '</span>');
				}
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit Device
			if (command === 'edit') {
				$(this).on('click', function () {
					var viewIndex = devicesSelectedView;
					var deviceIndex = $(this).data('index');
					initDialog('dialogDeviceEdit', function(){ //save dialog
						var viewIndex =   $('#dialogDeviceEditViewIndex').val();
						var deviceIndex = $('#dialogDeviceEditDeviceIndex').val();
						views[viewIndex].devices[deviceIndex].commonRole = $('#dialogDeviceEditCommonRole').val();
						views[viewIndex].devices[deviceIndex].states = dialogDeviceEditStatesTable;
						dialogDeviceEditOptions = [];
						$('.dialogDeviceEditOption').each(function(){ //save the options entrys
							var option = $(this).data('option');
							var type = $(this).data('type');
							if (type == "checkbox") var value = $(this).prop('checked').toString(); else var value = $(this).val();
							var entry = {option: option, type: type, value: value};
							dialogDeviceEditOptions.push(entry);
						});
						views[viewIndex].devices[deviceIndex].options = dialogDeviceEditOptions; 
						onTableDevicesReady();
					});
					$('#dialogDeviceEditCommonName').html(views[viewIndex].devices[deviceIndex].commonName || "");
					$('#dialogDeviceEditViewIndex').val(viewIndex);
					$('#dialogDeviceEditDeviceIndex').val(deviceIndex);
					dialogDeviceEditStates = views[viewIndex].devices[deviceIndex].states || [];
					dialogDeviceEditStatesTable = [];
					dialogDeviceEditOptions = views[viewIndex].devices[deviceIndex].options || [];
					$('#dialogDeviceEditOptionsContent').empty();
					if(views[viewIndex].devices[deviceIndex].commonRole) {
						$('#dialogDeviceEditCommonRole').val(views[viewIndex].devices[deviceIndex].commonRole).trigger('change');
					} else {
						$('#dialogDeviceEditCommonRole').val(-1).trigger('change');
					}
					$('select').select()
					$('#dialogDeviceEdit').modal('open');
				});
			}
		});
		$lines.find('select[data-name]').each(function() {
			var name = $(this).data('name');
			//Add Thumbs to SelectBox
			if (name === 'nativeBackgroundImage') {
				var index = $(this).data('index');
				$(this).addClass('icons');
				$(this).find('option').each(function() {
					var icon = $(this).val().replace(/\\/g, "/").substring(1) || "";
					if (icon != "") $(this).attr('data-icon', link + icon);
					$(this).addClass('left');
				});
			}
			/* The following part is deactivated, because the PressureMenue makes it unnecessary to disallow linkedView to some roles
			//Remove LinkedView for unallowed Roles
			if (name === 'nativeLinkedView') {
				var index = $(this).data('index');
				switch(views[devicesSelectedView].devices[index].commonRole){
					case "iQontrolView": case "iQontrolWindow": case "iQontrolDoor": case "iQontrolFire": case "iQontrolTemperature": case "iQontrolHumidity": case "iQontrolBrightness": case "iQontrolMotion": //Link to other View allowed
					$(this).parent('div').parent('td').css('opacity', '1');
					break;

					default: //Link to other view not allowed
					$(this).parent('div').parent('td').css('opacity', '0');
				}
			} */
		});
		$('select').select();
	}

	//Enhance dialogDeviceEditCommonRole-Selectbox with functions
	$('#dialogDeviceEditCommonRole').on('change', function(){
		var viewIndex =   $('#dialogDeviceEditViewIndex').val();
		var deviceIndex = $('#dialogDeviceEditDeviceIndex').val();
		dialogDeviceEditCommonRole = $('#dialogDeviceEditCommonRole').val();
		//States
		if(typeof dialogDeviceEditStatesTable == 'object') dialogDeviceEditStatesTable.forEach(function(entry){ //save the table entrys before bulding the new states table
			var index = dialogDeviceEditStates.findIndex(function(element){ return element.state == entry.state;});
			if (index == -1) {
				dialogDeviceEditStates.push(entry);
			} else {
				dialogDeviceEditStates[index] = entry;
			}
		});
		dialogDeviceEditStatesTable = [];
		if(dialogDeviceEditCommonRole){ //build states table
			iQontrolRoles[dialogDeviceEditCommonRole].states.forEach(function(entry){ //push all corresponding states for the selected role into the table
				var commonRole  = (dialogDeviceEditStates.find(function(element){ return element.state == entry;}) || {}).commonRole || "";
				var value = (dialogDeviceEditStates.find(function(element){ return element.state == entry;}) || {}).value || "";
				if(commonRole == ""){
					if(entry == "VALVE_STATES" || entry == "ADDITIONAL_INFO"){
						commonRole = "array";
						var valueObj = tryParseJSON(value);
						if(Array.isArray(valueObj) == false) { //For backward-compatibility -> transfer old object-style to new array-style
							var valueArray = [];
							for(name in valueObj){
								valueArray.push({'name':name, 'commonRole':'linkedState', 'value':valueObj[name]});
							}
							value = JSON.stringify(valueArray);
						}
					} else if(entry == "SET_VALUE"  || entry == "HTML" || entry == "URL"){
						commonRole = "const";
					} else {
						commonRole = "linkedState";
					}
				}
				dialogDeviceEditStatesTable.push({'state':entry, 'commonRole':commonRole, 'value':value});
			});
		}
		//Fill Table
		values2table('tableDialogDeviceEditStates', dialogDeviceEditStatesTable, onChange, ontableDialogDeviceEditStatesReady);
		//Options
		$('.dialogDeviceEditOption').each(function(){ //save the entrys before bulding the new options content
			var option = $(this).data('option');
			var type = $(this).data('type');
			if (type == "checkbox") var value = $(this).prop('checked').toString(); else var value = $(this).val();
			var index = dialogDeviceEditOptions.findIndex(function(element){ return element.option == option;});
			var entry = {option: option, type: type, value: value};
			if (index == -1) {
				dialogDeviceEditOptions.push(entry);
			} else {
				dialogDeviceEditOptions[index] = entry;
			}
		});
		if(dialogDeviceEditCommonRole){ //build option content
			var dialogDeviceEditOptionsContent = "";
			for (entry in iQontrolRoles[dialogDeviceEditCommonRole].options){ //push all corresponding options for the selected role into the table
				var name = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].name;				
				var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
				var value = (dialogDeviceEditOptions.find(function(element){ return element.option == entry;}) || {}).value || iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default || "";
				switch(type){
					case "text":
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l4'>";
					dialogDeviceEditOptionsContent += "    <input class='value dialogDeviceEditOption' data-option='" + entry + "' data-type='text' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + name + "</label>";
					dialogDeviceEditOptionsContent += "</div>";
					break;

					case "select":
					var selectOptionsString = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].selectOptions;
					var selectOptions = selectOptionsString.split(';');
					var selectOptionsContent = "";
					selectOptions.forEach(function(option){
						var parts = option.split('/');
						if (parts.length < 2) parts.push(parts[0]);
						selectOptionsContent += "        <option value='" + parts[0] + "' " + ((parts[0] == value)?'selected':'') + " class='translate'>" + parts[1] + "</option>";
					});
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l4'>";
					dialogDeviceEditOptionsContent += "    <select class='value dialogDeviceEditOption' data-option='" + entry + "' data-type='select' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'>" + selectOptionsContent + "</select>";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'></label>";
					dialogDeviceEditOptionsContent += "    <span class='translate'>" + name + "</span>";
					dialogDeviceEditOptionsContent += "</div>";
					break;
					
					case "checkbox":
					if(value == "true") value = true;
					if(value == "false") value = false;
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l4'>";
					dialogDeviceEditOptionsContent += "    <p><label>";
					dialogDeviceEditOptionsContent += "        <input class='value dialogDeviceEditOption filled-in' data-option='" + entry + "' data-type='checkbox' type='checkbox' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "' " + (value?"checked='checked'":"") + " />";
					dialogDeviceEditOptionsContent += "        <span>" + _(name) + "</span>";
					dialogDeviceEditOptionsContent += "    </label></p>";
					dialogDeviceEditOptionsContent += "</div>";
					break;
				}
			}
			if(dialogDeviceEditOptionsContent == ""){
				$('#dialogDeviceEditOptionsContent').html("<br><p>"+ _("This role has no options.") + "</p>");
			} else {
				$('#dialogDeviceEditOptionsContent').html(dialogDeviceEditOptionsContent);
			}
			$('select').select();
			if (M) M.updateTextFields();
		}
	});

	//Enhance tableDialogDeviceEditStates with functions
	function ontableDialogDeviceEditStatesReady(){
		$('#tableDialogDeviceEditStates td').css('vertical-align', 'top');
		var $div = $('#tableDialogDeviceEditStates');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Make State Readonly and add id for selectId-Dialog
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'state') {
				$(this).prop('readonly', true);
				if ($(this).val() == "VALVE_STATES") $(this).after('<span style="font-size:x-small;">Array: [{name: "Valve1", commonRole: "LinkedState", value: "ID"}, ...]</span>');
				if ($(this).val() == "SET_VALUE") $(this).after('<span style="font-size:x-small;" class="translate">constant</span>');
				if ($(this).val() == "URL") $(this).after('<span style="font-size:x-small;" class="translate">constant</span>');
				if ($(this).val() == "HTML") $(this).after('<span style="font-size:x-small;" class="translate">constant</span>');
			}
			if (name === 'value') {
				var stateIndex = $(this).data('index');
				$(this).prop('id', 'tableDialogDeviceEditStatesValue_' + stateIndex);
				if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') $(this).prop('readonly', true);
			}
		});
		//Hide role
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonRole') {
				$(this).parent('div').parent('td').hide();
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit
			if (command === 'edit') {
				var stateIndex = $(this).data('index');
				if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const') { //const - open editText dialog
					$(this).on('click', function () {
						var stateIndex = $(this).data('index');
						initDialog('dialogDeviceEditStateConstant', function(){ //save dialog
							var stateIndex = $('#dialogDeviceEditStateConstantIndex').val();
							$('#tableDialogDeviceEditStatesValue_' + stateIndex).val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n')).trigger('change');
						});
						$('#dialogDeviceEditStateConstantName').html(dialogDeviceEditStatesTable[stateIndex].state || "");
						$('#dialogDeviceEditStateConstantIndex').val(stateIndex);
						$('#dialogDeviceEditStateConstantTextarea').val((dialogDeviceEditStatesTable[stateIndex].value || "").replace(/\\n/g, '\n'));
						$('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
						$('#dialogDeviceEditStateConstant').modal('open');
					});
				} else if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') { //array - open editArray dialog
					$(this).on('click', function () {
						var stateIndex = $(this).data('index');
						initDialog('dialogDeviceEditStateArray', function(){ //save dialog
							var stateIndex =   $('#dialogDeviceEditStateArrayIndex').val();
							$('#tableDialogDeviceEditStatesValue_' + stateIndex).val(JSON.stringify(dialogDeviceEditStateArrayTable)).trigger('change');
						});
						$('#dialogDeviceEditStateArrayName').html(dialogDeviceEditStatesTable[stateIndex].state || "");
						$('#dialogDeviceEditStateArrayIndex').val(stateIndex);
						dialogDeviceEditStateArrayTable = tryParseJSON(dialogDeviceEditStatesTable[stateIndex].value) || [];
						values2table('tableDialogDeviceEditStateArray', dialogDeviceEditStateArrayTable, onChange, ontableDialogDeviceEditStateArrayReady);
						$('#dialogDeviceEditStateArray').modal('open');
					});
				} else { //linkedState - open selectID dialog
					$(this).on('click', function(){
						var stateIndex = $(this).data('index');
						$('#dialogSelectId').data('selectidfor', 'tableDialogDeviceEditStatesValue_' + stateIndex);
						initSelectId(function (sid) {
							sid.selectId('show', $('#tableDialogDeviceEditStatesValue_' + stateIndex).val(), {type: 'state'}, function (newId) {
								if (newId) {
									$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
								}
							});
						});
					});
				}
			}
			//OpenCustom
			if (command === 'openCustom') {
				var stateIndex = $(this).data('index');
				var stateId = $('#tableDialogDeviceEditStatesValue_' + stateIndex).val();
				var stateObject = parent.gMain.objects[stateId];
				if (typeof stateObject != udef && typeof stateObject.common.custom != udef && typeof stateObject.common.custom[adapter + "." + instance] != udef){
					$(this).find('i').addClass('indigo').html('build');
				} else {
					$(this).find('i').addClass('grey').html('build');
				}
				$(this).on('click', function (e) {
					var _stateIndex = $(this).data('index');
					var _stateId = $('#tableDialogDeviceEditStatesValue_' + _stateIndex).val();
					if (_stateId != ""){
						var url = window.location.origin + "/#tab-objects/customs/" + _stateId;
						window.open(url);
					}
				});
			}
		});
	}
	function ontableDialogDeviceEditStateArrayReady(){
		var $div = $('#tableDialogDeviceEditStateArray');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Hide role
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonRole') {
				$(this).parent('div').parent('td').hide();
			}
		});
		//Add id for selectId-Dialog
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'value') {
				var arrayIndex = $(this).data('index');
				$(this).prop('id', 'tableDialogDeviceEditStateArrayValue_' + arrayIndex);
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			if (command === 'edit') {
			var arrayIndex = $(this).data('index');
				$(this).on('click', function(){
					var arrayIndex = $(this).data('index');
					$('#dialogSelectId').data('selectidfor', 'tableDialogDeviceEditStateArrayValue_' + arrayIndex);
					initSelectId(function (sid) {
						sid.selectId('show', $('#tableDialogDeviceEditStateArrayValue_' + arrayIndex).val(), {type: 'state'}, function (newId) {
							if (newId) {
								$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
							}
						});
					});
				});
			}
		});
	}

	//Enhance DeviceAutocreate with functions
	var dialogDeviceAutocreateResult;
	$('#devicesAutocreateButton').on('click', function () {
		initDialog('dialogDeviceAutocreate', function(){ //save dialog
			views[$('#devicesSelectedView').val()].devices.push(dialogDeviceAutocreateResult);
			values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
		});
		if ($('#dialogDeviceAutocreateSourceId').val() == "") {
			$('#dialogDeviceAutocreateCreatePreviewButton').addClass('disabled');
		} else {
			$('#dialogDeviceAutocreateCreatePreviewButton').removeClass('disabled');
		}
		$('#dialogDeviceAutocreatePreview').html(_('Please select a device ID from ioBroker-Object-Tree and press \'Try to create preview\' first.'));
		$('#dialogDeviceAutocreatePreviewStates').html('');
		$('#dialogDeviceAutocreate a.btn-set').addClass('disabled')
		$('#dialogDeviceAutocreate').modal('open');
	});
	$('#dialogDeviceAutocreateSourceId').on('input change', function(){
		dialogDeviceAutocreateResult = {};
		if($(this).val() == ""){
			$('#dialogDeviceAutocreateCreatePreviewButton').addClass('disabled');
		} else {
			$('#dialogDeviceAutocreateCreatePreviewButton').removeClass('disabled');
		}
		var toDo = function(){
			if(iobrokerObjects[$('#dialogDeviceAutocreateSourceId').val()]){
				$('#dialogDeviceAutocreateSourceIdCommonName').html(iobrokerObjects[$('#dialogDeviceAutocreateSourceId').val()].common.name);
			} else {
				$('#dialogDeviceAutocreateSourceIdCommonName').html("");
			}
		}
		if(iobrokerObjectsReady) {
			toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(toDo);
		}
		$('#dialogDeviceAutocreatePreview').html(_("Please select a device ID from ioBroker-Object-Tree and press 'Try to create preview' first."));
		$('#dialogDeviceAutocreatePreviewStates').html('');
		$('#dialogDeviceAutocreate a.btn-set').addClass('disabled')
	});
	$('#dialogDeviceAutocreateSourceIdSelectIdButton').on('click', function(){
		initSelectId(function (sid) {
			sid.selectId('show', $('#dialogDeviceAutocreateSourceId').val(), {type: 'state'}, function (newId) {
				if (newId) {
					$('#dialogDeviceAutocreateSourceId').val(newId).trigger('change');
					if (M) M.updateTextFields();
				}
			});
		});
	});
	$('#dialogDeviceAutocreateCreatePreviewButton').on('click', function(){
		dialogDeviceAutocreateResult = {};
		$('#dialogDeviceAutocreateSourceId').addClass('disabled');
		$('#dialogDeviceAutocreateSourceIdSelectIdButton').addClass('disabled');
		$('#dialogDeviceAutocreateCreatePreviewButton').addClass('disabled');
		$('#dialogDeviceAutocreatePreview').html(_('Please wait...'));
		$('#dialogDeviceAutocreatePreviewStates').html('');
		$('#dialogDeviceAutocreate a.btn-set').addClass('disabled')
		var toDo = function(){
			var sourceId = $('#dialogDeviceAutocreateSourceId').val();
			var result = deviceAutocreate(sourceId, iobrokerObjects);
			$('#dialogDeviceAutocreatePreview').html(result.resultText);
			$('#dialogDeviceAutocreatePreviewStates').html(result.resultStatesText);
			$('#dialogDeviceAutocreateSourceId').removeClass('disabled');
			$('#dialogDeviceAutocreateSourceIdSelectIdButton').removeClass('disabled');
			if (result.resultValid){
				dialogDeviceAutocreateResult = result.resultObject;
				$('#dialogDeviceAutocreate a.btn-set').removeClass('disabled')
			}
		}
		if (iobrokerObjectsReady) {
			toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(toDo);
		}
	});
	function deviceAutocreate(sourceId, objects){
		var resultObject = {};
		var resultText = "";
		var resultValid = false;
		if(!objects[sourceId]){
			resultText = "<blockquote>" + _('This is not a valid ID') + "</blockquote><br><br>";
		} else {
			//Find out Name
			if (typeof objects[sourceId].common.name != udef) {
				resultObject.commonName = objects[sourceId].common.name;
				resultText += "<u>" + _("Name") + ":</u> " + objects[sourceId].common.name + "<br><br>";
				resultValid = true;
			} else {
				resultObject.commonName = _("New Device");
				resultText += "<blockquote>" + _("The name of the device could not be determined and was set to") + " \'" + _("New Device") + "\'</blockquote><br><br>";
			}
			//Get childStates
			var childStates = [];
			for(id in objects){
				if(id.indexOf(sourceId) == 0 && objects[id].type == 'state') childStates.push(id);
			}
			childStates.sort().reverse(); //reverse order, so that the top channel of multi-channel-devices wins
			//Try to match childStates
			resultStatesObj = {};
			for(i = 0; i < childStates.length; i++){
				var id = childStates[i];
				var stateName = id.substring(id.lastIndexOf("."), id.length);
				switch(stateName){
					case ".STATE": case ".state": case ".Switch": case ".switch": case ".on": case ".presence": case ".MOTION": case ".PRESENCE_DETECTION_STATE":
					if(typeof objects[id] !== udef && typeof objects[id].common.role != udef && objects[id].common.role == "switch.lock"){
						resultStatesObj['LOCK_STATE'] = id;
					} else {
						resultStatesObj['STATE'] = id;
					}
					break;

					case ".LEVEL": case ".level": case ".bri":
					resultStatesObj['LEVEL'] = id;
					break;

					case ".DIRECTION":
					resultStatesObj['DIRECTION'] = id;
					break;

					case ".STOP":
					resultStatesObj['STOP'] = id;
					break;

					case ".HUE": case ".hue":
					resultStatesObj['HUE'] = id;
					break;

					case ".CT": case ".ct":
					resultStatesObj['CT'] = id;
					break;

					case ".SATURATION": case ".saturation": case ".sat":
					resultStatesObj['SATURATION'] = id;
					break;

					case ".SET_TEMPERATURE":
					resultStatesObj['SET_TEMPERATURE'] = id;
					break;

					case ".HUMIDITY": case ".ACTUAL_HUMIDITY": case ".humidity":
					resultStatesObj['HUMIDITY'] = id;
					break;

					case ".TEMPERATURE": case ".ACTUAL_TEMPERATURE": case ".temperature":
					resultStatesObj['TEMPERATURE'] = id;
					break;

					case ".BRIGHTNESS": case ".LUX":
					resultStatesObj['BRIGHTNESS'] = id;
					break;

					case ".POWER": case ".Power": case ".power":
					resultStatesObj['POWER'] = id;
					break;

					case ".CONTROL_MODE":
					resultStatesObj['CONTROL_MODE'] = id;
					break;

					case ".BOOST_STATE":
					resultStatesObj['BOOSST_STATE'] = id;
					break;

					case ".PARTY_TEMPERATURE":
					resultStatesObj['PARTY_TEMPERATURE'] = id;
					break;

					case ".WINDOW_OPEN_REPORTING":
					resultStatesObj['WINDOW_OPEN_REPORTING'] = id;
					break;

					case ".STATE_UNCERTAIN":
					resultStatesObj['LOCK_STATE_UNCERTAIN'] = id;
					break;

					case ".OPEN":
					resultStatesObj['LOCK_OPEN'] = id;
					break;

					case ".LOWBAT":
					resultStatesObj['BATTERY'] = id;
					break;

					case ".UNREACH":
					resultStatesObj['UNREACH'] = id;
					break;

					case ".ERROR": case ".FAULT_REPORTING":
					resultStatesObj['ERROR'] = id;
					break;
				}
			}
			//Try to find out the role
			//--iQontrolView
			var role = null;
			if(typeof objects[sourceId].common.role !== udef && objects[sourceId].common.role == "iQontrolView"){
				role = "iQontrolView";
			}
			//--all the others
			//----find out the role of sources main state (priority in ascending order!)
			var sourceRole = null;
			if(resultStatesObj['STATE'] && objects[resultStatesObj['STATE']] && typeof objects[resultStatesObj['STATE']].common.role != udef) {
				sourceRole = objects[resultStatesObj['STATE']].common.role;
				if(sourceRole == 'state') { //special - check the parent channel's role
					var resultStateParent = resultStatesObj['STATE'].substring(0, resultStatesObj['STATE'].lastIndexOf('.'));
					if(resultStateParent.length > 0){
						if(objects[resultStateParent] && typeof objects[resultStateParent].common.role != udef) sourceRole = objects[resultStateParent].common.role;
					}
				} else if (stateName == ".presence" || stateName == ".MOTION" || stateName == ".PRESENCE_DETECTION_STATE") { //special
					sourceRole = "sensor.motion";
				}
			}
			if(resultStatesObj['HUMIDITY'] && objects[resultStatesObj['HUMIDITY']] && typeof objects[resultStatesObj['HUMIDITY']].common.role != udef) sourceRole = objects[resultStatesObj['HUMIDITY']].common.role;
			if(resultStatesObj['TEMPERATURE'] && objects[resultStatesObj['TEMPERATURE']] && typeof objects[resultStatesObj['TEMPERATURE']].common.role != udef) sourceRole = objects[resultStatesObj['TEMPERATURE']].common.role;
			if(resultStatesObj['BRIGHTNESS'] && objects[resultStatesObj['BRIGHTNESS']] && typeof objects[resultStatesObj['BRIGHTNESS']].common.role != udef) sourceRole = objects[resultStatesObj['BRIGHTNESS']].common.role;
			if(resultStatesObj['SET_TEMPERATURE'] && objects[resultStatesObj['SET_TEMPERATURE']] && typeof objects[resultStatesObj['SET_TEMPERATURE']].common.role != udef) sourceRole = objects[resultStatesObj['SET_TEMPERATURE']].common.role;
			if(resultStatesObj['LOCK_STATE'] && objects[resultStatesObj['LOCK_STATE']] && typeof objects[resultStatesObj['LOCK_STATE']].common.role != udef) sourceRole = objects[resultStatesObj['LOCK_STATE']].common.role;
			if(resultStatesObj['LEVEL'] && objects[resultStatesObj['LEVEL']] && typeof objects[resultStatesObj['LEVEL']].common.role != udef) sourceRole = objects[resultStatesObj['LEVEL']].common.role;
			//----try to match this to destination role
			switch(sourceRole){
				case "switch": case "switch.power": case "switch.enable":
				role = 'iQontrolSwitch';
				break;

				case "switch.light": case "level.dimmer":
				role = 'iQontrolLight';
				break;

				case "---missing---":
				role = 'iQontrolFan';
				break;

				case "level.temperature":
				if (resultStatesObj['PARTY_TEMPERATURE']) {
					role = 'iQontrolHomematicThermostat';
				} else {
					role = 'iQontrolThermostat';
				}
				break;

				case "value.temperature":
				role = 'iQontrolTemperature';
				if(!resultStatesObj['STATE']){
					resultStatesObj['STATE'] = resultStatesObj['TEMPERATURE'];
					delete resultStatesObj['TEMPERATURE'];
				}
				break;

				case "value.humidity":
				role = 'iQontrolHumidity';
				if(!resultStatesObj['STATE']){
					resultStatesObj['STATE'] = resultStatesObj['HUMIDITY'];
					delete resultStatesObj['HUMIDITY'];
				}
				break;

				case "value.brightness":
				role = 'iQontrolBrightness';
				if(!resultStatesObj['STATE']){
					resultStatesObj['STATE'] = resultStatesObj['BRIGHTNESS'];
					delete resultStatesObj['BRIGHTNESS'];
				}
				break;

				case "sensor.motion":
				role = 'iQontrolMotion';
				break;

				case "sensor.door":
				role = 'iQontrolDoor';
				break;

				case "switch.lock":
				role = 'iQontrolDoorWithLock';
				break;

				case "sensor": case "sensor.window":
				role = 'iQontrolWindow';
				break;

				case "level.blind":
				role = 'iQontrolBlind';
				break;

				case "state":
				role = 'iQontrolValue';
				break;

				case "sensor.alarm.fire":
				role = 'iQontrolFire';
				break;

				case "action.execute":
				role = 'iQontrolProgram';
				break;

				case "scene.state":
				role = 'iQontrolScene';
				break;
			}
			//Got role?
			if (role) {
				resultObject.commonRole = role;
				if (typeof iQontrolRoles[role] != udef && typeof iQontrolRoles[role].name != udef) {
					resultText += "<u>" + _("Role") + ":</u> " + _(iQontrolRoles[role].name) + "<br><br>";
				} else {
					resultText += _("Role") + ": " + role + "<br><br>";
				}
				resultValid = true;
			} else {
				resultText += "<blockquote>" + _("The role of the device is unknown. Please set it manually.") + "</blockquote><br><br>";
			}
			//Got states?
			resultStates = [];
			for(state in resultStatesObj){
				resultStates.push({state: state, value: resultStatesObj[state]});
			}
			var resultStatesText = "";
			if(resultStates.length > 0 ){
				resultStatesText += "<u>" + _("Matched the following states:") + "</u> <br>";
				for(i = 0; i < resultStates.length; i++){
					resultStatesText += resultStates[i].state + ": " + resultStates[i].value + "<br>";
				}
				resultObject.states = resultStates;
				resultValid = true;
			} else {
				resultText = "<blockquote>" + _('Could not match any state') + "</blockquote><br><br>";
			}
			//Result valid?
			if(resultValid) {
				resultText += "<br><b>" + _("You can create this device now if you want.") + "</b>";
			} else {
				resultText = "<blockquote>" + _("Could not determine any valid Device from this ID") + "</blockquote>";
			}
		}
		var result = {};
		result.resultObject = resultObject;
		result.resultText = resultText;
		result.resultStatesText = resultStatesText;
		result.resultValid = resultValid;
		return result;
	}

	//Enhance DeviceCopyFrom with functions
	$('#devicesCopyFromButton').on('click', function () {
		initDialog('dialogDeviceCopyFrom', function(){ //save dialog
			var sourceView =   $('#dialogDeviceCopyFromSourceView').val();
			var sourceDevice = $('#dialogDeviceCopyFromSourceDevice').val();
			var length = views[$('#devicesSelectedView').val()].devices.push(Object.assign({}, views[sourceView].devices[sourceDevice])); //Object.assign creates new object, not just a reference
			values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
		});
		$('#dialogDeviceCopyFromSourceView').empty().append("<option disabled selected value>" + _("Select view") + "</option>");
		views.forEach(function(element, index){ $('#dialogDeviceCopyFromSourceView').append("<option value='" + index + "'>" + element.commonName + "</option>"); });
		$('#dialogDeviceCopyFromSourceDevice').empty().append("<option disabled selected value>" + _("Select device") + "</option>");
		$('select').select();
		$('#dialogDeviceCopyFromDestinationView').html(views[devicesSelectedView].commonName);
		$('#dialogDeviceCopyFrom a.btn-set').addClass('disabled')
		$('#dialogDeviceCopyFrom').modal('open');
	});
	$('#dialogDeviceCopyFromSourceView').on('change', function(){
		$('#dialogDeviceCopyFromSourceDevice').empty().append("<option disabled selected value>" + _("Select device") + "</option>");
		views[$('#dialogDeviceCopyFromSourceView').val()].devices.forEach(function(element, index){ $('#dialogDeviceCopyFromSourceDevice').append("<option value='" + index + "'>" + element.commonName + "</option>"); });
		$('select').select();
		$('#dialogDeviceCopyFrom a.btn-set').addClass('disabled')
	});
	$('#dialogDeviceCopyFromSourceDevice').on('change', function(){
		if($('#dialogDeviceCopyFromSourceDevice').val()){
			$('#dialogDeviceCopyFrom a.btn-set').removeClass('disabled')
		} else {
			$('#dialogDeviceCopyFrom a.btn-set').addClass('disabled')
		}
	});


	//+++++++++ TOOLBAR ++++++++++
	//Load Toolbar
	function loadToolbar(){
		//Add Views to Selectbox for LinkedView
		var viewIds = [];
		views.forEach(function(element){ viewIds.push(element.commonName); });
		$('*[data-name="nativeLinkedView"]').data("options", viewIds.join(";"));
		//Fill Table
		values2table('tableToolbar', toolbar, onChange);
	}


	//++++++++++ IMAGES ++++++++++
	//Load Images
	function loadImages(){
		//Fill Table
		values2table('tableImages', images, onChange, onTableImagesReady);
		//Add Dirs to Selectbox for SelectedDir
		imagesSelectedDirFillSelectbox();
	}

	//Init Image-Upload
	function initImageUpload(){
		document.getElementById('imagesUploadFile').addEventListener('change', imagesUploadHandleFileSelect, false);
		$('#imagesUploadFileSubmit').on('click', imagesUploadHandleSubmit);
	}
	function imagesUploadHandleFileSelect() {
		$('#imagesUploadFileSubmit').addClass('disabled');
		var files = $('#imagesUploadFile')[0].files || $('#imagesUploadFile')[0].dataTransfer.files; // FileList object
		if (!files.length) return;
		var file = files[0];
		if (file.size > 10 * 1024 * 1024) {
			alert(_('File %s is too big. Maximum 10MB', escape(file.name)));
			$('#imagesUploadFile').val('');
			return;
		}
		$('#imagesUploadFileSubmit').removeClass('disabled');
	}
	function imagesUploadHandleSubmit() {
		var files = $('#imagesUploadFile')[0].files || $('#imagesUploadFile')[0].dataTransfer.files; // FileList object
		if (!files.length) return;
		var file = files[0];
		uploadFile(file, userfilesImagePath + $('#imagesSelectedDir').val(), function (name) {
			$('#imagesUploadFileForm')[0].reset();
			$('#imagesUploadFileSubmit').addClass('disabled');
			getImages(function(){
				values2table('tableImages', images, onChange, onTableImagesReady);
				var dummy = $('#imagesSelectedDir').val();
				imagesSelectedDirFillSelectbox();
				$('#imagesSelectedDir').val(dummy).trigger('change');
				$('select').select();
			});
		});
	}

	//getImages
	var getImagesRunningTasks = 0;
	function getImages(path, callback){
		$('.hideOnLoad').hide();
		$('.showOnLoad').show();
		if(typeof path == 'function') callback = path;
		if(typeof path != "string") {
			path = userfilesImagePath;
			images = [];
			imagesDirs = [{
						dirname: 		"/",
			}];
		};
		socketCallback = function(err, obj){
			obj.forEach(function(element){
				if(element.isDir) {
					imagesDirs.push({
						dirname:		path.substring(userfilesImagePath.length) + "/" + element.file
					});
					getImagesRunningTasks += 1;
					getImages(path + "/" + element.file, callback);
				} else {
					images.push({
						filename: 		path.substring(userfilesImagePath.length) + "/" + element.file,
						filenameBS: 	path.substring(userfilesImagePath.length).replace(/\//g, "\\") + "\\" + element.file.replace(/\//g, "\\"),
						filenameVS:		path.substring(userfilesImagePath.length).replace(/\//g, "|") + "|" + element.file.replace(/\//g, "|")
					});
					console.log("Got Image: " + path + "/" + element.file);
				}
			});
			if(getImagesRunningTasks > 0) {
				getImagesRunningTasks -= 1;
			} else {
				console.log("Got all images.");
				$('.hideOnLoad').show();
				$('.showOnLoad').hide();
				if(typeof callback == 'function') callback();
			}
		}
		readDir(path, socketCallback);
	}

	//Add Images to Selectbox for SelectedDir
	function imagesSelectedDirFillSelectbox(){
		var imagesDirsSorted = [];
		imagesDirs.forEach(function(element){ imagesDirsSorted.push(element.dirname); });
		imagesDirsSorted.sort();
		$('#imagesSelectedDir').empty();
		imagesDirsSorted.forEach(function(element){ $('#imagesSelectedDir').append("<option value='" + element + "'>" + element + "</option>"); });
		$('select').select();
		imagesSelectedDirFilterList();
	}

	//Enhance Selectbox for SelectedDir
	$('#imagesSelectedDir').on('change', imagesSelectedDirFilterList);
	function imagesSelectedDirFilterList(){
		var val = $('#imagesSelectedDir').val();
		if(val == "/"){
			$('#imagesUploadRenameDir').addClass('disabled');
			$('#imagesUploadDeleteDir').addClass('disabled');
		} else {
			$('#imagesUploadRenameDir').removeClass('disabled');
			$('#imagesUploadDeleteDir').removeClass('disabled');
		}
		var $div = $('#tableImages');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		if (!val) {
			$lines.show();
		} else {
			$lines.find('input[data-name]').each(function () {
				var name = $(this).data('name');
				if (name === 'filename') {
					$line = $(this).closest('tr');
					if($(this).val().indexOf(val) == 0 && $(this).val().lastIndexOf("/") <= val.length) {
						$line.show();
					} else {
						$line.hide();
					}
				}
			});
		}
	}

	//Enhance tableImages with functions
	function onTableImagesReady(){
		var $div = $('#tableImages');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Make Filename Readonly
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'filename') {
				$(this).prop('readonly', true);
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Replace photo-button with thumbnail
			if (command === 'photo') {
				var imageIndex = $(this).data('index');
				$(this).replaceWith("<img src='" + link + "/.." + userfilesImagePath + images[imageIndex].filename + "' style='max-width:50px; max-height:50px;' class='thumbnail'></img>");
			}
			//Rename file
			if (command === 'edit') {
				$(this).on('click', function () {
					var index = $(this).data('index');
					var oldName = images[index].filename;
					var newName = images[index].filename;
					var isValid = false;
					do {
						newName = prompt(_("Change filename from %s to:", oldName), newName).replace(/\\/g, "/");
						isValid = (newName == "" || (newName.substring(0,1) != " " && (/^[^<>:;,?"*|\\]+$/.test(newName))));
						if (!isValid) alert(_("Invalid Name"));
					} while (!isValid)
					if(newName != "" && newName != oldName){
						if (newName.indexOf('/') != 0) newName = "/" + newName;
						(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
							var _oldName = userfilesImagePath + images[index].filename;
							var _newName = userfilesImagePath + newName;
							renameFile(_oldName, _newName, function(){
								changeImageName(_oldName, _newName);
								getImages(function(){
									values2table('tableImages', images, onChange, onTableImagesReady);
									var dummy = $('#imagesSelectedDir').val();
									imagesSelectedDirFillSelectbox();
									$('#imagesSelectedDir').val(dummy).trigger('change');
									$('select').select();
								});
							});
						})(); //<--End Closure
					}
				});
			}
			//Delete file
			if (command === 'delete_forever') {
				$(this).find('i').addClass('red').html('delete_forever');
				$(this).on('click', function (e) {
					var index = $(this).data('index');
					if(confirm(_("Delete file %s on server? Warning: This can't be undone!", images[index].filename))){
						deleteFile(userfilesImagePath + images[index].filename, function(){
							getImages(function(){
								values2table('tableImages', images, onChange, onTableImagesReady);
								var dummy = $('#imagesSelectedDir').val();
								imagesSelectedDirFillSelectbox();
								$('#imagesSelectedDir').val(dummy).trigger('change');
								$('select').select();
							});
						});
					}
				});
			}
		});
		//ImagePopup
		$('.thumbnail').on('click', function(){
			initDialog('dialogImagePopup', function(){});
			var imageLink = $(this).attr('src');
			$("#dialogImagePopupImageName").text(imageLink);
			$("#dialogImagePopupImage").html("<img src='" + imageLink + "' style='max-width:80vw; max-height:80vh;'>");
			$("#dialogImagePopup").modal('open');
		});
		imagesSelectedDirFilterList();
	}
	
	//Create Dir
	$('#imagesUploadCreateDir').on('click', function(){
		var newName = (($('#imagesSelectedDir').val() == "/") ? "" : $('#imagesSelectedDir').val()) + "/New Folder";
		var isValid = false;
		do {
			newName = prompt(_("Create Directory"), newName).replace(/\\/g, "/");
			isValid = (newName == "" || (newName.substring(0,1) != " " && (/^[^<>:;,?"*|\\]+$/.test(newName))));
			if (!isValid) alert(_("Invalid Name"));
		} while (!isValid)
		if(newName != ""){
			if (newName.indexOf('/') != 0) newName = "/" + newName;
			createDir(userfilesImagePath + newName, function(err){
				getImages(function(err){
					values2table('tableImages', images, onChange, onTableImagesReady);
					if(!err) var dummy = newName; else var dummy = $('#imagesSelectedDir').val();
					imagesSelectedDirFillSelectbox();
					$('#imagesSelectedDir').val(dummy).trigger('change');
					$('select').select();
				});
			});
		}
	});
	
	//Rename Dir
	$('#imagesUploadRenameDir').on('click', function(){
		var oldName = $('#imagesSelectedDir').val();
		var newName = $('#imagesSelectedDir').val();
		var isValid = false;
		do {
			newName = prompt(_("Change Directory Name from %s to:", oldName), newName).replace(/\\/g, "/");
			isValid = (newName == "" || (newName.substring(0,1) != " " && (/^[^<>:;,?"*|\\]+$/.test(newName))));
			if (!isValid) alert(_("Invalid Name"));
		} while (!isValid)
		if(newName != "" && newName != oldName){
			if (newName.indexOf('/') != 0) newName = "/" + newName;
			(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
				var _oldName = userfilesImagePath + oldName;
				var _newName = userfilesImagePath + newName;
				renameFile(_oldName, _newName, function(){
					changeImageName(_oldName, _newName);
					getImages(function(){
						values2table('tableImages', images, onChange, onTableImagesReady);
						var dummy = $('#imagesSelectedDir').val();
						imagesSelectedDirFillSelectbox();
						$('#imagesSelectedDir').val(dummy).trigger('change');
						$('select').select();
					});
				});
			})(); //<--End Closure
		}
	});
	
	//Delete Dir
	$('#imagesUploadDeleteDir').on('click', function(){
		if(confirm(_("Delete directory %s and all its content on server? Warning: This can't be undone!", $('#imagesSelectedDir').val()))){
			deleteFile(userfilesImagePath + $('#imagesSelectedDir').val(), function(){
				getImages(function(){
					values2table('tableImages', images, onChange, onTableImagesReady);
					var dummy = $('#imagesSelectedDir').val();
					dummy = dummy.substring(0, dummy.lastIndexOf('/'));
					if (dummy == "") dummy = "/";
					imagesSelectedDirFillSelectbox();
					$('#imagesSelectedDir').val(dummy).trigger('change');
					$('select').select();
				});
			});
		}
	});
	
	//Refresh
	$('#imagesUploadRefresh').on('click', function(){
		getImages(function(){
			values2table('tableImages', images, onChange, onTableImagesReady);
			var dummy = $('#imagesSelectedDir').val();
			$('#imagesSelectedDir').val(dummy).trigger('change');
			$('select').select();
		});
	});
	
	//Download Dir As Zip
	$('#imagesUploadDownloadDirAsZip').on('click', function(){
		$('#imagesUploadDownloadDirAsZip').addClass('disabled');
		$('#imagesUploadDownloadDirAsZipIcon').text("hourglass_empty");
		readDirAsZip(userfilesImagePath + $('#imagesSelectedDir').val(), function(err, data){
			if (err) {
				alert("Error: " + err);
			} else if (data) {
				var date = new Date();
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				if (m < 10) m = '0' + m;
				d = date.getDate();
				if (d < 10) d = '0' + d;
				var dateText = y + "-" + m + "-" + d;
				$('body').append('<a id="zip_download" href="data:application/zip;base64,' + data + '" download="' + dateText + '-iqontrol-userfiles.zip"></a>');
				document.getElementById('zip_download').click();
				document.getElementById('zip_download').remove();
			} else {
				alert("Error: no data received.");
			}
			$('#imagesUploadDownloadDirAsZipIcon').text("cloud_download");
			$('#imagesUploadDownloadDirAsZip').removeClass('disabled');
		});
	});	
	
	//Change ImageName in views and devices
	function changeImageName(oldName, newName){
		oldName = "." + oldName.replace(/\//g, "\\");
		newName = "." + newName.replace(/\//g, "\\");
		views.forEach(function(view){
			if(typeof view.nativeBackgroundImage != udef && view.nativeBackgroundImage.indexOf(oldName) == 0 && view.nativeBackgroundImage.length >= oldName.length) view.nativeBackgroundImage = newName + view.nativeBackgroundImage.substring(oldName.length);
			view.devices.forEach(function(device){
				if(typeof device.nativeBackgroundImage != udef && device.nativeBackgroundImage.indexOf(oldName) == 0 && device.nativeBackgroundImage.length >= oldName.length) device.nativeBackgroundImage = newName + device.nativeBackgroundImage.substring(oldName.length);
			});
		});
	}

	//File-Operations
	function uploadFile(file, path, callback) {
		if(typeof path == 'function') {
			callback = path;
			path = null;
		}
		var reader = new FileReader();
		reader.onload = function(e) { //Closure--> to capture the file information.
			path = (path ? path + "/" : "") + file.name;
			var parts = path.split('/');
			var adapter = parts[1];
			parts.splice(0, 2);
			socket.emit('writeFile', adapter, parts.join('/'), e.target.result, function () {
				if (callback) callback(file.name);
			});
		};
		reader.readAsArrayBuffer(file);
	}
	function readDir(path, callback) { //callback(err, obj)
		if(servConn.getIsConnected()) {
			servConn.readDir(path, callback);
		} else {
			var parts = path.split('/');
			var adapter = parts[1];
			parts.splice(0, 2);
			socket.emit('readDir', adapter, parts.join('/'), callback);
		}
	}
	function readDirAsync(path){
		return new Promise(resolve => {
			readDir(path, function(err, obj){
				resolve(err);
			});
		});
	}
	function readDirAsZip(path, callback) {
		var pathWithoutSlashNamespace = path.substring(namespace.length + 1)
		if(servConn.getIsConnected()){
			servConn.readDirAsZip(pathWithoutSlashNamespace, false, function(err, data){ if (callback) callback(err, data); });
		} else {
			alert(_("No socket.io-Instance found. To get this working, enable integrated socket.IO and disable 'Force Web-Sockets' in the web adapter!"));
		}
	}
	function deleteFile(path, callback) {
		if(servConn.getIsConnected()){
			servConn.unlink(path, function(err){ if (callback) callback(err); });
		} else {
			alert(_("No socket.io-Instance found. To get this working, enable integrated socket.IO and disable 'Force Web-Sockets' in the web adapter!"));
			var parts = path.split('/');
			var adapter = parts[1];
			parts.splice(0, 2);
			//socket.emit('unlink', adapter, parts.join('/'), function(err){	if (callback) callback(err); });
		}
	}
	function renameFile(oldPath, newPath, callback) {
		var newDir = newPath.substring(0, newPath.lastIndexOf('/'));
		createDir(newDir, function(){
			var oldParts = oldPath.split('/');
			var oldAdapter = oldParts[1];
			var newParts = newPath.split('/');
			var newAdapter = newParts[1];
			if(oldAdapter != newAdapter){
				newParts.splice(1, 0, oldAdapter, ".."); //inserts oldadapter and ".." at index 1 (and removes 0 elements)
				newPath = newParts.join('/'); //results in /oldadapter/../newadapter/path -> this trick is necessary, because the socket cant directly move files between two adapters
			}
			if(servConn.getIsConnected()){
				servConn.renameFile(oldPath, newPath, function(err){ if (callback) callback(err); });
			} else {
				alert(_("No socket.io-Instance found. To get this working, enable integrated socket.IO and disable 'Force Web-Sockets' in the web adapter!"));
				oldParts.splice(0, 2);
				newParts.splice(0, 2);
				//socket.emit('rename', adapter, oldParts.join('/'), newParts.join('/'), function (err) {
			}
		});
	}
	function renameFileAsync(oldPath, newPath){
		return new Promise(resolve => {
			renameFile(oldPath, newPath, function(err, obj){
				resolve(err);
			});
		});
	}
	async function createDir(path, callback, index) { //index is just for recoursive iterating through the process of creating all subdirs
		if (typeof index != 'number') index = 0;
		pathSubdirs = path.split('/');
		if (index >= pathSubdirs.length){
			if(callback) callback();
		} else {
			pathSubdir = pathSubdirs.slice(0, index + 1).join('/');
			var pathSubdirExists = await checkExistance(pathSubdir);
			if (pathSubdirs[index] != "" && !pathSubdirExists){ //Subdir is not existant - create it and iterate to next subdir
				(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
					var _path = path;
					var _callback = callback;
					var _index = index;
					if(servConn.getIsConnected()){
						servConn.mkdir(pathSubdir, function(err){
							createDir(_path, _callback, _index + 1);
						});
					} else {
						alert(_("No socket.io-Instance found. To get this working, enable integrated socket.IO and disable 'Force Web-Sockets' in the web adapter!"));
						var parts = path.split('/');
						var adapter = parts[1];
						parts.splice(0, 2);
						//socket.emit('mkdir', adapter, pathSubdir, function(err){
						//	createDir(_path, _callback, _index + 1);
						//});
					}
				})(); //<--End Closure
			} else { //Subdir exists - iterate to next subdir
				createDir(path, callback, index + 1);
			}
		}
	}
	async function checkExistance(path){
		var result = await readDirAsync(path);
		if(result == null) return true; else return false;
	}

	//++++++++++ OPTIONS ++++++++++
	//Load Options
	function loadOptions(){
		//Nothing to do
	}
}

/************** SAVE *****************************************************************
*** This will be called by the admin adapter when the user presses the save button ***
*************************************************************************************/
function save(callback) {
	//Select elements with class=value and build settings object
	var obj = {};
	$('.value').each(function () {
		var $this = $(this);
		if ($this.attr('type') === 'checkbox') {
			obj[$this.attr('id')] = $this.prop('checked');
		} else {
			obj[$this.attr('id')] = $this.val();
		}
	});
	//Get edited subsettings
	obj.toolbar = toolbar;
	obj.views = views;
	//Set version
	version = ++version || 0;
	obj.version = version;
	//Save settings
	callback(obj);
}
