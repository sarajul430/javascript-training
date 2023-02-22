const assignGrades2 = (mark) =>{
    let grades = [];
    for (let i = 0; i < mark.length; i++) {
      let grade;
      if (mark[i] > 80 && mark[i] <= 100) {
        grade = 'A';
      } else if (mark[i] > 60 && mark[i] <= 80) {
        grade = 'B';
      } else if (mark[i] > 40 && mark[i] <= 60) {
        grade = 'C';
      
      } else {
        grade = 'D';
      }
      grades.push(grade);
    }
    return grades;
  }
  let mark = [34, 45, 76, 87, 54, 96]
  let grades = assignGrades2(mark);