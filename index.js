// Initialize heartCounter from sessionStorage, defaulting to 1
const sessionStorageCounter = sessionStorage.getItem('heartCounter')
let heartCounter = parseInt(sessionStorageCounter) || 1;

if (sessionStorageCounter) {
    const homeHeart1 = document.querySelector('.homeheart1')
    const homeHeartn = document.querySelector(`.homeheart${parseInt(sessionStorageCounter)}`)
    if (homeHeart1) {
        homeHeart1.classList.add('homeheartinvisible');
    }

    if (homeHeartn) {
        homeHeartn.classList.remove('homeheartinvisible');
    }
}

setInterval(() => {
    // Stop if we've reached the last heart
    if (heartCounter === 11) {
        return;
    }

    const heartToHideClass = `.homeheart${heartCounter}`;
    const heartToHide = document.querySelector(heartToHideClass);

    // Increment counter before showing next heart
    heartCounter++;
    const heartToShowClass = `.homeheart${heartCounter}`;
    const heartToShow = document.querySelector(heartToShowClass);

    // Hide the current heart
    if (heartToHide) {
        heartToHide.classList.add('homeheartinvisible');
    }

    // Show the next heart
    if (heartToShow) {
        heartToShow.classList.remove('homeheartinvisible');
    }

    // Persist the updated counter
    sessionStorage.setItem('heartCounter', heartCounter);
}, 10000);