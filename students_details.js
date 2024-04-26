document.addEventListener("DOMContentLoaded", function () {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const tableBody = document.getElementById("student-table-body");

  students.forEach(function (student) {
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
});
