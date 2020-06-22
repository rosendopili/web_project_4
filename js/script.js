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
const profileModalForm = document.querySelector('.profile-modal__form'); 
const imageModalForm = document.querySelector('.image-modal__form'); 
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
const imagePopup = document.querySelector('.image-popup__image');
const imagePopupDescription = document.querySelector('.image-popup__description');

const modalToggle = (modal) => {
    modal.classList.toggle('modal__on'); 
}; 

const imagePopupOpen = (data) => {
    imagePopup.setAttribute('src', `${data.link}`) 
    imagePopupDescription.textContent = `${data.name}`; 
 }; 


const addImageCard = (data) => {
    const photo = photoTemplate.cloneNode(true); 
    const photoGridImage = photo.querySelector('.photo-grid__image'); 
    const photoGridDescription = photo.querySelector('.photo-grid__description'); 
    const photoGridHeart = photo.querySelector('.photo-grid__heart-react');
    const deleteIcon = photo.querySelector('.photo-grid__delete-icon') 
   

    photoGridDescription.textContent = data.name; 
    photoGridImage.style.backgroundImage = `url(${data.link})`; 

    photoGridHeart.addEventListener('click', (e)=> {
        e.preventDefault(); 
        photoGridHeart.classList.toggle('photo-grid__heart-react_dark')
     });

    deleteIcon.addEventListener('click', (e)=> {
    e.target.closest('.photo-grid__card').remove();
    });

    photoGridImage.addEventListener('click', (e) =>{
        e.preventDefault(); 
        imagePopupOpen(data); 
        modalToggle(imagePopupModalContainer); 
    });

    return photo; 
}; 

const loadImageCard = (data) => {
    photoGrid.prepend(addImageCard(data)); 
}; 

initialCards.forEach((data) =>{
    loadImageCard(data); 
}); 

profileModalForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    username.textContent = newUsername.value; 
    occupation.textContent = newOccupation.value;

    modalToggle(profileModalContainer); 
    profileModalForm.reset(); 
})

imageModalForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    loadImageCard({
        name: newTitle.value, 
        link: newLink.value
    }); 

    modalToggle(imageModalContainer);
    imageModalForm.reset(); 
}); 

editButton.addEventListener('click', (e) => {
    e.preventDefault()
    modalToggle(profileModalContainer); 
})

profileCloseIcon.addEventListener('click', (e) =>{
    e.preventDefault()
    modalToggle(profileModalContainer); 
}); 

addPhotoButton.addEventListener('click', (e) =>{
    e.preventDefault()
    modalToggle(imageModalContainer)
}); 

imageCloseIcon.addEventListener('click', (e) => {
    e.preventDefault()
    modalToggle(imageModalContainer); 
}); 

imagePopupCloseIcon.addEventListener('click', (e) =>{
    e.preventDefault()
    modalToggle(imagePopupModalContainer); 
}); 


