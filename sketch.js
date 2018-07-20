function setup() {
    createCanvas(500, 500);

    fill("blue");
    rect(50, 300, 50, 50);
    fill("red");
    rect(150, 300, 50, 50);
    fill("purple"); 
    rect(250, 300, 50, 50);
    fill("white");
    rect(350, 300, 50, 50);
}
function mouseDragged() {
    ellipse(mouseX, mouseY, random(23, 54), random(38, 102));   
    return false;
}
function mouseClicked() {
    if (mouseX < 100 && mouseX > 50 && mouseY > 300 && mouseY < 350) {
        fill("blue");
    }else if (mouseX < 200 && mouseX > 150 && mouseY > 300 && mouseY < 350){
        fill("red");
    }else if (mouseX < 300 && mouseX > 250 && mouseY > 300 && mouseY < 350){

        fill("purple");
     } else if (mouseX < 400 && mouseX > 350 && mouseY > 300 && mouseY < 350){
        background("white");
        setup() ;
    }
}
