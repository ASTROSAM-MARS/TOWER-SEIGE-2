const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var ground1, ground2, ground3;
var sling1;
var bock1, block2, block3, block4, block5;
var block6, block7, block8, block9;
var block10, block11, block12;
var block13, block14;
var block15;

function setup(){
    createCanvas(700,650);
    engine = Engine.create();
    world = engine.world;

    polygon = new stone();
    ground1 = new ground(450,650,900,20, rgb(102, 0, 0));
    ground2 = new ground(400,550,240, 5, rgb(153, 0 ,51));
    sling1 = new sling(polygon.body, {x : 100,y : 400});
    block1 = new blocks(470,522,rgb(128, 255, 191));
    block2 = new blocks(435, 522, rgb(255, 77, 77));
    block3 = new blocks(400,522,rgb(128, 255, 191));
    block4 = new blocks(365,522, rgb(255, 77, 77));
    block5 = new blocks(330, 522, rgb(128, 255, 191));
    block6 = new blocks(455, 470,rgb(255, 119, 51));
    block7 = new blocks(420, 470, rgb(128, 255, 0));
    block8 = new blocks(385,470, rgb(255, 119, 51));
    block9 = new blocks(350, 470, rgb(128, 255, 0));
    block10 = new blocks(435, 420, rgb(128, 255, 191));
    block11 = new blocks(400,420, rgb(255, 77, 77));
    block12 = new blocks(365, 420, rgb(128, 255, 191));
    block13 = new blocks(415, 370, rgb(128, 255, 0));
    block14 = new blocks(380, 370, rgb(255, 119, 51));
    block15 = new blocks(395,320,rgb(255, 77, 77));
   


    Engine.run(engine);
}

function draw(){
    background(0);
    Engine.update(engine);
   
   
    sling1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    polygon.display();
    ground1.display();
    ground2.display();

    if(block1.body.speed>4||block2.body.speed>4||block3.body.speed>4||
        block4.body.speed>4||block5.body.speed>4||block6.body.speed>4||
        block7.body.speed>4||block8.body.speed>4||block9.body.speed>4||
        block10.body.speed>4||block11.body.speed>4||block12.body.speed>4|| 
        block13.body.speed>4||block14.body.speed>4||block15.body.speed>4){
            fill(255);
            textSize (15);
            text("PRESS UP ARROW TO RESTART", 270, 150);
            text ("PRESS SPACE TO CONTINUE", 270, 250);
        }
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if(keyCode == 32){
        sling1.attach(polygon.body);
    }
    if(keyCode == 38){
        setup();
    }
}
