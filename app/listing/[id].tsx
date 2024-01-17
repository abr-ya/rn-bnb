import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native'

const Listing = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Listing {id}</Text>
    </View>
  )
}

export default Listing