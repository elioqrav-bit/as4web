const form = document.getElementById("regForm");
const textFields = form.querySelectorAll("input.form-control, select");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function setState(input, ok) {
    input.classList.toggle("is-valid", ok);
    input.classList.toggle("is-invalid", !ok);
}

function checkField(input) {
    if (input === confirmPassword) {
        // confirm password must not be empty and must be equal to password
        setState(input, input.value !== "" && input.value === password.value);
    } else {
        setState(input, input.checkValidity());
    }
}

function checkGender() {
    const chosen = form.querySelector("input[name='gender']:checked") !== null;
    document.getElementById("genderError").classList.toggle("d-none", chosen);
    return chosen;
}

function checkHobbies() {
    const chosen = form.querySelectorAll(".hobby:checked").length > 0;
    document.getElementById("hobbyError").classList.toggle("d-none", chosen);
    return chosen;
}

textFields.forEach(function (input) {
    input.addEventListener("input", function () {
        checkField(input);
        // if the password changes, confirm field should be checked again
        if (input === password && confirmPassword.value !== "") {
            checkField(confirmPassword);
        }
    });
});

form.querySelectorAll("input[name='gender']").forEach(function (radio) {
    radio.addEventListener("change", checkGender);
});
form.querySelectorAll(".hobby").forEach(function (box) {
    box.addEventListener("change", checkHobbies);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    textFields.forEach(checkField);
    const genderOk = checkGender();
    const hobbiesOk = checkHobbies();

    const allOk = form.querySelectorAll(".is-invalid").length === 0 && genderOk && hobbiesOk;
    if (allOk) {
        alert("Registration completed!");
    }
});

// reset button should also clear the green and red styles
form.addEventListener("reset", function () {
    textFields.forEach(function (input) {
        input.classList.remove("is-valid", "is-invalid");
    });
    document.getElementById("genderError").classList.add("d-none");
    document.getElementById("hobbyError").classList.add("d-none");
});