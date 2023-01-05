import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback - form - state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextAreaInput, 500));

form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  console.log(formData);
}) 

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextAreaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    console.log(savedMessage);
    textarea.value = savedMessage;
  }
}
