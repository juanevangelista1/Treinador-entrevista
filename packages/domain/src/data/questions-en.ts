import type { Question } from '../session/types'

export const questionsEn: Question[] = [
  // ─── JavaScript ───────────────────────────────────────────────────────────
  {
    id: 'en-js-001',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    language: 'en',
    text: 'What is the difference between `var`, `let`, and `const` in JavaScript?',
    options: [
      { id: 'a', text: '`var` is block-scoped; `let` and `const` are function-scoped', isCorrect: false },
      { id: 'b', text: '`var` is function-scoped and hoisted; `let` and `const` are block-scoped', isCorrect: true },
      { id: 'c', text: 'There is no difference — they are interchangeable', isCorrect: false },
      { id: 'd', text: '`const` can be reassigned, `let` cannot', isCorrect: false },
    ],
    hints: ['Think about where each variable is accessible', 'Hoisting moves declarations to the top of their scope'],
    explanation: '`var` is function-scoped and hoisted with value `undefined`. `let` and `const` are block-scoped with a Temporal Dead Zone (TDZ). `const` prevents reassignment but does not make the value immutable.',
    tags: ['scope', 'hoisting', 'variables'],
  },
  {
    id: 'en-js-002',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What does the following code output?\n\n```js\nconsole.log(typeof null);\n```',
    options: [
      { id: 'a', text: '"null"', isCorrect: false },
      { id: 'b', text: '"undefined"', isCorrect: false },
      { id: 'c', text: '"object"', isCorrect: true },
      { id: 'd', text: '"symbol"', isCorrect: false },
    ],
    hints: ['This is a well-known JavaScript quirk', 'Check the ECMAScript spec for the type tag of null'],
    explanation: '`typeof null === "object"` is a historical bug in JavaScript that was never fixed for backwards compatibility. In the original implementation, values were stored as a type tag + value, and the type tag for objects was 0 — null was represented as a null pointer (0x00), so its type tag was also 0.',
    tags: ['typeof', 'null', 'quirks'],
  },
  {
    id: 'en-js-003',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'Which of the following best describes a closure in JavaScript?',
    options: [
      { id: 'a', text: 'A function that is immediately invoked after definition', isCorrect: false },
      { id: 'b', text: 'A function that remembers variables from its outer lexical scope even after that scope has returned', isCorrect: true },
      { id: 'c', text: 'A function that has no access to global variables', isCorrect: false },
      { id: 'd', text: 'A design pattern for object-oriented programming', isCorrect: false },
    ],
    hints: ['Think about inner functions and their access to outer variables', 'Consider what happens when the outer function has already returned'],
    explanation: 'A closure is the combination of a function and the lexical environment in which it was declared. It allows a function to retain access to variables from an outer scope even after that outer function has finished executing. Closures are fundamental to patterns like module design, memoization, and callbacks.',
    tags: ['closures', 'scope', 'functions'],
  },
  {
    id: 'en-js-004',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What is the output of the following code?\n\n```js\nconsole.log(1 + "2" + 3);\n```',
    options: [
      { id: 'a', text: '6', isCorrect: false },
      { id: 'b', text: '"123"', isCorrect: true },
      { id: 'c', text: '"15"', isCorrect: false },
      { id: 'd', text: 'NaN', isCorrect: false },
    ],
    hints: ['JavaScript evaluates left to right', 'Adding a number to a string triggers string coercion'],
    explanation: '`1 + "2"` evaluates first: since `"2"` is a string, `1` is coerced to `"1"`, producing `"12"`. Then `"12" + 3` coerces `3` to `"3"`, giving `"123"`. This is why consistent type handling is important in JavaScript.',
    tags: ['type-coercion', 'operators', 'strings'],
  },
  {
    id: 'en-js-005',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What is the Event Loop in JavaScript and what problem does it solve?',
    options: [
      { id: 'a', text: 'A browser feature that handles mouse and keyboard events', isCorrect: false },
      { id: 'b', text: 'A mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded, by offloading tasks to the browser/Node.js APIs', isCorrect: true },
      { id: 'c', text: 'A loop that iterates over DOM elements and fires event listeners', isCorrect: false },
      { id: 'd', text: 'A garbage collector that runs in a separate thread', isCorrect: false },
    ],
    hints: ['JavaScript is single-threaded', 'Think about how async operations like setTimeout work without blocking the UI'],
    explanation: 'JavaScript is single-threaded, meaning it can only execute one piece of code at a time. The Event Loop continuously checks the Call Stack and, if it\'s empty, pushes tasks from the Task Queue (macrotasks) or Microtask Queue (Promises) into the stack. This enables non-blocking I/O and async patterns without actual parallelism.',
    tags: ['event-loop', 'async', 'concurrency'],
  },
  {
    id: 'en-js-006',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'Which of the following is a key difference between Promises and async/await in JavaScript?',
    options: [
      { id: 'a', text: 'async/await is synchronous; Promises are asynchronous', isCorrect: false },
      { id: 'b', text: 'async/await is syntactic sugar over Promises, making asynchronous code look synchronous and improving readability', isCorrect: true },
      { id: 'c', text: 'Promises can be cancelled; async/await cannot', isCorrect: false },
      { id: 'd', text: 'async/await only works in Node.js, not in browsers', isCorrect: false },
    ],
    hints: ['Both handle asynchronous operations', 'One is built on top of the other'],
    explanation: '`async/await` is syntactic sugar over Promises — an `async` function always returns a Promise, and `await` pauses execution within the function until the awaited Promise resolves, without blocking the thread. It simplifies chaining and error handling (try/catch vs .catch()), making async code easier to read and maintain.',
    tags: ['promises', 'async-await', 'asynchronous'],
  },
  {
    id: 'en-js-007',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What does `Array.prototype.reduce` do?',
    options: [
      { id: 'a', text: 'Filters elements from an array based on a predicate function', isCorrect: false },
      { id: 'b', text: 'Transforms each element of an array into a new value', isCorrect: false },
      { id: 'c', text: 'Accumulates array values into a single output by applying a reducer function', isCorrect: true },
      { id: 'd', text: 'Sorts an array in ascending order', isCorrect: false },
    ],
    hints: ['The second argument is the initial accumulator value', 'Think of summing up an array of numbers'],
    explanation: '`reduce(callback, initialValue)` iterates over an array applying `callback(accumulator, currentValue)` at each step. The return value of each call becomes the next accumulator. The final accumulator is the result. It can implement map, filter, groupBy, and virtually any array transformation.',
    tags: ['array-methods', 'functional', 'reduce'],
  },
  {
    id: 'en-js-008',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: 'What is the difference between microtasks and macrotasks in the JavaScript Event Loop?',
    options: [
      { id: 'a', text: 'Microtasks run in a separate thread; macrotasks run in the main thread', isCorrect: false },
      { id: 'b', text: 'Microtasks (Promises, queueMicrotask) are processed before macrotasks (setTimeout, setInterval) at the end of each task', isCorrect: true },
      { id: 'c', text: 'Macrotasks have higher priority than microtasks', isCorrect: false },
      { id: 'd', text: 'There is no practical difference between them', isCorrect: false },
    ],
    hints: ['Promise .then() callbacks are microtasks', 'Microtasks drain completely before the next macrotask runs'],
    explanation: 'After each macrotask (e.g., a setTimeout callback), the JS engine processes ALL pending microtasks (Promise callbacks, queueMicrotask) before moving to the next macrotask. This means microtasks can starve the event loop if they continuously enqueue new microtasks. Understanding this ordering is critical for debugging async behavior.',
    tags: ['event-loop', 'microtasks', 'promises', 'advanced'],
  },
  {
    id: 'en-js-009',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What is prototype-based inheritance in JavaScript?',
    options: [
      { id: 'a', text: 'A way to copy all methods from one class to another at compile time', isCorrect: false },
      { id: 'b', text: 'A mechanism where objects inherit properties and methods directly from other objects via the prototype chain', isCorrect: true },
      { id: 'c', text: 'A pattern exclusive to TypeScript that JavaScript does not support natively', isCorrect: false },
      { id: 'd', text: 'A way to prevent object mutation', isCorrect: false },
    ],
    hints: ['Every JS object has an internal [[Prototype]] link', 'Property lookup traverses the chain until null is reached'],
    explanation: 'In JavaScript, each object has an internal `[[Prototype]]` (accessible via `Object.getPrototypeOf()` or `__proto__`). When a property is not found on the object itself, the engine walks up the prototype chain. ES6 `class` syntax is syntactic sugar over this prototype mechanism — classes don\'t create classical inheritance; they still use prototypes under the hood.',
    tags: ['prototypes', 'inheritance', 'oop'],
  },
  {
    id: 'en-js-010',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What is the value of `this` inside a regular function vs. an arrow function?',
    options: [
      { id: 'a', text: 'They always have the same `this` — both refer to the global object', isCorrect: false },
      { id: 'b', text: 'Regular functions have their own `this` (determined at call time); arrow functions inherit `this` from the enclosing lexical scope', isCorrect: true },
      { id: 'c', text: 'Arrow functions always have `this === undefined`', isCorrect: false },
      { id: 'd', text: 'Regular functions cannot use `this`', isCorrect: false },
    ],
    hints: ['Arrow functions do not have their own execution context', 'A regular function\'s `this` depends on how it is called'],
    explanation: 'Regular functions define their own `this` binding based on the call site (method call, `call/apply/bind`, `new`, or global). Arrow functions do NOT have their own `this` — they capture `this` from their enclosing lexical context at definition time. This makes arrow functions ideal for callbacks where you want to preserve the outer `this`.',
    tags: ['this', 'arrow-functions', 'context'],
  },

  // ─── TypeScript ───────────────────────────────────────────────────────────
  {
    id: 'en-ts-001',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What is the main difference between `type` and `interface` in TypeScript?',
    options: [
      { id: 'a', text: '`interface` supports all features; `type` is limited to primitives', isCorrect: false },
      { id: 'b', text: '`interface` can be reopened (declaration merging); `type` cannot. `type` supports unions and mapped types more naturally', isCorrect: true },
      { id: 'c', text: '`type` is faster at compile time than `interface`', isCorrect: false },
      { id: 'd', text: 'They are identical and can always be used interchangeably', isCorrect: false },
    ],
    hints: ['Try declaring two interfaces with the same name', 'Union types (`A | B`) only work with `type`'],
    explanation: 'Both can describe object shapes, but `interface` supports declaration merging (declaring the same name twice merges the definitions) while `type` does not. `type` is more flexible for unions, intersections, and mapped types. For public library APIs, `interface` is preferred because consumers can extend it. For internal code, either works — consistency matters most.',
    tags: ['types', 'interfaces', 'typescript-basics'],
  },
  {
    id: 'en-ts-002',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What does a generic type parameter do in TypeScript?',
    options: [
      { id: 'a', text: 'It makes a function accept only `any` type', isCorrect: false },
      { id: 'b', text: 'It allows creating reusable components that work with multiple types while preserving type safety', isCorrect: true },
      { id: 'c', text: 'It disables type checking for the annotated function', isCorrect: false },
      { id: 'd', text: 'It is equivalent to `any` — it accepts any value', isCorrect: false },
    ],
    hints: ['`Array<T>` is a famous generic — what does T represent?', 'Generics let you write functions without specifying the concrete type in advance'],
    explanation: 'Generics are TypeScript\'s way of writing reusable, type-safe code. `function identity<T>(value: T): T` uses `T` as a placeholder resolved at call time. Unlike `any`, generics preserve the relationship between input and output types — the compiler still catches mismatches.',
    tags: ['generics', 'type-safety', 'reusability'],
  },
  {
    id: 'en-ts-003',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What is type narrowing in TypeScript?',
    options: [
      { id: 'a', text: 'Removing properties from a type to make it smaller', isCorrect: false },
      { id: 'b', text: 'The process by which TypeScript refines a broad type to a more specific one based on control flow (e.g., `typeof`, `instanceof`, custom type guards)', isCorrect: true },
      { id: 'c', text: 'Converting a type from `any` to `unknown`', isCorrect: false },
      { id: 'd', text: 'A compile-time optimization that removes unused types', isCorrect: false },
    ],
    hints: ['What does TypeScript know after `if (typeof x === "string")`?', 'Type guards narrow the type inside an `if` block'],
    explanation: 'Type narrowing lets TypeScript use control-flow analysis to reduce a union type to a specific branch. Techniques include: `typeof` checks, `instanceof`, truthiness checks, `in` operator, discriminated unions, and user-defined type guard functions (`is` predicates). Inside each branch, TypeScript knows the exact type, enabling full intellisense and catch-all safety.',
    tags: ['type-narrowing', 'type-guards', 'control-flow'],
  },
  {
    id: 'en-ts-004',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'Which utility type makes all properties of a type optional?',
    options: [
      { id: 'a', text: '`Required<T>`', isCorrect: false },
      { id: 'b', text: '`Readonly<T>`', isCorrect: false },
      { id: 'c', text: '`Partial<T>`', isCorrect: true },
      { id: 'd', text: '`Optional<T>`', isCorrect: false },
    ],
    hints: ['Think about the word that means "not required"', 'It is the opposite of `Required<T>`'],
    explanation: '`Partial<T>` constructs a type with all properties of `T` set to optional (`?`). Useful for update/patch functions where you only want to pass the fields that changed. Common utility types also include `Required<T>` (removes optional), `Readonly<T>` (prevents mutation), `Pick<T, K>` (select fields), `Omit<T, K>` (exclude fields), and `Record<K, V>` (key-value map).',
    tags: ['utility-types', 'partial', 'typescript'],
  },
  {
    id: 'en-ts-005',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: 'What is the difference between `unknown` and `any` in TypeScript?',
    options: [
      { id: 'a', text: 'They are identical — both disable type checking', isCorrect: false },
      { id: 'b', text: '`unknown` is the type-safe counterpart of `any`: you can assign anything to it, but you must narrow the type before using it', isCorrect: true },
      { id: 'c', text: '`unknown` only works for primitive types', isCorrect: false },
      { id: 'd', text: '`any` is stricter than `unknown`', isCorrect: false },
    ],
    hints: ['Can you call a method on an `unknown` variable without narrowing?', 'With `any`, TypeScript turns off all checks'],
    explanation: 'With `any`, TypeScript trusts you completely — you can call any method, access any property, and no checks are performed. With `unknown`, TypeScript requires you to narrow the type first (via `typeof`, `instanceof`, type assertion, etc.) before operating on the value. `unknown` is safer because it forces you to handle the uncertainty explicitly, while `any` is an escape hatch that can hide bugs.',
    tags: ['unknown', 'any', 'type-safety'],
  },
  {
    id: 'en-ts-006',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior', 'senior'],
    language: 'en',
    text: 'What is a discriminated union in TypeScript?',
    options: [
      { id: 'a', text: 'A union type where all members share a common literal property used to distinguish between them', isCorrect: true },
      { id: 'b', text: 'A union of types where one type is excluded from the result', isCorrect: false },
      { id: 'c', text: 'A union that only accepts primitive types', isCorrect: false },
      { id: 'd', text: 'A way to merge multiple interfaces into one', isCorrect: false },
    ],
    hints: ['Think about a `type` property on a shape like `{ type: "circle" | "square" }`', 'TypeScript uses the shared field to narrow types in switch/if statements'],
    explanation: 'A discriminated union (also called tagged union) has members that share a literal property (the discriminant). Example: `type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number }`. After a `switch (shape.kind)` or `if (shape.kind === "circle")`, TypeScript narrows `shape` to the correct member, giving you full type safety in each branch without casts.',
    tags: ['discriminated-union', 'union-types', 'pattern-matching'],
  },
  {
    id: 'en-ts-007',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: 'What does `infer` do in a TypeScript conditional type?',
    options: [
      { id: 'a', text: 'It makes TypeScript skip type checking for that expression', isCorrect: false },
      { id: 'b', text: 'It allows TypeScript to extract and capture a type within a conditional type expression', isCorrect: true },
      { id: 'c', text: 'It converts runtime values into types', isCorrect: false },
      { id: 'd', text: 'It forces TypeScript to widen a type to `any`', isCorrect: false },
    ],
    hints: ['Used in the form `T extends SomeType<infer U> ? U : never`', 'Think about extracting the return type of a function'],
    explanation: '`infer` is used inside conditional types to introduce a type variable that TypeScript will infer from the matched type. Example: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never` — here `R` captures the function\'s return type. This enables powerful type-level programming, extracting parts of complex types generically.',
    tags: ['infer', 'conditional-types', 'advanced-typescript'],
  },
  {
    id: 'en-ts-008',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What is the purpose of the `readonly` modifier in TypeScript?',
    options: [
      { id: 'a', text: 'It makes the value immutable at runtime', isCorrect: false },
      { id: 'b', text: 'It prevents reassignment at compile time, but does not enforce deep immutability at runtime', isCorrect: true },
      { id: 'c', text: 'It is identical to `const`', isCorrect: false },
      { id: 'd', text: 'It prevents the property from being serialized to JSON', isCorrect: false },
    ],
    hints: ['Does `readonly` on an array prevent pushing to it?', 'It\'s a compile-time check, not a runtime freeze'],
    explanation: '`readonly` is a compile-time constraint — TypeScript will error if you try to reassign a readonly property. However, it does not call `Object.freeze()` or provide deep immutability. You can still mutate nested properties unless they are also `readonly`. For deep immutability, you\'d need `as const`, `Object.freeze()`, or a library like `immer`.',
    tags: ['readonly', 'immutability', 'compile-time'],
  },

  // ─── React ────────────────────────────────────────────────────────────────
  {
    id: 'en-react-001',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior'],
    language: 'en',
    text: 'What is the Virtual DOM in React and why does it exist?',
    options: [
      { id: 'a', text: 'A server-side copy of the DOM used for SEO', isCorrect: false },
      { id: 'b', text: 'A lightweight in-memory representation of the real DOM that React uses to compute minimal updates before touching the actual DOM', isCorrect: true },
      { id: 'c', text: 'A browser API that React uses to avoid repaints', isCorrect: false },
      { id: 'd', text: 'A debugging tool included in React DevTools', isCorrect: false },
    ],
    hints: ['Direct DOM manipulation is expensive', 'React computes a diff before applying changes'],
    explanation: 'Manipulating the real DOM is expensive. React keeps a Virtual DOM (a plain JS object tree). When state changes, React renders a new VDOM tree and diffs it against the previous one (reconciliation). Only the minimal set of real DOM operations needed to sync the two trees is applied. This batching and diffing strategy is what makes React performant for frequent UI updates.',
    tags: ['virtual-dom', 'reconciliation', 'performance'],
  },
  {
    id: 'en-react-002',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'Which of the following is a rule of React Hooks?',
    options: [
      { id: 'a', text: 'Hooks can only be called inside class components', isCorrect: false },
      { id: 'b', text: 'Hooks must be called at the top level of a function component or custom hook, not inside loops, conditions, or nested functions', isCorrect: true },
      { id: 'c', text: 'You can call hooks inside event handlers', isCorrect: false },
      { id: 'd', text: 'Hooks cannot be imported from external packages', isCorrect: false },
    ],
    hints: ['React relies on call order to associate state with the right hook', 'What happens to call order inside an `if` statement?'],
    explanation: 'React tracks hooks by their call order on each render. If you call hooks conditionally, the order can change between renders, breaking the internal state mapping. This is why the two rules of hooks are: (1) Only call hooks at the top level, (2) Only call hooks from React function components or custom hooks. The `eslint-plugin-react-hooks` enforces these rules.',
    tags: ['hooks', 'rules-of-hooks', 'react-basics'],
  },
  {
    id: 'en-react-003',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What does the dependency array in `useEffect` control?',
    options: [
      { id: 'a', text: 'It defines props that the component receives', isCorrect: false },
      { id: 'b', text: 'It controls when the effect re-runs: the effect runs only when one of the listed values has changed since the last render', isCorrect: true },
      { id: 'c', text: 'It lists all state variables the component uses', isCorrect: false },
      { id: 'd', text: 'It prevents the component from re-rendering', isCorrect: false },
    ],
    hints: ['Empty array `[]` means "run once on mount"', 'Omitting the array means "run on every render"'],
    explanation: 'The dependency array tells React when to re-run the effect. With `[]`: runs once after mount and cleanup on unmount. With `[a, b]`: re-runs whenever `a` or `b` changes (using `Object.is` comparison). With no array: runs after every render. Missing dependencies cause stale closures; over-specifying causes unnecessary re-runs — the `exhaustive-deps` eslint rule helps.',
    tags: ['useEffect', 'dependency-array', 'hooks'],
  },
  {
    id: 'en-react-004',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What is the difference between `useMemo` and `useCallback` in React?',
    options: [
      { id: 'a', text: 'They are identical — use either one', isCorrect: false },
      { id: 'b', text: '`useMemo` memoizes the result of a computation; `useCallback` memoizes a function reference itself', isCorrect: true },
      { id: 'c', text: '`useCallback` runs on every render; `useMemo` only runs once', isCorrect: false },
      { id: 'd', text: '`useMemo` is for async operations; `useCallback` is for sync', isCorrect: false },
    ],
    hints: ['`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`', 'Think about when you pass a function as a prop vs. when you use its return value'],
    explanation: '`useMemo(() => expensiveCalculation(a, b), [a, b])` caches the computed *value* and recomputes only when `a` or `b` changes. `useCallback(fn, deps)` caches the *function reference*, preventing a new function object from being created on each render. Both are optimizations for referential equality — use them when passing to memoized children (`React.memo`) or as dependencies of other hooks.',
    tags: ['useMemo', 'useCallback', 'memoization', 'performance'],
  },
  {
    id: 'en-react-005',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What does `React.memo` do?',
    options: [
      { id: 'a', text: 'It caches the result of `useState` between renders', isCorrect: false },
      { id: 'b', text: 'It is a higher-order component that skips re-rendering a component if its props have not changed (shallow comparison)', isCorrect: true },
      { id: 'c', text: 'It prevents the component from ever re-rendering', isCorrect: false },
      { id: 'd', text: 'It memoizes expensive values inside the component', isCorrect: false },
    ],
    hints: ['It is the functional equivalent of `PureComponent` for class components', 'It only does a shallow comparison of props by default'],
    explanation: '`React.memo(Component)` wraps a component and memoizes it — React skips re-rendering if the incoming props are shallowly equal to the previous ones. You can pass a custom comparison function as the second argument for deep or custom logic. Useful for expensive child components that receive stable props but whose parent re-renders frequently. Combine with `useMemo`/`useCallback` to ensure prop stability.',
    tags: ['React.memo', 'memoization', 'performance', 'HOC'],
  },
  {
    id: 'en-react-006',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: 'What is React Fiber and what problem does it solve?',
    options: [
      { id: 'a', text: 'A new syntax for writing React components without JSX', isCorrect: false },
      { id: 'b', text: 'The reconciliation engine introduced in React 16 that enables incremental rendering — breaking rendering work into units that can be paused, aborted, or reprioritized', isCorrect: true },
      { id: 'c', text: 'A library for handling form state in React', isCorrect: false },
      { id: 'd', text: 'React\'s built-in CSS-in-JS solution', isCorrect: false },
    ],
    hints: ['What was the problem with the old stack reconciler?', 'Think about long renders blocking the main thread and dropping frames'],
    explanation: 'The old React stack reconciler was synchronous and recursive — once it started rendering, it couldn\'t be interrupted. This caused jank on complex trees. Fiber reimplements the reconciler as a linked list of work units, each of which can be paused, prioritized, and resumed. This enables Concurrent Mode features like `useTransition`, `Suspense`, time-slicing, and selective hydration — all based on the ability to interrupt and resume rendering work.',
    tags: ['React Fiber', 'reconciliation', 'concurrent-mode', 'performance'],
  },
  {
    id: 'en-react-007',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'When should you use React Context vs. a dedicated state management library like Zustand or Redux?',
    options: [
      { id: 'a', text: 'Context should never be used for state — always use a library', isCorrect: false },
      { id: 'b', text: 'Context is ideal for low-frequency global values (theme, locale, user); dedicated libraries are better for high-frequency updates or complex derived state', isCorrect: true },
      { id: 'c', text: 'Libraries like Redux should only be used in apps with more than 100 components', isCorrect: false },
      { id: 'd', text: 'They are equivalent — choose either', isCorrect: false },
    ],
    hints: ['Every Context consumer re-renders when the value changes', 'What happens to performance when you store form state in Context?'],
    explanation: 'Context re-renders all consumers on every value change — it has no selector mechanism by default. For stable, infrequently-changing values (theme, authenticated user, locale), Context is fine and avoids external dependencies. For high-frequency updates (like form fields, UI state, or real-time data), Zustand/Redux/Jotai/Recoil provide selector-based subscriptions so components only re-render when the specific slice they care about changes.',
    tags: ['context', 'state-management', 'performance', 'zustand'],
  },
  {
    id: 'en-react-008',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What is the purpose of the `key` prop in React lists?',
    options: [
      { id: 'a', text: 'It is a CSS class identifier for list items', isCorrect: false },
      { id: 'b', text: 'It helps React identify which items have changed, been added, or removed during reconciliation, enabling efficient DOM updates', isCorrect: true },
      { id: 'c', text: 'It is required for TypeScript type inference', isCorrect: false },
      { id: 'd', text: 'It enables animations on list items', isCorrect: false },
    ],
    hints: ['What does React do when a list item\'s `key` stays the same vs. changes?', 'Using index as key causes problems when items reorder'],
    explanation: 'React uses `key` to track list items across renders. When the key is stable and unique, React reuses the existing DOM node and only updates changed attributes. When the key changes, React unmounts the old component and mounts a new one. Using array index as key is problematic for dynamic lists (reordering, insertions) because React may incorrectly reuse state. Use a stable unique identifier (like a database ID).',
    tags: ['keys', 'lists', 'reconciliation'],
  },
  {
    id: 'en-react-009',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What does `useReducer` offer over multiple `useState` calls?',
    options: [
      { id: 'a', text: 'It is faster because it skips re-renders', isCorrect: false },
      { id: 'b', text: 'It centralizes complex state transitions in a single reducer function, making state logic predictable and easier to test', isCorrect: true },
      { id: 'c', text: 'It allows state to persist between page navigations', isCorrect: false },
      { id: 'd', text: 'It replaces the need for Context entirely', isCorrect: false },
    ],
    hints: ['Think about state that has multiple sub-values that change together', 'What pattern do Redux and Zustand internally use?'],
    explanation: '`useReducer(reducer, initialState)` is preferable when (1) the next state depends on multiple current values, (2) state has multiple sub-fields that transition together, or (3) the logic is complex enough to benefit from a pure reducer function (easy to unit test). `dispatch({ type: "increment" })` makes state changes explicit and auditable. For simple independent values, `useState` is simpler.',
    tags: ['useReducer', 'state-management', 'patterns'],
  },
  {
    id: 'en-react-010',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: 'What is the difference between Server Components and Client Components in React (React 19 / Next.js App Router)?',
    options: [
      { id: 'a', text: 'Server Components run on the server and cannot use hooks or browser APIs; Client Components run in the browser and can use all React features', isCorrect: true },
      { id: 'b', text: 'Server Components are faster because they use WebAssembly', isCorrect: false },
      { id: 'c', text: 'Client Components are deprecated in favor of Server Components', isCorrect: false },
      { id: 'd', text: 'They are the same as SSR and CSR in older React versions', isCorrect: false },
    ],
    hints: ['The `"use client"` directive marks a Client Component boundary', 'Can a Server Component import a Client Component?'],
    explanation: 'React Server Components (RSC) render exclusively on the server — their output (serialized React tree) is streamed to the client. They can directly access databases/secrets, have zero bundle size impact, but cannot use hooks (`useState`, `useEffect`) or browser APIs. Client Components (marked with `"use client"`) hydrate in the browser and support all React features. The model composes: Server Components can include Client Components but not vice versa (without passing as children/props).',
    tags: ['server-components', 'client-components', 'Next.js', 'RSC'],
  },

  // ─── Next.js ──────────────────────────────────────────────────────────────
  {
    id: 'en-next-001',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What is the difference between SSR (Server-Side Rendering) and SSG (Static Site Generation) in Next.js?',
    options: [
      { id: 'a', text: 'SSR and SSG are identical — both generate HTML on the server', isCorrect: false },
      { id: 'b', text: 'SSR renders HTML on each request at runtime; SSG pre-renders HTML at build time', isCorrect: true },
      { id: 'c', text: 'SSG is only for marketing pages; SSR is for all other pages', isCorrect: false },
      { id: 'd', text: 'SSR requires a database; SSG does not', isCorrect: false },
    ],
    hints: ['When does each approach generate the HTML?', 'Which one can be served from a CDN directly?'],
    explanation: 'SSG (Static Site Generation) generates HTML at build time — pages are pre-built and can be served from a CDN with no per-request server work. Best for content that doesn\'t change per user/request. SSR generates HTML on each request at runtime, allowing dynamic, personalized, or frequently-changing content. In Next.js App Router, the distinction is controlled by cache settings and `dynamic` exports rather than separate functions.',
    tags: ['SSR', 'SSG', 'rendering', 'nextjs'],
  },
  {
    id: 'en-next-002',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'In the Next.js App Router, what is the role of the `layout.tsx` file?',
    options: [
      { id: 'a', text: 'It defines the global CSS styles for the app', isCorrect: false },
      { id: 'b', text: 'It wraps child pages and other layouts, persisting across navigations without unmounting, enabling shared UI like sidebars and headers', isCorrect: true },
      { id: 'c', text: 'It replaces `_app.tsx` from the Pages Router and only renders once', isCorrect: false },
      { id: 'd', text: 'It is a server action that fetches data for child components', isCorrect: false },
    ],
    hints: ['Layouts are nested — a root layout wraps all routes', 'Does a layout re-mount when navigating between sibling routes?'],
    explanation: 'In App Router, every segment can have a `layout.tsx`. Layouts receive `children` and persist across navigations — they do NOT unmount when the user navigates between sibling routes. This enables persistent UI (navigation, sidebars) and avoids re-fetching shared data. Layouts are Server Components by default and can be nested: `app/layout.tsx` → `app/dashboard/layout.tsx` → `app/dashboard/settings/page.tsx`.',
    tags: ['layout', 'App Router', 'nextjs', 'routing'],
  },
  {
    id: 'en-next-003',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What are Server Actions in Next.js?',
    options: [
      { id: 'a', text: 'Functions that run exclusively in a Web Worker for heavy computation', isCorrect: false },
      { id: 'b', text: 'Async functions marked with `"use server"` that run on the server and can be called directly from Client Components or HTML forms', isCorrect: true },
      { id: 'c', text: 'API routes defined in `app/api/` that handle HTTP requests', isCorrect: false },
      { id: 'd', text: 'Middleware that intercepts all requests before rendering', isCorrect: false },
    ],
    hints: ['They are the Next.js way to handle form submissions and mutations', 'You can call them from `<form action={serverAction}>`'],
    explanation: 'Server Actions (`"use server"`) are async functions that execute on the server, callable from both Client and Server Components. They can mutate data, interact with databases, and revalidate cache — without creating a manual API route. They integrate with React\'s transition system for optimistic updates. When used as a form `action`, they work even before JavaScript loads (progressive enhancement).',
    tags: ['server-actions', 'mutations', 'forms', 'nextjs'],
  },
  {
    id: 'en-next-004',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What does the `dynamic` segment `[slug]` in the `app/` directory create?',
    options: [
      { id: 'a', text: 'A catch-all route that matches any number of segments', isCorrect: false },
      { id: 'b', text: 'A dynamic route segment where the value in the URL is passed to the page as a `params` prop', isCorrect: true },
      { id: 'c', text: 'A route that requires authentication', isCorrect: false },
      { id: 'd', text: 'A static page that is pre-rendered for each `slug` value', isCorrect: false },
    ],
    hints: ['`app/blog/[slug]/page.tsx` matches `/blog/hello-world`', 'The value is accessible via `params.slug`'],
    explanation: 'Folder names wrapped in `[brackets]` create dynamic route segments. A page at `app/products/[id]/page.tsx` matches `/products/123`, `/products/abc`, etc. The matched segment value is passed as `params.id` to the page component. For catch-all routes use `[...slug]`, for optional catch-all use `[[...slug]]`. In App Router, `params` is a Promise and must be `await`ed in server components.',
    tags: ['dynamic-routes', 'params', 'App Router', 'routing'],
  },
  {
    id: 'en-next-005',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: 'What is the difference between `revalidatePath` and `revalidateTag` in Next.js?',
    options: [
      { id: 'a', text: '`revalidatePath` clears the cache for a specific URL path; `revalidateTag` clears cache entries associated with a specific cache tag across multiple routes', isCorrect: true },
      { id: 'b', text: '`revalidatePath` runs on the client; `revalidateTag` runs on the server', isCorrect: false },
      { id: 'c', text: 'They are identical — use whichever is more convenient', isCorrect: false },
      { id: 'd', text: '`revalidateTag` only works with React Server Components', isCorrect: false },
    ],
    hints: ['Tags can span multiple pages — useful for "invalidate all pages showing product data"', 'Path is more surgical — useful for a specific URL'],
    explanation: '`revalidatePath("/products/123")` purges the cache for that specific URL. `revalidateTag("products")` purges all cache entries tagged with "products" — you tag fetch calls with `fetch(url, { next: { tags: ["products"] } })` and then bulk-invalidate across all routes. Tags enable fine-grained cache invalidation without knowing all affected paths, which is essential for content-driven sites with shared data.',
    tags: ['caching', 'revalidation', 'ISR', 'nextjs'],
  },

  // ─── Algorithms ───────────────────────────────────────────────────────────
  {
    id: 'en-algo-001',
    domain: 'algorithms',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What is Big O notation and what does O(n²) mean?',
    options: [
      { id: 'a', text: 'Big O describes memory usage; O(n²) means memory grows quadratically', isCorrect: false },
      { id: 'b', text: 'Big O describes the worst-case growth rate of an algorithm\'s time (or space) as input size grows; O(n²) means time grows quadratically with input size', isCorrect: true },
      { id: 'c', text: 'Big O describes the exact number of operations; O(n²) means exactly n² operations', isCorrect: false },
      { id: 'd', text: 'Big O only applies to sorting algorithms', isCorrect: false },
    ],
    hints: ['Big O ignores constants and lower-order terms', 'A nested loop over n elements often produces O(n²)'],
    explanation: 'Big O notation describes how an algorithm\'s time or space requirements scale as input grows. O(n²) means if input doubles, execution time quadruples (grows with the square). Common complexities: O(1) constant, O(log n) binary search, O(n) linear scan, O(n log n) efficient sort, O(n²) nested loops, O(2^n) exponential. Constants are omitted: O(3n) simplifies to O(n) since we care about growth rate, not absolute time.',
    tags: ['big-o', 'complexity', 'algorithms'],
  },
  {
    id: 'en-algo-002',
    domain: 'algorithms',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What is the time complexity of binary search?',
    options: [
      { id: 'a', text: 'O(n)', isCorrect: false },
      { id: 'b', text: 'O(n²)', isCorrect: false },
      { id: 'c', text: 'O(log n)', isCorrect: true },
      { id: 'd', text: 'O(1)', isCorrect: false },
    ],
    hints: ['Each step halves the search space', 'How many times can you halve n before reaching 1?'],
    explanation: 'Binary search repeatedly halves the search space: with 1,000 elements, it takes at most 10 steps (log₂ 1000 ≈ 10). With 1,000,000 elements, only 20 steps. This O(log n) behavior makes binary search extremely efficient on sorted arrays. The prerequisite is that the data must be sorted — searching an unsorted array requires O(n) linear scan.',
    tags: ['binary-search', 'complexity', 'searching'],
  },
  {
    id: 'en-algo-003',
    domain: 'algorithms',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What is the difference between a stack and a queue data structure?',
    options: [
      { id: 'a', text: 'A stack is FIFO (First In, First Out); a queue is LIFO (Last In, First Out)', isCorrect: false },
      { id: 'b', text: 'A stack is LIFO (Last In, First Out); a queue is FIFO (First In, First Out)', isCorrect: true },
      { id: 'c', text: 'Both are FIFO but stack uses arrays and queue uses linked lists', isCorrect: false },
      { id: 'd', text: 'They are identical — the name depends on the implementation language', isCorrect: false },
    ],
    hints: ['Think of a stack of plates vs. a line at a supermarket', 'Push/pop vs. enqueue/dequeue'],
    explanation: 'A stack (LIFO) adds and removes elements from the same end — like a pile of plates, you always pick from the top. Used for: function call stack, undo/redo, DFS, expression parsing. A queue (FIFO) adds to the back and removes from the front — like a line, first to arrive is first to leave. Used for: BFS, task scheduling, message queues, rate limiting.',
    tags: ['stack', 'queue', 'data-structures', 'LIFO', 'FIFO'],
  },
  {
    id: 'en-algo-004',
    domain: 'algorithms',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What is the difference between BFS (Breadth-First Search) and DFS (Depth-First Search)?',
    options: [
      { id: 'a', text: 'BFS uses a stack; DFS uses a queue', isCorrect: false },
      { id: 'b', text: 'BFS explores all neighbors level by level (uses a queue); DFS explores as far as possible down each branch before backtracking (uses a stack/recursion)', isCorrect: true },
      { id: 'c', text: 'BFS is only for trees; DFS is only for graphs', isCorrect: false },
      { id: 'd', text: 'DFS always finds the shortest path; BFS does not', isCorrect: false },
    ],
    hints: ['Which algorithm guarantees finding the shortest path in an unweighted graph?', 'BFS uses a queue; DFS uses a stack'],
    explanation: 'BFS (uses a queue) visits nodes level by level — explores all neighbors before going deeper. It guarantees the shortest path in unweighted graphs and is used for finding nearest nodes. DFS (uses a stack or recursion) dives into one branch as deep as possible before backtracking. DFS is used for cycle detection, topological sort, maze solving, and tree traversals. DFS uses O(h) space (height of tree); BFS uses O(w) space (width of tree).',
    tags: ['BFS', 'DFS', 'graph-traversal', 'algorithms'],
  },
  {
    id: 'en-algo-005',
    domain: 'algorithms',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: 'What is dynamic programming and when should it be applied?',
    options: [
      { id: 'a', text: 'A programming paradigm using dynamic typing and runtime type checking', isCorrect: false },
      { id: 'b', text: 'An optimization technique that solves problems by breaking them into overlapping subproblems, solving each once, and storing results to avoid recomputation', isCorrect: true },
      { id: 'c', text: 'A method of generating code at runtime using metaprogramming', isCorrect: false },
      { id: 'd', text: 'A way to allocate memory dynamically for data structures', isCorrect: false },
    ],
    hints: ['Fibonacci computed recursively without memoization has O(2^n) complexity — with memoization it becomes O(n)', 'Two hallmarks: overlapping subproblems + optimal substructure'],
    explanation: 'Dynamic programming applies when a problem has (1) overlapping subproblems (same subproblems solved repeatedly) and (2) optimal substructure (optimal solution built from optimal sub-solutions). Two approaches: top-down (memoization — recursion + cache) and bottom-up (tabulation — iterative, fill table from base cases). Classic problems: Fibonacci, knapsack, longest common subsequence, coin change, edit distance.',
    tags: ['dynamic-programming', 'memoization', 'optimization', 'algorithms'],
  },
  {
    id: 'en-algo-006',
    domain: 'algorithms',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What is a hash table and what is its average time complexity for lookup?',
    options: [
      { id: 'a', text: 'A sorted array; O(log n) lookup via binary search', isCorrect: false },
      { id: 'b', text: 'A data structure that maps keys to values using a hash function; average O(1) lookup', isCorrect: true },
      { id: 'c', text: 'A tree structure; O(n) lookup in the worst case only', isCorrect: false },
      { id: 'd', text: 'A linked list with key-value pairs; O(n) lookup always', isCorrect: false },
    ],
    hints: ['JavaScript\'s `Object` and `Map` are hash tables under the hood', 'What happens when two keys hash to the same bucket?'],
    explanation: 'A hash table uses a hash function to map keys to array indices (buckets). Average-case: O(1) for insert, delete, and lookup. Worst-case: O(n) when many keys hash to the same bucket (hash collision). Collisions are handled via chaining (each bucket is a linked list) or open addressing (probe for the next available slot). Hash tables power JavaScript\'s `Map`, `Set`, and plain objects — making property access O(1) on average.',
    tags: ['hash-table', 'data-structures', 'complexity'],
  },

  // ─── Rendering Strategies ─────────────────────────────────────────────────
  {
    id: 'en-next-006',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 1,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: 'What is Client-Side Rendering (CSR) and when is it the best choice?',
    options: [
      { id: 'a', text: 'HTML is generated on the server per request; best for SEO and always-fresh data', isCorrect: false },
      { id: 'b', text: 'The browser receives a minimal HTML shell and renders all content via JavaScript; best for dashboards, CRMs, and authenticated apps', isCorrect: true },
      { id: 'c', text: 'HTML is pre-built at build time and served via CDN; best for blogs and landing pages', isCorrect: false },
      { id: 'd', text: 'Combines static generation with automatic periodic content updates', isCorrect: false },
    ],
    hints: ['The server sends essentially a bare <div id="root"></div>', 'SEO is harder because crawlers need to execute JavaScript to see the content'],
    explanation: 'With CSR, the server delivers an empty HTML shell and a JavaScript bundle. The browser executes the JS and renders the UI client-side. Advantages: faster navigation after initial load, reduced server workload, great for highly interactive apps. Disadvantages: SEO is more challenging (crawlers must execute JS), slower initial page load on less powerful devices. Best for: dashboards, CRMs, internal tools, and authenticated apps where SEO is not a priority.',
    tags: ['CSR', 'client-side-rendering', 'rendering', 'SEO'],
  },
  {
    id: 'en-next-007',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'What is ISR (Incremental Static Regeneration) and what problem does it solve compared to pure SSG?',
    options: [
      { id: 'a', text: 'ISR generates static pages on first access only and never updates them afterwards', isCorrect: false },
      { id: 'b', text: 'ISR eliminates the need for a Node.js server in production', isCorrect: false },
      { id: 'c', text: 'ISR combines SSG performance with automatic content updates without a full rebuild, via time-based or on-demand revalidation', isCorrect: true },
      { id: 'd', text: 'ISR is exclusive to the Next.js Pages Router and does not work in App Router', isCorrect: false },
    ],
    hints: ['Pure SSG has a problem: content is frozen until the next deployment', 'In App Router, ISR is controlled by the `revalidate` option on fetch calls'],
    explanation: 'Pure SSG generates HTML at build time — great for performance and SEO, but content only updates with a new deployment. ISR solves this: after the initial generation, a page can be automatically regenerated in the background when the revalidation period expires (e.g., `{ next: { revalidate: 60 } }`) or on-demand via `revalidatePath()`/`revalidateTag()`. Visitors keep receiving the cached static version while the new one is generated. Trade-off: there is a short window where users may see slightly stale content — acceptable for product catalogs, acceptable for news articles, not acceptable for live stock prices.',
    tags: ['ISR', 'incremental-static-regeneration', 'SSG', 'revalidation', 'rendering'],
  },
  {
    id: 'en-next-008',
    domain: 'nextjs',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: 'A news portal publishes dozens of articles per day and requires excellent SEO. Which rendering strategy is most appropriate?',
    options: [
      { id: 'a', text: 'CSR — for maximum interactivity and reduced server load', isCorrect: false },
      { id: 'b', text: 'Pure SSG with no revalidation — for maximum CDN performance', isCorrect: false },
      { id: 'c', text: 'SSR or ISR — SSR for always-fresh content per request; ISR for near-static performance with automatic updates', isCorrect: true },
      { id: 'd', text: 'CSR with a sitemap.xml — a sitemap is enough to compensate for CSR SEO limitations', isCorrect: false },
    ],
    hints: ['CSR makes SEO harder because crawlers must execute JavaScript', 'Pure SSG would serve stale articles until the next full deployment'],
    explanation: 'A news portal needs good SEO (rules out CSR) and frequently changing content (rules out pure SSG with no revalidation). ISR is often the best fit: articles are statically generated for CDN performance and revalidated automatically (e.g., every 60 seconds) or on-demand when an editor publishes. SSR is an alternative when articles must always reflect the latest version on every request, but it increases server costs under heavy traffic. Adding a sitemap.xml does not fix CSR SEO limitations — crawlers may not execute JavaScript at all, or may index a blank page.',
    tags: ['SSR', 'ISR', 'rendering', 'SEO', 'news', 'architecture'],
  },
  // ─── Output prediction (JavaScript) ────────────────────────────────────────
  {
    id: 'en-js-pred-001',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
\`\`\``,
    options: [
      { id: 'a', text: '0, 1, 2', isCorrect: false },
      { id: 'b', text: '3, 3, 3', isCorrect: true },
      { id: 'c', text: '0, 0, 0', isCorrect: false },
      { id: 'd', text: 'undefined, undefined, undefined', isCorrect: false },
    ],
    hints: ['`var` does not create a new binding per loop iteration', 'By the time the callback runs, the loop has already finished'],
    explanation: '`var` is scoped to the function (or global scope), not to the `for` block. There is a single shared `i` across all iterations. Since `setTimeout` schedules its callback for later (even with a 0ms delay, it still goes through the macrotask queue), the synchronous loop fully completes before any callback runs — at that point `i` is already 3. All three callbacks read the same `i`, now equal to 3.',
    tags: ['closures', 'var', 'event-loop', 'setTimeout', 'output-prediction'],
  },
  {
    id: 'en-js-pred-002',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
\`\`\``,
    options: [
      { id: 'a', text: '0, 1, 2', isCorrect: true },
      { id: 'b', text: '3, 3, 3', isCorrect: false },
      { id: 'c', text: '2, 2, 2', isCorrect: false },
      { id: 'd', text: 'The order is undefined', isCorrect: false },
    ],
    hints: ['`let` is block-scoped', 'Each iteration of a `for` loop with `let` creates a fresh binding of `i`'],
    explanation: 'Unlike `var`, `let` creates a brand-new binding of `i` for every loop iteration. Each closure created by `setTimeout` captures its own copy of `i`, holding the value it had during that specific iteration (0, 1, and 2). This is exactly the behavior that made `let` fix one of the most common closure-in-loop bugs from before ES6.',
    tags: ['closures', 'let', 'block-scope', 'setTimeout', 'output-prediction'],
  },
  {
    id: 'en-js-pred-003',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log(typeof null);
\`\`\``,
    options: [
      { id: 'a', text: "'null'", isCorrect: false },
      { id: 'b', text: "'object'", isCorrect: true },
      { id: 'c', text: "'undefined'", isCorrect: false },
      { id: 'd', text: 'Throws an error', isCorrect: false },
    ],
    hints: ['It is a historical bug in the language, kept for backwards compatibility'],
    explanation: '`typeof null` returns `"object"` — a well-known bug dating back to JavaScript\'s first version (1995), related to how values were represented internally (null shared the same type tag as objects). It was never fixed because doing so would break existing code across the web. To safely check for null, use `value === null`.',
    tags: ['typeof', 'null', 'quirks', 'output-prediction'],
  },
  {
    id: 'en-js-pred-004',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log(typeof NaN);
\`\`\``,
    options: [
      { id: 'a', text: "'NaN'", isCorrect: false },
      { id: 'b', text: "'undefined'", isCorrect: false },
      { id: 'c', text: "'number'", isCorrect: true },
      { id: 'd', text: "'object'", isCorrect: false },
    ],
    hints: ['NaN stands for "Not a Number", but its type is still numeric'],
    explanation: 'Despite the name ("Not a Number"), `NaN` is a value of type `number` — it represents an invalid numeric result (like `0/0` or `Number("abc")`), but still belongs to the number type. Bonus fact: `NaN` is the only value in JavaScript that is not equal to itself (`NaN === NaN` is `false`).',
    tags: ['typeof', 'NaN', 'output-prediction'],
  },
  {
    id: 'en-js-pred-005',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
let x;
console.log(typeof x, typeof y);
\`\`\``,
    options: [
      { id: 'a', text: "'undefined', 'undefined'", isCorrect: true },
      { id: 'b', text: 'Throws a ReferenceError before logging anything', isCorrect: false },
      { id: 'c', text: "'undefined', throws ReferenceError", isCorrect: false },
      { id: 'd', text: "'undefined', 'object'", isCorrect: false },
    ],
    hints: ['`y` was never declared anywhere', '`typeof` is one of the few operations that is safe on undeclared variables'],
    explanation: '`typeof` is special: it is the only operator that does not throw when applied to an identifier that was never declared — it simply returns `"undefined"`. `x`, declared with `let` but never assigned, also holds the value `undefined`, so its `typeof` is also `"undefined"`. If you tried `console.log(y)` directly (without `typeof`), that would throw a `ReferenceError`.',
    tags: ['typeof', 'undefined', 'reference-error', 'output-prediction'],
  },
  {
    id: 'en-js-pred-006',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log([] == false);
\`\`\``,
    options: [
      { id: 'a', text: 'false', isCorrect: false },
      { id: 'b', text: 'true', isCorrect: true },
      { id: 'c', text: 'Throws a TypeError', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`==` performs type coercion before comparing', 'An empty array is coerced to an empty string when converted to a primitive'],
    explanation: 'With `==`, the array is coerced to a primitive: `[].toString()` is `""`. Then `false` is coerced to a number (`0`) and `""` is also coerced to a number (`0`). `0 == 0` is `true`. This is one of the classic examples used to justify "never use `==`, use `===`" — with `===`, `[] === false` would be `false` directly, with no coercion.',
    tags: ['coercion', 'loose-equality', 'array', 'output-prediction'],
  },
  {
    id: 'en-js-pred-007',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log('' == 0, '' === 0);
\`\`\``,
    options: [
      { id: 'a', text: 'true, true', isCorrect: false },
      { id: 'b', text: 'false, false', isCorrect: false },
      { id: 'c', text: 'true, false', isCorrect: true },
      { id: 'd', text: 'false, true', isCorrect: false },
    ],
    hints: ['`==` converts the empty string to a number before comparing', '`===` never performs type coercion'],
    explanation: 'With `==`, the empty string `\'\'` is converted to a number, resulting in `0`, so `0 == 0` is `true`. With `===` there is no coercion: comparing a `string` directly with a `number` always results in `false`, regardless of the values.',
    tags: ['coercion', 'loose-equality', 'strict-equality', 'output-prediction'],
  },
  {
    id: 'en-js-pred-008',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log(null == undefined, null === undefined);
\`\`\``,
    options: [
      { id: 'a', text: 'true, true', isCorrect: false },
      { id: 'b', text: 'true, false', isCorrect: true },
      { id: 'c', text: 'false, false', isCorrect: false },
      { id: 'd', text: 'false, true', isCorrect: false },
    ],
    hints: ['The spec treats `null == undefined` as a special case', '`===` also compares the type, and `null`/`undefined` are distinct primitive types'],
    explanation: 'The JavaScript spec defines a special rule: `null` is "loosely equal" to `undefined` (and only to `undefined` — neither is `==` to any other falsy value like `0` or `""`). That is why `null == undefined` is `true`. `===` also compares type: `null` and `undefined` are different primitive types, so `null === undefined` is `false`.',
    tags: ['null', 'undefined', 'loose-equality', 'strict-equality', 'output-prediction'],
  },
  {
    id: 'en-js-pred-009',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log(NaN === NaN);
\`\`\``,
    options: [
      { id: 'a', text: 'true', isCorrect: false },
      { id: 'b', text: 'false', isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['`NaN` is the only value in the language that is not equal to itself', 'Use `Number.isNaN()` or `Object.is()` to check for NaN'],
    explanation: 'By definition of the IEEE 754 spec (used for numbers in JS), `NaN` is never equal to anything, including itself. To reliably check whether a value is `NaN`, use `Number.isNaN(value)` or `Object.is(value, NaN)` — never `value === NaN`.',
    tags: ['NaN', 'strict-equality', 'output-prediction'],
  },
  {
    id: 'en-js-pred-010',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log([1, 2, 3] + [4, 5, 6]);
\`\`\``,
    options: [
      { id: 'a', text: '[1, 2, 3, 4, 5, 6]', isCorrect: false },
      { id: 'b', text: "'1,2,34,5,6'", isCorrect: true },
      { id: 'c', text: 'NaN', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['The `+` operator has no special handling for arrays', 'Before adding, both operands are converted to primitives'],
    explanation: 'The `+` operator does not know how to concatenate arrays. When at least one operand is not a number, JS converts both to primitives via `toString()`. `[1,2,3].toString()` is `"1,2,3"` and `[4,5,6].toString()` is `"4,5,6"`. After that, `+` becomes string concatenation: `"1,2,3" + "4,5,6"` = `"1,2,34,5,6"`.',
    tags: ['coercion', 'array', 'plus-operator', 'output-prediction'],
  },
  {
    id: 'en-js-pred-011',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log({} + []);
\`\`\``,
    options: [
      { id: 'a', text: '0', isCorrect: false },
      { id: 'b', text: "'[object Object]'", isCorrect: true },
      { id: 'c', text: 'NaN', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['As an argument inside a function call, `{}` is unambiguously an object value, never a block', '`{}.toString()` returns `"[object Object]"`'],
    explanation: 'Inside `console.log(...)`, `{}` is unambiguously an object literal expression (there is no block-vs-expression ambiguity like there would be in a bare statement). Both operands are converted to strings: `{}.toString()` is `"[object Object]"` and `[].toString()` is `""`. The concatenation result is `"[object Object]"`. (Trivia: `{} + []` as a bare statement at the start of a line behaves differently, since `{}` there is parsed as an empty block.)',
    tags: ['coercion', 'object', 'plus-operator', 'output-prediction'],
  },
  {
    id: 'en-js-pred-012',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
function greet() {}
console.log(typeof greet);
\`\`\``,
    options: [
      { id: 'a', text: "'object'", isCorrect: false },
      { id: 'b', text: "'function'", isCorrect: true },
      { id: 'c', text: "'undefined'", isCorrect: false },
      { id: 'd', text: "'method'", isCorrect: false },
    ],
    hints: ['Functions are first-class citizens in JavaScript, with their own dedicated `typeof` result'],
    explanation: 'Although functions are technically objects under the hood (they can have properties, for example), `typeof` has a dedicated return value for them: `"function"`. This holds for function declarations, arrow functions, and functions created with `new Function()`.',
    tags: ['typeof', 'function', 'output-prediction'],
  },
  {
    id: 'en-js-pred-013',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const arr = [1, 2, 3];
console.log(typeof arr, Array.isArray(arr));
\`\`\``,
    options: [
      { id: 'a', text: "'array', true", isCorrect: false },
      { id: 'b', text: "'object', true", isCorrect: true },
      { id: 'c', text: "'object', false", isCorrect: false },
      { id: 'd', text: "'array', false", isCorrect: false },
    ],
    hints: ['Arrays do not have their own type in the `typeof` system', 'To check if something is an array, always use `Array.isArray()`, never `typeof`'],
    explanation: 'JavaScript has no primitive "array" type — arrays are a special kind of object, so `typeof arr` returns `"object"`. To distinguish an array from a plain object, the correct way is `Array.isArray(arr)`, which returns `true` for arrays (including arrays from other realms/iframes, unlike checking `arr.constructor === Array`).',
    tags: ['typeof', 'Array.isArray', 'array', 'output-prediction'],
  },
  {
    id: 'en-js-pred-014',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const obj = { a: 1, b: undefined, c: () => {}, d: 2 };
console.log(JSON.stringify(obj));
\`\`\``,
    options: [
      { id: 'a', text: '\'{"a":1,"b":undefined,"c":undefined,"d":2}\'', isCorrect: false },
      { id: 'b', text: '\'{"a":1,"d":2}\'', isCorrect: true },
      { id: 'c', text: '\'{"a":1,"b":null,"c":null,"d":2}\'', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['JSON has no representation for `undefined` or for functions', 'Properties whose value serializes to "nothing" are omitted, not turned into `null`'],
    explanation: 'JSON has no concept of `undefined` or of a function. When serializing an object, `JSON.stringify` simply omits properties whose value is `undefined` or a function — they do not appear in the result (unlike `null`, which is preserved as `null`). That is why the final result is `\'{"a":1,"d":2}\'`.',
    tags: ['JSON.stringify', 'undefined', 'function', 'output-prediction'],
  },
  {
    id: 'en-js-pred-015',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log(JSON.stringify(undefined));
console.log(typeof JSON.stringify(undefined));
\`\`\``,
    options: [
      { id: 'a', text: "'undefined' / 'string'", isCorrect: false },
      { id: 'b', text: 'undefined / \'undefined\'', isCorrect: true },
      { id: 'c', text: "'null' / 'string'", isCorrect: false },
      { id: 'd', text: 'Throws a TypeError / never reaches the second line', isCorrect: false },
    ],
    hints: ['`JSON.stringify(undefined)` does not return a string — it returns the value `undefined` itself'],
    explanation: '`JSON.stringify(undefined)` is a special case: since `undefined` has no JSON representation, the function returns the primitive value `undefined` (not the string `"undefined"`). `console.log(undefined)` prints `undefined` with no quotes, and `typeof undefined` is `\'undefined\'`. This differs from inside an object/array (seen in the previous question), where the property is simply omitted.',
    tags: ['JSON.stringify', 'undefined', 'output-prediction'],
  },
  {
    id: 'en-js-pred-016',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const user = Object.freeze({ name: 'Ana', address: { city: 'SP' } });
user.name = 'Bia';
user.address.city = 'RJ';
console.log(user.name, user.address.city);
\`\`\``,
    options: [
      { id: 'a', text: "'Ana', 'SP'", isCorrect: false },
      { id: 'b', text: "'Bia', 'RJ'", isCorrect: false },
      { id: 'c', text: "'Ana', 'RJ'", isCorrect: true },
      { id: 'd', text: 'Throws a TypeError on the first assignment', isCorrect: false },
    ],
    hints: ['`Object.freeze` only protects the first level of the object', 'In non-strict mode, assignments to frozen properties fail silently (no error)'],
    explanation: '`Object.freeze` is shallow: it prevents adding, removing, or reassigning the object\'s direct properties, but does not freeze objects nested inside it. `user.name = \'Bia\'` fails silently (in non-strict mode) because `name` is protected — `user.name` stays `\'Ana\'`. But `user.address` is just a reference to another object, which is not frozen: `user.address.city = \'RJ\'` works normally. To freeze deeply, you would need to recursively freeze every level.',
    tags: ['Object.freeze', 'immutability', 'shallow', 'output-prediction'],
  },
  {
    id: 'en-js-pred-017',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const arr = [1, 2, NaN];
console.log(arr.indexOf(NaN), arr.includes(NaN));
\`\`\``,
    options: [
      { id: 'a', text: '2, true', isCorrect: false },
      { id: 'b', text: '-1, false', isCorrect: false },
      { id: 'c', text: '2, false', isCorrect: false },
      { id: 'd', text: '-1, true', isCorrect: true },
    ],
    hints: ['`indexOf` uses `===` internally (and `NaN === NaN` is `false`)', '`includes` uses the "SameValueZero" algorithm, which treats `NaN` as equal to `NaN`'],
    explanation: '`Array.prototype.indexOf` compares elements using strict equality (`===`), and since `NaN === NaN` is `false`, `indexOf` never finds a `NaN`, returning `-1`. `Array.prototype.includes` uses the SameValueZero algorithm, which treats `NaN` as equal to `NaN` — so `includes(NaN)` returns `true` even when `indexOf(NaN)` returns `-1`. This is one of the reasons `includes` was added: to solve exactly this `indexOf` limitation.',
    tags: ['Array.includes', 'Array.indexOf', 'NaN', 'output-prediction'],
  },
  {
    id: 'en-js-pred-018',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const user = { name: 'Ana' };
console.log(user.getAge?.());
\`\`\``,
    options: [
      { id: 'a', text: 'Throws TypeError: getAge is not a function', isCorrect: false },
      { id: 'b', text: 'undefined', isCorrect: true },
      { id: 'c', text: 'null', isCorrect: false },
      { id: 'd', text: 'false', isCorrect: false },
    ],
    hints: ['`?.()` checks whether the thing on the left exists before trying to call it as a function'],
    explanation: 'Optional chaining (`?.`) also works on function calls: `user.getAge?.()` first checks whether `user.getAge` is `null`/`undefined`. Since `getAge` does not exist on `user`, the whole expression short-circuits and returns `undefined` immediately, without trying to invoke anything as a function — avoiding the `TypeError: getAge is not a function` that `user.getAge()` directly would throw.',
    tags: ['optional-chaining', 'output-prediction'],
  },
  {
    id: 'en-js-pred-019',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const count = 0;
console.log(count ?? 10, count || 10);
\`\`\``,
    options: [
      { id: 'a', text: '10, 10', isCorrect: false },
      { id: 'b', text: '0, 0', isCorrect: false },
      { id: 'c', text: '0, 10', isCorrect: true },
      { id: 'd', text: '10, 0', isCorrect: false },
    ],
    hints: ['`??` only falls back to the default when the left side is `null` or `undefined`', '`||` falls back to the default for ANY "falsy" value (0, "", false, NaN...)'],
    explanation: '`??` (nullish coalescing) only uses the right-hand value when the left side is `null` or `undefined`. Since `0` is neither `null` nor `undefined`, `count ?? 10` returns `0`. `||` uses the right-hand value for any "falsy" value — and `0` is falsy — so `count || 10` returns `10`. This is exactly why `??` was added: to avoid this classic bug when dealing with numeric values that can legitimately be `0`.',
    tags: ['nullish-coalescing', 'logical-or', 'falsy', 'output-prediction'],
  },
  {
    id: 'en-js-pred-020',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
function show({ a = 1, b = 2 } = {}) {
  console.log(a, b);
}
show({ a: null, b: undefined });
\`\`\``,
    options: [
      { id: 'a', text: '1, 2', isCorrect: false },
      { id: 'b', text: 'null, 2', isCorrect: true },
      { id: 'c', text: 'null, undefined', isCorrect: false },
      { id: 'd', text: '1, undefined', isCorrect: false },
    ],
    hints: ['Destructuring default values only kick in for `undefined`, never for `null`'],
    explanation: 'Default values in destructuring (and in function parameters) only apply when the corresponding value is exactly `undefined` — `null` is treated as a valid value and does not trigger the default. That is why `a` receives `null` (an explicit value, not replaced) and `b` receives `2` (because `undefined` triggers the default).',
    tags: ['destructuring', 'default-values', 'null', 'undefined', 'output-prediction'],
  },
  {
    id: 'en-js-pred-021',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const arr = [1, , 3];
console.log(arr.length, arr[1]);
\`\`\``,
    options: [
      { id: 'a', text: '2, undefined', isCorrect: false },
      { id: 'b', text: '3, undefined', isCorrect: true },
      { id: 'c', text: '3, null', isCorrect: false },
      { id: 'd', text: 'Throws a SyntaxError', isCorrect: false },
    ],
    hints: ['A sparse array still counts the empty slot toward `.length`'],
    explanation: 'The literal `[1, , 3]` creates a sparse array with 3 slots: index 0 = `1`, index 1 = a "hole" (an empty slot, not quite the same as an explicit `undefined`, but it behaves like `undefined` when read), index 2 = `3`. `arr.length` is `3` and `arr[1]` returns `undefined` when accessed directly — though methods like `forEach`/`map` treat empty slots differently from a real `undefined`.',
    tags: ['sparse-array', 'array', 'output-prediction'],
  },
  {
    id: 'en-js-pred-022',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const s = 'abc';
s[0] = 'z';
console.log(s);
\`\`\``,
    options: [
      { id: 'a', text: "'zbc'", isCorrect: false },
      { id: 'b', text: "'abc'", isCorrect: true },
      { id: 'c', text: 'Throws a TypeError', isCorrect: false },
      { id: 'd', text: "'z'", isCorrect: false },
    ],
    hints: ['Strings are immutable primitives in JavaScript'],
    explanation: 'Strings in JavaScript are immutable: no operation can change the characters of an existing string. The assignment `s[0] = \'z\'` is simply ignored silently (in non-strict mode) because string indices are not writable properties. To "modify" a string, you must create a new one, e.g.: `s = \'z\' + s.slice(1)`.',
    tags: ['string', 'immutability', 'output-prediction'],
  },
  {
    id: 'en-js-pred-023',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log(0.1 + 0.2 === 0.3);
\`\`\``,
    options: [
      { id: 'a', text: 'true', isCorrect: false },
      { id: 'b', text: 'false', isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'Throws a RangeError', isCorrect: false },
    ],
    hints: ['Floating-point numbers (IEEE 754) cannot represent every decimal fraction exactly'],
    explanation: 'JavaScript uses double-precision floating-point numbers (IEEE 754), which cannot exactly represent certain decimal fractions. `0.1 + 0.2` results in `0.30000000000000004`, not exactly `0.3`. To compare floats safely, compare the difference against an epsilon: `Math.abs(a - b) < Number.EPSILON`.',
    tags: ['floating-point', 'numeric-precision', 'output-prediction'],
  },
  {
    id: 'en-js-pred-024',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log(parseInt('08'), parseInt('0x10'));
\`\`\``,
    options: [
      { id: 'a', text: '0, 16', isCorrect: false },
      { id: 'b', text: '8, 16', isCorrect: true },
      { id: 'c', text: '8, 10', isCorrect: false },
      { id: 'd', text: 'NaN, 16', isCorrect: false },
    ],
    hints: ['Modern engines always default to base 10, except when the string starts with "0x"'],
    explanation: 'In modern engines (ES5+), `parseInt` without a radix argument defaults to base 10 — `parseInt(\'08\')` is `8`, there is no longer the historical bug of interpreting a leading `0` as octal. The exception is the `0x`/`0X` prefix, which `parseInt` automatically recognizes as hexadecimal: `parseInt(\'0x10\')` is `16`. Best practice: always pass the radix explicitly, e.g. `parseInt(\'08\', 10)`.',
    tags: ['parseInt', 'output-prediction'],
  },
  {
    id: 'en-js-pred-025',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log(parseInt('abc'), parseInt('12px'));
\`\`\``,
    options: [
      { id: 'a', text: 'NaN, NaN', isCorrect: false },
      { id: 'b', text: '0, 12', isCorrect: false },
      { id: 'c', text: 'NaN, 12', isCorrect: true },
      { id: 'd', text: 'NaN, NaN px', isCorrect: false },
    ],
    hints: ['`parseInt` reads digits left to right until it hits an invalid character'],
    explanation: '`parseInt` parses the string left to right and stops at the first character that does not form a valid number. `\'abc\'` does not start with any digit, so the result is `NaN`. `\'12px\'` starts with valid digits (`12`) and stops at `p`, returning `12`. This differs from `Number(\'12px\')`, which returns `NaN` because `Number()` requires the entire string to be numeric.',
    tags: ['parseInt', 'NaN', 'output-prediction'],
  },
  {
    id: 'en-js-pred-026',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const obj = { x: 1 };
console.log(\`Value: \${obj}\`);
\`\`\``,
    options: [
      { id: 'a', text: 'Value: {"x":1}', isCorrect: false },
      { id: 'b', text: 'Value: [object Object]', isCorrect: true },
      { id: 'c', text: 'Value: undefined', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['Interpolating a value inside a template literal converts it to a string via `toString()`, not via `JSON.stringify`'],
    explanation: 'When interpolating a value inside `${...}` in a template literal, JavaScript calls `String(value)`, which in turn calls `toString()`. A plain object\'s default `toString()` returns `"[object Object]"` — it does not serialize the properties the way `JSON.stringify` would. To see the object\'s contents, you would need to call `JSON.stringify(obj)` explicitly.',
    tags: ['template-literal', 'toString', 'output-prediction'],
  },
  {
    id: 'en-js-pred-027',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log([10, 1, 2].sort());
\`\`\``,
    options: [
      { id: 'a', text: '[1, 2, 10]', isCorrect: false },
      { id: 'b', text: '[1, 10, 2]', isCorrect: true },
      { id: 'c', text: '[10, 1, 2]', isCorrect: false },
      { id: 'd', text: '[2, 1, 10]', isCorrect: false },
    ],
    hints: ['Without a comparator, `sort()` converts every element to a string before comparing'],
    explanation: 'Without a comparator function, `Array.prototype.sort()` converts each element to a string and sorts lexicographically (like in a dictionary). Comparing as text: `"1"`, `"10"`, `"2"` — `"1"` comes before `"10"` (which starts with "1" plus an extra character), and `"10"` comes before `"2"` because `\'1\' < \'2\'` when comparing characters. Result: `[1, 10, 2]`. For correct numeric sorting, use `sort((a, b) => a - b)`.',
    tags: ['Array.sort', 'output-prediction'],
  },
  {
    id: 'en-js-pred-028',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
function* gen() {
  yield 1;
  yield 2;
  return 3;
}
const it = gen();
console.log(it.next().value, it.next().value, it.next().value, it.next().value);
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3, undefined', isCorrect: true },
      { id: 'b', text: '1, 2, 3, 3', isCorrect: false },
      { id: 'c', text: '1, 2, undefined, undefined', isCorrect: false },
      { id: 'd', text: 'Throws an error on the fourth call', isCorrect: false },
    ],
    hints: ['A generator\'s `return` becomes the `.value` of the call that finishes the iterator (with `done: true`)', 'Calling `.next()` after a generator has already finished always returns `{ value: undefined, done: true }`'],
    explanation: 'Each `yield` pauses the function and delivers a value: the first `.next()` call returns `{ value: 1, done: false }`, the second `{ value: 2, done: false }`. `return 3` finishes the generator, delivering `{ value: 3, done: true }` on the third call. Any `.next()` call after that (the generator has already finished) returns `{ value: undefined, done: true }` forever.',
    tags: ['generators', 'yield', 'iterators', 'output-prediction'],
  },
  {
    id: 'en-js-pred-029',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log(Symbol('id') === Symbol('id'));
\`\`\``,
    options: [
      { id: 'a', text: 'true', isCorrect: false },
      { id: 'b', text: 'false', isCorrect: true },
      { id: 'c', text: "'id'", isCorrect: false },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['The string passed to `Symbol()` is just a debug description, not an equality identifier'],
    explanation: 'Every call to `Symbol()` creates a completely unique primitive value, even when the description passed as an argument is identical. The string `\'id\'` is only there to help with debugging (it shows up in `symbol.toString()` or the console), but it does not affect the symbol\'s identity. That is why two distinct `Symbol(\'id\')` values are never equal — this is exactly the point of Symbol: creating guaranteed-unique, collision-free object keys.',
    tags: ['Symbol', 'output-prediction'],
  },
  {
    id: 'en-js-pred-030',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const nested = [1, [2, [3, [4, 5]]]];
console.log(nested.flat(Infinity));
\`\`\``,
    options: [
      { id: 'a', text: '[1, 2, [3, [4, 5]]]', isCorrect: false },
      { id: 'b', text: '[1, 2, 3, 4, 5]', isCorrect: true },
      { id: 'c', text: '[1, [2, [3, [4, 5]]]]', isCorrect: false },
      { id: 'd', text: 'Throws a RangeError', isCorrect: false },
    ],
    hints: ['The argument to `flat()` defines how many levels of depth to flatten', '`Infinity` flattens every level, no matter how nested'],
    explanation: '`Array.prototype.flat(depth)` flattens the array up to `depth` levels deep (the default with no argument is `1`). Passing `Infinity` tells the method to flatten every level of nesting, no matter how deep — resulting in a fully flat array: `[1, 2, 3, 4, 5]`.',
    tags: ['Array.flat', 'output-prediction'],
  },
  {
    id: 'en-js-pred-031',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counterA = makeCounter();
const counterB = makeCounter();
console.log(counterA(), counterA(), counterB());
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3', isCorrect: false },
      { id: 'b', text: '1, 2, 1', isCorrect: true },
      { id: 'c', text: '1, 1, 1', isCorrect: false },
      { id: 'd', text: '0, 1, 0', isCorrect: false },
    ],
    hints: ['Each call to `makeCounter()` creates a fresh lexical scope, with its own `count` variable'],
    explanation: 'Each call to `makeCounter()` creates a completely fresh scope, with its own independent `count` variable. `counterA` and `counterB` are separate closures, each closing over its own copy of `count`. That is why `counterA()` called twice returns `1` and then `2`, while `counterB()`, called from a different closure, starts from scratch and returns `1`.',
    tags: ['closures', 'factory-function', 'output-prediction'],
  },
  {
    id: 'en-js-pred-032',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const key = 'role';
const user = { name: 'Ana', [key]: 'admin' };
console.log(user.role);
\`\`\``,
    options: [
      { id: 'a', text: "'key'", isCorrect: false },
      { id: 'b', text: 'undefined', isCorrect: false },
      { id: 'c', text: "'admin'", isCorrect: true },
      { id: 'd', text: 'Throws a SyntaxError', isCorrect: false },
    ],
    hints: ['`[key]` inside an object literal uses the value of the `key` variable as the property name'],
    explanation: 'The `[key]: value` syntax inside an object literal (computed property name) uses the **value** of the `key` variable (the string `\'role\'`) as the property name, not the literal name "key". Since `key` holds `\'role\'`, the resulting object has the property `role: \'admin\'`, so `user.role` is `\'admin\'`.',
    tags: ['computed-property', 'object-literal', 'output-prediction'],
  },
  {
    id: 'en-js-pred-033',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
\`\`\``,
    options: [
      { id: 'a', text: '1, 2', isCorrect: false },
      { id: 'b', text: '2, 1', isCorrect: true },
      { id: 'c', text: '2, 2', isCorrect: false },
      { id: 'd', text: 'Throws a SyntaxError', isCorrect: false },
    ],
    hints: ['The right side `[b, a]` is fully evaluated (creating a new array) before any assignment happens'],
    explanation: 'Destructuring assignment enables the classic "swap without a temp variable". The right-hand side `[b, a]` is evaluated first, creating a temporary array `[2, 1]` from the current values. Only then is that array destructured into the left-hand variables: `a` gets `2` and `b` gets `1`.',
    tags: ['destructuring', 'swap', 'output-prediction'],
  },
  {
    id: 'en-js-pred-034',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
function add(a, b = a + 1) {
  return b;
}
console.log(add(1), add(5));
\`\`\``,
    options: [
      { id: 'a', text: '2, 6', isCorrect: true },
      { id: 'b', text: '1, 1', isCorrect: false },
      { id: 'c', text: 'undefined, undefined', isCorrect: false },
      { id: 'd', text: 'Throws a ReferenceError', isCorrect: false },
    ],
    hints: ['Default parameter values are re-evaluated on every call, not memoized', 'A default parameter can reference earlier parameters in the list'],
    explanation: 'Default parameter values are expressions evaluated on each function call, at the moment the call happens — and they can reference parameters declared earlier in the list. In `add(1)`, `b` was not passed, so `b = a + 1 = 1 + 1 = 2`. In `add(5)`, again `b` was not passed, so `b = 5 + 1 = 6`. The default value is never "frozen" at function-definition time.',
    tags: ['default-parameters', 'output-prediction'],
  },
  {
    id: 'en-js-pred-035',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
function test(x) {
  switch (x) {
    case 1:
    case 2:
      console.log('low');
      break;
    case 3:
      console.log('high');
      break;
    default:
      console.log('other');
  }
}
test(2);
\`\`\``,
    options: [
      { id: 'a', text: "'other'", isCorrect: false },
      { id: 'b', text: "'low'", isCorrect: true },
      { id: 'c', text: "'high'", isCorrect: false },
      { id: 'd', text: "'low' then 'high'", isCorrect: false },
    ],
    hints: ['A `case` without `break` falls through to the next `case`, running its code', '`case 1` is empty and falls straight into `case 2`, where the `console.log` is'],
    explanation: 'In a `switch`, when a `case` has no `break`, execution falls through to the next `case`. Here, `case 1` is empty and simply falls through to `case 2`. With `x = 2`, the `switch` matches `case 2` directly, runs `console.log(\'low\')`, and hits the `break`, stopping there — never reaching `case 3` or `default`.',
    tags: ['switch', 'fallthrough', 'output-prediction'],
  },
  {
    id: 'en-js-pred-036',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
function createFib() {
  const cache = {};
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    return (cache[n] = fib(n - 1) + fib(n - 2));
  };
}
const fib = createFib();
console.log(fib(5));
\`\`\``,
    options: [
      { id: 'a', text: '5', isCorrect: true },
      { id: 'b', text: '8', isCorrect: false },
      { id: 'c', text: '3', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['The Fibonacci sequence starts 0, 1, 1, 2, 3, 5...', 'The `cache` in the closure memoizes already-computed results, but does not change the final value'],
    explanation: 'The function uses closure-based memoization: `cache` persists across recursive calls to `fib`, avoiding recomputation of already-solved subproblems — but that is a performance optimization, it does not change the mathematical result. The (0-indexed) Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8... So `fib(5)` (the 6th term, index 5) is `5`: `fib(5) = fib(4) + fib(3) = 3 + 2 = 5`.',
    tags: ['closures', 'memoization', 'recursion', 'output-prediction'],
  },
  {
    id: 'en-js-pred-037',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const account = {
  _balance: 100,
  get balance() {
    return \`$\${this._balance}\`;
  },
  set balance(value) {
    this._balance = value;
  },
};
console.log(account.balance);
account.balance = 250;
console.log(account.balance);
\`\`\``,
    options: [
      { id: 'a', text: '$100 / $250', isCorrect: true },
      { id: 'b', text: 'function / function', isCorrect: false },
      { id: 'c', text: '$100 / 250', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError on assignment', isCorrect: false },
    ],
    hints: ['`get`/`set` make `account.balance` behave like a regular property, not a method', 'Reading or assigning `account.balance` (no parentheses) is what triggers the getter/setter'],
    explanation: 'Getters and setters make a property behave specially when read or assigned, without needing function-call syntax. `console.log(account.balance)` invokes the getter, which formats `_balance` as a string: `\'$100\'`. The assignment `account.balance = 250` invokes the setter, which updates `_balance` to `250`. The next getter access reflects that change: `\'$250\'`.',
    tags: ['getters', 'setters', 'output-prediction'],
  },
  {
    id: 'en-js-pred-038',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
let x = (1, 2, 3);
console.log(x);
\`\`\``,
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '[1, 2, 3]', isCorrect: false },
      { id: 'c', text: '3', isCorrect: true },
      { id: 'd', text: 'Throws a SyntaxError', isCorrect: false },
    ],
    hints: ['The comma here is the comma operator, not a list separator', 'The comma operator evaluates each expression and returns the value of the last one'],
    explanation: 'Inside parentheses used as an expression, the comma is the comma operator: it evaluates each expression left to right and discards every result except the last one. `(1, 2, 3)` evaluates `1`, then `2`, then `3`, and the whole expression returns `3` — which is what gets assigned to `x`. It is rarely used intentionally, but shows up in minified code and in some `for` loop patterns.',
    tags: ['comma-operator', 'output-prediction'],
  },
  {
    id: 'en-js-pred-039',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const arr = [3, 1, 2];
const sorted = arr.sort();
console.log(arr === sorted, arr);
\`\`\``,
    options: [
      { id: 'a', text: 'false, [1, 2, 3]', isCorrect: false },
      { id: 'b', text: 'true, [1, 2, 3]', isCorrect: true },
      { id: 'c', text: 'true, [3, 1, 2]', isCorrect: false },
      { id: 'd', text: 'false, [3, 1, 2]', isCorrect: false },
    ],
    hints: ['`sort()` reorders the original array in place', 'Besides mutating the original array, `sort()` also returns the same reference'],
    explanation: '`Array.prototype.sort()` is a mutating method: it reorders the original array\'s elements in place and returns the same reference to that array, not a copy. That is why `arr === sorted` is `true` (same reference) and the original `arr` already shows up sorted: `[1, 2, 3]`. To avoid mutating the original, you would need to copy first: `[...arr].sort()`.',
    tags: ['Array.sort', 'mutability', 'reference', 'output-prediction'],
  },
  {
    id: 'en-js-pred-040',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const original = { a: 1, nested: { b: 2 } };
const copy = { ...original };
copy.a = 99;
copy.nested.b = 99;
console.log(original.a, original.nested.b);
\`\`\``,
    options: [
      { id: 'a', text: '1, 2', isCorrect: false },
      { id: 'b', text: '99, 99', isCorrect: false },
      { id: 'c', text: '1, 99', isCorrect: true },
      { id: 'd', text: '99, 2', isCorrect: false },
    ],
    hints: ['Spread (`...`) makes a shallow copy, only one level deep', 'Properties that are objects remain the SAME reference in the copy'],
    explanation: 'The spread operator (`{ ...original }`) creates a shallow copy: it copies the values of top-level properties, but if a property is an object (like `nested`), only the *reference* is copied — `copy.nested` and `original.nested` point to the same object. That is why `copy.a = 99` does not affect `original.a` (which stays `1`, since `a` is an independent primitive), but `copy.nested.b = 99` does affect `original.nested.b` too, since both share the same nested object.',
    tags: ['spread', 'shallow-copy', 'reference', 'output-prediction'],
  },
  // ─── Output prediction (Async / Promises) ──────────────────────────────────
  {
    id: 'en-js-async-001',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
\`\`\``,
    options: [
      { id: 'a', text: 'A, B, C, D', isCorrect: false },
      { id: 'b', text: 'A, D, C, B', isCorrect: true },
      { id: 'c', text: 'A, D, B, C', isCorrect: false },
      { id: 'd', text: 'A, C, D, B', isCorrect: false },
    ],
    hints: ['Synchronous code always runs to completion before any queue is processed', 'Microtasks (promises) are processed before macrotasks (setTimeout)'],
    explanation: 'First, all synchronous code runs: `A` and `D`. Then the event loop drains the microtask queue (promises) before the macrotask queue (timers): `C` is printed. Only then, with the microtask queue empty, does the event loop process the next macrotask: `B`. Final order: A, D, C, B.',
    tags: ['event-loop', 'microtask', 'macrotask', 'setTimeout', 'Promise', 'output-prediction'],
  },
  {
    id: 'en-js-async-002',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function getData() {
  console.log('1');
  await null;
  console.log('2');
}
console.log('start');
getData();
console.log('end');
\`\`\``,
    options: [
      { id: 'a', text: 'start, 1, 2, end', isCorrect: false },
      { id: 'b', text: 'start, 1, end, 2', isCorrect: true },
      { id: 'c', text: 'start, end, 1, 2', isCorrect: false },
      { id: 'd', text: '1, start, end, 2', isCorrect: false },
    ],
    hints: ['Everything before the first `await` in an async function runs synchronously, at call time', 'After the `await`, the rest of the function becomes a continuation scheduled as a microtask'],
    explanation: 'When `getData()` is called, it runs synchronously up to the first `await`: it logs `1`. Hitting `await null` pauses the function and hands control back to the caller — that is why `end` is logged before `2`. The continuation after the `await` (`console.log(\'2\')`) is scheduled as a microtask, which only runs after the remaining synchronous code (`end`) finishes.',
    tags: ['async-await', 'event-loop', 'microtask', 'output-prediction'],
  },
  {
    id: 'en-js-async-003',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise1'));
Promise.resolve().then(() => console.log('promise2'));
console.log('sync');
\`\`\``,
    options: [
      { id: 'a', text: 'sync, timeout, promise1, promise2', isCorrect: false },
      { id: 'b', text: 'sync, promise1, promise2, timeout', isCorrect: true },
      { id: 'c', text: 'timeout, sync, promise1, promise2', isCorrect: false },
      { id: 'd', text: 'sync, promise2, promise1, timeout', isCorrect: false },
    ],
    hints: ['The entire microtask queue is drained before the next macrotask runs'],
    explanation: 'Synchronous code runs first: `sync`. Then the event loop fully drains the microtask queue before processing any macrotask — the two resolved promises are processed in the order they were queued: `promise1`, then `promise2`. Only then does the `setTimeout` macrotask run: `timeout`.',
    tags: ['event-loop', 'microtask', 'macrotask', 'output-prediction'],
  },
  {
    id: 'en-js-async-004',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function f() {
  return 42;
}
console.log(f());
\`\`\``,
    options: [
      { id: 'a', text: '42', isCorrect: false },
      { id: 'b', text: 'undefined', isCorrect: false },
      { id: 'c', text: 'A Promise object (pending/resolved with 42)', isCorrect: true },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['Every `async` function always returns a Promise, never the "raw" value from `return`', 'To get `42`, you would need `await f()` or `f().then(...)`'],
    explanation: 'Functions declared with `async` always return a `Promise`, regardless of what the `return` statement contains. `f()` returns a Promise that will resolve with `42` — but `console.log(f())` logs the Promise object itself (something like `Promise {42}` or `Promise {<pending>}`, depending on inspection timing), not the value `42` directly. To access the resolved value, you need `await f()` or `f().then(value => ...)`.',
    tags: ['async-await', 'Promise', 'output-prediction'],
  },
  {
    id: 'en-js-async-005',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function run() {
  const arr = [1, 2, 3];
  arr.forEach(async (n) => {
    await Promise.resolve();
    console.log(n);
  });
  console.log('done');
}
run();
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3, done', isCorrect: false },
      { id: 'b', text: 'done, 1, 2, 3', isCorrect: true },
      { id: 'c', text: 'done', isCorrect: false },
      { id: 'd', text: '1, done, 2, done, 3, done', isCorrect: false },
    ],
    hints: ['`Array.prototype.forEach` never waits (`await`) for its callbacks, even if they are `async`', 'Each async callback runs synchronously up to the first `await`, then schedules the rest as a microtask'],
    explanation: 'This is a classic bug: `forEach` has no support for `async`/`await` — it calls each callback and completely ignores the Promise it returns, never waiting for anything. Each `async (n) => {...}` callback runs synchronously up to `await Promise.resolve()`, then pauses and schedules its continuation as a microtask. `forEach` finishes its loop without ever waiting for those continuations, so `console.log(\'done\')` runs right after, synchronously. Only then do the three scheduled microtasks run in order: `1`, `2`, `3`. To actually wait, you would need a `for...of` loop with `await` inside, or `Promise.all(arr.map(...))`.',
    tags: ['async-await', 'forEach', 'microtask', 'gotcha', 'output-prediction'],
  },
  {
    id: 'en-js-async-006',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function fail() {
  throw new Error('oops');
}
async function run() {
  try {
    await fail();
  } catch (e) {
    console.log('caught:', e.message);
  }
}
run();
\`\`\``,
    options: [
      { id: 'a', text: 'Throws an unhandled error, crashing the script', isCorrect: false },
      { id: 'b', text: "'caught:', 'oops'", isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: "'oops'", isCorrect: false },
    ],
    hints: ['A `throw` inside an `async` function rejects the Promise it returns', '`await` on a rejected Promise re-throws the error at the `await` site, catchable by `try/catch`'],
    explanation: 'When an `async` function throws with `throw`, it does not immediately crash the program — the Promise returned by that function is automatically rejected with that error. Since `fail()` is called with `await` inside a `try` block, the rejection is converted back into a synchronous exception at that point, which `catch` can capture normally. Result: `caught: oops`.',
    tags: ['async-await', 'try-catch', 'error-handling', 'output-prediction'],
  },
  {
    id: 'en-js-async-007',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
Promise.resolve(1)
  .then((v) => v + 1)
  .then((v) => {
    throw new Error('fail');
  })
  .catch((e) => 'recovered')
  .then((v) => console.log(v));
\`\`\``,
    options: [
      { id: 'a', text: "Throws 'fail' unhandled", isCorrect: false },
      { id: 'b', text: "'recovered'", isCorrect: true },
      { id: 'c', text: '2', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['A `.catch()` that does not re-throw "recovers" the promise chain, bringing it back to a fulfilled state', "The `.catch()`'s return value becomes the fulfilled value for the next `.then()`"],
    explanation: 'The chain runs: `1` → `+1` → `2`. The next `.then` throws an error, putting the promise into a rejected state. `.catch` intercepts that rejection and **returns** the string `\'recovered\'` (without re-throwing) — this brings the chain back to a fulfilled state, with `\'recovered\'` as the value. The final `.then` receives that value and logs `recovered`.',
    tags: ['Promise', 'chaining', 'catch', 'error-recovery', 'output-prediction'],
  },
  {
    id: 'en-js-async-008',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
Promise.resolve().then(() => {
  console.log('1');
  Promise.resolve().then(() => console.log('2'));
});
Promise.resolve().then(() => console.log('3'));
console.log('4');
\`\`\``,
    options: [
      { id: 'a', text: '4, 1, 2, 3', isCorrect: false },
      { id: 'b', text: '4, 1, 3, 2', isCorrect: true },
      { id: 'c', text: '1, 2, 3, 4', isCorrect: false },
      { id: 'd', text: '4, 3, 1, 2', isCorrect: false },
    ],
    hints: ['A microtask scheduled INSIDE another microtask goes to the END of the current queue, it does not jump ahead'],
    explanation: 'First the synchronous code runs: `4`. The microtask queue already has two callbacks scheduled, in creation order: [callback logging `1`, callback logging `3`]. Processing the first one logs `1` and schedules a NEW callback (logging `2`) — that new callback goes to the end of the queue, after the callback logging `3`. Queue now: [callback `3`, callback `2`]. Processing in order: `3`, then `2`. Final result: 4, 1, 3, 2.',
    tags: ['event-loop', 'microtask', 'Promise', 'output-prediction'],
  },
  {
    id: 'en-js-async-009',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
(async () => {
  console.log('start');
  await new Promise((resolve) => setTimeout(resolve, 0));
  console.log('end');
})();
console.log('outside');
\`\`\``,
    options: [
      { id: 'a', text: 'start, end, outside', isCorrect: false },
      { id: 'b', text: 'start, outside, end', isCorrect: true },
      { id: 'c', text: 'outside, start, end', isCorrect: false },
      { id: 'd', text: 'start, outside', isCorrect: false },
    ],
    hints: ['The async IIFE runs synchronously up to the `await`', 'The `await` here depends on a `setTimeout`, which is a macrotask — slower than the remaining synchronous code'],
    explanation: 'The async IIFE runs immediately and synchronously up to the `await`: it logs `start`. The `await` is waiting on a Promise that only resolves when the `setTimeout` (a macrotask) fires — so execution returns to the outside code, which logs `outside` synchronously. Only after that does the event loop process the `setTimeout` macrotask, resolving the Promise and resuming the async function, which logs `end`.',
    tags: ['async-await', 'IIFE', 'event-loop', 'setTimeout', 'output-prediction'],
  },
  {
    id: 'en-js-async-010',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code eventually log to the console?

\`\`\`javascript
const slow = new Promise((res) => setTimeout(() => res('slow'), 100));
const fast = new Promise((res) => setTimeout(() => res('fast'), 10));
Promise.race([slow, fast]).then(console.log);
\`\`\``,
    options: [
      { id: 'a', text: "'slow'", isCorrect: false },
      { id: 'b', text: "'fast'", isCorrect: true },
      { id: 'c', text: "['slow', 'fast']", isCorrect: false },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['`Promise.race` settles with the result of the FIRST promise in the array to settle'],
    explanation: '`Promise.race` returns a Promise that follows the fate of the first promise in the array to resolve or reject, ignoring all the others after that. Since `fast` resolves in 10ms (faster than `slow`, which takes 100ms), `.then` receives `\'fast\'`.',
    tags: ['Promise.race', 'output-prediction'],
  },
  {
    id: 'en-js-async-011',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function run() {
  const result = await 42;
  console.log(result);
}
run();
console.log('sync');
\`\`\``,
    options: [
      { id: 'a', text: '42, sync', isCorrect: false },
      { id: 'b', text: 'sync, 42', isCorrect: true },
      { id: 'c', text: '42', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError: 42 is not a Promise', isCorrect: false },
    ],
    hints: ['`await` works on any value, not just Promises', 'Even on a non-Promise value, `await` still pauses the function and yields control for at least one microtask tick'],
    explanation: '`await` accepts any value — if it is not a Promise (or thenable), it is automatically wrapped in `Promise.resolve(value)`. This means even `await 42` makes the function pause and hand control back to the caller for one microtask tick, before continuing. That is why `sync` (code outside the async function) is logged before `42` (the function continuation, scheduled as a microtask).',
    tags: ['async-await', 'microtask', 'output-prediction'],
  },
  {
    id: 'en-js-async-012',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function getValue() {
  return 10;
}
getValue().then((v) => console.log(v * 2));
console.log('called');
\`\`\``,
    options: [
      { id: 'a', text: '20, called', isCorrect: false },
      { id: 'b', text: 'called, 20', isCorrect: true },
      { id: 'c', text: '10, called, 20', isCorrect: false },
      { id: 'd', text: 'called', isCorrect: false },
    ],
    hints: ['A `.then()` callback always runs asynchronously, even if the value is already available'],
    explanation: '`async`/`.then()` always defer the callback to run after the current synchronous code, via the microtask queue — no matter how quickly the value is available. That is why `console.log(\'called\')`, which is synchronous, runs first. Only after that does the `.then` callback run, logging `20`.',
    tags: ['async-await', 'Promise.then', 'output-prediction'],
  },
  {
    id: 'en-js-async-013',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
Promise.resolve(Promise.resolve(5)).then((v) => console.log(v));
\`\`\``,
    options: [
      { id: 'a', text: 'Promise { 5 }', isCorrect: false },
      { id: 'b', text: '5', isCorrect: true },
      { id: 'c', text: 'Promise { Promise { 5 } }', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`Promise.resolve()` never creates a "promise of a promise" — nested promises are always automatically flattened'],
    explanation: 'Promises never end up nested in JavaScript: if you resolve a Promise with another Promise (or any thenable), the result is automatically "flattened" — the outer Promise adopts the inner one\'s eventual state and value. `Promise.resolve(Promise.resolve(5))` is equivalent to just `Promise.resolve(5)`, so `.then` receives `5` directly, never a nested Promise object.',
    tags: ['Promise', 'flattening', 'output-prediction'],
  },
  {
    id: 'en-js-async-014',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
Promise.resolve(1)
  .then((v) => Promise.resolve(v + 1))
  .then((v) => console.log(v));
\`\`\``,
    options: [
      { id: 'a', text: 'Promise { 2 }', isCorrect: false },
      { id: 'b', text: '2', isCorrect: true },
      { id: 'c', text: '1', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['When a `.then()` returns a Promise, the chain waits for that Promise to settle before moving to the next `.then()`'],
    explanation: 'When a `.then()` callback returns a Promise (instead of a plain value), the chain automatically "waits" for that Promise to resolve, and passes the resolved value (not the Promise itself) to the next `.then()`. Here, the first `.then` returns `Promise.resolve(2)`; the chain waits, unwraps the value, and the next `.then` receives `2` directly.',
    tags: ['Promise', 'chaining', 'output-prediction'],
  },
  {
    id: 'en-js-async-015',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
Promise.resolve()
  .then(() => {
    throw new Error('boom');
  })
  .then(() => console.log('skipped'))
  .catch((e) => console.log('caught:', e.message));
\`\`\``,
    options: [
      { id: 'a', text: "'skipped'", isCorrect: false },
      { id: 'b', text: "'caught:', 'boom'", isCorrect: true },
      { id: 'c', text: "'skipped' then 'caught: boom'", isCorrect: false },
      { id: 'd', text: 'Throws an unhandled error', isCorrect: false },
    ],
    hints: ['When a Promise becomes rejected, every following `.then()` is skipped until a `.catch()` (or an error handler) is found'],
    explanation: 'When the first `.then` throws an error, the promise becomes rejected. That rejected state "passes through" any `.then()` that only has a success handler (no second argument) — that is why `.then(() => console.log(\'skipped\'))` is completely skipped, never running. The rejection is only handled at the first `.catch()` found in the chain, which logs `caught: boom`.',
    tags: ['Promise', 'chaining', 'catch', 'output-prediction'],
  },
  {
    id: 'en-js-async-016',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function* gen() {
  yield 1;
  yield 2;
}
(async () => {
  for await (const val of gen()) {
    console.log(val);
  }
})();
\`\`\``,
    options: [
      { id: 'a', text: '1, 2', isCorrect: true },
      { id: 'b', text: 'Promise {1}, Promise {2}', isCorrect: false },
      { id: 'c', text: '[1, 2]', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['`for await...of` automatically unwraps every value produced by an async generator', 'Each `yield` of an async generator is internally treated as a resolved Promise'],
    explanation: 'An async generator (`async function*`) produces values that `for await...of` consumes automatically, unwrapping any involved Promise — the iterating code never sees the Promise directly, only the final value. That is why the loop logs `1` and then `2`, exactly like a regular synchronous generator would, just with asynchronous pauses between each value.',
    tags: ['async-generators', 'for-await-of', 'output-prediction'],
  },
  {
    id: 'en-js-async-017',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code eventually log to the console?

\`\`\`javascript
const p1 = Promise.reject('error1');
const p2 = new Promise((res) => setTimeout(() => res('success'), 10));
Promise.any([p1, p2])
  .then(console.log)
  .catch(console.log);
\`\`\``,
    options: [
      { id: 'a', text: "'error1'", isCorrect: false },
      { id: 'b', text: "'success'", isCorrect: true },
      { id: 'c', text: 'AggregateError: All promises were rejected', isCorrect: false },
      { id: 'd', text: "['error1', 'success']", isCorrect: false },
    ],
    hints: ['`Promise.any` ignores individual rejections as long as at least one promise in the array fulfills', 'It only rejects (with an `AggregateError`) if ALL promises reject'],
    explanation: '`Promise.any` resolves with the value of the first promise to fulfill, ignoring individual rejections along the way — it only rejects if *every* promise in the array rejects (in which case, with an `AggregateError`). Here, `p1` rejects immediately, but `Promise.any` keeps waiting; `p2` eventually resolves with `\'success\'`, which is the final value delivered to `.then`.',
    tags: ['Promise.any', 'output-prediction'],
  },
  {
    id: 'en-js-async-018',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
setTimeout(() => console.log('timeout'), 0);
queueMicrotask(() => console.log('microtask'));
console.log('sync');
\`\`\``,
    options: [
      { id: 'a', text: 'sync, timeout, microtask', isCorrect: false },
      { id: 'b', text: 'sync, microtask, timeout', isCorrect: true },
      { id: 'c', text: 'timeout, microtask, sync', isCorrect: false },
      { id: 'd', text: 'microtask, sync, timeout', isCorrect: false },
    ],
    hints: ['`queueMicrotask` schedules directly on the microtask queue, same priority as a Promise `.then()`'],
    explanation: '`queueMicrotask` schedules a callback on the microtask queue, with the same priority as Promise callbacks — and microtasks are always processed before the next macrotask (like `setTimeout`). Order: synchronous code (`sync`), then the microtask (`microtask`), and only then the timer macrotask (`timeout`).',
    tags: ['queueMicrotask', 'event-loop', 'setTimeout', 'output-prediction'],
  },
  {
    id: 'en-js-async-019',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function f() {
  return Promise.reject('fail');
}
f().catch((e) => console.log('caught:', e));
\`\`\``,
    options: [
      { id: 'a', text: "'caught:', 'fail'", isCorrect: true },
      { id: 'b', text: 'Throws an unhandled error', isCorrect: false },
      { id: 'c', text: "Promise { 'fail' }", isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['Returning a rejected Promise from inside an `async` function results in the outer Promise also being rejected (automatic flattening)'],
    explanation: 'When an `async` function returns a Promise, that Promise is "adopted" by the outer Promise the `async` function always returns — including its rejected state. Since `f()` returns `Promise.reject(\'fail\')`, the Promise resulting from `f()` also ends up rejected with `\'fail\'`, caught normally by `.catch`.',
    tags: ['async-await', 'Promise', 'rejection', 'output-prediction'],
  },
  {
    id: 'en-js-async-020',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function run() {
  const value = await Promise.resolve(Promise.resolve('done'));
  console.log(value);
}
run();
\`\`\``,
    options: [
      { id: 'a', text: "Promise { Promise { 'done' } }", isCorrect: false },
      { id: 'b', text: "'done'", isCorrect: true },
      { id: 'c', text: "Promise { 'done' }", isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`await` unwraps any level of nested Promises, not just one level'],
    explanation: '`await` (just like `Promise.resolve`) automatically unwraps nested Promises, no matter how many levels of nesting exist — promises never end up "inside" other promises in the final result. That is why `value` directly receives the string `\'done\'`, not a Promise object.',
    tags: ['async-await', 'Promise', 'flattening', 'output-prediction'],
  },
  {
    id: 'en-js-async-021',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function run() {
  console.log('1');
  await null;
  console.log('2');
  await null;
  console.log('3');
}
run();
console.log('4');
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3, 4', isCorrect: false },
      { id: 'b', text: '1, 4, 2, 3', isCorrect: true },
      { id: 'c', text: '1, 4, 3, 2', isCorrect: false },
      { id: 'd', text: '4, 1, 2, 3', isCorrect: false },
    ],
    hints: ['Each `await` yields control back to the caller for (at least) one microtask tick', "After the outside synchronous code (`4`) finishes, nothing else competes with the function's continuations in the microtask queue"],
    explanation: '`run()` executes synchronously up to the first `await`, logging `1`, and then yields control — that is why `4` (outside the function) is logged next. From there, no more synchronous code competes: the microtask resuming after the first `await` runs, logging `2`, hits the second `await`, yields again — but since the microtask queue is empty (no other synchronous code pending), the final continuation runs right after, logging `3`. Final order: 1, 4, 2, 3.',
    tags: ['async-await', 'event-loop', 'microtask', 'output-prediction'],
  },
  {
    id: 'en-js-async-022',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function run() {
  try {
    throw new Error('err');
  } finally {
    console.log('finally');
  }
}
run().catch((e) => console.log('caught:', e.message));
\`\`\``,
    options: [
      { id: 'a', text: "'caught:', 'err'", isCorrect: false },
      { id: 'b', text: "'finally', then 'caught:', 'err'", isCorrect: true },
      { id: 'c', text: "'caught:', 'err', then 'finally'", isCorrect: false },
      { id: 'd', text: "Just 'finally'", isCorrect: false },
    ],
    hints: ['A `finally` block always runs before the error continues propagating out of the function', 'The rejected Promise only "reaches" the outer `.catch()` after the entire async function finishes processing internally'],
    explanation: '`finally` always runs, regardless of whether the `try` threw or not — and it runs *before* the error continues propagating out of the function. First, `finally` logs `\'finally\'`. Only after that does the `async` function finish executing, and the Promise it returns is rejected with the original error, which the outer `.catch()` catches, logging `caught: err`.',
    tags: ['async-await', 'try-finally', 'error-handling', 'output-prediction'],
  },
  {
    id: 'en-js-async-023',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log('1');
new Promise((resolve) => {
  console.log('2');
  resolve();
});
console.log('3');
\`\`\``,
    options: [
      { id: 'a', text: "'1', '3', '2'", isCorrect: false },
      { id: 'b', text: "'1', '2', '3'", isCorrect: true },
      { id: 'c', text: "'2', '1', '3'", isCorrect: false },
      { id: 'd', text: "'1', '3'", isCorrect: false },
    ],
    hints: ['The executor function passed to `new Promise(...)` runs IMMEDIATELY and synchronously, it is not deferred'],
    explanation: 'A common mistake is assuming everything related to Promises is asynchronous — but the executor function (the callback passed to `new Promise(executor)`) runs immediately, fully synchronously, at the moment the Promise is constructed. Only what comes AFTER (like `.then()` callbacks) is deferred to the microtask queue. That is why the order is simply `1`, `2`, `3`.',
    tags: ['Promise', 'promise-constructor', 'output-prediction'],
  },
  {
    id: 'en-js-async-024',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function f() {
  console.log('inside');
  return 1;
}
console.log('before');
f();
console.log('after');
\`\`\``,
    options: [
      { id: 'a', text: 'before, inside, after', isCorrect: true },
      { id: 'b', text: 'before, after, inside', isCorrect: false },
      { id: 'c', text: 'inside, before, after', isCorrect: false },
      { id: 'd', text: 'before, inside, after, 1', isCorrect: false },
    ],
    hints: ['With no `await` in the body, an async function runs entirely synchronously up to its return'],
    explanation: 'Even though it is `async`, with no `await` inside the body, the function runs entirely synchronously, from start to `return` — the only difference is that the returned value gets automatically wrapped in a Promise. That is why `f()` logs `inside` immediately when called, in synchronous sequence with `before` and `after`. Since nothing consumes the return value (no `await`, no `.then`), `1` never appears in the console.',
    tags: ['async-await', 'output-prediction'],
  },
  {
    id: 'en-js-async-025',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const p1 = Promise.resolve('ok');
const p2 = Promise.reject('fail');
Promise.all([p1, p2])
  .then((values) => console.log('success:', values))
  .catch((err) => console.log('error:', err));
\`\`\``,
    options: [
      { id: 'a', text: "'success:', ['ok', undefined]", isCorrect: false },
      { id: 'b', text: "'error:', 'fail'", isCorrect: true },
      { id: 'c', text: "'success:', ['ok']", isCorrect: false },
      { id: 'd', text: 'Waits for both promises before deciding', isCorrect: false },
    ],
    hints: ['`Promise.all` rejects immediately as soon as ANY promise in the array rejects, without waiting for the others'],
    explanation: '`Promise.all` follows a "fail-fast" strategy: it rejects as soon as the first promise in the array rejects, without waiting for the outcome of the rest (even if they are still pending or would later fulfill). Since `p2` is already rejected with `\'fail\'`, `.catch` fires immediately with that value, and the success `.then` never runs.',
    tags: ['Promise.all', 'fail-fast', 'output-prediction'],
  },
  {
    id: 'en-js-async-026',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const p1 = Promise.resolve('ok');
const p2 = Promise.reject('fail');
Promise.allSettled([p1, p2]).then((results) =>
  console.log(results.map((r) => r.status))
);
\`\`\``,
    options: [
      { id: 'a', text: 'Throws an error, since p2 rejected', isCorrect: false },
      { id: 'b', text: "['fulfilled', 'rejected']", isCorrect: true },
      { id: 'c', text: "['ok', 'fail']", isCorrect: false },
      { id: 'd', text: "['fulfilled']", isCorrect: false },
    ],
    hints: ['`Promise.allSettled` NEVER rejects — it always resolves with the outcome of each promise, success or failure'],
    explanation: 'Unlike `Promise.all`, `Promise.allSettled` waits for every promise to finish (resolved or rejected) and always resolves with an array of objects describing each outcome: `{ status: \'fulfilled\', value }` or `{ status: \'rejected\', reason }`. It never enters a rejected state, even if every promise in the array fails. That is why the mapped result is `[\'fulfilled\', \'rejected\']`.',
    tags: ['Promise.allSettled', 'output-prediction'],
  },
  {
    id: 'en-js-async-027',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code eventually log to the console?

\`\`\`javascript
function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
async function run() {
  const results = [];
  for (const n of [1, 2, 3]) {
    results.push(await delay(10, n));
  }
  console.log(results);
}
run();
\`\`\``,
    options: [
      { id: 'a', text: '[1, 2, 3], after about 10ms', isCorrect: false },
      { id: 'b', text: '[1, 2, 3], after about 30ms', isCorrect: true },
      { id: 'c', text: '[3, 2, 1]', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError because `for` does not support `await`', isCorrect: false },
    ],
    hints: ['`await` inside a regular `for...of` runs each iteration sequentially, waiting for one to finish before starting the next'],
    explanation: '`await` inside a traditional `for...of` runs iterations sequentially, not in parallel: each `delay(10, n)` only starts after the previous `await` has resolved. With 3 iterations of ~10ms each, the total time is the SUM of the delays (~30ms), not the largest individual delay. The final array is `[1, 2, 3]` (order is preserved because it is sequential), but to run in parallel (and take only ~10ms total) you would need `Promise.all(arr.map(n => delay(10, n)))`.',
    tags: ['async-await', 'for-of', 'sequential-vs-parallel', 'output-prediction'],
  },
  {
    id: 'en-js-async-028',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
console.log('1');
Promise.resolve().then(() => console.log('2'));
console.log('3');
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3', isCorrect: false },
      { id: 'b', text: '1, 3, 2', isCorrect: true },
      { id: 'c', text: '2, 1, 3', isCorrect: false },
      { id: 'd', text: '1, 3', isCorrect: false },
    ],
    hints: ['A `.then()` callback NEVER runs synchronously, even when the Promise is already resolved at the time of the call'],
    explanation: 'Even though `Promise.resolve()` is already in a resolved state at the exact moment `.then()` is called, the callback passed to `.then()` is, by spec, always scheduled as a microtask — never run synchronously and immediately. That is why `3` (synchronous) is logged before `2` (scheduled).',
    tags: ['Promise.then', 'microtask', 'output-prediction'],
  },
  {
    id: 'en-js-async-029',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
const thenable = {
  then(resolve) {
    resolve('from thenable');
  },
};
Promise.resolve(thenable).then((v) => console.log(v));
\`\`\``,
    options: [
      { id: 'a', text: '{ then: [Function] }', isCorrect: false },
      { id: 'b', text: "'from thenable'", isCorrect: true },
      { id: 'c', text: 'Promise { thenable }', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError', isCorrect: false },
    ],
    hints: ['`Promise.resolve()` recognizes any object with a `.then()` method as a "thenable" and adopts its value, even if it is not a real Promise'],
    explanation: 'Promises in JavaScript follow the "thenable" concept: any object with a valid `.then()` method is treated as something promise-like, even if it was not created with `new Promise()`. `Promise.resolve(thenable)` detects that `.then()` and adopts the value it eventually delivers via `resolve(...)`. That is why the final result is the string `\'from thenable\'`.',
    tags: ['Promise', 'thenable', 'output-prediction'],
  },
  {
    id: 'en-js-async-030',
    domain: 'javascript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`javascript
async function risky(shouldThrow) {
  if (shouldThrow) throw new Error('sync throw');
  return 'ok';
}
risky(true)
  .then((v) => console.log('resolved:', v))
  .catch((e) => console.log('rejected:', e.message));
\`\`\``,
    options: [
      { id: 'a', text: "Throws an unhandled error, since `throw` inside an async function is not caught by `.catch()`", isCorrect: false },
      { id: 'b', text: "'rejected:', 'sync throw'", isCorrect: true },
      { id: 'c', text: "'resolved:', undefined", isCorrect: false },
      { id: 'd', text: "'resolved:', 'sync throw'", isCorrect: false },
    ],
    hints: ['Inside an `async` function, `throw` and `Promise.reject(...)` have exactly the same observable effect from outside'],
    explanation: 'A synchronous `throw` inside an `async` function body never propagates as a "raw" exception to the caller — it is automatically converted into a rejection of the Promise the function returns. That is why `.catch()` can catch it normally, exactly as it would catch an explicit rejection via `Promise.reject(...)`. Result: `rejected: sync throw`.',
    tags: ['async-await', 'throw', 'error-handling', 'output-prediction'],
  },
  // ─── Output prediction (React) ─────────────────────────────────────────────
  {
    id: 'en-react-pred-001',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code repeatedly log to the console, after clicking the button 5 times?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log(count);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '0, 0, 0, 0, 0...', isCorrect: true },
      { id: 'b', text: '1, 2, 3, 4, 5...', isCorrect: false },
      { id: 'c', text: 'It crashes', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`useEffect` with `[]` runs only once, on mount — its closure captures the variables from THAT render', 'The button correctly shows the current `count` on screen, but the `setInterval` console.log is a different story'],
    explanation: 'Since `useEffect` has `[]` as its dependency array, it runs only once, on mount, creating the `setInterval` closure that captures the `count` that existed at that moment: `0`. Subsequent clicks update the state (and the UI shows `1`, `2`, `3`...), but the `console.log` inside `setInterval` is still the SAME function, created only once, forever stuck reading the original `count = 0` — this is the classic "stale closure".',
    tags: ['useEffect', 'stale-closure', 'setInterval', 'output-prediction'],
  },
  {
    id: 'en-react-pred-002',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `This is a fix for the previous question's bug. What does this code repeatedly log to the console, after clicking the button 3 times?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    const id = setInterval(() => {
      console.log(countRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '0, 0, 0... (still stuck)', isCorrect: false },
      { id: 'b', text: 'The current `count` value at each tick, reflecting the clicks', isCorrect: true },
      { id: 'c', text: 'Throws a TypeError', isCorrect: false },
      { id: 'd', text: '3, 3, 3... (only the final value)', isCorrect: false },
    ],
    hints: ['`countRef.current = count` runs on EVERY render, so the ref always reflects the latest value', 'Reading `countRef.current` inside `setInterval` always fetches the up-to-date value, not the one captured at mount'],
    explanation: 'Unlike the previous question, here `countRef.current = count` runs on every render, keeping the ref always in sync with the latest state. Since `setInterval` reads `countRef.current` (instead of the `count` variable directly), it always sees the updated value at the moment the tick fires, even though the `setInterval` function itself was only created once. This is an idiomatic way to work around stale closures without recreating the effect.',
    tags: ['useEffect', 'useRef', 'stale-closure-fix', 'output-prediction'],
  },
  {
    id: 'en-react-pred-003',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What happens with this code if the user clicks the button repeatedly, in quick succession?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => console.log(count), 1000);
    return () => clearInterval(id);
  }, [count]);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'The console always shows the correct value, and the timer never restarts', isCorrect: false },
      { id: 'b', text: 'The console always shows the correct value, but the 1s timer is canceled and recreated on every click', isCorrect: true },
      { id: 'c', text: 'The console always shows `0`, just like the earlier versions', isCorrect: false },
      { id: 'd', text: 'Throws a "Maximum update depth exceeded" error', isCorrect: false },
    ],
    hints: ['Adding `count` to the dependencies fixes the stale value, but has a side effect', 'Every time a `useEffect` dependency changes, the previous cleanup runs and a new effect is created — recreating the `setInterval` from scratch'],
    explanation: 'Adding `count` to the dependencies fixes the stale closure (the value read will always be correct), but introduces a side effect: every time `count` changes, the `useEffect` tears down the previous `setInterval` (via cleanup) and creates a NEW one, restarting the 1-second countdown from zero. If the user clicks repeatedly within less than 1 second, the timer never actually fires, since it keeps getting canceled and recreated before each tick can happen.',
    tags: ['useEffect', 'dependencies', 'setInterval', 'output-prediction'],
  },
  {
    id: 'en-react-pred-004',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `After ONE click, how many times does 'render' get logged (not counting the initial mount)?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  console.log('render');

  function handleClick() {
    setCount(count + 1);
    setFlag(true);
  }

  return <button onClick={handleClick}>Click</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '2 times (one per setState call)', isCorrect: false },
      { id: 'b', text: '1 time', isCorrect: true },
      { id: 'c', text: '0 times', isCorrect: false },
      { id: 'd', text: 'Depends on the browser', isCorrect: false },
    ],
    hints: ['React groups (batches) multiple `setState` calls made inside the same event handler into a single re-render'],
    explanation: 'React automatically batches every state update triggered within the same event handler into a single re-render — no matter how many different `setState` calls are made. So even though both `setCount` and `setFlag` are called, the component re-renders just ONE time, with both new values already applied.',
    tags: ['batching', 'setState', 'output-prediction'],
  },
  {
    id: 'en-react-pred-005',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `After ONE click, what is the displayed value of \`count\`?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '2', isCorrect: false },
      { id: 'b', text: '1', isCorrect: true },
      { id: 'c', text: '0', isCorrect: false },
      { id: 'd', text: 'Increments indefinitely', isCorrect: false },
    ],
    hints: ['Both `setCount` calls read the SAME `count` variable, captured by this specific render\'s closure'],
    explanation: 'Both calls to `setCount(count + 1)` read the same `count` (the value captured by the current render\'s closure, say `0`). Both compute `0 + 1 = 1` and schedule that same update. React applies the final result, which is `1`, not `2` — this is the classic "lost update" bug from not using the functional form of the setter.',
    tags: ['useState', 'stale-closure', 'batching', 'output-prediction'],
  },
  {
    id: 'en-react-pred-006',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `This is the fix for the previous bug. After ONE click, what is the displayed value of \`count\`?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(c => c + 1);
    setCount(c => c + 1);
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '2', isCorrect: true },
      { id: 'c', text: '0', isCorrect: false },
      { id: 'd', text: 'Undefined behavior', isCorrect: false },
    ],
    hints: ['Each functional update receives the most recent PENDING value, not the value captured by the render\'s closure'],
    explanation: 'Using the functional form (`c => c + 1`), each call receives the most up-to-date state value available at the moment React processes the update queue — including pending updates from the SAME batch. The first call receives `0` and produces `1`; the second call receives that pending `1` and produces `2`. Final result: `2`.',
    tags: ['useState', 'functional-update', 'batching', 'output-prediction'],
  },
  {
    id: 'en-react-pred-007',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `\`App\` re-renders multiple times (e.g., by clicking a button that changes an unrelated piece of state). What happens to the 'computed' log on every re-render of \`App\`?

\`\`\`jsx
function List({ items }) {
  const sorted = useMemo(() => [...items].sort(), [items]);
  console.log('computed');
  return null;
}
function App() {
  const [n, setN] = useState(0);
  return (
    <>
      <List items={[3, 1, 2]} />
      <button onClick={() => setN(n + 1)}>{n}</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: "'computed' is never logged again after the first render, since the items array never changes value", isCorrect: false },
      { id: 'b', text: "'computed' is logged on every re-render, even with the same values", isCorrect: true },
      { id: 'c', text: 'Throws a missing-dependency error', isCorrect: false },
      { id: 'd', text: "'computed' is logged only once, even without `useMemo`", isCorrect: false },
    ],
    hints: ['`[3, 1, 2]` is an array LITERAL, recreated as a brand-new reference on every render of `App`', '`useMemo` compares dependencies by reference (`Object.is`), not by deep value'],
    explanation: 'The array `[3, 1, 2]` is recreated as a new object in memory on every render of `App` — even though the VALUES are identical, the REFERENCE is different. `useMemo` compares dependencies using `Object.is` (referential equality), so it always sees `items` as "different" from the previous one and recomputes `sorted`, logging `computed` on every re-render. The `useMemo` here is not delivering its intended optimization.',
    tags: ['useMemo', 'dependencies', 'reference', 'output-prediction'],
  },
  {
    id: 'en-react-pred-008',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `Clicking the "Parent" button — does the 'Child render' log appear again, even though \`Child\` is wrapped in \`React.memo\`?

\`\`\`jsx
const Child = React.memo(function Child({ onClick }) {
  console.log('Child render');
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(c => c + 1);
  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(c => c + 1)}>Parent</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'No, `React.memo` prevents any re-render of `Child`', isCorrect: false },
      { id: 'b', text: 'Yes, because `handleClick` is a brand-new function on every render of `Parent`', isCorrect: true },
      { id: 'c', text: 'No, because `onClick`\'s behavior never changes', isCorrect: false },
      { id: 'd', text: 'Yes, but only the first time', isCorrect: false },
    ],
    hints: ['`React.memo` does a SHALLOW comparison of props', '`const handleClick = () => ...` creates a brand-new function on every `Parent` call, with a different reference than before'],
    explanation: '`React.memo` only skips a re-render when ALL props are referentially equal to the previous render\'s (shallow comparison). `handleClick` is declared inside `Parent`\'s body, so a new function (with a new reference) is created on EVERY render of `Parent` — even though it does exactly the same thing. Since `Child`\'s `onClick` prop changes reference every time, `React.memo`\'s comparison fails and `Child` re-renders anyway.',
    tags: ['React.memo', 'useCallback', 'reference', 'output-prediction'],
  },
  {
    id: 'en-react-pred-009',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `This is the fix for the previous bug, using \`useCallback\`. Clicking the "Parent" button — does 'Child render' log again?

\`\`\`jsx
const Child = React.memo(function Child({ onClick }) {
  console.log('Child render');
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount(c => c + 1), []);
  return (
    <>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(c => c + 1)}>Parent</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Yes, same as the previous version', isCorrect: false },
      { id: 'b', text: 'No, `Child` no longer re-renders', isCorrect: true },
      { id: 'c', text: 'Throws a circular reference error', isCorrect: false },
      { id: 'd', text: 'Depends on whether React DevTools is open', isCorrect: false },
    ],
    hints: ['`useCallback` with an empty dependency array memoizes the function, returning the SAME reference on every render'],
    explanation: '`useCallback(fn, [])` guarantees the same function reference is returned on every subsequent render (since there are no dependencies to invalidate the cache). Since `Child`\'s `onClick` prop now stays referentially stable, `React.memo`\'s shallow comparison passes, and `Child` no longer re-renders when only `Parent`\'s state changes.',
    tags: ['useCallback', 'React.memo', 'output-prediction'],
  },
  {
    id: 'en-react-pred-010',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `After clicking the "Render" button twice, what values were logged to the console (including the mount)?

\`\`\`jsx
function Timer() {
  const renders = useRef(0);
  renders.current += 1;
  console.log(renders.current);
  const [, forceUpdate] = useState(0);
  return <button onClick={() => forceUpdate(n => n + 1)}>Render</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1, 1, 1', isCorrect: false },
      { id: 'b', text: '1, 2, 3', isCorrect: true },
      { id: 'c', text: '0, 1, 2', isCorrect: false },
      { id: 'd', text: 'Just 1 (refs don\'t change)', isCorrect: false },
    ],
    hints: ['Mutating a ref does not, by itself, cause a re-render — but the component DOES need to re-render for another reason (here, `forceUpdate`)', 'Every time the component renders, the line `renders.current += 1` runs again'],
    explanation: 'Mutating `renders.current` directly does NOT trigger a re-render on its own — but here `forceUpdate` (a dummy state) is what causes a re-render on every click. On each render (mount + 2 clicks = 3 renders total), the line `renders.current += 1` executes, incrementing the ref\'s persistent counter and logging its new value: `1`, then `2`, then `3`.',
    tags: ['useRef', 'forceUpdate', 'output-prediction'],
  },
  {
    id: 'en-react-pred-011',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `After clicking the button 3 times (4 renders total), how many times is 'computing initial state' logged?

\`\`\`jsx
function expensiveInit() {
  console.log('computing initial state');
  return 0;
}
function App() {
  const [count, setCount] = useState(expensiveInit());
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1 time (only on mount)', isCorrect: false },
      { id: 'b', text: '4 times (every render)', isCorrect: true },
      { id: 'c', text: '0 times', isCorrect: false },
      { id: 'd', text: '3 times (not counting the mount)', isCorrect: false },
    ],
    hints: ['`useState(expensiveInit())` CALLS the function immediately, on every render — React only uses the result on the first render, but the call itself always happens', 'The "lazy initial state" optimization only kicks in when you pass the function reference itself, without parentheses: `useState(expensiveInit)`'],
    explanation: 'Here `expensiveInit()` is invoked directly, with parentheses — meaning the function runs on EVERY render, even though React only uses the returned value to initialize state the first time. This is a common mistake: `useState`\'s "lazy initial state" optimization only exists when you pass the FUNCTION itself (without calling it), letting React decide to invoke it only once.',
    tags: ['useState', 'lazy-initial-state', 'output-prediction'],
  },
  {
    id: 'en-react-pred-012',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `This is the fix for the previous bug. After clicking the button 3 times, how many times is 'computing initial state' logged?

\`\`\`jsx
function expensiveInit() {
  console.log('computing initial state');
  return 0;
}
function App() {
  const [count, setCount] = useState(expensiveInit);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '4 times', isCorrect: false },
      { id: 'b', text: '1 time', isCorrect: true },
      { id: 'c', text: '3 times', isCorrect: false },
      { id: 'd', text: '0 times', isCorrect: false },
    ],
    hints: ['Passing the function reference (without parentheses) activates React\'s lazy initialization optimization'],
    explanation: 'When you pass the FUNCTION itself to `useState` (without calling it), React only invokes it once, during the initial render, to compute the starting state — on subsequent renders, the state already exists and the initializer is completely skipped. That\'s why `computing initial state` only appears once, regardless of how many clicks happen afterward.',
    tags: ['useState', 'lazy-initial-state', 'output-prediction'],
  },
  {
    id: 'en-react-pred-013',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `This component first renders with \`label="A"\`, then with \`label="B"\`. What is the exact log order?

\`\`\`jsx
function Timer({ label }) {
  useEffect(() => {
    console.log('effect:', label);
    return () => console.log('cleanup:', label);
  }, [label]);
  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: "'effect: A', 'effect: B', 'cleanup: A'", isCorrect: false },
      { id: 'b', text: "'effect: A', 'cleanup: A', 'effect: B'", isCorrect: true },
      { id: 'c', text: "'cleanup: A', 'effect: A', 'effect: B'", isCorrect: false },
      { id: 'd', text: "'effect: A', 'effect: B'", isCorrect: false },
    ],
    hints: ['Before running a new effect (triggered by a dependency change), React always runs the PREVIOUS effect\'s cleanup first'],
    explanation: 'When a `useEffect` dependency changes (`label` from `\'A\'` to `\'B\'`), React always runs the PREVIOUS effect\'s cleanup function before running the new effect. Sequence: `effect: A` (on mount) → `cleanup: A` (before reacting to the change) → `effect: B` (the new effect, with the updated label).',
    tags: ['useEffect', 'cleanup', 'output-prediction'],
  },
  {
    id: 'en-react-pred-014',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `After clicking the button 3 times, how many times does 'mounted, count is' appear in the console, and with what value?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('mounted, count is', count);
  }, []);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '4 times, with values 0, 1, 2, 3', isCorrect: false },
      { id: 'b', text: '1 time, always with value 0', isCorrect: true },
      { id: 'c', text: '1 time, with value 3 (the latest)', isCorrect: false },
      { id: 'd', text: '3 times, with values 1, 2, 3', isCorrect: false },
    ],
    hints: ['`[]` as the dependency array makes the effect run only once, on mount, forever', 'The effect\'s closure is stuck on the `count` that existed at mount time'],
    explanation: 'With `[]` as the dependency array, the effect runs exactly once, on mount, and never again — no matter how many times the state changes afterward. That single execution\'s closure captured `count = 0` (the value at mount time), so the log stays frozen at `mounted, count is 0` forever, even though the UI shows different values after clicks.',
    tags: ['useEffect', 'stale-closure', 'output-prediction'],
  },
  {
    id: 'en-react-pred-015',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `With \`items = []\`, what shows up on screen?

\`\`\`jsx
function Cart({ items }) {
  return (
    <div>
      {items.length && <p>{items.length} items</p>}
    </div>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Nothing is rendered inside the div', isCorrect: false },
      { id: 'b', text: 'The number "0" appears by itself on screen', isCorrect: true },
      { id: 'c', text: 'A rendering error', isCorrect: false },
      { id: 'd', text: 'The string "false"', isCorrect: false },
    ],
    hints: ['`items.length` when empty is the number `0`, and `0 && <p>...</p>` short-circuits and evaluates to `0` (not `false`)', 'React does not render `false`, `null`, `undefined`, or `true` — but it DOES render the number `0` normally'],
    explanation: 'This is a very common bug. With `items.length === 0`, the expression `items.length && <p>...</p>` short-circuits on the `&&` operator and returns `0` itself (not `false`). React has a specific short list of values it renders as "nothing" (`false`, `null`, `undefined`, `true`), but `0` is NOT on that list — React renders it as regular text. Result: a stray "0" shows up on screen whenever the cart is empty. The common fix is `items.length > 0 && ...` or `Boolean(items.length) && ...`.',
    tags: ['conditional-rendering', 'falsy-values', 'jsx', 'output-prediction'],
  },
  {
    id: 'en-react-pred-016',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `After ONE click, how many times is 'reducer called' logged, and what is the final value of \`state.count\`?

\`\`\`jsx
function reducer(state, action) {
  console.log('reducer called, action:', action.type);
  if (action.type === 'inc') return { count: state.count + 1 };
  return state;
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function handleClick() {
    dispatch({ type: 'inc' });
    dispatch({ type: 'inc' });
  }
  return <button onClick={handleClick}>{state.count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1 time, count becomes 1 (same bug as useState)', isCorrect: false },
      { id: 'b', text: '2 times, count becomes 2', isCorrect: true },
      { id: 'c', text: '2 times, count becomes 1', isCorrect: false },
      { id: 'd', text: '0 times, since dispatch is asynchronous', isCorrect: false },
    ],
    hints: ['Every `dispatch` call ALWAYS calls the reducer, even when multiple dispatches happen in the same handler', 'Unlike `setCount(count + 1)`, the reducer receives the most current `state` on every call, not a closure stuck on the render'],
    explanation: 'Each `dispatch` call invokes the `reducer` (which is why the log appears twice). Unlike the classic bug of calling `setCount(count + 1)` twice (which loses an update by using a closure stuck on the render\'s value), the `reducer` always receives the most recent `state` as its first argument, processing updates in sequence: the first call receives `{ count: 0 }` and returns `{ count: 1 }`; the second call receives that already-updated `{ count: 1 }` and returns `{ count: 2 }`.',
    tags: ['useReducer', 'output-prediction'],
  },
  {
    id: 'en-react-pred-017',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What is logged to the console?

\`\`\`jsx
const ThemeContext = createContext('light');

function Display() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return null;
}

function App() {
  return <Display />;
}
\`\`\``,
    options: [
      { id: 'a', text: 'undefined', isCorrect: false },
      { id: 'b', text: "'light'", isCorrect: true },
      { id: 'c', text: 'Throws an error: no Provider found', isCorrect: false },
      { id: 'd', text: 'null', isCorrect: false },
    ],
    hints: ['The value passed to `createContext(defaultValue)` is used whenever there is no matching `Provider` above in the tree'],
    explanation: '`Display` calls `useContext(ThemeContext)` without any `<ThemeContext.Provider>` existing between it and the root of the tree. In that case, React uses the default value provided when creating the context — `createContext(\'light\')` — without throwing any error. That\'s why the log shows `\'light\'`.',
    tags: ['Context', 'useContext', 'default-value', 'output-prediction'],
  },
  {
    id: 'en-react-pred-018',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: `\`App\` first renders with \`value="A"\`, then re-renders with \`value="B"\` (no click yet). AFTER that, the user clicks the button. What is logged?

\`\`\`jsx
function useLogger(value) {
  const log = useCallback(() => {
    console.log(value);
  }, []); // missing dependency: value
  return log;
}

function App({ value }) {
  const log = useLogger(value);
  return <button onClick={log}>Log</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: "'B' (the latest value)", isCorrect: false },
      { id: 'b', text: "'A' (the value from the first render)", isCorrect: true },
      { id: 'c', text: "'A' then 'B'", isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`useCallback` with `[]` memoizes the function on the FIRST render and never recreates it, even if `value` changes later', 'The returned `log` function remains forever the original closure, stuck on the `value` from the first render'],
    explanation: 'Since `useCallback` has an empty dependency array (`[]`), it memoizes the `log` function the first time the hook is called and NEVER recreates it on subsequent renders — even though `value` changes from `\'A\'` to `\'B\'`. The returned function remains exactly the same original closure, forever stuck on the `value` that existed at the first render. So clicking the button after the prop change still logs `\'A\'`.',
    tags: ['useCallback', 'stale-closure', 'custom-hook', 'output-prediction'],
  },
  {
    id: 'en-react-pred-019',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `Clicking the button — does the 'Box render' log appear again, even though \`Box\` is wrapped in \`React.memo\`?

\`\`\`jsx
const Box = React.memo(function Box({ children }) {
  console.log('Box render');
  return <div>{children}</div>;
});

function App() {
  const [n, setN] = useState(0);
  return (
    <>
      <Box><span>Static</span></Box>
      <button onClick={() => setN(n + 1)}>{n}</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'No, the `children` content never changes', isCorrect: false },
      { id: 'b', text: 'Yes, because `<span>Static</span>` is a brand-new element (object) on every render of `App`', isCorrect: true },
      { id: 'c', text: 'No, static JSX is automatically memoized by React', isCorrect: false },
      { id: 'd', text: 'Yes, but only if `Box` were not wrapped in `React.memo`', isCorrect: false },
    ],
    hints: ['JSX always creates a NEW React element object every time the surrounding code runs, even if the markup looks identical', '`children` is just another prop — and `React.memo` compares props by reference'],
    explanation: 'Every bit of JSX (`<span>Static</span>`) compiles to a function call (`React.createElement` or equivalent) that returns a brand-new object every time `App` renders — even if the markup is visually identical. This new object is passed as the `children` prop to `Box`. Since `React.memo` compares props with referential (shallow) equality, it detects that `children` "changed" (it\'s a different object) and lets `Box` re-render.',
    tags: ['React.memo', 'children', 'reference', 'output-prediction'],
  },
  {
    id: 'en-react-pred-020',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `The user clicks the button several times (it always calls \`setCount(0)\`, the same as the initial value). What happens to the 'render' log after the FIRST click?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  console.log('render');
  return <button onClick={() => setCount(0)}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: "'render' is logged again on every click, even with no visual change", isCorrect: false },
      { id: 'b', text: "'render' is NOT logged again on any subsequent click", isCorrect: true },
      { id: 'c', text: 'Throws an invalid-state error', isCorrect: false },
      { id: 'd', text: "'render' appears only the first time you click, then never reacts to clicks again", isCorrect: false },
    ],
    hints: ['React compares the new state value with the current one using `Object.is`', 'If the new value equals the current one, React bails out of the re-render entirely, without even running the component body again'],
    explanation: 'Every call to `setCount(0)` is trying to set the state to the SAME value it already has (`0`). React detects this equality using `Object.is` and decides to skip the re-render entirely — not even the `App` function body (and therefore `console.log(\'render\')`) runs again. This "bail out" behavior is an internal React optimization, regardless of how many times the click happens.',
    tags: ['useState', 'bail-out', 'Object.is', 'output-prediction'],
  },
  {
    id: 'en-react-pred-021',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `With \`count\` starting at 0, the user clicks ONCE. After 1 second, what is logged?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    setTimeout(() => {
      console.log('count is', count);
    }, 1000);
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: "'count is 1'", isCorrect: false },
      { id: 'b', text: "'count is 0'", isCorrect: true },
      { id: 'c', text: 'Throws an invalid-closure error', isCorrect: false },
      { id: 'd', text: "'count is undefined'", isCorrect: false },
    ],
    hints: ['The `setTimeout` callback is a closure that captures `count` from the MOMENT `handleClick` was called', 'The re-render triggered by `setCount` creates a NEW instance of `handleClick` with the updated `count` — but the already-scheduled `setTimeout` still uses the old closure'],
    explanation: 'The callback passed to `setTimeout` is created inside `handleClick`, closing over the `count` that existed at THAT specific click (`0`). Even though `setCount(count + 1)` triggers a re-render (and the UI starts showing `1`), the already-scheduled `setTimeout` callback is unaffected by that re-render — it remains the same function, forever stuck on the `count = 0` from its original closure. So after 1 second, `count is 0` is still what gets logged.',
    tags: ['stale-closure', 'setTimeout', 'event-handler', 'output-prediction'],
  },
  {
    id: 'en-react-pred-022',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `On mount, in what order do these three logs appear?

\`\`\`jsx
function App() {
  useEffect(() => console.log('useEffect'));
  useLayoutEffect(() => console.log('useLayoutEffect'));
  console.log('render');
  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: "'render', 'useEffect', 'useLayoutEffect'", isCorrect: false },
      { id: 'b', text: "'render', 'useLayoutEffect', 'useEffect'", isCorrect: true },
      { id: 'c', text: "'useLayoutEffect', 'render', 'useEffect'", isCorrect: false },
      { id: 'd', text: 'The order between the two hooks is undefined', isCorrect: false },
    ],
    hints: ['The component body (including `console.log(\'render\')`) always runs first, during rendering', '`useLayoutEffect` is ALWAYS run synchronously before the browser paints; `useEffect` runs asynchronously, after the paint'],
    explanation: '`render` always happens first, since it\'s the function body running during rendering. Between the two effect hooks, `useLayoutEffect` is guaranteed to run synchronously, IMMEDIATELY after the DOM is updated but BEFORE the browser paints the screen — so it always fires before `useEffect`, which is deferred (as a "passive" effect) until after the paint.',
    tags: ['useEffect', 'useLayoutEffect', 'execution-order', 'output-prediction'],
  },
  {
    id: 'en-react-pred-023',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `On mount, in what order do these logs appear?

\`\`\`jsx
function Child() {
  useEffect(() => console.log('child effect'));
  return null;
}
function Parent() {
  useEffect(() => console.log('parent effect'));
  return <Child />;
}
\`\`\``,
    options: [
      { id: 'a', text: "'parent effect', 'child effect'", isCorrect: false },
      { id: 'b', text: "'child effect', 'parent effect'", isCorrect: true },
      { id: 'c', text: 'The order is random between runs', isCorrect: false },
      { id: 'd', text: 'Only the outermost component\'s effect runs', isCorrect: false },
    ],
    hints: ['React mounts a child component and runs ALL of its own effects completely before running the parent\'s effect'],
    explanation: 'React mounts the component tree "bottom-up" with respect to effects: a child component fully finishes mounting and running ALL of its own effects first, and only after that does the parent run its own. This guarantees that, by the time the parent\'s effect runs, the entire child tree is already fully mounted and stable. That\'s why `child effect` appears before `parent effect`.',
    tags: ['useEffect', 'mount-order', 'output-prediction'],
  },
  {
    id: 'en-react-pred-024',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `The user clicks the FIRST \`Counter\`'s button 3 times and the SECOND one's button once. What does each one display?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
function App() {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Both show 4 (the sum of all clicks)', isCorrect: false },
      { id: 'b', text: 'The first shows 3, the second shows 1', isCorrect: true },
      { id: 'c', text: 'Both show 3 (the last click syncs both)', isCorrect: false },
      { id: 'd', text: 'Throws an error: duplicate hooks', isCorrect: false },
    ],
    hints: ['Each `<Counter />` element is a completely independent instance, with its own isolated state'],
    explanation: 'Each rendered `<Counter />` is a separate instance of the component, and React keeps `useState` state completely isolated per instance — even though it\'s the same component code. Clicks on one `Counter` never affect another `Counter`\'s state. That\'s why the first ends at `3` and the second at `1`, fully independently.',
    tags: ['useState', 'component-instances', 'output-prediction'],
  },
  {
    id: 'en-react-pred-025',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What happens when this component mounts?

\`\`\`jsx
function App() {
  const [data, setData] = useState({ count: 0 });
  useEffect(() => {
    setData({ count: data.count + 1 });
  }, [data]);
  console.log('render');
  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: "Renders and logs 'render' once, normally", isCorrect: false },
      { id: 'b', text: 'An infinite loop of renders and effects', isCorrect: true },
      { id: 'c', text: 'Throws a syntax error', isCorrect: false },
      { id: 'd', text: 'Renders twice and then stabilizes', isCorrect: false },
    ],
    hints: ['`{ count: 0 }` is a brand-new object on every render — `data` is never `Object.is`-equal to the previous render\'s `data`', 'The effect always sees the `data` dependency as "different", so it always runs, and it itself calls `setData`, causing another render, forever'],
    explanation: 'This is a classic infinite loop: on every render, `data` is a freshly created object (even if the `count` inside it eventually repeats, the object\'s REFERENCE is always new). `useEffect` depends on `data` by reference, so it ALWAYS considers the dependency "changed" and runs again — and inside it, `setData` creates yet another new object, triggering another render, which triggers another effect, forever.',
    tags: ['useEffect', 'infinite-loop', 'dependencies', 'output-prediction'],
  },
  {
    id: 'en-react-pred-026',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `The user clicks "Hide". What is logged to the console?

\`\`\`jsx
function Message() {
  useEffect(() => {
    console.log('mount');
    return () => console.log('unmount');
  }, []);
  return <p>Hi</p>;
}
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <Message />}
      <button onClick={() => setShow(false)}>Hide</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: "Nothing — 'unmount' would only log if the page were reloaded", isCorrect: false },
      { id: 'b', text: "'unmount'", isCorrect: true },
      { id: 'c', text: "'mount' again", isCorrect: false },
      { id: 'd', text: 'An error, since `Message` is still referenced in the JSX', isCorrect: false },
    ],
    hints: ['When a component stops being rendered (leaves the tree), React runs its `useEffect`\'s cleanup function before discarding it'],
    explanation: 'Clicking "Hide" sets `show` to `false`, and `{show && <Message />}` stops rendering `<Message />` — the component is unmounted. Before discarding it completely, React runs the cleanup function returned by `useEffect`, logging `unmount`. This holds even with `[]` as the dependency array: cleanup runs when the component unmounts, not only when dependencies change.',
    tags: ['useEffect', 'cleanup', 'unmount', 'conditional-rendering', 'output-prediction'],
  },
  {
    id: 'en-react-pred-027',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `With \`count\` starting at 0, the user clicks ONCE. What is logged to the console (by the \`console.log\` inside \`handleClick\`, not what appears on screen)?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '0', isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'Depends on how fast React re-renders', isCorrect: false },
    ],
    hints: ['Calling `setCount` does NOT immediately update the `count` variable within the same handler call — the update only shows up on a NEXT render'],
    explanation: 'One of the most common React misconceptions: `setCount` is not a synchronous assignment, so `count` read right after, STILL INSIDE the same `handleClick`, remains the value captured by this render\'s closure (`0`). The state update only takes effect on the component\'s next render, when a new instance of `handleClick` (with a new `count` in its closure) gets created.',
    tags: ['useState', 'stale-closure', 'output-prediction'],
  },
  {
    id: 'en-react-pred-028',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `The button is clicked 3 times in a row, quickly. What is logged on each click?

\`\`\`jsx
function Counter() {
  let count = 0;
  function handleClick() {
    count = count + 1;
    console.log(count);
  }
  return <button onClick={handleClick}>Click</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1, 2, 3', isCorrect: false },
      { id: 'b', text: '1, 1, 1', isCorrect: true },
      { id: 'c', text: '0, 1, 2', isCorrect: false },
      { id: 'd', text: 'Throws an error: `count` is implicitly `const`', isCorrect: false },
    ],
    hints: ['Since nothing here triggers a re-render, `Counter`\'s body never runs again', 'But `handleClick` is recreated from scratch EVERY TIME the component renders (and here it only rendered once — on mount)'],
    explanation: 'This component never uses `useState`, so `count` is just a plain local variable, reset to `0` every time `Counter` runs as a function. Since nothing here calls a state setter, the component NEVER re-renders after the initial mount — `handleClick` remains the SAME closure, closing over the SAME `count` variable (which is not reset between clicks, since the function isn\'t recreated). On each click, `count = count + 1` increments that persistent closure variable: `1`, then `2`, then `3`... Note: since `handleClick` doesn\'t change between clicks (no re-render happens), the variable genuinely accumulates.',
    tags: ['let-vs-useState', 'closures', 'output-prediction'],
  },
  {
    id: 'en-react-pred-029',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `\`App\` re-renders (e.g., from clicking the button), but the \`id\` prop stays the SAME value. Does the effect run again?

\`\`\`jsx
function App({ id }) {
  useEffect(() => {
    console.log('fetching for', id);
  }, [id]);
  const [, forceRender] = useState(0);
  return <button onClick={() => forceRender(n => n + 1)}>{id}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Yes, every re-render triggers the effect again', isCorrect: false },
      { id: 'b', text: 'No, the effect only runs when `id` actually changes value', isCorrect: true },
      { id: 'c', text: 'Yes, but only starting from the second click', isCorrect: false },
      { id: 'd', text: 'Throws an inconsistent-dependency error', isCorrect: false },
    ],
    hints: ['`useEffect` compares each item in the dependency array against the previous render\'s value, and only re-runs if SOMETHING changed'],
    explanation: 'The `useEffect` only runs again when at least one dependency in the array actually changes value (compared via `Object.is`) between renders. Here, `forceRender` causes `App` to re-render, but `id` stays exactly the same value — so the effect does not run again. Re-rendering a component does not, by itself, mean re-running all of its effects.',
    tags: ['useEffect', 'dependencies', 'output-prediction'],
  },
  {
    id: 'en-react-pred-030',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `Rendering with \`items = ['a', 'b', 'c']\` (no \`key\` prop), what is shown on screen?

\`\`\`jsx
function List({ items }) {
  return (
    <ul>
      {items.map((item) => <li>{item}</li>)}
    </ul>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Nothing is rendered, since the `key` prop is missing', isCorrect: false },
      { id: 'b', text: 'All three items render normally, in the correct order', isCorrect: true },
      { id: 'c', text: 'Throws a fatal rendering error', isCorrect: false },
      { id: 'd', text: 'Only the first item is rendered', isCorrect: false },
    ],
    hints: ['Missing `key` only produces a console WARNING (not an error), and does not prevent the initial render', 'The real problem with skipping `key` shows up in FUTURE reconciliations (reordering, inserting, removing items), not in the first render'],
    explanation: 'The `key` prop helps React identify which list items changed, were added, or removed between renders — but its absence only produces a console warning, without preventing rendering. On the first render (or in lists that are never reordered/filtered), the visual result is identical with or without `key`. The real problems with skipping `key` show up in future reconciliations: component state can "leak" into the wrong item when the list gets reordered.',
    tags: ['key-prop', 'lists', 'reconciliation', 'output-prediction'],
  },
  {
    id: 'en-react-pred-031',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `In React 18+, the user clicks once anywhere on the page. How many times is 'render' logged (not counting the mount)?

\`\`\`jsx
function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  console.log('render');

  useEffect(() => {
    function handler() {
      setA(x => x + 1);
      setB(x => x + 1);
    }
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: '2 times, one per `setState` call', isCorrect: false },
      { id: 'b', text: '1 time', isCorrect: true },
      { id: 'c', text: "0 times, native listeners don't trigger re-renders", isCorrect: false },
      { id: 'd', text: 'Depends on the browser', isCorrect: false },
    ],
    hints: ['Since React 18, "automatic batching" applies to ALL state updates, not just ones triggered by React\'s own synthetic event handlers', 'Before React 18, updates inside native listeners (`addEventListener`), promises, or timeouts were NOT batched — each one caused its own re-render'],
    explanation: 'Starting with React 18, automatic batching applies to ANY state update, regardless of where it happens — including native DOM event listeners (`addEventListener`), Promise callbacks, and `setTimeout`. Before that (React 17), only updates inside React\'s own synthetic handlers were batched; outside of them, each `setState` caused a separate re-render. Here, even with `setA` and `setB` inside a native listener, both get batched into a single re-render.',
    tags: ['automatic-batching', 'react-18', 'addEventListener', 'output-prediction'],
  },
  {
    id: 'en-react-pred-032',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `After clicking 3 times, what appears as the BUTTON TEXT on screen (not in the console)?

\`\`\`jsx
function App() {
  const countRef = useRef(0);
  function handleClick() {
    countRef.current += 1;
    console.log(countRef.current);
  }
  return <button onClick={handleClick}>{countRef.current}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '"3" (follows the clicks)', isCorrect: false },
      { id: 'b', text: '"0" (never updates visually)', isCorrect: true },
      { id: 'c', text: '"1", then "2", then "3" (updates on every click)', isCorrect: false },
      { id: 'd', text: 'Throws an error reading a ref during render', isCorrect: false },
    ],
    hints: ['Mutating a ref\'s `.current` NEVER triggers a re-render by itself', 'The `console.log` shows the correct value (1, 2, 3), but the SCREEN is not updated, since nothing triggers a new render'],
    explanation: 'This contrasts with the `useRef` + `forceUpdate` question earlier: here there is NO state (`useState`) at all and nothing triggers a re-render. `countRef.current += 1` genuinely increments the ref\'s internal value (and `console.log` confirms it, showing `1`, `2`, `3`), but since mutating a ref does not cause a re-render, the JSX `{countRef.current}` is never re-evaluated on screen — the button text stays frozen at `"0"` forever, even though the ref\'s actual value has changed.',
    tags: ['useRef', 'no-re-render', 'output-prediction'],
  },
  {
    id: 'en-react-pred-033',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `After clicking the button 3 times, how many times does 'effect ran' appear in total (including the mount)?

\`\`\`jsx
function App() {
  const [n, setN] = useState(0);
  function getValue() {
    return 5;
  }
  useEffect(() => {
    console.log('effect ran');
  }, [getValue]);
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1 time (only the mount)', isCorrect: false },
      { id: 'b', text: '4 times', isCorrect: true },
      { id: 'c', text: '3 times (not counting the mount)', isCorrect: false },
      { id: 'd', text: 'Throws an invalid-dependency error', isCorrect: false },
    ],
    hints: ['`function getValue() {...}` declared inside the component is recreated (new reference) on every render', 'Even though `getValue` always returns `5` and never "changes behavior", `useEffect` only compares REFERENCES, not what the function does'],
    explanation: 'The `getValue` function is redeclared from scratch on every render of `App`, getting a new reference even though its behavior never changes. Since `useEffect` uses referential comparison (`Object.is`) on its dependencies, it always sees `getValue` as "different" from before and runs again: once on mount, and once more on each of the 3 clicks — totaling 4 runs.',
    tags: ['useEffect', 'dependencies', 'reference', 'output-prediction'],
  },
  {
    id: 'en-react-pred-034',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What is shown on screen after clicking the button?

\`\`\`jsx
function Form() {
  const [user, setUser] = useState({ name: 'Ana', age: 25 });
  function updateName() {
    setUser({ name: 'Bia' });
  }
  return <button onClick={updateName}>{JSON.stringify(user)}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '{"name":"Bia","age":25}', isCorrect: false },
      { id: 'b', text: '{"name":"Bia"}', isCorrect: true },
      { id: 'c', text: '{"name":"Ana","age":25}', isCorrect: false },
      { id: 'd', text: 'Throws TypeError: missing `age` property', isCorrect: false },
    ],
    hints: ['Unlike `this.setState` in class components, the `useState` setter does NOT automatically merge objects', 'The setter REPLACES the previous state entirely with the new value'],
    explanation: "An important difference between `useState` and class components' `this.setState`: `this.setState` does an automatic shallow merge, but the `useState` setter simply REPLACES the previous state value with the new one, with no merging at all. Since `setUser({ name: 'Bia' })` passes an object without `age`, the `age` property is completely lost. The correct approach is to spread the previous state: `setUser(prev => ({ ...prev, name: 'Bia' }))`.",
    tags: ['useState', 'object-state', 'merge', 'output-prediction'],
  },
  {
    id: 'en-react-pred-035',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `This is the fix for the previous bug. What is shown on screen after clicking the button?

\`\`\`jsx
function Form() {
  const [user, setUser] = useState({ name: 'Ana', age: 25 });
  function updateName() {
    setUser(prev => ({ ...prev, name: 'Bia' }));
  }
  return <button onClick={updateName}>{JSON.stringify(user)}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '{"name":"Bia"}', isCorrect: false },
      { id: 'b', text: '{"name":"Bia","age":25}', isCorrect: true },
      { id: 'c', text: '{"name":"Ana","age":25}', isCorrect: false },
      { id: 'd', text: 'Throws an invalid-spread error', isCorrect: false },
    ],
    hints: ['`{ ...prev, name: \'Bia\' }` copies all existing properties and only overwrites `name`'],
    explanation: 'By spreading the previous state (`...prev`) before overwriting only the desired field, every other property (like `age: 25`) is preserved in the new object. This is the idiomatic pattern for simulating a "partial merge" of object state with `useState`, since React does not do that automatically.',
    tags: ['useState', 'object-state', 'spread', 'output-prediction'],
  },
  {
    id: 'en-react-pred-036',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `The user clicks "Change" (which changes \`App\`'s \`n\` state, passed as \`initialName\`). Does \`<Profile>\` start showing "Bia"?

\`\`\`jsx
function Profile({ initialName }) {
  const [name, setName] = useState(initialName);
  return <p>{name}</p>;
}
function App() {
  const [n, setN] = useState('Ana');
  return (
    <>
      <Profile initialName={n} />
      <button onClick={() => setN('Bia')}>Change</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Yes, `Profile` automatically syncs with the new prop', isCorrect: false },
      { id: 'b', text: 'No, it still shows "Ana"', isCorrect: true },
      { id: 'c', text: 'Throws an uncontrolled-state error', isCorrect: false },
      { id: 'd', text: 'Shows "Ana Bia" (concatenated)', isCorrect: false },
    ],
    hints: ['`useState(initialName)` only uses the prop\'s value to set state on the FIRST render of that component instance', "After mount, the internal `name` state lives its own life, fully decoupled from future changes to `initialName`"],
    explanation: 'The argument passed to `useState` is only used as the initial value on the FIRST render of that component instance — React never "re-runs" the initializer on subsequent renders, even if the original prop changes. As the prop\'s own name suggests (`initialName`), it only matters at the start. After that, `name` is independent state, and changing `n` in `App` has no effect at all on the `name` that already exists inside `Profile`.',
    tags: ['useState', 'props-as-initial-state', 'output-prediction'],
  },
  {
    id: 'en-react-pred-037',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `The user clicks the "+" button. Does 'B render' log again, even though \`DisplayB\` never reads \`count\` from the context?

\`\`\`jsx
const CountContext = createContext();

function DisplayA() {
  const { count } = useContext(CountContext);
  console.log('A render');
  return <p>{count}</p>;
}
function DisplayB() {
  useContext(CountContext); // doesn't use the value
  console.log('B render');
  return <p>static</p>;
}
function App() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count }}>
      <DisplayA />
      <DisplayB />
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </CountContext.Provider>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: "No, `DisplayB` never uses `count`, so React ignores it", isCorrect: false },
      { id: 'b', text: "Yes, any consumer of the context re-renders when the Provider's `value` changes", isCorrect: true },
      { id: 'c', text: 'No, only `DisplayA` re-renders', isCorrect: false },
      { id: 'd', text: 'Only on the very first change to `count`', isCorrect: false },
    ],
    hints: ["Context has no per-field/granular subscription — any component calling `useContext` on that context re-renders when the Provider's `value` changes", '`{ count }` is also a brand-new object on every render of `App`, so the Provider\'s `value` changes reference every time'],
    explanation: "Unlike more granular state management libraries, `useContext` doesn't let you \"subscribe\" to just a part of the value — EVERY component calling `useContext(CountContext)` re-renders whenever the `value` passed to the `Provider` changes reference, even if that component never reads the field that actually changed. Since `{ count }` is recreated on every render of `App`, the Provider's `value` changes reference every time, forcing even `DisplayB` (which doesn't even use the value) to re-render.",
    tags: ['Context', 'useContext', 're-render', 'output-prediction'],
  },
  {
    id: 'en-react-pred-038',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `The user clicks the button. Does the displayed name update to "Bia"?

\`\`\`jsx
function App() {
  const [user, setUser] = useState({ name: 'Ana' });
  function rename() {
    user.name = 'Bia'; // direct mutation
    setUser(user); // same reference
  }
  return <button onClick={rename}>{user.name}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Yes, it shows "Bia"', isCorrect: false },
      { id: 'b', text: 'No, it still shows "Ana"', isCorrect: true },
      { id: 'c', text: 'Throws TypeError: immutable object', isCorrect: false },
      { id: 'd', text: 'Shows "Bia" only after the second click', isCorrect: false },
    ],
    hints: ['The `user` object was mutated DIRECTLY (`user.name = \'Bia\'`), then the SAME reference was passed to `setUser`', "React compares the received reference with the previous one via `Object.is` — since it's the SAME object, it decides \"nothing changed\" and skips the update"],
    explanation: "Even though `user.name = 'Bia'` genuinely changes the object's content in memory, `setUser(user)` is passing the EXACT same reference that was already stored as state. React compares the new reference against the old one via `Object.is`, sees they're the SAME object, and decides to skip the re-render — even though the internal content was changed outside the rules of immutability. That's why the screen still shows \"Ana\", even though `user.name` is already `'Bia'` internally.",
    tags: ['useState', 'direct-mutation', 'immutability', 'output-prediction'],
  },
  {
    id: 'en-react-pred-039',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `The user clicks the button. Does the number shown on screen change from "2" to "3"?

\`\`\`jsx
function App() {
  const [items, setItems] = useState([1, 2]);
  function add() {
    items.push(3);
    setItems(items);
  }
  return <button onClick={add}>{items.length}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Yes, it becomes "3"', isCorrect: false },
      { id: 'b', text: 'No, it still shows "2"', isCorrect: true },
      { id: 'c', text: 'Throws an error: state arrays are read-only and `.push` fails', isCorrect: false },
      { id: 'd', text: 'Becomes "3" only after clicking twice', isCorrect: false },
    ],
    hints: ['`.push()` mutates the original array IN PLACE and returns the new length (not a new array)', 'Passing the same array reference back to `setItems` makes React skip the re-render, exactly like with a mutated object'],
    explanation: "Same bug pattern as the previous question, now with an array: `.push(3)` modifies the `items` array directly, in place, without creating a new reference. When `setItems(items)` is called with that SAME reference, React detects no change at all (`Object.is` considers them equal) and skips the re-render — even though the array already has `3` elements internally. The fix would be `setItems([...items, 3])`, creating a brand-new array.",
    tags: ['useState', 'array-mutation', 'immutability', 'output-prediction'],
  },
  {
    id: 'en-react-pred-040',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `After ONE click, what is the final value of \`count\`?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '5', isCorrect: false },
      { id: 'b', text: '1', isCorrect: true },
      { id: 'c', text: '0', isCorrect: false },
      { id: 'd', text: '4', isCorrect: false },
    ],
    hints: ['All 5 calls inside the loop read the SAME `count` variable, captured by this render\'s closure', "It doesn't matter how many times you call `setCount(count + 1)` in the same handler — they all compute exactly the same result"],
    explanation: 'Each of the 5 calls to `setCount(count + 1)` inside the loop reads the same `count` variable (captured by the current render\'s closure, say `0`), so all of them compute exactly `0 + 1 = 1` and schedule that same update repeatedly. The final result is `1`, not `5` — running the loop more times doesn\'t help when you don\'t use the functional form of the setter.',
    tags: ['useState', 'stale-closure', 'loop', 'output-prediction'],
  },
  {
    id: 'en-react-pred-041',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `This is the fix for the previous bug. After ONE click, what is the final value of \`count\`?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    for (let i = 0; i < 5; i++) {
      setCount(c => c + 1);
    }
  }
  return <button onClick={handleClick}>{count}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: '1', isCorrect: false },
      { id: 'b', text: '5', isCorrect: true },
      { id: 'c', text: '0', isCorrect: false },
      { id: 'd', text: 'Undefined, depends on the browser', isCorrect: false },
    ],
    hints: ['Each functional call receives the PENDING result of the previous one, forming a chain of updates'],
    explanation: 'Using the functional form (`c => c + 1`), each of the 5 calls inside the loop receives the most up-to-date value available in the update queue — forming a chain: the first receives `0` and produces `1`; the second receives that pending `1` and produces `2`; and so on, until the fifth produces `5`. React applies this entire chain at once, resulting in `count = 5`.',
    tags: ['useState', 'functional-update', 'loop', 'output-prediction'],
  },
  {
    id: 'en-react-pred-042',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What is rendered for each \`<Greeting>\`?

\`\`\`jsx
function Greeting({ name = 'Guest' }) {
  return <p>Hello, {name}</p>;
}
function App() {
  return (
    <>
      <Greeting name={undefined} />
      <Greeting name={null} />
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: '"Hello, Guest" for both', isCorrect: false },
      { id: 'b', text: '"Hello, Guest" for the first; "Hello, " (nothing visible after) for the second', isCorrect: true },
      { id: 'c', text: '"Hello, undefined" for the first; "Hello, null" for the second', isCorrect: false },
      { id: 'd', text: 'Throws a TypeError on the second, since `null` has no default', isCorrect: false },
    ],
    hints: ['Destructuring default values for props work exactly like any function parameter: they only kick in for `undefined`', '`null` is a "valid" value that does not trigger the default — and React simply renders `null` as nothing in JSX'],
    explanation: "This is the same plain-JavaScript destructuring rule, applied to props: the default value (`= 'Guest'`) only kicks in when the prop is exactly `undefined`. In the first `<Greeting>`, `name` is `undefined`, so the default applies: \"Hello, Guest\". In the second, `name` is `null` — an explicit value that does NOT trigger the default — so `name` stays `null`, and since React simply doesn't render `null`/`undefined`/`false`/`true` in the tree, only \"Hello, \" shows up with nothing visible after it.",
    tags: ['default-props', 'destructuring', 'null-vs-undefined', 'output-prediction'],
  },
  {
    id: 'en-react-pred-043',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What happens when this component mounts?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  setCount(count + 1); // called directly in the render body
  return <p>{count}</p>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Renders normally, showing "1"', isCorrect: false },
      { id: 'b', text: 'React detects a loop and throws an error ("Too many re-renders")', isCorrect: true },
      { id: 'c', text: 'The `setCount` is silently ignored during render', isCorrect: false },
      { id: 'd', text: 'Renders only once, showing "0"', isCorrect: false },
    ],
    hints: ['Calling a state setter directly in the component body (outside any handler or effect), with no stopping condition, IMMEDIATELY triggers another render', "Since there's no condition to stop it (`setCount` runs unconditionally on every render), this repeats forever"],
    explanation: 'Calling `setCount` directly in the component body, during rendering, immediately triggers another render — which runs the body again, which calls `setCount` again, and so on, with no condition ever stopping the cycle. React detects this pattern (state updates repeatedly triggered during rendering itself) and throws a protective error, something like "Too many re-renders. React limits the number of renders to prevent an infinite loop", instead of letting the browser actually hang.',
    tags: ['useState', 'setState-during-render', 'infinite-loop', 'output-prediction'],
  },
  {
    id: 'en-react-pred-044',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `The user clicks the button several times. How many times does 'effect ran' get logged in total (including the mount)?

\`\`\`jsx
function Child({ setCount }) {
  useEffect(() => {
    console.log('effect ran');
  }, [setCount]);
  return null;
}
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child setCount={setCount} />
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Once per click, plus the mount', isCorrect: false },
      { id: 'b', text: 'Just 1 time (only on mount)', isCorrect: true },
      { id: 'c', text: "Never — `setCount` isn't a valid dependency", isCorrect: false },
      { id: 'd', text: 'Depends on how many components consume `setCount`', isCorrect: false },
    ],
    hints: ['React GUARANTEES that the setter function returned by `useState` is stable — the SAME reference across all renders of the component', "Unlike a regular function declared inside the component, `setCount` is never \"recreated\""],
    explanation: "Unlike regular functions declared inside a component's body (which get recreated on every render, with new references), the setter returned by `useState` (here, `setCount`) is guaranteed stable by React — it's always the SAME function reference, across every render, for the entire lifetime of the component. Since `setCount` never \"changes\" as a dependency, the effect in `Child` runs just once, on mount, and never again, no matter how many clicks happen.",
    tags: ['useState', 'stable-setter', 'useEffect', 'output-prediction'],
  },
  {
    id: 'en-react-pred-045',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `This component has a conditional \`return\` BEFORE the final JSX. Does it violate the Rules of Hooks?

\`\`\`jsx
function Profile({ user }) {
  const [expanded, setExpanded] = useState(false);
  if (!user) {
    return <p>Loading...</p>;
  }
  return <button onClick={() => setExpanded(!expanded)}>{user.name}</button>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'Yes, any `if` before a `return` breaks the rules of hooks', isCorrect: false },
      { id: 'b', text: 'No, because the `useState` hook is called unconditionally, before any `if`', isCorrect: true },
      { id: 'c', text: 'Yes, but it only causes an error in production, not in development', isCorrect: false },
      { id: 'd', text: 'No, but only because there is just one hook in this component', isCorrect: false },
    ],
    hints: ['The Rules of Hooks forbid HOOKS THEMSELVES from being called conditionally or inside loops — they do not forbid conditional `return`s', 'Here, `useState` always runs, on every call of the function, before any `if`'],
    explanation: "This code is perfectly valid. The Rules of Hooks require hooks to be called in the exact same order, unconditionally, on every render — but that doesn't prevent the returned JSX (i.e., the `return` statement) from being conditional. Here, `useState(false)` always runs before any conditional check, so the order of hooks never varies between renders, regardless of `user`'s value.",
    tags: ['rules-of-hooks', 'useState', 'conditional-return', 'output-prediction'],
  },
  {
    id: 'en-react-pred-046',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `The counter is incremented a few times (count > 0). After that, the user clicks "Reset" (which changes \`key\`). What happens to the \`Counter\`?

\`\`\`jsx
function Counter({ resetKey }) {
  const [count, setCount] = useState(0);
  useEffect(() => console.log('mounted with count reset to', count), []);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
function App() {
  const [key, setKey] = useState(0);
  return (
    <>
      <Counter key={key} />
      <button onClick={() => setKey(k => k + 1)}>Reset</button>
    </>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: "Nothing happens to `Counter`, since `key` isn't used internally", isCorrect: false },
      { id: 'b', text: '`Counter` is unmounted and remounted from scratch: `count` resets to 0, and the mount log fires again', isCorrect: true },
      { id: 'c', text: "Only the button's text resets, but the effect doesn't run again", isCorrect: false },
      { id: 'd', text: "Throws an error: `key` can't change after mount", isCorrect: false },
    ],
    hints: ["When an element's `key` value changes, React treats it as a LOGICALLY DIFFERENT component, not an update of the same one", 'A "different component" means the old one gets unmounted (losing all its state) and a new one mounts from scratch'],
    explanation: 'Changing the special `key` prop\'s value signals to React that this element now represents a LOGICALLY DIFFERENT instance, even though it\'s the same component type. Instead of simply updating the existing instance, React fully unmounts the old one (discarding all its internal state, like `count`) and mounts a completely new instance from scratch. That\'s why `count` resets to `0` and the mount `console.log` fires again — this is actually a common intentional pattern used to "reset" a component\'s state.',
    tags: ['key-prop', 'remount', 'useState', 'output-prediction'],
  },
  {
    id: 'en-react-pred-047',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: `The user clicks the button (which triggers both \`handleChildClick\` directly and \`handleParentClick\` via DOM event bubbling). In React 18+, how many times is 'render' logged, and what is the final value of \`count\`?

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  console.log('render');

  function handleParentClick() {
    setCount(c => c + 1);
  }
  function handleChildClick() {
    setCount(c => c + 1);
  }

  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Click</button>
    </div>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: "'render' logs twice, count increases by 2", isCorrect: false },
      { id: 'b', text: "'render' logs once, count increases by 2", isCorrect: true },
      { id: 'c', text: "'render' logs once, count increases by 1 (only the button's handler fires)", isCorrect: false },
      { id: 'd', text: "'render' logs twice, count increases by 1", isCorrect: false },
    ],
    hints: ['Clicking the `<button>` makes the event "bubble" through the DOM, also triggering the parent `<div>`\'s `onClick`, both as part of the SAME native browser event', "React 18's automatic batching groups ALL state updates triggered while processing the same native event, even across multiple handlers reached via bubbling"],
    explanation: "Clicking the button triggers `handleChildClick` directly, and the event keeps \"bubbling\" through the DOM up to the parent `<div>`, also triggering `handleParentClick` — both are part of the same native click event. React 18's automatic batching groups every state update that occurs while processing that single event, no matter how many different handlers run via bubbling. That's why `render` logs just 1 more time (not 2), and since both handlers use the functional setter form, `count` correctly increases by 2.",
    tags: ['automatic-batching', 'react-18', 'event-bubbling', 'output-prediction'],
  },
  {
    id: 'en-react-pred-048',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What gets rendered on screen?

\`\`\`jsx
function Labels() {
  return (
    <div>
      {false}{null}{undefined}{true}{0}{NaN}{'text'}
    </div>
  );
}
\`\`\``,
    options: [
      { id: 'a', text: 'Nothing shows up: all of these values are ignored by React', isCorrect: false },
      { id: 'b', text: '"0NaNtext"', isCorrect: true },
      { id: 'c', text: '"falsenullundefinedtrue0NaNtext"', isCorrect: false },
      { id: 'd', text: 'Throws an error: `NaN` cannot be rendered', isCorrect: false },
    ],
    hints: ['React has a short, specific list of values it renders as "nothing": `false`, `null`, `undefined`, and `true`', 'Numbers (including `0` and `NaN`) and strings ARE rendered normally, with no special handling'],
    explanation: 'React silently renders nothing for exactly four values: `false`, `null`, `undefined`, and `true` — a short, specific list, not "any falsy value". Numbers (including `0` and `NaN`, which are also "falsy" in JavaScript) and strings render normally as text. That\'s why the final concatenated result, with no separators, is `"0NaNtext"`.',
    tags: ['jsx', 'falsy-values', 'conditional-rendering', 'output-prediction'],
  },
  {
    id: 'en-react-pred-049',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `\`showExtra\` changes from \`true\` to \`false\` between two renders. What happens?

\`\`\`jsx
function App({ showExtra }) {
  const [a, setA] = useState('a');
  if (showExtra) {
    const [b, setB] = useState('b');
  }
  const [c, setC] = useState('c');
  return null;
}
\`\`\``,
    options: [
      { id: 'a', text: 'It works fine; React dynamically adjusts the hooks', isCorrect: false },
      { id: 'b', text: 'React throws an error, something like "Rendered fewer hooks than expected"', isCorrect: true },
      { id: 'c', text: 'The `c` hook simply receives `undefined` on this render', isCorrect: false },
      { id: 'd', text: 'No error, but `a` and `c` swap values with each other', isCorrect: false },
    ],
    hints: ['React tracks each hook\'s state by the ORDER in which they are called during render, not by the variable name', 'Skipping a hook call between renders shifts the position of EVERY hook declared after it'],
    explanation: 'React identifies each hook by its POSITION in the sequence of calls during render (like an internal linked list), not by the variable name in the code. When `showExtra` is `true`, the call order is `[a, b, c]`; when it becomes `false`, the `b` hook is skipped and the order becomes `[a, c]` — making the third declared hook (`c`) occupy the POSITION that previously belonged to `b`. React detects this inconsistency between renders and throws a protective error, which is exactly why the Rules of Hooks forbid calling them conditionally.',
    tags: ['rules-of-hooks', 'useState', 'conditional-hooks', 'output-prediction'],
  },
  {
    id: 'en-react-pred-050',
    domain: 'react',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `This is the definitive fix for this block's very first bug (stale closure in \`setInterval\`). Does the counter shown on screen correctly increment every second?

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <p>{count}</p>;
}
\`\`\``,
    options: [
      { id: 'a', text: 'No, it stays stuck at 0, like the first version', isCorrect: false },
      { id: 'b', text: 'Yes, it correctly increments every second', isCorrect: true },
      { id: 'c', text: "No, since the effect with `[]` only runs once", isCorrect: false },
      { id: 'd', text: 'Only if `count` is added to the dependencies', isCorrect: false },
    ],
    hints: ['Even though the `setInterval` (and its closure) is created only once, the FUNCTIONAL form of the setter always receives the most up-to-date state from React when it actually runs', 'This completely avoids the stale-closure problem, without needing `useRef` or recreating the effect on every `count` change'],
    explanation: 'This is the most idiomatic fix for the bug seen in this block\'s first question. Even though the `useEffect` only runs once (`[]`) and the `setInterval` function is created a single time, the functional setter form (`prev => prev + 1`) does not rely on the closure capturing the right value — it directly receives, from React itself, the most up-to-date state value at the moment it runs. That\'s why the counter correctly increments every second, with no need for `useRef` or recreating the `setInterval` on every state change.',
    tags: ['useEffect', 'functional-update', 'setInterval', 'stale-closure-fix', 'output-prediction'],
  },
]
