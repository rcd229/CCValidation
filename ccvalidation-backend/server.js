const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// create application/json parser
var jsonParser = bodyParser.json();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

const validateLuhn = numInput => {
  // NOT NEEDED IF INPUT CAN BE STRICTED TO NUMBER TYPE
  const trimmed = numInput.replace(/\s+/g, '');
  if (!!trimmed.match(/[^\d]/)) { return 'error'; }

  const numArray = trimmed.split('').reverse();
  let sum = 0;

  numArray.forEach((digit, ind) => {
    let num = parseInt(digit);
    if (ind % 2 === 0) { sum += num; }
    else {
      let double = num * 2;
      if (double < 10) { sum += double; }
      else {
        let doubleDigits = `${double}`;
        sum += (parseInt(doubleDigits.charAt(0)) + parseInt(doubleDigits.charAt(1)));
      }
    }
  });
  return (sum % 10 === 0);
}

// Luhn validation
app.post('/luhn', jsonParser, ({ body }, res) => {
  if (!body || !body.ccNumber) {
    res.send('Unknown error :(');
  } else {
    const result = validateLuhn(body.ccNumber);

    if (result === 'error') {
      res.send({ error: 'Input should only contain numbers' });
    } else {
      res.send({ result: result });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});