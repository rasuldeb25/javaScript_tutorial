//class = (ES6 feature) that provides a more structured and cleaner way to 
//          work with objects compared to tradational constructor functions
//          ex. static keyword, encapsulation, iheritance

 class Product{
     constructor(name, price){
        this.name = name;
        this.price = price;
     }
     displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
     }
     calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
     }
 }
const salesTax = 0.05;

 const Product1  = new Product (`Shirt`, 19.99);
 const Product2  = new Product (`Glasses`, 49.99);
 const Product3  = new Product (`Sweter`, 99.00);


 Product1.displayProduct();
 const total = Product1.calculateTotal(salesTax);
 console.log(`Total price with tax included is: $${total.toFixed(2)}`);