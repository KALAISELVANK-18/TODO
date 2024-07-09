/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';



//import App1 from './src/Features/Todo/Screens/Todoscreen';
import App from './App';
import TodoScreen from './src/Features/Todo/Screens/Todoscreen';


AppRegistry.registerComponent(appName, () => App);
