# GCP開機器-安裝資料庫(MYSQL) #

## 你將會學到 ##
-  在VM中，安裝一套資料庫，本案例已MYSQL為例
-  用GCP的，防火牆功能，對外開PORT
-  用UI 遠端連線進資料庫
-  兩種資料連線方式　SSH TCP

## 可以用在 ##
- 搭設後端實驗環境
- 自己模擬環境測試資料
- 前端要做測試資料建議用fake.js就好
---

## 準備軟體 ##
- HeigiSQL  [download](https://www.heidisql.com/) 

## 教學步驟 ##
- 安裝mysql
    ```
    sudo apt install mysql-server
    ```
- 確認3306 port是否出來了
    ```
    netstat -natl
    ```    
- 嘗試登入mysql
    ```
    sudo mysql -u root -p  預設密碼是空的
    CREATE USER 'user'@'localhost' IDENTIFIED BY 'PASSWORD'; 建立一個用戶，並且給密碼
    GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost'; 把所有的DB都歸戶給這個用戶
    FLUSH PRIVILEGES;  清除CACHE
    show databases; 可以看到所有資料庫列表
    ```   
- 開啟HeidiSQL，SSH方式連線

---
- 用TCP的方式連線
- 關閉VM
- 重啟VM
- 觀察 3306 port是否對外了
    ```
    netstat -nalt
    ``` 
    >雖然已經有3306 PORT，但跑在127.0.0.1(localhost)
- 將對外連線改為 0.0.0.0
    ```
    /etc/my.cnf  修改 127.0.0.1 to  0.0.0.0
    sudo service mysql restart  
    *一訂要重啟* 
    ```    
-   用TCP的方式連線可聯上但，會出現IP被限制，原因是當初設定user帳戶連線來源為localhost,進入user table,改為％
---
-以上操作完成ssh tcp皆可連線






