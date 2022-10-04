

// var filterdata=JSON.parse(localStorage.)
// var sorttype=document.querySelector("#sort").addEventListener("change",function(){
//     var sorttype=document.querySelector("#sort").value
//     if(sorttype=="none")
//     {
//         displaydata(output)
//     }
//     else{

//     }
// })

//api key: 5062c436

var data=JSON.parse(localStorage.getItem("alldata")) || []


async function searchdata(){
    try{
        let search=document.querySelector("#query").value
        let result=await fetch(`http://www.omdbapi.com/?s=${search}&apikey=5062c436`)
        let output=await result.json();
        console.log(output)
        displaydata(output)
    }
    catch(error)
    {
        console.log(error)
    }
}
// console.log(1)

 

let timerid;
function debounce(func,wait)
{
    if(timerid)
    {
        clearTimeout(timerid)
    }
    timerid=setTimeout(func,wait)
}


function displaydata(data)
{
  data.Search.forEach(element => {
    var box=document.createElement("div");
    box.setAttribute("class","boxes")

    var image=document.createElement("img")
    image.setAttribute("class","image")
    image.src=element.Poster


    var name=document.createElement("p")
    name.setAttribute("class","name")
    name.innerText=element.Title


    var price=document.createElement("p")
    price.setAttribute("class","price")
    price.innerText="Year :"+element.Year


    // var AC=document.createElement("p")
    // AC.setAttribute("class","AC")
    // AC.innerText="AC :"+element.Ac


    var ratings=document.createElement("p")
    ratings.setAttribute("class","ratings")
    ratings.innerText="Type :"+element.Type



var button =document.createElement("button")
button.innerText="Book Now";
button.addEventListener("click",function()
{
    add(element)
    localStorage.setItem("alldata",JSON.stringify(data))

})





box.append(image,name,price,ratings)
document.querySelector("#hotels_list").append(box)

  });  
}


function add(product)
{
      data.push(product)
      console.log(data)
}

