// function doubleIt (num){
//     return num*2;
// }
// const doubleIt = function myFun ( num){
//     return num *2 ;
// }

const doubleIt =  num => num *2 ;

const result = doubleIt(30)
console.log(result);

// arrow function  more then one parameter//
 const add = ( x ,y ) => x + y ;
 const result2 = add (30,20);
 console.log(result2);

 // no parameter // 
 const give5 = () => 5;
 const result3 = give5();
 console.log(result3);

 // Math //
 const doMath = ( x,y ) =>{
     const sum = x + y ;
     const diff = x - y;
     const total = sum * diff ;
     return total ;
 }
 const result4 = doMath(15,12);
 console.log(result4);