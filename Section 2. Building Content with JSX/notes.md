# Section 2. Building Content with JSX

## Links

- [This project in Codesandbox](https://codesandbox.io/s/clever-bogdan-9mv2u)
- [Diffchecker (diff 2 files)](https://www.diffchecker.com/)
- [Lecture materials](https://github.com/StephenGrider/redux-code)


## What is JSX

It looks like HTML **but it's not**. But JSX code isn't supported by browsers. It is converted into JS. Link to check how JSX looks like in JS, check [babeljs website](https://babeljs.io) 

## Differences between JSX and HTML

- applying inline style
  - double curly bracers
  - dashed elements like `background-color` switch to camel case: `backgrounColor`
  - `,` instead of `;`
  - values wrapped in `' '`
- adding class (`className=` instead of `class=`)
- can reference JS variable:
  - strings
  - numbers
  - arrays (concatenate)
  - **NOT** objects
