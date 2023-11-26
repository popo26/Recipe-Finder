
## IoD - MiniProject2

### The purpose of the Mini Project is to reinforce skills that have been covered in recent modules. Select a data set and analyse it using the techniques learned in recent modules. Prepare and present a 10-minute presentation in class.
<hr />

#### Rubric:
Explanation of the business context behind the dataset
Quality of presentation - engaging, well structured, not too short or too long
Quality of the notebook - code well documented, runs correctly

#### Rules:
The second mini-project is designed to cover the React concepts learned in modules 6 and 7. The goal is to create an interactive page/s of their choice using React. Ideally the app will include interactive elements such as forms, links and buttons, along with routes, data fetching and various React hooks as needed, as well as external libraries such as bootstrap and MUI.Here are some questions for the students to cover during their presentations:
- [X] What was your requirements gathering and design process?   ---> Please find Planning folder
- [X] Was it useful/successful? ---> Successful with features that I want to add in future.
- [X] Give a high level overview of your application and its features ---> Please refer 'Overview' and 'Features' below.
- [X] Where does its data come from (external/internal APIs)?  ---> [TheMealDB](http://www.themealdb.com), [Web3Forms](https://web3forms.com/)
- [X] How is this data processed and displayed? ---> Retrieve data as json and map function to list result.
- [X] How can the user interact with your application? ---> Select search type > drill down list of items > individual item recipe. Search meal by name.
- [X] How have you structured/broken up your components/code? ---> Server Side Rendering with pages.jsx with client side rendering with components
- [X] What kinds of React hooks have you used (eg. state, context, effect, navigate)?How? ---> useState to capture user's search keyword entry. useSearchParams, usePathname, and useRouter to patth the search keyword to backend API fetch in page.jsx.
- [ ] Have you created and used any custom hooks?
- [X] What external tools/libraries have you used (eg. bootstrap/axios/MUI)? How? Why? ---> MUI(for beautiful display and icons), dotenv(to avoid exposing access key for Web3forms), react-world-flag(to display flags in Area Page)
- [X] How might you extend the features of your application in future? ---> Pagination. Filtering functionality in Area, Category, and Ingredient. pages. Responsiveness to MUI ImageLists. Slug instead of idMeal.


------
# Recipe Finder 

## Technology

Next.js | React.js

## Overview

Recipe Finder is an interactive application that allows an user to give inspiration for meal idea.

### Features

- <strong><em>Home Page("/")</strong></em> : A random meal is displayed. Also user can search meals by 3 choices - Area, Category, and Menu.
- <strong><em>Menu page("/search/menu")</strong></em>: User can search individual meal by menu name - e.g., curry, then select individual meal.
- <strong><em>Area Page("/search/area") and Category Page("/search/category") </strong></em>: User is displayed with list of meals by Area or Category, then select individual meal.
- <strong><em>Individual Meal Page("/search/menu/[:id]")</strong></em>: It displays ingredients, meal photo, and cooking instructions.
- <strong><em>Ingredient Page("/ingredient")</strong></em> : It dispalys a list of ingredient information.
- <strong><em>About Page("/about")</strong></em>: It is a fake biography of the author.
- <strong><em>Contact Page("/contact")</strong></em>: User can send message to the author.
- <strong><em>Page Not Found(404) Page</strong></em>: This displays when non-existent routes are visited.
- <strong><em>Error Page</strong></em>: This displays when an error occurs, e,g, issue retrieving data.
