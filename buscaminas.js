const colorMina = "blue"; //inicializamos el color de la celda

function inicialitzaJoc(mines) {
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
            td.onclick = clickCoordenada.bind(this,mines,x,y); //
            tr.appendChild(td);
            
        }
        tbody.appendChild(tr);
    }
    //estilos para la tabla
    tablero.setAttribute("width", "20%");
    tablero.setAttribute("height", "20%");
    tablero.setAttribute("border", 1);

    tablero.appendChild(tbody);
    contenedorBody.appendChild(tablero);
};

function clickCoordenada(mines,x,y) {
    imprimeixCoordenada(x,y)
    imprimeixMina(mines,x,y)
    
}
function imprimeixCoordenada(x,y) {
    console.log(x,y);
}

function imprimeixMina(mines,x,y) {
    // mines[x][y]
    //
}

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
function coordenada() {
    let celda = document.getElementsByTagName("table")[0];
    celda.addEventListener("click", function (event) {
        if (event.target.style.backgroundColor == colorMina) {
            console.log(event.target.id + "es mina");
        } else {
            console.log(event.target.id + "no es mina");
        }
    });
}
function inicialitza() {
    
    let x = document.getElementById("inputX").valueAsNumber;
    let y = document.getElementById("inputY").valueAsNumber;
    let creacionMinas = document.getElementById("minas").valueAsNumber;
    mines = inicialitzaMines(creacionMinas, x, y);
    inicialitzaJoc(mines);
    pintaTablero(mines);
    coordenada();
}
