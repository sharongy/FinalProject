function login() {
  var verb = document.getElementById("verb").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;
  location.href = 'level1Result.html?' + 'verb=' + encodeURI(verb) + '&adjective=' + encodeURI(adjective) + '&noun=' + encodeURI(noun);
}
