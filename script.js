// ========== HEADER SCROLL EFFECT ==========
const header = document.querySelector('.header-main');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled'); // ← Corrigé (avant: eader)
    }
});

// ========== LEAGUE DROPDOWN ==========
const leagueDropdown = document.querySelector('.league-dropdown');
const leagueBtn = document.querySelector('.league-btn');

// Toggle dropdown au clic
leagueBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le lien de naviguer
    leagueDropdown.classList.toggle('active');
});

// Ferme le dropdown si clic en dehors
document.addEventListener('click', (e) => {
    if (!leagueDropdown.contains(e.target)) {
        leagueDropdown.classList.remove('active');
    }
});

// Slide Nav

function scrollSlider (direction) {
    const sliderTrack = document.getElementById('sliderTrack');
    const cardWidth = 400;
    const gap =30;
    const scrollAmount = (cardWidth + gap)*direction;

    sliderTrack.scrollBy({
        left: scrollAmount,
        behavior:"smooth"
    });

    setTimeout(() => {
        const maxScroll = sliderTrack.scrollWidth - sliderTrack.clientWidth;
        if (sliderTrack.scrollLeft >= maxScroll - 10) {
            setTimeout(() => {
                sliderTrack.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }, 500);
        }
    }, 500);
}

//Auto-scroll 
function startAutoScroll(){
    autoScrollInterval = setInterval(() => {
        scrollSlider(1);
    }, scrollDelay)
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Démarre l'auto-scroll
startAutoScroll();

//Pause au hover sur le slider 
sliderTrack.addEventListener('mouseenter', stopAutoScroll);
sliderTrack.addEventListener('mouseleave', startAutoScroll);


//Pause quand on clique sur les boutons de navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click' , () => {
        stopAutoScroll();
        setTimeout(startAutoScroll, 5000);
    });
});




