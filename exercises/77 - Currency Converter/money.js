const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};
// demo code
const myHeaders = new Headers();
myHeaders.append('apikey', 'I8tWAWlcZ7f4Dk8jxKdW215C5ZWPnvFr');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

// course code
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');

const fromInput = document.querySelector('[name="from_amount"]');
const form = document.querySelector('.app form');
const toEl = document.querySelector('.to_amount');

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode}-${currencyName}</option>`
    )
    .join('');
}

const responseOb = {
  success: true,
  query: {
    from: 'USD',
    to: 'BRL',
    amount: 100,
  },
  info: {
    timestamp: 1655749623,
    rate: 5.176701,
  },
  date: '2022-06-20',
  result: 517.6701,
};

async function convert(amount, from, to) {
  // convert that amount that they passed it
  // this step using api:https://apilayer.com/marketplace/exchangerates_data-api#documentation-tab
  const res = fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  );
  // .then((response) => response.text())
  // .then((result) => console.log(result));

  console.log(res);
  console.log(typeof res); // res is response object

  const resOb = await res; // 2 layers of await not working, need to finish the processing in one line
  console.log(resOb); // resOb is response object
  console.log(resOb.text()); // why again promise?

  // const convertedAmount = await res.result.text();
  return convertedAmount; // get convertedAmount from response directly now
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

async function handleInput(e) {
  // console.log(fromInput.value, fromSelect.value, toSelect.value);
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

form.addEventListener('input', handleInput);

const optionsHTML = generateOptions(currencies);
// populate the options elements

fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
