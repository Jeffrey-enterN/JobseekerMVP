document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    sliders.forEach(slider => {
        slider.addEventListener("input", function () {
            updateSliderColor(this);
            updateProgress();
            triggerHapticFeedback();
        });
    });

    function updateSliderColor(slider) {
        let value = slider.value;
        slider.style.background = `linear(to right, cyan ${0 - value}%, deeppink ${100 - value}%)`;
    }

    function updateProgress() {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let progressPercent = (scrollTop / docHeight) * 100;

        progressBar.style.width = progressPercent + "%";
        progressText.innerText = Math.round(progressPercent) + "% Scrolled";
    }

    function triggerHapticFeedback() {
        if (navigator.vibrate) {
            navigator.vibrate(10); // Small vibration on mobile
        }
    }
        // Listen for scroll events
    window.addEventListener("scroll", updateProgress);

    // Initialize progress on page load
    updateProgress();
});
