/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'mainStack',
        children: [
          {
            component: {
              name: 'MainScreen',
            },
          },
        ],
      },
    },
  });
});
