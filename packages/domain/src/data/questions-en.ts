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
  // ─── Output prediction (TypeScript) ────────────────────────────────────────
  {
    id: 'en-ts-pred-001',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
enum Color { Red, Green, Blue }
console.log(Color.Red, Color[0], Color[Color.Red]);
\`\`\``,
    options: [
      { id: 'a', text: "0, 'Red', 'Red'", isCorrect: true },
      { id: 'b', text: "'Red', 0, 'Red'", isCorrect: false },
      { id: 'c', text: '0, undefined, 0', isCorrect: false },
      { id: 'd', text: "undefined, 'Red', undefined", isCorrect: false },
    ],
    hints: ['Numeric enums automatically get values `0, 1, 2...`, in declaration order', 'Numeric enums generate a "reverse mapping" at runtime: you can also access the NAME from the number'],
    explanation: 'Numeric enums automatically assign incrementing values: `Color.Red` is `0`. Unlike string enums, numeric enums generate a JavaScript object with a reverse mapping at runtime — that\'s why `Color[0]` returns the name `\'Red\'`. And `Color[Color.Red]` is just `Color[0]`, so it also returns `\'Red\'`.',
    tags: ['enum', 'reverse-mapping', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-002',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
enum Status { Active = "ACTIVE", Inactive = "INACTIVE" }
console.log(Status.Active, Status["ACTIVE"]);
\`\`\``,
    options: [
      { id: 'a', text: "'ACTIVE', 'Active'", isCorrect: false },
      { id: 'b', text: "'ACTIVE', undefined", isCorrect: true },
      { id: 'c', text: "'ACTIVE', 'ACTIVE'", isCorrect: false },
      { id: 'd', text: 'Throws a compile error', isCorrect: false },
    ],
    hints: ['Unlike numeric enums, STRING enums do not generate a reverse mapping at runtime', '`Status["ACTIVE"]` is trying to access a property named "ACTIVE", which does not exist on the generated object — only the "Active" property (the member name) exists'],
    explanation: 'Only NUMERIC enums generate a reverse (value → name) mapping at runtime. String enums lack that structure, since it could collide if a member name happened to match another string value. `Status.Active` correctly returns `\'ACTIVE\'` (accessing by the member NAME), but `Status["ACTIVE"]` tries to access a property literally named `"ACTIVE"`, which simply does not exist on the object — returning `undefined`.',
    tags: ['enum', 'string-enum', 'reverse-mapping', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-003',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `This project's \`tsconfig.json\` has \`isolatedModules: true\`. What happens when you try to compile this code?

\`\`\`typescript
const enum Direction { Up, Down }
console.log(Direction.Up);
\`\`\``,
    options: [
      { id: 'a', text: 'It compiles normally and logs 0', isCorrect: false },
      { id: 'b', text: 'Compile error: const enums are not allowed with isolatedModules', isCorrect: true },
      { id: 'c', text: 'It compiles but fails at runtime', isCorrect: false },
      { id: 'd', text: 'It logs "Up" instead of 0', isCorrect: false },
    ],
    hints: ['`const enum` is "inlined" by the compiler — every usage is replaced directly with the numeric value, with no runtime object generated at all', '`isolatedModules` requires that each file be compilable on its own, without information from other files — and const enum inlining breaks that guarantee across files'],
    explanation: '`const enum` is an optimization where the compiler "inlines" usages directly (replacing `Direction.Up` with the literal `0`), without ever generating a real `Direction` object at runtime. That inlining requires the compiler to have complete information about the enum during compilation — incompatible with `isolatedModules: true`, which requires every file to be transpilable on its own (by tools like Babel or esbuild, with no cross-file type checking). That\'s why, since TypeScript 5.0, `const enum` is a compile error when `isolatedModules` is enabled — exactly the setting used in this project.',
    tags: ['const-enum', 'isolatedModules', 'compile-error', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-004',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
interface Box { width: number; }
interface Box { height: number; }
const b: Box = { width: 10, height: 20 };
console.log(b);
\`\`\``,
    options: [
      { id: 'a', text: 'Compile error: duplicate identifier "Box"', isCorrect: false },
      { id: 'b', text: '{ width: 10, height: 20 }', isCorrect: true },
      { id: 'c', text: '{ height: 20 } (the second declaration overrides the first)', isCorrect: false },
      { id: 'd', text: '{ width: 10 } (only the first declaration is used)', isCorrect: false },
    ],
    hints: ['`interface` supports "declaration merging": multiple declarations with the same name get combined into one', '`type` aliases do NOT support this behavior — declaring one twice would be a duplicate-identifier error'],
    explanation: 'Interfaces have a feature called "declaration merging": declaring the same interface multiple times makes TypeScript COMBINE all properties into a single definition, instead of erroring. Here, `Box` ends up with both `width` AND `height`. This is an important difference between `interface` and `type`: a type alias (`type Box = {...}`) declared twice would produce a "Duplicate identifier" error.',
    tags: ['interface', 'declaration-merging', 'type-vs-interface', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-005',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What happens when you try to compile (and then run) this code?

\`\`\`typescript
interface Point { x: number; y: number; }
function printPoint(p: Point) {
  console.log(p.x, p.y);
}
const obj = { x: 1, y: 2, z: 3 };
printPoint(obj);
\`\`\``,
    options: [
      { id: 'a', text: 'Compile error: excess property "z"', isCorrect: false },
      { id: 'b', text: 'It compiles normally and logs 1 2', isCorrect: true },
      { id: 'c', text: 'It compiles, but throws an excess-property error at runtime', isCorrect: false },
      { id: 'd', text: 'Compile error: missing properties on "Point"', isCorrect: false },
    ],
    hints: ["TypeScript's excess property check only applies to OBJECT LITERALS passed DIRECTLY", "Passing a variable that was already assigned beforehand (instead of a literal `{...}` directly in the call) bypasses that check, since structural typing allows \"having more properties than required\""],
    explanation: 'TypeScript uses structural typing: an object with AT LEAST the required properties is compatible, even with extra ones. The "excess property" check is an additional safeguard, but it only applies when an object literal (`{...}`) is passed DIRECTLY as an argument — passing a variable (`obj`) that was already assigned beforehand bypasses that extra check. If the call were `printPoint({ x: 1, y: 2, z: 3 })` directly, it would be a compile error for the excess property.',
    tags: ['structural-typing', 'excess-property-check', 'interface', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-006',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
const value = "42" as unknown as number;
console.log(typeof value);
\`\`\``,
    options: [
      { id: 'a', text: "'number'", isCorrect: false },
      { id: 'b', text: "'string'", isCorrect: true },
      { id: 'c', text: "'unknown'", isCorrect: false },
      { id: 'd', text: 'Throws a runtime conversion error', isCorrect: false },
    ],
    hints: ['`as` (type assertion) NEVER converts or transforms the value at runtime — it only changes how TypeScript "sees" the type during compilation', 'At runtime, the value remains exactly the same string `"42"` it always was'],
    explanation: 'Type assertions (`as`) are purely an instruction to the TypeScript compiler, with zero runtime effect — unlike a real conversion such as `Number("42")`. The `value` variable remains, at runtime, the original string `"42"`. `typeof value` reflects the actual JavaScript reality, not what TypeScript "believes" the type to be — so it returns `\'string\'`, even though the code "convinced" the compiler that `value` is a `number`.',
    tags: ['type-assertion', 'as', 'runtime-vs-compile-time', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-007',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
const config = { mode: "dark" } satisfies { mode: string };
console.log(config.mode);
\`\`\``,
    options: [
      { id: 'a', text: "'dark'", isCorrect: true },
      { id: 'b', text: 'Throws an error: "dark" does not satisfy the generic string type', isCorrect: false },
      { id: 'c', text: "'string' (satisfies converts the value to the type's name)", isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`satisfies` has ZERO runtime effect — it\'s a purely compile-time check, generating no extra code', 'Unlike a `: Type` annotation, `satisfies` validates compatibility WITHOUT widening the literal\'s inferred type'],
    explanation: '`satisfies` is a purely compile-time operator: it checks whether the value is compatible with the indicated type, without changing absolutely anything at runtime and without "widening" the inferred type (unlike a `: { mode: string }` annotation, which would make TypeScript forget that `mode` is literally `"dark"`). The generated JavaScript is identical to what it would be if `satisfies` did not exist — so the code simply logs `\'dark\'`, as normal.',
    tags: ['satisfies', 'runtime-vs-compile-time', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-008',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What happens when this code runs?

\`\`\`typescript
function getLength(s?: string) {
  return s!.length;
}
console.log(getLength(undefined));
\`\`\``,
    options: [
      { id: 'a', text: 'Logs 0, since `!` converts undefined into an empty string', isCorrect: false },
      { id: 'b', text: 'Throws a runtime error: Cannot read properties of undefined', isCorrect: true },
      { id: 'c', text: 'Compile error: `!` cannot be used on optional parameters', isCorrect: false },
      { id: 'd', text: 'Logs undefined, with no error thrown', isCorrect: false },
    ],
    hints: ['The non-null assertion operator (`!`) is only an instruction to the COMPILER to ignore the possibility of `null`/`undefined` — it inserts NO real check at runtime', 'Since `s` is genuinely `undefined` here, accessing `.length` on it fails exactly as it would in plain JavaScript'],
    explanation: 'The `!` operator (non-null assertion) is a promise made TO THE COMPILER, saying "trust me, this will never be null/undefined here" — but that promise generates no actual checking code. If the promise turns out false (as here, where `s` is genuinely `undefined`), the plain JavaScript runtime error happens normally: trying to read `.length` off `undefined` throws `TypeError: Cannot read properties of undefined (reading \'length\')`. `!` offers ZERO runtime safety — it\'s purely a compiler suppression.',
    tags: ['non-null-assertion', 'runtime-vs-compile-time', 'runtime-error', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-009',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
process(42);
\`\`\``,
    options: [
      { id: 'a', text: "'42.00'", isCorrect: true },
      { id: 'b', text: "'42'", isCorrect: false },
      { id: 'c', text: "Compile error: `toFixed` doesn't exist on `string | number`", isCorrect: false },
      { id: 'd', text: 'Throws a runtime error', isCorrect: false },
    ],
    hints: ['`typeof value === "string"` is a type check that ALSO RUNS at runtime — it\'s not just a hint for the compiler', 'Inside the `else`, both TypeScript and the runtime know `value` can only be `number`'],
    explanation: 'The check `typeof value === "string"` does double duty: at runtime, it genuinely checks the value\'s type; and the TypeScript compiler uses that same check to "narrow" the type inside each branch of the `if`/`else`. Since `42` is a `number`, the condition is `false`, running the `else` branch, where TypeScript already (correctly) knows `value` is `number`, allowing `.toFixed(2)` with no compile error. `(42).toFixed(2)` returns the string `\'42.00\'`.',
    tags: ['type-narrowing', 'typeof', 'union-types', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-010',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What happens when you try to compile this code?

\`\`\`typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}
\`\`\``,
    options: [
      { id: 'a', text: 'It compiles normally; the "square" case simply returns undefined at runtime', isCorrect: false },
      { id: 'b', text: 'Compile error: not all code paths return a value', isCorrect: true },
      { id: 'c', text: 'It compiles, but throws a runtime error when receiving a "square"', isCorrect: false },
      { id: 'd', text: 'Compile error: switch must always have a "default" case', isCorrect: false },
    ],
    hints: ['The function explicitly declares it returns `number` (`: number`)', 'The "square" case has no `return` at all — that code path would "fall through" out of the function without returning anything, conflicting with the declared return type'],
    explanation: 'Since the function has an explicit return annotation (`: number`), TypeScript checks whether EVERY possible execution path actually returns a `number`. The `switch` only handles the `"circle"` case — if `shape.kind` is `"square"`, execution simply "falls through" out of the switch with no `return`, implicitly returning `undefined`. That conflicts with the declared return type, producing the error "Function lacks ending return statement and return type does not include \'undefined\'."',
    tags: ['discriminated-union', 'switch', 'return-type', 'compile-error', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-011',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What happens when you try to compile this code?

\`\`\`typescript
interface User { id: number; name: string; }
type UserKey = keyof User;

function logType() {
  console.log(UserKey);
}
\`\`\``,
    options: [
      { id: 'a', text: 'It compiles and logs "id" | "name"', isCorrect: false },
      { id: 'b', text: "Compile error: 'UserKey' refers to a type, but is being used as a value here", isCorrect: true },
      { id: 'c', text: 'It compiles and logs undefined', isCorrect: false },
      { id: 'd', text: 'It compiles and logs an array `["id", "name"]`', isCorrect: false },
    ],
    hints: ['`keyof User` is a TYPE (a union of string literals), not an array or object that exists at runtime', "Types and values live in separate \"namespaces\" in TypeScript — `UserKey` only exists in the type world, it was never declared as a variable"],
    explanation: '`type UserKey = keyof User` declares a TYPE (in this case, the union `"id" | "name"`), which only exists during compilation and is completely erased from the generated JavaScript. Trying to use `UserKey` inside `console.log(...)` is trying to use it as a VALUE at runtime — but it was never declared as a variable, so the compiler rejects it with the error "\'UserKey\' only refers to a type, but is being used as a value here".',
    tags: ['keyof', 'type-vs-value', 'compile-error', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-012',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never;

function greet() { return "hi"; }
type GreetReturn = ReturnOf<typeof greet>; // type: string

const result: GreetReturn = greet();
console.log(result);
\`\`\``,
    options: [
      { id: 'a', text: "'hi'", isCorrect: true },
      { id: 'b', text: "'string'", isCorrect: false },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'Throws an error: conditional types cannot be used at runtime', isCorrect: false },
    ],
    hints: ['Conditional types with `infer` are resolved entirely during compilation, generating NO additional JavaScript code', 'After stripping every type annotation, what is left is simply `function greet() { return "hi"; } console.log(greet());`'],
    explanation: 'All the "magic" of conditional types and `infer` happens exclusively during type checking, leaving no trace in the final JavaScript — every type annotation is erased during compilation. The generated code is essentially just `function greet() { return "hi"; }` followed by `console.log(greet())`. So the result is simply the string `\'hi\'`, exactly what the function always returned, regardless of all the type-level engineering around it.',
    tags: ['conditional-types', 'infer', 'runtime-vs-compile-time', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-013',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
function double(nums: readonly number[]) {
  return nums.map(n => n * 2);
}
const arr = [1, 2, 3];
console.log(double(arr));
\`\`\``,
    options: [
      { id: 'a', text: "Compile error: `.map` isn't available on `readonly` arrays", isCorrect: false },
      { id: 'b', text: '[2, 4, 6]', isCorrect: true },
      { id: 'c', text: '[1, 2, 3] (readonly blocks any transformation)', isCorrect: false },
      { id: 'd', text: 'Throws a runtime error', isCorrect: false },
    ],
    hints: ['`readonly number[]` only blocks methods that MUTATE the original array (like `.push`, `.sort`, `.splice`)', 'Methods that return a NEW array without changing the original (like `.map`, `.filter`, `.slice`) remain fully available'],
    explanation: '`readonly number[]` only restricts, at compile time, methods that mutate the original array (`.push`, `.pop`, `.sort`, `.splice`, etc. would not be available on that type). Methods like `.map()`, which always return a brand-NEW array without modifying the original, remain fully allowed. That\'s why `double(arr)` works normally, returning `[2, 4, 6]`.',
    tags: ['readonly', 'array', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-014',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}
console.log(combine(1, 2), combine("a", "b"));
\`\`\``,
    options: [
      { id: 'a', text: "3, 'ab'", isCorrect: true },
      { id: 'b', text: "'3', 'ab'", isCorrect: false },
      { id: 'c', text: 'Compile error: function overloads cannot share an implementation', isCorrect: false },
      { id: 'd', text: "NaN, 'ab'", isCorrect: false },
    ],
    hints: ["Overload signatures only exist for the COMPILER to check how the function can be called — there is only ONE real implementation at runtime", 'The actual implementation (`function combine(a: any, b: any): any {...}`) is the only one that truly runs, for ANY valid call'],
    explanation: 'The overload signatures (the first two `combine` declarations) exist only for TypeScript to check, at compile time, which combinations of argument types are valid — they never generate their own JavaScript code. At runtime, there is only ONE real function (the last declaration, with the implementation), which processes every call the same way. `combine(1, 2)` runs `1 + 2 = 3`; `combine("a", "b")` runs `"a" + "b" = "ab"` — the same `+` operator behaving differently based on the actual runtime types.',
    tags: ['function-overloads', 'runtime-vs-compile-time', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-015',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
class Box {
  value = this.getDefault();
  getDefault() { return 10; }
  constructor() {
    console.log(this.value);
  }
}
new Box();
\`\`\``,
    options: [
      { id: 'a', text: "Throws an error: `getDefault` doesn't exist yet when `value` is initialized", isCorrect: false },
      { id: 'b', text: '10', isCorrect: true },
      { id: 'c', text: 'undefined', isCorrect: false },
      { id: 'd', text: 'NaN', isCorrect: false },
    ],
    hints: ["Class field initializers run BEFORE the constructor body, but AFTER methods are already available on the prototype", 'Class methods are added to the `prototype` at class definition time, not "during" instance construction — so they\'re already available when fields are initialized'],
    explanation: 'The initialization order in a class is: first the field initializers (in declaration order), and only then does the explicit constructor body run. Instance methods, like `getDefault`, are already available on the class `prototype` since its definition — they don\'t depend on any instance-initialization step. So when `value = this.getDefault()` runs, `getDefault` is already ready to be called, returning `10`. The constructor then logs that already-initialized value.',
    tags: ['class-fields', 'initialization-order', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-016',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
class Account {
  private balance = 100;
  #secret = "hidden";
}
const acc = new Account();
console.log((acc as any).balance);
console.log((acc as any).secret);
\`\`\``,
    options: [
      { id: 'a', text: "100, 'hidden'", isCorrect: false },
      { id: 'b', text: '100, undefined', isCorrect: true },
      { id: 'c', text: 'undefined, undefined', isCorrect: false },
      { id: 'd', text: 'Throws a private-access error for both', isCorrect: false },
    ],
    hints: ['`private` is a restriction that exists PURELY in the TypeScript COMPILER — the property exists normally as a public property on the real JavaScript object, accessible via `as any`', '`#secret` is REAL JavaScript privacy (ES2022 private fields) — the field\'s name isn\'t even "secret", it\'s literally `#secret`, so `acc.secret` matches nothing'],
    explanation: '`private balance` is a restriction that exists ONLY during compilation — at runtime, `balance` is a regular public property on the object, so using `as any` to bypass the type check lets you access it normally, returning `100`. `#secret`, on the other hand, uses JavaScript\'s native private field syntax (not a TypeScript feature): the `#` is part of the field\'s actual name, so there is NO property called `secret` (without `#`) on the object — `acc.secret` simply accesses a non-existent property, returning `undefined`, even with the `as any` cast (which only affects type checking, it doesn\'t create the property).',
    tags: ['private', 'private-fields', 'runtime-vs-compile-time', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-017',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
class Service {
  name!: string;
  constructor() {
    console.log(this.name);
  }
}
new Service();
\`\`\``,
    options: [
      { id: 'a', text: "'' (empty string)", isCorrect: false },
      { id: 'b', text: 'undefined', isCorrect: true },
      { id: 'c', text: 'Compile error: `name` must be initialized in the constructor', isCorrect: false },
      { id: 'd', text: 'Throws a runtime error', isCorrect: false },
    ],
    hints: ['The `!` in `name!: string` is the "definite assignment assertion" — it only tells the compiler "trust me, this will be assigned before use", without actually initializing ANYTHING', 'Since no value is ever actually assigned to `name` before the `console.log`, the property simply doesn\'t exist yet, and its value is `undefined`'],
    explanation: "The definite assignment assertion (`!` after the field name) is purely an instruction to stop the compiler from complaining about the property not being initialized — it does NOT generate any code that actually assigns a value. Since the constructor never assigns anything to `this.name` before logging it, the property remains without a value (`undefined`) at that point, even though TypeScript \"believes\" (incorrectly, due to the `!`) that it will always be a `string`.",
    tags: ['definite-assignment-assertion', 'class-fields', 'runtime-vs-compile-time', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-018',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
enum StatusCode {
  OK = 200,
  Created,
  Accepted,
}
console.log(StatusCode.Created, StatusCode.Accepted);
\`\`\``,
    options: [
      { id: 'a', text: '201, 202', isCorrect: true },
      { id: 'b', text: '1, 2', isCorrect: false },
      { id: 'c', text: '200, 200', isCorrect: false },
      { id: 'd', text: 'Compile error: every member needs an explicit value after the first', isCorrect: false },
    ],
    hints: ['When a numeric enum member has no explicit value, it gets the previous member\'s value plus 1', '`OK = 200` sets the starting point; the following members continue counting from there'],
    explanation: 'In a numeric enum, members without an explicit value automatically get the PREVIOUS member\'s value plus `1` — not necessarily starting from zero. Since `OK` was explicitly set to `200`, the following members continue the sequence from there: `Created` is `201`, and `Accepted` is `202`.',
    tags: ['enum', 'auto-increment', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-019',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
const colors = ["red", "green", "blue"] as const;
console.log(Object.isFrozen(colors));
\`\`\``,
    options: [
      { id: 'a', text: 'true', isCorrect: false },
      { id: 'b', text: 'false', isCorrect: true },
      { id: 'c', text: 'Compile error: `as const` requires the array to already be frozen', isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ["`as const` is a purely type-level instruction — it does NOT call `Object.freeze()` or any other function at runtime", 'At runtime, `colors` is a completely normal, mutable JavaScript array, identical to what it would be without `as const`'],
    explanation: '`as const` instructs TypeScript to infer the most specific possible type (a `readonly ["red", "green", "blue"]` tuple, instead of the more general `string[]`) — but that is PURELY a type-level instruction, with no runtime effect whatsoever. The generated JavaScript array is a regular, fully mutable array, exactly as it would be without `as const`. To actually prevent mutation at runtime, you would need to explicitly call `Object.freeze(colors)` — something `as const` never does.',
    tags: ['as-const', 'runtime-vs-compile-time', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-020',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
function process(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log("not a string");
  }
}
process(42);
process("hi");
\`\`\``,
    options: [
      { id: 'a', text: "'not a string', 'HI'", isCorrect: true },
      { id: 'b', text: "'42', 'hi'", isCorrect: false },
      { id: 'c', text: "'HI', 'not a string'", isCorrect: false },
      { id: 'd', text: 'Compile error: type predicates cannot be used with `unknown`', isCorrect: false },
    ],
    hints: ['The `value is string` syntax (type predicate) only "narrows" the type for the COMPILER — what actually decides the result is the `typeof value === "string"` check INSIDE the function, at runtime', "The function's actual behavior depends entirely on the real verification JavaScript code, not on type-system \"magic\""],
    explanation: 'Type predicate functions (`value is string`) help the COMPILER narrow types after calls to them, but the actual result returned at runtime depends entirely on the real logic inside the function — here, `typeof value === "string"`. For `process(42)`, `isString(42)` returns `false` (42 isn\'t a string), falling into the `else`, logging `\'not a string\'`. For `process("hi")`, `isString("hi")` returns `true`, and TypeScript already treats `value` as `string` inside the `if`, allowing `.toUpperCase()` with no compile error: it logs `\'HI\'`.',
    tags: ['type-predicate', 'type-guards', 'unknown', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-021',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
function wrap<T>(value: T): T[] {
  return [value];
}
console.log(wrap(5), wrap("hi"));
\`\`\``,
    options: [
      { id: 'a', text: "[5], ['hi']", isCorrect: true },
      { id: 'b', text: "'T[5]', 'T[hi]'", isCorrect: false },
      { id: 'c', text: 'Compile error: you must explicitly specify `<number>` and `<string>`', isCorrect: false },
      { id: 'd', text: '[5], [5] (the second argument is ignored)', isCorrect: false },
    ],
    hints: ['The generic type parameter `T` is automatically inferred from the passed argument, with no need to specify it', 'At runtime, generics are completely erased — the function just wraps the received value in an array, whatever its type'],
    explanation: 'TypeScript automatically infers the generic type `T` from the value passed as an argument — there is no need to write `wrap<number>(5)` explicitly. At runtime, all generic type information is erased: the `wrap` function simply does `return [value]`, with no logic conditioned on the type. So `wrap(5)` returns `[5]` and `wrap("hi")` returns `[\'hi\']`, as expected.',
    tags: ['generics', 'type-inference', 'runtime-vs-compile-time', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-022',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
interface Dictionary {
  [key: string]: number;
}
const scores: Dictionary = { alice: 10, bob: 20 };
console.log(scores.carol);
\`\`\``,
    options: [
      { id: 'a', text: 'Compile error: "carol" does not exist on `scores`', isCorrect: false },
      { id: 'b', text: 'undefined', isCorrect: true },
      { id: 'c', text: '0', isCorrect: false },
      { id: 'd', text: 'NaN', isCorrect: false },
    ],
    hints: ['An "index signature" (`[key: string]: number`) tells TypeScript "any string key maps to a number" — but that\'s a type-level promise, not a guarantee that the key actually exists', 'At runtime, `scores.carol` is simply a property that was never defined on the object'],
    explanation: 'The index signature tells the compiler that ANY string-key access should be treated as `number`, so `scores.carol` compiles with no error at all (TypeScript "believes" it will be a number). But that is only a type-level promise — in reality, the `scores` object never had a `carol` property defined, so at runtime the access genuinely returns `undefined`, like in any JavaScript object. (Note: enabling the `noUncheckedIndexedAccess` flag in `tsconfig.json` would make TypeScript type this access as `number | undefined`, forcing you to handle that case explicitly.)',
    tags: ['index-signature', 'noUncheckedIndexedAccess', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-023',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
interface Config { nested: { value: number } }
const config: Readonly<Config> = Object.freeze({ nested: { value: 1 } });
config.nested.value = 99;
console.log(config.nested.value);
\`\`\``,
    options: [
      { id: 'a', text: '1 (Readonly protects the whole property tree)', isCorrect: false },
      { id: 'b', text: '99', isCorrect: true },
      { id: 'c', text: 'Compile error when trying to assign `config.nested.value`', isCorrect: false },
      { id: 'd', text: 'Throws a runtime error', isCorrect: false },
    ],
    hints: ['The `Readonly<T>` utility type is SHALLOW: it only makes the FIRST-LEVEL properties read-only in the type system', '`Object.freeze()` is also shallow at runtime — both leave `nested` (a nested object) fully mutable'],
    explanation: 'Both `Readonly<T>` (at the type level) and `Object.freeze()` (at runtime) are shallow: they only protect the object\'s FIRST-LEVEL properties. `config.nested` remains a reference to a regular, fully mutable object — neither the `Readonly<Config>` type nor the `Object.freeze()` applied to `config` affects that nested object. That\'s why `config.nested.value = 99` works with no error, and the final logged value is `99`.',
    tags: ['Readonly', 'Object.freeze', 'shallow', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-024',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What happens when you try to compile this code?

\`\`\`typescript
interface Greeter {
  greet(): string;
}
class Person implements Greeter {
  greet() { return "hi"; }
}
console.log(typeof Greeter);
\`\`\``,
    options: [
      { id: 'a', text: "It compiles and logs 'function'", isCorrect: false },
      { id: 'b', text: "Compile error: 'Greeter' refers to a type, but is being used as a value here", isCorrect: true },
      { id: 'c', text: "It compiles and logs 'object'", isCorrect: false },
      { id: 'd', text: "It compiles and logs 'undefined'", isCorrect: false },
    ],
    hints: ['Just like `type` aliases, `interface` declares something that exists ONLY in the type world — it never generates any value or object in JavaScript', '`Person`, the class implementing `Greeter`, exists normally at runtime; the `Greeter` interface itself does not'],
    explanation: 'Interfaces (just like `type` aliases) are completely erased during compilation — they never generate any code or object in JavaScript. `Person`, being a `class`, DOES exist at runtime (classes generate real constructor functions), but `Greeter` itself never existed as a value. Trying to use it inside `typeof Greeter` is trying to reference an identifier that was never declared as a variable, producing the error "\'Greeter\' only refers to a type, but is being used as a value here".',
    tags: ['interface', 'type-vs-value', 'compile-error', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-025',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `What happens when you try to compile this code?

\`\`\`typescript
abstract class Shape {
  abstract area(): number;
}
const shape = new Shape();
\`\`\``,
    options: [
      { id: 'a', text: "It compiles normally; the error only shows up when calling `shape.area()`", isCorrect: false },
      { id: 'b', text: 'Compile error: cannot create an instance of an abstract class', isCorrect: true },
      { id: 'c', text: 'It compiles and `shape` becomes `undefined`', isCorrect: false },
      { id: 'd', text: 'Throws a runtime error, but compiles fine', isCorrect: false },
    ],
    hints: ['`abstract` classes exist to be EXTENDED, never instantiated directly', "The `abstract area()` method has no body/implementation — instantiating `Shape` directly would leave that method \"empty\", which TypeScript forbids at compile time"],
    explanation: 'Classes declared as `abstract` cannot be instantiated directly with `new` — they serve as a base for concrete subclasses, which must implement every `abstract` method. Since `Shape.area()` is abstract (no body), TypeScript blocks the `new Shape()` attempt at COMPILE time, with the error "Cannot create an instance of an abstract class", before any execution even happens.',
    tags: ['abstract-class', 'compile-error', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-026',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
interface Options { timeout?: number; }
const opts: Options = {};
console.log("timeout" in opts, Object.keys(opts).length);
\`\`\``,
    options: [
      { id: 'a', text: 'true, 1', isCorrect: false },
      { id: 'b', text: 'false, 0', isCorrect: true },
      { id: 'c', text: 'true, 0', isCorrect: false },
      { id: 'd', text: 'false, 1', isCorrect: false },
    ],
    hints: ['An optional property (`?`) means it MAY be completely ABSENT from the object — not that it exists with the value `undefined`', 'Since `opts` was created as `{}`, the `timeout` property literally does not exist on this object at runtime'],
    explanation: 'The `?` on an optional property (`timeout?: number`) means it may be entirely ABSENT from the object, not that it is present with the value `undefined`. Since `opts` is literally `{}`, the `timeout` key was never added to the object — that\'s why `"timeout" in opts` returns `false` (the `in` operator checks key EXISTENCE, not its value) and `Object.keys(opts)` returns an empty array, with `.length` equal to `0`.',
    tags: ['optional-property', 'undefined-vs-absent', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-027',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: `This project's \`tsconfig.json\` has \`noImplicitAny: true\`. What happens when you try to compile this code?

\`\`\`typescript
function add(a, b) {
  return a + b;
}
\`\`\``,
    options: [
      { id: 'a', text: 'It compiles normally; `a` and `b` implicitly get type `any`', isCorrect: false },
      { id: 'b', text: "Compile error: parameter 'a' implicitly has an 'any' type", isCorrect: true },
      { id: 'c', text: 'It compiles, but with a warning, not an error', isCorrect: false },
      { id: 'd', text: 'Compile error only if the function is exported', isCorrect: false },
    ],
    hints: ['With no type annotation on the parameters, and no way to infer a type from a default value or context, TypeScript would normally treat them as `any`', 'With `noImplicitAny: true`, exactly this situation (an implicit, not explicit, "any") becomes a compile error instead of silently passing'],
    explanation: 'With no type annotations on `a` and `b`, and no way to infer the type from context, TypeScript would normally default both to type `any`. The `noImplicitAny: true` flag (present in this project\'s actual `tsconfig.base.json`) turns exactly that scenario into a compile error — forcing every "any" in the code to be an explicit choice by the developer (`a: any`), never a silent oversight.',
    tags: ['noImplicitAny', 'compile-error', 'tsconfig', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-028',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: `What does this code log to the console?

\`\`\`typescript
type Greeting = \`Hello, \${string}!\`;
const msg: Greeting = \`Hello, \${"world"}!\`;
console.log(msg.length);
\`\`\``,
    options: [
      { id: 'a', text: '13', isCorrect: true },
      { id: 'b', text: '21 (counting the template literal type\'s characters)', isCorrect: false },
      { id: 'c', text: "Compile error: types can't have `.length`", isCorrect: false },
      { id: 'd', text: 'undefined', isCorrect: false },
    ],
    hints: ['`type Greeting = \\`Hello, \\${string}!\\`` is a template literal TYPE — it only validates the string\'s FORMAT at compile time, with zero runtime effect', 'At runtime, `msg` is simply the normal string "Hello, world!", created by a regular JavaScript template literal'],
    explanation: 'Template literal types (`\\`Hello, \\${string}!\\``) are a purely type-level feature: they restrict which string literals ARE COMPATIBLE with that format during compilation, but generate no special code. At runtime, `msg` is just the regular string `"Hello, world!"`, produced by normal JavaScript template literal interpolation — with no relation to the type system. `"Hello, world!".length` is `13`.',
    tags: ['template-literal-types', 'runtime-vs-compile-time', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-029',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 5,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: `This code is compiled with TypeScript 5.x. What happens when calling \`handle({ success: true, data: "ok" })\`?

\`\`\`typescript
type Result =
  | { success: true; data: string }
  | { success: false; error: string };

function handle(result: Result) {
  const isSuccess = result.success;
  if (isSuccess) {
    console.log(result.data);
  }
}
\`\`\``,
    options: [
      { id: 'a', text: "Compile error: TypeScript can't narrow `result` through the `isSuccess` variable", isCorrect: false },
      { id: 'b', text: "It compiles normally and logs 'ok'", isCorrect: true },
      { id: 'c', text: "It compiles, but `result.data` is typed as `string | undefined`", isCorrect: false },
      { id: 'd', text: 'It throws a runtime error', isCorrect: false },
    ],
    hints: ['Since TypeScript 4.4, the compiler gained "control flow analysis of aliased conditions and discriminants" — it can track conditions stored in a `const` variable', 'Since `isSuccess` is a `const` that is never reassigned, TypeScript can follow that `if (isSuccess)` implies `result.success === true`, correctly narrowing `result` inside the block'],
    explanation: 'This is a case where the most common intuition ("discriminated union narrowing only works by checking the property directly in the `if`") is outdated. Since TypeScript 4.4, the compiler analyzes "aliased" conditions (stored in a `const` variable) and can propagate the narrowing anyway — as long as the variable is never reassigned between the read and its use. So this code compiles perfectly, with `result.data` correctly typed as `string` inside the `if`, and the call logs `\'ok\'` normally.',
    tags: ['discriminated-union', 'control-flow-analysis', 'type-narrowing', 'output-prediction'],
  },
  {
    id: 'en-ts-pred-030',
    domain: 'typescript',
    type: 'multiple_choice',
    difficulty: 4,
    targetLevel: ['pleno-senior', 'senior'],
    language: 'en',
    text: `What happens when this code runs?

\`\`\`typescript
interface ApiUser { id: number; name: string; }
const json = '{"id": 1}'; // missing the "name" field
const user = JSON.parse(json) as ApiUser;
console.log(user.name.toUpperCase());
\`\`\``,
    options: [
      { id: 'a', text: "Compile error: the literal JSON doesn't satisfy `ApiUser`", isCorrect: false },
      { id: 'b', text: 'It compiles, but throws a runtime error: Cannot read properties of undefined', isCorrect: true },
      { id: 'c', text: "Logs 'UNDEFINED'", isCorrect: false },
      { id: 'd', text: 'Logs an empty string', isCorrect: false },
    ],
    hints: ['`JSON.parse` returns `any`, and `as ApiUser` is just a PROMISE to the compiler — TypeScript never actually validates the real structure of the received object', 'Since the real JSON has no "name" property, `user.name` is genuinely `undefined`, and calling `.toUpperCase()` on that `undefined` fails exactly like it would in plain JavaScript'],
    explanation: "This is the central danger of using `as` to \"trust\" external data (APIs, JSON, etc.): `JSON.parse` returns `any`, and `as ApiUser` only instructs the compiler to TREAT the result as if it were that type, with no real validation of its structure. Since the input JSON has no `name` property, the resulting object doesn't either — `user.name` is `undefined` at runtime, and calling `.toUpperCase()` on it throws the standard JavaScript error: `TypeError: Cannot read properties of undefined (reading 'toUpperCase')`. The safe approach is to validate the shape (e.g., with Zod) instead of just using `as`.",
    tags: ['type-assertion', 'as', 'JSON.parse', 'runtime-error', 'output-prediction'],
  },
  {
    id: "en-web-rendering-01",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What characterizes the Client-Side Rendering (CSR) process?",
    options: [
      { id: "a", text: "The server builds the complete HTML before sending it to the browser.", isCorrect: false },
      { id: "b", text: "The HTML is generated in the user's browser using JavaScript.", isCorrect: true },
      { id: "c", text: "Pages are pre-compiled during the project's build process.", isCorrect: false },
      { id: "d", text: "The server serves static files generated without the use of JavaScript.", isCorrect: false },
      { id: "e", text: "Content is rendered directly on geolocated Edge servers.", isCorrect: false },
    ],
    hints: ["Remember the word 'Client'. The heavy lifting is done on the user's device."],
    explanation: "In CSR, the server sends an almost empty HTML document with links to JavaScript files. The browser downloads the JS and executes it to build the user interface (DOM) on the client's machine.",
    tags: ["csr", "fundamentals", "javascript"],
  },
  {
    id: "en-web-rendering-02",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "In Server-Side Rendering (SSR), when is the page HTML processed and generated?",
    options: [
      { id: "a", text: "At the time the code is compiled for production (Build).", isCorrect: false },
      { id: "b", text: "On every request made by the user, in real-time on the server.", isCorrect: true },
      { id: "c", text: "In the user's browser right after downloading the JavaScript.", isCorrect: false },
      { id: "d", text: "Periodically every hour, regardless of requests.", isCorrect: false },
      { id: "e", text: "During the Service Worker's cache revalidation process.", isCorrect: false },
    ],
    hints: ["Think of the server acting like a waiter who prepares your order as soon as you place it."],
    explanation: "SSR means that the Node.js server (or another backend) generates the HTML with updated data at the exact moment the user accesses the URL.",
    tags: ["ssr", "server", "fundamentals"],
  },
  {
    id: "en-web-rendering-03",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What is the main characteristic of Static Site Generation (SSG)?",
    options: [
      { id: "a", text: "The database is queried directly by the browser.", isCorrect: false },
      { id: "b", text: "Pages contain no CSS, only static structural HTML.", isCorrect: false },
      { id: "c", text: "HTML is generated only once at build time and served as a static file.", isCorrect: true },
      { id: "d", text: "Page data is automatically updated every 5 seconds on the client.", isCorrect: false },
      { id: "e", text: "It requires an active Node.js server running 24/7 to build views.", isCorrect: false },
    ],
    hints: ["The word 'Static' indicates that the page does not change after the compilation phase."],
    explanation: "In SSG, all content is rendered during the application build. The final server just hosts and delivers pre-made files (HTML/CSS/JS).",
    tags: ["ssg", "build", "performance"],
  },
  {
    id: "en-web-rendering-04",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Why is SSR generally preferred over CSR for SEO (Search Engine Optimization) strategies?",
    options: [
      { id: "a", text: "Because the server sends the full HTML, making it immediately readable by crawlers without relying on JavaScript.", isCorrect: true },
      { id: "b", text: "Because SSR compresses image files automatically on the server.", isCorrect: false },
      { id: "c", text: "Because CSR blocks all search engine bots by security default.", isCorrect: false },
      { id: "d", text: "Because SSR eliminates the need to use meta tags and sitemaps.", isCorrect: false },
      { id: "e", text: "Because only SSR applications support HTTPS certificates.", isCorrect: false },
    ],
    hints: ["Think about what Google's robots can read the fastest upon reaching a URL."],
    explanation: "Search engines prefer ready HTML. In CSR, Google crawlers must wait to download JS, execute it, and then read the page, which is a slow and error-prone process.",
    tags: ["ssr", "seo", "crawlers"],
  },
  {
    id: "en-web-rendering-05",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is the 'Hydration' process in modern frameworks like React, Vue, and Svelte?",
    options: [
      { id: "a", text: "The conversion of pure TypeScript code to JavaScript at build time.", isCorrect: false },
      { id: "b", text: "The process where the framework attaches event listeners and interactivity to the static HTML received from the server.", isCorrect: true },
      { id: "c", text: "The sending of compressed data from the server to the client to reduce response time.", isCorrect: false },
      { id: "d", text: "The automatic reloading of the page whenever the source code is changed (Hot Module Replacement).", isCorrect: false },
      { id: "e", text: "The injection of CSS styles into the DOM after the initial page load.", isCorrect: false },
    ],
    hints: ["Water (hydration) brings life. What process brings 'life' (interactivity) to a static page?"],
    explanation: "Hydration takes an inert page structure (pure HTML from the server) and brings it to 'life' in the browser, linking JavaScript state and events (like onClick) to the corresponding DOM elements.",
    tags: ["hydration", "react", "frameworks"],
  },
  {
    id: "en-web-rendering-06",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "How does Incremental Static Regeneration (ISR) differ from traditional SSG (Static Site Generation)?",
    options: [
      { id: "a", text: "ISR requires the entire site to be rebuilt to apply any text changes.", isCorrect: false },
      { id: "b", text: "ISR works only on the client (browser), ignoring any backend server.", isCorrect: false },
      { id: "c", text: "ISR renders server components blocking the UI until the database responds fully.", isCorrect: false },
      { id: "d", text: "ISR allows updating and regenerating specific static pages in the background without needing a full site rebuild.", isCorrect: true },
      { id: "e", text: "ISR is an exclusive pattern for sites that do not use relational databases.", isCorrect: false },
    ],
    hints: ["The name says 'Incremental'. You make small continuous updates instead of starting from scratch."],
    explanation: "ISR solves the biggest problem of SSG: build times for very large sites. It allows pages to remain static and cached but revalidates and updates them individually when data expires or via triggers (on-demand).",
    tags: ["isr", "nextjs", "cache"],
  },
  {
    id: "en-web-rendering-07",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "In an architecture using a CDN (Content Delivery Network), which rendering pattern generally offers the lowest TTFB (Time to First Byte)?",
    options: [
      { id: "a", text: "Client-Side Rendering (CSR)", isCorrect: false },
      { id: "b", text: "Server-Side Rendering (SSR) without cache", isCorrect: false },
      { id: "c", text: "Static Site Generation (SSG)", isCorrect: true },
      { id: "d", text: "React Server Components (RSC)", isCorrect: false },
      { id: "e", text: "Single Page Application (SPA)", isCorrect: false },
    ],
    hints: ["The fastest response comes from where there is no real-time processing to be done."],
    explanation: "Files generated via SSG are static and can be distributed to Edge servers in a CDN. Since there is no server processing or database queries, the first byte is delivered almost instantly from the geographical location closest to the user.",
    tags: ["ttfb", "ssg", "performance", "cdn"],
  },
  {
    id: "en-web-rendering-08",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Which scenario presents a typical disadvantage of Client-Side Rendering (CSR) for users of low-processing power smartphones?",
    options: [
      { id: "a", text: "The browser refuses to execute JavaScript files on 3G connections.", isCorrect: false },
      { id: "b", text: "They will see the interface ready very quickly, but won't be able to use CSS animations.", isCorrect: false },
      { id: "c", text: "They will experience a long blank screen time (high LCP), as the phone must parse and execute a large JS bundle before rendering the UI.", isCorrect: true },
      { id: "d", text: "They will not be able to access the pages because CSR requires an always-active websockets connection.", isCorrect: false },
      { id: "e", text: "The phone battery will be preserved, as processing is done by the cloud.", isCorrect: false },
    ],
    hints: ["In CSR, who executes the code that draws the screen in front of the user?"],
    explanation: "Weaker devices struggle with CSR because the workload of building the page from JavaScript is thrown onto the user's CPU.",
    tags: ["csr", "performance", "mobile", "lcp"],
  },
  {
    id: "en-web-rendering-09",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "For which type of application are Client-Side Rendering (CSR) or Single Page Applications (SPAs) frequently the most recommended choice?",
    options: [
      { id: "a", text: "News portals where SEO monetization is the main focus.", isCorrect: false },
      { id: "b", text: "Complex administrative panels (Dashboards) protected by login, where rich interactivity is essential and SEO is irrelevant.", isCorrect: true },
      { id: "c", text: "Virtual stores and e-commerces that need all products indexed on Google.", isCorrect: false },
      { id: "d", text: "Static and simple institutional marketing pages.", isCorrect: false },
      { id: "e", text: "Blogs focused on mobile reading with very weak connectivity.", isCorrect: false },
    ],
    hints: ["Think of an application where Googlebot will never be able to access because it requires a password."],
    explanation: "B2B applications, SaaS, or panels do not require search engine indexing (since they are behind a login) and usually need the fluid desktop-style navigation that SPAs (CSR) perfectly offer.",
    tags: ["csr", "architecture", "use-case"],
  },
  {
    id: "en-web-rendering-10",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the phenomenon known as the 'Uncanny Valley' in the context of Server-Side Rendering (SSR)?",
    options: [
      { id: "a", text: "It is when images load before CSS styles, visually breaking the page.", isCorrect: false },
      { id: "b", text: "It is the period when the page has been rendered by the server and is visible, but interactive elements do not respond because JavaScript hydration hasn't finished.", isCorrect: true },
      { id: "c", text: "It is a common CORS error that occurs between Next.js and the backend during data fetch.", isCorrect: false },
      { id: "d", text: "It is the discrepancy between the Redux state stored in LocalStorage and the state served by Node.js.", isCorrect: false },
      { id: "e", text: "It is when the server sends minified code preventing application debugging via DevTools.", isCorrect: false },
    ],
    hints: ["Think of the weird feeling of clicking something that looks like a real button but does nothing."],
    explanation: "SSR sends HTML fast (the page looks ready), but JavaScript is still downloading and parsing in the background. This interval where the page looks interactive but is actually just visual frustrates the user and is called the 'Uncanny Valley'.",
    tags: ["ssr", "hydration", "ux", "performance"],
  },
  {
    id: "en-web-rendering-11",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the main advantage of the 'Streaming SSR' technique implemented in newer frameworks (e.g., React 18, Next.js App Router)?",
    options: [
      { id: "a", text: "It replaces the HTTP protocol with WebRTC in SSR applications.", isCorrect: false },
      { id: "b", text: "The server can send HTML chunks to the browser as soon as they are ready, instead of waiting for the entire page to render before sending.", isCorrect: true },
      { id: "c", text: "It exclusively processes video files, improving streaming playback directly on the Node.js server.", isCorrect: false },
      { id: "d", text: "It allows hydration to be completely bypassed, creating apps that don't use JavaScript.", isCorrect: false },
      { id: "e", text: "It removes the need for a database by saving states in CDN RAM memory.", isCorrect: false },
    ],
    hints: ["Streaming is about a continuous flow of data. You don't need to download the whole movie to start watching it."],
    explanation: "With Streaming, the server doesn't have to wait for a heavy database query to respond to the client. It sends the UI skeleton (initial HTML) immediately and, as soon as the heavy data resolves, the rest of the HTML is transmitted over the same connection.",
    tags: ["streaming", "ssr", "react", "performance"],
  },
  {
    id: "en-web-rendering-12",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What best describes the concept of 'Islands Architecture', popularized by frameworks like Astro?",
    options: [
      { id: "a", text: "Each page of the site is stored on an independent physical server to ensure resilience.", isCorrect: false },
      { id: "b", text: "The UI is delivered as static HTML, with only small 'islands' of interactivity that load and hydrate their own JavaScript in isolation.", isCorrect: true },
      { id: "c", text: "A design pattern where CSS is split by folders named as islands (e.g., components/island_header).", isCorrect: false },
      { id: "d", text: "The grouping of all site JavaScript bundles into a massive central file, called the Main Island.", isCorrect: false },
      { id: "e", text: "A method that isolates the database from the web application using Docker containers.", isCorrect: false },
    ],
    hints: ["Imagine an inert sea and small portions of land with autonomous life."],
    explanation: "The islands architecture avoids hydrating the whole page. Instead of sending an immense JS that manages even the static footer, the browser only loads the essential JS for the carousel or buy button (the interactive 'islands' in a 'sea' of static HTML).",
    tags: ["islands-architecture", "astro", "hydration"],
  },
  {
    id: "en-web-rendering-13",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "In the context of ISR and Edge Caching, what defines the 'Stale-While-Revalidate' (SWR) cache directive?",
    options: [
      { id: "a", text: "The server blocks the user until the database generates a new cached response.", isCorrect: false },
      { id: "b", text: "The CDN serves the old (stale) content immediately to the user, and in the background requests an updated version from the origin server (revalidate).", isCorrect: true },
      { id: "c", text: "The browser actively deletes its LocalStorage every 5 seconds to revalidate tokens.", isCorrect: false },
      { id: "d", text: "Outdated NPM packages in Node.js are dynamically downloaded during runtime.", isCorrect: false },
      { id: "e", text: "The response rejects requests unless they confirm the updated authentication header.", isCorrect: false },
    ],
    hints: ["Translate: serve the 'stale/old' while 'revalidating/updating'."],
    explanation: "SWR is the backbone of ISR and modern caching. It ensures users never face a loading screen if there is a cache (even expired). The current user sees the old version instantly and the next users will see the new one.",
    tags: ["swr", "cache", "isr"],
  },
  {
    id: "en-web-rendering-14",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the distinguishing feature of 'Edge Rendering' compared to traditional Server-Side Rendering (SSR)?",
    options: [
      { id: "a", text: "Rendering occurs in browser CSS Grid components instead of Flexbox.", isCorrect: false },
      { id: "b", text: "Pages are built within a Monolithic architecture hosted in a single central AWS region.", isCorrect: false },
      { id: "c", text: "The code building the HTML runs on globally distributed servers physically closer to the end user, reducing geographical latency.", isCorrect: true },
      { id: "d", text: "It is a re-rendering strategy limited to Chromium/Edge-based browsers.", isCorrect: false },
      { id: "e", text: "The application is packaged in a Java virtual machine instead of using Docker containers.", isCorrect: false },
    ],
    hints: ["Think of the concept of Edge Computing. 'Edge' of the network means proximity to the client."],
    explanation: "Traditionally, a server in Virginia (USA) processes SSR for a user in Japan, causing high latency. In Edge Rendering, Serverless platforms run functions on CDN nodes already in Japan (or nearby), creating an incredibly fast response.",
    tags: ["edge", "ssr", "serverless", "latency"],
  },
  {
    id: "en-web-rendering-15",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What does the term 'Universal JavaScript' (formerly known as Isomorphic) mean in the rendering context?",
    options: [
      { id: "a", text: "Code written only once in JavaScript that has the ability to run successfully both on the server (Node.js) and the client (browser).", isCorrect: true },
      { id: "b", text: "A command-line tool that translates PHP and Python into JavaScript universally.", isCorrect: false },
      { id: "c", text: "A database that only accepts JSON keys to store information instead of columns.", isCorrect: false },
      { id: "d", text: "The ability to create web components that work without a browser, operating in the OS.", isCorrect: false },
      { id: "e", text: "The forced migration of all source code to ESModules ignoring CommonJS.", isCorrect: false },
    ],
    hints: ["Universal = Works everywhere."],
    explanation: "The great power of tools like React or Vue is that the same visual component written by the developer can be processed on the Node server (generating HTML strings) and processed again in the browser (to update the screen via DOM API), using the same language.",
    tags: ["universal", "isomorphic", "javascript"],
  },
  {
    id: "en-web-rendering-16",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "How does the concept of 'Resumability', pioneered by the Qwik framework, attempt to overcome Hydration bottlenecks?",
    options: [
      { id: "a", text: "It removes HTML and uses only screens rendered in a WebGL  element.", isCorrect: false },
      { id: "b", text: "It serializes application state and event listeners directly into the final HTML, allowing the app to 'pause' on the server and 'resume' in the browser, downloading only tiny chunks of JS as the user interacts (O(1)).", isCorrect: true },
      { id: "c", text: "It prevents user interactions while all the megabytes of the initial JavaScript bundle have not been perfectly parsed and compiled.", isCorrect: false },
      { id: "d", text: "It is a technique where Node.js sends the RAM state via JSON Web Tokens.", isCorrect: false },
      { id: "e", text: "The framework transforms the code to WebAssembly and skips the standard browser JavaScript V8 engine.", isCorrect: false },
    ],
    hints: ["Think of the concept of picking up where you left off without having to do all the initial work again."],
    explanation: "In Hydration, the client must download the button's code and re-execute component mounting. In Resumability (Qwik), HTML arrives with the exact instruction to run. The JS for the buy button is downloaded over the network exactly at the millisecond the user clicks it.",
    tags: ["resumability", "qwik", "hydration", "performance"],
  },
  {
    id: "en-web-rendering-17",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is one of the biggest technical challenges when using the pure SSG (Static Site Generation) pattern in an E-commerce portal with 1 million products and constant price fluctuations?",
    options: [
      { id: "a", text: "SSG does not allow credit card payment integrations.", isCorrect: false },
      { id: "b", text: "Every price change, no matter how small, would require a long rebuild cycle of the entire site, which could take hours, showing outdated prices meanwhile.", isCorrect: true },
      { id: "c", text: "Images in an SSG environment must obligatorily be served in WebP base64 format.", isCorrect: false },
      { id: "d", text: "SSG frameworks are incompatible with friendly URL routing (Slug routing).", isCorrect: false },
      { id: "e", text: "Browsers block rapidly changing static data due to the client's CORS policy.", isCorrect: false },
    ],
    hints: ["If SSG creates everything at 'build', imagine having to 'build' millions of items all at once."],
    explanation: "SSG builds pages 1 by 1 at compile time. Compiling 1 million static pages requires extreme computational power and time. Prices and stock change every second, so a long build architecture would fail in data accuracy, making SSR or ISR far superior for this demand.",
    tags: ["ssg", "scale", "ecommerce", "drawbacks"],
  },
  {
    id: "en-web-rendering-18",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "In a pure Client-Side Rendering (CSR) architecture lacking Code Splitting, how do the FCP (First Contentful Paint) and TTI (Time to Interactive) metrics generally behave?",
    options: [
      { id: "a", text: "FCP is almost null and TTI never occurs.", isCorrect: false },
      { id: "b", text: "Both FCP and TTI are evaluated very quickly, but the page suffers from visual issues (Layout Shifts).", isCorrect: false },
      { id: "c", text: "Both occur very late in the timeline and almost simultaneously, because the browser only draws the screen after downloading and parsing the immense JavaScript bundle.", isCorrect: true },
      { id: "d", text: "FCP happens in the first milliseconds thanks to HTML, but TTI takes many seconds.", isCorrect: false },
      { id: "e", text: "TTI occurs perfectly before FCP due to Webpack's asynchronous preprocessing.", isCorrect: false },
    ],
    hints: ["Think: If the HTML is blank, the screen stays blank until JavaScript finishes the heavy lifting."],
    explanation: "In a React app (Create React App) without code splitting, the server returns a blank screen HTML. The browser is blocked at the `<script>` tag downloading a huge vendor.js file. Only after its execution, React draws the DOM (FCP). Since JS is already running, it is immediately interactive (TTI). Therefore, both metrics are delayed and occur together.",
    tags: ["csr", "fcp", "tti", "performance"],
  },
  {
    id: "en-web-rendering-19",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "How do the React Server Components (RSC) introduced by the React team change the client-server dynamics in web development?",
    options: [
      { id: "a", text: "They strictly run on the server by default and send none of their own JavaScript code to the client bundle, reducing the app's weight.", isCorrect: true },
      { id: "b", text: "They force classic React class components to be used as unstructured databases.", isCorrect: false },
      { id: "c", text: "They transfer the SQL database to the browser memory, using the WebSQL Engine.", isCorrect: false },
      { id: "d", text: "They prevent the use of CSS-in-JS, exclusively supporting Tailwind for isolated styling on the server.", isCorrect: false },
      { id: "e", text: "They introduce a mandatory WebSocket to synchronize global Redux state in real-time with Node.js.", isCorrect: false },
    ],
    hints: ["The name says 'Server Components', indicating the residence where they were designed to live and execute the source code."],
    explanation: "The main goal of RSCs is separating concerns. A component formatting Markdown with a heavy 200KB library can run solely on the backend. It sends the client only the pre-fabricated UI in a serialized format, saving the user from a 200KB download.",
    tags: ["rsc", "react", "server-components", "architecture"],
  },
  {
    id: "en-web-rendering-20",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "How does the On-Demand ISR (On-Demand Incremental Static Regeneration) feature implemented by platforms like Next.js work?",
    options: [
      { id: "a", text: "The server expects a manual HTTP request via an API endpoint / webhook to force immediate cache revalidation of a specific page.", isCorrect: true },
      { id: "b", text: "The application requests to update files in an IndexedDB database whenever the user minimizes and returns to the browser.", isCorrect: false },
      { id: "c", text: "It automatically removes the global cache every time the server clock strikes midnight.", isCorrect: false },
      { id: "d", text: "Users generate the pages via peer-to-peer (P2P) processing, splitting the computational demand load.", isCorrect: false },
      { id: "e", text: "An artificial intelligence tries to predict when the user will scroll and only rebuilds pages of visible links.", isCorrect: false },
    ],
    hints: ["On-demand means acting under command/event instead of working through automated time routines."],
    explanation: "In time-based ISR (`revalidate: 60`), cache updates every 60s at most. 'On-Demand ISR' discards the timer. When an admin edits text in the CMS, the CMS sends a request to the web app saying 'URL /product-xyz changed, update the cache now!', ensuring precise and instant updates.",
    tags: ["isr", "cache", "webhook", "on-demand"],
  },
  {
    id: "en-browser-rendering-01",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What does the browser do first upon receiving the HTML response of a page?",
    options: [
      { id: "a", text: "It executes all of the page's JavaScript before processing anything else.", isCorrect: false },
      { id: "b", text: "It parses the HTML, building the DOM tree token by token, incrementally.", isCorrect: true },
      { id: "c", text: "It downloads all of the page's images in parallel before processing the text.", isCorrect: false },
      { id: "d", text: "It sends a request to the server asking which rendering engine to use.", isCorrect: false },
      { id: "e", text: "It compiles the HTML directly to bytecode before displaying any content.", isCorrect: false },
    ],
    hints: ["Think about how the browser can show partial page content before it finishes loading completely."],
    explanation: "The browser processes HTML byte by byte, converting characters into tokens and tokens into nodes, building the DOM (Document Object Model) tree incrementally, without waiting for the entire document to arrive to start the work.",
    tags: ["dom", "parsing", "fundamentals"],
  },
  {
    id: "en-browser-rendering-02",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What is the CSSOM (CSS Object Model)?",
    options: [
      { id: "a", text: "A file extension used to store stylesheets on the server.", isCorrect: false },
      { id: "b", text: "A CSS framework that replaces Tailwind in Next.js projects.", isCorrect: false },
      { id: "c", text: "A tree representation, similar to the DOM, that the browser builds from all CSS rules applicable to the page.", isCorrect: true },
      { id: "d", text: "An internal browser database that stores hexadecimal colors used in the project.", isCorrect: false },
      { id: "e", text: "The name given to the CSS file minification process before deploy.", isCorrect: false },
    ],
    hints: ["The name is literal: it's the 'DOM' of CSS."],
    explanation: "Just as HTML is converted into the DOM tree, the browser parses all CSS (from external files, `<style>` tags, and style attributes) and builds an equivalent tree structure — the CSSOM — representing all style rules and their specificity.",
    tags: ["cssom", "css", "fundamentals"],
  },
  {
    id: "en-browser-rendering-03",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What is the 'Critical Rendering Path'?",
    options: [
      { id: "a", text: "The sequence of steps the browser goes through to convert HTML, CSS, and JavaScript into pixels on screen: parsing, DOM/CSSOM construction, render tree, layout, and paint.", isCorrect: true },
      { id: "b", text: "The shortest path between server and client measured in network milliseconds.", isCorrect: false },
      { id: "c", text: "A fallback route used exclusively when JavaScript fails to load.", isCorrect: false },
      { id: "d", text: "Chrome's algorithm that decides which browser tab to close when RAM is full.", isCorrect: false },
      { id: "e", text: "A set of automated tests that checks for CSS errors before deploy.", isCorrect: false },
    ],
    hints: ["Think of the path that connects 'document downloaded' to 'pixels visible on screen'."],
    explanation: "The Critical Rendering Path is the set of steps the browser must complete to perform the page's first render: building the DOM, building the CSSOM, combining them into the render tree, computing layout, and finally painting pixels on screen.",
    tags: ["critical-rendering-path", "performance", "fundamentals"],
  },
  {
    id: "en-browser-rendering-04",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Why is CSS considered 'render-blocking' by default?",
    options: [
      { id: "a", text: "Because CSS files are always bigger in byte size than JavaScript files.", isCorrect: false },
      { id: "b", text: "Because the browser avoids painting the screen with incomplete or incorrect styles, so it waits for the CSSOM to be ready before proceeding to layout and paint.", isCorrect: true },
      { id: "c", text: "Because modern servers process CSS requests more slowly than HTML requests.", isCorrect: false },
      { id: "d", text: "Because CSS needs to be compiled to WebAssembly before being interpreted by the browser.", isCorrect: false },
      { id: "e", text: "Because older browsers didn't support external stylesheets.", isCorrect: false },
    ],
    hints: ["Think about what would happen visually if the page were painted with only partially loaded styles."],
    explanation: "If the browser painted the screen before the CSSOM was complete, the user would see a 'flash' of unstyled content (FOUC) followed by an abrupt repaint. So, by default, the browser blocks rendering until it has the complete CSSOM.",
    tags: ["css", "render-blocking", "fouc"],
  },
  {
    id: "en-browser-rendering-05",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Why does a `<script>` tag without `async` or `defer` attributes pause HTML parsing?",
    options: [
      { id: "a", text: "Because scripts without those attributes are automatically blocked by the browser for security.", isCorrect: false },
      { id: "b", text: "Because the HTML parser must pause, fetch (if external), and execute the script immediately, since it could use `document.write()` or manipulate the DOM in a way that affects what's still to be parsed.", isCorrect: true },
      { id: "c", text: "Because scripts without `async`/`defer` are automatically converted into Web Workers.", isCorrect: false },
      { id: "d", text: "Because the browser always prioritizes CSS over JavaScript in any scenario.", isCorrect: false },
      { id: "e", text: "Because inline scripts always take longer to execute than external scripts.", isCorrect: false },
    ],
    hints: ["Think about what could go wrong if the browser kept building the DOM while a not-yet-executed script could modify it."],
    explanation: "Without `async` or `defer`, the browser treats the `<script>` as potentially able to alter the document structure via `document.write()` or direct DOM manipulation. For safety and predictability, it fully pauses HTML parsing, fetches the script (if external), and executes it before continuing.",
    tags: ["javascript", "parsing", "render-blocking"],
  },
  {
    id: "en-browser-rendering-06",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is the main difference between the `async` and `defer` attributes on a `<script>` tag?",
    options: [
      { id: "a", text: "`async` runs the script in document order; `defer` runs in random order.", isCorrect: false },
      { id: "b", text: "`defer` prevents the script from being cached by the browser; `async` allows caching.", isCorrect: false },
      { id: "c", text: "`async` executes the script as soon as it finishes downloading, possibly interrupting parsing; `defer` waits for HTML parsing to fully finish before executing, respecting script order.", isCorrect: true },
      { id: "d", text: "Both are identical and only serve as signaling for SEO tools.", isCorrect: false },
      { id: "e", text: "`async` only works on inline scripts; `defer` only works on external scripts.", isCorrect: false },
    ],
    hints: ["Think about which of the two 'respects the queue' and waits for the document to finish, and which one 'interrupts' as soon as it's ready."],
    explanation: "With `async`, the browser downloads the script in parallel with parsing but executes it immediately after the download finishes, even if that interrupts HTML parsing midway. With `defer`, the browser also downloads in parallel, but only executes after all HTML has been parsed, and guarantees execution order among multiple deferred scripts.",
    tags: ["javascript", "async", "defer", "performance"],
  },
  {
    id: "en-browser-rendering-07",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What makes up the 'Render Tree' and what does it typically exclude?",
    options: [
      { id: "a", text: "Only the page's `<div>` elements, excluding any other tag type.", isCorrect: false },
      { id: "b", text: "Only the CSS rules, with no reference to HTML elements at all.", isCorrect: false },
      { id: "c", text: "Every DOM and CSSOM node without exception, including elements with `display: none`.", isCorrect: false },
      { id: "d", text: "The visual combination of DOM and CSSOM, containing only the nodes that will actually be displayed — excluding elements with `display: none` and non-visual tags like `<head>` and `<script>`.", isCorrect: true },
      { id: "e", text: "A compressed version of the DOM used exclusively for SEO.", isCorrect: false },
    ],
    hints: ["Think about which elements actually 'occupy a visual spot' on the final screen."],
    explanation: "The Render Tree is built by combining the DOM with the CSSOM, but it contains only nodes that will be visually displayed. Elements with `display: none` are completely excluded (unlike `visibility: hidden`), as are tags with no visual representation, like `<head>`, `<script>`, and `<meta>`.",
    tags: ["render-tree", "dom", "cssom"],
  },
  {
    id: "en-browser-rendering-08",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What technically happens during the 'Layout' (also called Reflow) step of the rendering pipeline?",
    options: [
      { id: "a", text: "The browser decides which RGB colors each screen pixel should receive.", isCorrect: false },
      { id: "b", text: "The browser calculates the exact position and dimensions (width, height) of every visible element in the render tree, considering the viewport, box model, and flow rules.", isCorrect: true },
      { id: "c", text: "The browser compresses the page's images to reduce load time.", isCorrect: false },
      { id: "d", text: "The browser executes all pending JavaScript before any other step.", isCorrect: false },
      { id: "e", text: "The browser reorders DOM elements based on their CSS specificity.", isCorrect: false },
    ],
    hints: ["Think about 'where' and 'how big' each box is, not yet 'what color'."],
    explanation: "Layout (or Reflow) is the step where the browser walks the render tree and calculates the exact geometry of each box: where it starts, its width, height, and how it spatially relates to its siblings and container, respecting the CSS box model.",
    tags: ["layout", "reflow", "performance"],
  },
  {
    id: "en-browser-rendering-09",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What does the browser do during the 'Paint' step?",
    options: [
      { id: "a", text: "It fills each element's pixels with its already-calculated visual properties: colors, borders, shadows, text, and images, usually across multiple layers.", isCorrect: true },
      { id: "b", text: "It decides the exact pixel position of every element on screen for the first time.", isCorrect: false },
      { id: "c", text: "It downloads all fonts and images referenced in the CSS.", isCorrect: false },
      { id: "d", text: "It minifies the CSS and JavaScript code before displaying the page.", isCorrect: false },
      { id: "e", text: "It builds the DOM tree from the HTML received from the server.", isCorrect: false },
    ],
    hints: ["This is the step where colors finally come into play."],
    explanation: "After Layout determines where and how big each element is, the Paint step fills those pixels with the actual visual information: background color, text, borders, shadows, and images. This process is usually split into multiple layers that will later be combined in the compositing step.",
    tags: ["paint", "performance", "css"],
  },
  {
    id: "en-browser-rendering-10",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is the difference between the `<link rel=\"preload\">` and `<link rel=\"prefetch\">` resource hints?",
    options: [
      { id: "a", text: "`preload` is only used for images; `prefetch` is only used for fonts.", isCorrect: false },
      { id: "b", text: "`preload` signals a high-priority resource needed for the current page (e.g., a critical font); `prefetch` signals a low-priority resource likely to be needed on a future navigation.", isCorrect: true },
      { id: "c", text: "Both do exactly the same thing, and the difference is purely cosmetic in the attribute's name.", isCorrect: false },
      { id: "d", text: "`preload` blocks HTML parsing; `prefetch` can never be used together with HTML.", isCorrect: false },
      { id: "e", text: "`prefetch` only works on 5G connections; `preload` works on any connection.", isCorrect: false },
    ],
    hints: ["Think 'now, urgently' versus 'probably later, no rush'."],
    explanation: "`preload` tells the browser 'I know I'll need this soon on this page, fetch it with high priority now' — useful for critical fonts or important CSS. `prefetch` says 'the user will probably need this later (e.g., on the next page)', so the browser fetches it with low priority, without competing with critical resources.",
    tags: ["preload", "prefetch", "performance", "resource-hints"],
  },
  {
    id: "en-browser-rendering-11",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "Why is animating the CSS `transform` and `opacity` properties considered much cheaper (more performant) than animating `width` or `top`?",
    options: [
      { id: "a", text: "Because `transform` and `opacity` are processed by the server before reaching the browser.", isCorrect: false },
      { id: "b", text: "Because `width` and `top` are obsolete properties that modern browsers silently ignore.", isCorrect: false },
      { id: "c", text: "Because `transform` and `opacity` can be handled solely in the compositing step, running on the GPU on a separate thread, without triggering new Layout or new Paint.", isCorrect: true },
      { id: "d", text: "Because `transform` only works inside elements with `position: absolute`.", isCorrect: false },
      { id: "e", text: "Because `width` and `top` require reinitializing the entire DOM tree from scratch.", isCorrect: false },
    ],
    hints: ["Think about which step (Layout, Paint, or Composite) each type of change can completely skip."],
    explanation: "Changes to `width`, `height`, `top`, or `left` affect the element's geometry, forcing the browser to redo Layout and Paint. `transform` and `opacity`, however, can be applied directly to an already-painted compositing layer, processed by the GPU without touching Layout or Paint — which is why they're called 'compositor-only' properties.",
    tags: ["compositing", "gpu", "performance", "animation"],
  },
  {
    id: "en-browser-rendering-12",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is 'Layout Thrashing' (also called Forced Synchronous Layout)?",
    options: [
      { id: "a", text: "A CSS syntax error that prevents any style from being applied to the page.", isCorrect: false },
      { id: "b", text: "A JavaScript antipattern where, in a loop, code repeatedly alternates between writing a style (e.g., `el.style.width`) and reading a layout property (e.g., `el.offsetHeight`), forcing the browser to synchronously recompute layout on every iteration.", isCorrect: true },
      { id: "c", text: "A recommended technique to improve animation performance using `requestAnimationFrame`.", isCorrect: false },
      { id: "d", text: "The name given to the browser's process of removing unused elements from RAM.", isCorrect: false },
      { id: "e", text: "An intentional visual effect used in browser-based games (WebGL).", isCorrect: false },
    ],
    hints: ["Think about what happens when you 'ask' the browser for something's size right after you just changed that size, repeatedly."],
    explanation: "When you read a layout property (like `offsetHeight`, `getBoundingClientRect()`) right after writing a style, the browser is forced to run Layout immediately and synchronously to respond with an up-to-date value — instead of waiting and doing it optimally on the next frame. Repeating this pattern in a loop multiplies Layout recalculations, freezing the page.",
    tags: ["layout-thrashing", "performance", "javascript"],
  },
  {
    id: "en-browser-rendering-13",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the main purpose of the `requestAnimationFrame` API?",
    options: [
      { id: "a", text: "Scheduling a callback function to run right before the browser's next repaint, syncing JavaScript animations with the screen's refresh rate (usually 60fps).", isCorrect: true },
      { id: "b", text: "Forcing the browser to skip the next animation frame to save battery.", isCorrect: false },
      { id: "c", text: "Fully replacing the use of `setTimeout` and `setInterval` in any scenario, including non-visual business logic.", isCorrect: false },
      { id: "d", text: "Guaranteeing that an animation runs exactly once, with no possibility of repeating.", isCorrect: false },
      { id: "e", text: "Blocking the main thread until the next image finishes loading from the server.", isCorrect: false },
    ],
    hints: ["Think of an API specifically designed to talk to the browser's paint cycle, instead of a generic timer."],
    explanation: "Unlike `setTimeout`, which runs at arbitrary intervals unrelated to the render cycle, `requestAnimationFrame` schedules the callback to run right before the browser paints the next frame, aligning animation work with the screen's actual refresh rate and avoiding wasted work on frames that won't be shown (like background tabs).",
    tags: ["requestAnimationFrame", "animation", "performance"],
  },
  {
    id: "en-browser-rendering-14",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What does the CSS `will-change` property instruct the browser to do?",
    options: [
      { id: "a", text: "Forcing the element to completely ignore any CSS animation applied to it.", isCorrect: false },
      { id: "b", text: "Warning the browser in advance that a specific element property is likely to change soon, letting it optimize by creating a dedicated compositing layer ahead of time.", isCorrect: true },
      { id: "c", text: "Automatically swapping the element's colors based on the OS's light/dark theme.", isCorrect: false },
      { id: "d", text: "Defining which CSS property will take priority in case of a specificity conflict.", isCorrect: false },
      { id: "e", text: "Blocking future style changes via JavaScript on that element.", isCorrect: false },
    ],
    hints: ["The name is literal: it's a warning about what 'will change', not a change itself."],
    explanation: "`will-change: transform` (for example) is an optimization hint telling the browser 'this element will animate via transform soon'. This lets the browser promote the element to its own compositing layer before the animation starts, avoiding the cost of creating that layer at the exact moment the animation is triggered.",
    tags: ["will-change", "compositing", "performance", "css"],
  },
  {
    id: "en-browser-rendering-15",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "Why does animating an element's position using `top`/`left` cause reflow, while using `transform: translate()` usually doesn't?",
    options: [
      { id: "a", text: "Because `top`/`left` only work in old browsers, while `transform` is exclusive to modern browsers.", isCorrect: false },
      { id: "b", text: "Because `transform` physically moves the element out of the DOM tree during the animation.", isCorrect: false },
      { id: "c", text: "Because `top`/`left` are processed by the server, and `transform` is processed entirely by local CSS.", isCorrect: false },
      { id: "d", text: "Because `top`/`left` change the element's position within the layout flow, requiring geometry recalculation for possibly neighboring elements; `transform: translate()` visually shifts the already-painted element without affecting other elements' layout flow.", isCorrect: true },
      { id: "e", text: "Because `transform: translate()` isn't supported by any current rendering engine.", isCorrect: false },
    ],
    hints: ["Think about which of the two properties the browser considers part of the elements' positioning 'flow'."],
    explanation: "`top` and `left` (on a positioned element) are part of the Layout system — changing them can change how other elements position relative to it, requiring a new Layout calculation. `transform: translate()`, on the other hand, doesn't participate in the Layout flow: it visually shifts the element's already-painted layer, being resolved entirely in the compositing step.",
    tags: ["transform", "layout", "performance", "css"],
  },
  {
    id: "en-browser-rendering-16",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the behavioral difference between `display: none` and `visibility: hidden` in the rendering pipeline?",
    options: [
      { id: "a", text: "There is no difference at all; both properties produce exactly the same visual and performance result.", isCorrect: false },
      { id: "b", text: "`display: none` keeps the element visible but non-interactive; `visibility: hidden` removes the element from browser memory.", isCorrect: false },
      { id: "c", text: "`display: none` completely removes the element from the render tree (it doesn't participate in Layout or Paint, takes up no space); `visibility: hidden` participates in Layout normally (takes up space) but is skipped in the Paint step, becoming invisible.", isCorrect: true },
      { id: "d", text: "`visibility: hidden` only applies to images; `display: none` only applies to text.", isCorrect: false },
      { id: "e", text: "`display: none` can only be reverted by reloading the entire page; `visibility: hidden` can be reverted via JavaScript.", isCorrect: false },
    ],
    hints: ["Think about which of the two still 'reserves a spot' in the page's space, even while invisible."],
    explanation: "An element with `display: none` is treated as if it doesn't exist for Layout and Paint purposes — it's completely removed from the render tree and takes up no space. `visibility: hidden`, however, keeps the element participating in Layout normally (its space remains reserved in the page flow), but the browser simply doesn't paint it in the Paint step.",
    tags: ["display", "visibility", "layout", "paint"],
  },
  {
    id: "en-browser-rendering-17",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "Why can a heavy, synchronous JavaScript function (e.g., a computationally expensive loop) cause an entire page to visually 'freeze', even with no CSS change involved?",
    options: [
      { id: "a", text: "Because, in most browsers, JavaScript, style calculation, Layout, and Paint share the same main thread; while JS is running, the browser cannot process those other steps or respond to user events.", isCorrect: true },
      { id: "b", text: "Because JavaScript is always processed on a remote server, so the freeze is caused by network latency.", isCorrect: false },
      { id: "c", text: "Because any JavaScript function automatically turns off the device's GPU until it finishes.", isCorrect: false },
      { id: "d", text: "Because the browser needs to fully restart the Chrome process on every function execution.", isCorrect: false },
      { id: "e", text: "Because CSS and JavaScript cannot coexist on the same page without an intermediary proxy.", isCorrect: false },
    ],
    hints: ["Think about how many 'people' (threads) are actually available to do all that work at the same time."],
    explanation: "The browser's main thread is responsible for running JavaScript, computing styles, doing Layout, Paint, and processing user input events (clicks, scroll). Since it's a single thread, it can only do one thing at a time: if a heavy JavaScript loop is running, literally nothing else — including painting the screen or responding to a click — can happen until it finishes.",
    tags: ["main-thread", "javascript", "performance"],
  },
  {
    id: "en-browser-rendering-18",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "For a smooth animation at 60 frames per second (60fps), what is approximately the 'frame budget' available for all the work of a single frame (JS, style, layout, paint, composite)?",
    options: [
      { id: "a", text: "About 1 second per frame, since the human eye processes images slowly.", isCorrect: false },
      { id: "b", text: "About 16.6 milliseconds per frame (1000ms ÷ 60), and repeatedly exceeding that budget causes dropped frames, perceived as 'jank'.", isCorrect: true },
      { id: "c", text: "About 60 milliseconds per frame, exactly matching the number of frames per second.", isCorrect: false },
      { id: "d", text: "There is no time budget; the browser always renders instantly regardless of workload.", isCorrect: false },
      { id: "e", text: "About 100 milliseconds, which is Google's recommended limit for any interaction.", isCorrect: false },
    ],
    hints: ["Do the math: 1000 milliseconds divided by 60 frames."],
    explanation: "To maintain 60fps, the browser needs to produce a new frame every 1000ms ÷ 60 ≈ 16.6ms. If all the work for a frame (running JS, recalculating style, Layout, Paint, and Composite) doesn't fit in that window, the browser can't deliver the frame on time, resulting in dropped frames — the visual stutter effect known as 'jank'.",
    tags: ["frame-budget", "performance", "jank", "fps"],
  },
  {
    id: "en-browser-rendering-19",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "How does the browser's rendering cycle relate to the JavaScript event loop's microtask and macrotask queues?",
    options: [
      { id: "a", text: "The browser always renders a new frame between each individual microtask, even if there are hundreds queued.", isCorrect: false },
      { id: "b", text: "Microtasks and macrotasks are processed exclusively after all page rendering finishes, with no exception.", isCorrect: false },
      { id: "c", text: "The browser never renders while there is any pending Promise anywhere in the application.", isCorrect: false },
      { id: "d", text: "The browser processes the entire available microtask queue until it's drained, and only then — before the next macrotask — gets a chance to render a new frame; chaining microtasks indefinitely can delay rendering.", isCorrect: true },
      { id: "e", text: "Rendering and the JavaScript event loop run in completely independent processes and never interact.", isCorrect: false },
    ],
    hints: ["Think about which queue the browser insists on fully draining before even considering drawing the screen."],
    explanation: "After a macrotask finishes, the browser fully drains the microtask queue (including new microtasks scheduled by previous microtasks) before considering rendering a new frame. This means code that continuously schedules new microtasks (e.g., an infinite chain of `.then()`) can, in practice, delay rendering indefinitely, even without any blocking synchronous loop.",
    tags: ["event-loop", "microtasks", "rendering", "javascript"],
  },
  {
    id: "en-browser-rendering-20",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What performance benefit does the CSS `contain` property offer (e.g., `contain: layout paint`)?",
    options: [
      { id: "a", text: "It prevents the element from being styled by any CSS external to the component.", isCorrect: false },
      { id: "b", text: "It automatically compresses all images inside the contained element.", isCorrect: false },
      { id: "c", text: "It tells the browser that Layout or Paint changes inside that element don't affect anything outside it, allowing the browser to limit Layout/Paint recalculation to just the contained subtree, instead of potentially re-evaluating the entire page.", isCorrect: true },
      { id: "d", text: "It automatically turns the contained element into an isolated Web Component with Shadow DOM.", isCorrect: false },
      { id: "e", text: "It is the exact equivalent of `overflow: hidden`, just with a different name.", isCorrect: false },
    ],
    hints: ["Think of the literal meaning of the word 'contain' applied to the impact of visual changes."],
    explanation: "Without `contain`, the browser can't always be certain that a change inside an element won't 'leak' and affect elements outside it, so it sometimes has to re-evaluate more than necessary. With `contain: layout paint`, the developer explicitly guarantees to the browser that this subtree is isolated, enabling optimizations: Layout/Paint recalculation can be restricted to just that element.",
    tags: ["contain", "css", "performance", "layout"],
  },
  {
    id: "en-http-cache-cdn-01",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What makes up a basic HTTP request sent by a browser?",
    options: [
      { id: "a", text: "Only the destination URL, with no other information.", isCorrect: false },
      { id: "b", text: "A method (verb), a URL, headers, and optionally a body.", isCorrect: true },
      { id: "c", text: "Only the body with the data to be sent.", isCorrect: false },
      { id: "d", text: "An SSL certificate embedded in every individual request.", isCorrect: false },
      { id: "e", text: "A mandatory session identifier generated by the server before sending.", isCorrect: false },
    ],
    hints: ["Think of a letter: it has a recipient (URL), an intent (method), information on the envelope (headers), and sometimes content inside (body)."],
    explanation: "Every HTTP request is made of a method (GET, POST, PUT, DELETE, etc.), the resource URL, a set of headers (metadata like `Content-Type`, `Authorization`, `Accept`), and, for methods like POST/PUT, an optional body with the data being sent.",
    tags: ["http", "fundamentals", "network"],
  },
  {
    id: "en-http-cache-cdn-02",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What do the HTTP status code ranges (2xx, 3xx, 4xx, 5xx) represent?",
    options: [
      { id: "a", text: "Response speed categories: fast, medium, slow, and very slow.", isCorrect: false },
      { id: "b", text: "Content type categories: text, image, video, and binary.", isCorrect: false },
      { id: "c", text: "Outcome categories: success, redirection, client error, and server error, respectively.", isCorrect: true },
      { id: "d", text: "Different versions of the HTTP protocol (HTTP/2, HTTP/3, etc.).", isCorrect: false },
      { id: "e", text: "Cache priority levels defined by the server.", isCorrect: false },
    ],
    hints: ["The first digit of the number already tells you the general outcome category."],
    explanation: "HTTP statuses follow a range convention: 2xx means success (200 OK, 201 Created), 3xx means redirection (301, 302, 304), 4xx means an error caused by the client (400, 404, 401), and 5xx means a server error (500, 503).",
    tags: ["http", "fundamentals", "status-codes"],
  },
  {
    id: "en-http-cache-cdn-03",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What is the role of HTTP headers?",
    options: [
      { id: "a", text: "They carry metadata about the request or response, like content type, authentication, and cache policies.", isCorrect: true },
      { id: "b", text: "They replace the response body when the server has no data to send.", isCorrect: false },
      { id: "c", text: "They are only used to report the user's browser version.", isCorrect: false },
      { id: "d", text: "They are used exclusively in file upload requests.", isCorrect: false },
      { id: "e", text: "They directly control the page's visual layout in the browser.", isCorrect: false },
    ],
    hints: ["Think of headers as the \"label\" on a package, and the body as the contents inside it."],
    explanation: "Headers like `Content-Type`, `Authorization`, `Cache-Control`, and `Accept-Language` carry information that describes or controls how the request/response should be interpreted — without being part of the main content (body).",
    tags: ["http", "fundamentals", "headers"],
  },
  {
    id: "en-http-cache-cdn-04",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What does the `Cache-Control: max-age=3600` directive instruct the browser to do?",
    options: [
      { id: "a", text: "Wait 3600ms before displaying the response.", isCorrect: false },
      { id: "b", text: "Treat the response as \"fresh\" (valid in cache) for 3600 seconds, without needing to revalidate with the server.", isCorrect: true },
      { id: "c", text: "Make 3600 request attempts before giving up.", isCorrect: false },
      { id: "d", text: "Only store the response if its size is smaller than 3600 bytes.", isCorrect: false },
      { id: "e", text: "Limit the response to a maximum of 3600 concurrent requests.", isCorrect: false },
    ],
    hints: ["The name literally describes the \"maximum age\" a response can have before it's considered stale."],
    explanation: "`max-age` defines, in seconds, how long a cached response is considered \"fresh.\" During that period, the browser reuses the local copy without making any network request, not even a validation one.",
    tags: ["http", "cache", "cache-control"],
  },
  {
    id: "en-http-cache-cdn-05",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "How does the browser use an `ETag` to revalidate an expired cached resource?",
    options: [
      { id: "a", text: "It downloads the full resource again and compares it byte by byte locally.", isCorrect: false },
      { id: "b", text: "It sends the saved `ETag` in the `If-None-Match` header; if the server responds `304 Not Modified`, the browser reuses the cached copy without a new download.", isCorrect: true },
      { id: "c", text: "It ignores the `ETag` and always re-downloads the resource once `max-age` expires.", isCorrect: false },
      { id: "d", text: "It uses the `ETag` only to decide which CDN to fetch the resource from.", isCorrect: false },
      { id: "e", text: "It exchanges the `ETag` for a new authentication token on every request.", isCorrect: false },
    ],
    hints: ["The `ETag` works as a \"fingerprint\" of the content, used for comparison, not authentication."],
    explanation: "When a cached response expires (past `max-age`), the browser doesn't automatically discard the content: it makes a conditional request sending `If-None-Match: <saved-etag>`. If the server's content hasn't changed, it responds `304 Not Modified` (no body), and the browser keeps using the local copy — saving bandwidth.",
    tags: ["http", "cache", "etag", "validation"],
  },
  {
    id: "en-http-cache-cdn-06",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is the main function of a CDN (Content Delivery Network)?",
    options: [
      { id: "a", text: "Compile the application's source code before deployment.", isCorrect: false },
      { id: "b", text: "Distribute copies of content across edge servers geographically close to users, reducing latency.", isCorrect: true },
      { id: "c", text: "Completely replace the origin server, removing it from the architecture.", isCorrect: false },
      { id: "d", text: "Encrypt traffic between the user and the origin server.", isCorrect: false },
      { id: "e", text: "Execute the application's business logic instead of the origin server.", isCorrect: false },
    ],
    hints: ["Think of the physical distance between the user and the server as the main latency factor the CDN attacks."],
    explanation: "A CDN maintains a network of \"edge\" servers spread across the world. When a user requests a resource, it's served by the geographically closest edge, reducing network latency compared to always fetching from the origin server, which might be on another continent.",
    tags: ["cdn", "network", "latency"],
  },
  {
    id: "en-http-cache-cdn-07",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What does the \"TTL\" (Time To Live) of a cached item mean?",
    options: [
      { id: "a", text: "The total time the origin server takes to respond.", isCorrect: false },
      { id: "b", text: "The time, in seconds, that an item remains valid in cache before being considered stale and needing to be fetched again.", isCorrect: true },
      { id: "c", text: "The physical lifespan of a CDN server.", isCorrect: false },
      { id: "d", text: "The maximum number of users who can access a cached item simultaneously.", isCorrect: false },
      { id: "e", text: "The encryption duration of a TLS certificate.", isCorrect: false },
    ],
    hints: ["The name already gives the definition away: the \"lifetime\" of the cached data."],
    explanation: "TTL is a general caching concept (used in HTTP via `max-age`, in DNS, in CDNs, etc.) that defines how long a piece of data is considered valid without needing to be revalidated or refetched from the origin.",
    tags: ["cache", "ttl", "cdn"],
  },
  {
    id: "en-http-cache-cdn-08",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What does the `stale-while-revalidate` directive allow the browser/CDN to do?",
    options: [
      { id: "a", text: "Block the response until a new version is fully downloaded from the server.", isCorrect: false },
      { id: "b", text: "Immediately serve the cached version (even if already expired/\"stale\"), while fetching an updated version in the background for future use.", isCorrect: true },
      { id: "c", text: "Permanently delete the item from cache as soon as it expires.", isCorrect: false },
      { id: "d", text: "Force a new synchronous request on every access, completely bypassing the cache.", isCorrect: false },
      { id: "e", text: "Revalidate the cache only once a day, regardless of traffic.", isCorrect: false },
    ],
    hints: ["The core idea is \"never make the user wait,\" accepting showing something slightly outdated for a short time."],
    explanation: "`stale-while-revalidate=N` allows that, during the N seconds after `max-age` expires, the cache keeps serving the old response instantly (avoiding making the user wait), while firing a revalidation request in parallel that will update the cache for next time.",
    tags: ["cache", "cache-control", "stale-while-revalidate"],
  },
  {
    id: "en-http-cache-cdn-09",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What does it mean to \"invalidate\" (purge) a CDN cache?",
    options: [
      { id: "a", text: "Permanently reduce the `max-age` of all resources to zero.", isCorrect: false },
      { id: "b", text: "Force the explicit removal/refresh of a specific item across edge servers before its natural TTL expires.", isCorrect: true },
      { id: "c", text: "Completely shut down the CDN and redirect all traffic to the origin.", isCorrect: false },
      { id: "d", text: "Delete the request history recorded in the CDN logs.", isCorrect: false },
      { id: "e", text: "Block a specific user from accessing the CDN.", isCorrect: false },
    ],
    hints: ["It's the way to \"force\" an immediate update without waiting for the normal cache time to pass."],
    explanation: "When content changes before the TTL naturally expires (e.g., fixing a critical error in an image or page content), infrastructure teams trigger an invalidation/purge, instructing all edge servers to discard the old copy and fetch the new one from the origin on the next request.",
    tags: ["cdn", "cache", "invalidation", "purge"],
  },
  {
    id: "en-http-cache-cdn-10",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What are the three typical cache layers a request might cross before reaching the origin server?",
    options: [
      { id: "a", text: "DNS cache, image cache, and font cache.", isCorrect: false },
      { id: "b", text: "Browser cache (local), CDN cache (edge), and cache at the origin server/application itself.", isCorrect: true },
      { id: "c", text: "Cookie cache, session cache, and authentication cache.", isCorrect: false },
      { id: "d", text: "CPU cache, RAM cache, and disk cache.", isCorrect: false },
      { id: "e", text: "Wi-Fi router cache, internet provider cache, and firewall cache.", isCorrect: false },
    ],
    hints: ["Think of the \"shortest path first\" order: local first, then nearby network, then long network to the origin."],
    explanation: "A request can be answered at three points: by the browser's local cache (no network at all), by the CDN edge (short, nearby network hop), or — if neither has the data — by the application/origin, which may have its own internal cache layer (e.g., Redis) before querying the database.",
    tags: ["cache", "cdn", "architecture"],
  },
  {
    id: "en-http-cache-cdn-11",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the main advantage of the multiplexing introduced by HTTP/2 over HTTP/1.1?",
    options: [
      { id: "a", text: "It automatically encrypts the entire connection, which HTTP/1.1 did not.", isCorrect: false },
      { id: "b", text: "It allows multiple simultaneous requests and responses over a single TCP connection, eliminating application-level \"head-of-line blocking.\"", isCorrect: true },
      { id: "c", text: "It completely eliminates the need for HTTP headers.", isCorrect: false },
      { id: "d", text: "It replaces TCP with UDP, reducing connection latency.", isCorrect: false },
      { id: "e", text: "It allows the browser to ignore `Cache-Control` and always use the latest version.", isCorrect: false },
    ],
    hints: ["Think about how many simultaneous \"conversations\" a single connection can carry, instead of one at a time."],
    explanation: "In HTTP/1.1, each TCP connection only processes one request at a time (the browser opens several parallel connections to compensate). HTTP/2 introduces multiplexed \"streams\" within a single connection, allowing multiple requests/responses to be interleaved and processed concurrently, without one blocking another (TCP-level head-of-line blocking still exists, later solved by HTTP/3/QUIC).",
    tags: ["http", "http2", "performance", "network"],
  },
  {
    id: "en-http-cache-cdn-12",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What TCP problem does HTTP/3 (based on QUIC, over UDP) solve compared to earlier HTTP versions?",
    options: [
      { id: "a", text: "It solves \"head-of-line blocking\" at the transport level: packet loss on one stream no longer blocks the other streams of the same connection.", isCorrect: true },
      { id: "b", text: "It eliminates the need for any kind of encryption on the connection.", isCorrect: false },
      { id: "c", text: "It allows the server to send data without the client having made any prior request.", isCorrect: false },
      { id: "d", text: "It removes the need for DNS to resolve the server's domain.", isCorrect: false },
      { id: "e", text: "It makes the browser's cache permanent, with no expiration.", isCorrect: false },
    ],
    hints: ["HTTP/2 multiplexing solves blocking at the application layer, but there's still a blocking issue \"below,\" at the transport layer (TCP)."],
    explanation: "In HTTP/2 over TCP, even with application-level multiplexing, the loss of a single TCP packet blocks ALL streams of that connection until retransmission (transport-level head-of-line blocking). QUIC (the basis of HTTP/3) implements independent streams directly over UDP, so losing one packet only affects its own stream, not the others.",
    tags: ["http", "http3", "quic", "network", "performance"],
  },
  {
    id: "en-http-cache-cdn-13",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "Why is the `Vary: Accept-Encoding` header important for a cache (browser or CDN) storing responses from the same endpoint?",
    options: [
      { id: "a", text: "It instructs the cache to store separate versions of the response for each different value of the request's `Accept-Encoding` header (e.g., gzip-compressed vs. uncompressed), preventing the wrong version from being served to a client.", isCorrect: true },
      { id: "b", text: "It forces the server to always compress the response with gzip, regardless of the client.", isCorrect: false },
      { id: "c", text: "It completely disables caching for that endpoint.", isCorrect: false },
      { id: "d", text: "It sets the response's expiration time based on the compression ratio.", isCorrect: false },
      { id: "e", text: "It's used only for logging purposes and doesn't affect caching behavior.", isCorrect: false },
    ],
    hints: ["The name \"Vary\" indicates the response \"varies\" depending on another request header — the cache needs to know this to avoid mixing up versions."],
    explanation: "Caches usually identify an entry only by URL, but the same URL can generate different responses depending on request headers (e.g., one client accepts `br`, another only `gzip`). `Vary: Accept-Encoding` tells the cache \"treat requests with different `Accept-Encoding` as distinct cache entries,\" preventing a client from receiving a response compressed in a way it doesn't support.",
    tags: ["http", "cache", "vary", "headers"],
  },
  {
    id: "en-http-cache-cdn-14",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "Why is the \"cache-busting via filename hash\" technique (e.g., `app.a1b2c3.js`) considered superior to simply lowering `max-age` to force updates?",
    options: [
      { id: "a", text: "Because it allows an extremely long `max-age` (e.g., 1 year) for the file, since any content change generates a new filename — eliminating the trade-off between \"aggressive caching\" and \"fast updates.\"", isCorrect: true },
      { id: "b", text: "Because the hash encrypts the file's content, preventing unauthorized access.", isCorrect: false },
      { id: "c", text: "Because files with a hash in the name are automatically compressed by the browser.", isCorrect: false },
      { id: "d", text: "Because it reduces the file size in bytes, speeding up the download.", isCorrect: false },
      { id: "e", text: "Because it eliminates the need for any `Cache-Control` header.", isCorrect: false },
    ],
    hints: ["Think about why it would be safe to give a 1-year `max-age` to a file whose name changes every time its content changes."],
    explanation: "Without a hash in the name, there's a conflict: a long `max-age` means slow updates (users keep the old version until it expires), and a short `max-age` means constant revalidation requests. With a content-derived hash in the filename, the URL changes whenever the content changes — so the old file can be cached \"forever\" (it will never change, since it's immutable by definition) and the HTML referencing the new name simply points to the new URL.",
    tags: ["cache", "cache-busting", "build-tools", "performance"],
  },
  {
    id: "en-http-cache-cdn-15",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What typically makes up the \"cache key\" a CDN uses to identify a stored entry?",
    options: [
      { id: "a", text: "Only the IP address of the user who made the request.", isCorrect: false },
      { id: "b", text: "Typically the combination of HTTP method, host, path, and optionally query strings and specific headers defined as part of the key (e.g., via `Vary` or CDN configuration).", isCorrect: true },
      { id: "c", text: "Only the response's size in bytes.", isCorrect: false },
      { id: "d", text: "Only the time the request was made.", isCorrect: false },
      { id: "e", text: "The user's session identifier, always.", isCorrect: false },
    ],
    hints: ["Think about which parts of the request need to be identical for the CDN to decide \"this is the same thing I already have stored.\""],
    explanation: "The cache key determines what counts as \"the same request\" for caching purposes. By default, most CDNs use host + path (+ method). Query strings may or may not be part of the key (configurable), and extra headers only enter the key if there's a corresponding `Vary` — getting this wrong is a classic source of bugs, like serving one user's content to another.",
    tags: ["cdn", "cache", "cache-key"],
  },
  {
    id: "en-http-cache-cdn-16",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is an \"origin shield\" in a CDN architecture?",
    options: [
      { id: "a", text: "A firewall that completely blocks direct access to the origin.", isCorrect: false },
      { id: "b", text: "An intermediate cache layer between edge servers and the origin, which consolidates multiple cache misses from different edges into a single request to the origin, reducing its load.", isCorrect: true },
      { id: "c", text: "An exclusive SSL certificate used only by the origin.", isCorrect: false },
      { id: "d", text: "A backup server that takes over traffic if the entire CDN goes down.", isCorrect: false },
      { id: "e", text: "An encryption technique that protects data stored in the origin's database.", isCorrect: false },
    ],
    hints: ["Think about the \"everyone asking the same thing at the same time\" problem and how an intermediate layer solves it by consolidating the questions."],
    explanation: "Without an origin shield, a simultaneous cache miss across 50 different edge servers (e.g., after a global invalidation) can generate 50 identical, simultaneous requests to the origin (a \"thundering herd\"). The origin shield centralizes these misses: edges query the shield first, and only the shield (not each edge individually) queries the origin, making just one request even if 50 edges ask for the same resource at the same time.",
    tags: ["cdn", "cache", "origin-shield", "scalability"],
  },
  {
    id: "en-http-cache-cdn-17",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is \"negative caching\" (caching of error responses, like 404)?",
    options: [
      { id: "a", text: "A technique forbidden by the HTTP protocol that should never be implemented.", isCorrect: false },
      { id: "b", text: "Caching error responses (like `404 Not Found`) for a short time, to prevent repeated requests to a nonexistent resource from overloading the origin.", isCorrect: true },
      { id: "c", text: "A mechanism that inverts a response's content before storing it.", isCorrect: false },
      { id: "d", text: "A way of storing only successful (2xx) responses, ignoring all others.", isCorrect: false },
      { id: "e", text: "A feature exclusive to databases, unrelated to HTTP or CDNs.", isCorrect: false },
    ],
    hints: ["Think about how a negative answer (\"this doesn't exist\") can also be useful information to temporarily store, avoiding asking again right away."],
    explanation: "If a resource doesn't exist and every request to it has to reach the origin to confirm that, an attack or bug generating many requests to invalid URLs can overload the origin. Caching the `404` for a short time (e.g., 60 seconds) allows repeated requests to be answered by the CDN/local cache without even touching the origin, protecting against this traffic pattern.",
    tags: ["cache", "negative-caching", "resilience"],
  },
  {
    id: "en-http-cache-cdn-18",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What's the practical difference between `Cache-Control: max-age=31536000` and `Cache-Control: max-age=31536000, immutable`?",
    options: [
      { id: "a", text: "There's no real difference; `immutable` is just a comment ignored by all browsers.", isCorrect: false },
      { id: "b", text: "`immutable` instructs the browser to not even attempt to revalidate the resource on page reload (e.g., F5), whereas without it some browsers still fire a conditional revalidation request on reload, even within `max-age`.", isCorrect: true },
      { id: "c", text: "`immutable` makes the browser completely ignore `max-age` and treat the resource as eternal even after the user manually clears the cache.", isCorrect: false },
      { id: "d", text: "immutable` prevents the resource from being stored in any CDN, only in the browser.", isCorrect: false },
      { id: "e", text: "`immutable` forces the resource to be compressed before being stored.", isCorrect: false },
    ],
    hints: ["Think specifically about the page reload (F5) behavior, not the initial load."],
    explanation: "Historically, some browsers treat a page reload as a signal to revalidate resources even if still within `max-age`, generating unnecessary conditional requests (`If-None-Match`) for hashed files that never change. `immutable` is an explicit signal of \"this content will never change, not even on reload,\" eliminating these useless revalidations.",
    tags: ["http", "cache", "cache-control", "immutable"],
  },
  {
    id: "en-http-cache-cdn-19",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "Why is dynamically generated, per-user content (e.g., a notifications feed) usually configured with `Cache-Control: private, no-store` or similar, instead of being cached by a public CDN?",
    options: [
      { id: "a", text: "Because dynamic content is always larger in byte size than static content.", isCorrect: false },
      { id: "b", text: "Because caching this content in a shared layer (public CDN) risks serving one user's private data to a different user requesting the same URL.", isCorrect: true },
      { id: "c", text: "Because CDNs technically can't store responses with a `200 OK` status.", isCorrect: false },
      { id: "d", text: "Because dynamic content never uses the HTTPS protocol.", isCorrect: false },
      { id: "e", text: "`no-store` is legally required for any application that uses cookies.", isCorrect: false },
    ],
    hints: ["Think about what would happen if the cache were \"shared\" across different users accessing the same URL with different personal data."],
    explanation: "A public CDN (\"shared\" cache) is shared across all users hitting that URL. If an endpoint like `/api/my-notifications` were cached in a shared way, the second user requesting that same URL could receive the cached response meant for the first user — a serious data leak. `private` instructs that only the local cache (the browser of that specific user) may store the response; `no-store` forbids any storage at all.",
    tags: ["http", "cache", "security", "privacy"],
  },
  {
    id: "en-http-cache-cdn-20",
    domain: "internet_fundamentals",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "Why can invalidation (purge) on a CDN with many edge servers take a few seconds to propagate globally, instead of being instantaneous?",
    options: [
      { id: "a", text: "Because the invalidation needs to be manually approved by an engineer every time.", isCorrect: false },
      { id: "b", text: "Because the invalidation signal needs to be distributed across the network to each individual edge server, and that propagation is subject to network latency and the distributed coordination architecture between nodes.", isCorrect: true },
      { id: "c", text: "Because each edge server needs to fully restart its operating system to apply the invalidation.", isCorrect: false },
      { id: "d", text: "Because invalidation only works if every user has their browser cache disabled.", isCorrect: false },
      { id: "e", text: "Because the HTTP protocol requires a cryptographic confirmation from each edge before accepting any invalidation.", isCorrect: false },
    ],
    hints: ["Think about scale: a command needs to \"travel\" and be applied at each of thousands of different points around the world, not in just one place."],
    explanation: "A large-scale CDN has hundreds or thousands of edge servers around the world. An invalidation isn't a single, instantaneous command: it's a message that needs to travel across the CDN's internal network and be processed by each node, which introduces an \"eventual consistency\" window — for a short period, different edges might respond with different versions of the same resource until propagation finishes.",
    tags: ["cdn", "cache", "invalidation", "distributed-systems"],
  },
  {
    id: "en-html-basic-syntax-01",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What makes up a typical HTML element, like `<p>Hello</p>`?",
    options: [
      { id: "a", text: "Just an opening tag, with no closing.", isCorrect: false },
      { id: "b", text: "An opening tag, the content, and a matching closing tag.", isCorrect: true },
      { id: "c", text: "Just the text content, with no tags at all.", isCorrect: false },
      { id: "d", text: "Two opening tags in sequence.", isCorrect: false },
      { id: "e", text: "A mandatory attribute followed by the content.", isCorrect: false },
    ],
    hints: ["Think of an element as an \"envelope\" that opens, holds something inside, and closes."],
    explanation: "A standard HTML element consists of an opening tag (`<p>`), the content it wraps (\"Hello\"), and a closing tag (`</p>`) with the slash before the name.",
    tags: ["html", "fundamentals", "syntax"],
  },
  {
    id: "en-html-basic-syntax-02",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What is an HTML attribute, like `src` in `<img src=\"photo.jpg\">`?",
    options: [
      { id: "a", text: "A new HTML element nested inside the tag.", isCorrect: false },
      { id: "b", text: "Extra information about the element, written inside the opening tag, usually as `name=\"value\"`.", isCorrect: true },
      { id: "c", text: "The visible text that appears on screen to the user.", isCorrect: false },
      { id: "d", text: "A comment that the browser completely ignores.", isCorrect: false },
      { id: "e", text: "A unique identifier automatically generated by the browser.", isCorrect: false },
    ],
    hints: ["Think of attributes as extra \"settings\" you pass to the element, without them appearing as text on the page."],
    explanation: "Attributes provide additional information about an element, always inside the opening tag, in the format `name=\"value\"`. They are not part of the visible content, but they change the element's behavior or meaning.",
    tags: ["html", "fundamentals", "attributes"],
  },
  {
    id: "en-html-basic-syntax-03",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Why do elements like `<img>` and `<br>` not have a closing tag?",
    options: [
      { id: "a", text: "Because the browser automatically adds the closing tag with no effect on anything.", isCorrect: false },
      { id: "b", text: "Because they're void elements: they don't wrap any content, so there's nothing to \"close.\"", isCorrect: true },
      { id: "c", text: "Because they are deprecated (obsolete) tags in HTML5.", isCorrect: false },
      { id: "d", text: "Because they only work inside forms.", isCorrect: false },
      { id: "e", text: "Because they require JavaScript to work correctly.", isCorrect: false },
    ],
    hints: ["Think about which elements have something \"inside\" them versus which already fully describe themselves through their own attributes."],
    explanation: "Void elements like `<img>`, `<br>`, `<hr>`, and `<input>` don't wrap text content or other elements — all the relevant information is already in the tag's own attributes, so there's no notion of \"inner content\" to close.",
    tags: ["html", "fundamentals", "void-elements"],
  },
  {
    id: "en-html-basic-syntax-04",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is incorrect about the nesting `<p>Text <strong>important</p></strong>`?",
    options: [
      { id: "a", text: "Nothing is incorrect; the browser always processes this structure perfectly.", isCorrect: false },
      { id: "b", text: "The elements are nested in a crossing (overlapping) way instead of one being fully inside the other — closing tags must close in the reverse order of opening.", isCorrect: true },
      { id: "c", text: "The `<strong>` element can never be used inside a `<p>`.", isCorrect: false },
      { id: "d", text: "A required attribute is missing from `<strong>`.", isCorrect: false },
      { id: "e", text: "The text \"important\" should be outside of any tag.", isCorrect: false },
    ],
    hints: ["Think of tags like parentheses: whichever one opened last should be the first to close."],
    explanation: "Elements need to be nested correctly: if `<strong>` opens after `<p>`, it needs to close before `<p>` closes. The example closes `</p>` before `</strong>`, creating an invalid overlap — browsers try to silently fix this, but the resulting HTML becomes unpredictable.",
    tags: ["html", "fundamentals", "nesting"],
  },
  {
    id: "en-html-basic-syntax-05",
    domain: "html",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the difference between \"tag,\" \"element,\" and \"DOM node\" in HTML?",
    options: [
      { id: "a", text: "They are complete synonyms, with no technical difference.", isCorrect: false },
      { id: "b", text: "\"Tag\" is the textual markup (`<p>`); \"element\" is the complete structure (opening tag + content + closing tag) described in the source code; \"DOM node\" is the in-memory, runtime representation created by the browser from that element.", isCorrect: true },
      { id: "c", text: "\"Tag\" only exists in XML, never in HTML.", isCorrect: false },
      { id: "d", text: "\"DOM node\" is just another name for an HTML attribute.", isCorrect: false },
      { id: "e", text: "\"Element\" refers exclusively to void elements, like `<img>`.", isCorrect: false },
    ],
    hints: ["Think about the difference between the \"written text\" in the HTML file and the \"living structure\" that exists in the browser's memory after parsing."],
    explanation: "In the source code, you write \"tags\" (`<p>` and `</p>`) that, together with the content, form an \"element.\" When the browser parses the HTML, it creates an in-memory representation of that element called a \"DOM node\" — it's this node (not the original text) that JavaScript manipulates via `document.querySelector`, for example.",
    tags: ["html", "dom", "fundamentals"],
  },
  {
    id: "en-html-page-metadata-01",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What typically goes inside an HTML page's `<head>` element?",
    options: [
      { id: "a", text: "The main visible content of the page, like text and images.", isCorrect: false },
      { id: "b", text: "Metadata about the page — title, charset, links to CSS, meta tags — that doesn't directly appear as visible content.", isCorrect: true },
      { id: "c", text: "Only the footer of the page.", isCorrect: false },
      { id: "d", text: "JavaScript code that should run last.", isCorrect: false },
      { id: "e", text: "The list of users' comments.", isCorrect: false },
    ],
    hints: ["Think of the `<head>` as the document's \"technical sheet,\" and the `<body>` as the content you actually see on screen."],
    explanation: "The `<head>` contains information about the document (tab title, character encoding, stylesheet links, SEO meta tags) that the browser uses to process the page, but which doesn't appear as visible content inside the `<body>`.",
    tags: ["html", "metadata", "head"],
  },
  {
    id: "en-html-page-metadata-02",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What is the role of the `<title>` element inside the `<head>`?",
    options: [
      { id: "a", text: "Defines the main heading displayed in the visible body of the page (that role usually belongs to `<h1>`).", isCorrect: false },
      { id: "b", text: "Defines the text shown in the browser tab, in bookmarks, and in search results — it doesn't appear in the page body.", isCorrect: true },
      { id: "c", text: "Defines the HTML file's name.", isCorrect: false },
      { id: "d", text: "Defines the page's background color.", isCorrect: false },
      { id: "e", text: "It's optional and never affects the user experience.", isCorrect: false },
    ],
    hints: ["Think about where this text appears when you have several browser tabs open."],
    explanation: "The `<title>` controls the text shown in the browser tab, in the bookmarks/history list, and as the clickable title in search engine results — it's completely different from `<h1>`, which appears within the page's visible content.",
    tags: ["html", "metadata", "title", "seo"],
  },
  {
    id: "en-html-page-metadata-03",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Why should `<meta charset=\"utf-8\">` be among the first lines of the `<head>`?",
    options: [
      { id: "a", text: "Because it defines the document's character encoding, and the browser needs to know this as early as possible to correctly interpret the rest of the text (including accents and special characters).", isCorrect: true },
      { id: "b", text: "Because it's the only way to make the site work in any browser.", isCorrect: false },
      { id: "c", text: "Because it controls the page's download speed.", isCorrect: false },
      { id: "d", text: "Because it replaces the need for a `<title>`.", isCorrect: false },
      { id: "e", text: "Because it automatically activates the page's responsive mode.", isCorrect: false },
    ],
    hints: ["Think about what happens when accented text shows up as strange symbols (mojibake) — it's usually an encoding issue."],
    explanation: "Without declaring the charset correctly (and early), the browser might misinterpret bytes representing special characters, displaying broken symbols. Placing it right at the start of the `<head>` ensures this decision is made before processing any other text.",
    tags: ["html", "metadata", "charset", "encoding"],
  },
  {
    id: "en-html-page-metadata-04",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is the effect of `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`?",
    options: [
      { id: "a", text: "Makes the page always display at a fixed size, ignoring the screen size.", isCorrect: false },
      { id: "b", text: "Instructs the mobile browser to use the device's actual width as the viewport width, instead of simulating a shrunken desktop width — essential for responsive design.", isCorrect: true },
      { id: "c", text: "Blocks the user from zooming on the page.", isCorrect: false },
      { id: "d", text: "Defines the exact display resolution for images.", isCorrect: false },
      { id: "e", text: "Automatically activates dark mode.", isCorrect: false },
    ],
    hints: ["Without this meta tag, sites usually appear tiny and illegible on phones, requiring manual zoom."],
    explanation: "Historically, mobile browsers simulated a desktop viewport width (e.g., 980px) and shrank the entire page to fit the screen, leaving text illegible. The viewport meta tag with `width=device-width` fixes this, making the layout use the device's actual width, allowing responsive CSS media queries to work correctly.",
    tags: ["html", "metadata", "viewport", "responsive"],
  },
  {
    id: "en-html-page-metadata-05",
    domain: "html",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the practical difference between `<meta name=\"description\">` and Open Graph tags like `<meta property=\"og:description\">`?",
    options: [
      { id: "a", text: "There's no real difference; they're just two names for the same thing.", isCorrect: false },
      { id: "b", text: "`meta description` is mainly used by search engines (Google) to generate the summary snippet in search results; Open Graph tags are read by social networks (Facebook, LinkedIn, WhatsApp) to generate the preview card when sharing the link.", isCorrect: true },
      { id: "c", text: "Open Graph completely replaces the page's `<title>`.", isCorrect: false },
      { id: "d", text: "`meta description` only works in Chromium-based browsers.", isCorrect: false },
      { id: "e", text: "Open Graph is a Facebook-exclusive technology that follows no open standard.", isCorrect: false },
    ],
    hints: ["Think about who actually \"reads\" each of these tags: a search crawler, or a social media app building a link preview."],
    explanation: "Each metadata consumer reads different tags: search engines prioritize `<meta name=\"description\">` for the result snippet; social networks use the Open Graph protocol (`og:title`, `og:description`, `og:image`) to build the preview card when a link is pasted. A well-optimized site configures both, since they serve different purposes and audiences.",
    tags: ["html", "metadata", "seo", "open-graph"],
  },
  {
    id: "en-html-headings-paragraphs-01",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "How many native heading levels are available in HTML, from `<h1>` to `<h6>`?",
    options: [
      { id: "a", text: "Only 2: `<h1>` and `<h2>`.", isCorrect: false },
      { id: "b", text: "6 levels, from `<h1>` (most important) to `<h6>` (least important).", isCorrect: true },
      { id: "c", text: "An unlimited number, with no maximum defined by the specification.", isCorrect: false },
      { id: "d", text: "10 levels, from `<h1>` to `<h10>`.", isCorrect: false },
      { id: "e", text: "Only 1, since `<h1>` is the only valid title per page.", isCorrect: false },
    ],
    hints: ["Count from `<h1>` to `<h6>` — those are exactly the six numbers."],
    explanation: "HTML defines 6 heading levels: `<h1>` represents the most important level (usually the page's main title) and `<h6>` the least important, creating a semantic hierarchy of the content.",
    tags: ["html", "headings", "fundamentals"],
  },
  {
    id: "en-html-headings-paragraphs-02",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "Which HTML element is used to mark up a paragraph of text?",
    options: [
      { id: "a", text: "`<span>`", isCorrect: false },
      { id: "b", text: "`<p>`", isCorrect: true },
      { id: "c", text: "`<div>`", isCorrect: false },
      { id: "d", text: "`<text>`", isCorrect: false },
      { id: "e", text: "`<paragraph>`", isCorrect: false },
    ],
    hints: ["The letter \"p\" in the tag name is already the first letter of the word it represents."],
    explanation: "`<p>` is the correct semantic element for a block of running text (a paragraph). Browsers and screen readers apply default spacing and treatment to it, recognizing it as an independent unit of text.",
    tags: ["html", "paragraphs", "fundamentals"],
  },
  {
    id: "en-html-headings-paragraphs-03",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Why is \"skipping\" heading levels (e.g., going from `<h1>` directly to `<h4>`) considered bad practice?",
    options: [
      { id: "a", text: "Because HTML technically does not allow skipping levels — the browser blocks rendering.", isCorrect: false },
      { id: "b", text: "Because it breaks the document's hierarchical/semantic structure, making navigation harder for screen reader users who rely on heading levels to understand the content's organization.", isCorrect: true },
      { id: "c", text: "Because it makes the text visually larger than expected.", isCorrect: false },
      { id: "d", text: "Because it prevents CSS from being applied correctly to headings.", isCorrect: false },
      { id: "e", text: "Because skipped headings are automatically converted into `<p>` by the browser.", isCorrect: false },
    ],
    hints: ["Think of someone navigating the page only by headings, without seeing the visual content between them."],
    explanation: "Screen readers let users \"navigate the skeleton\" of the page by jumping between headings. If the levels skip inconsistently (h1 → h4), the user loses the real sense of hierarchy: it's unclear whether that h4 is a direct subsection of the h1 or whether intermediate context levels are missing.",
    tags: ["html", "headings", "accessibility"],
  },
  {
    id: "en-html-headings-paragraphs-04",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Why is the general recommendation to have only one `<h1>` per page?",
    options: [
      { id: "a", text: "Because older browsers crash when encountering a second `<h1>`.", isCorrect: false },
      { id: "b", text: "Because `<h1>` represents the main topic/overall title of that specific page — having multiple `<h1>`s confuses the semantic hierarchy of what the document's central subject actually is.", isCorrect: true },
      { id: "c", text: "Because the HTML5 specification technically forbids more than one `<h1>`, causing a fatal validation error.", isCorrect: false },
      { id: "d", text: "Because each additional `<h1>` reduces page load speed.", isCorrect: false },
      { id: "e", text: "Because the second `<h1>` is automatically ignored and not rendered.", isCorrect: false },
    ],
    hints: ["Think of `<h1>` as the single answer to the question \"what is this page about, in one sentence?\""],
    explanation: "Although HTML5 technically allows multiple `<h1>`s (especially within distinct `<article>`/`<section>` elements), well-established accessibility and SEO best practice is to keep a single `<h1>` representing that page's main and exclusive subject, leaving the other levels (`<h2>`, `<h3>`...) for subdividing the content.",
    tags: ["html", "headings", "seo", "accessibility"],
  },
  {
    id: "en-html-headings-paragraphs-05",
    domain: "html",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the heading-based \"outline algorithm\" (document outline), and why is it relevant for screen readers?",
    options: [
      { id: "a", text: "It's an image compression algorithm used to optimize page loading.", isCorrect: false },
      { id: "b", text: "It's the implicit hierarchical structure that browsers and assistive technologies build from heading levels (`<h1>`-`<h6>`), allowing screen readers to present a \"navigable index\" of the page without needing to read all the content linearly.", isCorrect: true },
      { id: "c", text: "It's exclusive to PDF documents and has no relation to HTML.", isCorrect: false },
      { id: "d", text: "It's a feature that automatically converts headings into navigation links.", isCorrect: false },
      { id: "e", text: "It's an obsolete standard that was completely removed from HTML5.", isCorrect: false },
    ],
    hints: ["Think about how a screen reader might offer a \"quick navigation menu\" based purely on the heading structure."],
    explanation: "Based on the heading levels used (and their order/nesting), assistive technologies build a navigation tree (\"outline\") of the page — similar to an automatic table of contents. Screen reader users often open this heading list to \"jump\" straight to the section of interest, without needing to listen to the entire document from the start.",
    tags: ["html", "headings", "accessibility", "document-outline"],
  },
  {
    id: "en-html-emphasis-importance-01",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What does the `<strong>` element semantically indicate about its content?",
    options: [
      { id: "a", text: "That the text should just appear visually bold, with no additional meaning.", isCorrect: false },
      { id: "b", text: "That the content has strong importance, seriousness, or urgency — screen readers often change the voice's tone when reading that part.", isCorrect: true },
      { id: "c", text: "That the text is a quotation from another source.", isCorrect: false },
      { id: "d", text: "That the text should be ignored by search engines.", isCorrect: false },
      { id: "e", text: "That the text represents programming code.", isCorrect: false },
    ],
    hints: ["Think about the difference between \"looking\" bold and \"meaning\" something important."],
    explanation: "`<strong>` is semantic, not just visual: it communicates that the passage has strong importance within the context. Browsers display it bold by default, but the real meaning is conveyed to assistive technologies regardless of visual style.",
    tags: ["html", "semantics", "strong"],
  },
  {
    id: "en-html-emphasis-importance-02",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What does the `<em>` element semantically indicate about its content?",
    options: [
      { id: "a", text: "That the text should just appear italic, with no additional meaning.", isCorrect: false },
      { id: "b", text: "That the passage has stress emphasis — it would change how you \"say\" the sentence out loud.", isCorrect: true },
      { id: "c", text: "That the text represents a typo.", isCorrect: false },
      { id: "d", text: "That the content is the page's main title.", isCorrect: false },
      { id: "e", text: "That the text should open in a new tab.", isCorrect: false },
    ],
    hints: ["Think about which word in a sentence, if \"spoken\" differently, would change its meaning — that's where `<em>` would go."],
    explanation: "`<em>` marks stress emphasis — the kind of emphasis that would change the meaning or tone of a sentence if spoken aloud. This is different from `<i>`, which is purely stylistic (italics with no semantic meaning attached).",
    tags: ["html", "semantics", "em"],
  },
  {
    id: "en-html-emphasis-importance-03",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is the fundamental difference between `<b>`/`<i>` and `<strong>`/`<em>`?",
    options: [
      { id: "a", text: "There's no difference; they're fully interchangeable tag pairs in any situation.", isCorrect: false },
      { id: "b", text: "`<b>` and `<i>` are purely presentational (bold/italic with no semantic meaning), while `<strong>` and `<em>` carry semantic meaning (importance/emphasis) beyond the default visual style.", isCorrect: true },
      { id: "c", text: "`<b>` and `<i>` only work inside tables.", isCorrect: false },
      { id: "d", text: "`<strong>` and `<em>` were removed in HTML5 and replaced by `<b>`/`<i>`.", isCorrect: false },
      { id: "e", text: "`<b>` and `<i>` are exclusive to text in another language.", isCorrect: false },
    ],
    hints: ["Ask yourself: \"if I remove the visual style, does the sentence's meaning change?\" — if yes, use the semantic version."],
    explanation: "Practical rule: use `<strong>`/`<em>` when the meaning of the text genuinely requires semantic highlighting/emphasis (which assistive technologies should convey); use `<b>`/`<i>` only when the highlight is purely stylistic, without changing the sentence's meaning (e.g., a species name in italics by typographic convention).",
    tags: ["html", "semantics", "strong", "em"],
  },
  {
    id: "en-html-emphasis-importance-04",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What changes when nesting `<em>` inside another `<em>`, as in `<em>so <em>very</em></em>`?",
    options: [
      { id: "a", text: "Nothing changes; the second `<em>` is ignored by the browser.", isCorrect: false },
      { id: "b", text: "The nested emphasis indicates an even greater level of relative emphasis on the innermost passage, compared to the surrounding text.", isCorrect: true },
      { id: "c", text: "This is syntactically invalid and breaks the page's rendering.", isCorrect: false },
      { id: "d", text: "The second `<em>` automatically becomes a `<strong>`.", isCorrect: false },
      { id: "e", text: "Nesting `<em>` removes any applied italic style.", isCorrect: false },
    ],
    hints: ["Think of emphasis as a gradual scale, not as an on/off switch."],
    explanation: "The HTML spec allows nesting `<em>` to indicate increasing degrees of relative emphasis — each additional level of nesting signals a greater weight of emphasis on that specific passage, instead of a binary \"has emphasis / doesn't\" value.",
    tags: ["html", "semantics", "em", "nesting"],
  },
  {
    id: "en-html-emphasis-importance-05",
    domain: "html",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "How do screen readers typically treat `<strong>`/`<em>` differently from `font-weight: bold`/`font-style: italic` applied via plain CSS to a `<span>`?",
    options: [
      { id: "a", text: "There is no difference at all; screen readers completely ignore both semantics and CSS.", isCorrect: false },
      { id: "b", text: "Screen readers may announce/intonate the content of `<strong>`/`<em>` differently because they recognize its semantic role, while a `<span>` with only CSS applied is, by default, treated as plain text with no indication of importance or emphasis.", isCorrect: true },
      { id: "c", text: "CSS always takes priority over HTML semantics for screen readers.", isCorrect: false },
      { id: "d", text: "`<span>` with CSS is more accessible, since it carries less markup.", isCorrect: false },
      { id: "e", text: "Screen readers literally read \"bold\" and \"italic\" out loud for `<strong>`/`<em>`, but never for CSS.", isCorrect: false },
    ],
    hints: ["Think about how someone who can't see the visual style (bold/italic) would still need to receive that information through another channel."],
    explanation: "The accessibility tree is built from HTML semantics, not visual CSS. `<strong>` and `<em>` carry implicit ARIA roles recognized by screen readers; a `<span>` styled with CSS to look visually identical does not carry that role, so blind users may completely miss the information that the passage was important/emphasized.",
    tags: ["html", "accessibility", "strong", "em", "screen-readers"],
  },
  {
    id: "en-html-lists-01",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What is the difference between `<ul>` and `<ol>`?",
    options: [
      { id: "a", text: "`<ul>` is for unordered lists (with bullet markers); `<ol>` is for ordered lists (numbered), where the sequence matters.", isCorrect: true },
      { id: "b", text: "`<ul>` is for bold text; `<ol>` is for italic text.", isCorrect: false },
      { id: "c", text: "There's no practical difference; both render identically.", isCorrect: false },
      { id: "d", text: "`<ul>` can only contain images; `<ol>` can only contain text.", isCorrect: false },
      { id: "e", text: "`<ol>` is only used inside tables.", isCorrect: false },
    ],
    hints: ["Think about whether swapping the order of items would change the list's meaning — if so, it's `<ol>`."],
    explanation: "`<ul>` (unordered list) is used when the order of items has no meaning (e.g., a list of ingredients), displayed by default with bullet markers. `<ol>` (ordered list) is used when the sequence matters (e.g., step-by-step recipe instructions), displayed by default with numbers.",
    tags: ["html", "lists", "fundamentals"],
  },
  {
    id: "en-html-lists-02",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "Where should a list item go, inside `<ul>` or `<ol>`?",
    options: [
      { id: "a", text: "Inside an `<li>` element.", isCorrect: true },
      { id: "b", text: "Inside an `<item>` element.", isCorrect: false },
      { id: "c", text: "Directly as text, with no additional tag.", isCorrect: false },
      { id: "d", text: "Inside a `<td>` element.", isCorrect: false },
      { id: "e", text: "Inside an `<option>` element.", isCorrect: false },
    ],
    hints: ["The letters \"li\" in the tag name already stand for \"list item.\""],
    explanation: "`<li>` (list item) is the standard element for each item inside a `<ul>` or `<ol>`. Each piece of list content should be wrapped in its own `<li>` tag.",
    tags: ["html", "lists", "fundamentals"],
  },
  {
    id: "en-html-lists-03",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is a description list (`<dl>`, `<dt>`, `<dd>`) used for?",
    options: [
      { id: "a", text: "For numbered lists of sequential steps, replacing `<ol>`.", isCorrect: false },
      { id: "b", text: "To group pairs of a term (`<dt>`) and its corresponding description/definition (`<dd>`), like in a glossary or a list of questions and answers.", isCorrect: true },
      { id: "c", text: "To create tables without using the `<table>` element.", isCorrect: false },
      { id: "d", text: "For lists of images without text.", isCorrect: false },
      { id: "e", text: "For tab-based navigation on a page.", isCorrect: false },
    ],
    hints: ["Think of a dictionary: each entry has a word, followed by its definition."],
    explanation: "`<dl>` (description list) wraps pairs of `<dt>` (the term being defined) and `<dd>` (the description/definition of that term). It is the semantically correct structure for glossaries, FAQs, and any content in the \"term → explanation\" format.",
    tags: ["html", "lists", "dl", "semantics"],
  },
  {
    id: "en-html-lists-04",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Is it valid to put an entire list (`<ul>`) inside a list item (`<li>`) of another list?",
    options: [
      { id: "a", text: "No, nested lists are never allowed in HTML.", isCorrect: false },
      { id: "b", text: "Yes — nested lists are valid and common, used to represent sub-items within a main item (e.g., a navigation menu with submenus).", isCorrect: true },
      { id: "c", text: "Yes, but only if the inner list is an `<ol>`.", isCorrect: false },
      { id: "d", text: "Yes, but only inside tables.", isCorrect: false },
      { id: "e", text: "No, this would generate a JavaScript error in the console.", isCorrect: false },
    ],
    hints: ["Think of a site's navigation menu with items that open submenus — that structure is usually a list inside another list."],
    explanation: "Nesting a complete `<ul>`/`<ol>` inside an `<li>` is a fully valid and common way to represent hierarchy, like categories and subcategories, or a menu with dropdown submenus.",
    tags: ["html", "lists", "nesting"],
  },
  {
    id: "en-html-lists-05",
    domain: "html",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What do the `start` and `reversed` attributes do on an `<ol>` element?",
    options: [
      { id: "a", text: "`start` defines the initial color of the numbers; `reversed` mirrors the text horizontally.", isCorrect: false },
      { id: "b", text: "`start` defines which number the list count should begin at; `reversed` flips the counting order, displaying the numbers in descending order.", isCorrect: true },
      { id: "c", text: "`start` and `reversed` are attributes exclusive to `<ul>`, not `<ol>`.", isCorrect: false },
      { id: "d", text: "`start` defines the item that should be bolded; `reversed` hides the first item.", isCorrect: false },
      { id: "e", text: "Both attributes were removed in HTML5 and no longer have any effect.", isCorrect: false },
    ],
    hints: ["Think of cases like continuing the numbering of a list interrupted by an image, or displaying a ranking from 10th to 1st place."],
    explanation: "`<ol start=\"5\">` makes the count begin at 5 instead of 1. `<ol reversed>` makes the list count in descending order (from the highest number down), useful, for example, for a \"top 10\" displayed in reverse rank order.",
    tags: ["html", "lists", "ol", "attributes"],
  },
  {
    id: "en-html-advanced-text-01",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What is the `<blockquote>` element used for?",
    options: [
      { id: "a", text: "To mark a block of text quoted from another source, usually displayed indented.", isCorrect: true },
      { id: "b", text: "To create a styled button.", isCorrect: false },
      { id: "c", text: "To insert an image with a caption.", isCorrect: false },
      { id: "d", text: "To define the page's main language.", isCorrect: false },
      { id: "e", text: "To create a borderless table.", isCorrect: false },
    ],
    hints: ["Think about when you need to visually highlight a passage quoted from another author within your own text."],
    explanation: "`<blockquote>` semantically indicates that the content is an extended quotation from another source. Browsers typically display it indented, and it can include a `cite` attribute with the URL of the original source.",
    tags: ["html", "text", "blockquote"],
  },
  {
    id: "en-html-advanced-text-02",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "Which element is appropriate for marking a snippet of programming code within text?",
    options: [
      { id: "a", text: "`<code>`", isCorrect: true },
      { id: "b", text: "`<quote>`", isCorrect: false },
      { id: "c", text: "`<bold>`", isCorrect: false },
      { id: "d", text: "`<script>`", isCorrect: false },
      { id: "e", text: "`<pre-text>`", isCorrect: false },
    ],
    hints: ["Think of the element whose own name is already the word \"code.\""],
    explanation: "`<code>` semantically marks a piece of computer code, usually displayed by default in a monospace font by browsers. Note that `<script>` is for executing JavaScript, not for displaying code as text.",
    tags: ["html", "text", "code"],
  },
  {
    id: "en-html-advanced-text-03",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is the purpose of the `title` attribute on the `<abbr>` element, as in `<abbr title=\"HyperText Markup Language\">HTML</abbr>`?",
    options: [
      { id: "a", text: "It provides the full meaning of the abbreviation/acronym, typically shown as a tooltip on hover and read by assistive technologies.", isCorrect: true },
      { id: "b", text: "It defines the browser tab's title.", isCorrect: false },
      { id: "c", text: "It replaces the visible text of the abbreviation with the attribute's content.", isCorrect: false },
      { id: "d", text: "It is an obsolete attribute with no effect in modern browsers.", isCorrect: false },
      { id: "e", text: "It defines the element's background color.", isCorrect: false },
    ],
    hints: ["Think about when you hover over an acronym on a site and a small box appears explaining what it means."],
    explanation: "The `title` attribute on `<abbr>` provides the full expansion of the abbreviation/acronym. Desktop browsers show this information as a tooltip on hover, and screen readers may announce the full content, helping users unfamiliar with the abbreviation.",
    tags: ["html", "text", "abbr", "accessibility"],
  },
  {
    id: "en-html-advanced-text-04",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "When are the `<sup>` and `<sub>` elements appropriate to use?",
    options: [
      { id: "a", text: "For navigation links at the top and bottom of the page.", isCorrect: false },
      { id: "b", text: "For superscript text (`<sup>`, e.g., mathematical exponents, footnote markers) and subscript text (`<sub>`, e.g., chemical formula indices), when the text's vertical position carries meaning.", isCorrect: true },
      { id: "c", text: "To define an element's absolute position via CSS.", isCorrect: false },
      { id: "d", text: "To replace `<strong>` and `<em>` in scientific texts.", isCorrect: false },
      { id: "e", text: "Only for decorative text with no technical meaning at all.", isCorrect: false },
    ],
    hints: ["Think of math or chemistry formulas where the (higher or lower) position of a number completely changes the meaning."],
    explanation: "`<sup>` and `<sub>` are used when the slightly raised or lowered vertical position of the text is part of the content's actual meaning — not just a random visual effect. A mathematical exponent (x²) and a chemical formula index (H₂O) are classic examples.",
    tags: ["html", "text", "sup", "sub"],
  },
  {
    id: "en-html-advanced-text-05",
    domain: "html",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "What is the difference between the `<cite>` element and the `cite` attribute of `<blockquote>`?",
    options: [
      { id: "a", text: "They are identical; one is just an alias for the other.", isCorrect: false },
      { id: "b", text: "The `<cite>` element marks the name/title of the referenced work or author, being visible content on the page; the `cite` attribute on `<blockquote>` stores the URL of the quotation's source, not displayed visually by default.", isCorrect: true },
      { id: "c", text: "The `<cite>` element can only be used inside `<table>`.", isCorrect: false },
      { id: "d", text: "The `cite` attribute completely replaces the need for the `<blockquote>` element.", isCorrect: false },
      { id: "e", text: "Both serve exclusively for social media quotations.", isCorrect: false },
    ],
    hints: ["Think of one as \"text you see on screen\" and the other as \"hidden metadata pointing to a source.\""],
    explanation: "These are two distinct features sharing the same name in different contexts: `<cite>Work Title</cite>` is a visible text element, usually italicized, referencing the title of a creative work; the `cite=\"url\"` attribute on `<blockquote>` or `<q>` is invisible metadata pointing to the quotation's source URL, used mainly by tools and search engines.",
    tags: ["html", "text", "cite", "blockquote"],
  },
  {
    id: "en-html-structuring-documents-01",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What are the `<header>` and `<footer>` elements used for?",
    options: [
      { id: "a", text: "They mark, respectively, the introductory content (e.g., logo, navigation) and the closing content (e.g., copyright, contact links) of a page or a section.", isCorrect: true },
      { id: "b", text: "They are used exclusively to define the page's background color.", isCorrect: false },
      { id: "c", text: "They are deprecated tags that should no longer be used in HTML5.", isCorrect: false },
      { id: "d", text: "`<header>` is for images, `<footer>` is for videos.", isCorrect: false },
      { id: "e", text: "They are synonyms for `<head>` and `<body>`.", isCorrect: false },
    ],
    hints: ["Think of the top and bottom of any site you visit — that's exactly the area these elements represent."],
    explanation: "`<header>` represents the introductory content of a page or section (usually logo, title, main navigation). `<footer>` represents closing content (copyright, institutional links, contact info). Both can appear multiple times on the page, within different `<article>`/`<section>` elements.",
    tags: ["html", "semantics", "header", "footer"],
  },
  {
    id: "en-html-structuring-documents-02",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "Which semantic element is appropriate for a site's main navigation menu?",
    options: [
      { id: "a", text: "`<nav>`", isCorrect: true },
      { id: "b", text: "`<menu-bar>`", isCorrect: false },
      { id: "c", text: "`<aside>`", isCorrect: false },
      { id: "d", text: "`<list>`", isCorrect: false },
      { id: "e", text: "`<section>`", isCorrect: false },
    ],
    hints: ["The element's name is already the abbreviation of the word \"navigation.\""],
    explanation: "`<nav>` is the semantic element specifically created to group a site's main navigation link blocks (main menu, breadcrumbs, pagination), allowing assistive technologies to identify and offer shortcuts to that area.",
    tags: ["html", "semantics", "nav"],
  },
  {
    id: "en-html-structuring-documents-03",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Why should there typically be only one `<main>` element per page?",
    options: [
      { id: "a", text: "Because `<main>` represents that specific page's central and unique content, unlike headers, footers, and sidebars that repeat across multiple pages of the site.", isCorrect: true },
      { id: "b", text: "Because older browsers crash with more than one `<main>`.", isCorrect: false },
      { id: "c", text: "Because `<main>` is technically an alias for `<body>`, so a second one would be redundant.", isCorrect: false },
      { id: "d", text: "`<main>` can only contain text, never images.", isCorrect: false },
      { id: "e", text: "Because the specification limits the page to at most one element of any kind.", isCorrect: false },
    ],
    hints: ["Think of `<main>` as \"what would change if I went to another page of the same site, keeping the same layout around it.\""],
    explanation: "`<main>` should wrap the content that is unique and central to that page — what differentiates it from other pages on the same site. Elements repeated across pages (logo, menu, footer) stay outside `<main>`. Having more than one visible `<main>` at the same time would confuse the idea of \"what is the single main content.\"",
    tags: ["html", "semantics", "main", "accessibility"],
  },
  {
    id: "en-html-structuring-documents-04",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What is the semantic difference between `<article>` and `<section>`?",
    options: [
      { id: "a", text: "They are identical; the choice between one and the other is purely aesthetic.", isCorrect: false },
      { id: "b", text: "`<article>` represents independent, self-contained content that would make sense distributed or reused on its own (e.g., a blog post); `<section>` represents a generic thematic division of content within a larger document, without that independence.", isCorrect: true },
      { id: "c", text: "`<section>` can only contain text; `<article>` can only contain images.", isCorrect: false },
      { id: "d", text: "`<article>` is exclusive to news websites.", isCorrect: false },
      { id: "e", text: "`<section>` was removed in HTML5 and replaced by `<article>`.", isCorrect: false },
    ],
    hints: ["Think about whether the content could be \"ripped out\" of the page and still make complete sense elsewhere."],
    explanation: "The practical test: \"would this content make sense on its own, outside this context, like an item in an RSS feed or shared in isolation?\" If yes, it's `<article>` (e.g., blog post, comment, product card). If it's just a thematic division of a larger document, without meaning on its own, it's `<section>` (e.g., \"About us\" within the homepage).",
    tags: ["html", "semantics", "article", "section"],
  },
  {
    id: "en-html-structuring-documents-05",
    domain: "html",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "How do the `<aside>` element and accessibility \"landmark roles\" relate to the semantic structuring of a page?",
    options: [
      { id: "a", text: "They have no relation at all; `<aside>` is purely a CSS visual feature.", isCorrect: false },
      { id: "b", text: "Semantic elements like `<aside>`, `<nav>`, `<main>`, and `<header>` automatically receive implicit ARIA \"landmark roles\" (e.g., `role=\"complementary\"` for `<aside>`), which assistive technologies use to let users quickly navigate between the page's major regions.", isCorrect: true },
      { id: "c", text: "`<aside>` completely eliminates the need for any ARIA attribute on any element on the page.", isCorrect: false },
      { id: "d", text: "Landmark roles only exist in applications that use JavaScript for accessibility.", isCorrect: false },
      { id: "e", text: "`<aside>` is equivalent to `<div role=\"main\">`.", isCorrect: false },
    ],
    hints: ["Think about how a screen reader could offer a \"page regions menu\" (header, navigation, main content, sidebar, footer) without you writing any `role` attribute manually."],
    explanation: "Several HTML5 structural elements automatically map to implicit ARIA \"landmark roles\": `<header>` → `banner`, `<nav>` → `navigation`, `<main>` → `main`, `<aside>` → `complementary`, `<footer>` → `contentinfo`. Screen readers offer a menu listing these landmarks, allowing fast navigation without needing to manually add ARIA.",
    tags: ["html", "semantics", "aside", "accessibility", "aria"],
  },
  {
    id: "en-html-creating-links-01",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "Which attribute of the `<a>` element defines where the link points to?",
    options: [
      { id: "a", text: "`href`", isCorrect: true },
      { id: "b", text: "`src`", isCorrect: false },
      { id: "c", text: "`link`", isCorrect: false },
      { id: "d", text: "`target`", isCorrect: false },
      { id: "e", text: "`alt`", isCorrect: false },
    ],
    hints: ["The attribute's abbreviation already contains the letters of \"hypertext reference.\""],
    explanation: "`href` (hypertext reference) is the attribute that defines the destination of a link in `<a>`. `src` is used on elements like `<img>` and `<script>` for the resource's source, not on navigation links.",
    tags: ["html", "links", "fundamentals"],
  },
  {
    id: "en-html-creating-links-02",
    domain: "html",
    type: "multiple_choice",
    difficulty: 2,
    targetLevel: ['junior', 'pleno'],
    language: 'en',
    text: "What is the difference between a relative URL (`/about`) and an absolute URL (`https://site.com/about`) in a link?",
    options: [
      { id: "a", text: "Relative URLs only work on local servers, never in production.", isCorrect: false },
      { id: "b", text: "A relative URL is resolved relative to the page's current domain/path (useful for internal links on the same site); an absolute URL specifies the full address, including protocol and domain (needed for links to other sites).", isCorrect: true },
      { id: "c", text: "There's no practical difference; both always point to the same place.", isCorrect: false },
      { id: "d", text: "Absolute URLs load faster than relative ones.", isCorrect: false },
      { id: "e", text: "Relative URLs can only be used inside `<img>`, never in `<a>`.", isCorrect: false },
    ],
    hints: ["Think of giving an address saying just \"turn at the next street\" (relative, depends on where you already are) versus the full address with city and country (absolute)."],
    explanation: "A relative URL like `/about` or `contact.html` is interpreted relative to the current domain, so the same link works correctly in both development and production environments without changes. An absolute URL includes the protocol (`https://`) and the full domain, and is required when linking to a different external site.",
    tags: ["html", "links", "urls"],
  },
  {
    id: "en-html-creating-links-03",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "What does the `target=\"_blank\"` attribute do on a link, and what is the implication of using it?",
    options: [
      { id: "a", text: "It makes the link open in a new tab/window, instead of navigating in the current tab — which can disorient users if overused, and requires extra security care.", isCorrect: true },
      { id: "b", text: "It clears the user's browsing history.", isCorrect: false },
      { id: "c", text: "It makes the link automatically download the file instead of navigating to it.", isCorrect: false },
      { id: "d", text: "It blocks the link from working on mobile devices.", isCorrect: false },
      { id: "e", text: "It makes the link inaccessible to screen readers.", isCorrect: false },
    ],
    hints: ["Think about how many times you've gotten confused by a site unexpectedly opening multiple tabs at once."],
    explanation: "`target=\"_blank\"` instructs the browser to open the destination in a new tab or window. While useful in some cases (e.g., links to external sites while the user keeps the current site open), overuse can confuse users with multiple tabs opening unexpectedly, and for historical security reasons it should always be paired with `rel=\"noopener noreferrer\"`.",
    tags: ["html", "links", "target", "ux"],
  },
  {
    id: "en-html-creating-links-04",
    domain: "html",
    type: "multiple_choice",
    difficulty: 3,
    targetLevel: ['pleno', 'pleno-senior'],
    language: 'en',
    text: "Why is `rel=\"noopener noreferrer\"` recommended alongside `target=\"_blank\"`?",
    options: [
      { id: "a", text: "Because without it the link simply doesn't work in any browser.", isCorrect: false },
      { id: "b", text: "Because, without `noopener`, the page opened in the new tab gains JavaScript access (`window.opener`) to the originating tab, potentially redirecting it maliciously (\"tabnabbing\"); `noreferrer` additionally prevents sending the `Referer` header with the origin URL.", isCorrect: true },
      { id: "c", text: "Because it improves the destination page's loading speed.", isCorrect: false },
      { id: "d", text: "Because it is required by the Google SEO specification for any external link.", isCorrect: false },
      { id: "e", text: "Because it automatically converts the link to HTTPS.", isCorrect: false },
    ],
    hints: ["Think about why giving the new tab a \"remote control\" over the old tab can be dangerous when the link's destination is untrusted."],
    explanation: "Without `noopener`, the newly opened page (even from another domain) has a JavaScript reference (`window.opener`) back to the original tab, and could theoretically use it to redirect that original tab to a phishing page — an attack known as \"tabnabbing.\" `noopener` removes that reference; `noreferrer` additionally prevents the origin URL from being sent in the request's `Referer` header.",
    tags: ["html", "links", "security", "rel"],
  },
  {
    id: "en-html-creating-links-05",
    domain: "html",
    type: "multiple_choice",
    difficulty: 4,
    targetLevel: ['senior', 'staff'],
    language: 'en',
    text: "How does an anchor link (e.g., `<a href=\"#section-3\">`) interact with an element's `id` attribute on the same page, and what does the `download` attribute add to link functionality?",
    options: [
      { id: "a", text: "Anchors (`#id`) make the browser scroll the page to the element with that matching `id`; `download` instructs the browser to save the linked resource as a file instead of navigating to/displaying it, optionally setting the saved file's name.", isCorrect: true },
      { id: "b", text: "Anchors only work if the target element has the CSS class `.anchor`.", isCorrect: false },
      { id: "c", text: "`download` makes the link automatically open in a new tab.", isCorrect: false },
      { id: "d", text: "Anchors require JavaScript to work; plain HTML does not support this behavior.", isCorrect: false },
      { id: "e", text: "`download` only works on links pointing to a different domain.", isCorrect: false },
    ],
    hints: ["Think of \"back to top\" links on long pages (anchor) and \"download PDF\" buttons (download) you've seen on sites."],
    explanation: "A link with `href=\"#section-3\"` makes the browser automatically scroll (no JavaScript needed) to the page element with `id=\"section-3\"`, without reloading the page. The boolean `download` attribute on a file link (e.g., `<a href=\"report.pdf\" download=\"my-report.pdf\">`) signals the browser to download the file instead of trying to display it/navigate to it, and can optionally suggest the saved file's name.",
    tags: ["html", "links", "anchor", "download"],
  },
]
