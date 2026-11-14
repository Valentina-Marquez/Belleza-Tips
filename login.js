
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
