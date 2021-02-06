class Umbrella{
    constructor(x, y) {
        var options = {
            'restitution':0.01,
            'friction':0.1,
        }
        this.image=loadImage("images/Walking Frame/walking_1.png");
          //                      "images/Walking Frame/walking_2.png");

        this.x = x;
        this.y = y;
        
        this.body = Bodies.circle(this.x, this.y,1,options);
        World.add(world, this.body);
        Matter.Body.setStatic(this.body,true);   
      }
      display(){
      var pos =this.body.position;
      ellipseMode (CENTER);
      push();
      
      image(this.image, this.body.position.x, this.body.position.y, 200, 600);
     
      pop();
     
     }



}



