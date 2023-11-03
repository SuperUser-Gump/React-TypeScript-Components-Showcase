# Container Component

The `Container` component is a versatile container element that allows you to wrap content with different HTML elements. It is particularly useful for structuring and styling content within your React application.

## Usage

Import the `Container` component and use it in your React application. The `Container` component enables you to wrap content with different HTML elements. It accepts the following props:

```tsx
import Container from './components/Container.tsx';

function App() {
  return (
    <main>
      {/* Using a div container*/}
      <Container>
        <p>This is a container with a div element.</p>
      </Container>

      {/* Using a section container*/}
      <Container as="section">
        <h2>Section Container</h2>
        <p>This is a section container.</p>
      </Container>

      {/* Using an article container with additional attributes*/}
      <Container as="article" className="custom-container" aria-label="Custom Article">
        <h2>Custom Article Container</h2>
        <p>This is a customized article container.</p>
      </Container>
    </main>
  );
}

export default App;
```

## Props

| Prop       | Type        | Description                                              |
| ---------- | ----------- | -------------------------------------------------------- |
| `as`       | ElementType | Specifies the HTML element type to use (e.g., 'div', 'section', 'article', etc.). |
| `children` | ReactNode   | The content or components to be wrapped within the container. |
| ...other standard HTML element attributes |        | Additional attributes are supported based on the chosen HTML element type. |

By default, the `as` prop is set to `'div'`. If you do not provide the `as` prop, the `Container` component will render a `<div>` element. You can customize it by specifying a different HTML element using the `as` prop.

## Examples

Here are some examples of how to use the `Container` component:

```tsx
// Using a div container
<Container>
  <p>This is a container with a div element.</p>
</Container>
```
![Container Component Example 1](example-container-div.png)

```tsx
// Using a section container
<Container as="section">
  <h2>Section Container</h2>
  <p>This is a section container.</p>
</Container>
```
![Container Component Example 2](example-container-section.png)

```tsx
// Using an article container with additional attributes
<Container as="article" className="custom-container" aria-label="Custom Article">
  <h2>Custom Article Container</h2>
  <p>This is a customized article container.</p>
</Container>
```
![Container Component Example 3](example-container-article.png)

You can wrap your content with different HTML elements and add attributes as needed for styling and semantics.