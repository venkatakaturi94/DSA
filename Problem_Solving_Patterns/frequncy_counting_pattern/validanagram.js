/*FREQUENCY COUNTERS
This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

*/


function validAnagram(s1,s2){
    if(s1===''&&s2===''){
  return true;
}
if(s1.length !==s2.length){
  return false;
}
var obj1 = {};
var obj2 = {};

for(let x in s1){
  var y = s1[x];
  if(obj1.hasOwnProperty(y)){
    obj1[s1[x]] += 1;
  }
  else
  {
    obj1[s1[x]] =1;
  }
}

for(let x in s2){
  var z = s2[x];
  if(obj2.hasOwnProperty(z)){
    obj2[s2[x]] += 1;
  }
  else
  {
    obj2[s2[x]] =1;
  }
}

//Now OBJ1 and OBJ2 have frequencies of each letter

for(var xc in obj1){
  if(obj1[xc]!==obj2[xc]){
    return false;
  }
 }
 return true;
}
