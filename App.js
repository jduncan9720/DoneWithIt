import React from 'react';
import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen'
import TestStyles from './app/screens/TestStyles'
import Button from './app/components/AppButton'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListItem from './app/components/ListItem'
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'

export default function App() {
  return <Screen>
  <ListItem 
    title="My Title" 
    subTitle="My subTitle"
    ImageComponent={<Icon name="email" />} />
  </Screen>
    
}

