let currentPlayer = "X";
let moves = ["", "", "", "", "", "", "", "", ""];

function makeMove(position) {
    if (moves[position] === "") {
        moves[position] = currentPlayer;
        document.getElementById(`btn${position}`).innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (moves[a] !== "" && moves[a] === moves[b] && moves[a] === moves[c]) {
            document.getElementById("result").innerText = `Jogador ${moves[a]} venceu!`;
            disableBoard();
            return;
        }
    }

    if (!moves.includes("")) {
        document.getElementById("result").innerText = "Empate!";
    }
}

function disableBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`btn${i}`).removeAttribute("onclick");
    }
}
