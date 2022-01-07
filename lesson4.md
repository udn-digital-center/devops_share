# DOCKER用用看(地端) #

## 你將會學到 ##
- 本地端DOCKER使用
- Dockefile 修改，使用

## 可以用在 ##
- 團隊統一開發環境
- 本地端快速搭建實驗環境
- 前端同學，可有完整的後端環境做開發

---

## 準備軟體 ##
- Docker Desktop  [download](https://www.docker.com/get-started) 

## 教學步驟 ##
- 安裝Docker Desktop軟體
- Docker 是用來搭建環境，不是用來產生專案的
- 所以可以完成專案後，在撰寫Dockerfile docker-compose
- Docker簡單語法
    ```
    docker pull mysql 抓取你要的映像檔
    docker images  檢視目前機器上有的映像檔
    docker container ps 檢視目前機器上跑起來的容器
    docker ps 
    ```
    ---把image跑起來---
    ```
    docker run --name mysql5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
    ```
    > 說明:<br>
    - run : docker 建立 container 並且執行的指令
    -  --name : 指定容器為 mysql5.7
    -  -p 3306:3306 : 將容器的 3306 端口映射到主機的 3306 端口。
    -  -e MYSQL_ROOT_PASSWORD=123456 : 初始化 root 用戶的密碼為 123456。
    -  -d mysql:5.7 : 背景執行 MySQL 映像<br>
    ---進入dockers內部---
    ```
    docker exec -it  mysql5.7 bin/bash
    ```  

- 搭建本地端的 express js + vue專案
    > 主要是學用Docker，範例中安裝設定就都從網路上COPY 
    <br>安裝 express [link](https://expressjs.com/zh-tw/starter/installing.html)
    <br>安裝 express mysql [link](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
    <br>簡單弄個 GET的 API從DB取資料 [link](https://iter01.com/50206.html) 
    <br>安裝 vue專案 [link](https://v3.vuejs.org/guide/installation.html#cli)
- 到這裡環境都會搭建，但問題點，
    - 每次開始開發，都還要 node app.js 跑起來，再把，mysql docker跑起來
    - 如果大家的環境都有可能不一樣，版本也不一樣
    - 我搭好的整包，怎樣一次給別人開發

- 答案就是寫Dockerfile
    >先開一個Dockerfile
    ```
    FROM node:14-alpine

    COPY . /workspace
    WORKDIR /workspace
    RUN npm install

    EXPOSE 3000

    CMD node app.js
    ```
   ```
   docker build -t expressjs .
   docker run -p 3000:3000 --name expressjs -d expressjs
   ``` 
- 然後發現無法連線到localhost的mysql
- 解決解決方法是，要找到mysql docker的ip，這樣expressjs才能連線
- 但這樣還是很麻煩，有沒有，隨開即用的方法，這時候就要用docker-compose來整合，可以省去網外的連線問題，全部都包在一包就是網內互聯









