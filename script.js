document.addEventListener("DOMContentLoaded", function () {
    const primaryButton = document.querySelector(".primary");
    const secondaryButton = document.querySelector(".secondary");

    primaryButton.addEventListener("click", function () {
        alert("Get Started clicked!");
    });

    secondaryButton.addEventListener("click", function () {
        alert("Learn More clicked!");
    });
});
