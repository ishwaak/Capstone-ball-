class sphere 
{
    constructor(x,y,width,height)
        {
            this.body = Bodies.rectangle(x,y,width,height)
            this.width = width;
            this.height = height; 
            World.add(world, this.body) ; 
        }
    display()
    {
        fill("GREY")
        var pos = this.body.position ; 
        ellipseMode(RADIUS);
        ellipse(pos.x , pos.y , this.width ,this.height)
    }


};