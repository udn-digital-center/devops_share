# DOCKER用用看(地端)第二趴 #

## 你將會學到 ##
- 本地端整合多個docker
- 用docker-compose.yml來整合


## 可以用在 ##
- 前後端開發，都可以免除繁雜環境搭建
- 降低環境複雜度
---

## 準備軟體 ##
- Docker Desktop  [download](https://www.docker.com/get-started) 

## 教學步驟 ##
- 開一個docker-compose.yml
    ```
    version: "3.8"

    networks:
    app-tier:
        driver: bridge

    services:
    expressjs:
        depends_on:
        - mysql
        build:
        context: ./expressjs
        dockerfile: Dockerfile
        ports:
            - 3000:3000
        volumes: 
            - ./expressjs:/var/lib/mysql

    mysql:
            image: mysql:5.6
            ports:
            - 3306:3306
            # volumes: 
            # - ./data:/var/lib/mysql
            environment:
                MYSQL_ROOT_PASSWORD: 123456
            volumes: 
            - ./mysql/sqls:/docker-entrypoint-initdb.d
            deploy:
                resources:
                    limits:
                    cpus: '0.50'
                    memory: 500M
    ```
- 這樣來啟動docker-compose.yml
    ```
    docker-compose up -d
    ```
- 這樣一次啟動多個docker。    








