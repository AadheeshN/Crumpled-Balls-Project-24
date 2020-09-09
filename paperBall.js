class paper {
    constructor(x, y, radiusX, radiusY) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.5,
        }

        this.body = Bodies.circle(x, y, radiusX, options);
        this.radius = radiusX;
        World.add(world, this.body);
    }    
    
    display() { 
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
        
    }


}