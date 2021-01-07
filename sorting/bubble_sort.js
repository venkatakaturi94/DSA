// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);



// Without Optimization

function bubbleSort(arr){

  for(var i=0;i<arr.length;i++){
    console.log("*******")
    for(var j=0;j<arr.length-1;j++){
      console.log(arr,arr[j],arr[j+1])
      if(arr[j]>arr[j+1]){
        var temp = arr[j+1];
        arr[j+1]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4,2,3,1]))