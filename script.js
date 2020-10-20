"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    //Проверка на введенные данные пользователем
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



//Вопросы о просмотренных фильмах и рейтинге
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренних фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    };
}

rememberMyFilms();

//Узнает уровень киномана
function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        console.log("Посмотреть новольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель!");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы КИНОМАН!");
    } else {
        console.log("Произошла ошибка!")
    };
}

detectPersonalLevel();



//Проверяет свойство private, если false, то выводит в консоль
function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    };
}

showMyDB(personalMovieDB.privat);

//Записать мои любимые жанры
function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "")
    }
}
writeYourGenres();


console.log(personalMovieDB);