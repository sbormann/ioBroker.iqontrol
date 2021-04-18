//iQontrol - Copyright (c) by Sebatian Bormann
//Please visit https://github.com/sbormann/ioBroker.iqontrol for licence-agreement and further information

//Settings
var namespace = "iqontrol.meta";
var useCache = true;
var imagePath = "/iqontrol/images";
var userfilesImagePath = "/iqontrol.meta/userimages";
var userfilesImagePathBS = userfilesImagePath.replace(/\//g, "\\");

var inbuiltWallpapers = [
	"bakestone.jpg",
	"bottle.jpg",
	"decor.jpg",
	"grass.jpg",
	"green.jpg",
	"orangedrops.jpg",
	"whitestone.jpg"
];

var inbuiltSymbols = [
	"blank.png",
	"brightness.png",
	"buttongrid.png",
	"color.png",
	"colortemperature.png",
	"config.png",
	"door.png",
	"door_lock.png",
	"down.png",
	"fire.png",
	"humidity.png",
	"info.png",
	"media_eject.png",
	"media_forward.png",
	"media_mute.png",
	"media_next.png",
	"media_pad_back.png",
	"media_pad_carat_d.png",
	"media_pad_carat_l.png",
	"media_pad_carat_r.png",
	"media_pad_carat_u.png",
	"media_pad_home.png",
	"media_pad_menu.png",
	"media_pad_ok.png",
	"media_pause.png",
	"media_play.png",
	"media_playeverywhere.png",
	"media_power.png",
	"media_prev.png",
	"media_repeat.png",
	"media_repeat_one.png",
	"media_rewind.png",
	"media_shuffle.png",
	"media_stop.png",
	"power.png",
	"program.png",
	"saturation.png",
	"setpoint.png",
	"slats.png",
	"slider.png",
	"stop.png",
	"switch.png",
	"temperature.png",
	"time.png",
	"up.png",
	"variable.png",
	"view.png",
	"volume.png",
	"window.png"
];

var inbuiltWidgets = [
	{filename:"clock/clock_analog.html", name:"Analog Clock", icon: "clock/clock_analog.png"},
	{filename:"flot-chart/flot-chart.html", name:"FLOT Chart", icon: "flot-chart/flot-chart.png"},
	{filename:"map/map.html", name:"Map", icon: "map/map.png"}
];

var jqueryIcons = [
	"action",
	"alert",
	"arrow-d",
	"arrow-d-l",
	"arrow-d-r",
	"arrow-l",
	"arrow-r",
	"arrow-u",
	"arrow-u-l",
	"arrow-u-r",
	"audio",
	"back",
	"bars",
	"bullets",
	"calendar",
	"camera",
	"carat-d",
	"carat-l",
	"carat-r",
	"carat-u",
	"check",
	"clock",
	"cloud",
	"comment",
	"delete",
	"edit",
	"eye",
	"forbidden",
	"forward",
	"gear",
	"grid",
	"heart",
	"home",
	"info",
	"location",
	"lock",
	"mail",
	"minus",
	"navigation",
	"phone",
	"plus",
	"power",
	"recycle",
	"refresh",
	"search",
	"shop",
	"star",
	"tag",
	"user",
	"video"
]

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
	"airCondition": 	{
							matchingRole: "iQontrolThermostat",
							matchingStates: {
								"SET": "SET_TEMPERATURE",
								"MODE": "CONTROL_MODE",
								"ACTUAL": "TEMPERATURE",
								"HUMIDITY": "HUMIDITY",
								"BOOST": "BOOST_STATE",
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
	"buttonSensor":		{
							matchingRole: "iQontrolButton",
							matchingStates: {
								"PRESS": "STATE",
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
								"SET": "SET_TEMPERATURE",
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
	"vacuumCleaner": 	{
							matchingRole: null,
							matchingStates: {
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

var iQontrolRoles = {
	"iQontrolView": 				{
										name: "Link to other view",
										states: ["INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon", type: "icon", defaultIcons: ";link_plain_internal.png;link_chain.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolSwitch": 				{
										name: "Switch",
										states: ["STATE", "POWER", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/switch_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "switch_on.png;plug_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "switch_off.png;switch_red_off.png;plug_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolButton": 				{
										name: "Button",
										states: ["STATE", "SET_VALUE", "OFF_SET_VALUE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/button.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "button.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "button.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											showState: {name: "Show State", type: "checkbox", default: "false"},
											buttonCaption: {name: "Caption for button", type: "text", default: ""},
											returnToOffSetValueAfter: {name: "Return to 'OFF_SET_VALUE' after [ms] (0 = never, toggle)", type: "number", min: "0", max: "60000", default: ""},
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"},
											SECTION_GENERAL: {name: "General", type: "section"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolLight": 				{
										name: "Light",
										states: ["STATE", "LEVEL", "HUE", "SATURATION", "COLOR_BRIGHTNESS", "CT", "WHITE_BRIGHTNESS", "ALTERNATIVE_COLORSPACE_VALUE", "POWER", "EFFECT", "EFFECT_NEXT", "EFFECT_SPEED_UP", "EFFECT_SPEED_DOWN", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/light_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "light_on.png;light_lampshade_on.png;light_desklamp_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "light_off.png;light_lampshade_off.png;light_desklamp_off.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											invertCt: {name: "Invert CT (use Kelvin instead of Mired)", type: "checkbox", default: "false"},
											alternativeColorspace: {name: "Colorspace for ALTERNATIVE_COLORSPACE_VALUE", type: "select", selectOptions: "/None;RGB/RGB;#RGB/#RGB;RGBW/RGBW;#RGBW/#RGBW;RGBWWCW/RGBWWCW;#RGBWWCW/#RGBWWCW;RGBCWWW/RGBCWWW;#RGBCWWW/#RGBCWWW;RGB_HUEONLY/RGB (Hue only);#RGB_HUEONLY/#RGB (Hue only);HUE_MILIGHT/Hue for Milight;HHSSBB_TUYA/HHSSBB for Tuya", default: ""},
											linkGlowActiveColorToHue: {name: "Use color of lamp as GLOW_ACTIVE_COLOR", type: "checkbox", default: "false"},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolFan": 					{
										name: "Fan",
										states: ["STATE", "LEVEL", "POWER", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/fan_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "fan_on.png;kitchenhood_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "fan_off.png;kitchenhood_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolThermostat": 			{
										name: "Thermostat",
										states: ["SET_TEMPERATURE","TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/radiator.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon", type: "icon", defaultIcons: "radiator.png;heating_on.png;cooling_on.png;airconditioner_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "radiator_off.png;heating_off.png;cooling_off.png;airconditioner_off.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											controlModeDisabledValue: {name: "Value of CONTROL_MODE for 'disabled'", type: "text", default: ""},
											valveStatesSectionType: {name: "Appereance of VALVE_STATES", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "true"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolHomematicThermostat": 	{
										name: "Homematic-Thermostat",
										states: ["SET_TEMPERATURE", "TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "BOOST_STATE", "PARTY_TEMPERATURE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/radiator.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon", type: "icon", defaultIcons: "radiator.png;heating_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "radiator_off.png;heating_off.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											valveStatesSectionType: {name: "Appereance of VALVE_STATES", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "true"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolTemperature": 			{
										name: "Temperature-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/temperature.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "temperature.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "temperature.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolHumidity": 			{
										name: "Humidity-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/humidity.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "humidity.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "humidity.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolPressure": 			{
										name: "Pressure-Sensor",
										states: ["STATE", "TEMPERATURE", "HUMIDITY", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/pressure.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "pressure.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "pressure.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolBrightness": 			{
										name: "Brightness-Sensor",
										states: ["STATE", "BRIGHTNESS", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/brightness_light.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "brightness_light.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "brightness_dark.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolMotion": 				{
										name: "Motion-Sensor",
										states: ["STATE", "BRIGHTNESS", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/motion_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "motion_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "motion_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: "SE"},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolDoor": 				{
										name: "Door",
										states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/door_closed.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "door_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "door_closed.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolGarageDoor": 			{
										name: "Garage Door",
										states: ["STATE", "TOGGLE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/garagedoor_closed.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon opened", type: "icon", defaultIcons: "garagedoor_opened.png;gate_opened.png", default: ""},
											icon_off: {name: "Icon closed", type: "icon", defaultIcons: "garagedoor_closed.png;gate_closed.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											noConfirmationForTogglingViaIcon: {name: "Don't ask for confirmation when toggling via icon", type: "checkbox", default: "false"},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
 											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolDoorWithLock": 		{
										name: "Door with lock",
										states: ["STATE", "LOCK_STATE", "LOCK_STATE_UNCERTAIN", "LOCK_OPEN", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/door_locked.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "door_opened.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "door_closed.png", default: ""},
											icon_locked: {name: "Icon locked", type: "icon", defaultIcons: "door_locked.png", default: ""},
											icon_unlocked: {name: "Icon unlocked", type: "icon", defaultIcons: "door_unlocked.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "true"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolWindow": 				{
										name: "Window",
										states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
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
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolBlind": 				{
										name: "Blind",
										states: ["LEVEL", "DIRECTION", "STOP", "STOP_SET_VALUE", "UP", "UP_SET_VALUE", "DOWN", "DOWN_SET_VALUE", "FAVORITE_POSITION", "FAVORITE_POSITION_SET_VALUE", "SLATS_LEVEL", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
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
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolFire": 				{
										name: "Fire-Sensor",
										states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/fire_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "fire_on.png;gas_on.png;firebox_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "fire_off.png;gas_off.png;firebox_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolFlood": 				{
										name: "Flood-Sensor",
										states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/flood_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "flood_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "flood_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
											clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolAlarm": 				{
										name: "Alarm",
										states: ["STATE", "CONTROL_MODE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
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
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "true"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolBattery": 				{
										name: "Battery",
										states: ["STATE", "CHARGING", "POWER", "VOLTAGE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
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
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "true"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolDateAndTime":			{
										name: "Date and Time",
										states: ["STATE", "SUBJECT", "TIME", "RINGING", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/time_alarmclock_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "time_alarmclock_on.png;time_clock_on.png;time_timer_on.png;time_duration_on.png;time_calendar_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "time_alarmclock_off.png;time_clock_off.png;time_timer_off.png;time_duration_off.png;time_calendar_off.png", default: ""},
											icon_ringing: {name: "Icon ringing", type: "icon", defaultIcons: "bell_ringing_overlay.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											timeCaption: {name: "Caption for TIME", type: "text", default: ""},
											timeFormat: {name: "Format of TIME (as stored in the datapoint, see readme)", type: "combobox", selectOptions: "x/timestamp;YYYY-MM-DDTHH:mm:ss.SSSZ;ddd MMM DD YYYY HH:mm:ss ZZ;HH:mm;HH:mm:ss;DD.MM.YYYY;DD.MM.YYYY HH:mm;DD.MM.YYYY HH:mm:ss;ddd, DD.MM.YYYY;ddd, DD.MM.YYYY HH:mm;ddd, DD.MM.YYYY HH:mm:ss;dddd, DD.MM.YYYY;dddd, DD.MM.YYYY HH:mm;dddd, DD.MM.YYYY HH:mm:ss;hh:mm a;hh:mm:ss a;YYYY-MM-DD;YYYY-MM-DD hh:mm a;YYYY-MM-DD hh:mm:ss a;ddd, YYYY-MM-DD;ddd, YYYY-MM-DD hh:mm a;ddd, YYYY-MM-DD hh:mm:ss a;dddd, YYYY-MM-DD;dddd, YYYY-MM-DD hh:mm a;dddd, YYYY-MM-DD hh:mm:ss a;P/Period;Pms/Period in milliseconds;Ps/Period in seconds;Pm/Period in minutes", default: "x"},
											timeDisplayFormat: {name: "Display-Format of TIME (how it should be displayed, see readme)", type: "combobox", selectOptions: "HH:mm;HH:mm:ss;DD.MM.YYYY;DD.MM.YYYY HH:mm;DD.MM.YYYY HH:mm:ss;ddd, DD.MM.YYYY;ddd, DD.MM.YYYY HH:mm;ddd, DD.MM.YYYY HH:mm:ss;dddd, DD.MM.YYYY;dddd, DD.MM.YYYY HH:mm;dddd, DD.MM.YYYY HH:mm:ss;hh:mm a;hh:mm:ss a;YYYY-MM-DD;YYYY-MM-DD hh:mm a;YYYY-MM-DD hh:mm:ss a;ddd, YYYY-MM-DD;ddd, YYYY-MM-DD hh:mm a;ddd, YYYY-MM-DD hh:mm:ss a;dddd, YYYY-MM-DD;dddd, YYYY-MM-DD hh:mm a;dddd, YYYY-MM-DD hh:mm:ss a;D [Day(s)], H:m:s/D [Day(s)], H:m:s (for Periods);D [Day(s)], HH:mm:ss/D [Day(s)], HH:mm:ss (for Periods)", default: "dddd, DD.MM.YYYY HH:mm:ss"},
											dateAndTimeTileActiveConditions: {name: "Tile is active when all selected items are true", type: "multipleSelect", selectOptions: "activeIfStateActive/If STATE is active;activeIfTimeNotZero/If TIME is not zero;activeIfTimeInFuture/If TIME is in future;activeIfTimeInPast/If TIME is in past", default: "activeIfStateActive,activeIfTimeInFuture"},
											dateAndTimeTileActiveWhenRinging: {name: "Tile is always active when RINGING is active", type: "checkbox", default: "true"},
											dateAndTimeShowInState: {name: "Show in state", type: "multipleSelect", selectOptions: "showStateIfInactive/Show STATE if inactive;showStateIfActive/Show STATE if active;showSubjectIfActive/Show SUBJECT if active;showSubjectIfInactive/Show SUBJECT if inactive;showTimeIfInactiveAndInPast/Show TIME if inactive and in past;showTimeIfInactiveAndInFuture/Show TIME if inactive and in future;showTimeIfActiveAndInPast/Show TIME if active and in past;showTimeIfActiveAndInFuture/Show TIME if active and in future;showTimeDistanceIfInactiveAndInPast/Show distance to TIME if inactive and in past;showTimeDistanceIfInactiveAndInFuture/Show distance to TIME if inactive and in future;showTimeDistanceIfActiveAndInPast/Show distance to TIME if active and in past;showTimeDistanceIfActiveAndInFuture/Show distance to TIME if active and in future", default: "showStateIfInactive,showSubjectIfActive,showTimeDistanceIfActiveAndInFuture"},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolValue": 				{
										name: "Value",
										states: ["STATE", "LEVEL", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/value_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "value_on.png;info_circle_on.png;info_square_on.png;info_bubble_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "value_off.png;info_circle_off.png;info_square_off.png;info_bubble_off.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "true"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolProgram": 				{
										name: "Program",
										states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/play_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "play_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "play.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											showState: {name: "Show State", type: "checkbox", default: "false"},
											closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"},
											SECTION_GENERAL: {name: "General", type: "section"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolScene": 				{
										name: "Scene",
										states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
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
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/Nothing;T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolMedia": 				{
										name: "Media-Player / Remote Control",
										states: ["STATE", "COVER_URL", "ARTIST", "ALBUM", "TRACK_NUMBER", "TITLE", "EPISODE", "SEASON", "PREV", "REWIND", "PLAY", "PAUSE", "STOP", "FORWARD", "NEXT", "SHUFFLE", "REPEAT", "MUTE", "DURATION", "ELAPSED", "VOLUME", "SOURCE", "PLAYLIST", "PLAY_EVERYWHERE", "EJECT", "POWER_SWITCH", "REMOTE_NUMBER", "REMOTE_VOLUME_UP", "REMOTE_VOLUME_DOWN", "REMOTE_CH_UP", "REMOTE_CH_DOWN", "REMOTE_PAD_DIRECTION", "REMOTE_PAD_BACK", "REMOTE_PAD_HOME", "REMOTE_PAD_MENU", "REMOTE_COLOR", "REMOTE_CHANNELS", "REMOTE_ADDITIONAL_BUTTONS", "REMOTE_HIDE_REMOTE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/media_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "media_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "media_off.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											coverImageReloadDelay: {name: "Delay reload of cover-image [ms]", type: "number", min: "0", max: "5000", default: ""},
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
											remoteSectionsStartOpened: {name: "Start with these sections initially opened", type: "multipleSelect", selectOptions: "REMOTE_PAD/Pad;REMOTE_CONTROL/Volume and Channel Control;REMOTE_ADDITIONAL_BUTTONS/Additional Buttons;REMOTE_CHANNELS/Channels;REMOTE_NUMBERS/Numbers;REMOTE_COLORS/Colors", default: ""},
											remoteShowDirectionsInsidePad: {name: "Show Vol and Ch +/- inside Pad", type: "checkbox", default: "false"},
											remoteChannelsCaption: {name: "Caption for section 'Channels'", type: "text", default: ""},
											remoteAdditionalButtonsCaption: {name: "Caption for section 'Additional Buttons'", type: "text", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
											clickOnTileToggles: {name: "Click on tile toggles (instead of opening dialog)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/Nothing;T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolPopup": 				{
										name: "Popup",
										states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/popup.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "popup.png;link_square_internal.png;camera_on.png;camera_ptz_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "popup.png;link_square_internal.png;camera_on.png;camera_ptz_on.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "true"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolExternalLink":			{
										name: "External Link",
										states: ["STATE", "URL", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/link.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "link.png;link_square_external.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "link.png;link_square_external.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: ""},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "false"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: ""},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "false"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolWidget": 				{
										name: "Widget",
										states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/widget_on.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "blank.png;widget_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "blank.png;widget_off.png", default: ""},
											SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"},
											noVirtualState: {name: "Do not use a virtual datapoint for STATE (hide switch, if STATE is empty)", type: "checkbox", default: "false"},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconToggles: {name: "Click on icon toggles", type: "checkbox", default: "true"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog (instead of toggling)", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "true"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "true"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "true"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: " /Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: "xwideIfInactive highIfInactive"},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "false"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "false"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "false"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "false"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "true"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "false"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "true"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: " /Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: "fullWidthIfActive fullHeightIfActive"},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "false"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "false"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "false"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "false"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "true"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "false"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "false"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: " /Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "false"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "false"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "false"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "true"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "true"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "true"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "true"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: "N"},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									},
	"iQontrolInfoText": 			{
										name: "Info-Text",
										states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "ENLARGE_TILE", "BADGE", "BADGE_COLOR", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
										icon: "/images/icons/info_bubble_off.png",
										options: {
											SECTION_ICONS: {name: "Icons", type: "section"},
											icon_on: {name: "Icon on", type: "icon", defaultIcons: "info_bubble_off.png;info_bubble_on.png;info_circle_off.png;info_circle_on.png;info_square_off.png;info_square_on.png;value_off.png;value_on.png", default: ""},
											icon_off: {name: "Icon off", type: "icon", defaultIcons: "blank.png;info_bubble_off.png;info_bubble_on.png;info_circle_off.png;info_circle_on.png;info_square_off.png;info_square_on.png;value_off.png;value_on.png", default: ""},
											SECTION_GENERAL: {name: "General", type: "section"},
											readonly: {name: "Readonly", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
											renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"},
											SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section"},
											clickOnIconOpensDialog: {name: "Click on icon opens dialog", type: "checkbox", default: "false"},
            								clickOnTileOpensDialog: {name: "Click on tile opens dialog", type: "checkbox", default: "false"},
											noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "true"},
											iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
											hideDeviceName: {name: "Hide device name", type: "checkbox", default: "true"},
											SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section"},
											tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
											tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											tileActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section"},
											sizeInactive: {name: "Size of tile, if device is inactive", type: "select", selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen;fullWidthIfInactive shortIfInactive/Full Width, Short", default: "fullWidthIfInactive shortIfInactive"},
											stateHeightAdaptsContentInactive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive", type: "checkbox", default: "true"},
											stateFillsDeviceInactive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive", type: "checkbox", default: "true"},
											stateBigFontInactive: {name: "Use big font for STATE, if the device is inactive", type: "checkbox", default: "true"},
											bigIconInactive: {name: "Show big icon, if device is inactive", type: "checkbox", default: "false"},
											iconNoPointerEventsInactive: {name: "Ignore mouse events for the icon, if device is inactive", type: "checkbox", default: "false"},
											transparentIfInactive: {name: "Make background transparent, if device is inactive", type: "checkbox", default: "true"},
											noOverlayInactive: {name: "Remove overlay of tile, if device is inactive", type: "checkbox", default: "true"},
											hideBackgroundURLInactive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive", type: "checkbox", default: "true"},
											hideDeviceNameIfInactive: {name: "Hide device name, if the device is inactive", type: "checkbox", default: "true"},
											hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "true"},
											hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "true"},
											hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "true"},
											hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "true"},
											SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section"},
											sizeActive: {name: "Size of tile, if device is active", type: "select", selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen;fullWidthIfActive shortIfActive/Full Width, Short", default: "fullWidthIfActive shortIfActive"},
											stateHeightAdaptsContentActive: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active", type: "checkbox", default: "true"},
											stateFillsDeviceActive: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active", type: "checkbox", default: "true"},
											stateBigFontActive: {name: "Use big font for STATE, if the device is active", type: "checkbox", default: "true"},
											bigIconActive: {name: "Show big icon, if device is active", type: "checkbox", default: "false"},
											iconNoPointerEventsActive: {name: "Ignore mouse events for the icon, if device is active", type: "checkbox", default: "false"},
											transparentIfActive: {name: "Make background transparent, if device is active", type: "checkbox", default: "true"},
											noOverlayActive: {name: "Remove overlay of tile, if device is active", type: "checkbox", default: "true"},
											hideBackgroundURLActive: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active", type: "checkbox", default: "true"},
											hideDeviceNameIfActive: {name: "Hide device name, if the device is active", type: "checkbox", default: "true"},
											hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "true"},
											hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "true"},
											hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
											hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"},
											SECTION_TILE_ENLARGED: {name: "Tile-Behaviour if device is enlarged", type: "section"},
											sizeEnlarged: {name: "Size of tile, if device is enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
											stateHeightAdaptsContentEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is enlarged", type: "checkbox", default: "true"},
											stateFillsDeviceEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is enlarged", type: "checkbox", default: "true"},
											stateBigFontEnlarged: {name: "Use big font for STATE, if the device is enlarged", type: "checkbox", default: "true"},
											bigIconEnlarged: {name: "Show big icon, if device is enlarged", type: "checkbox", default: "true"},
											iconNoPointerEventsEnlarged: {name: "Ignore mouse events for the icon, if device is enlarged", type: "checkbox", default: "false"},
											transparentIfEnlarged: {name: "Make background transparent, if device is enlarged", type: "checkbox", default: "false"},
											noOverlayEnlarged: {name: "Remove overlay of tile, if device is enlarged", type: "checkbox", default: "false"},
											tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
											tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
											tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"},
											visibilityBackgroundURLEnlarged: {name: "Visibility of background from BACKGROUND_VIEW/URL/HTML, if device is enlarged", type: "select", selectOptions: "/No change;visibleIfEnlarged/Visible;hideIfEnlarged/Invisible", default: ""},
											hideDeviceNameIfEnlarged: {name: "Hide device name, if the device is enlarged", type: "checkbox", default: "true"},
											hideInfoAIfEnlarged: {name: "Hide INFO_A, if the device is enlarged", type: "checkbox", default: "false"},
											hideInfoBIfEnlarged: {name: "Hide INFO_B, if the device is enlarged", type: "checkbox", default: "false"},
											hideStateIfEnlarged: {name: "Hide state, if the device is enlarged", type: "checkbox", default: "false"},
											hideIconEnlarged: {name: "Hide icon, if device is enlarged", type: "checkbox", default: "false"},
											SECTION_TIMESTAMP: {name: "Timestamp", type: "section"},
											addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
											showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""},
											SECTION_INFO_A_B: {name: "INFO_A/B", type: "section"},
											infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
											infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
											infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"},
											SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section"},
											batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
											batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""},
											SECTION_UNREACH: {name: "UNREACH Icon", type: "section"},
											invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
											SECTION_ERROR: {name: "ERROR Icon", type: "section"},
											invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"},
											SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section"},
											backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
											backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
											backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
											SECTION_BADGE: {name: "BADGE", type: "section"},
											badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
											SECTION_GLOW: {name: "GLOW", type: "section"},
											invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"},
											SECTION_URLHTML: {name: "URL/HTML", type: "section"},
											popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
											popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
											openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
											popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"},
											SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section"},
											additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
											additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
											SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section"},
											additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
											additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"}
										}
									}
};

//Delcarations
const udef = 'undefined';
var link;
var newConfig = false;
var socketWasConnected = false;
var socketConnectionErrorMessages = "";
var iobrokerObjects;
var iobrokerObjectsReady = false;
var iobrokerObjectsReadyFunctions = [];
var dialogCodeEditorCodeMirror = false;
var dialogCodeEditorCodeMirrorChanged = false;
var modalZIndexCount = 2000;

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
	setTimeout(function(){ $('#dialogSelectId').css('z-index', modalZIndexCount++); }, 100);
	if (selectId) {
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

function removeDuplicates(array, ignoreEverythingAfterThisString) { //Removes duplicates from an array
    var seen = [];
	if(ignoreEverythingAfterThisString == "") ignoreEverythingAfterThisString = null;
    return array.filter(function(item) {
		if(seen.indexOf(JSON.stringify(item).split(ignoreEverythingAfterThisString)[0]) > -1){
			return false;
		} else {
			seen.push(JSON.stringify(item).split(ignoreEverythingAfterThisString)[0]);
			return true;
		}
    });
}

function isValidColorString(colorString){
	var style = new Option().style;
	style.color = colorString;
	return (style.color && style.color != "");
}

//Symbolic links
function updateSymbolicLinks(){
	var changed = false;
	if (typeof views != udef && views.length > 0) views.forEach(function(view){
		if (typeof view.devices != udef) view.devices.forEach(function(device){
			if(typeof device.symbolicLinkFrom == "object" && typeof device.symbolicLinkFrom.sourceView != udef  && device.symbolicLinkFrom.sourceView !== ""  && typeof device.symbolicLinkFrom.sourceDevice != udef  && device.symbolicLinkFrom.sourceDevice !== ""){
				if(views[device.symbolicLinkFrom.sourceView] && views[device.symbolicLinkFrom.sourceView].devices && typeof views[device.symbolicLinkFrom.sourceView].devices[device.symbolicLinkFrom.sourceDevice] == "object"){
					var newCommonRole = views[device.symbolicLinkFrom.sourceView].devices[device.symbolicLinkFrom.sourceDevice].commonRole;
					if(device.commonRole != newCommonRole){
						console.log("Update device commonRole from symbolic link");
						device.commonRole = newCommonRole;
						changed = true;
					}
					var newStates = JSON.parse(JSON.stringify(views[device.symbolicLinkFrom.sourceView].devices[device.symbolicLinkFrom.sourceDevice].states)); //Creates new array, not just a reference
					if(JSON.stringify(device.states) != JSON.stringify(newStates)){
						console.log("Update device states from symbolic link");
						device.states = newStates;
						changed = true;
					}
					var newOptions = JSON.parse(JSON.stringify(views[device.symbolicLinkFrom.sourceView].devices[device.symbolicLinkFrom.sourceDevice].options)); //Creates new array, not just a reference
					if(JSON.stringify(device.options) != JSON.stringify(newOptions)){
						console.log("Update device options from symbolic link");
						device.options = newOptions;
						changed = true;
					}
				} else { //Source Device not found! Remove symbolic link!
					console.log("Remove symbolic link because source device is missing");
					delete device.symbolicLinkFrom;
					changed = true;
				}
			}
		});
	});
	return changed;
}

function changeSymbolicLinks(oldViewIndex, oldDeviceIndex, newViewIndex, newDeviceIndex, skip){
	//If newViewIndex and newDeviceIndex are null, then all symbolic links to oldViewIndex/oldDeviceIndex are delted (converted to normal devices)
	//If oldDeviceIndex and newDeviceIndex are "*", then all devices are affected
	if(skip == null) skip = [];
	var changed = [];
	if (typeof views != udef && views.length > 0) views.forEach(function(view, viewIndex){
		if (typeof view.devices != udef) view.devices.forEach(function(device, deviceIndex){
			if(typeof device.symbolicLinkFrom == "object" && typeof device.symbolicLinkFrom.sourceView != udef  && device.symbolicLinkFrom.sourceView !== ""  && typeof device.symbolicLinkFrom.sourceDevice != udef  && device.symbolicLinkFrom.sourceDevice !== ""){ //Valid Symbolic link
				if(device.symbolicLinkFrom.sourceView == oldViewIndex && (device.symbolicLinkFrom.sourceDevice == oldDeviceIndex || oldDeviceIndex == "*") && skip.findIndex(function(element){ return (typeof element != udef && element.view == viewIndex && element.device == deviceIndex); }) == -1){
					if(newViewIndex == null || newDeviceIndex == null){
						console.log("Remove symbolic link of device " + viewIndex + "/" + deviceIndex + " because source device " + device.symbolicLinkFrom.sourceView + "/" + device.symbolicLinkFrom.sourceDevice + " has been deleted [viewIndex/deviceIndex]");
						delete device.symbolicLinkFrom;
						changed.push({view: viewIndex, device: deviceIndex});
					} else {
						console.log("Change symbolic link of device " + viewIndex + "/" + deviceIndex + " from " + device.symbolicLinkFrom.sourceView + "/" + device.symbolicLinkFrom.sourceDevice + " to " + newViewIndex + "/" + newDeviceIndex + " [viewIndex/DeviceIndex]");
						device.symbolicLinkFrom.sourceView = newViewIndex;
						if(newDeviceIndex !== "*") device.symbolicLinkFrom.sourceDevice = newDeviceIndex;
						changed.push({view: viewIndex, device: deviceIndex});
					}
				}
			}
		});
	});
	return changed;
}

function checkSymbolicLinks(sourceViewIndex, sourceDeviceIndex){
	var destinations = [];
	if (typeof views != udef && views.length > 0) views.forEach(function(view, viewIndex){
		if (typeof view.devices != udef) view.devices.forEach(function(device, deviceIndex){
			if(typeof device.symbolicLinkFrom == "object" && typeof device.symbolicLinkFrom.sourceView != udef  && device.symbolicLinkFrom.sourceView !== ""  && typeof device.symbolicLinkFrom.sourceDevice != udef  && device.symbolicLinkFrom.sourceDevice !== ""){
				if(device.symbolicLinkFrom.sourceView == sourceViewIndex && device.symbolicLinkFrom.sourceDevice == sourceDeviceIndex){
					destinations.push({view: viewIndex, device: deviceIndex});
				}
			}
		});
	});
	return destinations;
}

//Combobox
var $enhanceTextInputToComboboxActualTarget;
function enhanceTextInputToCombobox(targetInput, options, iconsFromOption, onSelect){
	//targetInput - string - selector for text-input-field to enhance
	//options - string - "value1/caption1/icon1;value2/caption2/icon2;[optgroup-caption];value3/caption3/icon3;..."
	//iconsFromOption - boolean - if true, the values will be used to generate links to icons (\ will be replaced by / an link will be preceded), if no icon is given in options
	//onSelect - function - function that will be called with the argument (value), if a value is selected
	options = options || "";
	options = options.split(";");
	var comboboxContent = "";
	options.forEach(function(option){
		if (option.substring(0,1) == "[" && option.substr(-1) == "]"){ //Optgroup
			var caption = _(option.substring(1, option.length - 1));
			comboboxContent += "	<li class='divider' style='padding: 14px 4px 30px 4px; color:grey;' tabindex='-1'>";
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
			comboboxContent += "		<a href='#!'>";
			if (icon != ""){
				comboboxContent += "		<img src='" + icon + "' style='display: block; margin-bottom: 5px; min-width: 40px; max-width: 40px; max-height: 40px; width: auto; height: auto;' onerror='this.onerror=null; this.src=\"" + link + "/./images/icons/various.png" + "\";'>";
			}
			comboboxContent += "			" + caption + "&nbsp;";
			comboboxContent += "		</a>";
			comboboxContent += "	</li>";
		}
	});
	$(targetInput).one('blur', function(){
		var that = this;
		setTimeout(function(){var _that = that; _that.scrollLeft = 100000;}, 10);
	});
	$(targetInput).trigger('blur');
	$(targetInput).each(function(index, targetElement){
		if(!$(this).parent('div').hasClass('combobox')){
			$(this).next('label').addBack().wrapAll("<div class='combobox'></div>");
			$(this).after("<a class='comboboxDropdownTrigger waves-effect waves-teal btn-small btn-flat' data-target='dropdown_" + encodeURIComponent(targetInput) + "_" + index + "' href='#' onclick='console.log(\"Combobox dropdown clicked\"); $enhanceTextInputToComboboxActualTarget = $(this).prevAll(\"input\"); enhanceTextInputToComboboxScrollDropdownTo($(this).data(\"target\"), $(this).prevAll(\"input\").val());'><i class='material-icons comboboxDropdownTriggerArrow' style='font-size: 25px;'>arrow_drop_down</i></a>");
		}
		$(this).data('combobox-onselect', onSelect);
		$("ul[id='dropdown_" + encodeURIComponent(targetInput) + "_" + index + "']").remove(); //If there was an old dropdownlist remove it
		$(targetElement).after("<ul id='dropdown_" + encodeURIComponent(targetInput) + "_" + index + "' class='dropdown-content'>...</ul>");
	});
	$("ul[id='dropdown_" + encodeURIComponent(targetInput) + "_0']").html(comboboxContent); //Add comboboxContent to first targetInput (because of performance-reasons it is only saved to the first targetInput and not to all!)
	$('.comboboxDropdownTrigger').dropdown({
		alignment: 'right',
		constrainWidth: false,
		onOpenStart: function(event){
			var target = $(event).data('target');
			$("ul[id='" + target + "']").html($("ul[id='" + target.substring(0, target.lastIndexOf('_')) + "_0']").html()); //Copy comboboxContent from first targetInput
		},
		onItemClick: function(event){
			enhanceTextInputToComboboxEntryToInput($(event).data('value'));
		}
	});
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
			if ($(this).data('value') == encodeURIComponent((value || "").replace(/\//g, "\\"))){
				$(this).addClass('grey lighten-3');
				_$dropdownlist.scrollTop(_$dropdownlist.scrollTop() + $(this).position().top);
			}
		});
	}, 300);
}
function enhanceTextInputToComboboxEntryToInput(value){
	var onSelect = $enhanceTextInputToComboboxActualTarget.data('combobox-onselect');
	if(decodeURIComponent(value).substring(0, 10) == "[VARIABLE]"){
		var variable = "";
		if(decodeURIComponent(decodeURIComponent(value)).indexOf("{}") > -1) {
			variable = prompt(_("Please enter datapoint id") + ":");
			if (variable == "") variable = null;
		}
		if(variable !== null){
			value = decodeURIComponent(decodeURIComponent(value).replace("[VARIABLE]", "")).replace("{}", "{" + variable + "}");
			$enhanceTextInputToComboboxActualTarget.val(value).trigger('change').trigger('blur');
			if(onSelect) onSelect(value);
		}
	} else {
		value = decodeURIComponent(value).replace(/\\/g, "/");
		$enhanceTextInputToComboboxActualTarget.val(value).trigger('change').trigger('blur');
		if(onSelect) onSelect(value);
	}
}

//Colorpickers
function initColorpickers(onChange){
	$('.MaterializeColorPicker').each(function(){
		if(!$(this).data('materialize-color-picker-initialized')){
			$(this).colorpicker().on('changeColor', function(event){
				if(event.color) $(this).css('border-right', '10px solid rgba(' + event.color.toRGB().r + ', ' + event.color.toRGB().g + ', ' + event.color.toRGB().b + ', ' + event.color.toRGB().a + ')');
			});
			$(this).colorpicker().on('hidePicker', function(event){
				if(event.color) $(this).css('border-right', '10px solid rgba(' + event.color.toRGB().r + ', ' + event.color.toRGB().g + ', ' + event.color.toRGB().b + ', ' + event.color.toRGB().a + ')');
				onChange();
			});
			$(this).on('change', function(event, noOnChange){
				if ($(this).val() == "") {
					$(this).css('border-right', '0px solid black');
				} else {
					$(this).trigger('changeColor', noOnChange);
				}
				if(!noOnChange) onChange();
			});
			$(this).data('materialize-color-picker-initialized', true);
		}
		$(this).trigger('change', 'noOnChange');
	});
}

//Objects
function getCommonName(object){
	var name = false;
	if(object && typeof object.common != udef && typeof object.common.name != udef){
		if(typeof object.common.name == "object" && typeof object.common.name[systemLang] != udef){
			name = object.common.name[systemLang];
		} else if(typeof object.common.name == "object" && typeof object.common.name["en"] != udef){
			name = object.common.name["en"];
		} else if (typeof object.common.name == "string") {
			name = object.common.name;
		}
	}
	return name;
}

//Enumerations
var enumerations = {};
function getEnumerations(callback) {
	enumerations = {};
	for(id in iobrokerObjects){
		if(id.indexOf("enum") == 0) {
			enumerations[id] = iobrokerObjects[id];
		}
	}
	callback && callback();
}
function getEnumerationName(enumeration){
	var name = _(enumeration);
	if(enumerations[enumeration] && typeof enumerations[enumeration].common != udef && typeof enumerations[enumeration].common.name != udef){
		if(typeof enumerations[enumeration].common.name == "object" && typeof enumerations[enumeration].common.name[systemLang] != udef){
			name = enumerations[enumeration].common.name[systemLang];
		} else if(typeof enumerations[enumeration].common.name == "object" && typeof enumerations[enumeration].common.name["en"] != udef){
			name = _(enumerations[enumeration].common.name["en"]);
		} else if (typeof enumerations[enumeration].common.name == "string") {
			name = _(enumerations[enumeration].common.name);
		}
	}
	return name;
}

//History-Instances
var historyInstances = [];
function getHistoryInstances(callback){
	historyInstances = [];
	for(var id = 0; id < parent.gMain.instances.length; id++){
		if(parent.gMain.objects[parent.gMain.instances[id]].common.type === 'storage'){
			historyInstances.push(parent.gMain.instances[id].substring('system.adapter.'.length));
		}
	}
	callback && callback();
}

//fixedEncodeURIComponents (encodes !, ', (, ), and *)	
function fixedEncodeURIComponent(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
		return '%' + c.charCodeAt(0).toString(16);
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
function uploadStringAsFile(string, filename, path, callback) {
	if(typeof path == 'function') {
		callback = path;
		path = null;
	}
	var reader = new FileReader();
	reader.onload = function(e) { //Closure--> to capture the file information.
		if(filename.substr(0, 1) == "/") filename = filename.substr(1);
		path = (path ? path + "/" : "") + filename;
		var parts = path.split('/');
		var adapter = parts[1];
		parts.splice(0, 2);
		socket.emit('writeFile', adapter, parts.join('/'), e.target.result, function () {
			if (callback) callback(filename);
		});
	};
	reader.readAsArrayBuffer(new Blob([string]));
}
function downloadFileAsString(filename, path, callback) {
	if(typeof path == 'function') {
		callback = path;
		path = null;
	}
	if(filename.substr(0, 1) == "/") filename = filename.substr(1);
	path = (path ? path + "/" : "") + filename;
	if (path[0] === '/') {
		var parts = path.split('/');
		adapter = parts[1];
		parts.splice(0, 2);
		path = parts.join('/');
	}
	socket.emit('readFile', adapter, path, function (error, fileData, mimeType) {
		if(!error && fileData){
			if (callback) callback(fileData);
		}
	});
}
async function downloadFileAsStringAsync(filename, path) {
	return await new Promise(function(resolve){
		if(filename.substr(0, 1) == "/") filename = filename.substr(1);
		path = (path ? path + "/" : "") + filename;
		if (path[0] === '/') {
			var parts = path.split('/');
			_adapter = parts[1];
			parts.splice(0, 2);
			path = parts.join('/');
		}
		socket.emit('readFile', _adapter, path, function (error, fileData, mimeType) {
			if(!error && fileData){
				resolve(fileData);
			} else {
				resolve("");
			}
		});
	});
}
function saveStringAsLocalFile(string, type, mime, filename, addPrefix){ //type: charset=utf-8 or base64, mime: for example "text/json"
	if(addPrefix){
		var date = new Date();
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		if (m < 10) m = '0' + m;
		d = date.getDate();
		if (d < 10) d = '0' + d;
		var dateText = y + "-" + m + "-" + d;
		filename = dateText + "_" + adapter + "_" + instance + "_" + (filename || ".txt");
	}
	filename = encodeURIComponent(filename || "iqontrol.txt");
	var dataString = "data:" + (mime || "text/plain") + ";" + (type || "charset=utf-8") + "," + encodeURIComponent(string);
	var saveAnchorNode = document.createElement('a');
    saveAnchorNode.setAttribute('opacity', 0);
    saveAnchorNode.setAttribute('href', dataString);
    saveAnchorNode.setAttribute('download', filename);
    document.body.appendChild(saveAnchorNode);
    saveAnchorNode.click();
    saveAnchorNode.remove();
}
function loadLocalFileAsString(accept, callback){ //accept: for example ".txt, .json, image/*"
	if(typeof accept == "function"){
		callback = accept;
		accept = ".*";
	}
	if(typeof callback !== "function") return;
    var loadInputNode = document.createElement('input');
	loadInputNode.setAttribute('opacity', 0);
    loadInputNode.setAttribute('type', 'file');
    loadInputNode.setAttribute('accept', accept);
	loadInputNode.addEventListener('change', function (event){
		if(!window.FileReader) { // Browser is not compatible
			alert(_("Browser not compatible"));
			return;
		}
		var reader = new FileReader();
		reader.onload = function(_event) {
			if(_event.target.readyState != 2) return;
			if(_event.target.error) {
				alert(_("Error while reading file"));
				return;
			}
			callback(_event.target.result);
		};
		reader.readAsText(event.target.files[0]);
	}, false);
    document.body.appendChild(loadInputNode);
	loadInputNode.click();
	loadInputNode.remove();
}
function loadLocalFileAsArrayBuffer(accept, callback){ //accept: for example ".txt, .json, image/*"
	if(typeof accept == "function"){
		callback = accept;
		accept = ".*";
	}
	if(typeof callback !== "function") return;
    var loadInputNode = document.createElement('input');
	loadInputNode.setAttribute('opacity', 0);
    loadInputNode.setAttribute('type', 'file');
    loadInputNode.setAttribute('accept', accept);
	loadInputNode.addEventListener('change', function (event){
		if(!window.FileReader) { // Browser is not compatible
			alert(_("Browser not compatible"));
			return;
		}
		var reader = new FileReader();
		reader.onload = function(_event) {
			if(_event.target.readyState != 2) return;
			if(_event.target.error) {
				alert(_("Error while reading file"));
				return;
			}
			callback(_event.target.result);
		};
		reader.readAsArrayBuffer(event.target.files[0]);
	}, false);
    document.body.appendChild(loadInputNode);
	loadInputNode.click();
	loadInputNode.remove();
}
function readDir(path, callback) { //callback(err, obj)
		var parts = path.split('/');
		var adapter = parts[1];
		parts.splice(0, 2);
		socket.emit('readDir', adapter, parts.join('/'), callback);
}
function readDirAsync(path){
	return new Promise(resolve => {
		readDir(path, function(err, obj){
			resolve(err);
		});
	});
}
function readDirAsZip(path, callback) {
	var pathWithoutSlashNamespace = path.substring(namespace.length + 1);
	if(pathWithoutSlashNamespace.substr(-1) == '/') pathWithoutSlashNamespace = pathWithoutSlashNamespace.substr(0, pathWithoutSlashNamespace.length -1);
	socket.emit('sendToHost', parent.gMain.currentHost, 'readDirAsZip', {id: namespace, name: pathWithoutSlashNamespace, options: {settings: false}}, function(data){
		callback(data.error || null, data.data || null);
	});
}
function writeDirAsZip(path, base64Zip, callback) {
	var pathWithoutSlashNamespace = path.substring(namespace.length + 1)
	socket.emit('sendToHost', parent.gMain.currentHost, 'writeDirAsZip', {id: namespace, name: pathWithoutSlashNamespace, data: base64Zip}, function(data){
		callback(data.error || null, null);
	});
}
function deleteFile(path, callback) {
		var parts = path.split('/');
		var adapter = parts[1];
		parts.splice(0, 2);
		socket.emit('deleteFile', adapter, parts.join('/'), function(err){	if (callback) callback(err); });
}
function renameFile(path, newPath, callback) {
	var newDir = newPath.substring(0, newPath.lastIndexOf('/'));
	createDir(newDir, function(){
		var parts = path.split('/');
		var adapter = parts[1];
		var newParts = newPath.split('/');
		var newAdapter = newParts[1];
		if(adapter != newAdapter){
			newParts.splice(1, 0, adapter, ".."); //inserts adapter and ".." at index 1 (and removes 0 elements)
			newPath = newParts.join('/'); //results in /adapter/../newadapter/path -> this trick is necessary, because the socket cant directly move files between two adapters
		}
		parts.splice(0, 2);
		newParts.splice(0, 2);
		//needs admin >5.0.3
		if(parseInt((iobrokerObjects && iobrokerObjects["system.adapter.admin"] && iobrokerObjects["system.adapter.admin"].common && iobrokerObjects["system.adapter.admin"].common.version || "0").split('.').join('')) <= 503) alert("This operation is only supported by admin versions > 5.0.3. Please update your admin-adapter!");
		socket.emit('renameFile', adapter, parts.join('/'), newParts.join('/'), function (err) { 
			if (callback) callback(err); 
		});
	});
}
function renameFileAsync(oldPath, newPath){
	return new Promise(resolve => {
		renameFile(oldPath, newPath, function(err, obj){
			resolve(err);
		});
	});
}
async function createDir(path, callback){ /* This is a workaround, because socket.emit('mkdir' was not working */
	if(path.substr(-1) == "/") path = path.substr(0, path.length - 1);
	(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
		var _path = path;
		var _callback = callback;
		uploadStringAsFile("This is only a temporary file", "createPath.tmp", path, function(filename){
			deleteFile(_path + "/" + filename, _callback);
		})
	})(); //<--End Closure
}
/*
async function createDir(path, callback, index) { //index is just for recoursive iterating through the process of creating all subdirs
	if (typeof index != 'number') index = 0;
	pathSubdirs = path.split('/');
	if (index >= pathSubdirs.length){
		if(callback) callback();
	} else {
		pathSubdir = pathSubdirs.slice(0, index + 1).join('/');
		var pathSubdirExists = await checkDirExistance(pathSubdir);
		if (pathSubdirs[index] != "" && !pathSubdirExists){ //Subdir is not existant - create it and iterate to next subdir
			(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
				var _path = path;
				var _callback = callback;
				var _index = index;
				var parts = path.split('/');
				var adapter = parts[1];
				parts.splice(0, 2);
				//needs admin >5.0.3
				if(parseInt((iobrokerObjects && iobrokerObjects["system.adapter.admin"] && iobrokerObjects["system.adapter.admin"].common && iobrokerObjects["system.adapter.admin"].common.version || "0").split('.').join('')) <= 503) alert("This operation is only supported by admin versions > 5.0.3. Please update your admin-adapter!");
				socket.emit('mkdir', adapter, pathSubdir, function(err){
					createDir(_path, _callback, _index + 1);
				});
			})(); //<--End Closure
		} else { //Subdir exists - iterate to next subdir
			createDir(path, callback, index + 1);
		}
	}
}
*/
async function checkDirExistance(path){
	var result = await readDirAsync(path);
	if(result == null) return true; else return false;
}


/************** LOAD ********************************************************
*** This will be called by the admin adapter when the settings page loads ***
****************************************************************************/
async function load(settings, onChange) {
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
	initColorpickers(onChange);

	//Init CodeMirror
	dialogCodeEditorCodeMirror = CodeMirror.fromTextArea($("#dialogCodeEditorCode")[0], {
		lineNumbers: true,
		theme: "material",
		viewportMargin: Infinity,
		indentUnit: 4,
		indentWithTabs: true
	});
	dialogCodeEditorCodeMirror.on("change", function(){
		dialogCodeEditorCodeMirrorChanged = true;
		$('#dialogCodeEditor .btn-set').removeClass('disabled');
	});
	$('#dialogCodeEditor .btn-set').on('click', function(){
		if(confirm(_("Overwrite file?"))){
			uploadStringAsFile(dialogCodeEditorCodeMirror.getValue(), $("#dialogCodeEditorFileName").text(), userfilesImagePath, function(name){
				dialogCodeEditorCodeMirrorChanged = false;
				$('#dialogCodeEditor .btn-set').addClass('disabled');
			});
		}
	});
	$('#dialogCodeEditor .btn-close').on('click', function(){
		if(dialogCodeEditorCodeMirrorChanged){
			if(confirm(_("You have unsaved changes. Close anyway?"))) $('#dialogCodeEditor').modal('close');
		} else {
			$('#dialogCodeEditor').modal('close');
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
			$key.prop('checked', settings[id]);
			//do not call onChange direct, because onChange could expect some arguments
			$key.on('change', () => onChange());
		} else {
			$key.val(settings[id]);
			//do not call onChange direct, because onChange could expect some arguments
			$key.on('change keyup', function(event, noOnChange){ 
				if(!noOnChange) onChange(); 
			});
		}
	});

	//Get Subsettings
	if(!settings.views && !settings.toolbar && confirm(_("No configuration found. Should a demo-config be loaded? (Otherwise you will get an empty configuration)."))){
		toolbar = settings.toolbar || settings.demotoolbar || [];
		views = settings.views || settings.demoviews || [];
		version = settings.version || 0;
		alert(_("Don't forget to save the configuration now, otherwise it will be lost."));
		newConfig = true;
	} else {
		toolbar = settings.toolbar || [];
		views = settings.views || [];
		version = settings.version || 0;
		newConfig = false;
	}

	//Set initial values of further variables
	images = [];
	imagesDirs = [];
	devicesSelectedView = -1;

	//Get inbuiltIcons
	var inbuiltIcons = [];
	for (iQontrolRole in iQontrolRoles){
		for (iQontrolRoleOption in iQontrolRoles[iQontrolRole].options){
			if(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].type == "icon") inbuiltIcons = inbuiltIcons.concat(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].defaultIcons.split(";"));
		}
	}
	inbuiltIcons = removeDuplicates(inbuiltIcons);
	inbuiltIcons.sort();

	//Update all Colorpickers
	$('.MaterializeColorPicker').trigger('change', 'noOnChange');

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
				var connectionLink = location.protocol + "//"  + location.hostname;
				var forceWebSocket = false;
			} else { //Direct connection
				link = (result[bestInstance].native.secure ? "https://" : "http://") + location.hostname + ":" + result[bestInstance].native.port + "/iqontrol";
				var connectionLink = (result[bestInstance].native.secure ? "https://" : "http://") + location.hostname + ":" + result[bestInstance].native.port;
				var forceWebSockets = result[bestInstance].native.forceWebSockets;
			}
			console.log("Got Link: " + link);
			$('#mainLink').attr('href', link + "/index.html?namespace=" + adapter + "." + instance);

			//Add Roles to dialogDeviceEditCommonRole-Selectbox
			$('#dialogDeviceEditCommonRole').empty().append("<option disabled selected value>" + _("Select Role") + "</option>");
			for (var element in iQontrolRoles){ $('#dialogDeviceEditCommonRole').append("<option value='" + element + "' data-icon='" + (iQontrolRoles[element].icon ? link + iQontrolRoles[element].icon : "") + "'>" + _(iQontrolRoles[element].name) + "</option>"); }
			$('#dialogDeviceEditCommonRole').select();

			//Signal to admin, that no changes yet
			if(!newConfig) onChange(false);

			//Get images
			console.log("getImages");
			getImages(async function(){
				/* The following part was for backwads-compatibility - but it is broken (i think, the socket.io-function rename has changed, as it doesn't allow to transfer betwen iqontrol and iqontrol.meta directory any more - therefore this is disabled now
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
						console.log("Adjusted view-backgroundimage: " + view.nativeBackgroundImage);
						fileLocationChanged = true;
					}
					if (typeof view.devices != udef) view.devices.forEach(function(device){
						if(typeof device.nativeBackgroundImage != udef && device.nativeBackgroundImage.indexOf(oldImagePathRelative) == 0 && images.find(function(element){return element.filenameBS == device.nativeBackgroundImage.substring(oldImagePathRelative.length);})) {
							device.nativeBackgroundImage = ".\\.." + userfilesImagePathBS + device.nativeBackgroundImage.substring(oldImagePathRelative.length);
							console.log("Adjusted device-backgroundimage: " + device.nativeBackgroundImage);
							fileLocationChanged = true;
						}
					});
				});
				if (fileLocationChanged) onChange(true);
				*/

				//Show Settings
				console.log("All settings loaded. Adapter ready.");
				$('.hideOnLoad').show();
				$('.showOnLoad').hide();
				loading = false;

				//Reinitialize all the Materialize labels on the page if you are dynamically adding inputs:
				if (M) M.updateTextFields();

				//Get iobrokerObjects
				getIobrokerObjects();
			});
		} else {
			alert(_("Error: No web-adapter found!"));
		}
	});

	function getIobrokerObjects(){
		console.log("Getting ioBroker Objects...");
		$('.loadingObjects').show();
		iobrokerObjectsReady = false;
		iobrokerObjects = Object.assign({}, parent.gMain.objects);
		iobrokerObjectsReady = true;
		if(iobrokerObjectsReadyFunctions.length) console.log("There are some functions that were buffered while fetching the ioBroker Objects. They will be executed now...");
		for(i = 0; i < iobrokerObjectsReadyFunctions.length; i++){
			if (typeof iobrokerObjectsReadyFunctions[i] == 'function') iobrokerObjectsReadyFunctions[i]();
		}
		iobrokerObjectsReadyFunctions = [];
		$('.loadingObjects').hide();
		console.log("ioBroker Objects ready.");
	}

	//++++++++++ TABS ++++++++++
	//Enhance Tabs with onShow-Function
	$('ul.tabs li a').on('click', function(){ onTabShow($(this).attr('href'));});
	function onTabShow(tabId){
		console.log("Open tab: " + tabId);
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

		//Fill Selectbox ViewsAutocreateEnumerations
		console.log("Loading Enumerations...");
		$('#viewsAutocreateButton').addClass('disabled');
		$('#viewsAutocreateButtonProgress').show();
		var toDo = function(){
			getEnumerations(function(){
				if(enumerations){
					var enumerationsMain = Object.keys(enumerations);
					enumerationsMain = enumerationsMain.filter(function(element){ //Filter for main Enumerations (that are elements, that have sub-enumerations)
						if(enumerationsMain.filter(function(_element){ return (_element.indexOf(element + ".") == 0); }).length > 0) return true; else return false;
					});
					$('#dialogViewsAutocreateEnumerationMain').empty().append("<option disabled selected value>" + _("Select Enumeration") + "</option>");
					enumerationsMain.forEach(function(enumeration, index){
						var name = getEnumerationName(enumeration);
						$('#dialogViewsAutocreateEnumerationMain').append("<option value='" + enumeration + "'>" + name + "</option>");
					});
					$('#dialogViewsAutocreateEnumerationMain').select();
					$('#viewsAutocreateButton').removeClass('disabled');
					$('#viewsAutocreateButtonProgress').hide();
					console.log("Enumerations ready.");
				} else {
					if(error) console.log("Error getting enumerations: " + error); else console.log("There are no Enumerations");
					$('#viewsAutocreateButtonProgress').hide();
				}
			});
		}
		if(iobrokerObjectsReady) {
			toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(toDo);
		}
	}

	//Enhance TableViews with functions
	function onTableViewsReady(){
		var $div = $('#tableViews');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add Images to Selectbox for BackgroundImage
		var inbuiltWallpapersString = "";
		inbuiltWallpapers.forEach(function(wallpaper){
			if (wallpaper != "") {
				inbuiltWallpapersString += ";" + ("./images/wallpaper/" + wallpaper).replace(/\//g, "\\") + "/" + wallpaper.replace(/\//g, "\\");
			}
		});
		if (inbuiltWallpapers.length > 0){
			inbuiltWallpapersString = ";[" + _("Inbuilt Wallpapers") + ":]" + inbuiltWallpapersString;
		}
		var imagenames = [];
		imagesDirs.forEach(function(imagesDir){
			if(imagesDir.files && imagesDir.files.length > 0) imagenames.push("[" + imagesDir.dirnameBS + ":]");
			imagesDir.files.forEach(function(file){
				if(!(file.filenameBS.endsWith(".shtml") || file.filenameBS.endsWith(".ehtml") || file.filenameBS.endsWith(".shtm") || file.filenameBS.endsWith(".htm") || file.filenameBS.endsWith(".html")
					|| file.filenameBS.endsWith(".css")
					|| file.filenameBS.endsWith(".mjs") || file.filenameBS.endsWith(".js"))){
					imagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
				}
			});
		});
		if (imagenames.length > 0){
			imagenames.unshift(";[" + _("User Images") + ":]");
		}
		enhanceTextInputToCombobox('#tableViews input[data-name="nativeBackgroundImage"]', "/" + _("(None)") + inbuiltWallpapersString + imagenames.join(";"), true);
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			if (command === 'edit') {
				$(this).on('click', function (event) {
					var _viewIndex = $(this).data('index');
					M.Tabs.getInstance($('.tabs')).select('tabDevices');
					setTimeout(function(){ $('#devicesSelectedView').val(_viewIndex).select().trigger('change'); }, 10);
				});
			} else if (command === 'delete') {
				$(this).on('click', function (event) {
					var _viewIndex = $(this).data('index');
					var changedSymbolicLinks = changeSymbolicLinks(_viewIndex, "*", null, null);
					if(changedSymbolicLinks.length > 0) {
						var deletedSymbolicLinksString = "";
						changedSymbolicLinks.forEach(function(destination){
							var deviceNumber = parseInt(destination.device) + 1;
							//1st 2nd 3rd 4th...
							var deviceNumberString = (deviceNumber == 1 ? _("1st") : (deviceNumber == 2 ? _("2nd") : (deviceNumber == 3 ? _("3rd") : _("%sth", deviceNumber))));
							deletedSymbolicLinksString += "\n" + views[destination.view].commonName + ": " + deviceNumberString + " " + _("Device") + " (" + views[destination.view].devices[destination.device].commonName + ")";
						});
						alert(_("The following devices were symbolic links of a device from the view you deleted. They were converted to normal devices:") + deletedSymbolicLinksString);
					}
					changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
					for(var i = _viewIndex; i < views.length; i++){
						var changedSymbolicLink = changeSymbolicLinks(i + 1, "*", i, "*", changedSymbolicLinks);
						changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
					}
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
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
			views.forEach(function(view){
				view.devices.forEach(function(device){
					device.states.forEach(function(state){
						if(state.state == "BACKGROUND_VIEW" && state.value == (adapter + "." + instance + ".Views." + oldVal)) state.value = (adapter + "." + instance + ".Views." + newVal);
					});
				});
			});
		}
		//Check for duplicates
		viewsCheckDuplicates();
		//Make table sortable
		$("#tableViews tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableViews tbody").sortable('disable');
				var sequence = [];
				$('#tableViews').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				var changedSymbolicLinks = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(views[sequence[i]]);
					if(i != sequence[i]) {
						for(deviceIndex in views[sequence[i]].devices){
							var changedSymbolicLink = changeSymbolicLinks(sequence[i], deviceIndex, i, deviceIndex, changedSymbolicLinks);
							changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
						}
					}
				}
				views = tableResorted;
				onChange();
				values2table('tableViews', views, onChange, onTableViewsReady);
				$("#tableViews tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
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

	//Enhance ViewsAutocreate with functions
	$('#viewsAutocreateButton').on('click', function () {
		initDialog('dialogViewsAutocreate', function(){ //save dialog
			if(!confirm(_("Create selected views?") + " " + _("This may take a few seconds."))) return;
			var enumerationMain = $('#dialogViewsAutocreateEnumerationMain').val();
			var viewsAutocreateResult = {views: [], toolbar: []};
			var iQontrolViewDevices = [];
			var masterView = false;
			var viewCount = 0;
			var deviceCount = 0;
			var toolbarCount = 0;
			$('.dialogViewsAutocreateEnumerationListItem').each(function(){
				var enumeration = $(this).data('enumeration');
				if($(this).prop('checked') || (enumeration == enumerationMain && $('#dialogViewsAutocreateCreateMasterView').prop('checked'))){
					var name = getEnumerationName(enumeration);
					var viewNames = [];
					views.forEach(function(view){ if(view.commonName) viewNames.push(view.commonName); });
					var existingNameIndex = 0;
					while(viewNames.indexOf(name + (existingNameIndex ? " " + existingNameIndex : "")) != -1) { existingNameIndex++; };
					if(existingNameIndex) name = name + " " + existingNameIndex;
					var view = {commonName: name, nativeBackgroundImage: './images/wallpaper/orangedrops.jpg', devices: []}
					if(enumerations[enumeration].common && enumerations[enumeration].common.members && typeof enumerations[enumeration].common.members.forEach == "function") enumerations[enumeration].common.members.forEach(function(member){
						if($('.dialogViewsAutocreateEnumerationListMemberItem[data-enumeration="' + enumeration + '"][data-member="' + member + '"]').prop('checked')){
							var result = deviceAutocreate(member, iobrokerObjects);
							if(result && result.resultObject) {
								view.devices.push(result.resultObject);
								deviceCount++;
							}
						}
					});
					if(view.devices.length || (enumeration == enumerationMain && $('#dialogViewsAutocreateCreateMasterView').prop('checked'))){
						if(enumeration == enumerationMain){
							masterView = viewsAutocreateResult.views.length;
							view.nativeBackgroundImage = './images/wallpaper/bakestone.jpg';
						}
						viewsAutocreateResult.views.push(view);
						viewCount++;
					}
					if(view.devices.length && enumeration != enumerationMain && $('#dialogViewsAutocreateCreateMasterView').prop('checked')) {
						iQontrolViewDevices.push({commonName: name, commonRole: "iQontrolView", nativeLinkedView: name, nativeBackgroundImage: './images/wallpaper/orangedrops.jpg'});
						deviceCount++;
					}
					if(enumeration == enumerationMain && $('#dialogViewsAutocreateCreateMasterViewToolbarEntry').prop('checked')){
						var icon = "bars";
						if(enumeration == "enum.rooms") icon = "grid";
						if(enumeration == "enum.functions") icon = "gear";
						viewsAutocreateResult.toolbar.push({commonName: name, nativeLinkedView: name, nativeIcon: icon});
						toolbarCount++;
					}
				}
			});
			if($('#dialogViewsAutocreateCreateMasterView').prop('checked') && masterView !== false){
				if(typeof viewsAutocreateResult.views[masterView].devices == udef) viewsAutocreateResult.views[masterView].devices = [];
				viewsAutocreateResult.views[masterView].devices = iQontrolViewDevices.concat(viewsAutocreateResult.views[masterView].devices);
			}
			if(confirm(_("Created %s devices in %s views", deviceCount, viewCount) + (toolbarCount ? " " + _("and a toolbar entry") : "") + ". " + _("Save these settings?"))){
				views = views.concat(viewsAutocreateResult.views);
				toolbar = toolbar.concat(viewsAutocreateResult.toolbar);
				loadViews();
			}
		});
		$('#dialogViewsAutocreateEnumerationMain').val("").select();
		$('#dialogViewsAutocreateEnumerationList').html(_("Please select an enumeration."));
		$('#dialogViewsAutocreate a.btn.chose').addClass('disabled');
		$('#dialogViewsAutocreateBtnSetProgress').hide();
		$('#dialogViewsAutocreate a.btn-set').addClass('disabled');
		$('#dialogViewsAutocreate').modal('open');
		$('#dialogViewsAutocreate').css('z-index', modalZIndexCount++);
	});
	$('#dialogViewsAutocreateEnumerationMain').on('change', function(){
		var enumerationMain = $('#dialogViewsAutocreateEnumerationMain').val();
		$('#dialogViewsAutocreateEnumerationList').empty();
		var listContent = "<ul class='collapsible'>";
		for(enumeration in enumerations){
			if(enumeration.indexOf(enumerationMain) == 0){
				var name = getEnumerationName(enumeration);
				var members = [];
				if(enumerations[enumeration].common && enumerations[enumeration].common.members && typeof enumerations[enumeration].common.members.forEach == "function"){
					members = enumerations[enumeration].common.members;
				};
				listContent += "<li>";
				listContent += "	<div class='collapsible-header'>";
				listContent += "		<label><input class='dialogViewsAutocreateEnumerationListItem' type='checkbox' checked='checked' data-enumeration='" + enumeration + "'><span>" + name + "</span></label>";
				if(members.length){
					listContent += "		<div style='position: relative; right: 20px; margin-left: auto; padding: 3px 10px; border-radius: 14px; background: lightgrey;'><span>" + members.length + " " + (members.length == 1 ? _("device") : _("devices")) + "</span></div>";
				}
				listContent += "	</div>";
				listContent += "	<div class='collapsible-body'>";
				if(members.length){
					listContent += "		<span>";
					members.forEach(function(member, index){
						listContent += "		<label><input class='dialogViewsAutocreateEnumerationListMemberItem' type='checkbox' checked='checked' data-enumeration='" + enumeration + "' data-member='" + member + "' data-member-index='" + index + "'><span style='height: auto;'>" + member + (iobrokerObjects && iobrokerObjects[member] && getCommonName(iobrokerObjects[member]) ? "&nbsp;<b>(" + getCommonName(iobrokerObjects[member]) + ")</b>" : "") + "</span></label><br>";
					});
					listContent += "		</span>";
				}
				listContent += "	</div>";
				listContent += "</li>";
			}
		};
		listContent += "</ul>";
		$('#dialogViewsAutocreateEnumerationList').html(listContent);
		$('.collapsible').collapsible();
		$('.dialogViewsAutocreateEnumerationListItem').off('change').on('change', function(e){
			$('.dialogViewsAutocreateEnumerationListMemberItem[data-enumeration="' + $(this).data('enumeration') + '"]').prop('checked', $(this).prop('checked'));
		});
		$('.dialogViewsAutocreateEnumerationListMemberItem').off('change').on('change', function(){
			if($(this).prop('checked')) $('.dialogViewsAutocreateEnumerationListItem[data-enumeration="' + $(this).data('enumeration') + '"]').prop('checked', true);
		});
		$('#dialogViewsAutocreate a.btn.chose').removeClass('disabled');
		$('#dialogViewsAutocreate a.btn-set').removeClass('disabled');
	});

	//++++++++++ DEVICES ++++++++++
	//Load Devices
	function loadDevices(){
		//Add Views to Selectbox for Views and for LinkedView
		var viewIds = [""];
		views.forEach(function(element){ viewIds.push(element.commonName); });
		$('*[data-name="nativeLinkedView"]').data("options", viewIds.join(";"));
		$('#devicesSelectedView').empty().append("<option disabled selected value>" + _("Select view") + "</option>");
		views.forEach(function(element, index){ $('#devicesSelectedView').append("<option value='" + index + "'>" + element.commonName + "</option>"); });
		$('#devicesSelectedView').select();
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
		var inbuiltWallpapersString = "";
		inbuiltWallpapers.forEach(function(wallpaper){
			if (wallpaper != "") {
				inbuiltWallpapersString += ";" + ("./images/wallpaper/" + wallpaper).replace(/\//g, "\\") + "/" + wallpaper.replace(/\//g, "\\");
			}
		});
		if (inbuiltWallpapers.length > 0){
			inbuiltWallpapersString = ";[" + _("Inbuilt Wallpapers") + ":]" + inbuiltWallpapersString;
		}
		var imagenames = [];
		imagesDirs.forEach(function(imagesDir){
			if(imagesDir.files && imagesDir.files.length > 0) imagenames.push("[" + imagesDir.dirnameBS + ":]");
			imagesDir.files.forEach(function(file){
				if(!(file.filenameBS.endsWith(".shtml") || file.filenameBS.endsWith(".ehtml") || file.filenameBS.endsWith(".shtm") || file.filenameBS.endsWith(".htm") || file.filenameBS.endsWith(".html")
					|| file.filenameBS.endsWith(".css")
					|| file.filenameBS.endsWith(".mjs") || file.filenameBS.endsWith(".js"))){
					imagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
				}
			});
		});
		if (imagenames.length > 0){
			imagenames.unshift(";[" + _("Images") + ":]");
		}
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
		enhanceTextInputToCombobox('#tableDevices input[data-name="nativeBackgroundImage"], #tableDevices input[data-name="nativeBackgroundImageActive"]', "/" + _("(None)") + progressbars + inbuiltWallpapersString + imagenames.join(";"), true);
		//Add role and symblic link info as span to commonName
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonName') {
				var deviceIndex = $(this).data('index');
				if(typeof views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom == "object" && typeof views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView != udef && views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView !== "" && typeof views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice != udef && views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice !== ""){ //Symbolic link
					$(this).next('span').remove();
					var deviceNumber = parseInt(views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice) + 1;
					//1st 2nd 3rd 4th...
					var deviceNumberString = (deviceNumber == 1 ? _("1st") : (deviceNumber == 2 ? _("2nd") : (deviceNumber == 3 ? _("3rd") : _("%sth", deviceNumber))));
					$(this).after('<span style="font-size:x-small; color: blue;">' + _('Linked from view') + ' ' + views[views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView].commonName + ', ' + deviceNumberString  + ' ' + _('device') + ' ' + ' (' + views[views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView].devices[views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice].commonName + ')</span>');
				} else { //Normal device
					if (views[devicesSelectedView].devices[deviceIndex].commonRole){
						$(this).next('span').remove();
						$(this).after('<span style="font-size:x-small;">' + _(iQontrolRoles[views[devicesSelectedView].devices[deviceIndex].commonRole] && iQontrolRoles[views[devicesSelectedView].devices[deviceIndex].commonRole].name || "") + '</span>');
					} else {
						$(this).next('span').remove();
						$(this).after('<span style="font-size:x-small; color: red;">' + _('Please assign a role in device settings') + '</span>');
					}
				}
				$(this).on('change', function(){ //Check for changes for Symbolic link
					var _viewIndex = devicesSelectedView;
					var _deviceIndex = $(this).data('index');
					var destinations = checkSymbolicLinks(_viewIndex, _deviceIndex);
					if(destinations.length > 0) {
						var destinationInThisView = false;
						destinations.forEach(function(destination){
							if(destination.view == _viewIndex) {
								destinationInThisView = true;
							}
						});
						if(destinationInThisView) values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
					}
				});
			}
		});
		//Add padding to checkbox
		$lines.find('input[type=checkbox]').parent('td').css('padding','15px 0px 0px 10px');
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit Device
			if (command === 'edit') {
				var deviceIndex = $(this).data('index');
				if(views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom){ //Symbolic link
					$(this).addClass('dark grey').find('i').html('content_copy');
					$(this).on('click', function () {
						var _viewIndex = devicesSelectedView;
						var _deviceIndex = $(this).data('index');
						var result = confirm(_("Convert symbolic link to real device?"));
						if(result){
							delete views[_viewIndex].devices[_deviceIndex].symbolicLinkFrom;
							values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
						}
					});
				} else { //Normal device
					$(this).on('click', function () {
						var _viewIndex = devicesSelectedView;
						var _deviceIndex = $(this).data('index');
						initDialog('dialogDeviceEdit', function(){ //save dialog
							var _viewIndex =   $('#dialogDeviceEditViewIndex').val();
							var _deviceIndex = $('#dialogDeviceEditDeviceIndex').val();
							views[_viewIndex].devices[_deviceIndex].commonRole = $('#dialogDeviceEditCommonRole').val();
							$('.colorpicker-element').trigger('blur');
							views[_viewIndex].devices[_deviceIndex].states = dialogDeviceEditStatesTable;
							dialogDeviceEditOptions = [];
							$('.dialogDeviceEditOption').each(function(){ //save the options entrys
								var option = $(this).data('option');
								var type = $(this).data('type');
								if (type == "checkbox") var value = $(this).prop('checked').toString(); else var value = $(this).val();
								var entry = {option: option, type: type, value: value};
								dialogDeviceEditOptions.push(entry);
							});
							views[_viewIndex].devices[_deviceIndex].options = dialogDeviceEditOptions;
							updateSymbolicLinks();
							onTableDevicesReady();
						});
						$('#dialogDeviceEditCommonName').html(views[_viewIndex].devices[_deviceIndex].commonName || "");
						$('#dialogDeviceEditViewIndex').val(_viewIndex);
						$('#dialogDeviceEditDeviceIndex').val(_deviceIndex);
						dialogDeviceEditStates = views[_viewIndex].devices[_deviceIndex].states || [];
						dialogDeviceEditStatesTable = [];
						dialogDeviceEditOptions = JSON.parse(JSON.stringify(views[_viewIndex].devices[_deviceIndex].options || []));
						$('#dialogDeviceEditOptionsContent').empty();
						if(views[_viewIndex].devices[_deviceIndex].commonRole) {
							$('#dialogDeviceEditCommonRole').val(views[_viewIndex].devices[_deviceIndex].commonRole).trigger('change');
						} else {
							$('#dialogDeviceEditCommonRole').val(-1).trigger('change');
						}
						$('#dialogDeviceEditCommonRole').select();
						$('#dialogDeviceEdit').modal('open');
						$('#dialogDeviceEdit').css('z-index', modalZIndexCount++);

					});
				}
			}
			//Delete
			if (command === 'delete') {
				$(this).on('click', function (event) {
					var _viewIndex = devicesSelectedView;
					var _deviceIndex = $(this).data('index');
					var changedSymbolicLinks = changeSymbolicLinks(_viewIndex, _deviceIndex, null, null);
					if(changedSymbolicLinks.length > 0) {
						var deletedSymbolicLinksString = "";
						changedSymbolicLinks.forEach(function(destination){
							var deviceNumber = parseInt(destination.device) + 1;
							//1st 2nd 3rd 4th...
							var deviceNumberString = (deviceNumber == 1 ? _("1st") : (deviceNumber == 2 ? _("2nd") : (deviceNumber == 3 ? _("3rd") : _("%sth", deviceNumber))));
							deletedSymbolicLinksString += "\n" + views[destination.view].commonName + ": " + deviceNumberString + " " + _("Device") + " (" + views[destination.view].devices[destination.device].commonName + ")";
						});
						alert(_("The following devices were symbolic links of the device you deleted. They were converted to normal devices:") + deletedSymbolicLinksString);
					}
					for(var i = _deviceIndex; i < views[_viewIndex].devices.length; i++){
						var changedSymbolicLink = changeSymbolicLinks(_viewIndex, i + 1, _viewIndex, i, changedSymbolicLinks);
						changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
					}
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
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
				var changedSymbolicLinks = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(views[devicesSelectedView].devices[sequence[i]]);
					if(i != sequence[i]) {
						var changedSymbolicLink = changeSymbolicLinks(devicesSelectedView, sequence[i], devicesSelectedView, i, changedSymbolicLinks);
						changedSymbolicLinks = changedSymbolicLinks.concat(changedSymbolicLink);
					}
				}
				views[devicesSelectedView].devices = tableResorted;
				onChange();
				values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
				$("#tableDevices tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
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
					if(entry == "VALVE_STATES" || entry == "INFO_A" || entry == "INFO_B"  || entry == "ADDITIONAL_CONTROLS" || entry == "ADDITIONAL_INFO" || entry == "REMOTE_CHANNELS" || entry == "REMOTE_ADDITIONAL_BUTTONS"){
						commonRole = "array";
						var valueObj = tryParseJSON(value);
						if(Array.isArray(valueObj) == false) { //For backward-compatibility -> transfer old object-style to new array-style
							var valueArray = [];
							for(name in valueObj){
								valueArray.push({'name':name, 'commonRole':'linkedState', 'value':valueObj[name]});
							}
							value = JSON.stringify(valueArray);
						}
					} else if(entry == "SET_VALUE"  || entry == "OFF_SET_VALUE"  ||  entry == "UP_SET_VALUE" ||  entry == "STOP_SET_VALUE"  || entry == "DOWN_SET_VALUE"  || entry == "FAVORITE_POSITION_SET_VALUE"  || entry == "URL" || entry == "HTML" || entry == "BACKGROUND_VIEW" || entry == "BACKGROUND_URL" || entry == "BACKGROUND_HTML" || entry == "BADGE_COLOR" || entry == "OVERLAY_INACTIVE_COLOR" || entry == "OVERLAY_ACTIVE_COLOR" || entry == "GLOW_INACTIVE_COLOR"|| entry == "GLOW_ACTIVE_COLOR"){
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
		//Build options content
		dialogDeviceEditOptionsBuildOptionsContent();
	});
	function dialogDeviceEditOptionsBuildOptionsContent(){
		if(dialogDeviceEditCommonRole){
			var dialogDeviceEditOptionsComboboxes = [];
			var dialogDeviceEditOptionsContent = "<ul class='collapsible' id='dialogDeviceEditOptionsContentCollapsible'>";
			var dialogDeviceEditOptionsContentCollapsibleOpen = false;
			for (entry in iQontrolRoles[dialogDeviceEditCommonRole].options){ //push all corresponding options for the selected role into the table
				var name = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].name;
				var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
				var value = (dialogDeviceEditOptions.find(function(element){ return element.option == entry;}) || {}).value || iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default || "";
				switch(type){
					case "section":
					if (dialogDeviceEditOptionsContentCollapsibleOpen) {
						dialogDeviceEditOptionsContent += "</div>";
						dialogDeviceEditOptionsContent += "</li>";
					}
					dialogDeviceEditOptionsContentCollapsibleOpen = true;
					dialogDeviceEditOptionsContent += "<li>";
					dialogDeviceEditOptionsContent += "<div class='collapsible-header'>";
					dialogDeviceEditOptionsContent += "		<i class='material-icons'>expand_more</i><h6 class='translate'>" + _(name) + ":</h6>";
					dialogDeviceEditOptionsContent += "</div>";
					dialogDeviceEditOptionsContent += "<div class='collapsible-body'>";
					break;

					case "number":
					var min = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].min || 0;
					var max = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].max || 100;
					var step = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].step || 1;
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <input class='value dialogDeviceEditOption validate validateOnlyError' data-option='" + entry + "' data-type='number' type='number' min='" + min + "' max='" + max + "' step='" + step + "' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "    <span class='helper-text' data-error='" + min + " - " + max + "' data-success=''></span>";
					dialogDeviceEditOptionsContent += "</div>";
					break;

					case "select": case "multipleSelect":
					var selectOptionsString = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].selectOptions;
					var selectOptions = selectOptionsString.split(';');
					var selectOptionsContent = "";
					selectOptions.forEach(function(option){
						var parts = option.split('/');
						if (parts.length < 2) parts.push(parts[0]);
						selectOptionsContent += "        <option value='" + parts[0] + "' " + (type == "multipleSelect" ? ((value.indexOf(parts[0]) > -1)?'selected':'') : ((parts[0] == value)?'selected':'') ) + " class='translate'>" + _(parts[1] || parts[0]) + "</option>";
					});
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <select" + (type == "multipleSelect" ? " multiple" : "") + " class='value dialogDeviceEditOption' data-option='" + entry + "' data-type='select' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'>" + selectOptionsContent + "</select>";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'></label>";
					dialogDeviceEditOptionsContent += "    <span class='translate'>" + _(name) + "</span>";
					dialogDeviceEditOptionsContent += "</div>";
					break;
					
					case "combobox":
					var options = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].selectOptions;
					var iconsFromOption = (typeof iQontrolRoles[dialogDeviceEditCommonRole].options[entry].iconsFromOption != udef ? iQontrolRoles[dialogDeviceEditCommonRole].options[entry].iconsFromOption : false)
					dialogDeviceEditOptionsComboboxes.push({id: 'dialogDeviceEditOption_' + entry, options: options, iconsFromOption: iconsFromOption});
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <input class='value dialogDeviceEditOption' data-option='" + entry + "' data-type='combobox' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' placeholder='' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
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


					case "color":
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <input class='value MaterializeColorPicker validate validateOnlyError dialogDeviceEditOption' data-option='" + entry + "' data-type='color' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' placeholder='rgb(0,0,0)' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "    <span class='helper-text'></span>";
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
					//Inbuilt Icons
					options += ";[" + _("Inbuilt Icons") + ":]";
					inbuiltIcons.forEach(function(inbuiltIcon){
						if (inbuiltIcon != "") {
							options += ";" + ("./images/icons/" + inbuiltIcon).replace(/\//g, "\\") + "/" + inbuiltIcon.replace(/\//g, "\\");
						}
					});
					//User Icons
					var imagenames = [];
					imagesDirs.forEach(function(imagesDir){
						if(imagesDir.dirname.indexOf("/usericons") == 0 && imagesDir.files && imagesDir.files.length > 0){
							imagenames.push("[" + imagesDir.dirnameBS + ":]");
							imagesDir.files.forEach(function(file){
								 imagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
							});
						}
					});
					if (imagenames.length > 0){
						options += ";[" + _("User Icons") + ":]";
						imagenames.forEach(function(option){
							options += ";" + option;
						});
					}
					//Icons Combobox
					dialogDeviceEditOptionsComboboxes.push({id: 'dialogDeviceEditOption_' + entry, options: options});
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <input class='value dialogDeviceEditOption icon' data-option='" + entry + "' data-type='icon' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' placeholder='" + _("(Default)") + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "</div>";
					break;
					
					case "datapoint":
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m12 l12'>";
					dialogDeviceEditOptionsContent += "    <input class='value dialogDeviceEditOption' data-option='" + entry + "' data-type='text' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "	<a class='dialogDeviceEditOptionButton inputEdit waves-effect waves-light btn-small btn-floating' data-selectidfor='dialogDeviceEditOption_" + entry + "'><i class='material-icons'>edit</i></a>";
					dialogDeviceEditOptionsContent += "</div>";
					break;

					case "text": default:
					dialogDeviceEditOptionsContent += "<div class='input-field col s12 m6 l6'>";
					dialogDeviceEditOptionsContent += "    <input class='value dialogDeviceEditOption' data-option='" + entry + "' data-type='text' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "</div>";
					break;
				}
			}
			if(dialogDeviceEditOptionsContent == ""){
				$('#dialogDeviceEditOptionsContent').html("<br><p>"+ _("This role has no options.") + "</p>");
			} else {
				if (dialogDeviceEditOptionsContentCollapsibleOpen) {
					dialogDeviceEditOptionsContent += "</div>";
					dialogDeviceEditOptionsContent += "</li>";
				}
				$('#dialogDeviceEditOptionsContent').html(dialogDeviceEditOptionsContent);
				$('#dialogDeviceEditOptionsContentCollapsible').collapsible({accordion: false});
				$('#dialogDeviceEditOptionsContentCollapsibleOpenAll').off('click').on('click', function(){
					$('#dialogDeviceEditOptionsContentCollapsible').collapsible('open');
					$('#dialogDeviceEditOptionsContentCollapsible li').addClass('active');
				});
				$('#dialogDeviceEditOptionsContentCollapsibleCloseAll').off('click').on('click', function(){
					$('#dialogDeviceEditOptionsContentCollapsible li').addClass('active');
					$('#dialogDeviceEditOptionsContentCollapsible').collapsible('close');
					$('#dialogDeviceEditOptionsContentCollapsible li').removeClass('active');
				});
			}
			$('select.dialogDeviceEditOption').select();
			dialogDeviceEditOptionsComboboxes.forEach(function(entry){
				enhanceTextInputToCombobox('#' + entry.id, entry.options, (typeof entry.iconsFromOption != udef ? entry.iconsFromOption : true), entry.onSelect);
			});
			$('.dialogDeviceEditOptionButton.inputEdit').off('click').on('click', function(){
				$('#dialogSelectId').data('selectidfor', $(this).data('selectidfor'));
				initSelectId(function (sid) {
					sid.selectId('show', $('#' + $('#dialogSelectId').data('selectidfor')).val(), {type: 'state'}, function (newId) {
						if (newId) {
							$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
						}
					});
				});									
			})
			initColorpickers(onChange);
			if (M) M.updateTextFields();
		}
	}

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
				if ($(this).val() == "INFO_A") $(this).after('<span style="font-size:x-small;">Array: [{name: "Name1", commonRole: "LinkedState", value: "ID1", icon: "url"}, ...]</span>');
				if ($(this).val() == "INFO_B") $(this).after('<span style="font-size:x-small;">Array: [{name: "Name1", commonRole: "LinkedState", value: "ID1", icon: "url"}, ...]</span>');
				if ($(this).val() == "ADDITIONAL_CONTROLS") $(this).after('<span style="font-size:x-small;">Array: [{name: "Name1", commonRole: "LinkedState", value: "ID1", role: "SLIDER"}, ...]</span>');
				if ($(this).val() == "ADDITIONAL_INFO") $(this).after('<span style="font-size:x-small;">Array: [{name: "Name1", commonRole: "LinkedState", value: "ID1"}, ...]</span>');
				if ($(this).val() == "REMOTE_CHANNELS") $(this).after('<span style="font-size:x-small;">Array: [{name: "Button1", commonRole: "LinkedState", value: "ID1"}, ...]</span>');
				if ($(this).val() == "REMOTE_ADDITIONAL_BUTTONS") $(this).after('<span style="font-size:x-small;">Array: [{name: "Button1", commonRole: "LinkedState", value: "ID1"}, ...]</span>');
			}
			if (name === 'value') {
				var stateIndex = $(this).data('index');
				$(this).prop('id', 'tableDialogDeviceEditStatesValue_' + stateIndex);
				$(this).on('input change', function(){tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);});
				if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') $(this).prop('readonly', true);
			}
		});
		//Add widgets and websites to Selectbox for URL and BACKGROUND_URL  AND  Add views to Selectbox for BACKGROUND_VIEW
		//1.Discover Widgets
		var inbuiltWidgetsString = "";
		inbuiltWidgets.forEach(function(widget){
			if (widget && typeof widget.filename != udef) {
				inbuiltWidgetsString += ";" + ("./images/widgets/" + widget.filename).replace(/\//g, "\\") + "/" + (widget.name || widget.filename).replace(/\//g, "\\") + "/" + (link + ("/images/widgets/" + widget.icon || "/images/icons/file_html.png")).replace(/\//g, "\\");
			}
		});
		if (inbuiltWidgets.length > 0){
			inbuiltWidgetsString = ";[" + _("Inbuilt Widgets") + ":]" + inbuiltWidgetsString;
		}
		var websitenames = [];
		imagesDirs.forEach(function(imagesDir){
			if(imagesDir.dirname.indexOf("/userwidgets") == 0 && imagesDir.files && imagesDir.files.length > 0){
				var websitenamesInThisDir = [];
				imagesDir.files.forEach(function(file){
					var filename = file.filename || "";
					if(filename.endsWith(".shtml") || filename.endsWith(".ehtml") || filename.endsWith(".shtm") || filename.endsWith(".htm") || filename.endsWith(".html")){
						var iconIndex = images.findIndex(function(element){ return (element.filename == file.filename.substring(0, file.filename.length - 5) + ".png"); });
						if(iconIndex > -1) var icon = link + "/.." + userfilesImagePath + images[iconIndex].filename; else var icon = link + "/images/icons/file_html.png";
						websitenamesInThisDir.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS + "/" + icon.replace(/\//g, "\\"));
					}
				});
				if(websitenamesInThisDir.length > 0){
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
		//3.Add both
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'value') {
				var stateIndex = $(this).data('index');
				if(dialogDeviceEditStatesTable[stateIndex].state == 'URL' || dialogDeviceEditStatesTable[stateIndex].state == 'BACKGROUND_URL'){
					enhanceTextInputToCombobox("#" + this.id, "/" + _("(None)") + inbuiltWidgetsString + websitenames.join(";"), true, dialogDeviceEditStatesWidgetSelected);
				} else if(dialogDeviceEditStatesTable[stateIndex].state == 'BACKGROUND_VIEW') {
					enhanceTextInputToCombobox("#" + this.id, "/;" + viewIds.join(";"), false, function(value){
						if(value && value != "" && !$(".dialogDeviceEditOption[data-option='backgroundURLAllowPostMessage']").prop('checked')){
							if(confirm("Its recommended to allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML. Enable this option now?")){
								$(".dialogDeviceEditOption[data-option='backgroundURLAllowPostMessage']").prop('checked', 'checked');
								dialogDeviceEditOptionsBuildOptionsContent();
							}
						}
					});
				}
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
					$(this).on('input change', function(){
						tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);
						(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
							//Show or hide selectboxes
							var _stateIndex = stateIndex;
							if(dialogDeviceEditStatesTable[stateIndex].commonRole == 'const'){
								$("#tableDialogDeviceEditStatesValue_" + _stateIndex).next("a").prop('style','');
							} else {
								$("#tableDialogDeviceEditStatesValue_" + _stateIndex).next("a").prop('style','display: none !important;');
							}
							if(dialogDeviceEditStatesTable[stateIndex].state == "BADGE_COLOR" || dialogDeviceEditStatesTable[stateIndex].state == "OVERLAY_INACTIVE_COLOR" || dialogDeviceEditStatesTable[stateIndex].state == "OVERLAY_ACTIVE_COLOR" || dialogDeviceEditStatesTable[stateIndex].state == "GLOW_INACTIVE_COLOR" || dialogDeviceEditStatesTable[stateIndex].state == "GLOW_ACTIVE_COLOR"){ //COLOR - init ColorPicker
								var $targetInput = $('#tableDialogDeviceEditStatesValue_' + _stateIndex);
								if(dialogDeviceEditStatesTable[stateIndex].commonRole == 'const'){
									var oldVal = $targetInput.val();
									if(!$targetInput.data('materialize-color-picker-initialized')){
										$targetInput.colorpicker().on('changeColor', function(event){
											if(event.color) $(this).css('border-right', '10px solid rgba(' + event.color.toRGB().r + ', ' + event.color.toRGB().g + ', ' + event.color.toRGB().b + ', ' + event.color.toRGB().a + ')');
										});
										if(oldVal == "") $targetInput.val("");
										$targetInput.on('change', function(){
											if ($(this).val() == "") {
												$(this).css('border-right', '0px solid black');
											} else {
												$(this).trigger('changeColor');
											}
										});
										$targetInput.on('blur', function(){
											dialogDeviceEditStatesTable[$targetInput.data('index')].value = $(this).val();
											console.log("Saved color-picker value " + $(this).val());
										});
										$targetInput.data('materialize-color-picker-initialized', true);
									}
									if(isValidColorString(oldVal)){
										$targetInput.trigger('change');
									}
								} else {
									if($targetInput.data('materialize-color-picker-initialized')){
										$targetInput.colorpicker('destroy');
										$targetInput.data('materialize-color-picker-initialized', false);
									}
									$targetInput.css('border-right', '0px solid black');
								}
							}
						})(); //<--End Closure
					}).trigger('change');
				}
			}
			$(this).select();
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit (SelectId, Edit Text or Edit Array)
			if (command === 'edit') {
				$(this).on('click', function () {
					var stateIndex = $(this).data('index');
					var stateValue = (dialogDeviceEditStatesTable[stateIndex].value || "").replace(/\\n/g, '\n');
					if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const') { //const
						if((dialogDeviceEditStatesTable[stateIndex].state == "URL" || dialogDeviceEditStatesTable[stateIndex].state == "BACKGROUND_URL")
						&& (stateValue.indexOf("./images/widgets/") == 0 || stateValue.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0)){ //const - WIDGET - open Widget dialog
							var filename = null;
							var path = null;
							if(stateValue.indexOf("./images/widgets/") == 0){
								filename = stateValue.substr(8);
								path = imagePath;
							}
							if(stateValue.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0){
								filename = stateValue.substr(29);
								path = userfilesImagePath;
							}
							if(filename && path){
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									getWidgetSettings(filename, path, function(result){
										var _stateIndex = stateIndex;
										var _stateValue = stateValue;
										if(result.urlParameters.length) {
											var urlParameterString = "?" + result.urlParameters.join('&');
											$('#tableDialogDeviceEditStatesValue_' + stateIndex).val(_stateValue.split('?')[0] + urlParameterString).trigger('change');
										}
										for(option in result.options){
											if(iQontrolRoles["iQontrolWidget"].options[option]){
												var optionsIndex = dialogDeviceEditOptions.findIndex(function(element){ return (element.option == option); });
												if (optionsIndex != -1) {
													dialogDeviceEditOptions[optionsIndex].value = result.options[option];
												} else {
													var entry = {option: option, value: result.options[option]};
													dialogDeviceEditOptions.push(entry);
												}
											}
										};
										dialogDeviceEditOptionsBuildOptionsContent();
									});
								})(); //<--End Closure
							}
						} else if(dialogDeviceEditStatesTable[stateIndex].state == "BADGE_COLOR" || dialogDeviceEditStatesTable[stateIndex].state == "OVERLAY_INACTIVE_COLOR" || dialogDeviceEditStatesTable[stateIndex].state == "OVERLAY_ACTIVE_COLOR" || dialogDeviceEditStatesTable[stateIndex].state == "GLOW_INACTIVE_COLOR" || dialogDeviceEditStatesTable[stateIndex].state == "GLOW_ACTIVE_COLOR"){ //const - COLOR - open Colorpicker
							var $targetInput = $('#tableDialogDeviceEditStatesValue_' + stateIndex);
							if($targetInput.data('materialize-color-picker-initialized')){
								$targetInput.colorpicker('show');
							}
						} else { //const TEXT - open editText dialog
							initDialog('dialogDeviceEditStateConstant', function(){ //save dialog
								var stateIndex = $('#dialogDeviceEditStateConstantIndex').val();
								$('#tableDialogDeviceEditStatesValue_' + stateIndex).val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n')).trigger('change');
							});
							$('#dialogDeviceEditStateConstantName').html(dialogDeviceEditStatesTable[stateIndex].state || "");
							$('#dialogDeviceEditStateConstantIndex').val(stateIndex);
							$('#dialogDeviceEditStateConstantTextarea').val((dialogDeviceEditStatesTable[stateIndex].value || "").replace(/\\n/g, '\n'));
							$('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
							$('#dialogDeviceEditStateConstant').modal('open');
							$('#dialogDeviceEditStateConstant').css('z-index', modalZIndexCount++);
						}
					} else if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'array') { //array - open editArray dialog
						initDialog('dialogDeviceEditStateArray', function(){ //save dialog
							var stateIndex =   $('#dialogDeviceEditStateArrayIndex').val();
							$('#tableDialogDeviceEditStatesValue_' + stateIndex).val(JSON.stringify(dialogDeviceEditStateArrayTable)).trigger('change');
						});
						$('#dialogDeviceEditStateArrayName').html(dialogDeviceEditStatesTable[stateIndex].state || "");
						var showAdditionalCols = "";
						if(dialogDeviceEditStatesTable[stateIndex].state == "VALVE_STATES") showAdditionalCols = "";
						if(dialogDeviceEditStatesTable[stateIndex].state == "INFO_A") showAdditionalCols = "icon";
						if(dialogDeviceEditStatesTable[stateIndex].state == "INFO_B") showAdditionalCols = "icon";
						if(dialogDeviceEditStatesTable[stateIndex].state == "ADDITIONAL_CONTROLS") showAdditionalCols = "icon role caption heading";
						if(dialogDeviceEditStatesTable[stateIndex].state == "ADDITIONAL_INFO") showAdditionalCols = "";
						if(dialogDeviceEditStatesTable[stateIndex].state == "REMOTE_CHANNELS") showAdditionalCols = "hideName icon";
						if(dialogDeviceEditStatesTable[stateIndex].state == "REMOTE_ADDITIONAL_BUTTONS") showAdditionalCols = "hideName icon";
						$('#dialogDeviceEditStateArrayIndex').val(stateIndex);
						$('#dialogDeviceEditStateArrayShowAdditionalCols').val(showAdditionalCols);
						dialogDeviceEditStateArrayTable = tryParseJSON(dialogDeviceEditStatesTable[stateIndex].value) || [];
						values2table('tableDialogDeviceEditStateArray', dialogDeviceEditStateArrayTable, onChange, ontableDialogDeviceEditStateArrayReady);
						$('#dialogDeviceEditStateArray').modal('open');
						$('#dialogDeviceEditStateArray').css('z-index', modalZIndexCount++);
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
	function dialogDeviceEditStatesWidgetSelected(value){
		var filename = null;
		var path = null;
		if(value.indexOf("./images/widgets/") == 0){
			filename = value.substr(8);
			path = imagePath;
		}
		if(value.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0){
			filename = value.substr(29);
			path = userfilesImagePath;
		}
		if(filename && path){
			getWidgetSettings(filename, path, function(result){
				if(result.urlParameters.length) {
					var urlParameterString = "?" + result.urlParameters.join('&');
					$enhanceTextInputToComboboxActualTarget.val($enhanceTextInputToComboboxActualTarget.val() + urlParameterString).trigger('change');
				}
				for(option in result.options){
					if(iQontrolRoles["iQontrolWidget"].options[option]){
						var optionsIndex = dialogDeviceEditOptions.findIndex(function(element){ return (element.option == option); });
						if (optionsIndex != -1) {
							dialogDeviceEditOptions[optionsIndex].value = result.options[option];
						} else {
							var entry = {option: option, value: result.options[option]};
							dialogDeviceEditOptions.push(entry);
						}
					}
				};
				dialogDeviceEditOptionsBuildOptionsContent();
			});
		}
	}

	//Enhance TableDialogDeviceEditStateArrayReady
	function ontableDialogDeviceEditStateArrayReady(){
		var $div = $('#tableDialogDeviceEditStateArray');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		var showAdditionalCols = $('#dialogDeviceEditStateArrayShowAdditionalCols').val();
		//Hide Heading / Type / Icon / Role
		$table.find('th[data-name]').each(function () {
			$(this).show(0);
			var name = $(this).data('name');
			if (name === 'commonRole' && showAdditionalCols.indexOf('commonRole') == -1) {
				$(this).hide(0);
			} else if (name === 'icon' && showAdditionalCols.indexOf('icon') == -1) {
				$(this).hide(0);
			} else if (name === 'role' && showAdditionalCols.indexOf('role') == -1) {
				$(this).hide(0);
			} else if (name === 'caption' && showAdditionalCols.indexOf('caption') == -1) {
				$(this).hide(0);
			} else if (name === 'heading' && showAdditionalCols.indexOf('heading') == -1) {
				$(this).hide(0);
			} else if (name === 'hideName' && showAdditionalCols.indexOf('hideName') == -1) {
				$(this).hide(0);
			}
		});
		if(showAdditionalCols.indexOf('heading') == -1) $('.dialogDeviceEditStateArrayInfoHeading').hide(); else $('.dialogDeviceEditStateArrayInfoHeading').show();
		$lines.find('.values-input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonRole' && showAdditionalCols.indexOf('commonRole') == -1) {
				$(this).parents('td').hide(0);
			} else if (name === 'icon' && showAdditionalCols.indexOf('icon') == -1) {
				$(this).parents('td').hide(0);
			} else if (name === 'role' && showAdditionalCols.indexOf('role') == -1) {
				$(this).parents('td').hide(0);
			} else if (name === 'caption' && showAdditionalCols.indexOf('caption') == -1) {
				$(this).parents('td').hide(0);
			} else if (name === 'heading' && showAdditionalCols.indexOf('heading') == -1) {
				$(this).parents('td').hide(0);
			} else if (name === 'hideName' && showAdditionalCols.indexOf('hideName') == -1) {
				$(this).parents('td').hide(0);
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
		//Add images to Selectbox for Icons (Symbols)
		if (showAdditionalCols.indexOf('icon') != -1) {
			var inbuiltSymbolsString = "";
			inbuiltSymbols.forEach(function(symbol){
				if (symbol != "") {
					inbuiltSymbolsString += ";" + ("./images/symbols/" + symbol).replace(/\//g, "\\") + "/" + symbol.replace(/\//g, "\\");
				}
			});
			if (inbuiltSymbols.length > 0){
				inbuiltSymbolsString = ";[" + _("Inbuilt Symbols") + ":]" + inbuiltSymbolsString;
			}
			var imagenames = [];
			imagesDirs.forEach(function(imagesDir){
				if(imagesDir.dirname.indexOf("/usersymbols") == 0 && imagesDir.files && imagesDir.files.length > 0){
					imagenames.push("[" + imagesDir.dirnameBS + ":]");
					imagesDir.files.forEach(function(file){
						 imagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
					});
				}
			});
			if (imagenames.length > 0){
				imagenames.unshift(";[" + _("User Symbols") + ":]");
			}
			enhanceTextInputToCombobox('#tableDialogDeviceEditStateArray input[data-name="icon"]', "/" + _("(Default)") + "/" + (link + "/images/icons/blank.png").replace(/\//g, "\\") + inbuiltSymbolsString + imagenames.join(";"), true);
		}
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
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
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
			handle: "a[data-command='drag_handle']"
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
		$('#dialogDeviceAutocreate a.btn-set').addClass('disabled');
		$('#dialogDeviceAutocreate').modal('open');
		$('#dialogDeviceAutocreate').css('z-index', modalZIndexCount++);
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
			//Get unmatchedChildStates to match states, that were not assigned by ChannelDetector
			var unmatchedChildStates = [];
			for(id in objects){
				if(id.indexOf(sourceId) == 0 && objects[id].type == 'state' && Object.values(resultStatesObj).indexOf(id) == -1) {
					unmatchedChildStates.push(id);
				}
			}
			unmatchedChildStates.sort().reverse(); //reverse order, so that the top channel of multi-channel-devices wins
			for(i = 0; i < unmatchedChildStates.length; i++){ //Try to match unmatchedChildStates
				var id = unmatchedChildStates[i];
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
	var dialogDeviceCopyFromSourceView;
	var dialogDeviceCopyFromSourceDevice;
	$('#devicesCopyFromButton').on('click', function () {
		initDialog('dialogDeviceCopyFrom', function(){ //save dialog
			var sourceView =   $('#dialogDeviceCopyFromSourceView').val();
			var sourceDevice = $('#dialogDeviceCopyFromSourceDevice').val();
			var length = views[$('#devicesSelectedView').val()].devices.push(Object.assign({}, views[sourceView].devices[sourceDevice])); //Object.assign creates new object, not just a reference
			if($("#dialogDeviceCopyFromCreateSymbolicLink").prop('checked')){ //Symbolic link
				views[$('#devicesSelectedView').val()].devices[length - 1].symbolicLinkFrom = {sourceView: sourceView, sourceDevice: sourceDevice};
			}
			values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
		});
		$('#dialogDeviceCopyFrom a.btn-set').addClass('disabled');
		dialogDeviceCopyFromSourceView = $('#dialogDeviceCopyFromSourceView').val();
		dialogDeviceCopyFromSourceDevice = $('#dialogDeviceCopyFromSourceDevice').val();
		$('#dialogDeviceCopyFromSourceView').empty().append("<option disabled selected value>" + _("Select view") + "</option>");
		views.forEach(function(element, index){ $('#dialogDeviceCopyFromSourceView').append("<option value='" + index + "'>" + element.commonName + "</option>"); });
		$('#dialogDeviceCopyFromSourceDevice').empty().append("<option disabled selected value>" + _("Select device") + "</option>");
		if(dialogDeviceCopyFromSourceView){
			$('#dialogDeviceCopyFromSourceView').val(dialogDeviceCopyFromSourceView).trigger('change');
			if(dialogDeviceCopyFromSourceDevice) {
				$('#dialogDeviceCopyFromSourceDevice').val(dialogDeviceCopyFromSourceDevice).trigger('change');
			}
		}
		$('#dialogDeviceCopyFromSourceView').select();
		$('#dialogDeviceCopyFromSourceDevice').select();
		$('#dialogDeviceCopyFromDestinationView').html(views[devicesSelectedView].commonName);
		$('#dialogDeviceCopyFrom').modal('open');
		$('#dialogDeviceCopyFrom').css('z-index', modalZIndexCount++);
	});
	$('#dialogDeviceCopyFromSourceView').on('change', function(){
		$('#dialogDeviceCopyFromSourceDevice').empty().append("<option disabled selected value>" + _("Select device") + "</option>");
		views[$('#dialogDeviceCopyFromSourceView').val()].devices.forEach(function(element, index){ $('#dialogDeviceCopyFromSourceDevice').append("<option value='" + index + "'>" + element.commonName + "</option>"); });
		$('#dialogDeviceCopyFromSourceDevice').select();
		$('#dialogDeviceCopyFrom a.btn-set').addClass('disabled')
	});
	$('#dialogDeviceCopyFromSourceDevice').on('change', function(){
		if($('#dialogDeviceCopyFromSourceDevice').val()){
			$('#dialogDeviceCopyFrom a.btn-set').removeClass('disabled')
		} else {
			$('#dialogDeviceCopyFrom a.btn-set').addClass('disabled')
		}
	});

	//Enhance AutocreateWidget with functions
	var dialogDevicesAutocreateWidgetOptions;
	var dialogDevicesAutocreateWidgetUrlParameters = "";
	$('#devicesAutocreateWidgetButton').on('click', function () {
		initDialog('dialogDevicesAutocreateWidget', function(){ //save dialog
			var filenamePlain = $('#dialogDevicesAutocreateWidgetSource').val();
			filenamePlain = filenamePlain.slice(filenamePlain.lastIndexOf('/') + 1, filenamePlain.lastIndexOf('.'));
			filenamePlain = filenamePlain.charAt(0).toUpperCase() + filenamePlain.slice(1);
			views[$('#devicesSelectedView').val()].devices.push({
				commonName: $('#dialogDevicesAutocreateWidgetName').val() || filenamePlain || "Widget",
				commonRole: "iQontrolWidget",
				nativeBackgroundImage: "",
				nativeBackgroundImageActive: "",
				nativeHeading: "",
				nativeLinkedView: "",
				nativeNewLine: false,
				options: dialogDevicesAutocreateWidgetOptions,
				states: [{state: "BACKGROUND_URL", commonRole: "const", value: $("#dialogDevicesAutocreateWidgetSource").val() + dialogDevicesAutocreateWidgetUrlParameters}]
			});
			console.log("Added Widget");
			values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
		});
		//Add widgets and websites to Selectbox
		$('#dialogDevicesAutocreateWidgetSource').val("");
		var inbuiltWidgetsString = "";
		inbuiltWidgets.forEach(function(widget){
			if (widget && typeof widget.filename != udef) {
				inbuiltWidgetsString += ";" + ("./images/widgets/" + widget.filename).replace(/\//g, "\\") + "/" + (widget.name || widget.filename).replace(/\//g, "\\") + "/" + (link + ("/images/widgets/" + widget.icon || "/images/icons/file_html.png")).replace(/\//g, "\\");
			}
		});
		if (inbuiltWidgets.length > 0){
			inbuiltWidgetsString = ";[" + _("Inbuilt Widgets") + ":]" + inbuiltWidgetsString;
		}
		var websitenames = [];
		imagesDirs.forEach(function(imagesDir){
			if(imagesDir.dirname.indexOf("/userwidgets") == 0 && imagesDir.files && imagesDir.files.length > 0){
				var websitenamesInThisDir = [];
				imagesDir.files.forEach(function(file){
					var filename = file.filename || "";
					if(filename.endsWith(".shtml") || filename.endsWith(".ehtml") || filename.endsWith(".shtm") || filename.endsWith(".htm") || filename.endsWith(".html")){
						var iconIndex = images.findIndex(function(element){ return (element.filename == file.filename.substring(0, file.filename.length - 5) + ".png"); });
						if(iconIndex > -1) var icon = link + "/.." + userfilesImagePath + images[iconIndex].filename; else var icon = link + "/images/icons/file_html.png";
						websitenamesInThisDir.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS + "/" + icon.replace(/\//g, "\\"));
					}
				});
				if(websitenamesInThisDir.length > 0){
					websitenames.push("[" + imagesDir.dirnameBS + ":]");
					websitenames.push(websitenamesInThisDir.join(";"));
				}
			}
		});
		if (websitenames.length > 0){
			websitenames.unshift(";[" + _("User Widgets") + ":]");
		}
		enhanceTextInputToCombobox("#dialogDevicesAutocreateWidgetSource", "/" + _("(None)") + inbuiltWidgetsString + websitenames.join(";"), true, dialogDevicesAutocreateWidgetWidgetSelected);
		//Further settings
		$('#dialogDevicesAutocreateWidgetName').val("");
		$('#dialogDevicesAutocreateWidgetDescription').html("");
		$('#dialogDevicesAutocreateWidgetOptions').html("");
		$('#dialogDevicesAutocreateWidgetUrlParameters').html("");
		$('#dialogDevicesAutocreateWidget a.btn-set').addClass('disabled');
		dialogDevicesAutocreateWidgetOptions = [];
		dialogDevicesAutocreateWidgetUrlParameters = "";
		$('#dialogDevicesAutocreateWidget').modal('open');
		$('#dialogDevicesAutocreateWidget').css('z-index', modalZIndexCount++);
	});
	$("#dialogDevicesAutocreateWidgetSource").on('input change', function(){
		$('#dialogDevicesAutocreateWidgetDescription').html("")
		$('#dialogDevicesAutocreateWidgetOptions').html("")
		$('#dialogDevicesAutocreateWidgetUrlParameters').html("")
		if($("#dialogDevicesAutocreateWidgetSource").val() != ""){
			$('#dialogDevicesAutocreateWidget a.btn-set').removeClass('disabled');
		} else {
			$('#dialogDevicesAutocreateWidget a.btn-set').addClass('disabled');
		}
		dialogDevicesAutocreateWidgetOptions = [];
		dialogDevicesAutocreateWidgetUrlParameters = "";
	});
	function dialogDevicesAutocreateWidgetWidgetSelected(value){
		var filename = null;
		var path = null;
		if(value.indexOf("./images/widgets/") == 0){
			filename = value.substr(8);
			path = imagePath;
		}
		if(value.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0){
			filename = value.substr(29);
			path = userfilesImagePath;
		}
		if(filename && path){
			getWidgetSettings(filename, path, function(result){
				if(result.urlParameters.length){
					dialogDevicesAutocreateWidgetUrlParameters = "?" + result.urlParameters.join('&');
					var urlParameterString = "<ul class='browser-default'>";
					result.urlParameters.forEach(function(urlParameter){ urlParameterString += "<li>" + urlParameter + "</li>"; });
					urlParameterString += "</ul>";
					$('#dialogDevicesAutocreateWidgetUrlParameters').html("<hr><b>" + _("Parameters:") + "</b><br>" + urlParameterString);
				} else {
					dialogDevicesAutocreateWidgetUrlParameters = "";
					$('#dialogDevicesAutocreateWidgetUrlParameters').html("");
				}
				var dialogDevicesAutocreateWidgetOptionsString = "<ul class='browser-default'>";
				for(option in result.options){
					dialogDevicesAutocreateWidgetOptionsString += "<li><b>" + iQontrolRoles["iQontrolWidget"].options[option].name + "</b>: <u>" + result.options[option] + "</u></li>";
				}
				dialogDevicesAutocreateWidgetOptionsString += "</ul>";
				$('#dialogDevicesAutocreateWidgetOptions').html("<hr><b>" + _("Options:") + "</b><br>" + dialogDevicesAutocreateWidgetOptionsString);
				dialogDevicesAutocreateWidgetOptions = [];
				for(roleOption in iQontrolRoles["iQontrolWidget"].options){
					if(iQontrolRoles["iQontrolWidget"].options[roleOption].type == "section") continue;
					var value = result.options[roleOption] || iQontrolRoles["iQontrolWidget"].options[roleOption].default || "";
					var entry = {option: roleOption, type: iQontrolRoles["iQontrolWidget"].options[roleOption].type, value: value};
					dialogDevicesAutocreateWidgetOptions.push(entry);
				}
			});
		}
	}

	//Widget-Settings
	function getWidgetSettings(filename, path, callback){ // callback(result), result = {result.urlParameters (array), result.options (object)]´}
		var querystring = filename.split('?')[1] || "";
		filename = filename.split('?')[0];
		downloadFileAsStringAsync(filename, path).then(function(htmlAsString){
			if($(htmlAsString).filter('meta[name^="widget-"]').length){
				initDialog('dialogWidgetSettings', function(){ //save dialog
					var result = {};
					var dialogWidgetSettingsUrlParameters = [];
					$('.dialogWidgetSettingsUrlParameters').each(function(){
						var value;
						if($(this).data('type') == "checkbox"){
							value = $(this).prop('checked').toString();
						} else {
							value = $(this).val();
						}
						dialogWidgetSettingsUrlParameters.push(fixedEncodeURIComponent($(this).data('option')) + "=" + fixedEncodeURIComponent(value));
					});
					result.urlParameters = dialogWidgetSettingsUrlParameters;
					var dialogWidgetSettingsOptions = {};
					$('.dialogWidgetSettingsOptions').each(function(){
						if($(this).prop('checked')){
							dialogWidgetSettingsOptions[$(this).data('option')] = $(this).data('value').toString();
						}
					});
					result.options = dialogWidgetSettingsOptions;
					callback(result);
				});
				$('#dialogWidgetSettingsDescription').html("").show();
				$('#dialogWidgetSettingsOptions').html("").hide();
				$('#dialogWidgetSettingsParameters').html("").hide();
				$(htmlAsString).filter('meta[name^="widget-"]').each(function(){
					var metaName = $(this).prop('name');
					var metaContent = $(this).prop('content');
					var data = $(this).data() || {};
					switch(metaName){
						case "widget-description":
						if(metaContent) $('#dialogWidgetSettingsDescription').html(metaContent).show();
						break;

						case "widget-urlparameters":
						if(metaContent){
							dialogDevicesAutocreateWidgetUrlParameters = "";
							var dialogWidgetSettingsUrlParametersString = "";
							var dialogWidgetSettingsUrlParametersComboboxes = [];
							var urlParameters = metaContent.split(';');
							var querystringParts = querystring.split('&');
							var queries = {};
							querystringParts.forEach(function(query){
								queries[query.split('=')[0]] = query.split('=')[1] || "";
							});
							urlParameters.forEach(function(urlParameter){
								urlParameter = urlParameter.trim().split('/');
								var entry = decodeURIComponent(urlParameter[0]);
								var name = decodeURIComponent(urlParameter[2] || urlParameter[0]);
								var value = decodeURIComponent(queries[entry] || urlParameter[1] || "");
								var type = decodeURIComponent(urlParameter[3] || "text");
								var options = decodeURIComponent(urlParameter.slice(4) || []);
								if(!Array.isArray(options)) options = [options];
								switch(type){
									case "number":
									var min = (options[0] || "").split(',')[0] || 0;
									var max = (options[0] || "").split(',')[1] || 100;
									var step = (options[0] || "").split(',')[2] || 1;
									dialogWidgetSettingsUrlParametersString += "<div class='input-field col s12 m12 l12'>";
									dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters validate validateOnlyError' data-option='" + entry + "' data-type='number' type='number' min='" + min + "' max='" + max + "' step='" + step + "' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' />";
									dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
									dialogWidgetSettingsUrlParametersString += "    <span class='helper-text' data-error='" + min + " - " + max + "' data-success=''></span>";
									dialogWidgetSettingsUrlParametersString += "</div>";
									break;

									case "select": case "multipleSelect":
									var selectOptionsContent = "";
									options.forEach(function(option){
										var parts = option.split(',');
										if (parts.length < 2) parts.push(parts[0]);
										selectOptionsContent += "        <option value='" + parts[0] + "' " + ((parts[0] == value)?'selected':'') + " class='translate'>" + _(parts[1] || parts[0]) + "</option>";
									});
									dialogWidgetSettingsUrlParametersString += "<div class='input-field col s12 m12 l12'>";
									dialogWidgetSettingsUrlParametersString += "    <select" + (type == "multipleSelect" ? " multiple" : "") + " class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='select' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'>" + selectOptionsContent + "</select>";
									dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'></label>";
									dialogWidgetSettingsUrlParametersString += "    <span class='translate'>" + _(name) + "</span>";
									dialogWidgetSettingsUrlParametersString += "</div>";
									break;
									
									case "combobox":
									dialogWidgetSettingsUrlParametersComboboxes.push({id: 'dialogWidgetSettingsUrlParameter_' + entry, options: options.join(';'), iconsFromOption: false});
									dialogWidgetSettingsUrlParametersString += "<div class='input-field col s12 m6 l6'>";
									dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='combobox' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' placeholder='' />";
									dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
									dialogWidgetSettingsUrlParametersString += "</div>";
									break;

									case "historyInstance":
									getHistoryInstances();
									var selectOptionsContent = "";
									selectOptionsContent += "        <option value=''>" + _('default') + "</option>";
									historyInstances.forEach(function(historyInstance){
										selectOptionsContent += "        <option value='" + historyInstance + "'" + (historyInstance == value ? " selected" : "") + ">" + historyInstance + "</option>";
									});
									dialogWidgetSettingsUrlParametersString += "<div class='input-field col s12 m12 l12'>";
									dialogWidgetSettingsUrlParametersString += "    <select class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='select' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'>" + selectOptionsContent + "</select>";
									dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'></label>";
									dialogWidgetSettingsUrlParametersString += "    <span class='translate'>" + _(name) + "</span>";
									dialogWidgetSettingsUrlParametersString += "</div>";
									break;

									case "checkbox":
									if(value == "true") value = true;
									if(value == "false") value = false;
									dialogWidgetSettingsUrlParametersString += "<div class='input-field col s12 m12 l23'>";
									dialogWidgetSettingsUrlParametersString += "    <p><label>";
									dialogWidgetSettingsUrlParametersString += "        <input class='value dialogWidgetSettingsUrlParameters filled-in' data-option='" + entry + "' data-type='checkbox' type='checkbox' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "' " + (value?"checked='checked'":"") + " />";
									dialogWidgetSettingsUrlParametersString += "        <span>" + _(name) + "</span>";
									dialogWidgetSettingsUrlParametersString += "    </label></p>";
									dialogWidgetSettingsUrlParametersString += "</div>";
									break;

									case "color":
									dialogWidgetSettingsUrlParametersString += "<div class='input-field col s12 m12 l12'>";
									dialogWidgetSettingsUrlParametersString += "    <input class='value MaterializeColorPicker validate validateOnlyError dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='color' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' placeholder='rgb(0,0,0)' />";
									dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
									dialogWidgetSettingsUrlParametersString += "    <span class='helper-text'></span>";
									dialogWidgetSettingsUrlParametersString += "</div>";
									break;
									
									case "icon":
									//Blank Icon
									var options = "[" + _("No Icon") + ":]";
									options += ";" + ("./images/icons/blank.png").replace(/\//g, "\\") + "/" + _("No Icon") + "/" + (link + "/images/icons/checkboard.png").replace(/\//g, "\\");
									//Inbuilt Icons
									options += ";[" + _("Inbuilt Icons") + ":]";
									inbuiltIcons.forEach(function(inbuiltIcon){
										if (inbuiltIcon != "") {
											options += ";" + ("./images/icons/" + inbuiltIcon).replace(/\//g, "\\") + "/" + inbuiltIcon.replace(/\//g, "\\");
										}
									});
									//User Icons
									var imagenames = [];
									imagesDirs.forEach(function(imagesDir){
										if(imagesDir.dirname.indexOf("/usericons") == 0 && imagesDir.files && imagesDir.files.length > 0){
											imagenames.push("[" + imagesDir.dirnameBS + ":]");
											imagesDir.files.forEach(function(file){
												 imagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
											});
										}
									});
									if (imagenames.length > 0){
										options += ";[" + _("User Icons") + ":]";
										imagenames.forEach(function(option){
											options += ";" + option;
										});
									}
									//Icons Combobox
									dialogWidgetSettingsUrlParametersComboboxes.push({id: 'dialogWidgetSettingsUrlParameter_' + entry, options: options});
									dialogWidgetSettingsUrlParametersString += "<div class='input-field col s12 m6 l6'>";
									dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters icon' data-option='" + entry + "' data-type='icon' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' placeholder='" + _("No Icon") + "' />";
									dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
									dialogWidgetSettingsUrlParametersString += "</div>";
									break;
									
									case "datapoint":
									dialogWidgetSettingsUrlParametersString += "<div class='input-field col s12 m12 l12'>";
									dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' />";
									dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
									dialogWidgetSettingsUrlParametersString += "	<a class='dialogWidgetSettingsUrlParametersButton inputEdit waves-effect waves-light btn-small btn-floating' data-selectidfor='dialogWidgetSettingsUrlParameter_" + entry + "'><i class='material-icons'>edit</i></a>";
									dialogWidgetSettingsUrlParametersString += "</div>";
									break;

									case "text": default:
									dialogWidgetSettingsUrlParametersString += "<div class='input-field col s12 m12 l12'>";
									dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' />";
									dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
									dialogWidgetSettingsUrlParametersString += "</div>";
									break;
								}
							});
							if(dialogWidgetSettingsUrlParametersString) {
								$('#dialogWidgetSettingsUrlParameters').html(dialogWidgetSettingsUrlParametersString).show();
								$('select.dialogWidgetSettingsUrlParameters').select();
								dialogWidgetSettingsUrlParametersComboboxes.forEach(function(entry){
									enhanceTextInputToCombobox('#' + entry.id, entry.options, (typeof entry.iconsFromOption != udef ? entry.iconsFromOption : true));
								});
								$('.dialogWidgetSettingsUrlParametersButton.inputEdit').off('click').on('click', function(){
									$('#dialogSelectId').data('selectidfor', $(this).data('selectidfor'));
									initSelectId(function (sid) {
										sid.selectId('show', $('#' + $('#dialogSelectId').data('selectidfor')).val(), {type: 'state'}, function (newId) {
											if (newId) {
												$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
											}
										});
									});									
								})
								initColorpickers(onChange);
								if (M) M.updateTextFields();
							} else {
								$('#dialogWidgetSettingsUrlParameters').html("").hide();
							}
						}
						break;

						case "widget-options":
						if(metaContent) {
							widgetOptions = tryParseJSON(metaContent.replace(/\'/g, "\""));
							if(widgetOptions){
								var dialogWidgetSettingsOptionsString = "";
								var dialogWidgetSettingsOptionsUnsupportedString;
								for(option in widgetOptions){
									if(iQontrolRoles["iQontrolWidget"].options[option]){
										dialogWidgetSettingsOptionsString += "<label><input class='dialogWidgetSettingsOptions' type='checkbox' checked='checked' data-option='" + option + "' data-value='" + widgetOptions[option] + "'><span style='height: auto;'><b>" + _(iQontrolRoles["iQontrolWidget"].options[option].name) + "</b>: <u>" + widgetOptions[option] + "</u></span></label><br>";
									} else {
										dialogWidgetSettingsOptionsUnsupportedString += options[option].name + ": " + widgetOptions[option] + "<br>";
									}
								};
								if(dialogWidgetSettingsOptionsUnsupportedString) dialogWidgetSettingsOptionsString += "<br><br>" + _("Unsupported settings:") + "<br>" + dialogWidgetSettingsOptionsUnsupportedString;
								if(dialogWidgetSettingsOptionsString.length){
									$('#dialogWidgetSettingsOptions').html("<b>" + _("Apply the following device options:") + "</b><br><br>" + dialogWidgetSettingsOptionsString).show();
								} else {
									$('#dialogWidgetSettingsOptions').html("").hide();
								}
							} else {
								alert(_("Found settings for widget options, but the options are not valid (they need to be in a valid JSON-format)."));
							}
						}
						break;
					}
				});
				$('#dialogWidgetSettings').modal('open');
				$('#dialogWidgetSettings').css('z-index', modalZIndexCount++);
			}
		});
	}

	//+++++++++ TOOLBAR ++++++++++
	//Load Toolbar
	function loadToolbar(){
		$('.collapsible').collapsible();

		//Add Views to Selectbox for LinkedView
		var viewIds = [];
		views.forEach(function(element){ viewIds.push(element.commonName); });
		$('*[data-name="nativeLinkedView"]').data("options", viewIds.join(";"));
		//Fill Table
		values2table('tableToolbar', toolbar, onChange, onTableToolbarReady);

		//Add views to Selectbox for BACKGROUND_VIEW
		var viewIds = [""];
		views.forEach(function(element){ viewIds.push(adapter + "." + instance + ".Views." + element.commonName + "/" + element.commonName); });
		enhanceTextInputToCombobox("#panelBackgroundViewValue", "/;" + viewIds.join(";"), false, function(value){
			if(value && value != "" && !$("#panelAllowPostMessage").prop('checked')){
				if(confirm("Its recommended to allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML. Enable this option now?")){
					$("#panelAllowPostMessage").prop('checked', 'checked').trigger('change');
				}
			}
		});

		//Add widgets and websites to Selectbox for BACKGROUND_URL
		var inbuiltWidgetsString = "";
		inbuiltWidgets.forEach(function(widget){
			if (widget && typeof widget.filename != udef) {
				inbuiltWidgetsString += ";" + ("./images/widgets/" + widget.filename).replace(/\//g, "\\") + "/" + (widget.name || widget.filename).replace(/\//g, "\\") + "/" + (link + ("/images/widgets/" + widget.icon || "/images/icons/file_html.png")).replace(/\//g, "\\");
			}
		});
		if (inbuiltWidgets.length > 0){
			inbuiltWidgetsString = ";[" + _("Inbuilt Widgets") + ":]" + inbuiltWidgetsString;
		}
		var websitenames = [];
		imagesDirs.forEach(function(imagesDir){
			if(imagesDir.dirname.indexOf("/userwidgets") == 0 && imagesDir.files && imagesDir.files.length > 0){
				var websitenamesInThisDir = [];
				imagesDir.files.forEach(function(file){
					var filename = file.filename || "";
					if(filename.endsWith(".shtml") || filename.endsWith(".ehtml") || filename.endsWith(".shtm") || filename.endsWith(".htm") || filename.endsWith(".html")){
						var iconIndex = images.findIndex(function(element){ return (element.filename == file.filename.substring(0, file.filename.length - 5) + ".png"); });
						if(iconIndex > -1) var icon = link + "/.." + userfilesImagePath + images[iconIndex].filename; else var icon = link + "/images/icons/file_html.png";
						websitenamesInThisDir.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS + "/" + icon.replace(/\//g, "\\"));
					}
				});
				if(websitenamesInThisDir.length > 0){
					websitenames.push("[" + imagesDir.dirnameBS + ":]");
					websitenames.push(websitenamesInThisDir.join(";"));
				}
			}
		});
		if (websitenames.length > 0){
			websitenames.unshift(";[" + _("User Widgets") + ":]");
		}
		enhanceTextInputToCombobox("#panelBackgroundURLValue", "/" + _("(None)") + inbuiltWidgetsString + websitenames.join(";"), true);

		//Enhande commonRole with functions
		$('select.panelStates.commonRole').off('input change').on('input change', function(){
			var id = $(this).data('id');
			var valueId = id + "Value";
			var $value = $('#' + valueId);
			//Show or hide selectboxes
			if($(this).val() == 'const'){
				$value.next("a").prop('style','');
			} else {
				$value.next("a").prop('style','display: none !important;');
			}
		}).trigger('change');

		//Enhance Panel edit-buttons with functions
		$('a.panelStates[data-command="edit"]').off('click').on('click', function(){
			var id = $(this).data('id');
			var commonRoleId = id + "CommonRole";
			var valueId = id + "Value";
			var $commonRole = $('#' + commonRoleId);
			var $value = $('#' + valueId);
			if($commonRole.val() == 'linkedState'){ //linkedState
				$('#dialogSelectId').data('selectidfor', valueId);
				initSelectId(function (sid) {
					sid.selectId('show', $value.val(), {type: 'state'}, function (newId) {
						if (newId) {
							$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
						}
					});
				});
			} else if($commonRole.val() == 'const'){ //const
				initDialog('dialogDeviceEditStateConstant', function(){ //save dialog
					$('#' + $('#dialogDeviceEditStateConstantIndex').val()).val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n')).trigger('change');
				});
				$('#dialogDeviceEditStateConstantName').html(id || "");
				$('#dialogDeviceEditStateConstantIndex').val(valueId);
				$('#dialogDeviceEditStateConstantTextarea').val(($value.val() || "").replace(/\\n/g, '\n'));
				$('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
				$('#dialogDeviceEditStateConstant').modal('open');
				$('#dialogDeviceEditStateConstant').css('z-index', modalZIndexCount++);
			}
		});
	}

	//Enhance tableToolbar with functions
	function onTableToolbarReady(){
		var $div = $('#tableToolbar');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add Images to Selectbox for BackgroundImage
		var jqueryIconsString = "";
		jqueryIcons.forEach(function(symbol){
			if (symbol != "") {
				jqueryIconsString += ";" + symbol + "/" + symbol + "/" + (link + "/jquery/images/icons-svg/" + symbol + "-black.svg").replace(/\//g, "\\");
			}
		});
		if (jqueryIcons.length > 0){
			jqueryIconsString = ";[" + _("Standard Symbols") + ":]" + jqueryIconsString;
		}
		var inbuiltSymbolsString = "";
		inbuiltSymbols.forEach(function(symbol){
			if (symbol != "") {
				inbuiltSymbolsString += ";" + ("./images/symbols/" + symbol).replace(/\//g, "\\") + "/" + symbol.replace(/\//g, "\\");
			}
		});
		if (inbuiltSymbols.length > 0){
			inbuiltSymbolsString = ";[" + _("Inbuilt Symbols") + ":]" + inbuiltSymbolsString;
		}
		var imagenames = [];
		imagesDirs.forEach(function(imagesDir){
			if(imagesDir.dirname.indexOf("/usersymbols") == 0 && imagesDir.files && imagesDir.files.length > 0){
				imagenames.push("[" + imagesDir.dirnameBS + ":]");
				imagesDir.files.forEach(function(file){
					 imagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
				});
			}
		});
		if (imagenames.length > 0){
			imagenames.unshift(";[" + _("User Symbols") + ":]");
		}
		enhanceTextInputToCombobox('#tableToolbar input[data-name="nativeIcon"]', "/" + _("(None)") + jqueryIconsString + inbuiltSymbolsString + imagenames.join(";"), true);
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
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
			handle: "a[data-command='drag_handle']"
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
						$('#imagesSelectedDir').select();
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
						dirnameBS: 		"\\",
						dirnameVS: 		"|"
			}];
		};
		socketCallback = function(err, obj){
			if(obj) obj.forEach(function(element){
				if(element.isDir) {
					imagesDirs.push({
						dirname:		path.substring(userfilesImagePath.length) + "/" + element.file,
						dirnameBS: 		path.substring(userfilesImagePath.length).replace(/\//g, "\\") + "\\" + element.file.replace(/\//g, "\\"),
						dirnameVS:		path.substring(userfilesImagePath.length).replace(/\//g, "|") + "|" + element.file.replace(/\//g, "|")
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
			} else { //Got all images
				imagesDirs.sort(function(a, b){
					return ((a.dirname.toLowerCase() > b.dirname.toLowerCase()) ? 1 : ((b.dirname.toLowerCase() > a.dirname.toLowerCase()) ? -1 : 0));
				});
				imagesDirs.forEach(function(imagesDir){
					var imagesDirFiles = [];
					images.forEach(function(image){
						if(image.filename.indexOf(imagesDir.dirname) == 0 && (image.filename.lastIndexOf('/') == 0 || image.filename.lastIndexOf('/') == imagesDir.dirname.length)){
							imagesDirFiles.push(image);
						}
					});
					imagesDirFiles.sort(function(a, b){
						return ((a.filename.toLowerCase() > b.filename.toLowerCase()) ? 1 : ((b.filename.toLowerCase() > a.filename.toLowerCase()) ? -1 : 0));
					});
					imagesDir.files = imagesDirFiles;
				});
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
		$('#imagesSelectedDir').select();
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
		if(val && val.indexOf("/userwidgets") == 0){
			$('#imagesUploadFile').prop('accept', 'image/png, image/jpeg, image/jpg, image/gif, image/svg, image/svg+xml, text/html, text/css, text/javascript');
			$('.imagesUploadCreateFile').removeClass('hide');
		} else {
			$('#imagesUploadFile').prop('accept', 'image/png, image/jpeg, image/jpg, image/gif, image/svg, image/svg+xml');
			$('.imagesUploadCreateFile').addClass('hide');
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
				var filename = images[imageIndex].filename;
				if(filename.endsWith(".shtml") || filename.endsWith(".ehtml") || filename.endsWith(".shtm") || filename.endsWith(".htm") || filename.endsWith(".html")){
					$(this).replaceWith("<img src='" + link + "/images/icons/file_html_edit.png' data-filetype='htmlmixed' data-filename='" + filename + "' data-filepath='./.." + userfilesImagePath + filename + "' style='max-width:50px; max-height:50px; cursor:hand;' class='code'></img>");
				} else if (filename.endsWith(".css")){
					$(this).replaceWith("<img src='" + link + "/images/icons/file_css_edit.png' data-filetype='css' data-filename='" + filename + "' data-filepath='./.." + userfilesImagePath + filename + "' style='max-width:50px; max-height:50px; cursor:hand;' class='code'></img>");
				} else if (filename.endsWith(".mjs") || filename.endsWith(".js")){
					$(this).replaceWith("<img src='" + link + "/images/icons/file_js_edit.png' data-filetype='javascript' data-filename='" + filename + "' data-filepath='./.." + userfilesImagePath + filename + "' style='max-width:50px; max-height:50px; cursor:hand;' class='code'></img>");
				} else {
					$(this).replaceWith("<img src='" + link + "/.." + userfilesImagePath + filename + "' data-filetype='image' data-filename='" + filename + "' data-filepath='./.." + userfilesImagePath + filename + "' style='max-width:50px; max-height:50px; cursor:zoom-in;' class='thumbnail'></img>");
				}
			}
			//Rename file
			if (command === 'edit') {
				$(this).on('click', function () {
					var index = $(this).data('index');
					var oldName = images[index].filename;
					var newName = images[index].filename;
					var isValid = false;
					do {
						newName = (prompt(_("Change filename from %s to:", oldName), newName) || "").replace(/\\/g, "/");
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
									$('#imagesSelectedDir').select();
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
								$('#imagesSelectedDir').select();
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
			var imageName = $(this).data('filepath');
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
			$("#dialogImagePopup").css('z-index', modalZIndexCount++);
		});
		//CodeEditor
		$('.code').on('click', function(){
			initDialog('dialogCodeEditor', function(){});
			var fileName = $(this).data('filename');
			$("#dialogCodeEditorFileName").text(fileName);
			$("#dialogCodeEditorFileType").text($(this).data('filetype'));
			dialogCodeEditorCodeMirror.setOption("mode", $("#dialogCodeEditorFileType").text());
			dialogCodeEditorCodeMirror.setValue("");
			dialogCodeEditorCodeMirrorChanged = false;
			$('#dialogCodeEditor .btn-set').addClass('disabled');
			dialogCodeEditorCodeMirror.execCommand('goDocStart');
			dialogCodeEditorCodeMirror.refresh();
			setTimeout(function(){
				dialogCodeEditorCodeMirror.refresh();
			}, 250);
			$("#dialogCodeEditor").modal('open');
			$("#dialogCodeEditor").css('z-index', modalZIndexCount++);
			downloadFileAsString(fileName, userfilesImagePath, function(string){
				dialogCodeEditorCodeMirror.setOption("mode", $("#dialogCodeEditorFileType").text());
				dialogCodeEditorCodeMirror.setValue(string);
				dialogCodeEditorCodeMirrorChanged = false;
				$('#dialogCodeEditor .btn-set').addClass('disabled');
				dialogCodeEditorCodeMirror.execCommand('goDocStart');
				dialogCodeEditorCodeMirror.refresh();
				setTimeout(function(){
					dialogCodeEditorCodeMirror.refresh();
				}, 250);
			});
		});
		imagesSelectedDirFilterList();
	}

	//Create Dir
	$('#imagesUploadCreateDir').on('click', function(){
		var newName = (($('#imagesSelectedDir').val() == "/") ? "" : $('#imagesSelectedDir').val()) + "/New Folder";
		var isValid = false;
		do {
			newName = (prompt(_("Create Directory"), newName) || "").replace(/\\/g, "/");
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
					$('#imagesSelectedDir').select();
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
			newName = (prompt(_("Change Directory Name from %s to:", oldName), newName) || "").replace(/\\/g, "/");
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
						$('#imagesSelectedDir').select();
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
					$('#imagesSelectedDir').select();
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
			$('#imagesSelectedDir').select();
		});
	});

	//Download Dir As Zip
	$('#imagesUploadDownloadDirAsZip').on('click', function(){
		$('#imagesUploadDownloadDirAsZip').addClass('disabled');
		$('#imagesUploadDownloadDirAsZipIcon').text("hourglass_empty");
		$('#imagesUploadDownloadDirAsZipProgress').show();
		if(confirm(_("Depending on the size it may take a while to create the zip file."))){
			readDirAsZip(userfilesImagePath + $('#imagesSelectedDir').val(), function(err, data){
				if (err) {
					alert("Error: " + err);
				} else if (data) {
					var filename = "userfiles" + (($('#imagesSelectedDir').val() && $('#imagesSelectedDir').val().length > 1) ? ($('#imagesSelectedDir').val().replace(/\//g, '_').replace(/\\/g, '_').replace(/ /g, '_')) : "") + ".zip";
					saveStringAsLocalFile(data, "base64", "application/zip", filename);
				} else {
					alert("Error: no data received.");
				}
				$('#imagesUploadDownloadDirAsZipIcon').text("cloud_download");
				$('#imagesUploadDownloadDirAsZip').removeClass('disabled');
				$('#imagesUploadDownloadDirAsZipProgress').hide();
			});
		} else {
			$('#imagesUploadDownloadDirAsZipIcon').text("cloud_download");
			$('#imagesUploadDownloadDirAsZip').removeClass('disabled');
		$('#imagesUploadDownloadDirAsZipProgress').hide();
		}
	});

	//CreateFile-Buttons
	$('.imagesUploadCreateFile').on('click', function(){
		var filetype = $(this).data('filetype');
		var filename = prompt("Enter filename");
		if(filename){
			uploadStringAsFile("", filename + "." + filetype, userfilesImagePath + $('#imagesSelectedDir').val(), function(name){
				$('#imagesUploadRefresh').click();
			});
		}
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

	//++++++++++ OPTIONS ++++++++++
	//Load Options
	function loadOptions(){
		$('.collapsible').collapsible();
		
		//Fill Combobox for ChangeDeviceIcons with icons
		//Default Icon
		var optionsString = "[" + _("Default Icon") + ":]";
		optionsString += ";/" + _("Default Icon") + "/" + (link + "/images/icons/various.png").replace(/\//g, "\\");
		//Blank Icon
		optionsString += ";[" + _("No Icon") + ":]";
		optionsString += ";" + ("./images/icons/blank.png").replace(/\//g, "\\") + "/" + _("No Icon") + "/" + (link + "/images/icons/checkboard.png").replace(/\//g, "\\");
		//Inbuilt Icons
		optionsString += ";[" + _("Inbuilt Icons") + ":]";
		inbuiltIcons.forEach(function(inbuiltIcon){
			if (inbuiltIcon != "") {
				optionsString += ";" + ("./images/icons/" + inbuiltIcon).replace(/\//g, "\\") + "/" + inbuiltIcon.replace(/\//g, "\\");
			}
		});
		//User Icons
		var imagenames = [];
		imagesDirs.forEach(function(imagesDir){
			if(imagesDir.dirname.indexOf("/usericons") == 0 && imagesDir.files && imagesDir.files.length > 0){
				imagenames.push("[" + imagesDir.dirnameBS + ":]");
				imagesDir.files.forEach(function(file){
					 imagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
				});
			}
		});
		if (imagenames.length > 0){
			optionsString += ";[" + _("User Icons") + ":]";
			imagenames.forEach(function(option){
				optionsString += ";" + option;
			});
		}
		enhanceTextInputToCombobox('#optionsChangeDeviceOptionsIconsSource', optionsString, true);
		enhanceTextInputToCombobox('#optionsChangeDeviceOptionsIconsDestination', optionsString, true);
		
		//Fill Combobox for ChangeDeviceOptionsFilterRoles with roles
		$('.optionsChangeDeviceOptionsRoles').html("");
		for (iQontrolRole in iQontrolRoles){
			$('.optionsChangeDeviceOptionsRoles').append("<option value='" + iQontrolRole + "' data-icon='" + (iQontrolRoles[iQontrolRole].icon ? link + iQontrolRoles[iQontrolRole].icon : "") + "'>" + _(iQontrolRoles[iQontrolRole].name) + "</select>");
		}
		$('select.optionsChangeDeviceOptionsRoles').select();		
		
		//Fill Combobox for ChangeDeviceOptionsFilterDevices with devices
		$('.optionsChangeDeviceOptionsDevices').html("");
		if (typeof views != udef) views.forEach(function(view){
			var viewName = view.commonName || "";
			$('.optionsChangeDeviceOptionsDevices').append("<optgroup class='optionsChangeDeviceOptionsDevices_View' data-view='" + escape(viewName) + "' label='" + viewName + "'></optgroup>");
			if (typeof view.devices != udef) view.devices.forEach(function(device){
				var deviceName = device.commonName || "";
				$('.optionsChangeDeviceOptionsDevices_View[data-view="' + escape(viewName) + '"]').append("<option value='[" + viewName + "]" + deviceName + "'>" + deviceName + "</select>");
			});
		});		
		$('select.optionsChangeDeviceOptionsDevices').select();
		$('.optionsChangeDeviceOptionsDevices').prevAll('ul').children('.optgroup').data('selectall', false).on('click', function(){
			console.log("SELECTALL"); 
			$(this).data("selectall", !$(this).data("selectall")); 
			$(this).nextUntil('.optgroup', '.optgroup-option' + ($(this).data("selectall") ? ":not(.selected)" : ".selected")).find('input').click();
		});

		//Fill Selectbox for Export Selected Views
		$('#optionsBackupRestoreExportViewsSelectedSelection').empty().append("<option disabled selected value>" + _("Select view") + "</option>");
		views.forEach(function(element, index){ $('#optionsBackupRestoreExportViewsSelectedSelection').append("<option value='" + index + "'>" + element.commonName + "</option>"); });
		$('#optionsBackupRestoreExportViewsSelectedSelection').select();
	}

	//Fill Combobox for ChangeDeviceOptions with deviceOptions
	var deviceOptions = {};
	var optionsString = "";
	var actualSection = "";
	for (iQontrolRole in iQontrolRoles){
		for (iQontrolRoleOption in iQontrolRoles[iQontrolRole].options){
			if(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].type == "section"){
				actualSection = iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].name;
				if(typeof deviceOptions[actualSection] == udef) deviceOptions[actualSection] = [];
			} else {
				deviceOptions[actualSection].push(iQontrolRoleOption + "/" + _(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].name).replace(/\//g, "\\"));
			}				
		}
	}
	for(section of Object.keys(deviceOptions).sort()){
		optionsString += ";[" + _(section) + "]";
		deviceOptions[section] = removeDuplicates(deviceOptions[section], '/')
		optionsString += ";" + deviceOptions[section].join(';')
	}
	enhanceTextInputToCombobox('#optionsChangeDeviceOptionsSourceOption', optionsString, false);
	
	//Fill Combobox for ChangeDeviceStates with deviceStates
	var deviceStates = [];
	for (iQontrolRole in iQontrolRoles){
		for (iQontrolRoleState in iQontrolRoles[iQontrolRole].states){
			deviceStates.push(iQontrolRoles[iQontrolRole].states[iQontrolRoleState]);
		}
	}
	deviceStates = removeDuplicates(deviceStates);
	$('.optionsChangeDeviceOptionsStates').html("");
	for (deviceState in deviceStates){
		$('.optionsChangeDeviceOptionsStates').append("<option value='" + deviceStates[deviceState] + "'>" + deviceStates[deviceState] + "</select>");
	}
	$('select.optionsChangeDeviceOptionsStates').select();

	//Add function to showChanges-Buttons
	$('.optionsChangeDeviceOptionsShowChanges').on('click', function(){
		initDialog('dialogGeneric');
		$('#dialogGenericTitle').html(_("Matches") + ":");
		$('#dialogGenericContent').html($(this).data('changes-list'));
		$('#dialogGeneric').modal('open');
		$('#dialogGeneric').css('z-index', modalZIndexCount++);		
	});

	//ChangeDeviceOptionsIcons
	$('.optionsChangeDeviceOptionsIcons').on('change', function(){
		var result = optionsChangeDeviceOptionsIcons($('#optionsChangeDeviceOptionsIconsSource').val(), $('#optionsChangeDeviceOptionsIconsDestination').val(), $('#optionsChangeDeviceOptionsIconsFilterRoles').val(), $('#optionsChangeDeviceOptionsIconsFilterDevices').val(), "countOnly");
		$('#optionsChangeDeviceOptionsIconsExecuteCount').html("&nbsp;(" + result.changeCount + " " + _("matches") + ")");
		if(result.changeCount > 0 && $('#optionsChangeDeviceOptionsIconsSource').val() != $('#optionsChangeDeviceOptionsIconsDestination').val()){
			$('#optionsChangeDeviceOptionsIconsExecute').removeClass('disabled');
			$('#optionsChangeDeviceOptionsIconsShowChanges').removeClass('disabled').data('changes-list', '<ul><li>' + result.changeList.join('</li><li>') + '</li></ul>');
		} else {
			$('#optionsChangeDeviceOptionsIconsExecute').addClass('disabled');				
			$('#optionsChangeDeviceOptionsIconsShowChanges').addClass('disabled');				
		}
	});
	$('#optionsChangeDeviceOptionsIconsExecute').on('click', function(){ 
		optionsChangeDeviceOptionsIcons($('#optionsChangeDeviceOptionsIconsSource').val(), $('#optionsChangeDeviceOptionsIconsDestination').val(), $('#optionsChangeDeviceOptionsIconsFilterRoles').val(), $('#optionsChangeDeviceOptionsIconsFilterDevices').val(), false);
		$('#optionsChangeDeviceOptionsIconsSource').trigger('change');
	});
	function optionsChangeDeviceOptionsIcons(source, destination, filterRoles, filterDevices, countOnly, quiet){
		var changeCount = 0;
		var changeList = [];
		if ((quiet || countOnly || confirm(_("Really change all Icons?"))) && typeof views != udef) views.forEach(function(view){
			var viewName = view.commonName;
			if (typeof view.devices != udef) view.devices.forEach(function(device){
				if(filterDevices == "" || filterDevices.indexOf("[" + viewName + "]" + device.commonName) > -1){ 				
					var role = device.commonRole || "";
					if(filterRoles == "" || filterRoles.indexOf(role) > -1){ 
						if (iQontrolRoles[role] && iQontrolRoles[role].options) for(roleOption in iQontrolRoles[role].options){
							if (iQontrolRoles[role].options[roleOption].type == "icon") {
								var deviceOptionIndex = device.options && device.options.findIndex(function(option){ return option.option == roleOption; });
								if (deviceOptionIndex > -1){ //option exists
									var option = device.options[deviceOptionIndex];
								} else {
									var option = { //take default from iQontrolRoles
										option: roleOption,
										type: iQontrolRoles[role].options[roleOption].type,
										value: iQontrolRoles[role].options[roleOption].default
									};
								}
								if(option 
									&& (option.value == source 
										|| (option.value == "" && ("./images/icons/" + iQontrolRoles[role].options[roleOption].defaultIcons.split(';')[0]) == source)
										|| (option.value == "" && iQontrolRoles[role].options[roleOption].default == source)
										|| (source == "" && option.value == iQontrolRoles[role].options[roleOption].default)
									)
								) {
									changeCount++;
									changeList.push(viewName + " - " + device.commonName);
									if(!countOnly){
										console.log("CHANGE SETTING");
										option.value = destination;
										if(typeof device.options == udef) device.options = [];
										if(!(deviceOptionIndex > -1)) device.options.push(option);
									}
								}
							}
						}
					}
				}
			});
		});		
		if(!countOnly && changeCount > 0) {
			alert(_("%s icons have been exchanged. Don't forget to save your changes!", changeCount));
			onChange();
		}		
		return {changeCount: changeCount, changeList: changeList};
	}
	
	//ChangeDeviceOptions
	//Fill Comboboxes with settings
	$('#optionsChangeDeviceOptionsSourceOption').on('change', function(){
		var settings = [];
		for (iQontrolRole in iQontrolRoles){
			for (iQontrolRoleOption in iQontrolRoles[iQontrolRole].options){
				if(iQontrolRoleOption == $('#optionsChangeDeviceOptionsSourceOption').val()){
					switch(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].type){
						case "icon":
						settings.push("/" + _("default"));
						settings.push("*/" + _("all"));
						settings.push("[" + _("Inbuilt Icons") + ":]");
						inbuiltIcons.forEach(function(inbuiltIcon){
							if (inbuiltIcon != "") {
								settings.push(("./images/icons/" + inbuiltIcon).replace(/\//g, "\\") + "/" + inbuiltIcon.replace(/\//g, "\\") + "/" + (link + "/./images/icons/" + inbuiltIcon).replace(/\//g, "\\"));
							}
						});
						break;
						
						case "checkbox":
							settings.push("/" + _("default"));
							settings.push("*/" + _("all"));
							settings.push("true/" + _("true"));
							settings.push("false/" + _("false"));
						break;
						
						case "select":
						settings.push("/" + _("default"));
						settings.push("*/" + _("all"));
						iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].selectOptions.split(';').forEach(function(setting){
							settings.push(setting.split('/')[0] + "/" + _(setting.split('/')[1] || setting.split('/')[1] || "").replace(/\//g, "\\"));
						});
						break;
						
						default:
						settings.push("/" + _("default"));
						settings.push("*/" + _("all"));
						break;
					}
					var userSettings = [];
					if(typeof views != udef) views.forEach(function(view){
						if (typeof view.devices != udef) view.devices.forEach(function(device){
							var role = device.commonRole || "";
							if (typeof device.options != udef) device.options.forEach(function(option){
								if(option.option == iQontrolRoleOption && option.value != ""){
									switch(option.type){
										case "icon":
										userSettings.push(option.value.replace(/\//g, "\\") + "/" + option.value.replace(/\//g, "\\") + "/" + (link + "/" + option.value).replace(/\//g, "\\"));
										break;
										
										case "checkbox": case "select":
										break;
										
										default:
										userSettings.push(option.value.replace(/\//g, "\\") + "/" + _(option.value).replace(/\//g, "\\"));
										break;
									}
								}
							});
						});
					});
					if(userSettings.length > 0){
						settings.push("[" + _("User Settings") + ":]");
						settings = settings.concat(userSettings);
					}
				}
			}
		}
		settings = removeDuplicates(settings, '/');
		$('#optionsChangeDeviceOptionsSourceValue').val("");
		$('#optionsChangeDeviceOptionsDestinationValue').val("");
		enhanceTextInputToCombobox('#optionsChangeDeviceOptionsSourceValue', settings.join(';'), false);
		enhanceTextInputToCombobox('#optionsChangeDeviceOptionsDestinationValue', settings.join(';'), false);
		$('#optionsChangeDeviceOptionsDestinationValue').siblings('ul').find('li[data-value="*"]').remove();
	});
	$('.optionsChangeDeviceOptions').on('change', function(){
		var result = optionsChangeDeviceOptions($('#optionsChangeDeviceOptionsSourceOption').val(), $('#optionsChangeDeviceOptionsSourceValue').val(), $('#optionsChangeDeviceOptionsDestinationValue').val(), $('#optionsChangeDeviceOptionsFilterRoles').val(), $('#optionsChangeDeviceOptionsFilterDevices').val(), "countOnly");
		$('#optionsChangeDeviceOptionsExecuteCount').html("&nbsp;(" + result.changeCount + " " + _("matches") + ")");
		if(result.changeCount > 0 && $('#optionsChangeDeviceOptionsSourceOption').val() && $('#optionsChangeDeviceOptionsSourceValue').val() != $('#optionsChangeDeviceOptionsDestinationValue').val()){
			$('#optionsChangeDeviceOptionsExecute').removeClass('disabled');
			$('#optionsChangeDeviceOptionsShowChanges').removeClass('disabled').data('changes-list', '<ul><li>' + result.changeList.join('</li><li>') + '</li></ul>');
		} else {
			$('#optionsChangeDeviceOptionsExecute').addClass('disabled');
			$('#optionsChangeDeviceOptionsShowChanges').addClass('disabled');
		}
	});
	$('#optionsChangeDeviceOptionsExecute').on('click', function(){ 
		optionsChangeDeviceOptions($('#optionsChangeDeviceOptionsSourceOption').val(), $('#optionsChangeDeviceOptionsSourceValue').val(), $('#optionsChangeDeviceOptionsDestinationValue').val(), $('#optionsChangeDeviceOptionsFilterRoles').val(), $('#optionsChangeDeviceOptionsFilterDevices').val(), false);
		$('#optionsChangeDeviceOptionsSourceValue').trigger('change');
	});
	function optionsChangeDeviceOptions(sourceOption, sourceValue, destinationValue, filterRoles, filterDevices, countOnly, quiet){
		var changeCount = 0;
		var changeList = [];
		if ((quiet || countOnly || confirm(_("Really change all Settings?"))) && typeof views != udef) views.forEach(function(view){
			var viewName = view.commonName;
			if (typeof view.devices != udef) view.devices.forEach(function(device){
				if(filterDevices == "" || filterDevices.indexOf("[" + viewName + "]" + device.commonName) > -1){ 				
					var role = device.commonRole || "";
					if(filterRoles == "" || filterRoles.indexOf(role) > -1){ 
						var deviceOptionIndex = device.options && device.options.findIndex(function(option){ return option.option == sourceOption; });
						if (deviceOptionIndex > -1){ //option exists
							var option = device.options[deviceOptionIndex];
						} else if (iQontrolRoles[role] && iQontrolRoles[role].options && typeof iQontrolRoles[role].options[sourceOption] != udef){
							var option = { //take default from iQontrolRoles
								option: sourceOption,
								type: iQontrolRoles[role].options[sourceOption].type,
								value: iQontrolRoles[role].options[sourceOption].default
							};
						} else { //option not found
							var option = null;
						}
						if(option 
							&& (option.value == sourceValue 
								|| (option.value == "" && iQontrolRoles[role].options[sourceOption].default == sourceValue)
								|| (sourceValue == "" && option.value == iQontrolRoles[role].options[sourceOption].default)
								|| (sourceValue == "*")
							)
						) {
							changeCount++;
							changeList.push(viewName + " - " + device.commonName);
							if(!countOnly){
								console.log("CHANGE SETTING");
								option.value = destinationValue;
								if(typeof device.options == udef) device.options = [];
								if(!(deviceOptionIndex > -1)) device.options.push(option);
							}
						}
					}
				}
			});
		});		
		if(!countOnly && changeCount > 0) {
			alert(_("%s settings have been exchanged. Don't forget to save your changes!", changeCount));
			onChange();
		}		
		return {changeCount: changeCount, changeList: changeList };
	}

	//ChangeDeviceStates
	$('.optionsChangeDeviceStatesEditButton.inputEdit').on('click', function(){
		$('#dialogSelectId').data('selectidfor', $(this).data('selectidfor'));
		initSelectId(function (sid) {
			sid.selectId('show', $('#' + $('#dialogSelectId').data('selectidfor')).val(), {type: 'state'}, function (newId) {
				if (newId) {
					$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
				}
			});
		});									
	})
	$('.optionsChangeDeviceStates').on('change input', function(){
		var result = optionsChangeDeviceStates($('#optionsChangeDeviceStatesSourceValue').val(), $('#optionsChangeDeviceStatesDestinationValue').val(), $('#optionsChangeDeviceStatesDestinationCommonRole').val(), $('#optionsChangeDeviceStatesFilterStates').val(), $('#optionsChangeDeviceStatesFilterRoles').val(), $('#optionsChangeDeviceStatesFilterDevices').val(), "countOnly");
		$('#optionsChangeDeviceStatesExecuteCount').html("&nbsp;(" + result.changeCount + " " + _("matches") + ")");
		if(result.changeCount > 0 
			&& ($('#optionsChangeDeviceStatesSourceValue').val() != $('#optionsChangeDeviceStatesDestinationValue').val() 
				|| $('#optionsChangeDeviceStatesDestinationCommonRole').val() != "*"
			)
			&& ($('#optionsChangeDeviceStatesDestinationValue').val() != "*" 
				|| $('#optionsChangeDeviceStatesDestinationCommonRole').val() != "*"
			)
		){
			$('#optionsChangeDeviceStatesExecute').removeClass('disabled');
			$('#optionsChangeDeviceStatesShowChanges').removeClass('disabled').data('changes-list', '<ul><li>' + result.changeList.join('</li><li>') + '</li></ul>');
		} else {
			$('#optionsChangeDeviceStatesExecute').addClass('disabled');				
			$('#optionsChangeDeviceStatesShowChanges').addClass('disabled');				
		}
	});
	$('#optionsChangeDeviceStatesExecute').on('click', function(){ 
		optionsChangeDeviceStates($('#optionsChangeDeviceStatesSourceValue').val(), $('#optionsChangeDeviceStatesDestinationValue').val(), $('#optionsChangeDeviceStatesDestinationCommonRole').val(), $('#optionsChangeDeviceStatesFilterStates').val(), $('#optionsChangeDeviceStatesFilterRoles').val(), $('#optionsChangeDeviceStatesFilterDevices').val(), false);
		$('#optionsChangeDeviceStatesSourceValue').trigger('change');
	});
	function optionsChangeDeviceStates(sourceValue, destinationValue, destinationCommonRole, filterStates, filterRoles, filterDevices, countOnly, quiet){
		var changeCount = 0;
		var changeList = [];
		if ((quiet || countOnly || confirm(_("Really change all States?"))) && typeof views != udef) views.forEach(function(view){
			var viewName = view.commonName;
			if (typeof view.devices != udef) view.devices.forEach(function(device){
				if(filterDevices == "" || filterDevices.indexOf("[" + viewName + "]" + device.commonName) > -1){ 				
					var role = device.commonRole || "";
					if(filterRoles == "" || filterRoles.indexOf(role) > -1){ 
						if (iQontrolRoles[role] && iQontrolRoles[role].states) iQontrolRoles[role].states.forEach(function(roleState){
							if (filterStates.length == 0 || filterStates.indexOf(roleState) != -1) {
								var deviceStateIndex = device.states && device.states.findIndex(function(state){ return state.state == roleState; });
								if (deviceStateIndex > -1){ //state exists
									var deviceState = device.states[deviceStateIndex];
								} else { //take default from iQontrolRoles
									switch(roleState){ 
										case "VALVE_STATES": case "INFO_A": case "INFO_B": case "ADDITIONAL_CONTROLS": case "ADDITIONAL_INFO": case "REMOTE_CHANNELS": case "REMOTE_ADDITIONAL_BUTTONS":
										var commonRole = "array";
										var value = [];
										break;
										
										case "SET_VALUE": case "OFF_SET_VALUE": case "UP_SET_VALUE": case "DOWN_SET_VALUE": case "FAVORITE_POSITION_SET_VALUE": case "URL": case "HTML": case "BACKGROUND_VIEW": case "BACKGROUND_URL": case "BACKGROUND_HTML": case "BADGE_COLOR": case "OVERLAY_INACTIVE_COLOR": case "OVERLAY_ACTIVE_COLOR": case "GLOW_INACTIVE_COLOR": case "GLOW_ACTIVE_COLOR":
										var commonRole = "const";
										var value = "";
										break;
										
										default:
										var commonRole = "linkedState";
										var value = "";
									}
									var deviceState = {
										state: roleState,
										commonRole: commonRole,
										value: value
									};
								}
								if(deviceState){
									if(deviceState.commonRole && deviceState.commonRole == "array"){
										var stateList = tryParseJSON(deviceState.value);
										if(Array.isArray(stateList) == false) stateList = [];
									} else {
										var stateList = [deviceState];
									}
								}
								stateList.forEach(function(state){
									if(state 
										&& ((sourceValue != "" && state.value.indexOf(sourceValue) != -1)
											|| (sourceValue == "" && state.value == "")
											|| sourceValue == "*"
										)
									) {
										changeCount++;
										changeList.push(viewName + " - " + device.commonName + " - " + roleState + " (" + state.value + ")");
										if(!countOnly){
											console.log("CHANGE STATE");
											if(destinationValue != "*"){
												if(sourceValue == "*"){
													state.value = destinationValue;
												} else {
													state.value = state.value.replace(sourceValue, destinationValue);
												}
											}
											if(deviceState.commonRole != "array" && destinationCommonRole != "*"){
												state.commonRole = destinationCommonRole;
											}
											if(typeof device.states == udef) device.states = [];
											if(!(deviceStateIndex > -1)) device.states.push(state);
										}
									}
								});
								if(deviceState.commonRole == "array"){
									deviceState.value = JSON.stringify(stateList);
								}
							}
						});
					}
				}
			});
		});		
		if(!countOnly && changeCount > 0) {
			alert(_("%s states have been exchanged. Don't forget to save your changes!", changeCount));
			onChange();
		}		
		return {changeCount: changeCount, changeList: changeList};
	}

	//Export All Views
	$('#optionsBackupRestoreExportViewsAll').on('click', function(){
		saveStringAsLocalFile(JSON.stringify(views), "charset=utf-8", "text/json", "views.json", true);
	});

	$('#optionsBackupRestoreExportViewsSelectedSelection').on('change', function(){
		var selected = $('#optionsBackupRestoreExportViewsSelectedSelection').val() || [];
		if(selected.length){
			$('#optionsBackupRestoreExportViewsSelected').removeClass('disabled');
		} else {
			$('#optionsBackupRestoreExportViewsSelected').addClass('disabled');
		}
	});
	$('#optionsBackupRestoreExportViewsSelected').on('click', function(){
		var selected = $('#optionsBackupRestoreExportViewsSelectedSelection').val() || [];
		if(selected.length){
			var selectedViews = [];
			selected.forEach(function(index){
				selectedViews.push(views[index]);
				selectedViews[selectedViews.length - 1].devices.forEach(function(device){ //Remove symbolic links
					if(device.symbolicLinkFrom) delete device.symbolicLinkFrom;
				});
			});
			saveStringAsLocalFile(JSON.stringify(selectedViews), "charset=utf-8", "text/json", "selected_views.json", true);
		}
	});

	//Export Toolbar
	$('#optionsBackupRestoreExportToolbar').on('click', function(){
		saveStringAsLocalFile(JSON.stringify(toolbar), "charset=utf-8", "text/json", "toolbar.json", true);
	});

	//Export Panel
	$('#optionsBackupRestoreExportPanel').on('click', function(){
		//Select elements with class=value and build settings object
		var options = {};
		$('.value').each(function () {
			var $this = $(this);
			if ($this.attr('id').indexOf('panel') == 0){ //Include only panel settings
				if ($this.attr('type') === 'checkbox') {
					options[$this.attr('id')] = $this.prop('checked');
				} else {
					options[$this.attr('id')] = $this.val();
				}
			}
		});
		saveStringAsLocalFile(JSON.stringify(options), "charset=utf-8", "text/json", "panel.json", true);
	});

	//Export Options
	$('#optionsBackupRestoreExportOptions').on('click', function(){
		//Select elements with class=value and build settings object
		var options = {};
		$('.value').each(function () {
			var $this = $(this);
			if ($this.attr('id').indexOf('panel') != 0){ //Exclude panel settings
				if ($this.attr('type') === 'checkbox') {
					options[$this.attr('id')] = $this.prop('checked');
				} else {
					options[$this.attr('id')] = $this.val();
				}
			}
		});
		saveStringAsLocalFile(JSON.stringify(options), "charset=utf-8", "text/json", "options.json", true);
	});

	//Export Custom
	$('#optionsBackupRestoreExportCustoms').on('click', function(){
		var customs = [];
		for(objectId in parent.gMain.objects){
			if(typeof parent.gMain.objects[objectId].common != udef && typeof parent.gMain.objects[objectId].common.custom  != udef && typeof parent.gMain.objects[objectId].common.custom[adapter + "." + instance] != udef && parent.gMain.objects[objectId].common.custom[adapter + "." + instance] != "") customs.push({id: objectId, custom: parent.gMain.objects[objectId].common.custom[adapter + "." + instance]});
		};
		saveStringAsLocalFile(JSON.stringify(customs), "charset=utf-8", "text/json", "custom.json", true);
	});

	//Export Everything (but userfiles)
	$('#optionsBackupRestoreExportEverything').on('click', function(){
		var obj = {};
		obj.views = views;
		obj.toolbar = toolbar;
		//Select elements with class=value and build settings object
		var options = {};
		$('.value').each(function () {
			var $this = $(this);
			if ($this.attr('type') === 'checkbox') {
				options[$this.attr('id')] = $this.prop('checked');
			} else {
				options[$this.attr('id')] = $this.val();
			}
		});
		obj.options = options;
		var customs = [];
		for(objectId in parent.gMain.objects){
			if(typeof parent.gMain.objects[objectId].common != udef && typeof parent.gMain.objects[objectId].common.custom  != udef && typeof parent.gMain.objects[objectId].common.custom[adapter + "." + instance] != udef && parent.gMain.objects[objectId].common.custom[adapter + "." + instance] != "") customs.push({id: objectId, custom: parent.gMain.objects[objectId].common.custom[adapter + "." + instance]});
		};
		obj.customs = customs;
		saveStringAsLocalFile(JSON.stringify(obj), "charset=utf-8", "text/json", "everything.json", true);
	});

	//Export Userfiles
	$('#optionsBackupRestoreExportUserfiles').on('click', function(){
		$('#optionsBackupRestoreExportUserfiles').addClass('disabled');
		$('#optionsBackupRestoreExportUserfilesIcon').text("hourglass_empty");
		$('#optionsBackupRestoreExportUserfilesProgress').show();
		if(confirm(_("Depending on the size it may take a while to create the zip file."))){
			readDirAsZip(userfilesImagePath + '/', function(err, data){
				if (err) {
					alert("Error: " + err);
				} else if (data) {
					saveStringAsLocalFile(data, "base64", "application/zip", "userfiles.zip", true);
				} else {
					alert("Error: no data received.");
				}
				$('#optionsBackupRestoreExportUserfilesIcon').text("file_download");
				$('#optionsBackupRestoreExportUserfiles').removeClass('disabled');
				$('#optionsBackupRestoreExportUserfilesProgress').hide();
			});
		} else {
			$('#optionsBackupRestoreExportUserfilesIcon').text("file_download");
			$('#optionsBackupRestoreExportUserfiles').removeClass('disabled');
			$('#optionsBackupRestoreExportUserfilesProgress').hide();
		}
	});

	//Import Views
	$('#optionsBackupRestoreImportViewsOverwrite, #optionsBackupRestoreImportViewsAppend').on('click', function(){
		var overwrite = ($(this).data('overwrite') == true);
		loadLocalFileAsString(".json", function(result){
			var resultObj = tryParseJSON(result);
			var resultObjValid = true;
			if(resultObj && typeof resultObj.forEach == "function"){
				resultObj.forEach(function(entry, index){
					if(typeof entry.commonName == "undefined") entry.commonName = "View";
					if(!overwrite){
						var viewNames = [];
						views.forEach(function(view){ if(view.commonName) viewNames.push(view.commonName); });
						var existingNameIndex = 0;
						while(viewNames.indexOf(entry.commonName + (existingNameIndex ? " " + existingNameIndex : "")) != -1) { existingNameIndex++; };
						if(existingNameIndex) entry.commonName = entry.commonName + " " + existingNameIndex;
					}
					if(!overwrite && entry.devices) entry.devices.forEach(function(device){ //Remove symbolic links, if views are appended
						if(device.symbolicLinkFrom) delete device.symbolicLinkFrom;
					});
				});
			} else {
				resultObjValid = false;
			}
			if(resultObjValid) {
				if(overwrite){
					if(confirm(_("Really overwrite existing Settings?"))){
						views = resultObj;
						alert(_("Settings imported."));
						onChange();
					}
				} else {
					views = views.concat(resultObj);
						alert(_("Settings imported."));
						onChange();
				}
			} else {
				alert(_("Error: Invalid data."));
			}
		});
	});

	//Import Toolbar
	$('#optionsBackupRestoreImportToolbarOverwrite, #optionsBackupRestoreImportToolbarAppend').on('click', function(){
		var overwrite = ($(this).data('overwrite') == true);
		loadLocalFileAsString(".json", function(result){
			var resultObj = tryParseJSON(result);
			var resultObjValid = true;
			if(resultObj && typeof resultObj.forEach == "function"){
				resultObj.forEach(function(entry, index){
					if(typeof entry.nativeLinkedView == "undefined"){
						resultObjValid = false;
					} else {
						if(typeof entry.commonName == "undefined") entry.commonName = result.nativeLinkedView;
						if(typeof entry.nativeIcon == "undefined") entry.nativeIcon = "grid";
					}
				});
			} else {
				resultObjValid = false;
			}
			if(resultObjValid) {
				if(overwrite){
					if(confirm(_("Really overwrite existing Settings?"))){
						toolbar = resultObj;
						alert(_("Settings imported."));
						onChange();
					}
				} else {
					toolbar = toolbar.concat(resultObj);
						alert(_("Settings imported."));
						onChange();
				}
			} else {
				alert(_("Error: Invalid data."));
			}
		});
	});

	//Import Panel
	$('#optionsBackupRestoreImportPanel').on('click', function(){
		loadLocalFileAsString(".json", function(result){
			var resultObj = tryParseJSON(result);
			var resultObjValid = true;
			if(!(resultObj && typeof resultObj == "object" && typeof resultObj.forEach == udef)){
				resultObjValid = false;
			}
			if(resultObjValid) {
				if(confirm(_("Really overwrite existing Settings?"))){
					//Select elements with id=key and class=value and insert value
					$('.value').each(function () {
						var $key = $(this);
						var id = $key.attr('id');
						if(id.indexOf('panel') == 0){ //Include just panel settings
							if ($key.attr('type') === 'checkbox') {
								$key.prop('checked', resultObj[id]);
							} else {
								$key.val(resultObj[id]);
							}
						}
					});
					$('.MaterializeColorPicker').trigger('change');
					alert(_("Settings imported."));
					onChange();
				}
			} else {
				alert(_("Error: Invalid data."));
			}
		});
	});

	//Import Options
	$('#optionsBackupRestoreImportOptions').on('click', function(){
		loadLocalFileAsString(".json", function(result){
			var resultObj = tryParseJSON(result);
			var resultObjValid = true;
			if(!(resultObj && typeof resultObj == "object" && typeof resultObj.forEach == udef)){
				resultObjValid = false;
			}
			if(resultObjValid) {
				if(confirm(_("Really overwrite existing Settings?"))){
					//Select elements with id=key and class=value and insert value
					$('.value').each(function () {
						var $key = $(this);
						var id = $key.attr('id');
						if(id.indexOf('panel') != 0){ //Exclude panel settings
							if ($key.attr('type') === 'checkbox') {
								$key.prop('checked', resultObj[id]);
							} else {
								$key.val(resultObj[id]);
							}
						}
					});
					$('.MaterializeColorPicker').trigger('change');
					alert(_("Settings imported."));
					onChange();
				}
			} else {
				alert(_("Error: Invalid data."));
			}
		});
	});

	//Import Customs
	$('#optionsBackupRestoreImportCustoms').on('click', function(){
		loadLocalFileAsString(".json", function(result){
			var resultObj = tryParseJSON(result);
			var resultObjValid = true;
			if(resultObj && typeof resultObj.forEach == "function"){
				resultObj.forEach(function(entry, index){
					if(typeof entry.id == "undefined" || typeof entry.custom != "object"){
						resultObjValid = false;
					}
				});
			} else {
				resultObjValid = false;
			}
			if(resultObjValid) {
				initDialog("dialogOptionsBackupRestoreImportCustoms", function(){ //Import
					if(confirm(_("Really overwrite custom datapoint settings? This can't be undone."))){
						var customs = $("#dialogOptionsBackupRestoreImportCustoms").data('customs');
						var dialogOptionsBackupRestoreImportCustomsCounter = 0;
						var dialogOptionsBackupRestoreImportCustomsError = false;
						customs.forEach(function(custom, index){
							if($('.dialogOptionsBackupRestoreImportCustomsListItem[data-index=' + index + ']').prop('checked')){
								dialogOptionsBackupRestoreImportCustomsCounter++;
								console.log("Updating ID: " + custom.id + " with custom: " + custom.custom);
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									var _custom = custom;
									socket.emit('getObject', _custom.id, function(err, _obj){
										if(_obj){
											if(typeof _obj.common == udef) _obj.common = {};
											if(typeof _obj.common.custom == udef) _obj.common.custom = {};
											_obj.common.custom[adapter + "." + instance] = _custom.custom;
											socket.emit('setObject', _custom.id, _obj, function(err){
												dialogOptionsBackupRestoreImportCustomsCounter--;
												if(err) dialogOptionsBackupRestoreImportCustomsError = true;
												if(dialogOptionsBackupRestoreImportCustomsCounter == 0){
													if(dialogOptionsBackupRestoreImportCustomsError){
														alert(_("Error: Invalid data."));
													} else {
														alert(_("Settings imported."));
														onChange();
													}
												}
											});
										}
									});
								})(); //<--End Closure
							}
						});
					}
				});
				$("#dialogOptionsBackupRestoreImportCustoms").data('customs', resultObj)
				$('#dialogOptionsBackupRestoreImportCustomsList').empty();
				resultObj.forEach(function(custom, index){
					$('#dialogOptionsBackupRestoreImportCustomsList').append("<p><label><input class='dialogOptionsBackupRestoreImportCustomsListItem' type='checkbox' checked='checked' data-index='" + index + "'><span>" + custom.id + "</span></label></p>");
				});
				$("#dialogOptionsBackupRestoreImportCustoms").modal('open');
				$("#dialogOptionsBackupRestoreImportCustoms").css('z-index', modalZIndexCount++);
			} else {
				alert(_("Error: Invalid data."));
			}
		});
	});

	//Import Everything (but userfiles)
	$('#optionsBackupRestoreImportEverything').on('click', function(){
		loadLocalFileAsString(".json", function(result){
			var resultObj = tryParseJSON(result);
			var resultObjValid = true;
			if(resultObj && typeof resultObj == "object" && typeof resultObj.forEach == udef){
				//Views
				if(resultObj.views && typeof resultObj.views.forEach == "function") {
					resultObj.views.forEach(function(entry, index){
						if(typeof entry.commonName == "undefined") entry.commonName = "View";
					});
				} else {
					resultObjValid = false;
				}
				//Toolbar
				if(resultObj.toolbar && typeof resultObj.toolbar.forEach == "function"){
					resultObj.toolbar.forEach(function(entry, index){
						if(typeof entry.nativeLinkedView == "undefined"){
							resultObjValid = false;
						} else {
							if(typeof entry.commonName == "undefined") entry.commonName = result.nativeLinkedView;
							if(typeof entry.nativeIcon == "undefined") entry.nativeIcon = "grid";
						}
					});
				} else {
					resultObjValid = false;
				}
				//Options and panel
				if(!(resultObj.options && typeof resultObj.options == "object" && typeof resultObj.options.forEach == udef)){
					resultObjValid = false;
				}
				//Customs
				if(resultObj.customs && typeof resultObj.customs.forEach == "function"){
					resultObj.customs.forEach(function(entry, index){
						if(typeof entry.id == "undefined" || typeof entry.custom != "object"){
							resultObjValid = false;
						}
					});
				} else {
					resultObjValid = false;
				}
			} else {
				resultObjValid = false;
			}
			if(resultObjValid) {
				if(confirm(_("Really overwrite existing Settings?"))){
					//Views
					if(confirm(_("Import Views (overwrite existing views)") + "?")) views = resultObj.views;
					//Toolbar
					if(confirm(_("Import Toolbar (overwrite exisiting toolbar)") + "?")) toolbar = resultObj.toolbar;
					//Panel
					//Select elements with id=key and class=value and insert value
					if(confirm(_("Import Panel") + "?")) $('.value').each(function () {
						var $key = $(this);
						var id = $key.attr('id');
						if(id.indexOf('panel') == 0){ //Include just panel settings
							if ($key.attr('type') === 'checkbox') {
								$key.prop('checked', resultObj.options[id]);
							} else {
								$key.val(resultObj.options[id]);
							}
						}
					});
					//Options
					//Select elements with id=key and class=value and insert value
					if(confirm(_("Import Options") + "?")) $('.value').each(function () {
						var $key = $(this);
						var id = $key.attr('id');
						if(id.indexOf('panel') != 0){ //Exclude panel settings
							if ($key.attr('type') === 'checkbox') {
								$key.prop('checked', resultObj.options[id]);
							} else {
								$key.val(resultObj.options[id]);
							}
						}
					});
					$('.MaterializeColorPicker').trigger('change');
					alert(_("Adapter-Settings imported. In the next step you can chose which custom datapoint settings schould be imported."));
					onChange();
					//Customs
					initDialog("dialogOptionsBackupRestoreImportCustoms", function(){ //Import
						if(confirm(_("Really overwrite custom datapoint settings? This can't be undone."))){
							var customs = $("#dialogOptionsBackupRestoreImportCustoms").data('customs');
							var dialogOptionsBackupRestoreImportCustomsCounter = 0;
							var dialogOptionsBackupRestoreImportCustomsError = false;
							customs.forEach(function(custom, index){
								if($('.dialogOptionsBackupRestoreImportCustomsListItem[data-index=' + index + ']').prop('checked')){
									dialogOptionsBackupRestoreImportCustomsCounter++;
									console.log("Updating ID: " + custom.id + " with custom: " + custom.custom);
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _custom = custom;
										socket.emit('getObject', _custom.id, function(err, _obj){
											if(_obj){
												if(typeof _obj.common == udef) _obj.common = {};
												if(typeof _obj.common.custom == udef) _obj.common.custom = {};
												_obj.common.custom[adapter + "." + instance] = _custom.custom;
												socket.emit('setObject', _custom.id, _obj, function(err){
													dialogOptionsBackupRestoreImportCustomsCounter--;
													if(err) dialogOptionsBackupRestoreImportCustomsError = true;
													if(dialogOptionsBackupRestoreImportCustomsCounter == 0){
														if(dialogOptionsBackupRestoreImportCustomsError){
															alert(_("Error: Invalid data."));
														} else {
															alert(_("Settings imported."));
															onChange();
														}
													}
												});
											}
										});
									})(); //<--End Closure
								}
							});
						}
					});
					$("#dialogOptionsBackupRestoreImportCustoms").data('customs', resultObj.customs)
					$('#dialogOptionsBackupRestoreImportCustomsList').empty();
					resultObj.customs.forEach(function(custom, index){
						$('#dialogOptionsBackupRestoreImportCustomsList').append("<p><label><input class='dialogOptionsBackupRestoreImportCustomsListItem' type='checkbox' checked='checked' data-index='" + index + "'><span>" + custom.id + "</span></label></p>");
					});
					$("#dialogOptionsBackupRestoreImportCustoms").modal('open');
					$("#dialogOptionsBackupRestoreImportCustoms").css('z-index', modalZIndexCount++);
				}
			} else {
				alert(_("Error: Invalid data."));
			}
		});
	});

	//Import Userfiles 		xxxx 	not working with large zip-files 	xxxx
	$('#optionsBackupRestoreImportUserfiles').on('click', function(){
		loadLocalFileAsArrayBuffer(".zip", function(result){
			if(result) {
				if(confirm(_("Really import files? Exisiting files will be overwritten. Depending on the size it may take a while to unpack the zip file."))){
					$('#optionsBackupRestoreImportUserfiles').addClass('disabled');
					$('#optionsBackupRestoreImportUserfilesIcon').text("hourglass_empty");
					$('#optionsBackupRestoreImportUserfilesProgress').show();
					writeDirAsZip(userfilesImagePath + '/', result, function(err){
						if(err){
							alert(_("Error: Invalid data."));
						} else {
							getImages(function(){
								values2table('tableImages', images, onChange, onTableImagesReady);
								var dummy = $('#imagesSelectedDir').val();
								$('#imagesSelectedDir').val(dummy).trigger('change');
								$('#imagesSelectedDir').select();
							});
							alert(_("Files imported."));
						}
						$('#optionsBackupRestoreImportUserfilesIcon').text("file_upload");
						$('#optionsBackupRestoreImportUserfiles').removeClass('disabled');
						$('#optionsBackupRestoreImportUserfilesProgress').hide();
					});
				}
			} else {
				alert(_("Error: Invalid data."));
			}
		});
	});
}

/************** SAVE *****************************************************************
*** This will be called by the admin adapter when the user presses the save button ***
*************************************************************************************/
async function save(callback) {
	//Update symbolic links
	updateSymbolicLinks();

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

	//Get widgetDatapoints
	var widgetsToDownload = [];
	if (typeof views != udef) views.forEach(function(view){
		if (typeof view.devices != udef) view.devices.forEach(function(device){
			if (typeof device.states != udef) device.states.forEach(function(state){
				if((state.state == "URL" ||state.state == "BACKGROUND_URL") && state.commonRole == "const" && state.value != "") {
					var filename = null;
					var path = null;
					if(state.value.indexOf("./images/widgets/") == 0){
						filename = state.value.slice(8, (state.value.lastIndexOf('?') == -1 ? state.value.length : state.value.lastIndexOf('?')));
						path = imagePath;
					}
					if(state.value.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0){
						filename = state.value.slice(29, (state.value.lastIndexOf('?') == -1 ? state.value.length : state.value.lastIndexOf('?')));
						path = userfilesImagePath;
					}
					if(filename && path){
						widgetsToDownload.push({filename: filename, path: path});
					}
				}
			});
		});
	});
	if($("#panelBackgroundURLCommonRole").val() == "const" && $("#panelBackgroundURLValue").val() != "") {
		var value = $("#panelBackgroundURLValue").val();
		var filename = null;
		var path = null;
		if(value.indexOf("./images/widgets/") == 0){
			filename = value.slice(8, (value.lastIndexOf('?') == -1 ? value.length : value.lastIndexOf('?')));
			path = imagePath;
		}
		if(value.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0){
			filename = value.slice(29, (value.lastIndexOf('?') == -1 ? value.length : value.lastIndexOf('?')));
			path = userfilesImagePath;
		}
		if(filename && path){
			widgetsToDownload.push({filename: filename, path: path});
		}
	}
	widgetsToDownload = removeDuplicates(widgetsToDownload);
	if(widgetsToDownload.length > 0){
		var widgetsDatapoints = [];
		var widgetsToDownloadCount = widgetsToDownload.length;
		widgetsToDownload.forEach(function(widget){
			downloadFileAsStringAsync(widget.filename, widget.path).then(function(htmlAsString){
				widgetsToDownloadCount--;
				$(htmlAsString).filter('meta[name="widget-datapoint"]').each(function(){
					var id = $(this).prop('content');
					var data = $(this).data() || {};
					var type = data.type || "string";
					var role = data.role || "";
					var name = data.name || id;
					var min = data.min || null;
					var max = data.max || null;
					var def = data.def || null;
					var unit = data.unit || null;
					var widgetDatapoint = {id: id, type: type, role: role, name: name, min: min, max: max, def: def, unit: unit};
					widgetsDatapoints.push(widgetDatapoint);
					console.log("Found widgetDatapoint: ", widgetDatapoint);
				});
				if(widgetsToDownloadCount == 0){
					obj.widgetsDatapoints = widgetsDatapoints;
					//Save settings
					console.log("Save settings");
					callback(obj);
				}
			});
		});
	} else {
		obj.widgetsDatapoints = [];
		//Save settings
		console.log("Save settings");
		callback(obj);
	}
}
