let cart=JSON.parse(localStorage.getItem("cart"))||[];
let total=cart.reduce(function(acc,curr){
    return acc+curr.price;
},0);
let container=document.getElementById("cart")
function appendfood(cart){
    
cart.forEach(function(el)
{
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
     let td3=document.createElement("td");
    let image=document.createElement("img");
    image.src=el.strMealThumb
    td2.textContent=el.strMeal
    td3.textContent=el.price +" "+"$";
    td4=document.createElement("button");
    td4.textContent="Remove";
    td4.id="remove";
    
    td4.onclick=function(){
        remove();


    }
    td1.append(image);
    tr.append(td1,td2,td3,td4)
    document.querySelector("tbody").append(tr);
});
}
appendfood(cart);
function remove(){
    cart.pop();
    console.log(cart);

}
 console.log(cart)
 function totaldisplay(total){
    let totalDis=document.getElementById("total");
    totalDis.textContent=total+" "+"$";
 }
 totaldisplay(total)
