// window.addEventListener("load", () => {
//   console.log("Hello")
//   const canvas = document.querySelector("#canvas");
//   const ctx = canvas.getContext("2d");
//   // canvas.height = 600;
//   // canvas.width = 600;

//   // ctx.strokeStyle ="red";
//   // ctx.lineWidth =  5
//   // ctx.strokeRect(0.3 * canvas.height,30,200,300);
//   // ctx.strokeStyle ="blue";
//   // ctx.strokeRect(0.4 * canvas.height,50,200,400);

//   // ctx.beginPath();
//   // ctx.moveTo(100,100);
//   // ctx.lineTo(300,100);
//   // ctx.lineTo(300,150);
//   // ctx.closePath();
//   // ctx.stroke();

//   //variables
//   let painting = false;

//   function startPosition(e){
//     ctx.beginPath()
//     painting=true;
//     draw(e);
//   }
//   function finishedPosition(){
//     painting=false;
//     ctx.beginPath()
//   }

//   function draw(e) {
//     if(!painting) return;
//     ctx.lineWidth = 10;
//     ctx.lineCap = "round";

//     const rect = canvas.getBoundingClientRect();
//     const canvasX = e.clientX - rect.left;
//     const canvasY = e.clientY - rect.top;

//     ctx.lineTo(canvasX, canvasY); // Use the corrected canvas coordinates
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(canvasX, canvasY); // Correct the starting point for the next segment
//   }

//   // function draw(e) {
//   //   if (!painting) return;
  
//   //   const rect = canvas.getBoundingClientRect();
//   //   const canvasX = e.clientX - rect.left;
//   //   const canvasY = e.clientY - rect.top;
  
//   //   ctx.lineWidth = 10;
//   //   ctx.lineCap = "round";
  
//   //   ctx.lineTo(canvasX, canvasY); // Use the corrected canvas coordinates
//   //   ctx.stroke();
//   //   ctx.beginPath();
//   //   ctx.moveTo(canvasX, canvasY); // Correct the starting point for the next segment
//   // }



//   //Eventlisteners
//   canvas.addEventListener("mousedown",startPosition);
//   canvas.addEventListener("mouseup",finishedPosition);
//   canvas.addEventListener("mousemove",draw);

// })


// // window.addEventListener('resize',function(){
// //   //Resizing
// //   const computedStyle = window.getComputedStyle(canvas)
// //   console.log(computedStyle);
// //   canvas.height = window.innerHeight - 200;
// //   canvas.width = window.innerWidth - 200;
// // })
















//   // Clear button functionality
//   const clearButton = document.getElementById("clear-btn");
//   clearButton.addEventListener("click", () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
//   });

//   // Color picker functionality
//   const colorPicker = document.getElementById("color-picker");

//   colorPicker.addEventListener("input", (e) => {
//     ctx.strokeStyle = e.target.value; // Set brush color
//   });

//   // Brush size functionality
//   const brushSizeInput = document.getElementById("brush-size");
//   brushSizeInput.addEventListener("input", (e) => {
//     ctx.lineWidth = e.target.value; // Set brush size
//   });







window.addEventListener("load", () => {
  console.log("Hello");

  // Get canvas and context
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  // Set initial default color and brush size
  ctx.strokeStyle = "#000000";  // Black color by default
  ctx.lineWidth = 5;  // Default brush size
  ctx.lineCap = "round";  // Ensures rounded strokes

  // Track whether the user is drawing or using the eraser
  let painting = false;
  let eraserMode = false;  // Variable to track eraser mode

  // Start drawing when mouse is pressed
  function startPosition(e) {
    painting = true;
    draw(e);  // Draw immediately as you press down
  }

  // Stop drawing when mouse is released
  function finishedPosition() {
    painting = false;
    ctx.beginPath();  // Begin a new path
  }

  // Draw on the canvas
  function draw(e) {
    if (!painting) return;

    const rect = canvas.getBoundingClientRect();
    const canvasX = e.clientX - rect.left;
    const canvasY = e.clientY - rect.top;

    if (eraserMode) {
      ctx.strokeStyle = "#ffffff";  // Set the stroke color to white (eraser)
    } else {
      ctx.strokeStyle = document.getElementById("color-picker").value;  // Use selected color
    }

    ctx.lineTo(canvasX, canvasY);  // Draw a line to the current position
    ctx.stroke();  // Render the drawing
    ctx.beginPath();  // Start a new path
    ctx.moveTo(canvasX, canvasY);  // Move the "pen" to the current position
  }

  // Attach event listeners for drawing actions
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);

  // Clear canvas when the "Clear" button is clicked
  const clearButton = document.getElementById("clear-btn");
  clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the entire canvas
  });

  // Change brush color when the color picker is used
  const colorPicker = document.getElementById("color-picker");
  colorPicker.addEventListener("input", (e) => {
    ctx.strokeStyle = e.target.value;  // Update the stroke color
  });

  // Change brush size when the range slider is used
  const brushSizeInput = document.getElementById("brush-size");
  brushSizeInput.addEventListener("input", (e) => {
    ctx.lineWidth = e.target.value;  // Update the brush size
  });

  // Eraser functionality
  const eraserButton = document.getElementById("eraser-btn");
  eraserButton.addEventListener("click", () => {
    eraserMode = !eraserMode;  // Toggle between drawing and eraser mode
    if (eraserMode) {
      eraserButton.textContent = "Brush";  // Change button text to "Brush"
    } else {
      eraserButton.textContent = "Eraser";  // Change button text to "Eraser"
    }
  });
});
























