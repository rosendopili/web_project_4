import FormValidator from 'FormValidator.js'; 
import Card from 'Card.js'; 

const defaultConfig = {
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_error",
    errorClass: "error__active"
}

const profileModalForm = document.querySelector('.profile-modal__form'); 
const imageModalForm = document.querySelector('.image-modal__form'); 

const editProfileValidation = new FormValidator(defaultConfig, profileModalForm); 
const addCardValidation = new FormValidator(defaultConfig, imageModalForm); 

editProfileValidation.enableValidation(); 
addCardValidation.enableValidation(); 

const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }, 
];

const photoGrid = document.querySelector('.photo-grid'); 
const profileModalContainer = document.querySelector('.profile-modal__container'); 
const imageModalContainer = document.querySelector('.image-modal__container'); 
const imagePopupModalContainer = document.querySelector('.popup-modal__container');
const username = document.querySelector('.profile__username'); 
const occupation = document.querySelector('.profile__occupation'); 
const newUsername = document.querySelector('.modal__username'); 
const newOccupation = document.querySelector('.modal__occupation'); 
const newTitle = document.querySelector('.modal__image-title'); 
const newLink = document.querySelector('.modal__link'); 
const profileCloseIcon = document.querySelector('.profile-modal__close'); 
const imageCloseIcon = document.querySelector('.image-modal__close'); 
const editButton = document.querySelector('.profile__edit-button'); 
const addPhotoButton = document.querySelector('.profile__add-button'); 
const photoTemplate = document.querySelector('#photo-grid__template').content;
const imagePopupCloseIcon = document.querySelector('.popup-modal__close');
const overlayArray = Array.from(document.querySelectorAll('.modal')); 
const modalContainerArray = Array.from(document.querySelectorAll('.modal__container')); 

const loadImageCard = (data) => {
    console.log(data); 
    const card = new Card(data, photoTemplate); 
    photoGrid.prepend(card.generateCard()); 
}; 

initialCards.forEach((data) =>{
    loadImageCard(data); 
}); 

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
        if((e.keyCode == 27) && (val.classList.contains('modal__on'))){
        modalClose(val); 
        }
    })
}

const modalOpen = (modal) => {
    console.log(modal); 
    overlayHandler(); 
    modal.classList.add('modal__on');
    document.addEventListener('keyup', escapeHandler); 
}

const modalClose = (modal) => {
    console.log(modal); 
    modal.classList.remove('modal__on'); 
    document.removeEventListener('keyup', escapeHandler); 
}

profileModalForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    username.textContent = newUsername.value; 
    occupation.textContent = newOccupation.value;

    modalClose(profileModalContainer); 
    profileModalForm.reset(); 
})

imageModalForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    loadImageCard({
        name: newTitle.value, 
        link: newLink.value
    }); 

    modalClose(imageModalContainer);
    imageModalForm.reset(); 
}); 

profileCloseIcon.addEventListener('click', (e) =>{
    e.preventDefault()
    modalClose(profileModalContainer); 
}); 

imageCloseIcon.addEventListener('click', (e) => {
    e.preventDefault()
    modalClose(imageModalContainer); 
}); 

imagePopupCloseIcon.addEventListener('click', (e) =>{
    e.preventDefault()
    modalClose(imagePopupModalContainer); 
}); 

addPhotoButton.addEventListener('click', (e) =>{
    e.preventDefault()
    modalOpen(imageModalContainer)
}); 
editButton.addEventListener('click', (e) => {
    e.preventDefault()
    modalOpen(profileModalContainer); 
})


