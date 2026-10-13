
LP02 – Static Testing Issue Report: receipt.ts

Issue 1: Invalid object property syntax

Location: receipt.ts, line 17

Issue: TypeScript syntax error (TS1005: ':' expected).

Explanation: The object uses = instead of : to assign values to the name and price properties. This prevents TypeScript from compiling the file.

Suggested fix: Use valid object property syntax with colons between property names and values.

Status: Open – not fixed.

Issue 2: Incorrect use of indexOf()

Location: receipt.ts, line 22

Issue: Type mismatch (TS2345).

Explanation: ITEMS.indexOf("name") searches for a string, but the array contains objects with name and price properties. The argument does not match the expected object type.

Suggested fix: Search for the item by its name property instead of passing the string "name" directly to indexOf().

Status: Open – not fixed.

Issue 3: Invalid loop iteration

Location: receipt.ts, line 28

Issue: Invalid iteration (TS2488).

Explanation: The statement for (const i of 3) attempts to iterate over the number 3. A number is not an iterable object.

Suggested fix: Iterate over the grocery items or use a valid numeric loop to access array elements.

Status: Open – not fixed.

Issue 4: Attempting to assign a value to a function

Location: receipt.ts, line 29

Issue: Invalid assignment (TS2630).

Explanation: The code attempts to assign a numeric value to total, which is the name of a function.

Suggested fix: Create a local numeric variable to accumulate the item prices.

Status: Open – not fixed.

Issue 5: Invalid addition between a function and a number

Location: receipt.ts, line 29

Issue: Type error (TS2365).

Explanation: The expression attempts to add the total function itself to an item price. A function cannot be added to a number in this calculation.

Suggested fix: Use a numeric accumulator to calculate the subtotal.


Issue 6: Incorrect tax calculation

Location: receipt.ts, line 35

Issue: Incorrect arithmetic and type error (TS2365).

Explanation: The expression total() + taxRate adds the tax rate directly to the subtotal instead of calculating tax as a percentage. The compiler also reports a type error involving the total function.

Suggested fix: Calculate the tax amount by multiplying the subtotal by the tax rate, then add the tax amount to the subtotal if the function is intended to return the total including tax.

Status: Open – not fixed.

 issue 7, include:

- Location: receipt.ts, line 35
- Issue: Incorrect arithmetic and type error (TS2365).
- Explanation: The expression total() + taxRate adds the tax rate directly to the subtotal instead of calculating tax as a percentage. The compiler also reports a type error involving the total function.
- Suggested fix: Calculate the tax amount by multiplying the subtotal by the tax rate, then add the tax amount to the subtotal if the function is intended to return the total including tax.
- Status: Open – not fixed.

For each issue, include:

- Location: receipt.ts, line 49
- Issue: Multiple syntax and name-resolution errors, including TS2552, TS2581, TS1005, and TS1002.
- Explanation: The final console.log() statement has mismatched quotation marks and incorrectly formatted template-literal syntax. As a result, TypeScript misinterprets parts of the output as identifiers or expressions and reports an unterminated string literal.
- Suggested fix: Correct the quotation marks and template-literal delimiters so the total can be displayed as a valid string.
- Status: Open – not fixed.

issue 8, include:

- Location: receipt.ts, line 50
- Issue : Declaration or statement error (TS1128).
- Explanation: The compiler reports an error at the closing brace after encountering the malformed statement on line 49. This may be a cascading error caused by the unterminated string literal rather than a separate problem with the brace itself.
- Suggested fix: Resolve the syntax error on line 49 and rerun the TypeScript compiler to determine whether this error remains.
- Status: Open – pending verification.

Also identify at least one example of each of the following:

- Root cause: syntax errors and over 10 errors related to syntax errors and strings
- Error: 29:5 - error TS2630: Cannot assign to 'total' because it is a function.
- Error:Line 17, Column 27 Parsing error: ':' expected
- Defect:Jest can not run until sytax errors are corrected.
- Failure: Test suite failed to run (jest)
