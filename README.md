# [Main](https://github.com/wolf790206/crwn-clothing/tree/main)
-   [HTML View](https://wolf790206.github.io/crwn-clothing/dist/)
-   React + Vite
-   firebase

<details>
<summary> ⌲  ### lesson1</summary> 
[lesson1](https://github.com/wolf790206/crwn-clothing/tree/lesson1)
-   create project
-   use ## npm create vite@latest crwn-clothing -- --template react
</details>

<details>
<summary> ⌲ ### lesson2</summary> 
[lesson2](https://github.com/wolf790206/crwn-clothing/tree/lesson2)
-   use map()
-   update App.jsx : build category obj
</details>

<details>
<summary> ⌲ ### lesson3</summary> 
[lesson3](https://github.com/wolf790206/crwn-clothing/tree/lesson3)
-   add package sass 
-   create file to src add category.styles.scss
-   update App.jsx : import styles
</details>

<details>
<summary> ⌲ ### lesson4</summary> 
[lesson4](https://github.com/wolf790206/crwn-clothing/tree/lesson4)
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

<details>
<summary> ⌲ ### lesson5</summary> 
[lesson5](https://github.com/wolf790206/crwn-clothing/tree/lesson5)
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

<details>
<summary> ⌲ ### lesson6</summary> 
[lesson6](https://github.com/wolf790206/crwn-clothing/tree/lesson6)
-   update index.html : add fonts link
-   update index.css to index.scss : add fonts family
-   update main.jsx : change import index.scss
</details>

<details>
<summary> ⌲ ### lesso7</summary> 
[lesson7](https://github.com/wolf790206/crwn-clothing/tree/lesson7)
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

<details>
<summary> ⌲ ### lesso8</summary> 
[lesson8](https://github.com/wolf790206/crwn-clothing/tree/lesson8)
-   update App.jsx : add react-router Outlet
-   update App.jsx : add navigation & shop
-   update App.jsx : update route code
</details>

<details>
<summary> ⌲ ### lesso9</summary> 
[lesson9](https://github.com/wolf790206/crwn-clothing/tree/lesson9)
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

