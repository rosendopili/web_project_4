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
let newTitle = document.querySelector('.modal__image-title').textContent; 
let newLink = document.querySelector('.modal__link').textContent; 
let closeIcon = document.querySelector('.modal__close'); 
let imageCloseIcon = document.querySelector('.imageModal__close'); 
let editButton = document.querySelector('.profile__edit-button'); 
let addPhotoButton = document.querySelector('.profile__add-button'); 
let savePhotoButton = document.querySelector('.modal__create-button'); 
let photoTemplate = document.querySelector('#photo-grid__template').content;


const addImageCard = (data) => {
    const photo = photoTemplate.cloneNode(true); 
    let photoGridCard = photo.querySelector('.photo-grid__card'); 
    let photoGridImage = photo.querySelector('.photo-grid__image'); 
    let photoGridCaption = photo.querySelector('.photo-grid__caption'); 
    let photoGridDescription = photo.querySelector('.photo-grid__description'); 
    let photoGridHeart = photo.querySelector('.photo-grid__heart-react'); 

    photoGridDescription.textContent = data.name; 
    photoGridImage.style.backgroundImage = `url(${data.link})`; 

    return photo; 
}

const loadImageCard = (newName, newLink) => {
    photoGrid.prepend(addImageCard(newName, newLink)); 
}

initialCards.forEach((newName, newLink) =>{
    loadImageCard(newName, newLink); 
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

function addNewImageCard(newTitle, newLink){
    loadImageCard({
        name: newTitle.value, 
        link: newLink.value
    }); 
    imageModal(); 
}

saveButton.addEventListener('click', editProfile);
closeIcon.addEventListener('click', modal); 
editButton.addEventListener('click', modal); 
savePhotoButton.addEventListener('click', addNewImageCard); 
addPhotoButton.addEventListener('click', imageModal); 
imageCloseIcon.addEventListener('click', imageModal); 

