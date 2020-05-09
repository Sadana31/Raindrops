class RainDrop2 {
    constructor(){
        this.image = loadImage("letter.jpg")
        this.x = random(400,800);
        this.y = random(3,200);
    }

    display(){
        push();
        strokeWeight(4);
        stroke(255);
        line(this.x,this.y,this.x,this.y + 10);
        pop();
    }

    update(){
        if(this.y>400){
            this.x = random(400,800);
            this.y = random(3,200);
        }

        this.y = this.y + 5;
    }
}