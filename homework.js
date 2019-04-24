
/*Create a function that will get the sum of the numbers
 between 1 and n and return the answer */

function numberSum(num) {
    var sum = 0;
      for(var i = 1; i <=num; i++){
        sum += i;
      }
      return sum;
  }

  /* Create a program to get the sum of all the even numbers in a group  */

  function numberSum(num) {
    var sum = 0;
      for(var i = 1; i <=num; i++){
          if(i%2===0){sum += i;}
      }
      return sum;
  }

  /* Create a function to get the average of a group of numbers   */ 
  
  

  /*  Create a function to reverse the letters in a word  */ 

  function reverseString(str) {
    
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 

    var joinArray = reverseArray.join(""); 
    
    return joinArray;
}
reverseString("hello");

  /* Create a function that takes an array of words and combines 
  them with a dash  */ 


  /*  Function that will count up to a number and back down
 and return a string of the climb */ 



  /* Write a function that will tell you all of the words 
  in an array that contain the letter `a`  */ 


  /* Write a function that will tell you all of the words in an array that contain 
  a specified letter */

   /*Function that returns the longest word in sentence  */

   function findLongestWord(str) {
  
    var strSplit = str.split(' ');

    var longestWord = 0;
  
    
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ 
      longestWord = strSplit[i].length; 
       }
    }
    
 
    return "the longest word is "+longestWord; 
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");

   /* Function that returns the largest even number*/

   function max_even_list(list){
    if (len(list) == 1){
        if( list[0] % 2 == 0)
        { return list[0]}}
    else
        if (list[0] % 2 == 0){
            return max(list[0], max_even_list(list[1:]) )}
        else{
            return max_even_list(list[1:])}
    }