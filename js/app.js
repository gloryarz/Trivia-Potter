//Se inician variables con etiquetas de los id del HTML
var inicio = document.getElementById('inicio')
var jugar = document.getElementById('jugar')
var noJuego = document.getElementById('noJuego')
var muggle = document.getElementById('muggle')
var resultados = document.getElementById('resultados')
var respuestas = document.getElementById('respuestas')
var incorrectos = document.getElementById('incorrectos')

// Contadores correcto e incorrecto
var contador = 0;
var incorrecto = 0;

/*  El usuario introduce su nombre, se borra pantalla de incio,
se imprime saludo más nombre, quieres jugar */
function iniciar() {
  var name = document.getElementById('name');
  insert.innerHTML= "¡Hola " + name.value + "!";
  inicio.style.display = "none";
  jugar.style.display = "block";
}

/*  El usuario no quiere jugar, se muestra pantalla de despedida */
function noJuega() {
  jugar.style.display = "none";
  insert.style.display = "none";
  noJuego.style.display = "block";
  muggle.innerHTML = name.value;
}


/*  El usuario quiere jugar, se muestran preguntas */
function siJuega() {
  jugar.style.display = "none";
  insert.style.display = "none";
  pregunta1.style.display = "block";
}

// 1er pregunta
function respuesta1m () {
  pregunta1.style.display = "none";
  pregunta2.style.display = "block";
  incorrecto++;
}

function respuesta1b () {
  pregunta1.style.display = "none";
  pregunta2.style.display = "block";
  contador++;
}

// 2da pregunta
function respuesta2m () {
  pregunta2.style.display = "none";
  pregunta3.style.display = "block";
  incorrecto++;
}

function respuesta2b () {
  pregunta2.style.display = "none";
  pregunta3.style.display = "block";
  contador++;
}

// 3era pregunta
function respuesta3m () {
  pregunta3.style.display = "none";
  pregunta4.style.display = "block";
  incorrecto++;
}

function respuesta3b () {
  pregunta3.style.display = "none";
  pregunta4.style.display = "block";
  contador++;
}

// 4ta pregunta
function respuesta4m () {
  pregunta4.style.display = "none";
  pregunta5.style.display = "block";
  incorrecto++;

}

function respuesta4b () {
  pregunta4.style.display = "none";
  pregunta5.style.display = "block";
  contador++;

}

// 5ta pregunta, se muestran respuestas
function respuesta5 () {
  pregunta4.style.display = "none";
  pregunta5.style.display = "none";
  respuestas.style.display = "block";
  resultados.style.display = "block";
  incorrectos.style.display = "block";
  var harry = document.getElementById('harry').value.toLowerCase();
  if (harry == "james") {
    contador++;
  } else {
    incorrecto++;
  }
  resultados.innerHTML = contador;
  incorrectos.innerHTML = incorrecto;
}
