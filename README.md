# My Website

I built this.

## How to run

1. Open folder inside of vscode
2. Open terminal (CMD + Shift + P and search `terminal`)
3. `npm install` to get all of the packages
4. `npm run develop` to start the development server

## Project folders

The project has many important folders in the src directory. They are as follows:

```bash
src
├── assets       <- Where all svgs live
├── components   <- Where all the UI components live
├── data         <- If you add more pages (such as 'about'), put data in here
├── fonts        <- Fonts
├── images       <- Images for the entire application live here
├── pages        <- Static pages that you define (index, about, ect..)
├── posts        <- Markdown files that describe posts
├── templates    <- The template used to render the markdown files
└── work         <- Data to generate link to posts
```

## FAQ

Everything is clear :) Great

## deploy

1. `npm run build`
2. `cd ../<website-folder-name>`
3. remove all files in website-folder-name exept for CNAME
3. `mv ../valeriiazub.github.io/public/* .`
4. `git add .`
5. `git commit -m "website update"`
6. `git push`