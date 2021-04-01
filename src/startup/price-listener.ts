import { CronJob } from 'cron';

import CryptoCompareAPI from '../integrations/cryptocompare';
import PriceStore from '../store/price-store';

const loadPrice = () => {
  CryptoCompareAPI.getPrice({ cryptoCurrency: 'BTC', currency: 'USD' })
    .then((data) => PriceStore.setPrice({ cryptoCurrency: 'BTC', value: data }))
    .catch((e) => console.error(e));
};

const priceUpdater = new CronJob('* * * * *', loadPrice);

loadPrice();
priceUpdater.start();
