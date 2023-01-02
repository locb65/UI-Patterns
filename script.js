
const spirited = document.querySelector('.spirited')
modal = null
closeButton = null
const princess = document.querySelector('.princess')

function showModal(evt) {
    temp = evt.currentTarget.myParam
    modal = document.querySelector(temp)
    if (temp != null) {
        modal.classList.toggle("show-movieModal")
    }
    console.log(evt.currentTarget.myParam);
    console.log(temp)
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

spirited.addEventListener('click', showModal);
spirited.myParam = '.spiritedModal'
princess.myParam = '.princessModal'
window.addEventListener('click', windowClick)
princess.addEventListener('click', showModal)