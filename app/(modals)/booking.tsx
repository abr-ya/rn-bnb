import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { BlurView } from 'expo-blur'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

const Booking = () => {
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);

  const router = useRouter();

  const onClearAll = () => {
    console.log('clearAllHandler');
    setSelectedPlace(0);
    setOpenCard(0);
  }

  const onSearch = () => {
    console.log('Search');
    router.back();
  }

  const closeCardRender = (num: number, text: string, data: string) => (
    // todo: Animated
    <TouchableOpacity
      onPress={() => setOpenCard(num)}
      style={styles.cardPreview}
    >
      <Text style={styles.previewText}>{text}</Text>
      <Text style={styles.previewdData}>{data}</Text>
    </TouchableOpacity>
  );

  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      {/*  Where */}
      <View style={styles.card}>
        {openCard != 0 && closeCardRender(0, "Where", "I'm flexible")}

        {openCard == 0 && <Text style={styles.cardHeader}>Where to?</Text>}
        {openCard == 0 && (
          // todo: Animated
          <View style={styles.cardBody}>
            <View style={styles.searchSection}>
              <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000" />
              <TextInput
                style={styles.inputField}
                placeholder="Search destinations"
                placeholderTextColor={Colors.grey}
              />
            </View>

            <Text>todo: Детали поиска</Text>
          </View>
        )}
      </View>

      {/* Card2 */}
      <View style={styles.card}>
        {openCard != 1 && closeCardRender(1, "When", "Any week")}
 
        {openCard == 1 && <Text style={styles.cardHeader}>When's your trip?</Text>}
        {openCard == 1 && <View style={styles.cardBody}><Text>todo: Выбор дат</Text></View>}
      </View>

      {/* Card2 */}
      <View style={styles.card}>
        {openCard != 2 && closeCardRender(2, "Who", "Add guests")}
 
        {openCard == 2 && <Text style={styles.cardHeader}>Who's coming?</Text>}
        {openCard == 2 && <View style={styles.cardBody}><Text>todo: Детали гостей</Text></View>}
      </View>

      {/* Footer */}
      {/* todo: Animated */}
      <View style={defaultStyles.footer}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ height: '100%', justifyContent: 'center' }}
            onPress={onClearAll}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'mon-sb',
                textDecorationLine: 'underline',
              }}>
              Clear all
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
            onPress={onSearch}>
            <Ionicons
              name="search-outline"
              size={24}
              style={defaultStyles.btnIcon}
              color={'#fff'}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  cardHeader: {
    fontFamily: 'mon-b',
    fontSize: 20,
    padding: 16,
    paddingBottom: 0,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  searchSection: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    marginBottom: 16,
  },
  searchIcon: {
    padding: 10,
  },
  inputField: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  placesContainer: {
    flexDirection: 'row',
    gap: 25,
  },
  place: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  placeSelected: {
    borderColor: Colors.grey,
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  previewText: {
    fontFamily: 'mon-sb',
    fontSize: 14,
    color: Colors.grey,
  },
  previewdData: {
    fontFamily: 'mon-sb',
    fontSize: 14,
    color: Colors.dark,
  },
});

export default Booking;
