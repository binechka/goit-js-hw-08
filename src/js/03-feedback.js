const form = document.querySelector(".form")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
  const {
    elements: { email, message }
  } = event.currentTarget;
    const setedItems = localStorage.setItem("feedback-form-state", event.currentTarget)
    if (setedItems) {
        console.log(setedItems);
    }

    let obj = { email: email.value, message: message.value };
    console.log(obj);
    event.currentTarget.reset();
  
});

