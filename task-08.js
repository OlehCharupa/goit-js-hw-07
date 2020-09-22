/* 
Напиши скрипт создания и очистки коллекции элементов. Пользователь 
вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, 
коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр 
amount - число. Функция создает столько div, сколько указано в amount
 и добавляет их в div#boxes.

Каждый созданный div:

      - Имеет случайный rgb цвет фона
      - Размеры самого первого div - 30px на 30px
      - Каждый следующий div после первого, должен быть шире и выше 
        предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>*/

const boxRefs = {
  div: document.querySelector("#boxes"),
  input: document.querySelector("[type='number']"),
  renderButton: document.querySelector("[data-action='render']"),
  destroyButton: document.querySelector("[data-action='destroy']"),
};

boxRefs.input.addEventListener("change", () => {
  const count = boxRefs.input.value;
  boxRefs.renderButton.addEventListener("click", () => {
    let size = 30;
    for (let i = 1; i <= count; i++) {
      const colorBox = document.createElement("div");
      const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`;
      size += 10;
      colorBox.style.width = size + "px";
      colorBox.style.height = size + "px";
      colorBox.style.background = randomColor;
      boxRefs.div.append(colorBox);
    }
  });
});
