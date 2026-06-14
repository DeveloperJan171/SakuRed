const startDate = new Date(2016, 5, 17);

function updateCounter() {

    const now = new Date();

    let years =
        now.getFullYear() -
        startDate.getFullYear();

    let months =
        now.getMonth() -
        startDate.getMonth();

    let days =
        now.getDate() -
        startDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days += previousMonth.getDate();
    }

    if (months < 0) {

        years--;

        months += 12;
    }

    document.getElementById("years").textContent =
        years;

    document.getElementById("months").textContent =
        months;

    document.getElementById("days").textContent =
        days;

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");

    document.getElementById("liveTimer").textContent =
        `${hours}:${minutes}:${seconds}`;
}

updateCounter();

setInterval(updateCounter, 1000);