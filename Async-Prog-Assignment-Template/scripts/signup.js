var detailsarr=JSON.parse(localStorage.getItem('signupDetails'))||[];

function press(){
    if(document.querySelector("#name").value=="" || document.querySelector("#num").value==""|| document.querySelector("#mail").value==""|| document.querySelector("#pass").value=="")
    {
        alert("Please fill all details");
    }
    else
    {
        var details={
            name:document.querySelector("#name").value,
            number:document.querySelector("#num").value,
            email:document.querySelector("#mail").value,
            password:document.querySelector("#pass").value
        }
        detailsarr.push(details)
        localStorage.setItem('signupDetails',JSON.stringify(detailsarr))
        alert("Signup Successful");
        window.location.href="login.html";
       
    }

}

