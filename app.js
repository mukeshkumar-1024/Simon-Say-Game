let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let higestScore = 0;

let btns = ["yellow","green","red","purple"];

let h2 = document.querySelector("h2");
let highScore1 = document.querySelector(".highScore")

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started.");
        started = true;
    }

    levelUp();

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random() * btns.length);
    let randomColor = btns[randInd];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameseq.push(randomColor);
    console.log(gameseq);
    btnFlash(randomBtn);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
           setTimeout( levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! your score is <b>${level}</b> <br> Press any Key to start.`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        },150);

        if(higestScore<level){
            higestScore = level;
            highScore1.innerHTML = `Your Higest Score is ${higestScore}`;
        }

        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameseq =[];
    userseq =[];
    level = 0;
}