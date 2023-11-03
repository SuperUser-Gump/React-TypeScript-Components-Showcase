# Input Component

The `Input` component is a reusable input field with a label, ideal for form elements in your React applications.

## Usage

Import the `Input` component and use it in your React application:

```tsx
import Input from './components/Input.tsx';
import { useRef } from 'react';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
      <main>
        <Input label="Name" id="name" ref={inputRef} />
      </main>
  );
}

export default App;
```

## Props

The `Input` component accepts the following props:

| Prop       | Type   | Description                                   |
| ---------- | ------ | --------------------------------------------- |
| `label`   | string  | The label text for the input.                 |
| `id`      | string  | The `id` and `name` attributes for the input element. |
| ...other standard form attributes |        | Additional attributes are supported based on the standard HTML `<input>` element. |

The `Input` component also accepts all props that a standard `input` element supports.

## Examples

Here is an example of how to use the `Input` component:

```tsx
<Input label="Email" id="email" type="email" placeholder="Enter your email" />
```

![Input Component Example](example-input.png)

You can customize the input by providing additional attributes like `type`, `placeholder`, etc.