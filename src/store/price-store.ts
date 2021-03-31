interface GetPriceArgs {
  cryptoCurrency: string;
}

interface SetPriceArgs {
  cryptoCurrency: string;
  value: number;
}

interface PriceStore {
  _prices: Map<string, number>;
  getPrice: (args: GetPriceArgs) => number | undefined;
  setPrice: (args: SetPriceArgs) => void;
}

const PriceStore: PriceStore = {
  _prices: new Map(),
  getPrice({ cryptoCurrency }) {
    return this._prices.get(cryptoCurrency);
  },
  setPrice({ cryptoCurrency, value }) {
    this._prices.set(cryptoCurrency, value);
  },
};

export default PriceStore;
