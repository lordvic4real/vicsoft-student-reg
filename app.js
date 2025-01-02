document.addEventListener("DOMContentLoaded", () => {
  // Login Form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginEmail = document.getElementById("loginEmail").value.trim();
      const loginPassword = document
        .getElementById("loginPassword")
        .value.trim();

      if (loginEmail === "admin@vicsoft.com" && loginPassword === "12345") {
        localStorage.setItem("logedIn", true);
        alert("Login successful!");
        window.location.href = "/reg.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  }

  // Student Registration Form
  const studentDetailForm = document.getElementById("studentDetailForm");
  if (studentDetailForm) {
    studentDetailForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Retrieve form values
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phoneNumber = document.getElementById("phoneNumber").value.trim();
      const state = document.getElementById("state").value.trim();
      const address = document.getElementById("address").value.trim();
      const dob = document.getElementById("dob").value.trim();
      const genderInput = document.querySelector(
        'input[name="gender"]:checked'
      );
      const gender = genderInput ? genderInput.value : "";
      const program = document.getElementById("program").value.trim();
      const price = document.getElementById("price").value.trim();
      const startDate = document.getElementById("start_date").value.trim();
      const endDate = document.getElementById("end_date").value.trim();

      // Validate required fields
      if (!firstName || !lastName || !email || !phoneNumber || !address) {
        alert("Please fill in all required fields.");
        return;
      }

      // Validate optional fields
      if (!gender) {
        alert("Please select a gender.");
        return;
      }
      if (!program) {
        alert("Please select a program.");
        return;
      }
      if (!price) {
        alert("Please select a price.");
        return;
      }

      // Construct student object
      const student = {
        firstName,
        lastName,
        email,
        phoneNumber,
        state,
        address,
        gender,
        dob,
        program,
        price,
        start_date: startDate,
        end_date: endDate,
      };

      // Save student data to local storage
      const students = JSON.parse(localStorage.getItem("students")) || [];
      students.push(student);
      localStorage.setItem("students", JSON.stringify(students));

      alert("Student registered successfully!");
      studentDetailForm.reset();

      // Redirect to another page
      window.location.href = "students.html";
    });
  }
});
