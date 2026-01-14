// Getting DOM elements
const imageInput = document.getElementById('imageUpload')
const fname = document.getElementById('fname')
const email = document.getElementById('email')
const gitUName = document.getElementById('GitHub')
const submitBtn = document.getElementById('submit')
const errorMessage = document.querySelector('.message') 
const nameErrorMessage = document.querySelector('.nameError') 
const nameErrorDiv = document.querySelector('.nameContain');
const emailErrorMessage = document.querySelector('.emailError') 
const emailErrorDiv = document.querySelector('.emailContain')
const gitUNameErrorMessage = document.querySelector('.userNameError');
const gitUNameErrorDiv = document.querySelector('.unContain');


let namef;
let mail;
let uname;

const validateForm = function(fvalue = fname.value, evalue = email.value, uvalue = gitUName.value){
    let isValid = true;
        if(!fvalue){
            nameErrorDiv.style.opacity = 1;
            nameErrorMessage.textContent = 'Please input your name';
            isValid = false;
        }
        if(evalue.slice(-10) !== '@gmail.com'){
            emailErrorDiv.style.opacity = 1;
            emailErrorMessage.textContent = 'Please enter a valid email address';
            isValid = false;
        } 
        if(uvalue.at(0) !== '@' || uvalue.slice(2).length < 4){
            gitUNameErrorDiv.style.opacity = 1;
            gitUNameErrorMessage.textContent = 'Please enter a valid userName';
            isValid = false;
        }
    return isValid;
}






// Implementing functionality 
submitBtn.addEventListener('click', e => {
    e.preventDefault()
    if(validateForm()){
        namef = fname.value
        mail = email.value
        uname = gitUName.value
        localStorage.setItem('namef', namef)
        localStorage.setItem('mail', mail)
        localStorage.setItem('uname', uname)
        window.location.href = 'home.html';
    }
    return false;
})


