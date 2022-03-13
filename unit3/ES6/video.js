let videoId=JSON.parse(localStorage.getItem("videoId"));
let title=JSON.parse(localStorage.getItem("title"));
let dis=JSON.parse(localStorage.getItem("description"));
let channel=JSON.parse(localStorage.getItem("channel"));

let play=document.getElementById("play")

let vid=document.createElement("iframe");
  vid.src=`https://www.youtube.com/embed/${videoId}`
  let nam=document.createElement("div")
  nam.id="nam";
  nam.textContent=title;

  let channe=document.createElement("div")
  channe.textContent=channel
  let line=document.createElement("hr")
  let des=document.createElement("p")
  des.textContent=dis
play.append(vid,nam,channe,line,des);



async function getData(){
    let API_KEY="AIzaSyDFA327vogenNqMJGU8o-4C2u3QJmkZqy4"
    let search =document.querySelector("#search").value
    try{let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${search}&type=video&maxResults=20&part=snippet`)
    let data =await res.json();
    let {items}=data;

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
        playvideo(el);

    }
    //  video.src=`https://www.youtube.com/embed/${videoId}`
    let name=document.createElement("div");
    name.textContent=title;
    
    let channel=document.createElement("div");
    channel.textContent=channelTitle
box.append(thumbnail,title,channel);
container.append(box)
})
    
    console.log(' data', data);
}

playvideo=(data)=>{
    localStorage.setItem("video",JSON.stringify(data))
    window.location.href="video.html"

}



