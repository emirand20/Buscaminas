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
function inicialitzaJoc() {
    //esto hace que cada vez que creamos un nuevo tamblero en el caso de ya haya uno no lo sobrescribamos
    if (document.getElementsByTagName("table").length != 0) {
        document.getElementsByTagName("table")[0].remove();
    }
    const contenedor = document.getElementsByTagName("body")[0];
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
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tablero.appendChild(tbody);
    contenedor.appendChild(tablero);
    //estilos para la tabla
    tablero.setAttribute("width", "50%");
    tablero.setAttribute("height", "70%");
    tablero.setAttribute("border", 1);
};

function inicialitzaMines(nMines, midaX, midaY) {
    let mines = [];
    let mines2 = nMines;
    // Crear Matriz de midaX midaY llenas de 0
    for (let i = 0; i < midaX; i++) {
        let nueva = [];
        for (let j = 0; j < midaY; j++) {
            // Llenar la matriz nueva de midaX midaY de 0
            nueva.push(0);
        }
        // Llenar toda la matriz nueva de 0 en la matriz mines y tener las dimension
        // de midaX y midaY
        mines.push(nueva);
    }
    // Verificamos Si hay o no hay minas
    while (mines2 != 0) {
        let a = parseInt(Math.random() * midaX); //aleatirio para x
        let b = parseInt(Math.random() * midaY); //aleatirio para y
        // En caso de que no haya minas (1)
        if (mines[a][b] != 1) {
            // Pon 1 a las minas
            mines[a][b] = 1;
        }
        mines2--;
    }

    return mines;
}

function inicialitza() {
    inicialitzaJoc();
    let x = document.getElementById("inputX").valueAsNumber;
    let y = document.getElementById("inputY").valueAsNumber;
    let creacionMinas = document.getElementById("minas").valueAsNumber;
    mines = inicialitzaMines(creacionMinas, x, y);
    pintaTablero(mines);
}
