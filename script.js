const form = document.getElementById("contactForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");
const project = document.getElementById("project");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
// const companyError = document.getElementById("companyError");
// const projectError = document.getElementById("projectError");
// const messageError = document.getElementById("messageError");

// Show error
function showError(input, errorEl, message) {
  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
  input.classList.add("border", "border-red-500");
}

// Clear error
function clearError(input, errorEl) {
  errorEl.textContent = "";
  errorEl.classList.add("hidden");
  input.classList.remove("border", "border-red-500");
}



// Name validation
name.addEventListener("input", () => {
  name.value = name.value.replace(/[0-9]/g, "");
  const regex = /^[A-Za-z\s]*$/;

  if (!regex.test(name.value)) {
    showError(name, nameError, "Only letters allowed");
  } else {
    clearError(name, nameError);
  }
});

// Email validation
email.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    showError(email, emailError, "Enter valid email");
  } else {
    clearError(email, emailError);
  }
});

// Phone validation
phone.addEventListener("input", () => {
  phone.value = phone.value.replace(/\D/g, "");

  if (phone.value.length !== 10) {
    showError(phone, phoneError, "Enter 10 digit phone number");
  } else {
    clearError(phone, phoneError);
  }
});



form.addEventListener("submit", function (e) {
  e.preventDefault();

  
  if (name.value.trim() === "") {
    showError(name, nameError, "Name is required");
    name.focus();
    return;
  }

  // 2. Company
  // if (company.value.trim() === "") {
  //   showError(company, companyError, "Company is required");
  //   company.focus();
  //   return;
  // } else {
  //   clearError(company, companyError);
  // }

  // 3. Phone
  if (phone.value.trim() === "") {
    showError(phone, phoneError, "Phone is required");
    phone.focus();
    return;
  }

  // 4. Email
  if (email.value.trim() === "") {
    showError(email, emailError, "Email is required");
    email.focus();
    return;
  }

  // 5. Project
  // if (project.value.trim() === "") {
  //   showError(project, projectError, "Project type is required");
  //   project.focus();
  //   return;
  // } else {
  //   clearError(project, projectError);
  // }

  // 6. Message
  // if (message.value.trim() === "") {
  //   showError(message, messageError, "Message is required");
  //   message.focus();
  //   return;
  // } else {
  //   clearError(message, messageError);
  // }

 

  
  alert("Form submitted successfully!");
});