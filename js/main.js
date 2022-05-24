const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', opModal)
closeBtn.addEventListener('click', clModal)
window.addEventListener('click', outsideClick)

function opModal(){
    modal.style.display = 'block'
}
function clModal(){
    modal.style.display = 'none'
}

function outsideClick(ty){
    if(ty.target == modal){
        clModal()
    }
}