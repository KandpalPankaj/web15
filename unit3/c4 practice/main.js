let apiCall=async (url)=>{
    try{
        let res=await fetch(url);
        let data=await res.json();
        return data;
    }
    catch(err){
        console.log(' err', err);
    }
}

let apeendNews=(data,parent)=>{
    for(let el of data){
        let {description,content}=el
        let div=document.createElement("div");

        let line=document.createElement("h3");
        line.textContent=description;
        line.onclick=function click(){
            console.log(content)
            localStorage.setItem("content",content);
            window.location.href="news.html"
        }
        div.append(line);
        parent.append(div);
    }
  
}

export {apiCall,apeendNews}