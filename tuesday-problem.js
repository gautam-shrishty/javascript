//1.JavaScript Function which can reverse a number.

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

console.log(reverse(32243));


//2.A function which can capitalize each word of sentence.

function capitalize(sentence) {
  var sen = sentence.split(' ');
  var capitalizeSentence = [];

  for(var i = 0; i < sen.length; i++) {

    capitalizeSentence.push(sen[i].charAt(0).toUpperCase()+sen[i].slice(1));

  }
 
  return capitalizeSentence.join(' ');

}
console.log(capitalize("the quick brown fox"));

//3.A function which can find longest word in sentence.
function longestWord(sentence) {
  var sen = sentence.split(" ");
  var longestword = 0;
  var word
  for(var i = 0; i < sen.length; i++) {
    if(sen[i].length > longestword){
      longestword = sen[i].length;
      word = sen[i];
    }

  }
  return word;
}
console.log(longestWord("Web Development Bootcamp"));

//4.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function temperatureConversion (cTemp,fTemp) {

  var Fahrenheit = (cTemp /5)*9 + 32;
  var Celsius = ((fTemp-32)/9)*5;
  console.log(Fahrenheit);
  console.log(Celsius);


}

temperatureConversion(60,45);


//5.Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.


function LetterChanges(str) {
    var strOut='';
    for (var i = 0; i < str.length; i++) {
        if (1 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            strOut += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return strOut;
}

console.log(LetterChanges("ABCDE"));
