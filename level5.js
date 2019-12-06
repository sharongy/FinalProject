function login() {
  var adjective1 = document.getElementById("adjective1").value;
  var adjective2 = document.getElementById("adjective2").value;
  var bird = document.getElementById("bird").value;
  var room = document.getElementById("room").value;
  var verb1 = document.getElementById("verb1").value;
  var verb2 = document.getElementById("verb2").value;
  var name = document.getElementById("name").value;
  var noun1 = document.getElementById("noun1").value;
  var liquid = document.getElementById("liquid").value;
  var verb3 = document.getElementById("verb3").value;
  var body = document.getElementById("body").value;
  var noun2 = document.getElementById("noun2").value;
  var verb4 = document.getElementById("verb4").value;
  var noun3 = document.getElementById("noun3").value;
  location.href = 'level5Result.html?' + 'adjective1=' + encodeURI(adjective1) + '&adjective2=' + encodeURI(adjective2) + '&bird=' + encodeURI(bird) + '&room=' + encodeURI(room) + '&verb1=' + encodeURI(verb1) + '&verb2=' + encodeURI(verb2) + '&name=' + encodeURI(name) + '&noun1=' + encodeURI(noun1) + '&liquid=' + encodeURI(liquid) + '&verb3=' + encodeURI(verb3) + '&body=' + encodeURI(body) + '&noun2=' + encodeURI(noun2) + '&verb4=' + encodeURI(verb4) + '&noun3=' + encodeURI(noun3);
}
