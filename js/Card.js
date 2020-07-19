import { imagePopupOpen, modalOpen, overlayHandler } from './script.js'; 

// const imagePopupOpen = (data) => {
//     imagePopup.setAttribute('src', `${data.link}`) 
//     imagePopupDescription.textContent = `${data.name}`; 
//  }; 

//  const modalOpen = (modal) => {
//     overlayHandler(); 
//     modal.classList.add('modal__on');
//     document.addEventListener('keyup', escapeHandler); 
// }

// const overlayArray = Array.from(document.querySelectorAll('.modal')); 

// const overlayHandler = () =>{
//     overlayArray.forEach((val) => {
//      val.addEventListener('click', closeCurrentForm);  
//     })
// }

class Card {
    constructor(data, cardTemplateSelector){
        this._link = data.link; 
        this._name = data.name; 
        this._cardTemplateSelector = cardTemplateSelector; 
    } 

    _getCardTemplate(){
        console.log(this._cardTemplateSelector); 

        const cardTemplate = document
            .querySelector(this._cardTemplateSelector)
            .content 
            .querySelector('.photo-grid__card')
            .cloneNode(true); 

        console.log(cardTemplate);     
        
        return cardTemplate; 
    }

    generateCard(){
        const element = this._getCardTemplate();   
        
        this._card = element; 

        element.querySelector('.photo-grid__description').textContent = this._name; 
        element.querySelector('.photo-grid__image').style.backgroundImage = `url(${this._link})`; 
    
        this._addEventListeners(); 
    
        return this._card; 
    }

    _addEventListeners(){
        const photoGridImage = this._card.querySelector('.photo-grid__image'); 
        const photoGridHeart = this._card.querySelector('.photo-grid__heart-react');
        const deleteIcon = this._card.querySelector('.photo-grid__delete-icon'); 
        const imagePopupModalContainer = document.querySelector('.popup-modal__container');


        photoGridHeart.addEventListener('click', (e)=> {
            e.preventDefault(); 
            photoGridHeart.classList.toggle('photo-grid__heart-react_dark')
         });
        deleteIcon.addEventListener('click', (e)=> {
        e.target.closest('.photo-grid__card').remove();
        });
        photoGridImage.addEventListener('click', (e) =>{
            e.preventDefault(); 
            imagePopupOpen(this._name, this._link); 
            modalOpen(imagePopupModalContainer); 
        });
    }

 

}

export default Card; 