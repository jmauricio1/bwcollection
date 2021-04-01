window.addEventListener('scroll', (e) => {
    const target = document.querySelectorAll('.scroll');

    var currentOffset = window.pageYOffset;

    var w = window.innerWidth;
    var ratio = 1;

    console.log(currentOffset);

    if(w < 485){
        console.log(w);
        ratio = 0.5;
    }

    for(let i = 0; i < 5; i++){
        if((currentOffset > 100) && (currentOffset < 3400)){
            console.log(window.pageYOffset);
            let pos = ((currentOffset) - 100) * target[i].dataset.rate;
            target[i].style.transform = 'translate3d( 0px, ' + (pos * ratio) + 'px, 0px)';
        }
    }
    for(let i = 5; i < target.length; i++){
        if((currentOffset >= 3400)){
            let pos = ((currentOffset) - 3400) * target[i].dataset.rate;
            target[i].style.transform = 'translate3d( 0px, ' + (pos * ratio) + 'px, 0px)';
        }
    }

    if(window.innerWidth < 480){
        for(let i = 5; i < target.length; i++){
            if((currentOffset >= 800)){
                let pos = ((currentOffset) - 800) * target[i].dataset.rate;
                target[i].style.transform = 'translate3d( 0px, ' + (pos * ratio) + 'px, 0px)';
            }
        }
    }

})