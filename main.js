var action = 0;

var bigResult = document.getElementById('bigResult');
var smallResult = document.getElementById('smallResult');
var bigResultValue = '';
var smallResultValue = '';
var memory = 0;

var clearZero = function () {
 bigResult.textContent= '';
}

var updateDisplay = function(value){

	    action +=1;
		if (action === 1 || equalCounter >= 1 ){
		clearZero();
		bigResult.textContent = value;
		bigResultValue = value;
		equalCounter =0;
		 } else /*if (bigResultValue.length <= 50)*/ {
		 	bigResult.textContent += value
		 	bigResultValue += value;
		  } //else {
		// 	alert ('You inserted maximum number of charachters')
		// }

}

var allClear = function (){
	bigResult.textContent = '0';
	smallResult.textContent= '0';
	action = 0;
	memory = 0;
	equalCounter =0;
}

var clearEntry = function (value){

	if (bigResultValue.length > 1){
		bigResultValue = bigResultValue.substring(0, bigResultValue.length -1);
	}else {
		bigResultValue = 0;
	}
	bigResult.textContent = bigResultValue;
	action = 0;

}

var equalCounter =0;

var equal = function (bigResultValue){
	//bigResult.textContent = eval(bigResultValue);
	smallResult.textContent = eval(bigResultValue); 
	
	smallResultValue = eval(bigResultValue);
	memory = parseInt(smallResultValue);
	 equalCounter +=1;

	
}

var operation = function() {
	console.log(memory+bigResultValue);
	if ( equalCounter !== 0){
	bigResult.textContent = eval(memory+bigResultValue);
	bigResultValue = memory;
	console.log(memory);
	}
}
