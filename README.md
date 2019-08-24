This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Create a Github repository

cd youtube-react
git init

#### connect your local repo to the repo on Github

git remote add origin git@github.com:<YOUR_REPO_NAME>.git

#### add all files that create-react-app has created to the repository

git add -A
git commit -m "initial commit"
git push -u origin master

now go clean up the boilerplate code, removing the logo

#### `npm install node-sass`

#### Install and hook up import 'semantic-ui'

`npm i semantic-ui-react`
`npm i semantic-ui-css`

- in index.js add this:
  `import 'semantic-ui-css/semantic.min.css';`

### Build the nav bar

- Create an assets/images folder under src.
- Get a logo and store it there.
- Create a containers folder under src.
- Create a HeaderNav.js and HeaderNav.scss file in HeaderNav
    <Menu borderless className='top-menu' fixed='top'>
- borderless removes the bars between menu items
- fixed=top make the top menu "sticky"
- build the nav bar
- Add four Menu.Item elements under a Menu.Menu position="right" with four icons.

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
