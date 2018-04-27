//1.
function getPersonDetails(name,age,hobbies){
const obj = {
    name: name,
    age: age,
    hobbies: hobbies,
};
 return obj;
}
console.log(getPersonDetails('sonal',21,['running','unicycle','walking'])); 


//2.
function summation(input) {
  if(input[0]!==input[1]){
    input[0]+=1;
  }
  
  return input[0];                           
  }

console.log(summation([1,5])); 

//3.
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

//4.
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

//5.
function difference(array1,array2) {
  var doNotMatch = [];
  for(var i=0;i<array1.length;i++){
    if(array2.indexOf(array1[i])==-1) {doNotMatch.push(array1[i]);}
  }
  return doNotMatch;

}

console.log(difference([1,2,3,4,5],[1,2,3,5]));