
// // работаем в современном режиме
"use strict";


// // let number = 5;
// // const leftBorderWidth = 1;

// // // обьект

// // const obt = {
// //     name: 'Den',
// //     age: 23
// // };

// // console.log(obt.name);

// const result = confirm('Ты тут?');

// // полезные ссылки
// // GitHowto

// первое домашнее задание

const numberOfFilm = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("Насколько оцениваете его?", ""),
      d = prompt("Один из последних просмотренных фильмов?", ""),
      c = prompt("Насколько оцениваете его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[d] = c;

console.log(personalMovieDB);











