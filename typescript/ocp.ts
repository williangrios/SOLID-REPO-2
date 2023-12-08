interface Customer {
    giveDiscount(): number
    addLoyaltyPoints(amountSpent: number): number
}

class RegularCustomer implements Customer{
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent
    }
    giveDiscount(): number {
        return 10
    }
}
class PremiumCustomer implements Customer{
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 2
    }
    giveDiscount(): number {
        return 20
    }
}

class GoldCustomer implements Customer{
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 3
    }
    giveDiscount(): number {
        return 30
    }
}

class DiscountClass{
    giveDiscount(customer: Customer){
        return customer.giveDiscount()
    }
}

let premiumCustomer = new PremiumCustomer()
let discountClass = new DiscountClass()
const discount = discountClass.giveDiscount(premiumCustomer)