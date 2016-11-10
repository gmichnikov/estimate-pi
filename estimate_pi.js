var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

const ringColors = ["green", "red"]
const mainColors = ["white", "black"]
const numSegments = 20;

ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2 - 1, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();

for (var i = 0; i < numSegments; i++) {
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 0.9 * canvas.width/2 - 1, (i - 0.5) * Math.PI*2 / numSegments, (i + 0.5) * Math.PI * 2 / numSegments);
  ctx.lineTo(canvas.width/2, canvas.height/2);
  ctx.closePath();
  ctx.fillStyle = ringColors[i % 2];
  ctx.fill();
}



for (var i = 0; i < numSegments; i++) {
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 0.85 * canvas.width/2 - 1, (i - 0.5) * Math.PI*2 / numSegments, (i + 0.5) * Math.PI * 2 / numSegments);
  ctx.lineTo(canvas.width/2, canvas.height/2);
  ctx.closePath();
  ctx.fillStyle = mainColors[i % 2];
  ctx.fill();
}


for (var i = 0; i < numSegments; i++) {
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 0.6 * canvas.width/2 - 1, (i - 0.5) * Math.PI*2 / numSegments, (i + 0.5) * Math.PI * 2 / numSegments);
  ctx.lineTo(canvas.width/2, canvas.height/2);
  ctx.closePath();
  ctx.fillStyle = ringColors[i % 2];
  ctx.fill();
}



for (var i = 0; i < numSegments; i++) {
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 0.55 * canvas.width/2 - 1, (i - 0.5) * Math.PI*2 / numSegments, (i + 0.5) * Math.PI * 2 / numSegments);
  ctx.lineTo(canvas.width/2, canvas.height/2);
  ctx.closePath();
  ctx.fillStyle = mainColors[i % 2];
  ctx.fill();
}

ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 0.1 * canvas.width/2 - 1, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 0.05 * canvas.width/2 - 1, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

let hitCounter = 0;
let numTrials = 10000;

for (var i = 0; i < numTrials; i++) {
  let randX = Math.random() * canvas.width;
  let randY = Math.random() * canvas.height;
  ctx.beginPath();
  ctx.arc(randX, randY, 1, 0, Math.PI * 2);
  ctx.closePath();
  if (Math.pow(randX - canvas.width/2, 2) + Math.pow(randY - canvas.height/2, 2) < Math.pow(canvas.height/2, 2)) {
    ctx.fillStyle = "blue";
    hitCounter++;
  } else {
    ctx.fillStyle = "orange";
  }
  ctx.fill();
}

console.log("hits", hitCounter, "total", numTrials, "%", hitCounter/numTrials*100, "pi", hitCounter/numTrials*4, "error", (Math.PI - hitCounter/numTrials*4) / Math.PI * 100);
