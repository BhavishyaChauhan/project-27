class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            restituiton: 1,
            friction: 2,
            density: 1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos=(this.body.position)
        rectMode(CENTER)
        fill("cyan")
        rect(pos.x,pos.y,this.width,this.height)
    }
}