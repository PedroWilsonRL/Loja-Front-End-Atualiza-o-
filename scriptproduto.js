document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('current-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Armazena o src e alt da imagem principal
            const mainSrc = mainImage.src;
            const mainAlt = mainImage.alt;

            // Atualiza a imagem principal com a da miniatura clicada
            mainImage.src = thumbnail.src;
            mainImage.alt = thumbnail.alt;

            // Atualiza a miniatura com a imagem antiga da principal
            thumbnail.src = mainSrc;
            thumbnail.alt = mainAlt;
        });
    });
});
