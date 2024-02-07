import React, { useState } from 'react';

// Child component for displaying the counter value
function CounterDisplay({ count }) {
  return <span className='bg-blue-400 px-4 py-2 rounded-md shadow-lg m-4'>Count: {count}</span>;
}

// Child component for incrementing the counter
function IncrementButton({ onIncrement }) {
  return <button className='bg-green-400 px-4 py-2 rounded-md shadow-lg m-4' onClick={onIncrement}>Increment</button>;
}

// Child component for decrementing the counter
function DecrementButton({ onDecrement }) {
  return <button className='bg-red-400 px-4 py-2 rounded-md shadow-lg m-4' onClick={onDecrement}>Decrement</button>;
}

// Parent component that manages the counter state
function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <CounterDisplay count={count} />
      <IncrementButton onIncrement={increment} />
      <DecrementButton onDecrement={decrement} />
    </div>
  );
}

export default App;
