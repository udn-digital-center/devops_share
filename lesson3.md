# GCP開機器-跑一個後端服務(nodejs為例) #

## 你將會學到 ##
- 確認機器各PORT的
- 22 3306 80 443 
- nginx 反向代理


## 可以用在 ##
- 實驗性質全端環境
---

## 準備軟體 ##
- HeigiSQL  [download](https://www.heidisql.com/) 

## 教學步驟 ##
- 裝express js 按照官網步驟走一次 [link](https://expressjs.com/zh-tw/starter/installing.html)
-檢查一下3000 port是否啟動
    ```
    netstat -natl
    ```  
- IP直接連無法連線
- 終端機
    ```
    curl http://0.0.0.0:3000  有訊息，表示服務有跑起來
    ```      
- 用nginx做反向代理，把3000port 引出來
    ```
    location /XXX {
        proxy_pass http://localhost:3000;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $http_x_forwarded_proto;
    }

    ``` 
- 瀏覽器直接打IP/路徑，會出現相關的訊息
---
- 連線一下MYSQL  [link](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
- 跑一下出現 connected! 證明資料庫有連接








