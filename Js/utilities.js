//get input field value
function getValueById(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldValue = (parseFloat(inputField.value));
    return inputFieldValue;
}
//set text
function setTextElementValueById(elementId, value) {
    const findElement = document.getElementById(elementId);
    findElement.innerText = value;
}
//total playre cost
function totalPlayerCost(perPlayerCost) {
    const totalPlayer = numberOfPlayer();
    const totaPlayerCost = perPlayerCost * totalPlayer;
    return totaPlayerCost;
}


//Button Disible function
function buttonDisible(buttonId) {
    document.getElementById(buttonId).disabled = true;
    document.getElementById(buttonId).style.backgroundColor = "rgb(148 163 184)";
}

//Number of player
function numberOfPlayer() {
    const playerNumber = playerArray.length;
    return playerNumber;
}
