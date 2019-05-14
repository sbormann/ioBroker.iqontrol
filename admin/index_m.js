//iQontrol - Copyright (c) by Sebatian Bormann
//Please visit https://github.com/sbormann/ioBroker.iqontrol for licence-agreement and further information

//++++++++++ SETTINGS ++++++++++
var imagePath = "/userimages";
var imagePathBS = imagePath.replace(/\//g, "\\");
var iQontrolRoles = {
	"iQontrolView": 				{name: "Link to other view", 	states: ["BATTERY", "UNREACH", "ERROR"]},
	"iQontrolSwitch": 				{name: "Switch", 				states: ["STATE", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/switch_on.png"},
	"iQontrolLight": 				{name: "Light", 				states: ["STATE", "LEVEL", "HUE", "CT", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/light_on.png"},
	"iQontrolFan": 					{name: "Fan", 					states: ["STATE", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/fan_on.png"},
	"iQontrolThermostat": 			{name: "Thermostat", 			states: ["SET_TEMPERATURE","TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "VALVE_STATES", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/radiator.png"},
	"iQontrolHomematicThermostat": 	{name: "Homematic-Thermostat", 	states: ["SET_TEMPERATURE", "TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "BOOST_STATE", "PARTY_TEMPERATURE", "VALVE_STATES", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/radiator.png"},
	"iQontrolTemperature": 			{name: "Temperature-Sensor", 	states: ["STATE", "TEMPERATURE", "HUMIDITY", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/temperature.png"},
	"iQontrolHumidity": 			{name: "Humidity-Sensor", 		states: ["STATE", "TEMPERATURE", "HUMIDITY", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/humidity.png"},
	"iQontrolBrightness": 			{name: "Brigthness-Sensor", 	states: ["STATE", "BRIGHTNESS", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/brightness_light.png"},
	"iQontrolDoor": 				{name: "Door", 					states: ["STATE", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/door_closed.png"},
	"iQontrolDoorWithLock": 		{name: "Door with lock", 		states: ["STATE", "LOCK_STATE", "LOCK_STATE_UNCERTAIN", "LOCK_OPEN", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/door_locked.png"},
	"iQontrolWindow": 				{name: "Window", 				states: ["STATE", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/window_closed.png"},
	"iQontrolBlind": 				{name: "Blind", 				states: ["LEVEL", "DIRECTION", "STOP", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/blind_middle.png"},
	"iQontrolFire": 				{name: "Fire-Sensor", 			states: ["STATE", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/fire_on.png"},
	"iQontrolAlarm": 				{name: "Alarm", 				states: ["STATE", "CONTROL_MODE", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/alarm_on.png"},
	"iQontrolValue": 				{name: "Value", 				states: ["STATE", "LEVEL", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/value_on.png"},
	"iQontrolProgram": 				{name: "Program", 				states: ["STATE", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/play_on.png"},
	"iQontrolScene": 				{name: "Scene", 				states: ["STATE", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/play.png"},
	"iQontrolButton": 				{name: "Button", 				states: ["STATE", "SET_VALUE", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/button.png"},
	"iQontrolPopup": 				{name: "Popup", 				states: ["STATE", "URL", "HTML", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/popup.png"},
	"iQontrolExternalLink":			{name: "External Link",			states: ["STATE", "URL", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/link.png"}
}
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
	//Hide Settings
	console.log("Loading Settings");
	$('.hideOnLoad').hide();
	$('.showOnLoad').show();

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

			//Get images
			console.log("getImages");
			getImages(function(){
				//Signal to admin, that no changes yet
				onChange(false);

				//Show Settings
				console.log("All settings loaded. Adapter ready.");
				$('.hideOnLoad').show();
				$('.showOnLoad').hide();

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
	});


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
		}
	}
	
	
	//++++++++++ VIEWS ++++++++++
	//Load Views
	function loadViews(){
		//Add Images to Selectbox for BackgroundImage
		var imagenames = [];
		images.forEach(function(element){ imagenames.push("." + imagePathBS + element.filenameBS + "/" + element.filenameBS); });
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
		images.forEach(function(element){ imagenames.push("." + imagePathBS + element.filenameBS + "/" + element.filenameBS); });
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
						onTableDevicesReady();
					});
					$('#dialogDeviceEditCommonName').html(views[viewIndex].devices[deviceIndex].commonName || "");
					$('#dialogDeviceEditViewIndex').val(viewIndex);
					$('#dialogDeviceEditDeviceIndex').val(deviceIndex);
					dialogDeviceEditStates = views[viewIndex].devices[deviceIndex].states || [];
					dialogDeviceEditStatesTable = [];
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
		//Add Thumbs to SelectBox and readonly to LinkedView if the role is not allowed to have a link
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
			if (name === 'nativeLinkedView') {
				var index = $(this).data('index');
				switch(views[devicesSelectedView].devices[index].commonRole){
					case "iQontrolView": case "iQontrolWindow": case "iQontrolDoor": case "iQontrolFire": case "iQontrolTemperature": case "iQontrolHumidity": case "iQontrolBrightness": //Link to other View allowed	
					$(this).parent('div').parent('td').css('opacity', '1');
					break;
					
					default: //Link to other view not allowed
					$(this).parent('div').parent('td').css('opacity', '0');
				}
			}
		});
		$('select').select();
	}

	//Enhance dialogDeviceEditCommonRole-Selectbox with functions
	$('#dialogDeviceEditCommonRole').on('change', function(){
		var viewIndex =   $('#dialogDeviceEditViewIndex').val();
		var deviceIndex = $('#dialogDeviceEditDeviceIndex').val();
		dialogDeviceEditCommonRole = $('#dialogDeviceEditCommonRole').val();
		if(typeof dialogDeviceEditStatesTable == 'object') dialogDeviceEditStatesTable.forEach(function(entry){ //save the table entrys before bulding the new table
			var index = dialogDeviceEditStates.findIndex(function(element){ return element.state == entry.state;});
			if (index == -1) {
				dialogDeviceEditStates.push(entry);
			} else {
				dialogDeviceEditStates[index] = entry;
			}
		});
		dialogDeviceEditStatesTable = [];
		if(dialogDeviceEditCommonRole){
			iQontrolRoles[dialogDeviceEditCommonRole].states.forEach(function(entry){ //push all corresponding states for the selected role into the table
				var commonRole  = (dialogDeviceEditStates.find(function(element){ return element.state == entry;}) || {'state': entry}).commonRole || "";
				var value = (dialogDeviceEditStates.find(function(element){ return element.state == entry;}) || {'state': entry}).value || "";
				if(commonRole == ""){
					if(entry == "VALVE_STATES"){
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
			if (command === 'edit') {
				var stateIndex = $(this).data('index');
				if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const') { //const - remove edit button
					$(this).hide();
				} else if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') { //array - open Edit Array Dialog
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
				} else { //linkedState - open selectID
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
			sid.selectId('show', $('#dialogDeviceAutocreateSourceId').val(), {type: 'channel'}, function (newId) {
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
					case ".STATE": case ".state": case ".Switch": case ".switch": case ".on": 
					if(typeof objects[id] !== udef && typeof objects[id].common.role != udef && objects[id].common.role == "switch.lock"){
						resultStatesObj['LOCK_STATE'] = id;
					} else {
						resultStatesObj['STATE'] = id;
					}
					break;

					case ".LEVEL": case ".level":
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

					case ".CONTROL_MODE":
					resultStatesObj['CONTROL_MODE'] = id;
					break;

					case ".BOOST_STATE":
					resultStatesObj['BOOSST_STATE'] = id;
					break;

					case ".PARTY_TEMPERATURE":
					resultStatesObj['PARTY_TEMPERATURE'] = id;
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
		uploadFile(file, imagePath + $('#imagesSelectedDir').val(), function (name) {
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

	//File-Operations
	function uploadFile(file, path, callback) {
		if(typeof path == 'function') {
			callback = path;
			path = null;
		}
		var reader = new FileReader();
		reader.onload = function(e) { //Closure to capture the file information.
			socket.emit('writeFile', adapter, (path ? path + "/" : "") + file.name, e.target.result, function () {
				if (callback) callback(file.name);
			});
		};
		reader.readAsArrayBuffer(file);
	}
	function deleteFile(path, callback) {
		alert("Hmm. In this alpha-Version deleting files does not work for me. Don't know why. So please report, if you get it working or if you find the bug...: sebastian@bormann.net");
		socket.emit('unlink', adapter, path, function (err) {
			if (callback) callback(err);
		});
	}
	function renameFile(oldPath, newPath, callback) {
		alert("Hmm. In this alpha-Version renaming does not work for me. Don't know why. So please report, if you get it working or if you find the bug...: sebastian@bormann.net");
		socket.emit('rename', adapter, oldPath, newPath, function (err) {
			if (callback) callback(err);
		});
	}
	function createDir(path, callback) {
		alert("Hmm. In this alpha-Version creating dirs does not work for me. Don't know why. So please report, if you get it working or if you find the bug...: sebastian@bormann.net");
		socket.emit('mkdir', adapter, path, function (err) {
			if (callback) callback(err);
		});
	}

	//getImages
	var getImagesRunningTasks = 0;
	function getImages(path, callback){
		if(typeof path == 'function') callback = path;
		if(typeof path != "string") {
			path = imagePath;
			images = [];
			imagesDirs = [{
						dirname: 		"/",
			}];
		};
		socket.emit('readDir', adapter, path, function(err, obj){
			obj.forEach(function(element){
				if(element.isDir) {
					imagesDirs.push({
						dirname:		path.substring(imagePath.length) + "/" + element.file
					});
					getImagesRunningTasks += 1;
					getImages(path + "/" + element.file, callback);
				} else {
					images.push({
						filename: 		path.substring(imagePath.length) + "/" + element.file,
						filenameBS: 	path.substring(imagePath.length).replace(/\//g, "\\") + "\\" + element.file.replace(/\//g, "\\"),
						filenameVS:		path.substring(imagePath.length).replace(/\//g, "|") + "|" + element.file.replace(/\//g, "|")
					});
					console.log("Got Image: " + path + "/" + element.file);
				}
			});
			if(getImagesRunningTasks > 0) {
				getImagesRunningTasks -= 1;
			} else {
				console.log("Got all images.");
				if(typeof callback == 'function') callback();
			}
		});
	}
	
	//Add Images to Selectbox for SelectedDir
	function imagesSelectedDirFillSelectbox(){
		var dirnames = [];
		$('#imagesSelectedDir').empty();
		imagesDirs.forEach(function(element){ $('#imagesSelectedDir').append("<option value='" + element.dirname + "'>" + element.dirname + "</option>"); });
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
				$(this).replaceWith("<img src='" + link + "/" + imagePath + images[imageIndex].filename + "' style='max-width:50px; max-height:50px;'></img>");
			}
			//Rename file
			if (command === 'edit') {
				$(this).on('click', function () {
					var index = $(this).data('index');
					var newName = prompt(_("Change filename from %s to:", images[index].filename), images[index].filename);
					if(newName && newName != images[index].filename){
						renameFile(imagePath + images[index].filename, imagePath + newName, function(){
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
			//Delete
			if (command === 'delete_forever') {
				$(this).find('i').addClass('red').html('delete_forever');
				$(this).on('click', function (e) {
					var index = $(this).data('index');
					if(confirm(_("Delete file %s on server? Warning: This can't be undone!", images[index].filename))){
						deleteFile(imagePath + images[index].filename, function(){
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
		imagesSelectedDirFilterList();
	}
	//Create Dir
	$('#imagesUploadCreateDir').on('click', function(){
		var newName = prompt(_("Create Directory"), (($('#imagesSelectedDir').val() == "/") ? "" : $('#imagesSelectedDir').val()) + "/New Folder");
		if(newName != ""){
			if (newName.indexOf('/') != 0) newName = "/" + newName;
			createDir(imagePath + newName, function(){
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
	//Rename Dir
	$('#imagesUploadRenameDir').on('click', function () {
		var newName = prompt(_("Change Directory Name from %s to:", $('#imagesSelectedDir').val()), $('#imagesSelectedDir').val());
		if (newName.indexOf('/') != 0) newName = "/" + newName;
		if(newName && newName != $('#imagesSelectedDir').val()){
			renameFile(imagePath + $('#imagesSelectedDir').val(), imagePath + newName, function(){
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
	//Delete Dir
	$('#imagesUploadDeleteDir').on('click', function () {
		if(confirm(_("Delete directory %s and all its content on server? Warning: This can't be undone!", $('#imagesSelectedDir').val()))){
			deleteFile(imagePath + $('#imagesSelectedDir').val(), function(){
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