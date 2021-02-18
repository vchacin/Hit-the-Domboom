
let bomboaudio = document.getElementById ("bombo1");
    function playaudio1() {
        bomboaudio.currentTime= 0;
        bomboaudio.play();
     }

let hithataudio = document.getElementById ("hithat");
    function playaudio2() {
        hithataudio.currentTime= 0;
        hithataudio.play();
     }
        
let redoblanteaudio = document.getElementById ("redoblante");
    function playaudio3() {
        redoblanteaudio.currentTime= 0;
        redoblanteaudio.play();
    }

let crashaudio = document.getElementById ("crash");
    function playaudio4() {
        crashaudio.currentTime= 0;
        crashaudio.play();
     }


function cambio(){

    let btnSeepricing = document.getElementById("seepricing");
    if (btnSeepricing.innerHTML === "see pricing"){
        btnSeepricing.innerHTML = "It´s Not for you!";
    }else{
        btnSeepricing.innerHTML = "see pricing";
    }
}

let activePad = document.getElementById("ho");
activePad.addEventListener("click", function(){
    activePad.classList.add("press");

    setTimeout(function(){
    activePad.classList.remove("press")
    }, 500);
})
