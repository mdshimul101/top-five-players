
document.getElementById('player-1-btn').addEventListener('click', function () {
    setPlayer('player-1-name', 'player-list');
    document.getElementById("player-1-btn").disabled = true;


})
document.getElementById('player-2-btn').addEventListener('click', function () {
    setPlayer('player-2-name', 'player-list');
    document.getElementById("player-1-btn").disabled = true;
})
document.getElementById('player-3-btn').addEventListener('click', function () {
    setPlayer('player-3-name', 'player-list');
    document.getElementById("player-1-btn").disabled = true;
})
const playerArray = [];

function setPlayer(playerId, listId) {
    const li = document.createElement('li');
    li.innerText = document.getElementById(playerId).innerText;
    const playerName = li.innerText;
    const playerObject = {
        playerName: playerName
    };
    playerArray.push(playerObject);
    const totalPlayer = playerArray.length;
    document.getElementById('total-player').innerText = totalPlayer;
    console.log(playerArray.length);
    document.getElementById(listId).appendChild(li);




}




/*
const playerArray1 = [];
function addPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerObject = {
        playerName: playerName
    };
    playerArray1.push(playerObject);
    console.log(playerArray1.length);


}
*/