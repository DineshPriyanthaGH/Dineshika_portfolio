var typed= new Typed(".multiple-text",{
    strings:["HR Recruiter","Global HeadHunter","Talent Aquisition","Hiring Specialist"],

    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
    });

   

    const menuIcon = document.getElementById('menu-icon');
    const navbarLinks = document.getElementById('navbar-links');

    menuIcon.addEventListener('click', () => {
        navbarLinks.classList.toggle('show');
    });
});


