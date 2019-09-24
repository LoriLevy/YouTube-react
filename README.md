This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Create a Github repository

create the app:
`create-react-app youtube-react`<br>
`cd youtube-react`

### Create a Github repository

git init

#### connect your local repo to the repo on Github

git remote add origin git@github.com:<YOUR_REPO_NAME>.git

#### add all files that create-react-app has created to the repository

git add -a
git commit -m "initial commit"
git push -u origin master

now go clean up the boilerplate code, removing the logo

#### add sass to the project

`yarn add node-sass`<br>or<br>
`npm install node-sass`

#### Install and hook up import 'semantic-ui'

`yarn add semantic-ui-react`<br>
`yarn add semantic-ui-css`<br>or<br>
`npm i semantic-ui-react`<br>
`npm i semantic-ui-css`

- in index.js add this:
  `import 'semantic-ui-css/semantic.min.css';`
  Run the app in the development mode.<br>
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page reloads if you make edits.<br>
You will also see any lint errors in the console.

### Start the app

`npm start`<br> or
`yarn start`

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However this tool wouldn’t be useful if you couldn’t customize it when you are ready.
### `install Yarn`

For Mac developers, run this from the terminal:

`brew install yarn`
<br>
After you install yarn you can use Yarn to start your app and your tests.<br>
`yarn start`<br>
`yarn test`

### Installing Redux

To install Redux for this app, run the command:<br>
`yarn add redux react-redux`<br>or
`npm install --save react-redux` <br> if you are using the Node Package Manager.

### Installing Redux-thunk

To install Redux for this app, run the command:<br>
`yarn add redux-thunk`<br>or
`npm install --save redux-thunk` <br> if you are using the Node Package Manager.

### Installing the redux-devtools-extension package from npm

<pre><code>npm install --save-dev redux-devtools-extension
</code></pre>
<p>and to use like so:</p>
<pre><code>
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
applyMiddleware(...middleware),
));
</code></pre>

# Installing Reselect for performance optimization

<pre><code>yarn add reselect
</pre></code>

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
