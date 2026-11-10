// Keyboard navigation and a slide counter. CSS scroll snapping does the rest.
const slides = [...document.querySelectorAll("main.slides > section")];
const counter = document.getElementById("counter");
let current = 0;

function show(index) {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  slides[next].scrollIntoView();
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      current = slides.indexOf(entry.target);
      counter.textContent = `${current + 1} / ${slides.length}`;
      document.body.style.setProperty("--progress", (current + 1) / slides.length);
      history.replaceState(null, "", `#${entry.target.id}`);
    }
  },
  { threshold: 0.6 },
);
slides.forEach((slide) => observer.observe(slide));

const keys = {
  ArrowRight: () => show(current + 1),
  ArrowDown: () => show(current + 1),
  PageDown: () => show(current + 1),
  " ": () => show(current + 1),
  ArrowLeft: () => show(current - 1),
  ArrowUp: () => show(current - 1),
  PageUp: () => show(current - 1),
  Home: () => show(0),
  End: () => show(slides.length - 1),
  f: () =>
    document.fullscreenElement
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen(),
};

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const action = keys[event.key.length === 1 ? event.key.toLowerCase() : event.key];
  if (!action) return;
  event.preventDefault();
  action();
});
