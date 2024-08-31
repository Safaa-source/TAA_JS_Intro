let fruits = ["apple" , "orange" , "watermelon" , "pineapple" , "strawberry"];
let vegetables = ["onions" , "peppers" , "cucumber" , "carrots" , "lettuce"];  
let fastFood = ["burger" , "pizza" , "fries" , "tacos" , "sandwiches"];  

console.log("== Inventory Management System ==")
console.log("Fruits")
// for loops
for(let i = 0; i < fruits.length ; i++){
    let j = i+1
    console.log( " " + j +". " +  fruits [i]);
}
console.log("Vegetables")
// while loops
let i = 0;
while(i<vegetables.length){
    let m = i+1; 
    console.log( " " + m + ". " + vegetables [i]);
    i++;
} 
console.log("Fst Food")
// forEach loop
fastFood.forEach ((food , index) => {
    console.log(" " + (index+1) + ". " +food);
});