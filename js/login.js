const button = document.getElementById("boton");

button.onclick = ()=>{
    login();
}

function login(){
    const nombre = document.getElementById("usuario").value;
    const password = document.getElementById("contraseña").value;

    fetch("http://localhost:8000/%22)
    .then(response => response.json())
    .then(data => console.log(data))

    if(nombre === data.nombre && password === data.password) {
        console.log("Datos Correctos")
    } else {
        alert("El usuario o contraseña no son válidos")
    }
}