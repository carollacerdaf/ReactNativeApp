import { createAppContainer, createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';


const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail':{
    screen: PeopleDetailPage
  }
}, {
    defaultNavigationOptions: {
        title: 'Pessoas',
        headerStyle: {
          backgroundColor: '#181818',
          borderBottomWidth: 1,
          borderBottomColor: '#c5c5c5'
        },
        headerTitleStyle: {
          color:'#fff',
          fontSize: 25,
          
          flexGrow: 1,
          textAlign:'center'
        }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
