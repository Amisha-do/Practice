
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { increment, decrement } from '../../store/ExampleSlice';
import { Link } from 'react-router-dom';

const One: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.example.value);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default One;
