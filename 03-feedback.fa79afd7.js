document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,a=t.message,l=localStorage.setItem("feedback-form-state",e.currentTarget);l&&console.log(l);var o={email:r.value,message:a.value};console.log(o),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.fa79afd7.js.map
