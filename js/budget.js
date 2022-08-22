
// Calculate Food Cost
document.getElementById('foodExpensesCalculation').addEventListener('click', function () {
    let foodExpense = document.getElementById('foodExpense');
    let perFoodBudgetField = document.getElementById('perFoodBudgetField').value;
    if (isNaN(parseInt(perFoodBudgetField))) {
        alert("Pleaes enter a valid number")
        document.getElementById('perFoodBudgetField').value = "";
        return false;
    }

    let addedFoodNumber = foodBucket.length;

    if (addedFoodNumber == 0) {
        alert("Pleaes select some food")
        return false;
    }
    console.log("addedFoodNumber", addedFoodNumber);
    console.log("perFoodBudgetField", perFoodBudgetField);
    foodExpense.innerText = parseInt(perFoodBudgetField) * addedFoodNumber;

});


// Calculate Total
document.getElementById('calculateTotal').addEventListener('click', function () {
    let subTotal = document.getElementById('subTotal');
    let shippingCost = document.getElementById('shippingCost').value;
    let cookingCost = document.getElementById('cookingCost').value;
    let foodExpense = document.getElementById('foodExpense').innerText;
    if (isNaN(parseInt(shippingCost))) {
        alert("Pleaes enter valid shipping cost")
        document.getElementById('shippingCost').value = "";
        return false;
    }

    if (isNaN(parseInt(cookingCost))) {
        alert("Pleaes enter valid cooking cost")
        document.getElementById('cookingCost').value = "";
        return false;
    }

    let addedFoodNumber = foodBucket.length;

    if (addedFoodNumber == 0) {
        alert("Pleaes select some food")
        return false;
    }

    subTotal.innerText = parseInt(shippingCost) + parseInt(cookingCost) + parseInt(foodExpense);

});