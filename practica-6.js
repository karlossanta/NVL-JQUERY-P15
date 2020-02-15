//Seleccionamos las 2 imágenes
var img1 = $("#imagen1")
var img2 = $("#imagen2")

//Creamos el botón
var button = $("<button type=\"button\"></button>")
//Le asignamos al botón el texto y el evento con la función
button.text("Cambiar Imagen").on("click", cambiarImagen)
//Colocamos el botón tras el título
$("h1").after(button)

//Creamos la función que cambia una imagen por otra
function cambiarImagen(){
    //Hace que si está desapareca y viceversa
    img1.toggle(1000)
    img2.toggle(1000)
}