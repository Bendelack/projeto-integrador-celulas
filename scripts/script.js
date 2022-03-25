//CONFIGURAÇÕES DO MENU

function abreMenu(){
    document.querySelector(".fundo").style.display = "block";
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector(".menu").style.width = "100%";
        document.querySelector(".fundo").style.backgroundColor = "rgba(0, 0, 0, .5)";
    } else {
        document.querySelector(".menu").style.width = "250px";
        document.querySelector(".fundo").style.backgroundColor = "rgba(0, 0, 0, .5)";
    }
}

function fechaMenu(){
    document.querySelector(".menu").style.width = "0";
    document.querySelector(".fundo").style.display = "none";
}
//CONFIGURAÇÕES DO MENU - FIM

