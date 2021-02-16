var garden,gardenImage;
var m,mImg,mImg2,mImg3,cat,catImg,catImg2,catImg3;


function preload() {
    //load the images here
    gardenImage=loadAnimation("images/garden.png");
    catImg= loadAnimation("images/cat1.png");
   catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3= loadAnimation("images/cat4.png");
    mImg= loadAnimation("images/mouse1.png");
    mImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400)
garden.addAnimation("garden",gardenImage);  
cat=createSprite(750,700,50,50)
cat.addAnimation("catsit",catImg)
cat.scale = 0.1
m=createSprite(250,700,50,50)
m.addAnimation("mouse",mImg)
m.scale = 0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - m.x<(cat.width - m.width)/2){
        cat.velocityX=0;
        cat.x=300;
        cat.addAnimation("catlastImage",catImg3)
        cat.changeAnimation("catlastImage")
        m.addAnimation("mouselastImage",mImg3)
    m.changeAnimation("mouselastImage") 
    }
    drawSprites();
}


function keyPressed(){
    
  //For moving and changing animation write code here
if(keydown=LEFT_ARROW) {
  cat.velocityX=-5;
cat.addAnimation("catrunning",catImg2)
cat.changeAnimation("catrunning")
}
if (keydown=LEFT_ARROW){
    m.addAnimation("mouserunning",mImg2)
   m.changeAnimation("mouserunning")
}


}
