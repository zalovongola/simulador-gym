//simulado de rutina de gym
// Entregable 1 - curso Javasccript
// Zavala Gonzalo

// Datos para usar

const rutinas = {
pecho: ["Press banco plano","Aperturas con mancuernas","Cruce en polea","Press inclinado"],
espalda: ["Dominadas asistidas","Remo con barra", "Jalon al pecho", "Peso muerto convencional" ],
piernas:["Sentadilla", "Prensa", "Extensión de cuádriceps", "Curl femoral"],
hombros:["Press militar", "Elevaciones laterales", "Pájaros", "Encogimientos"],
brazos:	["Curl con barra", "Curl alternado", "Extensión de tríceps en polea", "Patada de tríceps"]
};


// Entrada
function elegirGrupo() {
  let grupo = prompt("Ingrese el grupo muscular (pecho, espalda, piernas, hombros o brazos):");

  // Si canceló el prompt, terminamos el programa
  if (grupo === null) {
    alert("Simulador cancelado. ¡Hasta luego!");
    return null;
  }

  grupo = grupo.toLowerCase();

   if (rutinas[grupo]) {
    return grupo;
  } else {
    alert("Grupo muscular no válido. Intente nuevamente.");
    return elegirGrupo(); // vuelve a pedir si se equivocó
  }
}

// Armado rutina

function generarRutina(grupo) {
  const ejercicios = rutinas[grupo];
  const rutinaSeleccionada = [];

  // Elegimos 3 ejercicios aleatorios (sin repetir) 
  while (rutinaSeleccionada.length < 3) {
    const random = Math.floor(Math.random() * ejercicios.length);
    const ejercicio = ejercicios[random];
    if (!rutinaSeleccionada.includes(ejercicio)) {
      rutinaSeleccionada.push(ejercicio);
    }
  }

  return rutinaSeleccionada;
}

// Enseñemos la rutina
function mostrarRutina(grupo, rutina) {
  let mensaje = `Rutina de ${grupo.toUpperCase()}:\n\n`;

  rutina.forEach((ej, i) => {
    mensaje += `${i + 1}. ${ej}\n`;
  });

  alert(mensaje);

  console.log("----- Rutina generada -----");
  rutina.forEach((ej, i) => console.log(`${i + 1}. ${ej}`));
  console.log("----------------------------");
}

// Main
function main() {
  alert("Bienvenido al simulador de rutinas de gimnasio 🏋️‍♂️");

  const grupoElegido = elegirGrupo();
  if (grupoElegido === null) return; // por si el usuario cancela

  const rutina = generarRutina(grupoElegido);
  mostrarRutina(grupoElegido, rutina);

  const repetir = confirm("¿Querés generar otra rutina?");
  if (repetir) main(); // volver a ejecutar
}

// Inicio
main();