import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const emailEl = document.querySelector('input[name="email"]')
const messageEl = document.querySelector('textarea[name="message"]')
let obj = {}
form.addEventListener("input", throttle(onFormInput, 500)) 
function onFormInput() {
  obj = { email:emailEl.value, message:messageEl.value}
  localStorage.setItem("feedback-form-state", JSON.stringify(obj))
}

function getObj() {
  let newObj = JSON.parse(localStorage.getItem("feedback-form-state"))
  if (newObj) {  
    emailEl.value = newObj.email
    messageEl.value = newObj.message
  }
}
getObj()

  form.addEventListener("submit", (event => {
    event.preventDefault();
    form.reset();
    
  }))



