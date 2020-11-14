class Bob
{
    constructor(x,y,r)
    {
        var options={
            //isStatic:false,
            restitution:1,
            //friction:0.9,
            density:0.8
        }

        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body);
    }
    display()
    {
        var bobpos=this.body.position;

       // push()
       // translate(paperpos.x,paperpos.y);
       ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255)
        ellipse(bobpos.x,bobpos.y,this.r,this.r)
       // pop()
    }
}
