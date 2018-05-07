//1.write a function to display entered number is prime or not
/*function testPrime(number){
  if(number === 1){
    return false;
  } else if(number ===2){
    return true;
    
  } else{
    for(var i =2;i< number; i++){
      if(number % i===0){
        return false;
        
      }
    }
    return true;
   
  }
    
}  
console.log(testPrime(37)); 
//2. even odd function
function evenOdd(enterNumber){
  if(enterNumber%2 ===0){
    console.log(`${enterNumber} is even number`)
  } else{
    console.log(`${enterNumber} is odd`)
  }
}
evenOdd(53); 

//3. finding lcm 
function lcm_two_numbers(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(lcm_two_numbers(56,15));
console.log(lcm_two_numbers(10,15));

//4.If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
function naturalNumber(number) {
  let i;
  let sum = 0;
  for( i = 1; i < number; i++) {
    if(i%3 === 0 || i%5 === 0) {
     sum += i;  
    }
  }
  return sum;
}
console.log(naturalNumber(1000));  

let day = ['monday','tuesday','wednesday','thrusday','friday','saturday','sunday'];
function weekName (day) {
 return day[Math.floor(Math.random()*day.length)]; 
}
console.log(weekName(day)); 


let day = ['monday','tuesday','wednesday','thrusday','friday','saturday','sunday'];
function weekName (day) {
    return day[Math.floor(Math.random() * day.length)];
}

console.log(weekName(day)); 

let days = ['monday','tuesday','wednesday','thrusday','friday','saturday','sunday'];
function weekName (days) {
  var ctr = days.length,temp,index
  while(ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = days[ctr];
    days[ctr] = days[index];
    days[index] = temp;
  }
  return days;
}


console.log(weekName(days)); 

// 9th April 2018 monday
//to return no.of days in a month
function getNoOfDaysInMonth (month,year) {
  let thirtyMonth = ["april","june","september","november"];
  let thirtyOneMonth = ["january","march","may","july","august","october","december"];
  let febMonth = ["february"];
  if (thirtyMonth.includes(month)) {
    return 30;
  } else if (thirtyOneMonth.includes(month)) {
    return 31;
  } else if (febMonth.includes(month) && year%4 ===0) {
    return 29;
  } else if (febMonth.includes(month) && year%4 != 0) {
    return 28;
  } else {
    return false;
  }

}


function getNoOfDaysOfWeek(month,year) {
  var noDaysOfWeek = [4, 4, 4, 4, 4, 4, 4];
  var  day1= new Date(`${month} 1, ${year}`);
  var  firstDayOfMonth = day1.getDay();
  for (var i = 29; i <= getNoOfDaysInMonth(month,year); i++) {
    noDaysOfWeek[firstDayOfMonth] = noDaysOfWeek[firstDayOfMonth] + 1;
    if (firstDayOfMonth == 6) {
      firstDayOfMonth = 0;
    } else {
      firstDayOfMonth ++;
    }
  }
  return noDaysOfWeek;
}


tempNoOfDayInMonth = getNoOfDaysOfWeek("july",2018); 


//10th April 2018 tuesday
var name = 2896;
var nameValue = name.tostring();
console.log(nameValue) ; 
function reverse(number) {
 var reversed = 0;

 while (number != 0) {
  reversed *= 10;
  reversed += number % 10;
  number -= number % 10;
  number /= 10;
 }

 return reversed;
}

reverse(23); 

//A function which can capitalize each word of sentence.

function capitalize(sentence) {
  var sen = sentence.split(' ');
  var capitalizeSentence = [];

  for(var i = 0; i < sen.length; i++) {

    capitalizeSentence.push(sen[i].charAt(0).toUpperCase()+sen[i].slice(1));

  }
 
  return capitalizeSentence.join(' ');

}
console.log(capitalize("the quick brown fox")); 

//A function which can find longest word in sentence.

function longestWord(sentence) {
  var sen = sentence.split(" ");
  var word
  var longestword = 0;
  for(var i = 0; i < sen.length; i++) {
    if(sen[i].length > longestword){
      longestword = sen[i].length;
      word = sen[i];
      
    }

  }
  return word; 
  
}
console.log(longestWord("Web Development Bootcamp"));

//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function temperatureConversion (cTemp,fTemp) {

  var Fahrenheit = (cTemp /5)*9 + 32;
  var Celsius = ((fTemp-32)/9)*5;
  console.log(Fahrenheit);
  console.log(Celsius);


}

temperatureConversion(60,45); 

function characterChange(str) {
  return str.replace(/[a-zA-Z]/g, function(x) {
    return string.fromCharCode(x.charCodeAt(0)+1);
  });

}
console.log(characterChange('abc')); 
function LetterChanges(str) {
    var strOut="";
    for (var i = 0; i < str.length; i++) {
        if (1 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            strOut += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return strOut;
}

console.log(LetterChanges("ABCDE")); 

//wednesday problem 11/4/2018

//1.Write a function getPersonDetails which returns an object asking a bunch of questions from user
function getPersonDetails(name,age,hobbies){
const Details = {
    name: name,
    age: age,
    hobbies: hobbies,
};
 return Details;
}
console.log(getPersonDetails('sonal',21,['running','unicycle','walking'])); fun
2.
function summation(input) {
  if(input[0]!==input[1]){
    input[0]+=1;
  }
  
  return input[0];                           
  }

console.log(summation([1,5])); 

3.
function falseValue(arr) {
   return arr.filter(function (n) { 
       return n !== undefined && n !== null && n !== false && n !== 0 && n !== " " && !isNaN(n); 
   });
 }

   console.log(falseValue([7, "ate", " ", false, 9])); 

   function delet(arr) {


    var falsy;
    var trueArr = [];

    for (i = 0; i < arr.length; i++) {

        falsy =  Boolean(arr[i]);

        if (falsy === true) {

        trueArr.push(arr[i]);

        }

    }

    return trueArr;
}

console.log(delet([7, "ate", "", false, 9])); 

function arraySplit(array) {

  var array1=new Array();
  var array2=new Array();


for (var i = 0; i < array .length; i++) {
  array1.push(array [i].split("  ")[0]);
  array2.push(array [i].split("  ")[0])
}
return array2;
}
console.log(arraySplit(["a", "b", "c", "d"])) 

function difference(array1,array2) {
  var doNotMatch = [];
  for(var i=0;i<array1.length;i++){
    if(array2.indexOf(array1[i])==-1) {doNotMatch.push(array1[i]);}
  }
  return doNotMatch;

}

console.log(difference([1,2,3,4,5],[1,2,3,5])); 

function getPersonDetails(){
 let name = prompt("What's your name?");
 let age = prompt("What's your age?");
 let hobbies = [];
 for(let i=0; i<3; i++){
    let hobby = prompt(`What's your hobby`);
    hobbies.push(hobby);
 }
 return {
        name : name,
        age : age,
        hobbies : hobbies
    }

} 
console.log(getPersonDetails());
function reverseString(str) {
  return str.split("").reverse().join("");
  
}

console.log(reverseString("hello")); 
function factorialize(num) {
  var factorial = 1;
  var i =0;
  while(i<= num ){
    i=i+1
   factorial*= num-(num-i);
   break;
  }
  
  return factorial;
}

console.log(factorialize(5)); 
function longestString(str) {
  var newStr = str.split(" ");
  var longestword =0;
  for(var i=0; i<newStr.length;i++) {
    for(var j=0; j<newStr.length;j++) {
      if(newStr[j].length>newStr[i].length){
        longestword = longestword + newStr[j].length;
      }

    }

  }
  return longestword;
}
console.log(longestString("The quick brown fox jumped over the lazy dog")); 
function titleCase(str) {
  var newArray = str.toLowerCase().split(' ');
  var result = [];
  for(var i=0; i < newArray.length ; i++){
    var val = newArray[i];
    result.push(val.replace(val[0], val[0].toUpperCase())) ;    
  }
  return result.join(" ");
}
console.log(titleCase("I'm a little tea pot")); 

function ucFirstAllWords( str )
{
    var pieces = str.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
}
console.log(ucFirstAllWords("I'm a little tea pot")); 

function repeateString(str,num) {
  var empty = " ";
  if(num>0){
    return str.repeat(num);
  } else{
    return empty;
  }
}
console.log(repeateString("abc",-2)); 

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

var assoArray = {
  "name" : {
    "First" :"Raushan",
    "Last" : "Kumar"
  },
  "Age" : 22,
  "Job" :"SDE"
};


console.log(assoArray);
console.log(assoArray.Age);
console.log(assoArray.Job);
console.log(assoArray.name.First);
assoArray.fr= "shrishty";
console.log(assoArray.Gf);  
function myReplace(str, before, after) {
  var newStr = str.split(" ");
  var newAfter = after.toLowerCase();
  for(var i=0;i<newStr.length;i++) {
    if(newStr[i] == before) {
      var a = newAfter.chartAt(0).toUpperCase()+ newAfter.splice(1);
      newStr.splice(i,1, a);
       return newStr.join();
    }
    
  }
 
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); 

function pigLatin(str) {
  var newStr = [];

  for(var i =0;i<str.length;i++){
     newStr.push(str.split("")[i].toLowerCase());
  }

if(newStr[0] === "a" || newStr[0] === "e" || newStr[0] === "i" || newStr[0] ==="o" || newStr[0] === "u") {
  newStr.shift();
  newStr.push("way");
  } else {
    
    newStr.splice(newStr.length,0,newStr[0],"ay");
    newStr.shift();
  }
 
return newStr.join("");

}
console.log(pigLatin("phrishty"));

review

 
var obj = { };
function addPro () {
  obj.property1 = "name";
  obj.property2 = "skills";
  obj.property3 = "experience";
  obj.property4 = "birth";
  return obj;
}
console.log(addPro()); 

function checkType(str) {
  var obj = {
    datatype: typeof str,
    length: str.length,
  }
  return obj;
}
console.log(checkType("hello")); */
 

 var datatype = {
  string: "abc",
  number: 10,
  boolean: false,
  null: null,
  undefined: undefined,
  array: ['a','b','c'],
 }
 console.log(typeof (datatype.null)); 

 let unnamed = function() {return true;}
 let nameValue = unnamed();
 console.log(nameValue); 

 var arr = ['hello',10,true,undefined,null];
function random(arr){
  
var newarr = arr[Math.floor(Math.random()*arr.length)];
  return typeof newarr;
}
console.log(random(arr)); 
function name() {
  function one() {return "one"}
  function two() {return "two"}
  function three() {return "three"}
  function four() {return "four"}
  return {one: one(),
          two: two(),
          three: three(),
          four: four(),}
} 
console.log(name()); 
 



