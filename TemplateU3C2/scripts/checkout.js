function press(){
let name=document.getElementById("name").value
let number=document.getElementById("number").value
let address=document.getElementById("address").value
if(!name || !number||!address)
{
    alert("Please fill Mandatory Details")
}
else{
    alert("Your order is accepted");
    function alert1(){
        alert("Your order is being cooked")
    }
    function alert2(){
        alert("Your order is ready")
    }
    function alert3(){
        alert("Order out for delivery ")
    }
    function alert4(){
        alert("Order delivered")
    }
setTimeout(alert1,3000)
setTimeout(alert2,8000)
setTimeout(alert3,10000)
setTimeout(alert4,12000)
}}