---
layout: ../../layouts/ProjectLayout.astro
title: 'To-Do App'
pubDate: 2022-12-01
description: "A To-Do App with task completion, sort, and local storage."
author: "Ricardo Chu"
image:
  url: "/assets/cover-todo-app.jpg"
  alt: "To-Do App"
link:
  demo: https://react-todoapp-ts.netlify.app/
  source: https://github.com/kypexfly/todo-app-ts
tags: ["react", "typescript", "tailwind", "zustand"]
---

## React To-Do App
✨ A quick way to organize your tasks. Don't worry, we don't save them. Everything is in your local storage.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![App Screenshot](https://github.com/kypexfly/todo-app-ts/blob/master/public/app_screenshot.png)

## 📋 Description 
To-Do App with React JS, TypeScript and Tailwind CSS. 
* User can create a new task.
* Task can be marked as completed and/or important.
* Task can be edited and deleted.
* Shows the time that has passed since the task was created.
* Completed tasks are displayed to the user as a progress bar.
* Sort by newest or oldest.
* Filter tasks by completion, importance, or active.
* Tasks are saved in local storage.

## 🔩 Tools
* React JS 
* TypeScript
* Tailwind CSS
* Zustand
* Framer Motion
* ESLint + Prettier

## 🧪 Possible improvements

* Show more information such as the date of creation, modification, category or tags.
* Allow user to configure theme (light/dark), font size and family.
* Export and import JSON file as a backup.
* Recover deleted tasks from a Recycle Bin.

## 🪄 Test
* Live demo: [https://react-todoapp-ts.netlify.app/](https://react-todoapp-ts.netlify.app/)
* Or run app locally
```
git clone https://github.com/kypexfly/todo-app-ts.git
cd todo-app-ts
npm install
npm run dev
```