console.log("GRID 2K26 Website");
console.log("GRID 2K26 Website");

// Countdown Timer

// Registration Countdown

const eventDate = new Date("August 14, 2026 23:59:59").getTime();

setInterval(function () {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML =
        "⛔ Registration Closed";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
    `
    <div><span>${days}</span><br>Days</div>
    <div><span>${hours}</span><br>Hours</div>
    <div><span>${minutes}</span><br>Minutes</div>
    <div><span>${seconds}</span><br>Seconds</div>
    `;

}, 1000);
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzE5dVkGzrRru3k43UIzPU53B855001qrbUlekhvKP9eemWTzTewxXoUfX-XBsN4vWR/exec";

document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        college: document.getElementById("college").value,
        department: document.getElementById("department").value,
        year: document.getElementById("year").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        event: document.getElementById("event").value,
        screenshot: document.getElementById("screenshot").files.length > 0
            ? document.getElementById("screenshot").files[0].name
            : "No Screenshot"
    };

    fetch(SCRIPT_URL,{
        method:"POST",
        body:JSON.stringify(data)
    })
    .then(response=>response.text())
    .then(result=>{
        alert("Registration Submitted Successfully!");
        document.getElementById("registrationForm").reset();
    })
    .catch(error=>{
        alert("Error: " + error);
    });

});