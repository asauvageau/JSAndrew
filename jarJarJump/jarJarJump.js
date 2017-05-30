var platformA;
var score;
var jjStuck, jjDieHere, jjGungansAngry, jjscream, jjRude, jjVeryBad, jjYouGonnaDie;
var sounds;

function preload() {
  jjStuck=loadSound("data/isuck.mp3");
  jjDieHere=loadSound("data/diehere.mp3");
  jjGungansAngry=loadSound("data/gungansangry.mp3");
  jjscream=loadSound("data/jjscream.mp3");
  jjRude=loadSound("data/rude.mp3");
  jjVeryBad=loadSound("data/verybad.mp3");
  jjYouGonnaDie=loadSound("data/yougonnadie.mp3")
}

function setup() {
  sounds=[];
  sounds.push(jjStuck);
  sounds.push(jjDieHere);
  sounds.push(jjGungansAngry);
  sounds.push(jjscream);
  sounds.push(jjRude);
  sounds.push(jjVeryBad);
  sounds.push(jjYouGonnaDie);
  createCanvas(500, 500);
  score=0;
  jjImage=loadImage("newJarJar.png")
    jarJar1=new jarJar();
  var numPlatforms=10;
  platformA=[];
  for (var i=numPlatforms; i>=0; i--) {
    iPlatform=new platform
      iPlatform.x=random(0, 450);
    iPlatform.y=random(0, 450);
    platformA.push(iPlatform);
  }
  console.log(sounds);
}

function draw() {

  background(50, 100, 50);
  jarJar1.display();
  textSize(20);

  if (keyIsDown(LEFT_ARROW)&&jarJar1.x<-50) {
    jarJar1.x=450;
  } else if (keyIsDown(LEFT_ARROW)) {
    jarJar1.x -=8;
  } else if (keyIsDown(RIGHT_ARROW)&&jarJar1.x>450) {
    jarJar1.x=-50;
  } else if (keyIsDown(RIGHT_ARROW)) {
    jarJar1.x+=8;
  }
  jarJar1.move();

  for (var j=platformA.length-1; j>0; j--) {
    platformA[j].display();
    if (jarJar1.speed<0) {

      if (jarJar1.x>platformA[j].x-20 && jarJar1.x<platformA[j].x+75-20 && jarJar1.y>platformA[j].y-jjImage.height/2 && jarJar1.y<platformA[j].y+16 -jjImage.height/2) {
        jarJar1.speed=20;
        score+=350-jarJar1.y;
        for (var i=platformA.length-1; i>0; i--) {
          platformA[i].y+=350-jarJar1.y;
          if (platformA[i].y>500) {
            nPlatform=new platform;
            platformA.push(nPlatform);
            platformA.splice(i, 1);
          }
        }
        jarJar1.reset();
        playSound();
      }
    }
  }
  text("Score: "+score, 10, 20);
}


function jarJar() {
  this.x=250;
  this.y=350;
  this.speed=20;
  this.grav=1;
  this.lastY=0;
  this.reset=function() {
    this.y=350;
  };
  this.display = function() {
    image(jjImage, this.x, this.y, jjImage.width/2, jjImage.height/2);
  };
  this.move=function() {

    this.y-=this.speed;
    this.speed-=this.grav;
  };
};
function playSound() {
  var per=random(0, 3);
  if (per>2) {
    var place=Math.floor(random()*(sounds.length-1));
    var temp=sounds[place];
    temp.play();
  }
};

function platform() {
  this.x=random(0, 450);
  this.y=random(0, 100);
  this.display=function() {
    rect(this.x, this.y, 75, 16)
  }
};