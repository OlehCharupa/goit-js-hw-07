/* Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в 
ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента 
(тега h2) и количество элементов в категории 
(всех вложенных в него элементов li).

Например для первой категории получится:
   - Категория: Животные
   - Количество элементов: 4  */

let list_1 = document.querySelectorAll("#categories li.item");
console.log(`В списке ${list_1.length} категории.`);

list_1.forEach((el, index) => {
  let h2 = document.querySelectorAll("h2");
  let li = document.querySelectorAll("li.item ul");
  console.log(`Категория: ${h2[index].textContent}`);
  console.log(`Количество элементов: ${li[index].children.length}`);
});
