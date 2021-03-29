class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:5,
			friction:-1.5,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
		

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			if (keyWentDown("space"))
		{
			this.body.velocityX=-5;
			this.body.velocityY=2;
		}
			
	}

}

