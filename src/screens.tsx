import { Navigation } from 'react-native-navigation';

import App from './screens/App';
import Settings from './screens/Settings';

export function registerScreens() {
  Navigation.registerComponent('App', () => App);
  Navigation.registerComponent('Settings', () => Settings);
}
