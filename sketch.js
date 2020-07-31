var ground, groundImg;
var playerObject, playerImg;
var peopleObject, peopleImg, peopleGroup;
var rand;

function preload(){

}
function setup (){
    createCanvas(600, 400);
    ground = new Ground(600, 375, 1200, 10);
    playerObject = new Player();
    peopleGroup = new Group();
    

}
function draw(){
    background(200);
    ground.display();
    playerObject.display(30, 370);
    //rand = Math.round(random(300, 600));

    if(frameCount % 100 === 0){
        peopleObject = new People();
        peopleObject.display();
        
    }

    if(playerObject.player.isTouching(peopleObject.people)){
        console.log("player has come in contact with the people");
    }

    drawSprites();
}