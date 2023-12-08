// example 1
abstract class Shape{
    abstract calculateArea(): number
}

class Rectangle extends Shape{
    constructor(public width: number, public height: number){
        super()
    }
    public calculateArea(): number {
        return this.width * this.height
    }    
}

class Square extends Shape{
    constructor(public side: number){
        super()
    }
    public calculateArea(): number {
        return this.side * this.side
    }    
}

// client code
function area(shape: Shape): number{
    return shape.calculateArea()
}

const rectangle = new Rectangle(20, 30)
const square = new Square(20)

console.log(area(rectangle))
console.log(area(square))


// Example 2
abstract class PaymentProcessor{
    abstract makePayment(amount: number): void
}

class CreditCardProcessor extends PaymentProcessor{
    constructor(){
        super()
    }
    makePayment(amount: number): void {
        console.log('Payment with credit card');
    }
}

class DebitCardProcessor extends PaymentProcessor{
    constructor(){
        super()
    }
    makePayment(amount: number): void {
        console.log('Payment with debit card');        
    }
}

// client code
function executePayment(paymentProcessor: PaymentProcessor, amount: number): void{
    paymentProcessor.makePayment(amount)
}

const creditCardProcessor = new CreditCardProcessor()
const debitCardProcessor = new DebitCardProcessor()
executePayment(creditCardProcessor, 200)
executePayment(debitCardProcessor, 300)