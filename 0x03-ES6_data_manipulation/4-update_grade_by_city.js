export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((std) => std.location === city).map((std) => ({ ...std, grade: newGrades.filter((g) => g.studentId === std.id).map((g) => g.grade) [o] || 'N/A' }));
}