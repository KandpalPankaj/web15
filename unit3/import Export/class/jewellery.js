import navbar from "./navbar.js";

console.log(' navabr', navbar);

let navbar_div = document.getElementById("navbar")

navbar_div.innerHTML=navbar();
import {getData,appendData} from "./script/showData.js"
console.log(' navabr', navbar);
console.log(' getData', getData);
// console.log(' appendData', appendData);
let url="https://fakestoreapi.com/products/category/jewelery";
let res= await getData(url);
console.log(' res', res);
let container=document.getElementById("container")
appendData(res,container)