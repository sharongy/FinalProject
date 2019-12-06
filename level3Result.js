function madLib() {
  
  var loc = location.href;
  var n1 = loc.length;
  var n2 = loc.indexOf('city=')
  var n3 = loc.indexOf('adjective1=')
  var n4 = loc.indexOf('adjective2=');
  var n5 = loc.indexOf('color=')
  var n6 = loc.indexOf('cartoon=')
  var n7 = loc.indexOf('place=')
  var city = decodeURI(loc.substr(n2 + 5, n3 - n2 - 6));
  var adjective1 = decodeURI(loc.substr(n3 + 11, n4 - n3 - 12));
  var adjective2 = decodeURI(loc.substr(n4 + 11, n5 - n4 - 12));
  var color = decodeURI(loc.substr(n5 + 6, n6 - n5 - 7));
  var cartoon = decodeURI(loc.substr(n6 + 8, n7 - n6 - 9));
  var place = decodeURI(loc.substr(n7 + 6, n1 - n7));


  var sentence = city + " is so exciting! Everything is so " + adjective1 + "! All the buildings are " + adjective2 + " and there is a big river that is " + color + ". I can't wait to see " + cartoon + " at the " + place + ".";

  var sentence2 = "Oops! Oops! Oops! Please fill in all fields before create the story.";

  if (city && adjective1 && adjective2 && color && cartoon && place) {
    document.getElementById("content").innerText = sentence;
  } else {
    document.getElementById("content").innerText = sentence2;
  }
}

function sayIt() {
  var content = document.getElementById("content").innerHTML;
  var contentVal = "";
  if (content) {
    contentVal = content;
  }
  var sayitBtn = document.getElementById("sayitBtn");
  speech = new SpeechSynthesisUtterance(contentVal);
  speechSynthesis.speak(speech);
}
