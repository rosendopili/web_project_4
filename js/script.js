let initialCards = [
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
const photoTemplate = document.querySelector('#photo-grid__template').content; 

function imageLoad() {
    for (let i = 0; i < initialCards.length; i++) {
      let photoGridCard = document.createElement('div'); 
      photoGridCard.classList.add('photo-grid__card'); 
      photoGridCard.setAttribute('data-id', i); 

      let photoGridImage = document.createElement('img');
      photoGridImage.classList.add('photo-grid__image')
      photoGridImage.setAttribute('src', initialCards[i].link); 

      let photoGridCaption = document.createElement('div'); 
      photoGridCaption.classList.add('photo-grid__caption'); 

      let photoGridDescription = document.createElement('h2'); 
      photoGridDescription.classList.add('photo-grid__description')
      photoGridDescription.textContent = initialCards[i].name; 
      
      let photoGridHeartReact = document.createElement('button'); 
      photoGridHeartReact.classList.add('photo-grid__heart-react'); 

      photoGrid.appendChild(photoGridCard); 

      photoGridCaption.appendChild(photoGridDescription); 
      photoGridCaption.appendChild(photoGridHeartReact); 

      photoGridCard.appendChild(photoGridImage); 
      photoGridCard.appendChild(photoGridCaption); 

    }
}

imageLoad(); 

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

function addPhoto(newLinkValue, newTitleValue){
    // const photoElement = photoTemplate.cloneNode(true); 

    // photoElement.querySelector(".photo-grid__image").textContent = newLinkValue; 
    // photoElement.querySelector(".photo-grid__description").textContent = newTitleValue; 

    // photoGrid.append(photoElement); 

    let newPhoto = {
        name: newTitle.value, 
        link: newLink.value
    }
    initialCards.unshift(newPhoto); 

    photoGrid.innerHTML = ""; 
    imageLoad(); 
    imageModal(); 
}

saveButton.addEventListener('click', editProfile);
closeIcon.addEventListener('click', modal); 
editButton.addEventListener('click', modal); 
savePhotoButton.addEventListener('click', addPhoto); 
addPhotoButton.addEventListener('click', imageModal); 
imageCloseIcon.addEventListener('click', imageModal); 

