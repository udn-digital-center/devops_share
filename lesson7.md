# 流水線自動化佈署(JENKINS) #

## 你將會學到 ##
- 本地端用DOCKER裝一個JENKINS
- 簡單的更新SERVER上的檔案


## 可以用在 ##
- 自己專案管理，省去繁複的上傳FTP的工作
- 避免手動更新生產環境，測試環境的程式碼
---

## 準備軟體 ##
- 無

## 教學步驟 ##
- 執行jenkins下的docker-compose
    ```
    docker-compose up -d
    ```
- 說明docker-compose文件中的 volumes 
- 第一次安裝jenkins就是一連串的輸入資料點點點，無技術含量
-----
- jenkins，流程規劃(JENKINS本地端更新)
    - 跑docker
    - pipline 架構
    - pipline GIT>>，有重複的檔案會出錯
- jenkins，流程規劃(JENKINS遠端更新)
    - SSH連線進入SERVER
    - GIT下檔案
    - 跑docker

PS 與其學習一堆介面操作，不如直接學pipline語法就好，正途    









