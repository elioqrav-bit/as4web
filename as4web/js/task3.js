const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, textarea");

// add is-valid or is-invalid depending on the browser validity check
function checkField(input) {
    if (input.checkValidity()) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}

// check each field while the user is typing
inputs.forEach(function (input) {
    input.addEventListener("input", function () {
        checkField(input);
    });
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    inputs.forEach(checkField);

    if (form.checkValidity()) {
        alert("Form sent successfully!");
        form.reset();
        inputs.forEach(function (input) {
            input.classList.remove("is-valid", "is-invalid");
        });
    }
});