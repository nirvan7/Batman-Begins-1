     class Drops{
        constructor(x, y) {
            var options = {
                'restitution':0.01,
                'friction':0.15,
            }
            this.x = x;
            this.y = y;
         
            this.body = Bodies.circle(this.x, this.y,1,options);
            this.r=5;
            World.add(world, this.body);
            // Matter.Body.setStatic(this.body,true);   
          }
          display(){
           var pos =this.body.position;
          ellipseMode (CENTER);
          fill("blue");
          ellipse(pos.x, pos.y, this.r,this.r);
         }
         reset (){
          if (this.body.position.y > height){
             Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
          }
         }
    }