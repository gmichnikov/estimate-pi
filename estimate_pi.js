const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let hitCounter = 0;
let totalCounter = 0;

const reset = () => {
  hitCounter = 0;
  totalCounter = 0;
  $('#darts-thrown').text(0);
  $('#darts-hit').text(0);
  $('#percent-hit').text(0);
  $('#estimated-pi').text("?");
  $('#estimation-error').text("?");
  $('#run-trials').html("Throw Darts");


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
  ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "black";
  ctx.fill();

  for (var i = 0; i < numSegments; i++) {
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 0.9 * canvas.width/2, (i - 0.5) * Math.PI*2 / numSegments, (i + 0.5) * Math.PI * 2 / numSegments);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.closePath();
    ctx.fillStyle = ringColors[i % 2];
    ctx.fill();
  }



  for (var i = 0; i < numSegments; i++) {
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 0.85 * canvas.width/2, (i - 0.5) * Math.PI*2 / numSegments, (i + 0.5) * Math.PI * 2 / numSegments);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.closePath();
    ctx.fillStyle = mainColors[i % 2];
    ctx.fill();
  }

  for (var i = 0; i < numSegments; i++) {
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 0.6 * canvas.width/2, (i - 0.5) * Math.PI*2 / numSegments, (i + 0.5) * Math.PI * 2 / numSegments);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.closePath();
    ctx.fillStyle = ringColors[i % 2];
    ctx.fill();
  }

  for (var i = 0; i < numSegments; i++) {
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 0.55 * canvas.width/2, (i - 0.5) * Math.PI*2 / numSegments, (i + 0.5) * Math.PI * 2 / numSegments);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.closePath();
    ctx.fillStyle = mainColors[i % 2];
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 0.1 * canvas.width/2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "green";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 0.05 * canvas.width/2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.fill();
}

const runTrials = () => {
  let numTrials = parseInt($('#num-trials').val());
  if (isNaN(numTrials)) numTrials = 1000;
  totalCounter += numTrials;

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

  $('#darts-thrown').text(totalCounter);
  $('#darts-hit').text(hitCounter);
  $('#percent-hit').text(Math.round(hitCounter/totalCounter*100*100)/100);
  $('#estimated-pi').text(Math.round(hitCounter/totalCounter*4*1000000)/1000000);
  $('#estimation-error').text(Math.round((hitCounter/totalCounter*4 - Math.PI) / Math.PI * 100 * 1000)/1000);
  $('#run-trials').html("Throw More Darts");


  // console.log("hits", hitCounter, "total", totalCounter, "%", hitCounter/totalCounter*100, "pi", hitCounter/totalCounter*4, "error", (hitCounter/totalCounter*4 - Math.PI) / Math.PI * 100);
}

$('#reset').on("click", reset);
$('#run-trials').on("click", runTrials);

reset();
// runTrials();
