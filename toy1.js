// Code Wars -- Persistent Bugger. 6kyu
// passed all 100 tests
// Description:
//
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example:

 //persistence(39) === 3  because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 //persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 //persistence(4) === 0 // because 4 is already a one-digit number


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
