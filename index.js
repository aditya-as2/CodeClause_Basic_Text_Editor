var text = document.querySelector("textarea"),
ubtn = document.querySelector("#under"),
bbtn = document.querySelector("#bold"),
ibtn = document.querySelector("#ital"),
lbtn = document.querySelector("#left"),
cbtn = document.querySelector("#center"),
rbtn = document.querySelector("#right"),
casebtn = document.querySelector("#case"),
capbtn = document.querySelector("#cap"),
clrbtn = document.querySelector("#clr"),
resbtn = document.querySelector("#res"),
font = document.querySelector("#font"),
size = document.querySelector("#size"),
btn = document.querySelectorAll("button"),
col = document.querySelector("#color");


ubtn.onclick=function(){
    if(text.style.textDecoration=="underline"){
        text.style.textDecoration="none";
        ubtn.style.backgroundColor="rgb(209, 209, 209)";
        ubtn.style.border="none";
    }
    else{
        text.style.textDecoration="underline";
        ubtn.style.backgroundColor="rgb(163, 255, 177)";
        ubtn.style.border="0.15rem solid rgb(0, 255, 38)";
    }
}

bbtn.onclick=function(){
    if(text.style.fontWeight=="bold"){
        text.style.fontWeight="400";
        bbtn.style.backgroundColor="rgb(209, 209, 209)";
        bbtn.style.border="none";
    }
    else{
        text.style.fontWeight="bold";
        bbtn.style.backgroundColor="rgb(163, 255, 177)";
        bbtn.style.border="0.15rem solid rgb(0, 255, 38)";
    }
}

ibtn.onclick = function(){
    if(text.style.fontStyle=="italic"){
        text.style.fontStyle="normal";
        ibtn.style.backgroundColor="rgb(209, 209, 209)";
        ibtn.style.border="none";
    }
    else{
        text.style.fontStyle="italic";
        ibtn.style.backgroundColor="rgb(163, 255, 177)";
        ibtn.style.border="0.15rem solid rgb(0, 255, 38)";
    }
}

casebtn.onclick=function(){
    if (text.style.textTransform=="uppercase") {
        if(capbtn.style.border=="0.15rem solid rgb(0, 255, 38)"){
            text.style.textTransform="capitalize";
        }
        else{
            text.style.textTransform="lowercase";
        }
    }
    else{
        text.style.textTransform="uppercase";
    }
}

capbtn.onclick=function(){
    if (text.style.textTransform=="capitalize") {
        text.style.textTransform="lowercase";
        capbtn.style.backgroundColor="rgb(209, 209, 209)";
        capbtn.style.border="none";
    }
    else{
        text.style.textTransform="capitalize";
        capbtn.style.backgroundColor="rgb(163, 255, 177)";
        capbtn.style.border="0.15rem solid rgb(0, 255, 38)";
    }
}
lbtn.onclick = function(){
    text.style.textAlign="left";
    lbtn.style.backgroundColor="rgb(163, 255, 177)";
    lbtn.style.border="0.15rem solid rgb(0, 255, 38)";
    cbtn.style.backgroundColor="rgb(209, 209, 209)";
    cbtn.style.border="none";
    rbtn.style.backgroundColor="rgb(209, 209, 209)";
    rbtn.style.border="none";
}
cbtn.onclick = function(){
    text.style.textAlign="center";
    cbtn.style.backgroundColor="rgb(163, 255, 177)";
    cbtn.style.border="0.15rem solid rgb(0, 255, 38)";
    lbtn.style.backgroundColor="rgb(209, 209, 209)";
    lbtn.style.border="none";
    rbtn.style.backgroundColor="rgb(209, 209, 209)";
    rbtn.style.border="none";
}
rbtn.onclick = function(){
    text.style.textAlign="right";
    rbtn.style.backgroundColor="rgb(163, 255, 177)";
    rbtn.style.border="0.15rem solid rgb(0, 255, 38)";
    cbtn.style.backgroundColor="rgb(209, 209, 209)";
    cbtn.style.border="none";
    lbtn.style.backgroundColor="rgb(209, 209, 209)";
    lbtn.style.border="none";
}

resbtn.onclick=function(){
    text.style.textDecoration="none";
    ubtn.style.backgroundColor="rgb(209, 209, 209)";
    ubtn.style.border="none";
    text.style.fontWeight="400";
    bbtn.style.backgroundColor="rgb(209, 209, 209)";
    bbtn.style.border="none";
    text.style.fontStyle="normal";
    ibtn.style.backgroundColor="rgb(209, 209, 209)";
    ibtn.style.border="none";
    text.style.textTransform="none";
    capbtn.style.backgroundColor="rgb(209, 209, 209)";
    capbtn.style.border="none";
    text.style.textAlign="left";
    lbtn.style.border="0.15rem solid rgb(0, 255, 38)";
    cbtn.style.backgroundColor="rgb(209, 209, 209)";
    cbtn.style.border="none";
    rbtn.style.backgroundColor="rgb(209, 209, 209)";
    rbtn.style.border="none";
    text.style.color="black";
    text.style.fontFamily="Arial";
    font.value="Arial";
    text.style.fontSize="1rem";
    size.value="16";
    col.value="black";
}
clrbtn.onclick=function(){
    text.value="";
}
font.onchange=function(){
    text.style.fontFamily=font.value;
}

size.onchange=function(){
    text.style.fontSize=size.value +"px";
}
col.onchange=function(){
    text.style.color=col.value;
}

document.getElementById("ta").addEventListener("keydown", function (e) {
    if (e.key == "Tab") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

        this.selectionStart =
            this.selectionEnd = start + 1;
    }
});

document.getElementById("down").onclick = function () {
    var x = document.createElement("a");

    x.href = "data:text/plain;charset=UTF-8," + document.getElementById("ta").value;

    x.setAttribute("download", document.getElementById("fn").value);

    x.click();
}

capbtn.addEventListener("mouseenter",()=> capbtn.style.backgroundColor="rgb(193, 193, 193)");
capbtn.addEventListener("mouseleave",()=> capbtn.style.backgroundColor="rgb(209, 209, 209)");
lbtn.addEventListener("mouseenter",()=> lbtn.style.backgroundColor="rgb(193, 193, 193)");
lbtn.addEventListener("mouseleave",()=> lbtn.style.backgroundColor="rgb(209, 209, 209)");
ubtn.addEventListener("mouseenter",()=> ubtn.style.backgroundColor="rgb(193, 193, 193)");
ubtn.addEventListener("mouseleave",()=> ubtn.style.backgroundColor="rgb(209, 209, 209)");
bbtn.addEventListener("mouseenter",()=> bbtn.style.backgroundColor="rgb(193, 193, 193)");
bbtn.addEventListener("mouseleave",()=> bbtn.style.backgroundColor="rgb(209, 209, 209)");
ibtn.addEventListener("mouseenter",()=> ibtn.style.backgroundColor="rgb(193, 193, 193)");
ibtn.addEventListener("mouseleave",()=> ibtn.style.backgroundColor="rgb(209, 209, 209)");
cbtn.addEventListener("mouseenter",()=> cbtn.style.backgroundColor="rgb(193, 193, 193)");
cbtn.addEventListener("mouseleave",()=> cbtn.style.backgroundColor="rgb(209, 209, 209)");
rbtn.addEventListener("mouseenter",()=> rbtn.style.backgroundColor="rgb(193, 193, 193)");
rbtn.addEventListener("mouseleave",()=> rbtn.style.backgroundColor="rgb(209, 209, 209)");
