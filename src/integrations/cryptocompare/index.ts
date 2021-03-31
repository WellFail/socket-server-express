import request from 'request-promise';

const GET_PRICE_URL = `${process.env.CRYPTO_COMPARE_API_BASE_URL}/data/price`;

const cryptoCompare = {
  getPrice: async ({ cryptoCurrency, currency }: GetPriceArgs): Promise<number> => {
    const data = await request.get(GET_PRICE_URL, {
      json: true,
      qs: {
        fsym: cryptoCurrency,
        tsyms: currency,
      },
    });

    return data[currency];
  },
};

export default cryptoCompare;

interface GetPriceArgs {
  cryptoCurrency: 'BTC';
  currency: 'USD' | 'RUB';
}
