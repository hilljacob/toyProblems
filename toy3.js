// there are two toy problems today

// 7 kyu ~~~~~~~~
// All Star Code Challenge #1 ~~~~~~~
// Description:
//
// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #1
//
// Write a function, called sumPPG, that takes two NBA player objects and sums their PPG
//
// Examples:
//
// var iverson = { team: '76ers', ppg: 11.2 };
// var jordan =  { team: 'bulls', ppg: 20.2 };
// sumPPG(iverson, jordan); // => 31.4


function sumPPG(playerOne, playerTwo){
  sum = playerOne.ppg + playerTwo.ppg;
  return sum;
}

// second one the first was to easy ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 7 kyu~~~~~~

// Christmas baubles on the tree

// You've came to visit your grandma and she straight away found you a job - her Christmas tree needs decorating!
//
// She first shows you a tree with an identified number of branches, and then hands you a some baubles (or loads of them!).
//
// You know your grandma is a very particular person and she would like the baubles to be distributed in the orderly manner. You decide the best course of action would be to put the same number of baubles on each of the branches (if possible) or add one more bauble to some of the branches - starting from the beginning of the tree.
//
// In this kata you will return an array of baubles on each of the branches.
//
// For example:
//
// 10 baubles, 2 branches: [5,5] 5 baubles, 7 branches: [1,1,1,1,1,0,0] 12 baubles, 5 branches: [3,3,2,2,2]
//
// The numbers of branches and baubles will be always greater or equal to 0. If there are 0 branches return: "Grandma, we will have to buy a Christmas tree first!".

function baublesOnTree(baubles, branches){
  if(branches === 0){
    return "Grandma, we will have to buy a Christmas tree first!";
  }else{
    var designedTree = Array(branches).fill(0);
    while (baubles >0){
      for(var i = 0; i < designedTree.length; i++){
        designedTree[i] = designedTree[i] + 1;
        baubles--;
        if(baubles === 0){
          break;
        }
      }
    }
    return designedTree;
  }
}
