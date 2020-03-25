/*

Name: Jamie Johnston
Date: 24/04/2020

Purpose: 
Given an array of length >= 0, and a positive integer N, 
return the contents of the array divided into N equally sized arrays.

Where the size of the original array cannot be divided equally by N, 
the final part should have a length equal to the remainder.

*/

// Set input params as variables
let arr = [1,2,3,4,5,6,7,8,9];
let n = 3;

// Split 'arr' into 'n' equally sized arrays
function groupArrayElements(arr, n){

    // input arr is empty - return empty array
    if(arr.length == 0){
        return [];
    }
    
    // split into 1 array - return input array
    if(n == 1){
        return arr;
    }

    let num,arrSplit = [];
    
    // length of each sub-array
    num = Math.ceil(arr.length / n);

    // split the input array, store in arrSplit
    for(let i = 0; i < n; i++){
        arrSplit.push(arr.splice(0,num));
    }

    // return the array of sub arrays
    return arrSplit;

}

console.log(groupArrayElements(arr,n));