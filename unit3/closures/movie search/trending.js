// key=fd759e07c9c8fb1586481eeebdd6f5ee



async function getData(){

    let url="https://api.themoviedb.org/3/trending/all/day?api_key=fd759e07c9c8fb1586481eeebdd6f5ee"
    let res=await fetch(url);
    let data = await res.json();
    let Data=data.results;
    appendData(Data);
}
getData();

function appendData(Data){

    console.log(' Data', Data);

Data.forEach(function(el){
    var container=document.querySelector("#container");

    let box=document.createElement("div");
    let box1=document.createElement("div");
    box1.id="box1";
    let name=document.createElement("h3");
    if(el.original_title)
    {
        name.textContent=el.original_title;
    }
    else{
        name.textContent=el.original_name
    }
    let date=document.createElement("p");
    if(el.first_air_date){
        date.textContent=el.first_air_date
    }
    else{
        date.textContent=el.release_date
    }
    let box2=document.createElement("div");
    box2.id="box2"
    let p=document.createElement("p");
    p.textContent=el.overview;
    box2.append(p)
    box1.append(name,date);
    box.append(box1,box2)
    container.append(box);
})
}