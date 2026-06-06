// ===============================
// 💱 CURRENCY CONVERTER (REAL-WORLD API)
// ===============================
/// ===============================
// 🔑 API KEY
// ===============================
const API_KEY = "cb33a1dc5653f98e8c651d77";

// ===============================
// 📌 ELEMENTS
// ===============================
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// ===============================
// 🌍 LIVE RATE STATE
// ===============================
let liveRate = null;
let lastFrom = "";
let lastTo = "";
let lastAmount = 0;
let rateCache = {}; // 🧠 Prevents burning your monthly API limits unnecessarily

// ===============================
// 🔥 FETCH RATES FUNCTION
// ===============================
async function fetchRate(fromCurrency) {
  // Return cached data if we already fetched it during this user session
  if (rateCache[fromCurrency]) {
    return rateCache[fromCurrency];
  }

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
    );

    const data = await response.json();

    if (data.result !== "success") return null;

    // Cache the rates to protect your quota
    rateCache[fromCurrency] = data.conversion_rates;
    return data.conversion_rates;
  } catch (error) {
    console.error("Rate fetch error:", error);
    return null;
  }
}

// ===============================
// 💱 UPDATE UI (WISE STYLE)
// ===============================
function updateResult(amount, fromCurrency, toCurrency) {
  if (!liveRate) return;

  const feePercent = 1.2;
  const feeAmount = amount * (feePercent / 100);
  const amountAfterFee = amount - feeAmount;

  const converted = amountAfterFee * liveRate;

  // Formats currency accurately according to international finance rules
  const formattedReceived = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: toCurrency,
  }).format(converted);

  const formattedFee = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: fromCurrency,
  }).format(feeAmount);

result.innerHTML = `
  💰 You send: <b>${amount.toFixed(2)} ${fromCurrency}</b><br>
  📊 Live Rate: 1 ${fromCurrency} = <b>${liveRate.toFixed(4)}</b> ${toCurrency}<br>
  💸 Fee (Wise-style): <b>${formattedFee}</b><br>
  🎯 Recipient gets: <b>${converted.toFixed(2)} ${toCurrency}</b><br>
  <small style="color: green;">✓ Live rates secured successfully</small>
`;
}

// ===============================
// 🔘 CONVERT BUTTON
// ===============================
convertBtn.addEventListener("click", async () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (isNaN(amount) || amount <= 0) {
    result.innerText = "Please enter a valid amount!";
    return;
  }

  // Display a loading state so users know the app is active
  result.innerText = "Fetching live conversion matrix...";

  lastFrom = fromCurrency;
  lastTo = toCurrency;
  lastAmount = amount;

  const rates = await fetchRate(fromCurrency);

  if (!rates || !rates[toCurrency]) {
    result.innerText = "Currency not supported!";
    return;
  }

  liveRate = rates[toCurrency];
  updateResult(amount, fromCurrency, toCurrency);
});

// ===============================
// 🔄 SMART RATE UPDATER (Every 5 Minutes)
// ===============================
// Changed from 10 seconds to 5 minutes to prevent API bans while keeping data fresh
setInterval(async () => {
  if (!lastFrom || !lastTo || lastAmount <= 0) return;

  // Clear cache for this currency specifically to get a genuinely fresh rate
  delete rateCache[lastFrom]; 

  const rates = await fetchRate(lastFrom);

  if (rates && rates[lastTo]) {
    liveRate = rates[lastTo];
    updateResult(lastAmount, lastFrom, lastTo);
  }
}, 300000); 


// ===============================
// 🌍 COUNTRY INFO (IMPROVED API)
// ===============================

const searchBtn = document.getElementById("searchBtn");
const countryBox = document.getElementById("countryBox");

searchBtn.addEventListener("click", async () => {
  const countryName = document.getElementById("countryInput").value;

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    const data = await response.json();
    const country = data[0];

    const {
      name,
      capital,
      population,
      flags,
      region,
      currencies,
      timezones,
    } = country;

    const currencyName = currencies
      ? Object.values(currencies)[0].name
      : "N/A";

    const timezone = timezones?.[0] || "UTC";

    // ===============================
    // 🌐 REAL TIME (FIXED APPROACH)
    // ===============================



let countryTimeText = "Time unavailable";

try {
  const timezone = timezones?.[0];

  if (timezone && timezone.includes("UTC")) {
    // Example: UTC-05:00 or UTC+05:00
    const offset = timezone.replace("UTC", "");

    let hours = 0;
    let minutes = 0;

    if (offset.includes(":")) {
      const parts = offset.split(":");
      hours = parseInt(parts[0]);
      minutes = parseInt(parts[1]);
    } else {
      hours = parseInt(offset);
    }

    const now = new Date();

    // convert local UTC time
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;

    const countryTime = new Date(
      utc + (hours * 60 + minutes) * 60000
    );

    countryTimeText = countryTime.toLocaleString("en-PK", {
      dateStyle: "full",
      timeStyle: "short",
    });
  }
} catch (e) {
  countryTimeText = "Time unavailable";
}
    // ===============================
    // 🖼️ RENDER UI
    // ===============================

    countryBox.innerHTML = `
      <div class="country-card">
        <img src="${flags.png}" alt="flag"/>
        <h3>${name.common}</h3>

        <p><strong>Capital:</strong> ${capital || "N/A"}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Population:</strong> ${population.toLocaleString()}</p>
        <p><strong>Currency:</strong> ${currencyName}</p>
        <p><strong>Local Time:</strong> ${countryTimeText}</p>
      </div>
    `;

    // ===============================
    // 📱 AUTO SCROLL (MOBILE UX FIX)
    // ===============================

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "auto"
    });

  } catch (error) {
    countryBox.innerHTML = `<p>Country not found!</p>`;
  }
});