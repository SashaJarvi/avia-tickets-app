class CurrencyUI {
  constructor() {
    this.currency = document.getElementById('currency');
    this.dictionary = {
      USD: '$',
      EUR: '€',
      RUB: '₽'
    }
  }

  get currencyValue() {
    return this.currency.value;
  }

  getCurrencySymbol() { /* получаем символ валюты */
    return this.dictionary[this.currencyValue]
  }
}

const currencyUI = new CurrencyUI();

export default currencyUI;