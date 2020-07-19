class FormValidator {
    constructor(settings, formElement){
      this._inputSelector = settings.inputSelector; 
      this._submitButtonSelector = settings.SubmitButtonSelector; 
      this._inactiveButtonClass = settings.inactiveButtonClass; 
      this._inputErrorClass = settings.inputErrorClass; 
      this._errorClass = settings.errorClass; 

      this._formElement = formElement; 
 
    }
    _displayInputError(inputItem){
        const errorElement = formItem.querySelector(`#${inputItem.id}-error`);
        inputItem.classList.add(inputErrorClass);
        errorElement.textContent = inputItem.validationMessage;
        errorElement.classList.add(errorClass);

    }

    _removeInputError(inputItem){
        const errorElement = formItem.querySelector(`#${inputItem.id}-error`)
        inputItem.classList.remove(inputErrorClass);
        errorElement.classList.remove(errorClass);
        errorElement.textContent = "";
    }

    _isValid(inputItem){
        if (!inputItem.validity.valid) {
            displayInputError(inputItem);
          } else {
            removeInputError(inputItem);
          }
    }

    _isInvalid(inputArray){
        return inputArray.some((inputItem) => {
            return !inputItem.validity.valid;
          });
    }

    _toggleButtonState(inputArray){
        const buttonItem = this._formElement.querySelector(this._submitButtonSelector); 
        if (isInvalid(inputArray)) {
            buttonItem.classList.add(inactiveButtonClass);
            buttonItem.classList.add(errorClass);
          }
          else {
            buttonItem.classList.remove(inactiveButtonClass);
          }
    }

    _setEventListeners(){
        const formList = Array.from(document.querySelectorAll(this._formSelector)); 
        const buttonItem = this._formElement.querySelector(this._submitButtonSelector); 

        this._toggleButtonState(formList, buttonItem); 
        formList.forEach((inputItem) => {
            inputItem.addEventListener('input', () => {
                this._isValid(inputItem); 
                this._toggleButtonState(formList, buttonItem); 
            })
        })

    }
    
    _enableValidation(){
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault(); 
        })
        this._setEventListeners(); 
    }
}
export default FormValidator; 
