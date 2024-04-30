document.addEventListener("DOMContentLoaded", function () {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const tableBody = document.getElementById("student-table-body");

  students.forEach(function (student, index) {
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
            <td>
        <button onclick="editStudent(${index})">Edit</button>
        <button onclick="deleteStudent(${index})">Delete</button>
      </td>
        `;
    tableBody.appendChild(row);
  });
});

function editStudent(index) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const editedStudent = students[index];

  // Prompt user to edit student details
  const newFirstName = prompt("Enter new First Name:", editedStudent.firstName);
  const newLastName = prompt("Enter new Last Name:", editedStudent.lastName);
  const newEmail = prompt("Enter new Email:", editedStudent.email);
  const newPhoneNumber = prompt(
    "Enter new Phone Number:",
    editedStudent.phoneNumber
  );
  const newState = prompt("Enter new State of Origin:", editedStudent.state);
  const newAddress = prompt("Enter new Address:", editedStudent.address);
  const newGender = prompt("Enter new Gender:", editedStudent.gender);
  const newDOB = prompt("Enter new Date of Birth:", editedStudent.dob);
  const newProgram = prompt("Enter new Program:", editedStudent.program);
  const newPrice = prompt("Enter new Price:", editedStudent.price);
  const newStartDate = prompt(
    "Enter new Start Date:",
    editedStudent.start_date
  );
  const newEndDate = prompt("Enter new End Date:", editedStudent.end_date);

  // Update student details
  students[index] = {
    firstName: newFirstName,
    lastName: newLastName,
    email: newEmail,
    phoneNumber: newPhoneNumber,
    state: newState,
    address: newAddress,
    gender: newGender,
    dob: newDOB,
    program: newProgram,
    price: newPrice,
    start_date: newStartDate,
    end_date: newEndDate,
  };

  // Update local storage with modified student details
  localStorage.setItem("students", JSON.stringify(students));

  // Refresh the page to update the table
  location.reload();
}

function deleteStudent(index) {
  const students = JSON.parse(localStorage.getItem("students")) || [];

  // Remove student record at specified index
  students.splice(index, 1);

  // Update local storage with modified student list
  localStorage.setItem("students", JSON.stringify(students));

  // Refresh the page to update the table
  location.reload();
}
