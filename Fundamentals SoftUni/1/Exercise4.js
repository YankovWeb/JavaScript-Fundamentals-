function vacation(group, type, day){
    let dayPrice = 0
    let groupPrice = 0
    let price = 0
    let discout = 0
Number(group)
switch(type){
    case "Students":
        switch(day){
            case "Friday":
                dayPrice = 8.45;
                price = dayPrice * group 
                break;
                case "Saturday":
                    dayPrice = 9.80;
                price = dayPrice * group 
                break;
                case "Sunday":
                    dayPrice = 10.46;
                price = dayPrice * group 
                break;


        }if(group >= 30){
            let discout = 0.15
            price-= price * discout;
        }break;
    
        case "Business":
            switch(day){
                case "Friday":
                    dayPrice = 10.90;
                    price = dayPrice * group
                    break;
                    case "Saturday":
                        dayPrice = 15.60;
                    price = dayPrice * group
                    break;
                    case "Sunday":
                        dayPrice = 16;
                    price = dayPrice * group
                    break;
    
    
            }if(group >= 100){
                let discout = price / group * 10
                price -= discout;
            }break;
             case "Regular":
            switch(day){
                case "Friday":
                    dayPrice = 15;
                    price = dayPrice * group
                    break;
                    case "Saturday":
                        dayPrice = 20;
                    price = dayPrice * group 
                    break;
                    case "Sunday":
                        dayPrice = 22.50;
                    price = dayPrice * group 
                    break;
    
    
            }if(group >= 10 && group <= 20){
                let discout = 0.05
                price-= price * discout;
                
            }break;
}
    console.log(`Total price: ${price.toFixed(2)}`)
}vacation(30,
    "Students",
    "Sunday")
    vacation(40,
"Regular",
"Saturday")
vacation(100, "Business" , "Friday")