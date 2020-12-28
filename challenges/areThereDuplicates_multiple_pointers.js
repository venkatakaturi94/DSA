function areThereDuplicates(...args) {
  args = args.sort();
  var start =0;
  var next =1;
  for(start;next<args.length;start++){
    if(args[start]===args[next]){
      return true;
    }
    next++;
  }
  return false;
}
