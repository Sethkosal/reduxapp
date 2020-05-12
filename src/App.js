import React from 'react';
import logo from './logo.svg';
import './App.css';
//to access global state
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>

      {isLogged ? <h3>Top Secret if im not logged in.</h3>: ''}
      
    </div>
  );
}

export default App;
