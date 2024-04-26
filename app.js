document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();
    if (loginEmail === "admin@vicsoft.com" && loginPassword === "12345") {
      localStorage.setItem("logedIn", true);
      alert("login successfully");
      window.location.href = "/reg.html";
    } else {
      alert("Invalid email or password");
    }
  });
});
 
document.addEventListener("DOMContentLoaded", function () {
  const studentDetailForm = document.getElementById("studentDetailForm");

  studentDetailForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const state = document.getElementById("state").value;
    const address = document.getElementById("address").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dob = document.getElementById("dob").value;
    const program = document.getElementById("program").value;
    const price = document.getElementById("price").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;

    // Construct student object
    const student = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      state: state,
      address: address,
      gender: gender,
      dob: dob,
      program: program,
      price: price,
      start_date: startDate,
      end_date: endDate,
    };

    // Save student data to local storage
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    // Redirect to another page after form submission
    window.location.href = "students.html";
  });
});
