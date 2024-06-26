export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employees = [];

  for (const department of Object.keys(allEmployees)) {
    employees.push(...allEmployees[department]);
  }

  return {
    *[Symbol.iterator]() {
      for (const employee of employees) {
        yield employee;
      }
    }
  };
}
