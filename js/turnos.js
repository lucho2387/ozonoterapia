
var listaTurnos = [];

function agregarTurno(tnombre, tapellido, tcorreo, ttelefono, tdireccion, tlocalidad, tfecha, thora) {
    //Objeto
    var nuevoTurno = {
        nombre: tnombre,
        apellido: tapellido,
        correo: tcorreo,
        telefono: ttelefono,
        direccion: tdireccion,
        localidad: tlocalidad,
        fecha: tfecha,
        hora: thora
    };
    listaTurnos.push(nuevoTurno);
    //Almacenamos el turno en el localStorage
    almacenarJsonListaTurnos(listaTurnos);
}

function obtenerTurnos() {
    
    var listaAlmacenada = localStorage.getItem('listaTurnos');
    if (listaAlmacenada === null) {
        listaTurnos = [];
    } else {
        listaTurnos = JSON.parse(listaAlmacenada);
    }
    return listaTurnos;
}

function almacenarJsonListaTurnos(plista) {
    localStorage.setItem('listaTurnos', JSON.stringify(plista));
}

// function EliminarFila(r)
// {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById('tablaTurnos').deleteRow(i)
//  <td> <input type = "button" value = "Cancelar" onclick = "EliminarFila (this)"> </ td>
// }

let selector = document.getElementById("provincia");

let provincias = ["Seleccione la provincia", "Buenos Aires", "Capital Federal", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"];

//Funcion para agregar los turnos a la tabla
function agregarTurnosTabla() {
    var lista = obtenerTurnos(),
    tbody = document.querySelector("#tablaTurnos tbody");
    //limpiamos la tabla
    tbody.innerHTML = '';

    for (let i = 0; i < lista.length; i++){
        let row = document.createElement('TR');
    
        let celdaNombre = row.insertCell(0);
        let celdaApellido = row.insertCell(1);
        let celdaCorreo = row.insertCell(2);
        let celdaTelefono = row.insertCell(3);
        let celdaDireccion = row.insertCell(4);
        let celdaLocalidad = row.insertCell(5);
        let celdaFecha = row.insertCell(6);
        let celdaHora = row.insertCell(7);
        let celdaAcciones = row.insertCell(8);

        celdaNombre.innerHTML = lista[i].nombre;
        celdaApellido.innerHTML = lista[i].apellido;
        celdaCorreo.innerHTML = lista[i].correo;
        celdaTelefono.innerHTML = lista[i].telefono;
        celdaDireccion.innerHTML = lista[i].direccion;
        celdaLocalidad.innerHTML = lista[i].localidad;
        celdaFecha.innerHTML = lista[i].fecha;
        celdaHora.innerHTML = lista[i].hora;
        let eliminar = document.createElement('button');

        // //Asignando un id
        // eliminar.setAttribute("id", "botonCancelarTurno");

        //Asignando un clase al elemento
        eliminar.className = "botonCancelarTurno";
        eliminar.textContent = "Cancelar";
        celdaAcciones.appendChild(eliminar);
        // celdaAcciones.innerHTML =  `<div>
        //                                 <button class="btn btn-outline-primary" id="botonCancelarTurno">Cancelar</button>
        //                             </div>`;
                        
        tbody.appendChild(row);
        //Estilo del Boton
        $(".botonCancelarTurno").addClass("btn btn-outline-primary");
        //Boton Cancelar
        eliminar.addEventListener("click", (event) => {
            event.target.parentNode.parentNode.remove();
            $("#div3").show();
            $(document).ready(function() {
                setTimeout(function() {
                    //Animaciones fadeOut (Desaparece con una transicion)
                    $("#div3").fadeOut(500);
                }, 3000); 
            });
        })
    }

    
}

agregarTurnosTabla();

//Select
for (const provincia of provincias) {
    //CREACION DEL ELEMENTO OPTION PARA EL SELECT
    let opciones = document.createElement("option");
    //VALORES DEL ARRAY
    opciones.innerHTML = provincia;
    //AGREGAMOS LAS PROVINCIAS
    selector.appendChild(opciones);
}

let selectorHora = document.getElementById("horaTurno");

let turnos = ["Selecione la Hora del Turno", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"];

for (const horaDeTurno of turnos) {
    let option = document.createElement("option");
    option.innerHTML = horaDeTurno;
    selectorHora.appendChild(option);
}

//Botones
//Guardar Turno
$("#registrarTurnos").click(function (e) {
    e.preventDefault();
    
    //Obtenemos los valores de los campos del formulario
    let gNombre = document.getElementById("txtNombre").value;
    let gApellido = document.getElementById("txtApellido").value;
    let gCorreo = document.getElementById("txtCorreo").value;
    let gTelefono = document.getElementById("txtTelefono").value;
    let gDireccion = document.getElementById("txtDireccion").value;
    let gLocalidad = document.getElementById("provincia").value;
    let gFecha = document.getElementById("fechaTurno").value;
    let gHora = document.getElementById("horaTurno").value;
    
    //Validamos si los campos estan vacios
    if(gNombre == "") {
        //Animaciones Show (Mostrar)
        $("#div1").show();
        $(document).ready(function () {
            setTimeout(function () {
                //Animaciones fadeOut (Desaparece con una transicion)
                $("#div1").fadeOut(500);
            }, 2000);
            setTimeout(function () {
                //Pone el cursor en el campo txtNombre
                document.getElementById("txtNombre").focus();
            }, 3000);
        });

    } else if (gApellido == ""){
        $("#div1").show();
        $(document).ready(function () {
            setTimeout(function () {
                $("#div1").fadeOut(500);
            }, 2000);
            setTimeout(function () {
                document.getElementById("txtApellido").focus();
            }, 3000);
        });
    } else if (gCorreo == ""){
        $("#div1").show();
        $(document).ready(function () {
            setTimeout(function () {
                $("#div1").fadeOut(500);
            }, 2000);
            setTimeout(function () {
                document.getElementById("txtCorreo").focus();
            }, 3000);
        });
    } else if (gTelefono == ""){
        $("#div1").show();
        $(document).ready(function () {
            setTimeout(function () {
                $("#div1").fadeOut(500);
            }, 2000);
            setTimeout(function () {
                document.getElementById("txtTelefono").focus();
            }, 3000);
        });
    } else if (gDireccion == ""){
        $("#div1").show();
        $(document).ready(function () {
            setTimeout(function () {
                $("#div1").fadeOut(500);
            }, 2000);
            setTimeout(function () {
                document.getElementById("txtDireccion").focus();
            }, 3000);
        });
    } else if ((gLocalidad == "") || (gLocalidad == provincias[0])){
        $("#div1").show();
        $(document).ready(function () {
            setTimeout(function () {
                $("#div1").fadeOut(500);
            }, 2000);
            setTimeout(function () {
                document.getElementById("provincia").focus();
            }, 3000);
        });
    } else if (gFecha == ""){
        $("#div1").show();
        $(document).ready(function () {
            setTimeout(function () {
                $("#div1").fadeOut(500);
            }, 2000);
            setTimeout(function () {
                document.getElementById("fechaTurno").focus();
            }, 3000);
        });
    } else if ((gHora == "") || (gHora == turnos[0])){
        $("#div1").show();
        $(document).ready(function () {
            setTimeout(function () {
                $("#div1").fadeOut(500);
            }, 2000);
            setTimeout(function () {
                document.getElementById("horaTurno").focus();
            }, 3000);
        });

    } else {
        //Llamamos la Funcion agregarTurno
        agregarTurno(gNombre, gApellido, gCorreo, gTelefono, gDireccion, gLocalidad, gFecha, gHora);
        agregarTurnosTabla();
        $("#div2").show();
        $(document).ready(function() {
            setTimeout(function() {
                //Animaciones fadeOut (Desaparece con una transicion)
                $("#div2").fadeOut(500);
            }, 3000);
            setTimeout(function () {
                //Animaciones fadeOut (Desaparece con una transicion)
                document.getElementById("txtNombre").focus();
            }, 4000);
            
        });
        //Limpiando Los Campos
        document.getElementById("txtNombre").value = "";
        document.getElementById("txtApellido").value = "";
        document.getElementById("txtCorreo").value = "";
        document.getElementById("txtTelefono").value = "";
        document.getElementById("txtDireccion").value = "";
        document.getElementById("provincia").value = provincias[0];
        document.getElementById("fechaTurno").value = "";
        document.getElementById("horaTurno").value = turnos[0];
        //Removemos los datos temporales(GUARDAR TURNO)
        localStorage.removeItem("Nombre");
        localStorage.removeItem("Apellido");
        localStorage.removeItem("Correo");
        localStorage.removeItem("Telefono");
        localStorage.removeItem("Direccion");
        localStorage.removeItem("Localidad");
        localStorage.removeItem("Fecha");
        localStorage.removeItem("Hora");
    }
})

$("#mostrarTurnos").click(function(evento) {
    evento.preventDefault();
    
    if(localStorage.getItem("listaTurnos") == null){
        $("#div4").show();
            $(document).ready(function() {
                setTimeout(function() {
                    //Animaciones fadeOut (Desaparece con una transicion)
                    $("#div4").fadeOut(500);
                }, 3000); 
                setTimeout(function () {
                    document.getElementById("txtNombre").focus();
                }, 4000);
        
            });
    }else {
        $("#tabla").show();
        $("#registrarTurnos").attr('disabled', 'disabled');
        $("#mostrarTurnos").attr('disabled', 'disabled');
        $("#limpiarCampos").attr('disabled', 'disabled');
        $("#botonEliminar").show();
    }
});

$("#limpiarCampos").click(function(evento) {
    evento.preventDefault();

    localStorage.removeItem("Nombre");
    localStorage.removeItem("Apellido");
    localStorage.removeItem("Correo");
    localStorage.removeItem("Telefono");
    localStorage.removeItem("Direccion");
    localStorage.removeItem("Localidad");
    localStorage.removeItem("Fecha");
    localStorage.removeItem("Hora");

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtDireccion").value = "";
    document.getElementById("provincia").value = provincias[0];
    document.getElementById("fechaTurno").value = "";
    document.getElementById("horaTurno").value = turnos[0];

    $(document).ready(function () {
    setTimeout(function () {
                document.getElementById("txtNombre").focus();
        }, 3000);
    });
    
});

//Estilos
$(".botonArriba").css({
    "position": "fixed",
    "right": "1rem",
    "bottom": "1rem",
    "display": "block",
    "background": "#64a19d",
    "padding": "0.1rem 0.5rem",
    "transition": "all 0.5s linear",
    "border-radius": "50%",
    "cursor": "pointer",
    "opacity": "0.5"
});

$(".botonArriba").hover(function(){
    $(this).css("opacity", "1");
}, function(){
    $(this).css("opacity", "0.5");
});

//Icono
$(".flechaArriba").css({
    "margin": "20px",
    "color": "white"
});

//Tabla
$("th").css({
    "background": "#64a19d",
    "padding": "20px"
});


//Animaciones
$("#tabla").hide();
$("#div1").hide();
$("#div2").hide();
$("#div3").hide();
$("#div4").hide();

$(document).ready(function() {
    
    var arriba = $(".botonArriba");

    arriba.click(function(evento){
        evento.preventDefault();
        //Animacion (Scroll Animado)
        $('html, body').animate({scrollTop: 0}, 500);
    })

    arriba.hide();
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 700){
            arriba.fadeIn();
        } else {
            arriba.fadeOut();
        }
    });
});


$("#botonEliminar").click(() => {
    $(document).ready(function() {
        
        setTimeout(function () {
            $("#tabla").fadeOut(500);
        }, 4000);
        setTimeout(function () {
            $("#botonEliminar").fadeOut(500);
        }, 3000);
        setTimeout(function () {
            $("#limpiarCampos").removeAttr('disabled');
        }, 5000);
        
        setTimeout(function () {
            $("#mostrarTurnos").removeAttr('disabled');
        }, 6000);
            setTimeout(function () {
            $("#registrarTurnos").removeAttr('disabled');
            }, 7000);
        setTimeout(function () {
                document.getElementById("txtNombre").focus();
            }, 8000);
    

    });
})


//Almacenar valores al refrescar la pagina para no volver a cargarlos

let nombreTemporal = document.getElementById('txtNombre');
let apellidoTemporal = document.getElementById("txtApellido");
let correoTemporal = document.getElementById("txtCorreo");
let telefonoTemporal = document.getElementById("txtTelefono");
let direccionTemporal = document.getElementById("txtDireccion");
let localidadTemporal = document.getElementById("provincia");
let fechaTemporal = document.getElementById("fechaTurno");
let horaTemporal = document.getElementById("horaTurno");

nombreTemporal.addEventListener('keyup', (event) => {
    let nombre = event.target.value;
    localStorage.setItem("Nombre", nombre);
});

apellidoTemporal.addEventListener('keyup', (event) => {
    let apellido = event.target.value;
    localStorage.setItem("Apellido", apellido);
});

correoTemporal.addEventListener('keyup', (event) => {
    let correo = event.target.value;
    localStorage.setItem("Correo", correo);
});

telefonoTemporal.addEventListener('keyup', (event) => {
    let telefono = event.target.value;
    localStorage.setItem("Telefono", telefono);
});

direccionTemporal.addEventListener('keyup', (event) => {
    let direccion = event.target.value;
    localStorage.setItem("Direccion", direccion);
});

localidadTemporal.addEventListener('change', () => {
    let localidad = localidadTemporal.options[localidadTemporal.selectedIndex].value;
    localStorage.setItem("Localidad", localidad);
});



fechaTemporal.addEventListener('change', (event) => {
    let fecha = event.target.value;
    localStorage.setItem("Fecha", fecha);
});

horaTemporal.addEventListener('change', () => {
    let hora = horaTemporal.options[horaTemporal.selectedIndex].text;
    localStorage.setItem("Hora", hora);
});


document.getElementById("horaTurno").value = turnos[0];

$(document).ready(function () {
    let obtenerNombre = localStorage.getItem("Nombre");
    nombreTemporal.value = obtenerNombre;

    let obtenerApellido = localStorage.getItem("Apellido");
    apellidoTemporal.value = obtenerApellido;

    let obtenerCorreo = localStorage.getItem("Correo");
    correoTemporal.value = obtenerCorreo;

    let obtenerTelefono = localStorage.getItem("Telefono");
    telefonoTemporal.value = obtenerTelefono;

    let obtenerDireccion = localStorage.getItem("Direccion");
    direccionTemporal.value = obtenerDireccion;

    let obtenerLocalidad = localStorage.getItem("Localidad");
    localidadTemporal.value = obtenerLocalidad;

    let obtenerFecha = localStorage.getItem("Fecha");
    fechaTemporal.value = obtenerFecha;

    // document.getElementById("horaTurno").value = turnos.shift();

    let obtenerHora = localStorage.getItem("Hora");
    horaTemporal.value = obtenerHora;
});


//Datos de Contacto JSON

// var Contacto = `{
//                     "Direccion": "Aguilares, Tucumán",
//                     "Correo": "jorgealia@gmail.com",
//                     "Teléfono" : "+54 (381) 1234567"
//                 }`
// var toJson = JSON.parse(Contacto);
// // console.log(toJson);

// document.getElementById("direccionContacto").innerHTML = toJson.Direccion;
// document.getElementById("correoContacto").innerHTML = toJson.Correo;
// document.getElementById("telefonoContacto").innerHTML = toJson.Teléfono;


//AJAX y JSON
let urlContacto = "js/contacto.json";

$(document).ready(function () {

    $.getJSON(urlContacto, function (respuesta, estado) {
        if (estado === "success") {
            
            let misDatos = respuesta;
            for (const dato of misDatos) {
                document.getElementById("direccionContacto").innerHTML = misDatos[0].Direccion;
                document.getElementById("correoContacto").innerHTML = misDatos[0].Correo;
                document.getElementById("telefonoContacto").innerHTML = misDatos[0].Teléfono;
            }
        }
    });
});
