<h1>
	<img src="admin/iqontrol.png" width="64"/>
	ioBroker.iqontrol
</h1>

## iqontrol adatper for ioBroker: Operating Principle of Frontend

### RenderView

#### Part A) 
RenderView runs a loop over all devices that are inside this view. This is what happens inside this loop:
````
/** The ID of the actual Device is stored in deviceId **/
deviceId = iqontrol.0.Views.<view>.<device>


/** Now all parts of the device are rendered. Some parts may differ from the role of the device. **/

stateId = deviceId + ".STATE"; 
	//Example for datapoint .STATE. May also be any other datapoint like .LEVEL, .HUE, ...

linkedStateId = getLinkedStateId(iQontrolId); 
	//getLinkedStateId(iQontrolId) returns:
	//a) null, if state[stateId] is not fetched yet,
	//b) 'undefined', if state[stateId] is fetched, but state[stateId].val doesn't exist,
	//c) the linkedStateIde (for example hm-rpc.0.lightLivingRoom.1.LEVEL), if state[stateId].val exists
	//  Important: usedObjects[linkedStateId] will be fetched now (async), if it is not fetched yet


if (linkedStateId == null) stateIdsToFetch.push(stateId)
	//In case of a), state[stateId] is not fetched yet, store it in the array 'stateIdsToFetch'. 
	//At the end, outside the loop (see Part B), all these states will be fetched at once 

if(linkedStateId){ 
	/** Generate the necessary HTML-Code for the device now **/
	deviceContent += "<div class='iQontrolDeviceState' data-iQontrol-Device-ID='" + deviceId + "'>";

	(function(){ //|---Closure---> (everything declared inside keeps its value as ist is at the time the function is created)
		var _deviceId = deviceId;
		var _linkedStateId = linkedStateId;

		/** Define an update-function for the linkedStateId and push it to the array updateViewFunctions.
		This function will be called, when the linkedStateId changes its value. It will update the generated HTML-Code with the new value **/
		var updateFunction = function(){
			var state = getStateObject(_linkedStateId);
			if (state) $("[data-iQontrol-Device-ID='" + _deviceId + "'] .iQontrolDeviceState").html(state.val + state.unit);
		};
		updateViewFunctions[linkedStateId].push(updateFunction);
	})(); //---End of Closure--->|

	stateIdsToUpdate.push(linkedStateId);
		//Push the linkedStateId to the array 'stateIdsToUpdate'. 
		//At the end, outside the loop (see Part C), the all updateFunctions of the unsed linkedStateId inside the loop will be called.
		//This will update the HTML with the initial values.

}
````

#### Part B) 
At the end, outside of the loop all the missing states are fetched:
````
if(!updateOnly){
	$("#ViewHeaderTitle").html(usedObjects[id].common.name);
	$("#ViewContent").html(viewContent + "<br><br>");
	removeDuplicates(stateIdsToFetch);
	if(stateIdsToFetch.length > 0) fetchStates(stateIdsToFetch, function(){
		console.log(stateIdsToFetch.length + " states fetched while rendering view.");
		renderView(actualViewId);
	});
}
````

#### Part C) 
After that all the generated Update-Functions are called once:
````
stateIdsToUpdate = removeDuplicates(stateIdsToUpdate);
fetchStates(stateIdsToUpdate, function(){
	for (var i = 0; i < stateIdsToUpdate.length; i++){
		updateState(stateIdsToUpdate[i], "ignorePreventUpdateForDialog");
	}
	stateIdsToUpdate = [];
});
````






