
document.getElementById('player-1-btn').addEventListener('click', function () {
    setPlayer('player-1-name', 'player-1-btn');
})
document.getElementById('player-2-btn').addEventListener('click', function () {
    setPlayer('player-2-name', 'player-2-btn');

})
document.getElementById('player-3-btn').addEventListener('click', function () {
    setPlayer('player-3-name', 'player-3-btn');
})
document.getElementById('player-4-btn').addEventListener('click', function () {
    setPlayer('player-4-name', 'player-4-btn');
})
document.getElementById('player-5-btn').addEventListener('click', function () {
    setPlayer('player-5-name', 'player-5-btn');
})
document.getElementById('player-6-btn').addEventListener('click', function () {
    setPlayer('player-6-name', 'player-6-btn');

})

//Button Disible function
function buttonDisible(buttonId) {
    document.getElementById(buttonId).disabled = true;
    document.getElementById(buttonId).style.backgroundColor = "rgb(148 163 184)";
}

const playerArray = [];

function numberOfPlayer() {
    const playerNumber = playerArray.length;
    return playerNumber;
}

// set player
function setPlayer(playerId, selectButton) {

    const playerName = document.getElementById(playerId).innerText;

    playerArray.push(playerName);
    const totalPlayer = playerArray.length;
    if (totalPlayer > 5) {
        alert("You could not add player");
        playerArray.pop();
        return;
    }

    const tableBody = document.getElementById('players');
    tableBody.innerHTML = "";
    for (let i = 0; i < totalPlayer; i++) {
        const name = playerArray[i];

        const tr = document.createElement('tr');
        tr.innerHTML = `
               <th>${i + 1}.</th>
               <td>${name}</td>
            `;

        tableBody.appendChild(tr);

    }

    buttonDisible(selectButton);
    document.getElementById('total-player').innerText = totalPlayer;


}

