//все ленды
const massLands = [
    // ['FX-LPL77-01-01', {'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ar', 'es', 'hg', 'id', 'ms', 'pt', 'ru', 'th', 'vi']],
    // ['GA-FX-LPL77-01-01', {'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ar', 'es', 'hg', 'id', 'ms', 'pt', 'ru', 'th', 'vi']],
    ['FX-LPL78-01-01', {'asset' : 'AAPL', 'deeplink_action' : 'trading', 'project' : 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']],
    // ['FX-LPL78-01-02', {'asset': 'TSLA', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']], 
    // ['FX-LPL78-01-03', {'asset': 'AMD', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']],
    // ['FX-LPL78-01-04', {'asset': 'NFLX', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']],
    // ['FX-LPL78-01-05', {'asset': 'TWTR', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']],
    // ['FX-LPL78-01-06', {'asset': 'NVDA', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']],
    // ['FX-LPL78-01-07', {'asset': 'BIDU', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']],
    // ['FX-LPL78-01-08', {'asset': 'BABA', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']],
    // ['FX-LPL78-01-09', {'asset': 'AMZN', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']],
    // ['FX-LPL78-01-10', {'asset': 'DIS', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'ar', 'es', 'hg', 'id', 'ko', 'ms', 'pt', 'th', 'vi']],
    // ['FX-LPL79-01-01', {'asset': 'Bitcoin', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'ru', 'es', 'ar', 'hg', 'pt', 'vi', 'id', 'ms', 'th', 'ko']],
    // ['FX-LPL79-01-02', {'asset': 'ltcusd', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL79-01-03', {'asset': 'Bitcoin', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL65-01-01', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL65-02-01', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL65-03-01', {'deeplink_action': 'trading', 'project': 'fx'}], 
    // ['FX-LPL65-03-03', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['GA-FX-LPL65-03-01', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['GA-FX-LPL65-02-01', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['GA-FX-LPL65-01-01', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['GA-FX-LPL65-04-01', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['GA-FX-LPL65-03-02', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['GA-FX-LPL65-03-03', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-01', {'asset': 'Bitcoin', 'deeplink_action': 'trading', 'project': 'fx'}, ['en', 'id', 'ms', 'vi', 'pt']],
    // ['FX-LPL76-01-02', {'asset': 'GBPUSD', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-03', {'asset': 'EURUSD', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-04', {'asset': 'AAPL', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-05', {'asset': 'NQ', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-06', {'asset': 'ES', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-07', {'asset': 'TSLA', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-08', {'asset': 'XAUUSD', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-09', {'asset': 'YM', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-10', {'asset': 'FDAX', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-11', {'asset': 'AAP', 'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL76-01-12', {'asset': 'AAPL', 'deeplink_action': 'tradin', 'project': 'fx'}],
    // ['FX-LPL01-01-01', {'deeplink_action': 'trading', 'project': 'fx'}], //дочерние GA-FX-LPL01-01-01, GA-FX-LPL01-01-05, FX-LPL01-01-05
    // ['GA-FX-LPL01-01-01', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL01-01-05', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['GA-FX-LPL01-01-05', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL01-02-01', {'deeplink_action': 'trading', 'project': 'fx'}], //дочерние GA-FX-LPL01-02-01, GA-FX-LPL01-02-02, GA-FX-LPL01-02-04, FX-LPL01-02-02, FX-LPL01-02-04
    // ['FX-LPL01-02-02', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['GA-FX-LPL01-02-02', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL01-02-04', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['GA-FX-LPL01-02-04', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL01-01-06', {'deeplink_action': 'trading', 'project': 'fx'}],
    // ['FX-LPL01-01-03', {'deeplink_action': 'trading', 'project': 'fx'}], нет en
    // ['LPL74-01-01', {}]
    // ['LPL79-01-01', {}],
    // ['LPL80-01-01', {}],
    // ['LPL60-01-03', {}],
    // ['LPL60-01-04', {}],
    // ['LPL60-01-05', {}],
    // ['GA-LPL60-01-03', {}],
    // ['GA-LPL60-01-04', {}],
    // ['LPL54-01-01', {}],
    // ['LPL54-02-01', {}],
    // ['LPL54-03-01', {}],
    // ['GA-LPL54-01-01', {}],
    // ['GA-LPL54-02-01', {}],
    // ['GA-LPL54-03-01', {}],
    // ['LPL47-01-01', {}],
    // ['LPL47-01-02', {}],
    // ['LPL47-02-01', {}],
    // ['LPL47-02-02', {}],
    // ['LPL47-03-01', {}],
    // ['LPL47-03-02', {}],
    // ['LPL47-04-01', {}],
    // ['LPL47-04-02', {}],
    // ['GA-LPL47-01-01', {}],
    // ['GA-LPL47-01-02', {}],
    // ['GA-LPL47-02-01', {}],
    // ['GA-LPL47-02-02', {}],
    // ['GA-LPL47-03-01', {}],
    // ['GA-LPL47-03-02', {}],
    // ['GA-LPL47-04-01', {}],
    // ['GA-LPL47-04-02', {}],

];  

//ленды с карточками активов на странице

const massLandsCards = [
    ['FX-LPL76-01-11', {}]
    ['FX-LPL76-01-12']
];

const massLandsCardsСarousel = [
    ['FX-LPL77-01-01', {}],
    ['GA-FX-LPL77-01-01', {}]
];

// const massLandsItem = [
//     ['FX-LPL77-01-01', 'https://blog.olymptrade.com/?lang=en'],
// ]

// exports.massLandsItem =massLandsItem;
exports.massLandsCards = massLandsCards;
exports.massLands = massLands;