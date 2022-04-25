// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// let query = document.getElementById("search").value;
let id;
// query = document.getElementById("search").value;

// let url = `https://www.omdbapi.com/?apikey=5bec42fd&s=${query}`;


// fetch(url)
// .then(function(res){
//     return res.json();
// })
// .then(function(res){
//     console.log(res.Search);
//     movies(res.Search);
// })
// .catch(function(err){
//     console.log("Try-again",err);
// });

let local = JSON.parse(localStorage.getItem("amount")) ;
let wallet = document.getElementById("wallet");
wallet.innerText = local;

async function search(){
    try{
       let query = document.getElementById("search").value; 

       let res = await fetch(`https://www.omdbapi.com/?apikey=5bec42fd&s=${query}`);

       let data = await res.json();

    //    const movies = data.Search;
    movies(data.Search);
       
    } catch(err){
        console.log("err",err);
    }
}


function movies(data){
    let movies = document.getElementById("movies");
        movies.innerHTML = null;
    data.forEach(function(elem){
        

        let box = document.createElement("div");
        box.setAttribute("class","movie_tab");
    
        let img = document.createElement("img");
        img.src = elem.Poster;
    
        let name = document.createElement("p");
        name.innerText = `Title: ${elem.Title}`;
        console.log(name)
    
        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.addEventListener("click",function(){
            window.location.href = "checkout.html";

            localStorage.setItem("movie",JSON.stringify(elem));
        })
    
        box.append(img,name,btn);
        movies.append(box);
    })
  
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id= setTimeout(function(){
        func()
    },delay);
}