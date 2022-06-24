const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');
const anchoImg = document.getElementById('anchoimg');

window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura)*1300;
    if(anchoFondo <= 100){
        fondo.style.width = anchoFondo + '%';
    }  
}

window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: "auto",
        itemWidth:500,
        exactWidth:true,
        slidesToScroll: 2,
        draggable: true,
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        dots: '.carousel__indicadores'
      });
})