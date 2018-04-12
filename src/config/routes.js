import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const commonProps = {
};
export default routes = {
    Home: {
      screen: HomeScreen, ...commonProps
    },
    Details: {
      screen: DetailsScreen, ...commonProps
    },   
  };

