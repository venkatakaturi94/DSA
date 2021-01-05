//Linear Search (best case O(1) Worst Case O(n))


functionlinearSearch(arr, elem) {

	return arr.indexOf(elem);

}

console.log(linearSearch([1,2,3,4,5],5))



// Original Solution. [bestcase O(1). Worst Case O(log n)]
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) {
	  end = middle - 1;
	}
        else{
	  start = middle + 1;
	}
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)


// Linear String Search [find occurrences of substring in a string] (ms-Main String, ss- Short String)

// This is also example of sliding pattern 

function naiveStrSearch(ms,ss){
    var count =0;
    var tempc =1;
    var mslen = ms.length-1;
    var sslen = ss.length-1;
    for(var i=0;i<mslen-sslen+1;i++){
      if(ms[i]===ss[0]){
        for(var j =1;j<=sslen;j++){
          if(ss[j]===ms[i+j]){
             tempc+=1;
          }
        }
        if(tempc ===3){
          count +=1;
          tempc=1;
        }
      }
    }
  return count;
}

console.log(naiveStrSearch('zyomgxyomg','omg'))


//zyomgxyomg
//omg

//zyomgxyomg
// omg

//zyomgxyomg
//  omg
