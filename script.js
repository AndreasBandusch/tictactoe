let fields = [];
let currentShape = 'cross'
let gameOver = false;
let unentsch = 0;


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.add('player-inaktive');
            document.getElementById('player-2').classList.remove('player-inaktive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inaktive');
            document.getElementById('player-2').classList.add('player-inaktive');
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none');
        }
    }
}


function checkForWin() {
    let winner = gameLogic();
    if (winner) {
        showWinnerScreen();
    }
    if (fields.filter(String).length == 9) {
        showDrawScreen();
    }

}

function showWinnerScreen() {
    gameOver = true;
    setTimeout(function () {
        document.getElementById('game-over').classList.remove('d-none');
        document.getElementById('game-over').classList.add('game-over');
        document.getElementById('game-panel').classList.add('make-transparent');
        document.getElementById('player-panel').classList.add('make-transparent');
        // document.getElementById('restart-btn').classList.remove('d-none');
    }, 1000);
}


function showDrawScreen() {
    alert('Spiel unentschieden');
}


function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    for (let i = 0; i < 8; i++) {
        document.getElementById('line-' + i).style.transform = 'scaleX(0.0)'
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}