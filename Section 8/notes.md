# Making API Requests with React

## Links

- [unsplash developers page](unsplash.com/developers)

## Fetching data

We've createad a google API key to search for photos: AIzaSyDaC8GVhgzknWO0rzyk2eYZW5ujYfv2boQ (the course wanted to use unsplash, but it blocked in sber).

AJAX client will make a request to an API, not React.

There're 2 different ways to manage network requests:

- `axios` - 3-rd party package
- `fetch` - a function built in into modern packages. We don't need any libraries, but it's very low-level.

In this project we'll be using axios

## Working with async methods

axios returns a promise. There're 2 ways to work with this promise:

- using `then` and providing a callback
- using new `async`/`await` syntax
