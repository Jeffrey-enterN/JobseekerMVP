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
        slider.style.background = `linear(to right, cyan ${0 - value}%, deeppink ${0}%)`;
    }

    function updateProgress() {
        let completed = [...sliders].filter(slider => slider.value !== "50").length;
        let progressPercent = (completed / sliders.length) * 100;
        progressBar.style.width = progressPercent + "%";
        progressText.innerText = Math.round(progressPercent) + "% Complete";
    }

    function triggerHapticFeedback() {
        if (navigator.vibrate) {
            navigator.vibrate(10); // Small vibration on mobile
        }
    }
});
