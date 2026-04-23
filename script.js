
// Select all forms
const forms = document.querySelectorAll(".contactForm");

forms.forEach((form) => {
  const name = form.querySelector(".name");
  const email = form.querySelector(".email");
  const phone = form.querySelector(".phone");

  const nameError = form.querySelector(".nameError");
  const emailError = form.querySelector(".emailError");
  const phoneError = form.querySelector(".phoneError");

  const scrollBtn = document.getElementById("scrollBtn");

  scrollBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (window.innerWidth >= 1024) {
    document
      .getElementById("contactFormSectionDesktop")
      .scrollIntoView({ behavior: "smooth" });
  } else {
    document
      .getElementById("contactFormSectionMobile")
      .scrollIntoView({ behavior: "smooth" });
  }
});

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

  // Submit 
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (name.value.trim() === "") {
      showError(name, nameError, "Name is required");
      return;
    }

    if (phone.value.trim() === "") {
      showError(phone, phoneError, "Phone is required");
      return;
    }

    if (email.value.trim() === "") {
      showError(email, emailError, "Email is required");
      return;
    }

    alert("Form submitted successfully!");
  });
});