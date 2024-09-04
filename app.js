document.addEventListener("DOMContentLoaded", () => {
    // Lista de imágenes relacionadas con Ecuador o su gastronomía
    const ecuadorImages = [
        "https://www.elcomercio.com/wp-content/uploads/2024/06/ecuador_jamaica_paez-1024x683.jpg", // Reemplaza con URLs reales de imágenes
        "https://www.ecuavisa.com/binrepository/1071x600/123c0/825d600/none/11705/EQLW/whatsapp-image-2024-05-25-at-11-00_1546777_20240525110038.jpg",
        "https://lh4.googleusercontent.com/proxy/Hmd5CDYiGI8PI4_HGIyAZyYJinjfIf4sKFPkDmLiWQFR4dLjL8X63mfQVXW0GPSPcnGgRQczlgJgDB2oQR25k5ZN17EQFIuBaQ3w0Og-4j9HO7NHsQk5ANrbdj_BnH2edW7MayWialN_wC9b_bT34WwK6B1aZDnooyU4h7JfO124cNR_5DGmMYSqaDv35ZfP9j3EzgE3jGDcmeheCBnQ5sLnj1zgN2Z6Hs8",
        "https://prezigram-assets.prezicdn.net/28a4db71e6201f88fedfb3b88059e2c48509974f14636c9742f270ae9d945bea24e8ded83d21eb9d43b42534c40e7d56b04a74b4d0cd37b8bb8569619234ab5a",
        "https://www.laylita.com/recetas/wp-content/uploads/Recetas-ecuatorianas.jpg"
    ];

    const images = document.querySelectorAll("img");

    function changeImage(image) {
        // Elegir una imagen aleatoria de la lista
        const randomImage = ecuadorImages[Math.floor(Math.random() * ecuadorImages.length)];
        image.src = randomImage;
        image.width = 400;  // Aumentar el tamaño de las imágenes
        image.height = 250;
    }

    images.forEach(image => {
        // Si la imagen no tiene la clase "extra-images", cambiamos las imágenes aleatoriamente
        if (!image.classList.contains("extra-images")) {
            changeImage(image);  // Cambiar la imagen inmediatamente
            setInterval(() => {
                changeImage(image);  // Cambiar la imagen cada 5 segundos
            }, 5000);  // Cambia la imagen cada 5000 ms (5 segundos)
        }
    });
});
