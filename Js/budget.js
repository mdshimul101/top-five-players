
//calculate btn
document.getElementById('player-total-cost-btn').addEventListener('click', function () {
    const perPlayerCost = getValueById('player-cost');
    if (isNaN(perPlayerCost)) {
        alert("Enter Player Cost");
        return;
    }
    const playerCost = totalPlayerCost(perPlayerCost);
    console.log(perPlayerCost);
    setTextElementValueById('set-player-cost', playerCost);

})

// calculate total btn
document.getElementById('total-cost-btn').addEventListener('click', function () {
    const perPlayerCost = getValueById('player-cost');
    const playerCost = totalPlayerCost(perPlayerCost);


    const managerCost = getValueById('manager-cost');
    const coachCost = getValueById('coach-cost');
    if (isNaN(perPlayerCost) || isNaN(managerCost) || isNaN(coachCost)) {
        alert("Add cost");
        return;
    }

    const totalCost = playerCost + managerCost + coachCost;

    setTextElementValueById('set-total-cost', totalCost);

})

clearInputField('player-cost');
clearInputField('manager-cost');
clearInputField('coach-cost');

//clear input field
function clearInputField(elementId) {
    const inputField = document.getElementById(elementId).value = '';
}

