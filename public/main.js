window.addEventListener('scroll', (e) => {
    const target = document.querySelectorAll('.scroll');

    var currentOffset = window.pageYOffset;

    for(let i = 0; i < target.length; i++){
        if(currentOffset > 100){
            console.log(window.pageYOffset);
            let pos = ((currentOffset) - 100) * target[i].dataset.rate;
            target[i].style.transform = 'translate3d( 0px, ' + pos + 'px, 0px)';
        }
    }
})