class blocks{
    constructor(x,y,color){
        this.body = Bodies.rectangle(x,y,30,50,{isStatic : false});
        this.height = 50;
        this.width = 30;
        this.color = color;
        World.add(world, this.body);
        this.visiblity = 255;
    }

    display(){
      
        if(this.body.speed<4){
            push();
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        stroke("white");
        strokeWeight(2);
        rect(pos.x, pos.y, this.width, this.height);
        pop ();
        }
        else{
            push();
            World.remove(world, this.body);
            this.visiblity = this.visiblity-5;
            tint(255 , this.visiblity);
            pop();
        }
    }
}