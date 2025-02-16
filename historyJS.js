const imageCount = 8;
const images = Array.from({length: imageCount + 1}, (_, i) => new Image());
images.forEach((img, i) => img.src = `${i}.jpg`);

const updateBackground = () => {

    const scrollTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollIndex = Math.min(
        Math.floor((scrollTop / pageHeight) * imageCount),
        imageCount
    );

    document.body.style.transition = "opacity 0.5s ease-out";
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.backgroundImage = `url('${scrollIndex}.jpg')`;
        document.body.style.opacity = "1";
    }, 250);
}

window.addEventListener("load", updateBackground);
window.addEventListener("scroll", updateBackground); 