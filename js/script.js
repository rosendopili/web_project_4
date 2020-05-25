let display = document.querySelector('.display'); 
let body = document.querySelector('body'); 
let username = document.querySelector('.profile__username').innerHTML; 
let occupation = document.querySelector('.profile__occupation').innerHTML; 
let form = document.querySelector('.modal__form');
let saveButton = document.querySelector('.modal__save-button'); 

function modal(){
    display.classList.remove('display__display-none');
    body.style.overflowY = 'hidden'; 
    document.querySelector('.modal__username').setAttribute('placeholder', username); 
    document.querySelector('.modal__occupation').setAttribute('placeholder', occupation); 
}

function closeModal(){
    display.classList.add('display__display-none'); 
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

