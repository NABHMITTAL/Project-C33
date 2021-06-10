var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var score = 0; 
var particles ;
var plinkos = [];
var divisions = [];
var gameState = "play";
var divisionHeight=300;
var clicks = 6;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  //ground = new Ground(width/2,height,width,20);
  
  if (gameState === 'play') {

     for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }   
      for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,75));
      }
   
      for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,175));
      }
   
       for (var j = 75; j <=width; j=j+50) 
      {  
      
         plinkos.push(new Plinko(j,275));
      }
   
       for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
      mousePressed()
      score = 0;
   }
}



function draw() {
   background("black");
   
   Engine.update(engine);
   
   
   
   for (var i = 0; i < plinkos.length; i++) { 
      plinkos[i].display();
   }
   
   
   for (var j = 0; j < plinkos.length; j++) {
      plinkos[j].display();
   }
   for (var k = 0; k < divisions.length; k++)   {
      divisions[k].display();
   }
   particles.display();
   
   //display of score on the divisions
   fill("white");
   text("1000" ,20,500);
   text("1000" ,740,500);
   text("500" ,650,500);
   text("500" ,110,500);
   text("250" ,590,500);
   text("250" ,180,500);
   text("125" ,260,500);
   text("125" ,500,500);
   text("100" ,430,500);
   text("100" ,350,500);
   textSize(20)
   text("Score: " + score,20 ,30)
   text("Moves: " + clicks, 20, 50)
   //condition for the no. of clicks
   if (clicks === 0) {
      gameState = "end";
   }
   //condition for ending the game
   if (gameState === "end") {
      text("Game Over", 350, 350)
   }
   console.log(mouseX,mouseY)
//scoring
if (particles !=null){
      if( particles.y>= 600){
      //adding scores to the 1000 divisions
         if (90 < particles.x >10 ){
         score = score+1000;
         particles = null;
      }
      if (particles.x >730 && particles.x<800){
         score = score+1000
         particles = null;
      }
      //adding scores to the 500 divsions
      if (90 < particles.x >170){
         score = score+500
         particles = null;
      }
      if (650 < particles.x >730){
         score = score+500
         particles = null;
      }
      //adding scores to 250 bukcets
      if (170 < particles.x >250){
         score = score+250
         particles = null;
      }
      if (650 < particles.x >570){
         score = score+250
         particles = null;
      }
      //adding scores to 125 bukcets
      if (250 < particles.x >330){
         score = score+125
         particles = null;
      }
      if (570 < particles.x >490){
         score = score+125
         particles = null;
      }
      //adding scores to 100 bukcets
      if (330 < particles.x >490){
      score = score+100
      particles = null;
      }
   } 
}

   
}



function mousePressed()  {
   if (gameState !== "end") {
      particles = new Particle(mouseX, 10,10, 10)
      clicks -= 1;
   }
}

function keyPressed() {
   //condition for restarting the game
   if (keyCode === 32 && gameState === "end") {
      gameState = "play";
      score = 0
      clicks = 5;
   }
   
}

