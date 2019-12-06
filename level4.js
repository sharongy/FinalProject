function login() {
  var adjective1 = document.getElementById("adjective1").value;
  var noun1 = document.getElementById("noun1").value;
  var adjective2 = document.getElementById("adjective2").value;
  var adjective3 = document.getElementById("adjective3").value;
  var adjective4 = document.getElementById("adjective4").value;
  var noun2 = document.getElementById("noun2").value;
  var noun3 = document.getElementById("noun3").value;
  var number = document.getElementById("number").value;
  var animal1 = document.getElementById("animal1").value;
  var food = document.getElementById("food").value;
  var adjective5 = document.getElementById("adjective5").value;
  var animal2 = document.getElementById("animal2").value;
  location.href = 'level4Result.html?' + 'adjective1=' + encodeURI(adjective1) + '&noun1=' + encodeURI(noun1) + '&adjective2=' + encodeURI(adjective2) + '&adjective3=' + encodeURI(adjective3) + '&adjective4=' + encodeURI(adjective4) + '&noun2=' + encodeURI(noun2) + '&noun3=' + encodeURI(noun3) + '&number=' + encodeURI(number) + '&animal1=' + encodeURI(animal1) + '&food=' + encodeURI(food) + '&adjective5=' + encodeURI(adjective5) + '&animal2=' + encodeURI(animal2);
}
