var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'hw', 'text': '', 'tags': '', 'url': 'hw.html'}, {'title': 'w4-5', 'text': '• 老師要我們先在  http://exam.cycu.org/  上創建一個考試帳號。 \n •\xa0老師要求我們先在Replit上建立一個專案，然後將其與GitHub.com連結。接著，使用Replit將GitHub上的專案 更新，並將更新後的內容推送到靜態網頁。 \n •\xa0建立個人的資料庫，並在其中製作一個靜態網頁。 \n', 'tags': '', 'url': 'w4-5.html'}, {'title': 'w6-7', 'text': '•\xa0 利用上次存在隨身碟的網路設定繼續建立完成 \n •\xa0進行九人一組安排固定座位, 由組長建立 cad2023_bg1 ~ cad2023_bg6, 並將 mdecycu 設為協同者. \n •\xa0   學員展示用 IPv6 位址: 2b 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cadb::班級名單序號 \n', 'tags': '', 'url': 'w6-7.html'}, {'title': 'w12', 'text': '2b_w12_seat.txt \n Windows 網路查詢指令: ipconfig /all \n DNS 伺服器查詢指令: nslookup \n 查詢至特定主機的路徑指令: tracert \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '如何用 ChatGPT 協助座位排序的問題並且回覆問題 \n 輸入問題一:\xa0 請利用 Python 讀取下列檔案名稱為 2b_w12_seat.txt "2b stud num seat 41123201 41123202 (3,8) 41123203 (3,7) 41123204 (6,8) ~~~ 中間資料沒有列出來 41136124 (3,2) 41136126 41136131 " \n ChatGPT回覆一:\xa0 如果中間的資料沒有列出來，這可能是因為在逐行讀取時，只處理了特定格式的行，而未處理其他格式。 這個版本的程式碼會嘗試處理每一行，只要該行至少包含兩個資料項目（學號和座位號），就會將它們加入字典中。這樣，就可以處理包含座位號的行以及其他格式的行。以下的程式碼會嘗試更靈活地處理各種格式的行： \n \n \n 輸入問題二:\xa0假如前面程式中的座位號第一個 index 代表"列"而第二個 index 代表行, 請延續上個程式, 由左到右作為每一列的順序, 而且希望陣列排序是列出該位置上的學員學號。 \n ChatGPT回覆二:\xa0如果你希望根據座位號的列和行來排序學號，可以稍微修改程式碼以處理這一需求。這個修改版的程式碼會將座位號的列和行轉換為整數，然後根據列和行的順序進行排序。最後，列印排序後的學號和座位號。以下是修改後的程式碼： \n \n \n 輸入問題三:\xa0假如 "2b_w12_seat.txt" 可以從 "https://mde.tw/cadnote/downloads/2b_w12_seat.txt" 這個網址讀取, 而且希望將上一個 Python 程式改用 Brython 編寫, 要如何修改? \n ChatGPT回覆三:\xa0Brython（Browser Python）是一個允許在瀏覽器中運行 Python 代碼的工具。要將之前的 Python 程式改用 Brython 編寫，首先確保你的瀏覽器支援 Brython。這個 HTML 文件包含了 Brython 的引入，並使用 \xa0 <script type="text/python"> \xa0 塊嵌入了 Python 代碼。注意，由於使用 fetch 從網路中獲取檔案，因此需要考慮可能的跨域問題。在實際應用中，你可能需要處理跨域問題，例如使用CORS（跨來源資源共享）。此外，請確保在運行 Brython 之前已經載入了所需的 Brython 腳本。在這個例子中，我使用了 jsdelivr CDN 上的 Brython 腳本。為了避免這些問題，我們可以使用 JavaScript 來在瀏覽器中讀取檔案，然後將檔案內容傳遞給 Brython。然後可以使用以下的範例程式碼： \n (因為我們不使用 ChatGPT 混用 Javascript 與 Brython 的建立, 所以此地不列出其回覆的原始碼) \n \n 輸入問題四:\xa0假如我們已經知道 Brython 可以利用 open(https://mde.tw/cadnote/downloads/2b_w12_seat.txt).read() 或 open(https://mde.tw/cadnote/downloads/2b_w12_seat.txt).readlines() 讀取到檔案, 可以將上一個程式全部改用 Brython 完成嗎?\xa0 \n ChatGPT回覆四:\xa0當使用 Brython 時，由於 JavaScript 的 \xa0 Array.sort() \xa0 方法是就地排序，而 Python 的 \xa0 sorted() \xa0 函數是返回一個新的已排序的列表，為了實現相同的排序行為，我們可以使用 Python 的 \xa0 sorted() \xa0 函數並將結果轉換為 JavaScript 的陣列。 這個程式碼使用 \xa0 sorted() \xa0 函數進行排序，然後透過 \xa0 map() \xa0 方法將結果轉換為 JavaScript 的陣列。最後，使用 JavaScript 的迴圈來列印排序後的結果。 \n \n 但因為以上修改後的程式碼行不通，完整程式碼 \xa0 w13_chatgpt_brython.py \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '專案一, 讓鋼球直接在兩個三角形斜面上進行永動模擬 \n 1.繪製草圖 \n \n 2.擠出軌道 \n \n 3.繪製斜面草圖 \n \n 4.切割斜面 \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '1.W15 起將每週進行 exam.cycu.org 線上考試. \n 2.操作考試: \n 支撐塊 \n \n \n \n \n \n \n 軌道 \n \n \n \n \n \n \n \n \n \n \n \n \n \n 組合圖 \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'Onshape', 'text': '關於Onshape\xa0 Solidworks創辦人於2012年創建Onshape產品，並於2019年10月23日由PTC以4.7億美元收購，這是PTC第一個SaaS產品，也是全球第一個全雲端的3D整合型軟體 ，更為分散式團隊提供適合的3D CAD系統軟體。 /downloads/錄製_2023_11_08_22_59_14_601.mp4 \n 底座 桿件 大U桿件 \n 碗公 \n \n 組合圖 \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': '課程總結', 'text': '自評:60 \n A: 是否按照進度明確標示倉儲的改版歷程:是 \n B: 是否根據 IPv4 與 IPv6 網路環境設定進行作法討論:是( 連結 ) \n C: 是否就 Replit、s.cycu.org 與 localhost 情境下對個人與分組倉儲進行設定操作:目前只有一部份 \n D: 是否就所分配的 CAD 套件從安裝設定到繪圖提供內容參考:尚未上傳 \n E: 是否使用所分配的 CAD 套件完成專案一零組件繪圖, 並提供零組件下載:是( Onshape ) \n F: 是否將自行繪製的專案一零組件轉入 CoppeliaSim:尚未上傳網站 \n G: 是否利用 ZMQ Remote API Python 對專案一轉入的零組件設定感測器, 並進行鋼球永動模擬:尚未模擬 \n H: 是否實際操作 Triangle 軌道系統的鋼球永動模擬:尚未模擬 \n I: 是否完成 W15 的平面雙 U 迴路上的鋼球永動系統繪圖、轉檔與系統模擬:繪圖完成,尚未模擬 \n J: 是否使用所分配的 CAD 套件完成專案二 1D 平台零組件繪圖, 並提供零組件下載:進行中 \n K: 是否利用 ZMQ Remote API Python 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬:否 \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 PID 控制理論進行資料收集與 ChatGPT 對答:否 \n 課程心得:\xa0在這堂課中，我學到了許多有關繪圖軟體的新知識，包括一些我之前沒聽過的程式。儘管畫圖的步驟相似，但每種程式都有其獨特之處，需要額外熟悉。剩餘的時間裡，我會盡力完成未上傳的部分，特別是需要更多努力的程式模擬。希望能夠順利達成目標。 \n', 'tags': '', 'url': '課程總結.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};