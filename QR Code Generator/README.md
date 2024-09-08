# QR Code Generator

This is a simple web application that generates QR codes from user-inputted URLs. The application uses **HTML**, **CSS**, and **JavaScript** to take a URL input, create a QR code using a public API, and display the QR code on the screen.

## Features
- Enter any URL to generate a QR code.
- Displays the QR code dynamically on the page.
- Responsive and easy-to-use interface.

## Live Demo
You can check out the live version of the project here: [QR Code Generator Live](https://qr-code-webapp.netlify.app)

## How It Works
1. The user enters a URL in the input field.
2. When the "Generate QR Code" button is clicked, the app calls the [QR Code Generator API](https://goqr.me/api/doc/create-qr-code/) to generate a QR code.
3. The generated QR code is displayed on the screen.

## How to Run Locally

### Step 1: Clone the repository
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator

### Step 2: Open the index.html file
Open the index.html file in any web browser to see the app in action.

## Project Structure
```plaintext
qr-code-generator/
│
├── index.html       # Main HTML file for the app
├── style.css        # CSS styles for the app layout and design
└── README.md        # Project documentation
```

##Technologies Used
HTML: Markup for the structure of the app.
CSS: Styling for the layout and appearance.
JavaScript: Handles user input and generates the QR code.
QR Code API: Uses QR Server API to generate the QR code.
