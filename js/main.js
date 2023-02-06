const text = document.querySelector(".js-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "desenvolvedor front-end";
    }, 0);
    
    setTimeout(() => {
        text.textContent = "ui designer";
    }, 4000);
}

textLoad();

setInterval(textLoad, 8000);