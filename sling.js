class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    fly(){
        this.body.bodyA = null;
    }

    attach(body){
        this.body.bodyA = body;
    }

    display(){
        if(this.body.bodyA){
        var a = this.body.bodyA.position;
        var b = this.pointB;
        stroke("white");
        line(a.x, a.y,b.x, b.y);
        }
    }
}