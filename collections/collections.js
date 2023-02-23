<<<<<<< HEAD
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

mapOfArticles.set(articles.author, mapOfArticles.get(articles.author) + 1)

=======
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
>>>>>>> 3b2cc21c5f837118f74ad0091d06bed2e41b6c8b
