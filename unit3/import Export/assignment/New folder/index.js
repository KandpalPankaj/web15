 import navbar from "./navbar.js";
 console.log(' navbar', navbar);
 document.getElementById("navbar").innerHTML=navbar()
 document.getElementById("search").addEventListener("input", debounce)


 let bigBox=document.createElement("div");
bigBox.id="bigBox";
let getData= async ()=>{
    let search=document.getElementById('search').value;

     try{
     let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    let res= await fetch(url);
    let data = await res.json();
    console.log(' data', data);
    if(search)
    {
        appendData(data.meals)

    }
    else{
        document.getElementById("container").innerHTML=""
    }
     }
     catch(err){
        console.log(' err', err);
     }
    
}







let appendData=(data)=>{
console.log(' data', data);
if(!data){
    appendError()
}
else{

    bigBox.innerHTML="";
    document.getElementById("container").innerHTML=""
data.map((el)=>{
    let {strMealThumb,strMeal,strCategory}=el
    
    let box=document.createElement("div");
    let box1=document.createElement("div");

    let image=document.createElement("img");
    image.src=strMealThumb;

    let box2=document.createElement("div");
    box2.id="box2"
    let name=document.createElement("div");
    name.textContent=strMeal;
    let category=document.createElement("p");
    category.textContent=strCategory
    box1.append(image)

    box2.append(name,category)
    box.append(box1,box2);
    bigBox.append(box);
    document.getElementById("container").append(bigBox);

})}
}

let timerID;
  function debounce(){
     if(timerID)
     {
         clearTimeout(timerID);
     }
 
     timerID=setTimeout(function (){
         getData();
     },500);
 }
  let appendError=()=>{
    document.querySelector("#container").innerHTML=""
    let box=document.createElement("div")
    box.class="box"
    let oops=document.createElement("h4")
    oops.textContent="Oops!";
    let p=document.createElement("p")
    p.textContent="We could not understand what you mean, try rephrasing the query."
    box.append(oops,p)
    document.querySelector("#container").append(box)
}
