//1.string reverse
function reverseString(str) {
  return str.split("").reverse().join("");
  
}

console.log(reverseString("hello"));

//2.fractorize

function factorialize(num) {
 
  for(var i=1; num>=1; num--){
   i= num*i;
  }
  
  return i;
}

console.log(factorialize(5));

//3.palindrome

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("eye");

//4.longestWord
function findLongestWord(sentence) {
  var sen = sentence.split(" ");
 
  var longestword = 0;
  for(var i = 0; i < sen.length; i++) {
    if(sen[i].length > longestword){
      longestword = sen[i].length;
      
    }

  }
  return longestword; 
  
}


console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//5.to uppercase

function titleCase(str) {
 var newStr = str.toLowerCase().split(' ');
 var capital = [];
  for(var i=0; i<newStr.length; i++) {
    
    capital.push(newStr[i].replace(newStr[0] ,newStr[0].toUpperCase()));
  }
  
return capital.join(' ');  
}

titleCase("I'm a little tea pot");

//6.largest number

function largestOfFour(arr) {
 var largest=[];
   for(var i=0;i<arr.length;i++){
    var gr=0;
    for(var j=0;j<=arr[i].length;j++){
      if(arr[i][j]>gr){
        gr=arr[i][j];

      }
    }
    largest.push(gr);
   }
 return largest;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//7.Confirm the Ending
function confirmEnding(str, target) {
    if (str.substr(str.length -target.length,str.length) !== target){
      return false;
    } else{
      return true;
    }
  
  return str;
}
confirmEnding("Bastian", "n");

//8.repeate string

function repeatStringNumTimes(str,num) {
  // repeat after me
  var empty = "";
  if(num>0) {
    return str.repeat(num);
  } else {
    return empty;
  }
  
}

repeatStringNumTimes("abc", 3);

9.truncate string

function truncateString(str, num) {
  var newStr = str.split("");
  var newArray = [];
  var ending = "..."
  for(var i=0; i<=num; i++){
    newArray.push(newStr[i]);
  } 
  return newArray.join(" ")+ending;

  }
  
  

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));

//10. chunky monkey
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
	arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}
chunkArrayInGroups(["a","b","c","d"],2);

//11.Slasher Flick
function slasher(arr, howMany) {
  
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

//12.mutation

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) === -1)
      return false;
  }
  return true;
 }
 //13. falsy bouncer
 function bouncer(arr) {
  
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

//14. seek destroyer
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//15.
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}
getIndexToIns([40, 60], 50);

//16.
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/ ;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}
rot13("SERR PBQR PNZC");

//intermediate algorithmic scripting
//1.Sum All Numbers in a Range

function sumAll(arr) {
  var sumTillLast = (arr[arr.length-1])*(arr[arr.length-1]+1) /2;
  var sumTillFirst = (arr[0])*(arr[0]+1) /2;
  if(arr[0] < arr[1]) {
   var sum = (sumTillLast-sumTillFirst)+arr[0]; 
  } else {
   var sum = sumTillFirst - sumTillLast + arr[1];
  }
  return sum;
}

sumAll([1, 4]);

//2.

function diffArray(arr1, arr2) {
  var newArr = [];
  for(var i = 0;i < arr1.length; i++) {
    var found = false;
    for(var j = 0; j < arr2.length; j++) {
      if(arr1[i] == arr2[j]) {
        found = true;
      }
      console.log(arr1[i] + "and " + arr2[j] + "and " + found + i + j);
    }
    if(!found) {
      newArr.push(arr1[i]);
    }
  }
  for(var l=0; l<arr2.length; l++) {
    var found1 = false;
    for(var m=0;m<arr1.length; m++){
      if(arr2[l] == arr1[m]){
        found1 = true;
      }
      console.log(arr2[l] + "and " + arr1[m] + "and " + found + l + m);
    }
    if(!found1) {
      newArr.push(arr2[l]);
    }
  }
  return newArr;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//3.
var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};
convertToRoman(36);

//4.

function whatIsInAName(collection, source) {
  
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//5.

function myReplace(str, before, after) {
  
  var index = str.indexOf(before);
  
  if (str[index] === str[index].toUpperCase()) {
    
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  str = str.replace(before, after);

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//6.
function translatePigLatin(str) {
 var pigLatin = '';
 var regex = /[aeiou]/gi;
 if(str[0].match(regex)) {
   pigLatin = str + 'way';
 }
else{
 var vowelIndice = str.indexOf(str.match(regex)[0]);
 pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay'; 
}
return pigLatin;
}


translatePigLatin("consonant");

//7.DNA pairing
function pairElement(str) {
 
  var paired = [];

  
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}


pairElement("GCG");

//8.missing letter
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
   
    var code = str.charCodeAt(i);

    
    if (code !== str.charCodeAt(0) + i) {

    
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}


fearNotLetter("abce");

//9.boo who
function booWho(bool) {
  if(typeof bool === 'boolean') {
   return true ;
  } else {
    return false;
  }
 
}

booWho(false);

//10.sorted union
function uniteUnique(arr1, arr2, arr3) {
  var finalArray = [];

  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);











