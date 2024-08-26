const mailInputElement = document.querySelector('.js-user-mail');
mailInputElement.value = localStorage.getItem('userEmail');
localStorage.removeItem('userEmail');

const inputPassword = document.querySelector('.js-password-input');
const verifyPassword = document.querySelector('.js-check-password');
const fnameElement = document.querySelector('.js-fname');
const lnameElement = document.querySelector('.js-lname');

function checkPassword(){
    if(inputPassword.value !== ''){
    //     alert('Enter Password');
    // }
    // else{
        if(inputPassword.value === verifyPassword.value){
            if(mailInputElement.value === '' || fnameElement.value === '' || lnameElement.value === '' || inputPassword.value === '' || verifyPassword.value === ''){
                console.log('error');
            }
            else{
                alert('Signup Success');
            }
        }
        else{
            document.querySelector('.js-no-confirm-password').innerHTML = '*Passwords Mismatch';
        }
    }
}

function checkEmptyFields(){
    if(mailInputElement.value === ''){
        document.querySelector('.js-no-email').innerHTML = '*E-mail is required.<br>';
    }
    else{
        document.querySelector('.js-no-email').innerHTML = '';
    }

    if(fnameElement.value === ''){
        document.querySelector('.js-no-fname').innerHTML = '*First name is required.<br>';
    }
    else{
        document.querySelector('.js-no-fname').innerHTML = '';
    }

    if(lnameElement.value === ''){
        document.querySelector('.js-no-lname').innerHTML = '*Last name is required.<br>';
    }
    else{
        document.querySelector('.js-no-lname').innerHTML = '';
    }

    if(inputPassword.value === ''){
        document.querySelector('.js-no-password').innerHTML = '*Password is required.<br>';
    }
    else{
        document.querySelector('.js-no-password').innerHTML = '';
    }

    if(verifyPassword.value === ''){
        document.querySelector('.js-no-confirm-password').innerHTML = '*Enter password again.<br>';
    }
    else{
        document.querySelector('.js-no-confirm-password').innerHTML = '';
    }
}