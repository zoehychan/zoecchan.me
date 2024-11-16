const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
html.classList.toggle('dark');
// Optionally, store the user's preference in localStorage
if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}
});

// On page load, check localStorage for theme preference
if (localStorage.getItem('theme') === 'dark') {
html.classList.add('dark');
}


window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  };

