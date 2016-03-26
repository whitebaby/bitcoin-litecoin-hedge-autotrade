function initDatabase() {
    var db = getCurrentDb(); //初始化数据库
    if (!db) {
        alert("您的浏览器不支持HTML5本地数据库");
        return;
    }
    //创建数据库表
    db.transaction(function(trans) {
        trans.executeSql("create table if not exists btcOrders(id text null,market text null,type text null,orderprice text null,trueprice text null,orderamount text null,trueamount text null,time text null,status text null)", [], function(trans, result) {}, function(trans, message) {});
    });
    db.transaction(function(trans) {
        trans.executeSql("create table if not exists ltcOrders(id text null,market text null,type text null,orderprice text null,trueprice text null,orderamount text null,trueamount text null,time text null,status text null)", [], function(trans, result) {}, function(trans, message) {});
    });
    db.transaction(function(trans) {
        trans.executeSql("create table if not exists tradePairs(id INTEGER PRIMARY KEY,buymarket text null,amount text null,orderprofit text null,trueprofit text null,time text null,status text null)", [], function(trans, result) {}, function(trans, message) {});
    });
}

function getCurrentDb() {
    //打开数据库，或者直接连接数据库参数：数据库名称，版本，概述，大小
    //如果数据库不存在那么创建之
    var db = openDatabase("myDb", "1.0", "ltcOrder", 1024 * 10);;
    return db;
}

//插入数据函数
// okcoin  symbol:btc_cny: 比特币 ltc_cny: 莱特币;     type买卖类型： 限价单（buy/sell） 市价单（buy_market/sell_market）
//huobi  coin_type  必填  币种 1 比特币 2 莱特币;method:请求的方法 sell;
function dbInsert(id, type, price, amount, coin_type) {
    var jstimestamp = Date.parse(new Date());
    var str = jstimestamp.toString();
    var time = str.slice(0, 10);
    var db = getCurrentDb();
    console.log("this is " + coin_type);
    if (coin_type == "ltc_cny") {
        // console.log(coin_type);

        db.transaction(function(trans) {
            trans.executeSql("insert into ltcOrders(id,market,type,orderprice,trueprice,orderamount,trueamount,time,status) values(?,?,?,?,?,?,?,?,?) ", [id, "okcoin", type, price, "trueprice", amount, "trueamount", time, "未完成"], function(ts, data) {}, function(ts, message) {

            });
        });
    }
    if (coin_type == 2) {
        // console.log(coin_type);
        db.transaction(function(trans) {
            trans.executeSql("insert into ltcOrders(id,market,type,orderprice,trueprice,orderamount,trueamount,time,status) values(?,?,?,?,?,?,?,?,?) ", [id, "huobi", type, price, "trueprice", amount, "trueamount", time, "未完成"], function(ts, data) {}, function(ts, message) {
                alert(message);
            });
        });
    }
}

// function dbInsert(id, type, price, amount, coin_type) {

//     // var jstimestamp = Date.parse(new Date());
//     // var str = jstimestamp.toString();
//     // var time = str.slice(0, 10);
//     var myDate = new Date();
//     var time = myDate.toLocaleString();
//     var db = getCurrentDb();
//     console.log("this is " + coin_type);
//     if (coin_type == "ltc_cny") {
//         // console.log(coin_type);

//         db.transaction(function(trans) {
//             trans.executeSql("insert into ltcOrders(id,market,type,orderprice,trueprice,orderamount,trueamount,time,status) values(?,?,?,?,?,?,?,?,?) ", ["id", "okcoin", type, price, "trueprice", amount, "trueamount", time, "未完成"], function(ts, data) {}, function(ts, message) {

//             });
//         });
//     }
//     if (coin_type == 2) {
//         // console.log(coin_type);
//         db.transaction(function(trans) {
//             trans.executeSql("insert into ltcOrders(id,market,type,orderprice,trueprice,orderamount,trueamount,time,status) values(?,?,?,?,?,?,?,?,?) ", ["id", "huobi", type, price, "trueprice", amount, "trueamount", time, "未完成"], function(ts, data) {}, function(ts, message) {
//                 alert(message);
//             });
//         });
//     }
// }

function dbUpdate(id) {
    var jstimestamp = Date.parse(new Date());
    var str = jstimestamp.toString();
    var time = str.slice(0, 10);
    var db = getCurrentDb();
    if (coin_type = "ltc_cny") {
        db.transaction(function(trans) {
            trans.executeSql("UPDATE ltcOrders SET " + "status = ? WHERE Id = ?", ["完成", id], function(ts, data) {}, function(ts, message) {
                console.log(message);
            });
        });
    }
}

function dbSelect() {
    console.log("5s 执行一次dbselect");
    var db = getCurrentDb();
    db.transaction(function(trans) {
        trans.executeSql("select id as id from ltcOrders where market = ? AND status = ?", ["okcoin", "未完成"], function(ts, data) {
            if (data) {
                for (var i = 0; i < data.rows.length; i++) {
                    // console.log(data);
                    statusMoniter(data.rows.item(i), "okcoin"); //获取某行数据的json对象
                }
                // console.log(data.rows.item(1));
            }
        }, function(ts, message) {
            alert(message);
        });
    });
    var db2 = getCurrentDb();
    db2.transaction(function(trans) {
        trans.executeSql("select id as id from ltcOrders where market = ? AND status = ?", ["huobi", "未完成"], function(ts, data) {
            // console.log(data);
            if (data) {
                // console.log(data);
                for (var i = 0; i < data.rows.length; i++) {
                    statusMoniter(data.rows.item(i), "huobi"); //获取某行数据的json对象
                }
                // console.log(data.rows.item(1));
            }
        }, function(ts, message) {
            alert(message);
        });
    });
}

function dbDel() {
    var db = getCurrentDb();
    db.transaction(function(trans) {
        trans.executeSql("drop table Demo", [], function(ts, data) {}, function(ts, message) {
            console.log(message);
        });
    });
    db.transaction(function(trans) {
        trans.executeSql("drop table Demo2", [], function(ts, data) {}, function(ts, message) {
            console.log(message);
        });
    });
    db.transaction(function(trans) {
        trans.executeSql("drop table btcOrders2", [], function(ts, data) {}, function(ts, message) {
            console.log(message);
        });
    });
    db.transaction(function(trans) {
        trans.executeSql("drop table ltcOrders2", [], function(ts, data) {}, function(ts, message) {
            console.log(message);
        });
    });
    db.transaction(function(trans) {
        trans.executeSql("drop table ltcOrders", [], function(ts, data) {}, function(ts, message) {
            console.log(message);
        });
    });
    db.transaction(function(trans) {
        trans.executeSql("drop table btcOrders", [], function(ts, data) {}, function(ts, message) {
            console.log(message);
        });
    });
}

//显示所有数据库中的数据到页面上去
function showAllTheData() {
    $("#tblData").empty();
    var db = getCurrentDb();
    db.transaction(function(trans) {
        trans.executeSql("select * from btcOrders", [], function(ts, data) {
            if (data) {
                for (var i = 0; i < data.rows.length; i++) {
                    appendDataToTable(data.rows.item(i)); //获取某行数据的json对象
                }
            }
        }, function(ts, message) {
            alert(message);
            var tst = message;
        });
    });
}

function appendDataToTable(data) { //将数据展示到表格里面
    //uName,title,words
    var txtId = data.id;
    var txtMarket = data.market;
    var txtType = data.type;
    var txtOrderprice = data.orderprice;
    var txtTrueprice = data.trueprice;
    var txtOrderamount = data.orderamount;
    var txtTrueamount = data.trueamount;
    var strHtml = "<tr><td>id</td><td>市场</td><td>类型</td><td>下单价格</td><td>真实价格</td><td>下单数量</td><td>成交数量</td><td>状态</td></tr>";
    strHtml += "<tr>";
    strHtml += "<td>" + txtId + "</td>";
    strHtml += "<td>" + txtMarket + "</td>";
    strHtml += "<td>" + txtType + "</td>";
    strHtml += "<td>" + txtOrderprice + "</td>";
    strHtml += "<td>" + txtTrueprice + "</td>";
    strHtml += "<td>" + txtOrderamount + "</td>";
    strHtml += "<td>" + txtTrueamount + "</td>";
    strHtml += "</tr>";
    $("#tblData").append(strHtml);
}

function statusMoniter(data, market) {
    console.log("执行statusMoniter");

    if (market == "okcoin") {
        var okResult = Ok_Order_info(parseInt(data.id), "ltc_cny");
        var okJson = okResult['orders'][0];
        if (okJson.status == 0) {
            dbUpdate(data.id);
            console.log("okcoin success");
        }
    }
    if (market == "huobi") {
        var huoResult = Huo_Order_info("order_info", 2, parseInt(data.id));
        if (huoResult.status == 0) {
            dbUpdate(data.id);
            console.log("huobi success");
        }
    }
    // var okResult = Ok_Order_info(parseInt(data.id), "ltc_cny");
    // var okJson = okResult['orders'][0];
    // if (okJson.status == 0) {
    //     dbUpdate(data.id);
    // }
    // //Huo_Order_info(method, coin_type, id)

    // var huoResult = Huo_Order_info("order_info", 2, parseInt(data.id));

    // if (huoResult.status == 0) {
    //     // dbUpdate(data.id);
    //     console.log(huoResult);
    // }
}