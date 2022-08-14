document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:r}}=e.currentTarget,a=localStorage.setItem("feedback-form-state",e.currentTarget);a&&console.log(a);let l={email:t.value,message:r.value};console.log(l),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.35d5e777.js.map
