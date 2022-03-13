async function makeAPIcall(url){
try{
    let res= await fetch(url);
    let data =await res.json();
    return data;
}
catch(err){
    console.log(' err', err);
}
}

function appendPictures(data,parent){

data.forEach(el=>{
    let div=document.createElement("div");

    let image=document.createElement("img");
    image.src=el.urls.full
    let p=document.createElement("p");
    p.innerText=el.user.name;
    div.append(image,p);
    parent.append(div);
})

}
export{makeAPIcall,appendPictures};