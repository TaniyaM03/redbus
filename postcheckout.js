// var uN  = JSON.parse(localStorage.getItem("logindata"));
// var Fname = uN.user.firstName;
// var Lname = uN.user.lastName;

// document.querySelector("#FN").value = Fname;
// document.querySelector("#FN1").append(Fname);
// document.querySelector("#LN").value =  Lname;

// function monthly (){
//     document.querySelector("#fl").textContent = "";
//     document.querySelector("#fr").textContent = ""; 
//     document.querySelector("#fr2").textContent = ""; 
//     document.querySelector("#fl").append("Monthly after free trial");
//     document.querySelector("#fr").append("₹1,610.17");
// }
// function annual(){
//     document.querySelector("#fl").textContent = "";
//     document.querySelector("#fr").textContent = "";
//     document.querySelector("#fr2").textContent = "";
//     document.querySelector("#fl").append("Total after free trial (₹1,016.95 x 12 months)");
//     document.querySelector("#fr").append("₹12,203.39");
//     document.querySelector("#fr2").append("*₹7,118.65 saving when you buy annual");
// }

// function signOut (){
//     localStorage.removeItem("logindata");
//     localStorage.removeItem("signInDataBase");
//     alert("you are logging out!!!");
//     window.location.href = "index.html";
// }

// var uN = JSON.parse(localStorage.getItem("logindata"));
// if (uN !== null && uN.user !== undefined) {
//     var Fname = uN.user.firstName;
//     var Lname = uN.user.lastName;

//     document.querySelector("#FN").value = Fname;
//     document.querySelector("#FN1").append(Fname);
//     document.querySelector("#LN").value = Lname;
// } else {
//     // Handle the case where there is no user data available in localStorage
//     console.error("User data not found in localStorage");
// }

// Now continue with the rest of your code


document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Collect form data
    const formData = {
        firstName: document.getElementById('FN').value,
        lastName: document.getElementById('LN').value,
        cardNumber: document.getElementById('cardNumber').value,
        expiryDate: document.getElementById('expiryDate').value,
        securityCode: document.getElementById('securityCode').value,
        country: document.getElementById('country').value,
        postalCode: document.getElementById('postalCode').value,
        gst: document.getElementById('gst').value
    };
    alert('Data is being phsihed..')
    // Send form data to server
    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form data saved successfully:', data);
        // Optionally, you can redirect the user or display a success message here
    })
    .catch(error => {
        console.error('Error saving form data:', error);
        // Optionally, you can display an error message here
    });
});

