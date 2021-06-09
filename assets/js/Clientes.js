window.addEventListener("load", load, false);

function load() {
    document.getElementById("op1").addEventListener("click", function () { mostrar(1); });
    document.getElementById("op2").addEventListener("click", function () { mostrar(2); });
    let botones = [];
    botones = document.getElementsByName("actualizar");
    for (let i = 0; i < botones.length; i++){
        botones[i].addEventListener("click", function () { mostrar(2); });
    }
    document.getElementById("op1").style.color =  "#2d2b2b";
    document.getElementById("op2").style.color =  "#2d2b2b";
}

function mostrar(i) {
    switch (i) {
        case 1:
            document.getElementById("misClientes").style.display = "block";
            document.getElementById("actualizar").style.display = "none";
            document.getElementById("op1").style.color =  "#e7abad";
            document.getElementById("op2").style.color =  "#2d2b2b";
            break;
        case 2:
            document.getElementById("misClientes").style.display = "none";
            document.getElementById("actualizar").style.display = "block";
            document.getElementById("op1").style.color =  "#2d2b2b";
            document.getElementById("op2").style.color =  "#e7abad";
            break;
    }
}


