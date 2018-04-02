
=> 開頭要介紹為什麼要用 git 啊！

NPM 的起手式:

=> 建議可以看一下 Markdown 的語法，這樣排版比較清楚

=> 把標題 & 程式碼的部分跟敘述分離

一般都會先執行 NPM init :
      在打入 NPM init 後，會被要求輸入幾個欄位

=> NPM 為什麼要大寫？

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
   
    $ touch hello.txt 可以在當前目錄下添加檔案

    git 新手教學
    https://hellolynn.hpd.io/2017/01/18/git新手入門教學-part-1/
    
    Step:

    $ git --version /* 確認是否有安裝 git */
    告訴 git 使用者資訊

    $ git config --global user.name "alex"
    $ git config --global user.email  "alex@gmail.com"

    $ git config --list  /* 查看 git 設定內容 */!

=> config 設定，應該只有第一次才需要

    git clone     

    clone下來別人的專案到local端

    git init  

    創建一個新的Repository   (打開任何一個專案資料夾打上git init 會產生一個隱藏的.git資料夾)

=> git clone & git init 應該是擇一就好？

    add add   主檔名.副檔名     

    將檔案提交入Staging Areagit add   整個資料夾提交入Staging Area
    
    (git add . 把所有更改過的東西都儲存起來)

    git commit   -m   '一行解說文字'  

    將檔案提交入Repository git commit   -e   能用編輯器撰寫多行解說文字

=> 建議說明一下 untracked/unmodified/modified/staged 的關係

    git rm   --cached   檔案名稱 

    將不在Repository的檔案移出Staging Area

    git reset HEAD 

    將已經在Repository的檔案移出Staging Area

    git status

    查看目前檔案的狀態

    git log

    查看目前所有commit的歷史紀錄

    git diff 

    比較文件或commit間修改的差異

    git show 

    詳細列出該次commit的修改內容

    git stash [apply/pop/list]
    
    暫存用
    
    git checkout (-b) 'abc'
    
    新增新的分支(下 -b 可以新增的同時並且切換)
    (git checkout 也可以取消文件的修改 ex. git checkout read,md )
    
    git merge develop (截一次跟別人之間有衝突的地方)
    不管兩個之間做了什麼只做了最新紀錄的比對
    
    不管你做了什麼 只要做 rebase 的時候 就做一次做一次打招呼的動作問有你有沒有更新
    差異:
    merge: 會有一個切點
    rebase: branch 會直接接在主 branch 之後 
    (網址連接 : https://www.slideshare.net/WillHuangTW/git-merge-rebase)

=> 可以找一張圖說明 merge & rebase 的差別

    .gitignore 
    
    //用法可參照 : https://zlargon.gitbooks.io/git-tutorial/content/file/ignore.html
    
    
    
 
