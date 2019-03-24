var userGuess = function() {

    var answer = $('choice');
    var val= "";
    for (var i = 0, length = answer.length; i < length; i++) {
        if (answer[i].checked) {
           val = answer[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
      alert('please select choice answer');
    } else if ( val == "Scripting" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }
  };