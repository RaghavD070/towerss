
  /*class Stone {
   constructor(x, y, r) 
    {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic': false
      }
      this.x = x;
      this.y = y;      
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255,0,255);
      ellipse(0,0,this.r);
      pop();
    }
  };*/
  class Ball {
    constructor(x, y, r) 
    {
      var options = {
          'restitution':1,
          'friction':0.5,
          'density':2.0,
          'isStatic': false
      }
      this.x = x;
      this.y = y;      
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("white");
      ellipse(0,0,this.r);
      pop();
    }
  };
  
  
  
  