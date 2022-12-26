---
title: Source Installation
description: Install and run homepage from source
layout: ../../../../layouts/MainLayout.astro
---

  1. Create a folder, call it whatever you wish
  2. Install, and run ASS https://github.com/tycrek/ass#installation (This will create an `ass` folder) 
  3. Go back into the folder you created and clone this repo `git clone https://github.com/Facinorous-420/dick`
  4. Go into the newly created `dick` folder `cd dick`
  5. Go into `/src` and copy `constants.ts.example` to `constants.ts` and edit it as needed
  6. Go back to the root of `dick` and install the dependancies for the frontend, `npm i`
  7. Run `npm run build:dev` to compile the code base in watch mode
  8. In a new terminal, run `npm run serve:dev` to run DICK using nodemon
