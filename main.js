//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
if (operation === 0) {
		return firstNumber + secondNumber;
	}else if (operation ===1) {
		return firstNumber * secondNumber
	}else if (operation ===2) {
		if(secondNumber !== 0) {
			return firstNumber/secondNumber;
		}else {
			return "secondNumber shoud be different to zero"
		}
    } else {
    	return "Nothing to Operate On"; 
    }
}


  //TODO: your code here


//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
var result=[]; 
if (firstArray.length >= secondArray.length){
	           var i= 0 ;
			  while (i<secondArray.length ){
				result.push(firstArray[i]+secondArray[i])
				i++
			   }
			   var j = secondArray.length;
			   while ( j<firstArray.length ){
				result.push(firstArray[j]+1)
				j++
			    }
	}else	{
		      var i= 0 ;
		      while (i<firstArray.length ){
				result.push(firstArray[i]+secondArray[i])
				i++
			   }
			   var j = firstArray.length;
			   while ( j<secondArray.length ){
				result.push(secondArray[j]+1)
				j++
			    }
	}    
return result

}

function addArraysForLoop(firstArray, secondArray) {
  //TODO: your code here
var result=[]; 
if (firstArray.length >= secondArray.length){
			  for (var i= 0 ;i<secondArray.length; i++){
				result.push(firstArray[i]+secondArray[i])
			   }
			   for (var j = secondArray.length; j<firstArray.length; j++){
				result.push(firstArray[j]+1)
			    }
	}else	{
		for (var i= 0 ;i<firstArray.length; i++){
				result.push(firstArray[i]+secondArray[i])
			   }
			   for (var j = firstArray.length; j<secondArray.length; j++){
				result.push(secondArray[j]+1)
			    }
	}    
return result
  //TODO: you code here
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20
function posSum(array){
	if (array.length===0){
		return 0
	}else {
		if(array[0] <0) {
		return 0 +posSum(array.splice(1))
	}
	return array[0]+posSum(array.splice(1))
}
}

//TODO: you code here

//=========================================================== 4
//I have a bucket of sloths. Each sloth is special and has a long name.
// Below is an array called bucketOfSloths, containing all the information about my sloths.
var bucketOfSloths = [
  { name: { first: 'Furry', middle: 'Danger', last: 'Assassin' }, age: 2 },
  { name: { first: 'Slow', last: 'Pumpkin' }, age: 3 },
  { name: { first: 'Bullet', middle: 'Proof', last: 'Sloth' }, age: 4 },
  { name: { first: 'Boos', middle: 'Boos', last: 'Bun' }, age: 5 },
  { name: { first: 'Jungle', last: 'Fuzz' }, age: 2 }
];

// a- write a function fullName that takes index number and array as input and return the full name as string
// fullName(bucketOfSloths,0) //==> "Furry Danger Assassin"

function fullName(array, index) {
  //your code is here
  var str="";
  str= array[index].name.first+ " "+array[index].name.middle+" "+array[index].name.last
 
  	if (str.indexOf("undefined")!==-1){
       var res =  str.replace("undefined","")
	    return res 
  	} else{
		return str
	}
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(array) { 
	var max = fullName(array,0).length;
	var pos = 0
	for (var i =1;  i<array.length; i++ ){

		if (fullName(array,i).length>max){
			console.log(array,i)
			max = fullName(array,i).length
			pos = i
		}

	}
	return (array[pos])
  // TODO: Your code here
}

//Good Luck :))
