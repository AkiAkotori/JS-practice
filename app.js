"use strict";

const personalMovieDB = {
    count: 0,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt('Сколько фильмов ты уже посмотрел?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов ты уже посмотрел?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this['movies'][a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классический зритель');
        } else if (this.count >= 30) {
            console.log('Да вы киноман!');
        } else {
            console.log('Error');
        }
    },
    toggleVisibleMyDB: function() {
        this.privat = (this.privat) ? false : true;
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            let genres = prompt('Введите любимые жанры через запятую').trim();

            if (!genres) {
                console.log('Некорректно введены данные');
                i--;
            } else this.genres = genres.split(', ');

        this.genres.forEach((item, idx) => console.log(`Любимый жанр ${idx + 1} - это ${item}`));
    }
}
}


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();



