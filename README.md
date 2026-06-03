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

# Day 4 - Advanced TypeScript

## Overview

Today I explored advanced TypeScript concepts that are commonly used in modern React, Node.js, and full-stack applications.

## Topics Covered

### 1. Enums

Enums allow us to define a set of named constants.

```ts
enum Status {
    Approved = 1,
    Pending,
    Rejected
}
```

### 2. Readonly Properties

Readonly properties cannot be modified after an object is created.

```ts
type Employee = {
    readonly id: number;
    name: string;
    role: string;
};
```

### 3. Record Utility Type

The `Record` utility type helps create typed key-value objects.

```ts
const roles: Record<string, number> = {
    admin: 1,
    user: 2,
    manager: 3
};
```

### 4. Optional Chaining

Optional chaining prevents runtime errors when accessing properties that may be undefined or null.

```ts
console.log(customer?.birthday);
```

### 5. Generic Constraints

Generic constraints ensure a generic type satisfies specific requirements.

```ts
function printItem<T extends { length: number }>(
    item: T
): void {
    console.log(item.length);
}
```

### 6. keyof Operator

The `keyof` operator creates a union of an object's property names.

```ts
function getProperty<T, K extends keyof T>(
    obj: T,
    key: K
) {
    return obj[key];
}
```

## Exercises Completed

- Created and used enums
- Implemented readonly properties
- Used Record for role management
- Applied optional chaining
- Built generic functions with constraints
- Used keyof for type-safe property access

## Key Takeaways

- Generics become much more powerful when combined with constraints.
- `keyof` enables type-safe property access.
- `Record` is useful for mapping values.
- Optional chaining prevents unnecessary null checks.
- Readonly properties help protect data from accidental modification.

## Technologies

- TypeScript
- Node.js
- ts-node

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
```bash
npx ts-node day4.ts
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
