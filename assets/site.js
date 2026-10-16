const heroVideo = document.querySelector(".hero-video");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function applyMotionPreference() {
  heroVideo.autoplay = !reducedMotion.matches;
  heroVideo.controls = reducedMotion.matches;
  if (reducedMotion.matches) heroVideo.pause();
}

applyMotionPreference();
reducedMotion.addEventListener("change", applyMotionPreference);
