function madLib() {

  var loc = location.href;
  var n1 = loc.length;
  var n2 = loc.indexOf('verb=')
  var n3 = loc.indexOf('adjective=')
  var n4 = loc.indexOf('noun=');
  var verb = decodeURI(loc.substr(n2 + 5, n3 - n2 - 6)); 
  var adjective = decodeURI(loc.substr(n3 + 10, n4 - n3 - 11));
  var noun = decodeURI(loc.substr(n4 + 5, n1 - n4));

  var sentence = "I " + verb + " my " + adjective + " " + noun + ". What should I do?"

  var sentence2 = "Oops! Oops! Oops! Please fill in all fields before create the story.";

  if (verb && adjective && noun) {
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
