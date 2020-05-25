let modalContainer = document.querySelector('.modal__container'); 
let body = document.querySelector('body'); 
let username = document.querySelector('.profile__username').innerHTML; 
let occupation = document.querySelector('.profile__occupation').innerHTML; 
let form = document.querySelector('.modal__form');
let saveButton = document.querySelector('.modal__save-button'); 

function modal(){
    modalContainer.style.display = 'flex';
    body.style.overflowY = 'hidden'; 
}

function closeModal(){
    modalContainer.style.display = 'none'; 
    body.style.overflowY = 'scroll'; 
}

function editProfile(){
    let newUsername = document.querySelector('.modal__username').value; 
    let newOccupation = document.querySelector('.modal__occupation').value; 
    
    document.querySelector('.profile__username').innerHTML = newUsername; 
    document.querySelector('.profile__occupation').innerHTML = newOccupation; 

    closeModal(); 
}

saveButton.addEventListener('click', editProfile);

