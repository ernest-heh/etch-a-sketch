const grid = document.querySelector(".grid");
const input = document.querySelector("input");
const button = document.querySelector("button");

function clearGrid() {
  grid.innerHTML = "";
}

function drawGrid(size) {
  if (size < 2 || size > 100) {
    alert("Pick a number between 2 and 100");
    return;
  }

  grid.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
  grid.style["grid-template-rows"] = `repeat(${size}, 1fr)`;

  for (c = 0; c < size * size; c++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "grid-item";
  }
}

drawGrid(24);

const squares = document.querySelectorAll(".grid-item");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style["background-color"] = "grey";
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  clearGrid();
  drawGrid(input.value);
});
