
var a="https://th.bing.com/th/id/R.a15de38f45a1088214067b1e1f316689?rik=D%2fwcw6Ph2Xe8Mw&riu=http%3a%2f%2foyster.ignimgs.com%2fwordpress%2fstg.ign.com%2f2012%2f07%2fguardians-of-the-galaxy-logo-610x313.jpg&ehk=mSsnUNBXy5%2fHNBWTkIxktbq6rMLrSrAgsuEuSVXEe6s%3d&risl=&pid=ImgRaw&r=0";
var b="https://www.traileraddict.com/article/wp-content/uploads/2017/11/deadpool-fox-disney-marvel-rights.jpg";
var c ="https://th.bing.com/th/id/R.a3872be48733fb0e9452f86aca28d83b?rik=Q7LwNuwSapnopQ&riu=http%3a%2f%2fdigitalspyuk.cdnds.net%2f18%2f11%2f1280x640%2flandscape-1521208645-infinity-war-poster.jpg&ehk=hsmYRPmFTEHR9rRBrG3eROLeU3VUxpcsCrPz7PuchO4%3d&risl=&pid=ImgRaw&r=0";

var imageArr=[a,b,c]
var count=0;

var  Element=document.createElement("img");

function slideshow(){
        //  var  Element=document.createElement("img");
Element.setAttribute("src",imageArr[count]);
document.querySelector("#slideshow").append(Element);
count++;
if (count >= imageArr.length){
count=0;
}
}

var show=setInterval(slideshow, 2000);
Element.onclick=function(){
clearInterval(show);
}

// ---------------------------------------------------------------------------
var database=[
    {
        name:"Ironman",
        date:2008,
        poster:"https://th.bing.com/th/id/OIP.3GByvYL1xTT391g_RRpVNAHaLH?pid=ImgDet&rs=1",
        imbd:7.9
    },
    {
        name:"Incredible Hulk",
        date:2008,
        poster:"https://th.bing.com/th/id/OIP.YlaR_2YfxODcV3Y7y_UjBgHaKj?pid=ImgDet&rs=1",
        imbd:6.6
    },
    {
        name:"Thor",
        date:2010,
        poster:"https://th.bing.com/th/id/OIP.88luJpGzn90zsiwm9bSXeAHaKj?pid=ImgDet&rs=1",
        imbd:7
    },
    {
        name:"The Avenger",
        date:2012,
        poster:"https://th.bing.com/th/id/OIP.lTKvsaaZ0cYvRZLQz3kKBAHaKs?pid=ImgDet&rs=1",
        imbd:6.9
    },
    {
        name:"Ant-Man",
        date:2015,
        poster:"https://th.bing.com/th/id/OIP.whIRYnk51aKBKya-xGNhzgHaKz?pid=ImgDet&rs=1",
        imbd:7.3
    },
    {
        name:"Doctor Strange",
        date:2016,
        poster:"https://th.bing.com/th/id/OIP._HnhpBb4whYUYl0nfXpF3gHaK9?pid=ImgDet&rs=1",
        imbd:7.5
    },
    {
        name:"Spider-Man",
        date:2017,
        poster:"https://th.bing.com/th/id/OIP.lLHHn3uSHzUaFt3uI_WufAHaKj?pid=ImgDet&rs=1",
        imbd:7.4
    },
    {
        name:"Black Panther",
        date:2018,
        poster:"https://th.bing.com/th/id/OIP.VOD7OZfvrMoNLfQci4P_FAHaKz?pid=ImgDet&rs=1",
        imbd:7.3
    },
    {
        name:"Avengers:Infinity War",
        date:2018,
        poster:"https://th.bing.com/th/id/OIP.Jt_tfhbbg3XAjAdzp5YrXgHaK-?pid=ImgDet&rs=1",
        imbd:8.4
    }

]

localStorage.setItem("movies",JSON.stringify(database));

var movies=JSON.parse(localStorage.getItem("movies"));



displayData(movies)


function displayData(movies){
        document.querySelector("#movies").innerHTML="";
        movies.map(function (data){
                var box=document.createElement("div");
                var boxl=document.createElement("div");
                var image=document.createElement("img");
                image.setAttribute("src",data.poster);
                boxl.append(image);

                var boxr=document.createElement("div");
                var name=document.createElement("div");
                name.textContent=data.name;
                var date=document.createElement("div");
                date.textContent=data.date;
                var imbd=document.createElement("div");
                imbd.textContent=data.imbd;
                boxr.append(name,date,imbd);
                box.append(boxl,boxr)

                document.querySelector("#movies").append(box);
     
        })
}
function imbdSort(){
        var selected=document.querySelector("#sort").value;
        if(selected=="high")
        {
            movies.sort(function(a,b){
                return Number(b.imbd)-Number(a.imbd)
              
            })
        }
        else if(selected=="low")
        {
            movies.sort(function(a,b){
                return Number(a.imbd)-Number(b.imbd)
            })
        }
        displayData(movies);
    }