import {ImageBackground, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {fontType, monochromeColors} from '../theme';
import { Heart, ShoppingCart } from 'iconsax-react-native';
import { Text } from 'react-native-svg';
import { kontesList } from '../data';
import { useState } from 'react';

const HorizontalItem = () => {
  const [likedItems, setLikedItems] = useState({});
  const toggleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{ gap: 16 }}>
      {kontesList.map((item, index) => (
        <View
          key={index}
          style={{
            ...itemHorizontal.cardItem,
            marginLeft: index === 0 ? 24 : 0,
            marginRight: index === kontesList.length - 1 ? 24 : 0,
          }}>
          <ImageBackground
            style={itemHorizontal.cardImage}
            resizeMode="cover"
            imageStyle={{ borderRadius: 16 }}
            source={{ uri: item.image }}>
            <View style={itemHorizontal.cardContent}>
              <View style={itemHorizontal.cardInfo}>
                <Text style={itemHorizontal.cardTitle}>{item.title}</Text>
                <Text style={itemHorizontal.cardPrice}>{item.price}</Text>
                <Pressable style={itemHorizontal.buyButton}>
                  <ShoppingCart size={16} color={monochromeColors.white()} />
                  <Text style={itemHorizontal.buyButtonText}>Beli</Text>
                </Pressable>
              </View>
              <Pressable onPress={() => toggleLike(index)}>
                <View style={itemHorizontal.cardIcon}>
                  <Heart
                    color={likedItems[index] ? 'red' : monochromeColors.white()}
                    variant={likedItems[index] ? 'Bold' : 'Linear'}
                    size={20}
                  />
                </View>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

export default HorizontalItem;

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 8,
    maxWidth: '70%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: monochromeColors.white(),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    zIndex: 100,
  },
  cardPrice: {
    fontSize: 16,
    color: monochromeColors.white(),
    fontFamily: fontType['Pjs-ExtraBold'],
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    zIndex: 100,
  },
  cardIcon: {
    backgroundColor: monochromeColors.black(0.7),
    padding: 8,
    borderColor: monochromeColors.white(),
    borderWidth: 1,
    borderRadius: 8,
  },
  buyButton: {
    backgroundColor: monochromeColors.black(0.7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    gap: 4,
    borderWidth: 1,
    borderColor: monochromeColors.white(0.7),
  },
  buyButtonText: {
    color: monochromeColors.white(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
});
