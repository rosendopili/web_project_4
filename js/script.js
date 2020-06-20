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

let photoGrid = document.querySelector('.photo-grid'); 
let modalContainer = document.querySelector('.modal__container'); 
let imageModalContainer = document.querySelector('.imageModal__container'); 
let body = document.querySelector('body'); 
let username = document.querySelector('.profile__username'); 
let occupation = document.querySelector('.profile__occupation'); 
let form = document.querySelector('.modal__form');
let saveButton = document.querySelector('.modal__save-button'); 
let newUsername = document.querySelector('.modal__username'); 
let newOccupation = document.querySelector('.modal__occupation'); 
let newTitle = document.querySelector('.modal__image-title'); 
let newLink = document.querySelector('.modal__link'); 
let closeIcon = document.querySelector('.modal__close'); 
let imageCloseIcon = document.querySelector('.imageModal__close'); 
let editButton = document.querySelector('.profile__edit-button'); 
let addPhotoButton = document.querySelector('.profile__add-button'); 
let savePhotoButton = document.querySelector('.modal__create-button'); 
let photoTemplate = document.querySelector('#photo-grid__template').content;
let imagePopupModal = document.querySelector('.popup-modal__container'); 
let imagePopupCloseIcon = document.querySelector('.popup-modal__close')


function imagePopupOpen(data) {
    let imagePopup = document.querySelector(".image-popup__image");
    let imagePopupDescription = document.querySelector(".image-popup__description");    
    
    imagePopup.src = data.link;
    imagePopupDescription.textContent = data.name;
 }


const addImageCard = (data) => {
    const photo = photoTemplate.cloneNode(true); 
    let photoGridImage = photo.querySelector('.photo-grid__image'); 
    let photoGridDescription = photo.querySelector('.photo-grid__description'); 
    let photoGridHeart = photo.querySelector('.photo-grid__heart-react');
    let deleteIcon = photo.querySelector('.photo-grid__delete-icon') 
   

    photoGridDescription.textContent = data.name; 
    photoGridImage.style.backgroundImage = `url(${data.link})`; 

    photoGridHeart.addEventListener('click', ()=> {
        photoGridHeart.classList.toggle('photo-grid__heart-react_dark')
     });

    deleteIcon.addEventListener('click', (e)=> {
    e.target.closest('.photo-grid__card').remove();
    });

    photoGridImage.addEventListener('click', (e) =>{
        e.preventDefault(); 
        imagePopupOpen(data); 
        popupModal(); 
    });


    return photo; 
}

const loadImageCard = (data) => {
    photoGrid.prepend(addImageCard(data)); 
}

initialCards.forEach((data) =>{
    loadImageCard(data); 
})


function preventScroll(){
    if (body.classList.contains('scroll') !== true){
        body.classList.add('scroll'); 
    }else{
        body.classList.remove('scroll'); 
    }
}

function modal(){
    modalContainer.classList.toggle('modal__off'); 
    
    preventScroll(); 
}

function editProfile(){
    username.textContent = newUsername.value; 
    occupation.textContent = newOccupation.value; 

    modal(); 
}

function imageModal(){
    imageModalContainer.classList.toggle('modal__off'); 

    preventScroll(); 
}


const addNewImageCard = () => {
    loadImageCard({
        name: newTitle.value, 
        link: newLink.value
    }); 

    imageModal();

    newTitle.value = ""; 
    newLink.value = ""; 
}

function popupModal(){
    imagePopupModal.classList.toggle('.modal__off'); 
    preventScroll(); 
}


saveButton.addEventListener('click', editProfile);
closeIcon.addEventListener('click', modal); 
editButton.addEventListener('click', modal); 
savePhotoButton.addEventListener('click', addNewImageCard); 
addPhotoButton.addEventListener('click', imageModal); 
imageCloseIcon.addEventListener('click', imageModal); 

