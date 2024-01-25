import { View, Text, StyleSheet, ListRenderItem, TouchableOpacity, FlatList } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { useEffect, useRef, useState } from 'react';

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

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  // Render one listing row for the FlatList
  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`}>
      Go to {item.id}
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        renderItem={renderRow}
        data={loading ? [] : listings}
        ref={listRef}
        ListHeaderComponent={<Text style={styles.info}>{listings.length} homes</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  info: {
    textAlign: 'center',
    fontFamily: 'mon-sb',
    fontSize: 16,
    marginTop: 4,
  },
});

export default Listings;
