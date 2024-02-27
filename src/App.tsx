import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-poppins">
        <h1>Vite + React</h1>
        <div className="p-6 flex flex-col justify-center">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
