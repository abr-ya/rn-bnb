import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => <Ionicons name='search' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='whishlists'
        options={{
          tabBarLabel: 'Whishlists',
          tabBarIcon: ({ color, size }) => <Ionicons name='heart-outline' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='trips'
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name='airbnb' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />,
        }}
      />
  </Tabs>
  )
}

export default Layout;
