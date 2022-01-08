const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
 
togglePassword.addEventListener('click', function (e) {

  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
        
  this.classList.toggle('fa-eye-slash');
});


// Navbar Mobile
const hamburger = document.querySelector(".navbar-hamburger");
const navNavbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navNavbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navNavbar.classList.remove("active");
}))

let register = document.querySelector('.register');

document.getElementById('register').onclick = () => {
  register.classList.toggle('active');
}

document.getElementById('btn-register').onclick = () => {
  register.classList.toggle('active');
}

document.querySelector('.close').onclick = () => {
  register.classList.remove('active');
}

window.onscroll = () => {
  register.classList.remove('active');
}



    // Desenvolvido por Renilson Medeiros [Malcoon] - Dezembro 2021

    // Twitter: @malcoon_
    // Instagram: @_malcoon
    // Github: github.com/malcoon