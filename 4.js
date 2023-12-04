document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            // Create a lightbox container
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';

            // Create an image element inside the lightbox
            const image = document.createElement('img');
            image.src = this.querySelector('img').src;
            lightbox.appendChild(image);

            // Add the lightbox to the body
            document.body.appendChild(lightbox);

            // Close the lightbox when clicked outside the image
            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });
});