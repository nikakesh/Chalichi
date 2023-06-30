let mode = localStorage.getItem("mode");
//1 = light;
//0 = dark;
let body = document.querySelector("#body");
let img1 = document.querySelector("#logo");
let bt1 = document.querySelectorAll(".bt1");
let bt2 = document.querySelector("#bt2"); 
let img2 = document.querySelector("#l-d");
let tx1 = document.querySelectorAll(".tx1")
let footer = document.querySelector(".footer")
checkimg();
check();
bt2.addEventListener("click", function(){
    if(mode == 1) {
        mode = 0;
        localStorage.setItem("mode", 0);
    }
    else {
        mode = 1;
        localStorage.setItem("mode", 1);
    }
    checkimg();
    check();
})
function checkimg(){
    console.log(mode);
    if(mode == 1) img2.src = "dark.png";
    else img2.src = "light.png";
}
function check() {
    if (mode == 1) {
        body.style.backgroundColor = "rgb(220, 245, 255)";

        img1.src = "light-logo.png";

        bt1[0].style.backgroundColor = "rgba(253,220,95,255)";
        bt1[1].style.backgroundColor = "rgba(253,220,95,255)";
        bt1[2].style.backgroundColor = "rgba(253,220,95,255)";

        bt1[0].style.color = "black";
        bt1[1].style.color = "black";
        bt1[2].style.color = "black";

        tx1[0].style.color = "black";
        tx1[1].style.color = "black";
        tx1[2].style.color = "black";
        tx1[3].style.color = "black";
        tx1[4].style.color = "black";
        tx1[5].style.color = "black";
        tx1[6].style.color = "black";
        tx1[7].style.color = "black";
        tx1[8].style.color = "black";
        tx1[9].style.color = "black";

        img2.style.width = "40px";

        footer.style.backgroundColor = "rgb(190, 245, 270)";
    }
    else{
        body.style.backgroundColor = "#202124";

        img1.src = "dark-logo.png";

        bt1[0].style.backgroundColor = "#202124";
        bt1[1].style.backgroundColor = "#202124";
        bt1[2].style.backgroundColor = "#202124";

        bt1[0].style.color = "white";
        bt1[1].style.color = "white";
        bt1[2].style.color = "white";

        img2.style.width = "55px";

        tx1[0].style.color = "white";
        tx1[1].style.color = "white";
        tx1[2].style.color = "white";
        tx1[3].style.color = "white";
        tx1[4].style.color = "white";
        tx1[5].style.color = "white";
        tx1[6].style.color = "white";
        tx1[7].style.color = "white";
        tx1[8].style.color = "white";
        tx1[9].style.color = "white";

        footer.style.backgroundColor = "#4a4c51";
    }
} 