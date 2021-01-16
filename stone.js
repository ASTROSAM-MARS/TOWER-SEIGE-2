class stone{
    constructor(){
        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(100,400,20, options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 40,40);
        pop();
    }
}