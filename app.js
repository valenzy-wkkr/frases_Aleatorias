function obtenerFrase(){
    document.getElementById("quote").innerHTML = "Cargando frase...";
    document.getElementById("author").innerHTML = "";

    fetch('https://api.kanye.rest/')
    .then((response) => {
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json();
    })
    .then((data) =>{
        document.getElementById("quote").textContent = `"${data.quote}"`
        document.getElementById("author").textContent = "- Kanye West"
    })
    .catch((error) =>{
        console.error("Error al obtener la frase:", error)

        document.getElementById("quote").textContent = "Error al obtener la frase"
        document.getElementById("author").textContent = ""
    })
}

function resetFrase() {
    document.getElementById("quote").textContent = "Haz clic para obtener una frase aleatoria";
    document.getElementById("author").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", obtenerFrase)
})

console.log("Script cargado correctamente");
