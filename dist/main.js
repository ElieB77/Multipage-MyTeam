

const hamburger = document.querySelector('.hamburger-btn');
const navContainer = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar')
const closeNavBtn = document.querySelector('.close-nav-btn');
const directorsCardBtn = document.querySelectorAll('.directors-card-img__2');
const directorsCardCloseBtn = document.querySelectorAll('.directors-back-card__close');
const directorsFrontCard = document.querySelectorAll('.directors-front-card');
const directorsBackCard = document.querySelectorAll('.directors-back-card');

hamburger.addEventListener('click', toggleHamburger);
closeNavBtn.addEventListener('click', closeNav);


function toggleHamburger() {
    navbar.style.transform = 'translateX(0)';
    navContainer.style.visibility = 'visible';
};

function closeNav() {
    navbar.style.transform = 'translateX(100vw)';
    navContainer.style.visibility = 'hidden';
};

navContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-menu')) {
        closeNav()
    }
})

directorsCardBtn.forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', () => {
        directorsFrontCard[i].classList.toggle('hide-front-card');
        directorsBackCard[i].style.display = 'block';
        console.log ('clicked')
    })
})

directorsCardCloseBtn.forEach((closeBtn, i) => {
    closeBtn.addEventListener('click', () => {
        directorsFrontCard[i].classList.remove('hide-front-card');
        directorsBackCard[i].style.display = 'none';
        console.log ('clicked')
    })
})

// FORM $$$$$$$$$$$$$$$$$$$$$$$$
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var message = document.forms["form"]["message"].value;
    var inputName = document.querySelector('.input-name');
    var inputMail = document.querySelector('.input-email');
    var textArea = document.querySelector('.textarea');
    var form = document.querySelector('.form');
    var inputPName = document.querySelector('.input-p__name');
    var inputPMail = document.querySelector('.input-p__email');
    var inputPMessage = document.querySelector('.input-p__message');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        const nameValue = inputName.value;
        const emailValue = inputMail.value;
        const message = textArea.value;

        if(nameValue === '') {
            document.querySelector('.error-message__name').style.display='block';
            inputName.classList.toggle('input-error');
            inputName.classList.remove('input-valid');
            inputPName.style.color = 'rgba(246, 126, 126, .6)';
        } else {
            document.querySelector('.error-message__name').style.display='none';
            inputName.classList.toggle('input-valid');
            inputName.classList.remove('input-error');
            inputPName.style.color = 'rgba(255, 255, 255, .5)'
        }

        if(emailValue === '') {
            document.querySelector('.error-message__email').style.display='block';
            inputMail.classList.toggle('input-error');
            inputMail.classList.remove('input-valid');
            inputPMail.style.color = 'rgba(246, 126, 126, .6)';
            }else if (!isEmail(emailValue)) {
                // setErrorFor(email);
              }  else {
                document.querySelector('.error-message__email').style.display='none';
                document.querySelector('.error-message-2').style.display='none';
                inputMail.classList.toggle('input-valid');
                inputName.classList.remove('input-error');
                inputPMail.style.color = 'rgba(255, 255, 255, .5)'
            }

        if(message === '') {
            document.querySelector('.error-message__message').style.display='block';
            textArea.classList.toggle('input-error');
            textArea.classList.remove('input-valid');
            inputPMessage.style.color = 'rgba(246, 126, 126, .6)';

        } else {
            document.querySelector('.error-message__message').style.display='none';
            textArea.classList.toggle('input-valid');
            inputName.classList.remove('input-error');
            inputPMessage.style.color = 'rgba(255, 255, 255, .5)'
        }

        return true;
    }

    function isEmail(email) {
        document.querySelector('.error-message-2').style.display = 'block';
        document.querySelector('.error-message__email').style.display = 'none';
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

   
  





