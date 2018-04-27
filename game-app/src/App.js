// -1 user / 0 empty  / 1 computer
let chessBoardMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];// define chess board, 9-square grid
let step = 0; // define step, total is 9.

/**
 * init chess UI
 * **/
export function initChessBoard() {
    var root = document.getElementById("root");
    let table = document.createElement("table");
    root.appendChild(table);
    [[0, 0, 0], [0, 0, 0], [0, 0, 0]].forEach((x, xInd) => {
        let tr = document.createElement("tr");
        table.appendChild(tr)
        x.forEach((y, yInd) => {
            let td = document.createElement("td");
            td.setAttribute("id", xInd + " " + yInd)
            td.setAttribute("x", xInd);
            td.setAttribute("y", yInd);
            td.addEventListener("click", handlePlayersDown);
            let text = document.createTextNode(" ");
            td.appendChild(text);
            tr.appendChild(td);
        })
    })
}

/**
 * handle player down event
 * **/
function handlePlayersDown(e) {
    let x = parseInt(e.target.getAttribute('x'));
    let y = parseInt(e.target.getAttribute('y'));

    if (chessBoardMatrix[x][y] == 0) {
        chessBoardMatrix[x][y] = -1;
        step++;
        update(x, y);

        if (win(x, y)) {
            addStatus("Players Win.");
            gameOver();
        } else if (isEnd()) {
            addStatus("Draw.");
            gameOver();
        } else {
            addStatus("Computer thinking.");
            handleComputerDown();
        }
    }
}


/**
 * handle player down event
 * **/
function handleComputerDown() {
    var b = best();
    var x = b.x;
    var y = b.y;
    chessBoardMatrix[x][y] = 1;
    step++;
    update(x, y);

    if (win(x, y)) {
        addStatus("Computer Win.");
        gameOver();
    } else if (isEnd()) {
        addStatus("Draw.");
        gameOver();
    } else {
        addStatus("Player thinking.");
    }
}

function best() {
    var bestx;
    var besty;
    var bestv = 0;
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            if (chessBoardMatrix[x][y] == 0) {
                chessBoardMatrix[x][y] = 1;
                step++;
                if (win(x, y)) {
                    step--;
                    chessBoardMatrix[x][y] = 0;
                    return {'x': x, 'y': y, 'v': 1000};
                } else if (isEnd()) {
                    step--;
                    chessBoardMatrix[x][y] = 0;
                    return {'x': x, 'y': y, 'v': 0};
                } else {
                    var v = worst().v;
                    step--;
                    chessBoardMatrix[x][y] = 0;
                    if (bestx == null || v >= bestv) {
                        bestx = x;
                        besty = y;
                        bestv = v;
                    }
                }
            }
        }
    }
    return {'x': bestx, 'y': besty, 'v': bestv};
}

function worst() {
    var bestx;
    var besty;
    var bestv = 0;
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            if (chessBoardMatrix[x][y] == 0) {
                chessBoardMatrix[x][y] = -1;
                step++;
                if (win(x, y)) {
                    step--;
                    chessBoardMatrix[x][y] = 0;
                    return {'x': x, 'y': y, 'v': -1000};
                } else if (isEnd()) {
                    step--;
                    chessBoardMatrix[x][y] = 0;
                    return {'x': x, 'y': y, 'v': 0};
                } else {
                    var v = best().v;
                    step--;
                    chessBoardMatrix[x][y] = 0;
                    if (bestx === null || v <= bestv) {
                        bestx = x;
                        besty = y;
                        bestv = v;
                    }
                }

            }
        }
    }
    return {'x': bestx, 'y': besty, 'v': bestv};
}


function win(x, y) {
    if (Math.abs(chessBoardMatrix[x][0] + chessBoardMatrix[x][1] + chessBoardMatrix[x][2]) == 3) {
        return true;
    }
    if (Math.abs(chessBoardMatrix[0][y] + chessBoardMatrix[1][y] + chessBoardMatrix[2][y]) == 3) {
        return true;
    }
    if (Math.abs(chessBoardMatrix[0][0] + chessBoardMatrix[1][1] + chessBoardMatrix[2][2]) == 3) {
        return true;
    }
    if (Math.abs(chessBoardMatrix[2][0] + chessBoardMatrix[1][1] + chessBoardMatrix[0][2]) == 3) {
        return true;
    }
    return false;
}

function isEnd() {
    return step >= 9;
}

function update(x, y) {
    var v = chessBoardMatrix[x][y];
    if (v > 0) {
        updateChessUI(x, y, 2);
    } else if (v < 0) {
        updateChessUI(x, y, 1);
    }
}

/**
 * update chess UI
 * type === 1 : Players;
 * type === 2 : computer
 * **/
function updateChessUI(x, y, type) {
    let currentElement = document.getElementById(x + " " + y);
    currentElement.removeEventListener('click',handlePlayersDown);

    if (type === 1) {
        if (currentElement.style.background !== 'red') {
            let text = document.createTextNode("X");
            currentElement.appendChild(text);
            currentElement.style.background = 'red'
        }
    }

    if (type === 2) {
        if (currentElement.style.background !== 'yellow') {
            let text = document.createTextNode("O");
            currentElement.appendChild(text);
            currentElement.style.background = 'yellow'
        }
    }

}

/**
 * add remind message
 * **/
function addStatus(text) {
    let currentElement = document.getElementById("status");
    currentElement.innerHTML = text;
}

/**
 * game over
 * **/
function gameOver() {
    alert("Game Over");
}
