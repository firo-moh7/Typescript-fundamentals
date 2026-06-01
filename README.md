# TypeScript Fundamentals

This repository contains my TypeScript learning exercises as part of my full-stack development roadmap.

## Topics Covered

### Day 1

* Basic Types

  * string
  * number
  * boolean
* Interfaces
* Optional Properties
* Typed Functions
* Arrays of Objects
* forEach Iteration

### Day 2

* Union Types
* Type Aliases
* Literal Types
* Type Narrowing
* Generics

## Projects

### Study Group Example

Implemented a `GroupMatcher` interface and created typed study group objects.

### User Management Example

Created a `User` interface and displayed multiple users from a typed array.

### Employee Management Example

Created an `Employee` interface with role restrictions using literal types.

Implemented:

* Employee listing
* Generic `getFirst<T>()` function
* Type-safe role management

## Technologies

* TypeScript
* Node.js
* ts-node

## How to Run

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npx ts-node day1.ts
```

## Key Concepts Learned

### Interfaces

```ts
interface User {
  id: number;
  username: string;
}
```

### Union Types

```ts
type ID = string | number;
```

### Literal Types

```ts
type Role = "admin" | "user" | "manager";
```

### Generics

```ts
function getFirst<T>(items: T[]): T {
  return items[0];
}
```

## Learning Outcome

After completing these exercises, I can:

* Create custom interfaces
* Work with typed arrays
* Use union and literal types
* Apply type narrowing
* Create reusable generic functions
* Build type-safe TypeScript applications
