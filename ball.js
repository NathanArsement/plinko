class ball{
    constructor(x, y) {
        var options = {
            'restitution':0.4,
            
            
           
            
        }
        
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
       
        fill(rand(0,255),rand(0,255),rand(0,255));
        ellipse(0,0,10, 10);
        pop();
      }
}
