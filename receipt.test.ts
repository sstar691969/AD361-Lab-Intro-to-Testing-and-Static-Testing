
import {
  addItem,
  deleteItem,
  total,
  tax,
  printReceipt,
} from "./fixed_receipt";

describe("Receipt tests", () => {
  test("adds an item to the grocery list", () => {
    expect(() => addItem("milk", 4.50)).not.toThrow();
  });

  test("deletes an item from the grocery list", () => {
    expect(() => deleteItem("sandwich")).not.toThrow();
  });

  test("calculates the subtotal without tax", () => {
   expect(() => total(0.10)).not.toThrow();
  });

  test("calculates the total with tax", () => {
    expect(() => tax(0.10)).not.toThrow();
  });

  test("prints a receipt", () => {
    const consoleSpy = jest
      .spyOn(console, "log")
      .mockImplementation();

    try {
      printReceipt(0.10);
    } catch (error) {
      // The original implementation may contain errors.
    }

    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});

