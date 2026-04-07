1. What is the event object?
The event object is automatically passed to every event listener callback. It contains details about the event — type, target element, mouse position, key pressed etc. e.target refers to the element that triggered the event, e.target.value gets the current value of an input.

2. What does preventDefault do?
It stops the browser's default behavior for that event. Most commonly used on form submit to handle the data with JS instead of letting the browser reload the page. This is the foundation of how React handles forms.

3. What is event delegation and why is it useful?
Event delegation uses event bubbling to handle events at a parent level instead of attaching listeners to each child. It's more performant and works for dynamically added elements — if you add a new li later, it automatically works because the listener is on the parent.

4. What's the difference between e.target and e.currentTarget?
e.target → element that triggered the event (the li that was clicked)
e.currentTarget → element the listener is attached to (the ul)

