import React, { useState } from 'react'
import { View } from 'react-native'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'

const Page = () => {
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 150 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Link href="/(modals)/login">Login</Link>
      <Link href="/(modals)/booking">Booking</Link>
      <Link href="/listing/123">Listing Detail</Link>
      {/* ListingsMap */}
      {/* ListingsBottomSheet */}
    </View>
  )
}

export default Page;
