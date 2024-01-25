import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { defaultStyles } from '@/constants/Styles';
import ListingItem from './ListingItem';

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const listRef = useRef<FlatList>(null);

  // Use for "updating" the views data after category changed
  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false) }, 200);
  }, [category]);

  return (
    <View style={defaultStyles.container}>
      <FlatList
        renderItem={ListingItem}
        data={loading ? [] : listings}
        ref={listRef}
        ListHeaderComponent={<Text style={styles.info}>{listings.length} homes</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    textAlign: 'center',
    fontFamily: 'mon-sb',
    fontSize: 16,
    marginTop: 4,
  },
});

export default Listings;
