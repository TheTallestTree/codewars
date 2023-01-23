/*
TODO: 
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
  return (a+b).toString(2)
}

/*
 SUCCESS!
 Correct answer here, just needed to learn more about 
 .toString()
*/

/*
TODO: 
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk 
but containing one "needle"

After your function finds the needle it should return a message 
(as a string) that says:

"found the needle at position " 
plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> 
"found the needle at position 5" 
*/
 
let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

function findNeedle(haystack) {
  const haystackIndex = haystack.findIndex(function (item) {
    return item === "needle"
  })
  return `found the needle at position ${haystackIndex}`
}

/*
SUCCESS!
BUT! 

Way too much code used here. findIndex is great if we need to use the index in a different 
part of the function but since we just return it, we don't need to use findIndex
*/

function betterFindNeedleSolution(haystack) {
  return `found the needle at postion ${haystack.indexOf('needle')}`
}

/*
TODO:
The maximum sum subarray problem consists in finding the maximum sum of a 
contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers 
and the maximum sum is the sum of the whole array. 
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. 
Note that the empty list or array is also a valid sublist/subarray.

Soo it takes an array, itterates through the array and 
adds the numbers to a sum maybe and then stops when it finds the best sequest of numbers? 
idk how to this honestly. 
*/

let maxSequence = function(arr) {
  // this one is tricky
  
}

