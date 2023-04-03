//Notes and snippets



//#####################################################################################
//ToDo
/*
* Popup: Options-Section with transparency, background-color; ack-flag setzen https://forum.iobroker.net/post/971356


*/





//#####################################################################################
// Rechenaufgaben
const rechenaufgabe = "(25 * 12) + 8**3";
const funktion = new Function(`return ${rechenaufgabe}`);
const ergebnis = funktion();
console.log(ergebnis); // gibt 2108 aus


//#####################################################################################
// Variables
$myDiv = $("<div id='myDiv'>Loading...|Variable 1: {javascript.0.Test.Teststring|1 not found}, Variable 2: {javascript.0.Test.Testnumber|2 not found} , Variable [2b]: {[javascript.0.Test.Testnumber]|2b not found}</div>");
$myDiv2 = $("<div id='myDiv2'>Loading...|Variable 3: {javascript.0.Test.Teststring2|3 not found}, Variable 4: {javascript.0.Test.Testnumber2|4 not found} , Variable [4b]: {[javascript.0.Test.Testnumber2]|4b not found}</div>");
$('body').append($myDiv);
$('body').append($myDiv2);


function activateVariables(selector){
	console.log("activateVariables");
	var $destination = $(selector);
	var originalHtmlParts = ($destination.html() || "").split('|');
	var variableSting = originalHtmlParts.slice(1).join('|');
	$destination.html(originalHtmlParts[0]);	
	var variables = (variableSting.match(/{([^}]+)}/g) || []).map(function(match){ return match.slice(1, -1); });
	var updateFunction = function(){
		var newHtml = variableSting.replace(/{([^}]+)}/g, function(match, p1){ 
			var parts = processVariable(p1);
			var state = getStateObject(parts.linkedStateId);
			var replacement = null;
			if(state && typeof state.val !== udef) {
				if(typeof state.plainText == 'number' && !parts.noUnit){	//STATE = number
					replacement = state.val + state.unit;
				} else {													//STATE = bool or text
					replacement = state.plainText;
				}
			} else if(parts.placeholder) {									//Replace by placeholder
				replacement = parts.placeholder;
			}
			if(replacement != null) return replacement; else return p1;
		});
		$destination.html(newHtml);
	};
	variables.forEach(function(variable){
		var parts = processVariable(variable);
		if(!viewUpdateFunctions[parts.linkedStateId]) viewUpdateFunctions[parts.linkedStateId] = [];
		viewUpdateFunctions[parts.linkedStateId].push(updateFunction);
		viewLinkedStateIdsToFetchAndUpdate.push(parts.linkedStateId);
	});
	function processVariable(variable){
		var result = {};
		var variableParts = variable.split('|');
		var linkedStateId = variableParts[0];
		var noUnit = false;
		if(linkedStateId.substr(0, 1) == "[" && linkedStateId.substr(-1) == "]"){
			linkedStateId = linkedStateId.substring(1, linkedStateId.length - 1);
			noUnit = true;
		}
		//linkedStateId = decodeURI(linkedStateId);
		result.linkedStateId = linkedStateId;
		result.noUnit = noUnit;
		result.placeholder = variableParts[1] || null;
		return result;		
	}	
}

activateVariables('#myDiv');
activateVariables('#myDiv2');


viewLinkedStateIdsToFetchAndUpdate = removeDuplicates(viewLinkedStateIdsToFetchAndUpdate);
fetchStates(viewLinkedStateIdsToFetchAndUpdate, function(){
	for (var i = 0; i < viewLinkedStateIdsToFetchAndUpdate.length; i++){
		if(typeof usedObjects[viewLinkedStateIdsToFetchAndUpdate[i]] == udef) {
			fetchObject(viewLinkedStateIdsToFetchAndUpdate[i], function(){
				updateState(viewLinkedStateIdsToFetchAndUpdate[i], "ignorePreventUpdateForView");
			});
		} else {
			updateState(viewLinkedStateIdsToFetchAndUpdate[i], "ignorePreventUpdateForView");
		}
	}
});

updateState("javascript.0.Test.Teststring");




//#####################################################################################
//Speed-Test for array duplicates
function test1(count){
	let begin = new Date();
	let array = [];
	for(let i=0; i<count; i++){
		array.push(i);
	}
	for(let i=0; i<count; i++){
		array.push(i);
	}
	array = removeDuplicates(array);
	let end = new Date();
	return end - begin;
}

function test2(count){
	let begin = new Date();
	let array = [];
	for(let i=0; i<count; i++){
		if(!array[i]) array.push(i);
	}
	for(let i=0; i<count; i++){
		if(!array[i]) array.push(i);
	}
	let end = new Date();
	return end - begin;
}

function test3(count){
	let begin = new Date();
	let array = [];
	for(let i=0; i<count; i++){
		if(!array[i]) array.push(i);
	}
	for(let i=0; i<count; i++){
		if(!array[i]) array.push(i);
	}
	array = removeDuplicates(array);
	let end = new Date();
	return end - begin;
}

function test4(count){
	let begin = new Date();
	let array = [];
	for(let i=0; i<count; i++){
		array[i] = i;
	}
	for(let i=0; i<count; i++){
		array[i] = i;
	}
	let end = new Date();
	return end - begin;
}

function test(count, testcount){
	count = count || 10;
	testcount = testcount || 100000;
	var test1dur = 0;
	var test2dur = 0;
	var test3dur = 0;
	var test4dur = 0;
	for(let i=0; i<count; i++){
		if(i%100 == 0) console.log(i);
		test1dur += test1(testcount);
		test2dur += test2(testcount);
		test3dur += test3(testcount);
		test4dur += test4(testcount);
	}
	console.log("------TEST------");
	console.log("Test 1: " + test1dur);
	console.log("Test 2: " + test2dur);
	console.log("Test 3: " + test3dur);
	console.log("Test 4: " + test4dur);
}

//Result 2+4 are the fastest - and nearly the same



