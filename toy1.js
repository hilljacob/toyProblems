// Code Wars -- Persistent Bugger. 6kyu
// passed all 100 tests

var num = 1902515;
function persistence(num) {
  var number = num.toString();
  var newarr;
  var sum = num;
  var loop = 0;
  var createdNum = false;
  while(!createdNum){
     newarr = [];
     for(var i = 0; i < number.length; i++){
      newarr.push(number[i]);
     }
     console.log(newarr);
     if (sum && sum < 10 || sum == 0){
       createdNum = true;
      }else {
        sum = 0;
        for(var j = 0; j < newarr.length; j++){
          if(j === 0){
            sum = newarr[j]
          }else
          sum = sum * newarr[j];
        }
      loop++;
      number = sum.toString();
     }
  }
  return loop;
}

persistence(num);
