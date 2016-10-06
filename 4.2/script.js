/**
 * Created by siqi on 9/24/16.
 */

//Create a function such that, given argument arr, an array, it returns the same array in reverse order

function reverseArray(arr){
	var newArr = [];

    for (var i = arr.length; i >= 0; i--) {
	newArr.push(arr[i]);
	}
	return newArr;
}

console.log( reverseArray([1,2,3,4,5]) ); //should log [5,4,3,2,1]