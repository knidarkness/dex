const clearTexts = () => {
    const descs = document.getElementsByClassName('recent-event-card__description');
    for(let i in descs){
        descs[i].innerText = (descs[i].innerText && descs[i].innerText.length > 50) ? descs[i].innerText.substr(0, 50) + "..." : descs[i].innerText;
    }
};


document.addEventListener("DOMContentLoaded", () => {
    clearTexts();
});