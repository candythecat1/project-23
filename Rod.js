class Rod {

constructor(xpos,ypos,width1,height1){
    var options = {
        isStatic:true
      }
    this.body = Bodies.rectangle(xpos, ypos, width1,height1,options)
    World.add(world,this.body);
    this.width = width1;
    this.height = height1

}
display(){
var position = this.body.position;
 rectMode(CENTER)
 rect(position.x,position.y,this.width,this.height);
}
}