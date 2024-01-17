import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Page = () => {
  return (
    <View>
      <Text>Page</Text>
      <Link href="/(modals)/login">Login</Link>
      <Link href="/(modals)/booking">Booking</Link>
      <Link href="/listing/123">Listing Detail</Link>
    </View>
  )
}

export default Page