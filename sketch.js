const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
let bg;
let g ;
var astro , asImg;
var stImg;
var gameState = 0;
var stoneGroup;
var rewardImg;
var rwdgroup;
var count = 0;
var starImg;
var starSound;

function preload()
{
 bg = loadImage("image/bg4.jpg");
 asImg = loadImage("image/astronaut.png");
 stImg = loadImage("image/stone.png");
 rewardImg = loadImage("image/reward.png");
 starImg = loadImage("image/star.png")
 starSound = loadSound("image/starSound.wav");
}

function setup() {
 createCanvas(1200,500);
  
 astro = createSprite(100,400,50,50);
 astro.addImage(asImg) ;
 astro.scale = 0.08;
 astro.debug = true;
 stoneGroup = new Group() 
 rwdgroup = new Group();
}

function draw() 
{
  background(bg);
 
if (keyDown ("space")){
  astro.velocityY = -5;
}

if (keyDown (LEFT_ARROW)){
  astro.velocityX = -5;
}

if (keyDown (RIGHT_ARROW)){
  astro.velocityX = 5;
}
  
  astro.velocityY += 0.08;
  if(stoneGroup.isTouching(astro)){
    astro.velocityY = 0;
  }

  if(rwdgroup.isTouching(astro)){
    starSound.play();
    rwdgroup.destroyEach();
    count ++;
    console.log(count)
  }
   
  reward() ;
  stone() ;
  drawSprites();
}

function stone() {
if (frameCount % 200 === 0){
        
  var st = createSprite(1200,450,50,50);
  st.velocityX = -2;
  st.addImage(stImg);
  st.scale  = 0.08;
  st.debug = true;
  st.setCollider("rectangle",0,0,50,50)
  stoneGroup.add(st) ;
  }
}

function reward(){
if(frameCount % 800 === 0){
  var y = Math.round(random(100,200))
 var rwd = createSprite(1200,y,50,50);
 rwd.velocityX = -3;
 rwd.addImage(starImg);
 rwd.scale = 0.08 ; 
 rwdgroup.add(rwd);
}
}