var maxDrops=100;
var umbrella;
var thunder;
var walking;
for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(reandom(0,400),random(0,400)));
    friction : 0.1
}

function preload(){
   thunder=loadAnimation(thunder1.png,thunder2.png,thunder3.png,thunder4.png);
    walking=loadAnimation(walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png,)   
}

function setup(){
  creatCanvas(800,700);
  if(this.rain.position.y> height){
      Matter.Body.setPosition(this.rain, {X:random(0,400),y:random(0,400)})
  }
 umbrella=creatSprite(200,200,10,100);

 rand = Math.round(random(1,4));
 if (frameCount%80===0){
     thunderCreatedFrame=frameCount;
     thunder = creatSprite(random(10,370),random(10,30),10,10);
     switch(rand){
         case 1: thunder.addImage(thunder1);
         dreak;
         case 2:thunder.addImage(thunder2);
         break;
         case 3:thunder.addImage(thunder3);
         break;
         case 4:thunder.addImage(thunder4);
         break;
         default: break;
       }
       thunder.scale= random(0.3,0.6,0.9,0.13)
 }

    
}

function draw(){
   background("black") 
   drowSprite();
   umbrella.display();

}   

