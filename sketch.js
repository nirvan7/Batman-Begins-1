const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops=[];
var man,umbrella;
var thunder,thunder1Img,thunder2Img,thunder3Img,thunder4Img;
var rand, thunderCreatedFrame;
var Maxdrops = 100;
function preload(){
    
  thunder1Img = loadImage("images/thunderbolt/1.png")
  thunder2Img = loadImage("images/thunderbolt/2.png")
  thunder3Img = loadImage("images/thunderbolt/3.png")
  thunder4Img = loadImage("images/thunderbolt/4.png")
}

function setup(){
    var canvas = createCanvas(400,625);
    engine = Engine.create();
    world = engine.world;

    //Need to find out how to add Animation such that it looks like the man is walking
    umbrella= new Umbrella(10,10);
    for (var i=0;i<Maxdrops;i++) {
      drops.push(new Drops(random(0,400),random(0,400)));
    }

    Engine.run(engine);
}

function draw(){
background(0);

rand = Math.round(random(1,4));
if (frameCount%80 === 0){
  thunderCreatedFrame = frameCount;
  thunder = createSprite(random(10,370),random(10,30),10,10);
  switch(rand) {
    case 1:thunder.addImage(thunder1Img);
    break;
    case 2:thunder.addImage(thunder2Img);
    break;
    case 3:thunder.addImage(thunder3Img);
    break;
    case 4:thunder.addImage(thunder4Img);
    break;
    default:
    break;
   }
   thunder.scale= random(0.3,0.6);
  }
   
  if (thunderCreatedFrame + 10 === frameCount ){
    thunder.destroy();
  }
  umbrella.display();

  for (var i=0;i<Maxdrops;i++) {
    drops[i].display();
    drops[i].reset();
  }
drawSprites();
}