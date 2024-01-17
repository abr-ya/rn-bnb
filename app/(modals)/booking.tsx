import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { BlurView } from 'expo-blur'

const Booking = () => {
  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      <Text>Booking Modal</Text>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});

export default Booking;
