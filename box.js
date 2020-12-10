class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        if (this.body.speed  < 4) {
            push()
            translate(pos.x,pos.y)
            angleMode(RADIANS)
            rotate(this.body.angle)
            rectMode(CENTER);
            fill(255,192,203);
            rect(0, 0, this.width, this.height);
            pop()
        } else {
            World.remove(world,this.body);
           
        }
        }
        score() {
            if (this.Visiblity<0&&this.Visiblity >-105) {
                score++;
            }
        }
    }
