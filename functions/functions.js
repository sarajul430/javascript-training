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

/******* All three array store in one variable*********/ 

const students4 = [student1, student2, student3]
students4.filter(m => m.marks > 50)

/****** sum marks all create above the array *******/ 

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



//***************** find marks whos average  grater than  50**************************/ 

students4.filter(s => getAverage2(s.marks) >=50).map(s =>s.name)

// ********* Assignment 4.3

// 1. Create an array `marks` that stores the marks of a student in all the subjects. Convert the this array of marks to an array of `grades` based on the following rule.
  
//     a. Grade 'A' for marks between 80 and 100
    
//     b. Grade B for marks between 60 and 80

//     c. Grade C for marks between 40 and 60

//     d. Grade 'D' for marks below 40

//     Example: 
//     let marks = [23,45,67,65,87,90]
//      then grades should be ['D','C','B','A', 'A']  **************

let marks = [23,45,67,65,87,90]

const getGrades = mark => {
    if (mark > 80 && mark < 100){
        return "A"
    } else if(mark > 60 && mark <= 80){
        return "B"
    } else if (mark > 40 && mark <= 60){
        return "C"
    }else {
        return "D"
    }
}

marks.map(s => getGrades(s))

//****** 2. Create an array of array to store the marks scored in all the subjects in all the 8 semesters of an engineering program and /n
// *********then merge all the marks and calculate the grades based on the above grades rule.***********











// Assignment 4.4

// 1. Create multiple objects of type item, which has the following properties:

//    - itemName(string)

//    - itemPrice(number)

//    - orderCount(number)

//    Create a variable `items` that will store all the item objects created in the previous step.

//    - Find the items whose price is greater than 1000.

//    - Find the item which has the most number of orders.

//    - Sort the items in ascending order of its price.

//    - Transform the items array into a list of items which has only two attributes - itemName and itemPrice.


const item1 = {
    itemName : "jeans",
    itemPrice : 1500,
    orderCount : 3
}
const item2 = {
    itemName : "shirt",
    itemPrice : 1050,
    orderCount : 5
}
const item3 = {
    itemName : "bag",
    itemPrice : 900,
    orderCount : 1
}

const items =[item1, item2, item3]

/**************Find the items whose price is greater than 1000.**************/ 

items.filter(p => p.itemPrice > 1000)

/***********Find the item which has the most number of orders.**************/ 

items.filter(o => Math.max(o.orderCount) > 0)
// const max = items.reduce(o => Math.max(o.orderCount))


   let max = Math.max(...items.filter(i => i.orderCount));
   console.log(`maximum orderCount is ${max}`)

/******************Sort the items in ascending order of its price******************/ 

const sortItemPrice = (items = []) => {
    const sorter = (a, b) => {
        return +a.itemPrice - +b.itemPrice;
    };
    items.sort(sorter);
};
sortItemPrice(items)
console.log(items)

/**********Transform the items array into a list of items which has only two attributes - itemName and itemPrice***********/ 

items.map(a => console.log(`itemName ${a.itemName}, itemPrice ${a.itemPrice}`))
