import { useState } from 'react';
import { Button } from './components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button radius="none" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </Button>
    </>
  );
}

export default App;
