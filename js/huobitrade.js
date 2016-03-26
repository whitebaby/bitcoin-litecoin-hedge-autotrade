var Huo_API_KEY = "";
var Huo_SECRET_KEY = "";


//查询账户
function HuoShowProfile() {
    // var timestamp = Date.parse(new Date()).slice(0,10);
    var jstimestamp = Date.parse(new Date());
    var str = jstimestamp.toString();
    var timestamp = str.slice(0, 10);
    var text = "access_key=" + Huo_API_KEY + "&created=" + timestamp + "&method=get_account_info" + "&secret_key=" + Huo_SECRET_KEY;
    console.log(text);
    var sign = hex_md5(text);
    try {
        $.ajax({
            url: 'https://api.huobi.com/apiv3',
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            dataType: 'text',
            data: 'method=get_account_info' + '&access_key=' + Huo_API_KEY + '&created=' + timestamp + '&sign=' + sign,
            async: true,
            success: function(result) {
                console.log("result is " + result);
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}


function HuoBuy(method, coin_type, price, amount) {

    var jstimestamp = Date.parse(new Date());
    var str = jstimestamp.toString();
    var timestamp = str.slice(0, 10);
    var text = "access_key=" + Huo_API_KEY + '&amount=' + amount + "&coin_type=" + coin_type + "&created=" + timestamp + "&method=" + method + '&price=' + price + "&secret_key=" + Huo_SECRET_KEY;
    var sign = hex_md5(text);
    try {
        $.ajax({
            url: 'https://api.huobi.com/apiv3',
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            data: '&method=' + method + '&access_key=' + Huo_API_KEY + "&coin_type=" + coin_type + '&price=' + price + '&amount=' + amount + '&created=' + timestamp + '&sign=' + sign,
            async: true,
            dataType: 'text',
            success: function(result) {
                console.log("result is " + result);

            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

function HuoSell(method, coin_type, price, amount) {

    var jstimestamp = Date.parse(new Date());
    var str = jstimestamp.toString();
    var timestamp = str.slice(0, 10);
    var text = "access_key=" + Huo_API_KEY + '&amount=' + amount + "&coin_type=" + coin_type + "&created=" + timestamp + "&method=" + method + '&price=' + price + "&secret_key=" + Huo_SECRET_KEY;
    // access_key=xxx&amount=10&coin_type=1&created=1386844119&method=buy&price=5000&secret_key=xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx
    var sign = hex_md5(text);
    try {
        $.ajax({
            url: 'https://api.huobi.com/apiv3',
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            data: '&method=' + method + '&access_key=' + Huo_API_KEY + "&coin_type=" + coin_type + '&price=' + price + '&amount=' + amount + '&created=' + timestamp + '&sign=' + sign,
            async: true,
            dataType: 'text',
            success: function(result) {
                console.log("result is " + result);

            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}
//method请求的方法 sell;coin_type  必填  币种 1 比特币 2 莱特币;
function HuoTrade(method, coin_type, price, amount) {

    var jstimestamp = Date.parse(new Date());
    var str = jstimestamp.toString();
    var timestamp = str.slice(0, 10);
    var text = "access_key=" + Huo_API_KEY + '&amount=' + amount + "&coin_type=" + coin_type + "&created=" + timestamp + "&method=" + method + '&price=' + price + "&secret_key=" + Huo_SECRET_KEY;
    // access_key=xxx&amount=10&coin_type=1&created=1386844119&method=buy&price=5000&secret_key=xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx
    var sign = hex_md5(text);
    try {
        $.ajax({
            url: 'https://api.huobi.com/apiv3',
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            data: '&method=' + method + '&access_key=' + Huo_API_KEY + "&coin_type=" + coin_type + '&price=' + price + '&amount=' + amount + '&created=' + timestamp + '&sign=' + sign,
            async: true,
            dataType: 'json',
            success: function(result) {
                // console.log("result is " + result.id);
                dbInsert(result.id, "huobi", method, price, amount, coin_type);
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

//查询用户订单信息order_info,method是order_info
function Huo_Order_info(method, coin_type, id) {
    var jstimestamp = Date.parse(new Date());
    var str = jstimestamp.toString();
    var timestamp = str.slice(0, 10);
    var text = "access_key=" + Huo_API_KEY + "&coin_type=" + coin_type + "&created=" + timestamp + "&id=" + id + "&method=" + method + "&secret_key=" + Huo_SECRET_KEY;
    // console.log(text);
    var sign = hex_md5(text);
    var returnResult2;
    try {
        $.ajax({
            url: 'https://api.huobi.com/apiv3',
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            data: 'method=' + method + '&access_key=' + Huo_API_KEY + '&coin_type=' + coin_type + '&id=' + id + '&created=' + timestamp + '&sign=' + sign,
            async: false,
            dataType: 'json',
            success: function(result) {
                returnResult2 = result;
                // console.log("result is " + result);
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
        // console.log(returnResult2);
        return returnResult2;
    } catch (e) {
        console.log(e);
    }

}
//获取所有订单
function Huo_Get_orders(method, coin_type) {

    var jstimestamp = Date.parse(new Date());
    var str = jstimestamp.toString();
    var timestamp = str.slice(0, 10);
    var text = "access_key=" + Huo_API_KEY + "&coin_type=" + coin_type + "&created=" + timestamp + "&method=" + method + "&secret_key=" + Huo_SECRET_KEY;
    // access_key=xxx&amount=10&coin_type=1&created=1386844119&method=buy&price=5000&secret_key=xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx
    var sign = hex_md5(text);
    try {
        $.ajax({
            url: 'https://api.huobi.com/apiv3',
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            data: 'method=' + method + '&access_key=' + Huo_API_KEY + '&coin_type=' + coin_type + '&created=' + timestamp + '&sign=' + sign,
            async: true,
            dataType: 'text',
            success: function(result) {
                console.log("result is " + result);

            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}