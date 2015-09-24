//
// Imported from http://stackoverflow.com/a/28634279
//
import DS from 'ember-data';

export
default DS.RESTAdapter.extend({
    namespace: 'v1/markets/options/expirations',
    host: 'https://api.tradier.com',

    s_and_p_500_symbols: function() {
        return ["MMM", "ACE", "AES", "AFL", "GAS", "AME", "T", "ABBV", "ABT", "ACN", "ATVI", "ADBE", "AAP", "AET", "AMG", "A", "APD", "ARG", "AKAM", "AA", "ALXN", "ALLE", "AGN", "ADS", "ALL", "ALTR", "MO", "AMZN", "AEE", "AAL", "AEP", "AXP", "AIG", "AMT", "AMP", "ABC", "AMGN", "APH", "APC", "ADI", "ANTM", "AON", "APA", "AIV", "AAPL", "AMAT", "ADM", "AIZ", "AN", "AZO", "ADSK", "ADP", "AVGO", "AVB", "AVY", "BBT", "BHI", "BLL", "BAC", "BCR", "BXLT", "BAX", "BDX", "BBBY", "BRK.B", "BBY", "BIIB", "BLK", "HRB", "BA", "BWA", "BXP", "BSX", "BMY", "BRCM", "BF.B", "CA", "CBG", "CBS", "CF", "CHRW", "CME", "CMS", "CNX", "CSX", "CVS", "CVC", "COG", "CAM", "CPB", "COF", "CAH", "KMX", "CCL", "CAT", "CELG", "CNP", "CTL", "CERN", "CHK", "CVX", "CMG", "CB", "CI", "XEC", "CINF", "CTAS", "CSCO", "C", "CTXS", "CLX", "COH", "KO", "CCE", "CTSH", "CL", "CPGX", "CMCSA", "CMA", "CSC", "CAG", "COP", "ED", "STZ", "GLW", "COST", "CCI", "CMI", "DTE", "DVA", "DHR", "DRI", "DE", "DLPH", "DAL", "XRAY", "DVN", "DO", "DFS", "DISCA", "DISCK", "DG", "DLTR", "D", "DOV", "DOW", "DPS", "DUK", "DNB", "ETFC", "DD", "EMC", "EOG", "EQT", "EMN", "ETN", "ECL", "EIX", "EW", "EA", "EMR", "ENDP", "ESV", "ETR", "EFX", "EQIX", "EQR", "ESS", "EL", "ES", "EXC", "EXPE", "EXPD", "ESRX", "XOM", "FFIV", "FLIR", "FMC", "FTI", "FB", "FAST", "FDX", "FIS", "FITB", "FSLR", "FE", "FISV", "FLS", "FLR", "F", "FOSL", "BEN", "FCX", "FTR", "GME", "GPS", "GRMN", "GD", "GE", "GGP", "GIS", "GM", "GPC", "GNW", "GILD", "GS", "GT", "GOOGL", "GOOG", "GWW", "HCA", "HCP", "HAL", "HBI", "HOG", "HAR", "HRS", "HIG", "HAS", "HCN", "HP", "HSY", "HES", "HPQ", "HD", "HON", "HRL", "DHI", "HSP", "HST", "HCBK", "HUM", "JBHT", "HBAN", "ITW", "IR", "INTC", "ICE", "IPG", "IBM", "IFF", "IP", "INTU", "ISRG", "IVZ", "IRM", "JPM", "JEC", "JNJ", "JCI", "JOY", "JNPR", "KLAC", "KSU", "K", "GMCR", "KEY", "KMB", "KIM", "KMI", "KSS", "KR", "LB", "LLL", "LH", "LRCX", "LM", "LEG", "LEN", "LUK", "LVLT", "LLY", "LNC", "LLTC", "LMT", "L", "LOW", "LYB", "MTB", "MAC", "M", "MNK", "MRO", "MPC", "MAR", "MMC", "MLM", "MAS", "MA", "MAT", "MKC", "MCD", "MHFI", "MCK", "MJN", "MDT", "MRK", "MET", "KORS", "MCHP", "MU", "MSFT", "MHK", "TAP", "MDLZ", "MON", "MNST", "MCO", "MS", "MOS", "MSI", "MUR", "MYL", "NKE", "NRG", "NDAQ", "NOV", "NAVI", "NTAP", "NFLX", "NWL", "NFX", "NEM", "NWSA", "NEE", "NLSN", "NI", "NBL", "JWN", "NSC", "NTRS", "NOC", "NUE", "NVDA", "ORLY", "OKE", "OXY", "OMC", "ORCL", "OI", "PCAR", "PCG", "PNC", "PPG", "PPL", "PVH", "PH", "PDCO", "PYPL", "PAYX", "PNR", "PBCT", "POM", "PEP", "PKI", "PRGO", "PFE", "PM", "PSX", "PNW", "PXD", "PBI", "PCL", "PX", "PCP", "PFG", "PLD", "PG", "PGR", "PRU", "PEG", "PSA", "PHM", "QCOM", "QRVO", "PWR", "DGX", "RL", "RRC", "RTN", "O", "RHT", "REGN", "RF", "RSG", "RAI", "RHI", "ROK", "COL", "ROP", "ROST", "RCL", "R", "SCG", "SLG", "CRM", "SNDK", "HSIC", "SLB", "SCHW", "SNI", "STX", "SEE", "SRE", "SHW", "SIAL", "SIG", "SPG", "SWKS", "SJM", "SNA", "SO", "LUV", "SWN", "SE", "STJ", "SWK", "SPLS", "SBUX", "HOT", "STT", "SRCL", "SYK", "STI", "SYMC", "SYY", "TROW", "TEL", "TE", "TGNA", "TJX", "TGT", "THC", "TDC", "TSO", "TXN", "TXT", "ADT", "BK", "KHC", "PCLN", "WMB", "TMO", "TIF", "TWC", "TWX", "TMK", "TSS", "TSCO", "RIG", "TRV", "TRIP", "FOXA", "TYC", "TSN", "USB", "UA", "UNP", "UPS", "URI", "UTX", "UNH", "UHS", "UNM", "URBN", "VFC", "VLO", "VAR", "VTR", "VRSN", "VZ", "VRTX", "VIAB", "V", "VNO", "VMC", "WEC", "WMT", "WBA", "DIS", "WM", "WAT", "WFC", "WRK", "WDC", "WU", "WY", "WHR", "WFM", "WYN", "WYNN", "XL", "XEL", "XRX", "XLNX", "XYL", "YHOO", "YUM", "ZBH", "ZION", "ZTS", "EBAY"];
    },

    buildURL: function(type, id, record) {
        id = Ember.makeArray(id);
        var symbols = id.join(",");
        return "https://api.tradier.com/v1/markets/quotes?symbol=" + symbol;
    },

    ajax: function(url, method, hash) {
        hash = hash || {}; // hash may be undefined
        hash.crossDomain = true; // make it CORS
        hash.xhrFields = {
            // withCredentials: true
        };
        return this._super(url, method, hash);
    },
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer CpZtg9d9kFOM1GbrLmcFAp4GGuOW',
    },

    find: function(store, type, id, record) {
        // customization here or within buildURL
        return this.ajax(this.buildURL('quote', [id]), 'GET');
    },

    findAll: function(store, type, sinceToken) {
        // customization here or within buildURL
        return this.ajax(this.buildURL('quote', this.s_and_p_500_symbols()), 'GET');
    },

    findRecord: function(store, type, id, snapshot) {
        return this.ajax(this.buildURL(type.modelName, [id], snapshot, 'findRecord'), 'GET');
    },

    findQuery: function(store, type, query) {
        // customization here or within buildURL
        return this.ajax(this.buildURL('quote', [query]), 'GET');
    },

    findMany: function(store, type, ids, owner) {
        // customization here or within buildURL
        return this.ajax(this.buildURL('quote', ids), 'GET');
    }
});
