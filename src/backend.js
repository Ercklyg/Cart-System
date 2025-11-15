const main = document.querySelector('#main');

const section = main.firstElementChild;
const h1 = section.firstElementChild;
const div = h1.nextElementSibling;
const products = div.children;
console.log(products); 

const cart = main.lastElementChild;
console.log(cart);

const productArray = Array.from(products);
console.log(productArray);

productArray.forEach(product => {
    const img = product.firstElementChild;
    const h3 = img.nextElementSibling;
    const p = h3.nextElementSibling;
    const button = p.nextElementSibling;

    button.addEventListener('click', () => {
        const h5 = document.createElement('h5');
        h5.textContent = product.firstElementChild.nextElementSibling.innerText;
        cart.appendChild(h5);
    });
});

