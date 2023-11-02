import Input from './components/Input.tsx';

function App() {
  return (
    <main>
      <Input label="Your name" id="name" type="text" />
      <Input label="Your age" id="age" type="number" />
    </main>
  );
}

export default App;
