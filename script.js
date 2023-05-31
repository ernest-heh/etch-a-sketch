const grid = document.querySelector(".grid");

function drawGrid(rows, cols) {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "grid-item";
  }
}

drawGrid(16, 16);
