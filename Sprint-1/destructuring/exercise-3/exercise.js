let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


// Print Header
console.log(`QTY\tITEM\t\t\tTOTAL`);

// Initialize total cost
let totalCostPence = 0;

// Print each item
order.forEach(({ itemName, quantity, unitPricePence }) => {
  const totalPricePence = quantity * unitPricePence; // Total price in pence
  totalCostPence += totalPricePence; // Add to total cost
  const totalPricePounds = (totalPricePence / 100).toFixed(2); // Convert to pounds
  console.log(
    `${quantity}\t${itemName.padEnd(20)}${totalPricePounds}` // Format with padding
  );
});

// Print Total
console.log(`\nTotal: ${(totalCostPence / 100).toFixed(2)}`);
