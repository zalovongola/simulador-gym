//simulado de rutina de gym
// Entregable 1 - curso Javascript
// Zavala Gonzalo

// Datos para usar

let historial = JSON.parse(localStorage.getItem("historialRutinas")) || [];
const selectGrupo = document.getElementById("grupo");
const btnGenerar = document.getElementById("btn-generar");
const divResultado = document.getElementById("resultado");

const rutinas = {
    pecho: ["Press banco plano","Aperturas con mancuernas","Cruce en polea","Press inclinado"],
    espalda: ["Dominadas asistidas","Remo con barra", "Jalon al pecho", "Peso muerto convencional" ],
    piernas:["Sentadilla", "Prensa", "Extensión de cuádriceps", "Curl femoral"],
    hombros:["Press militar", "Elevaciones laterales", "Pájaros", "Encogimientos"],
    brazos:	["Curl con barra", "Curl alternado", "Extensión de tríceps en polea", "Patada de tríceps"]
};


// armado de rutina
function generarRutina(grupo){
    const ejercicios = rutinas[grupo];
    const rutinaSeleccionada = [];

    while (rutinaSeleccionada.length < 3) {
        const random = Math.floor(Math.random() * ejercicios.length);
        const ejercicio = ejercicios[random];
        if (!rutinaSeleccionada.includes(ejercicio)) {
            rutinaSeleccionada.push(ejercicio);
        }
    }

    return rutinaSeleccionada;
}

// mostrar rutina en pantalla
function mostrarRutina(grupo, lista) {
    let html =  `<h2>Rutina de ${grupo.toUpperCase()}</h2>`;
    html += "<ul>";

    lista.forEach((ej) => {
        html += `<li>${ej}</li>`;
    });

    html += "</ul>";

    divResultado.innerHTML = html;
}


//evento con el mouse
btnGenerar.addEventListener("click", () => {
    const grupo = selectGrupo.value;

    if (grupo === "") {
        divResultado.innerHTML = "<p style='color:red'>Por favor seleccioná un grupo muscular.</p>";
        return;
    }

    const rutina = generarRutina(grupo);
    mostrarRutina(grupo, rutina);

    // 🔥 TAREA 2: Guardar la rutina generada en el historial
    historial.push({ grupo, rutina });
    localStorage.setItem("historialRutinas", JSON.stringify(historial));
});
