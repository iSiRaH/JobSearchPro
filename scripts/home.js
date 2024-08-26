function getEmail(){
    const userEmail = document.querySelector('.js-mail').value;
    localStorage.setItem('userEmail',userEmail);
}