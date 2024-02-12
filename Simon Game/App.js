let gameseq = [];
let userseq = [];
let start = false;
let level = 0;
let h2 = document.querySelector("h2")

let btns = ["red", "green", "yellow", "blue"];


// let btn=document.querySelectorAll("button");


document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game staretd");
        start = true;
        levelup();



    }

});

function levelup() {
    level++;
    h2.innerText = `level ${level}`;
    randindx = Math.floor(Math.random() * 3);
    randcolor = btns[randindx];
    randBtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);
    flashbtn(randBtn);
    // flashbtn();

}

function flashbtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
        // btnPress();

    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
        // btnPress();

    }, 250);
}
function checkans() {
    // console.log("curr level :",level);
    let indx = level - 1;
    if (userseq[indx] === gameseq[indx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
        console.log("same level")
    }
    else {
        h2.innerHTML = `Game over! your score was <b>${level}<b/> <br> press key to any start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";

        }, 200)
        reset()
    }
}

function btnPress() {
    //    console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}
let allbtn = document.querySelectorAll(".div");

for (div of allbtn) {
    div.addEventListener("click", btnPress);
}
function reset() {
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;

}

// button.innerText=btnpress