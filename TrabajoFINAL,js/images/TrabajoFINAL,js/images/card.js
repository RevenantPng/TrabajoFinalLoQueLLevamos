document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    let counter = 1;

    setInterval(() => {
        slider.style.transition = "transform 1s ease-in-out";
        slider.style.transform = "translateX(" + (-counter * 100) + "%)";

        counter++;

        if (counter === slider.children.length) {
            setTimeout(() => {
                slider.style.transition = "none";
                slider.style.transform = 'translateX(0)';
                counter = 1;
            }, 1000);
        }
    }, 3000);

    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginButton.addEventListener("click", function() {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    registerButton.addEventListener("click", function() {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    });

    document.querySelectorAll('.form-container form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            this.reset();
        });
    });
});