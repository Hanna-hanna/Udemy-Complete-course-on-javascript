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


// alert('Hello');

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

//Практика 1

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ""),
      b = +prompt('На сколько оцените его?', ""),
      c = prompt('Один из последних просмотренных фильмов?', ""),
      d = +prompt('На сколько оцените его?', "");


personalMovieDB.movies[a] = b; // как записать ключ и значение в объект!!!
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);