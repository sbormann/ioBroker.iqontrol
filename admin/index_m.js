//iQontrol - Copyright (c) by Sebatian Bormann
//Please visit https://github.com/sbormann/ioBroker.iqontrol for licence-agreement and further information

//++++++++++ SETTINGS ++++++++++
var namespace = "iqontrol.meta";
var useCache = true;
var imagePath = "/iqontrol/images";
var userfilesImagePath = "/iqontrol.meta/userimages";
var userfilesImagePathBS = userfilesImagePath.replace(/\//g, "\\");

var inbuiltWallpapers = [
	"bakestone.jpg",
	"bottle.jpg", 
	"city_01_alex-knight.jpg", 
	"decor.jpg", 
	"gradient_01_codioful-formerly.jpg", 
	"gradient_02_codioful-formerly.jpg", 
	"gradient_03_codioful-formerly.jpg", 
	"gradient_04_codioful-formerly.jpg", 
	"gradient_05_codioful-formerly.jpg", 
	"gradient_06_ashley-whitlatch.jpg", 
	"gradient_07_luke-chesser.jpg", 
	"gradient_08_luke-chesser.jpg", 
	"gradient_09_luke-chesser.jpg", 
	"gradient_10_mymind.jpg", 
	"gradient_11_mymind.jpg", 
	"grass.jpg", 
	"green.jpg", 
	"landscape_01_daniel-olah.jpg", 
	"landscape_02_benjamin-voros.jpg", 
	"landscape_03_jonatan-pie.jpg", 
	"orangedrops.jpg", 
	"pattern_01_sean-sinclair.jpg", 
	"pattern_02_horvath-.jpg", 
	"pattern_03_milad-fakurian.jpg", 
	"pattern_04_milad-fakurian.jpg", 
	"pattern_05_mohammad.jpg", 
	"pattern_06_ruvim-noga.jpg", 
	"pub_clem-onojeghuo.jpg", 
	"shelf_samantha-gades.jpg", 
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
	{filename:"json-table/json-table.html", name:"JSON Table", icon: "json-table/json-table.png"},
	{filename:"json-table/device-counter.html", name:"Device-Counter", icon: "json-table/device-counter.png"},
	{filename:"map/map.html", name:"Map", icon: "map/map.png"}
];

var	optionsLayoutDefaultIconsStandard = {
	ERROR:							{errorIcon_on: "./images/icons/error.png"},
	UNREACH:						{unreachIcon_on: "./images/icons/unreach.png"},
	BATTERY:						{batteryIcon_on: "./images/icons/battery.png"},
	iQontrolView: 					{icon_on: "./images/icons/blank.png"},
	iQontrolSwitch: 				{icon_on: "./images/icons/switch_on.png", 					icon_off: "./images/icons/switch_off.png"},
	iQontrolButton: 				{icon_on: "./images/icons/button.png", 						icon_off: "./images/icons/button.png"},
	iQontrolLight: 					{icon_on: "./images/icons/light_on.png", 					icon_off: "./images/icons/light_off.png"},
	iQontrolFan: 					{icon_on: "./images/icons/fan_on.png", 						icon_off: "./images/icons/fan_off.png"},
	iQontrolThermostat: 			{icon_on: "./images/icons/radiator.png", 					icon_off: "./images/icons/radiator.png"},
	iQontrolHomematicThermostat: 	{icon_on: "./images/icons/radiator.png", 					icon_off: "./images/icons/radiator.png"},
	iQontrolHomematicIpThermostat: 	{icon_on: "./images/icons/radiator.png", 					icon_off: "./images/icons/radiator.png"},
	iQontrolTemperature: 			{icon_on: "./images/icons/temperature.png", 				icon_off: "./images/icons/temperature.png"},
	iQontrolHumidity: 				{icon_on: "./images/icons/humidity.png", 					icon_off: "./images/icons/humidity.png"},
	iQontrolPressure: 				{icon_on: "./images/icons/pressure.png", 					icon_off: "./images/icons/pressure.png"},
	iQontrolBrightness: 			{icon_on: "./images/icons/brightness_light.png", 			icon_off: "./images/icons/brightness_dark.png"},
	iQontrolMotion: 				{icon_on: "./images/icons/motion_on.png", 					icon_off: "./images/icons/motion_off.png"},
	iQontrolDoor: 					{icon_on: "./images/icons/door_opened.png", 				icon_off: "./images/icons/door_closed.png", 				icon_tilted: "./images/icons/door_opened.png"},
	iQontrolGarageDoor: 			{icon_on: "./images/icons/garagedoor_opened.png", 			icon_off: "./images/icons/garagedoor_closed.png", 			icon_tilted: "./images/icons/garagedoor_opened.png"},
	iQontrolDoorWithLock: 			{icon_on: "./images/icons/door_opened.png", 				icon_off: "./images/icons/door_closed.png", 				icon_locked: "./images/icons/door_locked.png", icon_unlocked: "./images/icons/door_unlocked.png"},
	iQontrolWindow: 				{icon_on: "./images/icons/window_opened.png", 				icon_off: "./images/icons/window_closed.png", 				icon_tilted: "./images/icons/window_tilted.png"},
	iQontrolBlind: 					{icon_on: "./images/icons/blind_opened.png", 				icon_off: "./images/icons/blind_closed.png", 				icon_middle: "./images/icons/blind_middle.png", icon_closing: "./images/icons/blind_closing.png", icon_opening: "./images/icons/blind_opening.png"},
	iQontrolFire: 					{icon_on: "./images/icons/fire_on.png", 					icon_off: "./images/icons/fire_off.png"},
	iQontrolFlood: 					{icon_on: "./images/icons/flood_on.png", 					icon_off: "./images/icons/flood_off.png"},
	iQontrolAlarm: 					{icon_on: "./images/icons/alarm_on.png", 					icon_off: "./images/icons/alarm_off.png", 					icon_triggered: "./images/icons/alarm_on_triggered.png"},
	iQontrolBattery: 				{icon_on: "./images/icons/battery_full.png", 				icon_off: "./images/icons/battery_empty.png", 				icon_charged75: "./images/icons/battery_75.png", icon_charged50: "./images/icons/battery_50.png", icon_charged25: "./images/icons/battery_25.png", icon_charged10: "./images/icons/battery_10.png", icon_charging: "./images/icons/battery_charging_overlay.png", icon_discharging: "./images/icons/battery_discharging_overlay.png"},
	iQontrolDateAndTime: 			{icon_on: "./images/icons/time_alarmclock_on.png", 			icon_off: "./images/icons/time_alarmclock_off.png", 		icon_ringing: "./images/icons/bell_ringing_overlay.png"},
	iQontrolValue: 					{icon_on: "./images/icons/value_on.png", 					icon_off: "./images/icons/value_off.png"},
	iQontrolProgram: 				{icon_on: "./images/icons/play_on.png", 					icon_off: "./images/icons/play.png"},
	iQontrolScene: 					{icon_on: "./images/icons/play.png", 						icon_off: "./images/icons/play.png"},
	iQontrolMedia: 					{icon_on: "./images/icons/media_on.png", 					icon_off: "./images/icons/media_off.png"},
	iQontrolPopup: 					{icon_on: "./images/icons/popup.png", 						icon_off: "./images/icons/popup.png"},
	iQontrolExternalLink: 			{icon_on: "./images/icons/link.png", 						icon_off: "./images/icons/link.png"},
	iQontrolWidget: 				{icon_on: "./images/icons/blank.png",						icon_off: "./images/icons/blank.png"},
	iQontrolInfoText: 				{icon_on: "./images/icons/info_bubble_off.png", 			icon_off: "./images/icons/blank.png"}
}

var	optionsLayoutDefaultSymbolsStandard = {
	TEMPERATURE:					{temperatureIcon_on: "./images/symbols/temperature.png"},
	BRIGHTNESS:						{brightnessIcon_on: "./images/symbols/brightness.png"},
	SLATS_LEVEL:					{slatsLevelIcon_on: "./images/symbols/slats.png"},
	VOLTAGE:						{voltageIcon_on: "./images/symbols/power.png"},
	COLOR:							{colorIcon_on: "./images/symbols/color.png"},
	VOLUME:							{volumeIcon_on: "./images/symbols/volume.png"},
	HUMIDITY:						{humidityIcon_on: "./images/symbols/humidity.png"},
	POWER:							{powerIcon_on: "./images/symbols/power.png"},
	ELAPSED:						{elapsedIcon_on: "./images/symbols/time.png"}
}

var iconPresets = [
	{
		name: "Flat",
		description: "Flat (default) iconset of iQontrol. Icons are taken from www.icons8.com.",
		iconEquivalents: {
			ERROR: ["./images/icons/error.png"],
			UNREACH: ["./images/icons/unreach.png"],
			BATTERY: ["./images/icons/battery.png"],
			airconditioner_off: ["./images/icons/airconditioner_off.png"],
			airconditioner_on: ["./images/icons/airconditioner_on.png"],
			alarm_off: ["./images/icons/alarm_off.png"],
			alarm_on: ["./images/icons/alarm_on.png"],
			alarm_on_triggered: ["./images/icons/alarm_on_triggered.png"],
			battery_10: ["./images/icons/battery_10.png"],
			battery_25: ["./images/icons/battery_25.png"],
			battery_50: ["./images/icons/battery_50.png"],
			battery_75: ["./images/icons/battery_75.png"],
			battery_charging_overlay: ["./images/icons/battery_charging_overlay.png"],
			battery_discharging_overlay: ["./images/icons/battery_discharging_overlay.png"],
			battery_empty: ["./images/icons/battery_empty.png"],
			battery_full: ["./images/icons/battery_full.png"],
			bell_off: ["./images/icons/bell_off.png"],
			bell_on: ["./images/icons/bell_on.png"],
			bell_ringing_off: ["./images/icons/bell_ringing_off.png"],
			bell_ringing_on: ["./images/icons/bell_ringing_on.png"],
			bell_ringing_overlay: ["./images/icons/bell_ringing_overlay.png"],
			blank: ["./images/icons/blank.png"],
			blind_closed: ["./images/icons/blind_closed.png"],
			blind_closing: ["./images/icons/blind_closing.png"],
			blind_middle: ["./images/icons/blind_middle.png"],
			blind_opened: ["./images/icons/blind_opened.png"],
			blind_opening: ["./images/icons/blind_opening.png"],
			brightness_dark: ["./images/icons/brightness_dark.png"],
			brightness_light: ["./images/icons/brightness_light.png"],
			button: ["./images/icons/button.png"],
			camera_on: ["./images/icons/camera_on.png"],
			camera_ptz_on: ["./images/icons/camera_ptz_on.png"],
			cooling_off: ["./images/icons/cooling_off.png"],
			cooling_on: ["./images/icons/cooling_on.png"],
			door_closed: ["./images/icons/door_closed.png"],
			door_locked: ["./images/icons/door_locked.png"],
			door_opened: ["./images/icons/door_opened.png"],
			door_unlocked: ["./images/icons/door_unlocked.png"],
			fan_off: ["./images/icons/fan_off.png"],
			fan_on: ["./images/icons/fan_on.png"],
			fire_off: ["./images/icons/fire_off.png"],
			fire_on: ["./images/icons/fire_on.png"],
			firebox_green: ["./images/icons/firebox_green.png"],
			firebox_off: ["./images/icons/firebox_off.png"],
			firebox_on: ["./images/icons/firebox_on.png"],
			flood_off: ["./images/icons/flood_off.png"],
			flood_on: ["./images/icons/flood_on.png"],
			garagedoor_closed: ["./images/icons/garagedoor_closed.png"],
			garagedoor_opened: ["./images/icons/garagedoor_opened.png"],
			gas_off: ["./images/icons/gas_off.png"],
			gas_on: ["./images/icons/gas_on.png"],
			gate_closed: ["./images/icons/gate_closed.png"],
			gate_opened: ["./images/icons/gate_opened.png"],
			heating_off: ["./images/icons/heating_off.png"],
			heating_on: ["./images/icons/heating_on.png"],
			humidity: ["./images/icons/humidity.png"],
			info_bubble_off: ["./images/icons/info_bubble_off.png"],
			info_bubble_on: ["./images/icons/info_bubble_on.png"],
			info_circle_off: ["./images/icons/info_circle_off.png"],
			info_circle_on: ["./images/icons/info_circle_on.png"],
			info_square_off: ["./images/icons/info_square_off.png"],
			info_square_on: ["./images/icons/info_square_on.png"],
			kitchenhood_off: ["./images/icons/kitchenhood_off.png"],
			kitchenhood_on: ["./images/icons/kitchenhood_on.png"],
			light_desklamp_off: ["./images/icons/light_desklamp_off.png"],
			light_desklamp_on: ["./images/icons/light_desklamp_on.png"],
			light_lampshade_off: ["./images/icons/light_lampshade_off.png"],
			light_lampshade_on: ["./images/icons/light_lampshade_on.png"],
			light_off: ["./images/icons/light_off.png"],
			light_on: ["./images/icons/light_on.png"],
			link: ["./images/icons/link.png"],
			link_chain: ["./images/icons/link_chain.png"],
			link_plain_internal: ["./images/icons/link_plain_internal.png"],
			link_square_external: ["./images/icons/link_square_external.png"],
			link_square_internal: ["./images/icons/link_square_internal.png"],
			media_off: ["./images/icons/media_off.png"],
			media_on: ["./images/icons/media_on.png"],
			motion_off: ["./images/icons/motion_off.png"],
			motion_on: ["./images/icons/motion_on.png"],
			panic_off: ["./images/icons/panic_off.png"],
			panic_on: ["./images/icons/panic_on.png"],
			play: ["./images/icons/play.png"],
			play_on: ["./images/icons/play_on.png"],
			plug_off: ["./images/icons/plug_off.png"],
			plug_on: ["./images/icons/plug_on.png"],
			popup: ["./images/icons/popup.png"],
			pressure: ["./images/icons/pressure.png"],
			radiator_on: ["./images/icons/radiator.png"],
			radiator_off: ["./images/icons/radiator_off.png"],
			switch_off: ["./images/icons/switch_off.png", "./images/icons/switch_red_off.png"],
			switch_on: ["./images/icons/switch_on.png"],
			temperature: ["./images/icons/temperature.png"],
			time_alarmclock_off: ["./images/icons/time_alarmclock_off.png"],
			time_alarmclock_on: ["./images/icons/time_alarmclock_on.png"],
			time_calendar_off: ["./images/icons/time_calendar_off.png"],
			time_calendar_on: ["./images/icons/time_calendar_on.png"],
			time_clock_off: ["./images/icons/time_clock_off.png"],
			time_clock_on: ["./images/icons/time_clock_on.png"],
			time_duration_off: ["./images/icons/time_duration_off.png"],
			time_duration_on: ["./images/icons/time_duration_on.png"],
			time_timer_off: ["./images/icons/time_timer_off.png"],
			time_timer_on: ["./images/icons/time_timer_on.png"],
			value_off: ["./images/icons/value_off.png"],
			value_on: ["./images/icons/value_on.png"],
			widget_off: ["./images/icons/widget_off.png"],
			widget_on: ["./images/icons/widget_on.png"],
			window_closed: ["./images/icons/window_closed.png"],
			window_opened: ["./images/icons/window_opened.png"],
			window_tilted: ["./images/icons/window_tilted.png"],
			window_toplight_closed: ["./images/icons/window_toplight_closed.png"],
			window_toplight_opened: ["./images/icons/window_toplight_opened.png"],
			window_toplight_tilted: ["./images/icons/window_toplight_tilted.png"]
		}
	}, {
		name: "Fluent",
		description: "Iconset with slight gradients. Icons are taken from www.icons8.com.",
		iconEquivalents: {
			ERROR: ["./images/icons/fluent/fluent_ERROR.png"],
			UNREACH: ["./images/icons/fluent/fluent_UNREACH.png"],
			BATTERY: ["./images/icons/fluent/fluent_BATTERY.png"],
			airconditioner_off: ["./images/icons/fluent/fluent_airconditioner_off.png"],
			airconditioner_on: ["./images/icons/fluent/fluent_airconditioner_on.png"],
			alarm_off: ["./images/icons/fluent/fluent_alarm_off.png"],
			alarm_on: ["./images/icons/fluent/fluent_alarm_on.png"],
			alarm_on_triggered: ["./images/icons/fluent/fluent_alarm_on_triggered.png"],
			battery_10: ["./images/icons/fluent/fluent_battery_10.png"],
			battery_25: ["./images/icons/fluent/fluent_battery_25.png"],
			battery_50: ["./images/icons/fluent/fluent_battery_50.png"],
			battery_75: ["./images/icons/fluent/fluent_battery_75.png"],
			battery_charging_overlay: ["./images/icons/fluent/fluent_battery_charging_overlay.png"],
			battery_discharging_overlay: ["./images/icons/fluent/fluent_battery_discharging_overlay.png"],
			battery_empty: ["./images/icons/fluent/fluent_battery_empty.png"],
			battery_full: ["./images/icons/fluent/fluent_battery_full.png"],
			bell_off: ["./images/icons/fluent/fluent_bell_off.png"],
			bell_on: ["./images/icons/fluent/fluent_bell_on.png"],
			bell_ringing_off: ["./images/icons/fluent/fluent_bell_ringing_off.png"],
			bell_ringing_on: ["./images/icons/fluent/fluent_bell_ringing_on.png"],
			bell_ringing_overlay: ["./images/icons/fluent/fluent_bell_ringing_overlay.png"],
			blank: [],
			blind_closed: ["./images/icons/fluent/fluent_blind_closed.png"],
			blind_closing: ["./images/icons/fluent/fluent_blind_closing.png"],
			blind_middle: ["./images/icons/fluent/fluent_blind_middle.png"],
			blind_opened: ["./images/icons/fluent/fluent_blind_opened.png"],
			blind_opening: ["./images/icons/fluent/fluent_blind_opening.png"],
			brightness_dark: ["./images/icons/fluent/fluent_brightness_dark.png"],
			brightness_light: ["./images/icons/fluent/fluent_brightness_light.png"],
			button: ["./images/icons/fluent/fluent_button.png"],
			camera_on: [],
			camera_ptz_on: [],
			cooling_off: ["./images/icons/fluent/fluent_cooling_off.png"],
			cooling_on: ["./images/icons/fluent/fluent_cooling_on.png"],
			door_closed: ["./images/icons/fluent/fluent_door_closed.png"],
			door_locked: ["./images/icons/fluent/fluent_door_locked.png"],
			door_opened: ["./images/icons/fluent/fluent_door_opened.png"],
			door_unlocked: ["./images/icons/fluent/fluent_door_unlocked.png"],
			fan_off: ["./images/icons/fluent/fluent_fan_off.png"],
			fan_on: ["./images/icons/fluent/fluent_fan_on.png"],
			fire_off: ["./images/icons/fluent/fluent_fire_off.png"],
			fire_on: ["./images/icons/fluent/fluent_fire_on.png"],
			firebox_green: ["./images/icons/fluent/fluent_firebox_green.png"],
			firebox_off: ["./images/icons/fluent/fluent_firebox_off.png"],
			firebox_on: ["./images/icons/fluent/fluent_firebox_on.png"],
			flood_off: ["./images/icons/fluent/fluent_flood_off.png"],
			flood_on: ["./images/icons/fluent/fluent_flood_on.png"],
			garagedoor_closed: ["./images/icons/fluent/fluent_garagedoor_closed.png"],
			garagedoor_opened: ["./images/icons/fluent/fluent_garagedoor_opened.png"],
			gas_off: ["./images/icons/fluent/fluent_gas_off.png"],
			gas_on: ["./images/icons/fluent/fluent_gas_on.png"],
			gate_closed: ["./images/icons/fluent/fluent_gate_closed.png"],
			gate_opened: ["./images/icons/fluent/fluent_gate_opened.png"],
			heating_off: ["./images/icons/fluent/fluent_heating_off.png"],
			heating_on: ["./images/icons/fluent/fluent_heating_on.png"],
			humidity: ["./images/icons/fluent/fluent_humidity.png"],
			info_bubble_off: ["./images/icons/fluent/fluent_info_bubble_off.png"],
			info_bubble_on: ["./images/icons/fluent/fluent_info_bubble_on.png"],
			info_circle_off: ["./images/icons/fluent/fluent_info_circle_off.png"],
			info_circle_on: ["./images/icons/fluent/fluent_info_circle_on.png"],
			info_square_off: ["./images/icons/fluent/fluent_info_square_off.png"],
			info_square_on: ["./images/icons/fluent/fluent_info_square_on.png"],
			kitchenhood_off: ["./images/icons/fluent/fluent_kitchenhood_off.png"],
			kitchenhood_on: ["./images/icons/fluent/fluent_kitchenhood_on.png"],
			light_desklamp_off: ["./images/icons/fluent/fluent_light_desklamp_off.png"],
			light_desklamp_on: ["./images/icons/fluent/fluent_light_desklamp_on.png"],
			light_lampshade_off: ["./images/icons/fluent/fluent_light_lampshade_off.png"],
			light_lampshade_on: ["./images/icons/fluent/fluent_light_lampshade_on.png"],
			light_off: ["./images/icons/fluent/fluent_light_off.png"],
			light_on: ["./images/icons/fluent/fluent_light_on.png"],
			link: ["./images/icons/fluent/fluent_link.png"],
			link_chain: ["./images/icons/fluent/fluent_link_chain.png"],
			link_plain_internal: ["./images/icons/fluent/fluent_link_plain_internal.png"],
			link_square_external: ["./images/icons/fluent/fluent_link_square_external.png"],
			link_square_internal: ["./images/icons/fluent/fluent_link_square_internal.png"],
			media_off: ["./images/icons/fluent/fluent_media_off.png"],
			media_on: ["./images/icons/fluent/fluent_media_on.png"],
			motion_off: ["./images/icons/fluent/fluent_motion_off.png"],
			motion_on: ["./images/icons/fluent/fluent_motion_on.png"],
			panic_off: ["./images/icons/fluent/fluent_panic_off.png"],
			panic_on: ["./images/icons/fluent/fluent_panic_on.png"],
			play: ["./images/icons/fluent/fluent_play.png", "./images/icons/fluent/fluent_play_sphere_off.png"],
			play_on: ["./images/icons/fluent/fluent_play_on.png", "./images/icons/fluent/fluent_play_sphere_on.png"],
			plug_off: ["./images/icons/fluent/fluent_plug_off.png"],
			plug_on: ["./images/icons/fluent/fluent_plug_on.png"],
			popup: ["./images/icons/fluent/fluent_popup.png"],
			pressure: ["./images/icons/fluent/fluent_pressure.png"],
			radiator_on: ["./images/icons/fluent/fluent_radiator.png"],
			radiator_off: ["./images/icons/fluent/fluent_radiator_off.png"],
			switch_off: ["./images/icons/fluent/fluent_switch_off.png", "./images/icons/fluent/fluent_switch_off_red.png", "./images/icons/fluent/fluent_switch_angular_off.png", "./images/icons/fluent/fluent_switch_angular_off_red.png"],
			switch_on: ["./images/icons/fluent/fluent_switch_on.png", "./images/icons/fluent/fluent_switch_on_blue.png", "./images/icons/fluent/fluent_switch_angular_on.png", "./images/icons/fluent/fluent_switch_angular_on_blue.png"],
			temperature: ["./images/icons/fluent/fluent_temperature.png"],
			time_alarmclock_off: ["./images/icons/fluent/fluent_time_alarmclock_off.png"],
			time_alarmclock_on: ["./images/icons/fluent/fluent_time_alarmclock_on.png"],
			time_calendar_off: ["./images/icons/fluent/fluent_time_calendar_off.png"],
			time_calendar_on: ["./images/icons/fluent/fluent_time_calendar_on.png"],
			time_clock_off: ["./images/icons/fluent/fluent_time_clock_off.png"],
			time_clock_on: ["./images/icons/fluent/fluent_time_clock_on.png"],
			time_duration_off: ["./images/icons/fluent/fluent_time_duration_off.png"],
			time_duration_on: ["./images/icons/fluent/fluent_time_duration_on.png"],
			time_timer_off: ["./images/icons/fluent/fluent_time_timer_off.png"],
			time_timer_on: ["./images/icons/fluent/fluent_time_timer_on.png"],
			value_off: ["./images/icons/fluent/fluent_value_off.png", "./images/icons/fluent/fluent_value_tag_off.png"],
			value_on: ["./images/icons/fluent/fluent_value_on.png", "./images/icons/fluent/fluent_value_tag_on.png"],
			widget_off: ["./images/icons/fluent/fluent_widget_off.png"],
			widget_on: ["./images/icons/fluent/fluent_widget_on.png"],
			window_closed: ["./images/icons/fluent/fluent_window_closed.png"],
			window_opened: ["./images/icons/fluent/fluent_window_opened.png"],
			window_tilted: ["./images/icons/fluent/fluent_window_tilted.png"],
			window_toplight_closed: ["./images/icons/fluent/fluent_window_toplight_closed.png"],
			window_toplight_opened: ["./images/icons/fluent/fluent_window_toplight_opened.png"],
			window_toplight_tilted: ["./images/icons/fluent/fluent_window_toplight_tilted.png"] 
		}
	}
]

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
								"OPEN": "UP",
								"CLOSE": "DOWN",
								"TILT_SET": "SLATS_LEVEL",
								"DIRECTION": "DIRECTION",
								"UNREACH": "UNREACH",
								"CONNECTED": "UNREACH",
								"LOWBAT": "BATTERY",
								"ERROR": "ERROR"
							}
						},
    "blindButtons": 			{
							matchingRole: "iQontrolBlind",
							matchingStates: {
								"STOP": "STOP",
								"OPEN": "UP",
								"CLOSE": "DOWN",
								"TILT_SET": "SLATS_LEVEL",
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
    "chart": 			{
							matchingRole: null,
							matchingStates: {
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
								"ELECTRIC_POWER": "POWER",
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
								"WHITE": "WHITE_BRIGHTNESS",
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
								"ELECTRIC_POWER": "POWER",
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

var dialogTileEditorColors = [
	"rgba(255, 51, 51, 0.5)",
	"rgba(255, 0, 0, 0.5)",
	"rgba(255, 127, 0, 0.5)",
	"rgba(255, 255, 0, 0.5)",
	"rgba(127, 255, 0, 0.5)",
	"rgba(0, 255, 0, 0.5)",
	"rgba(0, 255, 127, 0.5)",
	"rgba(0, 255, 255, 0.5)",
	"rgba(0, 127, 255, 0.5)",
	"rgba(0, 0, 255, 0.5)",
	"rgba(127, 0, 255, 0.5)",
	"rgba(255, 0, 255, 0.5)",
	"rgba(255, 0, 127, 0.5)"
];

var standardTileClass = {
	tile: {
		'border-top-left-radius': 15, 
		'border-top-left-radius-unit': "px", 
		'border-top-right-radius': 15, 
		'border-top-right-radius-unit': "px", 
		'border-bottom-left-radius': 15, 
		'border-bottom-left-radius-unit': "px", 
		'border-bottom-right-radius': 15,
		'border-bottom-right-radius-unit': "px"
	},
	stacks: [
		{
			"name": "Full Size",
			"horizontalMode": "left",
			"horizontalValue": 0,
			"horizontalUnit": "px",
			"widthMode": "normal",
			"widthValue": 100,
			"widthUnit": "%",
			"verticalMode": "top",
			"verticalValue": 0,
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 100,
			"heightUnit": "%",
			"default": true,
			"readonly": true
		},
		{
			"name": "Badge",
			"horizontalMode": "left",
			"horizontalValue": -5,
			"horizontalUnit": "px",
			"widthMode": "normal",
			"widthValue": 50,
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": -8,
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 15,
			"heightUnit": "px",
			"default": true
		},
		{
			"name": "Enlarge",
			"horizontalMode": "right",
			"horizontalValue": -4,
			"horizontalUnit": "px",
			"widthMode": "normal",
			"widthValue": 15,
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": -4,
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 15,
			"heightUnit": "px",
			"default": true
		},
		{
			"name": "Icon",
			"horizontalMode": "left",
			"horizontalValue": "6",
			"horizontalUnit": "px",
			"widthMode": "normal",
			"widthValue": 38,
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": "6",
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 38,
			"heightUnit": "px",
			"default": true
		},
		{
			"name": "Loading",
			"horizontalMode": "left",
			"horizontalValue": "13",
			"horizontalUnit": "px",
			"widthMode": "normal",
			"widthValue": 24,
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": "13",
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 24,
			"heightUnit": "px",
			"default": true
		},
		{
			"name": "Error",
			"horizontalMode": "left",
			"horizontalValue": "48",
			"horizontalUnit": "px",
			"widthMode": "normal",
			"widthValue": 16,
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": 2,
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 16,
			"heightUnit": "px",
			"default": true
		},
		{
			"name": "Unreach",
			"horizontalMode": "left",
			"horizontalValue": "64",
			"horizontalUnit": "px",
			"widthMode": "normal",
			"widthValue": 16,
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": 2,
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 16,
			"heightUnit": "px",
			"default": true
		},
		{
			"name": "Battery",
			"horizontalMode": "left",
			"horizontalValue": "80",
			"horizontalUnit": "px",
			"widthMode": "normal",
			"widthValue": 16,
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": 2,
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 16,
			"heightUnit": "px",
			"default": true
		},
		{
			"name": "INFO_A",
			"horizontalMode": "left",
			"horizontalValue": "48",
			"horizontalUnit": "px",
			"widthMode": "tileMinus",
			"widthValue": "48",
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": 20,
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 12,
			"heightUnit": "px",
			"default": true
		},
		{
			"name": "INFO_B",
			"horizontalMode": "left",
			"horizontalValue": "48",
			"horizontalUnit": "px",
			"widthMode": "tileMinus",
			"widthValue": "48",
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": "34",
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": 12,
			"heightUnit": "px",
			"default": true
		},
		{
			"name": "Name",
			"horizontalMode": "left",
			"horizontalValue": 3,
			"horizontalUnit": "px",
			"widthMode": "tileMinus",
			"widthValue": 3,
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": 49,
			"verticalUnit": "px",
			"heightMode": "normal",
			"heightValue": "27",
			"heightUnit": "px",
			"styleFont-weight": "bold",
			"default": true
		},
		{
			"name": "State",
			"horizontalMode": "left",
			"horizontalValue": "3",
			"horizontalUnit": "px",
			"widthMode": "tileMinus",
			"widthValue": "3",
			"widthUnit": "px",
			"verticalMode": "top",
			"verticalValue": "83",
			"verticalUnit": "px",
			"heightMode": "tileMinus",
			"heightValue": "83",
			"heightUnit": "px",
			"default": true
		}
	]
}

var uiElementOptions = {
	icon: [
		{option: "stackCycles", type: "checkbox", description: "If true, multiple elements on the stack are displayed one after the other, otherwise simultaneously. Default: false."},
		{option: "iconClasses", type: "string", description: "Optional. Add these CSS-Classes to the icon."},
		{option: "iconState", type: "string", role: "deviceOption", roleOptions: "+deviceState", value: "icon_on", description: "The url of the icon."},
		{option: "iconActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "iconActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "iconNoZoomOnHover", type: "checkbox", description: "If true, the icon zooms in on mouse hover. Default: false."},
		{option: "iconNoPointerEvents", type: "checkbox", description: "If true, the icon does not capture mouse or touch events. Default: false."},
		{option: "iconClickAction", type: "select", selectOptions: ";toggle;openDialog;enlarge;openURLExternal;openLinkToOtherView", description: "Defines, what happens, when you click on the icon. Can be toggle | openDialog | enlarge | openURLExternal | openLinkToOtherView | false. Default: false."},
		{option: "iconClickActionToggleFunction", type: "string", description: "Only valid, if iconClickAction is toggle. It then defines, what toggle does. Can be toggleState/STATE/LEVEL | startProgram/STATE | toggleScene/STATE | toggleMedia/STATE | startButton/STATE/SET_VALUE/OFF_SET_VALUE/100. Default: toggleState/STATE/LEVEL. The trailing states define, which deviceStates should be used for the toggle-function, they can be ommited to use default values."},
		{option: "iconClickActionURLState", type: "string", role: "deviceOption", roleOptions: "+deviceState", value: "icon_on", description: "Only valid, if iconClickAction is openURLExternal. This is the url to open."},
		{option: "iconClickActionRenderLinkedViewInParentInstance", type: "checkbox", description: "Only valid, if iconClickAction is openLinkToOtherView. If true and the element is part of a background view or a panel, then the linked view is opened in the parent instance. Default: false."},
		{option: "iconClickActionRenderLinkedViewInParentInstanceClosesPanel", type: "checkbox", description: "Only valid, if iconClickAction is openLinkToOtherView. If true and the element is part of a panel, then the panel closes after the linked view is rendered. Default: false."}
	],	
	text: [
		{option: "stackCycles", type: "checkbox", description: "If true, multiple elements on the stack are displayed one after the other, otherwise simultaneously. Default: false."},
		{option: "textClasses", type: "string", description: "Optional. Add these CSS-Classes to the text."},
		{option: "textState", type: "string", role: "deviceState", roleOptions: "+deviceState", value: "STATE", description: "The text to display."},
		{option: "textLevelState", type: "string", role: "deviceState", roleOptions: "+deviceState", value: "LEVEL", description: "Optional. The default textProcessing can combine two values, a state and a level. This ist the level."},
		{option: "textActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "textActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "textAddTimestampMode", type: "string", description: "Optional. Add timestamp to text. Can be: empty = State only | SA = State only (if active) | ST = State + Timestamp | STA = State + Timestamp (if active) | SE = State + Elapsed | SEA = State + Elapsed (if active) | SE. = State + Elapsed (since) | SE.A = State + Elapsed (since, if active) | Se = State + Elapsed (short) | SeA = State + Elapsed (short, if active) | STE = State + Timestamp + Elapsed | STEA = State + Timestamp + Elapsed (if active) | STE. = State + Timestamp + Elapsed (since) | STE.A = State + Timestamp + Elapsed (since, if active) | STe = State + Timestamp + Elapsed (short) | STeA = State + Timestamp + Elapsed (short, if active) | T = Timestamp only | TA = Timestamp only (if active) | TE = Timestamp + Elapsed | TEA = Timestamp + Elapsed (if active) | TE. = Timestamp + Elapsed (since) | TE.A = Timestamp + Elapsed (since, if active) | Te = Timestamp + Elapsed (short) | TeA = Timestamp + Elapsed (short, if active) | E = Elapsed only | EA = Elapsed only (if active) | E. = Elapsed only (since) | E.A = Elapsed only (since, if active) | e = Elapsed only (short) | eA = Elapsed only (short, if active) | N = Nothing (Hide state). Default: empty."},
		{option: "textProcessingFunction", type: "textarea", description: "The function used to process the text to display. May be the name of a predefined default function (defaultProcessTextFunction, #####) or a function like myFunction(state, level, textProcessingOptions){ return 'Hello world!';}. Default: defaultProcessTextFunction"},
		{option: "textProcessingOptions", type: "textarea", value: "{}", description: "An object of options that will be submitted to the textProcessingFunction as third argument. Default: {}."},
		{option: "textMultiline", type: "checkbox", description: "If true, the text can break and respects the font-size setting of the stack and overflow marquees vertically. Otherwise the text height is scaled to fit into exactly one line and overflow marquees horizontally. Default: false."},
		{option: "textNoPointerEvents", type: "checkbox", description: "If true, the text does not capture mouse or touch events. Default: false."},
		{option: "textFloatSelector", type: "string", description: "Optional. The text will float around this elements. Example: .uiElementStack.container.stackClass_3. Default: nothing."},
		{option: "textFreeSpaceSelector", type: "string", description: "Optional. The textfield will be shrinked to not intersect with this elements. Example: .uiElementStack.container.stackClass_3. Default: nothing."}
	],
	iconTextCombination: [
		{option: "stackCycles", type: "checkbox", description: "If true, multiple elements on the stack are displayed one after the other, otherwise simultaneously. Default: false."},
		{option: "iconClasses", type: "string", description: "Optional. Add these CSS-Classes to the icon."},
		{option: "iconState", type: "string", role: "deviceOption", roleOptions: "+deviceState", value: "icon_on", description: "The url of the icon."},
		{option: "iconActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "iconActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "iconNoZoomOnHover", type: "checkbox", description: "If false, the icon zooms in on mouse hover. Default: false."},
		{option: "iconNoPointerEvents", type: "checkbox", description: "If true, the icon does not capture mouse or touch events. Default: false."},
		{option: "iconClickAction", type: "select", selectOptions: ";toggle;openDialog;enlarge;openURLExternal;openLinkToOtherView", description: "Defines, what happens, when you click on the icon. Can be toggle | openDialog | enlarge | openURLExternal | openLinkToOtherView | false. Default: false."},
		{option: "iconClickActionToggleFunction", type: "string", description: "Only valid, if iconClickAction is toggle. It then defines, what toggle does. Can be toggleState/STATE/LEVEL | startProgram/STATE | toggleScene/STATE | toggleMedia/STATE | startButton/STATE/SET_VALUE/OFF_SET_VALUE/100. Default: toggleState/STATE/LEVEL. The trailing states define, which deviceStates should be used for the toggle-function, they can be ommited to use default values."},
		{option: "iconClickActionURLState", type: "string", role: "deviceOption", roleOptions: "+deviceState", value: "icon_on", description: "Only valid, if iconClickAction is openURLExternal. This is the url to open."},
		{option: "iconClickActionRenderLinkedViewInParentInstance", type: "checkbox", description: "Only valid, if iconClickAction is openLinkToOtherView. If true and the element is part of a background view or a panel, then the linked view is opened in the parent instance. Default: false."},
		{option: "iconClickActionRenderLinkedViewInParentInstanceClosesPanel", type: "checkbox", description: "Only valid, if iconClickAction is openLinkToOtherView. If true and the element is part of a panel, then the panel closes after the linked view is rendered. Default: false."},
		{option: "textClasses", type: "string", description: "Optional. Add these CSS-Classes to the text."},
		{option: "textState", type: "string", role: "deviceState", roleOptions: "+deviceState", value: "STATE", description: "The text to display."},
		{option: "textLevelState", type: "string", role: "deviceState", roleOptions: "+deviceState", value: "LEVEL", description: "Optional. The default textProcessing can combine two values, a state and a level. This ist the level."},
		{option: "textActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "textActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "textAddTimestampMode", type: "string", description: "Optional. Add timestamp to text. Can be: empty = State only | SA = State only (if active) | ST = State + Timestamp | STA = State + Timestamp (if active) | SE = State + Elapsed | SEA = State + Elapsed (if active) | SE. = State + Elapsed (since) | SE.A = State + Elapsed (since, if active) | Se = State + Elapsed (short) | SeA = State + Elapsed (short, if active) | STE = State + Timestamp + Elapsed | STEA = State + Timestamp + Elapsed (if active) | STE. = State + Timestamp + Elapsed (since) | STE.A = State + Timestamp + Elapsed (since, if active) | STe = State + Timestamp + Elapsed (short) | STeA = State + Timestamp + Elapsed (short, if active) | T = Timestamp only | TA = Timestamp only (if active) | TE = Timestamp + Elapsed | TEA = Timestamp + Elapsed (if active) | TE. = Timestamp + Elapsed (since) | TE.A = Timestamp + Elapsed (since, if active) | Te = Timestamp + Elapsed (short) | TeA = Timestamp + Elapsed (short, if active) | E = Elapsed only | EA = Elapsed only (if active) | E. = Elapsed only (since) | E.A = Elapsed only (since, if active) | e = Elapsed only (short) | eA = Elapsed only (short, if active) | N = Nothing (Hide state). Default: empty."},
		{option: "textProcessingFunction", type: "textarea", description: "The function used to process the text to display. May be the name of a predefined default function (defaultProcessTextFunction, #####) or a function like myFunction(state, level, textProcessingOptions){ return 'Hello world!';}. Default: defaultProcessTextFunction"},
		{option: "textProcessingOptions", type: "textarea", value: "{}", description: "An object of options that will be submitted to the textProcessingFunction as third argument. Default: {}."},
		{option: "textMultiline", type: "checkbox", description: "If true, the text can break and respects the font-size setting of the stack and overflow marquees vertically. Otherwise the text height is scaled to fit into exactly one line and overflow marquees horizontally. Default: false."},
		{option: "textNoPointerEvents", type: "checkbox", description: "If true, the text does not capture mouse or touch events. Default: false."},
		{option: "textAlwaysReservePlaceForIcon", type: "checkbox", description: "If true, the text will leave place for the icon, even if it is invisible. Default: false."},
		{option: "textFloatSelector", type: "string", description: "Optional. The text will float around this elements. Example: .uiElementStack.container.stackClass_3. Default: nothing."},
		{option: "textFreeSpaceSelector", type: "string", description: "Optional. The textfield will be shrinked to not intersect with this elements. Example: .uiElementStack.container.stackClass_3. Default: nothing."}
	],
	loadingIcon: [
		{option: "stackCycles", type: "checkbox", description: "If true, multiple elements on the stack are displayed one after the other, otherwise simultaneously. Default: false."},
		{option: "iconClasses", type: "string", description: "Optional. Add these CSS-Classes to the icon."},
		{option: "iconNoZoomOnHover", type: "checkbox", description: "If true, the icon zooms in on mouse hover. Default: false."},
		{option: "iconNoPointerEvents", type: "checkbox", description: "If true, the icon does not capture mouse or touch events. Default: false."}
	],
	badge: [
		{option: "stackCycles", type: "checkbox", description: "If true, multiple elements on the stack are displayed one after the other, otherwise simultaneously. Default: false."},
		{option: "badgeClasses", type: "string", description: "Optional. Add these CSS-Classes to the text."},
		{option: "badgeState", type: "string", role: "deviceState", roleOptions: "+deviceState", value: "STATE", description: "The text to display."},
		{option: "badgeColorState", type: "string", role: "deviceState", roleOptions: "+deviceState", value: "STATE", description: "The background color of the badge."},
		{option: "badgeWithoutUnit", type: "checkbox", description: "If true, the badge state is shown without units. Default: false."},
		{option: "badgeShowIfZero", type: "checkbox", description: "If true, the badge is visible even if its value is zero. Default: false."}
	],
	clickAction: [
		{option: "stackCycles", type: "checkbox", description: "If true, multiple elements on the stack are displayed one after the other, otherwise simultaneously. Default: false."},
		{option: "clickActionActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "clickActionActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "clickAction", type: "select", selectOptions: ";toggle;openDialog;enlarge;openURLExternal;openLinkToOtherView", description: "Defines, what happens, when you click on the element. Can be toggle | openDialog | enlarge | openURLExternal | openLinkToOtherView | false. Default: false."},
		{option: "clickActionToggleFunction", type: "string", description: "Only valid, if clickAction is toggle. It then defines, what toggle does. Can be toggleState/STATE/LEVEL | startProgram/STATE | toggleScene/STATE | toggleMedia/STATE | startButton/STATE/SET_VALUE/OFF_SET_VALUE/100. Default: toggleState/STATE/LEVEL. The trailing states define, which deviceStates should be used for the toggle-function, they can be ommited to use default values."},
		{option: "clickActionURLState", type: "string", role: "deviceOption", roleOptions: "+deviceState", value: "icon_on", description: "Only valid, if iconClickAction is openURLExternal. This is the url to open."},
		{option: "clickActionRenderLinkedViewInParentInstance", type: "checkbox", description: "Only valid, if iconClickAction is openLinkToOtherView. If true and the element is part of a background view or a panel, then the linked view is opened in the parent instance. Default: false."},
		{option: "clickActionRenderLinkedViewInParentInstanceClosesPanel", type: "checkbox", description: "Only valid, if iconClickAction is openLinkToOtherView. If true and the element is part of a panel, then the panel closes after the linked view is rendered. Default: false."},
		{option: "contextMenu", type: "checkbox", description: "If true, a context menu can be opened by a long press. Default: false."},
		{option: "contextMenuToggleActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "contextMenuToggleActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "contextMenuDialogActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "contextMenuDialogActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "contextMenuEnlargeActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "contextMenuEnlargeActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "contextMenuOpenLinkToOtherViewActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "contextMenuOpenLinkToOtherViewActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "contextMenuOpenURLExternalActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "contextMenuOpenURLExternalActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."}
	],
	enlargeButton: [
		{option: "stackCycles", type: "checkbox", description: "If true, multiple elements on the stack are displayed one after the other, otherwise simultaneously. Default: false."},
		{option: "enlargeButtonClasses", type: "string", description: "Optional. Add these CSS-Classes to the button."},
		{option: "enlargeButtonActive", type: "activeConditionArray", role: "array", roleOptions: "+array;-const;-deviceOption;-deviceSetting;-deviceCondition", description: "Optional. You can set conditions under which the element is active, that is, whether it is visible or not."},
		{option: "enlargeButtonActiveInvert", type: "checkbox", description: "If true, the active conditions are inverted, which means, the element is hidden, if the active conditions are true. Default: false."},
		{option: "enlargeButtonNoZoomOnHover", type: "checkbox", description: "If true, the button does not zoom in on mouse hover. Default: false."},
		{option: "enlargeButtonRotate", type: "string", description: "Optional. Rotate the element by this value in degrees."}
	]
}

var iQontrolRoles = {
	"iQontrolView": {
		name: "Link to other view",
		states: ["INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon", type: "icon", typicalIconEquivalents: ["blank", "link_plain_internal", "link_chain"], default: ""}
			}},
			SECTION_GENERAL: {options: {
				readonly: "delete",
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TILE_ACTIVE_CONDITION: "delete",
			SECTION_TILE_ACTIVE: "delete",
			SECTION_TIMESTAMP: "delete",
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolSwitch": {
		name: "Switch",
		states: ["STATE", "POWER", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/switch_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["switch_on", "plug_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["switch_off", "plug_off"], default: ""}
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: {options: {
				showPowerAsState: {name: "Show POWER as state", type: "checkbox", default: "false"}
			}}
		}
	},
	"iQontrolButton": {
		name: "Button",
		states: ["STATE", "SET_VALUE", "OFF_SET_VALUE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/button.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["button"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["button"], default: ""}
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: {options: {
				showState: {name: "Show State", type: "checkbox", default: "false"},
				buttonCaption: {name: "Caption for button", type: "text", default: ""},
				returnToOffSetValueAfter: {name: "Return to 'OFF_SET_VALUE' after [ms] (0 = never, toggle)", type: "number", min: "0", max: "60000", default: ""},
				closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}
			}}
		}
	},
	"iQontrolLight": {
		name: "Light",
		states: ["STATE", "LEVEL", "HUE", "SATURATION", "COLOR_BRIGHTNESS", "CT", "WHITE_BRIGHTNESS", "ALTERNATIVE_COLORSPACE_VALUE", "POWER", "EFFECT", "EFFECT_NEXT", "EFFECT_SPEED_UP", "EFFECT_SPEED_DOWN", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/light_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["light_on", "light_desklamp_on", "light_lampshade_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["light_off", "light_desklamp_off", "light_lampshade_off"], default: ""}
			}},
			SECTION_DEVICESPECIFIC: {options: {
				invertCt: {name: "Invert CT (use Kelvin instead of Mired)", type: "checkbox", default: "false"},
				alternativeColorspace: {name: "Colorspace for ALTERNATIVE_COLORSPACE_VALUE", type: "select", selectOptions: "/None;RGB/RGB;#RGB/#RGB;RGBW/RGBW;#RGBW/#RGBW;RGBWWCW/RGBWWCW;#RGBWWCW/#RGBWWCW;RGBCWWW/RGBCWWW;#RGBCWWW/#RGBCWWW;RGB_HUEONLY/RGB (Hue only);#RGB_HUEONLY/#RGB (Hue only);HUE_MILIGHT/Hue for Milight;HHSSBB_TUYA/HHSSBB for Tuya", default: ""},
				linkGlowActiveColorToHue: {name: "Use color of lamp as GLOW_ACTIVE_COLOR", type: "checkbox", default: "false"},
				linkOverlayActiveColorToHue: {name: "Use color of lamp as OVERLAY_ACTIVE_COLOR", type: "checkbox", default: "false"},
				showPowerAsState: {name: "Show POWER as state", type: "checkbox", default: "false"}
			}}
		}
	},
	"iQontrolFan": {
		name: "Fan",
		states: ["STATE", "LEVEL", "POWER", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/fan_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["fan_on", "kitchenhood_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["fan_off", "kitchenhood_off"], default: ""}
			}},
			SECTION_DEVICESPECIFIC: {options: {
				showPowerAsState: {name: "Show POWER as state", type: "checkbox", default: "false"}
			}}
		}
	},
	"iQontrolThermostat": {
		name: "Thermostat",
		states: ["SET_TEMPERATURE","TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/radiator.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon", type: "icon", typicalIconEquivalents: ["radiator_on", "heating_on", "cooling_on", "airconditioner_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["radiator_off", "heating_off", "cooling_off", "airconditioner_off"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
				clickOnTileAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
			}},
			SECTION_TIMESTAMP: {options: {
				stateCaption: {name: "Caption of SET_TEMPERATURE"},
				levelCaption: "delete",
				levelFavorites: {name: "Favorite values for SET_TEMPERATURE (semicolon separated list of numbers)", default: "17;19;20;21;22"}
			}},
			SECTION_DEVICESPECIFIC: {options: {
				controlModeDisabledValue: {name: "Value of CONTROL_MODE for 'disabled'", type: "text", default: ""},
				valveStatesSectionType: {name: "Appereance of VALVE_STATES", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"}
			}}
		}
	},
	"iQontrolHomematicThermostat": {
		name: "Homematic-Thermostat",
		states: ["SET_TEMPERATURE", "TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "BOOST_STATE", "PARTY_TEMPERATURE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/radiator.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon", type: "icon", typicalIconEquivalents: ["radiator_on", "heating_on", "cooling_on", "airconditioner_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["radiator_off", "heating_off", "cooling_off", "airconditioner_off"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
				clickOnTileAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
			}},
			SECTION_TIMESTAMP: {options: {
				stateCaption: {name: "Caption of SET_TEMPERATURE"},
				levelCaption: "delete",
				levelFavorites: {name: "Favorite values for SET_TEMPERATURE (semicolon separated list of numbers)", default: "17;19;20;21;22"},
			}},
			SECTION_DEVICESPECIFIC: {options: {
				valveStatesSectionType: {name: "Appereance of VALVE_STATES", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"}
			}}
		}
	},
	"iQontrolHomematicIpThermostat": {
		name: "HomematicIP-Thermostat",
		states: ["SET_TEMPERATURE", "TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "BOOST_STATE", "PARTY_TEMPERATURE", "WINDOW_OPEN_REPORTING", "VALVE_STATES", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/radiator.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon", type: "icon", typicalIconEquivalents: ["radiator_on", "heating_on", "cooling_on", "airconditioner_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["radiator_off", "heating_off", "cooling_off", "airconditioner_off"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
				clickOnTileAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
			}},
			SECTION_TIMESTAMP: {options: {
				stateCaption: {name: "Caption of SET_TEMPERATURE"},
				levelCaption: "delete",
				levelFavorites: {name: "Favorite values for SET_TEMPERATURE (semicolon separated list of numbers)", default: "17;19;20;21;22"},
			}},
			SECTION_DEVICESPECIFIC: {options: {
				valveStatesSectionType: {name: "Appereance of VALVE_STATES", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"}
			}}
		}
	},
	"iQontrolTemperature": {
		name: "Temperature-Sensor",
		states: ["STATE", "TEMPERATURE", "HUMIDITY", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/temperature.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["temperature"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["temperature"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolHumidity": {
		name: "Humidity-Sensor",
		states: ["STATE", "TEMPERATURE", "HUMIDITY", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/humidity.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["humidity"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["humidity"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolPressure": {
		name: "Pressure-Sensor",
		states: ["STATE", "TEMPERATURE", "HUMIDITY", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/pressure.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["pressure"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["pressure"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolBrightness": {
		name: "Brightness-Sensor",
		states: ["STATE", "BRIGHTNESS", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/brightness_light.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["brightness_light"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["brightness_dark"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolMotion": {
		name: "Motion-Sensor",
		states: ["STATE", "BRIGHTNESS", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/motion_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["motion_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["motion_off"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TIMESTAMP: {name: "Timestamp", type: "section", options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete",
				addTimestampToState: {default: "SE"}
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolDoor": {
		name: "Door",
		states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/door_closed.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon opened", type: "icon", typicalIconEquivalents: ["door_opened"], default: ""},
				icon_off: {name: "Icon closed", type: "icon", typicalIconEquivalents: ["door_closed"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolGarageDoor": {
		name: "Garage Door",
		states: ["STATE", "TOGGLE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/garagedoor_closed.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon opened", type: "icon", typicalIconEquivalents: ["garagedoor_opened", "gate_opened"], default: ""},
				icon_off: {name: "Icon closed", type: "icon", typicalIconEquivalents: ["garagedoor_closed", "gate_closed"], default: ""}
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: {options: {
				noConfirmationForTogglingViaIcon: {name: "Don't ask for confirmation when toggling via icon", type: "checkbox", default: "false"}
			}}
		}
	},
	"iQontrolDoorWithLock": {
		name: "Door with lock",
		states: ["STATE", "LOCK_STATE", "LOCK_STATE_UNCERTAIN", "LOCK_OPEN", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/door_locked.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["door_opened"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["door_closed"], default: ""},
				icon_locked: {name: "Icon locked", type: "icon", typicalIconEquivalents: ["door_locked"], default: ""},
				icon_unlocked: {name: "Icon unlocked", type: "icon", typicalIconEquivalents: ["door_unlocked"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
				clickOnTileAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: {options: {
				stateClosedValue: {name: "Value of STATE for 'closed'", type: "text", default: ""},
				lockStateLockedValue: {name: "Value of LOCK_STATE for 'locked'", type: "text", default: ""},
				lockOpenValue: {name: "Value of LOCK_OPEN for 'open door'", type: "text", default: ""}				
			}}
		}
	},
	"iQontrolWindow": {
		name: "Window",
		states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/window_closed.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon opened", type: "icon", typicalIconEquivalents: ["window_opened", "window_toplight_opened"], default: ""},
				icon_off: {name: "Icon closed", type: "icon", typicalIconEquivalents: ["window_closed", "window_toplight_closed"], default: ""},
				icon_tilted: {name: "Icon tilted", type: "icon", typicalIconEquivalents: ["window_tilted", "window_toplight_tilted"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: {options: {
				stateClosedValue: {name: "Value of STATE for 'closed'", type: "text", default: ""},
				stateOpenedValue: {name: "Value of STATE for 'opened'", type: "text", default: ""},
				stateTiltedValue: {name: "Value of STATE for 'tilted'", type: "text", default: ""}
			}}
		}
	},
	"iQontrolBlind": {
		name: "Blind",
		states: ["LEVEL", "DIRECTION", "STOP", "STOP_SET_VALUE", "UP", "UP_SET_VALUE", "DOWN", "DOWN_SET_VALUE", "FAVORITE_POSITION", "FAVORITE_POSITION_SET_VALUE", "SLATS_LEVEL", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/blind_middle.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon opened", type: "icon", typicalIconEquivalents: ["blind_opened"], default: ""},
				icon_off: {name: "Icon closed", type: "icon", typicalIconEquivalents: ["blind_closed"], default: ""},
				icon_middle: {name: "Icon middle", type: "icon", typicalIconEquivalents: ["blind_middle"], default: ""},
				icon_closing: {name: "Icon closing", type: "icon", typicalIconEquivalents: ["blind_closing"], default: ""},
				icon_opening: {name: "Icon opening", type: "icon", typicalIconEquivalents: ["blind_opening"], default: ""}
			}},
			SECTION_TIMESTAMP: {options: {
				stateCaption: "delete"
			}},
			SECTION_DEVICESPECIFIC: {options: {
				invertActuatorLevel: {name: "Invert LEVEL (0 = open)", type: "checkbox", default: "false"},
				directionOpeningValue: {name: "Value of DIRECTION for 'opening'", type: "text", default: "1"},
				directionClosingValue: {name: "Value of DIRECTION for 'closing'", type: "text", default: "2"},
				directionUncertainValue: {name: "Value of DIRECTION for 'uncertain'", type: "text", default: "3"},
				favoritePositionCaption: {name: "Caption for FAVORITE_POSITION", type: "text", default: "Favorite Position"},
				upCaption: {name: "Caption for UP", type: "text", default: "Up"},
				stopCaption: {name: "Caption for STOP", type: "text", default: "Stop"},
				downCaption: {name: "Caption for DOWN", type: "text", default: "Down"}
			}}
		}
	},
	"iQontrolFire": {
		name: "Fire-Sensor",
		states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/fire_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["fire_on", "gas_on", "firebox_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["fire_off", "gas_off", "firebox_off", "firebox_green"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolFlood": {
		name: "Flood-Sensor",
		states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/flood_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["flood_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["flood_off"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openLinkToOtherView"},
				clickOnTileAction: {default: "openLinkToOtherView"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolAlarm": {
		name: "Alarm",
		states: ["STATE", "CONTROL_MODE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/alarm_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_triggered: {name: "Icon triggered (STATE is true)", type: "icon", typicalIconEquivalents: ["alarm_on_triggered", "alarm_on", "bell_on", "bell_ringing_on", "firebox_on", "panic_on"], default: ""},
				icon_on: {name: "Icon on (STATE is false, CONTROL_MODE is armed)", type: "icon", typicalIconEquivalents: ["alarm_on", "alarm_on_triggered", "bell_ringing_on", "bell_on", "firebox_on", "firebox_green", "panic_on"], default: ""},
				icon_off: {name: "Icon off (STATE is false, CONTROL_MODE is disarmed)", type: "icon", typicalIconEquivalents: ["alarm_off", "bell_off", "bell_ringing_off", "firebox_off", "firebox_green", "panic_off"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
				clickOnTileAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: {options: {
				controlModeDisarmedValue: {name: "Value of CONTROL_MODE for 'disarmed'", type: "text", default: "0"}
			}}
		}
	},
	"iQontrolBattery": {
		name: "Battery",
		states: ["STATE", "CHARGING", "DISCHARGING", "POWER", "VOLTAGE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/battery_full.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon full", type: "icon", typicalIconEquivalents: ["battery_full"], default: ""},
				icon_off: {name: "Icon empty", type: "icon", typicalIconEquivalents: ["battery_empty"], default: ""},
				icon_charged75: {name: "Icon 75%", type: "icon", typicalIconEquivalents: ["battery_75"], default: ""},
				icon_charged50: {name: "Icon 50%", type: "icon", typicalIconEquivalents: ["battery_50"], default: ""},
				icon_charged25: {name: "Icon 25%", type: "icon", typicalIconEquivalents: ["battery_25"], default: ""},
				icon_charged10: {name: "Icon 10%", type: "icon", typicalIconEquivalents: ["battery_10"], default: ""},
				icon_charging: {name: "Icon charging", type: "icon", typicalIconEquivalents: ["battery_charging_overlay"], default: ""},
				icon_discharging: {name: "Icon discharging", type: "icon", typicalIconEquivalents: ["battery_discharging_overlay"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
				clickOnTileAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolDateAndTime":	{
		name: "Date and Time",
		states: ["STATE", "SUBJECT", "TIME", "RINGING", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/time_alarmclock_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["time_alarmclock_on", "time_clock_on", "time_timer_on", "time_duration_on", "time_calendar_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["time_alarmclock_off", "time_clock_off", "time_timer_off", "time_duration_off", "time_calendar_off"], default: ""},
				icon_ringing: {name: "Icon ringing", type: "icon", typicalIconEquivalents: ["bell_ringing_overlay"], default: ""}
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: {options: {
				subjectCaption: {name: "Caption of SUBJECT", type: "text", default: ""},
				timeCaption: {name: "Caption for TIME", type: "text", default: ""},
				timeFormat: {name: "Format of TIME (as stored in the datapoint, see readme)", type: "combobox", selectOptions: "~/Use custom datapoint settings;x/timestamp;YYYY-MM-DDTHH:mm:ss.SSSZ;ddd MMM DD YYYY HH:mm:ss ZZ;HH:mm;HH:mm:ss;DD.MM.YYYY;DD.MM.YYYY HH:mm;DD.MM.YYYY HH:mm:ss;ddd, DD.MM.YYYY;ddd, DD.MM.YYYY HH:mm;ddd, DD.MM.YYYY HH:mm:ss;dddd, DD.MM.YYYY;dddd, DD.MM.YYYY HH:mm;dddd, DD.MM.YYYY HH:mm:ss;hh:mm a;hh:mm:ss a;YYYY-MM-DD;YYYY-MM-DD hh:mm a;YYYY-MM-DD hh:mm:ss a;ddd, YYYY-MM-DD;ddd, YYYY-MM-DD hh:mm a;ddd, YYYY-MM-DD hh:mm:ss a;dddd, YYYY-MM-DD;dddd, YYYY-MM-DD hh:mm a;dddd, YYYY-MM-DD hh:mm:ss a;P/Period;Pms/Period in milliseconds;Ps/Period in seconds;Pm/Period in minutes", default: "x"},
				timeDisplayFormat: {name: "Display-Format of TIME (how it should be displayed, see readme)", type: "combobox", selectOptions: "~/Use custom datapoint settings;HH:mm;HH:mm:ss;DD.MM.YYYY;DD.MM.YYYY HH:mm;DD.MM.YYYY HH:mm:ss;ddd, DD.MM.YYYY;ddd, DD.MM.YYYY HH:mm;ddd, DD.MM.YYYY HH:mm:ss;dddd, DD.MM.YYYY;dddd, DD.MM.YYYY HH:mm;dddd, DD.MM.YYYY HH:mm:ss;hh:mm a;hh:mm:ss a;YYYY-MM-DD;YYYY-MM-DD hh:mm a;YYYY-MM-DD hh:mm:ss a;ddd, YYYY-MM-DD;ddd, YYYY-MM-DD hh:mm a;ddd, YYYY-MM-DD hh:mm:ss a;dddd, YYYY-MM-DD;dddd, YYYY-MM-DD hh:mm a;dddd, YYYY-MM-DD hh:mm:ss a;D [Day(s)], H:m:s/D [Day(s)], H:m:s (for Periods);D [Day(s)], HH:mm:ss/D [Day(s)], HH:mm:ss (for Periods)", default: "dddd, DD.MM.YYYY HH:mm:ss"},
				timeDisplayDontShowDistance: {name: "Show Distance", type: "select", selectOptions: "/Use custom datapoint settings;false/Show Distance;true/Don't Show Distance", default: ""},
				dateAndTimeTileActiveConditions: {name: "Tile is active when all selected items are true", type: "multipleSelect", selectOptions: "activeIfStateActive/If STATE is active;activeIfTimeNotZero/If TIME is not zero;activeIfTimeInFuture/If TIME is in future;activeIfTimeInPast/If TIME is in past", default: "activeIfStateActive,activeIfTimeInFuture"},
				dateAndTimeTileActiveWhenRinging: {name: "Tile is always active when RINGING is active", type: "checkbox", default: "true"},
				dateAndTimeShowInState: {name: "Show in state", type: "multipleSelect", selectOptions: "showStateIfInactive/Show STATE if inactive;showStateIfActive/Show STATE if active;showSubjectIfActive/Show SUBJECT if active;showSubjectIfInactive/Show SUBJECT if inactive;showTimeIfInactiveAndInPast/Show TIME if inactive and in past;showTimeIfInactiveAndInFuture/Show TIME if inactive and in future;showTimeIfActiveAndInPast/Show TIME if active and in past;showTimeIfActiveAndInFuture/Show TIME if active and in future;showTimeDistanceIfInactiveAndInPast/Show distance to TIME if inactive and in past;showTimeDistanceIfInactiveAndInFuture/Show distance to TIME if inactive and in future;showTimeDistanceIfActiveAndInPast/Show distance to TIME if active and in past;showTimeDistanceIfActiveAndInFuture/Show distance to TIME if active and in future", default: "showStateIfInactive,showSubjectIfActive,showTimeDistanceIfActiveAndInFuture"}
			}}
		}
	},
	"iQontrolValue": {
		name: "Value",
		states: ["STATE", "LEVEL", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/value_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["value_on", "info_circle_on", "info_square_on", "info_bubble_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["value_off", "info_circle_off", "info_square_off", "info_bubble_off"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
				clickOnTileAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
			}},
			SECTION_DEVICESPECIFIC: {options: {
				showStateAndLevelSeparatelyInTile: {name: "Show STATE and LEVEL separately in tile", type: "select", selectOptions: "/No;devidedByComma/Yes, devided by comma;devidedByComma preceedCaptions/Yes, devided by comma, preceed captions;devidedBySemicolon/Yes, devided by semicolon;devidedBySemicolon preceedCaptions/Yes, devided by semicolon, preceed captions;devidedByHyphen/Yes, devided by hyphen;devidedByHyphen preceedCaptions/Yes, devided by hyphen, preceed captions", default: "false"}
			}}
		}
	},
	"iQontrolProgram": {
		name: "Program",
		states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/play_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["play_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["play"], default: ""}
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: {options: {
				showState: {name: "Show State", type: "checkbox", default: "false"},
				closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}
			}}
		}
	},
	"iQontrolScene": {
		name: "Scene",
		states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/play.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["play"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["play"], default: ""}
			}},
			SECTION_TIMESTAMP: {name: "Timestamp", type: "section", options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete",
				addTimestampToState: {selectOptions: "/Nothing;T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active)"}
			}},
			SECTION_DEVICESPECIFIC: {options: {
				alwaysSendTrue: {name: "Always send 'true' (do not toggle)", type: "checkbox", default: "false"},
				closeDialogAfterExecution: {name: "Close dialog after execution", type: "checkbox", default: "false"}
			}}
		}
	},
	"iQontrolMedia": {
		name: "Media-Player / Remote Control",
		states: ["STATE", "COVER_URL", "ARTIST", "ALBUM", "TRACK_NUMBER", "TITLE", "EPISODE", "SEASON", "PREV", "REWIND", "PLAY", "PAUSE", "STOP", "FORWARD", "NEXT", "SHUFFLE", "REPEAT", "MUTE", "DURATION", "ELAPSED", "VOLUME", "SOURCE", "PLAYLIST", "PLAY_EVERYWHERE", "EJECT", "POWER_SWITCH", "REMOTE_NUMBER", "REMOTE_VOLUME_UP", "REMOTE_VOLUME_DOWN", "REMOTE_CH_UP", "REMOTE_CH_DOWN", "REMOTE_PAD_DIRECTION", "REMOTE_PAD_BACK", "REMOTE_PAD_HOME", "REMOTE_PAD_MENU", "REMOTE_COLOR", "REMOTE_CHANNELS", "REMOTE_ADDITIONAL_BUTTONS", "REMOTE_HIDE_REMOTE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/media_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["media_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["media_off"], default: ""}
			}},
			SECTION_DEVICESPECIFIC_PLAYPAUSE: {name: "Play/Pause", type: "section", options: {
				statePlayValue: {name: "Value of STATE for 'play'", type: "text", default: "play"},
				statePauseValue: {name: "Value of STATE for 'pause'", type: "text", default: "pause"},
				stateStopValue: {name: "Value of STATE for 'stop'", type: "text", default: "stop"},
				useStateValuesForPlayPauseStop: {name: "Send these values (instead of true) when clicking on PLAY, PAUSE and STOP", type: "checkbox", default: "false"},
				hidePlayOverlay: {name: "Hide play icon", type: "checkbox", default: "false"},
				hidePauseAndStopOverlay: {name: "Hide pause and stop icon", type: "checkbox", default: "false"},
				durationIsMilliseconds: {name: "DURATION and ELAPSED are values in milliseconds", type: "checkbox", default: "false"},
				elapsedIsPercentage: {name: "ELAPSED is a value in percentage", type: "checkbox", default: "false"}
			}},
			SECTION_DEVICESPECIFIC_REPEAT: {name: "Repeat", type: "section", options: {
				repeatOffValue: {name: "Value of REPEAT for 'off'", type: "text", default: "false"},
				repeatAllValue: {name: "Value of REPEAT for 'repeat all'", type: "text", default: "true"},
				repeatOneValue: {name: "Value of REPEAT for 'repeat one'", type: "text", default: "2"}
			}},
			SECTION_DEVICESPECIFIC_REMOTE: {name: "Remote", type: "section", options: {
				remoteKeepSectionsOpen: {name: "Keep sections open", type: "checkbox", default: "false"},
				remoteSectionsStartOpened: {name: "Start with these sections initially opened", type: "multipleSelect", selectOptions: "REMOTE_PAD/Pad;REMOTE_CONTROL/Volume and Channel Control;REMOTE_ADDITIONAL_BUTTONS/Additional Buttons;REMOTE_CHANNELS/Channels;REMOTE_NUMBERS/Numbers;REMOTE_COLORS/Colors", default: ""},
				remoteShowDirectionsInsidePad: {name: "Show Vol and Ch +/- inside Pad", type: "checkbox", default: "false"},
				remoteChannelsCaption: {name: "Caption for section 'Channels'", type: "text", default: ""},
				remoteAdditionalButtonsCaption: {name: "Caption for section 'Additional Buttons'", type: "text", default: ""}
			}},
			SECTION_TIMESTAMP: {name: "Timestamp", type: "section", options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete",
				addTimestampToState: {selectOptions: "/Nothing;T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active)"}
			}},
			SECTION_DEVICESPECIFIC: {options: {
				coverImageReloadDelay: {name: "Delay reload of cover-image [ms]", type: "number", min: "0", max: "5000", default: ""},
				coverImageNoReloadOnTitleChange: {name: "No forced reload of cover-image on change of TITLE", type: "checkbox", default: "false"},
				togglePowerSwitch: {name: "Toggle POWER_SWITCH instead of STATE (for example when clicking on icon)", type: "checkbox", default: "false"}
			}}
		}
	},
	"iQontrolPopup": {
		name: "Popup",
		states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/popup.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["popup", "link_square_internal", "camera_on", "camera_ptz_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["popup", "link_square_internal", "camera_on", "camera_ptz_on"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
				clickOnTileAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolExternalLink":	{
		name: "External Link",
		states: ["STATE", "URL", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/link.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["link", "link_square_external"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["link", "link_square_external"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {default: "openURLExternal"},
				clickOnTileAction: {default: "openURLExternal"},
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	},
	"iQontrolWidget": {
		name: "Widget",
		states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/widget_on.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["blank", "widget_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["blank", "widget_off"], default: ""}
			}},
			SECTION_TILE: {options: {
				noZoomOnHover: {default: "true"},
				hideDeviceName: {default: "true"}
			}},
			SECTION_TILE_INACTIVE: {options: {
				sizeInactive: {selectOptions: " /Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen", default: "xwideIfInactive highIfInactive"},
				noOverlayInactive: {default: "true"},
				hideStateIfInactive: {default: "true"}
			}},
			SECTION_TILE_ACTIVE: {options: {
				sizeActive: {selectOptions: " /Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen", default: "fullWidthIfActive fullHeightIfActive"},
				noOverlayActive: {default: "true"}
			}},
			SECTION_TILE_ENLARGE_CONDITION: {options: {
				tileEnlargeShowButtonInactive: {default: "true"},
				tileEnlargeShowButtonActive: {default: "true"},
				tileEnlargeShowInPressureMenuInactive: {default: "true"},
				tileEnlargeShowInPressureMenuActive: {default: "true"}
			}},
			SECTION_TILE_ENLARGED: {options: {
				sizeEnlarged: {selectOptions: " /Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"}
			}},
			SECTION_TILE_ACTIVE_ENLARGED: {options: {
				sizeActiveEnlarged: {selectOptions: " /Normal (1x1);narrowIfActiveEnlarged shortIfActiveEnlarged/Just Icon (0.5x0.5);narrowIfActiveEnlarged/Narrow (0.5x1);narrowIfActiveEnlarged highIfActiveEnlarged/Narrow High (0.5x2);narrowIfActiveEnlarged xhighIfActiveEnlarged/Narrow Extra High(0.5x3);shortIfActiveEnlarged/Short (1x0.5);shortIfActiveEnlarged wideIfActiveEnlarged/Short Wide (2x0.5);shortIfActiveEnlarged xwideIfActiveEnlarged/Short Extra Wide (3x0.5);wideIfActiveEnlarged/Wide (2x1);xwideIfActiveEnlarged/Extra Wide (3x1);highIfActiveEnlarged/High (1x2);xhighIfActiveEnlarged/Extra High (1x3);wideIfActiveEnlarged highIfActiveEnlarged/Big (2x2);xwideIfActiveEnlarged highIfActiveEnlarged/Big Wide (3x2);wideIfActiveEnlarged xhighIfActiveEnlarged/Big High (2x3);xwideIfActiveEnlarged xhighIfActiveEnlarged/Extra Big (3x3);fullWidthIfActiveEnlarged aspect-1-1IfActiveEnlarged/Full Width, 1:1;fullWidthIfActiveEnlarged aspect-4-3IfActiveEnlarged/Full Width, 4:3;fullWidthIfActiveEnlarged aspect-3-2IfActiveEnlarged/Full Width, 3:2;fullWidthIfActiveEnlarged aspect-16-9IfActiveEnlarged/Full Width, 16:9;fullWidthIfActiveEnlarged aspect-21-9IfActiveEnlarged/Full Width, 21:9;fullWidthIfActiveEnlarged aspect-1-1-limitedIfActiveEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfActiveEnlarged aspect-4-3-limitedIfActiveEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfActiveEnlarged aspect-3-2-limitedIfActiveEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfActiveEnlarged aspect-16-9-limitedIfActiveEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfActiveEnlarged aspect-21-9-limitedIfActiveEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfActiveEnlarged fullHeightIfActiveEnlarged/Full Screen", default: "fullWidthIfActiveEnlarged fullHeightIfActiveEnlarged"}
			}},
			SECTION_TIMESTAMP: {name: "Timestamp", type: "section", options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete",
				addTimestampToState: {default: "N"}
			}},
			SECTION_DEVICESPECIFIC: {options: {
				noVirtualState: {name: "Do not use a virtual datapoint for STATE (hide switch, if STATE is empty)", type: "checkbox", default: "false"}
			}}
		}
	},
	"iQontrolInfoText": {
		name: "Info-Text",
		states: ["STATE", "INFO_A", "INFO_B", "BATTERY", "UNREACH", "ERROR", "BADGE", "BADGE_COLOR", "ENLARGE_TILE", "BACKGROUND_VIEW", "BACKGROUND_URL", "BACKGROUND_HTML", "OVERLAY_INACTIVE_COLOR", "OVERLAY_ACTIVE_COLOR", "GLOW_INACTIVE_COLOR", "GLOW_ACTIVE_COLOR", "GLOW_HIDE", "URL", "HTML", "ADDITIONAL_CONTROLS", "ADDITIONAL_INFO"],
		icon: "/images/icons/info_bubble_off.png",
		deviceSpecificOptions: {
			SECTION_ICONS: {options: {
				icon_on: {name: "Icon on", type: "icon", typicalIconEquivalents: ["info_bubble_off", "info_circle_off", "info_square_off", "value_off", "info_bubble_on", "info_circle_off", "info_square_on", "value_on"], default: ""},
				icon_off: {name: "Icon off", type: "icon", typicalIconEquivalents: ["info_bubble_off", "info_circle_off", "info_square_off", "value_off", "info_bubble_on", "info_circle_off", "info_square_on", "value_on"], default: ""}
			}},
			SECTION_TILE: {options: {
				clickOnIconAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "false"},
				clickOnTileAction: {selectOptions: "openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "false"},
				noZoomOnHover: {default: "true"},
				hideDeviceName: {default: "true"}
			}},
			SECTION_TILE_INACTIVE: {options: {
				sizeInactive: {selectOptions: "/Normal (1x1);narrowIfInactive shortIfInactive/Just Icon (0.5x0.5);narrowIfInactive/Narrow (0.5x1);narrowIfInactive highIfInactive/Narrow High (0.5x2);narrowIfInactive xhighIfInactive/Narrow Extra High(0.5x3);shortIfInactive/Short (1x0.5);shortIfInactive wideIfInactive/Short Wide (2x0.5);shortIfInactive xwideIfInactive/Short Extra Wide (3x0.5);wideIfInactive/Wide (2x1);xwideIfInactive/Extra Wide (3x1);highIfInactive/High (1x2);xhighIfInactive/Extra High (1x3);wideIfInactive highIfInactive/Big (2x2);xwideIfInactive highIfInactive/Big Wide (3x2);wideIfInactive xhighIfInactive/Big High (2x3);xwideIfInactive xhighIfInactive/Extra Big (3x3);fullWidthIfInactive aspect-1-1IfInactive/Full Width, 1:1;fullWidthIfInactive aspect-4-3IfInactive/Full Width, 4:3;fullWidthIfInactive aspect-3-2IfInactive/Full Width, 3:2;fullWidthIfInactive aspect-16-9IfInactive/Full Width, 16:9;fullWidthIfInactive aspect-21-9IfInactive/Full Width, 21:9;fullWidthIfInactive aspect-1-1-limitedIfInactive/Full Width, 1:1 (limited to screen height);fullWidthIfInactive aspect-4-3-limitedIfInactive/Full Width, 4:3 (limited to screen height);fullWidthIfInactive aspect-3-2-limitedIfInactive/Full Width, 3:2 (limited to screen height);fullWidthIfInactive aspect-16-9-limitedIfInactive/Full Width, 16:9 (limited to screen height);fullWidthIfInactive aspect-21-9-limitedIfInactive/Full Width, 21:9 (limited to screen height);fullWidthIfInactive fullHeightIfInactive/Full Screen;fullWidthIfInactive shortIfInactive/Full Width, Short", default: "fullWidthIfInactive shortIfInactive"},
				stateHeightAdaptsContentInactive: {default: "true"},
				stateFillsDeviceInactive: {default: "true"},
				stateBigFontInactive: {default: "true"},
				transparentIfInactive: {default: "true"},
				noOverlayInactive: {default: "true"},
				hideBackgroundURLInactive: {default: "true"},
				hideDeviceNameIfInactive: {default: "true"},
				hideInfoAIfInactive: {default: "true"},
				hideInfoBIfInactive: {default: "true"},
				hideStateIfInactive: {default: "true"},
				hideDeviceIfInactive: {default: "true"}
			}},
			SECTION_TILE_ACTIVE: {options: {
				sizeActive: {selectOptions: "/Normal (1x1);narrowIfActive shortIfActive/Just Icon (0.5x0.5);narrowIfActive/Narrow (0.5x1);narrowIfActive highIfActive/Narrow High (0.5x2);narrowIfActive xhighIfActive/Narrow Extra High(0.5x3);shortIfActive/Short (1x0.5);shortIfActive wideIfActive/Short Wide (2x0.5);shortIfActive xwideIfActive/Short Extra Wide (3x0.5);wideIfActive/Wide (2x1);xwideIfActive/Extra Wide (3x1);highIfActive/High (1x2);xhighIfActive/Extra High (1x3);wideIfActive highIfActive/Big (2x2);xwideIfActive highIfActive/Big Wide (3x2);wideIfActive xhighIfActive/Big High (2x3);xwideIfActive xhighIfActive/Extra Big (3x3);fullWidthIfActive aspect-1-1IfActive/Full Width, 1:1;fullWidthIfActive aspect-4-3IfActive/Full Width, 4:3;fullWidthIfActive aspect-3-2IfActive/Full Width, 3:2;fullWidthIfActive aspect-16-9IfActive/Full Width, 16:9;fullWidthIfActive aspect-21-9IfActive/Full Width, 21:9;fullWidthIfActive aspect-1-1-limitedIfActive/Full Width, 1:1 (limited to screen height);fullWidthIfActive aspect-4-3-limitedIfActive/Full Width, 4:3 (limited to screen height);fullWidthIfActive aspect-3-2-limitedIfActive/Full Width, 3:2 (limited to screen height);fullWidthIfActive aspect-16-9-limitedIfActive/Full Width, 16:9 (limited to screen height);fullWidthIfActive aspect-21-9-limitedIfActive/Full Width, 21:9 (limited to screen height);fullWidthIfActive fullHeightIfActive/Full Screen;fullWidthIfActive shortIfActive/Full Width, Short", default: "fullWidthIfActive shortIfActive"},
				stateHeightAdaptsContentActive: {default: "true"},
				stateFillsDeviceActive: {default: "true"},
				stateBigFontActive: {default: "true"},
				transparentIfActive: {default: "true"},
				noOverlayActive: {default: "true"},
				hideBackgroundURLActive: {default: "true"},
				hideDeviceNameIfActive: {default: "true"},
				hideInfoAIfActive: {default: "true"},
				hideInfoBIfActive: {default: "true"}
			}},
			SECTION_TILE_ENLARGED: {options: {
				stateHeightAdaptsContentEnlarged: {default: "true"},
				stateFillsDeviceEnlarged: {default: "true"},
				stateBigFontEnlarged: {default: "true"},
				hideDeviceNameIfEnlarged: {default: "true"}
			}},
			SECTION_TILE_ACTIVE_ENLARGED: {options: {
				stateHeightAdaptsContentActiveEnlarged: {default: "true"},
				stateFillsDeviceActiveEnlarged: {default: "true"},
				stateBigFontActiveEnlarged: {default: "true"},
				hideDeviceNameIfActiveEnlarged: {default: "true"}
			}},
			SECTION_TIMESTAMP: {options: {
				levelCaption: "delete",
				levelFavorites: "delete",
				levelFavoritesHideSlider: "delete"
			}},
			SECTION_DEVICESPECIFIC: "delete"
		}
	}
};

var iQontrolRolesStandardOptions = {
	SECTION_ICONS: {name: "Icons", type: "section"},
	SECTION_GENERAL: { name: "General", type: "section", options: {
		readonly: {name: "Readonly", type: "checkbox", default: "false"},
		renderLinkedViewInParentInstance: {name: "Open linked view in parent instance, if this view is used as a BACKGROUND_VIEW", type: "checkbox", default: "false"},
		renderLinkedViewInParentInstanceClosesPanel: {name: "After opening linked view in parent instance, close panel (if it is dismissible)", type: "checkbox", default: "false"}
	}},
	SECTION_TILE: {name: "Tile-Behaviour (general)", type: "section", options: {
		clickOnIconAction: {name: "Click on Icon Action", type: "select", selectOptions: "toggle/Toggle;openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "toggle"},
		clickOnTileAction: {name: "Click on Tile Action", type: "select", selectOptions: "toggle/Toggle;openDialog/Open Dialog;enlarge/Enlarge Tile;openLinkToOtherView/Open Link to other View;openURLExternal/Open URL as External Link;false/Do nothing", default: "openDialog"},
		noZoomOnHover: {name: "Disable zoom-effect on hover", type: "checkbox", default: "false"},
		iconNoZoomOnHover: {name: "Disable zoom-effect on hover for icon", type: "checkbox", default: "false"},
		hideDeviceName: {name: "Hide device name", type: "checkbox", default: "false"}
	}},
	SECTION_TILE_ACTIVE_CONDITION: {name: "Conditions for an Active Tile", type: "section", options: {
		tileActiveStateId: {name: "State ID (empty = STATE/LEVEL will be used)", type: "datapoint", default: ""},
		tileActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
		tileActiveConditionValue: {name: "Condition value", type: "text", default: ""}
	}},
	SECTION_TILE_ENLARGE_CONDITION: {name: "Conditions for an Enlarged Tile", type: "section", options: {
		tileEnlargeStartEnlarged: {name: "Tile is enlarged on start", type: "checkbox", default: "false"},
		tileEnlargeShowButtonInactive: {name: "Show Enlarge-Button, if device is inactive", type: "checkbox", default: "false"},
		tileEnlargeShowButtonActive: {name: "Show Enlarge-Button, if device is active", type: "checkbox", default: "false"},
		tileEnlargeShowInPressureMenuInactive: {name: "Show Enlarge in Menu, if device is inactive", type: "checkbox", default: "false"},
		tileEnlargeShowInPressureMenuActive: {name: "Show Enlarge in Menu, if device is active", type: "checkbox", default: "false"}
	}},
	SECTION_TILE_INACTIVE: {name: "Tile-Behaviour if device is inactive", type: "section", options: {
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
		hideStateIfInactive: {name: "Hide state, if the device is inactive", type: "checkbox", default: "false"},
		hideIndicatorIfInactive: {name: "Hide Indicator Icons (ERROR, UNREACH, BATTERY), if the device is inactive", type: "checkbox", default: "false"},
		hideInfoAIfInactive: {name: "Hide INFO_A, if the device is inactive", type: "checkbox", default: "false"},
		hideInfoBIfInactive: {name: "Hide INFO_B, if the device is inactive", type: "checkbox", default: "false"},
		hideDeviceIfInactive: {name: "Hide device, if it is inactive", type: "checkbox", default: "false"}
	}},
	SECTION_TILE_ACTIVE: {name: "Tile-Behaviour if device is active", type: "section", options: {
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
		hideStateIfActive: {name: "Hide state, if the device is active", type: "checkbox", default: "false"},
		hideIndicatorIfActive: {name: "Hide Indicator Icons (ERROR, UNREACH, BATTERY), if the device is active", type: "checkbox", default: "false"},
		hideInfoAIfActive: {name: "Hide INFO_A, if the device is active", type: "checkbox", default: "false"},
		hideInfoBIfActive: {name: "Hide INFO_B, if the device is active", type: "checkbox", default: "false"},
		hideDeviceIfActive: {name: "Hide device, if it is active", type: "checkbox", default: "false"}
	}},
	SECTION_TILE_INACTIVE_ENLARGED: {name: "Tile-Behaviour if device is inactive and enlarged", type: "section", options: {
		sizeInactiveEnlarged: {name: "Size of tile, if device is inactive and enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfEnlarged shortIfEnlarged/Just Icon (0.5x0.5);narrowIfEnlarged/Narrow (0.5x1);narrowIfEnlarged highIfEnlarged/Narrow High (0.5x2);narrowIfEnlarged xhighIfEnlarged/Narrow Extra High(0.5x3);shortIfEnlarged/Short (1x0.5);shortIfEnlarged wideIfEnlarged/Short Wide (2x0.5);shortIfEnlarged xwideIfEnlarged/Short Extra Wide (3x0.5);wideIfEnlarged/Wide (2x1);xwideIfEnlarged/Extra Wide (3x1);highIfEnlarged/High (1x2);xhighIfEnlarged/Extra High (1x3);wideIfEnlarged highIfEnlarged/Big (2x2);xwideIfEnlarged highIfEnlarged/Big Wide (3x2);wideIfEnlarged xhighIfEnlarged/Big High (2x3);xwideIfEnlarged xhighIfEnlarged/Extra Big (3x3);fullWidthIfEnlarged aspect-1-1IfEnlarged/Full Width, 1:1;fullWidthIfEnlarged aspect-4-3IfEnlarged/Full Width, 4:3;fullWidthIfEnlarged aspect-3-2IfEnlarged/Full Width, 3:2;fullWidthIfEnlarged aspect-16-9IfEnlarged/Full Width, 16:9;fullWidthIfEnlarged aspect-21-9IfEnlarged/Full Width, 21:9;fullWidthIfEnlarged aspect-1-1-limitedIfEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfEnlarged aspect-4-3-limitedIfEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfEnlarged aspect-3-2-limitedIfEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfEnlarged aspect-16-9-limitedIfEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfEnlarged aspect-21-9-limitedIfEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfEnlarged fullHeightIfEnlarged/Full Screen", default: "fullWidthIfEnlarged fullHeightIfEnlarged"},
		stateHeightAdaptsContentInactiveEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is inactive and enlarged", type: "checkbox", default: "false"},
		stateFillsDeviceInactiveEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is inactive and enlarged", type: "checkbox", default: "false"},
		stateBigFontInactiveEnlarged: {name: "Use big font for STATE, if the device is inactive and enlarged", type: "checkbox", default: "false"},
		bigIconInactiveEnlarged: {name: "Show big icon, if device is inactive and enlarged", type: "checkbox", default: "true"},
		iconNoPointerEventsInactiveEnlarged: {name: "Ignore mouse events for the icon, if device is inactive and enlarged", type: "checkbox", default: "false"},
		transparentIfInactiveEnlarged: {name: "Make background transparent, if device is inactive and enlarged", type: "checkbox", default: "false"},
		noOverlayInactiveEnlarged: {name: "Remove overlay of tile, if device is inactive and enlarged", type: "checkbox", default: "false"},
		hideBackgroundURLInactiveEnlarged: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is inactive and enlarged", type: "checkbox", default: "false"},
		hideDeviceNameIfInactiveEnlarged: {name: "Hide device name, if the device is inactive and enlarged", type: "checkbox", default: "false"},
		hideStateIfInactiveEnlarged: {name: "Hide state, if the device is inactive and enlarged", type: "checkbox", default: "false"},
		hideIndicatorIfInactiveEnlarged: {name: "Hide Indicator Icons (ERROR, UNREACH, BATTERY), if the device is inactive and enlarged", type: "checkbox", default: "false"},
		hideInfoAIfInactiveEnlarged: {name: "Hide INFO_A, if the device is inactive and enlarged", type: "checkbox", default: "false"},
		hideInfoBIfInactiveEnlarged: {name: "Hide INFO_B, if the device is inactive and enlarged", type: "checkbox", default: "false"},
		hideIconInactiveEnlarged: {name: "Hide icon, if device is inactive and enlarged", type: "checkbox", default: "false"}
	}},
	SECTION_TILE_ACTIVE_ENLARGED: {name: "Tile-Behaviour if device is active and enlarged", type: "section", options: {
		sizeActiveEnlarged: {name: "Size of tile, if device is active and enlarged", type: "select", selectOptions: "/Normal (1x1);narrowIfActiveEnlarged shortIfActiveEnlarged/Just Icon (0.5x0.5);narrowIfActiveEnlarged/Narrow (0.5x1);narrowIfActiveEnlarged highIfActiveEnlarged/Narrow High (0.5x2);narrowIfActiveEnlarged xhighIfActiveEnlarged/Narrow Extra High(0.5x3);shortIfActiveEnlarged/Short (1x0.5);shortIfActiveEnlarged wideIfActiveEnlarged/Short Wide (2x0.5);shortIfActiveEnlarged xwideIfActiveEnlarged/Short Extra Wide (3x0.5);wideIfActiveEnlarged/Wide (2x1);xwideIfActiveEnlarged/Extra Wide (3x1);highIfActiveEnlarged/High (1x2);xhighIfActiveEnlarged/Extra High (1x3);wideIfActiveEnlarged highIfActiveEnlarged/Big (2x2);xwideIfActiveEnlarged highIfActiveEnlarged/Big Wide (3x2);wideIfActiveEnlarged xhighIfActiveEnlarged/Big High (2x3);xwideIfActiveEnlarged xhighIfActiveEnlarged/Extra Big (3x3);fullWidthIfActiveEnlarged aspect-1-1IfActiveEnlarged/Full Width, 1:1;fullWidthIfActiveEnlarged aspect-4-3IfActiveEnlarged/Full Width, 4:3;fullWidthIfActiveEnlarged aspect-3-2IfActiveEnlarged/Full Width, 3:2;fullWidthIfActiveEnlarged aspect-16-9IfActiveEnlarged/Full Width, 16:9;fullWidthIfActiveEnlarged aspect-21-9IfActiveEnlarged/Full Width, 21:9;fullWidthIfActiveEnlarged aspect-1-1-limitedIfActiveEnlarged/Full Width, 1:1 (limited to screen height);fullWidthIfActiveEnlarged aspect-4-3-limitedIfActiveEnlarged/Full Width, 4:3 (limited to screen height);fullWidthIfActiveEnlarged aspect-3-2-limitedIfActiveEnlarged/Full Width, 3:2 (limited to screen height);fullWidthIfActiveEnlarged aspect-16-9-limitedIfActiveEnlarged/Full Width, 16:9 (limited to screen height);fullWidthIfActiveEnlarged aspect-21-9-limitedIfActiveEnlarged/Full Width, 21:9 (limited to screen height);fullWidthIfActiveEnlarged fullHeightIfActiveEnlarged/Full Screen", default: "fullWidthIfActiveEnlarged fullHeightIfActiveEnlarged"},
		stateHeightAdaptsContentActiveEnlarged: {name: "Adapt height of STATE to its content (this overwrites the tile size, if needed), if the device is active and enlarged", type: "checkbox", default: "false"},
		stateFillsDeviceActiveEnlarged: {name: "Size of STATE fills the complete device (this may interfere with other content), if the device is active and enlarged", type: "checkbox", default: "false"},
		stateBigFontActiveEnlarged: {name: "Use big font for STATE, if the device is active and enlarged", type: "checkbox", default: "false"},
		bigIconActiveEnlarged: {name: "Show big icon, if device is active and enlarged", type: "checkbox", default: "true"},
		iconNoPointerEventsActiveEnlarged: {name: "Ignore mouse events for the icon, if device is active and enlarged", type: "checkbox", default: "false"},
		transparentIfActiveEnlarged: {name: "Make background transparent, if device is active and enlarged", type: "checkbox", default: "false"},
		noOverlayActiveEnlarged: {name: "Remove overlay of tile, if device is active and enlarged", type: "checkbox", default: "false"},
		hideBackgroundURLActiveEnlarged: {name: "Hide background from BACKGROUND_VIEW/URL/HTML, if device is active and enlarged", type: "checkbox", default: "false"},
		hideDeviceNameIfActiveEnlarged: {name: "Hide device name, if the device is active and enlarged", type: "checkbox", default: "false"},
		hideStateIfActiveEnlarged: {name: "Hide state, if the device is active and enlarged", type: "checkbox", default: "false"},
		hideIndicatorIfActiveEnlarged: {name: "Hide Indicator Icons (ERROR, UNREACH, BATTERY), if the device is active and enlarged", type: "checkbox", default: "false"},
		hideInfoAIfActiveEnlarged: {name: "Hide INFO_A, if the device is active and enlarged", type: "checkbox", default: "false"},
		hideInfoBIfActiveEnlarged: {name: "Hide INFO_B, if the device is active and enlarged", type: "checkbox", default: "false"},
		hideIconActiveEnlarged: {name: "Hide icon, if device is active and enlarged", type: "checkbox", default: "false"}
	}},
	SECTION_TIMESTAMP: {name: "STATE, LEVEL and Timestamp", type: "section", options: {
		stateCaption: {name: "Caption of STATE", type: "text", default: ""},
		levelCaption: {name: "Caption of LEVEL", type: "text", default: ""},
		levelFavorites: {name: "Favorite values for LEVEL (semicolon separated list of numbers)", type: "text", default: ""},
		levelFavoritesHideSlider: {name: "Hide slider for LEVEL, if Favorite values are set", type: "checkbox", default: "false"},
		addTimestampToState: {name: "Add timestamp to state", type: "select", selectOptions: "/State only;SA/State only (if active);ST/State + Timestamp;STA/State + Timestamp (if active);SE/State + Elapsed;SEA/State + Elapsed (if active);SE./State + Elapsed (since);SE.A/State + Elapsed (since, if active);Se/State + Elapsed (short);SeA/State + Elapsed (short, if active);STE/State + Timestamp + Elapsed;STEA/State + Timestamp + Elapsed (if active);STE./State + Timestamp + Elapsed (since);STE.A/State + Timestamp + Elapsed (since, if active);STe/State + Timestamp + Elapsed (short);STeA/State + Timestamp + Elapsed (short, if active);T/Timestamp only;TA/Timestamp only (if active);TE/Timestamp + Elapsed;TEA/Timestamp + Elapsed (if active);TE./Timestamp + Elapsed (since);TE.A/Timestamp + Elapsed (since, if active);Te/Timestamp + Elapsed (short);TeA/Timestamp + Elapsed (short, if active);E/Elapsed only;EA/Elapsed only (if active);E./Elapsed only (since);E.A/Elapsed only (since, if active);e/Elapsed only (short);eA/Elapsed only (short, if active);N/Nothing (Hide state)", default: ""},
		hideStateAndLevelInDialog: {name: "Hide STATE and LEVEL in dialog", type: "checkbox", default: "false"},
		showTimestamp: {name: "Show Timestamp in dialog", type: "select", selectOptions: "/Auto;yes/Yes;no/No;always/Always;never/Never", default: ""}
	}},
	SECTION_INFO_A_B: {name: "INFO_A/B", type: "section", options: {
		infoARoundDigits: {name: "Round INFO_A to this number of digits", type: "number", min: "0", max: "10", default: "1"},
		infoBRoundDigits: {name: "Round INFO_B to this number of digits", type: "number", min: "0", max: "10", default: "1"},
		infoAShowName: {name: "Show Name of INFO_A", type: "checkbox", default: "false"},
		infoBShowName: {name: "Show Name of INFO_B", type: "checkbox", default: "false"}
	}},
	SECTION_BATTERY: {name: "BATTERY Empty Icon", type: "section", options: {
		batteryIcon_on: {name: "BATTERY Icon", type: "icon", typicalIconEquivalents: ["BATTERY"], default: ""},
		batteryActiveCondition: {name: "Condition", type: "select", selectOptions: "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal", default: ""},
		batteryActiveConditionValue: {name: "Condition value", type: "text", default: ""}
	}},
	SECTION_UNREACH: {name: "UNREACH Icon", type: "section", options: {
		unreachIcon_on: {name: "UNREACH Icon", type: "icon", typicalIconEquivalents: ["UNREACH"], default: ""},
		invertUnreach: {name: "Invert UNREACH (use connected instead of unreach)", type: "checkbox", default: "false"},
		hideUnreachIfInactive: {name: "Hide (resp. ignore) UNREACH, if the device is inactive", type: "checkbox", default: "false"}
	}},
	SECTION_ERROR: {name: "ERROR Icon", type: "section", options: {
		errorIcon_on: {name: "ERROR Icon", type: "icon", typicalIconEquivalents: ["ERROR"], default: ""},
		invertError: {name: "Invert ERROR (use ok instead of error)", type: "checkbox", default: "false"}
	}},
	SECTION_BACKGROUND_VIEWURLHTML: {name: "BACKGROUND_VIEW/URL/HTML", type: "section", options: {
		adjustHeightToBackgroundView: {name: "Adjust height of device tile to the size of BACKGROUND_VIEW", type: "checkbox", default: "false"},
		backgroundURLAllowAdjustHeight: {name: "Allow widget in BACKGROUND_URL to adjust height of device tile", type: "checkbox", default: "false"},
		backgroundLimitAdjustHeightToScreen: {name: "Limit adjustment of height to screen size", type: "checkbox", default: "false"},
		backgroundURLDynamicIframeZoom: {name: "Dynamic zoom for BACKGROUND_VIEW/URL/HTML (this is the zoom-level in % that would be needed, to let the content fit into a single 1x1 tile)", type: "number", step: "0.01", min: "0", max: "200", default: ""},
		backgroundURLPadding: {name: "Apply padding to BACKGROUND_VIEW/URL/HTML", type: "number", min: "0", max: "50", default: ""},
		backgroundURLAllowPostMessage: {name: "Allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
		backgroundURLNoPointerEvents: {name: "Direct mouse events to the tile instead to the content of BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"},
		overlayAboveBackgroundURL: {name: "Position Overlay above BACKGROUND_VIEW/URL/HTML", type: "checkbox", default: "false"}
	}},
	SECTION_BADGE: {name: "BADGE", type: "section", options: {
		badgeWithoutUnit: {name: "Show badge value without unit", type: "checkbox", default: "false"},
		showBadgeIfZero: {name: "Show badge even if the value is zero", type: "checkbox", default: "false"},
	}},
	SECTION_GLOW: {name: "GLOW", type: "section", options: {
		invertGlowHide: {name: "Invert GLOW_HIDE", type: "checkbox", default: "false"}
	}},
	SECTION_URLHTML: {name: "URL/HTML", type: "section", options: {
		popupWidth: {name: "Width [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
		popupHeight: {name: "Height [px] for URL/HTML-Box", type: "number", min: "100", max: "2000", default: ""},
		popupFixed: {name: "Fixed (not resizable)", type: "checkbox", default: "false"},
		openURLExternal: {name: "Open URL in new window (instead of showing as box in dialog)", type: "checkbox", default: "false"},
		openURLExternalCaption: {name: "Caption for Button to open URL in new window", type: "text", default: ""},
		popupAllowPostMessage: {name: "Allow postMessage-Communication for URL/HTML", type: "checkbox", default: "false"}
	}},
	SECTION_ADDITIONAL_CONTROLS: {name: "ADDITIONAL_CONTROLS", type: "section", options: {
		additionalControlsSectionType: {name: "Appereance of ADDITIONAL_CONTROLS", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
		additionalControlsCaption: {name: "Caption for ADDITIONAL_CONTROLS", type: "text", default: "Additional Controls"},
		additionalControlsHeadingType: {name: "Appereance of ADDITIONAL_CONTROLS Headings", type: "select", selectOptions: "none/No collapsible section (always visible);collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "none"},
		additionalControlsHideNameForButtons: {name: "Hide Name (with Icon) for Buttons (use caption only)", type: "checkbox", default: false}
	}},
	SECTION_ADDITIONAL_INFO: {name: "ADDITIONAL_INFO", type: "section", options: {
		additionalInfoSectionType: {name: "Appereance of ADDITIONAL_INFO", type: "select", selectOptions: "none/No collapsible section (always visible);none noCaption/No collapsible section (always visible), without caption;collapsible/Collapsible section, closed at start;collapsible open/Collapsible section, opened at start", default: "collapsible"},
		additionalInfoCaption: {name: "Caption for ADDITIONAL_INFO", type: "text", default: "Additional Infos"},
		additionalInfoListType: {name: "List type of ADDITIONAL_INFO", type: "select", selectOptions: "/Default;plain/Plain", default: ""},
		additionalInfoListColumnCount: {name: "Split the list into this number of columns", type: "select", selectOptions: "auto/Auto;1;2;3;4;5;6", default: "auto"},
		additionalInfoListColumnWidth: {name: "Do not go below this column width [px]", type: "number", min: 0, max: 1200, step: 1, default: ""}
	}},
	SECTION_DEVICESPECIFIC: {name: "Device Specific Options", type: "section"}
};

var iQontrolRolesStandardDeviceStates = {
	STATE: {
		groupName: "Main",
		description: "Defines usualy the main function of device",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	LEVEL: {
		groupName: "Main",
		description: "Main function for devices with levels like dimmers",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	TOGGLE: {
		groupName: "Main",
		description: "Toggle button for example of a garage door (STATE is used to display the open/close-state)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	CONTROL_MODE: {
		groupName: "Main",
		description: "The mode of alarm-systems, thermostats etc.",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	POWER: {
		groupName: "Main",
		description: "Powerconsumption to be displayed",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	VOLTAGE: {
		groupName: "Main",
		description: "Voltage to be displayed",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	BRIGHTNESS: {
		groupName: "Main",
		description: "Brightness of a light or motion sensor to be displayed",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	SET_VALUE: {
		groupName: "Main",
		description: "The value that will be sent when pressing button",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	OFF_SET_VALUE: {
		groupName: "Main",
		description: "The value that will be sent when leaving button",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	ENLARGE_TILE: {
		groupName: "Enlarge Tile",
		description: "To enlarge the tile programmatically",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	HUE: {
		groupName: "Color-Mixing",
		description: "The hue-value of a rgb-lamp",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	LOCK_STATE: {
		groupName: "Door-Lock",
		description: "Controls the state of a door-lock (STATE is used to display the open/close-state)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	LOCK_STATE_UNCERTAIN: {
		groupName: "Door-Lock",
		description: "If true, the LOCK-STATE will be displayed in italic letters",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	LOCK_OPEN: {
		groupName: "Door-Lock",
		description: "Used to open a door completely",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	DIRECTION: {
		groupName: "Blinds",
		description: "The actual direction (needs to be configured under options)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	STOP: {
		groupName: "Blinds",
		description: "Button to stop the blinds",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	STOP_SET_VALUE: {
		groupName: "Blinds",
		description: "Value that will be sent, if the stop button is pressed",
		commonType: "string",
		commonRole: "const",
		defaultArrayCols: []
	},
	UP: {
		groupName: "Blinds",
		description: "Button to let the blinds go up (as alternative, if LEVEL does not work)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	UP_SET_VALUE: {
		groupName: "Blinds",
		description: "Value that will be sent, if the up button is pressed",
		commonType: "string",
		commonRole: "const",
		defaultArrayCols: []
	},
	DOWN: {
		groupName: "Blinds",
		description: "Button to let the blinds go down (as alternative, if LEVEL does not work)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	DOWN_SET_VALUE: {
		groupName: "Blinds",
		description: "Value that will be sent, if the down button is pressed",
		commonType: "string",
		commonRole: "const",
		defaultArrayCols: []
	},
	FAVORITE_POSITION: {
		groupName: "Blinds",
		description: "Button to let the blinds go to a favorite position (may be the same as LEVEL with corresponding SET_VALUE)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	FAVORITE_POSITION_SET_VALUE: {
		groupName: "Blinds",
		description: "Value that will be sent, if the Favorite-Position button is pressed",
		commonType: "string",
		commonRole: "const",
		defaultArrayCols: []
	},
	SLATS_LEVEL: {
		groupName: "Blinds",
		description: "Position of slats if available",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	CHARGING: {
		groupName: "Battery",
		description: "If true, a charging overlay will be shown (use STATE to set the percentage)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	DISCHARGING: {
		groupName: "Battery",
		description: "If true, a discharging overlay will be shown (use STATE to set the percentage)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	SATURATION: {
		groupName: "Color-Mixing",
		description: "The color saturation of a rgb-lamp",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	COLOR_BRIGHTNESS: {
		groupName: "Color-Mixing",
		description: "The color brightness of a rgb-w-lamp",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	CT: {
		groupName: "Color-Mixing",
		description: "The color temperature of a ww-cw-lamp",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	WHITE_BRIGHTNESS: {
		groupName: "Color-Mixing",
		description: "The white brightness of a rgb-w-lamp",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	ALTERNATIVE_COLORSPACE_VALUE: {
		groupName: "Color-Mixing",
		description: "For lamps that don\'t use the states above (needs to be configured under options!)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	TIME: {
		groupName: "Date and Time",
		description: "Time or duration (can be configured in options) - use STATE to show active/inactive state.",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	SUBJECT: {
		groupName: "Date and Time",
		description: "Subject of the timer that will be displayed",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	RINGING: {
		groupName: "Date and Time",
		description: "If true a ringing-overlay will be shown",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	COVER_URL: {
		groupName: "Media Control",
		description: "URL of cover-image",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	ARTIST: {
		groupName: "Media Control",
		description: "Artist to be shown",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	ALBUM: {
		groupName: "Media Control",
		description: "Album title to be shown",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	TRACK_NUMBER: {
		groupName: "Media Control",
		description: "Acktual track number to be shown",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	TITLE: {
		groupName: "Media Control",
		description: "Actual title to be shown",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	EPISODE: {
		groupName: "Media Control",
		description: "Actual Episode to be shown",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	SEASON: {
		groupName: "Media Control",
		description: "Season to be shown",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	PREV: {
		groupName: "Media Control",
		description: "Button to go to last title",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	NEXT: {
		groupName: "Media Control",
		description: "Button to go to next title",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REWIND: {
		groupName: "Media Control",
		description: "Button to go fast backward",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	FORWARD: {
		groupName: "Media Control",
		description: "Button to go fast forward",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	PLAY: {
		groupName: "Media Control",
		description: "Button to start (configure options to work together with STATE)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	PAUSE: {
		groupName: "Media Control",
		description: "Button to pause (configure options to work together with STATE)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	STOP: {
		groupName: "Media Control",
		description: "Button to stop (configure options to work together with STATE)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	SHUFFLE: {
		groupName: "Media Control",
		description: "Control of shuffle",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REPEAT: {
		groupName: "Media Control",
		description: "Control of repeat-status (needs to be configured under options)",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	MUTE: {
		groupName: "Media Control",
		description: "Button to mute",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	DURATION: {
		groupName: "Media Control",
		description: "Duration of actual title",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	ELAPSED: {
		groupName: "Media Control",
		description: "Elapsed time of actual title - used together with DURATION",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	VOLUME: {
		groupName: "Media Control",
		description: "Volume of media",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	SOURCE: {
		groupName: "Media Control",
		description: "Source of media",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	PLAYLIST: {
		groupName: "Media Control",
		description: "Actual playlist",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	PLAY_EVERYWHERE: {
		groupName: "Media Control",
		description: "Button to activate multi-room mode",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	EJECT: {
		groupName: "Media Control",
		description: "Button to eject media",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	POWER_SWITCH: {
		groupName: "Media Control",
		description: "To power on or off",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_NUMBER: {
		groupName: "Remote Control",
		description: "Shows a num-pad (0-9) a returns the corresponding number, if a number is clicked",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_VOLUME_UP: {
		groupName: "Remote Control",
		description: "Volume up button",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_VOLUME_DOWN: {
		groupName: "Remote Control",
		description: "Volume down button",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_CH_UP: {
		groupName: "Remote Control",
		description: "Channel up button",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_CH_DOWN: {
		groupName: "Remote Control",
		description: "Channel down button",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_PAD_DIRECTION: {
		groupName: "Remote Control",
		description: "Shows a trackpad and returns left, right, up, down or ok",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_PAD_BACK: {
		groupName: "Remote Control",
		description: "Back button",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_PAD_HOME: {
		groupName: "Remote Control",
		description: "Home button",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_PAD_MENU: {
		groupName: "Remote Control",
		description: "Menu button",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_COLOR: {
		groupName: "Remote Control",
		description: "Shows four buttons and returns red, green, yellow or blut",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	REMOTE_CHANNELS: {
		groupName: "Remote Control",
		description: "An array of channel-buttons",
		commonType: "array",
		commonRole: "const",
		defaultArrayCols: [
			{col: "name", colheader: "Name", description: "", commonType: "option"}, 
			{col: "hideName", colheader: "Hide Name", description: "", commonType: "checkbox"}, 
			{col: "caption", colheader: "Caption (only for Buttons)", description: "", commonType: "option"},
			{col: "heading", colheader: "Heading", description: "", commonType: "option"},
			{col: "icon#commonRole", colheader: "Icon " + _("Role"), description: "", commonType: "commonRole", for: "icon", defaultValue: "const"},
			{col: "icon", colheader: "Icon " + _("Value"), description: "", commonType: "icon", commonRoleFrom: "icon#commonRole", typicalIconEquivalents: []},
			{col: "state#commonRole", colheader: "State " + _("Role"), description: "", commonType: "commonRole", for: "state", defaultValue: "linkedState"},
			{col: "state", colheader: "State " + _("Value"), description: "", commonType: "string", commonRoleFrom: "state#commonRole"}
		]
	},
	REMOTE_ADDITIONAL_BUTTONS: {
		groupName: "Remote Control",
		description: "An array of additional buttons",
		commonType: "array",
		commonRole: "const",
		defaultArrayCols: [
			{col: "name", colheader: "Name", description: "", commonType: "option"}, 
			{col: "hideName", colheader: "Hide Name", description: "", commonType: "checkbox"}, 
			{col: "caption", colheader: "Caption (only for Buttons)", description: "", commonType: "option"},
			{col: "heading", colheader: "Heading", description: "", commonType: "option"},
			{col: "icon#commonRole", colheader: "Icon " + _("Role"), description: "", commonType: "commonRole", for: "icon", defaultValue: "const"},
			{col: "icon", colheader: "Icon " + _("Value"), description: "", commonType: "icon", commonRoleFrom: "icon#commonRole", typicalIconEquivalents: []},
			{col: "state#commonRole", colheader: "State " + _("Role"), description: "", commonType: "commonRole", for: "state", defaultValue: "linkedState"},
			{col: "state", colheader: "State " + _("Value"), description: "", commonType: "string", commonRoleFrom: "state#commonRole"}
		]
	},
	REMOTE_HIDE_REMOTE: {
		groupName: "Remote Control",
		description: "If true the remote section will be hidden",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	SET_TEMPERATURE: {
		groupName: "Climate",
		description: "To set the temperature of a thermostat",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	TEMPERATURE: {
		groupName: "Climate",
		description: "Actual temperature",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	HUMIDITY: {
		groupName: "Climate",
		description: "Actual humidity",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	WINDOW_OPEN_REPORTING: {
		groupName: "Climate",
		description: "If true, the thermostat will show a opened window",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	VALVE_STATES: {
		groupName: "Climate",
		description: "A list of valves to be displayed",
		commonType: "array",
		commonRole: "const",
		defaultArrayCols: [
			{col: "icon#commonRole", colheader: "Icon " + _("Role"), description: "", commonType: "commonRole", for: "icon", defaultValue: "const"},
			{col: "icon", colheader: "Icon " + _("Value"), description: "", commonType: "icon", commonRoleFrom: "icon#commonRole", typicalIconEquivalents: []},
			{col: "state#commonRole", colheader: "State " + _("Role"), description: "", commonType: "commonRole", for: "state", defaultValue: "linkedState"},
			{col: "state", colheader: "State " + _("Value"), description: "", commonType: "string", commonRoleFrom: "state#commonRole"}
		]
	},
	BOOST_STATE: {
		groupName: "Climate",
		description: "Boolean or the remaining time of boost-mode",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	PARTY_TEMPERATURE: {
		groupName: "Climate",
		description: "Party-Mode for homematic thermostats",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	BADGE: {
		groupName: "Badge",
		description: "Value that will be displayed as a badge",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	BADGE_COLOR: {
		groupName: "Badge",
		description: "Color of badge",
		commonType: "color",
		commonRole: "const",
		defaultArrayCols: []
	},
	INFO_A: {
		groupName: "Info",
		description: "An array of additional states to be shown in small in the tile",
		commonType: "array",
		commonRole: "const",
		defaultArrayCols: [
			{col: "icon#commonRole", colheader: "Icon " + _("Role"), description: "", commonType: "commonRole", for: "icon", defaultValue: "const"},
			{col: "icon", colheader: "Icon " + _("Value"), description: "", commonType: "icon", commonRoleFrom: "icon#commonRole", typicalIconEquivalents: []},
			{col: "state#commonRole", colheader: "State " + _("Role"), description: "", commonType: "commonRole", for: "state", defaultValue: "linkedState"},
			{col: "state", colheader: "State " + _("Value"), description: "", commonType: "string", commonRoleFrom: "state#commonRole"}
		]
	},
	INFO_B: {
		groupName: "Info",
		description: "An array of additional states to be shown in small in the tile",
		commonType: "array",
		commonRole: "const",
		defaultArrayCols: [
			{col: "icon#commonRole", colheader: "Icon " + _("Role"), description: "", commonType: "commonRole", for: "icon", defaultValue: "const"},
			{col: "icon", colheader: "Icon " + _("Value"), description: "", commonType: "icon", commonRoleFrom: "icon#commonRole", typicalIconEquivalents: []},
			{col: "state#commonRole", colheader: "State " + _("Role"), description: "", commonType: "commonRole", for: "state", defaultValue: "linkedState"},
			{col: "state", colheader: "State " + _("Value"), description: "", commonType: "string", commonRoleFrom: "state#commonRole"}
		]
	},
	BATTERY: {
		groupName: "Indicators",
		description: "Show empty battery icon",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	UNREACH: {
		groupName: "Indicators",
		description: "Show device is unreachable icon",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	ERROR: {
		groupName: "Indicators",
		description: "Show error icon",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	BACKGROUND_VIEW: {
		groupName: "Tile-Background",
		description: "Define anoher view as tile background",
		commonType: "view",
		commonRole: "const",
		defaultArrayCols: []
	},
	BACKGROUND_URL: {
		groupName: "Tile-Background",
		description: "Website or widget as tile background",
		commonType: "url",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	BACKGROUND_HTML: {
		groupName: "Tile-Background",
		description: "HTML-Code to be tile background",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	OVERLAY_INACTIVE_COLOR: {
		groupName: "Tile-Overlay",
		description: "Color-Overlay of an inactive tile",
		commonType: "color",
		commonRole: "const",
		defaultArrayCols: []
	},
	OVERLAY_ACTIVE_COLOR: {
		groupName: "Tile-Overlay",
		description: "Color-Overlay of an active tile",
		commonType: "color",
		commonRole: "const",
		defaultArrayCols: []
	},
	GLOW_INACTIVE_COLOR: {
		groupName: "Glow",
		description: "Color of glow around an inactive tile",
		commonType: "color",
		commonRole: "const",
		defaultArrayCols: []
	},
	GLOW_ACTIVE_COLOR: {
		groupName: "Glow",
		description: "Color of glow around an active tile",
		commonType: "color",
		commonRole: "const",
		defaultArrayCols: []
	},
	GLOW_HIDE: {
		groupName: "Glow",
		description: "If true, the glow is hidden",
		commonType: "string",
		commonRole: "linkedState",
		defaultArrayCols: []
	},
	URL: {
		groupName: "Dialog",
		description: "Website or widget to be displayed in dialog",
		commonType: "url",
		commonRole: "const",
		defaultArrayCols: []
	},
	HTML: {
		groupName: "Dialog",
		description: "HTML-Code to be displayed in dialog",
		commonType: "string",
		commonRole: "const",
		defaultArrayCols: []
	},
	ADDITIONAL_CONTROLS: {
		groupName: "Dialog",
		description: "Additional controls that can be placed on dialog",
		commonType: "array",
		commonRole: "const",
		defaultArrayCols: [
			{col: "name", colheader: "Name", description: "The name ob the element", commonType: "option"}, 
			{col: "hideName", colheader: "Hide Name", description: "", commonType: "checkbox"},
			{col: "caption", colheader: "Caption (only for Buttons)", description: "", commonType: "option"},
			{col: "heading", colheader: "Heading", description: "", commonType: "option"},
			{col: "icon#commonRole", colheader: "Icon " + _("Role"), description: "", commonType: "commonRole", for: "icon", defaultValue: "const"},
			{col: "icon", colheader: "Icon " + _("Value"), description: "", commonType: "icon", commonRoleFrom: "icon#commonRole", typicalIconEquivalents: []},
			{col: "state#commonRole", colheader: "State " + _("Role"), description: "", commonType: "commonRole", for: "state", defaultValue: "linkedState"},
			{col: "state", colheader: "State " + _("Value"), description: "", commonType: "string", commonRoleFrom: "state#commonRole"}
		]
	},
	ADDITIONAL_INFO: {
		groupName: "Dialog",
		description: "Additional values to be displayed on dialog",
		commonType: "array",
		commonRole: "const",
		defaultArrayCols: [
			{col: "name", colheader: "Name", description: "", commonType: "option"}, 
			{col: "hideName", colheader: "Hide Name", description: "", commonType: "checkbox"},
			{col: "heading", colheader: "Heading", description: "", commonType: "option"},
			{col: "icon#commonRole", colheader: "Icon " + _("Role"), description: "", commonType: "commonRole", for: "icon", defaultValue: "const"},
			{col: "icon", colheader: "Icon " + _("Value"), description: "", commonType: "icon", commonRoleFrom: "icon#commonRole", typicalIconEquivalents: []},
			{col: "state#commonRole", colheader: "State " + _("Role"), description: "", commonType: "commonRole", for: "state", defaultValue: "linkedState"},
			{col: "state", colheader: "State " + _("Value"), description: "", commonType: "string", commonRoleFrom: "state#commonRole"}
		]
	}
};

var iQontrolRolesStandardTileSettingElements = [
    {
        "commonType": "clickAction",
        "commonName": "Click On Tile Action",
        "stackIndex": "0",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": true
            },
            {
                "option": "clickActionActive",
                "role": "array",
                "value": ""
            },
            {
                "option": "clickActionActiveInvert",
                "role": "const",
                "value": false
            },
            {
                "option": "clickAction",
                "role": "deviceOption",
                "value": "clickOnTileAction"
            },
            {
                "option": "clickActionToggleFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "clickActionURLState",
                "role": "deviceState",
                "value": "URL"
            },
            {
                "option": "clickActionRenderLinkedViewInParentInstance",
                "role": "deviceOption",
                "value": "renderLinkedViewInParentInstance"
            },
            {
                "option": "clickActionRenderLinkedViewInParentInstanceClosesPanel",
                "role": "deviceOption",
                "value": "renderLinkedViewInParentInstanceClosesPanel"
            },
            {
                "option": "contextMenu",
                "role": "const",
                "value": true
            },
            {
                "option": "contextMenuToggleActive",
                "role": "array",
                "value": ""
            },
            {
                "option": "contextMenuToggleActiveInvert",
                "role": "const",
                "value": false
            },
            {
                "option": "contextMenuDialogActive",
                "role": "array",
                "value": ""
            },
            {
                "option": "contextMenuDialogActiveInvert",
                "role": "const",
                "value": false
            },
            {
                "option": "contextMenuEnlargeActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"tileEnlargeShowInPressureMenuInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"tileEnlargeShowInPressureMenuActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "contextMenuEnlargeActiveInvert",
                "role": "const",
                "value": false
            },
            {
                "option": "contextMenuOpenLinkToOtherViewActive",
                "role": "array",
                "value": ""
            },
            {
                "option": "contextMenuOpenLinkToOtherViewActiveInvert",
                "role": "const",
                "value": false
            },
            {
                "option": "contextMenuOpenURLExternalActive",
                "role": "array",
                "value": ""
            },
            {
                "option": "contextMenuOpenURLExternalActiveInvert",
                "role": "const",
                "value": false
            }
        ]
    },
    {
        "commonType": "text",
        "commonName": "Full Size State",
        "stackIndex": "0",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "textClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "textState",
                "role": "deviceState",
                "value": "STATE"
            },
            {
                "option": "textLevelState",
                "role": "deviceState",
                "value": "LEVEL"
            },
            {
                "option": "textActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"stateFillsDeviceInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"stateFillsDeviceActive\",\"activeCondition\":\"\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"stateFillsDeviceEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "textActiveInvert",
                "role": "const",
                "value": false
            },
            {
                "option": "textAddTimestampMode",
                "role": "deviceOption",
                "value": "addTimestampToState"
            },
            {
                "option": "textProcessingFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "textProcessingOptions",
                "role": "const",
                "value": "{}"
            },
            {
                "option": "textMultiline",
                "role": "const",
                "value": true
            },
            {
                "option": "textNoPointerEvents",
                "role": "const",
                "value": false
            },
            {
                "option": "textFloatSelector",
                "role": "const",
                "value": ".uiElement[data-ui-element-name=\"Icon on\"]"
            },
            {
                "option": "textFreeSpaceSelector",
                "role": "const",
                "value": ".uiElement[data-ui-element-name=\"Badge\"]"
            }
        ]
    },
    {
        "commonType": "badge",
        "commonName": "Badge",
        "stackIndex": "1",
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "badgeClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "badgeState",
                "role": "deviceState",
                "value": "BADGE"
            },
            {
                "option": "badgeColorState",
                "role": "deviceState",
                "value": "BADGE_COLOR"
            },
            {
                "option": "badgeWithoutUnit",
                "role": "deviceOption",
                "value": "badgeWithoutUnit"
            },
            {
                "option": "badgeShowIfZero",
                "role": "deviceOption",
                "value": "showBadgeIfZero"
            }
        ],
        "outside": true
    },
    {
        "commonType": "enlargeButton",
        "commonName": "Enlarge Button",
        "stackIndex": "2",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "enlargeButtonClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "enlargeButtonActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"tileEnlargeShowButtonInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"tileEnlargeShowButtonActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "enlargeButtonActiveInvert",
                "role": "const",
                "value": false
            },
            {
                "option": "enlargeButtonNoZoomOnHover",
                "role": "const",
                "value": false
            },
            {
                "option": "enlargeButtonRotate",
                "role": "const",
                "value": ""
            }
        ]
    },
    {
        "commonType": "icon",
        "commonName": "Icon off",
        "stackIndex": "3",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconState",
                "role": "deviceOption",
                "value": "icon_off"
            },
            {
                "option": "iconActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "iconActiveInvert",
                "role": "const",
                "value": false
            },
            {
                "option": "iconNoZoomOnHover",
                "role": "deviceOption",
                "value": "iconNoZoomOnHover"
            },
            {
                "option": "iconNoPointerEvents",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClickAction",
                "role": "deviceOption",
                "value": "clickOnIconAction"
            },
            {
                "option": "iconClickActionToggleFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionURLState",
                "role": "deviceState",
                "value": "URL"
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstance",
                "role": "deviceOption",
                "value": "renderLinkedViewInParentInstance"
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstanceClosesPanel",
                "role": "deviceOption",
                "value": "renderLinkedViewInParentInstanceClosesPanel"
            }
        ]
    },
    {
        "commonType": "icon",
        "commonName": "Icon on",
        "stackIndex": "3",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconState",
                "role": "deviceOption",
                "value": "icon_on"
            },
            {
                "option": "iconActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "iconActiveInvert",
                "role": "const",
                "value": false
            },
            {
                "option": "iconNoZoomOnHover",
                "role": "deviceOption",
                "value": "iconNoZoomOnHover"
            },
            {
                "option": "iconNoPointerEvents",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClickAction",
                "role": "deviceOption",
                "value": "clickOnIconAction"
            },
            {
                "option": "iconClickActionToggleFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionURLState",
                "role": "deviceState",
                "value": "URL"
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstance",
                "role": "deviceOption",
                "value": "renderLinkedViewInParentInstance"
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstanceClosesPanel",
                "role": "deviceOption",
                "value": "renderLinkedViewInParentInstanceClosesPanel"
            }
        ]
    },
    {
        "commonType": "loadingIcon",
        "commonName": "Loading",
        "stackIndex": "4",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconNoZoomOnHover",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoPointerEvents",
                "role": "const",
                "value": true
            }
        ]
    },
    {
        "commonType": "icon",
        "commonName": "ERROR",
        "stackIndex": "5",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconState",
                "role": "deviceOption",
                "value": "errorIcon_on"
            },
            {
                "option": "iconActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceState\",\"activeStateValue\":\"ERROR\",\"activeCondition\":\"eqf\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqf\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"invertError\",\"activeCondition\":\"eqf\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqf\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceState\",\"activeStateValue\":\"ERROR\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"invertError\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideIndicatorIfInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideIndicatorIfActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideIndicatorIfEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "iconActiveInvert",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoZoomOnHover",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoPointerEvents",
                "role": "const",
                "value": true
            },
            {
                "option": "iconClickAction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionToggleFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionURLState",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstance",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstanceClosesPanel",
                "role": "const",
                "value": false
            }
        ]
    },
    {
        "commonType": "icon",
        "commonName": "UNREACH",
        "stackIndex": "6",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconState",
                "role": "deviceOption",
                "value": "unreachIcon_on"
            },
            {
                "option": "iconActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceState\",\"activeStateValue\":\"UNREACH\",\"activeCondition\":\"eqf\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqf\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"invertUnreach\",\"activeCondition\":\"eqf\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqf\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceState\",\"activeStateValue\":\"UNREACH\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"invertUnreach\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideIndicatorIfInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideIndicatorIfActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideIndicatorIfEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideUnreachIfInactive\",\"activeCondition\":\"\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":null,\"activeConditionValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeCondition\":\"\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":null,\"activeConditionValue\":\"\"}]"
            },
            {
                "option": "iconActiveInvert",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoZoomOnHover",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoPointerEvents",
                "role": "const",
                "value": true
            },
            {
                "option": "iconClickAction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionToggleFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionURLState",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstance",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstanceClosesPanel",
                "role": "const",
                "value": false
            }
        ]
    },
    {
        "commonType": "icon",
        "commonName": "BATTERY",
        "stackIndex": "7",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconState",
                "role": "deviceOption",
                "value": "batteryIcon_on"
            },
            {
                "option": "iconActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceState\",\"activeStateValue\":\"BATTERY\",\"activeCondition\":\"eqf\",\"activeConditionTresholdRole\":\"deviceOption\",\"activeConditionTresholdValue\":\"batteryActiveConditionValue\",\"activeConditionRole\":\"deviceOption\",\"activeConditionValue\":\"batteryActiveCondition\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideIndicatorIfInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideIndicatorIfActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideIndicatorIfEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "iconActiveInvert",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoZoomOnHover",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoPointerEvents",
                "role": "const",
                "value": true
            },
            {
                "option": "iconClickAction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionToggleFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionURLState",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstance",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstanceClosesPanel",
                "role": "const",
                "value": false
            }
        ]
    },
    {
        "commonType": "iconTextCombination",
        "commonName": "INFO_A",
        "stackIndex": "8",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconState",
                "role": "deviceState",
                "value": "INFO_A.icon"
            },
            {
                "option": "iconActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceState\",\"activeStateValue\":\"INFO_A.state\",\"activeCondition\":\"eqf\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqf\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoAIfInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoAIfActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoAIfEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "iconActiveInvert",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoZoomOnHover",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoPointerEvents",
                "role": "const",
                "value": true
            },
            {
                "option": "iconClickAction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionToggleFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionURLState",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstance",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstanceClosesPanel",
                "role": "const",
                "value": false
            },
            {
                "option": "textClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "textState",
                "role": "deviceState",
                "value": "INFO_A.state"
            },
            {
                "option": "textLevelState",
                "role": "deviceState",
                "value": ""
            },
            {
                "option": "textActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceState\",\"activeStateValue\":\"INFO_A.state\",\"activeCondition\":\"eqf\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqf\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoAIfInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoAIfActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoAIfEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "textActiveInvert",
                "role": "const",
                "value": true
            },
            {
                "option": "textAddTimestampMode",
                "role": "const",
                "value": ""
            },
            {
                "option": "textProcessingFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "textProcessingOptions",
                "role": "const",
                "value": "{}"
            },
            {
                "option": "textMultiline",
                "role": "const",
                "value": false
            },
            {
                "option": "textNoPointerEvents",
                "role": "const",
                "value": true
            },
            {
                "option": "textAlwaysReservePlaceForIcon",
                "role": "const",
                "value": false
            },
            {
                "option": "textFloatSelector",
                "role": "const",
                "value": ""
            },
            {
                "option": "textFreeSpaceSelector",
                "role": "const",
                "value": ""
            }
        ]
    },
    {
        "commonType": "iconTextCombination",
        "commonName": "INFO_B",
        "stackIndex": "9",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconState",
                "role": "deviceState",
                "value": "INFO_B.icon"
            },
            {
                "option": "iconActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceState\",\"activeStateValue\":\"INFO_B.state\",\"activeCondition\":\"eqf\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqf\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoBIfInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoBIfActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoBIfEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "iconActiveInvert",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoZoomOnHover",
                "role": "const",
                "value": true
            },
            {
                "option": "iconNoPointerEvents",
                "role": "const",
                "value": true
            },
            {
                "option": "iconClickAction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionToggleFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionURLState",
                "role": "const",
                "value": ""
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstance",
                "role": "const",
                "value": false
            },
            {
                "option": "iconClickActionRenderLinkedViewInParentInstanceClosesPanel",
                "role": "const",
                "value": false
            },
            {
                "option": "textClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "textState",
                "role": "deviceState",
                "value": "INFO_B.state"
            },
            {
                "option": "textLevelState",
                "role": "deviceState",
                "value": ""
            },
            {
                "option": "textActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceState\",\"activeStateValue\":\"INFO_B.state\",\"activeCondition\":\"eqf\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqf\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoBIfInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoBIfActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideInfoBIfEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "textActiveInvert",
                "role": "const",
                "value": true
            },
            {
                "option": "textAddTimestampMode",
                "role": "const",
                "value": ""
            },
            {
                "option": "textProcessingFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "textProcessingOptions",
                "role": "const",
                "value": "{}"
            },
            {
                "option": "textMultiline",
                "role": "const",
                "value": false
            },
            {
                "option": "textNoPointerEvents",
                "role": "const",
                "value": true
            },
            {
                "option": "textAlwaysReservePlaceForIcon",
                "role": "const",
                "value": false
            },
            {
                "option": "textFloatSelector",
                "role": "const",
                "value": ""
            },
            {
                "option": "textFreeSpaceSelector",
                "role": "const",
                "value": ""
            }
        ]
    },
    {
        "commonType": "text",
        "commonName": "Name",
        "stackIndex": "10",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "textClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "textState",
                "role": "deviceSetting",
                "value": "commonName"
            },
            {
                "option": "textLevelState",
                "role": "deviceState",
                "value": ""
            },
            {
                "option": "textActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideDeviceName\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideDeviceNameIfInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideDeviceNameIfActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideDeviceNameIfEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "textActiveInvert",
                "role": "const",
                "value": true
            },
            {
                "option": "textAddTimestampMode",
                "role": "const",
                "value": ""
            },
            {
                "option": "textProcessingFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "textProcessingOptions",
                "role": "const",
                "value": "{}"
            },
            {
                "option": "textMultiline",
                "role": "const",
                "value": true
            },
            {
                "option": "textNoPointerEvents",
                "role": "const",
                "value": true
            },
            {
                "option": "textFloatSelector",
                "role": "const",
                "value": ""
            },
            {
                "option": "textFreeSpaceSelector",
                "role": "const",
                "value": ""
            }
        ]
    },
    {
        "commonType": "text",
        "commonName": "STATE",
        "stackIndex": "11",
        "outside": false,
        "options": [
            {
                "option": "stackCycles",
                "role": "const",
                "value": false
            },
            {
                "option": "textClasses",
                "role": "const",
                "value": ""
            },
            {
                "option": "textState",
                "role": "deviceState",
                "value": "STATE"
            },
            {
                "option": "textLevelState",
                "role": "deviceState",
                "value": "LEVEL"
            },
            {
                "option": "textActive",
                "role": "array",
                "value": "[{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideStateIfInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"stateFillsDeviceInactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"inactive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideStateIfActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"stateFillsDeviceActive\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"active\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"hideStateIfEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"||\",\"activeStateRole\":\"deviceOption\",\"activeStateValue\":\"stateFillsDeviceEnlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"},{\"modifier\":\"&&\",\"activeStateRole\":\"deviceCondition\",\"activeStateValue\":\"enlarged\",\"activeConditionRole\":\"const\",\"activeConditionValue\":\"eqt\",\"activeConditionTresholdRole\":\"const\",\"activeConditionTresholdValue\":\"\"}]"
            },
            {
                "option": "textActiveInvert",
                "role": "const",
                "value": true
            },
            {
                "option": "textAddTimestampMode",
                "role": "const",
                "value": ""
            },
            {
                "option": "textProcessingFunction",
                "role": "const",
                "value": ""
            },
            {
                "option": "textProcessingOptions",
                "role": "const",
                "value": "{}"
            },
            {
                "option": "textMultiline",
                "role": "const",
                "value": true
            },
            {
                "option": "textNoPointerEvents",
                "role": "const",
                "value": true
            },
            {
                "option": "textFloatSelector",
                "role": "const",
                "value": ""
            },
            {
                "option": "textFreeSpaceSelector",
                "role": "const",
                "value": ""
            }
        ]
    }
];

//Extend iQontrolRoles with iQontrolRolesStandardOptions, iQontrolRolesStandardDeviceStates and iQontrolRolesStandardTileSettingElements
for(iQontrolRole in iQontrolRoles){
	//iQontrolRolesStandardOptions
	var optionsObject = JSON.parse(JSON.stringify(iQontrolRolesStandardOptions));
	for(deviceSpecificOptionSection in iQontrolRoles[iQontrolRole].deviceSpecificOptions){
		if (iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection] == "delete"){
			delete optionsObject[deviceSpecificOptionSection];
		} else {
			if (typeof optionsObject[deviceSpecificOptionSection] == "undefined") optionsObject[deviceSpecificOptionSection] = iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection];
			for(deviceSpecificOption in iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection].options){
				if (iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection].options[deviceSpecificOption] == "delete"){
					delete optionsObject[deviceSpecificOptionSection].options[deviceSpecificOption];
				} else {
					if (typeof optionsObject[deviceSpecificOptionSection].options == "undefined") optionsObject[deviceSpecificOptionSection].options = {};
					if (typeof optionsObject[deviceSpecificOptionSection].options[deviceSpecificOption] == "undefined"){
						optionsObject[deviceSpecificOptionSection].options[deviceSpecificOption] = iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection].options[deviceSpecificOption];
					} else {
						for(deviceSpecificOptionSetting in iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection].options[deviceSpecificOption]){
							optionsObject[deviceSpecificOptionSection].options[deviceSpecificOption][deviceSpecificOptionSetting] = iQontrolRoles[iQontrolRole].deviceSpecificOptions[deviceSpecificOptionSection].options[deviceSpecificOption][deviceSpecificOptionSetting];
						};	
					}	
				}
			};	
		}
	};
	var optionsObjectFlat = {};
	iQontrolRoles[iQontrolRole].optionsDisplaySequence = []; 
	for(section in optionsObject){
		optionsObjectFlat[section] = {name: optionsObject[section].name, type: optionsObject[section].type};
		iQontrolRoles[iQontrolRole].optionsDisplaySequence.push(section);
		for(option in optionsObject[section].options){
			optionsObjectFlat[option] = optionsObject[section].options[option];
			iQontrolRoles[iQontrolRole].optionsDisplaySequence.push(option);
		};
	};
	iQontrolRoles[iQontrolRole].options = JSON.parse(JSON.stringify(optionsObjectFlat));
	//iQontrolRolesStandardDeviceStates
	if(!iQontrolRoles[iQontrolRole].deviceStates) iQontrolRoles[iQontrolRole].deviceStates = {};
	iQontrolRoles[iQontrolRole].deviceStatesDisplaySequence = [];
	(iQontrolRoles[iQontrolRole].states || []).forEach(function(state){ //######## only before conversion during development, later array .states -> object .deviceStates
		var deviceState = {
			groupName: iQontrolRolesStandardDeviceStates[state] && iQontrolRolesStandardDeviceStates[state].groupName || "Additional States",
			description: iQontrolRolesStandardDeviceStates[state] && iQontrolRolesStandardDeviceStates[state].description || "",
			commonType: iQontrolRolesStandardDeviceStates[state] && iQontrolRolesStandardDeviceStates[state].commonType || "string",
			defaultArrayCols: iQontrolRolesStandardDeviceStates[state] && iQontrolRolesStandardDeviceStates[state].defaultArrayCols || [],
			userDefined: false
		}
		iQontrolRoles[iQontrolRole].deviceStatesDisplaySequence.push(state);
		iQontrolRoles[iQontrolRole].deviceStates[state] = deviceState;
	});
	//iQontrolRolesStandardTileSettingElements
	if(!iQontrolRoles[iQontrolRole].tileSettings) iQontrolRoles[iQontrolRole].tileSettings = {};
	iQontrolRoles[iQontrolRole].tileSettings.elements = Object.assign([], iQontrolRolesStandardTileSettingElements);
	iQontrolRoles[iQontrolRole].deviceSpecificTileSettings && iQontrolRoles[iQontrolRole].deviceSpecificTileSettings.elements && iQontrolRoles[iQontrolRole].deviceSpecificTileSettings.elements.forEach(function(deviceSpecificElement, elementIndex){
		iQontrolRoles[iQontrolRole].tileSettings.elements[elementIndex] = Object.assign({}, iQontrolRoles[iQontrolRole].tileSettings.elements[elementIndex] || {}, deviceSpecificElement);
	});
}

//Declarations
const udef = 'undefined';
var previewLink;
var newConfig = false;
var iobrokerObjects;
var iobrokerObjectsReady = false;
var iobrokerObjectsReadyFunctions = [];
var dialogCodeEditorCodeMirror = false;
var dialogCodeEditorCodeMirrorChanged = false;
var modalZIndexCount = 2000;
var isReact = false;
var previewWindow = null;
var passphrase;
var devicesMarkDevice = null;
var dialogDeviceEditCommonRole;
var tileEditor = {};
var dialogTileEditorSelectedStack = -1;

//Subsettings
var toolbar;
var views;
var lists;
var optionsLayoutDefaultIcons;
var optionsLayoutDefaultSymbols;
var version;

//++++++++++ GLOBAL FUNCTIONS ++++++++++
//Dialogs
function initDialog(id, saveCallback, initFunction) {
	var $dialog = $('#' + id);
	//Enhance dialog buttons with functions
	if (!$dialog.data('inited')) {
		$dialog.data('inited', true);
		$dialog.modal({
			dismissible: false
		});
		$dialog.find('.btn-set').on('click', function () {
			let $dialog = $('#' + $(this).data('dialogid'));
			let saveCallback = $dialog.data('save-callback');
			if (typeof saveCallback === 'function') saveCallback();
			$dialog.data('save-callback', null);
		});
		$dialog.find('.btn-save').on('click', function () {
			let $dialog = $('#' + $(this).data('dialogid'));
			saveFromDialogAndPreview(true, false);
			//Save abort subsettings
		});
		$dialog.find('.btn-preview').on('click', function () {
			let $dialog = $('#' + $(this).data('dialogid'));
			let renderView = $(this).data('preview-render-view');
			let openDialog = $(this).data('preview-open-dialog');
			saveFromDialogAndPreview(false, true, true, renderView, openDialog);
			$dialog.find('.btn-close').data('abort-callback-necessary', true);
		});
		$dialog.find('.btn-close').on('click', function () {
			let $dialog = $('#' + $(this).data('dialogid'));
			if ($dialog.find('.btn-close').data('abort-callback-necessary')){
				console.log("Abort callback: Restore subsettings and rebuild all open dialogs");
				$dialog.modal('close');
				setTimeout(function(){
					//Restore subsettings
					let abortSettings = $dialog.data('abort-settings');
					if (abortSettings){ 
						toolbar = abortSettings.toolbar;
						views = abortSettings.views;
						lists = abortSettings.lists;
						optionsLayoutDefaultIcons = abortSettings.optionsLayoutDefaultIcons;
						optionsLayoutDefaultSymbols = abortSettings.optionsLayoutDefaultSymbols;
					}
					//Rebuild all open dialogs
					$('.open').sort(function(a,b){ 
						return a.style.zIndex < b.style.zIndex; 
					}).each(function(){
						if ($(this) != $dialog){
							let initFunction = $(this).data('init-function');
							if (typeof initFunction === 'function') initFunction();
						}
					});
					saveFromDialogAndPreview(false, true, false);
				}, 75);
			}
		});
	}
	//Save some informations
	$dialog.find('.btn-close').data('abort-callback-necessary', false);
	$dialog.find('.btn-set, .btn-close, .btn-save, .btn-preview').data('dialogid', id);
	$dialog.data('save-callback', saveCallback);
	//Save abort subsettings
	var abortSettings = {};
	abortSettings.toolbar = JSON.parse(JSON.stringify(toolbar));
	abortSettings.views = JSON.parse(JSON.stringify(views));
	abortSettings.lists = JSON.parse(JSON.stringify(lists));
	abortSettings.optionsLayoutDefaultIcons = JSON.parse(JSON.stringify(optionsLayoutDefaultIcons));
	abortSettings.optionsLayoutDefaultSymbols = JSON.parse(JSON.stringify(optionsLayoutDefaultSymbols));
	$dialog.data('abort-settings', abortSettings);
	//call initFunction
	if (typeof initFunction == "function"){
		initFunction();
		$dialog.data('init-function', initFunction);
		$dialog.modal('open');
		$dialog.css('z-index', modalZIndexCount++);
		$dialog.find('.modal-content').scrollTop(0);		
	}
}

//Save from dialog and Preview
function saveFromDialogAndPreview(doSave, doPreview, focusPreview, renderView, openDialog){
	$('.open').sort(function(a,b){ 
		return a.style.zIndex > b.style.zIndex; 
	}).each(function(){ 
		let saveCallback = $(this).data('save-callback'); 
		if (typeof saveCallback == "function") saveCallback();
	});
	if (doSave){ 
		$('.dialog-config-buttons .btn-save').click();
		var abortSettings = {};
		abortSettings.toolbar = JSON.parse(JSON.stringify(toolbar));
		abortSettings.views = JSON.parse(JSON.stringify(views));
		abortSettings.lists = JSON.parse(JSON.stringify(lists));
		abortSettings.optionsLayoutDefaultIcons = JSON.parse(JSON.stringify(optionsLayoutDefaultIcons));
		abortSettings.optionsLayoutDefaultSymbols = JSON.parse(JSON.stringify(optionsLayoutDefaultSymbols));
		$('.open').each(function(){ 
			$(this).data('abort-settings', abortSettings);
		});
	}
	if (doPreview){
		if (!previewWindow || previewWindow.closed){
			previewWindow = window.open(previewLink + "/index.html?mode=preview" + (renderView ? "&renderView=" + renderView : "") + (openDialog ? "&openDialog=" + openDialog : "") +  "&namespace=" + adapter + "." + instance + (passphrase ? "&passphrase=" + passphrase : ""), "preview");
		} else {
			previewWindow.postMessage({ command: "updatePreview", renderView: renderView, openDialog: openDialog}, "*");
			if(focusPreview) previewWindow.focus();
		}
	}
}
var saveButtonMutationObserver;
function applySyncSaveFromDialogButtonsToSaveButton(){
	console.log("Starting saveButtonMutationObserver");
	if (saveButtonMutationObserver){
		saveButtonMutationObserver.disconnect();
	} else {
		saveButtonMutationObserver = new MutationObserver(function(mutationList){
			mutationList.forEach(function(mutation){
				if (mutation.attributeName === 'class'){
					var newClasses = mutation.target.className.split(' ');
					if (newClasses.indexOf('disabled') > -1) $('.modal-action.btn-save').addClass('disabled'); else $('.modal-action.btn-save').removeClass('disabled');
				}
			});
		});
	}
	$('.dialog-config-buttons .btn-save').each(function(){
		saveButtonMutationObserver.observe(this, {attributes: true, attributeOldValue: true, childList: false, subtree: false});
	});
}
window.addEventListener("message", function(event){
	if (event && event.data && event.data.command == "getPreviewConfig"){
		save(function(obj){
			event.source.postMessage({ 
				command: "getPreviewConfig", 
				value: obj,
				getPreviewConfigCallbackId: event.data.getPreviewConfigCallbackId,
			}, "*")
		})
	} 
}, false);

//SelectId
var selectId;
var selectIdImgPath = '../../lib/css/fancytree/';
function initSelectId(callback) {
	setTimeout(function(){ $('#dialogSelectId').css('z-index', modalZIndexCount++); }, 100);
	if (selectId) {
		return callback(selectId);
	}
	var options = {
		noMultiselect: true,
		imgPath:       selectIdImgPath,
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

//Helper-Functions
function tryParseJSON(jsonString){ //Returns parsed object or false, if jsonString is not valid
    try {
		if(typeof jsonString == "object") jsonString = JSON.stringify(jsonString);
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

function md5(inputString) {
    var hc="0123456789abcdef";
    function rh(n) {var j,s="";for(j=0;j<=3;j++) s+=hc.charAt((n>>(j*8+4))&0x0F)+hc.charAt((n>>(j*8))&0x0F);return s;}
    function ad(x,y) {var l=(x&0xFFFF)+(y&0xFFFF);var m=(x>>16)+(y>>16)+(l>>16);return (m<<16)|(l&0xFFFF);}
    function rl(n,c)            {return (n<<c)|(n>>>(32-c));}
    function cm(q,a,b,x,s,t)    {return ad(rl(ad(ad(a,q),ad(x,t)),s),b);}
    function ff(a,b,c,d,x,s,t)  {return cm((b&c)|((~b)&d),a,b,x,s,t);}
    function gg(a,b,c,d,x,s,t)  {return cm((b&d)|(c&(~d)),a,b,x,s,t);}
    function hh(a,b,c,d,x,s,t)  {return cm(b^c^d,a,b,x,s,t);}
    function ii(a,b,c,d,x,s,t)  {return cm(c^(b|(~d)),a,b,x,s,t);}
    function sb(x) {
        var i;var nblk=((x.length+8)>>6)+1;var blks=new Array(nblk*16);for(i=0;i<nblk*16;i++) blks[i]=0;
        for(i=0;i<x.length;i++) blks[i>>2]|=x.charCodeAt(i)<<((i%4)*8);
        blks[i>>2]|=0x80<<((i%4)*8);blks[nblk*16-2]=x.length*8;return blks;
    }
    var i,x=sb(inputString),a=1732584193,b=-271733879,c=-1732584194,d=271733878,olda,oldb,oldc,oldd;
    for(i=0;i<x.length;i+=16) {olda=a;oldb=b;oldc=c;oldd=d;
        a=ff(a,b,c,d,x[i+ 0], 7, -680876936);d=ff(d,a,b,c,x[i+ 1],12, -389564586);c=ff(c,d,a,b,x[i+ 2],17,  606105819);
        b=ff(b,c,d,a,x[i+ 3],22,-1044525330);a=ff(a,b,c,d,x[i+ 4], 7, -176418897);d=ff(d,a,b,c,x[i+ 5],12, 1200080426);
        c=ff(c,d,a,b,x[i+ 6],17,-1473231341);b=ff(b,c,d,a,x[i+ 7],22,  -45705983);a=ff(a,b,c,d,x[i+ 8], 7, 1770035416);
        d=ff(d,a,b,c,x[i+ 9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,     -42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);
        a=ff(a,b,c,d,x[i+12], 7, 1804603682);d=ff(d,a,b,c,x[i+13],12,  -40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);
        b=ff(b,c,d,a,x[i+15],22, 1236535329);a=gg(a,b,c,d,x[i+ 1], 5, -165796510);d=gg(d,a,b,c,x[i+ 6], 9,-1069501632);
        c=gg(c,d,a,b,x[i+11],14,  643717713);b=gg(b,c,d,a,x[i+ 0],20, -373897302);a=gg(a,b,c,d,x[i+ 5], 5, -701558691);
        d=gg(d,a,b,c,x[i+10], 9,   38016083);c=gg(c,d,a,b,x[i+15],14, -660478335);b=gg(b,c,d,a,x[i+ 4],20, -405537848);
        a=gg(a,b,c,d,x[i+ 9], 5,  568446438);d=gg(d,a,b,c,x[i+14], 9,-1019803690);c=gg(c,d,a,b,x[i+ 3],14, -187363961);
        b=gg(b,c,d,a,x[i+ 8],20, 1163531501);a=gg(a,b,c,d,x[i+13], 5,-1444681467);d=gg(d,a,b,c,x[i+ 2], 9,  -51403784);
        c=gg(c,d,a,b,x[i+ 7],14, 1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);a=hh(a,b,c,d,x[i+ 5], 4,    -378558);
        d=hh(d,a,b,c,x[i+ 8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16, 1839030562);b=hh(b,c,d,a,x[i+14],23,  -35309556);
        a=hh(a,b,c,d,x[i+ 1], 4,-1530992060);d=hh(d,a,b,c,x[i+ 4],11, 1272893353);c=hh(c,d,a,b,x[i+ 7],16, -155497632);
        b=hh(b,c,d,a,x[i+10],23,-1094730640);a=hh(a,b,c,d,x[i+13], 4,  681279174);d=hh(d,a,b,c,x[i+ 0],11, -358537222);
        c=hh(c,d,a,b,x[i+ 3],16, -722521979);b=hh(b,c,d,a,x[i+ 6],23,   76029189);a=hh(a,b,c,d,x[i+ 9], 4, -640364487);
        d=hh(d,a,b,c,x[i+12],11, -421815835);c=hh(c,d,a,b,x[i+15],16,  530742520);b=hh(b,c,d,a,x[i+ 2],23, -995338651);
        a=ii(a,b,c,d,x[i+ 0], 6, -198630844);d=ii(d,a,b,c,x[i+ 7],10, 1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);
        b=ii(b,c,d,a,x[i+ 5],21,  -57434055);a=ii(a,b,c,d,x[i+12], 6, 1700485571);d=ii(d,a,b,c,x[i+ 3],10,-1894986606);
        c=ii(c,d,a,b,x[i+10],15,   -1051523);b=ii(b,c,d,a,x[i+ 1],21,-2054922799);a=ii(a,b,c,d,x[i+ 8], 6, 1873313359);
        d=ii(d,a,b,c,x[i+15],10,  -30611744);c=ii(c,d,a,b,x[i+ 6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21, 1309151649);
        a=ii(a,b,c,d,x[i+ 4], 6, -145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+ 2],15,  718787259);
        b=ii(b,c,d,a,x[i+ 9],21, -343485551);a=ad(a,olda);b=ad(b,oldb);c=ad(c,oldc);d=ad(d,oldd);
    }
    return rh(a)+rh(b)+rh(c)+rh(d);
}

function capitalize(string){
	if(!string) return '';
	return string.substring(0, 1).toUpperCase() + string.substring(1);
}

function scrollTo(target, container, speed, delay){
	(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
		var _target = target;
		var _speed = speed || 750;
		var _delay = delay || 250;
		setTimeout(function(){
			let target_position = $(target).get(0).offsetTop; 
			let container_position = container ? $(container).get(0).offsetTop : 0;
			$(container ? container : '.adapter-body').animate({'scrollTop' : target_position-container_position }, speed);
		}, delay);
	})(); //<--End Closure
}

function removeDuplicates(array, ignoreEverythingAfterThisString) { //Removes duplicates from an array
    var seen = [];
	if (ignoreEverythingAfterThisString == "") ignoreEverythingAfterThisString = null;
    return array.filter(function(item) {
		if (seen.indexOf(JSON.stringify(item).split(ignoreEverythingAfterThisString)[0]) > -1){
			return false;
		} else {
			seen.push(JSON.stringify(item).split(ignoreEverythingAfterThisString)[0]);
			return true;
		}
    });
}

function addCustomCSS(customCSS, customID){
	customID = customID || "default";
	$('head').append('<style class="customCSS_' + customID + '">' + customCSS + '</style>');
}

function removeCustomCSS(customID){
	customID = customID || "default";
	$('.customCSS_' + customID).remove();
}

function isValidColorString(colorString){
	var style = new Option().style;
	style.color = colorString;
	return (style.color && style.color != "");
}

function objectsEqual(obj1, obj2, ignoreKeys){ //Returns true, if two objects are equal (regardless of keys order)
	if(typeof ignoreKeys == udef) ignoreKeys = []; else if(!Array.isArray(ignoreKeys)) ignoreKeys = new Array(x);
	var sortedObj1 = JSON.stringify(Object.keys(obj1).filter(function(key){ return ignoreKeys.indexOf(key) == -1; }).sort().reduce(function(acc, key){
		acc[key] = obj1[key];
		return acc;
	}, {}));
	var sortedObj2 = JSON.stringify(Object.keys(obj2).filter(function(key){ return ignoreKeys.indexOf(key) == -1; }).sort().reduce(function(acc, key){
		acc[key] = obj2[key];
		return acc;
	}, {}));
	return sortedObj1 === sortedObj2;
}

//Create CSS-array from options of tileClass
function tileEditorCreateCssPositionsArrayFromOptions(options){
	options = options || {};
	var cssArray = [];
	var translateX = 0, translateY = 0;
	//horizontal
	if(options.horizontalMode == 'left'){
		cssArray.push({
			attribute: 'left', 
			value: (options.horizontalValue || '0') + (options.horizontalUnit || 'px')
		}, {
			attribute: 'right',
			value: ''
		});
		translateX = '0';
	} else if(options.horizontalMode == 'right'){
		cssArray.push({
			attribute: 'right', 
			value: (options.horizontalValue || '0') + (options.horizontalUnit || 'px')
		}, {
			attribute: 'left',
			value: ''
		});
		translateX = '0'
	} else if(options.horizontalMode == 'center'){
		cssArray.push({
			attribute: 'left', 
			value: `calc(50% + ${(options.horizontalValue || '0')}${(options.horizontalUnit || 'px')})`
		}, {
			attribute: 'right',
			value: ''
		});	
		translateX = '-50%';
	}
	//width
	if(options.widthMode == 'normal'){
		cssArray.push({
			attribute: 'width', 
			value: (options.widthValue || '0') + (options.widthUnit || 'px')
		});	
	} else if(options.widthMode == 'tileMinus'){
		cssArray.push({
			attribute: 'width', 
			value: `calc(100% - ${(options.widthValue || '0')}${(options.widthUnit || 'px')})`
		});	
	}
	//vertical
	if(options.verticalMode == 'top'){
		cssArray.push({
			attribute: 'top', 
			value: (options.verticalValue || '0') + (options.verticalUnit || 'px')
		}, {
			attribute: 'bottom',
			value: ''
		});
		translateY = '0';
	} else if(options.verticalMode == 'bottom'){
		cssArray.push({
			attribute: 'bottom', 
			value: (options.verticalValue || '0') + (options.verticalUnit || 'px')
		}, {
			attribute: 'top',
			value: ''
		});
		translateY = '0';
	} else if(options.verticalMode == 'middle'){
		cssArray.push({
			attribute: 'top', 
			value: `calc(50% + ${(options.verticalValue || '0')}${(options.verticalUnit || 'px')})`
		}, {
			attribute: 'bottom',
			value: ''
		});	
		translateY = '-50%';
	}
	//height
	if(options.heightMode == 'normal'){
		cssArray.push({
			attribute: 'height', 
			value: (options.heightValue || '0') + (options.heightUnit || 'px')
		});	
	} else if(options.heightMode == 'tileMinus'){
		cssArray.push({
			attribute: 'height', 
			value: `calc(100% - ${(options.heightValue || '0')}${(options.heightUnit || 'px')})`
		});	
	}
	//transform: translate
	cssArray.push({
		attribute: 'transform', 
		value: `translate(${translateX}, ${translateY})`
	});
	return cssArray;
}


//Add function to inputClear-Buttons and selectClear-Buttons
function initInputClear(){
	$('.inputClear').off('click').on('click', function(){
		if ($(this).data('default')){
			$(this).prevAll('input').val($(this).data('default')).trigger('change');
		} else {
			$(this).prevAll('input').val('').removeClass('valid invalid').trigger('change');
		}
		M.validate_field($(this).prevAll('input'));
		M.updateTextFields();
	});
	$('.selectClear').off('click').on('click', function(){
		if ($(this).data('default')){
			$(this).prevAll('.select-wrapper').children('select').val($(this).data('default'));
		} else {
			$(this).prevAll('.select-wrapper').children('select').val('');
		}
		$('select').select();
	});
}

//Symbolic links
function updateSymbolicLinks(){
	var changed = false;
	if (typeof views != udef && views.length > 0) views.forEach(function(view){
		if (typeof view.devices != udef) view.devices.forEach(function(device){
			if (typeof device.symbolicLinkFrom == "object" && typeof device.symbolicLinkFrom.sourceView != udef  && device.symbolicLinkFrom.sourceView !== ""  && typeof device.symbolicLinkFrom.sourceDevice != udef  && device.symbolicLinkFrom.sourceDevice !== ""){
				if (views[device.symbolicLinkFrom.sourceView] && views[device.symbolicLinkFrom.sourceView].devices && typeof views[device.symbolicLinkFrom.sourceView].devices[device.symbolicLinkFrom.sourceDevice] == "object"){
					var newCommonRole = views[device.symbolicLinkFrom.sourceView].devices[device.symbolicLinkFrom.sourceDevice].commonRole;
					if (device.commonRole != newCommonRole){
						console.log("Update device commonRole from symbolic link");
						device.commonRole = newCommonRole;
						changed = true;
					}
					var newStates = JSON.parse(JSON.stringify(views[device.symbolicLinkFrom.sourceView].devices[device.symbolicLinkFrom.sourceDevice].states)); //Creates new array, not just a reference
					if (JSON.stringify(device.states) != JSON.stringify(newStates)){
						console.log("Update device states from symbolic link");
						device.states = newStates;
						changed = true;
					}
					var newOptions = JSON.parse(JSON.stringify(views[device.symbolicLinkFrom.sourceView].devices[device.symbolicLinkFrom.sourceDevice].options)); //Creates new array, not just a reference
					if (JSON.stringify(device.options) != JSON.stringify(newOptions)){
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
	if (skip == null) skip = [];
	var changed = [];
	if (typeof views != udef && views.length > 0) views.forEach(function(view, viewIndex){
		if (typeof view.devices != udef) view.devices.forEach(function(device, deviceIndex){
			if (typeof device.symbolicLinkFrom == "object" && typeof device.symbolicLinkFrom.sourceView != udef  && device.symbolicLinkFrom.sourceView !== ""  && typeof device.symbolicLinkFrom.sourceDevice != udef  && device.symbolicLinkFrom.sourceDevice !== ""){ //Valid Symbolic link
				if (device.symbolicLinkFrom.sourceView == oldViewIndex && (device.symbolicLinkFrom.sourceDevice == oldDeviceIndex || oldDeviceIndex == "*") && skip.findIndex(function(element){ return (typeof element != udef && element.view == viewIndex && element.device == deviceIndex); }) == -1){
					if (newViewIndex == null || newDeviceIndex == null){
						console.log("Remove symbolic link of device " + viewIndex + "/" + deviceIndex + " because source device " + device.symbolicLinkFrom.sourceView + "/" + device.symbolicLinkFrom.sourceDevice + " has been deleted [viewIndex/deviceIndex]");
						delete device.symbolicLinkFrom;
						changed.push({view: viewIndex, device: deviceIndex});
					} else {
						console.log("Change symbolic link of device " + viewIndex + "/" + deviceIndex + " from " + device.symbolicLinkFrom.sourceView + "/" + device.symbolicLinkFrom.sourceDevice + " to " + newViewIndex + "/" + newDeviceIndex + " [viewIndex/DeviceIndex]");
						device.symbolicLinkFrom.sourceView = newViewIndex;
						if (newDeviceIndex !== "*") device.symbolicLinkFrom.sourceDevice = newDeviceIndex;
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
			if (typeof device.symbolicLinkFrom == "object" && typeof device.symbolicLinkFrom.sourceView != udef  && device.symbolicLinkFrom.sourceView !== ""  && typeof device.symbolicLinkFrom.sourceDevice != udef  && device.symbolicLinkFrom.sourceDevice !== ""){
				if (device.symbolicLinkFrom.sourceView == sourceViewIndex && device.symbolicLinkFrom.sourceDevice == sourceDeviceIndex){
					destinations.push({view: viewIndex, device: deviceIndex});
				}
			}
		});
	});
	return destinations;
}

//Colorpickers
function initColorpickers(onChange){
	$('.MaterializeColorPicker').each(function(){
		if (!$(this).data('materialize-color-picker-initialized')){
			var noColorSet = $(this).val() == "";
			$(this).colorpicker().on('changeColor', function(event){
				if (event.color) $(this).css('border-right', '10px solid rgba(' + event.color.toRGB().r + ', ' + event.color.toRGB().g + ', ' + event.color.toRGB().b + ', ' + event.color.toRGB().a + ')');
			});
			$(this).colorpicker().on('hidePicker', function(event){
				$(this).trigger('change');
			});
			$(this).on('change', function(event, noOnChange){
				if ($(this).val() == "") {
					$(this).css('border-right', '0px solid black');
				} else {
					$(this).trigger('changeColor', noOnChange);
				}
				if (!noOnChange) onChange();
			});
			$(this).data('materialize-color-picker-initialized', true);
			if(noColorSet) $(this).val("");
		}
		$(this).trigger('change', 'noOnChange');
	});
}

//Objects
function getCommonName(object){
	var name = false;
	if (object && typeof object.common != udef && typeof object.common.name != udef){
		if (typeof object.common.name == "object" && typeof object.common.name[systemLang] != udef){
			name = object.common.name[systemLang];
		} else if (typeof object.common.name == "object" && typeof object.common.name["en"] != udef){
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
		if (id.indexOf("enum") == 0) {
			enumerations[id] = iobrokerObjects[id];
		}
	}
	callback && callback();
}
function getEnumerationName(enumeration){
	var name = _(enumeration);
	if (enumerations[enumeration] && typeof enumerations[enumeration].common != udef && typeof enumerations[enumeration].common.name != udef){
		if (typeof enumerations[enumeration].common.name == "object" && typeof enumerations[enumeration].common.name[systemLang] != udef){
			name = enumerations[enumeration].common.name[systemLang];
		} else if (typeof enumerations[enumeration].common.name == "object" && typeof enumerations[enumeration].common.name["en"] != udef){
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
	(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
		var _callback = callback;
		var _toDo = function(){
			historyInstances = [];
			for(id in iobrokerObjects){ 
				if (id.indexOf('system.adapter.') == 0 && !isNaN(id.substr(id.lastIndexOf('.') + 1)) && iobrokerObjects[id] && iobrokerObjects[id].common && iobrokerObjects[id].common.type === 'storage'){
					historyInstances.push(id.substring('system.adapter.'.length));
				}
			}
			_callback && _callback(historyInstances);		
		}
		if (iobrokerObjectsReady) {
			_toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(_toDo);
		}
	})(); //<--End Closure
}

//fixedEncodeURIComponents (encodes !, ', (, ), and *)	
function fixedEncodeURIComponent(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
		return '%' + c.charCodeAt(0).toString(16);
	});
}

//---------- Combobox ----------
var $enhanceTextInputToComboboxActualTarget;
function enhanceTextInputToCombobox(targetInput, options, iconsFromOption, onSelect){
	//targetInput - string - selector for text-input-field to enhance
	//options - string - "value1/caption1/icon1;value2/caption2/icon2;[optgroup-caption];value3/caption3/icon3;..." or array of strings
	//iconsFromOption - boolean - if true, the values will be used to generate links to icons (\ will be replaced by / an link will be preceded), if no icon is given in options
	//onSelect - function - function that will be called with the argument (value), if a value is selected
	options = options || "";
	if(Array.isArray(options)) options = options.filter(function(option){ return option != null && option != ""; }).join(";");
	options = options.split(";");
	var comboboxContent = "";
	var optgroup = false;
	options.forEach(function(option){
		if (option.substring(0,1) == "[" && option.substr(-1) == "]"){ //Optgroup
			optgroup = escape(option.substring(1, option.length - 1));
			var caption = _(option.substring(1, option.length - 1));
			comboboxContent += "	<li class='divider collapsed' style='padding: 14px 4px 30px 4px; color:grey;' tabindex='-1' data-optgroup='" + optgroup + "'>";
			comboboxContent += "		<i class='material-icons optgroupHandle'>keyboard_arrow_right</i>" + caption + "&nbsp;";
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
				if (icon != "") icon = previewLink + icon;
			}
			comboboxContent += "	<li class='item' data-value='" + value + "' data-optgroup='" + optgroup + (optgroup ? "' style='display:none;'" : "") + ">";
			comboboxContent += "		<a href='#!'>";
			if (icon != ""){
				comboboxContent += "		<img src='" + icon + "' style='display: block; margin-bottom: 5px; min-width: 40px; max-width: 40px; max-height: 40px; width: auto; height: auto;' onerror='this.onerror=null; this.src=\"" + previewLink + "/./images/icons/various.png" + "\";'>";
			}
			comboboxContent += "			" + caption + "&nbsp;";
			comboboxContent += "		</a>";
			comboboxContent += "	</li>";
		}
	});
	$(targetInput).css('padding', '0 25px 0 0').css('width', 'calc(100% - 25px)');
	$(targetInput).off('change', onChangeFunction).on('change', onChangeFunction);
	function onChangeFunction(){
		var $that = $(this);
		var $dropdownlist = $("ul[id='dropdown_" + encodeURIComponent(targetInput) + "_0']");
		var value = $that.val();
		var icon;
		$dropdownlist.find("li").each(function(){
			if ($(this).data('value') == encodeURIComponent((value || "").replace(/\//g, "\\"))){
				icon = $(this).find('img').attr('src');
			}
		});
		if (icon) {
			$that.css('padding', '0 25px 0 30px').css('width', 'calc(100% - 55px)').nextAll('div.iconimage').show().find('img').attr('src', icon);
		} else {
			$that.css('padding', '0 25px 0 0').css('width', 'calc(100% - 25px)').nextAll('div.iconimage').hide().find('img').attr('src', '');
		}		
	}
	$(targetInput).off('blur', onBlurFunction).on('blur', onBlurFunction);
	function onBlurFunction(){
		var that = this;
		setTimeout(function(){ var _that = that; _that.scrollLeft = 100000; $(_that).trigger('change'); }, 100);
	}
	$(targetInput).trigger('blur');
	$(targetInput).each(function(index, targetElement){
		if (!$(this).parent('div').hasClass('combobox')){
			$(this).next('label').addBack().wrapAll("<div class='combobox'></div>");
			var labelheight = $(this)
			var iconimage = "<div class='iconimage' style='display: none; position: absolute; left: 0; top: 6px; height: 25px; width: 25px;'><img src='' style='min-width: 25px; max-width: 25px; max-height: 25px; width: auto; height: auto; position: absolute; left: 0; top: 0; bottom: 0px; margin: auto 0;' /></div>";
			var dropdowntrigger = "<a class='comboboxDropdownTrigger waves-effect waves-teal btn-small btn-flat' data-target='dropdown_" + encodeURIComponent(targetInput) + "_" + index + "' href='#' onclick='console.log(\"Combobox dropdown clicked\"); $enhanceTextInputToComboboxActualTarget = $(this).prevAll(\"input\"); enhanceTextInputToComboboxScrollDropdownTo($(this).data(\"target\"), $(this).prevAll(\"input\").val());'><i class='material-icons comboboxDropdownTriggerArrow' style='font-size: 25px;'>arrow_drop_down</i></a>";
			$(this).after(iconimage).after(dropdowntrigger);
		}
		$(this).data('combobox-onselect', onSelect);
		$("ul[id='dropdown_" + encodeURIComponent(targetInput) + "_" + index + "']").remove(); //If there was an old dropdownlist remove it
		$(targetElement).after("<ul id='dropdown_" + encodeURIComponent(targetInput) + "_" + index + "' class='dropdown-content'>...</ul>");
	});
	$("ul[id='dropdown_" + encodeURIComponent(targetInput) + "_0']").html(comboboxContent); //Add comboboxContent to first targetInput (because of performance-reasons it is only saved to the first targetInput and not to all!)
	$('.comboboxDropdownTrigger').dropdown({
		alignment: 'right',
		constrainWidth: false,
		onOpenStart: function(element){
			var target = $(element).data('target');
			$("ul[id='" + target + "']").html($("ul[id='" + target.substring(0, target.lastIndexOf('_')) + "_0']").html()); //Copy comboboxContent from first targetInput
		},
		onItemClick: function(element){
			enhanceTextInputToComboboxEntryToInput($(element).data('value'), element, this);
		},
		closeOnClick: false
	});
}
function enhanceTextInputToComboboxScrollDropdownTo(dropdownlist, value){
	var $dropdownlist = $("ul[id='" + dropdownlist + "']");
	setTimeout(function(){
		var _$dropdownlist = $dropdownlist;
		_$dropdownlist.scrollTop(0);
	}, 20);
	setTimeout(function(){
		var _dropdownlist = dropdownlist;
		var _$dropdownlist = $dropdownlist;
		_$dropdownlist .find("li").each(function(){
			$(this).removeClass('grey lighten-3');
			if ($(this).data('value') == encodeURIComponent((value || "").replace(/\//g, "\\"))){
				if($(this).css('display') == "none"){
					var optgroup = $(this).data('optgroup');
					$(this).prevAll('li.divider[data-optgroup="' + optgroup + '"]').trigger('click');
				}
				$(this).addClass('grey lighten-3');
				var position = $(this).position().top;
				setTimeout(function(){_$dropdownlist.scrollTop(_$dropdownlist.scrollTop() + position);}, 250);
				
			}
		});
	}, 400);
}
function enhanceTextInputToComboboxEntryToInput(value, element, that){
	if($(element).hasClass('divider')){
		$element = $(element);
		var collapsed = $element.hasClass("collapsed"); 
		var optgroup = $element.data("optgroup");
		if(!optgroup) return;
		$subitems = $element.parents('ul').find('li.item[data-optgroup="' + optgroup + '"]'); 
		if(collapsed){
			$element.removeClass('collapsed')
			$element.find('i.material-icons.optgroupHandle').html('keyboard_arrow_down')
			$subitems.show(); 
		} else {
			$element.addClass('collapsed')
			$element.find('i.material-icons.optgroupHandle').html('keyboard_arrow_right')
			$subitems.hide();
		}
		$(that.el).dropdown('recalculateDimensions');
		return;
	} else {
		$(that.el).dropdown('close');
	}
	var onSelect = $enhanceTextInputToComboboxActualTarget.data('combobox-onselect');
	if (decodeURIComponent(value).substring(0, 10) == "[VARIABLE]"){
		var variable = "";
		if (decodeURIComponent(decodeURIComponent(value)).indexOf("{}") > -1) {
			variable = prompt(_("Please enter datapoint id") + ":");
			if (variable == "") variable = null;
		}
		if (variable !== null){
			value = decodeURIComponent(decodeURIComponent(value).replace("[VARIABLE]", "")).replace("{}", "{" + variable + "}");
			$enhanceTextInputToComboboxActualTarget.val(value).trigger('change').trigger('blur');
			if (onSelect) onSelect(value, $enhanceTextInputToComboboxActualTarget);
		}
	} else {
		value = decodeURIComponent(value).replace(/\\/g, "/");
		$enhanceTextInputToComboboxActualTarget.val(value).trigger('change').trigger('blur');
		if (onSelect) onSelect(value, $enhanceTextInputToComboboxActualTarget);
	}
}

//---------- File operations ----------
function uploadFile(file, path, callback) {
	if (typeof path == 'function') {
		callback = path;
		path = null;
	}
	var reader = new FileReader();
	reader.onload = function(e) { //Closure--> to capture the file information.
		path = (path ? path + "/" : "") + file.name;
		var parts = path.split('/');
		var adapter = parts[1];
		parts.splice(0, 2);
		var data = e.target.result;
		const base64 = btoa(new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
		(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
			var _path = path;
			socket.emit('writeFile64', adapter, parts.join('/'), base64, function(){
				if (callback) callback(_path);
			});
		})(); //<--End Closure
	};
	reader.readAsArrayBuffer(file);
}
function uploadStringAsFile(string, filename, path, callback) {
	if (typeof path == 'function') {
		callback = path;
		path = null;
	}
	var reader = new FileReader();
	reader.onload = function(e) { //Closure--> to capture the file information.
		if (filename.substr(0, 1) == "/") filename = filename.substr(1);
		path = (path ? path + "/" : "") + filename;
		var parts = path.split('/');
		var adapter = parts[1];
		parts.splice(0, 2);
		var data = e.target.result;
		const base64 = btoa(new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
		socket.emit('writeFile', adapter, parts.join('/'), base64, function () {
			if (callback) callback(filename);
		});
	};
	reader.readAsArrayBuffer(new Blob([string]));
}
function downloadFileAsString(filename, path, callback) {
	if (typeof path == 'function') {
		callback = path;
		path = null;
	}
	if (filename.substr(0, 1) == "/") filename = filename.substr(1);
	path = (path ? path + "/" : "") + filename;
	if (path[0] === '/') {
		var parts = path.split('/');
		adapter = parts[1];
		parts.splice(0, 2);
		path = parts.join('/');
	}
	socket.emit('readFile', adapter, path, function (error, fileData, mimeType) {
		if (!error && fileData){
			if (callback) callback(fileData);
		}
	});
}
async function downloadFileAsStringAsync(filename, path) {
	return await new Promise(function(resolve){
		if (filename.substr(0, 1) == "/") filename = filename.substr(1);
		path = (path ? path + "/" : "") + filename;
		if (path[0] === '/') {
			var parts = path.split('/');
			_adapter = parts[1];
			parts.splice(0, 2);
			path = parts.join('/');
		}
		socket.emit('readFile', _adapter, path, function (error, fileData, mimeType) {
			if (!error && fileData){
				resolve(fileData);
			} else {
				resolve("");
			}
		});
	});
}
function saveStringAsLocalFile(string, type, mime, filename, addPrefix){ //type: charset=utf-8 or base64, mime: for example "text/json"
	if (addPrefix){
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
	if (typeof accept == "function"){
		callback = accept;
		accept = ".*";
	}
	if (typeof callback !== "function") return;
    var loadInputNode = document.createElement('input');
	loadInputNode.setAttribute('opacity', 0);
    loadInputNode.setAttribute('type', 'file');
    loadInputNode.setAttribute('accept', accept);
	loadInputNode.addEventListener('change', function (event){
		if (!window.FileReader) { // Browser is not compatible
			alert(_("Browser not compatible"));
			return;
		}
		var reader = new FileReader();
		reader.onload = function(_event) {
			if (_event.target.readyState != 2) return;
			if (_event.target.error) {
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
	if (typeof accept == "function"){
		callback = accept;
		accept = ".*";
	}
	if (typeof callback !== "function") return;
    var loadInputNode = document.createElement('input');
	loadInputNode.setAttribute('opacity', 0);
    loadInputNode.setAttribute('type', 'file');
    loadInputNode.setAttribute('accept', accept);
	loadInputNode.addEventListener('change', function (event){
		if (!window.FileReader) { // Browser is not compatible
			alert(_("Browser not compatible"));
			return;
		}
		var reader = new FileReader();
		reader.onload = function(_event) {
			if (_event.target.readyState != 2) return;
			if (_event.target.error) {
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
			if (err) console.log(JSON.stringify(err));
			resolve(err);
		});
	});
}
function readDirAsZip(path, callback) {
	var pathWithoutSlashNamespace = path.substring(namespace.length + 1);
	if (pathWithoutSlashNamespace.substr(-1) == '/') pathWithoutSlashNamespace = pathWithoutSlashNamespace.substr(0, pathWithoutSlashNamespace.length -1);
	socket.emit('sendToHost', common.host, 'readDirAsZip', {id: namespace, name: pathWithoutSlashNamespace, options: {settings: false}}, function(data){
		callback(data.error || null, data.data || null);
	});		
}
function writeDirAsZip(path, base64Zip, callback) { //xxx not working properly xxx
	var pathWithoutSlashNamespace = path.substring(namespace.length + 1)
	socket.emit('sendToHost', common.host, 'writeDirAsZip', {id: namespace, name: pathWithoutSlashNamespace, data: base64Zip}, function(data){
		callback(data.error || null, null);
	});
}
function deleteFile(path, callback) {
		var parts = path.split('/');
		var adapter = parts[1];
		parts.splice(0, 2);
		socket.emit('deleteFile', adapter, parts.join('/'), function(err){	
			if (err) console.log(JSON.stringify(err));
			if (callback) callback(err);
		});
}
function renameFile(path, newPath, callback) {
	var newDir = newPath.substring(0, newPath.lastIndexOf('/'));
	createDir(newDir, function(){
		var parts = path.split('/');
		var adapter = parts[1];
		var newParts = newPath.split('/');
		var newAdapter = newParts[1];
		if (adapter != newAdapter){
			newParts.splice(1, 0, adapter, ".."); //inserts adapter and ".." at index 1 (and removes 0 elements)
			newPath = newParts.join('/'); //results in /adapter/../newadapter/path -> this trick is necessary, because the socket cant directly move files between two adapters
		}
		parts.splice(0, 2);
		newParts.splice(0, 2);
		//needs admin >5.0.3
		socket.emit('renameFile', adapter, parts.join('/'), newParts.join('/'), function (err) { 
			if (err) console.log(JSON.stringify(err));
			if (callback) callback(err); 
		});
	});
}
function renameFileAsync(oldPath, newPath){
	return new Promise(resolve => {
		renameFile(oldPath, newPath, function(err, obj){
			if (err) console.log(JSON.stringify(err));
			resolve(err);
		});
	});
}
async function createDir(path, callback){
	if (path.substr(-1) == "/") path = path.substr(0, path.length - 1);
	var parts = path.split('/');
	var adapter = parts[1];
	parts.splice(0, 2);
	socket.emit('mkdir', adapter, parts.join('/'), function(err){
		if (err) console.log(JSON.stringify(err)); 
		if (callback) callback(err);
	});
}
function createDirAsync(path){
	return new Promise(resolve => {
		createDir(path, function(err, obj){
			if (err) console.log(JSON.stringify(err));
			resolve(err);
		});
	});
}
async function checkDirExistance(path){
	var result = await readDirAsync(path);
	if (result == null) return true; else return false;
}


//---------- Conversion V3 ---------- 
function convertConfigV3(config, quiet, force){  
	force = true; quiet = true; //#####################
	if(force || !config.configVersion || config.configVersion < 3){
		if(!quiet && confirm(_("You have an outdated Version of your config. It will be converted automatically to the new version. It is recommended to save a backup of the current settings, as it is not possible to switch back to an old version with the converted settings.\n\nCreate Backup now?"))){
			alert("####### not yet implemented!")
		}
		config.toolbar = convertToolbarV3(config.toolbar);
		config.views && config.views.forEach(function(view, viewIndex){
			config.views[viewIndex] = convertViewV3(view);
		});
		config.configVersion = "3";	//! Has also to be set in SAVE-Function !
	}
	return config;
}

function convertToolbarV3(toolbar){  //toolbar -> toolbar.items
	let newToolbar = {};
	newToolbar.items = [];
	if (Array.isArray(toolbar)){
		toolbar.forEach(function(item, itemIndex){
			newToolbar.items.push(convertToolbarItemV3(item));
		});
	} else {
		newToolbar.items = toolbar.items || [];
	}
	return newToolbar;
}

function convertToolbarItemV3(item){ //no conversion so far
	var newItem = {};
	newItem.commonName = item.commonName;
	newItem.nativeLinkedView = item.nativeLinkedView;
	newItem.nativeIcon = item.nativeIcon;
	newItem.options = item.options;
	newItem.states = item.states;
	return newItem;
}

function convertViewV3(view){ //No conversion so far but in .devices
	let newView = {};
	newView.commonName = view.commonName;
	newView.nativeBackgroundImage = view.nativeBackgroundImage;
	newView.nativeHideName = view.nativeHideName;
	newView.devices = [];
	view.devices && view.devices.forEach(function(device, deviceIndex){
		newView.devices[deviceIndex] = convertDeviceV3(device);
	});
	return newView;
}

function convertDeviceV3(device){  //No conversion so far
	let newDevice = {};
	newDevice.commonName = device.commonName || "";
	newDevice.commonRole = device.commonRole || "";
	newDevice.nativeBackgroundImage = device.nativeBackgroundImage || "";
	newDevice.nativeBackgroundImageActive = device.nativeBackgroundImageActive || "";
	newDevice.nativeHeading = device.nativeHeading || "";
	newDevice.nativeHeadingOptions = device.nativeHeadingOptions || "";
	newDevice.nativeLinkedView = device.nativeLinkedView || "";
	newDevice.nativeNewLine = device.nativeNewLine || false;
	newDevice.nativeHide = device.nativeHide || false;
	newDevice.options = device.options || [];
	newDevice.states = device.states || [];
	newDevice.states.forEach(function(state, stateIndex){
		if(state.commonRole && state.commonRole == "array" && state.value){ //Array
			/* 	state.value = 
				[{"name":"ASDF","hideName":false,"caption":"","heading":"","commonRole":"linkedState","icon":"./images/symbols/media_pad_carat_u.png","role":"","value":"system.adapter.admin.0.uptime","halfWidth":false}, ...]
				->conversion->
				{
					cols: [{col: "name", colheader: "Name", description: "", commonType: "option"},
						...
						{col: "state", colheader: "State", description: "", commonType: "string", commonRole: "linkedState"}],

					values: [{name: "ASDF", ..., state: "system.adapter.admin.0.uptime"}, ...]
				}
			*/
			var arrayOld = tryParseJSON(state.value);
			var arrayNew = {cols: [], values: []};
			if(Array.isArray(arrayOld) && arrayOld[0] && typeof arrayOld[0] == "object" && arrayOld[0].cols && Array.isArray(arrayOld[0].cols) && arrayOld[0].values && Array.isArray(arrayOld[0].values)){ //no conversion necessary
				arrayNew = arrayOld;
			} else { //conversion to V3 Array
				arrayOld && arrayOld.forEach(function(oldRow){
					var newValuesRow = {};
					if(typeof oldRow == "object" && !Array.isArray(oldRow)){
						if(oldRow.icon){
							oldRow["icon#commonRole"] = "const";
						}
						for(oldCol in oldRow){ // oldCol = name, hiddenName, caption, heading, icon, value and ##### halfWidth #####
							var oldColValue = oldRow[oldCol];
							if(oldColValue && oldColValue != ""){
								var newCol = oldCol;
								var newColsElement = {
									col: oldCol,
									colheader: oldCol,
									description: "",
									commonType: "option",
									defaultValue: ""
								};
								switch(oldCol){
									case "name":
										newColsElement.colheader = "Name";
									break;

									case "hideName":
										newColsElement.colheader = "Hide Name";
										newColsElement.commonType = "checkbox";
									break;

									case "caption":
										newColsElement.colheader = "Caption (only for Buttons)";
									break;

									case "heading":
										newColsElement.colheader = "Heading";
									break;

									case "role":
										newCol = "method";
										newColsElement.col = newCol;
										newColsElement.colheader = "Method";
									break;

									case "icon":
										newCol = "icon"
										newColsElement.col = newCol;
										newColsElement.colheader = "Icon " + _("Value");
										newColsElement.commonType = "icon";
										newColsElement.commonRoleFrom = "icon#commonRole";
										newColsElement.typicalIconEquivalents = []; //######
									break;

									case "icon#commonRole":
										newColsElement.colheader = "Icon " + _("Role");
										newColsElement.commonType = "commonRole";
										newColsElement.for = "icon";
										newColsElement.defaultValue = "const";
										newColsElement.typicalIconEquivalents = []; //######
									break;

									case "value":
										newCol = "state"
										newColsElement.col = newCol;
										newColsElement.colheader = "State " + _("Value");
										newColsElement.commonType = "string";
										newColsElement.commonRoleFrom = "state#commonRole";
									break;

									case "commonRole":
										newCol = "state#commonRole"
										newColsElement.col = newCol;
										newColsElement.colheader = "State " + _("Role");
										newColsElement.commonType = "commonRole";
										newColsElement.for = "state";
									break;

									case "halfWidth":
										//##########
										newCol = null;
									break;
								}
								if(newCol && !arrayNew.cols.find(function(element){return element.col && element.col == newCol})){ //col isn't yet listed
									arrayNew.cols.push(newColsElement);
								}
								if(newCol) newValuesRow[newCol] = oldColValue || "";						
							}
						}
						arrayNew.values.push(newValuesRow);
					}
				});
			}	
			//Re-Check with defaultArrayCols
			if(iQontrolRolesStandardDeviceStates[state.state] && iQontrolRolesStandardDeviceStates[state.state].defaultArrayCols){
				defaultArrayCols = iQontrolRolesStandardDeviceStates[state.state].defaultArrayCols;
				//find missing cols
				defaultArrayCols.forEach(function(defaultArrayCol){
					if(!arrayNew.cols.find(function(element){ return element.col == defaultArrayCol.col; })){
						arrayNew.cols.push(defaultArrayCol);
					}
				});
				//sort
				arrayNew.cols.sort(function(a, b) {
				  	return defaultArrayCols.findIndex(function(element){ return element.col == a.col; }) - defaultArrayCols.findIndex(function(element){ return element.col == b.col; })
				});
				//add extra cols at the end
				var extraCols = [];
				arrayNew.cols.forEach(function(newCol){
					if(!defaultArrayCols.find(function(element){ return element.col == newCol.col; })) extraCols.push(newCol);
				})
				arrayNew.cols = arrayNew.cols.concat(extraCols);
			}
			state.value = arrayNew;
			state.commonType = "array";
			state.commonRole = "const";
		} 
	});
	newDevice.tileSettings = device.tileSettings || {};
	return newDevice;
} 

//++++++++++ LOAD ++++++++++
/************** LOAD ****************************************************************
*** This will be called by the admin adapter when the settings page loads         ***
*************************************************************************************/
async function load(settings, onChange) {
	//Loading begins
	var loading = true;

	//Hide Settings
	console.log("Loading iQontrol Settings");
	$('.hideOnLoad').hide();
	$('.showOnLoad').show();

	//If react, make some css adjustments
	isReact = (window.parent.adapterName === 'admin');
	if (isReact){
		var customCSS = "";
		customCSS += ".table-values tr:nth-child(2n) { background-color: rgba(0,0,0,0.04) !important; }";
		customCSS += ".table-values.highlight > tbody > tr:hover { background-color: rgba(0,0,0,0.08) !important; }";
		customCSS += ".table-values.highlight > tbody > tr:nth-child(2n):hover { background-color: rgba(0,0,0,0.08) !important; }";
		customCSS += ".table-values th { background-color: rgba(0,0,0,0.1) !important; color: #1d1d1d !important; }";

		customCSS += ".title { background-color: #164477; }";

		customCSS += ".m .tabs .tab a { color: rgba(0, 0, 0, 0.5); }";
		customCSS += ".m .tabs .tab a:hover { color: rgba(0, 0, 0, 0.86); }";
		customCSS += ".m .tabs .tab a.active { color: #164477; }";
		customCSS += ".m .tabs .active { border-bottom: 2px solid #164477; }";

		customCSS += ".m nav { background-color: #3399cc; }";

		customCSS += ".m .btn, .m .btn-small { background-color: #e0e0e0; color: #000000; }";
		customCSS += ".m .btn:hover, .m .btn-small:hover { background-color: #d5d5d5; }";
		customCSS += ".m .btn.disabled, .m .btn-small.disabled { background-color: rgba(0, 0, 0, 0.12) !important; color: rgba(0, 0, 0, 0.26) !important; }";
		
		customCSS += ".m .btn-floating { background-color: transparent; box-shadow: none; color: #000000; }";
		customCSS += ".m .btn-floating:hover { background-color: rgba(0,0,0,0.08); }";
		customCSS += ".m .btn-floating.selectClear { background-color: #ffffff; }";
		customCSS += ".m .btn-floating.selectClear:hover { background-color: #ebebeb; }";
		customCSS += ".m .btn-floating i { color: #000000; transition: color 0.3s; }";
		customCSS += ".m .btn-floating.red  { background-color: transparent !important; }";
		customCSS += ".m .btn-floating.red:hover { background-color: red !important; }";
		customCSS += ".m .btn-floating.red:hover i { color: #ffffff; }";
		customCSS += ".m .btn-floating.disabled { background-color: transparent !important; color: rgba(0, 0, 0, 0.26) !important; }";
		customCSS += ".m .btn-floating.disabled i { color: rgba(0, 0, 0, 0.26) !important; }";
								
		customCSS += ".dialog-select-object-ids .material .main-toolbar-table .panel-button { background-color: transparent; }";
		customCSS += ".dialog-select-object-ids .material .main-toolbar-table .panel-button:hover { background-color: rgba(0,0,0,0.08); }";
		customCSS += ".dialog-select-object-ids .material .main-toolbar-table .panel-button i { color: #757575; }";
		customCSS += ".dialog-select-object-ids .objects-list-table { background-color: #ffffff; }";
		customCSS += ".dialog-select-object-ids .objects-list-table thead { display: none; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr { border: none !important; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr:hover { background-color: #3399cc; outline: none; color: #ffffff; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr:hover .fancytree-title { color: #ffffff; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr.fancytree-active { background-color: #236b8e !important; outline: none !important; color: #ffffff !important; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table tr.fancytree-active .fancytree-title { color: #ffffff; }";
		customCSS += ".dialog-select-object-ids table.objects-list-table td { border: none !important; }";

		customCSS += ".m .dropdown-content li>span { color: rgba(0, 0, 0, 0.86); }";
		customCSS += ".m .dropdown-content li>a { color: rgba(0, 0, 0, 0.86); }";
		customCSS += ".m [type=checkbox].filled-in:checked+span:not(.lever):after { border: #164477; background-color: #164477; }";
		customCSS += ".m [type=radio].with-gap:checked+span:after, .m [type=radio]:checked+span:after { background-color: #164477; }";
		customCSS += ".m [type=radio].with-gap:checked+span:after, .m [type=radio].with-gap:checked+span:before, .m [type=radio]:checked+span:after { border: 2px solid #164477; }";

		customCSS += ".m.react-dark .btn, .m.react-dark .btn-small, .m.react-dark button.btn i, .m.react-dark button.btn-small i { background-color: #272727; }";
		customCSS += ".m.react-dark .dialog-select-container .main-header-table, .m.react-dark .dialog-select-container .main-header-table tr, .m.react-dark .dialog-select-container .objects-list-table { background: #272727!important; }";
		customCSS += ".m.react-dark .dropdown-content li.grey.lighten-3, .m.react-dark .dropdown-content li.selected, .m.react-dark .dropdown-content li:hover { background-color: #4c4c4c !important; }";
		customCSS += ".m.react-dark .dropdown-content li.divider { background-color: #626262; }";

		customCSS += ".m.react-dark .background_and_overlay { background-color: #272727; box-shadow: 0 0 9px 20px #272727; }";

		addCustomCSS(customCSS, "reactCSS");
		
		$('.table-button-add').addClass('grey lighten-2');
		
		var selectIdImgPath = './fancytree/react/';
		$('#fancytreeCSSLink').attr('href', './fancytree/react/ui.fancytree.min.css');
		
		if ($('.m.adapter-container').hasClass('react-dark')) $('.m.material-dialogs').addClass('react-dark');
	}

	//If tab, hide close buttons
	if (window.location.search.indexOf('noCloseButtons') !== -1) addCustomCSS('.btn-save-close, .btn-cancel { visibility: hidden; }', 'noCloseButtons'); 

	//Create a helper for sortable tables with preserved width of cells
	var fixHelper = function(e, ui){
		ui.children().each(function(){
			$(this).width($(this).width()).css({"background-color":"rgba(180,180,180,0.75)", "box-shadow":"-5px 5px 5px 0px rgba(180,180,180,0.75)"});
		});
		return ui;
	};

	//Get inbuiltIcons
	var inbuiltIcons = [];
	for(iconPreset in iconPresets){
		let presetIcons = [];
		for(iconEquivalent in iconPresets[iconPreset].iconEquivalents){
			presetIcons = presetIcons.concat(iconPresets[iconPreset].iconEquivalents[iconEquivalent]);
		}
		presetIcons.sort();
		inbuiltIcons = inbuiltIcons.concat(presetIcons);
	}
	inbuiltIcons = removeDuplicates(inbuiltIcons);

	//Init Colorpickers
	initColorpickers(onChange);

	//Init Materialize Ranges
	M.Range.init(document.querySelectorAll("input[type=range]"));

	//Enable insert variable in dialogDeviceEditStateConstant
	$('#dialogDeviceEditStateConstantSelectId').on('click', function(){
		$('#dialogSelectId').data('selectidfor', 'dialogDeviceEditStateConstantVariable');
		initSelectId(function (sid) {
			sid.selectId('show', $('#dialogDeviceEditStateConstantVariable').val(), {type: 'state'}, function (newId) {
				if (newId) {
					$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
				}
			});
		});
	});
	$('#dialogDeviceEditStateConstantVariable, #dialogDeviceEditStateConstantNoUnit').on('change', function(){
		if($('#dialogDeviceEditStateConstantNoUnit').prop('checked')){
			$('#dialogDeviceEditStateConstantVariableSpanBefore').html('{[');
			$('#dialogDeviceEditStateConstantVariableSpanAfter').html(']}');
		} else {
			$('#dialogDeviceEditStateConstantVariableSpanBefore').html('{');
			$('#dialogDeviceEditStateConstantVariableSpanAfter').html('}');
		}
	}).trigger('change');
	$('#dialogDeviceEditStateConstantInsert').on('click', function(){
		$textarea = $('#dialogDeviceEditStateConstantTextarea');
		var cursorPosition = $textarea.get(0).selectionStart;
		let stringActual = $textarea.val();
		var stringToInsert = $('#dialogDeviceEditStateConstantVariable').val();
		if($('#dialogDeviceEditStateConstantNoUnit').prop('checked')) stringToInsert = "[" + stringToInsert + "]";
		stringToInsert = "{" + stringToInsert + "}";
		$textarea.val(stringActual.slice(0, cursorPosition) + stringToInsert + stringActual.slice(cursorPosition));
	});

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
		if (confirm(_("Overwrite file?"))){
			uploadStringAsFile(dialogCodeEditorCodeMirror.getValue(), $("#dialogCodeEditorFileName").text(), userfilesImagePath, function(name){
				dialogCodeEditorCodeMirrorChanged = false;
				$('#dialogCodeEditor .btn-set').addClass('disabled');
			});
		}
	});
	$('#dialogCodeEditor .btn-close').on('click', function(){
		if (dialogCodeEditorCodeMirrorChanged){
			if (confirm(_("You have unsaved changes. Close anyway?"))) $('#dialogCodeEditor').modal('close');
		} else {
			$('#dialogCodeEditor').modal('close');
		}
	});

	//Add function to inputClear-Buttons and selectClear-Buttons
	initInputClear();

	//Convert settings to V3
	settings = convertConfigV3(settings);

	//Select elements with id=key and class=value and insert value
	if(!settings) return;
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
				if (!noOnChange) onChange(); 
			});
		}
	});

	//---------- Subsettings ----------
	//Get Subsettings ##### create new demo settings ##### SAVE: tileClasses!
	//!!! If more subsettings are added - remember to add them to initDialog, saveFromDialogAndPreview, save-function and to backup/restore-section as well!!!
	if (!settings.views && !settings.toolbar && confirm(_("No configuration found. Should a demo-config be loaded? (Otherwise you will get an empty configuration)."))){
		toolbar = settings.toolbar || settings.demotoolbar || {items: []};
		views = settings.views || settings.demoviews || [];
		lists = settings.lists || settings.demolists || [];
		tileClasses = settings.tileClasses || settings.demotileClasses || [];
		optionsLayoutDefaultIcons = settings.optionsLayoutDefaultIcons || settings.demooptionsLayoutDefaultIcons || {};
		optionsLayoutDefaultSymbols = settings.optionsLayoutDefaultSymbols || settings.demooptionsLayoutDefaultSymbols || {};
		version = settings.version || 0;
		alert(_("Don't forget to save the configuration now, otherwise it will be lost."));
		newConfig = true;
	} else {
		toolbar = settings.toolbar || {items: []};
		views = settings.views || [];
		lists = settings.lists || [];
		tileClasses = settings.tileClasses || [];
		optionsLayoutDefaultIcons = settings.optionsLayoutDefaultIcons || {};
		optionsLayoutDefaultSymbols = settings.optionsLayoutDefaultSymbols || {};
		version = settings.version || 0;
		newConfig = false;
	}
	tileClasses[0] = {commonName: "iQontrol Standard Tile", value: standardTileClass, default: true, inbuilt: true}; //Make shure the first tileClass is always the standardTileClass

	//Backward-Compatibility: Transfer old options to new options
  	views.forEach(function(view){
		(view.devices || []).forEach(function(device){
			if (typeof device.options != "object") device["options"] = [];
			if (!device.options.find(element => element.option === "clickOnTileAction")){
				var clickOnTileToggles = (device.options || []).find(element => element.option === "clickOnTileToggles");
				var clickOnTileOpensDialog = (device.options || []).find(element => element.option === "clickOnTileOpensDialog");
				var value = null;
				if (clickOnTileToggles && typeof clickOnTileToggles.value != udef && clickOnTileToggles.value == "true") {
					value = "toggle";
				} else if (clickOnTileOpensDialog && typeof clickOnTileOpensDialog.value != udef && clickOnTileOpensDialog.value == "true") {
					value = "openDialog";
				} else if (device.commonRole && device.commonRole == "iQontrolExternalLink"){
					value = "openURLExternal";
				}
				if (value) { device.options.push({option: "clickOnTileAction", type: "select", value: value}); newConfig = true; }
				var i = (device.options || []).findIndex(element => element.option === "clickOnTileToggles");
				if (i > -1) { device.options.splice(i, 1); newConfig = true; }
				i = (device.options || []).findIndex(element => element.option === "clickOnTileOpensDialog");
				if (i > -1) { device.options.splice(i, 1); newConfig = true; }			
			}
			if (!device.options.find(element => element.option === "clickOnIconAction")){
				var clickOnIconToggles = (device.options || []).find(element => element.option === "clickOnIconToggles");
				var clickOnIconOpensDialog = (device.options || []).find(element => element.option === "clickOnIconOpensDialog");
				var value = null;
				if (clickOnIconToggles && typeof clickOnIconToggles.value != udef && clickOnIconToggles.value == "true") {
					value = "toggle";
				} else if (clickOnIconOpensDialog && typeof clickOnIconOpensDialog.value != udef && clickOnIconOpensDialog.value == "true") {
					value = "openDialog";
				} else if (device.commonRole && device.commonRole == "iQontrolExternalLink"){
					value = "openURLExternal";
				}
				if (value) { device.options.push({option: "clickOnIconAction", type: "select", value: value}); newConfig = true; }
				var i = (device.options || []).findIndex(element => element.option === "clickOnIconToggles");
				if (i > -1) { device.options.splice(i, 1); newConfig = true; }
				i = (device.options || []).findIndex(element => element.option === "clickOnIconOpensDialog");
				if (i > -1) { device.options.splice(i, 1); newConfig = true; }				
			}
		});
	});
  
	//Set initial values of further variables
	var devicesSelectedView = -1;var images = [];
	var imagesDirs = [];
	var comboboxStrings = {
		inbuiltWidgets: "",
		inbuiltWallpapers: "",
		inbuiltIcons: "",
		inbuiltSymbols: "",
		jqueryIcons: "",
		inbuiltFonts: "",
		blankIcon: "",
		progressbars: "",
		userFiles: "",
		userWidgets: "",
		userIcons: "",
		userSymbols: "",
		userImages: "",
		userFonts: ""
	}
	
	//Fill fixed comboboxStrings
	function fillFixedComboboxStrings(){ //This is called in after the previewLink is generated
		//--Inbuilt Widgets
		var comboboxString = "";
		inbuiltWidgets.forEach(function(widget){
			if (widget && typeof widget.filename != udef) {
				comboboxString += ";" + ("./images/widgets/" + widget.filename).replace(/\//g, "\\") + "/" + (widget.name || widget.filename).replace(/\//g, "\\") + "/" + (previewLink + ("/images/widgets/" + widget.icon || "/images/icons/file_html.png")).replace(/\//g, "\\");
			}
		});
		if (inbuiltWidgets.length > 0){
			comboboxString = "[" + _("Inbuilt Widgets") + ":]" + comboboxString;
		}	
		comboboxStrings.inbuiltWidgets = comboboxString;
		//--Inbuilt Wallpapers
		var comboboxString = "";
		inbuiltWallpapers.forEach(function(wallpaper){
			if (wallpaper != "") {
				comboboxString += ";" + ("./images/wallpaper/" + wallpaper).replace(/\//g, "\\") + "/" + wallpaper.replace(/\//g, "\\");
			}
		});
		if (inbuiltWallpapers.length > 0){
			comboboxString = "[" + _("Inbuilt Wallpapers") + ":]" + comboboxString;
		}
		comboboxStrings.inbuiltWallpapers = comboboxString;
		//--Progress-Bars
		comboboxString = "[" + _("Progress-Bars") + ":]";
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22red%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("red") + "/" + (previewLink + "/images/icons/progressbar_square_red.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22green%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("green") + "/" + (previewLink + "/images/icons/progressbar_square_green.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22blue%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("blue") + "/" + (previewLink + "/images/icons/progressbar_square_blue.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22yellow%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("yellow") + "/" + (previewLink + "/images/icons/progressbar_square_yellow.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22orange%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("orange") + "/" + (previewLink + "/images/icons/progressbar_square_orange.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-5%20-5%20110%20110%22%3E%3Crect%20y%3D%2240%22%20width%3D%22100%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22grey%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3Crect%20y%3D%2240%22%20width%3D%22%7B%7D%22%20height%3D%2220%22%20rx%3D%228%22%20ry%3D%228%22%20fill%3D%22purple%22%20stroke-width%3D%220%22%20%3E%3C%2Frect%3E%3C%2Fsvg%3E/" + _("Rectangle") + " " + _("purple") + "/" + (previewLink + "/images/icons/progressbar_square_purple.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]data%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("inactive") + "/" + (previewLink + "/images/icons/progressbar_circle_inactive.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22red%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("red") + "/" + (previewLink + "/images/icons/progressbar_circle_red.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22green%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("green") + "/" + (previewLink + "/images/icons/progressbar_circle_green.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22blue%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("blue") + "/" + (previewLink + "/images/icons/progressbar_circle_blue.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22yellow%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("yellow") + "/" + (previewLink + "/images/icons/progressbar_circle_yellow.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22orange%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("orange") + "/" + (previewLink + "/images/icons/progressbar_circle_orange.png").replace(/\//g, "\\");
		comboboxString += ";[VARIABLE]%7Cdata%3Aimage%2Fsvg%2Bxml%3Bcharset%3DUTF-8%2C%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2%20-2%2040%2040%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22grey%22%20stroke-width%3D%224%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22purple%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%22%7B%7D%2C%20100%22%20transform%3D%22rotate(-90%2018%2018)%22%20d%3D%22M18%202.0845%20a%2015.9155%2015.9155%200%200%201%200%2031.831%20a%2015.9155%2015.9155%200%200%201%200%20-31.831%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E/" + _("Circle") + " " + _("purple") + "/" + (previewLink + "/images/icons/progressbar_circle_purple.png").replace(/\//g, "\\");
		comboboxStrings.progressbars = comboboxString;
		//--Inbuilt Fonts
		comboboxString = ";[Sans-Serif:]";
		comboboxString += ";Frutiger, \"Frutiger Linotype\", Univers, Calibri, \"Gill Sans\", \"Gill Sans MT\", \"Myriad Pro\", Myriad, \"DejaVu Sans Condensed\", \"Liberation Sans\", \"Nimbus Sans L\", Tahoma, Geneva, \"Helvetica Neue\", Helvetica, Arial, sans-serif/Helvetica, Arial/.\\fonts\\font_arial.png";
		comboboxString += ";Corbel, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", \"Bitstream Vera Sans\", \"Liberation Sans\", Verdana, \"Verdana Ref\", sans-serif/Verdana/.\\fonts\\font_verdana.png";
		comboboxString += ";\"Segoe UI\", Candara, \"Bitstream Vera Sans\", \"DejaVu Sans\", \"Bitstream Vera Sans\", \"Trebuchet MS\", Verdana, \"Verdana Ref\", sans-serif/Trebuchet/.\\fonts\\font_trebuchet.png";
		comboboxString += ";[Serif:]";
		comboboxString += ";Cambria, \"Hoefler Text\", Utopia, \"Liberation Serif\", \"Nimbus Roman No9 L Regular\", Times, \"Times New Roman\", serif/Times New Roman/.\\fonts\\font_times.png";
		comboboxString += ";Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif/Georgia/.\\fonts\\font_georgia.png";
		comboboxString += ";\"Palatino Linotype\", Palatino, Palladio, \"URW Palladio L\", \"Book Antiqua\", Baskerville, \"Bookman Old Style\", \"Bitstream Charter\", \"Nimbus Roman No9 L\", Garamond, \"Apple Garamond\", \"ITC Garamond Narrow\", \"New Century Schoolbook\", \"Century Schoolbook\", \"Century Schoolbook L\", Georgia, serif/Garamond/.\\fonts\\font_garamond.png";
		comboboxString += ";[Fantasy:]";
		comboboxString += ";Impact, Haettenschweiler, \"Franklin Gothic Bold\", Charcoal, \"Helvetica Inserat\", \"Bitstream Vera Sans Bold\", \"Arial Black\", fantasy, sans-serif/Impact/.\\fonts\\font_impact.png";
		comboboxString += ";[Cursive:]";
		comboboxString += ";\"Comic Sans\", \"Comic Sans MS\", \"Chalkboard\", \"ChalkboardSE-Regular\", cursive, sans-serif/Comic Sans/.\\fonts\\font_comic.png";
		comboboxString += ";[Monospace:]";
		comboboxString += ";Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier, monospace/Courier/.\\fonts\\font_courier.png";
		comboboxStrings.inbuiltFonts = comboboxString;
		//--Blank Icon
		comboboxString = "[" + _("No Icon") + ":]";
		comboboxString += ";" + ("./images/icons/blank.png").replace(/\//g, "\\") + "/" + _("No Icon") + "/" + (previewLink + "/images/icons/checkboard.png").replace(/\//g, "\\");
		comboboxStrings.blankIcon = comboboxString;
		//--Inbuilt Icons
		comboboxString = "";
		var lastDir = null;
		inbuiltIcons.forEach(function(inbuiltIcon){
			if (inbuiltIcon != "") {
				var dir =  inbuiltIcon.substring('./images/icons'.length, inbuiltIcon.lastIndexOf("/"));
				if(dir != lastDir){
					comboboxString += ";[" + _("Inbuilt Icons") + (dir.length ? " " : "") + dir.replace(/\//g, "\\") + ":]";
					lastDir = dir;
				}
				comboboxString += ";" + inbuiltIcon.replace(/\//g, "\\") + "/" + inbuiltIcon.replace(/\//g, "\\");
			}
		});
		comboboxStrings.inbuiltIcons = comboboxString;				
		//--Inbuilt Symbols
		comboboxString = "";
		inbuiltSymbols.forEach(function(inbuiltSymbol){
			if (inbuiltSymbol != "") {
				comboboxString += ";" + ("./images/symbols/" + inbuiltSymbol).replace(/\//g, "\\") + "/" + inbuiltSymbol.replace(/\//g, "\\");
			}
		});
		if (inbuiltSymbols.length > 0){
			comboboxString = "[" + _("Inbuilt Symbols") + ":]" + comboboxString;
		}
		comboboxStrings.inbuiltSymbols = comboboxString;
		//--jQueryIcons
		comboboxString = "";
		jqueryIcons.forEach(function(symbol){
			if (symbol != "") {
				comboboxString += ";" + symbol + "/" + symbol + "/" + (previewLink + "/jquery/images/icons-svg/" + symbol + "-black.svg").replace(/\//g, "\\");
			}
		});
		if (jqueryIcons.length > 0){
			comboboxString = "[" + _("Standard Symbols") + ":]" + comboboxString;
		}
		comboboxStrings.jqueryIcons = comboboxString;
	}
	
	//fill variable comboboxOptionsStrings
	function fillVariableComboboxStrings(){ //this is called from the getImages-Function
		//--Userwidgets
		var userWidgets = []; 
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
					userWidgets.push("[" + _("User Widgets") + ": " + imagesDir.dirnameBS + ":]");
					userWidgets.push(websitenamesInThisDir.join(";"));
				}
			}
		});
		comboboxStrings.userWidgets = userWidgets.join(";");
		//--userFiles
		var imagenames = [];
		var dirimagenames = [];
		imagesDirs.forEach(function(imagesDir){
			if (imagesDir.files && imagesDir.files.length > 0){
				imagenames.push("[" + _("User Icons") + " " + imagesDir.dirnameBS + ":]");
				imagesDir.files.forEach(function(file){
					imagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
				});
			}
		});
		comboboxStrings.userFiles = imagenames.join(";");
		//--userImages
		imagenames = [];
		imagesDirs.forEach(function(imagesDir){
			if (imagesDir.files && imagesDir.files.length > 0){
				dirimagenames = [];
				imagesDir.files.forEach(function(file){
					if (file.filenameBS.toLowerCase().endsWith(".png") || file.filenameBS.toLowerCase().endsWith(".jpeg") || file.filenameBS.toLowerCase().endsWith(".jpg") || file.filenameBS.toLowerCase().endsWith(".gif") || file.filenameBS.toLowerCase().endsWith(".svg") || file.filenameBS.toLowerCase().endsWith(".svg+xml")){
						dirimagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
					}
				});
				if(dirimagenames.length) {
					imagenames.push("[" + _("User Images") + " " + imagesDir.dirnameBS + ":]");
					imagenames = imagenames.concat(dirimagenames);
				}
			}
		});
		comboboxStrings.userImages = imagenames.join(";");	
		//--userIcons
		imagenames = [];
		imagesDirs.forEach(function(imagesDir){
			if (imagesDir.dirname.indexOf("/usericons") == 0 && imagesDir.files && imagesDir.files.length > 0){
				dirimagenames = [];
				imagesDir.files.forEach(function(file){
					if (file.filenameBS.toLowerCase().endsWith(".png") || file.filenameBS.toLowerCase().endsWith(".jpeg") || file.filenameBS.toLowerCase().endsWith(".jpg") || file.filenameBS.toLowerCase().endsWith(".gif") || file.filenameBS.toLowerCase().endsWith(".svg") || file.filenameBS.toLowerCase().endsWith(".svg+xml")){
						dirimagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
					}
				});
				if(dirimagenames.length) {
					imagenames.push("[" + _("User Icons") + " " + imagesDir.dirnameBS + ":]");
					imagenames = imagenames.concat(dirimagenames);
				}
			}
		});
		comboboxStrings.userIcons = imagenames.join(";");	
		//--userSymbols
		imagenames = [];
		imagesDirs.forEach(function(imagesDir){
			if (imagesDir.dirname.indexOf("/usersymbols") == 0 && imagesDir.files && imagesDir.files.length > 0){
				dirimagenames = [];
				imagesDir.files.forEach(function(file){
					if (file.filenameBS.toLowerCase().endsWith(".png") || file.filenameBS.toLowerCase().endsWith(".jpeg") || file.filenameBS.toLowerCase().endsWith(".jpg") || file.filenameBS.toLowerCase().endsWith(".gif") || file.filenameBS.toLowerCase().endsWith(".svg") || file.filenameBS.toLowerCase().endsWith(".svg+xml")){
						dirimagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
					}
				});
				if(dirimagenames.length) {
					imagenames.push("[" + _("User Symbols") + ": " + imagesDir.dirnameBS + ":]");
					imagenames = imagenames.concat(dirimagenames);
				}
			}
		});
		comboboxStrings.userSymbols = imagenames.join(";");
		//-userFonts
		var userfonts = [];
		var comboboxString = "";
		imagesDirs.forEach(function(imagesDir){
			if (imagesDir.dirname.indexOf("/userfonts") == 0 && imagesDir.files && imagesDir.files.length > 0){
				imagesDir.files.forEach(function(file){
					var filename = file.filename || "";
					if (filename.endsWith(".otf") || filename.endsWith(".ttf") || filename.endsWith(".woff") || filename.endsWith(".woff2") || filename.endsWith(".eot")){
						var iconIndex = images.findIndex(function(element){ return (element.filename == file.filename.substring(0, file.filename.length - 5) + ".png"); });
						if (iconIndex > -1) var icon = previewLink + "/.." + userfilesImagePath + images[iconIndex].filename; else var icon = previewLink + "/images/icons/file_font.png";
						userfonts.push(file.filenameBS + "@" + ".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS + "/" + icon.replace(/\//g, "\\"));
					}
				});
			}
		});
		if (userfonts.length > 0){
			comboboxString += "[" + _("User Fonts") + ":]";
			userfonts.forEach(function(userfont){
				comboboxString += ";" + userfont;
			});
		}
		comboboxStrings.userFonts = comboboxString;
	}

	//Update all Colorpickers
	$('.MaterializeColorPicker').trigger('change', 'noOnChange');

	//Init imageUpload
	initImageUpload();

	//Init ChannelDetector
	var channelDetector = new ChannelDetector();

	//Get Link of best fitting web-adapter
	console.log("getLink of best fitting web-adapter");
	getExtendableInstances(async function(result) {
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
							if (!goalForceWebSocketsFound){
								goalForceWebSocketsFound = true;
								bestInstance = i;
							}
						}
					}
				}
			}
			if (!(goalSocketFound && goalForceWebSocketsFound) && !isIobrokerPro){
				console.log("Could not find any web-adapter with integrated socketIO and disabled Force Web-Sockets");
			}

			//Create Link from best fitting web-adapter
			if (isIobrokerPro){ //Connection over iobroker.net or iobroker.pro - connect without ports!
				previewLink = location.protocol + "//" + location.hostname + "/iqontrol";
				var connectionLink = location.protocol + "//"  + location.hostname;
				var forceWebSocket = false;
			} else { //Direct connection
				previewLink = (result[bestInstance].native.secure ? "https://" : "http://") + location.hostname + ":" + result[bestInstance].native.port + "/iqontrol";
				var connectionLink = (result[bestInstance].native.secure ? "https://" : "http://") + location.hostname + ":" + result[bestInstance].native.port;
				var forceWebSockets = result[bestInstance].native.forceWebSockets;
			}
			console.log("Got Link: " + previewLink);

			//Add and enhance preview buttons
			$('.m .dialog-config-buttons .btn-save').before('<a class="btn btn-preview" style="margin: 0 -10px 0 10px;"><img src="iqontrol.png" style="height:26px; margin: 5px -10px 5px -10px;"></a>');
			$('.m .dialog-config-buttons .btn-preview').on('click', function(){ saveFromDialogAndPreview(false, true, true)});
			$('img.mainLink').on('click', function(){ saveFromDialogAndPreview(false, true, true)}).css('cursor', 'pointer');
			$('a.mainLink').attr('href', previewLink + "/index.html?namespace=" + adapter + "." + instance + (passphrase ? "&passphrase=" + passphrase : ""));

			//fillFixedComboboxStrings
			fillFixedComboboxStrings();

			//Add Roles to dialogDeviceEditCommonRole-Selectbox
			$('#dialogDeviceEditCommonRole').empty().append("<option disabled selected value>" + _("Select Role") + "</option>");
			for (var element in iQontrolRoles){ $('#dialogDeviceEditCommonRole').append("<option value='" + element + "' data-icon='" + (iQontrolRoles[element].icon ? previewLink + iQontrolRoles[element].icon : "") + "'>" + _(iQontrolRoles[element].name) + "</option>"); }
			$('#dialogDeviceEditCommonRole').select();

			//Signal to admin, that no changes yet
			if (!newConfig) onChange(false);
			
			//Sync saveFromDialogAndPreview-buttons to save button 
			applySyncSaveFromDialogButtonsToSaveButton();
			
			//Create /usericons, /usersymbols, /userwidgets and /userfonts
			var createSpecialDirs = ["/usericons", "/usersymbols", "/userwidgets", "/userfonts"];
			for(i = 0; i < createSpecialDirs.length; i++){
				var dirname = createSpecialDirs[i];
				console.log("Check directory " + userfilesImagePath + dirname);
				var dirExistance = await checkDirExistance(userfilesImagePath + dirname);
				console.log(dirExistance);
				if (!dirExistance) {
					console.log("Creating directory " + userfilesImagePath + dirname);
					await createDirAsync(userfilesImagePath + dirname);
				}
			};

			//Get images
			console.log("getImages");
			getImages(async function(){
				//Show Settings
				console.log("All settings loaded. Adapter ready.");
				$('.hideOnLoad').show();
				$('.showOnLoad').hide();
				loading = false;

				//Reinitialize all the Materialize labels on the page if you are dynamically adding inputs:
				if (M) M.updateTextFields();
				
				//Add warning to native config save button
				//$('.adapter-config-save').hide();
				//$('.adapter-config-load').hide();
				$('.adapter-config-save').on('click', function(){ 
					alert(_("Warning: This does not save the complete configuration of iQontrol. Please use the functions under Options - Backup/Restore for backups!")); 
				});

				//Get iobrokerObjects
				getIobrokerObjects();
				
				//Warn if Admin-Version is too low
				var toDo = function(){
					if (isReact){
						var warnIfLE = "5.0.8";
					} else {
						var warnIfLE = "5.0.6";
					}
					if (parseInt((iobrokerObjects && iobrokerObjects["system.adapter.admin"] && iobrokerObjects["system.adapter.admin"].common && iobrokerObjects["system.adapter.admin"].common.version || "0").split('.').join('')) <= warnIfLE.split('.').join('')) alert(_("Some operations are only supported by admin versions > %s. Please update your admin-adapter!", warnIfLE));
				}
				if (iobrokerObjectsReady) {
					toDo();
				} else {
					iobrokerObjectsReadyFunctions.push(toDo);
				}
			});
		} else {
			alert(_("Error: No web-adapter found!"));
		}
	});

	function getIobrokerObjects(){
		console.log("Getting ioBroker Objects...");
		$('.loadingObjects').show();
		if (!iobrokerObjectsReady){
			var toDo = function(){
				console.log("Subscribing to objectChange");
				socket.on('objectChange', function(id, obj){
					if (obj) iobrokerObjects[id] = obj; else if (obj == null) delete iobrokerObjects[id];
				});
			}
			iobrokerObjectsReadyFunctions.push(toDo);
		}
		iobrokerObjectsReady = false;
		if (parent && parent.gMain && typeof parent.gMain.objects == "object"){
			console.log("...assigning ioBroker Objects via parent.gMain.objects...");
			iobrokerObjects = Object.assign({}, parent.gMain.objects);
			iobrokerObjectsReady = true;
			if (iobrokerObjectsReadyFunctions.length) console.log("There are some functions that were buffered while fetching the ioBroker Objects. They will be executed now...");
			for(i = 0; i < iobrokerObjectsReadyFunctions.length; i++){
				if (typeof iobrokerObjectsReadyFunctions[i] == 'function') iobrokerObjectsReadyFunctions[i]();
			}
			iobrokerObjectsReadyFunctions = [];
			$('.loadingObjects').hide();
			console.log("ioBroker Objects ready.");
		} else {
			setTimeout(function(){
				console.log("...fetching ioBroker Objects via socket...");
				$('.loadingObjects').show();
				socket.emit('getObjects', function (err, _objs) {
					iobrokerObjects = _objs;
					iobrokerObjectsReady = true;
					if (iobrokerObjectsReadyFunctions.length) console.log("There are some functions that were buffered while fetching the ioBroker Objects. They will be executed now...");
					for(i = 0; i < iobrokerObjectsReadyFunctions.length; i++){
						if (typeof iobrokerObjectsReadyFunctions[i] == 'function') iobrokerObjectsReadyFunctions[i]();
					}
					iobrokerObjectsReadyFunctions = [];
					$('.loadingObjects').hide();
					console.log("ioBroker Objects ready.");
				});
			}, 1000);
		}
	}

	//++++++++++ TABS ++++++++++
	//Enhance Tabs with onShow-Function
	$('ul.tabs li a').on('click', function(){ 
		//Scroll tab to middle
		$tab = $(this);
		$parent = $(this).parents('.tabs');
		var tabLeft = $tab.offset().left - $parent.offset().left + $parent.scrollLeft();
		var tabWidth = $tab.innerWidth();
		var parentWidth = $parent.innerWidth();
		$parent.animate({ scrollLeft: (tabLeft + (tabWidth / 2) - (parentWidth / 2)) }, 250);
		//Load onTabShow-Function
		onTabShow($(this).attr('href'));
	});
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

			case "#tabLists":
			loadLists();
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
				if (enumerations){
					var enumerationsMain = Object.keys(enumerations);
					enumerationsMain = enumerationsMain.filter(function(element){ //Filter for main Enumerations (that are elements, that have sub-enumerations)
						if (enumerationsMain.filter(function(_element){ return (_element.indexOf(element + ".") == 0); }).length > 0) return true; else return false;
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
					if (error) console.log("Error getting enumerations: " + error); else console.log("There are no Enumerations");
					$('#viewsAutocreateButtonProgress').hide();
				}
			});
		}
		if (iobrokerObjectsReady) {
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
		enhanceTextInputToCombobox('#tableViews input[data-name="nativeBackgroundImage"]', ["/" + _("(None)"), comboboxStrings.inbuiltWallpapers, comboboxStrings.userImages], true);
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			if (command === 'edit') {
				//Edit view
				$(this).on('click', function (event) {
					var _viewIndex = $(this).data('index');
					M.Tabs.getInstance($('.tabs')).select('tabDevices');
					setTimeout(function(){ $('#devicesSelectedView').val(_viewIndex).select().trigger('change'); }, 10);
				});
			} else if (command === 'delete') {
				//Delete view
				$(this).on('click', function (event) {
					var _viewIndex = $(this).data('index');
					var changedSymbolicLinks = changeSymbolicLinks(_viewIndex, "*", null, null);
					if (changedSymbolicLinks.length > 0) {
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
					if (viewsCheckDuplicates()) alert(_("No duplicates allowed! View Names must be unique."));
				});
			}
		});
		function changeViewsCommonName(index, oldVal, newVal){
			toolbar.forEach(function(element){
				if (element.nativeLinkedView.split("#")[0] == oldVal.split("#")[0]) element.nativeLinkedView = newVal.split("#")[0] + (element.nativeLinkedView.split("#")[1] ? "#" + element.nativeLinkedView.split("#")[1] : "");
			});
			if ($('#panelBackgroundViewValue').val().split("#")[0] == adapter + "." + instance + ".Views." + oldVal.split("#")[0]) $('#panelBackgroundViewValue').val(adapter + "." + instance + ".Views." + newVal.split("#")[0] + ($('#panelBackgroundViewValue').val().split("#")[1] ? "#" + $('#panelBackgroundViewValue').val().split("#")[1] : ""));
			views.forEach(function(view){
				(view.devices || []).forEach(function(device){
					if (device.nativeLinkedView && device.nativeLinkedView.split("#")[0] == oldVal.split("#")[0]) device.nativeLinkedView = newVal.split("#")[0] + (device.nativeLinkedView.split("#")[1] ? "#" + device.nativeLinkedView.split("#")[1] : "");
					(device.states || []).forEach(function(state){
						if (state.state == "BACKGROUND_VIEW" && state.value.split("#")[0] == (adapter + "." + instance + ".Views." + oldVal.split("#")[0])) state.value = (adapter + "." + instance + ".Views." + newVal.split("#")[0] + (state.value.split("#")[1] ? "#" + state.value.split("#")[1] : ""));
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
					if (i != sequence[i]) {
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
		if (duplicates){
			$('#viewsNoDuplicatesAllowed').show();
		} else {
			$('#viewsNoDuplicatesAllowed').hide();
		}
		return duplicates;
	}

	//Enhance ViewsAutocreate with functions
	$('#viewsAutocreateButton').on('click', function () {
		initDialog('dialogViewsAutocreate', function(){ //save dialog
			if (!confirm(_("Create selected views?") + " " + _("This may take a few seconds."))) return;
			var enumerationMain = $('#dialogViewsAutocreateEnumerationMain').val();
			var viewsAutocreateResult = {views: [], toolbar: []};
			var iQontrolViewDevices = [];
			var masterView = false;
			var viewCount = 0;
			var deviceCount = 0;
			var toolbarCount = 0;
			$('.dialogViewsAutocreateEnumerationListItem').each(function(){
				var enumeration = $(this).data('enumeration');
				if ($(this).prop('checked') || (enumeration == enumerationMain && $('#dialogViewsAutocreateCreateMasterView').prop('checked'))){
					var name = getEnumerationName(enumeration);
					var viewNames = [];
					views.forEach(function(view){ if (view.commonName) viewNames.push(view.commonName); });
					var existingNameIndex = 0;
					while(viewNames.indexOf(name + (existingNameIndex ? " " + existingNameIndex : "")) != -1) { existingNameIndex++; };
					if (existingNameIndex) name = name + " " + existingNameIndex;
					var backgroundImage = './images/wallpaper/orangedrops.jpg';
					if (enumeration.indexOf('enum.rooms') == 0) {
						backgroundImage = './images/wallpaper/bottle.jpg';
					} else if (enumeration.indexOf('enum.functions') == 0) {
						backgroundImage = './images/wallpaper/grass.jpg';
					}
					var view = {commonName: name, nativeBackgroundImage: backgroundImage, devices: []}
					if (enumerations[enumeration].common && enumerations[enumeration].common.members && typeof enumerations[enumeration].common.members.forEach == "function") enumerations[enumeration].common.members.forEach(function(member){
						if ($('.dialogViewsAutocreateEnumerationListMemberItem[data-enumeration="' + enumeration + '"][data-member="' + member + '"]').prop('checked')){
							var result = deviceAutocreate(member, iobrokerObjects);
							if (result && result.resultObject) {
								view.devices.push(result.resultObject);
								deviceCount++;
							}
						}
					});
					if (view.devices.length || (enumeration == enumerationMain && $('#dialogViewsAutocreateCreateMasterView').prop('checked'))){
						if (enumeration == enumerationMain){
							masterView = viewsAutocreateResult.views.length;
							view.nativeBackgroundImage = './images/wallpaper/bakestone.jpg';
						}
						viewsAutocreateResult.views.push(view);
						viewCount++;
					}
					if (view.devices.length && enumeration != enumerationMain && $('#dialogViewsAutocreateCreateMasterView').prop('checked')) {
						iQontrolViewDevices.push({commonName: name, commonRole: "iQontrolView", nativeLinkedView: name, nativeBackgroundImage: backgroundImage});
						deviceCount++;
					}
					if (enumeration == enumerationMain && $('#dialogViewsAutocreateCreateMasterViewToolbarEntry').prop('checked')){
						var icon = "bars";
						if (enumeration == "enum.rooms") icon = "grid";
						if (enumeration == "enum.functions") icon = "gear";
						viewsAutocreateResult.toolbar.push({commonName: name, nativeLinkedView: name, nativeIcon: icon});
						toolbarCount++;
					}
				}
			});
			if ($('#dialogViewsAutocreateCreateMasterView').prop('checked') && masterView !== false){
				if (typeof viewsAutocreateResult.views[masterView].devices == udef) viewsAutocreateResult.views[masterView].devices = [];
				viewsAutocreateResult.views[masterView].devices = iQontrolViewDevices.concat(viewsAutocreateResult.views[masterView].devices);
			}
			if (confirm(_("Created %s devices in %s views", deviceCount, viewCount) + (toolbarCount ? " " + _("and a toolbar entry") : "") + ". " + _("Save these settings?"))){
				views = views.concat(viewsAutocreateResult.views);
				toolbar = toolbar.concat(viewsAutocreateResult.toolbar);
				loadViews();
			}
		}, function(){ //init dialog function
			$('#dialogViewsAutocreateEnumerationMain').val("").select();
			$('#dialogViewsAutocreateEnumerationList').html(_("Please select an enumeration."));
			$('#dialogViewsAutocreate a.btn.chose').addClass('disabled');
			$('#dialogViewsAutocreateBtnSetProgress').hide();
			$('#dialogViewsAutocreate a.btn-set').addClass('disabled');
		});
	});
	$('#dialogViewsAutocreateEnumerationMain').on('change', function(){
		var enumerationMain = $('#dialogViewsAutocreateEnumerationMain').val();
		$('#dialogViewsAutocreateEnumerationList').empty();
		var listContent = "<ul class='collapsible'>";
		for(enumeration in enumerations){
			if (enumeration.indexOf(enumerationMain) == 0){
				var name = getEnumerationName(enumeration);
				var members = [];
				if (enumerations[enumeration].common && enumerations[enumeration].common.members && typeof enumerations[enumeration].common.members.forEach == "function"){
					members = enumerations[enumeration].common.members;
				};
				listContent += "<li>";
				listContent += "	<div class='collapsible-header'>";
				listContent += "		<label><input class='dialogViewsAutocreateEnumerationListItem' type='checkbox' checked='checked' data-enumeration='" + enumeration + "'><span>" + name + "</span></label>";
				if (members.length){
					listContent += "		<div style='position: relative; right: 20px; margin-left: auto; padding: 3px 10px; border-radius: 14px; background: lightgrey;'><span>" + members.length + " " + (members.length == 1 ? _("device") : _("devices")) + "</span></div>";
				}
				listContent += "	</div>";
				listContent += "	<div class='collapsible-body'>";
				if (members.length){
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
			if ($(this).prop('checked')) $('.dialogViewsAutocreateEnumerationListItem[data-enumeration="' + $(this).data('enumeration') + '"]').prop('checked', true);
		});
		$('#dialogViewsAutocreate a.btn.chose').removeClass('disabled');
		$('#dialogViewsAutocreate a.btn-set').removeClass('disabled');
	});

	//++++++++++ DEVICES ++++++++++
	//Load Devices
	function loadDevices(){
		devicesMarkDevice = null;
		//Add Views to Selectbox for Views
		$('#devicesSelectedView').empty().append("<option disabled selected value>" + _("Select view") + "</option>");
		views.forEach(function(view, viewIndex){ $('#devicesSelectedView').append("<option value='" + viewIndex + "'>" + view.commonName + "</option>"); });
		$('#devicesSelectedView').select();
		//Reset devicesSelecteView
		devicesSelectedView = -1;
		$('.divDevices').hide();
		$('#devicesPrevView').addClass('disabled');
		if (views.length > 1) $('#devicesNextView').prop('disabled', false); else $('#devicesNextView').prop('disabled', true);
	}

	//Enhance devicesSelectedView-Selectbox with functions
	$('#devicesSelectedView').on('change', function(){
		devicesSelectedView = $('#devicesSelectedView').val();
		if (devicesSelectedView > -1){
			if (!views[devicesSelectedView].devices) views[devicesSelectedView].devices = [];
			//Backward-Compatibility: If BackgroundImageActive not set, set it to the same value, as BackgroundImage
			views[devicesSelectedView].devices.forEach(function(device){
				if (typeof device.nativeBackgroundImageActive == udef && typeof device.nativeBackgroundImage !== udef) device.nativeBackgroundImageActive = device.nativeBackgroundImage;
			});
			//Add Views to Selectbox for LinkedView
			var viewIds = [""];
			views.forEach(function(view, viewIndex){ 
				viewIds.push(view.commonName);
				if(view.devices && view.devices.length) view.devices.forEach(function(device, deviceIndex){
					if(device.nativeHeading) viewIds.push(view.commonName + "#" + deviceIndex + "h/" + view.commonName + "#" + device.nativeHeading.replaceAll("/", "_"));
					//viewIds.push(view.commonName + "#" + deviceIndex + "/" + view.commonName + "#" + deviceIndex + " (" + device.commonName.replaceAll("/", "_") + ")");
				});
			});
			$('*[data-name="nativeLinkedView"]').data("options", viewIds.join(";"));
			//Fill Table
			values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
			$('.divDevicesNothingSelected').hide();
			$('.divDevices').show();
		} else {
			$('.divDevicesNothingSelected').show();
			$('.divDevices').hide();
		}
		if (devicesSelectedView > 0) $('#devicesPrevView').removeClass('disabled'); else $('#devicesPrevView').addClass('disabled');
		if (devicesSelectedView < (views.length - 1)) $('#devicesNextView').removeClass('disabled'); else $('#devicesNextView').addClass('disabled');
	});

	//Enhance prevView and nextView-Buttons with functions
	$('#devicesPrevView, #devicesNextView').on('click', function(){
		var actualViewIndex = parseInt($('#devicesSelectedView').val());
		if (isNaN(actualViewIndex)) actualViewIndex = -1;
		if ($(this).data('role') == "prev" && actualViewIndex > 0){
			$('#devicesSelectedView').val(actualViewIndex - 1).select().trigger('change');
		} else if ($(this).data('role') == "next" && actualViewIndex < (views.length - 1)){
			$('#devicesSelectedView').val(actualViewIndex + 1).select().trigger('change');
		}
	});

	//Enhance TableDevices with functions
	function onTableDevicesReady(){
		$('#tableDevices td').css('vertical-align', 'top');
		var $div = $('#tableDevices');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add Images to Combobox for BackgroundImage
		enhanceTextInputToCombobox('#tableDevices input[data-name="nativeBackgroundImage"], #tableDevices input[data-name="nativeBackgroundImageActive"]', ["/" + _("(None)"), comboboxStrings.progressbars, comboboxStrings.inbuiltWallpapers, comboboxStrings.userImages], true);
		//Add options to combobox for headingOptions
		enhanceTextInputToCombobox('#tableDevices input[data-name="nativeHeadingOptions"]', '/' + _("Normal") + ';CO/' + _("Collapsible section, opened at start") + ';CC/' + _("Collapsible section, closed at start") + ';COC/' + _("Collapsible section, opened at start, closes when others open") + ';CCC/' + _("Collapsible section, closed at start, closes when others open"), false);
		$('#tableDevices input[data-name="nativeHeadingOptions"] .comboboxDropdownTriggerArrow').css('opacity', 0);
		//Add role and symblic link info as span to commonName
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonName') {
				var deviceIndex = $(this).data('index');
				if (typeof views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom == "object" && typeof views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView != udef && views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView !== "" && typeof views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice != udef && views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice !== ""){ //Symbolic link
					$(this).next('span').remove();
					var deviceNumber = parseInt(views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice) + 1;
					//1st 2nd 3rd 4th...
					var deviceNumberString = (deviceNumber == 1 ? _("1st") : (deviceNumber == 2 ? _("2nd") : (deviceNumber == 3 ? _("3rd") : _("%sth", deviceNumber))));
					$(this).after('<span style="font-size:x-small; color: blue; text-decoration: underline; cursor: pointer;" onclick="devicesMarkDevice = ' +  (deviceNumber - 1) + '; $(\'#devicesSelectedView\').val(' + views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView + ').select().trigger(\'change\');">' + _('Linked from view') + ' ' + views[views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView].commonName + ', ' + deviceNumberString  + ' ' + _('device') + ' ' + ' (' + views[views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceView].devices[views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom.sourceDevice].commonName + ')</span>');
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
					if (destinations.length > 0) {
						var destinationInThisView = false;
						destinations.forEach(function(destination){
							if (destination.view == _viewIndex) {
								destinationInThisView = true;
							}
						});
						if (destinationInThisView) values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
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
				if (views[devicesSelectedView].devices[deviceIndex].symbolicLinkFrom){ //Edit - Symbolic link
					$(this).addClass('dark grey').find('i').html('control_point_duplicate');
					$(this).on('click', function () {
						var _viewIndex = devicesSelectedView;
						var _deviceIndex = $(this).data('index');
						var result = confirm(_("Convert symbolic link to real device?"));
						if (result){
							delete views[_viewIndex].devices[_deviceIndex].symbolicLinkFrom;
							values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
						}
					});
				} else { //Edit - Normal device
					$(this).off('click').on('click', function () {
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
							views[_viewIndex].devices[_deviceIndex].tileSettings = dialogDeviceEditTileSettings;
							updateSymbolicLinks();
							onTableDevicesReady();
						}, function(){ //init dialog function
							$('#dialogDeviceEditCommonName').html(views[_viewIndex].devices[_deviceIndex].commonName || "");
							$('#dialogDeviceEditViewIndex').val(_viewIndex);
							$('#dialogDeviceEditDeviceIndex').val(_deviceIndex);
							dialogDeviceEditStates = views[_viewIndex].devices[_deviceIndex].states || [];
							dialogDeviceEditStatesTable = [];
							dialogDeviceEditOptions = JSON.parse(JSON.stringify(views[_viewIndex].devices[_deviceIndex].options || []));
							$('#dialogDeviceEditOptionsContent').empty();
							dialogDeviceEditTileSettings = JSON.parse(JSON.stringify(views[_viewIndex].devices[_deviceIndex].tileSettings || {}));
							if (views[_viewIndex].devices[_deviceIndex].commonRole) {
								dialogDeviceEditCommonRole = views[_viewIndex].devices[_deviceIndex].commonRole;
								$('#dialogDeviceEditCommonRole').val(dialogDeviceEditCommonRole).trigger('change');
							} else {
								dialogDeviceEditCommonRole = null;
								$('#dialogDeviceEditCommonRole').val(-1).trigger('change');
							}
							$('#dialogDeviceEditCommonRole').select();
							$('#dialogDeviceEdit .btn-preview, #dialogDeviceEditStateConstant .btn-preview, #dialogDeviceEditStateArray .btn-preview').data('preview-render-view', "iqontrol." + instance + ".Views." + views[_viewIndex].commonName);
						});
					});
				}
			}
			//Copy Device
			if (command === 'content_copy') {
				$(this).find('i').html('content_copy');
				$(this).on('click', function (event) {
					$('#devicesCopyFromButton').trigger('click', [devicesSelectedView, $(this).data('index')]);
				});
			}
			//Delete Device
			if (command === 'delete') {
				$(this).on('click', function (event) {
					var _viewIndex = devicesSelectedView;
					var _deviceIndex = $(this).data('index');
					var changedSymbolicLinks = changeSymbolicLinks(_viewIndex, _deviceIndex, null, null);
					if (changedSymbolicLinks.length > 0) {
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
					if (i != sequence[i]) {
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
		//Mark device
		if (devicesMarkDevice != null){
			$('#tableDevices tr[data-index=' + devicesMarkDevice + ']').addClass('marked');
			scrollTo($('#tableDevices tr[data-index=' + devicesMarkDevice + ']').get(0));
			devicesMarkDevice = null;
		}
	}

	//---------- Device Edit ----------
	//Enhance dialogDeviceEditCommonRole-Selectbox with functions
	$('#dialogDeviceEditCommonRole').on('change', function(){
		var viewIndex =   $('#dialogDeviceEditViewIndex').val();
		var deviceIndex = $('#dialogDeviceEditDeviceIndex').val();
		var dialogDeviceEditOldCommonRole = dialogDeviceEditCommonRole || null;
		dialogDeviceEditCommonRole = $('#dialogDeviceEditCommonRole').val();
		//Icon
		let iconSrc = iQontrolRoles[dialogDeviceEditCommonRole] && iQontrolRoles[dialogDeviceEditCommonRole].icon ? previewLink + iQontrolRoles[dialogDeviceEditCommonRole].icon : "";
		if(iconSrc) $('.dialogDeviceEditCommonRoleIcon').attr('src', iconSrc).show(); else $('.dialogDeviceEditCommonRoleIcon').hide();
		//States
		if (typeof dialogDeviceEditStatesTable == 'object') dialogDeviceEditStatesTable.forEach(function(entry){ //save the table entrys before bulding the new states table
			var index = dialogDeviceEditStates.findIndex(function(element){ return element.state == entry.state;});
			if (index == -1) {
				dialogDeviceEditStates.push(entry);
			} else {
				dialogDeviceEditStates[index] = entry;
			}
		});
		dialogDeviceEditStatesTable = [];
		if (dialogDeviceEditCommonRole){ //build states table
			//Get defaultDeviceStates for role and then add userDefined deviceStates
			var stateList = iQontrolRoles[dialogDeviceEditCommonRole].deviceStatesDisplaySequence;
			dialogDeviceEditStates.forEach(function(deviceState){
				if(stateList.indexOf(deviceState.state) == -1 && deviceState.state.value && deviceState.state != "") stateList.push(deviceState.state);
			});
			stateList.forEach(function(stateName){ //push all corresponding states for the selected role into the table 
				var state = dialogDeviceEditStates.find(function(element){ return element.state == stateName;}) || {};
				var tableRow = {
					'state': 			stateName,
					'groupName': 		state.groupName || iQontrolRoles[dialogDeviceEditCommonRole].deviceStates && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName] && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName].groupName  || _("Additional States"),
					'description': 		state.description || iQontrolRoles[dialogDeviceEditCommonRole].deviceStates && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName] && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName].description  || "", 
					'commonType': 		state.commonType || iQontrolRoles[dialogDeviceEditCommonRole].deviceStates && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName] && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName].commonType || "string",
					'commonRole': 		state.commonRole || iQontrolRoles[dialogDeviceEditCommonRole].deviceStates && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName] && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName].commonRole || "linkedState",
					'arrayKeys': 		state.arrayKeys || iQontrolRoles[dialogDeviceEditCommonRole].deviceStates && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName] && iQontrolRoles[dialogDeviceEditCommonRole].deviceStates[stateName].defaultArrayCols || {elementOptions: {}, elementStates: {}},
					'value':			state.value || ""
				};
				dialogDeviceEditStatesTable.push(tableRow);
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
		//TileSettings
		dialogDeviceEditTileSettings.tileClass = typeof dialogDeviceEditTileSettings.tileClass != 'undefined' && (dialogDeviceEditTileSettings.tileClass != (iQontrolRoles[dialogDeviceEditOldCommonRole]?.tileSettings?.tileClass || -1)) ? dialogDeviceEditTileSettings.tileClass : iQontrolRoles[dialogDeviceEditCommonRole]?.tileSettings?.tileClass || -1; //if old settings differs from role´s default: keep it. Otherwise take default from new role
		dialogDeviceEditTileSettings.tileClassActive = typeof dialogDeviceEditTileSettings.tileClassActive != 'undefined' && (dialogDeviceEditTileSettings.tileClassActive != (iQontrolRoles[dialogDeviceEditOldCommonRole]?.tileSettings?.tileClassActive || -1)) ? dialogDeviceEditTileSettings.tileClassActive : iQontrolRoles[dialogDeviceEditCommonRole]?.tileSettings?.tileClassActive || -1; //if old settings differs from role´s default: keep it. Otherwise take default from new role
		dialogDeviceEditTileSettings.tileClassEnlarged = typeof dialogDeviceEditTileSettings.tileClassEnlarged != 'undefined' && (dialogDeviceEditTileSettings.tileClassEnlarged != (iQontrolRoles[dialogDeviceEditOldCommonRole]?.tileSettings?.tileClassEnlarged || -1)) ? dialogDeviceEditTileSettings.tileClassEnlarged : iQontrolRoles[dialogDeviceEditCommonRole]?.tileSettings?.tileClassEnlarged || -1; //if old settings differs from role´s default: keep it. Otherwise take default from new role
		dialogDeviceEditTileSettings.tileClassActiveEnlarged = typeof dialogDeviceEditTileSettings.tileClassActiveEnlarged != 'undefined' && (dialogDeviceEditTileSettings.tileClassActiveEnlarged != (iQontrolRoles[dialogDeviceEditOldCommonRole]?.tileSettings?.tileClassActiveEnlarged || -1)) ? dialogDeviceEditTileSettings.tileClassActiveEnlarged : iQontrolRoles[dialogDeviceEditCommonRole]?.tileSettings?.tileClassActiveEnlarged || -1; //if old settings differs from role´s default: keep it. Otherwise take default from new role
		if(!dialogDeviceEditTileSettings.elements) { //no tileSettings present - use role Settings
			dialogDeviceEditTileSettings.elements = [];
			(iQontrolRoles[dialogDeviceEditCommonRole] && iQontrolRoles[dialogDeviceEditCommonRole].tileSettings.elements || []).forEach(function(roleElement, roleElementIndex){
				dialogDeviceEditTileSettings.elements[roleElementIndex] = Object.assign({}, roleElement);
			});	
		} else { //tileSettigs present
			if(dialogDeviceEditOldCommonRole != dialogDeviceEditCommonRole){ //Role has changed
				//Check if the tileSettings elements match the old roleSettings elements
				let allMatches = true;
				dialogDeviceEditTileSettings.elements.forEach(function(tileElement, tileElementIndex){
					if(!allMatches) return;
					oldRoleElementIndex = iQontrolRoles[dialogDeviceEditCommonRole] && iQontrolRoles[dialogDeviceEditCommonRole].tileSettings && iQontrolRoles[dialogDeviceEditCommonRole].tileSettings.elements && iQontrolRoles[dialogDeviceEditCommonRole].tileSettings.elements.findIndex(function(element){ return element.commonName == tileElement.commonName; });
					if(oldRoleElementIndex > -1 && !objectsEqual(tileElement, iQontrolRoles[dialogDeviceEditCommonRole].tileSettings.elements[oldRoleElementIndex])){ //settings were previously changed (= differ from oldRoleSettings)
						allMatches = false;
					} 
				});
				if(allMatches || !confirm(_("There are modified tile settings that differ from the default role settings. Try to merge them with the new default role settings? Otherwise your changes will be lost and the new defaults are used."))){ //no merge - simply overwrite with new role settings
					dialogDeviceEditTileSettings.elements = JSON.parse(JSON.stringify(iQontrolRoles[dialogDeviceEditCommonRole].tileSettings.elements || []));
				} else { //Merge
					let newTileElements = [];
					let tileElementProcessedIndex = -1; //Index that shows the last processed Element of the existing tile settings
					(iQontrolRoles[dialogDeviceEditCommonRole] && iQontrolRoles[dialogDeviceEditCommonRole].tileSettings.elements || []).forEach(function(roleElement, roleElementIndex){ //Go through all new role elements
						tileElementIndex = dialogDeviceEditTileSettings.elements.findIndex(function(element){ return element.commonName == roleElement.commonName; });
						if(tileElementIndex == -1){//New role setting does not exist in old tile settings - just push new role setting
							newTileElements.push(roleElement);
						} else { //New role setting exists also in old tile setting
							//push all not yet processed Elements before tileElementIndex
							for(let i = tileElementProcessedIndex + 1; i < tileElementIndex; i++){
								newTileElements.push(dialogDeviceEditTileSettings.elements[i]);
							}
							//for tileElementIndex check, if settings were previously changed (= differ from oldRoleSettings)
							oldRoleElementIndex = iQontrolRoles[dialogDeviceEditOldCommonRole] && iQontrolRoles[dialogDeviceEditOldCommonRole].tileSettings && iQontrolRoles[dialogDeviceEditOldCommonRole].tileSettings.elements && iQontrolRoles[dialogDeviceEditOldCommonRole].tileSettings.elements.findIndex(function(element){ return element.commonName == dialogDeviceEditTileSettings.elements[tileElementIndex].commonName; });
							if(objectsEqual(dialogDeviceEditTileSettings.elements[tileElementIndex], iQontrolRoles[dialogDeviceEditOldCommonRole].tileSettings.elements[oldRoleElementIndex])){ //Setting was not changed - push new role setting
								newTileElements.push(roleElement);
							} else { //Setting was changed - ask what to do
								if(confirm(_("The tile Element %s was changed by user. Keep your modified settings? Otherwise this element will be overwritten with new default settings.", dialogDeviceEditTileSettings.elements[tileElementIndex].commonName))){ //keep
									newTileElements.push(dialogDeviceEditTileSettings.elements[tileElementIndex]);
								} else { //overwrite
									newTileElements.push(roleElement);
														
								}
							}
							tileElementProcessedIndex = tileElementIndex;
						}
					});
					//Add not yet processed Elements (that are missing in new role settings)
					for(let i = tileElementProcessedIndex + 1; i < dialogDeviceEditTileSettings.elements.length; i++){
						newTileElements.push(dialogDeviceEditTileSettings.elements[i]);
					}
					//Save new settings
					dialogDeviceEditTileSettings.elements = JSON.parse(JSON.stringify(newTileElements));		
				}
			}
		}
		dialogDeviceEditTileSettingsInit();
	});

	//---------- Device Edit - States ----------
	//Enhance tableDialogDeviceEditStates with functions
	function ontableDialogDeviceEditStatesReady(){
		$('#tableDialogDeviceEditStates td').css('vertical-align', 'top');
		var $div = $('#tableDialogDeviceEditStates');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		var lastGroupName = "";
		//Make State Readonly, add id for selectId-Dialog and convert arrays to string
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'state') {
				$(this).prop('readonly', true);
				var description = $(this).parents('tr').find('input[data-name="description"]').val() || "&nbsp;";
				$(this).after('<span style="font-size:x-small;">' + _(description) + '</span>');
				var groupName = $(this).parents('tr').find('input[data-name="groupName"]').val();
				if(groupName && groupName != "" && groupName != lastGroupName){
					var colCount = $(this).parents('tr').find('td').length;
					$(this).parents('tr').before('<tr class="newGroup"><td colspan="' + colCount + '"><span class="groupHeading">' + groupName + ':</span></td></tr>');
					lastGroupName = groupName;
				}
			}
			if (name === 'value') {
				var stateIndex = $(this).data('index');
				if(typeof dialogDeviceEditStatesTable[stateIndex].value == 'object'){
					$(this).addClass('object');
					$(this).val(JSON.stringify(dialogDeviceEditStatesTable[stateIndex].value));
				}
				$(this).prop('id', 'tableDialogDeviceEditStatesValue_' + stateIndex);
				$(this).on('input change', function(){
					if($(this).hasClass('object')){
						var _stateIndex = $(this).data('index');
						var valObj = tryParseJSON($(this).val());
						if(valObj) dialogDeviceEditStatesTable[stateIndex].value = valObj;
					}
					tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);
				});
			}
		});
		//Collect Views
		var viewIds = ["/"];
		views.forEach(function(element){ viewIds.push(adapter + "." + instance + ".Views." + element.commonName + "/" + element.commonName); });	
		//Type
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonType') {
				var stateIndex = $(this).data('index');
				$(this).on('input change', function(){
					if($(this).val() == 'array'){
						$(this).parents('tr').find('select[data-name="commonRole"]').val('const').prop('disabled', true).trigger('change').select();
					} else {
						$(this).parents('tr').find('select[data-name="commonRole"]').prop('disabled', false).trigger('change').select();
					}
				});
			}
		});
		//Role
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonRole') {
				var stateIndex = $(this).data('index');
				$(this).on('input change', function(){
					tableDialogDeviceEditStatesEnhanceEditCustom(stateIndex);
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						//Show or hide selectboxes and colorpickers
						var _stateIndex = stateIndex;
						var $targetInput = $('#tableDialogDeviceEditStatesValue_' + _stateIndex);
						if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const'){//const
							if (dialogDeviceEditStatesTable[stateIndex].commonType == "color"){ //const + COLOR - init ColorPicker
								//Hide selectbox handle
								$targetInput.next("a.comboboxDropdownTrigger").prop('style','display: none !important;');
								//Init colorpicker
								var oldVal = $targetInput.val();
								if (!$targetInput.data('materialize-color-picker-initialized')){
									$targetInput.colorpicker().on('changeColor', function(event){
										if (event.color) $(this).css('border-right', '10px solid rgba(' + event.color.toRGB().r + ', ' + event.color.toRGB().g + ', ' + event.color.toRGB().b + ', ' + event.color.toRGB().a + ')');
									});
									if (oldVal == "") $targetInput.val("");
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
								if (isValidColorString(oldVal)){
									$targetInput.trigger('change');
								}
							} else { //const, but no color
								//Destroy colorpicker
								if ($targetInput.data('materialize-color-picker-initialized')){
									$targetInput.colorpicker('destroy');
									$targetInput.data('materialize-color-picker-initialized', false);
								}
								$targetInput.css('border-right', '0px solid black');
								if (dialogDeviceEditStatesTable[stateIndex].commonType == "url"){ //const + URL - init Combobox
									//Show selectbox handle
									$targetInput.next("a.comboboxDropdownTrigger").prop('style','');
									enhanceTextInputToCombobox('#tableDialogDeviceEditStatesValue_' + _stateIndex, ["/" + _("(None)"), comboboxStrings.inbuiltWidgets, comboboxStrings.userWidgets], true, dialogDeviceEditStatesWidgetSelected);
								} else if (dialogDeviceEditStatesTable[stateIndex].commonType == "view"){ //const + VIEW - init Combobox
									//Show selectbox handle
									$targetInput.next("a.comboboxDropdownTrigger").prop('style','');
									enhanceTextInputToCombobox('#tableDialogDeviceEditStatesValue_' + _stateIndex, viewIds, false, function(value){
										if (value && value != "" && !$(".dialogDeviceEditOption[data-option='backgroundURLAllowPostMessage']").prop('checked')){
											if (confirm(_("Its recommended to allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML. Enable this option now?"))){
												$(".dialogDeviceEditOption[data-option='backgroundURLAllowPostMessage']").prop('checked', true).trigger('change');
											}
										}
									});	
								} else if (dialogDeviceEditStatesTable[stateIndex].commonType == "icon"){ //const + ICON - init Combobox
									//Show selectbox handle
									$targetInput.next("a.comboboxDropdownTrigger").prop('style','');
									//Create Icon List
									var iconsString = "[" + _("Default Icon") + ":]";
						/* ######	iconsString += ";/" + _("(Default)") + "/" + (previewLink + "/" + ((optionsLayoutDefaultIcons[dialogDeviceEditCommonRole] && optionsLayoutDefaultIcons[dialogDeviceEditCommonRole][entry]) || (optionsLayoutDefaultIconsStandard[dialogDeviceEditCommonRole] && optionsLayoutDefaultIconsStandard[dialogDeviceEditCommonRole][entry]) || "")).replace(/\//g, "\\");
									var typicalIcons = [];
									for (iconPreset in iconPresets){
										for (typicalIconEquivalent in iQontrolRoles[dialogDeviceEditCommonRole].iconsString[entry].typicalIconEquivalents){
											for (icon in iconPresets[iconPreset].iconEquivalents[iQontrolRoles[dialogDeviceEditCommonRole].iconsString[entry].typicalIconEquivalents[typicalIconEquivalent]]) {
												typicalIcons.push(iconPresets[iconPreset].iconEquivalents[iQontrolRoles[dialogDeviceEditCommonRole].iconsString[entry].typicalIconEquivalents[typicalIconEquivalent]][icon]);
											};
										};
									};
									if (typicalIcons.length) {
										iconsString += ";[" + _("Typical Icons") + ":]";
										typicalIcons.forEach(function(typicalIcon, index){
											if (typicalIcon != "") iconsString += ";" + typicalIcon.replace(/\//g, "\\") + "/" + typicalIcon.replace(/\//g, "\\");
										});						
										
									} */
									enhanceTextInputToCombobox('#tableDialogDeviceEditStatesValue_' + _stateIndex, ["/", comboboxStrings.blankIcon, comboboxStrings.progressbars, comboboxStrings.inbuiltIcons, comboboxStrings.userIcons], true);
								} else { //const + STRING
									//Hide selectbox handle
									$targetInput.next("a.comboboxDropdownTrigger").prop('style','display: none !important;');
								}
							}
						} else { //LinkedState or Calculation
							//Hide selectbox handle
							$targetInput.next("a.comboboxDropdownTrigger").prop('style','display: none !important;');
							//Destroy colorpicker
							if ($targetInput.data('materialize-color-picker-initialized')){
								$targetInput.colorpicker('destroy');
								$targetInput.data('materialize-color-picker-initialized', false);
							}
							$targetInput.css('border-right', '0px solid black');
						}
						if (dialogDeviceEditStatesTable[stateIndex].commonType == 'array') $targetInput.addClass('array').prop('readonly', true); else $targetInput.removeClass('array').prop('readonly', false);
					})(); //<--End Closure
				}).trigger('change');
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
					var stateValue = (dialogDeviceEditStatesTable[stateIndex].value || "");
					if(typeof stateValue == "string") stateValue = stateValue.replace(/\\n/g, '\n');
					if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const'
					&& dialogDeviceEditStatesTable[stateIndex].commonType == 'url'
					&& (stateValue.indexOf("./images/widgets/") == 0 || stateValue.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0)){ //const + URL + WIDGET - open Widget dialog				
						(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
							var _stateValue = stateValue;
							getWidgetSettings(_stateValue,  true, dialogDeviceEditOptions, false, function(result){
								var _stateIndex = stateIndex;
								var _stateValue = stateValue;
								if (result.url) {
									$('#tableDialogDeviceEditStatesValue_' + stateIndex).val(result.url).trigger('change');
								}
								for(option in result.options){
									if (iQontrolRoles["iQontrolWidget"].options[option]){
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
					} else if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'const' && dialogDeviceEditStatesTable[stateIndex].commonType == 'color'){ //const + COLOR - open Colorpicker
						var $targetInput = $('#tableDialogDeviceEditStatesValue_' + stateIndex);
						if ($targetInput.data('materialize-color-picker-initialized')){
							$targetInput.colorpicker('show');
						}
					} else if (dialogDeviceEditStatesTable[stateIndex].commonType == 'array') { //const + array - open editArray dialog
						initDialog('dialogDeviceEditStateArray', function(){ //save dialog
							var stateIndex = $('#dialogDeviceEditStateArrayIndex').val();
							var newVal = {cols: $('#tableDialogDeviceEditStateArray').data('cols'), values: dialogDeviceEditStateArrayTable};
							$('#tableDialogDeviceEditStatesValue_' + stateIndex).val(JSON.stringify(newVal)).trigger('change');
						}, function(){ //init dialog function 
							$('#dialogDeviceEditStateArrayName').html(dialogDeviceEditStatesTable[stateIndex].state || "");
							var _viewIndex =   $('#dialogDeviceEditViewIndex').val();
							var _deviceIndex = $('#dialogDeviceEditDeviceIndex').val();
							$('#dialogDeviceEditStateArrayIndex').val(stateIndex);
							dialogDeviceEditStateArrayValue = tryParseJSON(dialogDeviceEditStatesTable[stateIndex].value) || {cols: [], values: []};
							$('#tableDialogDeviceEditStateArray').data('cols', dialogDeviceEditStateArrayValue.cols || []);
							dialogDeviceEditStateArrayTable = dialogDeviceEditStateArrayValue.values || [];
							if (dialogDeviceEditStatesTable[stateIndex].state.indexOf("INFO_") == 0) $('#dialogDeviceEditStateArray .btn-preview').data('preview-open-dialog', false); else $('#dialogDeviceEditStateArray .btn-preview').data('preview-open-dialog', "iqontrol." + instance + ".Views." + views[_viewIndex].commonName + ".devices." + _deviceIndex); //########
							dialogDeviceEditStateArrayCreateCols();
						});
					} else if(dialogDeviceEditStatesTable[stateIndex].commonRole == 'linkedState'){ //linkedState - open selectID dialog
						$('#dialogSelectId').data('selectidfor', 'tableDialogDeviceEditStatesValue_' + stateIndex);
						initSelectId(function (sid) {
							sid.selectId('show', $('#tableDialogDeviceEditStatesValue_' + stateIndex).val(), {type: 'state'}, function (newId) {
								if (newId) {
									$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
								}
							});
						});
					} else { //string - open editText dialog
						initDialog('dialogDeviceEditStateConstant', function(){ //save dialog
							var stateIndex = $('#dialogDeviceEditStateConstantIndex').val();
							$('#tableDialogDeviceEditStatesValue_' + stateIndex).val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n')).trigger('change');
						}, function(){ //init dialog function 
							$('#dialogDeviceEditStateConstantName').html(dialogDeviceEditStatesTable[stateIndex].state || "");
							$('#dialogDeviceEditStateConstantIndex').val(stateIndex);
							$('#dialogDeviceEditStateConstantTextarea').val(($('#tableDialogDeviceEditStatesValue_' + stateIndex).val() || "").replace(/\\n/g, '\n'));
							$('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
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
		var toDo = function(){
			if (dialogDeviceEditStatesTable[stateIndex].commonRole == 'linkedState') { //linkedState
				var stateId = $('#tableDialogDeviceEditStatesValue_' + stateIndex).val();
				var stateObject = iobrokerObjects[stateId];
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
		if (iobrokerObjectsReady) {
			toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(toDo);
		}
	}
	function dialogDeviceEditStatesWidgetSelected(value){
		getWidgetSettings(value, true, dialogDeviceEditOptions, true, function(result){
			if (result.url) {
				$enhanceTextInputToComboboxActualTarget.val(result.url).trigger('change');
			}
			for(option in result.options){
				if (iQontrolRoles["iQontrolWidget"].options[option]){
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

	//---------- Device Edit - States - Array ----------
	//Enhance tableDialogDeviceEditStateArrayReady
	function ontableDialogDeviceEditStateArrayReady(){
		var $div = $('#tableDialogDeviceEditStateArray');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add id for selectId-Dialog
		$lines.find('input[data-name]').each(function() {
			var name = $(this).data('name');
			var arrayIndex = $(this).data('index');
			var nameEscaped = escape(name).replace(/\%/g, '_'); // `%` is not allowed in jquery-selectors...
			var $th = $table.find('thead tr th').filter(function(){ return $(this).data('name') == name; }); //[data-selector] won't work for attributes setted by .data('','')
			var commonType = $th.data('commonType');
			if (commonType == 'string' || commonType == 'icon' || commonType == 'color' || commonType == 'view' || commonType == 'url') {
				$(this).prop('id', 'tableDialogDeviceEditStateArrayValue_' + nameEscaped + '_' + arrayIndex);		
				$(this).css('width', 'calc(100% - 75px)')
				.after('<a data-name="' + nameEscaped + '" data-index="' + arrayIndex + '" data-command="openCustom" class="values-buttons btn-floating btn-small waves-effect waves-light"><i class="material-icons">build</i></a>')
				.after('<a data-name="' + nameEscaped + '" data-index="' + arrayIndex + '" data-command="edit" class="values-buttons btn-floating btn-small waves-effect waves-light"><i class="material-icons">edit</i></a>');
				$(this).on('input change', function(){tableDialogDeviceEditStateArrayEnhanceEditCustom(nameEscaped, arrayIndex);});
			}
		});
		//Collect Views
		var viewIds = ["/"];
		views.forEach(function(element){ viewIds.push(adapter + "." + instance + ".Views." + element.commonName + "/" + element.commonName); });	
		//Show or hide selecboxes and colorpickers
		$lines.find('select[data-name]').each(function() {
			var name = $(this).data('name');
			var arrayIndex = $(this).data('index');
			var nameEscaped = escape(name).replace(/\%/g, '_'); // `%` is not allowed in jquery-selectors...
			var $th = $table.find('thead tr th').filter(function(){ return $(this).data('name') == name; }); //[data-selector] won't work for attributes setted by .data('','')
			var commonType = $th.data('commonType');
			var commonRole = $(this).val();
			var that = this;
			if(commonType == "commonRole"){
				$(this).on('change', function(){
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						var _that = that;
						var dataFor = $th.data('for');
						var $targetInput = dataFor && dataFor != "" && $(_that).parents('tr').find('input').filter(function(){ return $(this).data('name') == dataFor; }); //[data-selector] won't work for attributes setted by .data('','');
						var targetArrayIndex = $targetInput.data('index'); 
						var targetNameEscaped = escape($targetInput.data('name')).replace(/\%/g, '_'); // `%` is not allowed in jquery-selectors...; 
						var $argetTh = $table.find('thead tr th').filter(function(){ return $(this).data('name') == dataFor; }); //[data-selector] won't work for attributes setted by .data('','')
						var targetCommonType = $argetTh.data('commonType');
						if ($(_that).val() == 'const'){//const
							if (targetCommonType == "color"){ //const + COLOR - init ColorPicker
								//Hide selectbox handle
								$targetInput.next("a.comboboxDropdownTrigger").prop('style','display: none !important;');
								//Init colorpicker
								var oldVal = $targetInput.val();
								if (!$targetInput.data('materialize-color-picker-initialized')){
									$targetInput.colorpicker().on('changeColor', function(event){
										if (event.color) $(this).css('border-right', '10px solid rgba(' + event.color.toRGB().r + ', ' + event.color.toRGB().g + ', ' + event.color.toRGB().b + ', ' + event.color.toRGB().a + ')');
									});
									if (oldVal == "") $targetInput.val("");
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
								if (isValidColorString(oldVal)){
									$targetInput.trigger('change');
								}
							} else { //const, but no color
								//Destroy colorpicker
								if ($targetInput.data('materialize-color-picker-initialized')){
									$targetInput.colorpicker('destroy');
									$targetInput.data('materialize-color-picker-initialized', false);
								}
								$targetInput.css('border-right', '0px solid black');
								if (targetCommonType== "url"){ //const + URL - init Combobox
									//Show selectbox handle
									$targetInput.next("a.comboboxDropdownTrigger ").prop('style','');
									enhanceTextInputToCombobox('#tableDialogDeviceEditStateArrayValue_' + targetNameEscaped + '_' + targetArrayIndex, ["/" + _("(None)"), comboboxStrings.inbuiltWidgets, comboboxStrings.userWidgets], true, dialogDeviceEditStatesWidgetSelected);
								} else if (targetCommonType == "view"){ //const + VIEW - init Combobox
									//Show selectbox handle
									$targetInput.next("a.comboboxDropdownTrigger ").prop('style','');
									enhanceTextInputToCombobox('#tableDialogDeviceEditStateArrayValue_' + targetNameEscaped + '_' + targetArrayIndex, viewIds, false, function(value){
										if (value && value != "" && !$(".dialogDeviceEditOption[data-option='backgroundURLAllowPostMessage']").prop('checked')){
											if (confirm(_("Its recommended to allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML. Enable this option now?"))){
												$(".dialogDeviceEditOption[data-option='backgroundURLAllowPostMessage']").prop('checked', true).trigger('change');
											}
										}
									});	
								} else if (targetCommonType == "icon"){ //const + ICON - init Combobox
									//Show selectbox handle
									$targetInput.next("a.comboboxDropdownTrigger").prop('style','');
									//Create Icon List
									var iconsString = "[" + _("Default Icon") + ":]";
						/* ######	iconsString += ";/" + _("(Default)") + "/" + (previewLink + "/" + ((optionsLayoutDefaultIcons[dialogDeviceEditCommonRole] && optionsLayoutDefaultIcons[dialogDeviceEditCommonRole][entry]) || (optionsLayoutDefaultIconsStandard[dialogDeviceEditCommonRole] && optionsLayoutDefaultIconsStandard[dialogDeviceEditCommonRole][entry]) || "")).replace(/\//g, "\\");
									var typicalIcons = [];
									for (iconPreset in iconPresets){
										for (typicalIconEquivalent in iQontrolRoles[dialogDeviceEditCommonRole].iconsString[entry].typicalIconEquivalents){
											for (icon in iconPresets[iconPreset].iconEquivalents[iQontrolRoles[dialogDeviceEditCommonRole].iconsString[entry].typicalIconEquivalents[typicalIconEquivalent]]) {
												typicalIcons.push(iconPresets[iconPreset].iconEquivalents[iQontrolRoles[dialogDeviceEditCommonRole].iconsString[entry].typicalIconEquivalents[typicalIconEquivalent]][icon]);
											};
										};
									};
									if (typicalIcons.length) {
										iconsString += ";[" + _("Typical Icons") + ":]";
										typicalIcons.forEach(function(typicalIcon, index){
											if (typicalIcon != "") iconsString += ";" + typicalIcon.replace(/\//g, "\\") + "/" + typicalIcon.replace(/\//g, "\\");
										});						
										
									} */
									enhanceTextInputToCombobox('#tableDialogDeviceEditStateArrayValue_' + targetNameEscaped + '_' + targetArrayIndex, ["/", comboboxStrings.blankIcon, comboboxStrings.progressbars, comboboxStrings.inbuiltIcons, comboboxStrings.userIcons], true);
								} else { //const + STRING
									//Hide selectbox handle
									$targetInput.next("a.comboboxDropdownTrigger").prop('style','display: none !important;');
								}
							}
						} else { //LinkedState or Calculation
							//Hide selectbox handle
							$targetInput.next("a.comboboxDropdownTrigger").prop('style','display: none !important;');
							//Destroy colorpicker
							if ($targetInput.data('materialize-color-picker-initialized')){
								$targetInput.colorpicker('destroy');
								$targetInput.data('materialize-color-picker-initialized', false);
							}
							$targetInput.css('border-right', '0px solid black');
						}
						if($targetInput.parents('div.combobox').length){
							$targetInput.parents('div.combobox').css('width', 'calc(100% - 75px)').css('float', 'left');
						} else {
							$targetInput.css('width', 'calc(100% - 75px)');
						}
					})(); //<--End Closure
				}).trigger('change');
				$(this).select();
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit (SelectId)
			if (command === 'edit') {
				$(this).on('click', function(){
					var _arrayIndex = $(this).data('index');
					var _nameEscaped = $(this).data('name');
					var $targetInput = $('#tableDialogDeviceEditStateArrayValue_' + _nameEscaped + '_' + _arrayIndex);
					var name = $targetInput.data('name');
					var $targetTh = $table.find('thead tr th').filter(function(){ return $(this).data('name') == name; });
					var commonType = $targetTh.data('commonType');
					var $targetcommonRoleTh = $table.find('thead tr th').filter(function(){ return $(this).data('for') == name; });
					var targetCommonRoleName = $targetcommonRoleTh.data('name');
					var $targetCommonRole = $(this).parents('tr').find('select').filter(function(){ return $(this).data('name') == targetCommonRoleName; });
					var commonRole = $targetCommonRole.val();
					if(commonRole == "linkedState"){ //linkedState
						$('#dialogSelectId').data('selectidfor', 'tableDialogDeviceEditStateArrayValue_' + _nameEscaped + '_' + _arrayIndex);
						initSelectId(function (sid) {
							sid.selectId('show', $('#tableDialogDeviceEditStateArrayValue_' + _nameEscaped + '_' + _arrayIndex).val(), {type: 'state'}, function (newId) {
								if (newId) {
									$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
								}
							});
						});	
					} else if(commonRole == 'const' && commonType == 'color') { //const + color
						if ($targetInput.data('materialize-color-picker-initialized')){
							$targetInput.colorpicker('show');
						}
					} else { //const or calc  $('#tableDialogDeviceEditStateArrayValue_' + _nameEscaped + '_' + _arrayIndex).val()
						initDialog('dialogDeviceEditStateConstant', function(){ //save dialog
							var stateIndex = $('#dialogDeviceEditStateConstantIndex').val();
							$('#tableDialogDeviceEditStateArrayValue_' + stateIndex).val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n')).trigger('change');
						}, function(){ //init dialog function 
							$('#dialogDeviceEditStateConstantName').html($targetTh.html() || "");
							$('#dialogDeviceEditStateConstantIndex').val(_nameEscaped + '_' + _arrayIndex);
							$('#dialogDeviceEditStateConstantTextarea').val(($('#tableDialogDeviceEditStateArrayValue_' + _nameEscaped + '_' + _arrayIndex).val() || "").replace(/\\n/g, '\n'));
							$('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
						});
					}
				});
			}
			//OpenCustom
			if (command === 'openCustom') {
				var arrayIndex = $(this).data('index');
				var nameEscaped = $(this).data('name');
				$(this).prop('id', 'tableDialogDeviceEditStateArrayOpenCustom_' + nameEscaped + '_' + arrayIndex);
				$(this).on('click', function (e) {
					var _arrayIndex = $(this).data('index');
					var _nameEscaped = $(this).data('name');
					var _stateId = $('#tableDialogDeviceEditStateArrayValue_' + _nameEscaped + '_' + _arrayIndex).val();
					if (_stateId != ""){
						var url = window.location.origin + "/#tab-objects/customs/" + _stateId;
						window.open(url);
					}
				});
				tableDialogDeviceEditStateArrayEnhanceEditCustom(nameEscaped, arrayIndex);
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
	function tableDialogDeviceEditStateArrayEnhanceEditCustom(nameEscaped, arrayIndex){
		var toDo = function(){
			var stateId = $('#tableDialogDeviceEditStateArrayValue_' + nameEscaped + '_' + arrayIndex).val();
			var stateObject = iobrokerObjects[stateId];
			if (typeof stateObject != udef) {
				if (typeof stateObject != udef && typeof stateObject.common.custom != udef && stateObject.common.custom != null && typeof stateObject.common.custom[adapter + "." + instance] != udef && stateObject.common.custom[adapter + "." + instance] != null){
					$('#tableDialogDeviceEditStateArrayOpenCustom_' + nameEscaped + '_' + arrayIndex).removeClass('disabled').find('i').removeClass('grey lighten-2').addClass('indigo').html('build');
				} else {
					$('#tableDialogDeviceEditStateArrayOpenCustom_' + nameEscaped + '_' + arrayIndex).removeClass('disabled').find('i').removeClass('indigo lighten-2').addClass('grey').html('build');
				}
			} else {
				$('#tableDialogDeviceEditStateArrayOpenCustom_' + nameEscaped + '_' + arrayIndex).addClass('disabled').find('i').removeClass('indigo').addClass('grey lighten-2').html('build');
			}			
		}
		if (iobrokerObjectsReady) {
			toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(toDo);
		}
	}
	function dialogDeviceEditStateArrayCreateCols(){
		var cols = $('#tableDialogDeviceEditStateArray').data('cols');
		$theadrow = $('#tableDialogDeviceEditStateArray table thead tr');
		$theadrow.html("");
		(cols || []).forEach(function(col, colIndex){
			var $th = $('<th class="translate">' + (col.colheader || col.col || colIndex) + (col.description && col.description != '' ? '<br><span class="small">' + col.description + '</span>' : '') + '</th>').data('name', col.col || colIndex).data('default', col.defaultValue || "").data('commonType', col.commonType || 'string').css('min-width','175px');
			if(col.for && col.for != "") $th.data('for', col.for);
			switch(col.commonType || "string"){
				case "commonRole":
					$th.data('type', 'select').data('options', 'linkedState/State;const/Constant;calc/Calculation');
				break;

				case "checkbox":
					$th.data('type', 'checkbox').css('min-width', '');
				break;
					
				case "icon":
					$th.data('typical-icon-equivalents', col.typicalIconEquivalents || []);
				break;
			}
			$theadrow.append($th);
		});
		$theadrow.append('<th data-buttons="delete drag_handle" style="width:50px;"></th>');
		values2table('tableDialogDeviceEditStateArray', dialogDeviceEditStateArrayTable, onChange, ontableDialogDeviceEditStateArrayReady);
	}

	//---------- Device Edit - Options ----------
	//Build options content
	function dialogDeviceEditOptionsBuildOptionsContent(){
		if (dialogDeviceEditCommonRole){
			var dialogDeviceEditOptionsComboboxes = [];
			var dialogDeviceEditOptionsContent = "<ul class='collapsible' id='dialogDeviceEditOptionsContentCollapsible'>";
			var dialogDeviceEditOptionsContentCollapsibleOpen = false;
			(iQontrolRoles[dialogDeviceEditCommonRole].optionsDisplaySequence || []).forEach(function(entry){ //push all corresponding options for the selected role into the table
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
					
					case "divider":
					dialogDeviceEditOptionsContent += "<div class='divider'></div>";
					break;

					case "number":
					var min = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].min || 0;
					var max = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].max || 100;
					var step = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].step || 1;
					dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
					dialogDeviceEditOptionsContent += "    <input class='dialogDeviceEditOption validate validateOnlyError' data-option='" + entry + "' data-type='number' type='number' min='" + min + "' max='" + max + "' step='" + step + "' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "    <span class='helper-text' data-error='" + min + " - " + max + "' data-success=''></span>";
					dialogDeviceEditOptionsContent += "</div></div>";
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
					dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
					dialogDeviceEditOptionsContent += "    <select" + (type == "multipleSelect" ? " multiple" : "") + " class='dialogDeviceEditOption' data-option='" + entry + "' data-type='select' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'>" + selectOptionsContent + "</select>";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'></label>";
					dialogDeviceEditOptionsContent += "    <span class='translate'>" + _(name) + "</span>";
					dialogDeviceEditOptionsContent += "</div></div>";
					break;
					
					case "combobox":
					var options = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].selectOptions;
					var iconsFromOption = (typeof iQontrolRoles[dialogDeviceEditCommonRole].options[entry].iconsFromOption != udef ? iQontrolRoles[dialogDeviceEditCommonRole].options[entry].iconsFromOption : false)
					dialogDeviceEditOptionsComboboxes.push({id: 'dialogDeviceEditOption_' + entry, options: options, iconsFromOption: iconsFromOption});
					dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
					dialogDeviceEditOptionsContent += "    <input class='dialogDeviceEditOption' data-option='" + entry + "' data-type='combobox' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' placeholder='' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "</div></div>";
					break;

					case "checkbox":
					if (value == "true") value = true;
					if (value == "false") value = false;
					dialogDeviceEditOptionsContent += "<div class='row noMarginBottom'><div class='input-field col s12 m12 l12'>";
					dialogDeviceEditOptionsContent += "    <p><label>";
					dialogDeviceEditOptionsContent += "        <input class='dialogDeviceEditOption filled-in' data-option='" + entry + "' data-type='checkbox' type='checkbox' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "' " + (value?"checked='checked'":"") + " />";
					dialogDeviceEditOptionsContent += "        <span>" + _(name) + "</span>";
					dialogDeviceEditOptionsContent += "    </label></p>";
					dialogDeviceEditOptionsContent += "</div></div>";
					break;


					case "color":
					dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
					dialogDeviceEditOptionsContent += "    <input class='MaterializeColorPicker validate validateOnlyError dialogDeviceEditOption' data-option='" + entry + "' data-type='color' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' placeholder='rgb(0,0,0)' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "    <span class='helper-text'></span>";
					dialogDeviceEditOptionsContent += "</div></div>";
					break;


					case "icon":
					//Default Icons
					switch (entry){
						case "batteryIcon_on": case "unreachIcon_on": case "errorIcon_on":
						var indicator;
						switch (entry) {
							case "batteryIcon_on": 
							indicator = "BATTERY";
							break;

							case "unreachIcon_on": 
							indicator = "UNREACH";
							break;

							case "errorIcon_on":
							indicator = "ERROR";
							break;							
						}
						var options = "[" + _("Default Icon") + ":]";
						options += ";/" + _("(Default)") + "/" + (previewLink + "/" + ((optionsLayoutDefaultIcons[indicator] && optionsLayoutDefaultIcons[indicator][entry]) || (optionsLayoutDefaultIconsStandard[indicator] && optionsLayoutDefaultIconsStandard[indicator][entry]) || "")).replace(/\//g, "\\");
						options += ";[" + _("Typical Icons") + ":]";
						for (iconPreset in iconPresets){
							for (icon in iconPresets[iconPreset].iconEquivalents[indicator]){
								options += ";" + iconPresets[iconPreset].iconEquivalents[indicator][icon].replace(/\//g, "\\") + "/" + iconPresets[iconPreset].iconEquivalents[indicator][icon].replace(/\//g, "\\");
							}
						}
						break;
						
						default:
						var options = "[" + _("Default Icon") + ":]";
						options += ";/" + _("(Default)") + "/" + (previewLink + "/" + ((optionsLayoutDefaultIcons[dialogDeviceEditCommonRole] && optionsLayoutDefaultIcons[dialogDeviceEditCommonRole][entry]) || (optionsLayoutDefaultIconsStandard[dialogDeviceEditCommonRole] && optionsLayoutDefaultIconsStandard[dialogDeviceEditCommonRole][entry]) || "")).replace(/\//g, "\\");
						var typicalIcons = [];
						for (iconPreset in iconPresets){
							for (typicalIconEquivalent in iQontrolRoles[dialogDeviceEditCommonRole].options[entry].typicalIconEquivalents){
								for (icon in iconPresets[iconPreset].iconEquivalents[iQontrolRoles[dialogDeviceEditCommonRole].options[entry].typicalIconEquivalents[typicalIconEquivalent]]) {
									typicalIcons.push(iconPresets[iconPreset].iconEquivalents[iQontrolRoles[dialogDeviceEditCommonRole].options[entry].typicalIconEquivalents[typicalIconEquivalent]][icon]);
								};
							};
						};
						if (typicalIcons.length) {
							options += ";[" + _("Typical Icons") + ":]";
							typicalIcons.forEach(function(typicalIcon, index){
								if (typicalIcon != "") options += ";" + typicalIcon.replace(/\//g, "\\") + "/" + typicalIcon.replace(/\//g, "\\");
							});						
							
						}
					}
					//Blank Icon
					options += ";" + comboboxStrings.blankIcon;
					//Progress-Bars
					options += ";" + comboboxStrings.progressbars;
					//Inbuilt Icons
					options += ";" + comboboxStrings.inbuiltIcons;
					//User Icons
					options += ";" + comboboxStrings.userIcons;
					//Icons Combobox
					dialogDeviceEditOptionsComboboxes.push({id: 'dialogDeviceEditOption_' + entry, options: options});
					dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
					dialogDeviceEditOptionsContent += "    <input class='dialogDeviceEditOption icon' data-option='" + entry + "' data-type='icon' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' placeholder='" + _("(Default)") + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "</div></div>";
					break;
					
					case "datapoint":
					dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
					dialogDeviceEditOptionsContent += "    <input class='dialogDeviceEditOption' data-option='" + entry + "' data-type='text' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "	<a class='dialogDeviceEditOptionButton inputEdit waves-effect waves-light btn-small btn-floating' data-selectidfor='dialogDeviceEditOption_" + entry + "'><i class='material-icons'>edit</i></a>";
					dialogDeviceEditOptionsContent += "</div></div>";
					break;

					case "text": default:
					dialogDeviceEditOptionsContent += "<div class='row'><div class='input-field col s12 m12 l12'>";
					dialogDeviceEditOptionsContent += "    <input class='dialogDeviceEditOption' data-option='" + entry + "' data-type='text' type='text' name='dialogDeviceEditOption_" + entry + "' id='dialogDeviceEditOption_" + entry + "'  value='" + value + "' />";
					dialogDeviceEditOptionsContent += "    <label for='dialogDeviceEditOption_" + entry + "' class='translate'>" + _(name) + "</label>";
					dialogDeviceEditOptionsContent += "</div></div>";
					break;
				}
			});
			if (dialogDeviceEditOptionsContent == ""){
				$('#dialogDeviceEditOptionsContent').html("<br><p>"+ _("This role has no options.") + "</p>");
			} else {
				if (dialogDeviceEditOptionsContentCollapsibleOpen) {
					dialogDeviceEditOptionsContent += "</div>";
					dialogDeviceEditOptionsContent += "</li>";
				}
				dialogDeviceEditOptionsContent += "</ul>";
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
			$('.dialogDeviceEditOption').on('change', onChange);
		}
	}

	//Export and import of device options
	$('#dialogDeviceEditOptionsExport').on('click', function(){
		//Select elements with class=value and build settings object
		var options = {};
		if (dialogDeviceEditCommonRole){
			for (entry in iQontrolRoles[dialogDeviceEditCommonRole].options){ //push all corresponding options for the selected role into the export file
				var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
				var defaultValue = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default;
				var value = (dialogDeviceEditOptions.find(function(element){ return element.option == entry;}) || {}).value || iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default || "";
				if (type != "section") options[entry] = {value: value, isDefaultValue: (value == defaultValue)};
			}
		}
		saveStringAsLocalFile(JSON.stringify(options), "charset=utf-8", "text/json", "deviceoptions.json", true);
	});
	$('#dialogDeviceEditOptionsImport').on('click', function(){
		if (dialogDeviceEditCommonRole){
			loadLocalFileAsString(".json", function(result){
				var resultObj = tryParseJSON(result);
				var resultObjValid = true;
				if (!(resultObj && typeof resultObj == "object" && typeof resultObj.forEach == udef)){
					resultObjValid = false;
				}
				if (resultObjValid) {
					if (confirm(_("Really overwrite existing Settings?"))){
						for (entry in iQontrolRoles[dialogDeviceEditCommonRole].options){ //read all corresponding options for the selected role from the file
							var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
							var defaultValue = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default;
							var value = (resultObj[entry] && typeof resultObj[entry].value != udef ? resultObj[entry].value : iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default || "");
							if (type != "section") (dialogDeviceEditOptions.find(function(element){ return element.option == entry;}) || {}).value = value;
						}
						alert(_("Settings imported."));
						dialogDeviceEditOptionsBuildOptionsContent();
						onChange();
					}
				} else {
					alert(_("Error: Invalid data."));
				}
			});
		} else {
			alert(_("Select Role first"));
		}
	});

	//---------- Device Edit - TileSettings ----------
	var dialogDeviceEditTileSettings = {};
	$('#dialogDeviceEdit ul.tabs li.tab a[href="#tabdialogDeviceEditTileSettings"]').on('click', function(){ //Set Zoom-Level
		setTimeout(function(){ $('.dialogDeviceEditTileSettingsDemoScale').val($('#dialogDeviceEditTileSettingsDemoBackground').width() * 0.0065).trigger('change'); }, 100);
	});	
	//Init TileSettings
	function dialogDeviceEditTileSettingsInit(){
		dialogDeviceEditTileSettings.tileClass = dialogDeviceEditTileSettings.tileClass || 0;
		dialogDeviceEditTileSettings.tileClassActive = dialogDeviceEditTileSettings.tileClassActive || 0;
		dialogDeviceEditTileSettings.tileClassEnlarged = dialogDeviceEditTileSettings.tileClassEnlarged || 0;
		dialogDeviceEditTileSettings.tileClassActiveEnlarged = dialogDeviceEditTileSettings.tileClassActiveEnlarged || 0;
		dialogDeviceEditTileSettings.elements = dialogDeviceEditTileSettings.elements || [];
		$('#dialogDeviceEditTileSettingsDemoShowEnlarged').prop('checked', false);
		$('#dialogDeviceEditTileSettingsDemoShowActive').prop('checked', false);
		//Fill and select dialogDeviceEditTileSettingsTileClass selectbox 
		$('.dialogDeviceEditTileSettingsTileClass').html("");
		$('.dialogDeviceEditTileSettingsTileClass').append(`<option value="-1">${_('Default')}</option>`);
		tileClasses.forEach(function(tileClass, tileClassIndex){
			$('.dialogDeviceEditTileSettingsTileClass').append(`<option value="${tileClassIndex}">${tileClass.commonName || tileClassIndex}</option>`);
		});
		$('#dialogDeviceEditTileSettingsTileClass').val(dialogDeviceEditTileSettings.tileClass);
		$('#dialogDeviceEditTileSettingsTileClassActive').val(dialogDeviceEditTileSettings.tileClassActive);
		$('#dialogDeviceEditTileSettingsTileClassEnlarged').val(dialogDeviceEditTileSettings.tileClassEnlarged);
		$('#dialogDeviceEditTileSettingsTileClassActiveEnlarged').val(dialogDeviceEditTileSettings.tileClassActiveEnlarged);
		$('.dialogDeviceEditTileSettingsTileClass').select();
		dialogDeviceEditTileSettingsUpdateDemo();
		//Elements	
		values2table('tableDialogDeviceEditTileSettingsElements', dialogDeviceEditTileSettings.elements || [], onChange, ontableDialogDeviceEditTileSettingsElementsReady);
	}
	//Enhance dialogDeviceEditTileSettingsTileClass
	$('.dialogDeviceEditTileSettingsTileClass').on('change', function(){
		dialogDeviceEditTileSettings[$(this).data('type')] = $(this).val() || 0;
		$('#dialogDeviceEditTileSettingsDemoShowEnlarged').prop('checked', $(this).data('type') == 'tileClassEnlarged' || $(this).data('type') == 'tileClassActiveEnlarged').trigger('change');
		$('#dialogDeviceEditTileSettingsDemoShowActive').prop('checked', $(this).data('type') == 'tileClassActive' || $(this).data('type') == 'tileClassActiveEnlarged').trigger('change');
	});	
	$('.dialogDeviceEditTileSettingsTileClassContainer').on('click', function(){
		$('#dialogDeviceEditTileSettingsDemoShowEnlarged').prop('checked', $(this).data('type') == 'tileClassEnlarged' || $(this).data('type') == 'tileClassActiveEnlarged').trigger('change');
		$('#dialogDeviceEditTileSettingsDemoShowActive').prop('checked', $(this).data('type') == 'tileClassActive' || $(this).data('type') == 'tileClassActiveEnlarged').trigger('change');
	});
	function dialogDeviceEditTileSettingsUpdateDemo(){
		$('#dialogDeviceEditTileSettingsDemoTile').html('');
		let active = $('#dialogDeviceEditTileSettingsDemoShowActive').prop('checked');
		let enlarged = $('#dialogDeviceEditTileSettingsDemoShowEnlarged').prop('checked');
		//let tileClass = (enlarged ? (dialogDeviceEditTileSettings.tileClassEnlarged > -1 ? dialogDeviceEditTileSettings.tileClassEnlarged : $('#optionsLayoutTilesDefaultClassEnlarged').val()) : (dialogDeviceEditTileSettings.tileClass > -1 ? dialogDeviceEditTileSettings.tileClass : $('#optionsLayoutTilesDefaultClass').val())) || 0;
		let tileClass = 0;
		if(active && enlarged) { 
			tileClass = (dialogDeviceEditTileSettings.tileClassActiveEnlarged > -1 ? dialogDeviceEditTileSettings.tileClassActiveEnlarged : $('#optionsLayoutTilesDefaultClassActiveEnlarged').val()) || 0;
		}
		else if(active) { 
			tileClass = (dialogDeviceEditTileSettings.tileClassActive > -1 ? dialogDeviceEditTileSettings.tileClassActive : $('#optionsLayoutTilesDefaultClassActive').val()) || 0;
		}
		else if(enlarged) { 
			tileClass = (dialogDeviceEditTileSettings.tileClassEnlarged > -1 ? dialogDeviceEditTileSettings.tileClassEnlarged : $('#optionsLayoutTilesDefaultClassEnlarged').val()) || 0;
		}
		else { 
			tileClass = (dialogDeviceEditTileSettings.tileClass > -1 ? dialogDeviceEditTileSettings.tileClass : $('#optionsLayoutTilesDefaultClass').val()) || 0;
		}
		$('.dialogDeviceEditTileSettingsTileClassContainer').removeClass('selected');
		$(`.dialogDeviceEditTileSettingsTileClassContainer[data-type="tileClass${active ? 'Active' : ''}${enlarged ? 'Enlarged' : ''}"]`).addClass('selected');
		//Tile Border radius
		for(let tileOption in tileClasses[tileClass].value.tile || {}){
			if(tileOption.indexOf('border-') == 0 && tileOption.endsWith('-radius')){
				$('#dialogDeviceEditTileSettingsDemoTile').css(tileOption, tileClasses[tileClass].value.tile[tileOption] + (tileClasses[tileClass].value.tile[tileOption + "-unit"] || "px"));
			}
		}
		tileClasses[tileClass].value.stacks.forEach(function(stack, stackIndex){
			dialogDeviceEditTileSettingsAddStack(stackIndex, stack);
		});
	}
	//Enance inputs on Demo tab
	$('.dialogDeviceEditTileSettingsDemoSize').on('input change', function(){
		$('#dialogDeviceEditTileSettingsDemoTile').css($(this).data('mode'), 110 * $(this).val());
	});
	$('.dialogDeviceEditTileSettingsDemoScale').on('input change', function(){
		$('#dialogDeviceEditTileSettingsDemoTile').data('scale', $(this).val()).css('transform', `scale(${$(this).val()})`);
	});
	$('#dialogDeviceEditTileSettingsDemoShowEnlarged, #dialogDeviceEditTileSettingsDemoShowActive').on('change', function(){
		dialogDeviceEditTileSettingsUpdateDemo();
	});
	//Add Stacks
	function dialogDeviceEditTileSettingsAddStack(index, options){
		index = typeof index == "number" ? index : tileClasses[dialogDeviceEditTileSettings.tileClass].value.stacks.length;
		var defaultOptions = {
			name: "Stack " + index,
			horizontalMode: 'left',
			horizontalValue: index * 10,
			horizontalUnit: 'px',
			widthMode: 'normal',
			widthValue: 65,
			widthUnit: 'px',
			verticalMode: 'top',
			verticalValue: index * 10,
			verticalUnit: 'px',
			heightMode: 'normal',
			heightValue: 20,
			heightUnit: 'px'
		};
		options = Object.assign({}, defaultOptions || {}, options);
		//Demo
		var $newStack = $(`<div id="dialogDeviceEditTileSettingsDemoStack_${index}" data-index="${index}" class="dialogDeviceEditTileSettingsDemoStack">${index}<span class="name small"></span></div>`);
		if(index > 0) $newStack.css('background', dialogTileEditorColors[index%dialogTileEditorColors.length]);
		$newStack.on('click', function(){
			var _index = $(this).data('index');
			M.Tabs.getInstance($('#tabdialogDeviceEditTileSettings ul.tabs')).select('tabdialogDeviceEditTileSettingsElementEdit');
			$('#tableDialogDeviceEditTileSettingsElements tbody tr').removeClass('marked');			
			setTimeout(function(){ 
				$(`#tableDialogDeviceEditTileSettingsElements tbody tr`).each(function(){
					if($(this).find('input[data-name="stackIndex"]').val() == _index){
						$(this).addClass('marked');
						scrollTo(this, $(this).parents('.tabcontainer'));
					}
				});
			}, 100);
		});
		$('#dialogDeviceEditTileSettingsDemoTile').append($newStack);
		dialogDeviceEditTileSettingsStyleStack(index, options);
	}
	//Style Stack Demo
	function dialogDeviceEditTileSettingsStyleStack(index, options){
		options = Object.assign({}, options || {});
		$element = $(`.dialogDeviceEditTileSettingsDemoStack[data-index="${index}"]`);
		$element.find('span.name').html(options.name ? '&nbsp;' + options.name : '');
		var cssArray = tileEditorCreateCssPositionsArrayFromOptions(options);
		$element.data('css-array', cssArray);
		(cssArray || []).forEach(function(css){
			$element.css(css.attribute, css.value);
		});
	}
	//Elements
	function ontableDialogDeviceEditTileSettingsElementsReady(){
		var $div = $('#tableDialogDeviceEditTileSettingsElements');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Stack selectbox
		let active = $('#dialogDeviceEditTileSettingsDemoShowActive').prop('checked');
		let enlarged = $('#dialogDeviceEditTileSettingsDemoShowEnlarged').prop('checked');
		let tileClass = 0;
		if(active && enlarged) { 
			tileClass = (dialogDeviceEditTileSettings.tileClassActiveEnlarged > -1 ? dialogDeviceEditTileSettings.tileClassActiveEnlarged : $('#optionsLayoutTilesDefaultClassActiveEnlarged').val()) || 0;
		}
		else if(active) { 
			tileClass = (dialogDeviceEditTileSettings.tileClassActive > -1 ? dialogDeviceEditTileSettings.tileClassActive : $('#optionsLayoutTilesDefaultClassActive').val()) || 0;
		}
		else if(enlarged) { 
			tileClass = (dialogDeviceEditTileSettings.tileClassEnlarged > -1 ? dialogDeviceEditTileSettings.tileClassEnlarged : $('#optionsLayoutTilesDefaultClassEnlarged').val()) || 0;
		}
		else { 
			tileClass = (dialogDeviceEditTileSettings.tileClass > -1 ? dialogDeviceEditTileSettings.tileClass : $('#optionsLayoutTilesDefaultClass').val()) || 0;
		}
		var stackOptions = [];
		tileClasses[tileClass].value.stacks.forEach(function(stack, stackIndex){
			stackOptions.push(stackIndex + "/" + stackIndex + " - " + stack.name);
		});
		enhanceTextInputToCombobox('#tableDialogDeviceEditTileSettingsElements tbody input[data-name="stackIndex"]', stackOptions.join(';'), false, function(value, $target){
			if(!isNaN(value)) value = parseInt(value); else value = -1;
			if(value > 0) $target.css('background-color', dialogTileEditorColors[value%dialogTileEditorColors.length])
		});
		$lines.find('input[data-name="stackIndex"]').on('change', function(){
			let value = $(this).val();
			if(!isNaN(value)) value = parseInt(value); else value = -1;
			if(value > 0) $(this).css('background-color', dialogTileEditorColors[value%dialogTileEditorColors.length])
		}).trigger('change');
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit Element Entry
			if (command === 'edit') {
				var elementIndex = $(this).data('index');
				$(this).on('click', function () {
					var _elementIndex = $(this).data('index');
					initDialog('dialogDeviceEditTileSettingsElementOptions', function(){ //save dialog
						var _elementIndex = $('#dialogDeviceEditTileSettingsElementIndex').val();
						var $tbody = $('#tableDialogDeviceEditTileSettingsElementOptions table tbody');
						var options = [];
						$tbody.find('tr').each(function(){
							var option = {};
							option.option = $(this).data('option').option;
							option.role = $(this).find('td[data-name="role"]').find('select').val();
							var $tdValue = $(this).find('td[data-name="value"]');
							var value;
							switch(option.role){
								case "deviceOption": case "deviceState": case "deviceSetting": case "deviceCondition":
									option.value = $tdValue.find('select').val();
								break;

								case "const": default:
									switch($(this).data('option').type){
										case "checkbox":
											option.value = $tdValue.find('input').prop('checked');
										break;
	
										case "select":
											option.value = $tdValue.find('select').val();
										break;
											
										case "textarea":
											option.value = $tdValue.find('textarea').val();
										break;
	
										case "string": default:
											option.value = $tdValue.find('input').val();
										break;
									}
								break;	
							}
							options.push(option);
						});
						dialogDeviceEditTileSettings.elements[_elementIndex].options = JSON.parse(JSON.stringify(options));
						onChange();
					}, function(){ //init dialog function
						$('#dialogDeviceEditTileSettingsElementOptionsName').html(_(dialogDeviceEditTileSettings.elements[_elementIndex].commonType) + ' ' + dialogDeviceEditTileSettings.elements[_elementIndex].commonName);
						$('#dialogDeviceEditTileSettingsElementIndex').val(_elementIndex);
						var options = JSON.parse(JSON.stringify(uiElementOptions[dialogDeviceEditTileSettings.elements[_elementIndex].commonType] || []));					
						(dialogDeviceEditTileSettings.elements[_elementIndex].options || []).forEach(function(elementOption){
							let index = options.findIndex(function(option){ return option.option == elementOption.option; });
							if(index > -1){
								options[index] = Object.assign({}, options[index], elementOption);
							}
						});
						var $tbody = $('#tableDialogDeviceEditTileSettingsElementOptions table tbody').html('');
						options.forEach(function(option, optionIndex){
							option.optionIndex = optionIndex;
							var $tr = $(`<tr data-optionName="${option.option}" data-type="${option.type}"></tr>`)
							.data('option', option);
							//Col 1: Option
							$(`<td data-name="option"><pre>${option.option}</pre></td>`).appendTo($tr);
							//Col 2: Role
							var $role = $('<select></select>')
							.on('change', function(){ //Role has changed - generate new $value
								let option = $(this).parents('tr').data('option') || {};
								let $targetTd = $(this).parents('tr').find('td[data-name="value"]');
								let newValue;
								if($targetTd.find('input[type="checkbox"]').length){
									newValue = $targetTd.find('input[type="checkbox"]').prop('checked');
								} else if($targetTd.find('input').length) {
									newValue = $targetTd.find('input').val();
								} else if($targetTd.find('select').length) {
									newValue = $targetTd.find('select').val();
								}
								option.value = newValue;
								option.role = $(this).val();
								$targetTd.html(tableDialogDeviceEditTileSettingsElementOptionsCreate$ValueField (option));
								$('#tableDialogDeviceEditTileSettingsElementOptions table tbody').find('select').select();
								M.updateTextFields();
							});
							if(!option.roleOptions) option.roleOptions = "";
							if(option.roleOptions.indexOf('-const') == -1) $role.append(`<option value="const" ${option.role == 'const' ? 'selected' : ''}>${_("Constant")}</option>`);
							if(option.roleOptions.indexOf('+array') > -1) $role.append(`<option value="array" ${option.role == 'array' ? 'selected' : ''}>${_("Array")}</option>`);
							if(option.roleOptions.indexOf('+deviceState') > -1) $role.append(`<option value="deviceState" ${option.role == 'deviceState' ? 'selected' : ''}>${_("Device State")}</option>`);
							if(option.roleOptions.indexOf('-deviceOption') == -1) $role.append(`<option value="deviceOption" ${option.role == 'deviceOption' ? 'selected' : ''}>${_("Device Option")}</option>`);
							if(option.roleOptions.indexOf('-deviceSetting') == -1) $role.append(`<option value="deviceSetting" ${option.role == 'deviceSetting' ? 'selected' : ''}>${_("Device Setting")}</option>`);
							if(option.roleOptions.indexOf('-deviceCondition') == -1) $role.append(`<option value="deviceCondition" ${option.role == 'deviceCondition' ? 'selected' : ''}>${_("Device Condition")}</option>`);
							$(`<td data-name="role"></td>`).append($role).appendTo($tr);
							//Col 3: Value
							var $value = tableDialogDeviceEditTileSettingsElementOptionsCreate$ValueField (option);
							$(`<td data-name="value"></td>`).append($value).appendTo($tr);
							//Col 4: Description
							$(`<td data-name="description"><span class='small'>${option.description || ''}</span></td>`).appendTo($tr);
							$tbody.append($tr);
						});
						$tbody.find('select').select();
						M.updateTextFields();
					});
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Make table sortable
		$("#tableDialogDeviceEditTileSettingsElements tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function( event, ui ) {
				console.log("Drag ended, start resorting...");
				$("#tableDialogDeviceEditTileSettingsElements tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogDeviceEditTileSettingsElements').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogDeviceEditTileSettings.elements[sequence[i]]);
				}
				dialogDeviceEditTileSettings.elements = tableResorted;
				onChange();
				values2table('tableDialogDeviceEditTileSettingsElements', dialogDeviceEditTileSettings.elements, onChange, ontableDialogDeviceEditTileSettingsElementsReady);
				$("#tableDialogDeviceEditTileSettingsElements tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});		
	}

	var dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayTable;
	function tableDialogDeviceEditTileSettingsElementOptionsCreate$ValueField (option){
		var $value;
		switch(option.role){
			case "array":
				switch(option.type){
					case "activeConditionArray":
						var $input = $(`<input disabled id="tableDialogDeviceEditTileSettingsElementOptions_${option.optionIndex}" type="text" class="validate" style="width: calc(100% - 40px)">`).val(option.value || "");
						var $editButton = $(`<a data-index="${option.optionIndex}" data-command="edit" class="values-buttons btn-floating btn-small waves-effect waves-light"><i class="material-icons">edit</i></a>`).on('click', function(){
							var _optionIndex = $(this).data('index');
							dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayTable = tryParseJSON($(`#tableDialogDeviceEditTileSettingsElementOptions_${_optionIndex}`).val() || '') || [];
							initDialog('dialogDeviceEditTileSettingsElementOptionsActiveConditionArray', function(){ //save dialog
								var _optionIndex = $('#dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayIndex').val();
								$(`#tableDialogDeviceEditTileSettingsElementOptions_${_optionIndex}`).val(JSON.stringify(dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayTable));
							}, function(){ //init dialog function
								$('#dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayName').html(option.option);
								$('#dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayIndex').val(_optionIndex);
								values2table('tableDialogDeviceEditTileSettingsElementOptionsActiveConditionArray', dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayTable, onChange, ontableDialogDeviceEditTileSettingsElementOptionsActiveConditionArrayReady);
							});
						});
						$value = $(`<div class="input-field"></div>`).append($input).append($editButton).append(`<label for="tableDialogDeviceEditTileSettingsElementOptions_${option.optionIndex}"></label>`);
					break;
				}
			break;

			case "deviceCondition": 
				var $select = $('<select></select>');
				$select.append(`<option value="" ${typeof option.value != 'undefined' && option.value == '' ? 'selected' : ''}></option>`);
				$select.append(`<option value="active" ${typeof option.value != 'undefined' && option.value == 'active' ? 'selected' : ''}>Active</option>`);
				$select.append(`<option value="inactive" ${typeof option.value != 'undefined' && option.value == 'inactive' ? 'selected' : ''}>Inactive</option>`);
				$select.append(`<option value="enlarged" ${typeof option.value != 'undefined' && option.value == 'enlarged' ? 'selected' : ''}>Enlarged</option>`);
				$select.append(`<option value="not-enlarged" ${typeof option.value != 'undefined' && option.value == 'not-enlarged' ? 'selected' : ''}>Not Enlarged</option>`);
				$select.append(`<option value="loading" ${typeof option.value != 'undefined' && option.value == 'loading' ? 'selected' : ''}>Loading</option>`);
				$select.append(`<option value="not-loading" ${typeof option.value != 'undefined' && option.value == 'not-loading' ? 'selected' : ''}>Not Loading</option>`);
				$value = $(`<div class="input-field"></div>`).append($select);
			break;

			case "deviceSetting": 
				var $select = $('<select></select>');
				$select.append(`<option value="" ${typeof option.value != 'undefined' && option.value == '' ? 'selected' : ''}></option>`);
				$select.append(`<option value="commonName" ${typeof option.value != 'undefined' && option.value == 'commonName' ? 'selected' : ''}>Name</option>`);
				$select.append(`<option value="nativeNewLine" ${typeof option.value != 'undefined' && option.value == 'nativeNewLine' ? 'selected' : ''}>New Line</option>`);
				$select.append(`<option value="nativeHeading" ${typeof option.value != 'undefined' && option.value == 'nativeHeading' ? 'selected' : ''}>Heading</option>`);
				$select.append(`<option value="nativeHeadingOptions" ${typeof option.value != 'undefined' && option.value == 'nativeHeadingOptions' ? 'selected' : ''}>Heading Options</option>`);
				$select.append(`<option value="nativeLinkedView" ${typeof option.value != 'undefined' && option.value == 'nativeLinkedView' ? 'selected' : ''}>Linked View</option>`);
				$select.append(`<option value="nativeBackgroundImage" ${typeof option.value != 'undefined' && option.value == 'nativeBackgroundImage' ? 'selected' : ''}>Background Image</option>`);
				$select.append(`<option value="nativeBackgroundImageActive" ${typeof option.value != 'undefined' && option.value == 'nativeBackgroundImageActive' ? 'selected' : ''}>Background Image Active</option>`);
				$select.append(`<option value="nativeHide" ${typeof option.value != 'undefined' && option.value == 'nativeHide' ? 'selected' : ''}>Hide</option>`);
				$value = $(`<div class="input-field"></div>`).append($select);
			break;

			case "deviceOption": 
				var $select = $('<select></select>');
				$select.append(`<option value="" ${typeof option.value != 'undefined' && option.value == '' ? 'selected' : ''}></option>`);
				var optgroupOpen = false;
				(iQontrolRoles[dialogDeviceEditCommonRole].optionsDisplaySequence || []).forEach(function(entry){
					var name = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].name;
					var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
					var value = (dialogDeviceEditOptions.find(function(element){ return element.option == entry;}) || {}).value || iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default || "";
					switch(type){
						case "section":
							if(optgroupOpen) $select.append('</div');
							$select.append(`<optgroup label="${name}:">`);
							optgroupOpen = true;
							break;

						default:
							$select.append(`<option value="${entry}" ${typeof option.value != 'undefined' && option.value == entry ? 'selected' : ''}>${entry}</option>`);
					}		
				});
				if(optgroupOpen) $select.append('</div');
				$value = $(`<div class="input-field"></div>`).append($select);
			break;

			case "deviceState":
				var $select = $('<select></select>');
				$select.append(`<option value="" ${typeof option.value != 'undefined' && option.value == '' ? 'selected' : ''}></option>`);
				dialogDeviceEditStatesTable.forEach(function(deviceState){
					if(deviceState.commonType == 'array'){
						deviceState.value && (deviceState.value.cols || []).forEach(function(col){
							if(col.commonRoleFrom) $select.append(`<option value="${deviceState.state}.${col.col}" ${typeof option.value != 'undefined' && option.value == deviceState.state + '.' + col.col ? 'selected' : ''}>${deviceState.state}.${col.col}</option>`);
						});
					} else {
						$select.append(`<option value="${deviceState.state}" ${typeof option.value != 'undefined' && option.value == deviceState.state ? 'selected' : ''}>${deviceState.state}</option>`);
					}
				});
				$value = $(`<div class="input-field"></div>`).append($select);
			break;

			case "const": default:
				switch(option.type){
					case "checkbox":
						$value = $(`<label><input type="checkbox" class="filled-in" ${(option.value ? 'checked="checked" ' : '')}/><span>&nbsp;</span></label>`);
					break;

					case "select":
						var $select = $('<select></select>').data('select-options', option.selectOptions);
						((option.selectOptions || "").split(';') || []).forEach(function(selectOption){
							selectOption = selectOption.split('/');
							$select.append(`<option value="${selectOption[0]}" ${typeof option.value != 'undefined' && option.value == selectOption[0] ? 'selected' : ''}>${_(selectOption[1] || selectOption[0])}</option>`);
						});
						$value = $(`<div class="input-field"></div>`).append($select);
					break;
						
					case "textarea":
						var $value = $(`<textarea id="tableDialogDeviceEditTileSettingsElementOptions_${option.optionIndex}">`).val(option.value || "");
					break;

					case "deviceState": case "string": default:
						var $input = $(`<input id="tableDialogDeviceEditTileSettingsElementOptions_${option.optionIndex}" type="text" class="validate">`).val(option.value || "");
						$value = $(`<div class="input-field"></div>`).append($input).append(`<label for="tableDialogDeviceEditTileSettingsElementOptions_${option.optionIndex}"></label>`);
					break;
				}
			break;
		}	
		return $value;						
	}

	function ontableDialogDeviceEditTileSettingsElementOptionsActiveConditionArrayReady(){
		var $div = $('#tableDialogDeviceEditTileSettingsElementOptionsActiveConditionArray');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Hide first modificator and set it to "and"
		$lines.find('tr[data-index="0"] select[data-name="modifier"]').prop('disabled', 'disabled').val('||').select().trigger('change');
		//Modify values fields depending on role
		$lines.find('select[data-name="activeStateRole"], select[data-name="activeConditionRole"], select[data-name="activeConditionTresholdRole"]').each(function(){
			$(this).on('change', function(){
				var index = $(this).data('index');
				var val = $(this).val();
				var name = $(this).data('name');
				var targetName = name == "activeStateRole" ? 'activeStateValue' : name == "activeConditionRole" ? 'activeConditionValue' : 'activeConditionTresholdValue';
				var target = `#tableDialogDeviceEditTileSettingsElementOptionsActiveConditionArray tbody input[data-index="${index}"][data-name="${targetName}"]`;
				var $target = $(target);
				switch(val){
					case "deviceCondition": 
						var comboboxOptions = ";active/Active;inactive/Inactive;enlarged/Enlarged;not-enlarged/Not Enlarged;loading/Loading;not-loading/Not Loading";
						enhanceTextInputToCombobox(target, comboboxOptions, false);
						$target.next("a.comboboxDropdownTrigger").prop('style','');
					break;

					case "deviceSetting": 
						var comboboxOptions = ";commonName/Name;nativeNewLine/New Line;nativeHeading/Heading;nativeHeadingOptions/Heading Options;nativeLinkedView/Linked View;nativeBackgroundImage/Background Image;nativeBackgroundImageActive/Background Image Active;nativeHide/Hide";
						enhanceTextInputToCombobox(target, comboboxOptions, false);
						$target.next("a.comboboxDropdownTrigger").prop('style','');
					break;

					case "deviceOption": 
						var comboboxOptions = "";
						(iQontrolRoles[dialogDeviceEditCommonRole].optionsDisplaySequence || []).forEach(function(entry){
							var name = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].name;
							var type = iQontrolRoles[dialogDeviceEditCommonRole].options[entry].type;
							var value = (dialogDeviceEditOptions.find(function(element){ return element.option == entry;}) || {}).value || iQontrolRoles[dialogDeviceEditCommonRole].options[entry].default || "";
							switch(type){
								case "section":
									comboboxOptions += ";[" + name + "]";
									break;
		
								default:
									comboboxOptions += ";" + entry;
							}		
						});
						enhanceTextInputToCombobox(target, comboboxOptions, false);
						$target.next("a.comboboxDropdownTrigger").prop('style','');
					break;

					case "deviceState":
						var comboboxOptions = "";
						dialogDeviceEditStatesTable.forEach(function(deviceState){
							if(deviceState.commonType == 'array'){
								deviceState.value && (deviceState.value.cols || []).forEach(function(col){
									if(col.commonRoleFrom) comboboxOptions += ";" + deviceState.state + "." + col.col;
								});
							} else {
								comboboxOptions += ";" + deviceState.state;
							}
						});
						enhanceTextInputToCombobox(target, comboboxOptions, false);
						$target.next("a.comboboxDropdownTrigger").prop('style','');
						break;

					case "const": default:
						if(targetName == "activeConditionValue"){
							var comboboxOptions = "/Standard;at/always active;af/always inactive;eqt/is true;eqf/is false;eq/is;ne/is not;gt/is greater than;ge/is greater or equal;lt/is lower than;le/is lower or equal";
							enhanceTextInputToCombobox(target, comboboxOptions, false);
							$target.next("a.comboboxDropdownTrigger").prop('style','');	
						} else {//Hide selectbox handle
							$target.next("a.comboboxDropdownTrigger").prop('style','display: none !important;');
						}
					break;
				}
			}).trigger('change');
		});
		//Button functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Drag-Icon
			if (command === 'drag_handle') {
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Make table sortable
		$("#tableDialogDeviceEditTileSettingsElementOptionsActiveConditionArray tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function( event, ui ) {
				console.log("Drag ended, start resorting...");
				$("#tableDialogDeviceEditTileSettingsElementOptionsActiveConditionArray tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogDeviceEditTileSettingsElementOptionsActiveConditionArray').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayTable[sequence[i]]);
				}
				dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayTable = tableResorted;
				onChange();
				values2table('tableDialogDeviceEditTileSettingsElementOptionsActiveConditionArray', dialogDeviceEditTileSettingsElementOptionsActiveConditionArrayTable, onChange, ontableDialogDeviceEditTileSettingsElementOptionsActiveConditionArrayReady);
				$("#tableDialogDeviceEditTileSettingsElementOptionsActiveConditionArray tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});

	}

	//---------- Autocreate ----------
	//Enhance DeviceAutocreate with functions
	var dialogDeviceAutocreateResult;
	$('#devicesAutocreateButton').on('click', function () {
		initDialog('dialogDeviceAutocreate', function(){ //save dialog
			views[$('#devicesSelectedView').val()].devices.push(dialogDeviceAutocreateResult);
			values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
		}, function(){ //init dialog function 
			if ($('#dialogDeviceAutocreateSourceId').val() == "") {
				$('#dialogDeviceAutocreateCreatePreviewButton').addClass('disabled');
			} else {
				$('#dialogDeviceAutocreateCreatePreviewButton').removeClass('disabled');
			}
			$('#dialogDeviceAutocreatePreview').html(_('Please select a device ID from ioBroker-Object-Tree and press \'Try to create preview\' first.'));
			$('#dialogDeviceAutocreatePreviewStates').html('');
			$('#dialogDeviceAutocreate a.btn-set').addClass('disabled');
		});
	});
	$('#dialogDeviceAutocreateSourceId').on('input change', function(){
		dialogDeviceAutocreateResult = {};
		if ($(this).val() == ""){
			$('#dialogDeviceAutocreateCreatePreviewButton').addClass('disabled');
		} else {
			$('#dialogDeviceAutocreateCreatePreviewButton').removeClass('disabled');
		}
		var toDo = function(){
			if (iobrokerObjects[$('#dialogDeviceAutocreateSourceId').val()]){
				$('#dialogDeviceAutocreateSourceIdCommonName').html(iobrokerObjects[$('#dialogDeviceAutocreateSourceId').val()].common.name);
			} else {
				$('#dialogDeviceAutocreateSourceIdCommonName').html("");
			}
		}
		if (iobrokerObjectsReady) {
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
		if (!objects[sourceId]){
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
									if (!resultStatesObj[channelDetectorMatchTable[device.type].matchingStates[state.name]]){ //Was not matched before
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
				if (id.indexOf(sourceId) == 0 && objects[id].type == 'state' && Object.values(resultStatesObj).indexOf(id) == -1) {
					unmatchedChildStates.push(id);
				}
			}
			unmatchedChildStates.sort().reverse(); //reverse order, so that the top channel of multi-channel-devices wins
			for(i = 0; i < unmatchedChildStates.length; i++){ //Try to match unmatchedChildStates
				var id = unmatchedChildStates[i];
				var stateName = id.substring(id.lastIndexOf("."), id.length);
				switch(stateName){
					case ".STATE": case ".state": case ".Switch": case ".switch": case ".on": case ".presence": case ".MOTION": case ".PRESENCE_DETECTION_STATE": case ".SET":
					if (typeof objects[id] !== udef && typeof objects[id].common.role != udef && objects[id].common.role == "switch.lock"){
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

					case ".SET_POINT_MODE":
					if (!resultStatesObj['set_point_mode']) resultStatesObj['set_point_mode'] = id;
					break;

					case ".HUMIDITY": case ".ACTUAL_HUMIDITY": case ".humidity":
					if (!resultStatesObj['HUMIDITY']) resultStatesObj['HUMIDITY'] = id;
					break;

					case ".TEMPERATURE": case ".temperature":
					if (!resultStatesObj['TEMPERATURE']) resultStatesObj['TEMPERATURE'] = id;
					break;

					case ".ACTUAL_TEMPERATURE":
					if (!resultStatesObj['TEMPERATURE']) resultStatesObj['TEMPERATURE'] = id;
					if (!resultStatesObj['actual_temperature']) resultStatesObj['actual_temperature'] = id;
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
				if (typeof objects[sourceId].common.role !== udef && objects[sourceId].common.role == "iQontrolView"){
					result.resultObject.commonRole = "iQontrolView";
				}
				//--all the others
				//----find out the role of sources main state (priority in ascending order!)
				var sourceRole = null;
				if (resultStatesObj['STATE'] && objects[resultStatesObj['STATE']] && typeof objects[resultStatesObj['STATE']].common.role != udef) {
					sourceRole = objects[resultStatesObj['STATE']].common.role;
					if (sourceRole == 'state') { //special - check the parent channel's role
						var resultStateParent = resultStatesObj['STATE'].substring(0, resultStatesObj['STATE'].lastIndexOf('.'));
						if (resultStateParent.length > 0){
							if (objects[resultStateParent] && typeof objects[resultStateParent].common.role != udef) sourceRole = objects[resultStateParent].common.role;
						}
					} else if (stateName == ".presence" || stateName == ".MOTION" || stateName == ".PRESENCE_DETECTION_STATE") { //special
						sourceRole = "sensor.motion";
					}
				}
				if (resultStatesObj['HUMIDITY'] && objects[resultStatesObj['HUMIDITY']] && typeof objects[resultStatesObj['HUMIDITY']].common.role != udef) sourceRole = objects[resultStatesObj['HUMIDITY']].common.role;
				if (resultStatesObj['TEMPERATURE'] && objects[resultStatesObj['TEMPERATURE']] && typeof objects[resultStatesObj['TEMPERATURE']].common.role != udef) sourceRole = objects[resultStatesObj['TEMPERATURE']].common.role;
				if (resultStatesObj['BRIGHTNESS'] && objects[resultStatesObj['BRIGHTNESS']] && typeof objects[resultStatesObj['BRIGHTNESS']].common.role != udef) sourceRole = objects[resultStatesObj['BRIGHTNESS']].common.role;
				if (resultStatesObj['SET_TEMPERATURE'] && objects[resultStatesObj['SET_TEMPERATURE']] && typeof objects[resultStatesObj['SET_TEMPERATURE']].common.role != udef) sourceRole = objects[resultStatesObj['SET_TEMPERATURE']].common.role;
				if (resultStatesObj['LOCK_STATE'] && objects[resultStatesObj['LOCK_STATE']] && typeof objects[resultStatesObj['LOCK_STATE']].common.role != udef) sourceRole = objects[resultStatesObj['LOCK_STATE']].common.role;
				if (resultStatesObj['LEVEL'] && objects[resultStatesObj['LEVEL']] && typeof objects[resultStatesObj['LEVEL']].common.role != udef) sourceRole = objects[resultStatesObj['LEVEL']].common.role;
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
					if (resultStatesObj['set_point_mode']) {
						result.resultObject.commonRole = 'iQontrolHomematicIpThermostat';
						delete resultStatesObj['set_point_mode'];
						delete resultStatesObj['LEVEL'];
						delete resultStatesObj['STATE'];
						resultStatesObj['TEMPERATURE'] = resultStatesObj['actual_temperature'];
						delete resultStatesObj['actual_temperature'];
					} else if (resultStatesObj['PARTY_TEMPERATURE']) {
						result.resultObject.commonRole = 'iQontrolHomematicThermostat';
					} else {
						result.resultObject.commonRole = 'iQontrolThermostat';
					}
					break;

					case "value.temperature":
					result.resultObject.commonRole = 'iQontrolTemperature';
					if (!resultStatesObj['STATE']){
						resultStatesObj['STATE'] = resultStatesObj['TEMPERATURE'];
						delete resultStatesObj['TEMPERATURE'];
					}
					break;

					case "value.humidity":
					result.resultObject.commonRole = 'iQontrolHumidity';
					if (!resultStatesObj['STATE']){
						resultStatesObj['STATE'] = resultStatesObj['HUMIDITY'];
						delete resultStatesObj['HUMIDITY'];
					}
					break;

					case "value.brightness":
					result.resultObject.commonRole = 'iQontrolBrightness';
					if (!resultStatesObj['STATE']){
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
				if (!result.resultObject.states[state]) result.resultObject.states.push({state: state, value: resultStatesObj[state]});
			}
			if (result.resultObject.states.length > 0 ){
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
			if (result.resultValid) {
				result.resultText += "<br><b>" + _("You can create this device now if you want.") + "</b>";
			} else {
				result.resultText = "<blockquote>" + _("Could not determine any valid Device from this ID") + "</blockquote>";
			}
		}
		return result;
	}

	//---------- Device Copy ----------
	//Enhance DeviceCopyFrom with functions
	$('#devicesCopyFromButton').on('click', function(event, sourceView, sourceDevice){
		initDialog('dialogDeviceCopyFrom', function(){ //save dialog
			var sourceView =   $('#dialogDeviceCopyFromSourceView').val();
			var sourceDevice = $('#dialogDeviceCopyFromSourceDevice').val();
			var destinationView = $('#dialogDeviceCopyFromDestinationView').val();
			// var destinationView = devicesSelectedView; oder $('#devicesSelectedView').val()   xxxxx
			var length = views[destinationView].devices.push(JSON.parse(JSON.stringify(views[sourceView].devices[sourceDevice]))); //This creates new object, not just a reference
			if ($("#dialogDeviceCopyFromNewName").val()) views[destinationView].devices[length - 1].commonName = $("#dialogDeviceCopyFromNewName").val(); //New Name
			if ($("#dialogDeviceCopyFromCreateSymbolicLink").prop('checked')){ //Symbolic link
				views[destinationView].devices[length - 1].symbolicLinkFrom = {sourceView: sourceView, sourceDevice: sourceDevice};
			} else if ($("#dialogDeviceCopyFromReplaceCheckbox").prop('checked')) { //Replace Datapoints
				(views[destinationView].devices[length - 1].states || []).forEach(function(state){ 
					if (state.commonRole && state.commonRole == "linkedState" && state.value) {
						$('#dialogDeviceCopyFromReplaceDatapointsList > li').each(function(){
							var index = $(this).data('index');
							var searchValue = $('.dialogDeviceCopyFromReplaceDatapoints.searchvalue[data-index=' + index + ']').val();
							var newValue = $('.dialogDeviceCopyFromReplaceDatapoints.newvalue[data-index=' + index + ']').val() || "";
							if (searchValue) state.value = state.value.replace(searchValue, newValue);
						});
					} else if (state.commonRole == "array" && state.value) {
						var valueArray = tryParseJSON(state.value);
						if (Array.isArray(valueArray) == false) valueArray = [];
						valueArray.forEach(function(entry){
							if (entry.commonRole && entry.commonRole == "linkedState" && entry.value) {
								$('#dialogDeviceCopyFromReplaceDatapointsList > li').each(function(){
									var index = $(this).data('index');
									var searchValue = $('.dialogDeviceCopyFromReplaceDatapoints.searchvalue[data-index=' + index + ']').val();
									var newValue = $('.dialogDeviceCopyFromReplaceDatapoints.newvalue[data-index=' + index + ']').val() || "";
									if (searchValue) entry.value = entry.value.replace(searchValue, newValue);
								});	
							}								
						});
						state.value = JSON.stringify(valueArray);
					}
				});
			}
			values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
		}, function(){ //init dialog function 
			$('#dialogDeviceCopyFrom a.btn-set').addClass('disabled');
			$("#dialogDeviceCopyFromNewName").val("");
			sourceView = (typeof sourceView != udef ? sourceView : $('#dialogDeviceCopyFromSourceView').val());
			destinationView = devicesSelectedView;
			$('#dialogDeviceCopyFromSourceView').empty().append("<option disabled selected value>" + _("Select view") + "</option>");
			$('#dialogDeviceCopyFromDestinationView').empty().append("<option disabled selected value>" + _("Select view") + "</option>");
			views.forEach(function(element, index){ 
				$('#dialogDeviceCopyFromSourceView').append("<option value='" + index + "'>" + element.commonName + "</option>"); 
				$('#dialogDeviceCopyFromDestinationView').append("<option value='" + index + "'>" + element.commonName + "</option>"); 
			});
			sourceDevice = (typeof sourceDevice != udef ? sourceDevice : $('#dialogDeviceCopyFromSourceDevice').val());
			$('#dialogDeviceCopyFromSourceDevice').empty().append("<option disabled selected value>" + _("Select device") + "</option>");
			if (typeof sourceView != udef && sourceView != null){
				$('#dialogDeviceCopyFromSourceView').val(sourceView).trigger('change');
				if (typeof sourceDevice != udef && sourceDevice != null) {
					$('#dialogDeviceCopyFromSourceDevice').val(sourceDevice).trigger('change');
				}
			}
			$('#dialogDeviceCopyFromDestinationView').val(destinationView).trigger('change');
			$("#dialogDeviceCopyFromCreateSymbolicLink").trigger('change');
			if (!$('#dialogDeviceCopyFromReplaceDatapointsList li').length > 0) $("#dialogDeviceCopyFromReplaceCheckbox").prop('checked', false).trigger('change');
			$('#dialogDeviceCopyFromSourceView').select();
			$('#dialogDeviceCopyFromDestinationView').select();
			$('#dialogDeviceCopyFromSourceDevice').select();
		});
	});
	$('#dialogDeviceCopyFromSourceView').on('change', function(){
		$('#dialogDeviceCopyFromSourceDevice').empty().append("<option disabled selected value>" + _("Select device") + "</option>");
		views[$('#dialogDeviceCopyFromSourceView').val()].devices.forEach(function(element, index){ $('#dialogDeviceCopyFromSourceDevice').append("<option value='" + index + "'>" + element.commonName + "</option>"); });
		$('#dialogDeviceCopyFromSourceDevice').select();
		$('#dialogDeviceCopyFrom a.btn-set').addClass('disabled')
	});
	$('#dialogDeviceCopyFromSourceDevice').on('change', function(){
		if ($('#dialogDeviceCopyFromSourceDevice').val()){
			$('#dialogDeviceCopyFrom a.btn-set').removeClass('disabled');
			$("#dialogDeviceCopyFromNewName").val(views[$('#dialogDeviceCopyFromSourceView').val()].devices[$('#dialogDeviceCopyFromSourceDevice').val()].commonName);
			dialogDeviceCopyFromReplaceDatapointsSearchValuesSetComboboxEntries();
		} else {
			$('#dialogDeviceCopyFrom a.btn-set').addClass('disabled');
		}
	});
	$("#dialogDeviceCopyFromCreateSymbolicLink").on('change', function(){
		if ($(this).prop('checked')){
			$('#dialogDeviceCopyFromReplaceCheckbox').addClass('disabled').prop('disabled', 'disabled').trigger('change');
		} else {
			$('#dialogDeviceCopyFromReplaceCheckbox').removeClass('disabled').prop('disabled', '').trigger('change');
		}
	})
	$("#dialogDeviceCopyFromReplaceCheckbox").on('change', function(){
		if ($(this).prop('checked') && !$(this).prop('disabled')){
			$('#dialogDeviceCopyFromReplaceDatapointsAdd').show();
			$('#dialogDeviceCopyFromReplaceDatapointsList').show();
		} else {
			$('#dialogDeviceCopyFromReplaceDatapointsAdd').hide();
			$('#dialogDeviceCopyFromReplaceDatapointsList').hide();
		}
	})
	$('#dialogDeviceCopyFromReplaceDatapointsAdd').on('click', function(){
		var index = $('#dialogDeviceCopyFromReplaceDatapointsList').data('length') || 0;
		var listContent = "";
		listContent += "<li class='collection-item' data-index='" + index + "'>";
		listContent += "<div class='row'>";
		listContent += 	"<div class='col s12 m5 l5'>";
		listContent += 		"<input class='val dialogDeviceCopyFromReplaceDatapoints searchvalue' name='dialogDeviceCopyFromReplaceDatapoints_" + index + "_SEARCH_VALUE' id='dialogDeviceCopyFromReplaceDatapoints_" + index + "_SEARCH_VALUE' data-index='" + index + "' data-setting='searchvalue' value=''></input>";
		listContent += 		"<label for='dialogDeviceCopyFromReplaceDatapoints_" + index + "_SEARCH_VALUE' class='translate'></label>";
		listContent += 		"<span class='translate'>" + _("Replace this string...") + "</span>";
		listContent += 	"</div>";
		listContent += 	"<div class='col s1 m1 l1'>";
		listContent += 		"<i class='material-icons' style='margin-top:35px;'>arrow_forward</i>";
		listContent += 	"</div>";
		listContent += 	"<div class='col s10 m5 l5'>";
		listContent += 		"<input class='val dialogDeviceCopyFromReplaceDatapoints newvalue' name='dialogDeviceCopyFromReplaceDatapoints_" + index + "_NEW_VALUE' id='dialogDeviceCopyFromReplaceDatapoints_" + index + "_NEW_VALUE' data-index='" + index + "' data-setting='newvalue' value=''></input>";
		listContent += 		"<label for='dialogDeviceCopyFromReplaceDatapoints_" + index + "_NEW_VALUE' class='translate'></label>";
		listContent += 		"<span class='translate'>" + _("...with this string.") + "</span>";
		listContent += 		"<i class='material-icons dialogDeviceCopyFromReplaceDatapoints selectId' data-index='" + index + "' data-selectidfor='dialogDeviceCopyFromReplaceDatapoints_" + index + "_NEW_VALUE' style='position: absolute; right: 5px; top: 10px; cursor: hand;'>edit</i>";
		listContent += 	"</div>";
		listContent += 	"<div class='col s1 m1 l1'>";
		listContent += 		"<i class='material-icons'  style='margin-top:35px; cursor:pointer; color:#e60000;' onclick='$(\"#dialogDeviceCopyFromReplaceDatapointsList li[data-index=" + index + "]\").remove();'>delete</i>";
		listContent += 	"</div>";
		listContent += "</div>";
		listContent += "</li>";
		$('#dialogDeviceCopyFromReplaceDatapointsList').append(listContent);
		$('#dialogDeviceCopyFromReplaceDatapointsList').data('length', index + 1);
		if ($('#dialogDeviceCopyFromSourceDevice').val()){
			dialogDeviceCopyFromReplaceDatapointsSearchValuesSetComboboxEntries();
		}
		$('.dialogDeviceCopyFromReplaceDatapoints.selectId[data-index="' + index + '"]').on('click', function(){
			$('#dialogSelectId').data('selectidfor', $.escapeSelector($(this).data('selectidfor')));
			initSelectId(function (sid) {
				sid.selectId('show', $('#' + $('#dialogSelectId').data('selectidfor')).val(), {type: 'state'}, function (newId) {
					if (newId) {
						$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
					}
				});
			});
		});
	});
	function dialogDeviceCopyFromReplaceDatapointsSearchValuesSetComboboxEntries(){
		var usedDatapointIds = [];
		(views[$('#dialogDeviceCopyFromSourceView').val()].devices[$('#dialogDeviceCopyFromSourceDevice').val()].states || []).forEach(function(element, index){ 
			if (element.commonRole == "linkedState" && element.value) {
				usedDatapointIds.push(element.value); 
			} else if (element.commonRole == "array" && element.value){
				var valueArray = tryParseJSON(element.value);
				if (Array.isArray(valueArray) == false) valueArray = [];
				valueArray.forEach(function(entry){
					if (entry.commonRole && entry.commonRole == "linkedState" && entry.value) {
						usedDatapointIds.push(entry.value); 				
					}								
				});
			}
		});
		usedDatapointIds = removeDuplicates(usedDatapointIds);
		enhanceTextInputToCombobox('.dialogDeviceCopyFromReplaceDatapoints.searchValue', usedDatapointIds.join(";"), false);
	}

	//---------- Widget ----------
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
		}, function(){ //init dialog function 
			//Add widgets and websites to Selectbox
			$('#dialogDevicesAutocreateWidgetSource').val("");
			enhanceTextInputToCombobox("#dialogDevicesAutocreateWidgetSource", ["/" + _("(None)"), comboboxStrings.inbuiltWidgets, comboboxStrings.userWidgets], true, dialogDevicesAutocreateWidgetWidgetSelected);
			//Further settings
			$('#dialogDevicesAutocreateWidgetName').val("");
			$('#dialogDevicesAutocreateWidgetDescription').html("");
			$('#dialogDevicesAutocreateWidgetOptions').html("");
			$('#dialogDevicesAutocreateWidgetUrlParameters').html("");
			$('#dialogDevicesAutocreateWidget a.btn-set').addClass('disabled');
			dialogDevicesAutocreateWidgetOptions = [];
			dialogDevicesAutocreateWidgetUrlParameters = "";
		});
	});
	$("#dialogDevicesAutocreateWidgetSource").on('input change', function(){
		$('#dialogDevicesAutocreateWidgetDescription').html("");
		$('#dialogDevicesAutocreateWidgetOptions').html("");
		$('#dialogDevicesAutocreateWidgetUrlParameters').html("");
		$("#dialogDevicesAutocreateWidgetSourceEdit").data('url', '').addClass('disabled');
		if ($("#dialogDevicesAutocreateWidgetSource").val() != ""){
			$('#dialogDevicesAutocreateWidget a.btn-set').removeClass('disabled');
		} else {
			$('#dialogDevicesAutocreateWidget a.btn-set').addClass('disabled');
		}
		dialogDevicesAutocreateWidgetOptions = [];
		dialogDevicesAutocreateWidgetUrlParameters = "";
	});
	$("#dialogDevicesAutocreateWidgetSourceEdit").on('click', function(){
		dialogDevicesAutocreateWidgetWidgetSelected($(this).data('url'));
	});
	function dialogDevicesAutocreateWidgetWidgetSelected(value){
		if (value) getWidgetSettings(value, false, [], true, function(result){
			if (result.urlParameters.length){
				dialogDevicesAutocreateWidgetUrlParameters = "?" + result.urlParameters.join('&');
				var urlParameterString = "<ul	class='browser-default'>";
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
				if (iQontrolRoles["iQontrolWidget"].options[roleOption].type == "section") continue;
				var value = result.options[roleOption] || iQontrolRoles["iQontrolWidget"].options[roleOption].default || "";
				var entry = {option: roleOption, type: iQontrolRoles["iQontrolWidget"].options[roleOption].type, value: value};
				dialogDevicesAutocreateWidgetOptions.push(entry);
			}
			$("#dialogDevicesAutocreateWidgetSourceEdit").data('url', result.url).removeClass('disabled');
			$("#dialogDevicesAutocreateWidgetSource").val(result.url.split('?')[0]);
		});
	}

	//Widget-Settings
	function getWidgetSettings(url, checkForOptionsAlreadySet, actualOptions, choseOptionsNotSet, callback){ // callback(result), result = {result.urlParameters (array), result.options (object)]´}
		var filename = null;
		var path = null;
		if (url.indexOf("./images/widgets/") == 0){
			filename = url.substr(8);
			path = imagePath;
		} else if (url.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0){
			filename = url.substr(29);
			path = userfilesImagePath;
		}
		if (!filename || !path) return;
		var querystring = filename.split('?')[1] || "";
		filename = filename.split('?')[0];
		downloadFileAsStringAsync(filename, path).then(function(htmlAsString){
			if ($(htmlAsString).filter('meta[name^="widget-"]').length){
				initDialog('dialogWidgetSettings', function(replaceurlSwitchToDestination){ //save dialog
					var result = {};
					var dialogWidgetSettingsUrlParameters = [];
					$('.dialogWidgetSettingsUrlParameters').each(function(){
						var value;
						if ($(this).data('type') == "checkbox"){
							value = $(this).prop('checked').toString();
						} else {
							value = $(this).val();
						}
						dialogWidgetSettingsUrlParameters.push(fixedEncodeURIComponent($(this).data('option')) + "=" + fixedEncodeURIComponent(value));
					});
					var replaceurl = $('#dialogWidgetSettings').data('replaceurl') || "";
					if (replaceurl != "") {
						dialogWidgetSettingsUrlParameters.push("widgetReplaceurl=" + fixedEncodeURIComponent(replaceurl));
					}
					if ($('#dialogWidgetSettings').data('replaceurlabsolute')) {
						dialogWidgetSettingsUrlParameters.push("widgetReplaceurlAbsolute=true");
					}
					result.urlParameters = dialogWidgetSettingsUrlParameters;
					var dialogWidgetSettingsOptions = {};
					$('.dialogWidgetSettingsOptions').each(function(){
						if ($(this).prop('checked')){
							dialogWidgetSettingsOptions[$(this).data('option')] = $(this).data('value').toString();
						}
					});
					result.options = dialogWidgetSettingsOptions;
					if (result.urlParameters.length) {
						url = url.split('?')[0] + "?" + result.urlParameters.join('&');
					}
					result.url = url;
					if (replaceurlSwitchToDestination){
						console.log("replaceurlSwitchToDestination");
						$('#dialogWidgetSettings').modal('close');
						if ($('#dialogWidgetSettings').data('replaceurlabsolute')){
							url = url.replace(url.split('?')[0], replaceurl);
						} else {
							url = url.replace(url.split('?')[0].substring(url.split('?')[0].lastIndexOf('/') + 1), replaceurl);														
						}
						getWidgetSettings(url, checkForOptionsAlreadySet, actualOptions, choseOptionsNotSet, callback);
					} else {
						callback(result);
					}
				}, function(){ //init dialog function 
					var name = url.split('?')[0];
					if (name.lastIndexOf('/') > 0) name = name.substring(name.lastIndexOf('/') + 1);
					if (name.lastIndexOf('.') > 0) name = name.substring(0, name.lastIndexOf('.'));
					$('#dialogWidgetSettingsName').html(name);
					$('#dialogWidgetSettingsDescription').html("").show();
					$('#dialogWidgetSettingsOptions').html("").hide();
					$('#dialogWidgetSettingsParameters').html("").hide();
					$('#dialogWidgetSettings').data('replaceurl', '');
					$('#dialogWidgetSettings').data('replaceurlabsolute', '');
					$('#dialogWidgetSettingsReplaceurlDestination').html('');
					$('.dialogWidgetSettingsReplaceurl').hide();
					$(htmlAsString).filter('meta[name^="widget-"]').each(function(){
						var metaName = $(this).prop('name');
						var metaContent = $(this).prop('content');
						var data = $(this).data() || {};
						switch(metaName){
							case "widget-description":
							if (metaContent) $('#dialogWidgetSettingsDescription').html(metaContent).show();
							break;

							case "widget-urlparameters":
							if (metaContent){
								dialogDevicesAutocreateWidgetUrlParameters = "";
								var dialogWidgetSettingsUrlParametersString = "<ul class='collapsible' id='dialogWidgetSettingsUrlParametersCollapsible'>";
								var dialogWidgetSettingsUrlParametersComboboxes = [];
								var urlParameters = metaContent.split(';');
								var querystringParts = querystring.split('&');
								var queries = {};
								var dialogWidgetSettingsUrlParametersStringCollapsibleOpen = false;
								querystringParts.forEach(function(query){
									queries[query.split('=')[0]] = query.split('=')[1] || "";
								});
								if (urlParameters.length > 0 && decodeURIComponent((urlParameters[0] || "").trim().split('/')[3]) != "section") urlParameters.unshift("//" + _("General") + "/section");
								//Build options string for icons comboboxes
								//Blank Icon
								var comboboxesIconsOptions = "[" + _("No Icon") + ":]";
								comboboxesIconsOptions += ";" + ("./images/icons/blank.png").replace(/\//g, "\\") + "/" + _("No Icon") + "/" + (previewLink + "/images/icons/checkboard.png").replace(/\//g, "\\");
								//Inbuilt Icons
								comboboxesIconsOptions += ";[" + _("Inbuilt Icons") + ":]";
								inbuiltIcons.forEach(function(inbuiltIcon){
									if (inbuiltIcon != "") {
										comboboxesIconsOptions += ";" + inbuiltIcon.replace(/\//g, "\\") + "/" + inbuiltIcon.replace(/\//g, "\\");
									}
								});
								//User Icons
								var imagenames = [];
								imagesDirs.forEach(function(imagesDir){
									if (imagesDir.dirname.indexOf("/usericons") == 0 && imagesDir.files && imagesDir.files.length > 0){
										imagenames.push("[" + imagesDir.dirnameBS + ":]");
										imagesDir.files.forEach(function(file){
											 imagenames.push(".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS);
										});
									}
								});
								if (imagenames.length > 0){
									comboboxesIconsOptions += ";[" + _("User Icons") + ":]";
									imagenames.forEach(function(option){
										comboboxesIconsOptions += ";" + option;
									});
								}
								//Build options string for font family comboboxes
								//Default Font
								var comboboxesFontsOptions = "[" + _("Default Font") + ":]";
								comboboxesFontsOptions += ";/" + _("Default Font") + "/" + (previewLink + "/images/icons/blank.png").replace(/\//g, "\\");
								//Inbuilt Fonts
								comboboxesFontsOptions += ";[Sans-Serif:]";
								comboboxesFontsOptions += ";Frutiger, \"Frutiger Linotype\", Univers, Calibri, \"Gill Sans\", \"Gill Sans MT\", \"Myriad Pro\", Myriad, \"DejaVu Sans Condensed\", \"Liberation Sans\", \"Nimbus Sans L\", Tahoma, Geneva, \"Helvetica Neue\", Helvetica, Arial, sans-serif/Helvetica, Arial/.\\fonts\\font_arial.png";
								comboboxesFontsOptions += ";Corbel, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", \"Bitstream Vera Sans\", \"Liberation Sans\", Verdana, \"Verdana Ref\", sans-serif/Verdana/.\\fonts\\font_verdana.png";
								comboboxesFontsOptions += ";\"Segoe UI\", Candara, \"Bitstream Vera Sans\", \"DejaVu Sans\", \"Bitstream Vera Sans\", \"Trebuchet MS\", Verdana, \"Verdana Ref\", sans-serif/Trebuchet/.\\fonts\\font_trebuchet.png";
								comboboxesFontsOptions += ";[Serif:]";
								comboboxesFontsOptions += ";Cambria, \"Hoefler Text\", Utopia, \"Liberation Serif\", \"Nimbus Roman No9 L Regular\", Times, \"Times New Roman\", serif/Times New Roman/.\\fonts\\font_times.png";
								comboboxesFontsOptions += ";Constantia, \"Lucida Bright\", Lucidabright, \"Lucida Serif\", Lucida, \"DejaVu Serif\", \"Bitstream Vera Serif\", \"Liberation Serif\", Georgia, serif/Georgia/.\\fonts\\font_georgia.png";
								comboboxesFontsOptions += ";\"Palatino Linotype\", Palatino, Palladio, \"URW Palladio L\", \"Book Antiqua\", Baskerville, \"Bookman Old Style\", \"Bitstream Charter\", \"Nimbus Roman No9 L\", Garamond, \"Apple Garamond\", \"ITC Garamond Narrow\", \"New Century Schoolbook\", \"Century Schoolbook\", \"Century Schoolbook L\", Georgia, serif/Garamond/.\\fonts\\font_garamond.png";
								comboboxesFontsOptions += ";[Fantasy:]";
								comboboxesFontsOptions += ";Impact, Haettenschweiler, \"Franklin Gothic Bold\", Charcoal, \"Helvetica Inserat\", \"Bitstream Vera Sans Bold\", \"Arial Black\", fantasy, sans-serif/Impact/.\\fonts\\font_impact.png";
								comboboxesFontsOptions += ";[Cursive:]";
								comboboxesFontsOptions += ";\"Comic Sans\", \"Comic Sans MS\", \"Chalkboard\", \"ChalkboardSE-Regular\", cursive, sans-serif/Comic Sans/.\\fonts\\font_comic.png";
								comboboxesFontsOptions += ";[Monospace:]";
								comboboxesFontsOptions += ";Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier, monospace/Courier/.\\fonts\\font_courier.png";
								//User Fonts
								var userfonts = [];
								imagesDirs.forEach(function(imagesDir){
									if (imagesDir.dirname.indexOf("/userfonts") == 0 && imagesDir.files && imagesDir.files.length > 0){
										imagesDir.files.forEach(function(file){
											var filename = file.filename || "";
											if (filename.endsWith(".otf") || filename.endsWith(".ttf") || filename.endsWith(".woff") || filename.endsWith(".woff2") || filename.endsWith(".eot")){
												var iconIndex = images.findIndex(function(element){ return (element.filename == file.filename.substring(0, file.filename.length - 5) + ".png"); });
												if (iconIndex > -1) var icon = previewLink + "/.." + userfilesImagePath + images[iconIndex].filename; else var icon = previewLink + "/images/icons/file_font.png";
												userfonts.push(file.filenameBS + "@" + ".\\.." + userfilesImagePathBS + file.filenameBS + "/" + file.filenameBS + "/" + icon.replace(/\//g, "\\"));
											}
										});
									}
								});
								if (userfonts.length > 0){
									comboboxesFontsOptions += ";[" + _("User Fonts") + ":]";
									userfonts.forEach(function(userfont){
										comboboxesFontsOptions += ";" + userfont;
									});
								}
								//Build URL-Parameters dialog
								urlParameters.forEach(function(urlParameter){
									urlParameter = urlParameter.trim().split('/');
									var entry = decodeURIComponent(urlParameter[0]);
									var name = decodeURIComponent(urlParameter[2] || urlParameter[0]);
									var value = decodeURIComponent((typeof queries[entry] != udef ? queries[entry] || "" : urlParameter[1] || "")).replace(/'/g, "&#39;");
									var defaultValue = decodeURIComponent(urlParameter[1] || "");
									var type = decodeURIComponent(urlParameter[3] || "text");
									var options = urlParameter.slice(4) || [];
									if (!Array.isArray(options)) options = [decodeURIComponent(options)];
									switch(type){
										case "section":
										if (dialogWidgetSettingsUrlParametersStringCollapsibleOpen) {
											dialogWidgetSettingsUrlParametersString += "</div>";
											dialogWidgetSettingsUrlParametersString += "</li>";
										}
										dialogWidgetSettingsUrlParametersStringCollapsibleOpen = true;
										dialogWidgetSettingsUrlParametersString += "<li>";
										dialogWidgetSettingsUrlParametersString += "<div class='collapsible-header'>";
										dialogWidgetSettingsUrlParametersString += "		<i class='material-icons'>expand_more</i><h6 class='translate'>" + _(name) + ":</h6>";
										dialogWidgetSettingsUrlParametersString += "</div>";
										dialogWidgetSettingsUrlParametersString += "<div class='collapsible-body'>";
										break;

										case "divider":
										dialogWidgetSettingsUrlParametersString += "<div class='divider'></div><br>";
										break;
										
										case "info":
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='col s12 m12 l12'><p>" + _(name) + "</p></div></div>";
										break;
										
										case "link":
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='col s12 m12 l12'><a href='" + defaultValue.replace(/\\/g, "/") + "' target='_blank'>" + _(name) + "</a></div></div>";
										break;
										
										case "number":
										var min = (options[0] || "").split(',')[0] || 0;
										var max = (options[0] || "").split(',')[1] || 100;
										var step = (options[0] || "").split(',')[2] || 1;
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters validate validateOnlyError' data-option='" + entry + "' data-type='number' type='number' min='" + min + "' max='" + max + "' step='" + step + "' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' />";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
										dialogWidgetSettingsUrlParametersString += "    <span class='helper-text' data-error='" + min + " - " + max + "' data-success=''></span>";
										dialogWidgetSettingsUrlParametersString += "    <a class='inputClear waves-effect waves-light btn-small btn-floating' data-default='" + defaultValue + "'><i class='material-icons'>clear</i></a>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;

										case "select": case "multipleSelect":
										var selectOptionsContent = "";
										options.forEach(function(option){
											var parts = option.split(',');
											if (parts.length < 2) parts.push(parts[0]);
											parts[0] = decodeURIComponent(parts[0]);
											parts[1] = decodeURIComponent(parts[1]);
											selectOptionsContent += "        <option value='" + parts[0] + "' " + ((parts[0] == value)?'selected':'') + " class='translate'>" + _(parts[1] || parts[0]) + "</option>";
										});
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <select" + (type == "multipleSelect" ? " multiple" : "") + " class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='select' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'>" + selectOptionsContent + "</select>";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'></label>";
										dialogWidgetSettingsUrlParametersString += "    <span class='translate'>" + _(name) + "</span>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;
										
										case "combobox":
										dialogWidgetSettingsUrlParametersComboboxes.push({id: 'dialogWidgetSettingsUrlParameter_' + entry, options: decodeURIComponent(options.join(';').replace(/\,/g, "/")), iconsFromOption: false});
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='combobox' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' placeholder='' />";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;

										case "historyInstance":
										getHistoryInstances();
										var selectOptionsContent = "";
										selectOptionsContent += "        <option value=''>" + _('default') + "</option>";
										historyInstances.forEach(function(historyInstance){
											selectOptionsContent += "        <option value='" + historyInstance + "'" + (historyInstance == value ? " selected" : "") + ">" + historyInstance + "</option>";
										});
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <select class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='select' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'>" + selectOptionsContent + "</select>";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'></label>";
										dialogWidgetSettingsUrlParametersString += "    <span class='translate'>" + _(name) + "</span>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;

										case "checkbox":
										if (value == "true") value = true;
										if (value == "false") value = false;
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l23'>";
										dialogWidgetSettingsUrlParametersString += "    <p><label>";
										dialogWidgetSettingsUrlParametersString += "        <input class='value dialogWidgetSettingsUrlParameters filled-in' data-option='" + entry + "' data-type='checkbox' type='checkbox' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "' " + (value?"checked='checked'":"") + " />";
										dialogWidgetSettingsUrlParametersString += "        <span>" + _(name) + "</span>";
										dialogWidgetSettingsUrlParametersString += "    </label></p>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;

										case "color":
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <input class='value MaterializeColorPicker validate validateOnlyError dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='color' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' placeholder='' />";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
										dialogWidgetSettingsUrlParametersString += "    <span class='helper-text'></span>";
										dialogWidgetSettingsUrlParametersString += "    <a class='inputClear waves-effect waves-light btn-small btn-floating' data-default='" + defaultValue + "'><i class='material-icons'>clear</i></a>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;
										
										case "icon":
										dialogWidgetSettingsUrlParametersComboboxes.push({id: 'dialogWidgetSettingsUrlParameter_' + entry, options: comboboxesIconsOptions});
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters icon' data-option='" + entry + "' data-type='icon' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' placeholder='" + _("No Icon") + "' />";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;
										
										case "fontFamily":
										dialogWidgetSettingsUrlParametersComboboxes.push({id: 'dialogWidgetSettingsUrlParameter_' + entry, options: comboboxesFontsOptions});
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters icon' data-option='" + entry + "' data-type='icon' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' placeholder='" + _("Default Font") + "' />";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;

										case "fontSize":
										var min = 1;
										var max = 100;
										var step = 0.01;
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters validate validateOnlyError' data-option='" + entry + "' data-type='number' type='number' min='" + min + "' max='" + max + "' step='" + step + "' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' />";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
										dialogWidgetSettingsUrlParametersString += "    <span class='helper-text' data-error='" + min + " - " + max + " [px]' data-success=''></span>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;

										case "fontWeight":
										var selectOptionsContent = "";
										selectOptionsContent += "        <option value='' disabled selected class='translate'>Choose:</option>";
										selectOptionsContent += "        <option value='lighter'" + (value == 'lighter' ? ' selected' : '') + " class='translate'>Lighter</option>";
										selectOptionsContent += "        <option value='normal'" + (value == 'normal' ? ' selected' : '') + " class='translate'>Normal</option>";
										selectOptionsContent += "        <option value='bold'" + (value == 'bold' ? ' selected' : '') + " class='translate'>Bold</option>";
										selectOptionsContent += "        <option value='bolder'" + (value == 'bolder' ? ' selected' : '') + " class='translate'>Bolder</option>";
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <select class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='select' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'>" + selectOptionsContent + "</select>";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'></label>";
										dialogWidgetSettingsUrlParametersString += "    <span class='translate'>" + _(name) + "</span>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;

										case "fontStyle":
										var selectOptionsContent = "";
										selectOptionsContent += "        <option value='' disabled selected class='translate'>Choose:</option>";
										selectOptionsContent += "        <option value='normal'" + (value == 'normal' ? ' selected' : '') + " class='translate'>Normal</option>";
										selectOptionsContent += "        <option value='italic'" + (value == 'italic' ? ' selected' : '') + " class='translate'>Italic</option>";
										selectOptionsContent += "        <option value='oblique'" + (value == 'oblique' ? ' selected' : '') + " class='translate'>Oblique</option>";
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <select class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='select' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'>" + selectOptionsContent + "</select>";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'></label>";
										dialogWidgetSettingsUrlParametersString += "    <span class='translate'>" + _(name) + "</span>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;
										
										case "language":
										if (!value) value = systemLang;
										var selectOptionsContent = "";
										selectOptionsContent += "        <option value=' ' selected class='translate'>Choose:</option>";
										selectOptionsContent += "        <option value='en'" + (value == 'en' ? ' selected' : '') + " class='translate'>English</option>";
										selectOptionsContent += "        <option value='de'" + (value == 'de' ? ' selected' : '') + " class='translate'>German</option>";
										selectOptionsContent += "        <option value='ru'" + (value == 'ru' ? ' selected' : '') + " class='translate'>Russian</option>";
										selectOptionsContent += "        <option value='pt'" + (value == 'pt' ? ' selected' : '') + " class='translate'>Polish</option>";
										selectOptionsContent += "        <option value='nl'" + (value == 'nl' ? ' selected' : '') + " class='translate'>Dutch</option>";
										selectOptionsContent += "        <option value='fr'" + (value == 'fr' ? ' selected' : '') + " class='translate'>French</option>";
										selectOptionsContent += "        <option value='it'" + (value == 'it' ? ' selected' : '') + " class='translate'>Italian</option>";
										selectOptionsContent += "        <option value='es'" + (value == 'es' ? ' selected' : '') + " class='translate'>Spanish</option>";
										selectOptionsContent += "        <option value='zh-cn'" + (value == 'zh-cn' ? ' selected' : '') + " class='translate'>Chinese</option>";
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <select class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='select' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'>" + selectOptionsContent + "</select>";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'></label>";
										dialogWidgetSettingsUrlParametersString += "    <span class='translate'>" + _(name) + "</span>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;
										
										case "datapoint":
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' />";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
										dialogWidgetSettingsUrlParametersString += "	<a class='dialogWidgetSettingsUrlParametersButton inputEdit waves-effect waves-light btn-small btn-floating' data-selectidfor='dialogWidgetSettingsUrlParameter_" + entry + "'><i class='material-icons'>edit</i></a>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;
										
										case "listJsonDatapoint":
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s11 m11 l11'>";
										dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters listJsonDatapoint' data-option='" + entry + "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' />";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
										dialogWidgetSettingsUrlParametersString += "</div><div class='input-field col s1 m1 l1'>";
										dialogWidgetSettingsUrlParametersString += "	<a class='dialogWidgetSettingsUrlParametersButton inputEdit waves-effect waves-light btn-small btn-floating' data-selectidfor='dialogWidgetSettingsUrlParameter_" + entry + "'><i class='material-icons'>edit</i></a>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;

										case "hidden":
										dialogWidgetSettingsUrlParametersString += "<input style='display:none;' class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' />";
										break;
										
										case "text": default:
										dialogWidgetSettingsUrlParametersString += "<div class='row'><div class='input-field col s12 m12 l12'>";
										dialogWidgetSettingsUrlParametersString += "    <input class='value dialogWidgetSettingsUrlParameters' data-option='" + entry + "' data-type='text' type='text' name='dialogWidgetSettingsUrlParameter_" + entry + "' id='dialogWidgetSettingsUrlParameter_" + entry + "'  value='" + value + "' />";
										dialogWidgetSettingsUrlParametersString += "    <label for='dialogWidgetSettingsUrlParameter_" + entry + "' class='translate'>" + _(name) + "</label>";
										dialogWidgetSettingsUrlParametersString += "    <a class='inputClear waves-effect waves-light btn-small btn-floating' data-default='" + defaultValue + "'><i class='material-icons'>clear</i></a>";
										dialogWidgetSettingsUrlParametersString += "</div></div>";
										break;
									}
								});
								if (dialogWidgetSettingsUrlParametersString) {
									if (dialogWidgetSettingsUrlParametersStringCollapsibleOpen) {
										dialogWidgetSettingsUrlParametersString += "</div>";
										dialogWidgetSettingsUrlParametersString += "</li>";
									}
									dialogWidgetSettingsUrlParametersString += "</ul>";
									$('#dialogWidgetSettingsUrlParameters').html(dialogWidgetSettingsUrlParametersString).show();
									$('#dialogWidgetSettingsUrlParametersCollapsible').collapsible({accordion: false});
									$('select.dialogWidgetSettingsUrlParameters').select();
									dialogWidgetSettingsUrlParametersComboboxes.forEach(function(entry){
										enhanceTextInputToCombobox('#' + entry.id, entry.options, (typeof entry.iconsFromOption != udef ? entry.iconsFromOption : true));
									});
									var toDo = function(){
										listsOptions = [];
										for(objectId in iobrokerObjects){
											if (objectId.indexOf(adapter + ".") == 0 && objectId.indexOf(".Lists.") > -1){
												if (iobrokerObjects[objectId].common && iobrokerObjects[objectId].common.role && iobrokerObjects[objectId].common.role == "list.json" && iobrokerObjects[objectId].native && iobrokerObjects[objectId].native.iQontrolDatapointList) {
													listsOptions.push(objectId + "/" + (iobrokerObjects[objectId].common && iobrokerObjects[objectId].common.name || objectId));
												}
											}
										};
										enhanceTextInputToCombobox('.dialogWidgetSettingsUrlParameters.listJsonDatapoint', listsOptions.join(';'), false);
									}
									if (iobrokerObjectsReady) {
										toDo();
									} else {
										iobrokerObjectsReadyFunctions.push(toDo);
									}
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
									initInputClear();
									if (M) M.updateTextFields();
								} else {
									$('#dialogWidgetSettingsUrlParameters').html("").hide();
								}
							}
							break;

							case "widget-options":
							if (metaContent) {
								widgetOptions = tryParseJSON(metaContent.replace(/\'/g, "\""));
								if (widgetOptions){
									var dialogWidgetSettingsOptionsString = "";
									var dialogWidgetSettingsOptionsUnsupportedString;
									for(option in widgetOptions){
										if (iQontrolRoles["iQontrolWidget"].options[option]){
											var optionActualySet = (actualOptions.find(function(element){ return element.option == option;}) || {}).value;
											var optionAlreadySet = checkForOptionsAlreadySet && (widgetOptions[option] == optionActualySet);
											dialogWidgetSettingsOptionsString += "<label><input class='dialogWidgetSettingsOptions' type='checkbox'" + (optionAlreadySet || (choseOptionsNotSet && !optionAlreadySet) ? " checked='checked'" : "") + "' data-option='" + option + "' data-value='" + widgetOptions[option] + "'><span style='height: auto;'><b>" + _(iQontrolRoles["iQontrolWidget"].options[option].name) + "</b>: <u>" + widgetOptions[option] + "</u>" + (checkForOptionsAlreadySet ? (optionAlreadySet ? "&nbsp;<span style='color: green;'>&check;</span>" : "&nbsp;<span style='color: red;'>&cross;&nbsp;(" + _("actual set to") + ":&nbsp;" + optionActualySet + ")</span>") : "") + "</span></label><br>";
										} else {
											dialogWidgetSettingsOptionsUnsupportedString += options[option].name + ": " + widgetOptions[option] + "<br>";
										}
									};
									if (dialogWidgetSettingsOptionsUnsupportedString) dialogWidgetSettingsOptionsString += "<br><br>" + _("Unsupported settings:") + "<br>" + dialogWidgetSettingsOptionsUnsupportedString;
									if (dialogWidgetSettingsOptionsString.length){
										var html = "<b>" + _("Apply the following device options:") + "</b><br><br>";
										html += "<a class='btn-small chose' onclick='$(\".dialogWidgetSettingsOptions\").prop(\"checked\", true).trigger(\"change\");'><i class='large material-icons left'>check_box</i>" + _("All") + "</a>";
										html += "<a class='btn-small chose' onclick='$(\".dialogWidgetSettingsOptions\").prop(\"checked\", false).trigger(\"change\");'><i class='large material-icons left'>check_box_outline_blank</i>" + _("None") + "</a>";
										html += "<br><br>" + dialogWidgetSettingsOptionsString;
										$('#dialogWidgetSettingsOptions').html(html).show();
									} else {
										$('#dialogWidgetSettingsOptions').html("").hide();
									}
								} else {
									alert(_("Found settings for widget options, but the options are not valid (they need to be in a valid JSON-format)."));
								}
							}
							break;
							
							case "widget-replaceurl":
							if (metaContent) {
								$('#dialogWidgetSettings').data('replaceurl', metaContent);
								$('#dialogWidgetSettings').data('replaceurlabsolute', $(this).data('absolute'));
								$('#dialogWidgetSettingsReplaceurlDestination').html(metaContent);
								$('#dialogWidgetSettingsReplaceurlSwitchToDestination').off('click').on('click', function(){
									var dialogCallback = $('#dialogWidgetSettings').data('save-callback');
									if (typeof dialogCallback === 'function') dialogCallback("replaceurlSwitchToDestination");
								});
								$('.dialogWidgetSettingsReplaceurl').show();
							}
							break;
						}
					});
				});
			}
		});
	}

	//---------- Export / Import ----------
	//Export and Import devices
	$('#devicesExport').on('click', function(){
		initDialog('dialogDevicesExport', function(){ //save dialog
			var devicesToExport = [];
			$('.dialogDevicesExportDeviceListDevice').each(function(){
				if ($(this).prop('checked')) devicesToExport.push(views[devicesSelectedView].devices[$(this).data('index')]);
			});
			saveStringAsLocalFile(JSON.stringify(devicesToExport), "charset=utf-8", "text/json", "devices.json", true);
		}, function(){ //init dialog function 
			//Add devices to export list
			if (devicesSelectedView > -1){
				$('#dialogDevicesExportDeviceList').html("");
				views[devicesSelectedView].devices.forEach(function(device, index){
					$('#dialogDevicesExportDeviceList').append("<label><input class='dialogDevicesExportDeviceListDevice' type='checkbox'" + "' data-index='" + index + "'><span style='height: auto;'><b>" + device.commonName + "</b> (" + device.commonRole + ")</span></label><br>");
				});
				$('.dialogDevicesExportDeviceListDevice').on('change', function(){
					var oneChecked = false;
					$('.dialogDevicesExportDeviceListDevice').each(function(){
						if ($(this).prop('checked')) oneChecked = true;					
					});
					if (oneChecked) $('#dialogDevicesExport .btn-set').removeClass('disabled'); else $('#dialogDevicesExport .btn-set').addClass('disabled');
				});
			} else {
				$('#dialogDevicesExportDeviceList').html(_("There is no device on this view to export"));
			}
		});
	});
	$('#devicesImport').on('click', function(){
		loadLocalFileAsString(".json", function(result){
			var resultObj = tryParseJSON(result);
			var resultObjValid = true;
			if (!(resultObj && typeof resultObj == "object" && typeof resultObj.forEach == "function")){
				resultObjValid = false;
			}
			if (resultObjValid) {
				views[devicesSelectedView].devices = views[devicesSelectedView].devices.concat(resultObj);
				alert(_("Settings imported."));
				values2table('tableDevices', views[devicesSelectedView].devices, onChange, onTableDevicesReady);
				onChange();
			} else {
				alert(_("Error: Invalid data."));
			}
		});		
	});

	//+++++++++ TOOLBAR ++++++++++
	//Load Toolbar
	function loadToolbar(){
		$('.collapsible').collapsible();

		//Add Views to Selectbox for toolbar LinkedView
		var viewIds = [];
		views.forEach(function(element){ viewIds.push(element.commonName); });
		$('*[data-name="nativeLinkedView"]').data("options", viewIds.join(";"));
		//Fill Table
		values2table('tableToolbar', toolbar.items || [], onChange, onTableToolbarReady);

		//Add views to Selectbox for panel BACKGROUND_VIEW
		var viewIds = [""];
		views.forEach(function(element){ viewIds.push(adapter + "." + instance + ".Views." + element.commonName + "/" + element.commonName); });
		enhanceTextInputToCombobox("#panelBackgroundViewValue", "/;" + viewIds.join(";"), false, function(value){
			if (value && value != "" && !$("#panelAllowPostMessage").prop('checked')){
				if (confirm("Its recommended to allow postMessage-Communication for BACKGROUND_VIEW/URL/HTML. Enable this option now?")){
					$("#panelAllowPostMessage").prop('checked', 'checked').trigger('change');
				}
			}
		});

		//Add widgets and websites to Selectbox for panel BACKGROUND_URL
		enhanceTextInputToCombobox("#panelBackgroundURLValue", ["/" + _("(None)"), comboboxStrings.inbuiltWidgets, comboboxStrings.userWidgets], true);

		//Enhande panel commonRole with functions
		$('select.panelStates.commonRole').off('input change').on('input change', function(){
			var id = $(this).data('id');
			var valueId = id + "Value";
			var $value = $('#' + valueId);
			//Show or hide selectboxes
			if ($(this).val() == 'const'){
				$value.next("a").prop('style','');
			} else {
				$value.next("a").prop('style','display: none !important;');
			}
		}).trigger('change');

		//Enhance panel edit-buttons with functions
		$('a.panelStates[data-command="edit"]').off('click').on('click', function(){
			var id = $(this).data('id');
			var commonRoleId = id + "CommonRole";
			var valueId = id + "Value";
			var $commonRole = $('#' + commonRoleId);
			var $value = $('#' + valueId);
			if ($commonRole.val() == 'linkedState'){ //linkedState
				$('#dialogSelectId').data('selectidfor', valueId);
				initSelectId(function (sid) {
					sid.selectId('show', $value.val(), {type: 'state'}, function (newId) {
						if (newId) {
							$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
						}
					});
				});
			} else if ($commonRole.val() == 'const' || $commonRole.val() == 'calc'){ //const or calc
				initDialog('dialogDeviceEditStateConstant', function(){ //save dialog
					$('#' + $('#dialogDeviceEditStateConstantIndex').val()).val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n')).trigger('change');
				}, function(){ //init dialog function 
					$('#dialogDeviceEditStateConstantName').html(id || "");
					$('#dialogDeviceEditStateConstantIndex').val(valueId);
					$('#dialogDeviceEditStateConstantTextarea').val(($value.val() || "").replace(/\\n/g, '\n'));
					$('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
				});
			}
		});
	}

	//Enhance tableToolbar with functions
	function onTableToolbarReady(){
		var $div = $('#tableToolbar');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add Images to Selectbox for BackgroundImage
		enhanceTextInputToCombobox('#tableToolbar input[data-name="nativeIcon"]', ["/" + _("(None)"), comboboxStrings.jqueryIcons, comboboxStrings.inbuiltSymbols, comboboxStrings.userSymbols], true);
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit Toolbar Entry
			if (command === 'edit') {
				var toolbarIndex = $(this).data('index');
				$(this).on('click', function () {
					var _toolbarIndex = $(this).data('index');
					initDialog('dialogToolbarEdit', function(){ //save dialog
						var _toolbarIndex = $('#dialogToolbarEditToolbarIndex').val();
						$('.colorpicker-element').trigger('blur');
						toolbar.items[_toolbarIndex].states = dialogToolbarEditStatesTable;
						toolbar.items[_toolbarIndex].options = [{option: "badgeWithoutUnit", type: "checkbox", value: $("#dialogToolbarEditOption_BadgeWithoutUnit").prop('checked')}];
						onTableToolbarReady();
					}, function(){ //init dialog function
						$('#dialogToolbarEditCommonName').html(toolbar.items[_toolbarIndex].commonName || "");
						$('#dialogToolbarEditToolbarIndex').val(_toolbarIndex);
						dialogToolbarEditStates = toolbar.items[_toolbarIndex].states || [];
						dialogToolbarEditStatesTable = [];
						//build states table
						["BADGE", "BADGE_COLOR"].forEach(function(entry){ //push all corresponding states for the selected role into the table
							var commonRole  = (dialogToolbarEditStates.find(function(element){ return element.state == entry;}) || {}).commonRole || "";
							var value = (dialogToolbarEditStates.find(function(element){ return element.state == entry;}) || {}).value || "";
							if (commonRole == ""){
								if (entry == "BADGE_COLOR"){
									commonRole = "const";
								} else {
									commonRole = "linkedState";
								}
							}
							dialogToolbarEditStatesTable.push({'state':entry, 'commonRole':commonRole, 'value':value});
						});
						//Fill Table
						values2table('tableDialogToolbarEditStates', dialogToolbarEditStatesTable, onChange, ontableDialogToolbarEditStatesReady);
						$('#dialogToolbarEdit .btn-preview').data('preview-render-view', "iqontrol." + instance + ".Views." + views[0].commonName);
						//Options
						$("#dialogToolbarEditOption_BadgeWithoutUnit").prop('checked', ((toolbar.items[_toolbarIndex].options || []).find(function(element){ return element.option == 'badgeWithoutUnit';}) || {}).value || false);
					});
				});
			}
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
					tableResorted.push(toolbar.items[sequence[i]]);
				}
				toolbar.items = tableResorted;
				onChange();
				values2table('tableToolbar', toolbar.items, onChange, onTableToolbarReady);
				$("#tableToolbar tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}
	
	function ontableDialogToolbarEditStatesReady(){
		var $div = $('#tableDialogToolbarEditStates');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Make State Readonly and add id for selectId-Dialog
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'state') {
				$(this).prop('readonly', true);
			}
			if (name === 'value') {
				var stateIndex = $(this).data('index');
				$(this).prop('id', 'tableDialogToolbarEditStatesValue_' + stateIndex);
			}
		});
		//Role
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'commonRole') {
				var stateIndex = $(this).data('index');
				$(this).on('input change', function(){
					(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
						//Show or hide selectboxes
						var _stateIndex = stateIndex;
						if (dialogToolbarEditStatesTable[stateIndex].commonRole == 'const'){
							$("#tableDialogToolbarEditStatesValue_" + _stateIndex).next("a").prop('style','');
						} else {
							$("#tableDialogToolbarEditStatesValue_" + _stateIndex).next("a").prop('style','display: none !important;');
						}
						if (dialogToolbarEditStatesTable[stateIndex].state == "BADGE_COLOR" ){ //COLOR - init ColorPicker
							var $targetInput = $('#tableDialogToolbarEditStatesValue_' + _stateIndex);
							if (dialogToolbarEditStatesTable[stateIndex].commonRole == 'const'){
								var oldVal = $targetInput.val();
								if (!$targetInput.data('materialize-color-picker-initialized')){
									$targetInput.colorpicker().on('changeColor', function(event){
										if (event.color) $(this).css('border-right', '10px solid rgba(' + event.color.toRGB().r + ', ' + event.color.toRGB().g + ', ' + event.color.toRGB().b + ', ' + event.color.toRGB().a + ')');
									});
									if (oldVal == "") $targetInput.val("");
									$targetInput.on('change', function(){
										if ($(this).val() == "") {
											$(this).css('border-right', '0px solid black');
										} else {
											$(this).trigger('changeColor');
										}
									});
									$targetInput.on('blur', function(){
										dialogToolbarEditStatesTable[$targetInput.data('index')].value = $(this).val();
										console.log("Saved color-picker value " + $(this).val());
									});
									$targetInput.data('materialize-color-picker-initialized', true);
								}
								if (isValidColorString(oldVal)){
									$targetInput.trigger('change');
								}
							} else {
								if ($targetInput.data('materialize-color-picker-initialized')){
									$targetInput.colorpicker('destroy');
									$targetInput.data('materialize-color-picker-initialized', false);
								}
								$targetInput.css('border-right', '0px solid black');
							}
						}
					})(); //<--End Closure
				}).trigger('change');
			}
			$(this).select();
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit (SelectId or Edit Text)
			if (command === 'edit') {
				$(this).on('click', function () {
					var stateIndex = $(this).data('index');
					var stateValue = (dialogToolbarEditStatesTable[stateIndex].value || "").replace(/\\n/g, '\n');
					if (dialogToolbarEditStatesTable[stateIndex].commonRole == 'const' || dialogToolbarEditStatesTable[stateIndex].commonRole == 'calc') { //const or calc
						if (dialogToolbarEditStatesTable[stateIndex].commonRole == 'const' && dialogToolbarEditStatesTable[stateIndex].state == "BADGE_COLOR"){ //const - COLOR - open Colorpicker
							var $targetInput = $('#tableDialogToolbarEditStatesValue_' + stateIndex);
							if ($targetInput.data('materialize-color-picker-initialized')){
								$targetInput.colorpicker('show');
							}
						} else { //const or calc - TEXT - open editText dialog
							initDialog('dialogDeviceEditStateConstant', function(){ //save dialog
								var stateIndex = $('#dialogDeviceEditStateConstantIndex').val();
								$('#tableDialogToolbarEditStatesValue_' + stateIndex).val($('#dialogDeviceEditStateConstantTextarea').val().replace(/\n/g, '\\n')).trigger('change');
							}, function(){ //init dialog function 
								$('#dialogDeviceEditStateConstantName').html(dialogToolbarEditStatesTable[stateIndex].state || "");
								$('#dialogDeviceEditStateConstantIndex').val(stateIndex);
								$('#dialogDeviceEditStateConstantTextarea').val((dialogToolbarEditStatesTable[stateIndex].value || "").replace(/\\n/g, '\n'));
								$('#dialogDeviceEditStateConstantTextarea').trigger('autoresize');
							});
						}
					} else { //linkedState - open selectID dialog
						$('#dialogSelectId').data('selectidfor', 'tableDialogToolbarEditStatesValue_' + stateIndex);
						initSelectId(function (sid) {
							sid.selectId('show', $('#tableDialogToolbarEditStatesValue_' + stateIndex).val(), {type: 'state'}, function (newId) {
								if (newId) {
									$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
								}
							});
						});
					}
				});
			}
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
		$('#imagesUploadFileSubmit').addClass('disabled').removeClass('pulse');
		var files = $('#imagesUploadFile')[0].files || $('#imagesUploadFile')[0].dataTransfer.files; // FileList object
		if (!files.length) return;
		for (i=0; i<files.length; i++){
			var file = files[i];
			filename = file.name || "";
			filetype = (file.type == "" ? filename.substr(filename.lastIndexOf('.')) : file.type) || "";
			if (filetype == "") {
				alert(_("%s is directory. Only file upload allowed.", escape(filename)));
				return;
			}
			if (file.size > 10 * 1024 * 1024) {
				alert(_("File %s is too big. Maximum 10MB", escape(filename)));
				return;
			}
			if ($('#imagesUploadFile').prop('accept') &&  $('#imagesUploadFile').prop('accept').split(', ').indexOf(filetype.toLowerCase()) == -1){
				alert(_("File %s has wrong filetype. Allowed file types: ", escape(filename)) + $('#imagesUploadFile').prop('accept'));
				return;
			}
			$('#imagesUploadFileSubmit').removeClass('disabled').addClass('pulse');
		}
	}
	var imagesUploadFileHandleCount = 0;
	function imagesUploadHandleSubmit() {
		var files = $('#imagesUploadFile')[0].files || $('#imagesUploadFile')[0].dataTransfer.files; // FileList object
		if (!files.length) return;
		$('#imagesUploadFileSubmit').addClass('disabled').removeClass('pulse');
		$('#imagesUploadFileFormProgress').show();
		for (i=0; i<files.length; i++){
			var file = files[i];
			imagesUploadFileHandleCount++;
			uploadFile(file, userfilesImagePath + $('#imagesSelectedDir').val(), function (name) {
				$('#imagesUploadFileForm')[0].reset();
				imagesUploadFileHandleCount--;
				if (imagesUploadFileHandleCount == 0) {
					getImages(function(){
						values2table('tableImages', images, onChange, onTableImagesReady);
						var dummy = $('#imagesSelectedDir').val();
						imagesSelectedDirFillSelectbox();
						$('#imagesSelectedDir').val(dummy).trigger('change');
						$('#imagesSelectedDir').select();
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
		if (typeof path == 'function') callback = path;
		if (typeof path != "string") {
			path = userfilesImagePath;
			images = [];
			imagesDirs = [{
						dirname: 		"/",
						dirnameBS: 		"\\",
						dirnameVS: 		"|"
			}];
		};
		socketCallback = function(err, obj){
			if (obj) obj.forEach(function(element){
				if (element.isDir) {
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
			if (getImagesRunningTasks > 0) {
				getImagesRunningTasks -= 1;
			} else { //Got all images
				imagesDirs.sort(function(a, b){
					return ((a.dirname.toLowerCase() > b.dirname.toLowerCase()) ? 1 : ((b.dirname.toLowerCase() > a.dirname.toLowerCase()) ? -1 : 0));
				});
				imagesDirs.forEach(function(imagesDir){
					var imagesDirFiles = [];
					images.forEach(function(image){
						if (image.filename.indexOf(imagesDir.dirname) == 0 && (image.filename.lastIndexOf('/') == 0 || image.filename.lastIndexOf('/') == imagesDir.dirname.length)){
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
				if (typeof callback == 'function') callback();
				fillVariableComboboxStrings();
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
		if (val == "/"){
			$('#imagesUploadRenameDir').addClass('disabled');
			$('#imagesUploadDeleteDir').addClass('disabled');
		} else {
			$('#imagesUploadRenameDir').removeClass('disabled');
			$('#imagesUploadDeleteDir').removeClass('disabled');
		}
		if (val && val.indexOf("/userwidgets") == 0){
			$('#imagesUploadFile').prop('accept', 'image/png, image/jpeg, image/jpg, image/gif, image/svg, image/svg+xml, text/html, text/css, text/javascript');
			$('.imagesUploadCreateFile').removeClass('hide');
		} else if (val && val.indexOf("/userfonts") == 0){
			$('#imagesUploadFile').prop('accept', '.otf, application/x-font-opentype, .ttf, application/x-font-ttf, application/x-font-truetype .woff, application/font-woff, .woff2, application/font-woff2, .eot, application/vnd.ms-fontobject');
			$('.imagesUploadCreateFile').addClass('hide');
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
					if ($(this).val().indexOf(val) == 0 && $(this).val().lastIndexOf("/") <= val.length) {
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
				if (filename.endsWith(".shtml") || filename.endsWith(".ehtml") || filename.endsWith(".shtm") || filename.endsWith(".htm") || filename.endsWith(".html")){
					$(this).replaceWith("<img src='" + previewLink + "/images/icons/file_html_edit.png' data-filetype='htmlmixed' data-filename='" + filename + "' data-filepath='./.." + userfilesImagePath + filename + "' style='max-width:50px; max-height:50px; cursor:hand;' class='code'></img>");
				} else if (filename.endsWith(".css")){
					$(this).replaceWith("<img src='" + previewLink + "/images/icons/file_css_edit.png' data-filetype='css' data-filename='" + filename + "' data-filepath='./.." + userfilesImagePath + filename + "' style='max-width:50px; max-height:50px; cursor:hand;' class='code'></img>");
				} else if (filename.endsWith(".mjs") || filename.endsWith(".js")){
					$(this).replaceWith("<img src='" + previewLink + "/images/icons/file_js_edit.png' data-filetype='javascript' data-filename='" + filename + "' data-filepath='./.." + userfilesImagePath + filename + "' style='max-width:50px; max-height:50px; cursor:hand;' class='code'></img>");
				} else if (filename.endsWith(".otf") || filename.endsWith(".ttf") || filename.endsWith(".woff") || filename.endsWith(".woff2") || filename.endsWith(".eot")){
					$(this).replaceWith("<img src='" + previewLink + "/images/icons/file_font.png' data-filetype='font' data-filename='" + filename + "' data-filepath='./.." + userfilesImagePath + filename + "' style='max-width:50px; max-height:50px; cursor:default;' class='font'></img>");
				} else {
					$(this).replaceWith("<img src='" + previewLink + "/.." + userfilesImagePath + filename + "' data-filetype='image' data-filename='" + filename + "' data-filepath='./.." + userfilesImagePath + filename + "' style='max-width:50px; max-height:50px; cursor:zoom-in;' class='thumbnail'></img>");
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
					if (newName != "" && newName != oldName){
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
				$(this).addClass('red');
				$(this).find('i').html('delete_forever');
				$(this).on('click', function (e) {
					var index = $(this).data('index');
					if (confirm(_("Delete file %s on server? Warning: This can't be undone!", images[index].filename))){
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
			var that = this;
			initDialog('dialogImagePopup', function(){}, function(){ //init dialog function 
				var imageLink = $(that).attr('src');
				//Check, if images is used
				var imageName = $(that).data('filepath');
				var imageUsedIn = [];
				views.forEach(function(view){
					if (typeof view.nativeBackgroundImage != udef && view.nativeBackgroundImage.replace(/\\/g, "/") == imageName) imageUsedIn.push(_("View") + ": " + view.commonName + " " + _("as backgroundimage"));
					view.devices.forEach(function(device){
						if ((typeof device.nativeBackgroundImage != udef && device.nativeBackgroundImage.replace(/\\/g, "/") == imageName) || (typeof device.nativeBackgroundImageActive != udef && device.nativeBackgroundImageActive.replace(/\\/g, "/") == imageName)) imageUsedIn.push(_("View") + ": " + view.commonName + ", " + _("Device") + ": " + device.commonName + " " + _("as backgroundimage"));
						if (device.options) device.options.forEach(function(option){
							if (option.type == "icon" && option.value.replace(/\\/g, "/") == imageName) imageUsedIn.push(_("View") + ": " + view.commonName + ", " + _("Device") + ": " + device.commonName + " " + _("as icon"));
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
			});

		});
		//CodeEditor
		$('.code').on('click', function(){
			var that = this;
			initDialog('dialogCodeEditor', function(){}, function(){ //init dialog function 
				var fileName = $(that).data('filename');
				$("#dialogCodeEditorFileName").text(fileName);
				$("#dialogCodeEditorFileType").text($(that).data('filetype'));
				dialogCodeEditorCodeMirror.setOption("mode", $("#dialogCodeEditorFileType").text());
				dialogCodeEditorCodeMirror.setValue("");
				dialogCodeEditorCodeMirrorChanged = false;
				$('#dialogCodeEditor .btn-set').addClass('disabled');
				dialogCodeEditorCodeMirror.execCommand('goDocStart');
				dialogCodeEditorCodeMirror.refresh();
				setTimeout(function(){
					dialogCodeEditorCodeMirror.refresh();
				}, 250);
				//$("#dialogCodeEditor").modal('open');
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
		if (newName != ""){
			if (newName.indexOf('/') != 0) newName = "/" + newName;
			createDir(userfilesImagePath + newName, function(err){
				getImages(function(err){
					values2table('tableImages', images, onChange, onTableImagesReady);
					if (!err) var dummy = newName; else var dummy = $('#imagesSelectedDir').val();
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
		if (newName != "" && newName != oldName){
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
		if (confirm(_("Delete directory %s and all its content on server? Warning: This can't be undone!", $('#imagesSelectedDir').val()))){
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
			imagesSelectedDirFillSelectbox();
			$('#imagesSelectedDir').val(dummy).trigger('change');
			$('#imagesSelectedDir').select();
		});
	});

	//Download Dir As Zip
	$('#imagesUploadDownloadDirAsZip').on('click', function(){
		$('#imagesUploadDownloadDirAsZip').addClass('disabled');
		$('#imagesUploadDownloadDirAsZipIcon').text("hourglass_empty");
		$('#imagesUploadDownloadDirAsZipProgress').show();
		if (confirm(_("Depending on the size it may take a while to create the zip file."))){
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
	
	//Upload Dir As Zip
	$('#imagesUploadUploadDirAsZip').on('click', function(){
		loadLocalFileAsArrayBuffer(".zip", function(result){
			if (result) {
				if (confirm(_("Really import files? Exisiting files will be overwritten. Depending on the size it may take a while to unpack the zip file."))){
					$('#imagesUploadUploadDirAsZip').addClass('disabled');
					$('#imagesUploadUploadDirAsZipIcon').text("hourglass_empty");
					$('#imagesUploadUploadDirAsZipProgress').show().find('.indeterminate, .determinate').removeClass('determinate').addClass('indeterminate').css('width', '');
					JSZip.loadAsync(result).then(function(zip){
						var uploadCount = 0;
						var uploadCountMax = 0;
						zip.forEach(async function(relativePath, file){
							console.log("Processing ZIP-File entry " + file.name);
							if(!file.dir){
								uploadCount++;
								if(uploadCountMax < uploadCount) uploadCountMax = uploadCount;
								console.log("Uploading " + file.name + ". " + (uploadCountMax - uploadCount) + "/" + uploadCountMax);
								$('#imagesUploadUploadDirAsZipProgress').show().find('.indeterminate, .determinate').removeClass('indeterminate').addClass('determinate').css('width', Math.floor((uploadCountMax - uploadCount) / uploadCountMax * 100) + '%');
								file.async("blob").then(function(blob){
									blob.name = relativePath.substr(relativePath.lastIndexOf("/") + 1);
									var _path = userfilesImagePath + $('#imagesSelectedDir').val() + "/" + relativePath;
									_path = _path.substr(0, _path.lastIndexOf("/"));
									uploadFile(blob, _path, function(name){
										uploadCount--;
										console.log(name + " uploaded. " + (uploadCountMax - uploadCount) + "/" + uploadCountMax);
										$('#imagesUploadUploadDirAsZipProgress').show().find('.indeterminate, .determinate').removeClass('indeterminate').addClass('determinate').css('width', Math.floor((uploadCountMax - uploadCount) / uploadCountMax * 100) + '%');
										if(uploadCount == 0){
											alert(_("Files imported."));
											$('#imagesUploadRefresh').trigger("click");
											$('#imagesUploadUploadDirAsZipIcon').text("file_upload");
											$('#imagesUploadUploadDirAsZip').removeClass('disabled');
											$('#imagesUploadUploadDirAsZipProgress').hide();										
										}
									})
								});
							} else {
								var _path = userfilesImagePath + $('#imagesSelectedDir').val() + "/" + relativePath.substr(0, relativePath.lastIndexOf("/"));
								var dirExistance = await checkDirExistance(_path);
								console.log(dirExistance);
								if (!dirExistance) {
									console.log("Creating directory " + _path);
									await createDirAsync(_path);
								}
							}
						});
					}, function(err){
						console.log("Error reading zip file: " + err.message);
						alert(_("Error: Invalid data."));
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

	//CreateFile-Buttons
	$('.imagesUploadCreateFile').on('click', function(){
		var filetype = $(this).data('filetype');
		var filename = prompt("Enter filename");
		if (filename){
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
			if (typeof view.nativeBackgroundImage != udef && view.nativeBackgroundImage.replace(/\\/g, "/").indexOf(oldName) == 0 && view.nativeBackgroundImage.length >= oldName.length) view.nativeBackgroundImage = newName + view.nativeBackgroundImage.replace(/\\/g, "/").substring(oldName.length);
			view.devices.forEach(function(device){
				if (typeof device.nativeBackgroundImage != udef && device.nativeBackgroundImage.replace(/\\/g, "/").indexOf(oldName) == 0 && device.nativeBackgroundImage.length >= oldName.length) device.nativeBackgroundImage = newName + device.nativeBackgroundImage.replace(/\\/g, "/").substring(oldName.length);
				if (typeof device.nativeBackgroundImageActive != udef && device.nativeBackgroundImageActive.replace(/\\/g, "/").indexOf(oldName) == 0 && device.nativeBackgroundImageActive.length >= oldName.length) device.nativeBackgroundImageActive = newName + device.nativeBackgroundImageActive.replace(/\\/g, "/").substring(oldName.length);
				if (device.options) device.options.forEach(function(option){
					if (option.type == "icon" && option.value.replace(/\\/g, "/").indexOf(oldName) == 0 && option.value.length >= oldName.length) option.value = newName + option.value.replace(/\\/g, "/").substring(oldName.length);
				});
			});
		});
	}

	//++++++++++ LISTS ++++++++++
	//Load Lists
	function loadLists(){
		//Fill Table
		values2table('tableLists', lists, onChange, onTableListsReady);		
	}

	//Enhance addDefaultLists with functions
	var defaultLists = [{
		name: _("Service") + "&shy;" + _("messages"),
	 	materialIcon: "chat_bubble_outline", 
		description: _("Adds lists and a widget that counts service messages like unreachable devices or devices with empty battery, firmware-updates and so on"),
		lists: [{"active":true,"name":"UNREACH","selectors":[{"modifier":"add","type":"commonRole","operator":"eq","value":"indicator.unreach"},{"modifier":"remove","type":"id","operator":"c","value":"STICKY_"}],"filterAliases":true,"counters":[{"name":"ACTUAL","type":"value","operator":"eqt","value":"","conditions":[{"modifier":"&&","type":"value","operator":"eqt","value":""},{"modifier":"&&","type":"lcs","operator":"gt","value":"180"}],"unit":"Geräte"}],"triggerInterval":"","calculations":[],"combinations":[],"createNamesList":false,"createParentNamesList":true},{"active":true,"name":"LOWBAT","selectors":[{"modifier":"add","type":"id","operator":"ew","value":".LOWBAT"},{"modifier":"add","type":"commonRole","operator":"ew","value":"lowbat"}],"filterAliases":true,"counters":[{"name":"ACTUAL","unit":"Geräte","conditions":[{"modifier":"&&","type":"value","operator":"eqt","value":""}]}],"triggerInterval":"","calculations":[],"combinations":[],"createNamesList":false,"createParentNamesList":true},{"active":true,"name":"ERROR","selectors":[{"modifier":"add","type":"id","operator":"ew","value":".ERROR"},{"modifier":"add","type":"commonRole","operator":"eq","value":"indicator.error"}],"filterAliases":true,"counters":[{"name":"ACTUAL","unit":"","conditions":[{"modifier":"&&","type":"value","operator":"eqt","value":""},{"modifier":"&&","type":"valuelistValue","operator":"ne","value":"SABOTAGE"}]}],"triggerInterval":"","calculations":[],"combinations":[],"createNamesList":false,"createParentNamesList":true},{"active":true,"name":"MAINTENANCE","selectors":[{"modifier":"add","type":"id","operator":"ew","value":".MAINTAIN"},{"modifier":"add","type":"commonRole","operator":"eq","value":"indicator.maintenance"}],"filterAliases":true,"counters":[{"name":"ACTUAL","unit":"","conditions":[{"modifier":"&&","type":"value","operator":"eqt","value":""}]}],"triggerInterval":"","calculations":[],"combinations":[],"createNamesList":false,"createParentNamesList":true},{"active":true,"name":"SABOTAGE","selectors":[{"modifier":"add","type":"id","operator":"ew","value":".ERROR"},{"modifier":"add","type":"commonRole","operator":"eq","value":"indicator.error"}],"filterAliases":true,"counters":[{"name":"ACTUAL","unit":"","conditions":[{"modifier":"&&","type":"valuelistValue","operator":"eq","value":"SABOTAGE"}]}],"triggerInterval":"","calculations":[],"combinations":[],"createNamesList":false,"createParentNamesList":true},{"active":true,"name":"CONFIG_PENDING","selectors":[{"modifier":"add","type":"id","operator":"ew","value":".CONFIG_PENDING"}],"filterAliases":true,"counters":[{"name":"ACTUAL","unit":"","conditions":[{"modifier":"&&","type":"value","operator":"eqt","value":""}]}],"triggerInterval":"","calculations":[],"combinations":[],"createNamesList":false,"createParentNamesList":true},{"active":true,"name":"FIRMWARE","selectors":[{"modifier":"add","type":"id","operator":"ew","value":".firmware"},{"modifier":"remove","type":"commonType","operator":"ne","value":"boolean"}],"filterAliases":true,"counters":[{"name":"ACTUAL","unit":"","conditions":[{"modifier":"&&","type":"value","operator":"eqt","value":""}]}],"triggerInterval":"","calculations":[],"combinations":[],"createNamesList":false,"createParentNamesList":true},{"active":true,"name":"Servicemessages","selectors":[],"filterAliases":false,"counters":[],"triggerInterval":"","calculations":[{"name":"ACTUAL","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.UNREACH.ACTUAL"},{"operator":"+","id": adapter + "." + instance + ".Lists.LOWBAT.ACTUAL"},{"operator":"+","id": adapter + "." + instance + ".Lists.ERROR.ACTUAL"},{"operator":"+","id": adapter + "." + instance + ".Lists.MAINTENANCE.ACTUAL"},{"operator":"+","id": adapter + "." + instance + ".Lists.SABOTAGE.ACTUAL"},{"operator":"+","id": adapter + "." + instance + ".Lists.CONFIG_PENDING.ACTUAL"},{"operator":"+","id": adapter + "." + instance + ".Lists.FIRMWARE.ACTUAL"}]}],"combinations":[{"name":"ACTUAL_TEXT","unit":"","combinationSteps":[{"prefix":"","id": adapter + "." + instance + ".Lists.UNREACH.ACTUAL","postfix":_(" inaccessible device: "),"onlyIfOperator":"eq","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":"","type":"value"},{"prefix":"","id": adapter + "." + instance + ".Lists.UNREACH.ACTUAL","postfix":_(" inaccessible device: "),"onlyIfOperator":"gt","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":"","type":"value"},{"prefix":"\\r\\n","id": adapter + "." + instance + ".Lists.UNREACH.ACTUAL_PARENTNAMES_LIST","postfix":"\\r\\n\\r\\n\\r\\n","onlyIfOperator":"eqt","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":"","type":"value"},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.LOWBAT.ACTUAL","postfix":_(" device with empty battery: "),"onlyIfOperator":"eq","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.LOWBAT.ACTUAL","postfix":_(" devices with empty battery: "),"onlyIfOperator":"gt","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"\\r\\n","type":"value","id": adapter + "." + instance + ".Lists.LOWBAT.ACTUAL_PARENTNAMES_LIST","postfix":"\\r\\n\\r\\n\\r\\n","onlyIfOperator":"eqt","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.ERROR.ACTUAL","postfix":_(" faulty device: "),"onlyIfOperator":"eq","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.ERROR.ACTUAL","postfix":_(" faulty devices: "),"onlyIfOperator":"gt","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"\\r\\n","type":"value","id": adapter + "." + instance + ".Lists.ERROR.ACTUAL_PARENTNAMES_LIST","postfix":"\\r\\n\\r\\n\\r\\n","onlyIfOperator":"eqt","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.MAINTENANCE.ACTUAL","postfix":_(" time maintenance required: "),"onlyIfOperator":"eq","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.MAINTENANCE.ACTUAL","postfix":_(" times maintenance required: "),"onlyIfOperator":"gt","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"\\r\\n","type":"value","id": adapter + "." + instance + ".Lists.MAINTENANCE.ACTUAL_PARENTNAMES_LIST","postfix":"\\r\\n\\r\\n\\r\\n","onlyIfOperator":"eqt","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.SABOTAGE.ACTUAL","postfix":_(" device with sabotage alarm: "),"onlyIfOperator":"eq","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.SABOTAGE.ACTUAL","postfix":_(" devices with sabotage alarm: "),"onlyIfOperator":"gt","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"\\r\\n","type":"value","id": adapter + "." + instance + ".Lists.SABOTAGE.ACTUAL_PARENTNAMES_LIST","postfix":"\\r\\n\\r\\n\\r\\n","onlyIfOperator":"eqt","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.CONFIG_PENDING.ACTUAL","postfix":_(" time configuration data pending for transmission: "),"onlyIfOperator":"eq","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.CONFIG_PENDING.ACTUAL","postfix":_(" times configuration data pending for transmission: "),"onlyIfOperator":"gt","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"\\r\\n","type":"value","id": adapter + "." + instance + ".Lists.CONFIG_PENDING.ACTUAL_PARENTNAMES_LIST","postfix":"\\r\\n\\r\\n\\r\\n","onlyIfOperator":"eqt","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.FIRMWARE.ACTUAL","postfix":_(" device with firmware-update: "),"onlyIfOperator":"eq","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"","type":"value","id": adapter + "." + instance + ".Lists.FIRMWARE.ACTUAL","postfix":_(" devices with firmware-update: "),"onlyIfOperator":"gt","onlyIfValue":"1","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"\\r\\n","type":"value","id": adapter + "." + instance + ".Lists.FIRMWARE.ACTUAL_PARENTNAMES_LIST","postfix":"\\r\\n\\r\\n\\r\\n","onlyIfOperator":"eqt","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":""}]}],"createNamesList":false,"createParentNamesList":false,"logs":[{"name":"LOG_JSON","onChangeIDs":[{"id": adapter + "." + instance + ".Lists.Servicemessages.ACTUAL_TEXT"}],"onChangeDebounce":"","logSteps":[{"key":_("No."),"type":"count","id":""},{"key":_("Time"),"type":"octsDMYHMS","id":""},{"key":_("Quantity"),"type":"value","id": adapter + "." + instance + ".Lists.Servicemessages.ACTUAL"},{"key":_("Messages"),"type":"value","id": adapter + "." + instance + ".Lists.Servicemessages.ACTUAL_TEXT"}],"onChangeAddAllStepIDs":true,"addTo":"top","onChangeAddAllLogStepIDs":true,"onChangeIds":[{"id": adapter + "." + instance + ".Lists.Servicemessages.ACTUAL_TEXT"}],"onChangeAddAllLogStepIds":false}]}],
		devices: [{"commonName":_("Service") + "&shy;" + _("messages") + "|{" + adapter + "." + instance + ".Lists.Servicemessages.ACTUAL} " + _("Service") + "&shy;" + _("messages"),"nativeHeading":"","nativeLinkedView":"","nativeBackgroundImage":"","commonRole":"iQontrolValue","states":[{"state":"STATE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.Servicemessages.ACTUAL_TEXT"},{"state":"LEVEL","commonRole":"linkedState","value":""},{"state":"INFO_A","commonRole":"array","value":"[]"},{"state":"INFO_B","commonRole":"array","value":"[]"},{"state":"BATTERY","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.LOWBAT.ACTUAL"},{"state":"UNREACH","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.UNREACH.ACTUAL"},{"state":"ERROR","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.ERROR.ACTUAL"},{"state":"BACKGROUND_VIEW","commonRole":"const","value":""},{"state":"BACKGROUND_URL","commonRole":"const","value":""},{"state":"BACKGROUND_HTML","commonRole":"const","value":""},{"state":"ENLARGE_TILE","commonRole":"linkedState","value":""},{"state":"BADGE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.Servicemessages.ACTUAL"},{"state":"BADGE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_HIDE","commonRole":"linkedState","value":""},{"state":"URL","commonRole":"const","value":""},{"state":"HTML","commonRole":"const","value":""},{"state":"ADDITIONAL_CONTROLS","commonRole":"array","value":"[]"},{"state":"ADDITIONAL_INFO","commonRole":"array","value":"[]"}],"options":[{"option":"icon_on","type":"icon","value":"./images/icons/fluent/fluent_info_bubble_on.png"},{"option":"icon_off","type":"icon","value":"./images/icons/fluent/fluent_info_bubble_off.png"},{"option":"readonly","type":"checkbox","value":"true"},{"option":"stateCaption","type":"text","value":""},{"option":"levelCaption","type":"text","value":""},{"option":"renderLinkedViewInParentInstance","type":"checkbox","value":"false"},{"option":"renderLinkedViewInParentInstanceClosesPanel","type":"checkbox","value":"false"},{"option":"clickOnIconAction","type":"select","value":"openDialog"},{"option":"clickOnTileAction","type":"select","value":"openDialog"},{"option":"noZoomOnHover","type":"checkbox","value":"false"},{"option":"iconNoZoomOnHover","type":"checkbox","value":"false"},{"option":"hideDeviceName","type":"checkbox","value":"false"},{"option":"tileActiveStateId","type":"text","value":""},{"option":"tileActiveCondition","type":"select","value":""},{"option":"tileActiveConditionValue","type":"text","value":""},{"option":"sizeInactive","type":"select","value":""},{"option":"stateHeightAdaptsContentInactive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceInactive","type":"checkbox","value":"false"},{"option":"stateBigFontInactive","type":"checkbox","value":"false"},{"option":"bigIconInactive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsInactive","type":"checkbox","value":"false"},{"option":"transparentIfInactive","type":"checkbox","value":"false"},{"option":"noOverlayInactive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfInactive","type":"checkbox","value":"false"},{"option":"hideStateIfInactive","type":"checkbox","value":"false"},{"option":"hideIndicatorIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoAIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoBIfInactive","type":"checkbox","value":"false"},{"option":"hideDeviceIfInactive","type":"checkbox","value":"false"},{"option":"sizeActive","type":"select","value":""},{"option":"stateHeightAdaptsContentActive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceActive","type":"checkbox","value":"false"},{"option":"stateBigFontActive","type":"checkbox","value":"false"},{"option":"bigIconActive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsActive","type":"checkbox","value":"false"},{"option":"transparentIfActive","type":"checkbox","value":"false"},{"option":"noOverlayActive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfActive","type":"checkbox","value":"false"},{"option":"hideStateIfActive","type":"checkbox","value":"false"},{"option":"hideIndicatorIfActive","type":"checkbox","value":"false"},{"option":"hideInfoAIfActive","type":"checkbox","value":"false"},{"option":"hideInfoBIfActive","type":"checkbox","value":"false"},{"option":"hideDeviceIfActive","type":"checkbox","value":"false"},{"option":"sizeEnlarged","type":"select","value":"fullWidthIfEnlarged fullHeightIfEnlarged"},{"option":"stateHeightAdaptsContentEnlarged","type":"checkbox","value":"false"},{"option":"stateFillsDeviceEnlarged","type":"checkbox","value":"false"},{"option":"stateBigFontEnlarged","type":"checkbox","value":"false"},{"option":"bigIconEnlarged","type":"checkbox","value":"true"},{"option":"iconNoPointerEventsEnlarged","type":"checkbox","value":"false"},{"option":"transparentIfEnlarged","type":"checkbox","value":"false"},{"option":"noOverlayEnlarged","type":"checkbox","value":"false"},{"option":"tileEnlargeStartEnlarged","type":"checkbox","value":"false"},{"option":"tileEnlargeShowButtonInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowButtonActive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuActive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfEnlarged","type":"checkbox","value":"false"},{"option":"hideStateIfEnlarged","type":"checkbox","value":"false"},{"option":"hideIndicatorIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoAIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoBIfEnlarged","type":"checkbox","value":"false"},{"option":"hideIconEnlarged","type":"checkbox","value":"false"},{"option":"addTimestampToState","type":"select","value":""},{"option":"showTimestamp","type":"select","value":""},{"option":"infoARoundDigits","type":"number","value":"1"},{"option":"infoBRoundDigits","type":"number","value":"1"},{"option":"infoAShowName","type":"checkbox","value":"false"},{"option":"infoBShowName","type":"checkbox","value":"false"},{"option":"batteryIcon_on","type":"icon","value":""},{"option":"batteryActiveCondition","type":"select","value":""},{"option":"batteryActiveConditionValue","type":"text","value":""},{"option":"unreachIcon_on","type":"icon","value":""},{"option":"invertUnreach","type":"checkbox","value":"false"},{"option":"hideUnreachIfInactive","type":"checkbox","value":"false"},{"option":"errorIcon_on","type":"icon","value":""},{"option":"invertError","type":"checkbox","value":"false"},{"option":"adjustHeightToBackgroundView","type":"checkbox","value":"false"},{"option":"backgroundURLDynamicIframeZoom","type":"number","value":""},{"option":"backgroundURLPadding","type":"number","value":""},{"option":"backgroundURLAllowPostMessage","type":"checkbox","value":"false"},{"option":"backgroundURLNoPointerEvents","type":"checkbox","value":"false"},{"option":"overlayAboveBackgroundURL","type":"checkbox","value":"false"},{"option":"badgeWithoutUnit","type":"checkbox","value":"true"},{"option":"invertGlowHide","type":"checkbox","value":"false"},{"option":"popupWidth","type":"number","value":""},{"option":"popupHeight","type":"number","value":""},{"option":"popupFixed","type":"checkbox","value":"false"},{"option":"openURLExternal","type":"checkbox","value":"false"},{"option":"openURLExternalCaption","type":"text","value":""},{"option":"popupAllowPostMessage","type":"checkbox","value":"false"},{"option":"additionalControlsSectionType","type":"select","value":"collapsible"},{"option":"additionalControlsCaption","type":"text","value":"Additional Controls"},{"option":"additionalControlsHeadingType","type":"select","value":"none"},{"option":"additionalControlsHideNameForButtons","type":"checkbox","value":"false"},{"option":"additionalInfoSectionType","type":"select","value":"collapsible"},{"option":"additionalInfoCaption","type":"text","value":"Additional Infos"},{"option":"additionalInfoListType","type":"select","value":""},{"option":"additionalInfoListColumnCount","type":"select","value":"auto"},{"option":"additionalInfoListColumnWidth","type":"number","value":""},{"option":"showStateAndLevelSeparatelyInTile","type":"select","value":""}],"nativeBackgroundImageActive":"","nativeHeadingOptions":""},
				  {"commonName":"Service-Log","nativeHeading":"","nativeLinkedView":"","nativeBackgroundImage":"","nativeBackgroundImageActive":"","commonRole":"iQontrolButton","states":[{"state":"STATE","commonRole":"linkedState","value":adapter + "." + instance + ".Lists.Servicemessages.LOG_JSON_CLEAR"},{"state":"SET_VALUE","commonRole":"const","value":"true"},{"state":"OFF_SET_VALUE","commonRole":"const","value":""},{"state":"INFO_A","commonRole":"array","value":"[]"},{"state":"INFO_B","commonRole":"array","value":"[]"},{"state":"BATTERY","commonRole":"linkedState","value":""},{"state":"UNREACH","commonRole":"linkedState","value":""},{"state":"ERROR","commonRole":"linkedState","value":adapter + "." + instance + ".Lists.Servicemessages.LOG_JSON_COUNT"},{"state":"BACKGROUND_VIEW","commonRole":"const","value":""},{"state":"BACKGROUND_URL","commonRole":"const","value":"./images/widgets/json-table/json-table.html?tableMode=columntoggle&colsSort=timestamp%3Bcount%3Bmessages&colsFilter=&translations=&useThisDatapoint=" + encodeURI(adapter) + "." + encodeURI(instance) + ".Lists.Servicemessages.LOG_JSON&breakpoints=20%3B30%3B40%3B50%3B60%3B70%3B80&colsAlwaysVisible=&colsPreferablyVisible=" + encodeURI(_("Messages")) + "&colsPreferablyVisibleAreVisibleAtStart=true&headHideColumntoggleButton=false&dataTranspose=false&dataTransposeKeycolCaption=Key&dataTransposeValcolsPrefix=Value%20&dataConvertObjectToArrayKeycolCaption=Nr.&columnSortEnabled=true&columnSortEnabledColsFilter=true&columnSortCol=Nr.&columnSortColDesc=true&columnSortColHideIndicator=false&rowsLimit=25&rowsLimitLoadMore=true&rowsLimitLoadMoreCaption=...&headHide=false&scrollbarHide=true&replaceCRwithBR=true&colorBackground=&colorBackgroundOdd=&colorText=&colorTextOdd=&colorTextShadow=&colorTextShadowOdd=&colorBackgroundDark=&colorBackgroundOddDark=&colorTextDark=&colorTextOddDark=&colorTextShadowDark=&colorTextShadowOddDark=&iconCols=&icon1Url=&icon1Caption=&icon1String=&icon2Url=&icon2Caption=&icon2String=&icon3Url=&icon3Caption=&icon3String=&icon4Url=&icon4Caption=&icon4String=&icon5Url=&icon5Caption=&icon5String=&icon6Url=&icon6Caption=&icon6String=&icon7Url=&icon7Caption=&icon7String=&icon8Url=&icon8Caption=&icon8String=&icon9Url=&icon9Caption=&icon9String=&icon10Url=&icon10Caption=&icon10String=&icon11Url=&icon11Caption=&icon11String=&icon12Url=&icon12Caption=&icon12String=&datapointDetectionEnabled=true&datapointIdCol=id&datapointIdColFilter=true&datapointExtendTableCols=parentName%3BplainText&datapointExtendTableColsDefaultTranslationLanguage=en&datapointToggleCols=plainText&="},{"state":"BACKGROUND_HTML","commonRole":"const","value":""},{"state":"ENLARGE_TILE","commonRole":"linkedState","value":""},{"state":"BADGE","commonRole":"linkedState","value":adapter + "." + instance + ".Lists.Servicemessages.LOG_JSON_COUNT"},{"state":"BADGE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_HIDE","commonRole":"linkedState","value":""},{"state":"URL","commonRole":"const","value":""},{"state":"HTML","commonRole":"linkedState","value":""},{"state":"ADDITIONAL_CONTROLS","commonRole":"array","value":"[]"},{"state":"ADDITIONAL_INFO","commonRole":"array","value":"[]"}],"options":[{"option":"icon_on","type":"icon","value":""},{"option":"icon_off","type":"icon","value":""},{"option":"readonly","type":"checkbox","value":"false"},{"option":"stateCaption","type":"text","value":""},{"option":"renderLinkedViewInParentInstance","type":"checkbox","value":"false"},{"option":"renderLinkedViewInParentInstanceClosesPanel","type":"checkbox","value":"false"},{"option":"clickOnIconAction","type":"select","value":"toggle"},{"option":"clickOnTileAction","type":"select","value":"enlarge"},{"option":"noZoomOnHover","type":"checkbox","value":"true"},{"option":"iconNoZoomOnHover","type":"checkbox","value":"false"},{"option":"hideDeviceName","type":"checkbox","value":"false"},{"option":"tileActiveStateId","type":"text","value":adapter + "." + instance + ".Lists.Servicemessages.LOG_JSON_COUNT"},{"option":"tileActiveCondition","type":"select","value":"gt"},{"option":"tileActiveConditionValue","type":"text","value":"0"},{"option":"sizeInactive","type":"select","value":""},{"option":"stateHeightAdaptsContentInactive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceInactive","type":"checkbox","value":"false"},{"option":"stateBigFontInactive","type":"checkbox","value":"false"},{"option":"bigIconInactive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsInactive","type":"checkbox","value":"false"},{"option":"transparentIfInactive","type":"checkbox","value":"false"},{"option":"noOverlayInactive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"true"},{"option":"hideDeviceNameIfInactive","type":"checkbox","value":"false"},{"option":"hideStateIfInactive","type":"checkbox","value":"true"},{"option":"hideIndicatorIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoAIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoBIfInactive","type":"checkbox","value":"false"},{"option":"hideDeviceIfInactive","type":"checkbox","value":"false"},{"option":"sizeActive","type":"select","value":""},{"option":"stateHeightAdaptsContentActive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceActive","type":"checkbox","value":"false"},{"option":"stateBigFontActive","type":"checkbox","value":"false"},{"option":"bigIconActive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsActive","type":"checkbox","value":"false"},{"option":"transparentIfActive","type":"checkbox","value":"false"},{"option":"noOverlayActive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"true"},{"option":"hideDeviceNameIfActive","type":"checkbox","value":"false"},{"option":"hideStateIfActive","type":"checkbox","value":"true"},{"option":"hideIndicatorIfActive","type":"checkbox","value":"false"},{"option":"hideInfoAIfActive","type":"checkbox","value":"false"},{"option":"hideInfoBIfActive","type":"checkbox","value":"false"},{"option":"hideDeviceIfActive","type":"checkbox","value":"false"},{"option":"sizeEnlarged","type":"select","value":"fullWidthIfEnlarged fullHeightIfEnlarged"},{"option":"stateHeightAdaptsContentEnlarged","type":"checkbox","value":"false"},{"option":"stateFillsDeviceEnlarged","type":"checkbox","value":"false"},{"option":"stateBigFontEnlarged","type":"checkbox","value":"false"},{"option":"bigIconEnlarged","type":"checkbox","value":"true"},{"option":"iconNoPointerEventsEnlarged","type":"checkbox","value":"true"},{"option":"transparentIfEnlarged","type":"checkbox","value":"false"},{"option":"noOverlayEnlarged","type":"checkbox","value":"true"},{"option":"tileEnlargeStartEnlarged","type":"checkbox","value":"false"},{"option":"tileEnlargeShowButtonInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowButtonActive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuActive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfEnlarged","type":"checkbox","value":"true"},{"option":"hideStateIfEnlarged","type":"checkbox","value":"true"},{"option":"hideIndicatorIfEnlarged","type":"checkbox","value":"true"},{"option":"hideInfoAIfEnlarged","type":"checkbox","value":"true"},{"option":"hideInfoBIfEnlarged","type":"checkbox","value":"true"},{"option":"hideIconEnlarged","type":"checkbox","value":"true"},{"option":"addTimestampToState","type":"select","value":""},{"option":"showTimestamp","type":"select","value":""},{"option":"infoARoundDigits","type":"number","value":"1"},{"option":"infoBRoundDigits","type":"number","value":"1"},{"option":"infoAShowName","type":"checkbox","value":"false"},{"option":"infoBShowName","type":"checkbox","value":"false"},{"option":"batteryIcon_on","type":"icon","value":""},{"option":"batteryActiveCondition","type":"select","value":""},{"option":"batteryActiveConditionValue","type":"text","value":""},{"option":"unreachIcon_on","type":"icon","value":""},{"option":"invertUnreach","type":"checkbox","value":"false"},{"option":"hideUnreachIfInactive","type":"checkbox","value":"false"},{"option":"errorIcon_on","type":"icon","value":""},{"option":"invertError","type":"checkbox","value":"false"},{"option":"adjustHeightToBackgroundView","type":"checkbox","value":"false"},{"option":"backgroundURLDynamicIframeZoom","type":"number","value":""},{"option":"backgroundURLPadding","type":"number","value":""},{"option":"backgroundURLAllowPostMessage","type":"checkbox","value":"true"},{"option":"backgroundURLNoPointerEvents","type":"checkbox","value":"false"},{"option":"overlayAboveBackgroundURL","type":"checkbox","value":"false"},{"option":"badgeWithoutUnit","type":"checkbox","value":"true"},{"option":"invertGlowHide","type":"checkbox","value":"false"},{"option":"popupWidth","type":"number","value":""},{"option":"popupHeight","type":"number","value":""},{"option":"popupFixed","type":"checkbox","value":"false"},{"option":"openURLExternal","type":"checkbox","value":"false"},{"option":"openURLExternalCaption","type":"text","value":""},{"option":"popupAllowPostMessage","type":"checkbox","value":"true"},{"option":"additionalControlsSectionType","type":"select","value":"collapsible"},{"option":"additionalControlsCaption","type":"text","value":"Additional Controls"},{"option":"additionalControlsHeadingType","type":"select","value":"none"},{"option":"additionalControlsHideNameForButtons","type":"checkbox","value":"false"},{"option":"additionalInfoSectionType","type":"select","value":"collapsible"},{"option":"additionalInfoCaption","type":"text","value":"Additional Infos"},{"option":"additionalInfoListType","type":"select","value":""},{"option":"additionalInfoListColumnCount","type":"select","value":"auto"},{"option":"additionalInfoListColumnWidth","type":"number","value":""},{"option":"showState","type":"checkbox","value":"false"},{"option":"buttonCaption","type":"text","value":"Log leeren"},{"option":"returnToOffSetValueAfter","type":"number","value":""},{"option":"closeDialogAfterExecution","type":"checkbox","value":"false"}],"nativeHeadingOptions":""}]
	}, {
		name: "Adapter-Monitor",
	 	materialIcon: "apps", 
		description: _("Adds lists and a widget that monitors the ioBroker-Adapters and lists Adapter-Errors"),
		lists: [{"active":true,"name":"ADAPTER","selectors":[{"modifier":"add","type":"type","operator":"eq","value":"instance"}],"filterAliases":false,"sorting":"parentNames asc","separator":", ","createNamesList":true,"createParentNamesList":false,"createValuesList":false,"counters":[],"triggerInterval":"","calculations":[],"combinations":[]},{"active":true,"name":"Adapter-Monitor","selectors":[{"modifier":"add","type":"type","operator":"eq","value":"instance"},{"modifier":"remove","type":"commonMode","operator":"ne","value":"daemon"},{"modifier":"remove","type":"commonEnabled","operator":"ne","value":"true"}],"filterAliases":false,"sorting":"names asc","separator":", ","createNamesList":true,"createParentNamesList":false,"createValuesList":false,"counters":[{"name":"Green","unit":"","conditions":[{"modifier":"&&","type":"alive","operator":"eqt","value":""},{"modifier":"&&","type":"connection","operator":"eqt","value":""},{"modifier":"||","type":"alive","operator":"eqt","value":""},{"modifier":"&&","type":"connection","operator":"eq","value":"null"}]},{"name":"Yellow","unit":"","conditions":[{"modifier":"&&","type":"alive","operator":"eqt","value":""},{"modifier":"&&","type":"connection","operator":"eqf","value":""},{"modifier":"&&","type":"connection","operator":"ne","value":"null"}]},{"name":"Red","unit":"","conditions":[{"modifier":"&&","type":"alive","operator":"eqf","value":""}]}],"triggerInterval":"","calculations":[{"name":"Grey","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.ADAPTER.TOTAL"},{"operator":"-","id": adapter + "." + instance + ".Lists.Adapter-Monitor.TOTAL"}]},{"name":"Grey_LIST","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.ADAPTER.TOTAL_LIST"},{"operator":"-","id": adapter + "." + instance + ".Lists.Adapter-Monitor.TOTAL_LIST"}]},{"name":"Grey_LIST_JSON","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.ADAPTER.TOTAL_LIST_JSON"},{"operator":"-","id": adapter + "." + instance + ".Lists.Adapter-Monitor.TOTAL_LIST_JSON"}]},{"name":"Grey_NAMES_LIST","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.ADAPTER.TOTAL_NAMES_LIST"},{"operator":"-","id": adapter + "." + instance + ".Lists.Adapter-Monitor.TOTAL_NAMES_LIST"}]},{"name":"Red+Yellow","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Red"},{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Yellow"}]},{"name":"Red+Yellow_LIST","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Red_LIST"},{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Yellow_LIST"}],"resortList":false},{"name":"Red+Yellow_LIST_JSON","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Red_LIST_JSON"},{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Yellow_LIST_JSON"}],"resortList":false},{"name":"Red+Yellow_NAMES_LIST","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Red_NAMES_LIST"},{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Yellow_NAMES_LIST"}],"resortList":false},{"name":"Green+Grey","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Green"},{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Grey"}],"resortList":false},{"name":"Green+Grey_LIST","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Green_LIST"},{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Grey_LIST"}],"resortList":false},{"name":"Green+Grey_LIST_JSON","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Green_LIST_JSON"},{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Grey_LIST_JSON"}],"resortList":false},{"name":"Green+Grey_NAMES_LIST","unit":"","calculationSteps":[{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Green_NAMES_LIST"},{"operator":"+","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Grey_NAMES_LIST"}],"resortList":false}],"combinations":[{"name":"HTML","unit":"","combinationSteps":[{"prefix":"<h3><u>" + _("Faulty") + " (","type":"value","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Red","postfix":")</u>:</h3>","onlyIfOperator":"gt","onlyIfValue":"0","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"<span style='color:red;'>&#9679;</span>&nbsp;","type":"value","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Red_NAMES_LIST","postfix":"<br><br><br>","onlyIfOperator":"ne","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":"","separator":"<br><span style='color:red;'>&#9679;</span>&nbsp;"},{"prefix":"<h3><u>" + _("Not Connected") + " (","type":"value","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Yellow","postfix":")</u>:</h3>","onlyIfOperator":"gt","onlyIfValue":"0","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"<span style='color:yellow;'>&#9679;</span>&nbsp;","type":"value","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Yellow_NAMES_LIST","postfix":"<br><br><br>","onlyIfOperator":"ne","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":"","separator":"<br><span style='color:yellow;'>&#9679;</span>&nbsp;"},{"prefix":"<h3><u>" + _("Normal") + " (","type":"value","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Green+Grey","postfix":")</u>:</h3>","onlyIfOperator":"gt","onlyIfValue":"0","onlyIfJustPrefix":false,"onlyIfElse":""},{"prefix":"<u>Active</u>:<br><span style='color:green;'>&#9679;</span>&nbsp;","type":"value","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Green_NAMES_LIST","postfix":"<br><br>","onlyIfOperator":"ne","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":"","separator":"<br><span style='color:green;'>&#9679;</span>&nbsp;"},{"prefix":"<u>" + _("Disabled or passive") + "</u>:<br><span style='color:grey;'>&#9679;</span>&nbsp;","type":"value","id": adapter + "." + instance + ".Lists.Adapter-Monitor.Grey_NAMES_LIST","separator":"<br><span style='color:grey;'>&#9679;</span>&nbsp;","postfix":"<br><br>","onlyIfOperator":"ne","onlyIfValue":"","onlyIfJustPrefix":false,"onlyIfElse":""}]}]}],
		devices: [{"commonName":_("Adapter") + "&shy;" + _("errors") + "|{" + adapter + "." + instance + ".Lists.Adapter-Monitor.Red+Yellow} " + _("Adapter") + "&shy;" + _("errors"),"nativeHeading":"","nativeLinkedView":"","nativeBackgroundImage":"","commonRole":"iQontrolValue","states":[{"state":"STATE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.Adapter-Monitor.Red+Yellow_NAMES_LIST"},{"state":"LEVEL","commonRole":"linkedState","value":""},{"state":"INFO_A","commonRole":"array","value":"[]"},{"state":"INFO_B","commonRole":"array","value":"[]"},{"state":"BATTERY","commonRole":"linkedState","value":""},{"state":"UNREACH","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.Adapter-Monitor.Yellow"},{"state":"ERROR","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.Adapter-Monitor.Red"},{"state":"BACKGROUND_VIEW","commonRole":"const","value":""},{"state":"BACKGROUND_URL","commonRole":"const","value":""},{"state":"BACKGROUND_HTML","commonRole":"const","value":""},{"state":"ENLARGE_TILE","commonRole":"linkedState","value":""},{"state":"BADGE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.Adapter-Monitor.Red+Yellow"},{"state":"BADGE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_HIDE","commonRole":"linkedState","value":""},{"state":"URL","commonRole":"const","value":""},{"state":"HTML","commonRole":"linkedState","value": adapter + "." + instance + ".Lists.Adapter-Monitor.HTML"},{"state":"ADDITIONAL_CONTROLS","commonRole":"array","value":"[]"},{"state":"ADDITIONAL_INFO","commonRole":"array","value":"[]"}],"options":[{"option":"icon_on","type":"icon","value":"./images/icons/fluent/fluent_info_bubble_on.png"},{"option":"icon_off","type":"icon","value":"./images/icons/fluent/fluent_info_bubble_off.png"},{"option":"readonly","type":"checkbox","value":"true"},{"option":"stateCaption","type":"text","value":"List"},{"option":"levelCaption","type":"text","value":""},{"option":"renderLinkedViewInParentInstance","type":"checkbox","value":"false"},{"option":"renderLinkedViewInParentInstanceClosesPanel","type":"checkbox","value":"false"},{"option":"clickOnIconAction","type":"select","value":"openDialog"},{"option":"clickOnTileAction","type":"select","value":"openDialog"},{"option":"noZoomOnHover","type":"checkbox","value":"false"},{"option":"iconNoZoomOnHover","type":"checkbox","value":"false"},{"option":"hideDeviceName","type":"checkbox","value":"false"},{"option":"tileActiveStateId","type":"text","value":""},{"option":"tileActiveCondition","type":"select","value":""},{"option":"tileActiveConditionValue","type":"text","value":""},{"option":"sizeInactive","type":"select","value":""},{"option":"stateHeightAdaptsContentInactive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceInactive","type":"checkbox","value":"false"},{"option":"stateBigFontInactive","type":"checkbox","value":"false"},{"option":"bigIconInactive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsInactive","type":"checkbox","value":"false"},{"option":"transparentIfInactive","type":"checkbox","value":"false"},{"option":"noOverlayInactive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfInactive","type":"checkbox","value":"false"},{"option":"hideStateIfInactive","type":"checkbox","value":"false"},{"option":"hideIndicatorIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoAIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoBIfInactive","type":"checkbox","value":"false"},{"option":"hideDeviceIfInactive","type":"checkbox","value":"false"},{"option":"sizeActive","type":"select","value":""},{"option":"stateHeightAdaptsContentActive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceActive","type":"checkbox","value":"false"},{"option":"stateBigFontActive","type":"checkbox","value":"false"},{"option":"bigIconActive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsActive","type":"checkbox","value":"false"},{"option":"transparentIfActive","type":"checkbox","value":"false"},{"option":"noOverlayActive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfActive","type":"checkbox","value":"false"},{"option":"hideStateIfActive","type":"checkbox","value":"false"},{"option":"hideIndicatorIfActive","type":"checkbox","value":"false"},{"option":"hideInfoAIfActive","type":"checkbox","value":"false"},{"option":"hideInfoBIfActive","type":"checkbox","value":"false"},{"option":"hideDeviceIfActive","type":"checkbox","value":"false"},{"option":"sizeEnlarged","type":"select","value":"fullWidthIfEnlarged fullHeightIfEnlarged"},{"option":"stateHeightAdaptsContentEnlarged","type":"checkbox","value":"false"},{"option":"stateFillsDeviceEnlarged","type":"checkbox","value":"false"},{"option":"stateBigFontEnlarged","type":"checkbox","value":"false"},{"option":"bigIconEnlarged","type":"checkbox","value":"true"},{"option":"iconNoPointerEventsEnlarged","type":"checkbox","value":"false"},{"option":"transparentIfEnlarged","type":"checkbox","value":"false"},{"option":"noOverlayEnlarged","type":"checkbox","value":"false"},{"option":"tileEnlargeStartEnlarged","type":"checkbox","value":"false"},{"option":"tileEnlargeShowButtonInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowButtonActive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuActive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfEnlarged","type":"checkbox","value":"false"},{"option":"hideStateIfEnlarged","type":"checkbox","value":"false"},{"option":"hideIndicatorIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoAIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoBIfEnlarged","type":"checkbox","value":"false"},{"option":"hideIconEnlarged","type":"checkbox","value":"false"},{"option":"addTimestampToState","type":"select","value":""},{"option":"showTimestamp","type":"select","value":""},{"option":"infoARoundDigits","type":"number","value":"1"},{"option":"infoBRoundDigits","type":"number","value":"1"},{"option":"infoAShowName","type":"checkbox","value":"false"},{"option":"infoBShowName","type":"checkbox","value":"false"},{"option":"batteryIcon_on","type":"icon","value":""},{"option":"batteryActiveCondition","type":"select","value":""},{"option":"batteryActiveConditionValue","type":"text","value":""},{"option":"unreachIcon_on","type":"icon","value":""},{"option":"invertUnreach","type":"checkbox","value":"false"},{"option":"hideUnreachIfInactive","type":"checkbox","value":"false"},{"option":"errorIcon_on","type":"icon","value":""},{"option":"invertError","type":"checkbox","value":"false"},{"option":"adjustHeightToBackgroundView","type":"checkbox","value":"false"},{"option":"backgroundURLDynamicIframeZoom","type":"number","value":""},{"option":"backgroundURLPadding","type":"number","value":""},{"option":"backgroundURLAllowPostMessage","type":"checkbox","value":"false"},{"option":"backgroundURLNoPointerEvents","type":"checkbox","value":"false"},{"option":"overlayAboveBackgroundURL","type":"checkbox","value":"false"},{"option":"badgeWithoutUnit","type":"checkbox","value":"true"},{"option":"invertGlowHide","type":"checkbox","value":"false"},{"option":"popupWidth","type":"number","value":""},{"option":"popupHeight","type":"number","value":"400"},{"option":"popupFixed","type":"checkbox","value":"false"},{"option":"openURLExternal","type":"checkbox","value":"false"},{"option":"openURLExternalCaption","type":"text","value":""},{"option":"popupAllowPostMessage","type":"checkbox","value":"false"},{"option":"additionalControlsSectionType","type":"select","value":"collapsible"},{"option":"additionalControlsCaption","type":"text","value":"Additional Controls"},{"option":"additionalControlsHeadingType","type":"select","value":"none"},{"option":"additionalControlsHideNameForButtons","type":"checkbox","value":"false"},{"option":"additionalInfoSectionType","type":"select","value":"collapsible"},{"option":"additionalInfoCaption","type":"text","value":"Additional Infos"},{"option":"additionalInfoListType","type":"select","value":""},{"option":"additionalInfoListColumnCount","type":"select","value":"auto"},{"option":"additionalInfoListColumnWidth","type":"number","value":""},{"option":"showStateAndLevelSeparatelyInTile","type":"select","value":""}],"nativeBackgroundImageActive":"","nativeHeadingOptions":""}]
	}, {
		name: _("Windows"),
		materialIcon: "aspect_ratio",
		description: _("Adds lists with corresponding widgets to display (opened) windows. You may need to adjust the list a little bit, if too much states are found. Best way to do is to create a ioBroker-Enumeration with all your windows and add the enumeration (with childs) to the list instead of all datapoints. Have a look at the wiki on github, there are some examples how to do that."),
		lists: [{"active":true,"name":_("Windows"),"selectors":[{"modifier":"add","type":"commonRole","operator":"eq","value":"sensor.window"},{"modifier":"remove","type":"id","operator":"ew","value":"WINDOW_OPEN_REPORTING"},{"modifier":"remove","type":"id","operator":"c","value":"hm-rpc.,.INT,.2.STATE"}],"filterAliases":true,"sorting":"parentNames asc","separator":", ","createNamesList":false,"createParentNamesList":true,"createValuesList":false,"counters":[{"name":"OPEN","unit":_("Windows"),"conditions":[{"modifier":"&&","type":"value","operator":"eqt","value":""}]},{"name":"LONG_OPEN","unit":_("Windows"),"conditions":[{"modifier":"&&","type":"value","operator":"eqt","value":""},{"modifier":"&&","type":"lcs","operator":"gt","value":"1800"}]}],"triggerInterval":"","calculations":[],"combinations":[],"logs":[]}],
		devices: [{"commonName":_("Windows"),"commonRole":"iQontrolWidget","nativeBackgroundImage":"","nativeBackgroundImageActive":"","nativeHeading":"","nativeLinkedView":"","nativeNewLine":false,"options":[{"option":"icon_on","type":"icon","value":""},{"option":"icon_off","type":"icon","value":""},{"option":"readonly","type":"checkbox","value":"false"},{"option":"stateCaption","type":"text","value":""},{"option":"renderLinkedViewInParentInstance","type":"checkbox","value":"false"},{"option":"renderLinkedViewInParentInstanceClosesPanel","type":"checkbox","value":"false"},{"option":"clickOnIconAction","type":"select","value":"toggle"},{"option":"clickOnTileAction","type":"select","value":"openDialog"},{"option":"noZoomOnHover","type":"checkbox","value":"true"},{"option":"iconNoZoomOnHover","type":"checkbox","value":"false"},{"option":"hideDeviceName","type":"checkbox","value":"true"},{"option":"tileActiveStateId","type":"text","value":""},{"option":"tileActiveCondition","type":"select","value":""},{"option":"tileActiveConditionValue","type":"text","value":""},{"option":"sizeInactive","type":"select","value":"xwideIfInactive highIfInactive"},{"option":"stateHeightAdaptsContentInactive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceInactive","type":"checkbox","value":"false"},{"option":"stateBigFontInactive","type":"checkbox","value":"false"},{"option":"bigIconInactive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsInactive","type":"checkbox","value":"true"},{"option":"transparentIfInactive","type":"checkbox","value":"false"},{"option":"noOverlayInactive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfInactive","type":"checkbox","value":"true"},{"option":"hideStateIfInactive","type":"checkbox","value":"true"},{"option":"hideIndicatorIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoAIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoBIfInactive","type":"checkbox","value":"false"},{"option":"hideDeviceIfInactive","type":"checkbox","value":"false"},{"option":"sizeActive","type":"select","value":"xwideIfActive highIfActive"},{"option":"stateHeightAdaptsContentActive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceActive","type":"checkbox","value":"false"},{"option":"stateBigFontActive","type":"checkbox","value":"false"},{"option":"bigIconActive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsActive","type":"checkbox","value":"true"},{"option":"transparentIfActive","type":"checkbox","value":"false"},{"option":"noOverlayActive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfActive","type":"checkbox","value":"true"},{"option":"hideStateIfActive","type":"checkbox","value":"true"},{"option":"hideIndicatorIfActive","type":"checkbox","value":"false"},{"option":"hideInfoAIfActive","type":"checkbox","value":"false"},{"option":"hideInfoBIfActive","type":"checkbox","value":"false"},{"option":"hideDeviceIfActive","type":"checkbox","value":"false"},{"option":"sizeEnlarged","type":"select","value":"fullWidthIfEnlarged fullHeightIfEnlarged"},{"option":"stateHeightAdaptsContentEnlarged","type":"checkbox","value":"false"},{"option":"stateFillsDeviceEnlarged","type":"checkbox","value":"false"},{"option":"stateBigFontEnlarged","type":"checkbox","value":"false"},{"option":"bigIconEnlarged","type":"checkbox","value":"true"},{"option":"iconNoPointerEventsEnlarged","type":"checkbox","value":"true"},{"option":"transparentIfEnlarged","type":"checkbox","value":"false"},{"option":"noOverlayEnlarged","type":"checkbox","value":"true"},{"option":"tileEnlargeStartEnlarged","type":"checkbox","value":"false"},{"option":"tileEnlargeShowButtonInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowButtonActive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuActive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfEnlarged","type":"checkbox","value":"true"},{"option":"hideStateIfEnlarged","type":"checkbox","value":"true"},{"option":"hideIndicatorIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoAIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoBIfEnlarged","type":"checkbox","value":"false"},{"option":"hideIconEnlarged","type":"checkbox","value":"false"},{"option":"addTimestampToState","type":"select","value":"N"},{"option":"showTimestamp","type":"select","value":""},{"option":"infoARoundDigits","type":"number","value":"1"},{"option":"infoBRoundDigits","type":"number","value":"1"},{"option":"infoAShowName","type":"checkbox","value":"false"},{"option":"infoBShowName","type":"checkbox","value":"false"},{"option":"batteryIcon_on","type":"icon","value":""},{"option":"batteryActiveCondition","type":"select","value":""},{"option":"batteryActiveConditionValue","type":"text","value":""},{"option":"unreachIcon_on","type":"icon","value":""},{"option":"invertUnreach","type":"checkbox","value":"false"},{"option":"hideUnreachIfInactive","type":"checkbox","value":"false"},{"option":"errorIcon_on","type":"icon","value":""},{"option":"invertError","type":"checkbox","value":"false"},{"option":"adjustHeightToBackgroundView","type":"checkbox","value":"false"},{"option":"backgroundURLDynamicIframeZoom","type":"number","value":""},{"option":"backgroundURLPadding","type":"number","value":""},{"option":"backgroundURLAllowPostMessage","type":"checkbox","value":"true"},{"option":"backgroundURLNoPointerEvents","type":"checkbox","value":"false"},{"option":"overlayAboveBackgroundURL","type":"checkbox","value":"false"},{"option":"badgeWithoutUnit","type":"checkbox","value":"true"},{"option":"invertGlowHide","type":"checkbox","value":"false"},{"option":"popupWidth","type":"number","value":""},{"option":"popupHeight","type":"number","value":""},{"option":"popupFixed","type":"checkbox","value":"false"},{"option":"openURLExternal","type":"checkbox","value":"false"},{"option":"openURLExternalCaption","type":"text","value":""},{"option":"popupAllowPostMessage","type":"checkbox","value":"true"},{"option":"additionalControlsSectionType","type":"select","value":"collapsible"},{"option":"additionalControlsCaption","type":"text","value":"Additional Controls"},{"option":"additionalControlsHeadingType","type":"select","value":"none"},{"option":"additionalControlsHideNameForButtons","type":"checkbox","value":"false"},{"option":"additionalInfoSectionType","type":"select","value":"collapsible"},{"option":"additionalInfoCaption","type":"text","value":"Additional Infos"},{"option":"additionalInfoListType","type":"select","value":""},{"option":"additionalInfoListColumnCount","type":"select","value":"auto"},{"option":"additionalInfoListColumnWidth","type":"number","value":""},{"option":"noVirtualState","type":"checkbox","value":"false"}],				"states":[{"state":"STATE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists." + _("Windows") + ".OPEN"},{"state":"INFO_A","commonRole":"array","value":"[]"},{"state":"INFO_B","commonRole":"array","value":"[]"},{"state":"BATTERY","commonRole":"linkedState","value":""},{"state":"UNREACH","commonRole":"linkedState","value":""},{"state":"ERROR","commonRole":"linkedState","value":""},{"state":"BACKGROUND_VIEW","commonRole":"const","value":""},		{"state":"BACKGROUND_URL","commonRole":"const","value":"./images/widgets/json-table/device-counter.html?heading=%3Ccenter%3E" + encodeURI(_("Window")) + "%3C%2Fcenter%3E%7C%3Ccenter%3E" + encodeURI(_("Window")) + "%20%28%7B" + encodeURI(adapter) + "." + encodeURI(instance) + ".Lists." + encodeURI(_("Windows")) + ".OPEN%7D%20" + encodeURI(_("opened")) + "%29%3C%2Fcenter%3E&tableMode=none&useThisDatapoint=" + adapter + "." + instance + ".Lists." + _("Windows") + ".TOTAL_LIST_JSON&rowsLimit=&rowsLimitLoadMore=true&rowsLimitLoadMoreCaption=...&headHide=true&scrollbarHide=true&fontFamily=&fontSize=&fontWeight=null&fontStyle=null&colorBackground=rgba%280%2C0%2C0%2C0%29&colorBackgroundOdd=rgba%280%2C0%2C0%2C0%29&colorText=black&colorTextOdd=black&colorTextShadow=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOdd=rgba%280%2C0%2C0%2C0.3%29&colorBackgroundDark=rgba%280%2C0%2C0%2C0%29&colorBackgroundOddDark=rgba%280%2C0%2C0%2C0%29&colorBorders=&colorTextDark=black&colorTextOddDark=black&colorTextShadowDark=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOddDark=rgba%280%2C0%2C0%2C0.3%29&iconCols=val%3BvalFull%3BplainText&icon1Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_closed.png&icon1Caption=&icon1String=" + encodeURI(_("closed")) + "&icon2Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_opened.png&icon2Caption=&icon2String=" + encodeURI(_("opened")) + "&icon3Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_tilted.png&icon3Caption=&icon3String=" + encodeURI(_("tilted")) + "&icon4Url=&icon4Caption=&icon4String=&icon5Url=&icon5Caption=&icon5String=&icon6Url=&icon6Caption=&icon6String=&icon7Url=&icon7Caption=&icon7String=&icon8Url=&icon8Caption=&icon8String=&icon9Url=&icon9Caption=&icon9String=&icon10Url=&icon10Caption=&icon10String=&icon11Url=&icon11Caption=&icon11String=&icon12Url=&icon12Caption=&icon12String=&datapointDetectionEnabled=true&datapointIdCol=id&datapointIdColFilter=true&datapointExtendTableCols=parentName%3BplainText&datapointExtendTableColsDefaultTranslationLanguage=en&datapointToggleCols=plainText&widgetReplaceurl=.%2Fimages%2Fwidgets%2Fjson-table%2Fjson-table.html&widgetReplaceurlAbsolute=true"},{"state":"BACKGROUND_HTML","commonRole":"const","value":""},{"state":"ENLARGE_TILE","commonRole":"linkedState","value":""},{"state":"BADGE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists." + _("Windows") + ".OPEN"},{"state":"BADGE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_HIDE","commonRole":"linkedState","value":""},{"state":"URL","commonRole":"const","value":""},{"state":"HTML","commonRole":"const","value":""},{"state":"ADDITIONAL_CONTROLS","commonRole":"array","value":"[]"},{"state":"ADDITIONAL_INFO","commonRole":"array","value":"[]"}],"nativeHeadingOptions":""},
				  {"commonName":_("Opened Windows"),"commonRole":"iQontrolWidget","nativeBackgroundImage":"","nativeBackgroundImageActive":"","nativeHeading":"","nativeLinkedView":"","nativeNewLine":false,"options":[{"option":"icon_on","type":"icon","value":""},{"option":"icon_off","type":"icon","value":""},{"option":"readonly","type":"checkbox","value":"false"},{"option":"stateCaption","type":"text","value":""},{"option":"renderLinkedViewInParentInstance","type":"checkbox","value":"false"},{"option":"renderLinkedViewInParentInstanceClosesPanel","type":"checkbox","value":"false"},{"option":"clickOnIconAction","type":"select","value":"toggle"},{"option":"clickOnTileAction","type":"select","value":"openDialog"},{"option":"noZoomOnHover","type":"checkbox","value":"true"},{"option":"iconNoZoomOnHover","type":"checkbox","value":"false"},{"option":"hideDeviceName","type":"checkbox","value":"true"},{"option":"tileActiveStateId","type":"text","value":""},{"option":"tileActiveCondition","type":"select","value":""},{"option":"tileActiveConditionValue","type":"text","value":""},{"option":"sizeInactive","type":"select","value":"xwideIfInactive highIfInactive"},{"option":"stateHeightAdaptsContentInactive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceInactive","type":"checkbox","value":"false"},{"option":"stateBigFontInactive","type":"checkbox","value":"false"},{"option":"bigIconInactive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsInactive","type":"checkbox","value":"true"},{"option":"transparentIfInactive","type":"checkbox","value":"false"},{"option":"noOverlayInactive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfInactive","type":"checkbox","value":"true"},{"option":"hideStateIfInactive","type":"checkbox","value":"true"},{"option":"hideIndicatorIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoAIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoBIfInactive","type":"checkbox","value":"false"},{"option":"hideDeviceIfInactive","type":"checkbox","value":"false"},{"option":"sizeActive","type":"select","value":"xwideIfActive highIfActive"},{"option":"stateHeightAdaptsContentActive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceActive","type":"checkbox","value":"false"},{"option":"stateBigFontActive","type":"checkbox","value":"false"},{"option":"bigIconActive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsActive","type":"checkbox","value":"true"},{"option":"transparentIfActive","type":"checkbox","value":"false"},{"option":"noOverlayActive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfActive","type":"checkbox","value":"true"},{"option":"hideStateIfActive","type":"checkbox","value":"true"},{"option":"hideIndicatorIfActive","type":"checkbox","value":"false"},{"option":"hideInfoAIfActive","type":"checkbox","value":"false"},{"option":"hideInfoBIfActive","type":"checkbox","value":"false"},{"option":"hideDeviceIfActive","type":"checkbox","value":"false"},{"option":"sizeEnlarged","type":"select","value":"fullWidthIfEnlarged fullHeightIfEnlarged"},{"option":"stateHeightAdaptsContentEnlarged","type":"checkbox","value":"false"},{"option":"stateFillsDeviceEnlarged","type":"checkbox","value":"false"},{"option":"stateBigFontEnlarged","type":"checkbox","value":"false"},{"option":"bigIconEnlarged","type":"checkbox","value":"true"},{"option":"iconNoPointerEventsEnlarged","type":"checkbox","value":"true"},{"option":"transparentIfEnlarged","type":"checkbox","value":"false"},{"option":"noOverlayEnlarged","type":"checkbox","value":"true"},{"option":"tileEnlargeStartEnlarged","type":"checkbox","value":"false"},{"option":"tileEnlargeShowButtonInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowButtonActive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuActive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfEnlarged","type":"checkbox","value":"true"},{"option":"hideStateIfEnlarged","type":"checkbox","value":"true"},{"option":"hideIndicatorIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoAIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoBIfEnlarged","type":"checkbox","value":"false"},{"option":"hideIconEnlarged","type":"checkbox","value":"false"},{"option":"addTimestampToState","type":"select","value":"N"},{"option":"showTimestamp","type":"select","value":""},{"option":"infoARoundDigits","type":"number","value":"1"},{"option":"infoBRoundDigits","type":"number","value":"1"},{"option":"infoAShowName","type":"checkbox","value":"false"},{"option":"infoBShowName","type":"checkbox","value":"false"},{"option":"batteryIcon_on","type":"icon","value":""},{"option":"batteryActiveCondition","type":"select","value":""},{"option":"batteryActiveConditionValue","type":"text","value":""},{"option":"unreachIcon_on","type":"icon","value":""},{"option":"invertUnreach","type":"checkbox","value":"false"},{"option":"hideUnreachIfInactive","type":"checkbox","value":"false"},{"option":"errorIcon_on","type":"icon","value":""},{"option":"invertError","type":"checkbox","value":"false"},{"option":"adjustHeightToBackgroundView","type":"checkbox","value":"false"},{"option":"backgroundURLDynamicIframeZoom","type":"number","value":""},{"option":"backgroundURLPadding","type":"number","value":""},{"option":"backgroundURLAllowPostMessage","type":"checkbox","value":"true"},{"option":"backgroundURLNoPointerEvents","type":"checkbox","value":"false"},{"option":"overlayAboveBackgroundURL","type":"checkbox","value":"false"},{"option":"badgeWithoutUnit","type":"checkbox","value":"true"},{"option":"invertGlowHide","type":"checkbox","value":"false"},{"option":"popupWidth","type":"number","value":""},{"option":"popupHeight","type":"number","value":""},{"option":"popupFixed","type":"checkbox","value":"false"},{"option":"openURLExternal","type":"checkbox","value":"false"},{"option":"openURLExternalCaption","type":"text","value":""},{"option":"popupAllowPostMessage","type":"checkbox","value":"true"},{"option":"additionalControlsSectionType","type":"select","value":"collapsible"},{"option":"additionalControlsCaption","type":"text","value":"Additional Controls"},{"option":"additionalControlsHeadingType","type":"select","value":"none"},{"option":"additionalControlsHideNameForButtons","type":"checkbox","value":"false"},{"option":"additionalInfoSectionType","type":"select","value":"collapsible"},{"option":"additionalInfoCaption","type":"text","value":"Additional Infos"},{"option":"additionalInfoListType","type":"select","value":""},{"option":"additionalInfoListColumnCount","type":"select","value":"auto"},{"option":"additionalInfoListColumnWidth","type":"number","value":""},{"option":"noVirtualState","type":"checkbox","value":"false"}],		"states":[{"state":"STATE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists." + _("Windows") + ".OPEN"},{"state":"INFO_A","commonRole":"array","value":"[]"},{"state":"INFO_B","commonRole":"array","value":"[]"},{"state":"BATTERY","commonRole":"linkedState","value":""},{"state":"UNREACH","commonRole":"linkedState","value":""},{"state":"ERROR","commonRole":"linkedState","value":""},{"state":"BACKGROUND_VIEW","commonRole":"const","value":""},		{"state":"BACKGROUND_URL","commonRole":"const","value":"./images/widgets/json-table/device-counter.html?heading=%3Ccenter%3E" + encodeURI(_("Opened Windows")) + "%3C%2Fcenter%3E%7C%3Ccenter%3E%7B" + encodeURI(adapter) + "." + encodeURI(instance) + ".Lists." + encodeURI(_("Windows")) + ".OPEN%7D%20" + encodeURI(_("opened")) + "%3C%2Fcenter%3E&tableMode=none&useThisDatapoint=" + encodeURI(adapter) + "." + encodeURI(instance) + ".Lists." + encodeURI(_("Windows")) + ".OPEN_LIST_JSON&rowsLimit=&rowsLimitLoadMore=true&rowsLimitLoadMoreCaption=...&headHide=true&scrollbarHide=true&fontFamily=&fontSize=&fontWeight=null&fontStyle=null&colorBackground=rgba%280%2C0%2C0%2C0%29&colorBackgroundOdd=rgba%280%2C0%2C0%2C0%29&colorText=black&colorTextOdd=black&colorTextShadow=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOdd=rgba%280%2C0%2C0%2C0.3%29&colorBackgroundDark=rgba%280%2C0%2C0%2C0%29&colorBackgroundOddDark=rgba%280%2C0%2C0%2C0%29&colorBorders=&colorTextDark=black&colorTextOddDark=black&colorTextShadowDark=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOddDark=rgba%280%2C0%2C0%2C0.3%29&iconCols=val%3BvalFull%3BplainText&icon1Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_closed.png&icon1Caption=&icon1String=" + encodeURI(_("closed")) + "&icon2Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_opened.png&icon2Caption=&icon2String=" + encodeURI(_("opened")) + "&icon3Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_tilted.png&icon3Caption=&icon3String=" + encodeURI(_("tilted")) + "&icon4Url=&icon4Caption=&icon4String=&icon5Url=&icon5Caption=&icon5String=&icon6Url=&icon6Caption=&icon6String=&icon7Url=&icon7Caption=&icon7String=&icon8Url=&icon8Caption=&icon8String=&icon9Url=&icon9Caption=&icon9String=&icon10Url=&icon10Caption=&icon10String=&icon11Url=&icon11Caption=&icon11String=&icon12Url=&icon12Caption=&icon12String=&datapointDetectionEnabled=true&datapointIdCol=id&datapointIdColFilter=true&datapointExtendTableCols=parentName%3BplainText&datapointExtendTableColsDefaultTranslationLanguage=en&datapointToggleCols=plainText&widgetReplaceurl=.%2Fimages%2Fwidgets%2Fjson-table%2Fjson-table.html&widgetReplaceurlAbsolute=true"},{"state":"BACKGROUND_HTML","commonRole":"const","value":""},{"state":"ENLARGE_TILE","commonRole":"linkedState","value":""},{"state":"BADGE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists." + _("Windows") + ".OPEN"},{"state":"BADGE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_HIDE","commonRole":"linkedState","value":""},{"state":"URL","commonRole":"const","value":""},{"state":"HTML","commonRole":"const","value":""},{"state":"ADDITIONAL_CONTROLS","commonRole":"array","value":"[]"},{"state":"ADDITIONAL_INFO","commonRole":"array","value":"[]"}],"nativeHeadingOptions":""},
				  {"commonName":_("Long Opened Windows"),"commonRole":"iQontrolWidget","nativeBackgroundImage":"","nativeBackgroundImageActive":"","nativeHeading":"","nativeLinkedView":"","nativeNewLine":false,"options":[{"option":"icon_on","type":"icon","value":""},{"option":"icon_off","type":"icon","value":""},{"option":"readonly","type":"checkbox","value":"false"},{"option":"stateCaption","type":"text","value":""},{"option":"renderLinkedViewInParentInstance","type":"checkbox","value":"false"},{"option":"renderLinkedViewInParentInstanceClosesPanel","type":"checkbox","value":"false"},{"option":"clickOnIconAction","type":"select","value":"toggle"},{"option":"clickOnTileAction","type":"select","value":"openDialog"},{"option":"noZoomOnHover","type":"checkbox","value":"true"},{"option":"iconNoZoomOnHover","type":"checkbox","value":"false"},{"option":"hideDeviceName","type":"checkbox","value":"true"},{"option":"tileActiveStateId","type":"text","value":""},{"option":"tileActiveCondition","type":"select","value":""},{"option":"tileActiveConditionValue","type":"text","value":""},{"option":"sizeInactive","type":"select","value":"xwideIfInactive highIfInactive"},{"option":"stateHeightAdaptsContentInactive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceInactive","type":"checkbox","value":"false"},{"option":"stateBigFontInactive","type":"checkbox","value":"false"},{"option":"bigIconInactive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsInactive","type":"checkbox","value":"true"},{"option":"transparentIfInactive","type":"checkbox","value":"false"},{"option":"noOverlayInactive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfInactive","type":"checkbox","value":"true"},{"option":"hideStateIfInactive","type":"checkbox","value":"true"},{"option":"hideIndicatorIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoAIfInactive","type":"checkbox","value":"false"},{"option":"hideInfoBIfInactive","type":"checkbox","value":"false"},{"option":"hideDeviceIfInactive","type":"checkbox","value":"false"},{"option":"sizeActive","type":"select","value":"xwideIfActive highIfActive"},{"option":"stateHeightAdaptsContentActive","type":"checkbox","value":"false"},{"option":"stateFillsDeviceActive","type":"checkbox","value":"false"},{"option":"stateBigFontActive","type":"checkbox","value":"false"},{"option":"bigIconActive","type":"checkbox","value":"false"},{"option":"iconNoPointerEventsActive","type":"checkbox","value":"true"},{"option":"transparentIfActive","type":"checkbox","value":"false"},{"option":"noOverlayActive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfActive","type":"checkbox","value":"true"},{"option":"hideStateIfActive","type":"checkbox","value":"true"},{"option":"hideIndicatorIfActive","type":"checkbox","value":"false"},{"option":"hideInfoAIfActive","type":"checkbox","value":"false"},{"option":"hideInfoBIfActive","type":"checkbox","value":"false"},{"option":"hideDeviceIfActive","type":"checkbox","value":"false"},{"option":"sizeEnlarged","type":"select","value":"fullWidthIfEnlarged fullHeightIfEnlarged"},{"option":"stateHeightAdaptsContentEnlarged","type":"checkbox","value":"false"},{"option":"stateFillsDeviceEnlarged","type":"checkbox","value":"false"},{"option":"stateBigFontEnlarged","type":"checkbox","value":"false"},{"option":"bigIconEnlarged","type":"checkbox","value":"true"},{"option":"iconNoPointerEventsEnlarged","type":"checkbox","value":"true"},{"option":"transparentIfEnlarged","type":"checkbox","value":"false"},{"option":"noOverlayEnlarged","type":"checkbox","value":"true"},{"option":"tileEnlargeStartEnlarged","type":"checkbox","value":"false"},{"option":"tileEnlargeShowButtonInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowButtonActive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuInactive","type":"checkbox","value":"true"},{"option":"tileEnlargeShowInPressureMenuActive","type":"checkbox","value":"true"},{"option":"hideBackgroundURLInactive","type":"checkbox","value":"false"},{"option":"hideBackgroundURLActive","type":"checkbox","value":"false"},{"option":"hideDeviceNameIfEnlarged","type":"checkbox","value":"true"},{"option":"hideStateIfEnlarged","type":"checkbox","value":"true"},{"option":"hideIndicatorIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoAIfEnlarged","type":"checkbox","value":"false"},{"option":"hideInfoBIfEnlarged","type":"checkbox","value":"false"},{"option":"hideIconEnlarged","type":"checkbox","value":"false"},{"option":"addTimestampToState","type":"select","value":"N"},{"option":"showTimestamp","type":"select","value":""},{"option":"infoARoundDigits","type":"number","value":"1"},{"option":"infoBRoundDigits","type":"number","value":"1"},{"option":"infoAShowName","type":"checkbox","value":"false"},{"option":"infoBShowName","type":"checkbox","value":"false"},{"option":"batteryIcon_on","type":"icon","value":""},{"option":"batteryActiveCondition","type":"select","value":""},{"option":"batteryActiveConditionValue","type":"text","value":""},{"option":"unreachIcon_on","type":"icon","value":""},{"option":"invertUnreach","type":"checkbox","value":"false"},{"option":"hideUnreachIfInactive","type":"checkbox","value":"false"},{"option":"errorIcon_on","type":"icon","value":""},{"option":"invertError","type":"checkbox","value":"false"},{"option":"adjustHeightToBackgroundView","type":"checkbox","value":"false"},{"option":"backgroundURLDynamicIframeZoom","type":"number","value":""},{"option":"backgroundURLPadding","type":"number","value":""},{"option":"backgroundURLAllowPostMessage","type":"checkbox","value":"true"},{"option":"backgroundURLNoPointerEvents","type":"checkbox","value":"false"},{"option":"overlayAboveBackgroundURL","type":"checkbox","value":"false"},{"option":"badgeWithoutUnit","type":"checkbox","value":"true"},{"option":"invertGlowHide","type":"checkbox","value":"false"},{"option":"popupWidth","type":"number","value":""},{"option":"popupHeight","type":"number","value":""},{"option":"popupFixed","type":"checkbox","value":"false"},{"option":"openURLExternal","type":"checkbox","value":"false"},{"option":"openURLExternalCaption","type":"text","value":""},{"option":"popupAllowPostMessage","type":"checkbox","value":"true"},{"option":"additionalControlsSectionType","type":"select","value":"collapsible"},{"option":"additionalControlsCaption","type":"text","value":"Additional Controls"},{"option":"additionalControlsHeadingType","type":"select","value":"none"},{"option":"additionalControlsHideNameForButtons","type":"checkbox","value":"false"},{"option":"additionalInfoSectionType","type":"select","value":"collapsible"},{"option":"additionalInfoCaption","type":"text","value":"Additional Infos"},{"option":"additionalInfoListType","type":"select","value":""},{"option":"additionalInfoListColumnCount","type":"select","value":"auto"},{"option":"additionalInfoListColumnWidth","type":"number","value":""},{"option":"noVirtualState","type":"checkbox","value":"false"}],	"states":[{"state":"STATE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists." + _("Windows") + ".LONG_OPEN"},{"state":"INFO_A","commonRole":"array","value":"[]"},{"state":"INFO_B","commonRole":"array","value":"[]"},{"state":"BATTERY","commonRole":"linkedState","value":""},{"state":"UNREACH","commonRole":"linkedState","value":""},{"state":"ERROR","commonRole":"linkedState","value":""},{"state":"BACKGROUND_VIEW","commonRole":"const","value":""},	{"state":"BACKGROUND_URL","commonRole":"const","value":"./images/widgets/json-table/device-counter.html?heading=%3Ccenter%3E" + encodeURI(_("Long Opened Windows")) + "%3C%2Fcenter%3E%7C%3Ccenter%3E%7B" + encodeURI(adapter) + "." + encodeURI(instance) + ".Lists." + encodeURI(_("Windows")) + ".LONG_OPEN%7D%20" + encodeURI(_("long opened")) + "%3C%2Fcenter%3E&tableMode=none&useThisDatapoint=" + encodeURI(adapter) + "." + encodeURI(instance) + ".Lists." + encodeURI(_("Windows")) + ".LONG_OPEN_LIST_JSON&rowsLimit=&rowsLimitLoadMore=true&rowsLimitLoadMoreCaption=...&headHide=true&scrollbarHide=true&fontFamily=&fontSize=&fontWeight=null&fontStyle=null&colorBackground=rgba%280%2C0%2C0%2C0%29&colorBackgroundOdd=rgba%280%2C0%2C0%2C0%29&colorText=black&colorTextOdd=black&colorTextShadow=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOdd=rgba%280%2C0%2C0%2C0.3%29&colorBackgroundDark=rgba%280%2C0%2C0%2C0%29&colorBackgroundOddDark=rgba%280%2C0%2C0%2C0%29&colorBorders=&colorTextDark=black&colorTextOddDark=black&colorTextShadowDark=rgba%280%2C0%2C0%2C0.3%29&colorTextShadowOddDark=rgba%280%2C0%2C0%2C0.3%29&iconCols=val%3BvalFull%3BplainText&icon1Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_closed.png&icon1Caption=&icon1String=" + encodeURI(_("closed")) + "&icon2Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_opened.png&icon2Caption=&icon2String=" + encodeURI(_("opened")) + "&icon3Url=.%2Fimages%2Ficons%2Ffluent%2Ffluent_window_tilted.png&icon3Caption=&icon3String=" + encodeURI(_("tilted")) + "&icon4Url=&icon4Caption=&icon4String=&icon5Url=&icon5Caption=&icon5String=&icon6Url=&icon6Caption=&icon6String=&icon7Url=&icon7Caption=&icon7String=&icon8Url=&icon8Caption=&icon8String=&icon9Url=&icon9Caption=&icon9String=&icon10Url=&icon10Caption=&icon10String=&icon11Url=&icon11Caption=&icon11String=&icon12Url=&icon12Caption=&icon12String=&datapointDetectionEnabled=true&datapointIdCol=id&datapointIdColFilter=true&datapointExtendTableCols=parentName%3BplainText&datapointExtendTableColsDefaultTranslationLanguage=en&datapointToggleCols=plainText&widgetReplaceurl=.%2Fimages%2Fwidgets%2Fjson-table%2Fjson-table.html&widgetReplaceurlAbsolute=true"},{"state":"BACKGROUND_HTML","commonRole":"const","value":""},{"state":"ENLARGE_TILE","commonRole":"linkedState","value":""},{"state":"BADGE","commonRole":"linkedState","value": adapter + "." + instance + ".Lists." + _("Windows") +".LONG_OPEN"},{"state":"BADGE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"OVERLAY_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_INACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_ACTIVE_COLOR","commonRole":"const","value":""},{"state":"GLOW_HIDE","commonRole":"linkedState","value":""},{"state":"URL","commonRole":"const","value":""},{"state":"HTML","commonRole":"const","value":""},{"state":"ADDITIONAL_CONTROLS","commonRole":"array","value":"[]"},{"state":"ADDITIONAL_INFO","commonRole":"array","value":"[]"}],"nativeHeadingOptions":""}]
	}];
	defaultLists.forEach(function(defaultList, index){
		$('#listsAddDefaultDropdown').append("<li><a class='istsAddDefaultDropdownItem' data-index='" + index + "' href='#!'><i class='material-icons'>" + defaultList.materialIcon + "</i>" + defaultList.name + "</a></li>");	
	});	
	$('#listsAddDefaultDropdownTrigger').dropdown();
	$('.istsAddDefaultDropdownItem').on('click', function(){
		var that = this;
		initDialog('dialogListsAddDefault', function(){ //save dialog
			let index = $('#dialogListsAddDefault').data('index');
			lists = lists.concat(defaultLists[index].lists);
			views[$('#dialogListsAddDefaultWidgetsDestinationView').val()].devices = views[$('#dialogListsAddDefaultWidgetsDestinationView').val()].devices.concat(defaultLists[index].devices);
			onChange();
			loadLists();
			alert(_("Settings imported."));
			if(listsCheckUnallowed()) alert(_("Names of lists must be unique. However, importing has created duplicates. Please check the settings!"));
		}, function(){ //init dialog function 
			let index = $(that).data('index');
			$('#dialogListsAddDefault').data('index', index);
			$('#dialogListsAddDefaultName').html(defaultLists[index].name);
			$('#dialogListsAddDefaultDescription').html(defaultLists[index].description);
			$('#dialogListsAddDefaultLists').html("");
			if (defaultLists[index].lists.length) defaultLists[index].lists.forEach(function(defaultList){
				$('#dialogListsAddDefaultLists').append("<li>" + defaultList.name + "</li>");
			});
			$('#dialogListsAddDefaultWidgets').html("");
			if (defaultLists[index].devices.length) defaultLists[index].devices.forEach(function(defaultDevice){
				$('#dialogListsAddDefaultWidgets').append("<li>" + defaultDevice.commonName + "</li>");
			});
			$('#dialogListsAddDefaultWidgetsDestinationView').html("");
			if (views.length) views.forEach(function(view, index){
				$('#dialogListsAddDefaultWidgetsDestinationView').append("<option value='" + index + "'>" + view.commonName + "</option>");
			});
			$('#dialogListsAddDefaultWidgetsDestinationView').select();
		});
	});
	
	//Enhance tableLists with functions
	var dialogListEditSelectors;
	var dialogListEditCounters;
	var dialogListEditCalculations;
	var dialogListEditCombinations;
	var dialogListEditLogs;
	function onTableListsReady(){
		var $div = $('#tableLists');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit List
			if (command === 'edit') {
				$(this).on('click', function (event) {
					var listIndex = $(this).data('index');
					initDialog('dialogListEdit', function(){ //save dialog
						var listIndex = $('#dialogListEditListIndex').val();
						lists[listIndex].selectors = dialogListEditSelectors;
						lists[listIndex].filterAliases = $('#dialogListEditListFilterAliases').prop('checked');
						lists[listIndex].sorting = $('#dialogListEditSorting').val();
						lists[listIndex].separator = $('#dialogListEditListSeparator').val();
						lists[listIndex].createNamesList = $('#dialogListEditCreateNamesList').prop('checked');
						lists[listIndex].createParentNamesList = $('#dialogListEditCreateParentNamesList').prop('checked');
						lists[listIndex].createParentNamesListMode = $('#dialogListEditCreateParentNamesListMode').val();
						lists[listIndex].createValuesList = $('#dialogListEditCreateValuesList').prop('checked');
						lists[listIndex].counters = dialogListEditCounters;
						lists[listIndex].triggerInterval = $('#dialogListEditListTriggerIntervall').val();
						lists[listIndex].calculations = dialogListEditCalculations;
						lists[listIndex].combinations = dialogListEditCombinations;
						lists[listIndex].logs = dialogListEditLogs;
						onTableListsReady();
						onChange();
					}, function(){ //init dialog function 
						$('#dialogListEditName').html(lists[listIndex].name || "");
						$('#dialogListEditListIndex').val(listIndex);
						dialogListEditSelectors = JSON.parse(JSON.stringify(lists[listIndex].selectors || []));
						values2table('tableDialogListEditSelectors', dialogListEditSelectors, onChange, ontableDialogListsEditSelectorsReady);
						$('#dialogListEditListFilterAliases').prop('checked', (lists[listIndex].filterAliases == true));
						$('#dialogListEditSorting').val(lists[listIndex].sorting || "parentNames asc").select();
						$('#dialogListEditListSeparator').val(lists[listIndex].separator || ", ");
						$('#dialogListEditCreateNamesList').prop('checked', (lists[listIndex].createNamesList == true));
						$('#dialogListEditCreateParentNamesList').prop('checked', (lists[listIndex].createParentNamesList == true));
						$('#dialogListEditCreateParentNamesListMode').val(lists[listIndex].createParentNamesListMode || "parentName").select();
						$('#dialogListEditCreateValuesList').prop('checked', (lists[listIndex].createValuesList == true));
						dialogListEditCounters = JSON.parse(JSON.stringify(lists[listIndex].counters || []));
						values2table('tableDialogListEditCounters', dialogListEditCounters, onChange, ontableDialogListsEditCountersReady);
						$('#dialogListEditListTriggerIntervall').val(lists[listIndex].triggerInterval || "");
						dialogListEditCalculations = JSON.parse(JSON.stringify(lists[listIndex].calculations || []));
						values2table('tableDialogListEditCalculations', dialogListEditCalculations, onChange, ontableDialogListsEditCalculationsReady);
						dialogListEditCombinations = JSON.parse(JSON.stringify(lists[listIndex].combinations || []));
						values2table('tableDialogListEditCombinations', dialogListEditCombinations, onChange, ontableDialogListsEditCombinationsReady);
						dialogListEditLogs = JSON.parse(JSON.stringify(lists[listIndex].logs || []));
						values2table('tableDialogListEditLogs', dialogListEditLogs, onChange, ontableDialogListsEditLogsReady);
					});
				});
			}
			//Copy List
			if (command === 'content_copy') {
				$(this).find('i').html('content_copy');
				$(this).on('click', function (event) {
					var listIndex = $(this).data('index');
					var newName = "";
					do {
						if (newName) alert(_("No duplicates allowed! List Names have to be unique."));
						var newName = prompt(_("Enter new unique name for list"), newName);
						if(newName == "" || newName == false || newName == null) return;
					} while (lists.find(obj => obj.name === newName))
					var newEntry = JSON.parse(JSON.stringify(lists[listIndex]));
					newEntry.name = newName;
					lists.push(newEntry);
					values2table('tableLists', lists, onChange, onTableListsReady);	
					onChange();
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Name changed
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'name') {
				$(this).on('focusin', function(){
					$(this).data('oldval', $(this).val());
				});
				$(this).on('change', function (){
					var index = $(this).data('index');
					var oldVal = $(this).data('oldval');
					var newVal = $(this).val();
					changeListsCommonName(index, oldVal, newVal);
					listsCheckUnallowed();
				});
			}
		});
		function changeListsCommonName(index, oldVal, newVal){
			/* Check here, if the name is used somewhere, for example like that (copied from views):
			toolbar.forEach(function(element){
				if (element.nativeLinkedView == oldVal) element.nativeLinkedView = newVal;
			});
			views.forEach(function(view){
				(view.devices || []).forEach(function(device){
					(device.states || []).forEach(function(state){
						if (state.state == "BACKGROUND_VIEW" && state.value == (adapter + "." + instance + ".Views." + oldVal)) state.value = (adapter + "." + instance + ".Views." + newVal);
					});
				});
			});
			*/
		}
		//Check for duplicates
		listsCheckUnallowed();
		//Make table sortable
		$("#tableLists tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableLists tbody").sortable('disable');
				var sequence = [];
				$('#tableLists').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(lists[sequence[i]]);
				}
				lists = tableResorted;
				onChange();
				values2table('tableLists', lists, onChange, onTableListsReady);
				$("#tableLists tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Check for unallowed
	function listsCheckUnallowed(){
		var unallowed = false;
		var listNames = [];
		lists.forEach(function(element){
			if(element.name == "") {
				unallowed = _("Lists must have a name.");
			}
			if (element.name && element.name != "&&" && element.name != "||" && listNames.indexOf(element.name) > -1){
				unallowed = _("No duplicates allowed! List Names have to be unique.");
			} else {
				listNames.push(element.name);
			}
		});
		if (unallowed){
			$('#listsCheckUnallowed').html(unallowed).show();
			return true;
		} else {
			$('#listsCheckUnallowed').hide();
		}
		return false;
	}
	
	//Enhance tableDialogListsEditSelectors with functions
	function ontableDialogListsEditSelectorsReady(){
		var $div = $('#tableDialogListEditSelectors');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add id for selectId-Dialog
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'value') {
				var index = $(this).data('index');
				$(this).prop('id', 'tableDialogListsEditSelectorsValue_' + index);
			}
		});
		//Selectbox-Functions
		enhanceTextInputToCombobox("#tableDialogListEditSelectors input[data-name=value]", "state/State;channel/Channel;device/Device;enum/Enum;instance/Instance (Adapter)", false, function(value){});
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'type') {
				var index = $(this).data('index');
				$(this).on('input change', function(){
					$parentLine = $(this).parents('tr');
					$operator = $parentLine.find('select[data-name=operator]');
					$value = $parentLine.find('input[data-name=value]');
					$edit = $parentLine.find('a[data-command=edit]');
					switch($(this).val()){
						case "all":
						$operator.prop('disabled', true).select().parents('.select-wrapper').css('opacity', '0');
						$value.css('opacity', '0').prop('disabled', true).next("a").prop('style','display: none !important;'); //Hide complete;
						$edit.css('opacity', '0').addClass('disabled');
						break;
						
						case "enum": case "enumWithChilds":
						$operator.prop('disabled', true).select().parents('.select-wrapper').css('opacity', '0');
						$value.css('opacity', '1').prop('disabled', false).next("a").prop('style','display: none !important;'); //Hide only dropdown-handle
						$edit.css('opacity', '1').removeClass('disabled').data('selectidtype', 'enum'); //Only Enums
						break;
						
						case "id":
						$operator.prop('disabled', false).find('option').prop('disabled', false); //Show all operators
						$operator.select();
						$operator.parents('.select-wrapper').css('opacity', '1');
						$value.css('opacity', '1').prop('disabled', false).next("a").prop('style','display: none !important;'); //Hide only dropdown-handle
						$edit.css('opacity', '1').removeClass('disabled').data('selectidtype', 'state'); //All Ids
						break;
						
						case "type":
						$operator.prop('disabled', false).find('option').prop('disabled', false).filter(':nth-child(1n+3)').prop('disabled', true); //Show only eq and ne
						$operator.parents('.select-wrapper').css('opacity', '1');
						if($operator.val() != "eq" && $operator.val() != "ne") $operator.val("");
						$operator.select();
						$value.css('opacity', '1').prop('disabled', false).next("a").prop('style',''); //Show dropdown with state;channel;device;enum
						$edit.css('opacity', '0').addClass('disabled');
						break;
						
						case "commonType": case "commonRole": case "commonMode": case "commonEnabled":
						$operator.prop('disabled', false).find('option').prop('disabled', false); //Show all operators
						$operator.parents('.select-wrapper').css('opacity', '1');
						if($operator.val() != "eq" && $operator.val() != "ne") $operator.val("");
						$operator.select();
						$value.css('opacity', '1').prop('disabled', false).next("a").prop('style','display: none !important;'); //Hide only dropdown-handle
						$edit.css('opacity', '0').addClass('disabled');
						break;
					}
				}).trigger('change');
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit
			if (command === 'edit') {
				$(this).on('click', function(){
					var index = $(this).data('index');
					var selectidtype = $(this).data('selectidtype');
					$('#dialogSelectId').data('selectidfor', 'tableDialogListsEditSelectorsValue_' + index);
					initSelectId(function (sid) {
						sid.selectId('show', $('#tableDialogListsEditSelectorsValue_' + index).val(), {type: selectidtype || 'state'}, function (newId) {
							if (newId) {
								$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
							}
						});
					});					
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Make table sortable
		$("#tableDialogListEditSelectors tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditSelectors tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditSelectors').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditSelectors[sequence[i]]);
				}
				dialogListEditSelectors = tableResorted;
				onChange();
				values2table('tableDialogListEditSelectors', dialogListEditSelectors, onChange, ontableDialogListsEditSelectorsReady);
				$("#tableDialogListEditSelectors tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Enhance tableDialogListsEditCounters with functions
	var dialogListEditCounterConditions;
	function ontableDialogListsEditCountersReady(){
		var $div = $('#tableDialogListEditCounters');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit Counter
			if (command === 'edit') {
				$(this).on('click', function (event) {
					var counterIndex = $(this).data('index');
					initDialog('dialogListEditCounter', function(){ //save dialog
						var counterIndex = $('#dialogListEditCounterIndex').val();
						dialogListEditCounters[counterIndex].conditions = dialogListEditCounterConditions;
						ontableDialogListsEditCountersReady();
					}, function(){ //init dialog function 
						$('#dialogListEditCounterName').html(dialogListEditCounters[counterIndex].name || "");
						$('#dialogListEditCounterIndex').val(counterIndex);
						dialogListEditCounterConditions = JSON.parse(JSON.stringify(dialogListEditCounters[counterIndex].conditions || []));
						values2table('tableDialogListEditCounterConditions', dialogListEditCounterConditions, onChange, ontableDialogListsEditCounterConditionsReady);
					});
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Name changed
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'name') {
				$(this).on('change', function (){
					dialogListsEditCheckUnallowed()
				});
			}
		});
		//Check for unallowed
		dialogListsEditCheckUnallowed();
		//Make table sortable
		$("#tableDialogListEditCounters tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditCounters tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditCounters').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditCounters[sequence[i]]);
				}
				dialogListEditCounters = tableResorted;
				onChange();
				values2table('tableDialogListEditCounters', dialogListEditCounters, onChange, ontableDialogListsEditCountersReady);
				$("#tableDialogListEditCounters tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Enhance tableDialogListsEditCounterConditions with functions	
	function ontableDialogListsEditCounterConditionsReady(){
		var $div = $('#tableDialogListEditCounterConditions');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Selectbox-Functions
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'modifier') {
				var index = $(this).data('index');
				if (index == 0) {
					$(this).prop('disabled', true).select().parents('.select-wrapper').css('opacity', '0');
				} else {
					$(this).prop('disabled', false).select().parents('.select-wrapper').css('opacity', '1');
				}
			}
		});
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
		$("#tableDialogListEditCounterConditions tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditCounterConditions tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditCounterConditions').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditCounterConditions[sequence[i]]);
				}
				dialogListEditCounterConditions = tableResorted;
				onChange();
				values2table('tableDialogListEditCounterConditions', dialogListEditCounterConditions, onChange, ontableDialogListsEditCounterConditionsReady);
				$("#tableDialogListEditCounterConditions tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Enhance tableDialogListsEditCalculations with functions	
	var dialogListEditCalculationSteps;
	function ontableDialogListsEditCalculationsReady(){
		var $div = $('#tableDialogListEditCalculations');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit Calculation
			if (command === 'edit') {
				$(this).on('click', function (event) {
					var calculationIndex = $(this).data('index');
					initDialog('dialogListEditCalculation', function(){ //save dialog
						var calculationIndex = $('#dialogListEditCalculationIndex').val();
						dialogListEditCalculations[calculationIndex].calculationSteps = dialogListEditCalculationSteps;
						ontableDialogListsEditCalculationsReady();
					}, function(){ //init dialog function 
						$('#dialogListEditCalculationName').html(dialogListEditCalculations[calculationIndex].name || "");
						$('#dialogListEditCalculationIndex').val(calculationIndex);
						dialogListEditCalculationSteps = JSON.parse(JSON.stringify(dialogListEditCalculations[calculationIndex].calculationSteps || []));
						values2table('tableDialogListEditCalculationSteps', dialogListEditCalculationSteps, onChange, ontableDialogListsEditCalculationStepsReady);
					});
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Name changed
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'name') {
				$(this).on('change', function (){
					dialogListsEditCheckUnallowed()
				});
			}
		});
		//Check for unallowed
		dialogListsEditCheckUnallowed();
		//Make table sortable
		$("#tableDialogListEditCalculations tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditCalculations tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditCalculations').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditCalculations[sequence[i]]);
				}
				dialogListEditCalculations = tableResorted;
				onChange();
				values2table('tableDialogListEditCalculations', dialogListEditCalculations, onChange, ontableDialogListsEditCalculationsReady);
				$("#tableDialogListEditCalculations tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Enhance tableDialogListsEditCalculationSteps with functions	
	function ontableDialogListsEditCalculationStepsReady(){
		var $div = $('#tableDialogListEditCalculationSteps');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add id for selectId-Dialog
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'id') {
				var index = $(this).data('index');
				$(this).prop('id', 'tableDialogListEditCalculationSteps_' + index);
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit ID
			if (command === 'edit') {
				$(this).on('click', function(){
					var index = $(this).data('index');
					$('#dialogSelectId').data('selectidfor', 'tableDialogListEditCalculationSteps_' + index);
					initSelectId(function (sid) {
						sid.selectId('show', ($('#tableDialogListEditCalculationSteps_' + index).val() || adapter + "." + instance + ".Lists"), {type: 'state'}, function (newId) {
							if (newId) {
								$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
							}
						});
					});					
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Make table sortable
		$("#tableDialogListEditCalculationSteps tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditCalculationSteps tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditCalculationSteps').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditCalculationSteps[sequence[i]]);
				}
				dialogListEditCalculationSteps = tableResorted;
				onChange();
				values2table('tableDialogListEditCalculationSteps', dialogListEditCalculationSteps, onChange, ontableDialogListsEditCalculationStepsReady);
				$("#tableDialogListEditCalculationSteps tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Enhance tableDialogListsEditCombinations with functions	
	var dialogListEditCombinationSteps;
	function ontableDialogListsEditCombinationsReady(){
		var $div = $('#tableDialogListEditCombinations');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit Combination
			if (command === 'edit') {
				$(this).on('click', function (event) {
					var combinationIndex = $(this).data('index');
					initDialog('dialogListEditCombination', function(){ //save dialog
						var combinationIndex = $('#dialogListEditCombinationIndex').val();
						dialogListEditCombinations[combinationIndex].combinationSteps = dialogListEditCombinationSteps;
						ontableDialogListsEditCombinationsReady();
					}, function(){ //init dialog function 
						$('#dialogListEditCombinationName').html(dialogListEditCombinations[combinationIndex].name || "");
						$('#dialogListEditCombinationIndex').val(combinationIndex);
						dialogListEditCombinationSteps = JSON.parse(JSON.stringify(dialogListEditCombinations[combinationIndex].combinationSteps || []));
						values2table('tableDialogListEditCombinationSteps', dialogListEditCombinationSteps, onChange, ontableDialogListsEditCombinationStepsReady);
					});
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Name changed
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'name') {
				$(this).on('change', function (){
					dialogListsEditCheckUnallowed()
				});
			}
		});
		//Check for unallowed
		dialogListsEditCheckUnallowed();
		//Make table sortable
		$("#tableDialogListEditCombinations tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditCombinations tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditCombinations').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditCombinations[sequence[i]]);
				}
				dialogListEditCombinations = tableResorted;
				onChange();
				values2table('tableDialogListEditCombinations', dialogListEditCombinations, onChange, ontableDialogListsEditCombinationsReady);
				$("#tableDialogListEditCombinations tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Enhance tableDialogListsEditCombinationSteps with functions	
	function ontableDialogListsEditCombinationStepsReady(){
		var $div = $('#tableDialogListEditCombinationSteps');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add id for selectId-Dialog
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'id') {
				var index = $(this).data('index');
				$(this).prop('id', 'tableDialogListEditCombinationSteps_' + index);
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit ID
			if (command === 'edit') {
				$(this).on('click', function(){
					var index = $(this).data('index');
					$('#dialogSelectId').data('selectidfor', 'tableDialogListEditCombinationSteps_' + index);
					initSelectId(function (sid) {
						sid.selectId('show', ($('#tableDialogListEditCombinationSteps_' + index).val() || adapter + "." + instance + ".Lists"), {type: 'state'}, function (newId) {
							if (newId) {
								$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
							}
						});
					});					
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Make table sortable
		$("#tableDialogListEditCombinationSteps tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditCombinationSteps tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditCombinationSteps').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditCombinationSteps[sequence[i]]);
				}
				dialogListEditCombinationSteps = tableResorted;
				onChange();
				values2table('tableDialogListEditCombinationSteps', dialogListEditCombinationSteps, onChange, ontableDialogListsEditCombinationStepsReady);
				$("#tableDialogListEditCombinationSteps tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Enhance tableDialogListEditLogs with functions	
	var dialogListEditLogOnChangeIds;
	var dialogListEditLogSteps;
	function ontableDialogListsEditLogsReady(){
		var $div = $('#tableDialogListEditLogs');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit Log
			if (command === 'edit') {
				$(this).on('click', function (event) {
					var logIndex = $(this).data('index');
					initDialog('dialogListEditLog', function(){ //save dialog
						var logIndex = $('#dialogListEditLogIndex').val();
						dialogListEditLogs[logIndex].onChangeIds = dialogListEditLogOnChangeIds;
						dialogListEditLogs[logIndex].onChangeDebounce = $('#dialogListEditLogOnChangeDebounce').val();
						dialogListEditLogs[logIndex].logSteps = dialogListEditLogSteps;
						dialogListEditLogs[logIndex].onChangeAddAllLogStepIds = $('#dialogListEditOnChangeAddAllLogStepIds').prop('checked');
						dialogListEditLogs[logIndex].addTo = $('#dialogListEditLogAddTo').val();
						ontableDialogListsEditLogsReady();
					}, function(){ //init dialog function 
					$('#dialogListEditLogName').html(dialogListEditLogs[logIndex].name || "");
					$('#dialogListEditLogIndex').val(logIndex);
					dialogListEditLogOnChangeIds = JSON.parse(JSON.stringify(dialogListEditLogs[logIndex].onChangeIds || []));
					values2table('tableDialogListEditLogOnChangeIDs', dialogListEditLogOnChangeIds, onChange, ontableDialogListsEditLogOnChangeIDsReady);
					$('#dialogListEditLogOnChangeDebounce').val(dialogListEditLogs[logIndex].onChangeDebounce);
					dialogListEditLogSteps = JSON.parse(JSON.stringify(dialogListEditLogs[logIndex].logSteps || []));
					values2table('tableDialogListEditLogSteps', dialogListEditLogSteps, onChange, ontableDialogListsEditLogStepsReady);
					$('#dialogListEditOnChangeAddAllLogStepIds').prop('checked', (dialogListEditLogs[logIndex].onChangeAddAllLogStepIds == true));
					$('#dialogListEditLogAddTo').val(dialogListEditLogs[logIndex].addTo || "top").select();
					});
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Name changed
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'name') {
				$(this).on('change', function (){
					dialogListsEditCheckUnallowed()
				});
			}
		});
		//Check for unallowed
		dialogListsEditCheckUnallowed();
		//Make table sortable
		$("#tableDialogListEditLogs tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditLogs tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditLogs').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditLogs[sequence[i]]);
				}
				dialogListEditLogs = tableResorted;
				onChange();
				values2table('tableDialogListEditLogs', dialogListEditLogs, onChange, ontableDialogListsEditLogsReady);
				$("#tableDialogListEditLogs tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Enhance tableDialogListsEditLogOnChangeIDs with functions	
	function ontableDialogListsEditLogOnChangeIDsReady(){
		var $div = $('#tableDialogListEditLogOnChangeIDs');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add id for selectId-Dialog
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'id') {
				var index = $(this).data('index');
				$(this).prop('id', 'tableDialogListEditLogOnChangeIDs_' + index);
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit ID
			if (command === 'edit') {
				$(this).on('click', function(){
					var index = $(this).data('index');
					$('#dialogSelectId').data('selectidfor', 'tableDialogListEditLogOnChangeIDs_' + index);
					initSelectId(function (sid) {
						sid.selectId('show', ($('#tableDialogListEditLogOnChangeIDs_' + index).val() || adapter + "." + instance + ".Lists"), {type: 'state'}, function (newId) {
							if (newId) {
								$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
							}
						});
					});					
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Make table sortable
		$("#tableDialogListEditLogOnChangeIDs tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditLogOnChangeIDs tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditLogOnChangeIDs').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditLogOnChangeIds[sequence[i]]);
				}
				dialogListEditLogOnChangeIds = tableResorted;
				onChange();
				values2table('tableDialogListEditLogOnChangeIDs', dialogListEditLogOnChangeIds, onChange, ontableDialogListsEditLogOnChangeIDsReady);
				$("#tableDialogListEditLogOnChangeIDs tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}

	//Enhance tableDialogListsEditLogSteps with functions	
	function ontableDialogListsEditLogStepsReady(){
		var $div = $('#tableDialogListEditLogSteps');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Add id for selectId-Dialog
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'id') {
				var index = $(this).data('index');
				$(this).prop('id', 'tableDialogListEditLogSteps_' + index);
			}
		});
		//Selectbox-Functions
		$lines.find('select[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'type') {
				var index = $(this).data('index');
				$(this).on('input change', function(){
					$parentLine = $(this).parents('tr');
					$id = $parentLine.find('input[data-name=id]');
					$edit = $parentLine.find('a[data-command=edit]');
					if ($(this).val().indexOf('octs') == 0 || $(this).val().indexOf('count') == 0) { //Number or OnChangeTimestamp
						$id.css('opacity', '0').prop('disabled', true); //Hide
						$edit.css('opacity', '0').addClass('disabled');						
					} else {
						$id.css('opacity', '1').prop('disabled', false); //Show
						$edit.css('opacity', '1').removeClass('disabled');
					}
				}).trigger('change');
			}
		});
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit ID
			if (command === 'edit') {
				$(this).on('click', function(){
					var index = $(this).data('index');
					$('#dialogSelectId').data('selectidfor', 'tableDialogListEditLogSteps_' + index);
					initSelectId(function (sid) {
						sid.selectId('show', ($('#tableDialogListEditLogSteps_' + index).val() || adapter + "." + instance + ".Lists"), {type: 'state'}, function (newId) {
							if (newId) {
								$('#' + $('#dialogSelectId').data('selectidfor')).val(newId).trigger('change');
							}
						});
					});					
				});
			}
			//Drag-Icon
			if (command === 'drag_handle') {
				var imageIndex = $(this).data('index');
				$(this).removeClass('btn-floating').addClass('btn-flat transparent').find('i').html('drag_handle');
			}
		});
		//Key changed
		$lines.find('input[data-name]').each(function () {
			var name = $(this).data('name');
			if (name === 'key') {
				$(this).on('change', function (){
					listsEditLogStepsCheckUnallowed();
				});
			}
		});
		//Check for duplicates
		listsEditLogStepsCheckUnallowed();
		//Make table sortable
		$("#tableDialogListEditLogSteps tbody").sortable({
			helper: fixHelper,
			start: function(event, ui){
				console.log("Drag started...");
			},
			stop: function(event, ui){
				console.log("Drag ended, start resorting...");
				$("#tableDialogListEditLogSteps tbody").sortable('disable');
				var sequence = [];
				$('#tableDialogListEditLogSteps').find('.table-values').find('.table-lines').find('tr').each(function(){
					sequence.push($(this).data('index'));
				});
				var tableResorted = [];
				for(var i = 0; i < sequence.length; i++){
					tableResorted.push(dialogListEditLogSteps[sequence[i]]);
				}
				dialogListEditLogSteps = tableResorted;
				onChange();
				values2table('tableDialogListEditLogSteps', dialogListEditLogSteps, onChange, ontableDialogListsEditLogStepsReady);
				$("#tableDialogListEditLogSteps tbody").sortable('enable');
				console.log("resorted.");
			},
			axis: "y",
			handle: "a[data-command='drag_handle']"
		});
	}
	
	//Check for unallowed
	function listsEditLogStepsCheckUnallowed(){
		var unallowed = false;
		var keys = [];
		if(dialogListEditLogSteps && dialogListEditLogSteps.length) dialogListEditLogSteps.forEach(function(element){
			if(element.key == "") {
				unallowed = _("All items have to have a name.");
			}
			if (element.key && keys.indexOf(element.key) > -1){
				unallowed = _("No duplicates allowed! Names have to be unique.");
			} else {
				keys.push(element.key);
			}
		});
		if (unallowed){
			$('#dialogListEditLogCheckUnallowed').html(unallowed).show();
			$('#dialogListEditLog .btn-set').addClass('disabled');
			return true;
		} else {
			$('#dialogListEditLogCheckUnallowed').hide();
			$('#dialogListEditLog .btn-set').removeClass('disabled');
		}
		return false;	
	}
	function dialogListsEditCheckUnallowed(){
		var unallowed = false;
		var names = [];
		if(dialogListEditCounters && dialogListEditCounters.length) dialogListEditCounters.forEach(function(element){
			if(element.name == "") {
				unallowed = _("All items have to have a name.");
			}
			if(element.name.indexOf("TOTAL") == 0) {
				unallowed = _("Names must not be TOTAL.");
			}
			if (element.name && element.name != "&&" && element.name != "||" && names.indexOf(element.name) > -1){
				unallowed = _("No duplicates allowed! Names have to be unique.");
			} else {
				names.push(element.name);
			}
		});
		if(!unallowed && dialogListEditCalculations && dialogListEditCalculations.length) dialogListEditCalculations.forEach(function(element){
			if(element.name == "") {
				unallowed = _("All items have to have a name.");
			}
			if(element.name == "TOTAL") {
				unallowed = _("Names must not be TOTAL.");
			}
			if (element.name && element.name != "&&" && element.name != "||" && names.indexOf(element.name) > -1){
				unallowed = _("No duplicates allowed! Names have to be unique.");
			} else {
				names.push(element.name);
			}
		});
		if(!unallowed && dialogListEditCombinations && dialogListEditCombinations.length) dialogListEditCombinations.forEach(function(element){
			if(element.name == "") {
				unallowed = _("All items have to have a name.");
			}
			if(element.name == "TOTAL") {
				unallowed = _("Names must not be TOTAL.");
			}
			if (element.name && element.name != "&&" && element.name != "||" && names.indexOf(element.name) > -1){
				unallowed = _("No duplicates allowed! Names have to be unique.");
			} else {
				names.push(element.name);
			}
		});
		if(!unallowed && dialogListEditLogs && dialogListEditLogs.length) dialogListEditLogs.forEach(function(element){
			if(element.name == "") {
				unallowed = _("All items have to have a name.");
			}
			if(element.name == "TOTAL") {
				unallowed = _("Names must not be TOTAL.");
			}
			if (element.name && element.name != "&&" && element.name != "||" && names.indexOf(element.name) > -1){
				unallowed = _("No duplicates allowed! Names have to be unique.");
			} else {
				names.push(element.name);
			}
		});
		if (unallowed){
			$('#dialogListEditCheckUnallowed').html(unallowed).show();
			$('#dialogListEdit .btn-set').addClass('disabled');
			return true;
		} else {
			$('#dialogListEditCheckUnallowed').hide();
			$('#dialogListEdit .btn-set').removeClass('disabled');
		}
		return false;
	}

	//Export and Import lists
	$('#listsExport').on('click', function(){
		initDialog('dialogListsExport', function(){ //save dialog
			var listsToExport = [];
			$('.dialogListsExportListsListListitem').each(function(){
				if ($(this).prop('checked')) listsToExport.push(lists[$(this).data('index')]);
			});
			saveStringAsLocalFile(JSON.stringify(listsToExport), "charset=utf-8", "text/json", "lists.json", true);
		}, function(){ //init dialog function 
			//Add lists to export list
			$('#dialogListsExportListsList').html("");
			lists.forEach(function(list, index){
				$('#dialogListsExportListsList').append("<label><input class='dialogListsExportListsListListitem' type='checkbox'" + "' data-index='" + index + "'><span style='height: auto;'><b>" + list.name + "</b></span></label><br>");
			});
			$('.dialogListsExportListsListListitem').on('change', function(){
				var oneChecked = false;
				$('.dialogListsExportListsListListitem').each(function(){
					if ($(this).prop('checked')) oneChecked = true;					
				});
				if (oneChecked) $('#dialogListsExport .btn-set').removeClass('disabled'); else $('#dialogListsExport .btn-set').addClass('disabled');
			});
		});
		$('#dialogListsExport').modal('open');
		$('#dialogListsExport').css('z-index', modalZIndexCount++);
		$('#dialogListsExport .modal-content').scrollTop(0);
	});
	$('#listsImport').on('click', function(){
		loadLocalFileAsString(".json", function(result){
			var resultObj = tryParseJSON(result);
			var resultObjValid = true;
			if (!(resultObj && typeof resultObj == "object" && typeof resultObj.forEach == "function")){
				resultObjValid = false;
			}
			if (resultObjValid) {
				lists = lists.concat(resultObj);
				alert(_("Settings imported."));
				values2table('tableLists', lists, onChange, onTableListsReady);
				onChange();
			} else {
				alert(_("Error: Invalid data."));
			}
		});		
	});
	
	//++++++++++ OPTIONS ++++++++++
	//Load Options
	function loadOptions(){
		$('.collapsible').collapsible();
		
		//Fill Combobox for ChangeDeviceIcons with icons
		//Default Icon
		var optionsString = "[" + _("Default Icon") + ":]";
		optionsString += ";/" + _("Default Icon") + "/" + (previewLink + "/images/icons/various.png").replace(/\//g, "\\");
		enhanceTextInputToCombobox('#optionsChangeDeviceOptionsIconsSource', [optionsString, comboboxStrings.blankIcon, comboboxStrings.inbuiltIcons, comboboxStrings.userIcons], true);
		enhanceTextInputToCombobox('#optionsChangeDeviceOptionsIconsDestination', [optionsString, comboboxStrings.blankIcon, comboboxStrings.inbuiltIcons, comboboxStrings.userIcons], true);
		
		//Fill Combobox for ChangeDeviceOptionsFilterRoles with roles
		$('.optionsChangeDeviceOptionsRoles').html("");
		for (iQontrolRole in iQontrolRoles){
			$('.optionsChangeDeviceOptionsRoles').append("<option value='" + iQontrolRole + "' data-icon='" + (iQontrolRoles[iQontrolRole].icon ? previewLink + iQontrolRoles[iQontrolRole].icon : "") + "'>" + _(iQontrolRoles[iQontrolRole].name) + "</select>");
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

		//Create Comboboxes for Default Icons / Device Icons
		var defaultIconsDeviceOptionsString = "";
		for (iQontrolRole in iQontrolRoles){
			defaultIconsDeviceOptionsString += "<div class='divider' style='margin-bottom: 10px;'></div>";
			defaultIconsDeviceOptionsString += "<div class='row'>";
				defaultIconsDeviceOptionsString += "<div class='col s12'>";
					defaultIconsDeviceOptionsString += "<h7>" + (iQontrolRoles[iQontrolRole].icon ? "<img src='" + previewLink + iQontrolRoles[iQontrolRole].icon + "' style='width:18px; height:18px; border:0; margin:0 0 -4px 0;'>&nbsp;" : "") + _(iQontrolRoles[iQontrolRole].name) + ":</h7>";	
				defaultIconsDeviceOptionsString += "</div>";
			defaultIconsDeviceOptionsString += "</div>";
			defaultIconsDeviceOptionsString += "<div class='row'>";
			for (iQontrolRoleOption in iQontrolRoles[iQontrolRole].options){
				if (iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].type == "icon") {
					if (iQontrolRoleOption == "errorIcon_on" || iQontrolRoleOption == "unreachIcon_on" || iQontrolRoleOption == "batteryIcon_on") continue;
					var optionName = "optionsLayoutDefaultIcons_" + iQontrolRole + "_" + iQontrolRoleOption;
					defaultIconsDeviceOptionsString += "<div class='input-field col s12 m6 l4'>";
						defaultIconsDeviceOptionsString += "<input class='" + optionName + " optionsLayoutDefaultIcons' data-role='" + iQontrolRole + "' data-icon='" + iQontrolRoleOption + "' type='text' id='" + optionName + "' />";
						defaultIconsDeviceOptionsString += "<label for='" + optionName + "'>" + _(iQontrolRoles[iQontrolRole].name) + ", " + _(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].name) + "</label>";
						defaultIconsDeviceOptionsString += "<span class='helper-text'></span>";
					defaultIconsDeviceOptionsString += "</div>";
				}
			}
			defaultIconsDeviceOptionsString += "</div>";
		}
		$('#optionsLayoutDefaultIconsDeviceIcons').html(defaultIconsDeviceOptionsString);
			
		//Fill Comboboxes for DefaultIcons with icons
		//Default Icon
		var optionsString = "[" + _("Default Icon") + ":]";
		optionsString += ";/" + _("Default Icon") + "/" + (previewLink + "/images/icons/various.png").replace(/\//g, "\\");
		enhanceTextInputToCombobox('.optionsLayoutDefaultIcons', [optionsString, comboboxStrings.blankIcon, comboboxStrings.inbuiltIcons, comboboxStrings.userIcons], true);
		optionsLayoutDefaultIconsSetValues();

		//Fill Comboboxes for DefaultSymbols with icons
		//Default Symbol
		var optionsString = "[" + _("Default Symbol") + ":]";
		optionsString += ";/" + _("Default Symbol") + "/" + (previewLink + "/images/icons/various.png").replace(/\//g, "\\");
		enhanceTextInputToCombobox('.optionsLayoutDefaultSymbols', [optionsString, comboboxStrings.blankIcon, comboboxStrings.inbuiltSymbols, comboboxStrings.userSymbols], true);
		optionsLayoutDefaultSymbolsSetValues();
				
		//Fill Combobox for fontFamily with fonts
		//Default Font
		var optionsString = "[" + _("Default Font") + ":]";
		optionsString += ";/" + _("Default Font") + "/" + (previewLink + "/images/icons/blank.png").replace(/\//g, "\\");
		enhanceTextInputToCombobox('.optionsFontFamily', [optionsString, comboboxStrings.inbuiltFonts, comboboxStrings.userFonts], false, onChange);
		
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
			if (iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].type == "section"){
				actualSection = iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].name;
				if (typeof deviceOptions[actualSection] == udef) deviceOptions[actualSection] = [];
			} else {
				deviceOptions[actualSection].push(iQontrolRoleOption + "/" + _(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].name).replace(/\//g, "\\"));
			}				
		}
	}
	for(section of Object.keys(deviceOptions).sort()){
		optionsString += ";[" + _(section) + "]";
		deviceOptions[section] = removeDuplicates(deviceOptions[section], '/');
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
	deviceStates = removeDuplicates(deviceStates).sort();
	$('.optionsChangeDeviceOptionsStates').html("");
	for (deviceState in deviceStates){
		$('.optionsChangeDeviceOptionsStates').append("<option value='" + deviceStates[deviceState] + "'>" + deviceStates[deviceState] + "</select>");
	}
	$('select.optionsChangeDeviceOptionsStates').select();

	//Add function to showChanges-Buttons
	$('.optionsChangeDeviceOptionsShowChanges').on('click', function(){
		var that = this;
		initDialog('dialogGeneric', function(){}, function(){ //init dialog function 
			$('#dialogGenericTitle').html(_("Matches") + ":");
			$('#dialogGenericContent').html($(that).data('changes-list'));
		});
	});

	//ChangeDeviceOptionsIcons #######
	$('.optionsChangeDeviceOptionsIcons').on('change', function(){
		var result = optionsChangeDeviceOptionsIcons($('#optionsChangeDeviceOptionsIconsSource').val(), $('#optionsChangeDeviceOptionsIconsDestination').val(), $('#optionsChangeDeviceOptionsIconsFilterRoles').val(), $('#optionsChangeDeviceOptionsIconsFilterDevices').val(), "countOnly");
		$('#optionsChangeDeviceOptionsIconsExecuteCount').html("&nbsp;(" + result.changeCount + " " + _("matches") + ")");
		if (result.changeCount > 0 && $('#optionsChangeDeviceOptionsIconsSource').val() != $('#optionsChangeDeviceOptionsIconsDestination').val()){
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
				if (filterDevices == "" || filterDevices.indexOf("[" + viewName + "]" + device.commonName) > -1){ 				
					var role = device.commonRole || "";
					if (filterRoles == "" || filterRoles.indexOf(role) > -1){ 
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
//										|| (option.value == "" && ("./images/icons/" + iQontrolRoles[role].options[roleOption].defaultIcons.split(';')[0]) == source)

								if (option 
									&& (option.value == source 
										|| (option.value == "" && ((optionsLayoutDefaultIcons[role] && optionsLayoutDefaultIcons[role][roleOption]) || (optionsLayoutDefaultIconsStandard[role] && optionsLayoutDefaultIconsStandard[role][roleOption]) || udef) == source)
										|| (option.value == "" && iQontrolRoles[role].options[roleOption].default == source)
										|| (source == "" && option.value == iQontrolRoles[role].options[roleOption].default)
									)
								) {
									changeCount++;
									changeList.push(viewName + " - " + device.commonName);
									if (!countOnly){
										console.log("CHANGE SETTING");
										option.value = destination;
										if (typeof device.options == udef) device.options = [];
										if (!(deviceOptionIndex > -1)) device.options.push(option);
									}
								}
							}
						}
					}
				}
			});
		});		
		if (!countOnly && changeCount > 0) {
			alert(_("%s icons have been exchanged. Don't forget to save your changes!", changeCount));
			onChange();
		}		
		return {changeCount: changeCount, changeList: changeList};
	}
	
	//ChangeDeviceOptions
	$('#optionsChangeDeviceOptionsSourceOption').on('change', function(){
		//Fill Comboboxes with settings
		var settings = [];
		var userSettings = [];
		for (iQontrolRole in iQontrolRoles){
			for (iQontrolRoleOption in iQontrolRoles[iQontrolRole].options){
				if (iQontrolRoleOption == $('#optionsChangeDeviceOptionsSourceOption').val()){
					switch(iQontrolRoles[iQontrolRole].options[iQontrolRoleOption].type){
						case "icon":
						settings.push("/" + _("default"));
						settings.push("*/" + _("all"));
						settings.push("[" + _("Inbuilt Icons") + ":]");
						inbuiltIcons.forEach(function(inbuiltIcon){
							if (inbuiltIcon != "") {
								settings.push(inbuiltIcon.replace(/\//g, "\\") + "/" + inbuiltIcon.replace(/\//g, "\\") + "/" + (previewLink + inbuiltIcon).replace(/\//g, "\\"));
							}
						});
						var imagenames = [];
						imagesDirs.forEach(function(imagesDir){
							if (imagesDir.dirname.indexOf("/usericons") == 0 && imagesDir.files && imagesDir.files.length > 0){
								imagenames.push("[" + imagesDir.dirnameBS + ":]");
								imagesDir.files.forEach(function(file){
									if (file.filenameBS.toLowerCase().endsWith(".png") || file.filenameBS.toLowerCase().endsWith(".jpeg") || file.filenameBS.toLowerCase().endsWith(".jpg") || file.filenameBS.toLowerCase().endsWith(".gif") || file.filenameBS.toLowerCase().endsWith(".svg") || file.filenameBS.toLowerCase().endsWith(".svg+xml")){
										imagenames.push((".\\.." + userfilesImagePathBS + file.filenameBS) + "/" + file.filenameBS + "/" + (previewLink.replace(/\//g, "\\") + ".\\.." + userfilesImagePathBS + file.filenameBS));
									}
								});
							}
						});
						if (imagenames.length > 0){
							settings.push("[" + _("User Icons") + ":]");
							settings = settings.concat(imagenames);
						}
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
					settings = removeDuplicates(settings, '/');
					if (typeof views != udef) views.forEach(function(view){
						if (typeof view.devices != udef) view.devices.forEach(function(device){
							var role = device.commonRole || "";
							if (typeof device.options != udef) device.options.forEach(function(option){
								if (option.option == iQontrolRoleOption && option.value != ""){
									switch(option.type){
										case "icon":
										userSettings.push(option.value.replace(/\//g, "\\") + "/" + option.value.replace(/\//g, "\\") + "/" + (previewLink + "/" + option.value).replace(/\//g, "\\"));
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
				}
			}
		}
		if (userSettings.length > 0){
			userSettings = removeDuplicates(userSettings, '/');
			settings.push("[" + _("User Settings") + ":]");
			settings = settings.concat(userSettings);
		}
		$('#optionsChangeDeviceOptionsSourceValue').val("");
		$('#optionsChangeDeviceOptionsDestinationValue').val("");
		enhanceTextInputToCombobox('#optionsChangeDeviceOptionsSourceValue', settings.join(';'), false);
		enhanceTextInputToCombobox('#optionsChangeDeviceOptionsDestinationValue', settings.join(';'), false);
		$('#optionsChangeDeviceOptionsDestinationValue').siblings('ul').find('li[data-value="*"]').remove();
	});
	$('.optionsChangeDeviceOptions').on('change', function(){
		var result = optionsChangeDeviceOptions($('#optionsChangeDeviceOptionsSourceOption').val(), $('#optionsChangeDeviceOptionsSourceValue').val(), $('#optionsChangeDeviceOptionsDestinationValue').val(), $('#optionsChangeDeviceOptionsFilterRoles').val(), $('#optionsChangeDeviceOptionsFilterDevices').val(), "countOnly");
		$('#optionsChangeDeviceOptionsExecuteCount').html("&nbsp;(" + result.changeCount + " " + _("matches") + ")");
		if (result.changeCount > 0 && $('#optionsChangeDeviceOptionsSourceOption').val() && $('#optionsChangeDeviceOptionsSourceValue').val() != $('#optionsChangeDeviceOptionsDestinationValue').val()){
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
				if (filterDevices == "" || filterDevices.indexOf("[" + viewName + "]" + device.commonName) > -1){ 				
					var role = device.commonRole || "";
					if (filterRoles == "" || filterRoles.indexOf(role) > -1){ 
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
						if (option 
							&& (option.value == sourceValue 
								|| (option.value == "" && iQontrolRoles[role].options[sourceOption].default == sourceValue)
								|| (sourceValue == "" && option.value == iQontrolRoles[role].options[sourceOption].default)
								|| (sourceValue == "*")
							)
						) {
							changeCount++;
							changeList.push(viewName + " - " + device.commonName);
							if (!countOnly){
								console.log("CHANGE SETTING");
								option.value = destinationValue;
								if (typeof device.options == udef) device.options = [];
								if (!(deviceOptionIndex > -1)) device.options.push(option);
							}
						}
					}
				}
			});
		});		
		if (!countOnly && changeCount > 0) {
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
		if (result.changeCount > 0 
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
				if (filterDevices == "" || filterDevices.indexOf("[" + viewName + "]" + device.commonName) > -1){ 				
					var role = device.commonRole || "";
					if (filterRoles == "" || filterRoles.indexOf(role) > -1){ 
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
								if (deviceState){
									if (deviceState.commonRole && deviceState.commonRole == "array"){
										var stateList = tryParseJSON(deviceState.value);
										if (Array.isArray(stateList) == false) stateList = [];
									} else {
										var stateList = [deviceState];
									}
								}
								stateList.forEach(function(state){
									if (state 
										&& ((sourceValue != "" && state.value.indexOf(sourceValue) != -1)
											|| (sourceValue == "" && state.value == "")
											|| sourceValue == "*"
										)
									) {
										changeCount++;
										changeList.push(viewName + " - " + device.commonName + " - " + roleState + " (" + state.value + ")");
										if (!countOnly){
											console.log("CHANGE STATE");
											if (destinationValue != "*"){
												if (sourceValue == "*"){
													state.value = destinationValue;
												} else {
													state.value = state.value.replace(sourceValue, destinationValue);
												}
											}
											if (deviceState.commonRole != "array" && destinationCommonRole != "*"){
												state.commonRole = destinationCommonRole;
											}
											if (typeof device.states == udef) device.states = [];
											if (!(deviceStateIndex > -1)) device.states.push(state);
										}
									}
								});
								if (deviceState.commonRole == "array"){
									deviceState.value = JSON.stringify(stateList);
								}
							}
						});
					}
				}
			});
		});		
		if (!countOnly && changeCount > 0) {
			alert(_("%s states have been exchanged. Don't forget to save your changes!", changeCount));
			onChange();
		}		
		return {changeCount: changeCount, changeList: changeList};
	}

	//Tile Classes
	values2table('tableTileClasses', tileClasses || [], onChange, ontableTileClassesReady);
	function ontableTileClassesReady(){
		var $div = $('#tableTileClasses');
		var $table = $div.find('.table-values');
		var $lines = $table.find('.table-lines');
		//Update optionsLayoutTilesDefaultClass-Selectboxes
		$lines.find('input[data-name="commonName"]').on('change', fillOptionsLayoutTilesDefaultClassSelectboxes);
		//Button-Functions
		$lines.find('a[data-command]').each(function () {
			var command = $(this).data('command');
			//Edit Element Entry
			if (command === 'edit') {
				var tileClassIndex = $(this).data('index');
				if(tileClasses[tileClassIndex].inbuilt) $(this).addClass('disabled');
				else $(this).on('click', function () {
					var _tileClassIndex = $(this).data('index');
					initDialog('dialogTileEditor', function(){ //save dialog 
						var _tileClassIndex = tileEditor.index;
						tileClasses[_tileClassIndex].value = JSON.parse(JSON.stringify(tileEditor));
						values2table('tableTileClasses', tileClasses || [], onChange, ontableTileClassesReady);
					}, function(){ //init dialog function 
						tileEditor = JSON.parse(JSON.stringify(tileClasses[_tileClassIndex].value || standardTileClass || {}));
						tileEditor.index = _tileClassIndex;
						tileEditor.commonName = tileClasses[_tileClassIndex].commonName || '';
						tileEditor.default = tileClasses[_tileClassIndex].default || false;
						tileEditor.inbuilt = tileClasses[_tileClassIndex].inbuilt || false;
						dialogTileEditorInit();
					});
				});
			}
			//Disable delete for inbuilt classes
			if (command === 'delete'){
				var tileClassIndex = $(this).data('index');
				if(tileClasses[tileClassIndex].inbuilt) $(this).addClass('disabled');
			}
			//Make own copy function
			if (command === 'copy'){
				$(this).off('click').on('click', function () {
					var _tileClassIndex = $(this).data('index');
					var newClass = JSON.parse(JSON.stringify(tileClasses[_tileClassIndex]));
					newClass.inbuilt = false;
					newClass.commonName = newClass.commonName + " - copy";
					tileClasses.push(newClass);
					values2table('tableTileClasses', tileClasses || [], onChange, ontableTileClassesReady);
				});	
			}
		});		
		fillOptionsLayoutTilesDefaultClassSelectboxes();	
	}

	//Fill optionsLayoutTilesDefaultClass selectboxes
	function fillOptionsLayoutTilesDefaultClassSelectboxes(){
		let optionsLayoutTilesDefaultClass = $('#optionsLayoutTilesDefaultClass').val();
		let optionsLayoutTilesDefaultClassEnlarged = $('#optionsLayoutTilesDefaultClassEnlarged').val();
		$('.optionsLayoutTilesDefaultClassSelectbox').html("");
		tileClasses.forEach(function(tileClass, tileClassIndex){
			$('.optionsLayoutTilesDefaultClassSelectbox').append(`<option value="${tileClassIndex}">${tileClass.commonName || tileClassIndex}</option>`);
		});
		$('#optionsLayoutTilesDefaultClassSelectbox').val(optionsLayoutTilesDefaultClass);
		$('#optionsLayoutTilesDefaultClassEnlargedSelectbox').val(optionsLayoutTilesDefaultClassEnlarged);
		$('.optionsLayoutTilesDefaultClassSelectbox').select();
	}
	$('.optionsLayoutTilesDefaultClassSelectbox').on('change', function(){
		$('#' + $(this).data('for')).val($(this).val());
	});

	//Activate demotiles
	$('input.affectsDemotile').on('change changeColor', function(){
		var id = $(this).prop('id');
		var val = $(this).val();
		var placeholder = $(this).prop('placeholder');
		if (val == "" && placeholder) val = placeholder;
		switch (id){
			case "optionsLayoutViewDeviceColor":
			$('.demotile.inactive.nomouseover.background').css('background-color', val);
			break;
			
			case "optionsLayoutViewDeviceHoverColor":
			$('.demotile.inactive.mouseover.background').css('background-color', val);
			break;

			case "optionsLayoutViewDeviceOpacity":
			$('.demotile.inactive.nomouseover.background').css('opacity', val);
			break;
			
			case "optionsLayoutViewDeviceHoverOpacity":
			$('.demotile.inactive.mouseover.background').css('opacity', val);
			break;
		
			case "optionsLayoutViewDeviceInactiveColor":
			$('.demotile.inactive.nomouseover.overlay').css('background-color', val);
			break;
			
			case "optionsLayoutViewDeviceInactiveHoverColor":
			$('.demotile.inactive.mouseover.overlay').css('background-color', val);
			break;
			
			case "optionsLayoutViewDeviceInactiveOpacity":
			$('.demotile.inactive.nomouseover.overlay').css('opacity', val);
			break;
			
			case "optionsLayoutViewDeviceInactiveHoverOpacity":
			$('.demotile.inactive.mouseover.overlay').css('opacity', val);
			break;	
			
			case "optionsLayoutViewActiveDeviceColor":
			$('.demotile.active.nomouseover.background').css('background-color', val);
			break;
			
			case "optionsLayoutViewActiveDeviceHoverColor":
			$('.demotile.active.mouseover.background').css('background-color', val);
			break;

			case "optionsLayoutViewActiveDeviceOpacity":
			$('.demotile.active.nomouseover.background').css('opacity', val);
			break;
			
			case "optionsLayoutViewActiveDeviceHoverOpacity":
			$('.demotile.active.mouseover.background').css('opacity', val);
			break;
		
			case "optionsLayoutViewDeviceActiveColor":
			$('.demotile.active.nomouseover.overlay').css('background-color', val);
			break;
			
			case "optionsLayoutViewDeviceActiveHoverColor":
			$('.demotile.active.mouseover.overlay').css('background-color', val);
			break;
			
			case "optionsLayoutViewDeviceActiveOpacity":
			$('.demotile.active.nomouseover.overlay').css('opacity', val);
			break;
			
			case "optionsLayoutViewDeviceActiveHoverOpacity":
			$('.demotile.active.mouseover.overlay').css('opacity', val);
			break;		
		}
	}).trigger('change');

	//Fill Selectbox for Default Icons Preset
	for (optionsLayoutDefaultIconsPreset in iconPresets){
		$('#optionsLayoutDefaultIconsPreset').append("<option value='" + optionsLayoutDefaultIconsPreset + "'>" + _(iconPresets[optionsLayoutDefaultIconsPreset].name) + "</option>");
	}
	$('select.optionsLayoutDefaultIconsPreset').select();
	$('#optionsLayoutDefaultIconsPreset').on('change', function(){
		var presetNumber = parseInt($(this).val()) || 0;
		initDialog("dialogOptionsLayoutDefaultIconsPresetChange", function(){ //Save changes
			if(confirm(_("This will overwrite all icon settings. Are you shure?"))){
				if($('#dialogOptionsLayoutDefaultIconsPresetChangeDefaultIcons').prop('checked')){ //Change optionsLayoutDefaultIcons
					for (role in optionsLayoutDefaultIcons){
						for(icon in optionsLayoutDefaultIcons[role]){
							iconEquivalent = optionsLayoutDefaultIconsPresetsFindIconEquivalent(optionsLayoutDefaultIcons[role][icon]);
							if (iconEquivalent && $('.dialogOptionsLayoutDefaultIconsPresetChangeListItem[data-iconEquivalent="' + iconEquivalent + '"]').prop('checked')) optionsLayoutDefaultIcons[role][icon] = $('.dialogOptionsLayoutDefaultIconsPresetChangeListItem[data-iconEquivalent="' + iconEquivalent + '"]').data('iconsrc');
						}
					}
				}
				if($('#dialogOptionsLayoutDefaultIconsPresetChangeIconOptions').prop('checked')){ //Change icons in device options
					if (typeof views != udef) views.forEach(function(view){
						if (typeof view.devices != udef) view.devices.forEach(function(device){
							if (typeof device.options != udef) device.options.forEach(function(option){
								if (option.type == "icon" && option.value){
									iconEquivalent = optionsLayoutDefaultIconsPresetsFindIconEquivalent(option.value);
									if (iconEquivalent && $('.dialogOptionsLayoutDefaultIconsPresetChangeListItem[data-iconEquivalent="' + iconEquivalent + '"]').prop('checked')) option.value = $('.dialogOptionsLayoutDefaultIconsPresetChangeListItem[data-iconEquivalent="' + iconEquivalent + '"]').data('iconsrc');
								}
							});
						});
					});
				}
				optionsLayoutDefaultIconsSetValues();
				onChange();
			}
			function optionsLayoutDefaultIconsPresetsFindIconEquivalent(src){
				for(iconPreset in iconPresets){
					for(iconEquivalent in iconPresets[iconPreset].iconEquivalents){
						if(iconPresets[iconPreset].iconEquivalents[iconEquivalent][0] == src) return iconEquivalent;
					}
				}
				for(iconPreset in iconPresets){
					for(iconEquivalent in iconPresets[iconPreset].iconEquivalents){
						for(i in iconPresets[iconPreset].iconEquivalents[iconEquivalent]){
							if(iconPresets[iconPreset].iconEquivalents[iconEquivalent][i] == src) return iconEquivalent;
						}
					}
				}
				return false;
			}
		}, function(){ //init dialog function 
			$('#dialogOptionsLayoutDefaultIconsPresetChangePresetName').html(iconPresets[presetNumber].name);
			$('#dialogOptionsLayoutDefaultIconsPresetChangePresetDescription').html(iconPresets[presetNumber].description);
			$('#dialogOptionsLayoutDefaultIconsPresetChangeList').empty();
			for(iconEquivalent in iconPresets[presetNumber].iconEquivalents){
				if (iconPresets[presetNumber].iconEquivalents[iconEquivalent].length) $('#dialogOptionsLayoutDefaultIconsPresetChangeList').append("<p><label><input class='dialogOptionsLayoutDefaultIconsPresetChangeListItem' type='checkbox' checked='checked' data-iconEquivalent='" + iconEquivalent + "' data-iconsrc='" + iconPresets[presetNumber].iconEquivalents[iconEquivalent][0] + "'><span>" + iconEquivalent + ":&nbsp;<img src='" + previewLink + "/" + iconPresets[presetNumber].iconEquivalents[iconEquivalent][0] + "' style='width:24px; height:24px;'></span></label></p>");
			};
			$('#dialogOptionsLayoutDefaultIconsPresetChangeDefaultIcons').prop('checked', 'checked');
			$('#dialogOptionsLayoutDefaultIconsPresetChangeIconOptions').prop('checked', 'checked');
		});
		$('#optionsLayoutDefaultIconsPreset').val("");
	})
	
	//Set value of Comboboxes for DefaultIcons
	function optionsLayoutDefaultIconsSetValues(){
		$('.optionsLayoutDefaultIcons').off('change', saveOptionsLayoutDefaultIcons);
		for (role in optionsLayoutDefaultIconsStandard){
			for(icon in optionsLayoutDefaultIconsStandard[role]){
				$("#optionsLayoutDefaultIcons_" + role + "_" + icon).val((optionsLayoutDefaultIcons[role] && optionsLayoutDefaultIcons[role][icon]) || (optionsLayoutDefaultIconsStandard[role] && optionsLayoutDefaultIconsStandard[role][icon]) || "").trigger('change');
			}
		}
		$('.optionsLayoutDefaultIcons').on('change', saveOptionsLayoutDefaultIcons);
		function saveOptionsLayoutDefaultIcons(){ 
			var role = $(this).data('role');
			var icon = $(this).data('icon');
			var val = $(this).val();
			if (!optionsLayoutDefaultIcons) optionsLayoutDefaultIcons = {};
			if (!optionsLayoutDefaultIcons[role]) optionsLayoutDefaultIcons[role] = {};
			if (val && val != ""){
				optionsLayoutDefaultIcons[role][icon] = $(this).val();
			} else {
				$(this).val((optionsLayoutDefaultIconsStandard[role] && optionsLayoutDefaultIconsStandard[role][icon]) || "").trigger('change');
			}
			onChange();
		}
	}

	//Set value of Comboboxes for DefaultSymbols
	function optionsLayoutDefaultSymbolsSetValues(){
		$('.optionsLayoutDefaultSymbols').off('change', saveOptionsLayoutDefaultSymbols);
		for (role in optionsLayoutDefaultSymbolsStandard){
			for(icon in optionsLayoutDefaultSymbolsStandard[role]){
				$("#optionsLayoutDefaultSymbols_" + role + "_" + icon).val((optionsLayoutDefaultSymbols[role] && optionsLayoutDefaultSymbols[role][icon]) || (optionsLayoutDefaultSymbolsStandard[role] && optionsLayoutDefaultSymbolsStandard[role][icon]) || "").trigger('change');
			}
		}
		$('.optionsLayoutDefaultSymbols').on('change', saveOptionsLayoutDefaultSymbols);
		function saveOptionsLayoutDefaultSymbols(){ 
			var role = $(this).data('role');
			var icon = $(this).data('icon');
			var val = $(this).val();
			if (!optionsLayoutDefaultSymbols) optionsLayoutDefaultSymbols = {};
			if (!optionsLayoutDefaultSymbols[role]) optionsLayoutDefaultSymbols[role] = {};
			if (val && val != ""){
				optionsLayoutDefaultSymbols[role][icon] = $(this).val();
			} else {
				$(this).val((optionsLayoutDefaultSymbolsStandard[role] && optionsLayoutDefaultSymbolsStandard[role][icon]) || "").trigger('change');
			}
			onChange();
		}
	}

	//Passphrase
	socket.emit('getState', 'iqontrol.' + instance + '.passphrase', function(err, obj){
		if(!err && obj && obj.val){ 
			passphrase = obj.val;
			$('#optionsPassphrase').val(passphrase);
		}
		$('#optionsPassphrase').on('change', onChange);
	})
	
	//Passphrase Autogenerate
	$('#optionsPassphraseAutogenerate').on('click', function(){
		if($('#optionsPassphrase').val() == "" || confirm(_("Create a new random passphrase?"))){
			$('#optionsPassphrase').val((Math.random() + 1).toString(36).substr(2, 8) + (Math.random() + 1).toString(36).substr(2, 8));
		}
	});

	//Export All Views
	$('#optionsBackupRestoreExportViewsAll').on('click', function(){
		saveStringAsLocalFile(JSON.stringify(views), "charset=utf-8", "text/json", "views.json", true);
	});

	//Export Selected Views
	$('#optionsBackupRestoreExportViewsSelectedSelection').on('change', function(){
		var selected = $('#optionsBackupRestoreExportViewsSelectedSelection').val() || [];
		if (selected.length){
			$('#optionsBackupRestoreExportViewsSelected').removeClass('disabled');
		} else {
			$('#optionsBackupRestoreExportViewsSelected').addClass('disabled');
		}
	});
	$('#optionsBackupRestoreExportViewsSelected').on('click', function(){
		var selected = $('#optionsBackupRestoreExportViewsSelectedSelection').val() || [];
		if (selected.length){
			var selectedViews = [];
			selected.forEach(function(index){
				selectedViews.push(views[index]);
				selectedViews[selectedViews.length - 1].devices.forEach(function(device){ //Remove symbolic links
					if (device.symbolicLinkFrom) delete device.symbolicLinkFrom;
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

	//Export Lists
	$('#optionsBackupRestoreExportLists').on('click', function(){
		saveStringAsLocalFile(JSON.stringify(lists), "charset=utf-8", "text/json", "lists.json", true);
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
		options.optionsLayoutDefaultIcons = optionsLayoutDefaultIcons || {};
		options.optionsLayoutDefaultSymbols = optionsLayoutDefaultSymbols || {};
		saveStringAsLocalFile(JSON.stringify(options), "charset=utf-8", "text/json", "options.json", true);
	});

	//Export Custom
	$('#optionsBackupRestoreExportCustoms').on('click', function(){
		var toDo = function(){
			var customs = [];
			for(objectId in iobrokerObjects){
				if (typeof iobrokerObjects[objectId].common != udef && typeof iobrokerObjects[objectId].common.custom  != udef && typeof iobrokerObjects[objectId].common.custom[adapter + "." + instance] != udef && iobrokerObjects[objectId].common.custom[adapter + "." + instance] != "") customs.push({id: objectId, custom: iobrokerObjects[objectId].common.custom[adapter + "." + instance]});
			};
			saveStringAsLocalFile(JSON.stringify(customs), "charset=utf-8", "text/json", "custom.json", true);
		}
		if (iobrokerObjectsReady) {
			toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(toDo);
		}
	});

	//Export Everything (but userfiles) ###### still ok ?? 
	$('#optionsBackupRestoreExportEverything').on('click', function(){
		var toDo = function(){
			var obj = {};
			obj.views = views;
			obj.toolbar = toolbar;
			obj.lists = lists;
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
			options.optionsLayoutDefaultIcons = optionsLayoutDefaultIcons || {};
			options.optionsLayoutDefaultSymbols = optionsLayoutDefaultSymbols || {};
			obj.options = options;
			var customs = [];
			for(objectId in iobrokerObjects){
				if (typeof iobrokerObjects[objectId].common != udef && typeof iobrokerObjects[objectId].common.custom  != udef && typeof iobrokerObjects[objectId].common.custom[adapter + "." + instance] != udef && iobrokerObjects[objectId].common.custom[adapter + "." + instance] != "") customs.push({id: objectId, custom: iobrokerObjects[objectId].common.custom[adapter + "." + instance]});
			};
			obj.customs = customs;
			saveStringAsLocalFile(JSON.stringify(obj), "charset=utf-8", "text/json", "everything.json", true);
		}
		if (iobrokerObjectsReady) {
			toDo();
		} else {
			iobrokerObjectsReadyFunctions.push(toDo);
		}
	});

	//Export Userfiles
	$('#optionsBackupRestoreExportUserfiles').on('click', function(){
		$('#optionsBackupRestoreExportUserfiles').addClass('disabled');
		$('#optionsBackupRestoreExportUserfilesIcon').text("hourglass_empty");
		$('#optionsBackupRestoreExportUserfilesProgress').show();
		if (confirm(_("Depending on the size it may take a while to create the zip file."))){
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
			if (resultObj && typeof resultObj.forEach == "function"){
				resultObj.forEach(function(entry, index){
					if (typeof entry.commonName == "undefined") entry.commonName = "View";
					if (!overwrite){
						var viewNames = [];
						views.forEach(function(view){ if (view.commonName) viewNames.push(view.commonName); });
						var existingNameIndex = 0;
						while(viewNames.indexOf(entry.commonName + (existingNameIndex ? " " + existingNameIndex : "")) != -1) { existingNameIndex++; };
						if (existingNameIndex) entry.commonName = entry.commonName + " " + existingNameIndex;
					}
					if (!overwrite && entry.devices) entry.devices.forEach(function(device){ //Remove symbolic links, if views are appended
						if (device.symbolicLinkFrom) delete device.symbolicLinkFrom;
					});
				});
			} else {
				resultObjValid = false;
			}
			if (resultObjValid) {
				if (overwrite){
					if (confirm(_("Really overwrite existing Settings?"))){
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
			if (resultObj && typeof resultObj.forEach == "function"){
				resultObj.forEach(function(entry, index){
					if (typeof entry.nativeLinkedView == "undefined"){
						resultObjValid = false;
					} else {
						if (typeof entry.commonName == "undefined") entry.commonName = result.nativeLinkedView;
						if (typeof entry.nativeIcon == "undefined") entry.nativeIcon = "grid";
					}
				});
			} else {
				resultObjValid = false;
			}
			if (resultObjValid) {
				if (overwrite){
					if (confirm(_("Really overwrite existing Settings?"))){
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
			if (!(resultObj && typeof resultObj == "object" && typeof resultObj.forEach == udef)){
				resultObjValid = false;
			}
			if (resultObjValid) {
				if (confirm(_("Really overwrite existing Settings?"))){
					//Select elements with id=key and class=value and insert value
					$('.value').each(function () {
						var $key = $(this);
						var id = $key.attr('id');
						if (id.indexOf('panel') == 0){ //Include just panel settings
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

	//Import Lists
	$('#optionsBackupRestoreImportListsOverwrite, #optionsBackupRestoreImportListsAppend').on('click', function(){
		var overwrite = ($(this).data('overwrite') == true);
		loadLocalFileAsString(".json", function(result){
			var resultObj = tryParseJSON(result);
			var resultObjValid = true;
			if (!(resultObj && typeof resultObj == "object" && typeof resultObj.forEach == "function")){
				resultObjValid = false;
			}
			if (resultObjValid) {
				if (overwrite){
					if (confirm(_("Really overwrite existing Settings?"))){
						lists = resultObj;
						alert(_("Settings imported."));
					}
				} else {
					lists = lists.concat(resultObj);
					alert(_("Settings imported."));
				}
				if(listsCheckUnallowed()) alert(_("Names of lists must be unique. However, importing has created duplicates. Please check the settings!"));
				onChange();
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
			if (!(resultObj && typeof resultObj == "object" && typeof resultObj.forEach == udef)){
				resultObjValid = false;
			}
			if (resultObjValid) {
				if (confirm(_("Really overwrite existing Settings?"))){
					//Select elements with id=key and class=value and insert value
					$('.value').each(function () {
						var $key = $(this);
						var id = $key.attr('id');
						if (id.indexOf('panel') != 0){ //Exclude panel settings
							if ($key.attr('type') === 'checkbox') {
								$key.prop('checked', resultObj[id]);
							} else {
								$key.val(resultObj[id]);
							}
						}
					});
					$('.MaterializeColorPicker').trigger('change');
					optionsLayoutDefaultIcons = resultObj["optionsLayoutDefaultIcons"] || {};
					optionsLayoutDefaultIconsSetValues();
					optionsLayoutDefaultSymbols = resultObj["optionsLayoutDefaultSymbols"] || {};
					optionsLayoutDefaultSymbolsSetValues();
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
			if (resultObj && typeof resultObj.forEach == "function"){
				resultObj.forEach(function(entry, index){
					if (typeof entry.id == "undefined" || typeof entry.custom != "object"){
						resultObjValid = false;
					}
				});
			} else {
				resultObjValid = false;
			}
			if (resultObjValid) {
				initDialog("dialogOptionsBackupRestoreImportCustoms", function(){ //Import
					if (confirm(_("Really overwrite custom datapoint settings? This can't be undone."))){
						var customs = $("#dialogOptionsBackupRestoreImportCustoms").data('customs');
						var dialogOptionsBackupRestoreImportCustomsCounter = 0;
						var dialogOptionsBackupRestoreImportCustomsError = false;
						customs.forEach(function(custom, index){
							if ($('.dialogOptionsBackupRestoreImportCustomsListItem[data-index=' + index + ']').prop('checked')){
								dialogOptionsBackupRestoreImportCustomsCounter++;
								console.log("Updating ID: " + custom.id + " with custom: " + custom.custom);
								(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
									var _custom = custom;
									socket.emit('getObject', _custom.id, function(err, _obj){
										if (_obj){
											if (typeof _obj.common == udef) _obj.common = {};
											if (typeof _obj.common.custom == udef) _obj.common.custom = {};
											_obj.common.custom[adapter + "." + instance] = _custom.custom;
											socket.emit('setObject', _custom.id, _obj, function(err){
												dialogOptionsBackupRestoreImportCustomsCounter--;
												if (err) dialogOptionsBackupRestoreImportCustomsError = true;
												if (dialogOptionsBackupRestoreImportCustomsCounter == 0){
													if (dialogOptionsBackupRestoreImportCustomsError){
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
				}, function(){ //init dialog function 
					$("#dialogOptionsBackupRestoreImportCustoms").data('customs', resultObj)
					$('#dialogOptionsBackupRestoreImportCustomsList').empty();
					resultObj.forEach(function(custom, index){
						$('#dialogOptionsBackupRestoreImportCustomsList').append("<p><label><input class='dialogOptionsBackupRestoreImportCustomsListItem' type='checkbox' checked='checked' data-index='" + index + "'><span>" + custom.id + "</span></label></p>");
					});
				});
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
			if (resultObj && typeof resultObj == "object" && typeof resultObj.forEach == udef){
				//Views
				if (resultObj.views && typeof resultObj.views.forEach == "function") {
					resultObj.views.forEach(function(entry, index){
						if (typeof entry.commonName == "undefined") entry.commonName = "View";
					});
				} else {
					resultObjValid = false;
				}
				//Toolbar
				if (resultObj.toolbar && typeof resultObj.toolbar.forEach == "function"){
					resultObj.toolbar.forEach(function(entry, index){
						if (typeof entry.nativeLinkedView == "undefined"){
							resultObjValid = false;
						} else {
							if (typeof entry.commonName == "undefined") entry.commonName = result.nativeLinkedView;
							if (typeof entry.nativeIcon == "undefined") entry.nativeIcon = "grid";
						}
					});
				} else {
					resultObjValid = false;
				}
				//Lists
				if (!(resultObj.lists && typeof resultObj.lists == "object" && typeof resultObj.lists.forEach == "function")){
					resultObjValid = false;
				}
				//Options and panel
				if (!(resultObj.options && typeof resultObj.options == "object" && typeof resultObj.options.forEach == udef)){
					resultObjValid = false;
				}
				//Customs
				if (resultObj.customs && typeof resultObj.customs.forEach == "function"){
					resultObj.customs.forEach(function(entry, index){
						if (typeof entry.id == "undefined" || typeof entry.custom != "object"){
							resultObjValid = false;
						}
					});
				} else {
					resultObjValid = false;
				}
			} else {
				resultObjValid = false;
			}
			if (resultObjValid) {
				if (confirm(_("Really overwrite existing Settings?"))){
					//Views
					if (confirm(_("Import Views (overwrite existing views)") + "?")) views = resultObj.views;
					//Toolbar
					if (confirm(_("Import Toolbar (overwrite exisiting toolbar)") + "?")) toolbar = resultObj.toolbar;
					//Panel
					//Select elements with id=key and class=value and insert value
					if (confirm(_("Import Panel") + "?")) $('.value').each(function () {
						var $key = $(this);
						var id = $key.attr('id');
						if (id.indexOf('panel') == 0){ //Include just panel settings
							if ($key.attr('type') === 'checkbox') {
								$key.prop('checked', resultObj.options[id]);
							} else {
								$key.val(resultObj.options[id]);
							}
						}
					});
					//Lists
					if (confirm(_("Import Lists/Counters (overwrite exisiting lists)") + "?")) lists = resultObj.lists;
					//Options
					//Select elements with id=key and class=value and insert value
					if (confirm(_("Import Options") + "?")) $('.value').each(function () {
						var $key = $(this);
						var id = $key.attr('id');
						if (id.indexOf('panel') != 0){ //Exclude panel settings
							if ($key.attr('type') === 'checkbox') {
								$key.prop('checked', resultObj.options[id]);
							} else {
								$key.val(resultObj.options[id]);
							}
						}
					});
					$('.MaterializeColorPicker').trigger('change');
					optionsLayoutDefaultIcons = resultObj["optionsLayoutDefaultIcons"] || {};
					optionsLayoutDefaultIconsSetValues();
					optionsLayoutDefaultSymbols = resultObj["optionsLayoutDefaultSymbols"] || {};
					optionsLayoutDefaultSymbolsSetValues();
					alert(_("Adapter-Settings imported. In the next step you can chose which custom datapoint settings schould be imported."));
					onChange();
					//Customs
					initDialog("dialogOptionsBackupRestoreImportCustoms", function(){ //Import
						if (confirm(_("Really overwrite custom datapoint settings? This can't be undone."))){
							var customs = $("#dialogOptionsBackupRestoreImportCustoms").data('customs');
							var dialogOptionsBackupRestoreImportCustomsCounter = 0;
							var dialogOptionsBackupRestoreImportCustomsError = false;
							customs.forEach(function(custom, index){
								if ($('.dialogOptionsBackupRestoreImportCustomsListItem[data-index=' + index + ']').prop('checked')){
									dialogOptionsBackupRestoreImportCustomsCounter++;
									console.log("Updating ID: " + custom.id + " with custom: " + custom.custom);
									(function(){ //Closure--> (everything declared inside keeps its value as ist is at the time the function is created)
										var _custom = custom;
										socket.emit('getObject', _custom.id, function(err, _obj){
											if (_obj){
												if (typeof _obj.common == udef) _obj.common = {};
												if (typeof _obj.common.custom == udef) _obj.common.custom = {};
												_obj.common.custom[adapter + "." + instance] = _custom.custom;
												socket.emit('setObject', _custom.id, _obj, function(err){
													dialogOptionsBackupRestoreImportCustomsCounter--;
													if (err) dialogOptionsBackupRestoreImportCustomsError = true;
													if (dialogOptionsBackupRestoreImportCustomsCounter == 0){
														if (dialogOptionsBackupRestoreImportCustomsError){
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
					}, function(){ //init dialog function 
						$("#dialogOptionsBackupRestoreImportCustoms").data('customs', resultObj.customs)
						$('#dialogOptionsBackupRestoreImportCustomsList').empty();
						resultObj.customs.forEach(function(custom, index){
							$('#dialogOptionsBackupRestoreImportCustomsList').append("<p><label><input class='dialogOptionsBackupRestoreImportCustomsListItem' type='checkbox' checked='checked' data-index='" + index + "'><span>" + custom.id + "</span></label></p>");
						});
					});
				}
			} else {
				alert(_("Error: Invalid data."));
			}
		});
	});

	//Import Userfiles
	$('#optionsBackupRestoreImportUserfiles').on('click', function(){
		loadLocalFileAsArrayBuffer(".zip", function(result){
			if (result) {
				if (confirm(_("Really import files? Exisiting files will be overwritten. Depending on the size it may take a while to unpack the zip file."))){
					$('#optionsBackupRestoreImportUserfiles').addClass('disabled');
					$('#optionsBackupRestoreImportUserfilesIcon').text("hourglass_empty");
					$('#optionsBackupRestoreImportUserfilesProgress').show().find('.indeterminate, .determinate').removeClass('determinate').addClass('indeterminate').css('width', '');
					JSZip.loadAsync(result).then(function(zip){
						var uploadCount = 0;
						var uploadCountMax = 0;
						zip.forEach(async function(relativePath, file){
							console.log("Processing ZIP-File entry " + file.name);
							if(!file.dir){
								uploadCount++;
								if(uploadCountMax < uploadCount) uploadCountMax = uploadCount;
								console.log("Uploading " + file.name + ". " + (uploadCountMax - uploadCount) + "/" + uploadCountMax);
								$('#optionsBackupRestoreImportUserfilesProgress').show().find('.indeterminate, .determinate').removeClass('indeterminate').addClass('determinate').css('width', Math.floor((uploadCountMax - uploadCount) / uploadCountMax * 100) + '%');
								file.async("blob").then(function(blob){
									blob.name = relativePath.substr(relativePath.lastIndexOf("/") + 1);
									var _path = userfilesImagePath + "/" + relativePath;
									_path = _path.substr(0, _path.lastIndexOf("/"));
									uploadFile(blob, _path, function(name){
										uploadCount--;
										console.log(name + " uploaded. " + (uploadCountMax - uploadCount) + "/" + uploadCountMax);
										$('#optionsBackupRestoreImportUserfilesProgress').show().find('.indeterminate, .determinate').removeClass('indeterminate').addClass('determinate').css('width', Math.floor((uploadCountMax - uploadCount) / uploadCountMax * 100) + '%');
										if(uploadCount == 0){
											alert(_("Files imported."));
											$('#imagesUploadRefresh').trigger("click");
											$('#optionsBackupRestoreImportUserfilesIcon').text("file_upload");
											$('#optionsBackupRestoreImportUserfiles').removeClass('disabled');
											$('#optionsBackupRestoreImportUserfilesProgress').hide();										
										}
									})
								});
							} else {
								var _path = userfilesImagePath + $('#imagesSelectedDir').val() + "/" + relativePath.substr(0, relativePath.lastIndexOf("/"));
								var dirExistance = await checkDirExistance(_path);
								console.log(dirExistance);
								if (!dirExistance) {
									console.log("Creating directory " + _path);
									await createDirAsync(_path);
								}
							}
						});
					}, function(err){
						console.log("Error reading zip file: " + err.message);
						alert(_("Error: Invalid data."));
						$('#optionsBackupRestoreImportUserfilesIcon').text("file_upload");
						$('#optionsBackupRestoreImportUserfiles').removeClass('disabled');
						$('#optionsBackupRestoreImportUserfilesProgress').hide();
					});
/* 					writeDirAsZip(userfilesImagePath + '/', result, function(err){ //xxxx still not working xxxx, therefore the above implementation with local zip-processing via jszip is used
						if (err){
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
					}); */
				}
			} else {
				alert(_("Error: Invalid data."));
			}
		});
	});

	//---------- Tile Editor ----------
	//Init tileEditor
	function dialogTileEditorInit(noZoomReset){
		$('.dialogTileEditorName').html(tileEditor.commonName || '');
		$('#dialogTileEditorDemoTile').html('');
		$('#dialogTileEditorStackList').html('');
		$('.tabDialogTileEditorEditContainer').hide();
		$('.dialogTileEditorTileBorderRadius').each(function(){
			let selector = 'border-' + $(this).data('direction') + '-radius';
			let defaultValue = 15;
			if($(this).data('type') == 'unit'){
				selector += '-unit';
				defaultValue = 'px';	
			}
			$(this).val(tileEditor.tile[selector] || defaultValue).trigger('change');
		});
		tileEditor.stacks.forEach(function(stack, stackIndex){
			dialogTileEditorAddStack(stackIndex, stack);
		});
		if(!noZoomReset) setTimeout(function(){ $('.dialogTileEditorDemoScale').val($('#dialogTileEditorDemoBackground').width() * 0.0065).trigger('change'); }, 100);
	}

	//Demo
	$('.dialogTileEditorDemoSize').on('input change', function(){
		$('#dialogTileEditorDemoTile').css($(this).data('mode'), 110 * $(this).val());
	});
	$('.dialogTileEditorDemoScale').on('input change', function(){
		$('#dialogTileEditorDemoTile').data('scale', $(this).val()).css('transform', `scale(${$(this).val()})`);
	});
	$('#dialogTileEditorDemoTile, #dialogTileEditorDemoBackground').on('click touchstart', function(){
		dialogTileEditorSelectStack(-1);
	});

	//Tile
	$('.dialogTileEditorTileBorderRadius').on('input change', function(){
		var selector = 'border-' + $(this).data('direction') + '-radius';
		var value = $(`.dialogTileEditorTileBorderRadius[data-direction="${$(this).data('direction')}"][data-type="value"]`).val() || 0;
		var unit = $(`.dialogTileEditorTileBorderRadius[data-direction="${$(this).data('direction')}"][data-type="unit"]`).val() || 'px';
		$('#dialogTileEditorDemoTile').css(selector, value + unit);
		tileEditor.tile[selector] = value;
		tileEditor.tile[selector + '-unit'] = unit;
	});

	//Stacks
	//--Add Stack
	$('#tabDialogTileEditorAddStack').on('click', dialogTileEditorAddStack);
	function dialogTileEditorAddStack(index, options){
		index = typeof index == "number" ? index : tileEditor.stacks.length;
		var fullSizeStack = {
			name: "Full Size",
			horizontalMode: 'left',
			horizontalValue: 0,
			horizontalUnit: 'px',
			widthMode: 'normal',
			widthValue: 100,
			widthUnit: '%',
			verticalMode: 'top',
			verticalValue: 0,
			verticalUnit: 'px',
			heightMode: 'normal',
			heightValue: 100,
			heightUnit: '%',
			default: true,
			readonly: true
		}
		var defaultOptions = {
			name: "Stack " + index,
			horizontalMode: 'left',
			horizontalValue: index * 10,
			horizontalUnit: 'px',
			widthMode: 'normal',
			widthValue: 65,
			widthUnit: 'px',
			verticalMode: 'top',
			verticalValue: index * 10,
			verticalUnit: 'px',
			heightMode: 'normal',
			heightValue: 20,
			heightUnit: 'px'
		};
		if(index == 0)	options = fullSizeStack; else options = Object.assign({}, defaultOptions || {}, options);
		tileEditor.stacks[index] = options;
		//Demo
		var $newStack = $(`<div id="dialogTileEditorDemoStack_${index}" data-index="${index}" class="dialogTileEditorDemoStack">${index}<span class="name small"></span><img src="corner_resize.png" class="resizeHandle"></div>`);
		if(index > 0) $newStack.css('background', dialogTileEditorColors[index%dialogTileEditorColors.length]);
		$('#dialogTileEditorDemoTile').append($newStack);
		dialogTileEditorEnableDraggable($newStack);
		//Stacklist
		var $li = $(`<li class="collection-item avatar valign-wrapper" data-index="${index}"></li>`)
			.on('click', function(){
				if($(this).hasClass('selected')) dialogTileEditorSelectStack(-1); else dialogTileEditorSelectStack($(this).data('index'));
			});
		var $avatar = $(`<div class="circle" style="font-size: 18px; font-weight: bold; line-height: 42px; text-align: center; color: white; text-shadow: 0px 0px 2px black;">${index}</div>`)
			.css('background', dialogTileEditorColors[index%dialogTileEditorColors.length])
			.appendTo($li);
		var $input = $(`<input data-index="${index}" value="${options.name}" style="width: calc(100% - 60px);">`)
			.on('change', function(){
				dialogTileEditorStyleStack($(this).data('index'), {name: $(this).val()});
				dialogTileEditorSelectStack(-1);
			})
			.appendTo($li);
		var $secondaryContent = $('<div class="secondary-content"></div>');
		var $visiblility = $(`<a title="Visibility" data-index="${index}" data-value="0" class="btn-floating btn-small waves-effect waves-light"><i class="material-icons">visibility</i></a>`)
			.on('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				visibility = ($(this).data('value') + 1) % 3;
				$(this).data('value', visibility).find('i').css('opacity', visibility == 1 ? '0.4' : '1').html(visibility == 2 ? 'visibility_off' : 'visibility');
				$(`.dialogTileEditorDemoStack[data-index="${$(this).data('index')}"]`).css('opacity', visibility == 1 ? '0.3' : '1').css('display', visibility == 2 ? 'none' : 'block');
			})
			.appendTo($secondaryContent);
		var $delete = $(`<a title="Delete" data-index="${index}" class="btn-floating btn-small waves-effect waves-light ${options.default ? 'disabled' : ''}"><i class="material-icons">delete</i></a>`)
			.on('click', function(){
				dialogTileEditorRemoveStack($(this).data('index'));
			})
			.appendTo($secondaryContent);
		$secondaryContent.appendTo($li);
		$('#dialogTileEditorStackList').append($li);
		dialogTileEditorStyleStack(index, options);
	}

	//--Remove Stack
	function dialogTileEditorRemoveStack(index){
		if(!confirm(_("Are you shure?"))) return;
		tileEditor.stacks.splice(index, 1);
		dialogTileEditorInit(true);
	}

	//--Select Stack and update all inputs
	function dialogTileEditorSelectStack(index){
		dialogTileEditorSelectedStack = index;
		//Demo
		$(`.dialogTileEditorDemoStack`).removeClass('selected');
		$(`.dialogTileEditorDemoStack[data-index="${index}"]`).addClass('selected');
		//List
		$('#dialogTileEditorStackList li').removeClass('selected');
		$(`#dialogTileEditorStackList li[data-index="${index}"]`).addClass('selected');
		$(`#dialogTileEditorStackList li[data-index="${index}"] input`).focus();
		if(index > -1){
			$('.tabDialogTileEditorSelectedStackName').html(`<b>${index}${tileEditor.stacks[index].name ? ':</b> ' + tileEditor.stacks[index].name : '</b>'}`);
			//Position Edit
			$('.tabDialogTileEditor.positionValue').each(function(){
				var $this = $(this);
				if($this.hasClass('position') || $this.hasClass('size')){
					$this.val(tileEditor.stacks[index][$this.data('direction') + capitalize($this.data('type'))] || 0);
				}
			});
			if(tileEditor.stacks[index].readonly) $('.tabDialogTileEditor.positionValue').prop('disabled', 'disabled').addClass('disabled'); else $('.tabDialogTileEditor.positionValue').prop('disabled', false).removeClass('disabled');
			$('select.tabDialogTileEditor.positionValue').select();
			//Style Edit
			$('.tabDialogTileEditor.styleValue').each(function(){
				var $this = $(this);
				$this.val(tileEditor.stacks[index]['style' + capitalize($this.data('type')) + capitalize($this.data('type-options'))] || ($(this).data('type') == 'font-weight' || $(this).data('type') == 'font-style' ? 'normal' : ''));
			});
			//if(tileEditor.stacks[index].readonly) $('.tabDialogTileEditor.styleValue').prop('disabled', 'disabled').addClass('disabled'); else $('.tabDialogTileEditor.styleValue').prop('disabled', false).removeClass('disabled');
			$('select.tabDialogTileEditor.styleValue').select();
			initColorpickers(onChange);
			$('.tabDialogTileEditorEditContainer').show();
		} else {
			$('.tabDialogTileEditorEditContainer').hide();			
		}
	}

	//--Style Stack Demo, optional with new options, and save them
	function dialogTileEditorStyleStack(index, options){
		if(index < 0) return;
		options = Object.assign({}, tileEditor.stacks && tileEditor.stacks[index] || {}, options || {});
		$element = $(`.dialogTileEditorDemoStack[data-index="${index}"]`);
		$element.find('span.name').html(options.name ? '&nbsp;' + options.name : '');
		var cssArray = tileEditorCreateCssPositionsArrayFromOptions(options);
		$element.data('css-array', cssArray);
		$element.removeClass('anchorLeft anchorRight anchorTop anchorBottom');
		(cssArray || []).forEach(function(css){
			$element.css(css.attribute, css.value);
			if(css.value && css.value != ""){
				if(css.attribute == 'left') $element.addClass('anchorLeft');
				else if(css.attribute == 'right') $element.addClass('anchorRight');
				else if(css.attribute == 'top') $element.addClass('anchorTop');
				else if(css.attribute == 'bottom') $element.addClass('anchorBottom');
				if(css.attribute == 'left' && css.value.indexOf('calc') == 0) $element.addClass('anchorRight');
				if(css.attribute == 'top' && css.value.indexOf('calc') == 0) $element.addClass('anchorBottom');
			}
		});
		tileEditor.stacks[index] = options;
	}

	//--Enable draggable for stack demo
	function dialogTileEditorEnableDraggable($element) {
		let offsetX, offsetY, initX, initY, initWidth, initHeight, resize, $active;
		const $tile = $('#dialogTileEditorDemoTile');
		const $background = $('#dialogTileEditorDemoBackground');
		function start(e) {
			if($active) return;
			e.preventDefault();
			e.stopPropagation();
			if(!$(this).hasClass('selected')){
				dialogTileEditorSelectStack($(this).data('index'));
				return;
			}
			const tileScale = parseFloat($tile.data('scale')) || 1;
			const target = e.target.className || '';
			resize = target.indexOf('resizeHandle') > -1;
			const event = e.type === "touchstart" ? e.originalEvent.touches[0] : e;
			initX = event.pageX;
			initY = event.pageY;
			const pos = $(this).position();
			offsetX = initX - pos.left;
			offsetY = initY - pos.top;
			initWidth = $(this).width();
			initHeight = $(this).height();
			$(this).addClass('dragActive');
			$active = $(this);
			const posX = pos.left / tileScale;
			const posY = pos.top / tileScale;
			$active.css({ left: posX, top: posY, transform: ''});
		}
		function move(e) {
			e.preventDefault();
			e.stopPropagation();
			if(!$active) return;
			const tileScale = parseFloat($tile.data('scale')) || 1;
			const event = e.type === "touchmove" ? e.originalEvent.touches[0] : e;
			if(resize) {//resize
				const deltaX = (event.pageX - initX) / tileScale;
				const deltaY = (event.pageY - initY) / tileScale;
				const newWidth = initWidth + deltaX;
				const newHeight = initHeight + deltaY;
				$active.css({ width: newWidth, height: newHeight });
			} else {//move
				const posX = (event.pageX - offsetX) / tileScale;
				const posY = (event.pageY - offsetY) / tileScale;
				$active.css({ left: posX, top: posY });
			}
		}
		function end(e) {
			e.preventDefault();
			e.stopPropagation();
			$(this).removeClass('dragActive');
			const tileScale = parseFloat($tile.data('scale')) || 1;
			const tileWidth = $('#dialogTileEditorDemoTile').innerWidth();
			const tileHeight = $('#dialogTileEditorDemoTile').innerHeight();
			if($active){
				let index = $active.data('index');
				const position = $(this).position();
				const dimensions = { width: $active.width(), height: $active.height() };
				let directions = ['width', 'height'];
				for(let i = 0; i < directions.length; i++){
					let direction = directions[i];
					let mode = tileEditor.stacks[index][direction + 'Mode'];
					let unit = tileEditor.stacks[index][direction + 'Unit'];
					let value = (direction == 'width' ? dimensions.width : dimensions.height);
					let tileReference = (direction == 'width' ? tileWidth : tileHeight);
					if(mode == 'normal'){
						if(unit == '%') value = value * 100 / tileReference;
					} else if(mode == 'tileMinus') {
						if(unit == 'px') value = tileReference - value; 
						else if(unit == '%') value = 100 * (tileReference - value) / tileReference; 
					}
					tileEditor.stacks[index][direction + 'Value'] = Math.round(value);
				}
				directions = ['horizontal', 'vertical'];
				for(let i = 0; i < directions.length; i++){
					let direction = directions[i];
					let mode = tileEditor.stacks[index][direction + 'Mode'];
					let unit = tileEditor.stacks[index][direction + 'Unit'];
					let value = (direction == 'horizontal' ? position.left / tileScale : position.top / tileScale);
					if(mode == 'left' || mode == 'top'){
						let tileReference = (mode == 'left' ? tileWidth : tileHeight);
						if(unit == '%') value = value * 100 / tileReference;
					} else if (mode == 'right' || mode == 'bottom') { 
						let tileReference = (mode == 'right' ? tileWidth : tileHeight);
						let elementReference = (mode == 'right' ? dimensions.width : dimensions.height);
						if(unit == 'px') value = tileReference - (value + elementReference);
						else if(unit == '%') value = 100 * (tileReference - (value + elementReference)) / tileReference;
					} else if (mode == 'center' || mode == 'middle'){
						let tileReference = (mode == 'center' ? tileWidth : tileHeight);
						let elementReference = (mode == 'center' ? dimensions.width : dimensions.height);
						if(unit == 'px') value = value + (elementReference/2) - (tileReference/2);
						else if(unit == '%') value = 100 * (value + (elementReference/2) - (tileReference/2)) / tileReference;
					}
					tileEditor.stacks[index][direction + 'Value'] = Math.round(value);
				}
				dialogTileEditorSelectStack(index);
				dialogTileEditorStyleStack(index);
			}
			$active = false;
		}
		$element.on("mousedown touchstart", start);
		$element.on("mousemove touchmove", move);
		$tile.on("mousemove touchmove", move);
		$background.on("mousemove touchmove", move);
		$element.on("mouseup click touchend", end);
		$tile.on("mouseup click touchend", end);
		$background.on("mouseup click touchend", end);
	}
	$('.tabDialogTileEditor.positionValue').on('change', function(){
		var options = {};
		var index = dialogTileEditorSelectedStack;
		var $this = $(this);
		if($this.hasClass('position')){
			options[$this.data('direction') + capitalize($this.data('type'))] = $this.val();
		} else if($this.hasClass('size')){
			options[$this.data('direction') + capitalize($this.data('type'))] = $this.val();
		}
		dialogTileEditorStyleStack(index, options)
	});
	$('.tabDialogTileEditor.styleValue').on('change', function(){
		var options = {};
		var index = dialogTileEditorSelectedStack;
		var $this = $(this);
		options['style' + capitalize($this.data('type')) + capitalize($this.data('type-options'))] = $this.val();
		dialogTileEditorStyleStack(index, options)
	});
}

//++++++++++ SAVE ++++++++++
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
			if (typeof device.nativeLinkedView != udef && device.nativeLinkedView != ""){
				if(existingViews.indexOf(device.nativeLinkedView.split('#')[0]) == -1){
					console.log("Removed dead link to " + device.nativeLinkedView);
					device.nativeLinkedView = "";
				}
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
	obj.lists = lists;
	obj.optionsLayoutDefaultIcons = optionsLayoutDefaultIcons || {};
	obj.optionsLayoutDefaultSymbols = optionsLayoutDefaultSymbols || {};
	obj.tileClasses = tileClasses || [];

	//Generate cssString from tileClasses
	obj.tileClassesCssString = "";
	obj.tileClasses.forEach(function(tileClass, tileClassIndex){
		obj.tileClassesCssString += createCssStringFromTileClass(tileClass, tileClassIndex) + " ";
	});
	function createCssStringFromTileClass(tileClass, tileClassIndex){
		let cssPrefixes = ['.tile:not(.enlarged):not(.active).tileClass_' + tileClassIndex, '.tile.active:not(.enlarged).tileClass_' + tileClassIndex + '_ifActiveNotenlarged', '.tile.enlarged:not(.active).tileClass_' + tileClassIndex + '_ifInactiveEnlarged', '.tile.active.enlarged.tileClass_' + tileClassIndex + '_ifActiveEnlarged'];
		let cssString = '';
		let borderRadiusCssString = '';
		if(!tileClass.value) tileClass.value = {};
		//Tile
		cssString += cssPrefixes.join(', ') + ' { /* ' + tileClass.commonName + ' */ ';
		for(let tileOption in tileClass.value.tile || {}){
			if(tileOption.indexOf('border-') == 0 && tileOption.endsWith('-radius')){
				borderRadiusCssString += tileOption + ': ' + tileClass.value.tile[tileOption] + (tileClass.value.tile[tileOption + '-unit'] || 'px') + '; ';
			}
		}
		cssString += ' } ';
		let borderRadiusCssPrefixes = cssPrefixes.map(function(entry){return entry + ' .setTileSize'; });
		cssString += borderRadiusCssPrefixes.join(', ') + ' { /* ' + tileClass.commonName + ' */ ' + borderRadiusCssString + ' } ';
		//Stacks
		(tileClass.value.stacks || []).forEach(function(stack, stackIndex){
			//Stack Positions
			let cssArray = tileEditorCreateCssPositionsArrayFromOptions(stack);
			if(cssArray && cssArray.length){
				let cssPostfix = ' .stackClass_' + stackIndex;
				let cssSelector = cssPrefixes.map(function(cssPrefix){ return `${cssPrefix}${cssPostfix}`; }).join(', ');
				cssString += cssSelector + ' { /* ' + tileClass.commonName + ' - ' + stack.name + ' */ ';
				cssArray.forEach(function(css){
					cssString += css.attribute + ': ' + (css.value && css.value != '' ? css.value : 'unset') + '; ';
				});
				//General Stack styles
				if(stack['styleColor']) cssString += 'color: ' + stack['styleColor']+ '; ';
				if(stack['styleFont-family']) cssString += 'font-family: ' + stack['styleFont-family'] + '; ';
				if(stack['styleFont-weight']) cssString += 'font-weight: ' + stack['styleFont-weight'] + '; ';
				if(stack['styleFont-style']) cssString += 'font-style: ' + stack['styleFont-style'] + '; ';
				if(stack['styleFont-size']) cssString += 'font-size: ' + stack['styleFont-size'] + '; ';
				cssString += '} ';
			}
			//Stack Styles for other sub-selectors
			for(let key in stack){
				if(stack[key] && stack[key] != ''){
					if(key.indexOf('styleColor') == 0){
						let cssPostfix = '';
						if(key.indexOf('Inactive') > -1){ //inactive
							cssPostfix += ':not(active)';
						} else { //active
							cssPostfix += '.active';
						}
						if(key.indexOf('Ontransparent') > -1){ //transparent
							cssPostfix += '.transparent';
						}
						if(key.indexOf('Hover') > -1){ //hover
							cssPostfix += ':hover';
						}
						cssPostfix += ' .stackClass_' + stackIndex;
						let cssSelector = cssPrefixes.map(function(cssPrefix){ return `${cssPrefix}${cssPostfix}`; }).join(', ');
						cssString += cssSelector + ' { /* ' + tileClass.commonName + ' - ' + stack.name + ' */ ';
						cssString += 'color: ' + stack[key] + '; ';
						cssString += '} ';
					} else if (key == 'styleIcon-height'){
						let cssPostfix = ' .stackClass_' + stackIndex + ' .uiElement.icon';
						let cssSelector = cssPrefixes.map(function(cssPrefix){ return `${cssPrefix}${cssPostfix}`; }).join(', ');
						cssString += cssSelector + ' { /* ' + tileClass.commonName + ' - ' + stack.name + ' */ ';
						cssString += 'height: ' + stack[key] + '; ';
						cssString += '} ';
					} else if (key == 'styleIcon-max-height'){
						let cssPostfix = ' .stackClass_' + stackIndex + ' .uiElement.icon';
						let cssSelector = cssPrefixes.map(function(cssPrefix){ return `${cssPrefix}${cssPostfix}`; }).join(', ');
						cssString += cssSelector + ' { /* ' + tileClass.commonName + ' - ' + stack.name + ' */ ';
						cssString += 'max-height: ' + stack[key] + '; ';
						cssString += '} ';
					}
				}
			}
		});
		return cssString;
	}	

	//Set version
	version = ++version || 0;
	obj.version = version;
	obj.configVersion = 3;
	
	//Set passphrase
	passphrase = $('#optionsPassphrase').val();
	socket.emit('setState', 'iqontrol.' + instance + '.passphrase', {val: passphrase, ack: true});
	if (passphrase) obj.passphraseEncrypted = md5(passphrase); else obj.passphraseEncrypted = "";

	//Get widgetDatapoints
	var widgetsToDownload = [];
	if (typeof views != udef) views.forEach(function(view){
		if (typeof view.devices != udef) view.devices.forEach(function(device){
			if (typeof device.states != udef) device.states.forEach(function(state){
				if ((state.state == "URL" ||state.state == "BACKGROUND_URL") && state.commonRole == "const" && state.value != "") {
					var filename = null;
					var path = null;
					var query = null;
					if (state.value.indexOf("./images/widgets/") == 0){
						filename = state.value.slice(8, (state.value.lastIndexOf('?') == -1 ? state.value.length : state.value.lastIndexOf('?')));
						path = imagePath;
						query = (state.value.lastIndexOf('?') == -1 ? "" : state.value.slice(state.value.lastIndexOf('?')));
					}
					if (state.value.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0){
						filename = state.value.slice(29, (state.value.lastIndexOf('?') == -1 ? state.value.length : state.value.lastIndexOf('?')));
						path = userfilesImagePath;
						query = (state.value.lastIndexOf('?') == -1 ? "" : state.value.slice(state.value.lastIndexOf('?')));
					}
					if (filename && path){
						widgetsToDownload.push({filename: filename, path: path, query: query});
					}
				}
			});
		});
	});
	if ($("#panelBackgroundURLCommonRole").val() == "const" && $("#panelBackgroundURLValue").val() != "") {
		var value = $("#panelBackgroundURLValue").val();
		var filename = null;
		var path = null;
		if (value.indexOf("./images/widgets/") == 0){
			filename = value.slice(8, (value.lastIndexOf('?') == -1 ? value.length : value.lastIndexOf('?')));
			path = imagePath;
			query = (value.lastIndexOf('?') == -1 ? "" : value.slice(value.lastIndexOf('?')));
		}
		if (value.indexOf("./../iqontrol.meta/userimages/userwidgets/") == 0){
			filename = value.slice(29, (value.lastIndexOf('?') == -1 ? value.length : value.lastIndexOf('?')));
			path = userfilesImagePath;
			query = (value.lastIndexOf('?') == -1 ? "" : value.slice(value.lastIndexOf('?')));
		}
		if (filename && path){
			widgetsToDownload.push({filename: filename, path: path, query: query});
		}
	}
	widgetsToDownload = removeDuplicates(widgetsToDownload);
	if (widgetsToDownload.length > 0){
		var widgetsDatapoints = [];
		var widgetsToDownloadCount = widgetsToDownload.length;
		widgetsToDownload.forEach(function(widget){
			downloadFileAsStringAsync(widget.filename, widget.path).then(function(htmlAsString, query = widget.query){
				widgetsToDownloadCount--;
				$(htmlAsString).filter('meta[name="widget-datapoint"]').each(function(){
					var id = $(this).prop('content');
					var variableId = id.split('|');
					if (variableId.length > 1){
						id = variableId[0];
						var a = variableId[1].indexOf('{'), b = variableId[1].lastIndexOf('}');
						if (a > -1 && a < b) {
							var variable = variableId[1].substring(a + 1, b);
							if (variable && variable != ""){
								var regex = new RegExp('[\\?&]' + variable.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]') + '=([^&#]*)');
								var queryValues = regex.exec(query);
								var queryValue = (queryValues === null ? null : decodeURIComponent(queryValues[1].replace(/\+/g, ' ')));
								if (queryValue) id = variableId[1].replace("{" + variable + "}", queryValue);
							}
						}
					}
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
				if (widgetsToDownloadCount == 0){
					widgetsDatapoints = removeDuplicates(widgetsDatapoints);
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
