class box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
       
        this.width = width;
        this.height = height;
        this.Visiblity = 225
      
        World.add(world, this.body);
      }
      display(){
        
        //console.log(this.body.speed);
        if(this.body.speed < 3){
          var angle = this.body.angle;
          
        fill(255,0,0)
          rectMode(CENTER);
          
          rect( this.body.position.x, this.body.position.y, this.width, this.height);
        
        }
        
        else{
          World.remove(world, this.body);
          push();

          this.Visiblity+=-10
          tint(255,0,0,this.Visibility)
          fill(255,0,0,this.Visiblity)
          
          rect( this.body.position.x,this.body.position.y,this.width, this.height);
          pop();
        }
        

        

        
        
      }
}