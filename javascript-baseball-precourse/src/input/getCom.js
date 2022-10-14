const computerNum = function(){
  let nums = [];
  while ([...nums].length < 3) {
    let num = Math.floor(Math.random() * 10);
    if (! nums.includes(num) ) {
      nums.push(num);
    }
  }
  return nums.join('')
};

console.log(typeof computerNum());