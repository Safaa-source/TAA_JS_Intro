function product(id, name, price, quantity){
    this.id = id ;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.getTotal = function(){
        return this.price * this.quantity;
    }
}

let product1 = new product(1, 'apple', 5, 10);
let product2 = new product(2, 'orange', 3, 5);
let product3 = new product(3, 'mango', 4, 8);

let invoiceTotal = product1.getTotal() + product2.getTotal() + product3.getTotal() 

console.log('---ecobar---')
console.log('------------------------------------------------------')
console.log('| ID:\tName:\tPrice:\tQuantity:\tTotal Price: |')
console.log('------------------------------------------------------')
console.log('| ' + product1.id + '\t' + product1.name + '\t ' + product1.price + ' USD\t   ' + product1.quantity + '\t\t' + product1.getTotal() + 'USD\t     ' + '|')
console.log('------------------------------------------------------')
console.log('| ' + product2.id + '\t' + product2.name + '\t ' + product2.price + ' USD\t   ' + product2.quantity + '\t\t' + product2.getTotal() + 'USD\t     ' + '|')
console.log('------------------------------------------------------')
console.log('| ' + product3.id + '\t' + product3.name + '\t' + product3.price + ' USD\t   ' + product3.quantity + '\t\t' + product3.getTotal() + 'USD\t     ' + '|')
console.log('------------------------------------------------------')
console.log(invoiceTotal)