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
										states: ["ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"],
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon", type: "icon", defaultIcons: ";link_plain_internal.png;link_chain.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"}, 
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"}
										}
									},
	"iQontrolSwitch": 				{
										name: "Switch", 				
										states: ["STATE", "POWER", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/switch_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "switch_on.png;plug_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "switch_off.png;switch_red_off.png;plug_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"}, 
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolButton": 				{
										name: "Button", 
										states: ["STATE", "SET_VALUE", "OFF_SET_VALUE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/button.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "button.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "button.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											showState: {name: "Show State", type: "checkbox", default: "false"}, 
											buttonCaption: {name: "Caption for button", type: "text", default: ""},
											returnToOffSetValueAfter: {name: "Return to 'OFF_SET_VALUE' after [ms]", type: "number", min: "10", max: "60000", default: ""}, 
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}, 
											SECTION_GENERAL: {name: "General", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},								
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolLight": 				{
										name: "Light",
										states: ["STATE", "LEVEL", "HUE", "SATURATION", "COLOR_BRIGHTNESS", "CT", "WHITE_BRIGHTNESS", "ALTERNATIVE_COLORSPACE_VALUE", "POWER", "EFFECT", "EFFECT_NEXT", "EFFECT_SPEED_UP", "EFFECT_SPEED_DOWN", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/light_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "light_on.png;light_lampshade_on.png;light_desklamp_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "light_off.png;light_lampshade_off.png;light_desklamp_off.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											invertCt: {name: "Invert CT (use Kelvin instead of Mired)", type: "checkbox", default: "false"}, 
											alternativeColorspace: {name: "Colorspace for ALTERNATIVE_COLORSPACE_VALUE", type: "select", selectOptions: "/None;RGB/RGB;#RGB/#RGB;RGBW/RGBW;#RGBW/#RGBW;RGBWWCW/RGBWWCW;#RGBWWCW/#RGBWWCW;RGBCWWW/RGBCWWW;#RGBCWWW/#RGBCWWW;RGB_HUEONLY/RGB (Hue only);#RGB_HUEONLY/#RGB (Hue only);HUE_MILIGHT/Hue for Milight", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"}, 
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},						
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}, 
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolFan": 					{
										name: "Fan",
										states: ["STATE", "LEVEL", "URL", "HTML", "POWER", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/fan_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "fan_on.png;kitchenhood_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "fan_off.png;kitchenhood_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolThermostat": 			{
										name: "Thermostat",
										states: ["SET_TEMPERATURE","TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/radiator.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon", type: "icon", defaultIcons: "radiator.png;heating_on.png;cooling_on.png;airconditioner_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "radiator_off.png;heating_off.png;cooling_off.png;airconditioner_off.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											controlModeDisabledValue: {name: "Value of CONTROL_MODE for 'disabled'", type: "text", default: ""}, 
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolHomematicThermostat": 	{
										name: "Homematic-Thermostat",
										states: ["SET_TEMPERATURE", "TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "BOOST_STATE", "PARTY_TEMPERATURE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/radiator.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon", type: "icon", defaultIcons: "radiator.png;heating_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "radiator_off.png;heating_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolTemperature": 			{
										name: "Temperature-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/temperature.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "temperature.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "temperature.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},	
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolHumidity": 			{
										name: "Humidity-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/humidity.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "humidity.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "humidity.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
									}
									},
	"iQontrolBrightness": 			{
										name: "Brightness-Sensor",
										states: ["STATE", "BRIGHTNESS", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/brightness_light.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "brightness_light.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "brightness_dark.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolMotion": 				{
										name: "Motion-Sensor",
										states: ["STATE", "BRIGHTNESS", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/motion_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "motion_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "motion_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: "SE"},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolDoor": 				{
										name: "Door", 
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/door_closed.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "door_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "door_closed.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolGarageDoor": 				{
										name: "Garage Door", 
										states: ["STATE", "TOGGLE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/garagedoor_closed.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "garagedoor_opened.png;gate_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "garagedoor_closed.png;gate_closed.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolDoorWithLock": 		{
										name: "Door with lock",
										states: ["STATE", "LOCK_STATE", "LOCK_STATE_UNCERTAIN", "LOCK_OPEN", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/door_locked.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "door_opened.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "door_closed.png", default: ""},
											icon_locked: {name: "Icon locked", type: "icon", defaultIcons: "door_locked.png", default: ""},
											icon_unlocked: {name: "Icon unlocked", type: "icon", defaultIcons: "door_unlocked.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolWindow": 				{
										name: "Window",
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/window_closed.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "window_opened.png;window_toplight_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "window_closed.png;window_toplight_closed.png", default: ""},
											icon_tilted: {name: "Icon tilted", type: "icon", defaultIcons: "window_tilted.png;window_toplight_tilted.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											stateClosedValue: {name: "Value of STATE for 'closed'", type: "text", default: ""}, 
											stateOpenedValue: {name: "Value of STATE for 'opened'", type: "text", default: ""}, 
											stateTiltedValue: {name: "Value of STATE for 'tilted'", type: "text", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolBlind": 				{
										name: "Blind", 
										states: ["LEVEL", "DIRECTION", "STOP", "UP", "UP_SET_VALUE", "DOWN", "DOWN_SET_VALUE", "FAVORITE_POSITION", "FAVORITE_POSITION_SET_VALUE", "SLATS_LEVEL", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/blind_middle.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "blind_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "blind_closed.png", default: ""},
											icon_middle: {name: "Icon middle", type: "icon", defaultIcons: "blind_middle.png", default: ""},
											icon_closing: {name: "Icon closing", type: "icon", defaultIcons: "blind_closing.png", default: ""},
											icon_opening: {name: "Icon opening", type: "icon", defaultIcons: "blind_opening.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											invertActuatorLevel: {name: "Invert LEVEL (0 = open)", type: "checkbox", default: "false"}, 
											directionOpeningValue: {name: "Value of DIRECTION for 'opening'", type: "text", default: "1"}, 
											directionClosingValue: {name: "Value of DIRECTION for 'closing'", type: "text", default: "2"}, 
											directionUncertainValue: {name: "Value of DIRECTION for 'uncertain'", type: "text", default: "3"},
											favoritePositionCaption: {name: "Caption for FAVORITE_POSITION", type: "text", default: "Favorite Position"},
											upCaption: {name: "Caption for UP", type: "text", default: "Up"},
											stopCaption: {name: "Caption for STOP", type: "text", default: "Stop"},
											downCaption: {name: "Caption for DOWN", type: "text", default: "Down"},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}, 
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolFire": 				{
										name: "Fire-Sensor",
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/fire_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "fire_on.png;gas_on.png;firebox_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "fire_off.png;gas_off.png;firebox_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolFlood": 				{
										name: "Flood-Sensor",
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/flood_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "flood_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "flood_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolAlarm": 				{
										name: "Alarm",
										states: ["STATE", "CONTROL_MODE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"],
										icon: "/images/icons/alarm_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_triggered: {name: "Icon triggered (STATE is true)", type: "icon", defaultIcons: "alarm_on_triggered.png;alarm_on.png;bell_on.png;bell_ringing_on.png;firebox_on.png;panic_on.png", default: ""},
											icon_on: {name: "Icon on (STATE is false, CONTROL_MODE is armed)", type: "icon", defaultIcons: "alarm_on.png;alarm_on_triggered.png;bell_on.png;bell_ringing_on.png;firebox_on.png;firebox_green.png;panic_on.png", default: ""},
											icon_off: {name: "Icon off (STATE is false, CONTROL_MODE is disarmed)", type: "icon", defaultIcons: "alarm_off.png;bell_off.png;bell_ringing_off.png;firebox_off.png;panic_off.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											controlModeDisarmedValue: {name: "Value of CONTROL_MODE for 'disarmed'", type: "text", default: "0"}, 
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolBattery": 				{
										name: "Battery", 
										states: ["STATE", "CHARGING", "POWER", "VOLTAGE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/battery_full.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon full", type: "icon", defaultIcons: "battery_full.png", default: ""},
											icon_off: {name: "Icon empty", type: "icon", defaultIcons: "battery_empty.png", default: ""},
											icon_charged75: {name: "Icon 75%", type: "icon", defaultIcons: "battery_75.png", default: ""},
											icon_charged50: {name: "Icon 50%", type: "icon", defaultIcons: "battery_50.png", default: ""},
											icon_charged25: {name: "Icon 25%", type: "icon", defaultIcons: "battery_25.png", default: ""},
											icon_charged10: {name: "Icon 10%", type: "icon", defaultIcons: "battery_10.png", default: ""},
											icon_charging: {name: "Icon charging", type: "icon", defaultIcons: "battery_charging_overlay.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolValue": 				{
										name: "Value",
										states: ["STATE", "LEVEL", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/value_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "value_on.png;info_circle_on.png;info_square_on.png;info_bubble_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "value_off.png;info_circle_off.png;info_square_off.png;info_bubble_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolProgram": 				{
										name: "Program", 
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/play_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "play_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "play.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											showState: {name: "Show State", type: "checkbox", default: "false"}, 
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}, 
											SECTION_GENERAL: {name: "General", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolScene": 				{
										name: "Scene", 	
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/play.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "play.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "play.png", default: ""}, 
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											alwaysSendTrue: {name: "Always send 'true' (do not toggle)", type: "checkbox", default: "false"}, 
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}, 
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/Nothing;T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										} 
									},
	"iQontrolMedia": 				{
										name: "Media-Player / Remote Control", 	
										states: ["STATE", "COVER_URL", "ARTIST", "ALBUM", "TRACK_NUMBER", "TITLE", "EPISODE", "SEASON", "PREV", "REWIND", "PLAY", "PAUSE", "STOP", "FORWARD", "NEXT", "SHUFFLE", "REPEAT", "MUTE", "DURATION", "ELAPSED", "VOLUME", "SOURCE", "PLAYLIST", "PLAY_EVERYWHERE", "EJECT", "POWER_SWITCH", "REMOTE_NUMBER", "REMOTE_VOLUME_UP", "REMOTE_VOLUME_DOWN", "REMOTE_CH_UP", "REMOTE_CH_DOWN", "REMOTE_PAD_DIRECTION", "REMOTE_PAD_BACK", "REMOTE_PAD_HOME", "REMOTE_PAD_MENU", "REMOTE_COLOR", "REMOTE_ADDITIONAL_BUTTONS", "REMOTE_HIDE_REMOTE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/media_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "media_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "media_off.png", default: ""},
											SECTION_DEVICESPECIFIC_PLAYPAUSE: {name: "Play/Pause", type: "section"},
											statePlayValue: {name: "Value of STATE for 'play'", type: "text", default: "play"}, 
											statePauseValue: {name: "Value of STATE for 'pause'", type: "text", default: "pause"}, 
											stateStopValue: {name: "Value of STATE for 'stop'", type: "text", default: "stop"}, 
											hidePlayOverlay: {name: "Hide play icon", type: "checkbox", default: "false"}, 
											hidePauseAndStopOverlay: {name: "Hide pause and stop icon", type: "checkbox", default: "false"}, 
											SECTION_DEVICESPECIFIC_REPEAT: {name: "Repeat", type: "section"},
											repeatOffValue: {name: "Value of REPEAT for 'off'", type: "text", default: "false"}, 
											repeatAllValue: {name: "Value of REPEAT for 'repeat all'", type: "text", default: "true"}, 
											repeatOneValue: {name: "Value of REPEAT for 'repeat one'", type: "text", default: "2"}, 
											SECTION_DEVICESPECIFIC_REMOTE: {name: "Remote", type: "section"},
											remoteKeepSectionsOpen: {name: "Keep sections open", type: "checkbox", default: "false"}, 
											remoteShowDirectionsInsidePad: {name: "Show Vol and Ch +/- inside Pad", type: "checkbox", default: "false"}, 
											remoteAdditionalButtonsCaption: {name: "Caption for section 'Additional Buttons'", type: "text", default: ""}, 
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"}, 
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"}, 
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"}, 
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "true"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/Nothing;T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										} 
									},
	"iQontrolPopup": 				{
										name: "Popup", 	
										states: ["STATE", "URL", "HTML", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/popup.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "popup.png;link_square_internal.png;camera_on.png;camera_ptz_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "popup.png;link_square_internal.png;camera_on.png;camera_ptz_on.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""}, 
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"}, 
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"}
										}
									},
	"iQontrolExternalLink":			{
										name: "External Link",	
										states: ["STATE", "URL", "ADDITIONAL_INFO", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_URL", "BACKGROUND_HTML"], 
										icon: "/images/icons/link.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "link.png;link_square_external.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "link.png;link_square_external.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE: {name: "Tile-Behaviour", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);shortIfInactive/Short (1x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3)", default: ""},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);shortIfActive/Short (1x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3)", default: ""},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"}, 
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},							
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_URL/HTML, if device is active", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},	
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},	
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "text", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}
										}
									}
};

var channelDetectorMatchTable = {
    "unknown": 			{
							matchingRole: null,
							matchingStates: {
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "blind": 			{
							matchingRole: "iQontrolBlind",
							matchingStates: {
								"SET": "LEVEL",
								"STOP": "STOP",
								"DIRECTION": "DIRECTION",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "button": 			{
							matchingRole: "iQontrolButton",
							matchingStates: {
								"SET": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "camera": 			{
							matchingRole: "iQontrolExternalLink",
							matchingStates: {
								"URL": "URL",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "url": 				{
							matchingRole: "iQontrolExternalLink",
							matchingStates: {
								"URL": "URL",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "image": 			{
							matchingRole: "iQontrolExternalLink",
							matchingStates: {
								"URL": "URL",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "dimmer": 			{
							matchingRole: "iQontrolLight",
							matchingStates: {
								"SET": "LEVEL",
								"ON_SET": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "door": 			{
							matchingRole: "iQontrolDoor",
							matchingStates: {
								"ACTUAL": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "fireAlarm": 		{
							matchingRole: "iQontrolFire",
							matchingStates: {
								"ACTUAL": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "floodAlarm": 		{
							matchingRole: "iQontrolFlood",
							matchingStates: {
								"ACTUAL": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "gate": 			{
							matchingRole: "iQontrolDoor",
							matchingStates: {
								"ACTUAL": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "humidity": 		{
							matchingRole: "iQontrolHumidity",
							matchingStates: {
								"ACTUAL": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "info": 			{
							matchingRole: "iQontrolValue",
							matchingStates: {
								"ACTUAL": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "instance": 		{
							matchingRole: null,
							matchingStates:  {
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "light": 			{
							matchingRole: "iQontrolLight",
							matchingStates: {
								"SET": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "lock": 			{
							matchingRole: "iQontrolDoorWithLock",
							matchingStates: {
								"SET": "LOCK_STATE",
								"OPEN": "LOCK_OPEN",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "location": 		{
							matchingRole: null,
							matchingStates: {
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "media": 			{
							matchingRole: "iQontrolMedia",
							matchingStates: {
								"ACTUAL": "POWER_SWITCH",
								"STATE": "STATE",
								"PLAY": "PLAY",
								"PAUSE": "PAUSE",
								"STOP": "STOP",
								"NEXT": "NEXT",
								"PREV": "PREV",
								"SHUFFLE": "SHUFFLE",
								"REPEAT": "REPEAT",
								"ARTIST": "ARTIST",
								"ALBUM": "ALBUM",
								"TITLE": "TITLE",
								"EPISODE": "EPISODE",
								"SEASON": "SEASON",
								"COVER": "COVER_URL",
								"DURATION": "DURATION",
								"ELAPSED": "ELAPSED",
								"SEEK": "ELAPSED",
								"TRACK": "TRACK_NUMBER",
								"VOLUME_ACTUAL": "VOLUME",
								"VOLUME": "VOLUME",
								"MUTE": "MUTE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "motion": 			{
							matchingRole: "iQontrolMotion",
							matchingStates: {
								"ACTUAL": "STATE",
								"SECOND": "BRIGHTNESS",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "rgb": 				{
							matchingRole: "iQontrolLight",
							matchingStates: {
								"DIMMER": "LEVEL",
								"BRIGHTNESS": "COLOR_BRIGHTNESS",
								"SATURATION": "SATURATION",
								"TEMPERATURE": "CT",
								"ON": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "ct": 				{
							matchingRole: "iQontrolLight",
							matchingStates: {
								"TEMPERATURE": "CT",
								"DIMMER": "LEVEL",
								"BRIGHTNESS": "COLOR_BRIGHTNESS",
								"SATURATION": "SATURATION",
								"ON": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "rgbSingle": 		{
							matchingRole: "iQontrolLight",
							matchingStates: {
								"RGB": "ALTERNATIVE_COLORSPACE_VALUE",
								"DIMMER": "LEVEL",
								"BRIGHTNESS": "COLOR_BRIGHTNESS",
								"SATURATION": "SATURATION",
								"TEMPERATURE": "CT",
								"ON": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "hue": 				{
							matchingRole: "iQontrolLight",
							matchingStates: {
								"HUE": "HUE",
								"DIMMER": "LEVEL",
								"BRIGHTNESS": "COLOR_BRIGHTNESS",
								"SATURATION": "SATURATION",
								"TEMPERATURE": "CT",
								"ON": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "slider": 			{
							matchingRole: "iQontrolValue",
							matchingStates: {
								"SET": "LEVEL",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "socket": 			{
							matchingRole: "iQontrolSwitch",
							matchingStates: {
								"SET": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "temperature": 		{
							matchingRole: "iQontrolTemperature",
							matchingStates: {
								"ACTUAL": "STATE",
								"SECOND": "HUMIDITY",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "thermostat": 		{
							matchingRole: "iQontrolThermostat",
							matchingStates: {
								"SET": "STATE",
								"ACTUAL": "TEMPERATURE",
								"HUMIDITY": "HUMIDITY",
								"BOOST": "BOOST_STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "valve": 			{
							matchingRole: null,
							matchingStates: {
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "volume": 			{
							matchingRole: "iQontrolValue",
							matchingStates: {
								"SET": "LEVEL",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "volumeGroup": 		{
							matchingRole: "iQontrolValue",
							matchingStates: {
								"SET": "LEVEL",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "window": 			{
							matchingRole: "iQontrolWindow",
							matchingStates: {
								"ACTUAL": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "windowTilt": 		{
							matchingRole: "iQontrolWindow",
							matchingStates: {
								"ACTUAL": "STATE",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "weatherCurrent": 	{
							matchingRole: null,
							matchingStates: {
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "weatherForecast": 	{
							matchingRole: null,
							matchingStates: {
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "warning": 			{
							matchingRole: null,
							matchingStates:{
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						}
}

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
	if(decodeURIComponent(value).substring(0, 10) == "[VARIABLE]"){
		var variable = "";
		if(decodeURIComponent(decodeURIComponent(value)).indexOf("{}") > -1) {
			variable = prompt(_("Please enter datapoint id") + ":");
			if (variable == "") variable = null;
		}
		if(variable !== null){
			$enhanceTextInputToComboboxActualTarget.val(decodeURIComponent(decodeURIComponent(value).replace("[VARIABLE]", "")).replace("{}", "{" + variable + "}")).trigger('change').trigger('blur');
		}
	} else {
		$enhanceTextInputToComboboxActualTarget.val(decodeURIComponent(value).replace(/\\/g, "/")).trigger('change').trigger('blur');
	}
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
	
	// Create a helper for sortable tables with preserved width of cells  
	var fixHelper = function(e, ui){
		ui.children().each(function(){  
			$(this).width($(this).width()).css({"background-color":"rgba(180,180,180,0.75)", "box-shadow":"-5px 5px 5px 0px rgba(180,180,180,0.75)"}); 			
		});  
		return ui;  
	};

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

	//Init ChannelDetector
	var channelDetector = new ChannelDetector();

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
				socketConnectionErrorMessages += "\n" + _("You need to activate integrated socket.IO and disable 'Force Web-Sockets' in web-adapter-settings!");
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
			} else console.log("...nothing to move (" + err + ").");
			
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
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat disabled').find('i').html('drag_handle');
			}
		});
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
				if(element.nativeLinkedView == oldVal) element.nativeLinkedView = newVal;
			});
		}
		//Check for duplicates
		viewsCheckDuplicates();
		//Make table sortable
		$("#tableViews tbody").sortable({
			helper: fixHelper,
			stop: function( event, ui ) { 
				console.log("Drag ended, start resorting...");
				$("#tableViews tbody").sortable('disable');
				var sequence = [];
				$('#tableViews').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(views[sequence[i]]);
				}
				views = tableResorted;
				onChange();
				values2table('tableViews', views, onChange, onTableViewsReady);
				$("#tableViews tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			cancel: "input,textarea,button,select,option,a.btn-floating"
		});	
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
		//Progress-Bars
		var progressbars = "";
		progressbars += ";[" + _("Progress-Bars") + ":]";
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22red%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("red") + "/" + (link + "/images/icons/progressbar_square_red.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22green%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("green") + "/" + (link + "/images/icons/progressbar_square_green.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22blue%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("blue") + "/" + (link + "/images/icons/progressbar_square_blue.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22yellow%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("yellow") + "/" + (link + "/images/icons/progressbar_square_yellow.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22orange%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("orange") + "/" + (link + "/images/icons/progressbar_square_orange.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22purple%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("purple") + "/" + (link + "/images/icons/progressbar_square_purple.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]data%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("inactive") + "/" + (link + "/images/icons/progressbar_circle_inactive.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22red%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("red") + "/" + (link + "/images/icons/progressbar_circle_red.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22green%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("green") + "/" + (link + "/images/icons/progressbar_circle_green.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22blue%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("blue") + "/" + (link + "/images/icons/progressbar_circle_blue.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22yellow%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("yellow") + "/" + (link + "/images/icons/progressbar_circle_yellow.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22orange%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("orange") + "/" + (link + "/images/icons/progressbar_circle_orange.png").replace(/\//g, "\\");
		progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22purple%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("purple") + "/" + (link + "/images/icons/progressbar_circle_purple.png").replace(/\//g, "\\");
		enhanceTextInputToCombobox('#tableDevices input[data-name="nativeBackgroundImage"], #tableDevices input[data-name="nativeBackgroundImageActive"]', "/" + _("(None)") + progressbars + ";[" + _("Images") + ":];" + imagenames.join(";"), true);
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
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat disabled').find('i').html('drag_handle');
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
		//Make table sortable
		$("#tableDevices tbody").sortable({
			helper: fixHelper,
			stop: function( event, ui ) { 
				console.log("Drag ended, start resorting...");
				$("#tableDevices tbody").sortable('disable');
				var sequence = [];
				$('#tableDevices').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogDeviceEditStateArrayTable[sequence[i]]);
				}
				views[devicesSelectedView].devices = tableResorted;
				onChange();
				values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
				$("#tableDevices tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			cancel: "input,textarea,button,select,option,a.btn-floating"
		});	
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
					if(entry == "VALVE_STATES" || entry == "ADDITIONAL_INFO" || entry == "REMOTE_ADDITIONAL_BUTTONS"){
						commonRole = "array";
						var valueObj = tryParseJSON(value);
						if(Array.isArray(valueObj) == false) { //For backward-compatibility -> transfer old object-style to new array-style
							var valueArray = [];
							for(name in valueObj){
								valueArray.push({'name':name, 'commonRole':'linkedState', 'value':valueObj[name]});
							}
							value = JSON.stringify(valueArray);
						}
					} else if(entry == "SET_VALUE"  || entry == "OFF_SET_VALUE"  ||  entry == "UP_SET_VALUE"  || entry == "DOWN_SET_VALUE"  || entry == "FAVORITE_POSITION_SET_VALUE"  || entry == "URL" || entry == "HTML" || entry == "BACKGROUND_URL" || entry == "BACKGROUND_HTML"){
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
						selectOptionsContent += "        <option value='" + parts[0] + "' " + ((parts[0] == value)?'selected':'') + " class='translate'>" + _(parts[1]) + "</option>";
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
					//Progress-Bars
					var progressbars = "";
					progressbars += ";[" + _("Progress-Bars") + ":]";
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22red%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("red") + "/" + (link + "/images/icons/progressbar_square_red.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22green%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("green") + "/" + (link + "/images/icons/progressbar_square_green.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22blue%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("blue") + "/" + (link + "/images/icons/progressbar_square_blue.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22yellow%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("yellow") + "/" + (link + "/images/icons/progressbar_square_yellow.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22orange%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("orange") + "/" + (link + "/images/icons/progressbar_square_orange.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22purple%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("purple") + "/" + (link + "/images/icons/progressbar_square_purple.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]data%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("inactive") + "/" + (link + "/images/icons/progressbar_circle_inactive.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22red%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("red") + "/" + (link + "/images/icons/progressbar_circle_red.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22green%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("green") + "/" + (link + "/images/icons/progressbar_circle_green.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22blue%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("blue") + "/" + (link + "/images/icons/progressbar_circle_blue.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22yellow%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("yellow") + "/" + (link + "/images/icons/progressbar_circle_yellow.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22orange%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("orange") + "/" + (link + "/images/icons/progressbar_circle_orange.png").replace(/\//g, "\\");
					progressbars += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22purple%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("purple") + "/" + (link + "/images/icons/progressbar_circle_purple.png").replace(/\//g, "\\");
					options += progressbars;
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
					
					case "section":
					dialogDeviceEditOptionsContent += "</div>";
					dialogDeviceEditOptionsContent += "<br><br>";
					dialogDeviceEditOptionsContent += "<div class='row'>";
					dialogDeviceEditOptionsContent += "		<div class='col s12'>";
					dialogDeviceEditOptionsContent += "			<h6 class='translate sub-title'>" + _(name) + ":</h6>";
					dialogDeviceEditOptionsContent += "		</div>";
					dialogDeviceEditOptionsContent += "	</div>";
					dialogDeviceEditOptionsContent += "<div class='row'>";
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
				if ($(this).val() == "VALVE_STATES") $(this).after('<span style="font-size:x-small;">Array: [{name: "Valve1", commonRole: "LinkedState", value: "ID1"}, ...]</span>');
				if ($(this).val() == "ADDITIONAL_INFO") $(this).after('<span style="font-size:x-small;">Array: [{name: "Name1", commonRole: "LinkedState", value: "ID1"}, ...]</span>');
				if ($(this).val() == "REMOTE_ADDITIONAL_BUTTONS") $(this).after('<span style="font-size:x-small;">Array: [{name: "Button1", commonRole: "LinkedState", value: "ID1"}, ...]</span>');
			}
			if (name === 'value') {
				var stateIndex = $(this).data('index');
				$(this).prop('id', 'tableDialogDeviceEditStatesValue_' + stateIndex);
				$(this).on('input change', function(){tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);});
				if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') $(this).prop('readonly', true);
			}
		});
		//Role
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonRole') {
				var stateIndex = $(this).data('index');
				if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') {
					$(this).prop('disabled', true);
				} else {
					$(this).find('option[value="array"]').remove();
				$(this).on('input change', function(){tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);});
				}
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit (SelectId, Edit Text or Edit Array)
			if (command === 'edit') {
				$(this).on('click', function () {
					var stateIndex = $(this).data('index');
					if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const') { //const - open editText dialog
						initDialog('dialogDeviceEditStateConstant', function(){ //save dialog
							var stateIndex = $('#dialogDeviceEditStateConstantIndex').val();
							$('#tableDialogDeviceEditStatesValue_' + stateIndex).val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n')).trigger('change');
						});
						$('#dialogDeviceEditStateConstantName').html(dialogDeviceEditStatesTable[stateIndex].state || "");
						$('#dialogDeviceEditStateConstantIndex').val(stateIndex);
						$('#dialogDeviceEditStateConstantTextarea').val((dialogDeviceEditStatesTable[stateIndex].value || "").replace(/\\n/g, '\n'));
						$('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
						$('#dialogDeviceEditStateConstant').modal('open');
					} else if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') { //array - open editArray dialog
						initDialog('dialogDeviceEditStateArray', function(){ //save dialog
							var stateIndex =   $('#dialogDeviceEditStateArrayIndex').val();
							$('#tableDialogDeviceEditStatesValue_' + stateIndex).val(JSON.stringify(dialogDeviceEditStateArrayTable)).trigger('change');
						});
						$('#dialogDeviceEditStateArrayName').html(dialogDeviceEditStatesTable[stateIndex].state || "");
						$('#dialogDeviceEditStateArrayIndex').val(stateIndex);
						dialogDeviceEditStateArrayTable = tryParseJSON(dialogDeviceEditStatesTable[stateIndex].value) || [];
						values2table('tableDialogDeviceEditStateArray', dialogDeviceEditStateArrayTable, onChange, ontableDialogDeviceEditStateArrayReady);
						$('#dialogDeviceEditStateArray').modal('open');
					} else { //linkedState - open selectID dialog
						$('#dialogSelectId').data('selectidfor', 'tableDialogDeviceEditStatesValue_' + stateIndex);
						initSelectId(function (sid) {
							sid.selectId('show', $('#tableDialogDeviceEditStatesValue_' + stateIndex).val(), {type: 'state'}, function (newId) {
								if (newId) {
									$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
								}
							});
						});
					}
				});
			}
			//OpenCustom
			if (command === 'openCustom') {
				var stateIndex = $(this).data('index');
				$(this).prop('id', 'tableDialogDeviceEditStatesOpenCustom_' + stateIndex);
				$(this).on('click', function (e) {
					var _stateIndex = $(this).data('index');
					if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'linkedState') { //linkedState - open editText dialog
						var _stateId = $('#tableDialogDeviceEditStatesValue_' + _stateIndex).val();
						if (_stateId != ""){
							var url = window.location.origin + "/#tab-objects/customs/" + _stateId;
							window.open(url);
						}
					}
				});
				tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);
			}
		});
	}
	function tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex){
		if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'linkedState') { //linkedState
			var stateId = $('#tableDialogDeviceEditStatesValue_' + stateIndex).val();
			var stateObject = parent.gMain.objects[stateId];
			if (typeof stateObject != udef) {
				if (typeof stateObject != udef && typeof stateObject.common.custom != udef && stateObject.common.custom != null && typeof stateObject.common.custom[adapter + "." + instance] != udef && stateObject.common.custom[adapter + "." + instance] != null){
					$('#tableDialogDeviceEditStatesOpenCustom_' + stateIndex).removeClass('disabled').find('i').removeClass('grey lighten-2').addClass('indigo').html('build');
				} else {
					$('#tableDialogDeviceEditStatesOpenCustom_' + stateIndex).removeClass('disabled').find('i').removeClass('indigo lighten-2').addClass('grey').html('build');
				}
			} else {
				$('#tableDialogDeviceEditStatesOpenCustom_' + stateIndex).addClass('disabled').find('i').removeClass('indigo').addClass('grey lighten-2').html('build');
			}
		} else {
			$('#tableDialogDeviceEditStatesOpenCustom_' + stateIndex).addClass('disabled').find('i').removeClass('indigo').addClass('grey lighten-2').html('build');
		}
	}
	
	//Enhance TableDialogDeviceEditStateArrayReady
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
				$(this).on('input change', function(){tableDialogDeviceEditStateArrayEnhanceEditCustom(arrayIndex);});
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit (SelectId)
			if (command === 'edit') {
				$(this).on('click', function(){
					var _arrayIndex = $(this).data('index');
					$('#dialogSelectId').data('selectidfor', 'tableDialogDeviceEditStateArrayValue_' + _arrayIndex);
					initSelectId(function (sid) {
						sid.selectId('show', $('#tableDialogDeviceEditStateArrayValue_' + _arrayIndex).val(), {type: 'state'}, function (newId) {
							if (newId) {
								$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
							}
						});
					});
				});
			}
			//OpenCustom
			if (command === 'openCustom') {
				var arrayIndex = $(this).data('index');
				$(this).prop('id', 'tableDialogDeviceEditStateArrayOpenCustom_' + arrayIndex);
				$(this).on('click', function (e) {
					var _arrayIndex = $(this).data('index');
					var _stateId = $('#tableDialogDeviceEditStateArrayValue_' + _arrayIndex).val();
					if (_stateId != ""){
						var url = window.location.origin + "/#tab-objects/customs/" + _stateId;
						window.open(url);
					}
				});
				tableDialogDeviceEditStateArrayEnhanceEditCustom(arrayIndex);
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat disabled').find('i').html('drag_handle');
			}
		});
		//Make table sortable
		$("#tableDialogDeviceEditStateArray tbody").sortable({
			helper: fixHelper,
			stop: function( event, ui ) { 
				console.log("Drag ended, start resorting...");
				$("#tableDialogDeviceEditStateArray tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogDeviceEditStateArray').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogDeviceEditStateArrayTable[sequence[i]]);
				}
				dialogDeviceEditStateArrayTable = tableResorted;
				onChange();
				values2table('tableDialogDeviceEditStateArray', dialogDeviceEditStateArrayTable, onChange, ontableDialogDeviceEditStateArrayReady);
				$("#tableDialogDeviceEditStateArray tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			cancel: "input,textarea,button,select,option,a.btn-floating"
		});	
	}
	function tableDialogDeviceEditStateArrayEnhanceEditCustom(arrayIndex){
		var stateId = $('#tableDialogDeviceEditStateArrayValue_' + arrayIndex).val();
		var stateObject = parent.gMain.objects[stateId];
		if (typeof stateObject != udef) {
			if (typeof stateObject != udef && typeof stateObject.common.custom != udef && stateObject.common.custom != null && typeof stateObject.common.custom[adapter + "." + instance] != udef && stateObject.common.custom[adapter + "." + instance] != null){
				$('#tableDialogDeviceEditStateArrayOpenCustom_' + arrayIndex).removeClass('disabled').find('i').removeClass('grey lighten-2').addClass('indigo').html('build');
			} else {
				$('#tableDialogDeviceEditStateArrayOpenCustom_' + arrayIndex).removeClass('disabled').find('i').removeClass('indigo lighten-2').addClass('grey').html('build');
			}
		} else {
			$('#tableDialogDeviceEditStateArrayOpenCustom_' + arrayIndex).addClass('disabled').find('i').removeClass('indigo').addClass('grey lighten-2').html('build');
		}
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
		var result = {
			resultObject: {
				states: [],
				options: []
			},
			resultText: "",
			resultStatesText: "",
			resultValid: false
		}
		resultStatesObj = {};
		if(!objects[sourceId]){
			result.resultText = "<blockquote>" + _('This is not a valid ID') + "</blockquote><br><br>";
		} else {
			//Find out Name
			if (typeof objects[sourceId].common.name != udef) {
				result.resultObject.commonName = objects[sourceId].common.name;
				if (typeof result.resultObject.commonName == "object"){
					if (typeof result.resultObject.commonName[systemLang] != udef) {
						result.resultObject.commonName = result.resultObject.commonName[systemLang];
					} else if (typeof resultObject.commonName["en"] != udef) {
						result.resultObject.commonName = result.resultObject.commonName["en"];
					} else {
						result.resultObject.commonName[Object.keys(result.resultObject.commonName)[0]];
					}
				}
				result.resultText += "<u>" + _("Name") + ":</u> " + result.resultObject.commonName + "<br><br>";
				result.resultValid = true;
			} else {
				result.resultObject.commonName = _("New Device");
				result.resultText += "<blockquote>" + _("The name of the device could not be determined and was set to") + " \'" + _("New Device") + "\'</blockquote><br><br>";
			}
			//Use ChannelDetector to find out role and matching states
			var channelDetectorUsedDeviceTypeForCommonRole;
			var channelDetectorResult = channelDetector.detect({
				objects: objects, 
				id: sourceId,
				ignoreIndicators: ["STICKY_UNREACH"]
			});
			if (channelDetectorResult) {
				channelDetectorResult.forEach(function (device){ //Iterate through all all found device-types
					console.log("Detected channel type " + device.type + ":");
					if (channelDetectorMatchTable[device.type] && channelDetectorMatchTable[device.type].matchingRole){ //Fitting role found
						console.log("   This is matched to " + channelDetectorMatchTable[device.type].matchingRole);
						if (!result.resultObject.commonRole){ //Role was not matched before
							console.log("   Set this as role for the new device.");
							result.resultObject.commonRole = channelDetectorMatchTable[device.type].matchingRole;
							channelDetectorUsedDeviceTypeForCommonRole = device.type;
						}
						device.states.forEach(function(state){ //Iterate through all found states
							if (state.id) { //This is a state with an id
								if (channelDetectorMatchTable[device.type].matchingStates[state.name]){
									if(!resultStatesObj[channelDetectorMatchTable[device.type].matchingStates[state.name]]){ //Was not matched before
										console.log("      " + state.name + " (" + state.id + ") ====> " + channelDetectorMatchTable[device.type].matchingStates[state.name]);
										resultStatesObj[channelDetectorMatchTable[device.type].matchingStates[state.name]] = state.id;
										result.resultValid = true;
										if (state.name == "CONNECTED") {
											console.log("      Set Option invertUnreach because CONNECTED is used instead of UNREACH");
											result.resultObject.options.push({option: "invertUnreach", type: "checkbox", value: "true"});
										}
									} else {
										console.log("      " + state.name + " (" + state.id + ") fits to " + channelDetectorMatchTable[device.type].matchingStates[state.name] + " but this was already matched before.");
									}
								} else {
									console.log("      " + state.name + " (" + state.id + ") no match.");								
								}
							}
						});
					}
				});	
			} else {
				console.log("No Device detected.");
			}
			//Get childStates to match states, that were not assigned by ChannelDetector
			var childStates = [];
			for(id in objects){
				if(id.indexOf(sourceId) == 0 && objects[id].type == 'state') childStates.push(id);
			}
			childStates.sort().reverse(); //reverse order, so that the top channel of multi-channel-devices wins
			for(i = 0; i < childStates.length; i++){ //Try to match childStates
				var id = childStates[i];
				var stateName = id.substring(id.lastIndexOf("."), id.length);
				switch(stateName){
					case ".STATE": case ".state": case ".Switch": case ".switch": case ".on": case ".presence": case ".MOTION": case ".PRESENCE_DETECTION_STATE": case ".SET":
					if(typeof objects[id] !== udef && typeof objects[id].common.role != udef && objects[id].common.role == "switch.lock"){
						if (!resultStatesObj['LOCK_STATE']) resultStatesObj['LOCK_STATE'] = id;
					} else {
						if (!resultStatesObj['STATE']) resultStatesObj['STATE'] = id;
					}
					break;

					case ".LEVEL": case ".level": case ".bri": case ".ACTUAL":
					if (!resultStatesObj['LEVEL']) resultStatesObj['LEVEL'] = id;
					break;

					case ".DIRECTION":
					if (!resultStatesObj['DIRECTION']) resultStatesObj['DIRECTION'] = id;
					break;

					case ".STOP":
					if (!resultStatesObj['STOP']) resultStatesObj['STOP'] = id;
					break;

					case ".HUE": case ".hue":
					if (!resultStatesObj['HUE']) resultStatesObj['HUE'] = id;
					break;

					case ".CT": case ".ct":
					if (!resultStatesObj['CT']) resultStatesObj['CT'] = id;
					break;

					case ".SATURATION": case ".saturation": case ".sat":
					if (!resultStatesObj['SATURATION']) resultStatesObj['SATURATION'] = id;
					break;
					
					case ".RGB":
					if (!resultStatesObj['ALTERNATIVE_COLORSPACE_VALUE']) resultStatesObj['ALTERNATIVE_COLORSPACE_VALUE'] = id;
					break;

					case ".SET_TEMPERATURE":
					if (!resultStatesObj['SET_TEMPERATURE']) resultStatesObj['SET_TEMPERATURE'] = id;
					break;

					case ".HUMIDITY": case ".ACTUAL_HUMIDITY": case ".humidity":
					if (!resultStatesObj['HUMIDITY']) resultStatesObj['HUMIDITY'] = id;
					break;

					case ".TEMPERATURE": case ".ACTUAL_TEMPERATURE": case ".temperature":
					if (!resultStatesObj['TEMPERATURE']) resultStatesObj['TEMPERATURE'] = id;
					break;

					case ".BRIGHTNESS": case ".LUX": case "illuminance":
					if (!resultStatesObj['BRIGHTNESS']) resultStatesObj['BRIGHTNESS'] = id;
					break;

					case ".POWER": case ".Power": case ".power":
					if (!resultStatesObj['POWER']) resultStatesObj['POWER'] = id;
					break;

					case ".CONTROL_MODE":
					if (!resultStatesObj['CONTROL_MODE']) resultStatesObj['CONTROL_MODE'] = id;
					break;

					case ".BOOST_STATE":
					if (!resultStatesObj['BOOST_STATE']) resultStatesObj['BOOST_STATE'] = id;
					break;

					case ".PARTY_TEMPERATURE":
					if (!resultStatesObj['PARTY_TEMPERATURE']) resultStatesObj['PARTY_TEMPERATURE'] = id;
					break;

					case ".WINDOW_OPEN_REPORTING":
					if (!resultStatesObj['WINDOW_OPEN_REPORTING']) resultStatesObj['WINDOW_OPEN_REPORTING'] = id;
					break;

					case ".STATE_UNCERTAIN":
					if (!resultStatesObj['LOCK_STATE_UNCERTAIN']) resultStatesObj['LOCK_STATE_UNCERTAIN'] = id;
					break;

					case ".OPEN":
					if (!resultStatesObj['LOCK_OPEN']) resultStatesObj['LOCK_OPEN'] = id;
					break;

					case ".URL":
					if (!resultStatesObj['URL']) resultStatesObj['URL'] = id;
					break;

					case ".LOWBAT": case ".percent":
					if (!resultStatesObj['BATTERY']) resultStatesObj['BATTERY'] = id;
					break;

					case ".UNREACH":
					if (!resultStatesObj['UNREACH']) resultStatesObj['UNREACH'] = id;
					break;

					case ".online": case ":CONNECTED":
					if (!resultStatesObj['UNREACH']) {
						resultStatesObj['UNREACH'] = id;
						console.log("Set Option invertUnreach because CONNECTED is used instead of UNREACH");
						result.resultObject.options.push({option: "invertUnreach", type: "checkbox", value: "true"});
					}
					break;

					case ".ERROR": case ".FAULT_REPORTING":
					if (!resultStatesObj['ERROR']) resultStatesObj['ERROR'] = id;
					break;
				}
			}
			//If the role was not found by DeviceDetector, try to find out the role now
			if (!result.resultObject.commonRole || channelDetectorUsedDeviceTypeForCommonRole == "info"){ //Role was not matched before
				//--iQontrolView
				if(typeof objects[sourceId].common.role !== udef && objects[sourceId].common.role == "iQontrolView"){
					result.resultObject.commonRole = "iQontrolView";
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
					result.resultObject.commonRole = 'iQontrolSwitch';
					break;

					case "switch.light": case "level.dimmer":
					result.resultObject.commonRole = 'iQontrolLight';
					break;

					case "---missing---":
					result.resultObject.commonRole = 'iQontrolFan';
					break;

					case "level.temperature":
					if (resultStatesObj['PARTY_TEMPERATURE']) {
						result.resultObject.commonRole = 'iQontrolHomematicThermostat';
					} else {
						result.resultObject.commonRole = 'iQontrolThermostat';
					}
					break;

					case "value.temperature":
					result.resultObject.commonRole = 'iQontrolTemperature';
					if(!resultStatesObj['STATE']){
						resultStatesObj['STATE'] = resultStatesObj['TEMPERATURE'];
						delete resultStatesObj['TEMPERATURE'];
					}
					break;

					case "value.humidity":
					result.resultObject.commonRole = 'iQontrolHumidity';
					if(!resultStatesObj['STATE']){
						resultStatesObj['STATE'] = resultStatesObj['HUMIDITY'];
						delete resultStatesObj['HUMIDITY'];
					}
					break;

					case "value.brightness":
					result.resultObject.commonRole = 'iQontrolBrightness';
					if(!resultStatesObj['STATE']){
						resultStatesObj['STATE'] = resultStatesObj['BRIGHTNESS'];
						delete resultStatesObj['BRIGHTNESS'];
					}
					break;

					case "sensor.motion":
					result.resultObject.commonRole = 'iQontrolMotion';
					break;

					case "sensor.door":
					result.resultObject.commonRole = 'iQontrolDoor';
					break;

					case "switch.lock":
					result.resultObject.commonRole = 'iQontrolDoorWithLock';
					break;

					case "sensor": case "sensor.window":
					result.resultObject.commonRole = 'iQontrolWindow';
					break;

					case "level.blind":
					result.resultObject.commonRole = 'iQontrolBlind';
					break;

					case "state":
					result.resultObject.commonRole = 'iQontrolValue';
					break;

					case "sensor.alarm.fire":
					result.resultObject.commonRole = 'iQontrolFire';
					break;

					case "action.execute":
					result.resultObject.commonRole = 'iQontrolProgram';
					break;

					case "scene.state":
					result.resultObject.commonRole = 'iQontrolScene';
					break;
				}
			}
			//Further modification for some special cases
			if (result.resultObject.commonRole == 'iQontrolThermostat' && resultStatesObj['PARTY_TEMPERATURE']) {
				console.log("Modifying role to HomematicThermostat because PARTY_TEMPERATURE is present.");
				result.resultObject.commonRole = 'iQontrolHomematicThermostat';
			}
			//Got role?
			if (result.resultObject.commonRole) {
				if (typeof iQontrolRoles[result.resultObject.commonRole] != udef && typeof iQontrolRoles[result.resultObject.commonRole].name != udef) {
					result.resultText += "<u>" + _("Role") + ":</u> " + _(iQontrolRoles[result.resultObject.commonRole].name) + "<br><br>";
				} else {
					result.resultText += _("Role") + ": " + result.resultObject.commonRole + "<br><br>";
				}
				result.resultValid = true;
			} else {
				result.resultText += "<blockquote>" + _("The role of the device is unknown. Please set it manually.") + "</blockquote><br><br>";
			}
			//Got states?
			for(state in resultStatesObj){
				if(!result.resultObject.states[state]) result.resultObject.states.push({state: state, value: resultStatesObj[state]});
			}
			if(result.resultObject.states.length > 0 ){
				result.resultStatesText += "<u>" + _("Matched the following states:") + "</u> <br>";
				for(i = 0; i < result.resultObject.states.length; i++){
					result.resultStatesText += result.resultObject.states[i].state + ": " + result.resultObject.states[i].value + "<br>";
				}
				if (result.resultObject.options.length > 0){
					result.resultStatesText += "<br><u>" + _("Options:") + "</u><br>";
					result.resultObject.options.forEach(function(option){
						result.resultStatesText += _(option.option) + ": " + _(option.value) + "<br>";
					});
				}
				result.resultValid = true;
			} else {
				result.resultText = "<blockquote>" + _('Could not match any state') + "</blockquote><br><br>";
			}
			//Result valid?
			if(result.resultValid) {
				result.resultText += "<br><b>" + _("You can create this device now if you want.") + "</b>";
			} else {
				result.resultText = "<blockquote>" + _("Could not determine any valid Device from this ID") + "</blockquote>";
			}
		}
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
		values2table('tableToolbar', toolbar, onChange, onTableToolbarReady);
	}

	//Enhance tableToolbar with functions
	function onTableToolbarReady(){
		var $div = $('#tableToolbar');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat disabled').find('i').html('drag_handle');
			}
		});
		//Make table sortable
		$("#tableToolbar tbody").sortable({
			helper: fixHelper,
			stop: function( event, ui ) { 
				console.log("Drag ended, start resorting...");
				$("#tableToolbar tbody").sortable('disable');
				var sequence = [];
				$('#tableToolbar').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(toolbar[sequence[i]]);
				}
				toolbar = tableResorted;
				onChange();
				values2table('tableToolbar', toolbar, onChange, onTableToolbarReady);
				$("#tableToolbar tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			cancel: "input,textarea,button,select,option,a.btn-floating"
		});	
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
						// socket.emit('mkdir', adapter, pathSubdir, function(err){	createDir(_path, _callback, _index + 1); });
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
