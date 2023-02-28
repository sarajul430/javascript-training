/**Write a function constructor to create 
 * an object of Course, where the course
 *  would be having following properties:

- courseId(number)
- name(string)
- durationInMonths(number)
- eligibility(string)
- startDate(date)
 */

function Course(courseId, name, durationInMonths, eligibility, startDate) {
    this.courseId = courseId;
    this.name = name;
    this.durationInMonths = durationInMonths;
    this.eligibility = eligibility;
    this.startDate = startDate;
}

/**Create 3 courses and store in an array - `courses` */

let course1 = new Course(1, "Full-stack", "12 month", "Graduate", new Date("2022-05-10"))
let course2 = new Course(2, "Python", 06, "Graduate", new Date("2020-10-15"))
let course3 = new Course(3, "Aws", 05, "Matric", new Date("2021-09-14"))

const courses = [course1, course2, course3]

/**Filter the courses that have already started.
- Filter the courses that will start in next 7 days.
- Filter the courses that will start in a month
- Filter the courses that have already been completed. */

const alreadyStarted = (courses) => {
    return courses.filter(x => x.startDate < new Date().getUTCFullYear())
}

const alreadyCompleted = (courses) => {
    return courses.filter(x => x.startDate > new Date().getUTCFullYear())
}

/**Create a function constructor `Student`
 *  with the following properites:

- studentId(number)
- name(string)
- age(string)
- qualification(string) */

function Student(studentId, name, age, qualification) {
    this.studentId = studentId;
    this.name = name;
    this.age = age;
    this.qualification = qualification;
}

/**Create a function constructor `
 * Application` with the following attributes:

- applicationId(number)
- applicationState(string - accepted/rejected/applied)
- applicant(number)
- courseId(number) */

function Application(applicationId, applicationState, applicant, courseId) {
    this.applicationId = applicationId;
    this.applicationState = applicationState;
    this.applicant = applicant;
    this.courseId = courseId;
}