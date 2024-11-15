window.addEventListener("load", () => {
  console.log("Hello")
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight - 10;
  canvas.width = window.innerWidth - 10;

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

    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY)
  }
  //Eventlisteners
  canvas.addEventListener("mousedown",startPosition);
  canvas.addEventListener("mouseup",finishedPosition);
  canvas.addEventListener("mousemove",draw);

})


window.addEventListener('resize',function(){
  //Resizing
  const computedStyle = window.getComputedStyle(canvas)
  console.log(computedStyle);
  canvas.height = window.innerHeight - 10;
  canvas.width = window.innerWidth - 10;
})




