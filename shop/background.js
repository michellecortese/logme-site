//
// log(me) site 2014
//

var canvas, canvasHTML1, canvasHTML2, canvasHTML3; // canvases
var iconIMG, icon2IMG; // images
var text, shopHead; // html texts

function setup() {
    canvas = createCanvas(1280,1400);
    canvas.position(0,30);
    canvas.class("triangles");
    canvasHTML2 = createCanvas(1120,960);
    canvasHTML2.class("content2");
    canvasHTML3 = createCanvas(1140,220);
    canvasHTML3.class("content3");
    context(canvasHTML1);
    images();
    text = createHTML("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
    text.id("descriptions");
    text.position(0,0);
    shopHead = createHTML("SHOP NECKLACE ETC");
    shopHead.id("shopheadline");
    shopHead.position(0,0);
    frameRate(3);
}

function draw() {
    context(canvas);
    background(35);
    animateTriangles();
}

window.onscroll = function (event) {
  println(window.pageYOffset);
  pageY = window.pageXOffset;
}

function animateTriangles() {
    pushMatrix();
        translate(-40,-40);
        highlightSquares();
    popMatrix();
        pushMatrix();
        translate(-40,-40);
        verticalTriangles();
    popMatrix();
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
                fill(random(255),random(50,255),182,random(10,255));
                rect(0,0,40,40);
            }
        popMatrix();
    }
}

function images() {
    iconIMG = createHTMLImage("images/large_icon.png");
        iconIMG.class("icon");
        iconIMG.size(85,85);
}