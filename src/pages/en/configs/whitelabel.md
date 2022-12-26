---
title: Services
description: Service Configuration
layout: ../../../layouts/MainLayout.astro
---

Inside of your dick root folder, you will see `src/constants.ts.example`. Copy this to `constants.ts`<br/>
Inside this file, is some basic configuration you can change for your set up. There are only 5 variables you need to worry about in this file:

| Variable                                     |           Description           |
| --------------------------------------------- | :---------------------: |
| `ASS_SECURE = false` | Put this to true if you are running ASS behind a domain with HTTPS,. false if HTTP                  |
| `ASSDOMAIN = "127.0.0.1:40115"` | Put this to your ASS domain. Can be an ip, or domain for example `https://cdn.mydomain.com` |
| `ASS_LOCATION = "../ass"` | If running DICK seperately, DICK will use this to find your ASS install folder. Leave this alone if using Docker. |
| `PORT = "3000"` | Change this number to the port you wish DICK to run on. Leave this alone if using Docker. |

> **Note**
> If you want to set a user as admin, currently you must do it via the database file generated at `/src/database/users.json` and change the users role from `user` to `admin`. By default, the first user to login to your dick instance will be admin.
