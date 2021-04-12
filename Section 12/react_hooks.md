# React hooks

## Primitive hooks

* `useState`
* `useEffect`
* `useContext`
* `useReducer`
* `useCallback`
* `useMemo`
* `useRef`
* `useImperativeHandle`
* `useLayouteffect`
* `useDebugValue`

We use primitive hooks to write our own custom hooks.

## useEffect behavior patterns

```mermaid
flowchart TB;
a[Empty array]-->b[Run at initial render]
c[...nothing...]-->d[Run at inital render]
d-->e[Run after any rerender]
f[Array with data] --> g[Run at initial render]
g --> h[Run after any rerender \n if data has changed]
```
