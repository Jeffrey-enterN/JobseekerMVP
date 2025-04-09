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
        slider.style.background = `linear-gradient(to right, aqua ${value}%, deeppink ${0 - value}%)`;
    }
    function triggerHapticFeedback() {
        if (navigator.vibrate) {
            navigator.vibrate(10); // Small vibration on mobile
        }
    }
});
