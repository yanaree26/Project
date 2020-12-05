window.onload = () => {
    new Splide('.splide', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        height : '100vh',
        width: '100%',
        focus  : 2,
        updateOnMove: true,
    }).mount();
} 