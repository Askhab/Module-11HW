"use strict";

window.onload = function() {
    const api = "https://swapi.dev/api",
          searchButton = document.querySelector('#search_request_btn');

    let object = document.querySelector('.person_search'),
        objectType = document.querySelector('option[selected]'),
        findedObjects = document.querySelector('.search_result'),
        nameOutput = document.querySelector('#name'),
        heightOutput = document.querySelector('#height'),
        massOutput = document.querySelector('#mass'),
        birthYearOutput = document.querySelector('#birth_year'),
        filmsCountOutput = document.querySelector('#films_count'),
        xhrRequest = new XMLHttpRequest();

    
    xhrRequest.open('GET', api, true);
    xhrRequest.responseType = 'json';
    xhrRequest.onload = () => {
        console.log(xhrRequest.response);
    };
    xhrRequest.send();


};