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
  function toggleList(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    content.classList.toggle('open');
    icon.classList.toggle('rotate'); // Optional: for a rotating arrow

    // Update the arrow direction
    if (content.classList.contains('open')) {
      icon.innerHTML = '&#9660;'; // Down arrow
    } else {
      icon.innerHTML = '&#9658;'; // Right arrow
    }
  }
