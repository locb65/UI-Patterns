
const spirited = document.querySelector('.spirited')
const modal = document.querySelector('.spiritedModal')
const closeButton = document.querySelector(".close-button")

function showSpirited() {
    modal.classList.toggle("show-spiritedModal")
}

function windowClick (event) {
    if (event.target === modal) {
        showSpirited();
    }
}

spirited.addEventListener('click', showSpirited);
closeButton.addEventListener('click', showSpirited);
window.addEventListener('click', windowClick)