
let bomboaudio = document.getElementById ("bombo1");
    function playaudio1() {
         bomboaudio.play();
     }

let hithataudio = document.getElementById ("hithat");
    function playaudio2() {
        hithataudio.play();
     }
        
let redoblanteaudio = document.getElementById ("redoblante");
    function playaudio3() {
        redoblanteaudio.play();
    }

let crashaudio = document.getElementById ("crash");
    function playaudio4() {
        crashaudio.play();
     }


function cambio(){

    let btnSeepricing = document.getElementById("seepricing");
 
if (btnSeepricing.innerHTML === "see pricing"){
    btnSeepricing.innerHTML = "It´s Not for you!";
}
else{
    btnSeepricing.innerHTML = "see pricing";
}
}

/*window.onload=function(){
    alert('Nosotros somos ¡Los Timbales del Apocalipsis!');
}*/
