import { View, Text, StyleSheet, ListRenderItem, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const ListingItem: ListRenderItem<any> = ({ item }) => (
  <Link href={`/listing/${item.id}`} asChild>
    <TouchableOpacity>
      <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
        <Animated.Image source={{ uri: item.medium_url }} style={styles.image} />
        <TouchableOpacity style={{ position: 'absolute', right: 30, top: 30 }}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 4 }}>
          <Text style={{ fontSize: 16, fontFamily: 'mon-sb' }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Ionicons name="star" size={16} />
            <Text style={{ fontFamily: 'mon-sb' }}>{item.review_scores_rating / 20}</Text>
          </View>
        </View>

        <Text style={{ fontFamily: 'mon' }}>{item.room_type}</Text>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Text style={{ fontFamily: 'mon-sb' }}>€ {item.price}</Text>
          <Text style={{ fontFamily: 'mon' }}>night</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  </Link>
);

const styles = StyleSheet.create({
  listing: {
    padding: 12,
    gap: 8,
    marginVertical: 4,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
});

export default ListingItem;
