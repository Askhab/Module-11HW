"use strict";

window.onload = function () {
  // Сохраняем адрес API
  const api = "https://swapi.dev/api/";

  // Формируем полный адрес запроса:
  let url = api + "people/?search="; // добавляем к запросу тип необходимых данных подробно о формате https://swapi.dev/documentation
  url += "obi"; // значение переменной запроса search

  // Таким образом формируется строка вида:
  // https://swapi.dev/api/people/?search=obi

  // Создаем объект XMLHttpRequest, при помощи которого будем отправлять запрос
  const request = new XMLHttpRequest();

  // Назначаем обработчик события load для запроса
  request.addEventListener("load", function () {
    // отображаем в консоли текст ответа сервера
    console.log(request.response);

    // парсим его из JSON-строки в JavaScript-объект
    const response = JSON.parse(request.response);

    // Проверяем статус-код, который прислал сервер
    // 200 — это ОК, остальные — ошибка или не подходят
    if (request.status !== 200) {
      alert("Произошла ошибка при получении ответа от сервера:\n\n" + response.message);
      return;
    }

    // Проверяем, если поле имя в ответе на запрос
    if (response.count == 0) {
      alert("К сожалению, данные не получены по запросу: " + url);
      return;
    }

    // Если все в порядке, то отображаем количество результатов поиска
    alert("Найдено персонажей:" + response.count);

  });

  // Обработчик готов, можно отправлять запрос
  // Открываем соединение и отправляем
  request.open("get", url);
  request.send();
};

// document.querySelector('select[name="select_type"]');


// // Запрашиваем user.json
// fetch('/article/promise-chaining/user.json')
//   // Загружаем данные в формате json
//   .then(response => response.json())
//   // Делаем запрос к GitHub
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   // Загружаем ответ в формате json
//   .then(response => response.json())
//   // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => img.remove(), 3000); // (*)
//   });

// // Другая реализация
// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(githubUser => new Promise(function(resolve, reject) { // (*)
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser); // (**)
//     }, 3000);
//   }))
//   // срабатывает через 3 секунды
//   .then(githubUser => alert(`Закончили показ ${githubUser.name}`));

// // Третья реализация
// function loadJson(url) {
//   return fetch(url)
//     .then(response => response.json());
// }

// function loadGithubUser(name) {
//   return fetch(`https://api.github.com/users/${name}`)
//     .then(response => response.json());
// }

// function showAvatar(githubUser) {
//   return new Promise(function(resolve, reject) {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   });
// }

// // Используем их:
// loadJson('/article/promise-chaining/user.json')
//   .then(user => loadGithubUser(user.name))
//   .then(showAvatar)
//   .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));
//   // ...