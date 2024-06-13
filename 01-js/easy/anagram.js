/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  
  if(str1.length!=str2.length){
    return false;
  }
  
  let map = [];
  
  for(let i=0;i<256;i++){
    map[i] = 0;
  }
 
  for(let i=0;i<str1.length;i++){
    map[str1.charCodeAt(i)]++;
    map[str2.charCodeAt(i)]--;
  }

  for(let i=0;i<map.length;i++){
    if(map[i]!=0){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
