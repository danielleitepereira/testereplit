# ClassList
Adicionando uma classe CSS dentro do .menu > ul >li > a
```javascript
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
    item.classList.add('ativo');
});
console.log(menu);
```

-> Remove as classes ativo e mantem só a primeira
```javascript
menu.forEach((item) => {
    item.classList.remove('ativo');
});
console.log(menu)

const adicionaSonoPrimeiro = document.querySelector('.menu a')
adicionaSonoPrimeiro.classList.add('ativo')

console.log(adicionaSonoPrimeiro);
```

ou para manter só o primeiro, use o array
```javascript
menu[0].classList.add('ativo2');
```

verificar se imagens tem atributo alt
```javascript
const imgs = document.querySelectorAll('img');
imgs.forEach((item)=>{
    const possuiAtributo = item.hasAttribute('alt');
    console.log(possuiAtributo); //só valor boolean
    console.log(imgs, possuiAtributo); // traz o item e o valor boolean
});
```

Modifique o valor de href do btn DEV -> setAttribute
```javascript
const btnDev = document.querySelector('a[href^="http"]');
btnDev.setAttribute('href', 'https://www.google.com');
console.log(btnDev);
```


