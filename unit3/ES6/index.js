

async function getData(){
    let API_KEY="AIzaSyDFA327vogenNqMJGU8o-4C2u3QJmkZqy4"
    let search =document.querySelector("#search").value
    try{let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${search}&type=video&maxResults=20&part=snippet`)
    let data =await res.json();
    let {items}=data;
console.log(' items', items);
    appendData(items);
    }
    catch(err){
        console.log(' err', err);
    }
}
let container= document.getElementById("container")
appendData=(data)=>{
    container.innerHTML="";
data.map((el)=>{
    let box=document.createElement("div");
    let thumbnail=document.createElement("img");
    let {snippet:{thumbnails:{medium:{url}},title,channelTitle}}=el;
    thumbnail.src=url
    box.onclick=()=>{
        playvideo(el.id.videoId,el.snippet.title,el.snippet.description,el.snippet.channelTitle);
       
    }
    //  video.src=`https://www.youtube.com/embed/${videoId}`
    let name=document.createElement("div");
    name.textContent=title;
    
    let channel=document.createElement("div");
    channel.textContent=channelTitle
box.append(thumbnail,title,channel);
container.append(box)
})
    
    
}

playvideo=(videoId,title,description,channel)=>{
    localStorage.setItem("videoId",JSON.stringify(videoId))
    localStorage.setItem("title",JSON.stringify(title))
    localStorage.setItem("description",JSON.stringify(description))
    localStorage.setItem("channel",JSON.stringify(channel))

    
window.location.href="video.html"

}


async function showVideos(){
    let API_KEY="AIzaSyCm_ElhRVEiAQRaDNaLsy93kgv3QGF1S2c"
    let search =document.querySelector("#search").value
    try{let res= await fetch(`https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=IN&key=${API_KEY}&q=${search}&type=video&maxResults=20&part=snippet`)
    let data =await res.json();
    let {items}=data;
console.log(' items', items);
    showData(items)
    }
    catch(err){
        console.log(' err', err);
    }
}
showVideos()

let popular= document.getElementById("popular")
showData=(data)=>{
    container.innerHTML="";
data.map((el)=>{
    let box=document.createElement("div");
    let thumbnail=document.createElement("img");
    let {snippet:{thumbnails:{medium:{url}},title,channelTitle}}=el;
    thumbnail.src=url
    // box.onclick=()=>{
    //     playvideo(el.id.videoId,el.snippet.title,el.snippet.description,el.snippet.channelTitle);
       
    // }
    //  video.src=`https://www.youtube.com/embed/${videoId}`
    let name=document.createElement("div");
    name.textContent=title;
    
    let channel=document.createElement("div");
    channel.textContent=channelTitle
box.append(thumbnail,title,channel);
popular.append(box)
})
}