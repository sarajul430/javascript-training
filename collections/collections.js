let phone1 = {
    imeiNum: 1224,
    price: 120000,
    model: "samsung",
    quantityAvailable: 10
}

let phone2 = {
    imeiNum: 1224,
    price: 120000,
    model: "mi",
    quantityAvailable: 10
}

let phone3 = {
    imeiNum: 1224,
    price: 120000,
    model: "oneplus",
    quantityAvailable: 10
}

let phones = new Set([phone1, phone2, phone3])
let order = {
    model: "samsung",
    quantityOrdered: 5
}
const buyMobiles = (phoneSet, orderDetail) => {
    for (p of phoneSet) {
        if (p.model == orderDetail.model) {
            if (p.quantityAvailable > orderDetail.quantityOrdered) {
                p.quantityAvailable -= orderDetail.quantityOrdered;
            } else {
                console.log(`This mobile has only ${p.quantityAvailable}`);
                phoneSet.delete(p)
            }
        }
    }
    return phoneSet;
}





/*********Create a set of mobile phone objects which has the following properties.

a. imeiNum
b. model
c. price
d. quantityAvailable

Now add create a function named buyMobiles that takes two parameters - 
phones set and orderDetail. OrderDetail is an object that would consist of model name  
and quantity ordered. If the quantity ordered is greater than quantityAvailable, 
show a message that the mobile phone has only 'x' quantity and update the set by removing that phone from the set.*****/

let mobilePhones = new Set()

let mobile4 = {
    imeiNum: 23141321,
    model: "samsung",
    price: 16500,
    quantityAvailable: 20
}

let mobile5 = {
    imeiNum: 43552424,
    model: "one plus",
    price: 65000,
    quantityAvailable: 15
}
let mobile6 = {
    imeiNum: 74363455,
    model: "I phone",
    price: 140000,
    quantityAvailable: 17
}
mobilePhones.add(mobile1)
mobilePhones.add(mobile2)
mobilePhones.add(mobile3)

let Phones = new Set ([mobile4, mobile5, mobile6])


const orderDetail1 = {
    mobileName : "one plus",
    quantityOrder : 24
}
const orderDetail2 = {
    mobileName : "I phone",
    quantityOrder : 15
}


const buyMobiles3 = (phoneSet, orderDetail) => {
    for (mob of phoneSet) {
        if ( mob.model == orderDetail.mobileName ){
            if(mob.quantityAvailable > orderDetail.quantityOrder){
                mob.quantityAvailable -= orderDetail.quantityOrder
            } else {
                phoneSet.delete(mob)
                console.log(`This mobile has only ${mob.quantityAvailable}`)
            }
        }
    }
    return phoneSet
} 

/***********Create a set of 5 articles which has the following properties.************/

let articles1 = {
    articleId : 2,
    publishedDate : new Date(2023-02-15),
    content : "Importance of cyber security",
    author : "Abi Tyas"
}

let articles2 = {
    articleId : 4,
    publishedDate : new Date(2022-01-25),
    content : "Modern CSS Explained",
    author : "Peter"
}

let articles3 = {
    articleId : 5,
    publishedDate : new Date(2023-02-15),
    content : "Basic Operations With a Set",
    author : "Shad"
}

let articles4 = {
    articleId : 7,
    publishedDate : new Date(2023-05-06),
    content : "All about JavaScript functions",
    author : "Shad"
}
let articles5 = {
    articleId : 6,
    publishedDate : new Date(2023-02-12),
    content : "About The JavaScript Array",
    author : "Sarajul"
}

let articles = new Set([articles1, articles2, articles3, articles4, articles5])

/* i. Create a function `listArticlesPublished` 
 * that takes a date as a parameter and shows all the 
 * articles published on that date.*/ 

const listArticlesPublished1 = date => {
    for(d of articles){
    if (d.publishedDate.getTime() == new Date(date).getTime()){
        console.log(d)
    } else{
        console.log("Not publish any article in this date")
    }
}
}
listArticlesPublished1("2020-05-06")

/* Create a function `findArticlesByAuthor` 
that takes an author as a parameter and shows 
all the articles published by that author.
 */
const findArticlesByAuthor1 = name => {
    for (a of articles) {
        if (a.author == name) {
            console.log(a)
        }
    }
}
findArticlesByAuthor1('Shad')
/* Create a function `deleteArticles` that takes an 
 * author as a parameter and the article set as a parameter, 
 * deletes all the articles written by that author and 
 * returns the updated articles */

const deleteArticles = (author, article ) => {
    for (a of articles) {
        if (a.author == author) {
            article.delete(a)
        } 
    }
    return article;
}

deleteArticles('Shad')

/*  Create a function `deleteSensitiveArticles` 
    that takes a sensitive word(string) as a parameter 
    and the article set as a parameter, and deletes all 
    the article that has that sensitive word */ 

    // const deleteSensitiveArticles = (word, articleSet) => {
    //     for (a of articleSet) {
    //         let words = a.content.split(" ")
    //         if (word.incl)
    //         for (i = 0; i < words.length; i++) {
    //             if (words[i] == sensitive) {
    //                 articles.delete(a)

    //             }
    //         }
    //     }
    // }

    const deleteSensitiveArticles1 = (word, articleSet) => {
        for (a of articleSet){
            let words = a.content.split(" ")
            if(words.include(word)){
                articleSet.delete(articles)
            }

        }
        return articleSet;
    }
  


const convertToMap = articleSet => {
    let mapOfArticles = new Map();
    for(articles of articleSet){
        if (mapOfArticles.has(articles.author)){
            let arrayOfArticles = mapOfArticles.get(articles.author);
            arrayOfArticles[arrayOfArticles.length] = articles
            mapOfArticles.set(articles.author, arrayOfArticles)
        } else {
            mapOfArticles.set(articles.author, [articles])
        }
    }
    return mapOfArticles;
}

convertToMap(articles)

// mapOfArticles.set(articles.author, mapOfArticles.get(articles.author) + 1)


/*** Create an ecommerce application by creating following set and maps */

const users = new Map()

users.set(("rahul@gmail.com"),{
    name: "Rahul",
    age: 30,
    city: "Delhi"
})
users.set(("samir@gmail.com"),{
    name: "Samir",
    age: 22,
    city: "Mumbai"
})
users.set(("riya@gmail.com"),{
    name: "Riya",
    age: 21,
    city: "Delhi"
})
users.set(("arvind@gmail.com"),{
    name: "Arvind",
    age: 34,
    city: "Jharkhand"
})
users.set(("kajal@gmail.com"),{
    name: "Kajal",
    age: 25,
    city: "UP"
})

const products = new Set()

products.add({
    productId : 1,
    brandName : "laptop",
    quantityAvailable : 23,
    price : 45000,
    popularity : 14,
    dateManufactured : new Date(2020,09,23)
})

products.add({
    productId : 2,
    brandName : "Sony",
    quantityAvailable : 30,
    price : 15000,
    popularity : 0,
    dateManufactured : new Date(2021,03,25)
})
products.add({
    productId : 3,
    brandName : "Samsung",
    quantityAvailable : 43,
    price : 25000,
    popularity : 0,
    dateManufactured : new Date(2023,01,25)
})
products.add({
    productId : 4,
    brandName : "Google",
    quantityAvailable : 34,
    price : 45000,
    popularity : 0,
    dateManufactured : new Date(2019,03,05)
})



let orders = new Set()
let productIds = [2, 4]

const orderProduct = (productIds, products, userEmail, orders) => {
    let orderId = orders.size + 1
    const productIdSet = new Set(productIds)
    orders.add({
        orderId: orderId,
        dateOrdered : new Date(),
        userEmail : userEmail,
        productsOrdered : productIdSet

    })

    for(p of products){
        if (productIdSet.has(p.productId)){
            p.popularity += 1
        }
    }
    return products
}

orderProduct(productIds, products,"rahul@gmail.com", orders)

/**Create a function `listAllProducts` 
 * that list all the products, order 
 * by manufacturing date*/


const listAllProducts = (productSet) =>{
    return Array.from(productSet).sort ((a, b) => a.dateManufactured.getTime() - b.dateManufactured.getTime())
}

listAllProducts(products)
/*  Create a function, `listUsersByCity` 
that takes the city and users list as a 
parameter and list all the users. */


const listUsersByCity1 = (city, users) => {
    let userByCity  = Array.from(users.values()).filter(u => u.city == city)
    return userByCity;
}
 listUsersByCity1("UP", users)
/**  Create a function listOrdersByUsers that takes the orders 
    set and products set as a parameter and returns a map of orders, 
    where the key is the userId and value is the set of 
    product brand name he has ordered.*/ 

const listOrdersByUsers3 = (orders, products)=>{
    let mapOfOrders = new Map()
    let productArray = Array.from(products)
    for (o of orders){
        let productsOrderedArr = Array.from(o.productsOrdered)
        let productBrands = productsOrderedArr.map(productIds => {
            let productFound = productArray.find(p => p.productId == productIds)
            return productFound.brandName
        })

        if(mapOfOrders.has(o.userEmail)){
            let allBrandName = Array.from(mapOfOrders.get(o.userEmail)).concat(productBrands)
            mapOfOrders.set(o.userEmail, new Set(allBrandName))
        } else{
            mapOfOrders.set(o.userEmail, new Set(productBrands))
        }    

    }
    return mapOfOrders;
}

listOrdersByUsers3(orders, products)

/*Create a function listOrdersOfProducts that takes 
order set and products set as the parameter and returns 
a map of all the products, that has been ordered. 
The key of the returned map will be the brand name and 
the value will be the number of times the product has been ordered */

const listOrdersOfProducts = (orders, products)=> {
    let mapOfOrders = new Map()
    let productArray = Array.from(products)
    for (o of orders){
        let productsOrderedArr = Array.from(o.productsOrdered)
        let productBrands = productsOrderedArr.map(productIds => {
            let productFound = productArray.find(p => p.productId == productIds)
            return productFound.brandName
        })
        productBrands.forEach(p =>{
            if (mapOfOrders.has(p)){
                mapOfOrders.set(p, mapOfOrders.get(p) +1)
            }else{
                mapOfOrders.set(p, 1)
            }
        })
           

    }
    return mapOfOrders;
}
listOrdersOfProducts(orders, products)
/*  Create a function sortProducts that takes the product set 
    and the field name as the parameter and returns an array of 
    products that are sorted by the field name. 
    For example if the function called - sortProducts(products, "popularity"), 
    then the product set should be sorted by its popularity. */ 


const sortProducts =(products, fieldName) =>{
    return Array.from(products).sort((a,b) => a[fieldName] - b[fieldName])
}

sortProducts(products, 'productId')
/*  Create a function mostPopularProductUsers that takes the products, 
    orders, and users as the parameter and returns an array of all the 
    users who have ordered the product that has the highest popularity.*/

    const mostPopularProductUsers2 = (products, orders, users) =>{
        let productArr = Array.from(products)
        let maxPopularity = Array.from(products).reduce((maxPop, currElem) => {
            if(maxPop > currElem.popularity){
                return maxPop
            } else {
                return currElem.popularity
            }

        }, 0);
        let productIds = productArr.filter(p => p.popularity == maxPopularity).map(p => p.productId)

        let userWithPopularProducts = []
        for (o of orders) {
            let hasProduct = false;
            for(orderProductId of o.productsOrdered){
                if(!hasProduct && productIds.includes(orderProductId)){
                    hasProduct = true
                }
            }
            if(hasProduct){
                userWithPopularProducts.push(users.get(o.userEmail))
            }
        }
        return userWithPopularProducts;

    }

mostPopularProductUsers2(products, orders, users)

/**Using class function above the ecommerce application problems */


function User(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city
}

const user1 = new User("sarajul",30, "dhanbad")
const user2 = new User("Rahul",25, "Delhi")
const user3 = new User("Samir",22, "Mumbai")
const user4 = new User("Riya",21, "Delhi")
const user5 = new User("Kajal",25, "UP")

const usersInfo = new Map()

usersInfo.set("sarajul@gmail.com", user1)
usersInfo.set("rahul@gmail.com", user2)
usersInfo.set("samir@gmail.com", user3)
usersInfo.set("riya@gmail.com", user4)
usersInfo.set("kajal@gmail.com", user5)


function Product(productId, brandName, quantityAvailable, price, popularity, dateManufactured){
    this.productId = productId;
    this.brandName = brandName;
    this.quantityAvailable = quantityAvailable;
    this.price = price;
    this.popularity = popularity;
    this.dateManufactured = dateManufactured
}


const product1 = new Product(1, "laptop", 23, 45000, 0, new Date(2020,09,23))
const product2 = new Product(2, "Sony", 30, 45000, 0, new Date(2021,03,25))
const product3 = new Product(3, "Samsung", 43, 25000, 0, new Date(2023,01,25))
const product4 = new Product(2, "LG", 35, 50000, 0, new Date(2019,03,05))
const product5 = new Product(2, "Sony", 50, 45000, 0, new Date(2020,07,13))



const Products = new Set([product1, product2, product3, product4, product5])

let orders = new Set()
let ProductIds = [2, 4]

function orders(orderId, dateOrdered, userEmail, productsOrdered ){
    this.orderId = orderId;
    this.dateOrdered = dateOrdered;
    this.userEmail = userEmail;
    this.productsOrdered = productsOrdered
}

const orderProduct1 = (ProductIds, products, userEmail, orders) => {
    let orderId = orders.size + 1
    const productIdSet = new Set(ProductIds)

    orders.add({
        orderId: orderId,
        dateOrdered : new Date(),
        userEmail : userEmail,
        productsOrdered : productIdSet

    })

    for(p of products){
        if (productIdSet.has(p.ProductId)){
            p.popularity += 1
        }
    }
    return products
}

orderProduct1(productIds, products,"rahul@gmail.com", orders)





function Cars (brandName, modelName, yearOfManufacture){
    this.brandName = brandName;
     this.modelName = modelName;
     this.yearOfManufacture = yearOfManufacture
}

const car1 = new Cars("Maruti", "Alto K10", 2020)
const car2 = new Cars("Hyundai", "Creta", 2019)
const car3 = new Cars("Tata", "Nexon", 2021)



const cars = Array.from(Cars)

const listCarsEarlierThan1 = (cars, year) =>{
    return cars.filter(d => d.yearOfManufacture > year)

}


const listCarsAge = (cars) =>{
    for(c of cars){
    console.log(`The ${c.brandName} car having model ${c.modelName} is ${c.yearOfManufacture - getUTCFullYear()} years old`)
}

}


/* attributed function*/

for(let i in car1){
     console.log(`the attributed ${i} value is ${car1[i]}`)
 }
    
 Object.hasOwn(car1, 'brandName')
//  true

 Boolean('brand' in car1)
//  false
 Boolean('brandName' in car1)
//  true

Cars.prototype.showMileage = function(){
    console.log(`the mileage is very less`)
}
car1.showMileage()

Cars.prototype.displayBrand = function(){
    console.log(`the brand is ${this.brandName}`)
}

car1.displayBrand()

Cars.prototype.callFunc = function(){
    this.displayBrand()
}

car1.callFunc()

//variable of static field 
Cars.wheels = 4
Cars.wheels

//variable of convert to array

Cars.convertToArray = function(set){
    Array.from(set)
}

Cars.convertToArray = function(set){
    return Array.from(new set [1,2,3])
}

class carType {
    wheelCount = 4;
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;

    }
    static wheels = 6;

    static convertToArray(set){
        return Array.from(set)
    }
}

carType.wheels
carType.wheelCount
let car1 = new carType("honda", "city", 2010)

car1.wheelCount

car1.brand
car1.model
car1.year
