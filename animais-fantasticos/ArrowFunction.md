## Seleciona todas as tags img do HTML
```Javascript
const imgs = document.querySelectorAll('img');
console.log(imgs);
```
## forEach(function(item,index,array))
```Javascript
const img = document.querySelectorAll('img');

img.forEach(function(item,index,array){

    console.log(item);
    console.log(index);
    console.log(array);

});
```

# ARROW FUNCTION
### Para encurtar o forEach use o => ele substitui a palavra FUNCTION no forEach
### Antes
```javascript
forEach(function(item,index,array){};
```

### Depois
```javascript
forEach((item,index,array) => {};
```

### retornando no console item com nome específico
```javascript
const imgEspecifico = document.querySelectorAll('img[src^= "./img/imagem1"]');
```
### dentro de () coloco a TAG em que o query vai procurar o elemento específico e depois coloco [] para informar o qual o elemento. sempre com aspas simples e duplas. (^ = Começe com | ex: ^=# elementos que comecem com # - Se deixar só = ele vai buscar os itens que são exatamente IGUAIS )
```javascript
console.log(imgEspecifico);
```
### Retorna a img da raposa que é a imagem1

### Selecionando todos os href internos referênciados com #id
```javascript
const hrefInterno = document.querySelectorAll('a[href^="#"]');

console.log(hrefInterno);

const raposa = document.querySelector('.raposa h2');
console.log(raposa);
```
### Pegando o último elemento do site, no caso o p

### Selecione todos os p's da pagina

### dentro de ultimoPe pegue o tamanho total - 1

### ao total temos 12 p's mas o ultimo é undefined então subtraia o ultimo item do array.
```javascript
const ultimoPe = document.querySelectorAll('p');
console.log(ultimoPe[ultimoPe.length-1]);


const paragrafo = document.querySelectorAll('p');
console.log(paragrafo);
```
### listo todos os items p do site no console
```javascript
paragrafo.forEach((item) => console.log(item));
```
### Puxo todo conteuto (texto) dos p's e mostro no console
```javascript
paragrafo.forEach((item) => console.log(item.innerText));
```
