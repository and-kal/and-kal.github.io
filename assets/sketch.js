function setup() {
    var canvasDiv = document.getElementById('p5canvas');
    var width = canvasDiv.clientWidth;
    var height = canvasDiv.scrollHeight;
    var canvas = createCanvas(width,(height - 100));
    canvas.style('position', 'absolute');
    canvas.style('top', '0');
    canvas.style('right', '0');
    canvas.style('z-index', '-1');
    canvas.parent("p5canvas");
}

function draw() {
    // background(14, 05, 250);
    var index = 0;
    while (index <= 20) {
        circle(30+(index*10), 30+(index*10), 20);
        index++;
    }
}
  
  function windowResized() {
    resizeCanvas(width,height);
  }