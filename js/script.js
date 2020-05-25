const display = document.querySelector('.display'); 
const body = document.querySelector('body'); 
const username = document.querySelector('.profile__username').innerHTML; 
const occupation = document.querySelector('.profile__occupation').innerHTML; 
const form = document.querySelector('.modal__form');

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

// function editProfile(){
//     let newUsername = document.querySelector('.modal__username'); 
//     let newOccupation = document.querySelector('.modal__occupation'); 
    
//     username.insertAdjacentHTML('beforeend',`<h1>${newUsername.value}</h1>`); 

//     username.value = ""; 

// }

