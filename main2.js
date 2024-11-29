window.addEventListener("load", () => {
  console.log("Hello")
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  // canvas.height = 600;
  // canvas.width = 600;

  // ctx.strokeStyle ="red";
  // ctx.lineWidth =  5
  // ctx.strokeRect(0.3 * canvas.height,30,200,300);
  // ctx.strokeStyle ="blue";
  // ctx.strokeRect(0.4 * canvas.height,50,200,400);

  // ctx.beginPath();
  // ctx.moveTo(100,100);
  // ctx.lineTo(300,100);
  // ctx.lineTo(300,150);
  // ctx.closePath();
  // ctx.stroke();

  //variables
  let painting = false;

  function startPosition(e){
    ctx.beginPath()
    painting=true;
    draw(e);
  }
  function finishedPosition(){
    painting=false;
    ctx.beginPath()
  }

  function draw(e) {
    if(!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    const rect = canvas.getBoundingClientRect();
    const canvasX = e.clientX - rect.left;
    const canvasY = e.clientY - rect.top;

    ctx.lineTo(canvasX, canvasY); // Use the corrected canvas coordinates
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvasX, canvasY); // Correct the starting point for the next segment
  }

  // function draw(e) {
  //   if (!painting) return;
  
  //   const rect = canvas.getBoundingClientRect();
  //   const canvasX = e.clientX - rect.left;
  //   const canvasY = e.clientY - rect.top;
  
  //   ctx.lineWidth = 10;
  //   ctx.lineCap = "round";
  
  //   ctx.lineTo(canvasX, canvasY); // Use the corrected canvas coordinates
  //   ctx.stroke();
  //   ctx.beginPath();
  //   ctx.moveTo(canvasX, canvasY); // Correct the starting point for the next segment
  // }














  //Eventlisteners
  canvas.addEventListener("mousedown",startPosition);
  canvas.addEventListener("mouseup",finishedPosition);
  canvas.addEventListener("mousemove",draw);

})


// window.addEventListener('resize',function(){
//   //Resizing
//   const computedStyle = window.getComputedStyle(canvas)
//   console.log(computedStyle);
//   canvas.height = window.innerHeight - 200;
//   canvas.width = window.innerWidth - 200;
// })




