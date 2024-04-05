// console.log("hello World");

// alert("supp");
////===variable///(only character,num,$,@)//////

// var,let,const
// var name; //creating a variable
// name = "loyus"; // assing value
// console.log(name);
// // alert(name);
// let add = "sydney";
// console.log(add, name);
// name = "ram";
// console.log(name);
// const age = 20;
// console.log(age);
// let firstName = "loyus"; //camel case
// let FirstName = "loyus"; //pascal case
// let FIRSTNAME = "loyus"; //
// console.log(firstName);
/////////////////////////////////
/////OPERATORS (mathmathical operators, compare operators, logical operators)
//Arithamatic//
// let a = 8;
// const b = 1;
// const c = a;
////ADD
// const result = a + b + c;
///sub
// const result = a - b;
//multi
// const result = a * b;
// div
// const result = a / b;
//exponentiation
// const result = a ** b;
//Modulus
// const result = a % b;
//increment
// a++;
//decrement
// a--;
// console.log(a);
/////math object/////
// const answer = Math.PI;
//Math.round()
// const answer = Math.round(4.7);
// power
// const answer = Math.pow(2, 3);
//square
// const answer = Math.sqrt(25);
//ceil
// const answer = Math.ceil(2.3);
//floor
// const answer = Math.floor(2.3);
////min
// const answer = Math.min(2, 3, 1, 4, 5, 6, 7, 8, 2);
// //max
// const answer = Math.max(2, 3, 1, 4, 5, 6, 7, 8, 2);
//random

// const answer = Math.random() * 50;
// const val = Math.floor(answer);

// console.log(val);
////////////////////////////////////////////////////////////////////////
////comsparisons////
// //== (dats is same or not)
// const v1 = 10;
// const v2 = "10";
// // const result = v1 == v2;
// //===(compare data types aswell as data value)
// // const v1 = 10;
// // const v2 = "10";
// const result = v1 === v2;
// // >=
// // const result = v1 >= v2;
// // <=
// // const result = v1 <= v2;

// console.log(result);
////////////////////////////////////////////////////////////////////////
//Data TYPE
////primitives
///string "LOyus maharjan" (0 = octal value)
// const value = "loyus maharjan"; //`` //''
//Boolen data type
// const value = true;
///NULL/ defind in the system meomry
// let user = "loyus";
// console.log(user); ///loyus
// const user2 = user;
// console.log(user2); //loyus
// user = "ursa";
// console.log(user); //ursa
// console.log(user2); //loyus

////////Reference data type
// const user = {
//   fName: "loyus",
//   lName: "Maharjan",
// };
// console.log(user);
// const user1 = user;
// console.log(user1);
// user.fName = "sam";
// console.log(user);
// console.log(user1);

///nNUmber/////
// // safe number range is -2^53-1 to 2^51+1
// const num = "54ad";
// // const value = num;
// const value = parseInt(num);
// isNaN(value);
// console.log(typeof value, num, isNaN(value));

// const str = " loyus maharjan";
////////////STRING////
// Escape string
// const str = "loyus" + ",maharjan";
// const user = str.toLowerCase;();
// console.log(val);
// const val = str[6];/// excess character
// const val = str.indexOf("u");//// character number finder
// const val = str.lastIndexOf("u");//// last character
// const val = str.replace("loyus", "ursa"); replace character
// const val = str.replaceAll("loyus", "ursa"); replace character
// const val = str.slice(3);/// slice value
// const value = str.substring(3, 5);
// const val = str.slice(3, 5); slice value
// const value = str.includes("w"); gives ture or false if something exist in the string or not
// const value = str.search("");
// const value = str.trim(); removes Space button from the stirng
// const value = str.split(" "); split the array//can put space or I
// const value = str.split(" ").join();//// join the array
// const value = str.concat(" new text in str", " more data"); add value
// console.log(value);
/////////////////////////////////////////////////////////
///logical operator

// Conditional statement
///IF/////////
// truth value : true,number postive or negative, "asd",{}=object,[]=array,()=>{}function
//falsey value :false, zero , ""empty string, NaN,null , undefined

// const value = true
// const value = false
// const value = "hi there";
// if (value) {
//   ///statement 1
//   console.log("pass pass pass");
// }
//&& checks the code after checking the first code execution
///OR(||) =
// const age = 20;
// // const vip = true;
// const vip = false;

// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("welcome man");
// }
// const age = 20;
// // const vip = true;
// const vip = false;

// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("welcome man");
// }

// IF ELSE///// only execute (if) or (else) it will never excute both condition

// const age = 17;
// // // const vip = true;
// const vip = false;

// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("welcome man");
// } else {
//   console.log("go home man");
// }

////ELSE IF /////
// const pet = "cat";
// if (pet === "cat ") {
//   console.log("meoww");
// } else if (pet === "dog ") {
//   console.log("uff");
// } else if (pet === "cow") {
//   console.log("mooooo");
// } else {
//   console.log("asdasdasd");
// }
///////cleaner verson of ELSE if condition (SWITCH)////
// const pet = "cow";
// switch (pet) {
//   case "cat":
//     console.log("mewowwww");
//     break;
//   case "dog":
//     console.log("ufff");

//   case "cow":
//     console.log("mowwww");
//   default:
//     break;
//     console.log("asdasdasdasda");++
// }
////////////logical operator//////
// const age = 0;
// const vip = true;
// if (age) {
//   console.log("welcome");
// }

// age < 30 && console.log("welcome");
// const value = age || "MN";
// console.log(value);

/////ternary///
// const age = 40;
// age < 60 ? console.log("welcom") : console.log("o home");

//////////ARRAy/////////////////
// const value = ["loyus", 1232, "maharjan", null, undefined, () => {}];
// console.log(value);

// const friuts = ["manago", "apple", "banana", "orange"];
// const value = friuts.length;
// const value = friuts[1];
// friuts.push("watermelon");//   will give data on the last
// friuts.unshift("watermelon"); will give data on the frist
// friuts.splice(2, 0, "watermelon")add item in array can be used for multii items
////deleting the array
// const value = friuts.shift();
// const value = friuts.splice(2, 2);
// const value = friuts.slice(2, 4);
// const value = friuts.pop();
// delete friuts[0];////never use this
// const value = friuts.toString().split(",");

// const value = friuts.indexOf("apple");//case sensitive
// const value = friuts.includes("banana");//case sensitive
// const value = friuts.join(" ").split(",");
// console.log(friuts.sort());
// console.log(friuts.sort((a, b) => a - b)); ////for the
// numeric value in array\
// friuts.sort();
// friuts.reverse();
// console.log(friuts);

////////////loops////////////////
// //////for loop//
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

//while loop/
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

///do/while loop///
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

///breaking out of loop////
// brea/k
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
//   if (i === 20) {
//     break;
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   // if (i === 10) {
//   //   continue;
//   // }
//   if (i % 2 === 1) {
//     continue;
//   }
//   //divided by 2
//   console.log(i);
// }

//////// JS specific Array Loops//////
// //for of//
// // console.log(friuts);
// // // const upperFriuts = [];
// // // for (let item of friuts) {
// // //   upperFriuts.push("sku-" + item.toUpperCase());
// // // }
// // console.log(upperFriuts);{}
// for (let i = 0; i < friuts.length; i++) {
//   console.log(i, friuts[i]);
// }
/////foreEach///
// friuts.forEach((friuts, index) => {
//   console.log(index, friuts);
// });
///MAP///
// const newData = friuts.map((item, i) => {
//   // console.log(i, item);
//   // return "LO-" + item.toUpperCase();//uppercase
//   // if (item.includes("n")) {
//   //   return item; //// if you want to remove some specific item or character
//   // }
// });
// console.log(newData);
// const newData = friuts.filter((item, i) => {
//   console.log(item, i);
//   return item.includes("");
//   // if (item.includes("")) {
//   //   return true;
//   // }
// });
// const newData = friuts.filter((item, i) => item.includes(""));
// console.log(newData);

//               const friuts = ["apple", "banana", "mango", "orange"];
// //////reduce///

// const money = [123, 12, 312, 312, 31, 231, 23, 123, 123];

// const total = money.reduce((subTtl, item) => {
//   return subTtl + item;
// });
// console.log(total);

//////every loop/////

// const money = [234, 23, 42, 3423, 423, 423, 4, 234];
// const fruits = ["apple", "banana", "orange "];
// const result = fruits.every((item) => {
//   console.log(item);
//   return item.includes("");
// });
// const result = money.every((num) => {
//   return (num = 100);
// });
// console.log(result);

/////
// const money = [234, 23, 42, 3423, 423, 423, 4, 234];
// const result = money.includes(23);
// const result = money.find((item) => item === 23);
// const result = money.indexOf();
// console.log(result);

// const loveArg = new Array(100).fill("");
// console.log(loveArg);

///challanges////

///crate a random number///
// const arg = [];
// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100 + 1);
//   arg[i] = num;
// }

// /////decending order///
// arg.sort((a, b) => {
//   b - a;
// });
// console.log(arg);
// //////total array
// const total = arg.reduce((lo, ur) => lo + ur, 0);
// // console.log(total);

// ///divide into odd and even array/////
// const evennArg =  arg.filter(())

// const today =  new Date();
// const today = Date();
// const today = Date.now();
const today = new Date();
// const date = today.getDay();
// const date = today.getFullYear();
// const date = today.get();
// const data = today.toLocaleDateStrin?g();
// console.log(today);
// const data = today.toISOString();
console.log(today);
