"use strict";
function solve(array) {
  let specialCustomerDiscount = 0.1;
  let taxes = 0.2;
  let totalPriceBeforeTaxes = 0;
  let totalOfTaxes = 0;
  let typeOfCustomer = array.pop();
  let totalPrice = 0;

  for (let el of array) {
    if (el < 0) {
      console.log("Invalid price!");
      continue;
    }
    totalPriceBeforeTaxes += +e;
  }
  totalOfTaxes += totalPriceBeforeTaxes * taxes;
  totalPrice += totalPriceBeforeTaxes + totalOfTaxes;
  if (typeOfCustomer === "special") {
    totalPrice -= totalPrice * specialCustomerDiscount;
  }

  if (totalPriceBeforeTaxes <= 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPriceBeforeTaxes.toFixed(2)}$
    Taxes: ${totalOfTaxes.toFixed(2)}$
    -----------
Total price: ${totalPrice.toFixed(2)}$`);
  }
}
solve(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);
