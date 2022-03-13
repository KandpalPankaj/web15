async function translateText(){
let input=document.getElementById('input-text').value;
let inLan=document.getElementById("inLan").value;
let outLan=document.getElementById("outLan").value;

try{
let res= await fetch("https://libretranslate.de/translate",{
    method:"POST",
    body:JSON.stringify({
        q:input,
        source:`${inLan}`,
        target:`${outLan}`,
        format:"text"
    }),
    headers:{
        "Content-Type": "application/json"
    }
});
let data=await res.json();
document.getElementById("translated-text").textContent=data.translatedText;
console.log(' data', data);
}
catch (err){
    console.log(' err', err);
}
}