'use strict';

let numberOfFilms;

function start(){
	numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');
	}
}

start();

const personalMovieDB = {
	count : numberOfFilms,
	movies :{},
	actors :'',
	genres :[],
	privat : false
};





function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?','');
		const b = prompt ('На сколько оцените его?','');	
		if( a != null && b !=null && a != '' && b !='' && a.length < 50){
			personalMovieDB.movies[a] = b;
			console.log('Done');		
		}	else{
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();


function detectPersonalLvl(){
	if (personalMovieDB.count < 10){
		alert('Просмотрено довольно мало фильмов');
	}	else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		alert('Вы классический зритель');
	}	else if(personalMovieDB.count <= 30){
		alert('Вы киноман');
	}	else {
		alert('Error');
	}
}

detectPersonalLvl();

function showMyDB(hidden){
	if (!hidden){
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
	for (let i = 1; i <=3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i-1] = genre;
	}
}

writeYourGenres();

console.log(personalMovieDB);