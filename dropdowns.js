const dropDowns = document.querySelectorAll('.dropdown');
dropDowns.forEach((dropdown) => {
    const content = dropdown.querySelector('.dropdown-content');

    if (dropdown.classList.contains('clickable')) {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            content.classList.toggle('visible');
        })
    } else if (dropdown.classList.contains('hoverable')) {
        dropdown.addEventListener('mouseenter', () => {
            content.classList.toggle('visible');
        });
        dropdown.addEventListener('mouseleave', () => {
            content.classList.remove('visible');
        });
    };
});

window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('visible')) {
                openDropdown.classList.remove('visible');
            }
        }
    }
});
