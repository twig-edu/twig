## READ ME 

### To run 

- Open index.html in a browser and use the developer console to view the output of the function groupArrayElements()

- Change the length of the input array by adding elements to the array arr

- Change the number of sub arrays output, change the value of variable n



### Instructions

- Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.

- Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.


### Description

- If the array is empty, return an empty array to avoid doing unnecessary work

- If n is 1, return the input array as no operation is required

- Calculate the length of the 3 sub arrays we want
- Using the given example arr = [1,2,3,4,5], n = 3
- The length of the array / n, rounded up tells us the length of each array
- If we split the original array into chunks of those sizes, what's left goes in an array on its own

### Example

- eg. 5 / 3 = 1.66666..7
- We could have 3 arrays with 1.6 elements 
- Given they all have to be equal except when the array does not divide evenly by n
- We can round the 1.6 up to give us 2 arrays of lenth 2, and one array of length 1
