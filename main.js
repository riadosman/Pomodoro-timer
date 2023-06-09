let short = document.getElementById("short");
let tall = document.getElementById("tall");
let time = document.querySelector(".time");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".second");
let finished = document.getElementById("finished");
let reset = document.getElementById("reset");
let shortTIme;
let limit;
function click(TIme,button,br){
    button.addEventListener("click",()=>{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
        short.disabled = true;
        shortTIme = TIme;
        limit = 60;
        const inter = setInterval(()=>{
            let minutes = Math.floor((shortTIme -= 100) / 1000 / 60);
            minute.innerHTML = minutes < 10 ? `0${minutes}`: `${minutes}`;
            let newSeconds = limit -= 1;
            seconds.innerHTML = newSeconds<10? `0${newSeconds}`: newSeconds;
            if(minute.innerHTML === "00" && seconds.innerHTML === "00"){
                finished.play();
                mola(br);
                clearInterval(inter);
            }
        },1000)
        reset.addEventListener("click",()=>{
                window.location.reload();
        })
    })
}
click(1500000,short,300000);
click(3000000,tall,600000);
function mola(br){
    document.body.style.backgroundColor = "green";
    shortTIme = br;
    limit = 60;
           let secondInter =  setInterval(()=>{
               let minutes = Math.floor((shortTIme -= 100) / 1000 / 60);
            minute.innerHTML = minutes < 10 ? `0${minutes}`: `${minutes}`;
            let newSeconds = limit -= 1;
            seconds.innerHTML = newSeconds<10? `0${newSeconds}`: newSeconds;
               if(minute.innerHTML == "0" && seconds.innerHTML == "0"){
                finished.play();
                clearInterval(secondInter);
            }
            },1000)
}