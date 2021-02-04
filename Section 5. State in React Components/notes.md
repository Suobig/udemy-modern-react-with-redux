# Section 5. State in React Components

## State system

Learning state system is a bit challenging.

Rules of state:

- Only usable with class components;
- you will confuse props with state :( ;
- 'state is a JS object that contains data relevant to a component;
- uptating 'state' on a component  cuases the component to (almost) instantly render;
- state must be initialized when a component is created;
- state can **only** be updated using the function 'setState'.

`render` method is going to be called very frequently, so it should be very light-weight.

Initialize: `this.state = { ... }` in the constructor.

Change: `this.setState({ ... })`. Whenever changed - component rerenders.

We don't have to define our `state` in constructor. We can just write `state = { ... }` outside the constructor, and, if we have nothing else - get rid of constructor!
