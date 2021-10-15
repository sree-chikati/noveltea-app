# Noveltea-📖🍵
[Noveltea Webiste](https://noveltea-app.herokuapp.com/)


## Table of Contents
* [About this Project](#about-this-project)
* [Functions to Highlight](#functions-to-highlight)
* [Challanges Faced](#challanges-faced)
* [Deployment](#deployment)
* [Demo](#demo)

## About this Project
Noveltea is created to bring together readers to one place in which they can read their favorite books, join fandoms, and even share their expereince with the community.
<br>
The website requires that users signup/login and stores the autheticated information in a authenticated database. Once signed in, the user is taken to their profile page through which they have the option to also search for books. 
The book search utilizes Google Books API to allow users to perform searches to find their favorite books.
The features to create posts and join fandoms are still a work
in progress, so be on the lookout for those!
 
## Functions to highlight
* Authication with Signup/Login
* Connecting server and client sides
* Implementation of Socket.io
* Utilize Google Books API

## Challanges Faced (Chat Feature)
* Before even creating a chat function, I had to make sure the data is being received on both the server side and client side. I also needed to have a place where this data is being stored and displayed. This was a challange as I was not familiar with how to connect the two. However, I was able to overcome this by learning how the databses worked together.
* After data was sucessfully being sent and received, I worked on creating an authetication system that would link pre-existing user accounts.
In order to create rooms, it is important to add existing users first. To solve this, I utlized MongoDB and Socket.io to connect the user accounts so they are able to chat with one another.
* Finally, one the authetication was working I needed to display the messages being sent by users in specific chat rooms. With a little JavaScript and tying in Socket.io, I was able to showcase messages being sent my users. This is still a work in progress and I hope to improve it's functionalities more.

## Deployment
In a terminal window, navigate to your newly created folder and clone: <br>
<b>Note</b>: Before cloning, check that you are in the ```chat-feature``` branch
```bash
git clone git@github.com:sree-chikati/noveltea-app.git
```

Deploy virtual environment.
```
python3 -m venv env
source env/bin/activate
```

Run the following commands from your virtual environment to install the needed packages
```bash 
pip3 install -r requirements.txt
```

On a development server
```bash 
# run
python3 app.py
```

## Demo
![alt text](preview.gif "Preview Gif")
