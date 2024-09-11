# Aula 01

- [x] Created repository
- [x] Added NodeJS
- [x] Updated README :+1:

## Variables
Today we learned how to create javascript `variables`.

We used to declare variables by using the `var` keyword.

```Javascript

var rotulo = "Ayres"

```

But **ES6(2015)** added block scoped variables with `let` and `const`

```Javascript

let rotuloNome = "Ayres" // Can be ressigned
const  rotuloNumero = "1234" // Can't be reassigned

```

> [!CAUTION]
> `var` can only declare variables in Global Scope and Function Scope.

## Contatenation

You can contatenate values like this:

```Javascript

let x = "World"

console.log( "Hello" + " " + "World!" ) // "Hello World!"
console.log( "Hello" + x ) "Hello World!"
console.log(`Hello ${x}`) // "Hello World!

```

## Comments

You can add a comment by adding ´//´ at the start of a sentence.

```Javascript

// like this

```

### Comparing values

```Javascript

console.log(2 == "2") // Compares values. Parse strings to numbers and returns true.

console.log(2 === "2") // Compares values and data types. Returns false.

```
