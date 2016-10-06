/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks
var arr1 = [];

//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'


for (var i = 0; i < 10; i++) {
	var sample = Math.random()*100;
	arr1.push(Math.round(sample));
}

console.log('The original array: ' + arr1);

//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
arr1.shift();
console.log('The second array: ' + arr1);

//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
arr1.pop();
console.log('The third array: ' + arr1);


//Question: how many elements does arr1 have at this moment?
console.log('There is now 8 elements in arr1');


//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?
var arr2 = [];

var arr4 = [];


for (var i = arr1.length; i >=0; i--) {
	arr2.push(arr1[i]);
}

console.log('The inverse array:' + arr2);

arr1.forEach(function(current) {
	arr4.unshift(current);
});

console.log('The -other- inverse array:' + arr2);

//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var arr3 = arr1.filter(function(el){
	if (el % 2 === 0) {
		arr1.splice(el);

		return arr1;

		//return !(el %2);  --- > simpler solution
	}
});
console.log(arr3);