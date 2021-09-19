
const trex = document.querySelector("#trex");
const cactus = document.querySelector("#cactus");
var kO = document.querySelector("#gameOver");
var snd, snd2;
var dScore = 0;
var hScore = 0;
var sayi = 0;
snd2 = new sound("media/8bit.mp3");
snd = new sound("media/jump.mp3");

cactus.classList.add("cactus-animate");
cactus.style.visibility = "visible";

function timerGame() {
    
    setInterval(() => {

            if (sayi<1000 && cactus.classList=="cactus-animate") {
                sayi+=1;
                document.getElementById("timer").innerText = sayi;
            }
        
    }, 150);
}


function startGame() {

    let x = Math.floor(Math.random() * 1000);

    if(cactus.classList!="cactus-animate") {
        cactus.style.visibility = "visible";
        cactus.classList.add("cactus-animate");
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.volume = 0.7;
    this.sound.setAttribute("preload", "auto", "volume");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    
    this.play = function(){
        this.sound.play();
    }
    this.pause = function() {
        this.sound.pause();
    }
}

function jump() {
    startGame();
    snd.play()

    if(!snd2.play()) {
        snd2.play()
    }

    if(kO.style.visibility = "visible") {
        kO.style.visibility = "hidden";
    }

    if(trex.classList!="trex-animate") {
        trex.classList.add("trex-animate");
        setTimeout(function(){trex.classList.remove("trex-animate");},500);
    }
}

var crashControl = setInterval(function(){
    var trexBottom = parseInt(window.getComputedStyle(trex).getPropertyValue("bottom"));

    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft > 0 && cactusLeft < 40 && trexBottom <39) {
        cactus.classList.remove("cactus-animate");
        kO.style.visibility = "visible";
        snd2.pause();
        dScore +=1;
        document.getElementById("deathScore").innerText ="Crash : " + dScore;

        if(hScore < sayi) {
            hScore = sayi;
            document.getElementById("highScore").innerText ="Score : " + hScore;
        }
        sayi = 0;
    }
},10);

document.addEventListener("keydown", e => {
    if (e.keyCode === 32) {
        jump();
    }
});

