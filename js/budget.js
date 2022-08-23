
//Get input field value
function getInputFieldValue(elementField) {
    let inputFieldValue = parseInt(document.getElementById(elementField).value);
    return inputFieldValue;
}

//set text value
function setTextValue(elementField, textValue) {
    document.getElementById(elementField).innerText = textValue;
}


// Calculate Food Cost
document.getElementById('foodExpensesCalculation').addEventListener('click', function () {
    let perFoodBudgetField = getInputFieldValue("perFoodBudgetField");
    if (isNaN(perFoodBudgetField) || perFoodBudgetField < 0) {
        alert("Pleaes enter a valid cost")
        document.getElementById('perFoodBudgetField').value = "";
        return false;
    }

    let addedFoodNumber = foodBucket.length;

    if (addedFoodNumber == 0) {
        alert("Pleaes select some food")
        return false;
    }
    let expense = perFoodBudgetField * addedFoodNumber;
    setTextValue("foodExpense", expense);

});


// Calculate Total
document.getElementById('calculateTotal').addEventListener('click', function () {
    let shippingCost = getInputFieldValue('shippingCost');
    let cookingCost = getInputFieldValue('cookingCost');
    let foodExpense = document.getElementById('foodExpense').innerText;
    if (isNaN(shippingCost) || shippingCost < 0) {
        alert("Pleaes enter valid shipping cost")
        document.getElementById('shippingCost').value = "";
        return false;
    }

    if (isNaN(cookingCost) || cookingCost < 0) {
        alert("Pleaes enter valid cooking cost")
        document.getElementById('cookingCost').value = "";
        return false;
    }

    let addedFoodNumber = foodBucket.length;

    if (addedFoodNumber == 0) {
        alert("Pleaes select some food")
        return false;
    }


    let totalExpense = shippingCost + cookingCost + parseInt(foodExpense);
    setTextValue("subTotal", totalExpense);


});