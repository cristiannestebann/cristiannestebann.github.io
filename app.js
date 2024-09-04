document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    // Aquí puedes definir URLs a imágenes específicas relacionadas con el ceviche
    const cevicheImages = [
        "https://example.com/ceviche1.jpg",
        "https://example.com/ceviche2.jpg",
        "https://example.com/ceviche3.jpg"
    ];

    let index = 0;
    for (const image of images) {
        if (index >= cevicheImages.length) index = 0; // Reinicia el índice si hay más imágenes que URLs
        image.src = cevicheImages[index];
        image.width = 100;
        image.height = 100;
        index++;
    }

});