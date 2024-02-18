document.querySelector("form").addEventListener("submit", checkOut);


function checkOut (event){
    event.preventDefault();
    window.location.href = "postcheckout.html";
}