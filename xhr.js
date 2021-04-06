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
findedObjects.addEventListener("click", showObjectData);

// Разделить действия типа получения URL, отправку запроса и представление
// информации на отдельные функции - для повторного использования.

function requestData() {
  if (findedObjects.hasChildNodes("li")) {
        findedObjects.innerHTML = "";
      }
  
  const xhr = new XMLHttpRequest();
  let url = api + objectType.value + "/?search=" + object.value;
  console.info(`url - ${url}`);
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    let answer = xhr.response.results;
    console.log(answer);
    console.log(answer.length);

    for (let item of answer) {
      let listItem = document.createElement('li');
      listItem.textContent = item.name;
      findedObjects.append(listItem);
    }
  };
}

function showObjectData(event) {
  let item = event.target.closest('li');


}