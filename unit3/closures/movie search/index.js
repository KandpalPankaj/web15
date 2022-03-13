// 32eafd2e
// let url=`http://www.omdbapi.com/?apikey=32eafd2e&s=${find}`
var count=0;


async function getData(){
    var find=document.querySelector("#search").value
    let url=`http://www.omdbapi.com/?apikey=32eafd2e&s=${find}`
    try
    {var res= await fetch(url)
    var data=await res.json();
    return data.Search;
    }
    catch(err){
        console.log(' err', err);
        
    }
}

async function main(){
    let Data= await getData();
    if(!Data){
        notfound()
    }
    else{
    searchbox(Data);
     console.log(' Data', Data);}
}
let movie= document.querySelector("#searched");
function notfound(){
    document.querySelector("#container").innerHTML=""

    movie.innerHTML="";
    let bigbox=document.createElement("div");
    bigbox.id="searchedDataNotFound"

    
 let box=document.createElement("div");
 box.id="box"


 let p=document.createElement("p");
 p.textContent="No Match Found";
 bigbox.append(p);
 movie.append(bigbox)

}
 function searchbox(data){
    //  console.log(' data', data);
    movie.innerHTML="";
     let bigbox=document.createElement("div");
        bigbox.id="searchedData"
    data.map(function(el){
        // console.log(' el', el);
     let box=document.createElement("div");
     box.id="box"
     box.onclick=function(){
        showMovie(el);
       
     }
     let image=document.createElement("img");
     image.src=el.Poster;
     image.id="image";
     let p=document.createElement("p");
     p.textContent=el.Title;
     box.append(image,p)
     bigbox.append(box);
     movie.append(bigbox)
     })
 }
 function showMovie(el)
 {document.querySelector("#container").innerHTML="";
 document.querySelector("#searched").innerHTML=""
     let singleMovie=document.createElement("div");
     singleMovie.id="singleMovie";
     let boxl=document.createElement("div");
        boxl.id="boxl";
        let boxr=document.createElement("div");
        boxr.id="boxr";
        let image=document.createElement("img")
        image.src=el.Poster;

        let Title=document.createElement("h3")
        Title.textContent=el.Title

        let Year= document.createElement("p")
        Year.textContent="Release Year:"+" "+el.Year
        let Type= document.createElement("p")
        Type.textContent="Type:"+" "+el.Type
        var rating= Math.floor(Math.random() * (10 * 10 - 5 * 10) + 5 * 10) / (1*10);
        let IMBD= document.createElement("p")
        if(rating>8.5)
        {
            
        IMBD.textContent="Rating:" +" "+rating+ " "+"(Recommended)";
        }
        else
        {
           
        IMBD.textContent="Rating:" +" "+rating;
        }
        

        boxl.append(image);
        boxr.append(Title,Year,Type,IMBD);
        singleMovie.append(boxl,boxr);
        document.querySelector("#container").append(singleMovie)

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



async function appendProduct()
{   let Data= await getData();
    movie.innerHTML="";
    if(!Data){
        appendError()
    }
    else{
    document.querySelector("#container").innerHTML=""
    Data.map(function (el){
        

        let div=document.createElement("div")
        let boxl=document.createElement("div");
        boxl.id="boxl";
        let boxr=document.createElement("div");
        boxr.id="boxr";
        let image=document.createElement("img")
        image.src=el.Poster;

        let Title=document.createElement("h3")
        Title.textContent=el.Title

        let Year= document.createElement("p")
        Year.textContent="Release Year:"+" "+el.Year
        let Type= document.createElement("p")
        Type.textContent="Type:"+" "+el.Type
        var rating= Math.floor(Math.random() * (10 * 10 - 5 * 10) + 5 * 10) / (1*10);
        let IMBD= document.createElement("p")
        if(rating>8.5)
        {
            
        IMBD.textContent="Rating:" +" "+rating+ " "+"(Recommended)";
        }
        else
        {
           
        IMBD.textContent="Rating:" +" "+rating;
        }
        

        boxl.append(image);
        boxr.append(Title,Year,Type,IMBD);
        div.append(boxl,boxr);
        document.querySelector("#container").append(div)
    })}
    console.log(' data', Data);
}
function appendError(){
    document.querySelector("#container").innerHTML=""
    let image=document.createElement("img")
    image.src="https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif";
    image.id="error"
    document.querySelector("#container").append(image)
}