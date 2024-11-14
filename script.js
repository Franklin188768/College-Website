console.log('Hello!');
const todaysdate = () => {
    let d = new Date();
    return "Today's date is " + d.toLocaleDateString();
}

const dateblock = document.getElementById("Dateblock");
dateblock.innerText = todaysdate();


document.getElementById("loginForm").addEventListener("submit", formsubmission);

function formsubmission(event) {
    event.preventDefault();
    console.log("Form submitted!");
    window.location.href = "page2.html";
}


