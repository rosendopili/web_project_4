const displayInputError = (formItem, inputItem, {errorClass, inputErrorClass}) => {
    const errorElement = formItem.querySelector(`#${inputItem.id}-error`);
    inputItem.classList.add(inputErrorClass);
    errorElement.textContent = inputItem.validationMessage;
    errorElement.classList.add(errorClass);
  };
  
  const removeInputError = (formItem, inputItem, {errorClass, inputErrorClass}) => {
    const errorElement = formItem.querySelector(`#${inputItem.id}-error`)
    inputItem.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };
  
  const isValid = (formItem, inputItem, rest) => {
    if (!inputItem.validity.valid) {
      displayInputError(formItem, inputItem, rest);
    } else {
      removeInputError(formItem, inputItem, rest);
    }
  };
  
  //checking the whole form's validity state to toggle button
  
  const hasInvalidInput = (inputArray) => {
    return inputArray.some((inputItem) => {
      return !inputItem.validity.valid;
    });
  };
  
  const toggleButtonState = (inputArray, buttonItem, {inactiveButtonClass, errorClass}) => {
    if (hasInvalidInput(inputArray)) {
      buttonItem.classList.add(inactiveButtonClass);
      buttonItem.classList.add(errorClass);
    }
    else {
      buttonItem.classList.remove(inactiveButtonClass);
    }
  };
  
  const enableValidation = ({formSelector, inputSelector, submitButtonSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formItem) => {
      formItem.addEventListener('submit', ((e) => {
        e.preventDefault();
      }));
  
      const inputArray = Array.from(formItem.querySelectorAll(inputSelector));
      const buttonItem = formItem.querySelector(submitButtonSelector);
  
      toggleButtonState(inputArray, buttonItem, rest);
      inputArray.forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        isValid(formItem, inputItem, rest);
        toggleButtonState(inputArray, buttonItem, rest);
      });
    });
  });
  }


enableValidation({
    formSelector: ".form-selector",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_error",
    errorClass: "error__active"
});