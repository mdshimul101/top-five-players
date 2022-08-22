
document.getElementById('player-1-btn').addEventListener('click', function () {
    setPlayer('player-1-name', 'player-list');
    buttonDisible('player-1-btn');
})
document.getElementById('player-2-btn').addEventListener('click', function () {
    setPlayer('player-2-name', 'player-list');
    buttonDisible('player-2-btn');
})
document.getElementById('player-3-btn').addEventListener('click', function () {
    setPlayer('player-3-name', 'player-list');
    buttonDisible('player-3-btn');
})
document.getElementById('player-4-btn').addEventListener('click', function () {
    setPlayer('player-4-name', 'player-list');
    buttonDisible('player-4-btn');
})
document.getElementById('player-5-btn').addEventListener('click', function () {
    setPlayer('player-5-name', 'player-list');
    buttonDisible('player-5-btn');
})
document.getElementById('player-6-btn').addEventListener('click', function () {
    setPlayer('player-6-name', 'player-list');
    buttonDisible('player-6-btn');
})

//Button Disible function
function buttonDisible(buttonId) {
    document.getElementById(buttonId).disabled = true;
    document.getElementById(buttonId).style.backgroundColor = "rgb(148 163 184)";
}


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
    if (totalPlayer > 5) {
        alert("You could not add player");
        return;
    }
    document.getElementById('total-player').innerText = totalPlayer;
    console.log(playerArray.length);
    document.getElementById(listId).appendChild(li);


    // const myNodelist = document.querySelectorAll("#player-list li");
    // const a = myNodelist.length;
    // console.log(a);



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