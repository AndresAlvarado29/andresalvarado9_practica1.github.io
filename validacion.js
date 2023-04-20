function validar() {
  var input = document.getElementById("nombre");
  var input2 = document.getElementById("apellido");
  var input3 = document.getElementById("correo");
  var input4 = document.getElementById("celular");
  var input5 = document.getElementById("calle");
  if (input.value.trim() === ""||input2.value.trim() === ""||input3.value.trim() === ""||input4.value.trim() === "" || input5.value.trim()==="" ) {
    alert("El campo no puede estar vacío.");
    return false;
  }
  validarCorreo();
  validarCelular();
  validarT();
  return true;
}

function validarCorreo(){
  var input=document.getElementById("correo");
  var valor= input.value.trim();
  var expresionRegular=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!expresionRegular.test(valor)){
    alert("Debe ingresar una direccion de correo valida.")
  }
}

function validarCelular(){
var input = document.getElementById("celular");
var expresionRegular = /^\+[1-9]{1}[0-9]{3,14}$/;
var valor2 = input.value.trim();
if (isNaN(valor2)&&!expresionRegular.test(valor2)) {
  alert("Debe ingresar un número válido.");
}
}
function validarT(){
  var input = document.getElementById("nombre");
  var input2 = document.getElementById("apellido");
    var expresionRegular = /^[^\d]+$/;
    var valor3=input.value.trim();
    if (!expresionRegular.test(valor3)) {
      alert("Debe ingresar un número válido.");
    }
  
}




