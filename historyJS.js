window.addEventListener("load", () => {

    let scrollTop = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollIndex = Math.floor((scrollTop / pageHeight) * 8);

    document.body.style.backgroundImage = `url('${scrollIndex}.jpg')`
});

window.addEventListener("scroll", () => {

    let scrollTop = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollIndex = Math.floor((scrollTop / pageHeight) * 8);

    document.body.style.backgroundImage = `url('${scrollIndex}.jpg')`
});

console.log("hi")