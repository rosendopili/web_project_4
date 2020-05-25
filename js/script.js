let modalContainer = document.querySelector('.modal__container'); 
let body = document.querySelector('body'); 
let username = document.querySelector('.profile__username').innerHTML; 
let occupation = document.querySelector('.profile__occupation').innerHTML; 
let form = document.querySelector('.modal__form');
let saveButton = document.querySelector('.modal__save-button'); 
let newUsername = document.querySelector('.modal__username'); 
let newOccupation = document.querySelector('.modal__occupation'); 
let closeIcon = document.querySelector('.modal__close'); 
let editButton = document.querySelector('.profile__edit-button'); 

function modal(){
    modalContainer.classList.remove('modal__off');  
    body.style.overflowY = 'hidden'; 
}

function closeModal(){
    modalContainer.classList.add('modal__off'); 
    body.style.overflowY = 'scroll'; 
}

function editProfile(){
    document.querySelector('.profile__username').textContent = newUsername.value; 
    document.querySelector('.profile__occupation').textContent = newOccupation.value; 

    closeModal(); 
}

saveButton.addEventListener('click', editProfile);
closeIcon.addEventListener('click', closeModal); 
editButton.addEventListener('click', modal); 