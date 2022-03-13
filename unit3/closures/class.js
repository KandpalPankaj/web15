async function searchMovie(){
let movie=document.getElementById("query").value

try{
    let url=`https://www.omdbapi.com/?apikey=32eafd2e&s=${movie}`
let res= await fetch(url);
let data= await res.json();
return data.Search;
}
catch(err){
    console.log(' err', err);
}
}


async function main(){
let data= await searchMovie();
if(data===undefined)
{
    return;
}
appendData(data)
console.log(' data', data);

}

let movies_div=document.getElementById("movies")
function appendData(movies){
    movies_div.innerHTML=""
movies.forEach(function (el){

    let p=document.createElement("p");
    p.innerText=el.Title;
    movies_div.append(p)

})
}
let timerID;
function debounce(func,delay){
    if(timerID)
    {
        clearTimeout(timerID);
    }

    timerID=setTimeout(function (){
        func();
    },delay);
}