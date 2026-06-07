// ==========================================
// 💱 CURRENCY CONVERTER (REAL-WORLD API)
// ==========================================
const API_KEY = "cb33a1dc5653f98e8c651d77";

// ==========================================
// 📌 ELEMENTS SELECTORS
// ==========================================
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const searchBtn = document.getElementById("searchBtn");
const countryBox = document.getElementById("countryBox");
const closeDedication = document.getElementById("closeDedication");
const dedicationCard = document.getElementById("dedicationCard");
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");

// ==========================================
// 🗺️ MAX EXTENDED CURRENCY NAMES DATABASE
// ==========================================
// ==========================================
// 🗺️ 100% COMPLETE GLOBAL CURRENCY NAMES DATABASE
// ==========================================
const currencyNames = {
  USD: "US Dollar", PKR: "Pakistani Rupee", GBP: "Pound Sterling", EUR: "Euro",
  INR: "Indian Rupee", SAR: "Saudi Riyal", AED: "UAE Dirham", CNY: "Chinese Yuan",
  CAD: "Canadian Dollar", AUD: "Australian Dollar", JPY: "Japanese Yen", TRY: "Turkish Lira",
  NZD: "NZ Dollar", CHF: "Swiss Franc", ZAR: "SA Rand", KWD: "Kuwaiti Dinar",
  OMR: "Omani Rial", QAR: "Qatari Riyal", BHD: "Bahraini Dinar", MYR: "Malaysian Ringgit",
  SGD: "Singapore Dollar", AFN: "Afghan Afghani", ALL: "Albanian Lek", AMD: "Armenian Dram",
  ANG: "Neth. Antillean Guilder", AOA: "Angolan Kwanza", ARS: "Argentine Peso", AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat", BAM: "Bosnia-Herzegovina Mark", BBD: "Barbadian Dollar", BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev", BIF: "Burundian Franc", BMD: "Bermudan Dollar", BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano", BRL: "Brazilian Real", BSD: "Bahamian Dollar", BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula", BYN: "Belarusian Ruble", BZD: "Belize Dollar", CDF: "Congolese Franc",
  CLP: "Chilean Peso", COP: "Colombian Peso", CRC: "Costa Rican Colón", CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo", CZK: "Czech Koruna", DJF: "Djiboutian Franc", DKK: "Danish Krone",
  DOP: "Dominican Peso", DZD: "Algerian Dinar", EGP: "Egyptian Pound", ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr", FJD: "Fijian Dollar", FKP: "Falkland Islands Pound", FOK: "Faroese Króna",
  GEL: "Georgian Lari", GGP: "Guernsey Pound", GHS: "Ghanaian Cedi", GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi", GNF: "Guinean Franc", GTQ: "Guatemalan Quetzal", GYD: "Guyanese Dollar",
  HKD: "Hong Kong Dollar", HNL: "Honduran Lempira", HRK: "Croatian Kuna", HTG: "Haitian Gourde",
  HUF: "Hungarian Forint", IDR: "Indonesian Rupiah", ILS: "Israeli New Shekel", IMP: "Manx Pound",
  IQD: "Iraqi Dinar", IRR: "Iranian Rial", ISK: "Icelandic Króna", JEP: "Jersey Pound",
  JMD: "Jamaican Dollar", JOD: "Jordanian Dinar", KES: "Kenyan Shilling", KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel", KID: "Kiribati Dollar", KMF: "Comorian Franc", KRW: "South Korean Won",
  KYD: "Cayman Islands Dollar", KZT: "Kazakhstani Tenge", LAK: "Laotian Kip", LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee", LRD: "Liberian Dollar", LSL: "Lesotho Loti", LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham", MDL: "Moldovan Leu", MGA: "Malagasy Ariary", MKD: "Macedonian Denar",
  MMK: "Myanmar Kyat", MNT: "Mongolian Tögrög", MOP: "Macanese Pataca", MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee", MVR: "Maldivian Rufiyaa", MWK: "Malawian Kwacha", MXN: "Mexican Peso",
  MZN: "Mozambican Metical", NAD: "Namibian Dollar", NGN: "Nigerian Naira", NIO: "Nicaraguan Córdoba",
  NOK: "Norwegian Krone", NPR: "Nepalese Rupee", PAB: "Panamanian Balboa", PEN: "Peruvian Sol",
  PGK: "Papua New Guinean Kina", PHP: "Philippine Peso", PLN: "Polish Złoty", PYG: "Paraguayan Guaraní",
  RON: "Romanian Leu", RSD: "Serbian Dinar", RUB: "Russian Ruble", RWF: "Rwandan Franc",
  SBD: "Solomon Islands Dollar", SCR: "Seychellois Rupee", SDG: "Sudanese Pound", SEK: "Swedish Krona",
  SHP: "St. Helena Pound", SLE: "Sierra Leonean Leone", SOS: "Somali Shilling", SRD: "Surinamer Dollar",
  SSP: "South Sudanese Pound", STN: "São Tomé Príncipe Dobra", SYP: "Syrian Pound", SZL: "Swazi Lilangeni",
  THB: "Thai Baht", TJS: "Tajikistani Somoni", TMT: "Turkmenistani Manat", TND: "Tunisian Dinar",
  TOP: "Tongan Paʻanga", TTD: "Trinidad & Tobago Dollar", TVD: "Tuvaluan Dollar", TWD: "New Taiwan Dollar",
  TZN: "Tanzanian Shilling", UAH: "Ukrainian Hryvnia", UGX: "Ugandan Shilling", UYU: "Uruguayan Peso",
  UZS: "Uzbekistani Som", VES: "Venezuelan Bolívar", VND: "Vietnamese Đồng", VUV: "Vanuatu Vatu",
  WST: "Samoan Tālā", XAF: "Central African CFA Franc", XCD: "East Caribbean Dollar", XDR: "SDR (Special Drawing Rights)",
  XOF: "West African CFA Franc", XPF: "CFP Franc", YER: "Yemeni Rial", ZMW: "Zambian Kwacha", ZWL: "Zimbabwean Dollar"
};

let liveRate = null;
let lastFrom = "";
let lastTo = "";
let lastAmount = 0;
let rateCache = {};

// ==========================================
// 🔥 FETCH RATES LOGIC
// ==========================================
async function fetchRate(fromCurrency) {
  if (rateCache[fromCurrency]) return rateCache[fromCurrency];
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`);
    const data = await response.json();
    if (data.result !== "success") return null;
    rateCache[fromCurrency] = data.conversion_rates;
    return data.conversion_rates;
  } catch (err) {
    return null;
  }
}

async function initCurrencies() {
  fromSelect.innerHTML = "<option>...</option>";
  toSelect.innerHTML = "<option>...</option>";
  const rates = await fetchRate("USD");
  if (!rates) {
    populateDropdowns(["USD", "PKR", "GBP", "EUR", "INR", "SAR"]);
    return;
  }
  populateDropdowns(Object.keys(rates));
}

// =======================================================
// 🔄 DYNAMICALLY POPULATE DROPDOWNS (FIXED "- CURRENCY")
// =======================================================
function populateDropdowns(currencies) {
  fromSelect.innerHTML = "";
  toSelect.innerHTML = "";

  currencies.forEach((currency) => {
    const nameFallback = currencyNames[currency];
    
    // 🔥 FIXED LOGIC: Agar name database mein hai to full string, warna sirf code display karein
    const displayText = nameFallback ? `${currency} - ${nameFallback}` : `${currency}`;

    const optionFrom = document.createElement("option");
    optionFrom.value = currency;
    optionFrom.textContent = displayText;
    if (currency === "USD") optionFrom.selected = true;
    fromSelect.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = currency;
    optionTo.textContent = displayText;
    if (currency === "PKR") optionTo.selected = true;
    toSelect.appendChild(optionTo);
  });
  
  updateFlagImages();
}

// =======================================================
// 🎯 UNIVERSAL AUTOMATIC COUNTRY FLAG ENGINE
// =======================================================
function updateFlagImages() {
  const fromCurr = fromSelect.value;
  const toCurr = toSelect.value;

  // 1. Resolve 'FROM' flag
  let fromCountryCode = fromCurr.substring(0, 2);
  if (fromCurr === "EUR") fromCountryCode = "FR"; // Euro custom fallback
  if (fromCurr === "ANG") fromCountryCode = "AN";
  if (fromCurr === "XOF") fromCountryCode = "SN";
  if (fromCurr === "XAF") fromCountryCode = "CM";
  if (fromCurr === "XCD") fromCountryCode = "DM";
  
  fromFlag.src = `https://flagsapi.com/${fromCountryCode}/flat/64.png`;

  // 2. Resolve 'TO' flag
  let toCountryCode = toCurr.substring(0, 2);
  if (toCurr === "EUR") toCountryCode = "FR";
  if (toCurr === "ANG") toCountryCode = "AN";
  if (toCurr === "XOF") toCountryCode = "SN";
  if (toCurr === "XAF") toCountryCode = "CM";
  if (toCurr === "XCD") toCountryCode = "DM";

  toFlag.src = `https://flagsapi.com/${toCountryCode}/flat/64.png`;
}

// Event listeners for select changes
fromSelect.addEventListener("change", updateFlagImages);
toSelect.addEventListener("change", updateFlagImages);

initCurrencies();

// ==========================================
// 💱 UPDATE CALCULATION RESULT
// ==========================================
function updateResult(amount, fromCurrency, toCurrency) {
  const feePercent = 1.2; 
  const feeAmount = amount * (feePercent / 100);
  const amountAfterFee = amount - feeAmount;
  const converted = amountAfterFee * liveRate;

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

// Auto refresh rate tracking engine (5 min interval)
setInterval(async () => {
  if (!lastFrom || !lastTo) return;
  delete rateCache[lastFrom];
  const rates = await fetchRate(lastFrom);
  if (rates && rates[lastTo]) {
    liveRate = rates[lastTo];
    updateResult(lastAmount, lastFrom, lastTo);
  }
}, 300000);

// ==========================================
// 🌍 REST COUNTRY RESEARCH HANDLER
// ==========================================
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

    try {
      const lat = country.capitalInfo?.latlng?.[0];
      const lon = country.capitalInfo?.latlng?.[1];
      if (lat && lon) {
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`);
        const weatherData = await weatherRes.json();
        weatherText = `${weatherData.current.temperature_2m}°C, Wind ${weatherData.current.wind_speed_10m} km/h`;
      }
    } catch (err) {
      weatherText = "Unavailable";
    }

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
        countryTimeText = countryTime.toLocaleString("en-PK", { dateStyle: "full", timeStyle: "short" });
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
          <p><strong>Overall Weather:</strong> ${weatherText}</p>
          <p><strong>Local Time:</strong> ${countryTimeText}</p>
        </div>
      `;
    };

    const elapsed = Date.now() - startTime;
    const wait = Math.max(2000 - elapsed, 0);

    setTimeout(() => {
      renderUI();
      setSearchLoading(false);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, wait);

  } catch (error) {
    countryBox.innerHTML = "❌ Failed to load country data!";
    setSearchLoading(false);
  }
});

// Dismiss layer configuration
closeDedication.addEventListener("click", () => {
  dedicationCard.style.display = "none";
});