class ground{
    constructor(x, y, width, angle) {
        var options = {
            
            isStatic:true,
            restitution: 0.5
           
            
        }
        
        this.body = Bodies.rectangle(x, y, width, 3, options);
        this.width = width;
        this.height = 3;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
      }
}
