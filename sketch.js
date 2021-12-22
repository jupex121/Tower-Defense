
var bg, castleImg, castle2Img, castle3Img;
var castle, castle2, castle3;
var will, willWlk, willAtk, power, powerImg;
var wall, wall2;

function preload() {
    bg = loadImage("images/bg.png");

    castleImg = loadImage("images/castle1.png");
    castle2Img = loadImage("images/castle2.png");
    castle3Img = loadImage("images/castle3.png");

    willWlk = loadAnimation("images/willsonWlk.png", "images/willsonWlk2.png", "images/willsonWlk3.png", 
    "images/willsonWlk4.png", "images/willsonWlk5.png");
    
    willAtk = loadAnimation("images/willsonAtk.png", "images/willsonAtk2.png", "images/willsonAtk3.png", 
    "images/willsonAtk4.png", "images/willsonAtk5.png");
    
    powerImg = loadImage("images/power.png");

}

function setup() {
    castle = createSprite(200, 350);
    castle.addImage("castillo", castleImg);
    castle.scale = 0.5;

    will = createSprite(600, 525);
    will.addAnimation("willCaminando", willWlk);
    will.addAnimation("willAtacando", willAtk);
    


    wall = createSprite(displayWidth / 2, 355, displayWidth, 1);
    wall.visible = false;

    wall2 = createSprite(displayWidth / 2, displayHeight +8, displayWidth, 20);
    wall2.visible = false;
}

function keyPressed() {
    if(keyCode === 32) {
        power = createSprite(420, 405);
        power.addImage("poder", powerImg);
        power.scale = 0.3;
        power.visible = true;

        power.velocityX = +10;
        power.position.x = will.position.x +50;
        power.position.y = will.position.y -50;
        power.setCollider("rectangle", 0, 0, 50, 50);

        power.lifetime = 75;

        will.changeAnimation("willAtacando", willAtk);
    }
    else {
        will.changeAnimation("willCaminando", willWlk);
    }

}

function draw() {
    createCanvas(displayWidth, displayHeight);

    background(bg);

    if(keyDown("UP_ARROW")) {
        will.y = will.y -10;
    }

    if(keyDown("DOWN_ARROW")) {
        will.y = will.y +10;
    }

    will.collide(wall);
    will.collide(wall2);

    drawSprites();
}

