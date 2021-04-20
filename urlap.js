window.addEventListener("load", init);

function $(nev){
    return document.querySelectorAll(nev);
}
function ID(nev){
    return document.getElementById(nev);
}
function init{
    ID("kuld").addEventListener("click",validalas);
}

function validalas(){
    console.log("validálunk");
    var nevMezo=ID("nev").value;
//    if(nevMezo.length<3){
//        $("aside section:nth-chcild(1) p").innerHTML="legalább 3 karakterből álljon a név";
//        ID("nev").style.border=2px solid red;
//    }else{
//        ID("nev").style.border="none";
//    }
    var hiba="";
    var adat="";
    var szuro=/(A-Z.)[1](a-z){2,17}/;
    
    if(!szuro.test(nevMezo){
       hiba+="Kezdődjön nagybetűvel és legalább 3 karakterből álljon a név";
        ID("nev").style.border=2px solid red;
    }else{
        ID("nev").style.border="none";
        adat+="Név: "+nevMezo+"<br>";
    }
    $("aside section:nth-child(1) p")[0].innerHTML-hiba;
    $("aside section:nth-child(2) p")[0].innerHTML-hiba;
}
