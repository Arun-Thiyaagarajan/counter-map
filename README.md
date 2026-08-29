# CounterMap

A lightweight, generic frequency counter built on top of JavaScript's native `Map`.

`CounterMap` makes it easy to count values, increment and decrement counts, find minimum and maximum frequencies, and manage frequency-based data without repeatedly writing `Map` boilerplate.

## Installation

```bash
npm install counter-map
```

## Usage

```ts
import { CounterMap } from "counter-map";

const counter = new CounterMap<string>();

counter.add("A");
counter.add("A");
counter.add("B");
counter.add("C");
counter.add("C");
counter.add("C");

console.log(counter.get("A"));
// 2

console.log(counter.get("B"));
// 1

console.log(counter.get("C"));
// 3

console.log(counter.maxCount());
// 3

console.log(counter.maxValue());
// "C"

console.log(counter.minCount());
// 1

console.log(counter.minValue());
// "B"
```

## Why CounterMap?

Using a regular `Map` for counting often requires repetitive code:

```ts
const count = new Map<string, number>();

count.set("A", (count.get("A") ?? 0) + 1);
count.set("A", (count.get("A") ?? 0) + 1);
count.set("B", (count.get("B") ?? 0) + 1);
```

With `CounterMap`:

```ts
const count = new CounterMap<string>();

count.add("A");
count.add("A");
count.add("B");
```

It is particularly useful for:

* Frequency counting
* Sliding-window algorithms
* Character counting
* Histograms
* Grouping and frequency analysis
* Algorithmic problems
* General-purpose counting utilities

## API

### `add(value)`

Increments the count of a value by `1`.

Returns the new count.

```ts
const counter = new CounterMap<string>();

counter.add("A");
// 1

counter.add("A");
// 2
```

### `remove(value)`

Decrements the count of a value by `1`.

If the count reaches `0`, the value is removed from the map.

Returns the new count.

```ts
counter.add("A");
counter.add("A");

counter.remove("A");
// 1

counter.remove("A");
// 0

counter.has("A");
// false
```

Removing a value that doesn't exist is safe:

```ts
counter.remove("X");
// 0
```

### `get(value)`

Returns the current count of a value.

Returns `0` if the value doesn't exist.

```ts
counter.get("A");
// 2

counter.get("X");
// 0
```

### `has(value)`

Checks whether a value currently exists in the counter.

```ts
counter.has("A");
// true

counter.has("X");
// false
```

### `delete(value)`

Removes a value completely from the counter.

Returns `true` if the value existed and was deleted.

```ts
counter.delete("A");
// true

counter.delete("X");
// false
```

### `clear()`

Removes all values from the counter.

```ts
counter.clear();

counter.size;
// 0
```

### `maxCount()`

Returns the highest count currently stored in the counter.

```ts
// A → 2
// B → 1
// C → 3

counter.maxCount();
// 3
```

Returns `0` when the counter is empty.

### `maxValue()`

Returns a value with the highest count.

```ts
// A → 2
// B → 1
// C → 3

counter.maxValue();
// "C"
```

Returns `undefined` when the counter is empty.

If multiple values have the same maximum count, the first value encountered in the `Map` is returned.

### `minCount()`

Returns the lowest count currently stored in the counter.

```ts
// A → 2
// B → 1
// C → 3

counter.minCount();
// 1
```

Returns `0` when the counter is empty.

### `minValue()`

Returns a value with the lowest count.

```ts
// A → 2
// B → 1
// C → 3

counter.minValue();
// "B"
```

Returns `undefined` when the counter is empty.

If multiple values have the same minimum count, the first value encountered in the `Map` is returned.

### `size`

Returns the number of unique values currently being tracked.

```ts
const counter = new CounterMap<string>();

counter.add("A");
counter.add("A");
counter.add("B");

counter.size;
// 2
```

`size` represents the number of **unique values**, not the total number of occurrences.

## Generics

`CounterMap` is generic and can count any value supported by JavaScript's `Map`.

### Strings

```ts
const counter = new CounterMap<string>();

counter.add("apple");
counter.add("apple");
counter.add("orange");
```

### Numbers

```ts
const counter = new CounterMap<number>();

counter.add(10);
counter.add(10);
counter.add(20);
```

### Objects

```ts
type User = {
    id: number;
};

const user1 = { id: 1 };
const user2 = { id: 2 };

const counter = new CounterMap<User>();

counter.add(user1);
counter.add(user1);
counter.add(user2);
```

Like JavaScript's `Map`, objects are compared by reference.

## Example: Character Frequency

```ts
const counter = new CounterMap<string>();

const text = "hello world";

for (const char of text) {
    counter.add(char);
}

console.log(counter.get("l"));
// 3

console.log(counter.maxCount());
// 3

console.log(counter.maxValue());
// "l"
```

## Example: Sliding Window

`CounterMap` is useful for sliding-window algorithms where values are continuously added and removed.

```ts
const counter = new CounterMap<string>();

counter.add("A");
counter.add("A");
counter.add("B");

console.log(counter.maxCount());
// 2

counter.remove("A");

console.log(counter.get("A"));
// 1
```

## Complexity

| Operation    | Complexity |
| ------------ | ---------: |
| `add()`      |       O(1) |
| `remove()`   |       O(1) |
| `get()`      |       O(1) |
| `has()`      |       O(1) |
| `delete()`   |       O(1) |
| `clear()`    |       O(n) |
| `maxCount()` |       O(n) |
| `maxValue()` |       O(n) |
| `minCount()` |       O(n) |
| `minValue()` |       O(n) |

Where `n` is the number of unique values.

## TypeScript

`CounterMap` is written in TypeScript and includes TypeScript type declarations.

```ts
import { CounterMap } from "counter-map";

const counter = new CounterMap<string>();
```

TypeScript will provide type checking and autocomplete for the API.

## Design

`CounterMap` is intentionally built on top of JavaScript's native `Map`.

It does not add external runtime dependencies and aims to provide a small, predictable API for frequency-based operations.

## License

MIT
