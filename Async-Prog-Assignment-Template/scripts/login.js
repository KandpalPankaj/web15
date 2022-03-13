
var regdUsers=JSON.parse(localStorage.getItem("signupDetails"))
function press(){
    var bag=""

    for(let i=0;i<regdUsers.length;i++)
    {
        if(regdUsers[i].email==document.querySelector("#mail").value && regdUsers[i].password==document.querySelector("#pass").value)
        {  bag="yes";
         }
       
    }
     if(bag=="yes")
    {
        alert("Login Successful");
        window.location.href="index.html";
    }
    else{
        alert("incorrect Credentials");
        
    }
    }
 