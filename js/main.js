document.addEventListener('DOMContentLoaded', function() {
  var singInButton = document.querySelector('.signin'),
      popUp = document.querySelector('.modal'),
      close = document.querySelector('.close'),
      nameInput = document.querySelector('#user'),
      passInput = document.querySelector('#pass')
      submitButton = document.querySelector('.submit');


  singInButton.addEventListener('click', function() {
    popUp.style.display = 'block';
  });

  close.addEventListener('click', function() {
    popUp.style.display = 'none';
  });

  submitButton.addEventListener('click', function() {
    nameInput.classList.add('error');
    passInput.classList.add('error');
  });

  nameInput.addEventListener('mouseover', function() {
    nameInput.classList.remove('error');
  });

  passInput.addEventListener('mouseover', function() {
    passInput.classList.remove('error');
  });

});
