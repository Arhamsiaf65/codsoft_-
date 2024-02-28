    const navBar = document.querySelector('.navBar')
    const links = document.querySelectorAll('.navBar a');
    const menuIcon = document.querySelector('#menuIcon');
    links.forEach(link => link.addEventListener
        ("click", ()=> {
            links.forEach(otherLink => {
                if(otherLink !== link){
                    otherLink.classList.remove('active')
                }
            },
            link.classList.add('active'))
    }))



menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})
    
window.addEventListener("scroll", () => {
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
})
navBar.addEventListener("click", ()=> {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.homeContent, #aboutContent h2, .services h1 span, .projects h1, .contact h2', { origin: 'top'});
 ScrollReveal().reveal('#homeImage, .services div, .sampleProjects, form', { origin: 'bottom'});


 const typed = new Typed('.changingText', 
 {
    strings: ['Frontend Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });