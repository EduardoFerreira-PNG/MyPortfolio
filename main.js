window.addEventListener("scroll", function(){
    let header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
})

const btnMobile = document.getElementById('btn__mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefalult()
    const nav = document.querySelector(".nav");
    nav.classList.toggle('active')
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active){
        
     event.currentTarget.setAttribute('aria-label', 'fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'abrir menu')
    }

}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


