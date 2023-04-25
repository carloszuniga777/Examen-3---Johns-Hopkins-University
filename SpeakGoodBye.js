((window)=>{
  
  var speakWord = "Good Bye";
  
  let byeSpeaker = {};
  
  byeSpeaker.speak = (name)=>{
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;
  
})(window)

