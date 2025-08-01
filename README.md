# [Main](https://github.com/wolf790206/crwn-clothing/tree/main)
-   [HTML View](https://wolf790206.github.io/crwn-clothing/dist/)
-   React + Vite
-   firebase

### [lesson1](https://github.com/wolf790206/crwn-clothing/tree/lesson1)
<details>
<summary>點我展開細節</summary>

-   create project
-   use ## npm create vite@latest crwn-clothing -- --template react

</details>

### [lesson2](https://github.com/wolf790206/crwn-clothing/tree/lesson2)
<details>
<summary>點我展開細節</summary>

-   use map()
-   update App.jsx : build category obj

</details>

### [lesson3](https://github.com/wolf790206/crwn-clothing/tree/lesson3)
<details>
<summary>點我展開細節</summary>

-   add package sass 
-   create file to src add category.styles.scss
-   update App.jsx : import styles

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

