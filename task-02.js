/* В HTML есть пустой список ul#ingredients.
  <ul id="ingredients"></ul>


  Напиши скрипт, который для каждого элемента массива 
  ingredients создаст отдельный li, после чего вставит 
  все li за одну операцию в список ul.ingredients.
   Для создания DOM-узлов используй document.createElement().
*/
const body = document.querySelector("body");

const list_ingredients = document.createElement("ul");
list_ingredients.setAttribute("id", "ingredients");
body.prepend(list_ingredients);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

ingredients.forEach((element) => {
  const item_ingredients = document.createElement("li");
  item_ingredients.append(element);
  list_ingredients.append(item_ingredients);
});
