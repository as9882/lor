/* =====================================
   CAMBIO DE PANTALLAS
===================================== */

function cambiarPantalla(id) {

    document
        .querySelectorAll(".pantalla")
        .forEach(pantalla => {

            pantalla.classList.remove("activa");

        });

    document
        .getElementById(id)
        .classList.add("activa");

}


/* =====================================
   INICIO
===================================== */

function comenzar() {

    cambiarPantalla("cuenta");

    let numero = 3;

    const contador =
        document.getElementById("contador");

    contador.textContent = numero;

    const intervalo = setInterval(() => {

        numero--;

        if (numero > 0) {

            contador.textContent = numero;

        }

        else {

            clearInterval(intervalo);

            cambiarPantalla("mensajeInicial");

        }

    }, 1000);

}


/* =====================================
   SELECCIÓN
===================================== */

function mostrarSeleccion() {

    cambiarPantalla("seleccion");

}


/* =====================================
   MENSAJES DE PERSONAJES
===================================== */

const mensajes = {

    bonnie: {

        nombre: "BONNIE",

        imagen: "img/bonnie.png",

        texto:
            "Quiero que nunca olvides que siempre voy a admirar todo el esfuerzo que haces cada día. Estoy muy orgulloso de ti."

    },


    foxy: {

        nombre: "FOXY ♥",

        imagen: "img/foxy.png",

        texto:
            "Este tenía que ser especial para ti. Nunca te rindas, Mon amour. Sé que puedes conseguir todo aquello que te propongas. Yo creo muchísimo en ti."

    },


    freddy: {

        nombre: "FREDDY",

        imagen: "img/freddy.png",

        texto:
            "Me da muchísimo gusto saber que estás bien. Quiero verte feliz, tranquila y disfrutando cada momento. Te amo demasiado."

    },


    chica: {

        nombre: "CHICA",

        imagen: "img/chica.png",

        texto:
            "Hay muchísimas cosas que amo de ti, pero sobre todo amo la persona que eres. Y siempre voy a estar orgulloso de ti."

    }

};


function mostrarMensaje(personaje) {

    const datos =
        mensajes[personaje];

    document
        .getElementById("tituloPersonaje")
        .textContent = datos.nombre;

    document
        .getElementById("textoPersonaje")
        .textContent = datos.texto;

    document
        .getElementById("imagenPersonaje")
        .src = datos.imagen;

    cambiarPantalla("mensajePersonaje");

}


function volverSeleccion() {

    cambiarPantalla("seleccion");

}


/* =====================================
   PLAYLIST
===================================== */

const canciones = [

    {
        nombre: "Eres Ese Algo",
        artista: "Nuestra canción",
        archivo: "music/eres-ese-algo.mp3"
    },

    {
        nombre: "Hasta la Muerte",
        artista: "Nuestra canción",
        archivo: "music/hasta-la-muerte.mp3"
    },

    {
        nombre: "POV",
        artista: "Robleis",
        archivo: "music/pov.mp3"
    }

];


function mostrarPlaylist() {

    cambiarPantalla("playlist");

}


function reproducirCancion(numero) {

    const cancion =
        canciones[numero];

    const audio =
        document.getElementById("audio");

    document
        .getElementById("nombreCancion")
        .textContent = cancion.nombre;

    document
        .getElementById("artistaCancion")
        .textContent = cancion.artista;

    audio.src = cancion.archivo;

    audio.play().catch(() => {

        console.log(
            "El navegador requiere interacción para reproducir el audio."
        );

    });

}


/* =====================================
   FOTOS
===================================== */

function mostrarFotos() {

    const audio =
        document.getElementById("audio");

    audio.pause();

    cambiarPantalla("fotos");

}


/* =====================================
   SELECCIÓN FINAL
===================================== */

function mostrarSeleccionFinal() {

    cambiarPantalla("seleccionFinal");

}


/* =====================================
   DEDICACIÓN
===================================== */

function mostrarDedicacion() {

    cambiarPantalla("dedicacion");

}


/* =====================================
   CARTA FINAL
===================================== */

function mostrarCarta() {

    cambiarPantalla("carta");

}