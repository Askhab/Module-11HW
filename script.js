"use strict";

window.onload = function() {
    const api = "https://swapi.dev/api/";
    let objectType = document.querySelector('option[selected]'),
        nameOutput = document.querySelector('#name'),
        heightOutput = document.querySelector('#height'),
        massOutput = document.querySelector('#mass'),
        birthYearOutput = document.querySelector('#birth_year'),
        filmsCountOutput = document.querySelector('#films_count');

    console.log(objectType.value);
};