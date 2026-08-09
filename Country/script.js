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
// 🌍 OPTIMIZED COUNTRY DATA (FAST & RELIABLE)
// ==========================================

// Expanded database with more countries (FAST - no API calls)
const countryDatabase = {
  // Asia
  "pakistan": { capital: "Islamabad", region: "Asia", subregion: "Southern Asia", currency: "Pakistani Rupee", currencyCode: "PKR", language: "Urdu", flag: "pk", lat: 33.6844, lon: 73.0479, population: 242923845, timezone: "Asia/Karachi" },
  "india": { capital: "New Delhi", region: "Asia", subregion: "Southern Asia", currency: "Indian Rupee", currencyCode: "INR", language: "Hindi, English", flag: "in", lat: 28.6139, lon: 77.209, population: 1380004385, timezone: "Asia/Kolkata" },
  "china": { capital: "Beijing", region: "Asia", subregion: "Eastern Asia", currency: "Chinese Yuan", currencyCode: "CNY", language: "Chinese", flag: "cn", lat: 39.9042, lon: 116.4074, population: 1444216107, timezone: "Asia/Shanghai" },
  "japan": { capital: "Tokyo", region: "Asia", subregion: "Eastern Asia", currency: "Japanese Yen", currencyCode: "JPY", language: "Japanese", flag: "jp", lat: 35.6895, lon: 139.6917, population: 125800000, timezone: "Asia/Tokyo" },
  "indonesia": { capital: "Jakarta", region: "Asia", subregion: "Southeastern Asia", currency: "Indonesian Rupiah", currencyCode: "IDR", language: "Indonesian", flag: "id", lat: -6.2088, lon: 106.8456, population: 273523615, timezone: "Asia/Jakarta" },
  "bangladesh": { capital: "Dhaka", region: "Asia", subregion: "Southern Asia", currency: "Bangladeshi Taka", currencyCode: "BDT", language: "Bengali", flag: "bd", lat: 23.8103, lon: 90.4125, population: 164689383, timezone: "Asia/Dhaka" },
  "malaysia": { capital: "Kuala Lumpur", region: "Asia", subregion: "Southeastern Asia", currency: "Malaysian Ringgit", currencyCode: "MYR", language: "Malay", flag: "my", lat: 3.139, lon: 101.6869, population: 32365999, timezone: "Asia/Kuala_Lumpur" },
  "singapore": { capital: "Singapore", region: "Asia", subregion: "Southeastern Asia", currency: "Singapore Dollar", currencyCode: "SGD", language: "English, Malay, Chinese", flag: "sg", lat: 1.3521, lon: 103.8198, population: 5850342, timezone: "Asia/Singapore" },
  "south korea": { capital: "Seoul", region: "Asia", subregion: "Eastern Asia", currency: "South Korean Won", currencyCode: "KRW", language: "Korean", flag: "kr", lat: 37.5665, lon: 126.978, population: 51780579, timezone: "Asia/Seoul" },
  "turkey": { capital: "Ankara", region: "Asia", subregion: "Western Asia", currency: "Turkish Lira", currencyCode: "TRY", language: "Turkish", flag: "tr", lat: 39.9334, lon: 32.8597, population: 84339067, timezone: "Europe/Istanbul" },
  
  // North America
  "united states": { capital: "Washington, D.C.", region: "Americas", subregion: "North America", currency: "US Dollar", currencyCode: "USD", language: "English", flag: "us", lat: 38.9072, lon: -77.0369, population: 331893745, timezone: "America/New_York" },
  "usa": { capital: "Washington, D.C.", region: "Americas", subregion: "North America", currency: "US Dollar", currencyCode: "USD", language: "English", flag: "us", lat: 38.9072, lon: -77.0369, population: 331893745, timezone: "America/New_York" },
  "canada": { capital: "Ottawa", region: "Americas", subregion: "North America", currency: "Canadian Dollar", currencyCode: "CAD", language: "English, French", flag: "ca", lat: 45.4215, lon: -75.6972, population: 38250000, timezone: "America/Toronto" },
  "mexico": { capital: "Mexico City", region: "Americas", subregion: "North America", currency: "Mexican Peso", currencyCode: "MXN", language: "Spanish", flag: "mx", lat: 19.4326, lon: -99.1332, population: 128932753, timezone: "America/Mexico_City" },
  
  // South America
  "brazil": { capital: "Brasília", region: "Americas", subregion: "South America", currency: "Brazilian Real", currencyCode: "BRL", language: "Portuguese", flag: "br", lat: -15.8267, lon: -47.9218, population: 213993437, timezone: "America/Sao_Paulo" },
  
  // Europe
  "united kingdom": { capital: "London", region: "Europe", subregion: "Northern Europe", currency: "British Pound", currencyCode: "GBP", language: "English", flag: "gb", lat: 51.5074, lon: -0.1278, population: 67215293, timezone: "Europe/London" },
  "uk": { capital: "London", region: "Europe", subregion: "Northern Europe", currency: "British Pound", currencyCode: "GBP", language: "English", flag: "gb", lat: 51.5074, lon: -0.1278, population: 67215293, timezone: "Europe/London" },
  "germany": { capital: "Berlin", region: "Europe", subregion: "Western Europe", currency: "Euro", currencyCode: "EUR", language: "German", flag: "de", lat: 52.52, lon: 13.405, population: 83200000, timezone: "Europe/Berlin" },
  "france": { capital: "Paris", region: "Europe", subregion: "Western Europe", currency: "Euro", currencyCode: "EUR", language: "French", flag: "fr", lat: 48.8566, lon: 2.3522, population: 67390000, timezone: "Europe/Paris" },
  "italy": { capital: "Rome", region: "Europe", subregion: "Southern Europe", currency: "Euro", currencyCode: "EUR", language: "Italian", flag: "it", lat: 41.9028, lon: 12.4964, population: 60244639, timezone: "Europe/Rome" },
  "spain": { capital: "Madrid", region: "Europe", subregion: "Southern Europe", currency: "Euro", currencyCode: "EUR", language: "Spanish", flag: "es", lat: 40.4168, lon: -3.7038, population: 47351567, timezone: "Europe/Madrid" },
  "belgium": { capital: "Brussels", region: "Europe", subregion: "Western Europe", currency: "Euro", currencyCode: "EUR", language: "Dutch, French, German", flag: "be", lat: 50.8503, lon: 4.3517, population: 11589623, timezone: "Europe/Brussels" },
  "netherlands": { capital: "Amsterdam", region: "Europe", subregion: "Western Europe", currency: "Euro", currencyCode: "EUR", language: "Dutch", flag: "nl", lat: 52.3676, lon: 4.9041, population: 17134872, timezone: "Europe/Amsterdam" },
  "switzerland": { capital: "Bern", region: "Europe", subregion: "Western Europe", currency: "Swiss Franc", currencyCode: "CHF", language: "German, French, Italian", flag: "ch", lat: 46.948, lon: 7.4474, population: 8654622, timezone: "Europe/Zurich" },
  "sweden": { capital: "Stockholm", region: "Europe", subregion: "Northern Europe", currency: "Swedish Krona", currencyCode: "SEK", language: "Swedish", flag: "se", lat: 59.3293, lon: 18.0686, population: 10353442, timezone: "Europe/Stockholm" },
  "norway": { capital: "Oslo", region: "Europe", subregion: "Northern Europe", currency: "Norwegian Krone", currencyCode: "NOK", language: "Norwegian", flag: "no", lat: 59.9139, lon: 10.7522, population: 5421241, timezone: "Europe/Oslo" },
  "denmark": { capital: "Copenhagen", region: "Europe", subregion: "Northern Europe", currency: "Danish Krone", currencyCode: "DKK", language: "Danish", flag: "dk", lat: 55.6761, lon: 12.5683, population: 5831404, timezone: "Europe/Copenhagen" },
  "finland": { capital: "Helsinki", region: "Europe", subregion: "Northern Europe", currency: "Euro", currencyCode: "EUR", language: "Finnish, Swedish", flag: "fi", lat: 60.1699, lon: 24.9384, population: 5530719, timezone: "Europe/Helsinki" },
  "ireland": { capital: "Dublin", region: "Europe", subregion: "Northern Europe", currency: "Euro", currencyCode: "EUR", language: "English, Irish", flag: "ie", lat: 53.3498, lon: -6.2603, population: 4994724, timezone: "Europe/Dublin" },
  "austria": { capital: "Vienna", region: "Europe", subregion: "Western Europe", currency: "Euro", currencyCode: "EUR", language: "German", flag: "at", lat: 48.2082, lon: 16.3738, population: 9006398, timezone: "Europe/Vienna" },
  "poland": { capital: "Warsaw", region: "Europe", subregion: "Eastern Europe", currency: "Polish Złoty", currencyCode: "PLN", language: "Polish", flag: "pl", lat: 52.2297, lon: 21.0122, population: 37950802, timezone: "Europe/Warsaw" },
  "portugal": { capital: "Lisbon", region: "Europe", subregion: "Southern Europe", currency: "Euro", currencyCode: "EUR", language: "Portuguese", flag: "pt", lat: 38.7223, lon: -9.1393, population: 10196709, timezone: "Europe/Lisbon" },
  "russia": { capital: "Moscow", region: "Europe/Asia", subregion: "Eastern Europe", currency: "Russian Ruble", currencyCode: "RUB", language: "Russian", flag: "ru", lat: 55.7558, lon: 37.6173, population: 145934462, timezone: "Europe/Moscow" },
  
  // Oceania
  "australia": { capital: "Canberra", region: "Oceania", subregion: "Australia and New Zealand", currency: "Australian Dollar", currencyCode: "AUD", language: "English", flag: "au", lat: -35.2809, lon: 149.13, population: 25788000, timezone: "Australia/Sydney" },
  "new zealand": { capital: "Wellington", region: "Oceania", subregion: "Australia and New Zealand", currency: "New Zealand Dollar", currencyCode: "NZD", language: "English, Maori", flag: "nz", lat: -41.2866, lon: 174.7756, population: 4822233, timezone: "Pacific/Auckland" },
  
  // Africa
  "egypt": { capital: "Cairo", region: "Africa", subregion: "North Africa", currency: "Egyptian Pound", currencyCode: "EGP", language: "Arabic", flag: "eg", lat: 30.0444, lon: 31.2357, population: 102334404, timezone: "Africa/Cairo" },
  "nigeria": { capital: "Abuja", region: "Africa", subregion: "West Africa", currency: "Nigerian Naira", currencyCode: "NGN", language: "English", flag: "ng", lat: 9.0765, lon: 7.3986, population: 206139587, timezone: "Africa/Lagos" },
  "argentina": { capital: "Buenos Aires", region: "Americas", subregion: "South America", currency: "Argentine peso", currencyCode: "ARS", language: "Argentina", flag: "ar", lat: -34.00000000, lon: -64.00000000, population: 46735004, timezone: "America/Argentina/Buenos_Aires" },
  "colombia": { capital: "Bogotá", region: "Americas", subregion: "South America", currency: "Colombian peso", currencyCode: "COP", language: "Colombia", flag: "co", lat: 4.00000000, lon: -72.00000000, population: 53057212, timezone: "America/Bogota" },
  "peru": { capital: "Lima", region: "Americas", subregion: "South America", currency: "Peruvian sol", currencyCode: "PEN", language: "Perú", flag: "pe", lat: -10.00000000, lon: -76.00000000, population: 34350244, timezone: "America/Lima" },
  "venezuela": { capital: "Caracas", region: "Americas", subregion: "South America", currency: "Bolívar", currencyCode: "VES", language: "Venezuela", flag: "ve", lat: 8.00000000, lon: -66.00000000, population: 28517000, timezone: "America/Caracas" },
  "ecuador": { capital: "Quito", region: "Americas", subregion: "South America", currency: "United States dollar", currencyCode: "USD", language: "Ecuador", flag: "ec", lat: -2.00000000, lon: -77.50000000, population: 18103660, timezone: "America/Guayaquil" },
  "bolivia": { capital: "Sucre", region: "Americas", subregion: "South America", currency: "Bolivian boliviano", currencyCode: "BOB", language: "Bolivia", flag: "bo", lat: -17.00000000, lon: -65.00000000, population: 11312620, timezone: "America/La_Paz" },
  "paraguay": { capital: "Asunción", region: "Americas", subregion: "South America", currency: "Paraguayan guarani", currencyCode: "PYG", language: "Paraguay", flag: "py", lat: -23.00000000, lon: -58.00000000, population: 6109644, timezone: "America/Asuncion" },
  "uruguay": { capital: "Montevideo", region: "Americas", subregion: "South America", currency: "Uruguayan peso", currencyCode: "UYU", language: "Uruguay", flag: "uy", lat: -33.00000000, lon: -56.00000000, population: 3499451, timezone: "America/Montevideo" },
  "south africa": { capital: "Pretoria", region: "Africa", subregion: "Southern Africa", currency: "South African rand", currencyCode: "ZAR", language: "South Africa", flag: "za", lat: -29.00000000, lon: 24.00000000, population: 63100945, timezone: "Africa/Johannesburg" },
  "kenya": { capital: "Nairobi", region: "Africa", subregion: "Eastern Africa", currency: "Kenyan shilling", currencyCode: "KES", language: "Kenya", flag: "ke", lat: 1.00000000, lon: 38.00000000, population: 53330978, timezone: "Africa/Nairobi" },
  "morocco": { capital: "Rabat", region: "Africa", subregion: "Northern Africa", currency: "Moroccan dirham", currencyCode: "MAD", language: "المغرب", flag: "ma", lat: 32.00000000, lon: -5.00000000, population: 36828330, timezone: "Africa/Casablanca" },
  "algeria": { capital: "Algiers", region: "Africa", subregion: "Northern Africa", currency: "Algerian dinar", currencyCode: "DZD", language: "الجزائر", flag: "dz", lat: 28.00000000, lon: 3.00000000, population: 47400000, timezone: "Africa/Algiers" },
  "ethiopia": { capital: "Addis Ababa", region: "Africa", subregion: "Eastern Africa", currency: "Ethiopian birr", currencyCode: "ETB", language: "ኢትዮጵያ", flag: "et", lat: 8.00000000, lon: 38.00000000, population: 111652998, timezone: "Africa/Addis_Ababa" },
  "tanzania": { capital: "Dodoma", region: "Africa", subregion: "Eastern Africa", currency: "Tanzanian shilling", currencyCode: "TZS", language: "Tanzania", flag: "tz", lat: -6.00000000, lon: 35.00000000, population: 68153004, timezone: "Africa/Dar_es_Salaam" },
  "ghana": { capital: "Accra", region: "Africa", subregion: "Western Africa", currency: "Ghanaian cedi", currencyCode: "GHS", language: "Ghana", flag: "gh", lat: 8.00000000, lon: -2.00000000, population: 33742380, timezone: "Africa/Accra" },
  "uganda": { capital: "Kampala", region: "Africa", subregion: "Eastern Africa", currency: "Ugandan shilling", currencyCode: "UGX", language: "Uganda", flag: "ug", lat: 1.00000000, lon: 32.00000000, population: 45905417, timezone: "Africa/Kampala" },
  "senegal": { capital: "Dakar", region: "Africa", subregion: "Western Africa", currency: "West African CFA franc", currencyCode: "XOF", language: "Sénégal", flag: "sn", lat: 14.00000000, lon: -14.00000000, population: 18593258, timezone: "Africa/Dakar" },
  "saudi arabia": { capital: "Riyadh", region: "Asia", subregion: "Western Asia", currency: "Saudi riyal", currencyCode: "SAR", language: "المملكة العربية السعودية", flag: "sa", lat: 25.00000000, lon: 45.00000000, population: 35300280, timezone: "Asia/Riyadh" },
  "united arab emirates": { capital: "Abu Dhabi", region: "Asia", subregion: "Western Asia", currency: "United Arab Emirates dirham", currencyCode: "AED", language: "دولة الإمارات العربية المتحدة", flag: "ae", lat: 24.00000000, lon: 54.00000000, population: 10678556, timezone: "Asia/Dubai" },
  "iran": { capital: "Tehran", region: "Asia", subregion: "Southern Asia", currency: "Iranian rial", currencyCode: "IRR", language: "ایران", flag: "ir", lat: 32.00000000, lon: 53.00000000, population: 85961000, timezone: "Asia/Tehran" },
  "iraq": { capital: "Baghdad", region: "Asia", subregion: "Western Asia", currency: "Iraqi dinar", currencyCode: "IQD", language: "العراق", flag: "iq", lat: 33.00000000, lon: 44.00000000, population: 46118793, timezone: "Asia/Baghdad" },
  "israel": { capital: "Jerusalem", region: "Asia", subregion: "Western Asia", currency: "Israeli new shekel", currencyCode: "ILS", language: "יִשְׂרָאֵל", flag: "il", lat: 31.50000000, lon: 34.75000000, population: 10119400, timezone: "Asia/Jerusalem" },
  "jordan": { capital: "Amman", region: "Asia", subregion: "Western Asia", currency: "Jordanian dinar", currencyCode: "JOD", language: "الأردن", flag: "jo", lat: 31.00000000, lon: 36.00000000, population: 11734000, timezone: "Asia/Amman" },
  "lebanon": { capital: "Beirut", region: "Asia", subregion: "Western Asia", currency: "Lebanese pound", currencyCode: "LBP", language: "لبنان", flag: "lb", lat: 33.83333333, lon: 35.83333333, population: 5490000, timezone: "Asia/Beirut" },
  "qatar": { capital: "Doha", region: "Asia", subregion: "Western Asia", currency: "Qatari riyal", currencyCode: "QAR", language: "قطر", flag: "qa", lat: 25.50000000, lon: 51.25000000, population: 3173024, timezone: "Asia/Qatar" },
  "kuwait": { capital: "Kuwait City", region: "Asia", subregion: "Western Asia", currency: "Kuwaiti dinar", currencyCode: "KWD", language: "الكويت", flag: "kw", lat: 29.50000000, lon: 45.75000000, population: 4881254, timezone: "Asia/Kuwait" },
  "thailand": { capital: "Bangkok", region: "Asia", subregion: "South-Eastern Asia", currency: "Thai baht", currencyCode: "THB", language: "ประเทศไทย", flag: "th", lat: 15.00000000, lon: 100.00000000, population: 65859640, timezone: "Asia/Bangkok" },
  "vietnam": { capital: "Hanoi", region: "Asia", subregion: "South-Eastern Asia", currency: "Vietnamese đồng", currencyCode: "VND", language: "Việt Nam", flag: "vn", lat: 16.16666666, lon: 107.83333333, population: 101343800, timezone: "Asia/Ho_Chi_Minh" },
  "philippines": { capital: "Manila", region: "Asia", subregion: "South-Eastern Asia", currency: "Philippine peso", currencyCode: "PHP", language: "Pilipinas", flag: "ph", lat: 13.00000000, lon: 122.00000000, population: 114123600, timezone: "Asia/Manila" },
  "myanmar": { capital: "Nay Pyi Taw", region: "Asia", subregion: "South-Eastern Asia", currency: "Burmese kyat", currencyCode: "MMK", language: "မြန်မာ", flag: "mm", lat: 22.00000000, lon: 98.00000000, population: 51316756, timezone: "Asia/Yangon" },
  "cambodia": { capital: "Phnom Penh", region: "Asia", subregion: "South-Eastern Asia", currency: "Cambodian riel", currencyCode: "KHR", language: "Kâmpŭchéa", flag: "kh", lat: 13.00000000, lon: 105.00000000, population: 17577760, timezone: "Asia/Phnom_Penh" },
  "sri lanka": { capital: "Colombo", region: "Asia", subregion: "Southern Asia", currency: "Sri Lankan rupee", currencyCode: "LKR", language: "śrī laṃkāva", flag: "lk", lat: 7.00000000, lon: 81.00000000, population: 21763170, timezone: "Asia/Colombo" },
  "nepal": { capital: "Kathmandu", region: "Asia", subregion: "Southern Asia", currency: "Nepalese rupee", currencyCode: "NPR", language: "नेपाल", flag: "np", lat: 28.00000000, lon: 84.00000000, population: 29911840, timezone: "Asia/Kathmandu" },
  "afghanistan": { capital: "Kabul", region: "Asia", subregion: "Southern Asia", currency: "Afghan afghani", currencyCode: "AFN", language: "افغانستان", flag: "af", lat: 33.00000000, lon: 65.00000000, population: 43844000, timezone: "Asia/Kabul" },
  "ukraine": { capital: "Kyiv", region: "Europe", subregion: "Eastern Europe", currency: "Ukrainian hryvnia", currencyCode: "UAH", language: "Україна", flag: "ua", lat: 49.00000000, lon: 32.00000000, population: 32862000, timezone: "Europe/Kyiv" },
  "greece": { capital: "Athens", region: "Europe", subregion: "Southern Europe", currency: "Euro", currencyCode: "EUR", language: "Ελλάδα", flag: "gr", lat: 39.00000000, lon: 22.00000000, population: 10400720, timezone: "Europe/Athens" },
  "romania": { capital: "Bucharest", region: "Europe", subregion: "Eastern Europe", currency: "Romanian leu", currencyCode: "RON", language: "România", flag: "ro", lat: 46.00000000, lon: 25.00000000, population: 19036031, timezone: "Europe/Bucharest" },
  "czech republic": { capital: "Prague", region: "Europe", subregion: "Eastern Europe", currency: "Czech koruna", currencyCode: "CZK", language: "Česká republika", flag: "cz", lat: 49.75000000, lon: 15.50000000, population: 10876875, timezone: "Europe/Prague" },
  "hungary": { capital: "Budapest", region: "Europe", subregion: "Eastern Europe", currency: "Hungarian forint", currencyCode: "HUF", language: "Magyarország", flag: "hu", lat: 47.00000000, lon: 20.00000000, population: 9539502, timezone: "Europe/Budapest" },
  "bulgaria": { capital: "Sofia", region: "Europe", subregion: "Eastern Europe", currency: "Euro", currencyCode: "EUR", language: "България", flag: "bg", lat: 43.00000000, lon: 25.00000000, population: 6437360, timezone: "Europe/Sofia" },
  "serbia": { capital: "Belgrade", region: "Europe", subregion: "Southern Europe", currency: "Serbian dinar", currencyCode: "RSD", language: "Србија", flag: "rs", lat: 44.00000000, lon: 21.00000000, population: 6567783, timezone: "Europe/Belgrade" },
  "croatia": { capital: "Zagreb", region: "Europe", subregion: "Southern Europe", currency: "Euro", currencyCode: "EUR", language: "Hrvatska", flag: "hr", lat: 45.16666666, lon: 15.50000000, population: 3866233, timezone: "Europe/Zagreb" },
  "cuba": { capital: "Havana", region: "Americas", subregion: "Caribbean", currency: "Cuban peso", currencyCode: "CUP", language: "Cuba", flag: "cu", lat: 21.50000000, lon: -80.00000000, population: 9748007, timezone: "America/Havana" },
  "jamaica": { capital: "Kingston", region: "Americas", subregion: "Caribbean", currency: "Jamaican dollar", currencyCode: "JMD", language: "Jamaica", flag: "jm", lat: 18.25000000, lon: -77.50000000, population: 2825544, timezone: "America/Jamaica" },
  "dominican republic": { capital: "Santo Domingo", region: "Americas", subregion: "Caribbean", currency: "Dominican peso", currencyCode: "DOP", language: "República Dominicana", flag: "do", lat: 19.00000000, lon: -70.66666666, population: 10771504, timezone: "America/Santo_Domingo" },
  "costa rica": { capital: "San Jose", region: "Americas", subregion: "Central America", currency: "Costa Rican colón", currencyCode: "CRC", language: "Costa Rica", flag: "cr", lat: 10.00000000, lon: -84.00000000, population: 5309625, timezone: "America/Costa_Rica" },
  "panama": { capital: "Panama City", region: "Americas", subregion: "Central America", currency: "Panamanian balboa", currencyCode: "PAB", language: "Panamá", flag: "pa", lat: 9.00000000, lon: -80.00000000, population: 4064780, timezone: "America/Panama" },
  "guatemala": { capital: "Guatemala City", region: "Americas", subregion: "Central America", currency: "Guatemalan quetzal", currencyCode: "GTQ", language: "Guatemala", flag: "gt", lat: 15.50000000, lon: -90.25000000, population: 18079810, timezone: "America/Guatemala" },
  "honduras": { capital: "Tegucigalpa", region: "Americas", subregion: "Central America", currency: "Honduran lempira", currencyCode: "HNL", language: "Honduras", flag: "hn", lat: 15.00000000, lon: -86.50000000, population: 9892632, timezone: "America/Tegucigalpa" },
  "el salvador": { capital: "San Salvador", region: "Americas", subregion: "Central America", currency: "United States dollar", currencyCode: "USD", language: "El Salvador", flag: "sv", lat: 13.83333333, lon: -88.91666666, population: 6029976, timezone: "America/El_Salvador" },
  "papua new guinea": { capital: "Port Moresby", region: "Oceania", subregion: "Melanesia", currency: "Papua New Guinean kina", currencyCode: "PGK", language: "Papua Niugini", flag: "pg", lat: -6.00000000, lon: 147.00000000, population: 11781559, timezone: "Pacific/Bougainville" }
};

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
    // 100% FREE KEYLESS API (Fetched once and cached for speed)
    if (!window.liveCountryCache) {
      const response = await fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/json/countries.json");
      if (!response.ok) throw new Error("API Request Failed");
      window.liveCountryCache = await response.json();
    }

    const countryNameLower = countryName.toLowerCase();
    
    // Check if we have perfect hand-tuned data in our offline database first
    const offlineData = countryDatabase[countryNameLower];
    let finalCountry = null;

    if (offlineData) {
      finalCountry = {
        name: countryNameLower,
        capital: offlineData.capital,
        region: offlineData.region,
        subregion: offlineData.subregion,
        population: Number(offlineData.population || 0).toLocaleString(),
        currencyName: offlineData.currency,
        currencyCode: offlineData.currencyCode,
        languages: offlineData.language,
        flag: `https://flagsapi.com/${offlineData.flag.toUpperCase()}/flat/64.png`,
        timezones: offlineData.timezone,
        localTime: getCurrentTime(offlineData.timezone),
        tld: "N/A",
        lat: offlineData.lat,
        lon: offlineData.lon
      };
    } else {
      // Fallback to the Github Global Database
      const country = window.liveCountryCache.find(c => c.name.toLowerCase() === countryNameLower);
      if (!country) throw new Error("Country not found in Live API");

      // Smart timezone selector: Try to find timezone matching capital
      let bestTz = null;
      if (country.timezones && country.timezones.length > 0) {
        bestTz = country.timezones.find(t => country.capital && t.zoneName.includes(country.capital));
        if (!bestTz) bestTz = country.timezones[0];
      }

      finalCountry = {
        name: country.name,
        capital: country.capital || "N/A",
        region: country.region || "N/A",
        subregion: country.subregion || "N/A",
        population: Number(country.population || 0).toLocaleString(),
        currencyName: country.currency_name || "N/A",
        currencyCode: country.currency || "N/A",
        languages: country.native || "N/A",
        flag: `https://flagsapi.com/${country.iso2.toUpperCase()}/flat/64.png`,
        timezones: country.timezones ? country.timezones.map(t => t.zoneName).join(", ") : "N/A",
        localTime: bestTz ? getCurrentTime(bestTz.zoneName) : "Time unknown",
        tld: country.tld || "N/A",
        lat: country.latitude || "N/A",
        lon: country.longitude || "N/A"
      };
    }

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
    console.error("Live API failed, falling back to Offline DB:", error);

    // OFFLINE FALLBACK
    const countryNameLower = countryName.toLowerCase();
    const country = countryDatabase[countryNameLower];

    if (!country) {
      countryBox.innerHTML = `
        <div style="
          margin-top:20px;
          background:#fff3cd;
          padding:15px;
          border-radius:10px;
        ">
          ❌ Country not found in Live API or Offline Database.
        </div>
      `;
      setSearchLoading(false);
      return;
    }

    const flag = `https://flagsapi.com/${country.flag.toUpperCase()}/flat/64.png`;
    const population = Number(country.population || 0).toLocaleString();
    const localTime = country.timezone ? getCurrentTime(country.timezone) : "Time unknown";

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
            src="${flag}"
            alt="${countryName}"
            style="
              width:90px;
              border-radius:10px;
              border:1px solid #ddd;
            "
          >

          <div>
            <h2 style="margin:0; text-transform:capitalize;">
              ${countryNameLower}
            </h2>

            <p style="margin:5px 0;">
              ${country.region || "N/A"}
            </p>
          </div>
        </div>

        <hr style="margin:20px 0;">

        <p><strong>🏙 Capital:</strong> ${country.capital}</p>
        <p><strong>🌍 Region:</strong> ${country.region} (${country.subregion})</p>
        <p><strong>👥 Population:</strong> ${population}</p>
        <p><strong>💱 Currency:</strong> ${country.currency} (${country.currencyCode})</p>
        <p><strong>🗣 Languages:</strong> ${country.language}</p>
        <p><strong>🕐 Timezones:</strong> ${country.timezone}</p>
        <p><strong>🕰 Local Time:</strong> ${localTime}</p>
        <p><strong>📍 Latitude:</strong> ${country.lat}</p>
        <p><strong>📍 Longitude:</strong> ${country.lon}</p>

      </div>
    `;
  }

  setSearchLoading(false);
});
/* New functionality: Show all hardcoded countries */
const allCountriesBtn = document.createElement('button');
allCountriesBtn.id = 'allCountriesBtn';
allCountriesBtn.textContent = 'All Countries';
allCountriesBtn.style = 'margin:10px;padding:8px 12px;background:#4a90e2;color:white;border:none;border-radius:5px;cursor:pointer;';
document.body.appendChild(allCountriesBtn);

allCountriesBtn.addEventListener('click', () => {
  const all = Object.entries(countryDatabase)
    .map(([name, data]) => `<li>${name} - ${data.capital} (${data.currencyCode})</li>`)
    .join('');
  countryBox.innerHTML = `<ul style="max-height:400px;overflow:auto;">${all}</ul>`;
});