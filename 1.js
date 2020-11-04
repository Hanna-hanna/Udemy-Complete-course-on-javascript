"use strict";

//Практика 1

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ""),
          b = +prompt('На сколько оцените его?', "");
    if (a === '' || b === '' || a.length > 50 || a === 0 || b === 0) {
        console.log('sd');
        i--;
    } else {
        personalMovieDB.movies[a] = b;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

// personalMovieDB.movies[a] = b; // как записать ключ и значение в объект!!!лучше не через точку
// personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);