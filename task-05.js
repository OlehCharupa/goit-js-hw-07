/*
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
*/

const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

span.textContent = "Незнакомец";
input.addEventListener("input", () => {
  span.textContent = input.value;
  if (input.value === "") {
    span.textContent = "Незнакомец";
  }
});
