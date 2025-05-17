import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Heart, ShoppingCart } from 'iconsax-react-native';
import { fontType, monochromeColors } from '../theme';
import { products } from '../data';
import { useState } from 'react';

const VerticalItem = () => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardItem}>
      <Image style={styles.cardImage} source={{ uri: item.image }} />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <View style={styles.cardTextWrapper}>
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <Pressable onPress={() => toggleLike(item.id)}>
            <Heart
              color={likedItems[item.id] ? 'red' : monochromeColors.black(0.6)}
              variant={likedItems[item.id] ? 'Bold' : 'Linear'}
              size={20}
            />
          </Pressable>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardPrice}>{item.price}</Text>
          <View style={styles.cardRating}>
            <Text style={styles.cardRatingText}>{item.rating}</Text>
            <Text style={styles.cardSold}>Terjual {item.sold}</Text>
          </View>
        </View>
        <Pressable style={styles.buyButton}>
          <ShoppingCart size={16} color={monochromeColors.white()} />
          <Text style={styles.buyButtonText}>Beli Sekarang</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 24 }}
      contentContainerStyle={{ paddingVertical: 16 }}
    />
  );
};

export default VerticalItem;

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: monochromeColors.white(),
    borderRadius: 12,
    marginBottom: 16,
    width: '48%',
    shadowColor: monochromeColors.black(),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: monochromeColors.grey(0.1),
  },
  cardImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  cardContent: {
    gap: 10,
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTextWrapper: {
    gap: 5,
    width: '70%',
  },
  cardCategory: {
    color: monochromeColors.black(0.7),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
    backgroundColor: monochromeColors.grey(0.1),
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: monochromeColors.black(),
    marginTop: 2,
  },
  cardPrice: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: monochromeColors.black(0.8),
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: monochromeColors.grey(0.08),
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    gap: 5,
  },
  cardRatingText: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: monochromeColors.black(0.7),
  },
  cardSold: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: monochromeColors.grey(0.6),
  },
  buyButton: {
    backgroundColor: monochromeColors.black(0.8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    gap: 6,
  },
  buyButtonText: {
    color: monochromeColors.white(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
});

