

var wall1 = createSprite(190,75,250,3);
var wall2 = createSprite(190,300,250,3);
var wall3 = createSprite(65,120,3,95);
var wall4 = createSprite(65,255,3,95);
var wall5 = createSprite(35,210,60,3);
var wall6 = createSprite(35,167,60,3);
var wall7 = createSprite(7,188,3,45);
var wall8 = createSprite(310,125,3,95);
var wall9 = createSprite(310,255,3,95);
var wall10 = createSprite(335,210,50,3);
var wall11 = createSprite(335,170,50,3);
var wall12 = createSprite(360,188,3,45);
var wall13 = createSprite(310,185,3,50);
var wall14 = createSprite(65,185,3,50)
var player = createSprite(30,188,30,30);
player.shapeColor = "blue";

var treasure = createSprite(330,189)
treasure.setAnimation("goldcoin")



var ball1 = createSprite(85,140,20,20);
ball1.shapeColor = "red";
ball1.velocityY = 7;
ball1.setAnimation("enemy")

var ball2 = createSprite(155,235,20,20);
ball2.shapeColor = "red";
ball2.velocityY = -7;
ball2.setAnimation("enemy")

var ball3 = createSprite(225,140,20,20);
ball3.shapeColor = "red";
ball3.velocityY = 7;
ball3.setAnimation("enemy")

var ball4 = createSprite(295,250,20,20);
ball4.shapeColor = "red";
ball4.velocityY = -7;
ball4.setAnimation("enemy")

var deaths = 0;


function draw() {
background("white");


textFont("blue");
textSize(20);
text("deaths = "+deaths,290,25);

ball1.bounceOff(wall1);
ball1.bounceOff(wall2);

ball2.bounceOff(wall1);
ball2.bounceOff(wall2);

ball3.bounceOff(wall1);
ball3.bounceOff(wall2);

ball4.bounceOff(wall1);
ball4.bounceOff(wall2);

if(keyDown("d")){
player.x = player.x+5;
}
if(keyDown("a")){
player.x = player.x-5;
}

if(keyDown("d")&&keyDown("shift")){
player.x = player.x+5;
}
if(keyDown("a")&&keyDown("shift")){
player.x = player.x-5;
}
if(player.isTouching(ball1)||player.isTouching(ball2)||
player.isTouching(ball3)||player.isTouching(ball4)){
player.x = 30;
player.y = 188;
deaths = deaths+1;
}

player.bounce(wall7);
player.bounce(wall14);


if(keyWentDown("space")){
wall14.remove();
wall13.remove();
}


if (player.isTouching(treasure)) {
ball1.velocityY = 0
ball2.velocityY = 0
ball3.velocityY = 0
ball4.velocityY = 0
}

text("Press 'Space'' to Open Cage", 100, 355);








drawSprites();
}








