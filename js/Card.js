
const imagePopupOpen = (data) => {
    imagePopup.setAttribute('src', `${data.link}`) 
    imagePopupDescription.textContent = `${data.name}`; 
 }; 

 const modalOpen = (modal) => {
    console.log(modal); 
    overlayHandler(); 
    modal.classList.add('modal__on');
    document.addEventListener('keyup', escapeHandler); 
}

class Card {
    constructor(data, cardTemplateSelector){
        this._link = data.link; 
        this._text = data.text; 
        this._cardTemplateSelector = cardTemplateSelector; 
    } 

    _getCardTemplate(){
        const cardTemplate = document
            .querySelector(this._cardTemplateSelector)
            .content 
            .querySelector('.photo-grid__card')
            .cloneNode(true); 
        
        return cardTemplate; 
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
            imagePopupOpen(this.name, this.link); 
            modalOpen(imagePopupModalContainer); 
        });
    }

    generateCard = () => {
        const element = this._getCardTemplate();   
        
        this._card = element; 

        element.querySelector('.photo-grid__decription') = this._name; 
        element.querySelector('.photo-grid__image').style.backgroundImage = `${this._link}`; 
    
        this._addEventListeners(); 
    
        return this._card; 
    }

}

export default Card; 