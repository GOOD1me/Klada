function showPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');
    window.scrollTo(0, 0);
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const wrapper = document.getElementById('loader-wrapper');
        if (wrapper) {
            wrapper.classList.add('hidden');
            document.body.classList.add('loaded');
        }
    }, 3000);
});

setInterval(() => {
    const scoop = document.getElementById('main-scoop');
    const wrapper = document.getElementById('loader-wrapper');
    if (!scoop || !wrapper) return;
    const color = window.getComputedStyle(scoop).backgroundColor;
    if (color === "rgb(78, 52, 46)") { 
        wrapper.classList.add('show-wave');
    } else {
        wrapper.classList.remove('show-wave');
    }
}, 100);