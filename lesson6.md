# DOCKER用用看(雲端) #

## 你將會學到 ##
- 在雲機器上佈署多個應用


## 可以用在 ##
- 雲端端快速搭建實驗環境
---

## 準備軟體 ##
- Docker Desktop  [download](https://www.docker.com/get-started) 

## 教學步驟 ##
- 把開好的compute engine，安裝docker
    ```
    sudo apt-get install docker.io
    ```
- 可以透過GIT或是FTP，將專案下載
    ```
    git clone  https://github.com/udn-digital-center/devops_share.git
    ```
- 啟動docker-compose.yml
    ```
    docker-compose up -d
    docker-compose up --build -d
    ```    
- 修改nginx，反向代理的路徑
----
- 證明一些事情
    - 之前指向的一些網址，都可顯示
    - api資訊可以顯示
    - MYSQL SSH TCP都可以連線，並確定是docker起的mysql    
    
    









