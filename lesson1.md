# GCP開機器-盤古開天篇 #

## 你將會學到 ##
-  GCP上開一台VM
-  管理公鑰私鑰
-  對外展示靜態網站
-  簡單的linux上，文件處理器的使用( vi nano)
-  一些簡單常用的linux command 

## 可以用在 ##
- 搭設前端測試實驗環境
- 自己部屬簡單的實驗應用
---

## 準備軟體 ##
- putty  [downliad](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) 
- ftp [download](https://filezilla-project.org/)

## 教學步驟 ##
- 進入GCP管理介面，Compute Engine(VM)
- 開啟機器設定
- 從面板中的，SSH功能進入，確認版本
    ```
    uname -a
    ```
- 檢查目前對外的PORT
    ```
    netstat -na

    ```
- 推薦要會的基本指令
   > top |  ls -a |  cd |  df -a
- 關機
- 用PuttyGen產生KEY
- 將KEY放入VM設定中 
- 重啟機器
- 會發現IP會變動
- 固定下IP的方法
    > 虛擬私有雲網路>外部IP位置 中設定
- SSH進入後，更新一下系統
    ```
    update  apt-get update  apt-get upgrade  
    ```  
- 確認透過金鑰 sftp 連線亦可
- 安裝nginx。
    ```
    apt-get install nginx
    ```
- 在一次確認對外的port是否增加了80
    ```
    netstat -na
    ```
- 透過FTP放入檔案
- 安裝nano，並透過終端機增刪修改檔案
    ```
    vi : q w !
    apt-get install nano
    ```    
- 將nginx設定到專案資料夾
    > 關鍵字查nginx 反向代理
      <br>路徑在/etc/nginx
    ```
    location /xxx {
        alias   /home/files/;
        autoindex on;
    }
    ```
- 重啟nginx    
    ```
    sudo service nginx restart
    ```
- 檢視業面，應該已經有專案的畫面
- 關機再開，IP不變



