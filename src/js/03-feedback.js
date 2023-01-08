import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback - form - state';
const formInfo = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function fillFormFields() {
  try {
  const formInfoFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if(!formInfoFromLS) {
      return
  }
  for (const prop in formInfoFromLS) {
     form.elements[prop].value = formInfoFromLS[prop];
  }  
  } catch (err) {
      console.log(err);
  }  
}

fillFormFields();

function onFormInput (event) {
  const { target } = event;
  const fieldInfo = target.value;
  const fieldName = target.name;
  
formInfo[fieldName] = fieldInfo;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo));

} 

function onFormSubmit (event){
  event.preventDefault();
  form.reset();
  console.log(formInfo);
  localStorage.removeItem(STORAGE_KEY);
}






