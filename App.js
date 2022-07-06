import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";
import { TabBarIOSItem } from 'react-native';
import Feed from './screens/Feed';
import CreateStory from './screens/CreateStory';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screeOption={({route}) => ({
          tabBaricon:({focused, color, size}) => {
            let iconName;
            if( route.name === 'Feed'){
              iconName=focused
              ?'book'
              :'book-outline';
            }else if(route.name === 'CreateStory'){
              iconName=focused
              ?'create'
              :'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }) 
       } 
       tabBarOptions={{
        activeTintColor:'green',
        inactiveTintColor: 'blue',
       }}
      >
        <Tab.Screen name="Índice" component={Feed}/>
        <Tab.Screen name="Crear historia" component={CreateStory}/>
      </Tab.Navigator>
      <DrawerNavigator />
    </NavigationContainer>
  );
}