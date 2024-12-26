const clickableDropdowns = document.querySelectorAll(".dropdown.click");
clickableDropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const content = dropdown.querySelector(".dropdown-content");
    button.addEventListener("click", () => {
        content.classList.toggle("visible");
    });
});

const hoverableDropdowns = document.querySelectorAll(".dropdown.hover");
hoverableDropdowns.forEach((dropdown) => {
    const content = dropdown.querySelector('.dropdown-content');
    dropdown.addEventListener('mouseenter', () => {
        content.classList.toggle('visible');
    });

    dropdown.addEventListener('mouseleave', () => {
        content.classList.remove('visible');
    })
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