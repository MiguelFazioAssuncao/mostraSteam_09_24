let contador = 15690;

function updateContador() {
    contador++;
    document.querySelector("#contador").innerText = contador;
} setInterval(updateContador, 2000);

updateContador();