 let url="https://fakestoreapi.com/products"
 
// fetch(url)
// .then(function(res){
//     return res.json();
// })
// .then(function(res){
//     console.log(' res', res);
// })
// .catch(function(err)
// {
//     console.log(' err', err);
// })

async function getData(){
   try{ 
        let res=await fetch(url);
        let data=await res.json();
        appendProduct(data);
        //  console.log(' data', data);
    }
    catch(err){
        console.log(' err', err);
    }
}

getData();

function appendProduct(data)
{
    
    // console.log(' data', data);
    data.forEach(function (el){
        

        let div=document.createElement("div")


        let image=document.createElement("img")
        image.src=el.image;

        let title=document.createElement("p")
        title.textContent=el.title

        let price= document.createElement("p")
        price.textContent=el.price


        div.append(image,title,price)
        document.querySelector("#container").append(div)
    })
}

