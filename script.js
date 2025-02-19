document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    sliders.forEach(slider => {
        slider.addEventListener("input", function () {
            updateSliderColor(this);
            triggerHapticFeedback();
        });

        // Initialize color on page load
        updateSliderColor(slider);
    });

    function updateSliderColor(slider) {
        let value = slider.value;
        let min = slider.min || 0;
        let max = slider.max || 100;
        let percent = ((value - min) / (max - min)) * 100;

        // Update background gradient based on current position
        slider.style.background = `linear-gradient(to right, cyan ${percent}%, deeppink ${percent}%)`;
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
