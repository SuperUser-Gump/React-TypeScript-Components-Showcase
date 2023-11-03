# React-TypeScript-Components-Showcase

## Description

This project is a part of [React & TypeScript - The Practical Guide](https://www.udemy.com/course/react-typescript-the-practical-guide/) by [Maximilian Schwarzmüller](https://github.com/academind). The component's design and structure were provided as part
of the course curriculum, and I did not design the component from scratch. The primary purpose of this project is to
practice and apply the concepts learned during the course.

The project is a collection of TypeScript-powered React components, including Input, Button, Container, and Form. These components are versatile, well-documented, and can be used to build interactive web applications.

## Features

This project contains a collection of reusable React components, including:

1. **Input Component:** A reusable input field with a label, ideal for form elements.

2. **Button Component:** A versatile button that can be used as either an anchor (`<a>`) or a button (`<button>`).

3. **Container Component:** A flexible container element that allows you to wrap content with different HTML elements.

4. **Form Component:** A form wrapper that simplifies form submission and provides a method to clear form fields.

For more detailed documentation on each component, please see the following links:

- [Input Component](/docs/Input/Input.md)
- [Button Component](/docs/Button/Button.md)
- [Container Component](/docs/Container/Container.md)
- [Form Component](/docs/Form/Form.md)

## Getting Started

To get started with React-TypeScript-Components-Showcase, you will need to have Node.js and Vite installed on your
machine.

### Installation

1. **Node.js**: To install Node.js, visit the Node.js website: https://nodejs.org/en

2. **Vite**: To install Vite, run the following command in your terminal:

```
npm install -g vite
```

### Clone the repository

Once you have Node.js and Vite installed, you can clone the React-TypeScript-Components-Showcase repository to your
local machine:

```
git clone https://github.com/SuperUser-Gump/React-TypeScript-Components-Showcase.git
```

### Install dependencies

Navigate to the React-TypeScript-Components-Showcase directory and install the dependencies:

```
cd React-TypeScript-Components-Showcase
npm install
```

### Start the development server

To start the development server, run the following command:

```
npm run dev
```

The development server will be running on http://localhost:5173. You can open this URL in your web browser to view the
React-TypeScript-Components-Showcase app.

## Usage

To use the components in your project, import them from the components directory:

```tsx
import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import Container from './components/Container.tsx';
import Form from './components/Form.tsx';
```

Then, you can use them in your components like any other React component:

```tsx
function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: number };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
      <Container>
        <Form onSave={handleSave} ref={customForm}>
          <Input type="text" label="Name" id="name" name="name"/>
          <Input type="number" label="Age" id="age"/>
          <p>
            <Button el="button">Save</Button>
          </p>
        </Form>
      </Container>
  );
}

export default App;
```

![Screenshot](/public/images/screenshot.png)

## Acknowledgments

This project was created as part of [React & TypeScript - The Practical Guide](https://www.udemy.com/course/react-typescript-the-practical-guide/) by [Maximilian Schwarzmüller](https://github.com/academind). Special thanks to him for providing the project
structure and design.
