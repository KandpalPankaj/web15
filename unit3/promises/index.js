var burger=document.querySelector("#burger");
var fries=document.querySelector("#fries");
var colddrink=document.querySelector("#colddrink");
var icecream=document.querySelector("#icecream");
var noodles=document.querySelector("#noodles");
var momos=document.querySelector("#momos");
var foodArr=[burger,fries,colddrink,icecream,noodles,momos];
var foodArr2=["burger","fries","colddrink","icecream","noodles","momos"];
var obj={
    burger:"https://artistinresidencehome.com/wp-content/uploads/2018/12/Classic-Burger-overhead-wide.jpg",
    fries:"https://akns-images.eonline.com/eol_images/Entire_Site/2018619/rs_1024x1024-180719122106-1024-mcdonalds-fries.jpg?fit=inside|900:auto&output-quality=90",
    colddrink:"https://4.bp.blogspot.com/-ppPMvWEd7jw/UoYAruHj3MI/AAAAAAAAFjU/S-Y1PZD4jUs/s1600/mcdonalds-McCafe-Mocha-Small.png",
    icecream:"https://www.8days.sg/image/11082438/16x9/1920/1080/981df7fb8d3ea229422fe37cb2094bc8/px/pyronfsbuntitled-1.jpg",
    noodles:"http://www.jopreetskitchen.com/wp-content/uploads/2020/07/DSC_7156.jpg",
    momos:"https://allchickenrecipe.com/wp-content/uploads/2020/05/Chicken-Momos.jpg"
}
var a=Math.floor(Math.random() * (100 - 1) + 1);
function order(){
    var orderArr=[];
    for(let i=0;i<foodArr.length;i++)
    {
        if(foodArr[i].checked)
    {
        orderArr.push(obj[foodArr2[i]]);
    }
    }
    var myPromise= new Promise(function (resolve,reject){ 
    if(orderArr.length===0)
    {
       reject()
    }
    else{
        resolve();
        
        // console.log(orderArr)
    }
    
})
myPromise.then(function (){
    alert("Order Successful");
    function orderReady(){
        alert(`Order number ${a} , your order is ready`)
        displaydata(orderArr);
    }
    setTimeout(orderReady,4000);
})
 
}

function displaydata(data){
    for(let i=0; i<data.length;i++)
    {
        var image=document.createElement("img");
        image.setAttribute("src",data[i]);
        document.querySelector("#container").append(image);
    }
    document.querySelector("h1").textContent=`order no.${a}`;
    // var image=document.createElement("img");
    // image.setAttribute("src",data[0]);
    // document.querySelector("#container").append(image);

}

