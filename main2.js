window.addEventListener("load", () => {
  console.log("Hello");

  // Get canvas and context
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  // Set initial default color and brush size
  ctx.strokeStyle = "#000000"; 
  ctx.lineWidth = 5; 
  ctx.lineCap = "round"; 

  // Track whether the user is drawing or using the eraser
  let painting = false;
  let eraserMode = false; 

  // Start drawing when mouse is pressed
  function startPosition(e) {
    painting = true;
    draw(e);  
  }

  // Stop drawing when mouse is released
  function finishedPosition() {
    painting = false;
    ctx.beginPath();  
  }

  // Draw on the canvas
  function draw(e) {
    if (!painting) return;

    const rect = canvas.getBoundingClientRect();
    const canvasX = e.clientX - rect.left;
    const canvasY = e.clientY - rect.top;

    if (eraserMode) {
      ctx.strokeStyle = "#ffffff"; 
    } else {
      ctx.strokeStyle = document.getElementById("color-picker").value; 
    }

    ctx.lineTo(canvasX, canvasY); 
    ctx.stroke();  
    ctx.beginPath(); 
    ctx.moveTo(canvasX, canvasY);  
  }

  // Attach event listeners for drawing actions
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);

  // Clear canvas when the "Clear" button is clicked
  const clearButton = document.getElementById("clear-btn");
  clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
  });

  // Change brush color when the color picker is used
  const colorPicker = document.getElementById("color-picker");
  colorPicker.addEventListener("input", (e) => {
    ctx.strokeStyle = e.target.value;  
  });

  // Change brush size when the range slider is used
  const brushSizeInput = document.getElementById("brush-size");
  brushSizeInput.addEventListener("input", (e) => {
    ctx.lineWidth = e.target.value;  
  });

  // Eraser functionality
  const eraserButton = document.getElementById("eraser-btn");
  eraserButton.addEventListener("click", () => {
    eraserMode = !eraserMode;  
    if (eraserMode) {
      eraserButton.textContent = "Brush";  
    } else {
      eraserButton.textContent = "Eraser";  
    }
  });
});