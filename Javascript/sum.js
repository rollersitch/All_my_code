

function fearNotLetter(str) {
  var mystr = str.split('');
  var i;
  for(i = 0; i < mystr.length; i++) {
    //return mystr[i+1];
    //var i = 0;
    
    if( (mystr[i].charCodeAt(0) + 1) === (mystr[i+1].charCodeAt(0)) ) {

      continue;
    }
    else {
      break;
    }
    
    if(i === mystr.length-1) { return undefined;}
    
    return String.fromCharCode(mystr[i].charCodeAt(0) - 1);
    
  }
  
}

fearNotLetter("abcd");