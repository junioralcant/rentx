import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../components/CarDetails';
import { Scheduling } from '../components/Scheduling';
import { SchedulingDatails } from '../components/SchedulingDatails';
import { SchedulingComplete } from '../components/SchedulingComplete';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen
        name="SchedulingDatails"
        component={SchedulingDatails}
      />
      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
      />
    </Navigator>
  );
}
