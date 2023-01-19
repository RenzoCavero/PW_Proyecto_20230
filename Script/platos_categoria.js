let board;
let simbolosDisponibles = ["https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg", 
"https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg", 
"https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg", 
"https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg", 
"https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg", 
"https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg", 
"https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg",
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg", 
"https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg", 
"https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg", 
"https://imgmedia.buenazo.pe/1200x660/buenazo/original/2022/10/24/60d89da6913c240e6725db08.jpg", 
"https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600.webp", 
"https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
"https://buenazo.cronosmedia.glr.pe/original/2020/10/06/5f7cba758b84af0f30028b33.jpg",]

function createBoard(numFilas, numColumnas) {
    const numElementosArregloTemporal = (numFilas * numColumnas / 2)
    const arrSimbolosTemporal = []
    for (let i = 0; i < numElementosArregloTemporal; i++) {
        arrSimbolosTemporal.push(simbolosDisponibles[i])
        arrSimbolosTemporal.push(simbolosDisponibles[i])
    }

    const rows = []

    for (let i = 0; i < numFilas; i++) {
        const casillas = []

        for (let j = 0; j < numColumnas; j++) {
            const posicionAlAzar = Math.floor(
                Math.random() * arrSimbolosTemporal.length
            )

            const simboloElegido = arrSimbolosTemporal[posicionAlAzar]
            arrSimbolosTemporal.splice(posicionAlAzar, 1)

            const dataCasilla = {
                simbolo: simboloElegido,
                visible: true
            }
            casillas.push(dataCasilla)
        }
        rows.push(casillas)
    }
    return rows
}

function printBoard(board) {
    let filaStr = ""
    for (let fila of board) {
        for (let casilla of fila) {
            if (casilla.visible == true) {
                filaStr = filaStr + casilla.simbolo + " "
            } else {
                filaStr = filaStr + "-" + " "
            }

        }
        filaStr += "\n"
    }
    console.log(filaStr)
}

function crearDivFila() {
    const divFila = document.createElement("div")
    divFila.setAttribute("class", "row")

    return divFila
}

function crearDivColumna(simbolo, visible) {
    const divColumna = document.createElement("div")
    divColumna.setAttribute("class", "col")

    const divBut = document.createElement("button")
    divBut.setAttribute("type", "button")
    divBut.setAttribute("class", "btn btn-light")
    divBut.setAttribute("style", "font-size: 40px;")

    const divImg = document.createElement("img")
    divImg.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG")
    divBut.appendChild(divImg)

    divColumna.appendChild(divBut)
    return divColumna
}

function renderizarBoard(board) {
    const divBoard = document.getElementById("board")
    divBoard.innerHTML = ""

    for (let i = 0; i < board.length; i++) {
        const fila = board[i]
        const divFila = crearDivFila()
        for (let j = 0; j < fila.length; j++) {
            const casilla = fila[j]
            const divColumna = crearDivColumna(i, j, casilla.simbolo, casilla.visible)
            divFila.appendChild(divColumna)
        }
        divBoard.appendChild(divFila)
    }
}


function main() {
    board = createBoard(5, 6)
    printBoard(board)
    renderizarBoard(board)
}

main()