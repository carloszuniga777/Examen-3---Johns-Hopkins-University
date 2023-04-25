(()=>{

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (nombre of names) {

  let firstLetter = nombre.toLowerCase().charAt(0); 
  
  if (firstLetter == 'j') {
      byeSpeaker.speak(nombre);
  } else {
     helloSpeaker.speak(nombre);
  }
}
  
})()
