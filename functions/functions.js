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



//***************** find marks whose average  greater than  50**************************/ 

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

let maxPrice = items.map(item => item.itemPrice ).reduce((currMax, curr) =>{
    if(currMax > curr){
        return currMax;

    }else {
        return curr;
    }

})

maxPrice
items.find(item => item.itemPrice == maxPrice)
/******************Sort the items in ascending order of its price******************/ 

const sortItemPrice = items.sort((a,b) => a.itemPrice - b.itemPrice) 

sortItemPrice
/**********Transform the items array into a list of items which has only two attributes - itemName and itemPrice***********/ 

items.map( i =>{
    return {
        itemName : i.itemName,
        itemPrice : i.itemPrice,
    }
})

// 2. Create mulitple objects of type medicine, which has the following properties -
//    - medName
//    - medPurchaseDate
//    - medExpiryDate
//    - medPrice

//    Create a variable `meds` that will store all the item objects created in the previous step.
//    - Find the meds whose price is greater than 1000.
//    - Find the medicine which was purchased latest.
//    - Sort the items in ascending order of its expiry date.
//    - Filter the medicine which has crossed the expiry date.
//    - Find the medicine which has the least price.

const medicine1 = {
    medName : "paracetamol",
    medPurchaseDate : new Date(2023/01/25),
    medExpiryDate : new Date(2024/08/20),
    medPrice : 1100
}
const medicine2 = {
    medName : "revital",
    medPurchaseDate : new Date(2022/05/15),
    medExpiryDate : new Date(2025/01/19),
    medPrice : 1900
}
const medicine3 = {
    medName : "buscogast",
    medPurchaseDate : new Date(2023/01/25),
    medExpiryDate : new Date(2024/08/20),
    medPrice : 800
}

const medicines = [medicine1, medicine2, medicine3]

/*************** Find the meds whose price is greater than 1000 *************************/

medicines.filter(price => price.medPrice > 1000)



const report2 = new Map() 
    report2.set(('s1'),{
        name : "Ali",
        age : 25,
        marks : [25, 65, 76, 80]
})

    report2.set(('s2') , {
        name : "Rahul",
        age : 35,
        marks : [54, 77, 87, 34]
})


const getGrade1 = marks => {
   let avgMark = marks.reduce((acc, curr) => acc + curr)/marks.length
    if (avgMark > 80 && avgMark < 100){
        return "A"
    } else if(avgMark > 60 && avgMark <= 80){
        return "B"
    } else if (avgMark > 40 && avgMark <= 60){
        return "C"
    }else {
        return "D"
    }
}

marks.map(s => getGrade1(s))

for ([k, v] of report2){
    console.log(` ${k} is grade ${getGrade1(v.marks)}`)
}


let mugSet = new Set()
mugSet.add("234")
mugSet.length
mugSet.add("234")

mugSet.length

mugSet.size

 mugSet.add("123")

mugSet.add("233")

for (a of mugSet) {
console.log(a)
}

