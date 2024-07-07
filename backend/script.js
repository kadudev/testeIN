 function toggleMenu() {
                const menuIcon = document.querySelector('.menu-icon');
                const mobileMenu = document.getElementById('mobileMenu');
                const overlay = document.getElementById('overlay');
                const body = document.getElementById('body');
                menuIcon.classList.toggle('open');
                mobileMenu.classList.toggle('open');
                overlay.classList.toggle('open');
                body.classList.toggle('open');
            }

            document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");
    let currentIndex = 0;
    const articles = document.querySelectorAll(".artigo");
    const totalArticles = articles.length;
    const articlesPerPage = 3;

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = 0;
        } else if (index > totalArticles - articlesPerPage) {
            currentIndex = totalArticles - articlesPerPage;
        } else {
            currentIndex = index;
        }
        const translateX = -currentIndex * (100 / articlesPerPage);
        carouselInner.style.transform = `translateX(${translateX}%)`;
    }

    prevBtn.addEventListener("click", function () {
        goToSlide(currentIndex - articlesPerPage);
    });

    nextBtn.addEventListener("click", function () {
        goToSlide(currentIndex + articlesPerPage);
    });

    goToSlide(0);
});

            
            
/*
            function submitToGoogleSheet(event) {
                event.preventDefault();
    
                const formData = new FormData(document.getElementById('contactForm'));
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
    
                const data = {
                    name: name,
                    email: email,
                    message: message
                };
    
                fetch('https://script.google.com/macros/s/AKfycbxeKrOWefh-6IFbE4EyLgbXQx3jwzpIdyaN98imzCw84i05U16pgX7mRKA5qLupSIJZ/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    console.log('Form submission successful:', response);
                    alert('Form submitted successfully!');
                    document.getElementById('contactForm').reset(); // Limpa o formulário após o envio
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                    alert('Error submitting form. Please try again later.');
                });
            }
    
            // Adiciona um listener para o evento submit no formulário
            document.getElementById('contactForm').addEventListener('submit', submitToGoogleSheet);*/