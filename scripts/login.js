document.querySelector("#log_in").addEventListener("click",allfunction)





function allfunction()
{
    var enteremail=document.querySelector("#email").value

    var enterpassword=document.querySelector("#password").value

    var arr=JSON.parse(localStorage.getItem("user"))

    var flag=false;
    arr.forEach(element => {
        if(element.email==enteremail && element.password==enterpassword)
        {
            flag=true;
        }
    });

    if(flag)
    {
        alert("login successfully")
        window.location.href="index.html"
    }

    else{
        alert("incorrect credential")
        console.log("hello")
        window.location.href=!"index.html"
    }
} 