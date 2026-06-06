// Currency Converter (No changes here)
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", async () => {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: toCurrency,
    }).format(convertedAmount);

    result.innerText = `${amount} ${fromCurrency} = ${formatted}`;
  } catch (error) {
    result.innerText = "Something went wrong!";
  }
});

// Country Info (Updated with Country-Specific Time)
const searchBtn = document.getElementById("searchBtn");
const countryBox = document.getElementById("countryBox");

searchBtn.addEventListener("click", async () => {
  const countryName = document.getElementById("countryInput").value;

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();

    const {
      name,
      capital,
      population,
      flags,
      region,
      currencies,
      timezones, // Extracting timezones
    } = data[0];

    const currencyName = Object.values(currencies)[0].name;

    // --- Country Time Logic Start ---
    const timezoneRaw = timezones[0]; // e.g., "UTC+05:00"
    const offsetString = timezoneRaw.replace("UTC", ""); 
    
    let offsetMinutes = 0;
    if (offsetString) {
      const [hours, minutes] = offsetString.split(":");
      offsetMinutes = parseInt(hours) * 60 + (parseInt(minutes) || 0);
    }

    // Calculating exact time for the country
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const countryTime = new Date(utcTime + (offsetMinutes * 60000));

    const countryDateFormatted = new Intl.DateTimeFormat("en-PK", {
      dateStyle: "full",
      timeStyle: "short",
    }).format(countryTime);
    // --- Country Time Logic End ---

    countryBox.innerHTML = `
      <div class="country-card">
        <img src="${flags.png}" alt="flag"/>
        <h3>${name.common}</h3>
        <p><strong>Capital:</strong> ${capital}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Population:</strong> ${population.toLocaleString()}</p>
        <p><strong>Currency:</strong> ${currencyName}</p>
        <p><strong>Local Time There:</strong> ${countryDateFormatted}</p>
      </div>
    `;

  } catch (error) {
    countryBox.innerHTML = `<p>Country not found!</p>`;
  }
});