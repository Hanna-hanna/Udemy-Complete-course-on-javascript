"use strict";

//Практика 1



const personalMovieDB = {
    count: 0,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ""),
                b = +prompt('На сколько оцените его?', "");
            if (a === '' || b === '' || a.length > 50 || a === null || b === null) {
                i--;
            } else {
                personalMovieDB.movies[a] = b;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            // if (genre === '' || genre == null) {
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt('Введите ваши любимые жанры через запятую', '').toLowerCase;

            if (genres === '' || genres == null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ').sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


// personalMovieDB.start();
// personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(false);
// personalMovieDB.toogleVisibleMyDB(false);








// personalMovieDB.movies[a] = b; // как записать ключ и значение в объект!!!лучше не через точку
// personalMovieDB.movies[c] = d; 