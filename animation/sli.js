const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
    // Scroll reveal function
    function reveal() {
      const reveals = document.querySelectorAll('.hidden');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          if (element.classList.contains('service-box') || element.classList.contains('portfolioa-item')) {
            element.classList.add('reveal-scale');
          }
          element.classList.add('reveal');
        }
      });
    }

    window.addEventListener('scroll', reveal);

    // Sound effect on hover
    const hoverSound = document.getElementById('hover-sound');
    document.querySelectorAll('.portfolioa-item, button, .service-box').forEach(item => {
      item.addEventListener('mouseenter', () => {
        hoverSound.play();
      });
    });




    function revealw() {
      const reveals = document.querySelectorAll('.hidden1');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('revealw');
        } else {
          reveals[i].classList.remove('revealw');
        }
      }
    }

    window.addEventListener('scroll', revealw);

    function reveala() {
      const header = document.querySelector('h2');
      const paragraph = document.querySelector('p');
      const button = document.querySelector('.button-container');
      const image = document.querySelector('img');

      const windowHeight = window.innerHeight;
      const headerTop = header.getBoundingClientRect().top;
      const paragraphTop = paragraph.getBoundingClientRect().top;
      const buttonTop = button.getBoundingClientRect().top;
      const imageTop = image.getBoundingClientRect().top;

      const elementVisible = 150;

      if (headerTop < windowHeight - elementVisible) {
        header.classList.add('reveal-text');
      }

      if (paragraphTop < windowHeight - elementVisible) {
        paragraph.classList.add('reveal-paragraph');
      }

      if (buttonTop < windowHeight - elementVisible) {
        button.classList.add('reveal-button');
      }

      if (imageTop < windowHeight - elementVisible) {
        image.classList.add('reveal-image');
      }
    }

    window.addEventListener('scroll', reveala);

    const privacyPolicy = document.getElementById('privacy-policy');

// Pause animation when end of text is reached
privacyPolicy.addEventListener('animationiteration', () => {
  const computedStyle = window.getComputedStyle(privacyPolicy, '::after');
  if (computedStyle.width === '100%') {
    privacyPolicy.style.animationPlayState = 'paused';
  }
});


// //toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// //image needed here
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }


// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () =>  {
//     sections.forEach(sec => {
//        let top = window.scrollY;
//        let offset = sec.offsetTop - 150;
//        let height = sec.offsetHeight;
//        let id = sec.getAttribute('id');

//        if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
//             });
//        };
//     });
// //for navbar

//     let header = document.querySelector('header');

//     header.classList.toggle('stickly', window.scrollY > 100);

//     //for icon when click on navbar
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

// //get apin coderhy
// ScrollReveal({
//     reset:true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
// // script.js
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// // Form validation
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("contact-form");
//     const nameInput = document.getElementById("name");
//     const emailInput = document.getElementById("email");
//     const messageInput = document.getElementById("message");

//     form.addEventListener("submit", function (event) {
//         if (!validateForm()) {
//             event.preventDefault();
//         }
//     });

//     function validateForm() {
//         let isValid = true;

//         if (nameInput.value.trim() === "") {
//             isValid = false;
//             setErrorFor(nameInput, "Name cannot be blank");
//         } else {
//             setSuccessFor(nameInput);
//         }

//         if (emailInput.value.trim() === "") {
//             isValid = false;
//             setErrorFor(emailInput, "Email cannot be blank");
//         } else if (!isEmail(emailInput.value.trim())) {
//             isValid = false;
//             setErrorFor(emailInput, "Email is not valid");
//         } else {
//             setSuccessFor(emailInput);
//         }

//         if (messageInput.value.trim() === "") {
//             isValid = false;
//             setErrorFor(messageInput, "Message cannot be blank");
//         } else {
//             setSuccessFor(messageInput);
//         }

//         return isValid;
//     }

//     function setErrorFor(input, message) {
//         const formControl = input.parentElement;
//         const errorMessage = formControl.querySelector("small");

//         errorMessage.innerText = message;
//         formControl.className = "form-control error";
//     }

//     function setSuccessFor(input) {
//         const formControl = input.parentElement;
//         formControl.className = "form-control success";
//     }

//     function isEmail(email) {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     }
// });
// Scroll reveal effect for sections

