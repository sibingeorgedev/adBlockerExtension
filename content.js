function removeAdsBySelector(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => element.remove());
}

setInterval(() => {
    removeAdsBySelector('.ad, .ads, .advertisement, .ad-wrapper');
    removeAdsBySelector('iframe[src*="ads"]');
    removeAdsBySelector('img[src*="ads"]');
}, 2000);
