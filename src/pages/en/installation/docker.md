---
title: Docker Installation
description: Install and run DICK from Docker for production
layout: ../../../layouts/MainLayout.astro
---

DICK currently has a `Dockerfile` and `docker-compose.yml` included in the repo for easy set up in Docker environments. To get started:

  1. Clone this repository:

    git clone https://github.com/Facinorous-420/dick.git

  2. Go into the newly created `dick` folder:
   
    cd dick

  3. Edit the config file to let DICK know how to connect to your ASS instance
   
  4. Edit the `docker-compose.yml` to match your specific needs by changing the port, and volume location where your ass files are on your system
   
  5. Run the docker compose file, this will create a new container and image named `dick`:

    docker-compose up -d  
