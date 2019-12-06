function madLib() {

  var loc = location.href;
  var n1 = loc.length;
  var n2 = loc.indexOf('adjective1=')
  var n3 = loc.indexOf('adjective2=')
  var n4 = loc.indexOf('bird=');
  var n5 = loc.indexOf('room=')
  var n6 = loc.indexOf('verb1=')
  var n7 = loc.indexOf('verb2=')
  var n8 = loc.indexOf('name=')
  var n9 = loc.indexOf('noun1=')
  var n10 = loc.indexOf('liquid=')
  var n11 = loc.indexOf('verb3=')
  var n12 = loc.indexOf('body=')
  var n13 = loc.indexOf('noun2=')
  var n14 = loc.indexOf('verb4=')
  var n15 = loc.indexOf('noun3=')
  var adjective1 = decodeURI(loc.substr(n2 + 11, n3 - n2 - 12));
  var adjective2 = decodeURI(loc.substr(n3 + 11, n4 - n3 - 12));
  var bird = decodeURI(loc.substr(n4 + 5, n5 - n4 - 6));
  var room = decodeURI(loc.substr(n5 + 5, n6 - n5 - 6));
  var verb1 = decodeURI(loc.substr(n6 + 6, n7 - n6 - 7));
  var verb2 = decodeURI(loc.substr(n7 + 6, n8 - n7 - 7));
  var name = decodeURI(loc.substr(n8 + 5, n9 - n8 - 6));
  var noun1 = decodeURI(loc.substr(n9 + 6, n10 - n9 - 7));
  var liquid = decodeURI(loc.substr(n10 + 7, n11 - n10 - 8));
  var verb3 = decodeURI(loc.substr(n11 + 6, n12 - n11 - 7));
  var body = decodeURI(loc.substr(n12 + 5, n13 - n12 - 6));
  var noun2 = decodeURI(loc.substr(n13 + 6, n14 - n13 - 7));
  var verb4 = decodeURI(loc.substr(n14 + 6, n15 - n14 - 7));
  var noun3 = decodeURI(loc.substr(n15 + 6, n1 - n15));


  var sentence = "It was a " + adjective1 + ", cold December day. I woke up to the " + adjective2 + " smell of " + bird + " roasting in the " + room + " downstairs. I " + verb1 + " down the stairs to see if I could help " + verb2 + " the dinner. My mom said, See if " + name + " needs a fresh " + noun1 + ". So I carried a tray of glasses full of " + liquid + " into the " + verb3 + " room. When I got there, I could not believe my " + body + "! There were " + noun2 + " " + verb4 + " on the " + noun3 + "!";

  var sentence2 = "Oops! Oops! Oops! Please fill in all fields before create the story.";

  if (adjective1 && adjective2 && bird && room && verb1 && verb2 && name && noun1 && liquid && verb3 && body && noun2 && verb4 && noun3) {
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
