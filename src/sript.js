
import {bestMovies}  from "./bestMovies";
import itemsTemplate from'./templates/movies-template.hbs';


const movieList = document.querySelector('.movie-list');
const markup = itemsTemplate(bestMovies);
movieList.insertAdjacentHTML('afterbegin', markup)



