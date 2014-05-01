//
// log(me) site 2014
//

function setup() {
    var canvas = createCanvas(1400,1400);    
    canvas.position(0,30);
    canvas.class("triangles");
    frameRate(3);
}

function draw() {
    background(35);
    pushMatrix();
    translate(-40,-40);
    highlightSquares();
    popMatrix();
    pushMatrix();
    translate(-40,-40);
    verticalTriangles();
    popMatrix();
}

window.onscroll = function (event) {
  println(window.pageYOffset);
  pageY = window.pageXOffset;
}

function verticalTriangles() {
    for (var j = 0; j < 50; j++){
        translate(40,0);
        pushMatrix();
        for (var i = 0; i < 40; i++){
            translate(0,40);
            fill(0);
            triangle(0,0,40,40,0,40);
        }
        popMatrix();
    }
}

function highlightSquares() {
    for (var j = 0; j < 50; j++){
        translate(40,0);
        pushMatrix();
        for (var i = 0; i < 40; i++){
            translate(0,40);
            fill(random(255),random(70,255),182);
            rect(0,0,40,40);
        }
        popMatrix();
    }
}