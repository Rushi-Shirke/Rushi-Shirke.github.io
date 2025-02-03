/* Loading */
function hideLoading(){
    document.getElementById('loading').style.opacity = '0'
    document.getElementById('loading').style.zIndex = '-1'
}

/* MENU SHOW */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if (toggle && nav){
        
        toggle.addEventListener('click', () => {
            const navLink = document.querySelectorAll('.nav_link')
            
            nav.classList.toggle('show') 
        })
    }
}

console.log("Dont try to hack me :)")

showMenu ('nav-toggle', 'nav-menu')

/* Active and Remove Menu */
const navLink = document.querySelectorAll('.nav_link')

function linkAction (){
    // Active link
    navLink.forEach(n => {
        n.classList.remove('active')
        
    })
    this.classList.add('active')
    // Remove menu for mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}




navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll Reveal Animations */
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* Scroll Home */
sr.reveal('.caption',{})
sr.reveal('.resume-button',{delay: 200})
sr.reveal('.home_img',{delay: 400})
sr.reveal('.home_social-icon',{interval: 200})

/* Scroll About */
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200})
sr.reveal('.about_text',{delay: 200})

/* Scroll Skills */
sr.reveal('.skills_block',{interval: 200})

/* Scroll Projects */
sr.reveal('.project_card',{interval: 200})

/* Scroll Research papers */
sr.reveal('.research_card',{interval: 200})

/* Scroll Contact */
sr.reveal('.achieve_img',{interval: 200})