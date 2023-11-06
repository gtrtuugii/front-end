# News API App (Front-end)

This is a simple React application that allows you to explore the latest news articles and stay updated with the latest trends.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Example Images](#example-images)

## About

This is a web application built using React that leverages the power of the News API to provide users with the latest news articles. It's a great way to catch up on current events and stay informed.

## Features

- Click on articles to view full details.
- Search for specific news topics using keywords.


## Installation

To get started, follow these steps:
1. <a href="https://newsapi.org/" target="_blank">Obtain a News API Key</a>



2. Clone the repository:

   ```bash
   git clone https://github.com/gtrtuugii/front-end/tree/main/news-app.git
   ```

# Change to the project directory
  ```bash
  cd news-app
  ```
# Install dependencies
  ```npm
  npm install
  ```

3. Make sure to replace line 19 in App.js with your actual API Key
   ```javascript
         const apiKey = 'Enter API Key';
   ```
   And in line 9 in src/components/TrendingArticles.jsx:
   ```javascript
         const apiKey = 'EnterApiKey';
   ```

# Start the development server
  ```npm
  npm start
  ```


## Example Images
![Main page](https://raw.githubusercontent.com/gtrtuugii/front-end/main/news-app/src/assests/img1.png)
![After search input](https://raw.githubusercontent.com/gtrtuugii/front-end/main/news-app/src/assests/img2.png)
![Displaying as a Modal](https://raw.githubusercontent.com/gtrtuugii/front-end/main/news-app/src/assests/img3.png)






