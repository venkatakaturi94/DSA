/*

Using Frequency Counter Method
Given 2 +ve integers find out if 2 numbers have same frequency of digits

eg 182=281
eg 3589578=5879385

*/



function sameFrequency(a,b){
  var freqctr ={};
  var fn = a.toString();
  var sn = b.toString();

  for(var x in fn){
    var charctr = fn[x];
    freqctr[charctr] ? freqctr[charctr] +=1 : freqctr[charctr]=1;
  }
  for(var y in sn){
    var ctr = sn[y];
    if(!freqctr[ctr]){
      return false;
    }
    else{
      freqctr[ctr] -=1;
    }
  }
  return true;
}

console.log(sameFrequency(182,281));
