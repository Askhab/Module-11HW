"use strict";


const api = "https://swapi.dev/api/",
        searchButton = document.querySelector('#search_request_btn');

let object = document.querySelector('.person_search'),
    objectType = document.querySelector('.search_type'),
    findedObjects = document.querySelector('.search_result'),
    nameOutput = document.querySelector('#name'),
    heightOutput = document.querySelector('#height'),
    massOutput = document.querySelector('#mass'),
    birthYearOutput = document.querySelector('#birth_year'),
    filmsCountOutput = document.querySelector('#films_count');


searchButton.addEventListener('click', requestData);


// function getData() {
//     requestData();

// }

function requestData() {
    const xhr = new XMLHttpRequest(),
          url = api + objectType.value;

    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
        let data = xhr.response;
        console.log(data);
        return data;
    };
    xhr.send();

}

