/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        //Проверка на введенные данные пользователем
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    //Вопросы о просмотренных фильмах и рейтинге
    rememberMyFilms: function () {
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
    },
    //Узнает уровень киномана
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            console.log("Вы посмотрели довольно мало фильмов!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель!");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы КИНОМАН!");
        } else {
            console.log("Произошла ошибка!")
        };
    },
    //Проверяет свойство private, если false, то выводит в консоль
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        };
    },
    //ПРоверяет privat и меняет его.
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    //Записать мои любимые жанры
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let unsver = prompt(`Ваш любимый жанр под номером ${i+1}`, "")
            if (unsver == "" || unsver == null){
                i--;
            } else {
                personalMovieDB.genres[i] = unsver;
            }
        }
        personalMovieDB.genres.forEach(function (item, i){
            console.log(`Любимый жанр # ${i+1} - это ${item}`)
        });
    },    

};
personalMovieDB.writeYourGenres();
/*3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/