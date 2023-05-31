const grid = document.querySelector(".grid");
const button = document.querySelector("button");
const clearBtn = document.querySelector("#erase");
const slider = document.querySelector("#sliderSize");
const output = document.querySelector("#outputSize");
output.innerHTML = slider.value;

function clearGrid() {
  grid.innerHTML = "";
}

let isDrawing = false;

function drawGrid(size) {
  clearGrid();
  if (size < 2 || size > 100) {
    alert("Pick a number between 2 and 100");
    drawGrid(slider.value);
    return;
  }

  grid.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
  grid.style["grid-template-rows"] = `repeat(${size}, 1fr)`;

  for (c = 0; c < size * size; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mousedown", () => {
      isDrawing = true;
      if (isDrawing) {
        cell.classList.add("active");
      }
    });
    cell.addEventListener("mouseover", () => {
      if (isDrawing) {
        cell.classList.add("active");
      }
    });
    cell.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    grid.appendChild(cell).className = "grid-item";
  }
}

drawGrid(slider.value);

const cells = document.querySelectorAll(".grid-item");

function eraseGrid() {
  clearGrid();
  cells.forEach((cell) => {
    cell.classList.remove("active");
  });
  drawGrid(slider.value);
}

slider.oninput = function () {
  output.innerHTML = this.value;
  clearGrid();
  drawGrid(slider.value);
};

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  eraseGrid();
});
