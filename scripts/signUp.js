document.querySelector("#signup").addEventListener("click",myfunction)

// var dat=JSON.parse(localStorage.getItem("user"))
// function myfunction()
// {

//     console.log(1)
//     var obj={


//         name:document.querySelector("#name").value,


//         email:document.querySelector("#email").value,
//         password:document.querySelector("#password").value

//     }

//     dat.push(obj)
//     console.log(dat)
// 
    
// }
var data=JSON.parse(localStorage.getItem("user")) || []
function myfunction()
{
    var obj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,

    password:document.querySelector("#password").value
    }

data.push(obj)
console.log(data)
localStorage.setItem("user",JSON.stringify(data))

alert("signup successfully")
} 