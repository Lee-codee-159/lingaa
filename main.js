function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    cam = createCapture(VIDEO);
    cam.hide();
}
function draw(){
    image(cam, 120, 95, 400, 300);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 425, 460, 20);
    
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(580, 40, 20, 400);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(580, 40, 20, 400);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(40, 40, 20, 400);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 433, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 433, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    
}

