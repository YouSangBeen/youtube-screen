const downButton = document.querySelector('.down-button');
const mainTitle = document.querySelector('.title__main-title .main-title__title');

downButton.addEventListener('click', () => {
    mainTitle.classList.toggle('clamp');
})