import navbar from "./navbar.js";
import {getData,appendData} from "./script/showData.js"
console.log(' navabr', navbar);
console.log(' getData', getData);
// console.log(' appendData', appendData);
let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML=navbar();
let url="https://fakestoreapi.com/products/category/electronics";
let res= await getData(url);
console.log(' res', res);
let container=document.getElementById("container")
appendData(res,container)