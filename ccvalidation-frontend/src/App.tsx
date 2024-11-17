import React, { useState } from "react";
import axios from "axios";
import './App.scss';

type Result = string | null;

const App = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [result, setResult] = useState<Result>(null);
  const [ccNumber, setCCNumber] = useState<string>('');

  const getLuhn = (): void => {
    // reset any existing response messages from the previous validation attempt
    setErrorMessage('');
    setResult(null);

    // simulate some load time for a server-side call to show that user has actually done something
    setTimeout(() => {
      axios.post('http://localhost:5000/luhn', { ccNumber: ccNumber })
        .then((response) => {
          if (response && response.data) {
            if (response.data.error) {
              setErrorMessage(response.data.error);
            } else {
              const result = response.data.result;
              if (result !== null && result !== undefined) {
                setResult(result);
              }
            }
          }
        })
        .catch((error) => {
          setErrorMessage(error);
        });
    }, 250);
  }

  // Submit input for validation on enter
  const onKeyDown = (code: string): void => {
    if (code === "Enter") getLuhn();
  }

  return (
    <div className="App">
      <h1>Enter a credit card number below for validation</h1>
      <input
        type="number"
        value={ccNumber}
        onChange={e => setCCNumber(e.target.value)}
        onKeyDown={e => onKeyDown(e.code)}
      />
      <button onClick={getLuhn}>Validate</button>
      {!!errorMessage && errorMessage.length ? (
        <p className="error-message">
          <span className="material-icons-round">warning</span>
          {errorMessage}
        </p>
      ) : null}
      {result !== null ? (
        <div className={`result ${result ? 'valid' : 'invalid'}`}>
          <p>
            <span className="material-icons-round">{result ? 'check_circle' : 'error'}</span>
            {result ? 'Congrats, this is a valid number' : 'This is not a valid credit card number, please try again.'}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
