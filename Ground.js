class Ground {
    constructor(x,y,width,height) {
        this.ground = createSprite(x, y, width, height);
        this.ground.velocityX = -6;
        this.groundImg = loadImage("Images/ground.png");
        
    }
    display(){
        this.ground.addImage(this.groundImg);  
        if(this.ground.x<0){
            this.ground.x = this.ground.width/2
        }
    }
  };