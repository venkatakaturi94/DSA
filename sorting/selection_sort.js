
Loop through each and every element array and store index of minimum element

If arr[minindex] < arr[currentidx]

Swap currentidx and mind



Pseudo Code

Store the first element as the smallest value you've seen so far.

Compare this item to the next item in the array until you find a smaller number.

If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.

If the "minimum" is not the value (index) you initially began with, swap the two values.

Repeat this with the next element until the array is sorted.





function selectionSort(arr){

  
  for(var i=0;i<arr.length;i++){
    var lowest=i;
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        lowest = j;
      }
    }
    if(i!==lowest){
      var temp= arr[lowest];
      arr[lowest] = arr[i];
      arr[i] = temp;
    }
  }  
  return arr;
}

console.log(selectionSort([4,3,2,1]))
