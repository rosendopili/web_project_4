class FormValidator {
    constructor(settings, formElement){
      this._inputSelector = settings.inputSelector; 
      this._submitButtonSelector = settings.submitButtonSelector; 
      this._inactiveButtonClass = settings.inactiveButtonClass; 
      this._inputErrorClass = settings.inputErrorClass; 
      this._errorClass = settings.errorClass; 

      this._formElement = formElement; 
 
    }
    _displayInputError(inputItem){
        const errorElement = this._formElement.querySelector(`#${inputItem.id}-error`);
        inputItem.classList.add(this._inputErrorClass);
        errorElement.textContent = inputItem.validationMessage;
        errorElement.classList.add(this._errorClass);

    }

    _removeInputError(inputItem){
        const errorElement = this._formElement.querySelector(`#${inputItem.id}-error`)
        inputItem.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
    }

    _isValid(inputItem){
        if (!inputItem.validity.valid) {
            this._displayInputError(inputItem);
          } else {
            this._removeInputError(inputItem);
          }
    }

    _isInvalid(inputArray){
        return inputArray.some((inputItem) => {
            return !inputItem.validity.valid;
          });
    }

    _toggleButtonState(inputArray){
        const buttonItem = this._formElement.querySelector(this._submitButtonSelector);
        console.log(buttonItem);  
        if (this._isInvalid(inputArray)) {
            buttonItem.classList.add(this._inactiveButtonClass);
            buttonItem.classList.add(this._errorClass);
          }
          else {
            buttonItem.classList.remove(this._inactiveButtonClass);
          }
    }

    _setEventListeners(){
        const inputArray = Array.from(this._formElement.querySelectorAll(this._inputSelector)); 
        const buttonItem = this._formElement.querySelector(this._submitButtonSelector); 

        this._toggleButtonState(inputArray, buttonItem); 
        inputArray.forEach((inputItem) => {
            inputItem.addEventListener('input', () => {
                this._isValid(inputItem); 
                this._toggleButtonState(inputArray, buttonItem); 
            })
        })
    }

    enableValidation(){
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault(); 
        })
        this._setEventListeners(); 
    }
}

export default FormValidator; 
