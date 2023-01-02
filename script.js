
const spirited = document.querySelector('.spirited')
modal = null
closeButton = null
const princess = document.querySelector('.princess')
const totoro = document.querySelector('.totoro')
const howls = document.querySelector('.howls')
const castle = document.querySelector('.castle') 

function showModal(evt) {
    temp = evt.currentTarget.myParam
    modal = document.querySelector(temp)
    if (temp != null) {
        modal.classList.toggle("show-movieModal")
    }
    closeButton = document.querySelector(temp + "Close")
    closeButton.addEventListener('click', closeModal);
}
function closeModal() {
    if (modal != null) {
    modal.classList.toggle("show-movieModal")
    }
}

 

function windowClick (event) {
    if (event.target === modal) {
        closeModal();
    }
}


spirited.myParam = '.spiritedModal'
princess.myParam = '.princessModal'
totoro.myParam = '.totoroModal'
howls.myParam = '.howlsModal'
castle.myParam = '.castleModal'

spirited.addEventListener('click', showModal);
window.addEventListener('click', windowClick)
princess.addEventListener('click', showModal)
totoro.addEventListener('click', showModal)
howls.addEventListener('click', showModal)
castle.addEventListener('click', showModal)
