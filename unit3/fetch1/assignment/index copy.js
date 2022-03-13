// 32eafd2e
let url="http://www.omdbapi.com/?apikey=32eafd2e&t=titanic"


async function getData(){
    try
    {var res= await fetch(url)
    var data=await res.json();
      appendProduct(data);
     console.log('  data',  data);
    }
    catch(err){
        console.log(' err', err);
        
    }
}
getData();

function appendProduct(data)
{
    // document.querySelector("#container").innerHTML=""
           let keyarr=[];
           keyarr.push(Object.keys(data));
           let valarr=[];
           valarr.push(Object.values(data));
        for(let i=0;i<keyarr[0].length;i++)
        {    let obj= document.createElement("div")
            obj.textContent=keyarr[0][i]+"-"+valarr[0][i]
            document.querySelector("#container").append(obj)

        }
        
    }
