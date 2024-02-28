
const animation_className = "va__fade-in";
const once_animation_className = "va__once";

document.addEventListener("DOMContentLoaded", function() {
    const targets = document.querySelectorAll('.' + animation_className);
  targets.forEach(target => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !target.classList.contains('active')) {
          target.classList.add('active');
          if (target.classList.contains(once_animation_className)) {
            observer.unobserve(target);
          }
        }
      });
    }, {
      threshold: 0.3
    });
    observer.observe(target);
  });
});