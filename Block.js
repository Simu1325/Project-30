class Block{
  constructor(x, y, width, height) {
  this.visibility=255

      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      
    
    if(this.body.speed<3){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
    else{
      push()
         World.remove(world,this.body)
         tint(255,this.visibility)
         this.visibility-=5
         image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
         pop()
    }
  }
}