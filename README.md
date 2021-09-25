# What is this project?

(*This app runs on Heroku's free dyno, so the boot up time can be slow*)

This project was a take home coding challenge: 

**Build a dashboard to display messages from a server that appear every two seconds.** 

The requirements were: 
1. Display the messages
2. Filter messages by `level`
3. Start/stop messages from the server
4. Delete all messages
5. Delete individual messages
6. Edit messages
7. Use pretty colors

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Folder Structure
```
└── src
    ├── App.js
    ├── components
    │   ├── Header
    │   │   ├── Chart.js
    │   │   ├── Chart.module.scss
    │   │   ├── FullMenu.js
    │   │   ├── FullMenu.module.scss
    │   │   ├── Header.js
    │   │   ├── Header.module.scss
    │   │   ├── MiniMenu.js
    │   │   ├── MiniMenu.module.scss
    │   │   ├── PlayPauseIcons.js
    │   │   ├── PlayPauseIcons.module.scss
    │   │   ├── Select.js
    │   │   ├── Select.module.scss
    │   │   └── ToTop.js
    │   ├── Messages
    │   │   ├── EditMessage.js
    │   │   ├── EditMessage.module.scss
    │   │   ├── Message.module.scss
    │   │   ├── MessageButtons.js
    │   │   ├── MessageButtons.module.scss
    │   │   ├── MessageCard.js
    │   │   ├── Messages.js
    │   │   ├── Messages.module.scss
    │   │   └── ViewMessage.js
    │   └── Popups
    │       ├── Dialogue.js
    │       ├── Dialogue.module.scss
    │       ├── ExplainerModal.js
    │       └── Snackbar.js
    ├── context.js
    ├── helpers
    │   ├── helpers.js
    │   ├── useInterval.js
    │   └── useStyles.js
    ├── index.css
    ├── index.js
    ├── setupTests.js
    └── store
        ├── generator.js
        ├── levels.js
        └── reducer.js
```
