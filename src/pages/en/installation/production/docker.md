---
title: Docker Installation
description: Install and run homepage from Docker
layout: ../../../../layouts/MainLayout.astro
---

  1. Create a folder, call it whatever you wish
  2. Install, and run ASS https://github.com/tycrek/ass#installation (This will create an `ass` folder) 
  3. Go back into the folder you created and clone this repo `git clone https://github.com/Facinorous-420/dick.git`
  4. Go into the newly created `dick` folder `cd dick`
  5. Go into `/src` and copy `constants.ts.example` to `constants.ts` and edit it as needed
  6. Go back to the root of `dick` and edit the `docker-compose.yml` to match your specific needs by changing the port, and voluime location where your ass files are on your system.
  7. Run the docker compose file `docker-compose up -d` this will create a new container named `dick`.
  8. 
