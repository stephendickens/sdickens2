var nameInput = document.getElementById('input');

document.querySelector('form#form').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(nameInput.value);    
});