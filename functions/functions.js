// The legal age for marry of men is above 21 years and for women its 18 years.

const canMarry = (gender, age) => {

    if(age >= 21 && gender == 'male'){
        return true
    } else if(age >= 18 && gender == 'female')
    if (gender == "male" && age < 21) {
      return true;
    } 
     else {
      return false;
    }
  }

  canMarry()

//   Write an arrow function to find the average marks. 
const avgMarks = (math,phy,chem) => (math, phy, chem)/3;

avgMarks(50, 70, 45)

// find grade
 
const getGrade = (marks) => {
    if(marks > 90 && marks < 100){
        return "A"
    } else if (marks > 70 && marks <= 90){
        return "B"
    } else if(marks > 50 && marks <= 70){
        return "C"
    } else{
        return "D"
    }

}

getGrade(76)

// Create an array `marks` that stores the marks of a student in all the subjects. Convert the this array of marks to an array of `grades` based on the following rule.

const student1 = {
    name:"Ram",
    age: 25,
    isStudent : true,
    marks: [29, 40, 48, 38],
    bornDate : new Date(14/03/1990),
    sayHello :()=> console.log("Hello Everyone")
}
const student2 = {
    name:"Shamir",
    age: 35,
    isStudent : true,
    marks: [55, 40, 68, 77],
    bornDate : new Date(14/03/1990),
    sayHello :()=> console.log("Hello Everyone")
}
const student3 = {
    name:"Tarun",
    age: 28,
    isStudent : true,
    marks: [65, 80, 68, 57],
    bornDate : new Date(14/03/1990),
    sayHello :()=> console.log("Hello Everyone")
}

const students4 = [student1, student2, student3]
students4.filter(m => m.marks > 50)


const getAverage2 = arrayOfNumber =>{
    let sum = 0;
    arrayOfNumber.forEach(a => {
    sum += a;      
    });
    return sum/arrayOfNumber.length;
}

getAverage2([20,46,7])

const getAverageWithReduce = arrayOfNumber =>{
 let sum = arrayOfNumber.reduce((acc, currentValue) => acc + currentValue, 0)
 return sum/arrayOfNumber.length
}
getAverageWithReduce([2, 4, 5])

// const getAverageWithReduce1 = students4 => {
//     let sum = (students4.marks).reduce((acc, currentValue) => acc + currentValue, 0)
//     return sum/arrayOfNumber.length

    
// }
students4.filter(s => getAverage2(s.marks) >=50).map(s =>s.name)

