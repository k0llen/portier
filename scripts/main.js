
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400){
        document.querySelector(".button__up").classList.add("button__up-active");
    } else {
        document.querySelector(".button__up").classList.remove("button__up-active");
    };
});



document.querySelector(".button__up").addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// burger handler

(function () {
    const menu = document.querySelector('.header__nav');
    const burgerItem = document.querySelector('.burger');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const noScroll = document.querySelector('body');
    burgerItem.addEventListener('click', () =>{
        menu.classList.add('header__nav-active');
        noScroll.classList.add('body_noscroll');
    });
    menuCloseItem.addEventListener('click', () =>{
        menu.classList.remove('header__nav-active');
        noScroll.classList.remove('body_noscroll');
    });

}());



