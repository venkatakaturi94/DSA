/*
MULTIPLE POINTERS
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well

countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

*/



function countUniqueValues(arr){
  if(arr.length===0){
    return 0;
  }
  var startptr =0;
  var nextptr =1;
  var counter=0;
  while(nextptr<arr.length){
    if(arr[startptr]!==arr[nextptr]){
      counter++;
    }
    startptr++;
    nextptr++;
  }
  return counter+1;
}
