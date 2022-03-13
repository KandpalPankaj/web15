import navbar from "./navbar.js";
// console.log(' navbar', navbar);
document.getElementById("navbar").innerHTML=navbar()


async function getLatest()
{
    let url="https://www.themealdb.com/api/json/v1/1/random.php";
    let res= await fetch(url);
    let data=await res.json();
    showLatest(data.meals);
}
getLatest();

function showLatest(data){
console.log(' data', data);
let {strMeal,strCategory,strArea,strMealThumb,strTags}=data[0];
let box=document.createElement("div");
let boxl=document.createElement("div");
boxl.id="boxl";
let image=document.createElement("img");
image.src=strMealThumb;
image.id="img";
boxl.append(image);
let boxr=document.createElement("div");
boxr.id="boxr"
let name=document.createElement("h2");
name.textContent=strMeal;
let category=document.createElement("p");
category.textContent="Category:"+" "+strCategory;
let Area=document.createElement("p");
Area.textContent="Area:"+" "+strArea;
let tags=document.createElement("p");
tags.textContent="tags:"+" "+strTags;
boxr.append(name,category,Area,tags)
box.append(boxl,boxr);
document.getElementById("latest").append(box)
}





















// ----------------------------------------------------------------------------------------------------------------------------------
document.getElementById("search").addEventListener("input", debounce)

let bigBox=document.createElement("div");
bigBox.id="bigBox";
 async function getData(){
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




function appendData(data){
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
  function appendError(){
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