import {createStackNavigator} from '@react-navigation/stack';
import HelloWorldApp from '../Screen/index';

const Stack = createStackNavigator();
function MainNavigator() {
    const forFade = ({current}) => ({
      cardStyle: {
        opacity: current.progress,
      },
    });
    const screenConfigurations = [
      {
        name: 'Subscribe',
        component: HelloWorldApp,
        options: {
          headerTitle: "LIST",
        },
      }
    ];
  
    return (
      <Stack.Navigator initialRouteName={screenConfigurations[0].name}>
        {screenConfigurations.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    );
  }
  export default MainNavigator;