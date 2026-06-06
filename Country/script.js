// ===============================
// 💱 CURRENCY CONVERTER (REAL-WORLD API)
// ===============================

const API_KEY = "cb33a1dc5653f98e8c651d77";

// ===============================
// 📌 ELEMENTS
// ===============================
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

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

  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
  );

  const data = await response.json();

  if (data.result !== "success") return null;

  rateCache[fromCurrency] = data.conversion_rates;
  return data.conversion_rates;
}

// ===============================
// 💱 UPDATE UI
// ===============================
function updateResult(amount, fromCurrency, toCurrency) {
  const feePercent = 1.2;
  const feeAmount = amount * (feePercent / 100);
  const amountAfterFee = amount - feeAmount;

  const converted = amountAfterFee * liveRate;

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
    <small style="color: green;">✓ Live rates updated</small>
  `;
}

// ===============================
// ⏳ LOADING BUTTON UI
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
// ===============================
// ⏳ SEARCH LOADING BUTTON UI
// ===============================
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
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

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

  // ⏱️ force minimum 2 seconds loading feel
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
//========search
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
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    const data = await response.json();
    const country = data?.[0];

    if (!country) {
      countryBox.innerHTML = "❌ Country not found!";
      setSearchLoading(false);
      return;
    }

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
      let weatherText = "Unavailable";

try {
  const lat = country.capitalInfo?.latlng?.[0];
  const lon = country.capitalInfo?.latlng?.[1];

  if (lat && lon) {
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`
    );

    const weatherData = await weatherRes.json();

    weatherText =
      `${weatherData.current.temperature_2m}°C, Wind ${weatherData.current.wind_speed_10m} km/h`;
  }
} catch (err) {
  weatherText = "Unavailable";
}

    let countryTimeText = "Time unavailable";

    try {
      const timezone = timezones?.[0];

      if (timezone?.includes("UTC")) {
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
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;

        const countryTime = new Date(
          utc + (hours * 60 + minutes) * 60000
        );

        countryTimeText = countryTime.toLocaleString("en-PK", {
          dateStyle: "full",
          timeStyle: "short",
        });
      }
    } catch {}

    const renderUI = () => {
     countryBox.innerHTML = `
<div class="country-card">
  <img src="${flags.png}" alt="flag"/>
  <h3>${name.common}</h3>

  <p><strong>Capital:</strong> ${capital?.[0] || "N/A"}</p>
  <p><strong>Region:</strong> ${region}</p>
  <p><strong>Population:</strong> ${population.toLocaleString()}</p>
  <p><strong>Currency:</strong> ${currencyName}</p>
   <p><strong>Overall Weather:</strong> ${weatherText}</p>
  <p><strong>Local Time:</strong> ${countryTimeText}</p>
 
</div>
      `;
    };

    // ⏱️ FORCE MINIMUM LOADING TIME (2 seconds)
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
const closeDedication = document.getElementById("closeDedication");
const dedicationCard = document.getElementById("dedicationCard");

closeDedication.addEventListener("click", () => {
  dedicationCard.style.display = "none";
});