let url="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"

async function getData(){
   try
   { let res= await fetch(url);
    let obj= await res.json();
    let data=obj.meals;
    for(let i=0; i<data.length;i++)
    {
        data[i]["price"]=Math.floor(Math.random()*(500-0)+0)
    }
    appendData(data);
    console.log(' data', data);
    
   }
   catch(err){
       console.log(' err', err);
   }
}
getData();

function appendData(data){
let container=document.querySelector("#menu")
container.innerHTML="";

data.forEach(function(el){
let box=document.createElement("div");

let image=document.createElement("img");
image.src=el.strMealThumb;

let name=document.createElement("h3");
name.textContent=el.strMeal;
let price=document.createElement("div");
price.textContent=el.price+" "+"$"

let addToCartButton=document.createElement("button");
addToCartButton.textContent="Add To Cart";
addToCartButton.id="addtocart";
addToCartButton.onclick=function(){
    addToCart(el);
}
box.append(image,name,price,addToCartButton);
container.append(box);
});
function addToCart(el){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(el);
    console.log(' cart', cart);
    localStorage.setItem("cart", JSON.stringify(cart));
        cartCount(cart);
}
}

let cart = localStorage.getItem("cart");
if (!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount(cart);
} else {
  cart = JSON.parse(cart); 
  cartCount(cart);
}
function cartCount(cart){
    let cartCount=document.querySelector("#count");
    cartCount.textContent="Cart Items:"+cart.length;
}