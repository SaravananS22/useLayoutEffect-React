import React, { useLayoutEffect, useState } from "react";
import ModalExample from "./ModalExample";

const App = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <div>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          Increment
        </button>
        <div>{count}</div>
      </div>
      <div>
        <ModalExample />
      </div>
    </div>
  );
};

export default App;
