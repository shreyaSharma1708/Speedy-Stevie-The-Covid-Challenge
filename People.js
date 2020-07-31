class People{
    constructor(){
        this.people = createSprite(600, 335, 20, 20);
        this.people.velocityX = -6;
        this.peopleImg = loadImage("Images/people.png");
        peopleGroup.add(this.people);
    }
    display(){
        this.people.addImage(this.peopleImg);
        this.people.scale = 0.3;
        this.people.lifetime = 100;
    }
}