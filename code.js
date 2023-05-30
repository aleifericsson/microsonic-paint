function enter(e) {
    this.classList.add("enter");
}
function leave(e) {
    this.classList.remove("enter")
}
/*

function check(e){
    for(let n = 0; n <20; n++){
        for(let m = 20; n < 20;m++){
            if(boxlist[n][m].classList.contains("enter"))
            {
                changecolor(current_color, boxlist[n][m]);
            }
        }
    }
}

*/

function check(e){
    if(this.classList.contains("enter"))
    {
        changecolor(current_color, this);
    }
}

function changecolor(color, bro){
    bro.classList.remove("white");
    bro.classList.remove("green");
    bro.classList.remove("blue");
    bro.classList.remove("black");
    bro.classList.remove("red");
    bro.classList.add(color);
}

let current_color = "black";
const boxes = document.querySelector(".boxes");
let boxlist=[];
for(let i = 0; i < 20; i++){
    const div = document.createElement('div');
    div.classList.add("row"+i);
    div.classList.add("row");
    div.style.cssText = "display: flex; justify-content:center;";
    boxes.appendChild(div);
    let boxlist2=[]
    boxlist.push(boxlist2);
    for(let j = 0; j < 20; j++){
        const box=document.createElement('div');
        box.classList.add("box");
        box.classList.add("col"+j);
        box.classList.add("white");
        div.appendChild(box);
        boxlist[i].push(box);
        box.addEventListener("mouseenter",enter);
        box.addEventListener("mouseleave",leave);
        box.addEventListener("mousedown", check);
    }
}
/*
const bod = document.querySelector("body");
bod.addEventListener("mousedown", check);
*/
function changecurcolor(color) {
    current_color=color;
}

function clear() {
    for(let i = 0; i <20; i++){
        for(let j = 20; j < 20;j++){
            changecolor(white, boxlist[i][j]);
        }
    }
}

const redbox = document.querySelector(".red");
redbox.addEventListener("click", changecurcolor("red"));
const whitebox = document.querySelector(".white");
whitebox.addEventListener("click", changecurcolor("white"));
const greenbox = document.querySelector(".green");
greenbox.addEventListener("click", changecurcolor("green"));
const bluebox = document.querySelector(".blue");
bluebox.addEventListener("click", changecurcolor("blue"));
const blackbox = document.querySelector(".black");
blackbox.addEventListener("click", changecurcolor("black"));
const clearbox = document.querySelector(".clear");
clearbox.addEventListener("click", clear);