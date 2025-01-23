import { useCounter } from "./Store/useCounter";
import { useState } from "react";

export function Counter() {
  //   const { decrement, increment, count } = useCounter();

  const count = useCounter((state) => 
    state.count
  );
  const increment = useCounter((state) => 
    state.increment
  );
  const decrement = useCounter((state) => 
    state.decrement
  );

  return (
    <>
      <div>
        {count}
        <button onClick={increment}>+1</button>

        <button onClick={decrement}>-1</button>
      </div>
    </>
  );
}
