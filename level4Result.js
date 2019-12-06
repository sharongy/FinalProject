function madLib() {

  var loc = location.href;
  var n1 = loc.length;
  var n2 = loc.indexOf('adjective1=')
  var n3 = loc.indexOf('noun1=')
  var n4 = loc.indexOf('adjective2=');
  var n5 = loc.indexOf('adjective3=')
  var n6 = loc.indexOf('adjective4=')
  var n7 = loc.indexOf('noun2=')
  var n8 = loc.indexOf('noun3=')
  var n9 = loc.indexOf('number=')
  var n10 = loc.indexOf('animal1=')
  var n11 = loc.indexOf('food=')
  var n12 = loc.indexOf('adjective5=')
  var n13 = loc.indexOf('animal2=')
  var adjective1 = decodeURI(loc.substr(n2 + 11, n3 - n2 - 12));
  var noun1 = decodeURI(loc.substr(n3 + 6, n4 - n3 - 7));
  var adjective2 = decodeURI(loc.substr(n4 + 11, n5 - n4 - 12));
  var adjective3 = decodeURI(loc.substr(n5 + 11, n6 - n5 - 12));
  var adjective4 = decodeURI(loc.substr(n6 + 11, n7 - n6 - 12));
  var noun2 = decodeURI(loc.substr(n7 + 6, n8 - n7 - 7));
  var noun3 = decodeURI(loc.substr(n8 + 6, n9 - n8 - 7));
  var number = decodeURI(loc.substr(n9 + 7, n10 - n9 - 8));
  var animal1 = decodeURI(loc.substr(n10 + 8, n11 - n10 - 9));
  var food = decodeURI(loc.substr(n11 + 5, n12 - n11 - 6));
  var adjective5 = decodeURI(loc.substr(n12 + 11, n13 - n12 - 12));
  var animal2 = decodeURI(loc.substr(n13 + 8, n1 - n13));


  var sentence = "The zoo is a " + adjective1 + " place to learn about different types of " + noun1 + ". There are " + adjective2 + " animals and " + adjective3 + " animals there. Some of the animals are as " + adjective4 + " as a " + noun2 + "! There are baby " + noun3 + " who were born " + number + " days ago, a petting zoo where you can feed the " + animal1 + " " + food + ", and a " + adjective5 + " pool where " + animal2 + " go swimming.";

  var sentence2 = "Oops! Oops! Oops! Please fill in all fields before create the story.";

  if (adjective1 && noun1 && adjective2 && adjective3 && adjective4 && noun2 && noun3 && number && animal1 && food && adjective5 && animal2) {
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
