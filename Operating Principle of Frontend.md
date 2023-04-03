![Logo](admin/iqontrol.png)
# ioBroker.iqontrol

# Operating Principle of Frontend

## Since Version 3 the principle has changed to the following: 

* Devices with states:
	* A device is an object that contains the configuration of a device on a view
	* device.states contains the configuration of the device's states like STATE, VALUE, BACKGROUND_URL etc.
	* Every state has a commonRole = 'linkedState', 'const', 'calc' or 'array' and a value
	* If commonRole is 'array' then the value is an array of objects, each itsself containing a commonRole = 'linkedState', 'const' or 'calc' and a value

* **addDeviceCollection**:
	* Adds a collection of devices to a given HTML-Element and handles the registration and deletion of update- and binding-functions
	* At first all devices get extended by calling the **extendDevice** function:
		* This add unique identifiers deviceId and deviceIdEscaped to the device
		* Then it adds an object 'deviceStates' which contains all STATES specified by the role of the device. Each deviceState looks like:
			````
			{
				stateId: the stateId, that is stored in fetchedStates and fetchedObjects and represents the acutal values in the ioBroker-System. Additional it contains CONST:, ARRAY:, CALC:, and VIRTUAL:-States, that are only living inside the actual iQontrol-Instance
			} 
			````
		* To generate the stateId the **getDeviceStateId**-function is called:
			* This returnes the stateId of linkedStates or CONST:|CALC:|ARRAY:|VIRTUAL:deviceId.deviceState for constants, calculations, arrays or vitual datapoints
			* While generating the stateId the function **fetchAndSubscribeState** is called with all recognized linkedStates, also these that come from {variables}:
					* This fetches all linkedStates from the server and writes the stateObject and the state itsself into fetchedObjects and fetchedStates
					* Then all linkedStates are subscribed, which means, changes are transmitted to iQontrol and stored in fetchedStates and the **updateState**-Function is called
  			* For temporary states like CONST:, CALC:, ARRAY: and VIRTUAL: the **createTemporaryState** function is called:
    			* This creates objects in fetchedObjects and fetchedStates that represent the acutal value of the temporary state
				* Temporary states can write their value on changes back to ioBroker into a specified object. That is necessary for example for non bijective conversion functions like the usage of the ALTERNATIVE-COLORSPACE for lights to prevent cycling between two values

	* For every device a callback-function ('addDeviceFunction') is called. This function needs to return an object like this:
		````
		{
			$html: jQuery-Object with html to add,
			updateFunctionss: An associative array of updateFunctions (key = stateId),
			bindingFunctions: An associative array of bindingFunctions (key = stateId),
			statesToUpdate: An array of the used stateIds
		}
		````
	* After creating all devices and adding the html to the collection, the get enhancedWithin and **updateState** with all statesToUpdate is called. Additional the updateFunctions with key 'UPDATE_ONCE' are called





## Older versions (< 3.0.0, > 0.0.30) 

### RenderView

#### Part A) 
RenderView runs a loop over all devices that are inside this view. This is what happens inside this loop:
```
/** The ID of the actual Device is stored in deviceId **/
deviceId = iqontrol.0.Views.<view>.<device>


/** Get all linkedStateIds **/
//  While getting the LinkedStateId the correspondig usedObject is also fetched
//  If the linked State is not fetched yet, write it in to viewStateIdsToFetch-Array 
//  they will be fetched alltogether after rendering the view. Then the view is rendered again.

var viewLinkedStateIds = {}; 
iQontrolRoles[usedObjects[deviceId].common.role].states.forEach(function(elementState){
	var stateId = deviceId + "." + elementState;    
	var linkedStateId = getLinkedStateId(stateId);
		//getLinkedStateId(iQontrolId) returns:
		//a) null, if state[stateId] is not fetched yet,
		//b) 'undefined', if state[stateId] is fetched, but state[stateId].val doesn't exist,
		//c) the linkedStateIde (for example hm-rpc.0.lightLivingRoom.1.LEVEL), if state[stateId].val exists
		//  Important: usedObjects[linkedStateId] will be fetched now (async), if it is not fetched yet	
    
    if (linkedStateId == null) viewStateIdsToFetch.push(stateId);
		//In case of a) (state is not fetched yet), store it in the array 'stateIdsToFetch'. 
		//At the end, outside the loop (see Part B), all these states will be fetched at once 
    
    viewLinkedStateIds[elementState] = linkedStateId; 
    	//The linkedStateId is added to the object viewLinkedStateIds
        //Example: viewLinkedStateIds['.LEVEL'] may be 'milight.0.zone1.brightness'
    
	if (linkedStateId) viewLinkedStateIdsToUpdate.push(linkedStateId);
		//Push the linkedStateId to the array 'viewLinkedStateIdsToUpdate'. 
		//At the end, outside the loop (see Part C), all updateFunctions will be called.
		//This will update the HTML with the initial values.    
});


/** Now all parts of the device are rendered. Some parts may differ from the role of the device. This is only an example: **/
if(viewLinkedStateIds['.STATE']){   //Example for .STATE. May also be any other datapoint like .LEVEL, .HUE, ...
    deviceContent += "<div class='iQontrolDeviceState' data-iQontrol-Device-ID='" + deviceId + "'></div>";
		//This is an example for generated HTML-Code for this device

	(function(){ //<---Closure---> (everything declared inside keeps its value as ist is at the time the function is created)
		var _deviceId = deviceId;
		var _linkedStateId = viewLinkedStateIds['.STATE'];
        	// These inside the closure declared variables keep its value, 
            // even when called later and when the loop has jumped to the next device

		var updateFunction = function(){
			// This is an update-function for the linkedState. 
			// This function will be called, when the linkedStateId changes its value. 
            // It will update the generated HTML-Code with the new value.
            var state = getStateObject(_linkedStateId);
			if (state) $("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceState").html(state.val + state.unit);
		};
        
        viewUpdateFunctions[linkedStateId].push(updateFunction);
        	// The updateFunction is added to viewUpdateFunctions

	})(); //<---End of Closure--->
}
```

#### Part B) 
At the end, outside the loop all the missing states are fetched:
```
if(!updateOnly){
	$("#ViewHeaderTitle").html(usedObjects[id].common.name);
	$("#ViewContent").html(viewContent + "<br><br>");
	removeDuplicates(stateIdsToFetch);
	if(stateIdsToFetch.length > 0) fetchStates(stateIdsToFetch, function(){
		console.log(stateIdsToFetch.length + " states fetched while rendering view.");
		renderView(actualViewId, "updateOnly");
	});
}
```

#### Part C) 
After that all the generated Update-Functions are called once:
```
viewLinkedStateIdsToUpdate = removeDuplicates(viewLinkedStateIdsToUpdate);
fetchStates(viewLinkedStateIdsToUpdate, function(){
	for (var i = 0; i < viewLinkedStateIdsToUpdate.length; i++){
		updateState(viewLinkedStateIdsToUpdate[i], "ignorePreventUpdateForDialog");
	}
	viewLinkedStateIdsToUpdate = [];
});
```

