interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud1: Student = {
    firstName: "Chidiebere",
    lastName: "Ugwu",
    age: 25,
    location: "Edem"
};

const stud2: Student = {
    firstName: "Chijioke",
    lastName: "Ngwu",
    age: 30,
    location: "Nigeria"
};

const studentList: Student[] = [stud1, stud2];

const table = document.createElement('table');
const table_body = document.createElement(table_body);

table.style.background = "pink";
table.appendChild(table_body);

studentList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    row.appendChild(row);
});

document.body.appendChild(table);