function makePasswd(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@!()abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  var finalVal = result;
  document.getElementById("final").innerHTML = ("Password = " + " " + finalVal);
}
$("#myBtn").click(function() {
  var pressed = $("#myInput").val();
  if (pressed == "") {
    document.getElementById("final").innerHTML = ("Please enter the Password length you need!! Better to go with 6 or more!!")
  } else if (pressed >= 0 && pressed <= 5) {
    document.getElementById("final").innerHTML = ("Please choose a strong Password!!");
  } else if (pressed < 0) {
    document.getElementById("final").innerHTML = ("Please enter a valid input!!");
  } else if (pressed >= 17) {
    document.getElementById("final").innerHTML = ("Choose a current length for your Password!!");
  } else {
    makePasswd(pressed);
  }
});
