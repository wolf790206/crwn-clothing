# [Main](https://github.com/wolf790206/crwn-clothing/tree/main)
-   [HTML View](https://wolf790206.github.io/crwn-clothing/dist/)
-   React + Vite
-   firebase

### [lesson1](https://github.com/wolf790206/crwn-clothing/tree/lesson1)
<details>
<summary>點我展開細節</summary>

#### 建立專案

- 建立專案 `npm create vite@latest crwn-clothing -- --template react`
**crwn-clothing 可改為自己專案的名稱**
-  `App.jsx` 
  - 建立基本的HTML格式
---

</details>

### [lesson2](https://github.com/wolf790206/crwn-clothing/tree/lesson2)
<details>
<summary>點我展開細節</summary>

#### 簡化程式

-  `App.jsx` 
  - 建立 `category` 物件
  - 嘗試使用 `map()` 的方式建立HTML
---

#### 補充概念

- [Obj 物件](https://ithelp.ithome.com.tw/articles/10219496)
- [map()](https://ithelp.ithome.com.tw/articles/10215281)
---

</details>

### [lesson3](https://github.com/wolf790206/crwn-clothing/tree/lesson3)
<details>
<summary>點我展開細節</summary>

#### 使用樣式

- 安裝套件 `npm install sass`
- 新增檔案 `category.styles.scss` 在 `src/`
- `category.styles.scss`
  - 建立樣式
- `App.jsx`
  - 匯入 `category.styles.scss`
---

#### 補充概念

- [SCSS](https://ithelp.ithome.com.tw/m/articles/10190746)
---

</details>

### [lesson4](https://github.com/wolf790206/crwn-clothing/tree/lesson4)
<details>
<summary>點我展開細節</summary>

-   update App.jsx : category obj add imageUrl
-   create folder components/category-item
-   create file to components/category-item add category-item.component.jsx
-   create file to components/category-item add category-item.styles.scss
-   update App.jsx : copy .category-container
    -   to category-item.component.jsx
-   update category.styles.scss : copy .category-container
    -   to category-item.styles.scss
-   update category-item.component.jsx : import styles
-   update App.jsx : import CategoryItem

</details>

### [lesson5](https://github.com/wolf790206/crwn-clothing/tree/lesson5)
<details>
<summary>點我展開細節</summary>

-   update vite.config.js : add file link 
-   create file to ./ add jsconfig.json
-   update jsconfig.json : add file link 
-   create folder components/directory
-   create file to components/directory add directory.component.jsx
-   create file to components/directory add directory.styles.scss
-   update App.jsx : copy .categories-container
    -   to directory.component.jsx
-   update category.styles.scss : copy .categories-container
    -   to directory.styles.scss
-   delete category.styles.scss
</details>

### [lesson6](https://github.com/wolf790206/crwn-clothing/tree/lesson6)
<details>
<summary>點我展開細節</summary>

-   update index.html : add fonts link
-   update index.css to index.scss : add fonts family
-   update main.jsx : change import index.scss

</details>

### [lesson7](https://github.com/wolf790206/crwn-clothing/tree/lesson7)
<details>
<summary>點我展開細節</summary> 

-   add package react-router@7
-   update main.jsx : add react-router BrowserRouter
-   create folder routers
-   create folder routers/home
-   create file to routers/home add home.component.jsx
-   update App.jsx : copy all code
    -   to directory.component.jsx
-   update directory.component.jsx : App String change to Home
-   update App.jsx : import Home
-   update App.jsx : add react-router Route & Routes
-   update App.jsx : set Home Route
-   update vite.config.js : add rouers link 
-   update jsconfig.json : add rouers link 

</details>

### [lesson8](https://github.com/wolf790206/crwn-clothing/tree/lesson8)
<details>
<summary>點我展開細節</summary> 

-   update App.jsx : add react-router Outlet
-   update App.jsx : add navigation & shop
-   update App.jsx : update route code

</details>

### [lesson9](https://github.com/wolf790206/crwn-clothing/tree/lesson9)
<details>
<summary>點我展開細節</summary>

-   create folder routers/navigation
-   create file to routers/navigation add navigation.component.jsx
-   update App.jsx : copy Navigation ()=>{}
    -   to navigation.component.jsx
-   update navigation.component.jsx : add react-router Outlet & Link
-   update navigation.component.jsx : add react Fragment
-   update App.jsx : remove react-router Outlet & Navigation ()=>{}
-   update App.jsx : import Navigation.component.jsx
-   update navigation.component.jsx : update home link & shop link

</details>


### [lesson10](https://github.com/wolf790206/crwn-clothing/tree/lesson10)
<details>
<summary>點我展開細節</summary>

-   add package vite-plugin-svgr [how to use](https://medium.com/@lisalisa12332180/%E4%BD%BF%E7%94%A8svgr%E5%9C%A8vite-react-typescript%E5%B0%88%E6%A1%88%E4%B8%AD%E5%BC%95%E5%85%A5svg%E5%9C%96%E6%AA%94-9634c2362dc6)
-   update vite.config.js : add plugins svgr
-   update jsconfig.json : add types vite-plugin-svgr/client
-   create folder assets
-   update assets folder : crown.svg
-   update navigation.component.jsx : import crown.svg
-   create file to routers/navigation add navigation.styles.css
-   update navigation.component.jsx : import navigation.styles.css
-   update navigation.component.jsx : update logo link
-   update index.scss : update a & *
-   update vite.config.js : add assets link 
-   update jsconfig.json : add assets link 

</details>


### [lesson11](https://github.com/wolf790206/crwn-clothing/tree/lesson11)
<details>
<summary>點我展開細節</summary>

#### 安裝與初始化 Firebase

- 安裝套件 `npm install firebase`
- 建立資料夾 `src/routers/sign-in/`
- 新增檔案 `sign-in.component.jsx` 在 `src/routers/sign-in/`
---

#### 加入 Firebase 專案設定

- 建立資料夾 `src/utils/firebase/`
- 新增檔案 `firebase.utils.js` 在 `src/utils/firebase/`
-  `firebase.utils.js` ：
  - 匯入 `initializeApp` 從 `firebase/app`
  - 匯入 `getAuth`, `signInWithRedirect`, `signInWithPopup`, `GoogleAuthProvider` 從 `firebase/auth`
  - 新增 provider 物件，設定自定義參數
  - 建立 `auth` 與 `signInWithGooglePopup` 函式
---

#### 建立 Firebase 帳號

- [Firebase](https://firebase.google.com/)
- 登入 Firebase Console，點選「新增專案」**不需要啟用 Google Analytics**
- 新增應用程式 → 選擇「Web」→ 填寫網頁名稱 **不需要啟用 Hosting**
- 複製 `firebaseConfig` 並貼到 `firebase.utils.js`
---

#### 開啟 Firebase Authentication

- 在 Firebase Console → 選擇左側選單「Authentication」
- 開啟「Google 登入」方式（Enable）
---

#### 專案整合流程

- `App.jsx` 新增 `/sign-in` Route
- `navigation.component.jsx`
  - 加入 Link 至 `/sign-in`
- `sign-in.component.jsx`
  - 匯入 `signInWithGooglePopup` 從 `firebase.utils.js`
  - 建立 `logGoogleUser()` **需要注意async**
  - 加入測試 `console.log()`
---

#### 補充概念

- [什麼是 CRUD？](https://ithelp.ithome.com.tw/articles/10244492)
- CRUD = Create / Read / Update / Delete，是資料處理的基本操作
---

#### 路徑新增
- `vite.config.js` 加入 utils 路徑
- `jsconfig.json` 加入 utils 路徑
---

</details>

