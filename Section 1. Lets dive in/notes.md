# Section 1. Lets dive in

## Code example

    import "./styles.css";
    import React, { useState } from "react";
    import Field from "./components/field";
    import Languages from "./components/languages";
    import Translate from "./components/translate";

    export default function App() {
      const [language, setLanguage] = useState('ru');
      const [text, setText] = useState("");
      return (
        <div>
          <Field label="Enter English" onChange={setText} value={text} />
          <Languages language={language} onLanguageChange={setLanguage} />
          <hr />
          <Translate text={text} language={language} />
        </div>
      );
    }

## React component

`App` in this example is a *React Component*.

**React Component** is a JS function that outputs some *JSX*.

**JSX** - is a set of instructions (that may look like some HTML code) that tells React what to show on the screen. Follows similar to HTML.

JSX may:

- tell React to show a normal HTML element (like `div` or `span` or `h1`) - in this case it just adds a normal HTML element to DOM;
- tell React to show another component (like `Field`  `Languages`) - in this case it calls the component (that is a JS function and iterates throught all JSX that it returns).  

## How does content gets displayed in the code example?

1. Browser asks the server for `index.html` page
2. Server returns that page.
3. Browser parses all html inside
4. One of `<script>` tags inside `index.html` asks to make another request for a `bundle.js` file from server.
5. Server gets the request, combines `index.js`, `app.js`, `react.js` into `bundle.js` and returns it.


## JavaScrip module systems

There're 2 main module systems:

- ES2015 - uses `import` statement;
- CommonJS - uses `require` statement

## React components

A *component* is a Function or a Class that produces HTML to show the user using JSX and handles feedback from user using Event Handlers.