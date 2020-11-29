/*class Chain{ 
  constructor(body1,body2, offsetX, offsetY) 
  { 
    this.offsetX=offsetX 
    this.offsetY=offsetY 
    var options={ 
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX, y:this.offsetY} 
      } 
       this.Chain=Constraint.create(options) 
       World.add(world,this.Chain) 
      } 
      display() 
      { 
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(2); 
        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y
        var Anchor2X=pointB.x+this.offsetX 
        var Anchor2Y=pointB.y+this.offsetY 
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
      } 
  }*/
  class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 20
        }
        this.pointB = pointB;

        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA)
        {        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly()
    {
        this.sling.bodyA = null;
    }

    attach(body)
    {
     this.sling.bodyA = body;
    }
}
