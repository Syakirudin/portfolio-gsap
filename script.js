// MENU SHOW

const showMenu = (toggleId,navId) =>{
    const toggle =document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
        
    }
}

showMenu('nav-toggle', 'nav-menu')


// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home_title,{}')
sr.reveal('.home_scroll,{delay:200}')
sr.reveal('.home_img',{origin:'right',delay:200})

sr.reveal('.about_img',{delay:500})
sr.reveal('.about_subtitle',{delay:300})
sr.reveal('.about_profession',{delay:400})
sr.reveal('.about_text',{delay:500})
sr.reveal('.about_social-icon',{delay: 600,interval:200})

sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_name',{distance:'20px', delay:50, interval:100})
sr.reveal('.skills_img',{delay:400})

sr.reveal('.portfolio_img',{interval:200})

sr.reveal('.contact_subtitle',{})
sr.reveal('.contact_text',{interval:200})
sr.reveal('.contact_input',{delay:400})
sr.reveal('.contact_button',{delay:500})


// COUNTER

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt( valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval /endValue);
    let counter = setInterval( function () {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval (counter);
        }
    }, duration); 
});

const text = document.querySelector(".home_text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "HELLO";
    }, 0);
    setTimeout(() => {
        text.textContent = "السلام علیکم";
    }, 10000);
    setTimeout(() => {
        text.textContent = "안녕하세요";
    }, 20000);
    setTimeout(() => {
        text.textContent = "こんにちは";
    }, 30000);
    setTimeout(() => {
        text.textContent = "你好";
    }, 40000);
}

textLoad();
setInterval(textLoad,50000);