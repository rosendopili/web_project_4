let modalContainer = document.querySelector('.modal__container'); 
let body = document.querySelector('body'); 
let username = document.querySelector('.profile__username').textContent; 
let occupation = document.querySelector('.profile__occupation').textContent; 
let form = document.querySelector('.modal__form');
let saveButton = document.querySelector('.modal__save-button'); 
let newUsername = document.querySelector('.modal__username'); 
let newOccupation = document.querySelector('.modal__occupation'); 
let closeIcon = document.querySelector('.modal__close'); 
let editButton = document.querySelector('.profile__edit-button'); 

function modal(){
    modalContainer.classList.toggle('modal__off');  
    if (body.classList.contains('scroll') !== true){
        body.classList.add('scroll'); 
    }else{
        body.classList.remove('scroll'); 
    }
}


function editProfile(){
    document.querySelector('.profile__username').textContent = newUsername.value; 
    document.querySelector('.profile__occupation').textContent = newOccupation.value; 

    modal(); 
}

saveButton.addEventListener('click', editProfile);
closeIcon.addEventListener('click', modal); 
editButton.addEventListener('click', modal); 