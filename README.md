# Noveltea-📖🍵
[![Go Report Card](https://goreportcard.com/badge/github.com/sree-chikati/makeutility-final)](https://goreportcard.com/report/github.com/sree-chikati/noveltea-app/tree/book-scraper)

2.2 Winter Intensive (2022)<br>
[Heroku Live Link (currently works without AWS3 setup)](https://noveltea-app.herokuapp.com/)


 ## Table of Contents
 * [About this Project](#about-this-project)
 * [Functions to Highlight](#functions-to-highlight)
 * [Deployment](#deployment)
 * [Demo](#demo)
 
## About this Project
Noveltea is created to bring together readers to one place in which they can read their favorite books, join fandoms, and even share their expereince with the community.
<br>
The website requires that users signup/login and stores the autheticated information in an SQLite. Once signed in, the user is taken to their profile page through which they have the option to also search for books. 
The book search utilizes Google Books API to allow users to perform searches to find their favorite books.

## Functions to highlight
* Web Scraping with GO and Colly / Created Static Site Generator / Display information on static site


## Deployment
*❗️For <b>Enviornment Keys</b> please message me❗️*
<br><br>
Download
```bash
git clone https://github.com/sree-chikati/noveltea-app/tree/book-scraper
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin master
```
Deploy virtual environment.
```
npm init
```

Run the following commands from your virtual environment to install the needed packages
```bash 
npm install
```

On a development server
```bash 
# run
npm start
```

## Demo
![alt text](book-scraper-demo.gif "Demo Gif")
