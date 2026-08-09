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

// Helper to get weather (FAST - single API call)
async function getWeather(lat, lon) {
  try {
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`);
    if (weatherRes.ok) {
      const weatherData = await weatherRes.json();
      if (weatherData.current) {
        return `${weatherData.current.temperature_2m}°C, 💨 ${weatherData.current.wind_speed_10m} km/h, 💧 ${weatherData.current.relative_humidity_2m}%`;
      }
    }
  } catch (err) {
    console.log("Weather fetch failed");
  }
  return "Weather unavailable";
}

// Get local time using World Time API (FAST and shows timezone)
async function getLocalTimeWithTimezone(timezone) {
  if (!timezone) return { timeText: "Time unavailable", timezoneName: "Unknown", isDay: true, greeting: "Good Day! ☀️" };
  
  try {
    const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
    if (response.ok) {
      const data = await response.json();
      const countryTime = new Date(data.datetime);
      const hours = countryTime.getHours();
      const isDay = hours >= 6 && hours < 18;
      const greeting = isDay ? "Good Day! ☀️" : "Good Night! 🌙";
      
      const timeText = countryTime.toLocaleString("en-US", { 
        dateStyle: "full", 
        timeStyle: "medium"
      });
      
      return { 
        timeText, 
        timezoneName: timezone,
        isDay, 
        greeting,
        period: isDay ? "Day 🌞" : "Night 🌙"
      };
    }
    return fallbackTime();
  } catch (err) {
    console.log("Timezone error:", err);
    return fallbackTime();
  }
}

function fallbackTime() {
  const now = new Date();
  const hours = now.getHours();
  const isDay = hours >= 6 && hours < 18;
  return { 
    timeText: now.toLocaleString("en-US", { dateStyle: "full", timeStyle: "medium" }), 
    timezoneName: "Local",
    isDay, 
    greeting: isDay ? "Good Day! ☀️" : "Good Night! 🌙",
    period: isDay ? "Day 🌞" : "Night 🌙"
  };
}

// ==========================================
// 🌍 COUNTRY SEARCH (RESTCOUNTRIES API)
// ==========================================

function getCurrentTime(timezoneStr) {
  try {
    if (!timezoneStr) return "Time unknown";
    if (timezoneStr.includes("/")) {
      return new Intl.DateTimeFormat("en-US", { 
        timeZone: timezoneStr, 
        timeStyle: "short", 
        dateStyle: "medium" 
      }).format(new Date());
    }
    if (timezoneStr.startsWith("UTC")) {
      const offset = timezoneStr.replace("UTC", "").trim();
      if (!offset) {
         return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", timeStyle: "short", dateStyle: "medium" }).format(new Date());
      }
      const sign = offset[0] === "-" ? -1 : 1;
      const parts = offset.substring(1).split(":");
      const hours = parseInt(parts[0], 10) || 0;
      const mins = parseInt(parts[1], 10) || 0;
      const totalOffsetMinutes = sign * ((hours * 60) + mins);
      
      const now = new Date();
      const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
      const targetMs = utcMs + (totalOffsetMinutes * 60000);
      const targetDate = new Date(targetMs);
      
      const timeStr = targetDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
      const dateStr = targetDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      return dateStr + ", " + timeStr;
    }
  } catch(e) {
    return "Time unknown";
  }
  return "Time unknown";
}

searchBtn.addEventListener("click", async () => {
  const countryName = document.getElementById("countryInput").value.trim();

  if (!countryName) {
    countryBox.innerHTML = "Please enter a country name!";
    return;
  }

  setSearchLoading(true);
  countryBox.innerHTML = "⏳ Fetching country data...";

  try {
    // 100% PERFECT VERIFIED STATIC DATABASE
    if (!window.liveCountryCache) {
      const response = await fetch("./verified_countries.json");
      if (!response.ok) throw new Error("Verified Database Request Failed");
      window.liveCountryCache = await response.json();
    }

    const countryNameLower = countryName.toLowerCase();
    
    // Find country in the Verified Database
    const country = window.liveCountryCache.find(c => c.name.toLowerCase() === countryNameLower);
    if (!country) throw new Error("Country not found in Live API");

    // Smart timezone selector: Try to find timezone matching capital
    let bestTz = null;
    if (country.timezonesRaw && country.timezonesRaw.length > 0) {
      bestTz = country.timezonesRaw.find(t => country.capital && t.zoneName.includes(country.capital));
      if (!bestTz) bestTz = country.timezonesRaw[0];
    }

    const finalCountry = {
      name: country.name,
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      population: Number(country.population || 0).toLocaleString(),
      currencyName: country.currencyName,
      currencyCode: country.currencyCode,
      languages: country.languages,
      flag: country.flag,
      timezones: country.timezones,
      localTime: bestTz ? getCurrentTime(bestTz.zoneName) : "Time unknown",
      tld: country.tld,
      lat: country.lat,
      lon: country.lon
    };
    countryBox.innerHTML = `
      <div style="
        margin-top:20px;
        background:#ffffff;
        border-radius:20px;
        padding:20px;
        box-shadow:0 4px 12px rgba(0,0,0,.1);
      ">

        <div style="
          display:flex;
          align-items:center;
          gap:15px;
          flex-wrap:wrap;
        ">
          <img
            src="${finalCountry.flag}"
            alt="${finalCountry.name}"
            style="
              width:90px;
              border-radius:10px;
              border:1px solid #ddd;
            "
          >

          <div>
            <h2 style="margin:0; text-transform:capitalize;">
              ${finalCountry.name}
            </h2>

            <p style="margin:5px 0;">
              ${finalCountry.region}
            </p>
          </div>
        </div>

        <hr style="margin:20px 0;">

        <p><strong>🏙 Capital:</strong> ${finalCountry.capital}</p>

        <p><strong>🌍 Region:</strong> ${finalCountry.region} (${finalCountry.subregion})</p>

        <p><strong>👥 Population:</strong> ${finalCountry.population}</p>

        <p><strong>💱 Currency:</strong> ${finalCountry.currencyName} (${finalCountry.currencyCode})</p>

        <p><strong>🗣 Languages:</strong> ${finalCountry.languages}</p>

        <p><strong>🕐 Timezones:</strong> ${finalCountry.timezones}</p>

        <p><strong>🕰 Local Time:</strong> ${finalCountry.localTime}</p>

        <p><strong>🌐 Domain:</strong> ${finalCountry.tld}</p>

        <p><strong>📍 Latitude:</strong> ${finalCountry.lat}</p>

        <p><strong>📍 Longitude:</strong> ${finalCountry.lon}</p>

      </div>
    `;
  } catch (error) {
    console.error("Live API failed:", error);

    countryBox.innerHTML = `
      <div style="
        margin-top:20px;
        background:#fff3cd;
        padding:15px;
        border-radius:10px;
      ">
        ❌ ${error.message === "Country not found in Live API" ? "Country not found." : "Failed to load country data."}
      </div>
    `;
  }

  setSearchLoading(false);
});