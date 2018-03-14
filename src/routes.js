import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import Organizations from 'pages/organizations';
import Repo from 'pages/repo';

const createNavigator = (isLogged = false) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repo },
        Organizations: { screen: Organizations },
      }),
    },
  }, {
    initialRouteName: isLogged ? 'User' : 'Welcome',
  });

export default createNavigator;
