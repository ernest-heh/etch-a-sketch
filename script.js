const grid = document.querySelector(".grid");

function drawGrid(rows, cols) {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "grid-item";
  }
}

drawGrid(32, 32);

const squares = document.querySelectorAll(".grid-item");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style["background-color"] = "grey";
  });
});
