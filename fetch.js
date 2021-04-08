"use strict";

const api = "https://swapi.dev/api/",
      searchButton = document.querySelector("#search_request_btn");

let object = document.querySelector(".person_search"),
    answer = [],
    objectType = document.querySelector(".search_type"),
    findedObjects = document.querySelector(".search_result"),
    nameOutput = document.querySelector("#name"),
    heightOutput = document.querySelector("#height"),
    massOutput = document.querySelector("#mass"),
    birthYearOutput = document.querySelector("#birth_year"),
    filmsCountOutput = document.querySelector("#films_count");

searchButton.addEventListener("click", requestData);
findedObjects.addEventListener("click", showObjectData);

async function requestData() {
  if (findedObjects.hasChildNodes("li")) {
        findedObjects.innerHTML = "";
      }
  
  let url = api + objectType.value + "/?search=" + object.value,
      response = await fetch(url),
      data = await response.json();

  answer = await data.results;

  for (let item of answer) {
    let listItem = document.createElement('li');

    switch (objectType.value) {
      case "films":
        listItem.textContent = item.title;
        findedObjects.append(listItem);
        break;
      case "starships":
      case "vehicles":
      case "people":
      case "planets":
        listItem.textContent = item.name;
        findedObjects.append(listItem);
        break;
    }    
  }
      
}

function showObjectData(event) {
  let item = event.target.closest('li'),
      itemText = item.textContent;
  
  console.info(answer);

  for(let index of answer) {
    if(index.name === itemText) {
      nameOutput.textContent = index.name;
      heightOutput.textContent = index.height;
      massOutput.textContent = index.mass;
      birthYearOutput.textContent = index.birth_year;
      filmsCountOutput.textContent = index.films.length;
    }
  }
}