const grid = document.querySelector(".grid");
const input = document.querySelector("input");
const button = document.querySelector("button");
const clearBtn = document.querySelector("#erase");

function clearGrid() {
  grid.innerHTML = "";
}

function drawGrid(size) {
  if (size < 2 || size > 100) {
    alert("Pick a number between 2 and 100");
    clearGrid();
    drawGrid(16);
    return;
  }

  grid.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
  grid.style["grid-template-rows"] = `repeat(${size}, 1fr)`;

  for (c = 0; c < size * size; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", () => cell.classList.add("active"));
    grid.appendChild(cell).className = "grid-item";
  }
}

drawGrid(16);

const cells = document.querySelectorAll(".grid-item");

function eraseGrid() {
  cells.forEach((cell) => {
    cell.classList.remove("active");
  });
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  clearGrid();
  drawGrid(input.value);
  input.value = "";
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  eraseGrid();
});
