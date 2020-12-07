/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      promoBG = document.querySelector('.promo__bg'),
      filmsItems = document.querySelectorAll('.promo__interactive-item'),
      filmsList = document.querySelector('.promo__interactive-list'),
      newArray = movieDB.movies.sort(),
      newFilm = document.querySelector('.add .adding__input'),
      checkFilm = document.querySelector('.add button'),
      checkLove = document.querySelector('.add input[type=checkbox]'),
      deleteItems = document.querySelectorAll('.promo__interactive-item .delete');
      console.log(deleteItems);

promoAdv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';

promoBG.style.backgroundImage = 'url(img/bg.jpg)';

filmsList.innerHTML = '';

checkFilm.addEventListener('click', function (e) {
    e.preventDefault();
    
    if (newFilm.value.length > 21) {
        newFilm.value = newFilm.value.slice(0,20) + '...';
    }
    if (checkLove.checked) {
       console.log('Добавляем любимый фильм');
    }
    movieDB.movies.push(newFilm.value);
    newFilm.value = '';
    console.log(newArray);
});

newArray.forEach((elem, i) => {
    filmsList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${elem}
                            <div class="delete"></div>
                          </li>`;
    
});

for (let deleteItem of deleteItems) {
    
    deleteItem.addEventListener('click', function(deleteItem) {
        console.log(1);
        deleteItem.remove(deleteItem.parentElement);
    });
}




