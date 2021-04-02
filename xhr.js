"use strict";

const api = "https://swapi.dev/api/",
      searchButton = document.querySelector("#search_request_btn");

let object = document.querySelector(".person_search"),
    objectType = document.querySelector(".search_type"),
    findedObjects = document.querySelector(".search_result"),
    nameOutput = document.querySelector("#name"),
    heightOutput = document.querySelector("#height"),
    massOutput = document.querySelector("#mass"),
    birthYearOutput = document.querySelector("#birth_year"),
    filmsCountOutput = document.querySelector("#films_count");

searchButton.addEventListener("click", requestData);

function requestData() {
  const xhr = new XMLHttpRequest();
  let url = api + objectType.value;

  if(objectType.value === 'people') {
    url += '/82/';
  } else if(objectType.value === 'starships') {
    url += '/36/';
  } else if(objectType.value === 'planets') {
    url += '/60/';
  } else if(objectType.value === 'films') {
    url += '/6/';
  } else if(objectType.value === 'vehicles') {
    url += '/39/';
  }

  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    let object = xhr.response.results,
        listItem = document.createElement('li');
    console.log(object);
    console.log(object.length);

    for(let i of object) {
      if(object.length) {
        listItem.textContent = i.name;
        findedObjects.append(listItem);
      }
    }
  };
}