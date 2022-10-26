//Crea boton evento
let boton = document.getElementById('inicialitzaJoc');
//creacion del evento
boton.addEventListener('click', function () {
    const contenedor = document.getElementsByTagName('body')[0]
    //creamos la tabla
    const tabla = document.createElement('table')
    let tbody = document.createElement('tbody')

    //metodos ya creados
    let inputX = document.getElementById('inputX').valueAsNumber
    let inputY = document.getElementById('inputY').valueAsNumber

    //creacion de la tabla
    for (let i = 0; i < inputX; i++) {
        //necesitamos tr
        let tr = document.createElement('tr')

        for (let i = 0; i < inputY; i++) {
            //añadimos 
            let td = document.createElement('td')
            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody)
    contenedor.appendChild(tabla)
    //estilos
    tabla.setAttribute("width", "30px")
    tabla.setAttribute("height", "60px")
    tabla.setAttribute("border", 1)
})
function matriuBinaria(matrix) {
    var matrix2 = [];
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[0].length; j++) {
            if(matrix2[0].style.backgroundColor == "blue"){
                matrix2[i].push(1)
            }else{
                matrix2[i].push(0)
            }
        }
    }
    return matrix2;
}
