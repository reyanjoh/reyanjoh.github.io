const userName = document.querySelector(".user-name");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const warningText = document.querySelector(".warning-text");

const successMsg = document.querySelector(".success-msg").style;

let logged = false;
let hintCounter = 0;

loggedOrNot = () => {
    form.style.display = 'none';
    successMsg.display = 'flex';
    successMsg.alignItems = 'center';
    successMsg.justifyContent = 'center';
}

form.addEventListener("submit", function(event){
    event.preventDefault();
});

if(logged === true){
    loggedOrNot();
}
      
if(logged === false){
    submit.addEventListener("click", ()=>{
        if(userName.value === "" || userName.value != 'admin' && password.value != 'admin'){
            submit.style.marginTop = Math.floor(Math.random() * 15) + 'rem';
            // console.log(userName.value);
            hintCounter++;
            warningText.innerText = 'attempt: ' + hintCounter;
            if(hintCounter === 3){
                warningText.innerText = 'Hint!: common admin logins';
            }else if(hintCounter === 5){
                warningText.innerText = 'Really?';
            }else if(hintCounter === 7){
                warningText.innerText = 'youre that dumb??';
            }else if(hintCounter === 8){
                warningText.innerText = 'aight Get out!';
                submit.disabled = true;
            }
        } 
        else{
            loggedOrNot();
        }
        
    });
}








console.log(userName.value);














