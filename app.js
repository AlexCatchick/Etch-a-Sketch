document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = "#D5ED9F";
  setUpGrid();
  createGrid();
  let defaultColor;
  let inputColorChange = document.querySelector(".color-palette");
  inputColorChange.addEventListener("input", (e) => {
    defaultColor = e.target.value;
  });
  function setUpGrid() {
    console.log("start-setUpGrid");
    let inputSize;
    document.querySelector(".resize").addEventListener("click", () => {
      inputSize = document.querySelector(".no-of-squares").value;
      if (inputSize <= 100) {
        const container = document.querySelector(".container");
        while (container.lastChild !== null) {
          container.removeChild(container.lastChild);
        }
        if (!inputSize) {
          inputSize = 16;
        }
        createGrid(inputSize);
      }
    });
    console.log("end-setUpGrid");
  }
  function createGrid(sqSize = 16) {
    console.log("start-createGrid");
    const container = document.querySelector(".container");
    const cellWidth = container.clientWidth / sqSize;
    for (let i = 0; i < sqSize * sqSize; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `${cellWidth}px`;
      cell.style.height = `${cellWidth}px`;
      cell.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = defaultColor;
        cell.classList.add("cell-mouse-over");
      });
      container.appendChild(cell);
    }
    console.log("end-createGrid");
  }
});
