
 // article count
    // variables
    const articlePlus = document.getElementById("plus");
    const articleLess = document.getElementById("less");
    let articleCount = 1;
    console.log(articleCount)
    
    // eventListeners + and -
    articlePlus.addEventListener("click", () => {
        articleCount++;
        console.log(articleCount);
        document.getElementById("articleNumber").innerHTML = articleCount;
    })
    articleLess.addEventListener("click", () => {
        if (articleCount > 1) {
            articleCount-- ;
            document.getElementById("articleNumber").innerHTML = articleCount;
        } else {console.log(articleCount)
        }
    })
console.log('---------------------')


let cart = 0;
function cartCount () {
    const addCart = document.querySelector("#addCart");
    addCart.addEventListener("click", () => {
        cart += articleCount;
        console.log(cart) // OK la somme s'affiche dans le console.log
        document.getElementById("cart").innerHTML = cart;
        if (cart !== 0) {
            document.getElementById("cart").style.display = 'flex';
        }
})
}
cartCount();
