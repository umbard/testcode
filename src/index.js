// // // // /**
// // // //  * const, lrt等の変数宣言
// // // //  */
// // // // // var val1 = "var変数";
// // // // // console.log(val1);

// // // // // // var変数は上書き可能
// // // // // val1 = "varを上書き";
// // // // // console.log(val1);

// // // // // // varは変数は再宣言可能
// // // // // var val1 = "varを再宣言";
// // // // // console.log(val1);

// // // // // let val2 = "let変数";
// // // // // console.log(val2);

// // // // // // letは上書き可能
// // // // // val2 = "letを上書き";
// // // // // console.log(val2);

// // // // // //letは再宣言不可能
// // // // // let val2 = "hogehoge"

// // // // // const val3 = "const変数";
// // // // // console.log(val3);

// // // // //const変数は上書き不可
// // // // //val3 = "hogehoge";

// // // //constで定義したオブジェクトはプロパティ変更が可能

// // // // const val4 = {
// // // //   name: "hogehoge",
// // // //   age: 28
// // // // };

// // // // val4.name = "hell";
// // // // val4.addres = "japan";
// // // // console.log(val4);

// // //constで定義した配列はプロパティ変更が可能

// // // const val5 = ["dog", "cat"];
// // // val5[0] = "bird";
// // // val5.push("dog");
// // // console.log(val5);

// // /**
// //  * テンプレート文字列
// //  */

// // const name = "hogehoge";
// // const age = 28;

// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // //console.log(message1);

// // const message2 = `私の名前は${name}です。年齢は${age}です。`;
// // console.log(message2);

// /**
//  * アロー関数
//  */

// // function func1(str) {
// //   return str;
// // }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1"));

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "hogehoge",
//   age: 26
// };

// // const message1 = `名前は${myProfile.name}、年齢は${myProfile.age}`;
// // console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}、年齢は${age}`;
// console.log(message2);

// const myProfile = ["hogehoge", 26];
// const message1 = `名前は${myProfile.[0]}、年齢は${myProfile[1]}`;
// console.log(message1);

// const [name, age] = myProfile;
//const message2 = `名前は${name}、年齢は${age}`;
//console.log(message2);

/**
 * デフォルト値
 */

//const sayHello = (name = "ゲスト") => console.log(`Hello,${name}`);
//sayHello("hogehoge");
//sayHello();

/**
 * スプレッド構文 ...
 */
//配列の展開

//const arr1 = [1, 2];
//console.log(arr1);
//console.log(...arr1);

//const sumFunc = (num1, num2) => console.log(num1 + num2);
//sumFunc(arr1[0], arr1[1]);
//sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["tanaka", "yamada", "jakee"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "jakee") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//　ある条件 ? 条件がtrue: 条件がfalse

// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力";

// console.log(formattedNum);
//console.log(num.toLocaleString());

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えてます" : "許容範囲";
// };
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味　&& ||
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }
