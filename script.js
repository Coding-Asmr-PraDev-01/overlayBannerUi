const overlayContainer = document.querySelector('.overlayBx');
const crossBtn = document.querySelector('.crossBtn');

window.addEventListener('load', () => {
    setTimeout(() => {
        overlayContainer.style.visibility = 'visible';
        overlayContainer.style.opacity = 1;
    }, 3000);
});

crossBtn.addEventListener('click', () => {
    overlayContainer.style.visibility = 'hidden';
    overlayContainer.style.transition = 'none';
    overlayContainer.style.opacity = 0;
});


window.addEventListener('resize', () => {
    console.log(document.body.clientWidth);
    if(document.body.clientWidth <= 740){
        overlayContainer.style.position = 'absolute';
    }else{
        overlayContainer.style.position = 'fixed';
    }
})