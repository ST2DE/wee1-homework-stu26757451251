#### 一般都會先執行 npm init:
   | 打入 npm init 後|會被要求輸入幾個欄位|
| ------ | ------ |
| package name |你這個project 要叫什麼名字 |
| version | 你決定這個 Project 現在應該是第幾版|
|description|Project 基本介紹|
   |   entry point| 進入點，如果要跑你的 Project 應該要執行哪個檔案|
 |     author| 作者(自己)|
 |     license|你這個 Project 是採用什麼授權的|
  |    test command| 這個不太重要，待會會說明|

##### 基本上結束後，你可以看到這個資料夾底下，新增了一個 Package.json
(也是可以用 npm init -y 她會把預設選項全部空白)
>接著一般就會安裝自己會用到的package:
ex. npm install requests
就會產生: node_module
這個資料夾(requests所需的檔案) ， 同時再 package.json 裡面添加關於 requests 的版本

### Git 基本操作
(git 新手教學
https://hellolynn.hpd.io/2017/01/18/git新手入門教學-part-1/)

在當前目錄下添加檔案
```sh
$ touch hello.txt 
```
Step:
確認是否有安裝 git
```sh
$ git --version 
```

git config: (第一次使用時)
```sh
$ git config --global user.name "alex"
$ git config --global user.email "alex@gmail.com"
$ git config --list   查看 git 設定內容 
```

clone 別人的專案到 local 端
```sh
$ git clone
```
### or 

 創建一個新的Repository 
 (打開任何一個專案資料夾打上git init 會產生一個隱藏的.git資料夾)
 ```sh
$ git init
```
>將檔案提交入Staging Area 
>git add . 把所有更改過的東西都 add 到 Staging area
 ```sh
$ git add 主檔名.副檔名
```

將檔案提交入Repository 
 ```sh
$  git commit -m  '一行解說文字'  
```
 
將已經在Repository的檔案移出Staging Area
 ```sh
$  git reset HEAD 
```

查看目前檔案的狀態
 ```sh
$ git status
```

查看目前所有commit的歷史紀錄
 ```sh
$ git log
```

比較文件或commit間修改的差異
 ```sh
$ git diff 
```

詳細列出該次commit的修改內容
 ```sh
$ git show 
```

暫存用
 ```sh
$ git stash [apply/pop/list]
```

1.merge (初期比較常用)
>若出現衝突，只需要修改一次
    將最新的修改內容和___做比對
    無論前面做了什麼，只做兩個分支之間最新    的記錄的比對

2.rebase
>不管做了什麼，只要做rebase，就會一次又一次做打招呼動作

差異:
    merge: 會有一個切點
    rebase: branch 會直接接在主 branch 之後 
    
![](https://i.imgur.com/xzeZAYS.png)

.gitignore 
     
     用法可參照 : https://zlargon.gitbooks.io/git-tutorial/content/file/ignore.html

### 檔案在git的旅程
![](http://wiki.csie.ncku.edu.tw/git_file_status.PNG)

> * untracked：檔案一開始都在這個狀態。
> * unmodified：經由指令將untracked的檔案加入追蹤，或是，staged狀態的檔案經由commit，會到這個狀態。另外在這狀態的檔案可以藉由指令來取消追蹤。
> * modified：檔案只要有改變就會到這個狀態，無論是在unmodified或是staged狀態。藉由指令可以放棄這些變更，回到之前的狀態。
> * staged：在這個狀態的檔案，通常就是要準備要提交到新的版本中了。在此狀態的檔案一經過更改就會回到modified狀態。

