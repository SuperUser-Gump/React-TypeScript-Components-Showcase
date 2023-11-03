# Button Component

The `Button` component is a versatile button that can be used as either an anchor (`<a>`) or a button (`<button>`). It
allows you to create interactive elements in your React application.

## Usage

Import the `Button` component and use it in your React application. The `Button` component can be used as either an
anchor (`<a>`) or a button (`<button>`). It accepts the following common HTML button or anchor attributes.

```tsx
import Button from './components/Button.tsx';

function App() {
  function handleClick() {
    console.log('Click!');
  }

  return (
      <main>
        <p>
          {/*Example of using as a button*/}
          <Button el="button" onClick={handleClick}>
            Click Me
          </Button>
        </p>
        <p>
          {/*Example of using as an anchor*/}
          <Button el="anchor" href="https://example.com">
            Visit Website
          </Button>
        </p>
      </main>
  );
}

export default App;
```

## Props

The `Button` component accepts the following props:

| Prop                                          | Type   | Description                                                           |
|-----------------------------------------------|--------|-----------------------------------------------------------------------|
| `el`                                          | string | Specifies the element type ('button' or 'anchor').                    |
| `href`                                        | string | (Only for 'anchor') The URL to navigate to when clicked.              |
| ...other standard button or anchor attributes |        | Additional attributes are supported based on the chosen element type. |

The `el` prop determines whether the button will render as an anchor (`<a>`) or a button (`<button>`). If `el` is set
to 'anchor', the component will behave as a link, and you can provide the `href` prop with the URL.

## Examples

Here are some examples of how to use the `Button` component:

```tsx
// Using as a button
<Button el="button" onClick={handleClick}>
  Click Me
</Button>
```

![Button Component Example 1](example-button-button.png)

```tsx
// Using as an anchor
<Button el="anchor" href="https://example.com">
  Visit Website
</Button>
```

![Button Component Example 2](example-button-anchor.png)

The component can be customized by providing standard button or anchor attributes based on your requirements.