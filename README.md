# Credit Card Validation
React frontend in TS with basic Node.js backend containing Luhn algorithm API for validating a potential credit card number

# Setup
- build using node v20.12.0
```
nvm use 20.12.0
```
- install dependencies (execute this command in both ccvalidation-frontend and ccvalidation-backend)
```
npm install
```

## To run app
- to run the backend
  - after executing, terminal should show "Server running on http://localhost:5000"
```
cd ccvalidation-backend
node server.js
```
- to run the frontend
```
cd ccvalidation-frontend
npm start
```

## Further improvements/considerations
- length constraints?
  - UI: four 4-digit boxes w/ automatic progress to next box
    - problem: most US credit cards have 16 digits, but AmEx uses 15 (internet says hypothetically 13-19 digits)
  - UI: red outline/other visual cue on input until user has entered sufficient number of digits (min 13? see issue above)
- practical/real world use
  - Name, billing address or zip code, and CVV fields
  - automatic validation on input blur (with CC input first, assuming user has moved to typing in other fields)
