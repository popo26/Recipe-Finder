

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
- [X] How is this data processed and displayed? ---> map function
- [X] How can the user interact with your application? ---> Select search type > drill down list of items > individual item recipe.
- [X] How have you structured/broken up your components/code? ---> Server Side Rendering with pages.jsx with client side rendering with components
- [X] What kinds of React hooks have you used (eg. state, context, effect, navigate)?How? ---> useState to capture user's search keyword entry. useSearchParams, usePathname, and useRouter to patth the search keyword to backend API fetch in page.jsx.
- [ ] Have you created and used any custom hooks?
- [X] What external tools/libraries have you used (eg. bootstrap/axios/MUI)? How? Why? ---> MUI(for beautiful display and icons), dotenv(to avoid exposing access key for Web3forms), react-world-flag(to display flags in Area Page)
- [X] How might you extend the features of your application in future? ---> Add pagination, Add filtering functionality in Area, Category, Ingredient pages. 


------
# Recipe Finder 
## Overview

Recipe Finder is an interactive application that allows user to find an inspiration of meal recipe with NextJS (my first NextJS project)

### Features

- Home Page : a random meal is displayed. Also user can search meals by 3 choices - Area, Category, and Menu.
- At Menu page, user can search individual meal by menu name - e.g., curry. Then user can select individual meal.
- At Area and Category pages, user is displayed with list of meals by Area or Category. Then user can select individual meal.
- An individual meal page displays ingredients, meal photo, and cooking instructions.
- Ingredient Page : it dispalys a list of ingredient information.
- About Page: fake biography of author.
- Contact Page: user can send message to the author.
