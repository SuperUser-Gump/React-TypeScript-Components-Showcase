# Form Component

The `Form` component is a flexible form wrapper that provides the ability to handle form submission and clear the form
fields. It is designed to make form management in your React application more convenient.

## Usage

Import the `Form` component and use it in your React application. The `Form` component simplifies form handling by
automatically handling form submission and exposing a `clear` method to reset the form fields.

```tsx
import { useRef } from 'react';
import Form, { type FormHandle } from './components/Form.tsx';
import Input from './components/Input.tsx';
import Button from './components/Button.tsx';

function App() {
  const formRef = useRef<FormHandle>(null);

  const handleSave = (formData: unknown) => {
    console.log('Form data submitted:', formData);
  };

  const clearForm = () => {
    formRef.current?.clear();
  };

  return (
      <main>
        <Form onSave={handleSave} ref={formRef}>
          <Input type="text" label="name" name="name" id="name" placeholder="Name" />
          <Input type="email" label="email" name="email" id="email" placeholder="Email" />
          <p>
            <Button el="button" type="submit">
              Submit
            </Button>
          </p>
        </Form>
        <p>
          <Button el="button" onClick={clearForm}>
            Clear Form
          </Button>
        </p>
      </main>
  );
}

export default App;
```

## Props

The `Form` component accepts the following props:

| Prop                              | Type                     | Description                                                                      |
|-----------------------------------|--------------------------|----------------------------------------------------------------------------------|
| `onSave`                          | (value: unknown) => void | A callback function invoked with form data when the form is submitted.           |
| ...other standard form attributes |                          | Additional attributes are supported based on the standard HTML `<form>` element. |

The `Form` component provides a clean and straightforward way to handle form submissions. The `onSave` function is
called when the form is submitted, and it receives the form data.

### Form Ref Methods

The `Form` component exposes the following method through its ref:

- `clear()`: Resets the form fields to their initial state.

## Examples

Here is an example of how to use the `Form` component:

```tsx
<Form onSave={handleSave} ref={formRef}>
  <Input type="text" label="name" name="name" id="name" placeholder="Name"/>
  <Input type="email" label="email" name="email" id="email" placeholder="Email"/>
  <p>
    <Button el="button" type="submit">
      Submit
    </Button>
  </p>
</Form>
```

![Form Component Example](example-form.png)

The example showcases how to handle form submission and clear the form fields using the `Form` component.