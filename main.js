const PASSWORD = "0617";

/* ===================================
ERROR MODAL
=================================== */

function showModal(message, gif){

    document.getElementById("errorText").textContent =
        message;

    document.getElementById("errorGif").src =
        gif;

    document.getElementById("errorModal").style.display =
        "flex";

}

const closeErrorBtn =
document.getElementById("closeError");

if(closeErrorBtn){

    closeErrorBtn.addEventListener("click", () => {

        document
        .getElementById("errorModal")
        .style.display = "none";

    });

}

/* ===================================
PASSWORD GATE
=================================== */

const unlockBtn =
document.getElementById("unlock-btn");

unlockBtn.addEventListener("click", () => {

    const input =
        document
        .getElementById("password-input")
        .value
        .trim();

    /* Empty Input */

    if(input.length === 0){

        showModal(
            "You forgot to enter something ❤️",
            "assets/images/confused-cat.gif"
        );

        return;

    }

    /* Numbers Only */

    if(!/^\d+$/.test(input)){

        showModal(
            "Numbers only, Bb. ❤️",
            "assets/images/confused-cat.gif"
        );

        return;

    }

    /* Correct Password */

    if(input === PASSWORD){

        document
            .getElementById("password-screen")
            .style.display = "none";

        const mainContent =
            document.getElementById("main-content");

        mainContent.style.display = "block";

        setTimeout(() => {

            mainContent.classList.add("show");

        }, 50);

        window.scrollTo(0,0);

    }

    /* Wrong Password */

    else{

        showModal(
            "Nope. Try again. 😼❤️",
            "assets/images/no-cat.gif"
        );

    }

});

/* ===================================
PRESS ENTER TO UNLOCK
=================================== */

document
.getElementById("password-input")
.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){

        unlockBtn.click();

    }

});

/* ===================================
FINAL SECTION ANIMATION
=================================== */

const finalSection =
document.querySelector(".final-content");

const finalObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.4
}

);

if(finalSection){

    finalObserver.observe(finalSection);

}