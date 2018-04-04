詳細介紹:
https://medium.com/@mikru168/postman-%E6%B8%AC%E8%A9%A6web-service%E7%9A%84%E5%B7%A5%E5%85%B7-c7726997868a

可以選擇各種不同 HTTP 請求的種類

example. 使用 GET 的方式，發送請求給 Web Service:
            1.打上URL 
            2.Web Service 回傳資料結果
            
可以在 Params 的部分添加參數

SAVE: 可將執行過的請求儲存在 Collection
Status: 回傳的狀態 
time:　時間
在 Body 部分，也可以調整回傳結果的格式 for instance: XML,json,HTML...etc


### 使用 Get 的方式發送請求給 Web Service
Web Service 的 URL => http://127.0.0.1:8090.esblab1/

Web Service 接受的參數傳遞方式 => 接在 URL 後，
例如：http://127.0.0.1:8090/esblab1/Frank

1. 帶入 Web Service 的 URL 和參數
2. Web Service 回傳一個 XML 格式的資料結果

![](https://cdn-images-1.medium.com/max/1600/1*DoCC3Xql5zsd2xwLi4E4pQ.png)

### 使用 Post 的方式並夾帶 JSON 格式的參數發送請求給 Web Service

Web Service 的 URL => http://127.0.0.1:8090/checkWebServiceAuth/

Web Service 接受的參數傳遞方式 => JSON 格式，例如：
```sh
{
  “esb”:  { 
   WS_NAME:”Test”,
   END_MK:”N” } 
}
```

> + 打開 Postman 並點擊 Headers tab，輸入 key = Content-Type、value = application/json
![](https://cdn-images-1.medium.com/max/1600/1*98yX92e9z01GFNqdJOqkMQ.png)

> + 點擊 Body tab，選擇 raw 再選擇 JSON，下方區塊則輸入 Web Service 要求的 JSON 格式後點擊 Send 送出請求
![](https://cdn-images-1.medium.com/max/1600/1*W9T3OsqPaehtBwoxruFlIg.png)

> + 下方結果區塊則回傳該 Web Service 的結果
![](https://cdn-images-1.medium.com/max/1600/1*uGFS1okmSaKmk151DjZ2yg.png)



