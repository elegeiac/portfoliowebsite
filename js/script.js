/*JavaScript of the website*/

//form validation 	
function check(){
	var fname = document.forms["message"]["firstName"].value;
	var lname = document.forms["message"]["lastName"].value;
	var mail=document.forms["message"]["email"].value;
	var phone=document.forms["message"]["phone"].value;
	var gender = document.forms["message"]["gender"].value;
	var message = document.forms["message"]["message"].value;
	//condition section
	if (fname == "" || lname == ""|| mail=="" || phone == ""|| gender==""|| message == ""){
		alert("Value missing. Please fill the form correctly.");
	}else {
		alert("Thank you for your message.");
	}
}

// To hide navbar on scroll down and show on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-48px";
  }
  prevScrollpos = currentScrollPos;
} 




