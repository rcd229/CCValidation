# Credit Card Validation
React frontend in TS with basic Node.js backend containing Luhn algorithm API for validating a potential credit card number

# Setup
- build using node v20.12.0
```
nvm use 20.12.0
```

## Running the backend
From the root folder:
```
cd ccvalidation-backend
npm install
node server.js
```
After executing, terminal should show "Server running on http://localhost:5000"

## Running the frontend
From the root folder:
```
cd ccvalidation-next
npm install
npm run dev
```
If the terminal throws dependency errors, try running `npm install --legacy-peer-deps`.

## Running the original (boring) frontend (heh)
```
cd ccvalidation-frontend
npm install
npm start
```
## Some process description
- Compiled clarifying questions to send to the team
- Looked up Luhn algorithm and wrote my own script for it
- Physically sketched out a few options for the UI
- Set up a basic Node server file and used the basic create-react-app command for the frontend with no component libraries or packages
- Added the "Further improvements/considerations/changes" section below
- Talked to a friend on the phone about the case study and said improvements/considerations/changes (during some other life updates), was surprised to learn that not all CCs are 16 digits, revised that consideration 
- Received team responses from Deanna, decided to exercise some technical muscles and set up a new frontend with Next.js, Tailwind CSS, and MaterialUI
- Got a little cheeky and thought it would be fun to emulate the company website 😄 (I am not the best color theorist or designer out there by a long shot, but I know how to source from things that already work, so why reinvent the wheel)

## Further improvements/considerations/changes
- Length constraints
  - UI: four 4-digit boxes w/ automatic progress to next box
    - problem: most US credit cards have 16 digits, but AmEx uses 15 (internet says hypothetically 13-19 digits)
  - UI: red outline/other visual cue on input until user has entered sufficient number of digits (min 13? see issue above)
- Practical/real world use
  - Name, billing address or zip code, and CVV fields
  - Automatic validation on input blur (with CC input first, assuming user has moved to typing in other fields)
