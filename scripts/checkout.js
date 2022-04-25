// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
 
let local = JSON.parse(localStorage.getItem("amount")) ;
let wallet = document.getElementById("wallet");
wallet.innerText = local;


let append = document.getElementById("movie");

 let book = JSON.parse(localStorage.getItem("movie"))
console.log(book)

     
 let div = document.createElement("div");
 div.setAttribute("id","div");

 let names = document.createElement("h2");
 names.innerText = book.Title;
 
 let img = document.createElement("img");
 img.src = book.Poster;

 div.append(names,img);

 append.append(div);


 function confirm(){

    let nom = document.getElementById("number_of_seats").value;

    if(nom*100 >= wallet.innerText){
        alert("Booking successful!");
    }
    else{
        alert("Insufficient Balance!");
    }
 }


