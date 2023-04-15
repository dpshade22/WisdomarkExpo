// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuoteFeed from './src/components/QuoteFeed';
import CommentThreadScreen from './src/screens/CommentThreadScreen';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';

const Stack = createStackNavigator();

// Set the default style for the Text component
const defaultTextProps = Text.defaultProps || {};
Text.defaultProps = {
  ...defaultTextProps,
  style: [{ fontFamily: 'Raleway_400Regular' }, defaultTextProps.style],
};

const App = () => {
  // Load the Raleway font
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });

  // Ensure the font is loaded before rendering the app
  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QuoteFeed" component={QuoteFeed} />
        <Stack.Screen name="CommentThread" component={CommentThreadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
