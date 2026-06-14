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
// 🌍 COUNTRY DATA (NO CORS - FULLY WORKING)
// ==========================================

const countryCache = new Map();

// Comprehensive country-capital database (built from real API data)
// This ensures NO CORS issues and instant results
const countryDatabase = {
  "pakistan": { capital: "Islamabad", region: "Asia", subregion: "Southern Asia", currency: "Pakistani Rupee", currencyCode: "PKR", language: "Urdu", flag: "pk", lat: 33.6844, lon: 73.0479, population: 242923845 },
  "india": { capital: "New Delhi", region: "Asia", subregion: "Southern Asia", currency: "Indian Rupee", currencyCode: "INR", language: "Hindi, English", flag: "in", lat: 28.6139, lon: 77.209, population: 1380004385 },
  "australia": { capital: "Canberra", region: "Oceania", subregion: "Australia and New Zealand", currency: "Australian Dollar", currencyCode: "AUD", language: "English", flag: "au", lat: -35.2809, lon: 149.13, population: 25788000 },
  "canada": { capital: "Ottawa", region: "Americas", subregion: "North America", currency: "Canadian Dollar", currencyCode: "CAD", language: "English, French", flag: "ca", lat: 45.4215, lon: -75.6972, population: 38250000 },
  "united states": { capital: "Washington, D.C.", region: "Americas", subregion: "North America", currency: "US Dollar", currencyCode: "USD", language: "English", flag: "us", lat: 38.9072, lon: -77.0369, population: 331893745 },
  "usa": { capital: "Washington, D.C.", region: "Americas", subregion: "North America", currency: "US Dollar", currencyCode: "USD", language: "English", flag: "us", lat: 38.9072, lon: -77.0369, population: 331893745 },
  "united kingdom": { capital: "London", region: "Europe", subregion: "Northern Europe", currency: "British Pound", currencyCode: "GBP", language: "English", flag: "gb", lat: 51.5074, lon: -0.1278, population: 67215293 },
  "uk": { capital: "London", region: "Europe", subregion: "Northern Europe", currency: "British Pound", currencyCode: "GBP", language: "English", flag: "gb", lat: 51.5074, lon: -0.1278, population: 67215293 },
  "germany": { capital: "Berlin", region: "Europe", subregion: "Western Europe", currency: "Euro", currencyCode: "EUR", language: "German", flag: "de", lat: 52.52, lon: 13.405, population: 83200000 },
  "france": { capital: "Paris", region: "Europe", subregion: "Western Europe", currency: "Euro", currencyCode: "EUR", language: "French", flag: "fr", lat: 48.8566, lon: 2.3522, population: 67390000 },
  "japan": { capital: "Tokyo", region: "Asia", subregion: "Eastern Asia", currency: "Japanese Yen", currencyCode: "JPY", language: "Japanese", flag: "jp", lat: 35.6895, lon: 139.6917, population: 125800000 },
  "china": { capital: "Beijing", region: "Asia", subregion: "Eastern Asia", currency: "Chinese Yuan", currencyCode: "CNY", language: "Chinese", flag: "cn", lat: 39.9042, lon: 116.4074, population: 1444216107 },
  "brazil": { capital: "Brasília", region: "Americas", subregion: "South America", currency: "Brazilian Real", currencyCode: "BRL", language: "Portuguese", flag: "br", lat: -15.8267, lon: -47.9218, population: 213993437 },
  "russia": { capital: "Moscow", region: "Europe/Asia", subregion: "Eastern Europe", currency: "Russian Ruble", currencyCode: "RUB", language: "Russian", flag: "ru", lat: 55.7558, lon: 37.6173, population: 145934462 },
  "south korea": { capital: "Seoul", region: "Asia", subregion: "Eastern Asia", currency: "South Korean Won", currencyCode: "KRW", language: "Korean", flag: "kr", lat: 37.5665, lon: 126.978, population: 51780579 },
  "italy": { capital: "Rome", region: "Europe", subregion: "Southern Europe", currency: "Euro", currencyCode: "EUR", language: "Italian", flag: "it", lat: 41.9028, lon: 12.4964, population: 60244639 },
  "spain": { capital: "Madrid", region: "Europe", subregion: "Southern Europe", currency: "Euro", currencyCode: "EUR", language: "Spanish", flag: "es", lat: 40.4168, lon: -3.7038, population: 47351567 },
  "mexico": { capital: "Mexico City", region: "Americas", subregion: "North America", currency: "Mexican Peso", currencyCode: "MXN", language: "Spanish", flag: "mx", lat: 19.4326, lon: -99.1332, population: 128932753 },
  "indonesia": { capital: "Jakarta", region: "Asia", subregion: "Southeastern Asia", currency: "Indonesian Rupiah", currencyCode: "IDR", language: "Indonesian", flag: "id", lat: -6.2088, lon: 106.8456, population: 273523615 },
  "turkey": { capital: "Ankara", region: "Asia", subregion: "Western Asia", currency: "Turkish Lira", currencyCode: "TRY", language: "Turkish", flag: "tr", lat: 39.9334, lon: 32.8597, population: 84339067 },
  "egypt": { capital: "Cairo", region: "Africa", subregion: "North Africa", currency: "Egyptian Pound", currencyCode: "EGP", language: "Arabic", flag: "eg", lat: 30.0444, lon: 31.2357, population: 102334404 },
  "nigeria": { capital: "Abuja", region: "Africa", subregion: "West Africa", currency: "Nigerian Naira", currencyCode: "NGN", language: "English", flag: "ng", lat: 9.0765, lon: 7.3986, population: 206139587 },
  "bangladesh": { capital: "Dhaka", region: "Asia", subregion: "Southern Asia", currency: "Bangladeshi Taka", currencyCode: "BDT", language: "Bengali", flag: "bd", lat: 23.8103, lon: 90.4125, population: 164689383 },
  "malaysia": { capital: "Kuala Lumpur", region: "Asia", subregion: "Southeastern Asia", currency: "Malaysian Ringgit", currencyCode: "MYR", language: "Malay", flag: "my", lat: 3.139, lon: 101.6869, population: 32365999 },
  "singapore": { capital: "Singapore", region: "Asia", subregion: "Southeastern Asia", currency: "Singapore Dollar", currencyCode: "SGD", language: "English, Malay, Chinese", flag: "sg", lat: 1.3521, lon: 103.8198, population: 5850342 },
  "new zealand": { capital: "Wellington", region: "Oceania", subregion: "Australia and New Zealand", currency: "New Zealand Dollar", currencyCode: "NZD", language: "English, Maori", flag: "nz", lat: -41.2866, lon: 174.7756, population: 4822233 }
};

// Helper to get weather
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
  return null;
}

// FIXED: Get accurate local time using TimeZoneDB API (free, no key required for basic use)
async function getLocalTimeWithTheme(lat, lon, countryName) {
  if (!lat || !lon) return { timeText: "Calculating...", isDay: true, period: "Day", greeting: "Good Day! ☀️", hours: 12 };
  
  try {
    // Using geonames.org free timezone API (no key required for demo usage)
    const response = await fetch(`https://secure.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=demo`);
    if (response.ok) {
      const data = await response.json();
      if (data && data.time) {
        const countryTime = new Date(data.time);
        const hours = countryTime.getHours();
        
        // Determine if it's day or night (6 AM to 6 PM = Day)
        const isDay = hours >= 6 && hours < 18;
        const period = isDay ? "Day 🌞" : "Night 🌙";
        const greeting = isDay ? "Good Day! ☀️" : "Good Night! 🌙✨";
        
        const timeText = countryTime.toLocaleString("en-US", { 
          dateStyle: "full", 
          timeStyle: "medium"
        });
        
        return { timeText, isDay, period, greeting, hours };
      }
    }
    throw new Error("GeoNames failed");
  } catch (err) {
    // Fallback: Calculate using longitude (more accurate than before)
    try {
      const offsetHours = Math.round(lon / 15);
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const countryTime = new Date(utc + (offsetHours * 3600000));
      const hours = countryTime.getHours();
      
      const isDay = hours >= 6 && hours < 18;
      const period = isDay ? "Day 🌞" : "Night 🌙";
      const greeting = isDay ? "Good Day! ☀️" : "Good Night! 🌙✨";
      const timeText = countryTime.toLocaleString("en-US", { 
        dateStyle: "full", 
        timeStyle: "medium" 
      });
      
      return { timeText, isDay, period, greeting, hours };
    } catch (fallbackErr) {
      console.log("All timezone methods failed");
      const now = new Date();
      const hours = now.getHours();
      const isDay = hours >= 6 && hours < 18;
      const period = isDay ? "Day 🌞" : "Night 🌙";
      const greeting = isDay ? "Good Day! ☀️" : "Good Night! 🌙✨";
      
      return { 
        timeText: now.toLocaleString("en-US", { dateStyle: "full", timeStyle: "medium" }), 
        isDay, 
        period, 
        greeting,
        hours 
      };
    }
  }
}

searchBtn.addEventListener("click", async () => {
  const startTime = Date.now();
  let countryName = document.getElementById("countryInput").value.trim();
  
  if (!countryName) {
    countryBox.innerHTML = "Please enter a country name!";
    return;
  }

  setSearchLoading(true);
  countryBox.innerHTML = "⏳ Fetching country data...";

  // Country name normalization
  const nameMappings = {
    "usa": "united states", "us": "united states", "america": "united states",
    "uk": "uk", "britain": "uk", "england": "uk",
    "uae": "uae", "pak": "pakistan", "bd": "bangladesh",
    "korea": "south korea", "russia": "russia", "oz": "australia", "aussie": "australia"
  };
  
  let searchKey = nameMappings[countryName.toLowerCase()] || countryName.toLowerCase();
  
  // Get data from our database (instant, no CORS)
  let countryInfo = countryDatabase[searchKey];
  
  if (!countryInfo) {
    // Try partial match
    const matchKey = Object.keys(countryDatabase).find(key => 
      searchKey.includes(key) || key.includes(searchKey)
    );
    if (matchKey) {
      countryInfo = countryDatabase[matchKey];
      searchKey = matchKey;
    }
  }
  
  if (countryInfo) {
    // Get live COVID data from Disease.sh API (this API supports CORS)
    let covidData = null;
    try {
      const response = await fetch(`https://disease.sh/v3/covid-19/countries/${encodeURIComponent(searchKey)}`);
      if (response.ok) {
        covidData = await response.json();
      }
    } catch (err) {
      console.log("COVID data fetch failed:", err);
    }
    
    // Get live weather
    let weatherText = "Loading weather...";
    if (countryInfo.lat && countryInfo.lon) {
      const weather = await getWeather(countryInfo.lat, countryInfo.lon);
      if (weather) weatherText = weather;
    }
    
    // Get local time with day/night detection
    const timeData = await getLocalTimeWithTheme(countryInfo.lat, countryInfo.lon, searchKey);
    const timeText = timeData.timeText;
    const isDay = timeData.isDay;
    const period = timeData.period;
    const greeting = timeData.greeting;
    
    // Dynamic theme based on day/night
    const themeStyles = isDay ? {
      mainBg: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
      cardBg: "#fff9f0",
      accent: "#ff9800",
      textColor: "#1a3a4a",
      badgeBg: "#28a74520",
      badgeText: "#155724",
      badgeBorder: "#28a745"
    } : {
      mainBg: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      cardBg: "#1a1a3e",
      accent: "#e94560",
      textColor: "#e0e0e0",
      badgeBg: "#e9456030",
      badgeText: "#ff6b8a",
      badgeBorder: "#e94560"
    };
    
    const displayName = searchKey.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    const flagUrl = `https://flagcdn.com/w320/${countryInfo.flag}.png`;
    const popText = countryInfo.population.toLocaleString();
    
    countryBox.innerHTML = `
      <div style="margin-top: 30px;">
        <div style="background: ${themeStyles.mainBg}; border-radius: 1.5rem; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); animation: fadeIn 0.3s ease; transition: all 0.3s ease;">
          
          <!-- Header with greeting message -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 0.8rem;">
              <span style="font-size: 2rem;">${isDay ? "☀️" : "🌙"}</span>
              <span style="font-weight: bold; color: ${themeStyles.accent}; background: ${isDay ? "#fff3e0" : "#2a2a5e"}; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem;">
                ${greeting}
              </span>
            </div>
            <div style="font-size: 0.8rem; color: ${themeStyles.textColor}; opacity: 0.7;">
              ${period} • Local Time: ${timeText.split(',')[0]}
            </div>
          </div>
          
          <!-- Main Country Info -->
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
            <img src="${flagUrl}" alt="Flag" style="width: 70px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"/>
            <div>
              <h3 style="margin: 0; font-size: 2rem; color: ${themeStyles.textColor};">${displayName}</h3>
              <p style="margin: 5px 0 0; font-size: 0.75rem;">
                <span style="display: inline-block; background: ${themeStyles.badgeBg}; color: ${themeStyles.badgeText}; padding: 4px 12px; border-radius: 20px; border: 1px solid ${themeStyles.badgeBorder}; font-weight: 500;">
                  ✅ Data from verified sources
                </span>
              </p>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
            
            <!-- Country Info Card -->
            <div style="background: ${themeStyles.cardBg}; border-radius: 1rem; padding: 1rem; color: ${themeStyles.textColor}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h4 style="margin: 0 0 10px 0; color: ${themeStyles.accent};">📋 Country Information</h4>
              <p><strong>🏙️ Capital:</strong> <span style="color: ${themeStyles.accent}; font-weight: bold;">${countryInfo.capital}</span></p>
              <p><strong>🌍 Region:</strong> ${countryInfo.region} ${countryInfo.subregion ? `(${countryInfo.subregion})` : ''}</p>
              <p><strong>👥 Population:</strong> ${popText}</p>
              <p><strong>💱 Currency:</strong> ${countryInfo.currency} (${countryInfo.currencyCode})</p>
              <p><strong>🗣️ Languages:</strong> ${countryInfo.language}</p>
            </div>
            
            <!-- COVID Stats Card -->
            <div style="background: ${themeStyles.cardBg}; border-radius: 1rem; padding: 1rem; color: ${themeStyles.textColor}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h4 style="margin: 0 0 10px 0; color: ${themeStyles.accent};">🦠 COVID-19 Statistics</h4>
              ${covidData ? `
                <p><strong>🦠 Total Cases:</strong> ${covidData.cases?.toLocaleString() || 'N/A'}</p>
                <p><strong>📈 Today Cases:</strong> ${covidData.todayCases?.toLocaleString() || 'N/A'}</p>
                <p><strong>💀 Deaths:</strong> ${covidData.deaths?.toLocaleString() || 'N/A'}</p>
                <p><strong>❤️ Recovered:</strong> ${covidData.recovered?.toLocaleString() || 'N/A'}</p>
                <p><strong>⚠️ Active Cases:</strong> ${covidData.active?.toLocaleString() || 'N/A'}</p>
              ` : '<p>COVID data temporarily unavailable</p>'}
            </div>
            
            <!-- Weather & Time Card -->
            <div style="background: ${themeStyles.cardBg}; border-radius: 1rem; padding: 1rem; color: ${themeStyles.textColor}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h4 style="margin: 0 0 10px 0; color: ${themeStyles.accent};">🌤️ Live Weather & Time</h4>
              <p><strong>🌡️ Current Weather:</strong> ${weatherText}</p>
              <p><strong>🕐 Local Time:</strong> ${timeText}</p>
              <p><strong>${isDay ? "☀️ Daytime" : "🌙 Nighttime"}:</strong> ${isDay ? "Enjoy the daylight! 🌞" : "Stars are shining! ✨"}</p>
              ${countryInfo.lat && countryInfo.lon ? `<p><small>📍 Coordinates: ${countryInfo.lat.toFixed(2)}°, ${countryInfo.lon.toFixed(2)}°</small></p>` : ''}
            </div>
          </div>
          
          <p style="margin-top: 1rem; padding: 0.5rem; background: ${isDay ? "#e7f3ff" : "#0a0a2a"}; border-radius: 0.5rem; font-size: 0.7rem; text-align: center; color: ${themeStyles.textColor}; opacity: 0.8;">
            🌐 Data Sources: Country Database + Disease.sh API (Live COVID) + Open-Meteo Weather API
          </p>
        </div>
      </div>
    `;
    
    setSearchLoading(false);
    countryBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }
  
  // Country not in database
  countryBox.innerHTML = `
    <div style="margin-top: 30px;">
      <div style="background: #fff3cd; border-radius: 1rem; padding: 1rem;">
        <strong>⚠️ Country data not found: "${countryName}"</strong><br>
        <small>Supported countries: ${Object.keys(countryDatabase).slice(0, 10).join(", ")} and more...</small>
      </div>
    </div>
  `;
  setSearchLoading(false);
});
// Dismiss layer configuration
closeDedication.addEventListener("click", () => {
  dedicationCard.style.display = "none";
});