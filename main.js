var pizzas = ["Double cheese pizza", "Extreme veggie pizza", "Chicken Tandoori Pizza"]
function AddPizza(){
    var newzpissa = document.getElementById("new_pizza_name").value;
    pizzas.push(newzpissa);
}
function showMenu(){
    pizzas.join("</li><br><li>");
    document.getElementById("cool").innerHTML = pizzas;
}