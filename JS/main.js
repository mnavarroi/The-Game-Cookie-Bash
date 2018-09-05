var canvas = document.getElementById('full-canvas');
var ctx= canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Clases

class Cookie{
   
    constructor (){
        this.x=40;
        this.y=440;
        this.width=143;
        this.height=208;
        this.image1 = new Image ();
        this.image1.src = 'https://image.ibb.co/kL2AKe/stand.png';
    }

    draw(){
        ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
    }

}


class Background{
    constructor(){
        this.x= 0;
        this.y= -2205;
        this.width = 1300;
        this.height = 2890;
        this.image = new Image();
        this.image.src = 'https://image.ibb.co/hRwHXz/Background.png';
    }

    draw(){
        // ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class Platforms{
    constructor (){
        this.x=600;
        this.y=165;
        this.width=40;
        this.height=45;
        this.image2 = new Image ();
        this.image2.src = 'https://bit.ly/2upxkWp/falta_este_link';   
    }

    draw(){
        if(frames % 10 === 0) this.x -= 15;
        ctx.drawImage(this.image2, this.x, this.y, this.width, this.height);
    }
}

class Chip{
    constructor (){
        this.x=600;
        this.y=165;
        this.width=40;
        this.height=45;
        this.image1 = new Image ();
        this.image1.src = 'https://image.ibb.co/d6f5Ke/choc40.png';   
    }
}


var cookie = new Cookie();
var fondo = new Background();
var platafromas = new Platforms();
var chispa = new Chip();


var frames = 0;
var interval = setInterval(function(){
    frames++;
   ctx.clearRect(0,0,400,200)
   fondo.draw();
   cookie.draw();
}, 1000/60);


addEventListener("keydown", function(event){
    if(event.keyCode == 38){
        cookie.y -= 30;
    }
    //hacer el cambio de lado con un switch cookie.x += 5;
})

function start (){
    interval
}

start()