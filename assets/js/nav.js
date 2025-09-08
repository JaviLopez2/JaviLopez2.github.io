document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuDropdown = document.getElementById('menu-dropdown');
    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        menuDropdown.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
        if (!menuDropdown.contains(e.target) && e.target !== menuToggle) {
            menuDropdown.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});