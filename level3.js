function login() {
  var city = document.getElementById("city").value;
  var adjective1 = document.getElementById("adjective1").value;
  var adjective2 = document.getElementById("adjective2").value;
  var color = document.getElementById("color").value;
  var cartoon = document.getElementById("cartoon").value;
  var place = document.getElementById("place").value;
  location.href='level3Result.html?'+'city=' + encodeURI(city)+'&adjective1=' + encodeURI(adjective1)+'&adjective2=' + encodeURI(adjective2)+'&color=' + encodeURI(color)+'&cartoon=' + encodeURI(cartoon)+'&place=' + encodeURI(place);
}
