Topic 1 - Optional Chaining(?.)
When working with real data from APIs, properties might not always exist. Without optional chaining, accessing a missing nested property crashes your entire app.
Optional chaining (?.) safely accesses nested object properties. If any part of the chain is null or undefined, it returns undefined instead of throwing an error.

TOPIC 2 — Nullish Coalescing (??)
?? only falls back to the default when the value is null or undefined. Unlike || which triggers for all falsy values including 0, false, and empty string. This makes ?? safer for default values in real applications where 0 or false are meaningful."

TOPIC 3 — Short Circuit Evaluation
&& short circuit — if left is falsy, right never runs
|| short circuit — if left is truthy, right never runs

TOPIC 4 — Destructuring 
Destructuring is a JavaScript feature that allows unpacking values from arrays or objects into variables in a concise way.”

TOPIC 5 — Rest and Spread
Same syntax (...) but opposite purposes. Spread expands an array/object into individual elements. Rest collects multiple elements into an array. Spread is used in function calls and literals. Rest is used in function parameters and destructuring.

TOPIC 6 — Enhanced Object Literals