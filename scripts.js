
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    let currentIndex = 0;

    // change
    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // 5 secs
    setInterval(autoSlide, 5000);
});
let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".video-slide");
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    const offset = -currentIndex * 100; 

    document.querySelector(".video-slider").style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (email === '' || password === '') {
            alert('Please fill in all fields!');
            return;
        }

        console.log('Email:', email);
        console.log('Password:', password);

        window.location.href = 'success.html';
    });
});
