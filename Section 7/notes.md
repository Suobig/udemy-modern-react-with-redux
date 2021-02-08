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

