let contador = 15690;

function updateContador() {
    contador++;
    document.querySelector("#contador").innerText = contador;
} setInterval(updateContador, 2000);

updateContador();

function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.querySelector('.modal--background').style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}
function openModalHeroina() {
    document.getElementById("heroinaModal").style.display = "block";
}

// Fechar modal da Heroína
function closeModalHeroina() {
    document.getElementById("heroinaModal").style.display = "none";
}

// Fechar modal ao clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("heroinaModal")) {
        closeModalHeroina();
    }
}

// Abrir modal da Cocaína
function openModalCocaina() {
    document.getElementById("cocainaModal").style.display = "block";
}

// Fechar modal da Cocaína
function closeModalCocaina() {
    document.getElementById("cocainaModal").style.display = "none";
}

// Fechar modal ao clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("cocainaModal")) {
        closeModalCocaina();
    }
}

// Abrir modal do Vape
function openModalVape() {
    document.getElementById("vapeModal").style.display = "block";
}

// Fechar modal do Vape
function closeModalVape() {
    document.getElementById("vapeModal").style.display = "none";
}

// Fechar modal ao clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("vapeModal")) {
        closeModalVape();
    }
}
