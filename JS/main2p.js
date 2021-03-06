var canvas = document.getElementById('full-canvas');
var ctx= canvas.getContext('2d');

canvas.width = 1270;
canvas.height = 700;
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
var kronk = new Kronk();
var cookie = new Cookie();
var chispa = new Chispa();
var plato = new Plato();
var fondo = new Background();
var frames = 0;
var fondoCae = false;
var score = 0;

// var audios = {
//     game: "http://k003.kiwi6.com/hotlink/13nrs27rt0/juego.mp3",
//     salto: "http://k003.kiwi6.com/hotlink/w3cerzxaw9/jump.mp3",
// }

// var audioMain = new Audio();
// var salto = new Audio;


//Helpers

function start(){
    // fondo.music.play();
    interval = setInterval(update, 1000 / 60);
}

function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    control();
    control2();
    // fondoCae = pararFondo();
    // fondoCae = pararFondoKronk();
    fondoCae = pararFondoCrispy();
    fondoMovimiento();
    fondo.draw();
    drawPlatos();
    drawChispas();
    drawPlatosKronk();
    drawChispasKronk();
    drawCookieVsKronk();
    kronk.draw();
    cookie.draw();
    reaparecerKronk();
    reaparecerCrispy();
    tiempoOver();
}

// function pruebaFinal(){
    
//     ctx.font = "30px Avenir"
//     ctx.fillText("Oh no, hay pedazos de Crispy por todo el piso", 0, 200)
//     ctx.fillText("Presiona Enter para intentarlo de nuevo", 250, 240);
//     console.log("muerte")
// };


function restart(){
    if(interval !== undefined) return;
    frames = 0;
    start();
}

/* function gameOver() {  
    clearInterval(interval);
    if (pararFondo=true);
    perder();
    // $(".win").css("opacity", "100");
    // $(".win h2").text('¡Oh no! Crispy se cayó y hay pedazos de galleta por todo el piso. <br> Presiona R para intentarlo de nuevo.');
    // // $(".win p").text(`Score: ${this.points}`);
    // $("#next-level").css("display", "none");
    // $("canvas").css("display", "none");
    // $("body").text('¡Oh no! Crispy se cayó y hay pedazos de galleta por todo el piso. Presiona R para intentarlo de nuevo.'); 
    
    // fondo.music.pause();
    ctx.font = "30px Avenir"
    ctx.fillText("Oh no, se derritieron todas las chispas", 1250, 200)
    ctx.fillText("Presiona Enter para intentarlo de nuevo", 1250, 240);   
    // $("canvas").css("display", "none");
    // $("body").text('You lost! try again'); 
} */


// function pararFondoKronk(){
//     // console.log(kronk.y )
//     if(fondo.y > -100 || 
//         kronk.y + 2 > 494) {
//             if(-2183 < fondo.y && kronk.y + 2 > 494) {
//                 // pruebaFinal();
//                 gameOver();
//             }
//             // if (fondo.y)
//             return  false;
//     } 
//         return true;
// }

function pararFondoCrispy(){
    // console.log(kronk.y )
    if(fondo.y > -100 || 
        cookie.y + 2 > 494) {
            if(-2183 < fondo.y && cookie.y + 2 > 494) {
                alert("Hay galleta por todos lados. Presiona R para intentarlo de nuevo.");
                gameOver();
            }
            // if (fondo.y)
            return  false;
    } 
        return true;
}


function gameOver(){

    clearInterval(interval);
    ctx.font = "30px Avenir"
    ctx.fillText("Oh no, hay pedazos de Crispy por todo el piso", 0, 200)
    ctx.fillText("Presiona Enter para intentarlo de nuevo", 250, 240);
    console.log("muerte")
    // console.log("muerte")
    // ctx.font = "30px Avenir"
    // ctx.fillText("Oh no, hay pedazos de Crispy por todo el piso", 0, 200)
    // ctx.fillText("Presiona Enter para intentarlo de nuevo", 250, 240);
}

function ganar (){
    console.log("ganas")
    clearInterval(interval);
    
    
    //texto
    //primera línea
    ctx.font='bold 30px Verdana';
    ctx.fillStyle="#3c2b11";
    ctx.textAlign = "center";
    ctx.fillText("Crispy es más chocolatoso que Kronk.", canvas.width/2, 200);
    
    //segunda linea
    ctx.font='25px Verdana';
    ctx.fillStyle="#ec730f";
    ctx.textAlign = "center";
    ctx.fillText("Lograste conseguir " + score + " chispas.", canvas.width/2,240);
    
    //tercer linea
    ctx.font='18px Verdana';
    ctx.fillStyle="#3c2b11";
    ctx.textAlign = "center";
    ctx.fillText("Presiona R para intentarlo de nuevo.", canvas.width/2, 290);
    
    //fondo transparente
    ctx.beginPath ();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.globalAlpha =0.3;  
    ctx.fillStyle = 'white';
    ctx.fill();
}


function tiempoOver(){
    if (timeleft ===0)
    ganar(); 
}

function cookieLeft (){
    cookie.x-=6;
}

function cookieRight (){
    cookie.x+=6;
}

function kronkLeft (){
    kronk.x-=6;
}

function kronkRight (){
    kronk.x+=6;
}


function fondoMovimiento(){
    if(fondoCae === true){
        fondo.y += 1.6 //velocidad con la que cae el fondo
        p.forEach(function(plato){
            plato.y += 1.6;
        })
        ch.forEach(function(chispa){
            chispa.y += 1.6;
        })
    }else{
        fondo.y;
        control();  
        
    }
}

function salto (){
    // fondoCae = true;
    cookie.y-=350;
    
    if(keys[39]===true) {
        cookie.x+=50;
    }
    if(keys[37]===true) {
        cookie.x-=50;
    }
    cookie.jumping = false;
}


function salto1 (){
    // fondoCae = true;
    kronk.y-=350;
    
    if(keys[68]===true) {
        kronk.x+=50;
    }
    if(keys[65]===true) {
        kronk.x-=50;
    }
    kronk.jumping = false;
}
    
function drawCookieVsKronk(){
    p.forEach(cookie => {
        cookie.draw();
        if(kronk.colisionGalletas(cookie)){
            kronk.y = cookie.y- kronk.height; //en +2 está sobre el plato exacto
        }
    });
}

    function drawPlatosKronk(){
        p.forEach(plato => {
            plato.draw();
            if(kronk.colision1(plato)){
                kronk.y = plato.y- kronk.height; //en +2 está sobre el plato exacto
                kronk.jumping = true;                 
            }
        });
    }
    
    function drawChispasKronk(){
        ch.forEach((chispa, index) => {
            chispa.draw();
            if(kronk.colision1(chispa)){
                ch.splice(index, 1);
                score ++;
                return false; 
                // kronk.y = chispa.y-kronk.height; // esta es la línea para corregir la colisión
                // kronk.x = chispa.x-20; // esta es la línea para corregir la colisión
            }
        })
    }
    
    function drawPlatos(){
        p.forEach(plato => {
            plato.draw();
            if(cookie.colision(plato)){
                cookie.y = plato.y- cookie.height; //en +2 está sobre el plato exacto
                cookie.jumping = true;                 
            }
        });
    }
    
    function drawChispas(){
        ch.forEach((chispa, index) => {
            chispa.draw();
            if(cookie.colision(chispa)){
                ch.splice(index, 1);
                score ++;
                return false; 

            }
        })
    }


    function reaparecerCrispy (){
        if (cookie.x < -143)  //el 143 es el ancho de la galleta
            cookie.x = canvas.width;    
        else if (cookie.x > canvas.width) {
            cookie.x = -143;
        }
    }

    function reaparecerKronk (){
        if (kronk.x < -143)  //el 143 es el ancho de la galleta
        kronk.x = canvas.width;    
        else if (kronk.x > canvas.width) {
            kronk.x = -143;
        }
    }

    
    
    kronk.jumping = true;
    var keys = [];
    
    
    //Listeners

    addEventListener("keydown",function(e){
        if (e.keyCode === 37) keys[e.keyCode] = true;
        if (e.keyCode === 39) keys[e.keyCode] = true;
    })
    
    addEventListener("keyup",function(e){
        if (e.keyCode === 37) keys[e.keyCode] = false;
        if (e.keyCode === 39) keys[e.keyCode] = false;
    })
    
    addEventListener("keydown", function (e){
        // console.log(e.keyCode)
        if (e.keyCode === 38 && kronk.jumping) {
            salto();
        }
    })
    
    //Checar estas líneas
    addEventListener("keydown", function (e){
        // console.log(e.keyCode)
        if (e.keyCode === 82) {
            restart();
        }
    })

    addEventListener("keydown",function(e){
        if (e.keyCode === 65) keys[e.keyCode] = true;
        if (e.keyCode === 68) keys[e.keyCode] = true;
    })
    
    addEventListener("keyup",function(e){
        if (e.keyCode === 65) keys[e.keyCode] = false;
        if (e.keyCode === 68) keys[e.keyCode] = false;
    })
    
    addEventListener("keydown", function (e){
        // console.log(e.keyCode)
        if (e.keyCode === 87 && kronk.jumping) {
            salto1();
        }
    })
    
    //Checar este código
    addEventListener("keydown", function (e){
        // console.log(e.keyCode)
        if (e.keyCode === 82) {
            restart();
        }
    })
    
    function control (){
        if (keys[37]===true) cookieLeft();
        if (keys[39]===true) cookieRight();
    }

    function control2 (){
        if (keys[65]===true) kronkLeft();
        if (keys[68]===true) kronkRight();
    }
    
    
    start();