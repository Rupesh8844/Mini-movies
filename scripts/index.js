// Store the wallet amount to your local storage with key "amount"


function addToWallet(){
    let money = document.getElementById("amount").value;
    let wallet = document.getElementById("wallet");
    let local = JSON.parse(localStorage.getItem("amount")) ;
 
wallet.innerText = money;

    localStorage.setItem("amount",JSON.stringify(money));
    
}