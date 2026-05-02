document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("Comment").value;

    let error = "";

    if (name === "") {
        error = "Name is required";
    }
    else if (email === "" || !email.includes("@")) {
        error = "Enter valid email";
    }
    else if (phone === "" || phone.length < 10) {
        error = "Enter valid phone number";
    }
    else if (message === "") {
        error = "Message cannot be empty";
    }

    if (error !== "") {
        document.getElementById("error").innerText = error;
    } else {
        document.getElementById("error").innerText = "";
        alert("Form submitted successfully!");
    }
});
