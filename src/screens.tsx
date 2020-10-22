import { Navigation } from 'react-native-navigation';

import App from './screens/App';
import Settings from './screens/Settings';

export function registerScreens() {
  Navigation.registerComponent('MainScreen', () => App);
  Navigation.registerComponent('Settings', () => Settings);
}
