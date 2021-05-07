class obstacle extends BaseClass{
    constructor(x,y){
        super(x,y,10,10);
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.image = loadImage("sprites/smoke.png")
        this.body = Bodies.rectangle(x, y, 10, 10, options);

        this.width = 10;
        this.height = 10;
    }
}