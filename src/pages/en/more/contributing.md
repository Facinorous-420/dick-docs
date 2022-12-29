---
title: Contributing
description: How to contribute
layout: ../../../layouts/MainLayout.astro
---

## General Contributing Guidelines

Sometimes the easiest way to get your ideas added are to add them yourself. I am always happy to accept PRs for adding features, bug fixes, or code clean up. Let's just work together to keep this project organized!

<sub> If using VSCode, I'd recommend using this extension: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github</sub>

To get started, to break down the process of forking to creating the PR, there are 5 basic steps as detailed below:

1. Fork the Project
2. Create your Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## PR Types

There are 3 types of PRs that you can make, `Feature`, `Bug Fix`, and `Clean Up`.

When creating the PR, please use this format: `<F/B/C> {title}`<br/>
An example title for a feature PR would be `<F> Deletion of users from Admin dashboard`

Please include a detailed description of what this PR is doing, and why it is doing what it is doing.<br/>
   - If it's a `bug fix`, please explain what the issue was (point to an issue is enough) and what was done to fix it.<br/>
   - If it's a `feature`, please explain what you added, and why a user may want this feature. Optionally, to help push your feature in faster, include a PR to edit this documentation to document your new feature and link to it in the feature PR.<br/>
   - If it's `code clean up`, please explain why you are doing the clean up such as why you are deleting a feature.

## Running The Development Setup

Running the project for development purposes is super easy.

  1. Clone this repository:

    git clone https://github.com/Facinorous-420/dick.git

  2. Go into the newly created `dick` folder:
   
    cd dick

  3. Edit the .env file to your needs:

    cp .env.example .env
    nano .env
   
  4. Lastly we can start DICK in development mode:

    npm start:dev

  Runs the app in the development mode.\
Open [http://127.0.0.1:3000](http://127.0.0.1:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project Structure

The way I structure my components is my own version of the **Atomic Design Pattern**, developed by Brad Frost and Dave Olsen. Below are the concepts for how I structure my projects:

My five distinct levels of atomic design — atoms > molecules > organisms > pages > layouts  — these map incredibly well to React’s component-based architecture.

Lets start at the lowest level comoponent,

#### Atoms
These are basic building blocks of design, such as a button, input or a form label. They’re not useful on their own.

#### Molecules
Grouping atoms together, such as combining a button, input and form label to build functionality.

#### Organisms
Combining molecules together to form organisms that make up a distinct section of an interface. For example this would be the navigation bar, file manager, profile info and all the other various sections in the apps.

#### Pages
These are our pages, these are our main pages people will browse to using our routes. Things such as /register would be the `RegisterPage`,
/ would be the `UserDashboard`. Pages hold the layout for the organisms within the route the user is browsing.

#### Layouts
Page layouts. These are things pages are wrapped in for specific routes. 
For example, the user dashboard AND admin dashboard have the same navigation, breadcrumbs, title bar, etc so they share the same layout.
The login and register screen would also share their own layouts. If there are new layouts needed for a page, we will create them here, then
wrap the page in it.