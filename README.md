# Daily Scheduler
> Simple calendar application that allows the user to save events for each hour of the day.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## Screenshots
![Example screenshot](./Assets/demo.gif)

## Technologies
* jQuery
* Moment.js API
* JavaScript
* HTML5
* CSS

## Setup
This application runs in the browser. Nothing needs to be installed except for your default browser.

* Repository can be found here: [GitHub/ramonpbarros]() Make sure to git clone and check out the code!

## Code Examples
Show examples of usage:
`$(".saveBtn").on("click", function () { var descriptionText = $(this).siblings(".description").val(); var parentId = $(this).parent().attr("id"); localStorage.setItem(parentId, descriptionText); });`

## Features
List of features:
* Daily planner sets (on the list) a different color background according to time of the day.
* Activities set on the planner will be saved on local storage.
* Displays the current day, month, and date on the top of the page.

To-do list:
* Add delete button
* Clear localStorage on the next day

## Status
Project is: _in progress_
* Make sure to check the application [here]()

## Inspiration
Project inspired by UCSD Coding Bootcamp, based on firt month of course, ultilizing Moment.js API and applying jQuery skills.

## Contact
Created by [@ramonpbarros](https://github.com/ramonpbarros) - feel free to contact me!