'use client';

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

type Result = string | null;

export default function Home() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [result, setResult] = useState<Result>(null);
  const [ccNumber, setCCNumber] = useState<string>('');

  const getLuhn = (): void => {
    // reset any existing response messages from the previous validation attempt
    setErrorMessage('');
    setResult(null);

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
  }

  // Submit input for validation on enter
  const onKeyDown = (code: string): void => {
    if (code === "Enter") getLuhn();
  }

  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={6} className="flex flex-col justify-center">
        <h1 className="text-5xl mb-6">Credit Card Validation</h1>
        <p className="text-md pb-8">Enter a credit card number below and click "Validate" or hit Enter.</p>
        <Input
          id="cc-input"
          startAdornment={
            <InputAdornment position="start">
              <CreditCardIcon />
            </InputAdornment>
          }
          value={ccNumber}
          onChange={e => setCCNumber(e.target.value)}
          onKeyDown={e => onKeyDown(e.code)}
          fullWidth={true}
        />
        {!!errorMessage && errorMessage.length ? (
          <p className="error-message text-sm flex items-center mt-1">
            <WarningRoundedIcon className="text-sm mr-1" />
            {errorMessage}
          </p>
        ) : null}
        <Button className="mt-8 w-fit" onClick={getLuhn}>Validate</Button>
      </Grid>
      <Grid item xs={12} md={6} className="flex flex-col justify-center items-center">
        {result !== null ? (
          <div className={`result ${result ? 'valid' : 'invalid'} p-8 flex flex-col justify-center items-center`}>
            {result ? <CheckCircleIcon className="mb-4 text-5xl" /> : <ErrorIcon className="mb-4 text-5xl" />}
            <p className="text-lg">
              {result ? 'Congrats, this is a valid number' : 'This is not a valid credit card number, please try again.'}
            </p>
          </div>
        ) : (
          <Image
            src="/placeholder.png"
            alt="results placeholder image"
            width={400}
            height={400}
            priority
          />
        )}
      </Grid>
    </Grid>
  );
}
