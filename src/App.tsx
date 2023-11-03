import Button from './components/Button.tsx';
import Container from './components/Container.tsx';

function App() {
  return (
    <main>
      <Container as={Button} el="button">
        Click me
      </Container>
    </main>
  );
}

export default App;
