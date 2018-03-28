NPM 的起手式:

一般都會先執行 NPM init :
      在打入 NPM init 後，會被要求輸入幾個欄位

      package name: 你這個 Project 要叫什麼名字
      version: 你決定這個 Project 現在該是第幾版
      description: Project 基本介紹
      entry point: 進入點，如果要跑你的 Project 應該要執行哪個檔案
      author: 作者(自己)
      license: 你這個 Project 是採用什麼授權的
      test command: 這個不太重要，待會會說明

      基本上結束後，你可以看到這個資料夾底下，新增了一個 Package.json
      (也是可以用 npm init -y 她會把預設選項全部空白)
      
 接著一般就會安裝自己會用到的package: ex. npm install requests
     就會產生: node_module 這個資料夾(requests所需的檔案) ， 同時再 package.json 裡面添加關於 requests 的版本
     
     
     
 Git 基本操作:
   
    $ git --version # 檢查是否有安裝 git

    $ git clone https://github.com/ST2DE/express-starter-XXXXXX.git # 下載 git 專案

    $ cd express-starter-XXXXXX # 進入專案資料夾

    $ npm install # 安裝套件

    $ npm start # 試著執行，但是發生錯誤...

    $ touch hello.txt 可以在當前目錄下添加檔案

    git 新手教學
    https://hellolynn.hpd.io/2017/01/18/git新手入門教學-part-1/
    
    
    Step:

    $ git --version /* 確認是否有安裝 git */
    告訴 git 使用者資訊

    $ git config --global user.name "alex"
    $ git config --global user.email  "alex@gmail.com"

    $ git config --list  /* 查看 git 設定內容 */!


    git clone     

    clone下來別人的專案到local端

    git init  

    創建一個新的Repository   (打開任何一個專案資料夾打上git init)

    add add   主檔名.副檔名     

    將檔案提交入Staging Areagit add   整個資料夾提交入Staging Area

    git commit   -m   '一行解說文字'  

    將檔案提交入Repository git commit   -e   能用編輯器撰寫多行解說文字

    git rm   --cached   檔案名稱 

    將不在Repository的檔案移出Staging Area

    git reset HEAD 

    將已經在Repository的檔案移出Staging Area

    git status

    查看目前檔案的狀態

    git log

    查看目前所有commit的歷史紀錄


    git log 

    列出所有commit的歷史紀錄

    git diff 

    比較文件或commit間修改的差異

    git show 

    詳細列出該次commit的修改內容

    git status 

    列出目前的檔案狀態
 