var boton = document.getElementById('boton');

boton.addEventListener('click', function () {
  var elemento = document.getElementById('miLetra');
  if (elemento.classList.contains('content')) {
    elemento.classList.remove('content');
    elemento.classList.add('presentacion');
    var palabra = document.getElementById('palabra');
    palabra.remove();
    var palabra = document.getElementById('palabra2');
    palabra.remove();
    var span1 = document.createElement('span');
    span1.innerHTML = 'Bienvenido';
    span1.id='span1';
    elemento.appendChild(span1);
    var divi = document.createElement('div');
    divi.className = 'message';
    divi.id='divi';
    var divi2 = document.createElement('div');
    divi2.className = 'word1';
    divi2.innerHTML = 'compra';
    var divi3 = document.createElement('div');
    divi3.className = 'word2';
    divi3.innerHTML = 'vende';
    var divi4 = document.createElement('div');
    divi4.className = 'word3';
    divi4.innerHTML = 'crea';
    divi.appendChild(divi4);
    divi.appendChild(divi3);
    divi.appendChild(divi2);
    elemento.appendChild(divi);
  } else if (elemento.classList.contains('presentacion')) {
    elemento.classList.remove('presentacion');
    var span1 = document.getElementById('span1');
    span1.remove();
    var divi = document.getElementById('divi')
    divi.remove();
    elemento.classList.add('content');
    var palabra2 = document.createElement('h2');
    palabra2.id = 'palabra';
    palabra2.innerHTML = 'Bienvenidos';
    var palabra3 = document.createElement('h2');
    palabra3.id = 'palabra2';
    palabra3.innerHTML = 'Bienvenidos';
    elemento.appendChild(palabra2);
    elemento.appendChild(palabra3);
  } else {
    elemento.classList.add('content');
  }
});
