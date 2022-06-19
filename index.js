const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click",()=>{
 hamburger.classList.toggle("active");
});

const formInputs = document.querySelectorAll(".form-input");
const contactIcon = document.querySelector(".form__icon");
const formContainer = document.querySelector(".form__container")

contactIcon.addEventListener("click",()=>{
    formContainer.classList.toggle("active");
})

formInputs.forEach(i =>{
    i.addEventListener("focus",()=>{
        i.previousElementSibling.classList.add("active")
    });
})

formInputs.forEach(i =>{
    i.addEventListener("blur",()=>{
        if(i.value===""){
            i.previousElementSibling.classList.remove("active")
        }else{
            i.previousElementSibling.classList.add("active")
        }
        
    });
})