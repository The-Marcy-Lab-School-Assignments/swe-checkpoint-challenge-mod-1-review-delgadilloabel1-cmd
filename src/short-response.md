# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The bug that is occuring is a **scope issue**. The `letter`, on line 18, exists in the function scope.
Each `let letter = "A"` inside the blocks creates a **new**, **separate variable** that only exists inside that block.
So when the function returns, it is using the **outer** `letter`, which was **never** assigned a value, which makes the output of `letter` = `undefined`.

**Part B:**

I would fix this by removing the `let` keyword from inside **each** conditional statement. This way, instead of creating new **block scoped variables**, the function will assign values to the `letter` variable declared on line 18, allowing it to retain its value when the function returns.

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

When `console.log(originalSettings.volume)` is logged, the output of this will be 75. This happened becuase `newSettings` shares the same **reference** as `orginalSettings` in **memory**. When `newSettings.volume = 75` is written, this will update the **reference** , and since `orginalSettings` refers to the same **reference** will **inadvertently** update the data of `orginalSettings`.

**Part B:**

I would create a **shallow copy** of `orginalSettings`, using the **spread operator** `...`. This will allow `newSettings` to be able to make changes/updates to the object **without** affecting `ogrinalSettings` data. They will no longer refer to the same object.

**Corrected Code:**

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings }; // This creates a shallow copy of orginalSettings
newSettings.volume = 75; // This action will not affect originalSettings data
console.log(originalSettings.volume); // Output will remain 50
```

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

#### What is the value of `product`?

The **value** of `product` in the **first** iteration specifically, is the first object in the array:

```js
{ name: "Laptop", price: 1000, inStock: true }
```

#### What gets returned from the callback?

The callback returns `product.inStock`, which in the first iteration evaluates to true, because the Laptop is in stock. The callback returns a **boolean value** that tells `.filter()` whether to keep this item or not.

#### What happens with that returned value?

Since **true** was returned, `.filter()` includes this object in the **new array** `itemsInStock`. The method `.filter()` then **continues** to the next object and **repeats** the process, **only** keeping objects where the callback returns **true**.
