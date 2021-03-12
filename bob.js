class Bob{
    constructor(x,y){
        var options={
            restitution: 1,
            friction: 0,
            isStatic: false,
            density: 2
        }
    
        this.body=Bodies.circle(x,y,20,options)
        
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(pos.x,pos.y,40,40);
        pop()

    }
}

