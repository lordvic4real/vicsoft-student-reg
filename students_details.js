document.addEventListener("DOMContentLoaded", () => {
  // Function to render the student table
  function renderStudentTable() {
    const tableBody = document.getElementById("student-table-body");
    if (!tableBody) {
      console.error("Error: 'student-table-body' element not found.");
      return;
    }
    tableBody.innerHTML = "";

    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach((student) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.email}</td>
        <td>${student.phoneNumber}</td>
        <td>${student.state}</td>
        <td>${student.address}</td>
        <td>${student.gender}</td>
        <td>${student.dob}</td>
        <td>${student.program}</td>
        <td>${student.price}</td>
        <td>${student.start_date}</td>
        <td>${student.end_date}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Function to initialize the page
  function initializePage() {
    // Render student table
    renderStudentTable();
  }

  // Initialize the page when the DOM is fully loaded
  initializePage();
});

