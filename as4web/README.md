# Assignment 4. Forms and Validation

**Name:** Sissenbay Rassul
**Group:** Se2538

---

## Part 1. Basic HTML Forms

### Task 0. Simple Contact Form

Create a basic contact form with Name (text), Email (email), Message (textarea) and a Submit button. All fields must have proper `<label>` elements.

I made a simple form with three fields and a button. Every label is connected to its input with the `for` and `id` attributes, so when I click on the label the cursor goes to the field.

![Task 0](screenshots/task0.png)

### Task 1. Form with HTML5 Validation

Add built-in validation attributes (`required`, `type`, `maxlength`, etc.) and test how the browser enforces them.

I added `required` to all fields, `minlength` and `maxlength` to the name and message, and `type="email"` to the email field. After that I tested the form:

- empty fields: the browser shows "Please fill out this field";
- email without `@`: the browser asks to include `@` in the address;
- message shorter than 10 characters: the browser says the text is too short.

![Task 1 - empty field](screenshots/task1-empty.png)
![Task 1 - wrong email](screenshots/task1-email.png)

---

## Part 2. Bootstrap Forms

### Task 2. Bootstrap Form Styling

Recreate the contact form using Bootstrap form classes, arrange fields with the grid, add placeholders and helper text.

I connected Bootstrap 5.3 with a CDN link. The form uses `form-label`, `form-control` and `btn btn-primary`. For the layout I used `row g-3` and `col-md-6`, so name and email are in one row on a big screen and become one under another on a phone. I also added placeholders and a helper text (`form-text`) under the email field.

![Task 2](screenshots/task2.png)

### Task 3. Bootstrap Validation Styles

Apply `is-valid` / `is-invalid` classes, show feedback messages below the inputs and test the form with valid and invalid data.

I used `novalidate` on the form to turn off the browser messages. Then a small JavaScript file checks every field with `checkValidity()` and adds `is-valid` or `is-invalid`. Under each input there are `valid-feedback` ("Looks good!") and `invalid-feedback` (for example "Email is required and must be a valid address."). The check works while typing and when the form is submitted.

![Task 3 - invalid data](screenshots/task3-invalid.png)
![Task 3 - valid data](screenshots/task3-valid.png)

---

## Part 3. Advanced Form Project

### Task 4. Registration Form

Create a registration form with First Name, Last Name, Email, Password + Confirm Password, Gender (radio), Hobbies (checkboxes), Country (select), Submit and Reset buttons. Use Bootstrap Grid, HTML5 validation and Bootstrap validation feedback.

What I did:

- the layout is made with the Bootstrap grid (`row`, `col-md-6`, `col-12`), so it is responsive;
- HTML5 attributes: `required`, `minlength="8"` for password, `type="email"`;
- JavaScript checks that Confirm Password is equal to Password;
- for radio buttons and checkboxes I show a red message if nothing is selected;
- the Reset button also removes the green and red styles.

![Task 4 - errors](screenshots/task4-errors.png)
![Task 4 - success](screenshots/task4-success.png)
![Task 4 - mobile view](screenshots/task4-mobile.png)

---

## Summary

First I read the assignment and the Bootstrap forms documentation. Then I did the tasks one by one: plain HTML form, HTML5 validation, Bootstrap styling, Bootstrap validation classes, and the final registration form. The hardest part was the validation of the password confirmation and of the radio buttons/checkboxes, because Bootstrap does not show feedback for them automatically, so I had to write some JavaScript. I tested every form with correct and incorrect data and checked the page on a small screen too. From this assignment I learned the difference between browser validation and Bootstrap validation classes.