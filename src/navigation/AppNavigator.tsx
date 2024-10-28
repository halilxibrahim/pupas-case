import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreditCardScreen from '../screens/CreditCardScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreditCard"
        component={CreditCardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}