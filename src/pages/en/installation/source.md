---
title: Source Installation
description: Install and run DICK from source for production
layout: ../../../layouts/MainLayout.astro
---

DICK can be installed locally through source if you have `Node >=v16.14.0`:

  1. Clone this repository:

    git clone https://github.com/Facinorous-420/dick.git

  2. Go into the newly created `dick` folder:
   
    cd dick

  3. Edit the config file to let DICK know how to connect to your ASS instance
   
  4. Go back to the root of `dick` and install the dependencies for the frontend: 
   
    npm i
   
  5. Lastly we can start DICK:

    npm start

___

To keep your DICK up persistantly, you can use `pm2`:

  1. Install `pm2` using `npm`:

    npm i -g pm2
  
  2. Run it using `pm2`:

    pm2 start app.config.json && pm2 list
  