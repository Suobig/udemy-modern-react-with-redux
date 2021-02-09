# Section 7. Handling User Input with Forms and Events

## Links

## Main Topics

- How to get feedback from the user?
- How to fetch data from an outside API or server?
- How to show lists of recods?

## App description

What the app has to do:

- get user input;
- search for images based on user's input
- display list of images that was found;
- (v2) display images as tiles, so they look nicely on the screen.

## Main challenges

- need to get a search term from the user;
- need to use that search term to make a request to an outside API;
- need to take the fetched images and show them on the screen.

## Handling events

There're 2 main ways to handle events:

- pass a handler function
- create arrow function right inside JSX

Useful events:

- `onChange` - when user changes text in an input
- `onClick` - when user clicks on something;
- `onSubmit` - when user submits a form.

There's a convention on how to name callback handlers:

`on<elementName><eventName>`

For example:

- `onFormSubmit`
- `onInputChange`
- `onButtonClick`
- etc.

## Controlled and Uncontrolled elements

"Controlled" means that its value is being controlled by a `state` object. This basically moves the source of information about current state of an element from DOM (Where we would seek it with uncontrolled components) to React.

We want all our elements to be controlled by React.

## this in React

Each class-based react component has a set of methods like `render()` and a set of properties like `state`, `this`. `this` is a reference to the instance of the class itself.

When a method is called, it's relative to an object, that called that method, basically to anything that's written left to a `.` at a place that method is called.

Ways to solve it:

1. write `this.myMethod = this.myMethod.bind(this)` in constructor. This works fine but currently outdated.
2. replace a traditional method description as an arrow function - it automatically binds `this` to class context.
3. trigger event handler through an arrow function. Example: `<form onSubmit={ e => this.onFormSubmit(e) }></form>`

In this course we'll default to using arrow function handlers.

## Communicating child to parents

One way to make a child communicate to a parent is to pass a function to child's props and make child invoke that function whenever he feels necessary.
