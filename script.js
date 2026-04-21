const form = document.getElementById("contactForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

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

// Phone validation (10 digits)
phone.addEventListener("input", () => {
  // Remove all non-numeric characters
  phone.value = phone.value.replace(/\D/g, "");

  // Validate 10 digits
  if (phone.value.length !== 10) {
    showError(phone, phoneError, "Enter 10 digit phone number");
  } else {
    clearError(phone, phoneError);
  }
});

