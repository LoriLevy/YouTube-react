This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Github Commands

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

### Clone a github repository
git clone https://github.com/your_user_name/your_repository_name.git

#### add sass to the project
`yarn add node-sass`<br>or<br>
`npm install node-sass`

#### Install and import 'semantic-ui'
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

## Add enzyme to the project for testing in Jest

`yarn add --dev enzyme enzyme-adapter-react-16 react-test-renderer enzyme-to-json`<br>or<br>
`npm install --dev enzyme enzyme-adapter-react-16 react-test-renderer enzyme-to-json`

Why do we also need the react-test-renderer package? React typically renders your component to the DOM. However, when testing, we just want to render to Javascript objects instead of the DOM because then it is easy to create snapshots.

Install the enzyme-to-json package. Jest and Enzyme are basically two separate libraries, so Jest does not understand Enzyme objects. Add this package so that Enyzme wrappers are compatible with Jest.

## Add the react-router to the project

`yarn add react-router-dom`<br>
or<br>
`npm i react-router-dom`
### Start the app
`npm start`<br> or
`yarn start`
### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
`yarn start`
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However this tool wouldn’t be useful if you couldn’t customize it when you are ready.

## `install Yarn`

For Mac developers, run this from the terminal:

`brew install yarn`
<br>
After you install yarn you can use Yarn to start your app and your tests.<br>
`yarn start`<br>
`yarn test`

## Install Redux
To install Redux for this app, run the command:<br>
`yarn add redux react-redux`<br>or
`npm install --save react-redux` <br> if you are using the Node Package Manager.

## Install redux-thunk
To install Redux for this app, run the command:<br>
`yarn add redux-thunk`<br>or
`npm install --save redux-thunk` <br> if you are using the Node Package Manager.

## Install redux-devtools-extension package from npm

<pre><code>npm install --save-dev redux-devtools-extension
</code></pre>
<p>and to use like so:</p>
<pre><code>
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, <b>composeWithDevTools</b>(
applyMiddleware(...middleware),
));
</code></pre>

## Install reselect for performance optimization
<pre><code>yarn add reselect</pre></code>

## Install moment
[Moment](https://momentjs.com) is a library used to manipulate and display dates and times in JavaScript.

<pre><code>yarn add moment</pre></code><br>
<pre><code>npm install moment --save</pre></code>

### Using Moment
                         
                           Formatting Dates
| Syntax      | Renders     |
| :---        |    :----   |  
| ```moment().format('MMMM Do YYYY, h:mm:ss a'); ```     | September 24th 2019, 9:41:34 pm   |
| ```moment().format('dddd');```  | Tuesday      |
| ```moment().format('[born] YYYY [escaped] YYYY');```  | born 1930 died 1991    |


                          Relative Time
| Syntax      | Renders     |
| :---        |    :----   |  
| ```moment("20111031", "YYYYMMDD").fromNow(); ```     | 8 years ago   |
|```moment().format('[born ] YYYY [- died] YYYY');```  | born 1930  - died 1991    |
| ```moment().startOf('day').fromNow(); ```  | a day ago      |
| ```moment().startOf('hour').fromNow();```  | 2 minutes ago      |


#### calculate difference between dates and round to the nearest day: 

                        Days Ago
| Syntax      | Renders     |
| :---        |    :----   |  
| ```let days = moment.duration(moment(new Date()).diff(moment(props.snippet.publishedAt))); ```|  # of Days as Decimal  |
|```let daysAgo = Math.round(days.asDays()); ``` (used with above) | # of Days Rounded   |
|```let daysAgo = Math.round(moment.duration(moment(new Date()).diff(moment(props.snippet.publishedAt))).asDays());```   | # of Days Rounded  |


##### Two-Step 
```let days = moment.duration(moment(new Date()).diff(moment(props.snippet.publishedAt))); ```
```let daysAgo = Math.round(days.asDays()); ``` 

##### All-in-one
 ```let daysAgo = Math.round(moment.duration(moment(new Date()).diff(moment(props.snippet.publishedAt))).asDays());```


                         Calendar Time
| Syntax      | Renders     |
| :---        |    :----   |  
| ```moment(input, format).format('MMMM/DD/YYYY')``` | 10/01/2019   |
|```.format('MMMM Do YYYY')```     | October 2nd 2019   |
|```.format('L');```  | 01/06/2019    |
|```.format('l');```  | 1/6/2019    |
|```.format('LLLL');```  | Monday, June 9, 2014 9:32 PM    |

see also: [Luxon] (https://moment.github.io/luxon/docs/manual/tour.html)


  ## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Markdown examples for code:
JSON:
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

CSS
CSS:
```
.class-name {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
}
```
