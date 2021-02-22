
let bomboaudio = document.getElementById ("bombo1");
    function playaudio1() {
        bomboaudio.currentTime= 0;
        bomboaudio.play();

        changeStyle(activePad);
     }

let hithataudio = document.getElementById ("hithat");
    function playaudio2(activePad) {
        hithataudio.currentTime= 0;
        hithataudio.play();

        activePad.classList.add("press");
        setTimeout(function(){
        activePad.classList.remove("press")
        }, 500);
     }
        
let redoblanteaudio = document.getElementById ("redoblante");
    function playaudio3(activePad) {
        redoblanteaudio.currentTime= 0;
        redoblanteaudio.play();

       changeStyle(activePad);
        
    }

let crashaudio = document.getElementById ("crash");
    function playaudio4() {
        crashaudio.currentTime= 0;
        crashaudio.play();

        changeStyle(activePad);
     }


function cambio(btnPrice){
    if (btnPrice.innerHTML === "see pricing"){
        btnPrice.innerHTML = "It´s Not for you!";
    }else{
        btnPrice.innerHTML = "see pricing";
    }
}

function changeStyle(activePad){
    activePad.classList.add("press");
        setTimeout(function(){
        activePad.classList.remove("press")
        }, 500);
}