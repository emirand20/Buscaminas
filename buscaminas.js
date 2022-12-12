function inicialitzaJoc() {
    //esto hace que cada vez que creamos un nuevo tamblero en el caso de ya haya uno no lo sobrescribamos
    if (document.getElementsByTagName("table").length != 0) {
        document.getElementsByTagName("table")[0].remove();
    }
    const contenedorBody = document.getElementsByTagName("div")[0];
    const tablero = document.createElement("table");
    let tbody = document.createElement("tbody");

    let inputX = document.getElementById("inputX").valueAsNumber;
    let inputY = document.getElementById("inputY").valueAsNumber;

    //creacion
    for (let x = 0; x < inputX; x++) {
        //creacion tr 
        let tr = document.createElement("tr");
        for (let y = 0; y < inputY; y++) {
            //creacion td
            let td = document.createElement("td");
            td.width = 30;
            td.id = x + "-" + y;
            tr.height = 70;
            tr.appendChild(td); 
        }
        tbody.appendChild(tr);
    }
    //estilos para la tabla
    tablero.setAttribute("border", 1);
    
    tablero.appendChild(tbody);
    contenedorBody.appendChild(tablero);
};
function pintaTablero() {
    let rows = document.getElementsByTagName("tbody")[0].children;
    let matrix = [];

    for (let i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children);
        for (let j = 0; j < matrix[i].length; j++) {
            if (mines[i][j] == 1) {
                matrix[i][j].style.backgroundColor = "blue";
            }
        }
    }
}

function inicialitzaMines(nMines, midaX, midaY) {
    let arrayBobas = []; //almacenaremos las nuevas minas
    for (let i = 0; i < midaX; i++) {
        let aNueva = [];
        for (let j = 0; j < midaY; j++) {
            aNueva.push(0); //almacenara la posicion de x e y
        }
        arrayBobas.push(aNueva);
    }
    // Verificamos si hay o no hay minas
    while (nMines != 0) {
        let x = parseInt(Math.random() * midaX); //aleatirio para x
        let y = parseInt(Math.random() * midaY); //aleatirio para y
        //Si no hay minas sera 1
        if (arrayBobas[x][y] != 1) {
            arrayBobas[x][y] = 1;
        }
        nMines--;
    }

    return arrayBobas;
}



function inicialitza() {
    inicialitzaJoc();
    let x = document.getElementById("inputX").valueAsNumber;
    let y = document.getElementById("inputY").valueAsNumber;
    let creacionMinas = document.getElementById("minas").valueAsNumber;
    mines = inicialitzaMines(creacionMinas, x, y);
    pintaTablero(mines);
    coordenadesCelas();
}
function coordenadesCelas() {
    //Seleccionem el div on apareixerà la taula
    const grupTD = document.getElementById("ontaula");
    //Funció que saltara quan es cliqui una cel·la
    const celesClicades = e => {
    //Si la cel·la clicada es vermella...
    if (e.target.style.backgroundColor == "red") {
    //Retornara l'id de la cel·la (és a dir, les coordenades) i dira que és una mina
    console.log(`Les coordenades d'aquesta cel·la són ${e.target.id} i és una mina`);
    }
    //Si no ho és...
    else {
    //Fara el mateix i ens dirà que no és una mina
    console.log(`Les coordenades d'aquesta cel·la són ${e.target.id} i NO és una mina`);
    }
    }
    //A la zona del div que hem dit abans, farem que "escolti" quan es faci click, i que corri la funció abans esmentada
    grupTD.addEventListener("click", celesClicades);
}
