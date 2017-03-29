function validateUser(user, email, password, container, btnLogIn){
  console.log(user);
  console.log(user.correo);
  if(user.correo == email && user.contrasena == password){
    window.location.assign("profile.html");
  }else{
    var btnSignInAgain = document.createElement("BUTTON");
    btnSignInAgain.setAttribute("id", "signInAgain")
    btnSignInAgain.appendChild(document.createTextNode("Si estoy registrado"));
    btnSignInAgain.addEventListener("click", function(){
      container.appendChild(btnLogIn);
      container.removeChild(btnSignInAgain);
      container.removeChild(btnSignUp);
    });

    var btnSignUp = document.createElement("BUTTON");
    btnSignUp.appendChild(document.createTextNode("Regístrate"));
    container.appendChild(btnSignInAgain);
    container.appendChild(btnSignUp);
    container.removeChild(btnLogIn);
  }
}


window.addEventListener("load", function(){
  var userEmail = document.getElementById("inpEmail");
  var userPass = document.getElementById("inpPass");
  var form = document.getElementById("signInForm");
  var btnSignIn = document.getElementById("btnLogIn");

  form.addEventListener("submit", function(){
    event.preventDefault();
  });

  btnSignIn.addEventListener("click", function(){
    var UserObject = JSON.parse(localStorage.getItem("coder1"));
    validateUser(UserObject, userEmail.value, userPass.value, form, btnSignIn);
  });
});
