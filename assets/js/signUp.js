function NewCoder (nombre,apellido,correo,contrasena){
  this.nombre = nombre;
  this.apellido = apellido;
  this.correo = correo;
  this.contrasena = contrasena;
}

function validateOnlyLetters(){
  var keyCode = event.keyCode;
  (keyCode >= 97 && keyCode <= 122 || keyCode >= 65 && keyCode <= 90 || keyCode == 39 || keyCode == 32)? (event, event.target.nextElementSibling.innerText = ""):(event.preventDefault(), event.target.nextElementSibling.innerText = "*Sólo ingrese letras*");
}

function validateEmail(email){
  var expEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  event.target.nextElementSibling.innerText = (!expEmail.test(email))? "*Ingrese un caracter válido*" : "";

}

function required(user, spanErrorMessage, email){
  if(user.nombre.trim().length == 0 || user.apellido.trim().length == 0 || user.correo.trim().length == 0 || user.contrasena.trim().length == 0){
    spanErrorMessage.innerHTML = "*Todos los campos son obligatorios*";
  }else {
    spanErrorMessage.innerHTML = "";
    localStorage.setItem("coder1", JSON.stringify(user));
    window.location.assign("profile.html");
  }
}


window.addEventListener("load", function(){
  var inpName = document.getElementById("name");
  var inpLastName = document.getElementById("lastName");
  var inpEmail = document.getElementById("email");
  var inpPass = document.getElementById("pass");

  var spanMessage = document.getElementById("spanMessage");
  var spanEmail = document.getElementById("spanEmail");
  var spanPass = document.getElementById("spanPass");

  var expEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var expPass = /\S{6-20}/;
  document.getElementById("signUpForm").addEventListener("submit", function(){
    event.preventDefault();
  });

  document.getElementById("return").addEventListener("click", function(){
    window.location.assign("index.html");
  });

  inpName.addEventListener("keypress", validateOnlyLetters);
  inpLastName.addEventListener("keypress", validateOnlyLetters);

  document.getElementById("signUpUser").addEventListener("click", function(){
    var usuario = new NewCoder(inpName.value, inpLastName.value, inpEmail.value, inpPass.value);
  //   spanEmail.innerHTML = (!expEmail.test(inpEmail.value))? "*Todos los campos son obligatorios*" : spanMessage.innerHTML = ""
  //   console.log(inpEmail.value);
  //  (expPass.test(inpPass.value) == false)? spanPass.innerText = "*Ingrese en 6 y 20 caracteres*" : spanPass.innerText = "";
    required(usuario, spanMessage);
  })
});
