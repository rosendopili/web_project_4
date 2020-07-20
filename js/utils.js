const ESCAPE = 27; 
const imagePopup = document.querySelector('.image-popup__image');
const imagePopupDescription = document.querySelector('.image-popup__description');
const overlayArray = Array.from(document.querySelectorAll('.modal')); 
const modalContainerArray = Array.from(document.querySelectorAll('.modal__container')); 

const imagePopupOpen = (name, link) => {
    imagePopup.setAttribute('src', `${link}`) 
    imagePopupDescription.textContent = `${name}`; 
 }; 

const modalOpen = (modal) => {
    overlayHandler(); 
    modal.classList.add('modal__on');
    document.addEventListener('keyup', escapeHandler); 
}

const overlayHandler = () =>{
    overlayArray.forEach((val) => {
     val.addEventListener('click', closeCurrentForm);  
    })
}

const closeCurrentForm = (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('popup-modal_closed')){
        modalClose(e.target.closest('.modal__container'));
    }
        e.target.removeEventListener('click', closeCurrentForm); 
}
    
const escapeHandler = (e) => {
    modalContainerArray.forEach((val) => {
        if((e.keyCode == ESCAPE) && (val.classList.contains('modal__on'))){
        modalClose(val); 
        }
    })
}

const modalClose = (modal) => {
    modal.classList.remove('modal__on'); 
    document.removeEventListener('keyup', escapeHandler); 
}

export { imagePopupOpen, modalOpen, modalClose, overlayHandler, escapeHandler, closeCurrentForm} ; 