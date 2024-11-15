const navbar=document.getElementById('navBarid')


const menu=document.getElementById('menubar')

const head=document.querySelector('header')

const list=document.getElementById('nav-list')

const registerBtn=document.querySelector('register-btn')

function toggleBtn(){
    navbar.classList.toggle('hidemenu')
    
}

menu.addEventListener('click',toggleBtn)


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the nav element
    const nav = document.querySelector('nav');
    
    // Function to handle scroll
    function handleScroll() {
        // Add or remove the 'scrolled' class based on scroll position
        if (window.scrollY > 50 )  {
            // menu.style.display='block'
            nav.classList.add('scrolled');
        
        }
        

        else {
            nav.classList.remove('scrolled');
            // menu.style.display='none'
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
