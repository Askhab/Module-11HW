"use strict";

window.onload = async function() {
    const api = "https://swapi.dev/api",
          searchButton = document.querySelector('#search_request_btn');

    let objectType = document.querySelector('option[selected]'),
        nameOutput = document.querySelector('#name'),
        heightOutput = document.querySelector('#height'),
        massOutput = document.querySelector('#mass'),
        birthYearOutput = document.querySelector('#birth_year'),
        filmsCountOutput = document.querySelector('#films_count');

    // let response = await fetch(api, {
    //     method: 'GET',
    // });
       
    // let result = await response.json();

    fetch(api)
      .then(response => response.json())
      .then(response => console.log(response));

};