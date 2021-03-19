var backgroundImg , background;
var cat1 , cat1Img ,cat2Img ,cat3Img ,cat4Img ;
var mouse , mouse1Img ,mouse2Img ,mouse3Img ,mouse4Img;


function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    cat1Img = loadAnimation("images/cat1.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    cat2Img = loadAnimation("images/cat3.png","images/cat4.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img = loadAnimation("images/mouse3.png");
    cat3Img = loadAnimation("images/cat3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1 = createSprite(600,600);
    cat1.addAnimation("cat",cat1Img);
    cat1.scale = 0.2;

    mouse = createSprite(100,600);
    mouse.addAnimation("mouse", mouse1Img);
    mouse.scale = 0.2;

}

function draw() {

    background(backgroundImg);
    cat1.x = World.mouseX;
    cat1.y = World.mouseY;
    //Write condition here to evalute if tom and jerry collide
    if(cat1.x - mouse.x < (cat1.width + mouse.width)/2
    && mouse.x - cat1.x < (cat1.width + mouse.width)/2){
        //mouse.addAnimation("happy",mouse3Img);
        //cat1.addAnimation("happy", cat3Img);
        mouse.addAnimation("happy",mouse3Img);
        //mouse.changeAnimation("happy");
        cat1.addAnimation("happy", cat3Img);
        //cat1.changeAnimation("happy");
    }

    drawSprites();
}


function keyPressed(){
    if( keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouseteasing",mouse2Img);
        mouse.changeAnimation("mouseteasing");
        mouse.frameDelay = 25;
    }
    if( keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseteasing",mouse2Img);
        mouse.changeAnimation("mouseteasing");
        mouse.frameDelay = 25;
    }


  //For moving and changing animation write code here


}
