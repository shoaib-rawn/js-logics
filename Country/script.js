// ===============================
// 💱 CURRENCY CONVERTER (REAL-WORLD API)
// ===============================
const API_KEY = "cb33a1dc5653f98e8c651d77";

// ===============================
// 📌 ELEMENTS
// ===============================
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const searchBtn = document.getElementById("searchBtn");
const countryBox = document.getElementById("countryBox");
const closeDedication = document.getElementById("closeDedication");
const dedicationCard = document.getElementById("dedicationCard");
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");

// ===============================
// 🌍 LIVE STATE
// ===============================
let liveRate = null;
let lastFrom = "";
let lastTo = "";
let lastAmount = 0;
let rateCache = {};

// ===============================
// 🔥 FETCH RATES
// ===============================
async function fetchRate(fromCurrency) {
  if (rateCache[fromCurrency]) return rateCache[fromCurrency];

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
    );
    const data = await response.json();
    if (data.result !== "success") return null;

    rateCache[fromCurrency] = data.conversion_rates;
    return data.conversion_rates;
  } catch (err) {
    return null;
  }
}

// ==========================================
// 🔄 DYNAMICALLY POPULATE ALL CURRENCIES
// ==========================================
async function initCurrencies() {
  // Loading status text jab tak currencies load ho rahi hain
  fromSelect.innerHTML = "<option>Loading...</option>";
  toSelect.innerHTML = "<option>Loading...</option>";

  // Base currency USD lekar saari available keys nikalte hain
  const rates = await fetchRate("USD");

  if (!rates) {
    // Backup safe options agar internet ya API ka koi masla ho
    const backup = ["USD", "PKR", "EUR", "GBP", "INR", "SAR", "AED", "CNY"];
    populateDropdowns(backup);
    return;
  }

  const currencyKeys = Object.keys(rates);
  populateDropdowns(currencyKeys);
}

function populateDropdowns(currencies) {
  fromSelect.innerHTML = "";
  toSelect.innerHTML = "";

  currencies.forEach((currency) => {
    // Dropdown From ke liye option
    const optionFrom = document.createElement("option");
    optionFrom.value = currency;
    optionFrom.textContent = currency;
    if (currency === "USD") optionFrom.selected = true; // Default From
    fromSelect.appendChild(optionFrom);

    // Dropdown To ke liye option
    const optionTo = document.createElement("option");
    optionTo.value = currency;
    optionTo.textContent = currency;
    if (currency === "PKR") optionTo.selected = true; // Default To
    toSelect.appendChild(optionTo);
  });
}

// App start hote hi currencies initialization chalayein
initCurrencies();

// ===============================
// 💱 UPDATE UI
// ===============================
function updateResult(amount, fromCurrency, toCurrency) {
  const feePercent = 1.2; // 1.2% Wise-style fee
  const feeAmount = amount * (feePercent / 100);
  const amountAfterFee = amount - feeAmount;

  const converted = amountAfterFee * liveRate;

  // Formatted values for clean UI
  const formattedSent = new Intl.NumberFormat("en-US", { style: "currency", currency: fromCurrency }).format(amount);
  const formattedFee = new Intl.NumberFormat("en-US", { style: "currency", currency: fromCurrency }).format(feeAmount);
  const formattedReceived = new Intl.NumberFormat("en-US", { style: "currency", currency: toCurrency }).format(converted);

  result.innerHTML = `
    💰 You send: <b>${formattedSent}</b><br>
    📊 Live Rate: 1 ${fromCurrency} = <b>${liveRate.toFixed(4)}</b> ${toCurrency}<br>
    💸 Fee (${feePercent}%): <b>${formattedFee}</b><br>
    🎯 Recipient gets: <b>${formattedReceived}</b><br>
    <small style="color: green;">✓ Live rates updated</small>
  `;
}

// ===============================
// ⏳ LOADING BUTTONS UI
// ===============================
function setLoading(isLoading) {
  if (isLoading) {
    convertBtn.disabled = true;
    convertBtn.innerHTML = `⏳ Converting...`;
  } else {
    convertBtn.disabled = false;
    convertBtn.innerHTML = `Convert`;
  }
}

function setSearchLoading(isLoading) {
  if (isLoading) {
    searchBtn.disabled = true;
    searchBtn.innerHTML = "⏳ Searching...";
  } else {
    searchBtn.disabled = false;
    searchBtn.innerHTML = "Search";
  }
}

// ===============================
// 🔘 CONVERT CLICK
// ===============================
convertBtn.addEventListener("click", async () => {
  const startTime = Date.now();

  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;

  if (isNaN(amount) || amount <= 0) {
    result.innerText = "Please enter a valid amount!";
    return;
  }

  setLoading(true);
  result.innerText = "Fetching live rates...";

  lastFrom = fromCurrency;
  lastTo = toCurrency;
  lastAmount = amount;

  const rates = await fetchRate(fromCurrency);

  if (!rates || !rates[toCurrency]) {
    setLoading(false);
    result.innerText = "Currency not supported!";
    return;
  }

  liveRate = rates[toCurrency];

  const elapsed = Date.now() - startTime;
  const delay = Math.max(2000 - elapsed, 0);

  setTimeout(() => {
    updateResult(amount, fromCurrency, toCurrency);
    setLoading(false);
  }, delay);
});

// ===============================
// 🔄 AUTO REFRESH (5 min)
// ===============================
setInterval(async () => {
  if (!lastFrom || !lastTo) return;

  delete rateCache[lastFrom];
  const rates = await fetchRate(lastFrom);

  if (rates && rates[lastTo]) {
    liveRate = rates[lastTo];
    updateResult(lastAmount, lastFrom, lastTo);
  }
}, 300000);

// ===============================
// 🌍 SEARCH COUNTRY
// ===============================
searchBtn.addEventListener("click", async () => {
  const startTime = Date.now();
  const countryName = document.getElementById("countryInput").value.trim();

  if (!countryName) {
    countryBox.innerHTML = "Please enter a country name!";
    return;
  }

  setSearchLoading(true);
  countryBox.innerHTML = "⏳ Fetching country details...";

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    const country = data?.[0];

    if (!country) {
      countryBox.innerHTML = "❌ Country not found!";
      setSearchLoading(false);
      return;
    }

    const { name, capital, population, flags, region, currencies, timezones } = country;
    const currencyName = currencies ? Object.values(currencies)[0].name : "N/A";
    let weatherText = "Unavailable";

    // Weather API Fetch
    try {
      const lat = country.capitalInfo?.latlng?.[0];
      const lon = country.capitalInfo?.latlng?.[1];

      if (lat && lon) {
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`
        );
        const weatherData = await weatherRes.json();
        weatherText = `${weatherData.current.temperature_2m}°C, Wind ${weatherData.current.wind_speed_10m} km/h`;
      }
    } catch (err) {
      weatherText = "Unavailable";
    }

    // Local Time Calculations
    let countryTimeText = "Time unavailable";
    try {
      const timezone = timezones?.[0];
      if (timezone?.includes("UTC")) {
        const offset = timezone.replace("UTC", "");
        let hours = 0, minutes = 0;

        if (offset.includes(":")) {
          const parts = offset.split(":");
          hours = parseInt(parts[0]);
          minutes = parseInt(parts[1]);
        } else if (offset) {
          hours = parseInt(offset);
        }

        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const countryTime = new Date(utc + (hours * 60 + minutes) * 60000);

        countryTimeText = countryTime.toLocaleString("en-PK", {
          dateStyle: "full",
          timeStyle: "short",
        });
      }
    } catch (e) {
      countryTimeText = "Time unavailable";
    }

    const renderUI = () => {
      countryBox.innerHTML = `
        <div class="country-card">
          <img src="${flags.png}" alt="flag"/>
          <h3>${name.common}</h3>
          <p><strong>Capital:</strong> ${capital?.[0] || "N/A"}</p>
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>Population:</strong> ${population.toLocaleString()}</p>
          <p><strong>Currency:</strong> ${currencyName}</p>
          <p><strong>Current Weather:</strong> ${weatherText}</p>
          <p><strong>Local Time:</strong> ${countryTimeText}</p>
        </div>
      `;
    };

    const elapsed = Date.now() - startTime;
    const wait = Math.max(2000 - elapsed, 0);

    setTimeout(() => {
      renderUI();
      setSearchLoading(false);

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, wait);

  } catch (error) {
    countryBox.innerHTML = "❌ Failed to load country data!";
    setSearchLoading(false);
  }
});

// ===============================
// 💖 CLOSE DEDICATION
// ===============================
closeDedication.addEventListener("click", () => {
  dedicationCard.style.display = "none";
});