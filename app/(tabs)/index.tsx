import React, { useMemo, useState } from 'react'
import { View } from 'react-native'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import listingsData from '@/assets/data/airbnb-listings.json';

const Page = () => {
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  const listings = useMemo(() => listingsData as any, []);

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* ListingsMap */}
      <Listings listings={listings} category={category} />
    </View>
  )
}

export default Page;
