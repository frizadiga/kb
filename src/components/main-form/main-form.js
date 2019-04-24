import React, { useState } from 'react';
import './main-form.scss';
import * as fn from './formula';
import Button from '../button';

const data = {
  options: [
    {
      id: 1,
      name: 'Sum',
      fn: fn.sum,
    }, {
      id: 2,
      name: 'Multiply',
      fn: fn.multiply,
    }, {
      id: 3,
      name: 'Prime',
      fn: fn.primes,
    }, {
      id: 4,
      name: 'Fibonacci',
      fn: fn.fibonacci,
    },
  ],
};

const MainForm = () => {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState(1);

  const handleSelectedOption = (e) => {
    setSelectedOption(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = data.options[selectedOption - 1].fn(inputValue);
    setResult(result);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="main-form">
      {/* <p className="title"></p> */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleSelectedOption}>
          {
            data.options.map(item => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            ))
          }
        </select>
        <input type="text" placeholder="Input" onChange={handleInput} />
        <div className="result">
          <p style={{ margin: 0, fontWeight: 700 }}>Result: </p>
          {result}
        </div>
        <Button
          type="submit"
          // to=""
          style={{
            padding: 12,
            backgroundColor: '#f5a623',
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Calculate
        </Button>
      </form>
    </div>
  );
};

export default MainForm;
