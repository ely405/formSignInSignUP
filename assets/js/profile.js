function editButton(object, paragraph){
  console.log(event.target.firstChild);
  if(event.target.firstChild.nodeValue === "Editar perfil"){
    event.target.innerText = "Guardar";
    for (var i = 0; i < paragraph.length; i++) {
      var textEdit = paragraph[i].childNodes[1].innerHTML;
      var inputEditText = document.createElement("INPUT");
      inputEditText.value = textEdit;
      paragraph[i].replaceChild(inputEditText, paragraph[i].childNodes[1]);
    }
  }else if(event.target.firstChild.nodeValue === "Guardar"){
    event.target.innerHTML = "Editar perfil";
    for (var i = 0; i < paragraph.length; i++) {
      var textNewSpan = paragraph[i].childNodes[1].value;
      var newSpan = document.createElement("SPAN");
      newSpan.classList.add("dataSpan");
      newSpan.innerHTML = textNewSpan;
      paragraph[i].replaceChild(newSpan, paragraph[i].childNodes[1]);
    }
    object.nombre = paragraph[0].childNodes[1].innerHTML;
    object.apellido = paragraph[1].childNodes[1].innerHTML;
    object.correo = paragraph[2].childNodes[1].innerHTML;
    object.contrasena = paragraph[3].childNodes[1].innerHTML;
    localStorage.setItem("coder1", JSON.stringify(object));

  }
}



window.addEventListener("load", function(){
  var coderObject = JSON.parse(localStorage.getItem("coder1"));
  console.log(coderObject);
  var spanCoderName = document.getElementById("coderName");
  var spanCoderLastName = document.getElementById("coderLastName");
  var spanCoderEmail = document.getElementById("coderEmail");
  var spanCoderPass= document.getElementById("coderPass");

  var paragraphList = document.getElementsByTagName("P");
  console.log(paragraphList);

  spanCoderName.innerText = coderObject.nombre;
  spanCoderLastName.innerText = coderObject.apellido;
  spanCoderEmail.innerText = coderObject.correo;
  spanCoderPass.innerText = coderObject.contrasena;

  document.getElementById("editProfile").addEventListener("click", function(){
    editButton(coderObject, paragraphList);
  });

})
