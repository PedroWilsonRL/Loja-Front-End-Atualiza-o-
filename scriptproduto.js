document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('current-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const mainSrc = mainImage.src;
            const mainAlt = mainImage.alt;

            mainImage.src = thumbnail.src;
            mainImage.alt = thumbnail.alt;

            thumbnail.src = mainSrc;
            thumbnail.alt = mainAlt;
        });
    });
});
