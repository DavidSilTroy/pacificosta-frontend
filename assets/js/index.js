function movePromotionLeftInPanel() {
    // select the elements
    const panelImages = document.querySelector('.panel-images');
    const panels = [...panelImages.children];
    const firstImage = panels[0];
    const secondImage = panels[1];
    const thirdImage = panels[2];
    const panelControl = document.querySelector('.panel-control ul');
    const btns = [...panelControl.children];
    const firstBtn = btns[1];
    const secondBtn = btns[2];
    const thirdBtn = btns[3];

    const tl = gsap.timeline({
        onComplete: () => {
            panelImages.insertBefore(secondImage, firstImage);
            panelImages.insertBefore(thirdImage, firstImage);
            panelControl.insertBefore(secondBtn, firstBtn);
            panelControl.insertBefore(thirdBtn, firstBtn);
            gsap.set([firstImage, secondImage, thirdImage], { clearProps: "all" });
            panels.forEach(element => {
                element.removeAttribute('style');
            });
        },
    });

    tl.add('start')
        .to(firstImage, { duration: 1, x: thirdImage.offsetLeft - firstImage.offsetLeft, scale: 0.8, zIndex: 1 }, 'start')
        .to(secondImage, { duration: 1, x: firstImage.offsetLeft - secondImage.offsetLeft, scale: 0.8, zIndex: 1 }, 'start')
        .to(thirdImage, { duration: 1, x: secondImage.offsetLeft - thirdImage.offsetLeft, scale: 1, zIndex: 3 }, 'start');

}

function movePromotionRightInPanel() {
    // select the elements
    const panelImages = document.querySelector('.panel-images');
    const panels = [...panelImages.children];
    const firstImg = panelImages.firstElementChild;
    const secondImg = firstImg.nextElementSibling;
    const thirdImg = secondImg.nextElementSibling;

    const panelControl = document.querySelector('.panel-control ul');

    const firstBtn = panelControl.firstElementChild.nextElementSibling;
    const secondBtn = firstBtn.nextElementSibling;
    const thirdBtn = secondBtn.nextElementSibling;

    const tl = gsap.timeline({
        onComplete: () => {

            panelImages.insertBefore(thirdImg, firstImg);
            panelControl.insertBefore(thirdBtn, firstBtn);
            gsap.set([firstImg, secondImg, thirdImg], { clearProps: "all" });
            panels.forEach(element => {
                element.removeAttribute('style');
            });
        },
    });

    tl.add('start')
        .to(thirdImg, { duration: 1, x: firstImg.offsetLeft - thirdImg.offsetLeft, scale: 0.8, zIndex: 1 }, 'start')
        .to(secondImg, { duration: 1, x: thirdImg.offsetLeft - secondImg.offsetLeft, scale: 0.8, zIndex: 1 }, 'start')
        .to(firstImg, { duration: 1, x: secondImg.offsetLeft - firstImg.offsetLeft, scale: 1, zIndex: 3 }, 'start');

}
window.addEventListener('load', function() {

    console.log('All assets are loaded')
        // Selecciona los elementos btn-show-left-option y btn-show-right-option
    const leftButton = document.querySelector('.btn-show-left-option');
    const rightButton = document.querySelector('.btn-show-right-option');

    // Crea variables para controlar la posición actual y la cantidad total de imágenes
    let currentPosition = 0;
    const totalImages = document.querySelectorAll('.panel-images img').length;

    // Añade un event listener para detectar cuando se hace clic en los botones
    leftButton.addEventListener('click', movePromotionLeftInPanel);
    rightButton.addEventListener('click', movePromotionRightInPanel);



})
window.addEventListener('scroll', () => {
    const navBar = document.getElementById('pacificosta-navbar');
    if (window.scrollY > 10) {
        navBar.classList.add('navbar-scrolled');
    } else {
        navBar.classList.remove('navbar-scrolled');
    }
});