//iQontrol - Copyright (c) by Sebatian Bormann
//Please visit https://github.com/sbormann/ioBroker.iqontrol for licence-agreement and further information

//Settings
var namespace = getUrlParameter('namespace') || 'iqontrol.0';
var connectionLink = location.origin;
var useCache = true;


//Delcarations
var config = {};					//Contains the system config (like system language)
var systemLang = "en";				//Used for translate.js -> _(string) translates string to this language. This is only the backup-setting, if it could not be retreived from server (via config.language)
var options = {};					//Contains the options (extracted form <namespace + '.Options'>'.native')
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
var stateIdsToFetch = [];			//Contains all missing stateIds after rendering a view or dialog - they will be fetched and if ready, the view or dialog ist rendered again
var stateIdsToUpdate = [];			//Contains all stateIds after rendering a view or dialog, where updateFunctions were created - the corresponding updateFunctions are called after rendering the view or dialog
var updateViewFunctions = {};		//Used to save all in the view-page currently visible state-ids and how updates have to be handled in the form of {State-ID:[functions(State-ID)]}
var updateDialogFunctions = {}; 	//Same as updateViewFunctions, but for dialog-page
var preventUpdate = {};				//Contains timer-ids in the form of {ID:{timerId, stateId, deviceId, newVal}}. When set, updating of the corresponding stateId is prevented. The contained timer-id is the id of the timer, that will set itself to null, after the time has expired.
var reconnectedShortly = false;		//Contains timer-id if the socket has reconnected shortly. After a short while it is set fo false.
var iQontrolRoles = {
	"iQontrolView": 				{name: "Link to other view", 	states: ["BATTERY", "UNREACH", "ERROR"]},
	"iQontrolSwitch": 				{name: "Switch", 				states: ["STATE", "POWER", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/switch_on.png"},
	"iQontrolLight": 				{name: "Light", 				states: ["STATE", "LEVEL", "HUE", "CT", "SATURATION", "POWER", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/light_on.png"},
	"iQontrolFan": 					{name: "Fan", 					states: ["STATE", "BATTERY", "UNREACH", "POWER", "ERROR"], icon: "/images/icons/fan_on.png"},
	"iQontrolThermostat": 			{name: "Thermostat", 			states: ["SET_TEMPERATURE","TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "VALVE_STATES", "BATTERY", "UNREACH", "ERROR"], icon: "/images/icons/radiator.png"},
	"iQontrolHomematicThermostat": 	{name: "Homematic-Thermostat", 	states: ["SET_TEMPERATURE", "TEMPERATURE", "HUMIDITY", "CONTROL_MODE", "BOOST_STATE", "PARTY_TEMPERATU