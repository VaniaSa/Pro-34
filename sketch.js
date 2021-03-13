var dog, dog2
var database
var foodS, foodstock

function preload()
{
	dog= loadImage("dogImg.png")
  dog2= loadImage("dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  dogb = createSprite(250,400,10,10);
	dogb.addImage(dog)
  dogb.scale= 0.15;
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dogb.addImage(dog2);
  }
  drawSprites();
  //add styles here 
  textSize(20);
  fill("black");
  text("Press the UP_ARROW to feed the dog", 75, 50);
  
  textSize(15);
  fill("black");
  text("Score = "+ foodS, 50,100);
}
function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;    
  }

  database.ref('/').set({
    Food:x
  })

}

