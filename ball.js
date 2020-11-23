class Bob{
    constructor(x,y,r){
       var options={
            isStatic:false,
            restitution:1.3,
            friction:15,
            density:25
       } 
       this.x=x;
       this.y=y;
       this.r=r;
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       World.add(world, this.body);
    }
    display(){
        var PaperPos=this.body.position;
        push();
        translate(PaperPos.x,PaperPos.y);
        rectMode(CENTER);
        strokeWeight(1);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}