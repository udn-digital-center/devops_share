const express = require('express')
var mysql = require('mysql');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });




var mysql = require('mysql');//引入資料庫驅動模組
//console.log(mysql)
// 連線資料庫的配置
var connection = mysql.createConnection({
  // 主機名稱，一般是本機
//   host: '172.17.0.1',
  host: 'localhost',
  // 資料庫的埠號，如果不設定，預設是3306
  port: '3306',
  // 建立資料庫時設定使用者名稱
  user: 'root',
  // 建立資料庫時設定的密碼
  password: '123456',
  // 建立的資料庫
  database: 'active_retire'
});
// 與資料庫建立連線
connection.connect();
// 查詢資料庫
connection.query('select * from consumers limit 0,5', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

app.get('/index', function (req, res) {
    // 處理 get 請求，獲取 get 請求引數
    //處理 /:xxx 形式的 get 或 post 請求，獲取請求引數 這裡沒有使用到
    var params = req.query
    //查詢語句
    var sql = 'select * from consumers limit 0,5'
    // var where_value = [params.name, params.age];
    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR]:', err.message);
        }
        res.send(result) //資料庫查詢結果返回到result中,把查詢資料傳送到客戶端
    });

})


// 關閉連線
// connection.end();