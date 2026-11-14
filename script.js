


const SUPABASE_URL = "https://hypxybgvxvpwfqflijty.supabase.co"

const SUPABASE_KEY = "sb_publishable_x6A2XiGzM9F2Qlk9xwBUvA_UK3HoJJz"


const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    const correo = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = "Verificando usuario...";

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: correo,
        password: contrasena
    });

    if (error) {
        mensaje.textContent = "Usuario inválido. Verifica tus datos.";
        return;
    }

    window.location.href = "bienvenida.html";

});










```javascript


// Evento 1: Click en el título
document.querySelector("header h1").addEventListener("click", function() {
    alert("¡Bienvenida a Belleza Tips! ");
});


// Evento 2: Pasar el mouse sobre la imagen
document.querySelector(".foto img").addEventListener("mouseover", function() {
    this.style.width = "330px";
});


// Evento 3: Quitar el mouse de la imagen
document.querySelector(".foto img").addEventListener("mouseout", function() {
    this.style.width = "300px";
});


// Evento 4: Doble clic en un tip
document.querySelector(".contenido h2").addEventListener("dblclick", function() {
    alert("¡Gracias por visitar Belleza Tips! ✨");
});


// Evento 5: Presionar una tecla
document.addEventListener("keydown", function(event) {
    console.log("Presionaste la tecla: " + event.key);
});
```
