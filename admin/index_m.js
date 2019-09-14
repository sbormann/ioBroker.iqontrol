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
										states: ["ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"],
										options: {
											icon_on: {name: "Icon", type: "icon", defaultIcons: ";link_plain_internal.png;link_chain.png", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 
										}
									},
	"iQontrolSwitch": 				{
										name: "Switch", 				
										states: ["STATE", "POWER", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/switch_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "switch_on.png;plug_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "switch_off.png;switch_red_off.png;plug_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolButton": 				{
										name: "Button", 
										states: ["STATE", "SET_VALUE", "OFF_SET_VALUE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/button.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "button.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "button.png", default: ""},
											returnToOffSetValueAfter: {name: "Return to 'OFF_SET_VALUE' after [ms]", type: "number", min: "10", max: "60000", default: ""}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolLight": 				{
										name: "Light",
										states: ["STATE", "LEVEL", "HUE", "SATURATION", "COLOR_BRIGHTNESS", "CT", "WHITE_BRIGHTNESS", "ALTERNATIVE_COLORSPACE_VALUE", "POWER", "EFFECT", "EFFECT_NEXT", "EFFECT_SPEED_UP", "EFFECT_SPEED_DOWN", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/light_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "light_on.png;light_lampshade_on.png;light_desklamp_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "light_off.png;light_lampshade_off.png;light_desklamp_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},						
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											invertCt: {name: "Invert CT (use Kelvin instead of Mired)", type: "checkbox", default: "false"}, 
											alternativeColorspace: {name: "Colorspace for ALTERNATIVE_COLORSPACE_VALUE", type: "select", selectOptions: "/None;RGB/RGB;#RGB/#RGB;RGBW/RGBW;#RGBW/#RGBW;RGBWWCW/RGBWWCW;#RGBWWCW/#RGBWWCW;RGBCWWW/RGBCWWW;#RGBCWWW/#RGBCWWW;RGB_HUEONLY/RGB (Hue only);#RGB_HUEONLY/#RGB (Hue only);HUE_MILIGHT/Hue for Milight", default: ""}
										}
									},
	"iQontrolFan": 					{
										name: "Fan",
										states: ["STATE", "BATTERY", "UNREACH", "POWER", "ERROR"], 
										icon: "/images/icons/fan_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "fan_on.png;kitchenhood_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "fan_off.png;kitchenhood_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolThermostat": 			{
										name: "Thermostat",
										states: ["SET_TEMPERATURE","TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/radiator.png",
										options: {
											icon_on: {name: "Icon", type: "icon", defaultIcons: "radiator.png;heating_on.png;cooling_on.png;airconditioner_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "radiator_off.png;heating_off.png;cooling_off.png;airconditioner_off.png", default: ""},
											controlModeDisabledValue: {name: "Value of CONTROL_MODE for 'disabled'", type: "text", default: ""}, 
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolHomematicThermostat": 	{
										name: "Homematic-Thermostat",
										states: ["SET_TEMPERATURE", "TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "BOOST_STATE", "PARTY_TEMPERATURE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/radiator.png",
										options: {
											icon_on: {name: "Icon", type: "icon", defaultIcons: "radiator.png;heating_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "radiator_off.png;heating_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolTemperature": 			{
										name: "Temperature-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/temperature.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "temperature.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "temperature.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolHumidity": 			{
										name: "Humidity-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/humidity.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "humidity.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "humidity.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolBrightness": 			{
										name: "Brightness-Sensor",
										states: ["STATE", "BRIGHTNESS", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/brightness_light.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "brightness_light.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "brightness_dark.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolMotion": 				{
										name: "Motion-Sensor",
										states: ["STATE", "BRIGHTNESS", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/motion_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "motion_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "motion_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolDoor": 				{
										name: "Door", 
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/door_closed.png",
										options: {
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "door_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "door_closed.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolGarageDoor": 				{
										name: "Garage Door", 
										states: ["STATE", "TOGGLE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/garagedoor_closed.png",
										options: {
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "garagedoor_opened.png;gate_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "garagedoor_closed.png;gate_closed.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolDoorWithLock": 		{
										name: "Door with lock",
										states: ["STATE", "LOCK_STATE", "LOCK_STATE_UNCERTAIN", "LOCK_OPEN", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/door_locked.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "door_opened.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "door_closed.png", default: ""},
											icon_locked: {name: "Icon locked", type: "icon", defaultIcons: "door_locked.png", default: ""},
											icon_unlocked: {name: "Icon unlocked", type: "icon", defaultIcons: "door_unlocked.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolWindow": 				{
										name: "Window",
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/window_closed.png",
										options: {
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "window_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "window_closed.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolBlind": 				{
										name: "Blind", 
										states: ["LEVEL", "DIRECTION", "STOP", "UP", "UP_SET_VALUE", "DOWN", "DOWN_SET_VALUE", "FAVORITE_POSITION", "FAVORITE_POSITION_SET_VALUE", "SLATS_LEVEL", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/blind_middle.png",
										options: {
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "blind_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "blind_closed.png", default: ""},
											icon_middle: {name: "Icon middle", type: "icon", defaultIcons: "blind_middle.png", default: ""},
											icon_closing: {name: "Icon closing", type: "icon", defaultIcons: "blind_closing.png", default: ""},
											icon_opening: {name: "Icon opening", type: "icon", defaultIcons: "blind_opening.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											invertActuatorLevel: {name: "Invert LEVEL (0 = open)", type: "checkbox", default: "false"}, 
											directionOpeningValue: {name: "Value of DIRECTION for 'opening'", type: "text", default: "1"}, 
											directionClosingValue: {name: "Value of DIRECTION for 'closing'", type: "text", default: "2"}, 
											directionUncertainValue: {name: "Value of DIRECTION for 'uncertain'", type: "text", default: "3"},
											favoritePositionCaption: {name: "Caption for FAVORITE_POSITION", type: "text", default: "Favorite Position"}
										}
									},
	"iQontrolFire": 				{
										name: "Fire-Sensor",
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/fire_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "fire_on.png;gas_on.png;firebox_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "fire_off.png;gas_off.png;firebox_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolAlarm": 				{
										name: "Alarm",
										states: ["STATE", "CONTROL_MODE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"],
										icon: "/images/icons/alarm_on.png",
										options: {
											icon_triggered: {name: "Icon triggered (STATE is true)", type: "icon", defaultIcons: "alarm_on_triggered.png;alarm_on.png;bell_on.png;bell_ringing_on.png;firebox_on.png;panic_on.png", default: ""},
											icon_on: {name: "Icon on (STATE is false, CONTROL_MODE is armed)", type: "icon", defaultIcons: "alarm_on.png;alarm_on_triggered.png;bell_on.png;bell_ringing_on.png;firebox_on.png;firebox_green.png;panic_on.png", default: ""},
											icon_off: {name: "Icon off (STATE is false, CONTROL_MODE is disarmed)", type: "icon", defaultIcons: "alarm_off.png;bell_off.png;bell_ringing_off.png;firebox_off.png;panic_off.png", default: ""},
											controlModeDisarmedValue: {name: "Value of CONTROL_MODE for 'disarmed'", type: "text", default: "0"}, 
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolBattery": 				{
										name: "Battery", 
										states: ["STATE", "CHARGING", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/battery_full.png",
										options: {
											icon_on: {name: "Icon full", type: "icon", defaultIcons: "battery_full.png", default: ""},
											icon_off: {name: "Icon empty", type: "icon", defaultIcons: "battery_empty.png", default: ""},
											icon_charged75: {name: "Icon 75%", type: "icon", defaultIcons: "battery_75.png", default: ""},
											icon_charged50: {name: "Icon 50%", type: "icon", defaultIcons: "battery_50.png", default: ""},
											icon_charged25: {name: "Icon 25%", type: "icon", defaultIcons: "battery_25.png", default: ""},
											icon_charged10: {name: "Icon 10%", type: "icon", defaultIcons: "battery_10.png", default: ""},
											icon_charging: {name: "Icon charging", type: "icon", defaultIcons: "battery_charging_overlay.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolValue": 				{
										name: "Value",
										states: ["STATE", "LEVEL", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/value_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "value_on.png;info_circle_on.png;info_square_on.png;info_bubble_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "value_off.png;info_circle_off.png;info_square_off.png;info_bubble_off.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolProgram": 				{
										name: "Program", 
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/play_on.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "play_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "play.png", default: ""},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolScene": 				{
										name: "Scene", 	
										states: ["STATE", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/play.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "play.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "play.png", default: ""},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}, 
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										} 
									},
	"iQontrolPopup": 				{
										name: "Popup", 	
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/popup.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "popup.png;link_square_internal.png;camera_on.png;camera_ptz_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "popup.png;link_square_internal.png;camera_on.png;camera_ptz_on.png", default: ""},
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											popupWidth: {name: "Popup Width [px]", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Popup Width [px]", type: "number", min: "100", max: "2000", default: ""}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									},
	"iQontrolExternalLink":			{
										name: "External Link",	
										states: ["STATE", "URL", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR"], 
										icon: "/images/icons/link.png",
										options: {
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "link.png;link_square_external.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "link.png;link_square_external.png", default: ""},
											showTimestamp: {name: "Show Timestamp", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"} 										
										}
									}
};

//Delcarations
const udef = 'undefined';
var link;
var connectionLink;
var socketWasConnected = false;
var socketConnectionErrorMessages = "";
var iobrokerObjects;
var iobrokerObjectsReady = false;
var iobrokerObjectsReadyFunctions = [];

//ChannelDetector
/* const detector = new ChannelDetector();
const keys = Object.keys(iobrokerObjects);		// For optimization
const usedIds = [];                 			// To not allow using of same ID in more than one device
const ignoreIndicators = [];    				// Ignore indicators by name
const supportedTypes = [];						// Supported types. Leave it null if you want to get ALL devices.
var options = {
	objects:            iobrokerObjects,
	id:                 'milight-smart-light.1.Feuerstelle.fullColor-1',
	_keysOptional:      keys,
	_usedIdsOptional:   usedIds,
	ignoreIndicators:   ignoreIndicators
};
var controls = detector.detect(options); */


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

var $enhanceTextInputToComboboxActualTarget;
function enhanceTextInputToCombobox(targetInput, options, iconsFromOption){
	//targetInput - string - selector for text-input-field to enhance
	//options - string - "value1/caption1/icon1;value2/caption2/icon2;[optgroup-caption];value3/caption3/icon3;..."
	//iconsFromOption - boolean - if true, the values will be used to generate links to icons (\ will be replaced by / an link will be preceded), if no icon is given in options
	$(targetInput).on('blur', function(){
		var that = this;
		setTimeout(function(){var _that = that; _that.scrollLeft = 100000;}, 10);
	});
	$(targetInput).trigger('blur');
	var lastTargetInput;
	$(targetInput).each(function(){
		$(this).add('label').wrap("<div class='combobox'></div>");
		$(this).after("<a class='comboboxDropdownTrigger waves-effect waves-teal btn-small btn-flat' data-target='dropdown_" + targetInput + "' href='#' onclick='$enhanceTextInputToComboboxActualTarget = $(this).prevAll(\"input\"); enhanceTextInputToComboboxScrollDropdownTo($(this).data(\"target\"), $(this).prevAll(\"input\").val()); console.log($enhanceTextInputToComboboxActualTarget);'><i class='material-icons' style='font-size: 25px;'>arrow_drop_down</i></a>");
		lastTargetInput = this; 
	});
	options = options || $(lastTargetInput).data('options') || "";
	options = options.split(";");
	var comboboxContent = "<ul id='dropdown_" + targetInput + "' class='dropdown-content' style='min-width: 100%; right: 0px; left: unset;'>";
	options.forEach(function(option){
		if (option.substring(0,1) == "[" && option.substr(-1) == "]"){ //Optgroup
			var caption = _(option.substring(1, option.length - 1));
			comboboxContent += "	<li style='padding: 14px 4px; color:grey;'>";
			comboboxContent += "		" + caption + "&nbsp;";
			comboboxContent += "	</li>";				
		} else { //Normal option
			var optionParts = option.split("/");
			var value = encodeURIComponent(optionParts[0]);
			var caption = "";
			if (optionParts.length > 1){
				caption = optionParts[1];				
			} else {
				caption = optionParts[0];
			}
			var icon = "";
			if (optionParts.length > 2){
				icon = optionParts[2];
			} else if (iconsFromOption){
				icon = option.split("/")[0].replace(/\\/g, "/").substring(1) || "";
				if (icon != "") icon = link + icon;
			}
			comboboxContent += "	<li data-value='" + value + "'>";
			comboboxContent += "		<a onclick=\"enhanceTextInputToComboboxEntryToInput('" + value + "');\">";
			if (icon != ""){
				comboboxContent += "		<img src='" + icon + "' style='display: block; margin-bottom: 5px; min-width: 40px; max-width: 40px; max-height: 40px; width: auto; height: auto;'>";
			}
			comboboxContent += "			" + caption + "&nbsp;";
			comboboxContent += "		</a>";
			comboboxContent += "	</li>";				
		}
	});
	comboboxContent += "</ul>";
	$(lastTargetInput).after(comboboxContent);
	$('.comboboxDropdownTrigger').dropdown({alignment: 'right'});
}
function enhanceTextInputToComboboxScrollDropdownTo(dropdownlist, value){
	var $dropdownlist = $("ul[id='" + dropdownlist + "']");
	setTimeout(function(){
		var _$dropdownlist = $dropdownlist;
		_$dropdownlist.scrollTop(0);
	}, 15);
	setTimeout(function(){
		var _dropdownlist = dropdownlist;
		var _$dropdownlist = $dropdownlist;
		$("ul[id='" + _dropdownlist + "'] li").each(function(){
			$(this).removeClass('grey lighten-3');
			if ($(this).data('value') == encodeURIComponent(value.replace(/\//g, "\\"))){
				$(this).addClass('grey lighten-3');
				_$dropdownlist.scrollTop(_$dropdownlist.scrollTop() + $(this).position().top); 
			}
		});
	}, 300);
}
function enhanceTextInputToComboboxEntryToInput(value){
	$enhanceTextInputToComboboxActualTarget.val(decodeURIComponent(value).replace(/\\/g, "/")).trigger('change').trigger('blur');
}



/************** LOAD ********************************************************
*** This will be called by the admin adapter when the settings page loads ***
****************************************************************************/
function load(settings, onChange) { 
//++++++++++ START ++++++++++
	//Loading begins
	var loading = true;

	//Hide Settings
	console.log("Loading iQontrol Settings");
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

	//Add function to inputClear-Buttons and selectClear-Buttons
	$('.inputClear').on('click', function(){
		if($(this).data('default')){
			$(this).prevAll('input').val($(this).data('default')).trigger('change');
		} else {
			$(this).prevAll('input').val('').removeClass('valid invalid').trigger('change');
		}
		M.validate_field($(this).prevAll('input'));
		M.updateTextFields();
	});
	$('.selectClear').on('click', function(){
		if($(this).data('default')){
			$(this).prevAll('.select-wrapper').children('select').val($(this).data('default'));
		} else {
			$(this).prevAll('.select-wrapper').children('select').val('');
		}
		$('select').select();
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

	//Get Link of best fitting web-adapter
	console.log("getLink of best fitting web-adapter");
	getExtendableInstances(function (result) {
		if (result) {
			//Detect connection over iobroker.net or iobroker.pro
			var isIobrokerPro = false;
			if (location.hostname.toLowerCase() == "iobroker.net" || location.hostname.toLowerCase() == "iobroker.pro"){ //Connection over iobroker.net or iobroker.pro
				console.log("Connection over iobroker.net or iobroker.pro detected...");
				isIobrokerPro = true;
			}

			//Find best fitting web-Adapter
			var bestInstance = 0;
			var goalSecure = (location.protocol == 'https:');
			var goalSecureFound = false;
			var goalSocketFound = false;
			var goalForceWebSocketsFound = false;
			for (i=0; i<result.length; i++){
				if (result[i].native.secure == goalSecure){
					if (!goalSecureFound) {
						goalSecureFound = true;
						bestInstance = i;
					}	
					if (result[i].native.socketio == ""){
						if (!goalSocketFound) {
							goalSocketFound = true;
							bestInstance = i;
						}
						if (result[i].native.forceWebSockets == false){
							if(!goalForceWebSocketsFound){
								goalForceWebSocketsFound = true;
								bestInstance = i;
							}
						}
					}
				}
			}
			if (!(goalSocketFound && goalForceWebSocketsFound) && !isIobrokerPro){
				console.log("Could not find any web-adapter with integrated socketIO and disabled Force Web-Sockets");
				socketConnectionErrorMessages += "\n" + _("You need to activate integrated socket.IO and disable 'Force Web-Sockets' in web-adaptor-settings!");
			}

			//Create Link from best fitting web-adapter
			if (isIobrokerPro){ //Connection over iobroker.net or iobroker.pro - connect without ports!
				link = location.protocol + "//" + location.hostname + "/iqontrol";
				connectionLink = location.protocol + "//"  + location.hostname;			
			} else { //Direct connection
				link = (result[bestInstance].native.secure ? "https://" : "http://") + location.hostname + ":" + result[bestInstance].native.port + "/iqontrol";
				connectionLink = (result[bestInstance].native.secure ? "https://" : "http://") + location.hostname + ":" + result[bestInstance].native.port;
			}
			console.log("Got Link: " + link);
			$('#mainLink').attr('href', link + "/index.html?namespace=" + adapter + "." + instance);

			//Add Roles to dialogDeviceEditCommonRole-Selectbox
			$('#dialogDeviceEditCommonRole').empty().append("<option disabled selected value>" + _("Select Role") + "</option>");
			for (var element in iQontrolRoles){ $('#dialogDeviceEditCommonRole').append("<option value='" + element + "' data-icon='" + (iQontrolRoles[element].icon ? link + iQontrolRoles[element].icon : "") + "'>" + _(iQontrolRoles[element].name) + "</option>"); }
			$('select').select();

			//Try to init socket.io via conn.js and servConn-Object
			if(location.protocol == 'https:' && !result[bestInstance].native.secure && !isIobrokerPro){
				console.log("Admin runs in https, but web-adpater in http");
				socketConnectionErrorMessages = _("Your admin-adapter runs in https-mode, but web-adapter in http. Therefore socket.io could not be loaded because mixed content is blocked. To get this working, enable https-mode in one instance of web-adapter.");
				goOnAfterSocketIsConnectedOrAfterSocketInitError(); 
			} else if (location.protocol == 'http:' && result[bestInstance].native.secure && !isIobrokerPro){
				console.log("Admin runs in http, but web-adapter in https");
				socketConnectionErrorMessages = _("Your admin-adapter runs in http-mode, but web-adapter in https. Therefore socket.io could not be loaded because mixed content is blocked. To get this working, enable https-mode in admin or disable https-mode in one instance of web-adapter.");
				goOnAfterSocketIsConnectedOrAfterSocketInitError(); 
			} else {
				try {
					console.log("Try to init socket.io");
					var _connectionLink = connectionLink;
					var _namespace = namespace;
					var _connOptions = {
						name:          _namespace,  			// optional - default 'vis.0'
						connLink:      _connectionLink,  	// optional URL of the socket.io adapter
						socketSession: ''           		// optional - used by authentication
					};
					var _connCallbacks = {
						onConnChange: function(isConnected) {
							if(isConnected) {
								console.log('Socket connected');
								if (!socketWasConnected){
									socketWasConnected = true;
									socketConnectionErrorMessages = "";
									goOnAfterSocketIsConnectedOrAfterSocketInitError();
								}
							} else {
								console.log('Socket disconnected');
							}
						},
						onRefresh: function() {
							console.log('Socket refresh');
						},
						onError: function(err) {
							console.log('Socket connection error:' + err.command + " - " + err.arg);
							if (!socketWasConnected){
								socketConnectionErrorMessages += "\n" + _('Cannot execute %s for %s, because of insufficient permissions', err.command, err.arg);
								goOnAfterSocketIsConnectedOrAfterSocketInitError();
							} else {
								alert(_('Cannot execute %s for %s, because of insufficient permissions', err.command, err.arg));
							}
						}
					};
					servConn.init(_connOptions, _connCallbacks);
					servConn.namespace = _namespace;
					servConn.setReconnectInterval(5000);
					servConn.setReloadTimeout(300);
					console.log("Inited socket.io");
				} catch {
					//Error initing socket.io - Fallback to inbuilt socket of admin - wich has difficulties with file operations
					console.log("Error initing socket.io");
					socketConnectionErrorMessages += "\n" + _("No socket.io-Instance found. To get this working, enable integrated socket.IO and disable 'Force Web-Sockets' in the web adapter!");
					goOnAfterSocketIsConnectedOrAfterSocketInitError();
				}
			}
		} else {
			alert(_("Error: No web-adapter found!"));
		}
	});
	
	function goOnAfterSocketIsConnectedOrAfterSocketInitError(){
		//Error?
		if (socketConnectionErrorMessages != ""){
			socketConnectionErrorMessages += "\n\n\n" + _("Trying to use fallback. Some functions and file-operations may not work.");
			alert(socketConnectionErrorMessages);
		}
		//Get images
		console.log("getImages");
		getImages(async function(){
			//Backward-Compatibility: Move images from old local location to new userfilesImagePath-location
			console.log("Moving userfiles to new location...");
			var oldImagePath = "/" + adapter + "/userimages";
			var err = await renameFileAsync(oldImagePath + "/", userfilesImagePath + "/");
			if(typeof err == udef) {
				console.log("...userfiles moved.")
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
		//Fill Table
		values2table('tableViews', views, onChange, onTableViewsReady);
	}

	//Enhance TableViews with functions
	function onTableViewsReady(){
		var $div = $('#tableViews');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add Images to Selectbox for BackgroundImage
		var imagenames = [];
		images.forEach(function(element){ imagenames.push(".\\.." + userfilesImagePathBS + element.filenameBS + "/" + element.filenameBS); });
		imagenames.sort();
		enhanceTextInputToCombobox('#tableViews input[data-name="nativeBackgroundImage"]', "/" + _("(None)") + ";" + imagenames.join(";"), true);
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
		//Check for duplicates
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
			//Backward-Compatibility: If BackgroundImageActive not set, set it to the same value, as BackgroundImage
			views[devicesSelectedView].devices.forEach(function(device){
				if (typeof device.nativeBackgroundImageActive == udef && typeof device.nativeBackgroundImage !== udef) device.nativeBackgroundImageActive = device.nativeBackgroundImage;
			});
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
		//Add Images to Selectbox for BackgroundImage
		var imagenames = [];
		images.forEach(function(element){ imagenames.push(".\\.." + userfilesImagePathBS + element.filenameBS + "/" + element.filenameBS); });
		imagenames.sort();
		enhanceTextInputToCombobox('#tableDevices input[data-name="nativeBackgroundImage"], #tableDevices input[data-name="nativeBackgroundImageActive"]', "/" + _("(None)") + ";" + imagenames.join(";"), true);
		//Add role as span to commonName
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
					} else if(entry == "SET_VALUE"  || entry == "OFF_SET_VALUE"  ||  entry == "UP_SET_VALUE"  || entry == "DOWN_SET_VALUE"  || entry == "FAVORITE_POSITION_SET_VALUE"  || entry == "HTML" || entry == "URL"){
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
			var dialogDeviceEditOptionsComboboxes = [];
			var dialogDeviceEditOptionsContent = "";
			for (entry in iQontrolRoles[dialogDeviceEditCommonRole].options){ //push all corresponding options for the selected role into the table
				var name = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].name;				
				var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
				var value = (dialogDeviceEditOptions.find(function(element){ return element.option == entry;}) || {}).value || iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default || "";
				switch(type){
					case "text":
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <input class='value dialogDeviceEditOption' data-option='" + entry + "' data-type='text' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "</div>";
					break;

					case "number":
					var min = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].min || 0;
					var max = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].max || 100;
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <input class='value dialogDeviceEditOption validate validateOnlyError' data-option='" + entry + "' data-type='number' type='number' min='" + min + "' max='" + max + "' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "    <span class='helper-text' data-error='" + min + " - " + max + "' data-success=''></span>";
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
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <select class='value dialogDeviceEditOption' data-option='" + entry + "' data-type='select' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'>" + selectOptionsContent + "</select>";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'></label>";
					dialogDeviceEditOptionsContent += "    <span class='translate'>" + _(name) + "</span>";
					dialogDeviceEditOptionsContent += "</div>";
					break;
					
					case "checkbox":
					if(value == "true") value = true;
					if(value == "false") value = false;
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <p><label>";
					dialogDeviceEditOptionsContent += "        <input class='value dialogDeviceEditOption filled-in' data-option='" + entry + "' data-type='checkbox' type='checkbox' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "' " + (value?"checked='checked'":"") + " />";
					dialogDeviceEditOptionsContent += "        <span>" + _(name) + "</span>";
					dialogDeviceEditOptionsContent += "    </label></p>";
					dialogDeviceEditOptionsContent += "</div>";
					break;

					case "icon":
					//Default Icons
					var defaultIconsString = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].defaultIcons;
					var defaultIcons = defaultIconsString.split(';');
					var options = ";[" + _("Default Icons") + ":]";
					defaultIcons.forEach(function(option, index){
						if (option != "") {
							if (index == 0){ //First Default Icon
								options += ";/" + option.replace(/\//g, "\\") + " " + _("(Default)") + "/" + (link + "/images/icons/" + option).replace(/\//g, "\\");
							} else { //Alternative Default Icon
								options += ";" + ("./images/icons/" + option).replace(/\//g, "\\") + "/" + option.replace(/\//g, "\\");	
							}
						}
					});
					//Blank Icon
					options += ";[" + _("No Icon") + ":]";
					options += ";" + ("./images/icons/blank.png").replace(/\//g, "\\") + "/" + _("No Icon") + "/" + (link + "/images/icons/checkboard.png").replace(/\//g, "\\");
					//User Icons
					var userIcons = [];
					images.forEach(function(element){ 
						if (element.filename.substring(0, 11) == "/usericons/") userIcons.push(element.filename.substring(11));
					});
					userIcons.sort();
					if (userIcons.length > 0){
						options += ";[" + _("User Icons") + ":]";
						userIcons.forEach(function(option){
							options += ";" + ("./.." + userfilesImagePath + "/usericons/" + option).replace(/\//g, "\\") + "/" + option.replace(/\//g, "\\");
						});
					}
					//Icons Combobox
					dialogDeviceEditOptionsComboboxes.push({id: 'dialogDeviceEditOption_' + entry, options: options});
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <input class='value dialogDeviceEditOption icon' data-option='" + entry + "' data-type='icon' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' placeholder='" + _("(Default)") + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
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
			dialogDeviceEditOptionsComboboxes.forEach(function(entry){
				enhanceTextInputToCombobox('#' + entry.id, entry.options, true);	
			});
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
				if ($(this).val() == "OFF_SET_VALUE") $(this).after('<span style="font-size:x-small;" class="translate">constant</span>');
				if ($(this).val() == "UP_SET_VALUE") $(this).after('<span style="font-size:x-small;" class="translate">constant</span>');
				if ($(this).val() == "DOWN_SET_VALUE") $(this).after('<span style="font-size:x-small;" class="translate">constant</span>');
				if ($(this).val() == "FAVORITE_POSITION_SET_VALUE") $(this).after('<span style="font-size:x-small;" class="translate">constant</span>');
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

					case ".LOWBAT": case ".percent":
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
		for (i=0; i<files.length; i++){
			var file = files[i];
			if (file.type == "") {
				alert(_("%s is directory. Only file upload allowed.", escape(file.name)));
				return;
			}
			if (file.size > 10 * 1024 * 1024) {
				alert(_("File %s is too big. Maximum 10MB", escape(file.name)));
				return;
			}
			if ($('#imagesUploadFile').prop('accept') &&  $('#imagesUploadFile').prop('accept').indexOf(file.type) == -1){
				alert(_("File %s has wrong filetype. Allowed file types: ", escape(file.name)) + $('#imagesUploadFile').prop('accept'));
				return;
			}
			$('#imagesUploadFileSubmit').removeClass('disabled');
		}
	}
	var imagesUploadFileHandleCount = 0;
	function imagesUploadHandleSubmit() {
		var files = $('#imagesUploadFile')[0].files || $('#imagesUploadFile')[0].dataTransfer.files; // FileList object
		if (!files.length) return;
		$('#imagesUploadFileSubmit').addClass('disabled');
		$('#imagesUploadFileFormProgress').show();
		for (i=0; i<files.length; i++){
			var file = files[i];
			imagesUploadFileHandleCount++;
			uploadFile(file, userfilesImagePath + $('#imagesSelectedDir').val(), function (name) {
				$('#imagesUploadFileForm')[0].reset();
				$('#imagesUploadFileSubmit').addClass('disabled');
				imagesUploadFileHandleCount--;
				if (imagesUploadFileHandleCount == 0) {
					getImages(function(){
						values2table('tableImages', images, onChange, onTableImagesReady);
						var dummy = $('#imagesSelectedDir').val();
						imagesSelectedDirFillSelectbox();
						$('#imagesSelectedDir').val(dummy).trigger('change');
						$('select').select();
						$('#imagesUploadFileSubmit').removeClass('disabled');
						$('#imagesUploadFileFormProgress').hide();
					});
				}
			});	
		}
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
				$(this).replaceWith("<img src='" + link + "/.." + userfilesImagePath + images[imageIndex].filename + "' data-filename='./.." + userfilesImagePath + images[imageIndex].filename + "' style='max-width:50px; max-height:50px;' class='thumbnail'></img>");
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
			//Check, if images is used
			var imageName = $(this).data('filename');
			var imageUsedIn = [];
			views.forEach(function(view){
				if(typeof view.nativeBackgroundImage != udef && view.nativeBackgroundImage.replace(/\\/g, "/") == imageName) imageUsedIn.push(_("View") + ": " + view.commonName + " " + _("as backgroundimage"));
				view.devices.forEach(function(device){
					if((typeof device.nativeBackgroundImage != udef && device.nativeBackgroundImage.replace(/\\/g, "/") == imageName) || (typeof device.nativeBackgroundImageActive != udef && device.nativeBackgroundImageActive.replace(/\\/g, "/") == imageName)) imageUsedIn.push(_("View") + ": " + view.commonName + ", " + _("Device") + ": " + device.commonName + " " + _("as backgroundimage"));
					if (device.options) device.options.forEach(function(option){
						if(option.type == "icon" && option.value.replace(/\\/g, "/") == imageName) imageUsedIn.push(_("View") + ": " + view.commonName + ", " + _("Device") + ": " + device.commonName + " " + _("as icon"));
					});
				});
			});
			$("#dialogImagePopupImageName").text(imageLink);
			$("#dialogImagePopupImage").html("<img src='" + imageLink + "' style='max-width:80vw; max-height:80vh;'>");
			if (imageUsedIn.length > 0){
				$("#dialogImagePopupImageDescription").html("<p>" + _("In this instance this image is used in:") + "</p><ul><li>" + imageUsedIn.join("</li><li>") + "</ul>");
			} else {
				$("#dialogImagePopupImageDescription").html("<p>" + _("In this instance this image is not used at the moment") + "</p>");
			}
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
	
	//Change ImageNames in views and devices and options
	function changeImageName(oldName, newName){
		oldName = "./.." + oldName.replace(/\\/g, "/");
		newName = "./.." + newName.replace(/\\/g, "/");
		views.forEach(function(view){
			if(typeof view.nativeBackgroundImage != udef && view.nativeBackgroundImage.replace(/\\/g, "/").indexOf(oldName) == 0 && view.nativeBackgroundImage.length >= oldName.length) view.nativeBackgroundImage = newName + view.nativeBackgroundImage.replace(/\\/g, "/").substring(oldName.length);
			view.devices.forEach(function(device){
				if(typeof device.nativeBackgroundImage != udef && device.nativeBackgroundImage.replace(/\\/g, "/").indexOf(oldName) == 0 && device.nativeBackgroundImage.length >= oldName.length) device.nativeBackgroundImage = newName + device.nativeBackgroundImage.replace(/\\/g, "/").substring(oldName.length);
				if(typeof device.nativeBackgroundImageActive != udef && device.nativeBackgroundImageActive.replace(/\\/g, "/").indexOf(oldName) == 0 && device.nativeBackgroundImageActive.length >= oldName.length) device.nativeBackgroundImageActive = newName + device.nativeBackgroundImageActive.replace(/\\/g, "/").substring(oldName.length);
				if (device.options) device.options.forEach(function(option){
					if(option.type == "icon" && option.value.replace(/\\/g, "/").indexOf(oldName) == 0 && option.value.length >= oldName.length) option.value = newName + option.value.replace(/\\/g, "/").substring(oldName.length);
				});
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
		$('.collapsible').collapsible();
	}
}

/************** SAVE *****************************************************************
*** This will be called by the admin adapter when the user presses the save button ***
*************************************************************************************/
function save(callback) {
	//Check for linkedViews that don't exist anymore and delete them
	var existingViews = [];
	if (typeof views != udef) views.forEach(function(view){
		existingViews.push(view.commonName);
	});
	if (typeof views != udef && existingViews.length > 0) views.forEach(function(view){
		if (typeof view.devices != udef) view.devices.forEach(function(device){
			if(typeof device.nativeLinkedView != udef && device.nativeLinkedView != "" && existingViews.indexOf(device.nativeLinkedView) == -1){
				console.log("Removed dead link to " + device.nativeLinkedView);
				device.nativeLinkedView = "";
			}
		});
	});
	
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
