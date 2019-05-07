<h1>
	<img src="admin/iqontrol.png" width="64"/>
	ioBroker.iqontrol
</h1>

[![NPM version](http://img.shields.io/npm/v/iobroker.iqontrol.svg)](https://www.npmjs.com/package/iobroker.iqontrol)
[![Downloads](https://img.shields.io/npm/dm/iobroker.iqontrol.svg)](https://www.npmjs.com/package/iobroker.iqontrol)
[![Dependency Status](https://img.shields.io/david/sbormann/iobroker.iqontrol.svg)](https://david-dm.org/sbormann/iobroker.iqontrol)
[![Known Vulnerabilities](https://snyk.io/test/github/sbormann/ioBroker.iqontrol/badge.svg)](https://snyk.io/test/github/sbormann/ioBroker.iqontrol)

[![NPM](https://nodei.co/npm/iobroker.iqontrol.png?downloads=true)](https://nodei.co/npm/iobroker.iqontrol/)

**Tests:** Linux/Mac: [![Travis-CI](http://img.shields.io/travis/sbormann/ioBroker.iqontrol/master.svg)](https://travis-ci.org/sbormann/ioBroker.iqontrol)
Windows: [![AppVeyor](https://ci.appveyor.com/api/projects/status/github/sbormann/ioBroker.iqontrol?branch=master&svg=true)](https://ci.appveyor.com/project/sbormann/ioBroker-iqontrol/)

## iqontrol adapter for ioBroker

Fast Web-App for Visualization.

![Example](img/screenshot1.jpg)
![Example](img/screenshot2.jpg)

Runs in any Browser.
You can save it as Web-App on iOS-Homescreen and it looks and feels like a nativ app.
It´s fully customizable.

## You need...
* Nodejs 8 or higher
* socketIO has to be enabled in web-adapter

## How to use
* Start creating views.
	You can consider views as something like a pages.
* Then create devices on these views.
	Devices have a role, that detemines the function of the device, which icons are used and so on.
	Depending on that role you can link several states to the device. These will give the device its functionality.
	If you select 'Link to other view' as role you can create links to other views. I suggest skinning Links to other views with the same Background, the linked view has.
	You can also try to use the Autocreate-Function to chose an existing device from the iobroker-object-tree. Autocreate tries to find out the role and to match as many states as possible.
* Afterwards you can create a toolbar, wich is displayed as footer.
	Toolbar-Entrys are links to views.
	The first Toolbar-Entry will be your 'Home-View' with will be loaded at start.
* To give everything a fancy style, you can upload your own images.
	You can use your images as background-images for views, or for devices.
	The free builtin demo-wallpapers are from www.pexels.com.

## Knowns issues
This is the first alpha-Release, so there may be a lot of bugs. But for me it runs completely stable.
However there are a few limitations:
- Uploading images (as background-images or for skinning device-buttons) works, but renaming and deleting does not work
- Creating and deleting sub-directories is also not working.
You can do these operations manually via ftp under iobroker/iobroker-data/files/iqontrol/userimages

Please feel free to comment and let me know, how to fix these issues!

Visit [iobroker forum](https://forum.iobroker.net/topic/22039/neuer-adapter-visualisierung-iqontrol). 

## Description of roles and associated states
Every device has a role, wich defines the function of the device. Every role generates a set of states, wich can be linked to a corresponding io-broker state.
If you use the auto-create-function, you can chose an existing device from the io-broker-object tree.  Autocreate tries to find out the role and to match as many states as possible.
This will only work for known devices. For unknown devices, and to give devices advanced features, you can add devices manually or edit the devices that were created by autocreate.
To edit the role and the linked states of a device, click on the pencil behind the device. You will find a short description of the roles and the used states below:

### General states:
Every role has the following three states:
* BATTERY: boolean - when true, a little battery-empty-icon will be displayed
* ERROR: boolean - when true, a little exclamation-mark-icon will be displayed
* UNREACH: boolean - when true, a little wireless-icon will be displayed

Most of the roles have a STATE-state. Mostly it represents the main function of the device. You can assign io-broker-states of the following types to it:
* boolean - if possible, it will be translated to a senseful text like 'on/off', 'opened/closed' or similar. If you click on the icon of a tile it trys to toggle the boolean (for example to turn a light on or off). If it is not read-only it will generate a flip-switch in the dialog.
* number - will be displayed with its corresponding unit and generate a slider in the dialog.
* string - a text to be displayed
* value-list - the selected value will be displayed. If it is not write-protected it will generate a drop-down-menu in dialog. Technically an value-list is a number with a corresponding translation-list, defined in the 'native.states' property.

However, not every type makes sense to every role. So the STATE of a switch for example will be a boolean in most cases, to be able to be toggled between on and off. A string may be displayed, but the switch will not be functional.

### Links to other view:
* Has no further states, but it will respect the linked-view-property

### <img src="img/icons/switch_on.png" width="32"> Switch, <img src="img/icons/fan_on.png" width="32"> Fan:
* STATE: boolean - display and set on/off-state

### <img src="img/icons/light_on.png" width="32"> Light:
Every light may have one or both of the following states:
* STATE: boolean - display and set on/off-state
* LEVEL: number - display an set the level of the light

Optional you can define the following states:
* HUE: number - color of the light
* CT: number - color-temperature of the light

### <img src="img/icons/radiator.png" width="32"> Thermostat:
* SET_TEMPERATURE: number - goal-temperature
* TEMPERATURE: number - actual temperature to be displayed in small in the upper right corner
* HUMIDITY: number - actual humidity to be displayed in small in the upper right corner
* CONTROL_MODE: value-list - display and set the mode of the thermostat
* VALVE_STATES: array of names and numbers - displayes the opening in percentage of the valves associated with the therostat

### <img src="img/icons/radiator.png" width="32"> Homematic-Thermostat:
In addition to normal thermostat you can define:
* PARTY_TEMPERATURE: string - special-formatted string to define the party- oder holiday-mode of homematic-thermostats
* BOOST_STATE: number - displayes the remaining boost-time of homematic-thermostats

### <img src="img/icons/temperature.png" width="32"> Temperature-Sensor, <img src="img/icons/humidity.png" width="32"> Humidity-Sensor:
* STATE: number - temperature or humidity that will be displayed in the lower part of the device
* TEMPERATURE: number - temperature that will be displayed in small in the upper right corner
* HUMIDITY: number - humidity that will be displayed in small in the upper right corner

### <img src="img/icons/brightness_light.png" width="32"> Brigthness-Sensor:
* STATE: number - brightness that will be displayed in the lower part of the device
* BRIGHTNESS: number - brightness that will be displayed in small in the upper right corner

### <img src="img/icons/door_closed.png" width="32"> Door, <img src="img/icons/window_closed.png" width="32"> Window:
* STATE: boolean - display if the door or window is opened or closed. 
    *  Alternativeley you can assign a value-list, to display additional states like 'tilted'.
    * You can also assign a string to display any text like "3 windows open" or "all closed".
* Doors and Windows respect the linked-view-property

### <img src="img/icons/door_locked.png" width="32"> Door with lock:
* STATE: boolean - display if the door is opened or closed. 
* LOCK_STATE: boolean - display if the door is locked or unlocked
* LOCK_STATE_UNCERTAIN: boolean - the STATE will be displayed in italic-font, if true to represent that the exact position of the lock is unknown
* LOCK_OPEN: boolean - if set to true, the door will open completely

### <img src="img/icons/blind_middle.png" width="32"> Blind:
* LEVEL: number - height of the blind in percentage
* DIRECTION: value-list - can be Stop, Up and Down
* STOP: boolean - if set to true, the blind will stop

### <img src="img/icons/fire_on.png" width="32"> Fire-Sensor, <img src="img/icons/alarm_on.png" width="32"> Alarm:
* STATE: boolean - if true the sensor will be displayed as triggered
    *  Alternativeley you can assign a value-list, to display additional states like 'tampered'.
    * You can also assign a string to display any text like "fire in upper floor".

### <img src="img/icons/value_on.png" width="32"> Value:
* STATE: any valid state to be displayed (have a look at general states-section)
* LEVEL: number - will produce a slider in dialog

### <img src="img/icons/value_off.png" width="32"> Universal:
* Universal is not yet implemented - but it will be like Value, but with the opportunity to let you chose your own on- and off-icons

### <img src="img/icons/play_on.png" width="32"> Program:
* STATE: boolean - if set to true, the program will be started

### <img src="img/icons/play.png" width="32"> Scene:
* STATE: boolean - displayes, if the scene is active. If set to true, the scene will be started

### <img src="img/icons/button.png" width="32"> Button:
* STATE: any desired type of state
* VALUE: this is a constant (not a linked io-broker-state!) that will be assigned to the STATE if the putton is pressed


## Changelog

### 0.0.16
* (Sebastian Bormann) Role of device is displayed in devices-table.
* (Sebastian Bormann) VALVE_STATES is now editable via GUI (show opening of valves associated with a thermostat in percentage).
* (Sebastian Bormann) Added Role 'Button': You can define a constant SET_VALUE wich will be written to the ID that is linked with STATE if the button is pressed.
* (Sebastian Bormann) Rewritten parts of front-end to guarentee better compatibility. Boost-Mode for Homematic-Thermostat should work now.
* (Sebastian Bormann) Added state BOOST_STATE for Homematic-Thermostat - ability to display remaining boost-time if in boost-mode.
* (Sebastian Bormann) Added dessription of roles and corresponding states.
* (Sebastian Bormann) Temperature und Humidity-Sensors can now display a STATE at bottom of device, and both, TEMPERATURE and HUMIDITY, in small in the upper right corner.
* (Sebastian Bormann) Better handling of Auto-Create of Temperature- und Humidity-Sensors.
* (Sebastian Bormann) German translation: 'geöffnet' lower case.
* (Sebastian Bormann) Zigbee humidity and temperature added to auto-creation.
* (Sebastian Bormann) Fixed not scrollable selectbox at devices tab.

### 0.0.15
* (Sebastian Bormann) Improved check for value type of states.
* (Sebastian Bormann) Improved slider-tooltip to lower font-size at large numbers.

### 0.0 14
* (Sebastian Bormann) If role of state is not further specified, then check for role of parent object.

### 0.0.13
* (Sebastian Bormann) Doors and Windows now force true/false to be translated to opened/closed.
* (Sebastian Bormann) Double Entrys on WelcomeScreen/Overview removed.
* (Sebastian Bormann) States are now set with the correct value type.
* (Sebastian Bormann) Changed recognition of state types. I hope there are no new bugs now!

### 0.0.12
* (Sebastian Bormann) Check for unallowed chars in object names.
* (Sebastian Bormann) Check for duplicates in view names.
* (Sebastian Bormann) Level fires a slider in dialog - even when it has a state list (HUE again :)).
* (Sebastian Bormann) Added Blinds (Homematic) - please test it, i don't have one to test.

### 0.0.11
* (Sebastian Bormann) Added compatibility for edge and firefox. 
* (Sebastian Bormann) Again Hue bugfixes.
* (Sebastian Bormann) Removed Tooltip from Toolbar.

### 0.0.10
* (Sebastian Bormann) Added ColorTemperature. Hoepfully HUE works now? Can't test ist, because i do not own any hue lamp :)

### 0.0.9
* (Sebastian Bormann) Philips HUE added to autocreate (colortemp is not working yet!).  
* (Sebastian Bormann) LinkedView now also works on windows, doors and fire-sensor.
* (Sebastian Bormann) Added translation (thanks ldittmar!).

### 0.0.8
* (Sebastian Bormann) Added icons to image selectboxes.

### 0.0.7
* (Sebastian Bormann) Changed order of tabs
* (Sebastian Bormann) Autocreate for shelly should work now (i hope so, can't test it here)

### 0.0.6
* (Sebastian Bormann) Improved speed of select id and autocreate
* (Sebastian Bormann) Set filter to channel on autocreate

### 0.0.5
* (Sebastian Bormann) Bugfix: creation of many devices schould work now

### 0.0.4
* (Sebastian Bormann) Bugfix: copy device created just a reference to old object
* (Sebastian Bormann) Addes Toolbar-Icons

### 0.0.3
* (Sebastian Bormann) various bugfixes

### 0.0.2
* (Sebastian Bormann) first partly running version

### 0.0.1
* (Sebastian Bormann) initial release

## License
MIT License

Copyright (c) 2019 Sebastian Bormann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
