
//!Qual a distância entre a primeira imagem em relação ao topo da página?

const distancia = document.querySelectorAll('img');

const img1 = distancia[1];
console.log(img1.offsetTop);


const img2 = distancia[2].getBoundingClientRect();
if(img2.top < 0){
    console.log('Passou');
}

//Soma 
function somaWidthImagens (){
        let valorWidth = 0
        distancia.forEach((item)=>{
        valorWidth += item.offsetWidth;
    }); console.log(valorWidth);
};

window.onload = function(){
  somaWidthImagens();
};



const topTotal = distancia.forEach((item,index)=>{
    const itemfinal = item.offsetTop;
    console.log(index,itemfinal);
});


const finaltotal = distancia.forEach((item,index)=>{
    const itemfinal = item.getBoundingClientRect();
    console.log(index,itemfinal);
});



console.log(
    window.innerHeight, //height da janela
    window.outerHeight, //Valor de ponta a ponta (Soma a barra de endereço)
    window.innerWidth, //Width da janela
    window.outerWidth, //Valor de ponta a ponta (Soma o DEVTOOLS)
    window.pageYOffset //Valor do scroll
)

if(window.innerWidth <600){
    console.log('É mobile');
} else { 
    console.log(' é PC SAFADO');
}



const small = window.matchMedia('(max-width:600px)').matches;

if(small){
    console.log('AE CARALHO');
} else {
    console.log('Ta indo bem!')
}
