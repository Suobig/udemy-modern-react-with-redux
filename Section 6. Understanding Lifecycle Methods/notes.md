# Section 6. Understanding Lifecycle Methods

## Lifecycle

- `constructor` - good place to do one-time setup, but doing data loading is not recommended - do it in `componentDidMount`;
- `render` - avoid doing anything besides returning JSX;
- `componentDidMount` - good place to do data-loading!;
- `componentDidUpdate` good place to do more data-loading when state/props change;
- `componentWillUnmount` - good place to do clean-up;
