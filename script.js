let currentIndex = 0;
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const totalImages = 6;

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateGallery();
});

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateGallery();
});

function updateGallery() {
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}
