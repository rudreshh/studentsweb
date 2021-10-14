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

  var s1= document.getElementById("star-1").checked;
  var s2= document.getElementById("star-2").checked;
  var s3= document.getElementById("star-3").checked;
  var s4= document.getElementById("star-4").checked;
  var s5= document.getElementById("star-5").checked;
  if(s1||s2||s3||s4||s5){
    var x =true;
  }
  else{
    var x = false;
  }
  if(x==false){


    alert("Please rate us");
    }

}
