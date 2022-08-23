
// Select Five Food
let foodBucket = [];
document.getElementById('allFood').addEventListener('click', function (e) {
    let selectItem = e.target;

    if (selectItem.innerText == "Select") {
        console.log("foodBucket.length", foodBucket.length);
        if (foodBucket.length < 5) {
            foodBucket.push(e.target.dataset.food);
            let foodList = document.getElementById('foodList');
            let foodItem = document.createElement('li');
            foodItem.classList = "list-group-item";

            for (var i in foodBucket) {
                foodItem.innerText = foodBucket[i];
                foodList.appendChild(foodItem);
            }
            selectItem.disabled = true;
        } else {
            alert("Can not add more than 5 food.");
        }
    }
});

