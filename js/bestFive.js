
// Select Five Food
let foodBucket = [];
document.getElementById('allFood').addEventListener('click', function (e) {
    foodBucket.push(e.target.dataset.food);
    let foodList = document.getElementById('foodList');
    let foodItem = document.createElement('li');
    foodItem.classList = "list-group-item";

    if (foodBucket.length <= 5) {
        for (var i in foodBucket) {
            foodItem.innerText = foodBucket[i];
            foodList.appendChild(foodItem);
        }
    } else {
        alert("Can not add more than 5 food.");
    }
});

