/*

	Should check if val is equal to average of any pair in array
*/


function averagePair(arr,avg){
  // add whatever parameters you deem necessary - good luck!
  var tempavg;
  var start =0;
  var end = arr.length-1;
  while(start<end){
    tempavg = (arr[start]+arr[end])/2 ;
    if(tempavg===avg){
      console.log(arr[start],arr[end]);
      return true;
    }else if(tempavg > avg){
      end--;
    }else{
      start++;
    }
  }
  return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
