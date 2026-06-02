# TypeScript Fundamentals

This repository contains my TypeScript learning exercises as part of my journey toward becoming a full-stack developer.

## Progress

### Day 1 - TypeScript Fundamentals

Topics covered:

* Basic Types

  * string
  * number
  * boolean
* Interfaces
* Optional Properties
* Typed Functions
* Arrays of Objects
* forEach Iteration

Projects:

* Study Group Manager
* User Management System

---

### Day 2 - Intermediate TypeScript

Topics covered:

* Union Types
* Type Aliases
* Literal Types
* Type Narrowing
* Generics

Projects:

* Employee Management System
* Generic Utility Functions

Key Concepts:

```ts
type Role = "admin" | "user" | "manager";

function getFirst<T>(items: T[]): T {
    return items[0];
}
```

---

### Day 3 - Advanced TypeScript Types

Topics covered:

* Partial<T>
* Pick<T>
* Omit<T>
* Type Assertions
* Generic Interfaces

Projects:

* Product Management System
* Generic API Response Models

Key Concepts:

#### Partial

```ts
type ProductUpdate = Partial<Product>;
```

Used when updating only some fields of an object.

#### Pick

```ts
type ProductPreview = Pick<Product, "name" | "price">;
```

Used when selecting specific properties from a type.

#### Omit

```ts
type ProductWithoutCategory = Omit<Product, "category">;
```

Used when excluding specific properties from a type.

#### Type Assertions

```ts
const data: unknown = "typescript";
const text = data as string;
```

Used when TypeScript needs additional type information.

#### Generic Interfaces

```ts
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
```

Used to create reusable and type-safe API response structures.

---

## Technologies

* TypeScript
* Node.js
* ts-node
* Git
* GitHub

## How to Run

Install dependencies:

```bash
npm install
```

Run a TypeScript file:

```bash
npx ts-node day1.ts
```

Example:

```bash
npx ts-node day3.ts
```

## Learning Outcomes

After completing Days 1–3, I can:

* Create and use interfaces
* Work with arrays of typed objects
* Use union and literal types
* Apply type narrowing
* Create reusable generic functions
* Use utility types such as Partial, Pick, and Omit
* Build generic API response structures
* Write safer and more maintainable TypeScript code

## Next Steps

* Advanced TypeScript Patterns
* Async TypeScript
* React with TypeScript
* Next.js with TypeScript
* Full-Stack Application Development
