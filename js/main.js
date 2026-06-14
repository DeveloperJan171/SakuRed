const PASSWORD = "0617";

const unlockBtn =
document.getElementById("unlock-btn");

unlockBtn.addEventListener("click", () => {

    const input =
        document
        .getElementById("password-input")
        .value;

    if(input === PASSWORD){

        document
            .getElementById("password-screen")
            .style.display = "none";

        document
            .getElementById("main-content")
            .style.display = "block";

        window.scrollTo(0,0);

    } else {

        alert("Wrong date ❤️");
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