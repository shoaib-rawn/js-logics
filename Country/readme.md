🌍 Live Currency & Country Stats

A simple JavaScript project that shows:

💱 Live Currency Conversion
🌎 Country Information
📅 Current Date & Time using Intl API
🔄 AJAX & Fetch API Practice
📦 Destructuring in JavaScript
🚀 Features
💱 Currency Converter

Convert currencies live using an exchange rate API.

Example:
USD → PKR
EUR → INR
PKR → USD

Uses:

Fetch API
Async/Await
Intl.NumberFormat()
🌎 Country Information

Search any country and get:

Country Flag
Capital
Region
Population
Currency

Uses:

REST Countries API
Object Destructuring
AJAX Requests
🛠 Technologies Used
HTML5
CSS3
JavaScript (ES6)
Fetch API
REST APIs
Intl API
📚 JavaScript Concepts Practiced
✅ AJAX

Fetching live data from APIs without page reload.

✅ Fetch API

Used for sending HTTP requests.

const response = await fetch(url);
✅ Async/Await
async function getData() {
  const response = await fetch(url);
}
✅ Destructuring
const { name, capital, region } = data[0];
✅ Intl API
Currency Formatting
new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
Date Formatting
new Intl.DateTimeFormat("en-PK", {
  dateStyle: "full",
});
🌐 APIs Used
Exchange Rate API

Provides live currency exchange rates.

REST Countries API

Provides country details and flags.