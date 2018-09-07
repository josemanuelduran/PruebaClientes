# Coding Guidelines

These are coding guidelines for TypeScript and Angular.

References:

* [TypeScript Coding-guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines).
* [Angular Style Guide](https://angular.io/styleguide).

## Classes

* Example: `Compiler`, `ApplicationMetadata`
* Use Pascal case for class names.
* In general prefer single words. (This is so that when appending `Proto` or `Factory` the class is still reasonable to work with.)
* Should not end with `Impl` or any other word which describes a specific implementation of an interface.

## interfaces

* Follow the same rules as Classes.
* Should not have `I` or `Interface` in the name or any other way of identifying it as an interface.

## Methods, functions, property names and local variables

* Example: `bootstrap`, `someMethod`
* Should be Camel case.
* Do not use "\_" as a prefix for private properties.
* Use whole words in names when possible.

## Constants

* Example: `CORE_DIRECTIVES`
* Should be all uppercase with SNAKE_CASE.

## Enums

* Example: `Point`, `Direction`
* Follow the same rules as Classes
* Use Pascal case for enum values.

## Components

1. 1 file per logical component (e.g. parser, scanner, emitter, checker).
2. Do not add new files. :)
3. files with ".generated.\*" suffix are auto-generated, do not hand-edit them.

## Types

1. Do not export types/functions unless you need to share it across multiple components.
2. Do not introduce new types/values to the global namespace.
3. Shared types should be defined in 'types.ts'.
4. Within a file, type definitions should come first.

## Barrels

A barrel is a module whose purpose in life is to aggregate other modules and export them.
 Why? Because this reduces the number of import statements you need to use the modules.

## null and undefined

1. Use **undefined**, do not use null.

## General Assumptions

1. Consider objects like Nodes, Symbols, etc. as immutable outside the component that created them. Do not change them.
2. Consider arrays as immutable by default after creation.

## Flags

1. More than 2 related Boolean properties on a type should be turned into a flag.

## Comments

1. Use [JSDoc](http://usejsdoc.org/) style comments for functions, interfaces, enums, and classes.

## Strings

1. Use single quotes for strings.
2. All strings visible to the user need to be localized.

## General Constructs

For a variety of reasons, we avoid certain constructs, and use some of our own. Among them:

1. Do not use ECMAScript 5 functions; instead use those found in [core.ts](https://github.com/Microsoft/TypeScript/blob/master/src/compiler/core.ts).
2. Do not use `for..in` statements; instead, use `ts.forEach`, `ts.forEachKey` and `ts.forEachValue`. Be aware of their slightly different semantics.
3. Try to use `ts.forEach`, `ts.map`, and `ts.filter` instead of loops when it is not strongly inconvenient.

## Style

1. Use arrow functions over anonymous function expressions.
2. Only surround arrow function parameters when necessary.
 For example, `(x) => x + x` is wrong but the following are correct:
    - `x => x + x`
    - `(x,y) => x + y`
    - `<T>(x: T, y: T) => x === y`
3. Always surround loop and conditional bodies with curly braces.
4. Open curly braces always go on the same line as whatever necessitates them.
5. Parenthesized constructs should have no surrounding whitespace.
 A single space follows commas, colons, and semicolons in those constructs. For example:
    - `for (var i = 0, n = str.length; i < 10; i++) { }`
    - `if (x < 10) { }`
    - `function f(x: number, y: string): void { }`
6. Use a single declaration per variable statement
(i.e. use `var x = 1; var y = 2;` over `var x = 1, y = 2;`).
7. Use 4 spaces per indentation.

### Single quotemark

Requires single quotes for string literals.

For example:

```
// Bad practice
import { Component } from "@angular/core";

// Good practice
import { Component } from '@angular/core';
```

### No inferrable type

Disallows explicit type declarations for variables or parameters initialized to a number,
string, or boolean.

For example:

```
// Bad practice
const not_performed: string = 'incident.not_performed';

// Good practice
const not_performed = 'incident.not_performed';
```

### Comment format

Enforces formatting rules for single-line comments.

For example:

```
// Bad practice
//This is a comment

// Good practice
// This is a comment
```

### Semicolon

Enforces consistent semicolon usage at the end of every statement.

For example:

```
// Bad practice
let myVar

// Good practice
let myVar;
```

### Triple equals

Requires === and !== in place of == and !=.

[This](https://dorey.github.io/JavaScript-Equality-Table/) website may be helpful.

For example:

```
// Bad practice
if (codeReturn == 1)

// Good practice
if (codeReturn === 1)
```

### Curly

```
// Bad practice
if (foo === bar)
    foo++;
    bar++;

// Good practice
if (foo === bar) {
    foo++;
    bar++;
}
```

In the code above, the author almost certainly meant for both foo++ and bar++ to be
executed only if foo === bar. However, he forgot braces and bar++ will be executed no matter what.
This rule could prevent such a mistake.

### Whitespace

Enforces whitespace style conventions.

For example:

```
// Bad practice
}else {
} else{
}else{

// Good practice
} else {
```

```
// Bad practice
}catch(e) {
} catch (e){
}catch (e){

// Good practice
} catch (e) {
```

```
// Bad practice
} else if() {
}else if () {
} else if (){

// Good practice
} else if () {
```
