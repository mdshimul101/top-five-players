// select btn
document.getElementById('player-1-btn').addEventListener('click', function () {
    setPlayer('player-1-name', 'player-list', 'player-1-btn');
})
document.getElementById('player-2-btn').addEventListener('click', function () {
    setPlayer('player-2-name', 'player-list', 'player-2-btn');

})
document.getElementById('player-3-btn').addEventListener('click', function () {
    setPlayer('player-3-name', 'player-list', 'player-3-btn');
})
document.getElementById('player-4-btn').addEventListener('click', function () {
    setPlayer('player-4-name', 'player-list', 'player-4-btn');
})
document.getElementById('player-5-btn').addEventListener('click', function () {
    setPlayer('player-5-name', 'player-list', 'player-5-btn');
})
document.getElementById('player-6-btn').addEventListener('click', function () {
    setPlayer('player-6-name', 'player-list', 'player-6-btn');

})
document.getElementById('player-7-btn').addEventListener('click', function () {
    setPlayer('player-7-name', 'player-list', 'player-7-btn');
})
document.getElementById('player-8-btn').addEventListener('click', function () {
    setPlayer('player-8-name', 'player-list', 'player-8-btn');
})
document.getElementById('player-9-btn').addEventListener('click', function () {
    setPlayer('player-9-name', 'player-list', 'player-9-btn');

})

// put playerName in array
const playerArray = [];

// set player
function setPlayer(playerId, listId, selectButton) {

    const li = document.createElement('li');
    li.innerText = document.getElementById(playerId).innerText;

    const playerName = document.getElementById(playerId).innerText;

    playerArray.push(playerName);
    const totalPlayer = playerArray.length;
    if (totalPlayer > 5) {
        alert("You could not add more than 5 player");
        playerArray.pop();
        return;
    }

    buttonDisible(selectButton);
    document.getElementById(listId).appendChild(li);
    document.getElementById('total-player').innerText = totalPlayer;


}

