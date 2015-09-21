import Ember from 'ember';

export
default Ember.Service.extend({
    stock_exchanges: {
        A: "NYSE MKT (ex-AMEX)",
        B: "NASDAQ OMX BX",
        C: "National Stock Exchange",
        D: "FINRA",
        F: "Mutual Funds/Money Markets (NASDAQ)",
        I: "International Securities Exchange",
        J: "Direct Edge A",
        K: "Direct Edge X",
        M: "Chicago Stock Exchange",
        N: "NYSE",
        P: "NYSE ArcaSM",
        Q: "NASDAQ OMX",
        S: "NASDAQ Small Cap",
        T: "NASDAQ Int",
        U: "OTCBB",
        V: "OTC other",
        W: "CBOE",
        X: "NASDAQ OMX PSX",
        G: "GLOBEX",
        Y: "BATS Y-Exchange",
        Z: "BATS",
    },

    option_exchanges: {
        A: "NYSE MKT (ex-AMEX)",
        B: "NASDAQ OMX BX",
        C: "CBOE",
        I: "ISE",
        M: "MIAX",
        N: "NYSE ArcaSM",
        Q: "NASDAQ",
        T: "NASDAQ OMX BX Options",
        W: "C2",
        X: "NASDAQ OMX PHLX",
        Z: "BATS",
    },

    exchange_name: function(type, exch) {
        if (type == "option") {
            return this.option_exchanges[exch];
        } else {
            return this.stock_exchanges[exch];
        }
    },
});
