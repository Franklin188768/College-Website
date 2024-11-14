console.log('Hello!');

document.getElementById("loginForm").addEventListener("submit", formsubmission);

function formsubmission(event) {
    event.preventDefault();
    console.log("Form submitted!");
    window.location.href = "page2.html";
}


