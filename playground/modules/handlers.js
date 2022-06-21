// import currencies from './currencies.js';

export async function handleButtonClick(event) {
  //   console.log(currencies);
  const currenciesModule = await import('./currencies.js');
  console.log(currenciesModule.default);
}
