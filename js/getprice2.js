var elementOkBtcBuyPrice = document.getElementById("OkBtcBuyPrice");
var elementOkBtcBuyDepth = document.getElementById("OkBtcBuyDepth");
var elementOkBtcSellPrice = document.getElementById("OkBtcSellPrice");
var elementOkBtcSellDepth = document.getElementById("OkBtcSellDepth");
var elementOkLtcBuyPrice = document.getElementById("OkLtcBuyPrice");
var elementOkLtcBuyDepth = document.getElementById("OkLtcBuyDepth");
var elementOkLtcSellPrice = document.getElementById("OkLtcSellPrice");
var elementOkLtcSellDepth = document.getElementById("OkLtcSellDepth");
var elementHuoBtcBuyPrice = document.getElementById("HuoBtcBuyPrice");
var elementHuoBtcBuyDepth = document.getElementById("HuoBtcBuyDepth");
var elementHuoBtcSellPrice = document.getElementById("HuoBtcSellPrice");
var elementHuoBtcSellDepth = document.getElementById("HuoBtcSellDepth");
var elementHuoLtcBuyPrice = document.getElementById("HuoLtcBuyPrice");
var elementHuoLtcBuyDepth = document.getElementById("HuoLtcBuyDepth");
var elementHuoLtcSellPrice = document.getElementById("HuoLtcSellPrice");
var elementHuoLtcSellDepth = document.getElementById("HuoLtcSellDepth");
var elementBtcTrueGapPrice1 = document.getElementById("BtcTrueGapPrice1");
var elementLtcTrueGapPrice1 = document.getElementById("LtcTrueGapPrice1");
var elementBtcTrueGapPrice2 = document.getElementById("BtcTrueGapPrice2");
var elementLtcTrueGapPrice2 = document.getElementById("LtcTrueGapPrice2");
var BtcReadyAmount1 = document.getElementById("BtcReadyAmount1");
var BtcReadyGapPrice1 = document.getElementById("BtcReadyGapPrice1");
var LtcReadyAmount1 = document.getElementById("LtcReadyAmount1");
var LtcReadyGapPrice1 = document.getElementById("LtcReadyGapPrice1");
var BtcReadyAmount2 = document.getElementById("BtcReadyAmount2");
var BtcReadyGapPrice2 = document.getElementById("BtcReadyGapPrice2");
var LtcReadyAmount2 = document.getElementById("LtcReadyAmount2");
var LtcReadyGapPrice2 = document.getElementById("LtcReadyGapPrice2");
var MinTradeAmount1, MinTradeAmount2, MinTradeAmount3, MinTradeAmount4;
var MaxTradeAmount1, MaxTradeAmount2, MaxTradeAmount3, MaxTradeAmount4
var LtcReadyMinAmount1 = document.getElementById("LtcReadyMinAmount1");
var LtcReadyMinAmount2 = document.getElementById("LtcReadyMinAmount2");
var LtcReadyMaxAmount1 = document.getElementById("LtcReadyMaxAmount1");
var LtcReadyMaxAmount2 = document.getElementById("LtcReadyMaxAmount2");

function GetOkPrice() {
    try {
        $.ajax({
            url: 'https://www.okcoin.cn/api/v1/depth.do?symbol=btc_cny&size=1',
            type: 'GET',
            async: true,
            dataType: 'json',
            success: function(result) {
                var OkBtcBuyPrice = result.bids[0][0];
                var OkBtcBuyDepth = result.bids[0][1];
                var OkBtcSellPrice = result.asks[0][0];
                var OkBtcSellDepth = result.asks[0][1];

                elementOkBtcBuyPrice.innerText = OkBtcBuyPrice;
                elementOkBtcBuyDepth.innerText = OkBtcBuyDepth;
                elementOkBtcSellPrice.innerText = OkBtcSellPrice;
                elementOkBtcSellDepth.innerText = OkBtcSellDepth;
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
    try {
        $.ajax({
            url: 'https://www.okcoin.cn/api/v1/depth.do?symbol=ltc_cny&size=1',
            type: 'GET',
            async: true,
            dataType: 'json',
            success: function(result) {
                var OkLtcBuyPrice = result.bids[0][0];
                var OkLtcBuyDepth = result.bids[0][1];
                var OkLtcSellPrice = result.asks[0][0];
                var OkLtcSellDepth = result.asks[0][1];

                elementOkLtcBuyPrice.innerText = OkLtcBuyPrice;
                elementOkLtcBuyDepth.innerText = OkLtcBuyDepth;
                elementOkLtcSellPrice.innerText = OkLtcSellPrice;
                elementOkLtcSellDepth.innerText = OkLtcSellDepth;
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

function GetHuoPrice() {
    try {
        $.ajax({
            url: 'http://api.huobi.com/staticmarket/depth_btc_1.js',
            type: 'GET',
            async: true,
            dataType: 'json',
            success: function(result) {
                var HuoBtcBuyPrice = result.bids[0][0];
                var HuoBtcBuyDepth = result.bids[0][1];
                var HuoBtcSellPrice = result.asks[0][0];
                var HuoBtcSellDepth = result.asks[0][1];

                elementHuoBtcBuyPrice.innerText = HuoBtcBuyPrice;
                elementHuoBtcBuyDepth.innerText = HuoBtcBuyDepth;
                elementHuoBtcSellPrice.innerText = HuoBtcSellPrice;
                elementHuoBtcSellDepth.innerText = HuoBtcSellDepth;
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
    try {
        $.ajax({
            url: 'http://api.huobi.com/staticmarket/depth_ltc_1.js',
            type: 'GET',
            async: true,
            dataType: 'json',
            success: function(result) {
                var HuoLtcBuyPrice = result.bids[0][0];
                var HuoLtcBuyDepth = result.bids[0][1];
                var HuoLtcSellPrice = result.asks[0][0];
                var HuoLtcSellDepth = result.asks[0][1];

                elementHuoLtcBuyPrice.innerText = HuoLtcBuyPrice;
                elementHuoLtcBuyDepth.innerText = HuoLtcBuyDepth;
                elementHuoLtcSellPrice.innerText = HuoLtcSellPrice;
                elementHuoLtcSellDepth.innerText = HuoLtcSellDepth;
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

function PriceGapCheck() {
    elementBtcTrueGapPrice1.innerText = (elementOkBtcBuyPrice.innerText - elementHuoBtcSellPrice.innerText).toFixed(2);
    elementLtcTrueGapPrice1.innerText = (elementOkLtcBuyPrice.innerText - elementHuoLtcSellPrice.innerText).toFixed(2);
    elementBtcTrueGapPrice2.innerText = -(elementOkBtcSellPrice.innerText - elementHuoBtcBuyPrice.innerText).toFixed(2);
    elementLtcTrueGapPrice2.innerText = -(elementOkLtcSellPrice.innerText - elementHuoLtcBuyPrice.innerText).toFixed(2);
    //库存深度检查,最小深度
    MinTradeAmount1 = Math.min(OkBtcBuyDepth.innerText, HuoBtcSellDepth.innerText);
    MinTradeAmount2 = Math.min(OkLtcBuyDepth.innerText, HuoLtcSellDepth.innerText);
    MinTradeAmount3 = Math.min(OkBtcSellDepth.innerText, HuoBtcBuyDepth.innerText);
    MinTradeAmount4 = Math.min(OkLtcSellDepth.innerText, HuoLtcBuyDepth.innerText);
    //库存深度检查,最大深度，这个参数没有意思
    // MaxTradeAmount1 = Math.max(OkBtcBuyDepth.innerText, HuoBtcSellDepth.innerText);
    // MaxTradeAmount2 = Math.max(OkLtcBuyDepth.innerText, HuoLtcSellDepth.innerText);
    // MaxTradeAmount3 = Math.max(OkBtcSellDepth.innerText, HuoBtcBuyDepth.innerText);
    // MaxTradeAmount4 = Math.max(OkLtcSellDepth.innerText, HuoLtcBuyDepth.innerText);
    // console.log(MaxTradeAmount1);
    // console.log(MinTradeAmount1);

    // elementBtcTrueGapPrice1.innerText = (elementOOkLtcBuyDepthkBtcBuyPrice.innerText - elementHuoBtcSellPrice.innerText).toFixed(2);
    // elementLtcTrueGapPrice1.innerText = (elementOkLtcBuyPrice.innerText - elementHuoLtcSellPrice.innerText).toFixed(2);
    // elementBtcTrueGapPrice2.innerText = -(elementOkBtcSellPrice.innerText - elementHuoBtcBuyPrice.innerText).toFixed(2);
    // elementLtcTrueGapPrice2.innerText = -(elementOkLtcSellPrice.innerText - elementHuoLtcBuyPrice.innerText).toFixed(2);

}



$(document).ready(function() {
    setInterval("ShowText()", 1000);
    // setInterval("SettingSwitch()", 1000);
});

function ShowText() {

    if ($('#checkbox1').is(':checked')) {
        if (BtcTrueGapPrice1.innerText > 1) {
            console.log("buy okbtc,sell huobtc");
        }
    }

    if ($('#checkbox2').is(':checked') && (elementLtcTrueGapPrice1.innerText > LtcReadyGapPrice1.value)) {

        if ((LtcReadyMinAmount1.value <= MinTradeAmount2) && (MinTradeAmount2 <= LtcReadyMaxAmount1.value)) {
            console.log("buy Depth ltc2");
            // dbInsert(id, market, type, price, amount, coin_type);
            dbInsert("id", "sell", elementOkLtcBuyPrice.innerText, MinTradeAmount2, "ltc_cny");
            dbInsert("id", "buy", elementHuoLtcSellPrice.innerText, MinTradeAmount2, 2);
            // setTimeout("console.log('5 seconds!')",5000)
        }
        if (MinTradeAmount2 > LtcReadyMaxAmount1.value) {
            console.log("buy Max")
            dbInsert("id", "sell", elementOkLtcBuyPrice.innerText, LtcReadyMaxAmount1.value, "ltc_cny");
            dbInsert("id", "buy", elementHuoLtcSellPrice.innerText, LtcReadyMaxAmount1.value, 2);
            // setTimeout("console.log('5 seconds!')",5000)
        }
    }

    if ($('#checkbox3').is(':checked') && (elementBtcTrueGapPrice2.innerText > BtcReadyGapPrice2.value)) {
        if ((BtcReadyMinAmount2.value <= MinTradeAmount3) && (MinTradeAmount3 <= BtcReadyMaxAmount2.value)) {
            //买最小深度
            console.log("buy MinTradeAmount3 btc3");
            // setTimeout("console.log('5 seconds!')", 5000);
        }
        if (MinTradeAmount3 > BtcReadyMaxAmount2.value) {
            //买最大设定值
            console.log("buy BtcReadyMaxAmount2 btc3");
            // setTimeout("console.log('5 seconds!')", 5000);
        }
    }
    if ($('#checkbox4').is(':checked') && (elementLtcTrueGapPrice2.innerText > LtcReadyGapPrice2.value)) {
        if ((LtcReadyMinAmount2.value <= MinTradeAmount4) && (MinTradeAmount4 <= LtcReadyMaxAmount2.value)) {
            console.log("buy Depth ltc2");
            // dbInsert(id, market, type, price, amount, coin_type);
            dbInsert("id", "buy", elementOkLtcBuyPrice.innerText, MinTradeAmount4, "ltc_cny");
            dbInsert("id", "sell", elementHuoLtcSellPrice.innerText, MinTradeAmount4, 2);
            // setTimeout("console.log('5 seconds!')",5000)
        }
        if (MinTradeAmount4 > LtcReadyMaxAmount2.value) {
            console.log("buy Max")
            dbInsert("id", "buy", elementOkLtcBuyPrice.innerText, LtcReadyMaxAmount2.value, "ltc_cny");
            dbInsert("id", "sell", elementHuoLtcSellPrice.innerText, LtcReadyMaxAmount2.value, 2);
            // setTimeout("console.log('5 seconds!')",5000)
        }
    }

}