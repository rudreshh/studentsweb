var name = document.getElementById('name');
var email = document.getElementById('email');
var contact = document.getElementById('ContactNo');
// var sa= "asd";
// console.log(name);
// console.log(email);
// console.log(contact);
//
// function validation(){
//   if(name =="" || email =="" || contact =="" ){
//     alert("Please enter all the required field.");
//     return false;
//
//   }
// }

// document.querySelector("#send").addEventListener("click", validation())

function validation(){
  var x = document.getElementById("star-5").required;
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var contact = document.getElementById('ContactNo');

if(x==false || name=="" || email=="" || contact==""){
    alert("Please fill all the required fields");
  }
}
