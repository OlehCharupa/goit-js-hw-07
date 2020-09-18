const box = document.querySelector(".box");

box.style.height = "500px";
// box.style.background = "black";
box.style.paddingTop = "250px";

const button = document.createElement("button");
button.textContent = "click";
button.style.width = "300px";
button.style.display = "block";
button.style.margin = "0 auto";

console.log(button);
box.append(button);
console.log(box);
button.addEventListener("click", () => {
  box.classList.toggle("red");
});
