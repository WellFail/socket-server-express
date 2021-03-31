const storage: any = {};

interface SetPriceArgs {
  cryptoCurrency: string;
  value: number;
}

interface GetPriceArgs {
  cryptoCurrency: string;
}

export const setPrice = ({ cryptoCurrency, value }: SetPriceArgs): void => {
  storage[cryptoCurrency] = value;
};

export const getPrice = ({ cryptoCurrency }: GetPriceArgs): number => {
  return storage[cryptoCurrency];
};

export default storage;
