AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// selecting identities
const harmburger = document.querySelector('.harmburger')
const navBar = document.querySelector('.nav__menu')

harmburger.addEventListener('click', () =>{
  harmburger.classList.toggle('show')
  navBar.classList.toggle('show')
})

//Removing navbar items
const navLists = document.querySelectorAll('.nav__menu li')
navLists.forEach((item) =>{
  item.addEventListener('click', function(){
    harmburger.classList.remove('show')
    navBar.classList.remove('show')
  })
})

//validating form email
const forwardEmail = document.querySelector('#send')

const sendEmail = () => {
  const mailTo = document.querySelector('#mailto').value
  const subject = document.querySelector('#subject').value
  const body = document.querySelector('#body').value
  const linkTag = document.querySelector('#send')
  linkTag.setAttribute(
    "href", 'mailto:${mailto}?subject=${subject}&body=${body}'
  )
}
forwardEmail.addEventListener('click', sendEmail)