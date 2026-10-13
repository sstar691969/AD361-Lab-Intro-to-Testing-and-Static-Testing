// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.



type GroceryItem = {
  name: string;
  price: number;
};

const ITEMS: GroceryItem[] = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.00 },
];

// Add an item to the grocery list.
export function addItem(name: string, price: number): void {
  if (name.trim() === "") {
    throw new Error("Item name cannot be empty.");
  }

  if (!Number.isFinite(price) || price < 0) {
    throw new Error("Price must be a non-negative number.");
  }

  ITEMS.push({
    name: name.trim(),
    price: Number(price.toFixed(2)),
  });
}

// Delete an item by name.
export function deleteItem(name: string): GroceryItem[] {
  const index = ITEMS.findIndex(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (index !== -1) {
    ITEMS.splice(index, 1);
  }

  return [...ITEMS];
}

// Calculate the subtotal before tax.
export function subtotal(): number {
  const sum = ITEMS.reduce((total, item) => total + item.price, 0);
  return Number(sum.toFixed(2));
}

// Calculate the tax amount.
export function tax(taxRate: number): number {
  if (!Number.isFinite(taxRate) || taxRate < 0) {
    throw new Error("Tax rate must be a non-negative number.");
  }

  return Number((subtotal() * taxRate).toFixed(2));
}

// Calculate the total including tax.
export function total(taxRate: number): number {
  return Number((subtotal() + tax(taxRate)).toFixed(2));
}

// Print the receipt.
export function printReceipt(taxRate: number): void {
  console.log("************************");

  for (const item of ITEMS) {
    console.log(`${item.name} : $${item.price.toFixed(2)}`);
  }

  console.log("************************");
  console.log(`Subtotal: $${subtotal().toFixed(2)}`);
  console.log(`Tax: $${tax(taxRate).toFixed(2)}`);
  console.log(`Total: $${total(taxRate).toFixed(2)}`);
}

// AI transparency: AI was used to clean up this code.
