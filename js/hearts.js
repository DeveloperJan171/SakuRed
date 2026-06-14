const heartContainer = document.getElementById("heart-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    // Random size
    const size = Math.random() * 25 + 15;

    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Random horizontal position
    heart.style.left = `${Math.random() * 100}%`;

    // Random animation duration
    heart.style.animationDuration =
        `${6 + Math.random() * 8}s`;

    // Random transparency
    heart.style.opacity =
        `${0.2 + Math.random() * 0.8}`;

    // Random drift left/right
    heart.style.setProperty(
        "--drift",
        `${Math.random() * 200 - 100}px`
    );

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000);
}

// Generate hearts continuously
setInterval(createHeart, 300);