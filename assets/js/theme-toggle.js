document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const themeIcon = toggleButton.querySelector(".theme-icon");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeIcon.src = "/assets/icons/sun.svg"; // Set initial icon
    } else {
        themeIcon.src = "/assets/icons/moon.svg";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeIcon.src = "/assets/icons/sun.svg";
        } else {
            localStorage.setItem("theme", "dark");
            themeIcon.src = "/assets/icons/moon.svg";
        }
    });
});
