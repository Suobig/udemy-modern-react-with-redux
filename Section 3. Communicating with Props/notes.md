# Section 3. Communicating with Props

## Links

- [Codesandbox project](https://codesandbox.io/s/still-sea-3hzx3);
- [Semantic UI CDN](https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css)

## Main topics

- Component Nesting: A component can be shown inside another component
- Component Reusability: We want to make components easily reusable
- Component Configuration: We should be able to configure our components

## Application overview

We want to build a small app that shows a number of comments with image, name, time and text.

## Steps to create reusable componets

- identify the JSX that appers to be duplicated;
- identify the purpose of this JSX, think of a descriptive name;
- create a new file to house this new component with the same name as the component;
- create new component if this file
- make it configurable through `props` system
<<<<<<< HEAD

## 2 Types of Props

1. Props you pass as attributes: `<MyComponent attribute1="value1" attribute2="value2" />` can be accessed by name: `props.attribute1 === value1; props.attribute2 === value2`
2. Props you pass as child elements of Component's element: `<MyComponent>Some Text</MyComponent>` can be accessed by the name `children`: `props.children === "SomeText`
=======
>>>>>>> d31fb21d322d42632375127c5ca6447a5ce475f7
