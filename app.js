let navbar = document.getElementById('navbar');

window.onscroll = function(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        navbar.classList.add('scrolled');
    } else{
        navbar.classList.remove('scrolled');

    }
}

