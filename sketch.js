const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;

var bg = "sunrise.png";

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    for (var i = 0; i < 25; i++) {
        if (time >= 0 && time <= 12) {
            if (time === i) {
                text("Time : " + time + "AM", 50, 60);
            }
        }
        else {
            if (time === i) {
                text("Time : " + time - 12 + "PM", 50, 60);
            }
        }
    }

}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var JSON = await response.json();
    var datetime = JSON.datetime;
    var time = datetime.slice(11,13);
     
    if(time >= 5 && time < 18) {
        bg = "sunrise.png";
    }
    else {
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
