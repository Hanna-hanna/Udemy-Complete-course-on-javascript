"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(leftBorderWidth);


// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Anna';

// {
//     var result = 50;
// }

// console.log(result);

// alert(5);
// [].push('a');



// let number = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// const person = '5';

// const bool = false;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// console.log(obj["name"]);


// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 8, {}, []];

// console.log(arr[1]);

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt('Вам есть 18?', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', "");
// answers[1] = prompt('Как ваша фамилия?', "");
// answers[2] = prompt('Сколько вам лет?', "");

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);

// console.log('arr' + ' - object');
// console.log(4 + '5');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// // постфиксная форма сначала увеличивает или уменьшает старое значение, а только потом начинает работу

// console.log(5%2);

// console.log(2 + 2 * 2 !== '6');

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose);

// if (4) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Слишком много');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Верно');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// let num = 50;

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));

// ret();

// function ret() {
//     let num = 50;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) => { return a + b; };

// const str = 'TeSt';
// const arr = [1, 2, 4];

// //console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('g'));

// const logg = "Hello world";

// //console.log(logg.slice(6, 11)); // в аргументе end указываем то, что не включается
// //console.log(logg.slice(-5, -1)); 

// //console.log(logg.substring(6, 11)); 
// //console.log(logg.substr(6, 11)); // вместо аргумента end мы указываем длину, которую надо вырезать

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// //console.log(parseInt(test));
// console.log(parseFloat(test)); // возвращает значение с точкой


// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// // если функции идут одна за другой, это не значит, что они выполняются одна за другой

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log("Я прошел этот урок");
// }

// learnJS('Javascript', done); // круглые скобки у функции не ставятся


// Объекты

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors; // деструктуризация объектов
console.log(border);

// console.log(options.name);

// delete options.name; // удалить свойство из объекта

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

//console.log(Object.keys(options).length);