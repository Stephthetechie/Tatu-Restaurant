
let navIcon = document.getElementById('navIcon');
let navList = document.getElementById('navList');
let navItem = document.querySelectorAll("nav ul li a")
    navList.style.maxHeight = "0px"
// navIcon.addEventListener("click", toggleMenu)

function toggleMenu() {
    if (navList.style.maxHeight == "0px") {
        navList.style.maxHeight = "500px"
    } else {
        navList.style.maxHeight = "0px"
    }
  }
  


// Add event listeners to navigation links
let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link=>{
  link.addEventListener("click",()=>{
    toggleMenu()
  })
})


// Carousel functionality
let carousel = document.getElementById('carouselExample');
let carouselIndicators = document.querySelectorAll('.carousel-indicators li');
let carouselItems = document.querySelectorAll('.carousel-item');

carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
  });
});

// Booking form functionality
let bookingForm = document.getElementById('bookingForm');
let bookingDateInput = document.getElementById('bookingDate');
let bookingTimeInput = document.getElementById('bookingTime');

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Add validation and submission logic here
});

// Contact form functionality
let contactForm = document.getElementById('contactForm');
let contactNameInput = document.getElementById('contactName');
let contactEmailInput = document.getElementById('contactEmail');
let contactMessageInput = document.getElementById('contactMessage');

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Add validation and submission logic here
});

let sections = document.querySelectorAll('section')


window.onscroll = () =>{
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if (top >= offset && top< offset + height) {
          sec.classList.add('show-animate')
      }else{
          sec.classList.remove('show-animate')
      }

  })
}

// window.addEventListener('scroll', reveal);

// function reveal(){
  
//   let reveals = document.querySelectorAll(".showAnimate");

//     for (let i = 0; i < reveals.length; i++) {
//       let windowheight = window.innerHeight;
//       let revealtop = reveals[i].getBoundingClientRect().top;
//       let revealpoint = 150;

//     if (revealtop < windowheight - revealpoint) {
//       reveals[i].classList.add('active');
//     }else{
//       reveals[i].classList.remove('active')
//     }

//   }
// }
 

window.addEventListener('scroll', reveal);

function reveal(){
 
  let reveals = document.querySelectorAll(".showAnimate");

    for (let i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active')
    }

  }
}
 