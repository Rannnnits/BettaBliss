import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput, Pressable} from 'react-native';
import {Element3, Receipt21, Clock, Message, SearchNormal, Heart, ShoppingCart} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

// Modified colors object to use black and white scheme
const monochromeColors = {
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  grey: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
};
// tes aja

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BettaBliss</Text>
      </View>
      <View style={searchBar.container}>
        <TextInput
            style={searchBar.input}
            placeholder="Cari ikan cupang..."
          />
          <Pressable style={searchBar.button}>
            <SearchNormal size={20} color={monochromeColors.white()} />
          </Pressable>
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24, backgroundColor: monochromeColors.black(0.1)}}>
            <Text style={{...category.title, color: monochromeColors.black()}}>
              Terlaris
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Halfmoon</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Plakat</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Crown Tail</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Giant</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Alien</Text>
          </View>
        </ScrollView>
      </View>
      <ListBetta />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: monochromeColors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'center', // Changed from 'space-between' to 'center'
    alignItems: 'center',
    height: 60,
    elevation: 10,
    paddingTop: 10,
    paddingBottom: 6,
    backgroundColor: monochromeColors.white(),
    borderBottomWidth: 1,
    borderBottomColor: monochromeColors.grey(0.1),
  },
  title: {
    fontSize: 22,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: monochromeColors.black(),
    letterSpacing: 0.5,
    textAlign: 'center', // Added to center the text
  },
  listCategory: {
    paddingVertical: 12,
    backgroundColor: monochromeColors.grey(0.05),
  },
  listBlog: {
    paddingVertical: 12,
    gap: 12,
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: monochromeColors.grey(0.08),
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: monochromeColors.grey(0.15),
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: monochromeColors.grey(0.8),
  },
});

const searchBar = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 12,
    backgroundColor: monochromeColors.white(),
    borderColor: monochromeColors.black(0.3),
    borderRadius: 12,
    borderWidth: 1.5,
    flexDirection: 'row',
    shadowColor: monochromeColors.black(0.5),
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    height: 44,
    padding: 12,
    width: '90%',
    fontFamily: fontType['Pjs-Medium'],
  },
  button: {
    backgroundColor: monochromeColors.black(0.8),
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 44,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});

const ListBetta = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <View style={featuredBetta.headerContainer}>
          <Text style={featuredBetta.headerTitle}>Ikan Cupang Kontes</Text>
          <Text style={featuredBetta.headerSubtitle}>Lihat Semua</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 16}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 16}}
              source={{
                uri: 'https://www.bettasplendid.com/wp-content/uploads/2017/09/Razer-Koi-Betta_8921-1.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Halfmoon Blue Galaxy
                  </Text>
                  <Text style={itemHorizontal.cardPrice}>Rp 350.000</Text>
                  <Pressable style={itemHorizontal.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemHorizontal.buyButtonText}>Beli</Text>
                  </Pressable>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Heart color={monochromeColors.white()} variant="Bold" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 16}}
              source={{
                uri: 'https://www.bettasplendid.com/wp-content/uploads/2017/09/Razer-Koi-Betta_8911-1.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Plakat Fancy Koi
                  </Text>
                  <Text style={itemHorizontal.cardPrice}>Rp 275.000</Text>
                  <Pressable style={itemHorizontal.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemHorizontal.buyButtonText}>Beli</Text>
                  </Pressable>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Heart color={monochromeColors.white()} variant="Bold" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 16}}
              source={{
                uri: 'https://aquariumfishindia.com/wp-content/uploads/2023/03/Betta-crowntail-super-red-having-tags-of-Betta_yyth.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Crown Tail Red Dragon
                  </Text>
                  <Text style={itemHorizontal.cardPrice}>Rp 295.000</Text>
                  <Pressable style={itemHorizontal.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemHorizontal.buyButtonText}>Beli</Text>
                  </Pressable>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Heart color={monochromeColors.white()} variant="Bold" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 16}}
              source={{
                uri: 'https://www.99updates.id/wp-content/uploads/2022/09/cupang-blue-rim-thailand.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Giant Blue Rim
                  </Text>
                  <Text style={itemHorizontal.cardPrice}>Rp 450.000</Text>
                  <Pressable style={itemHorizontal.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemHorizontal.buyButtonText}>Beli</Text>
                  </Pressable>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Heart color={monochromeColors.white()} variant="Bold" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      
        <View style={featuredBetta.headerContainer}>
          <Text style={featuredBetta.headerTitle}>Best Seller</Text>
          <Text style={featuredBetta.headerSubtitle}>Lihat Semua</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 16}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 16}}
              source={{
                uri: 'https://www.99updates.id/wp-content/uploads/2022/09/cupang-blue-rim-thailand.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Avatar Halfmoon
                  </Text>
                  <Text style={itemHorizontal.cardPrice}>Rp 550.000</Text>
                  <Pressable style={itemHorizontal.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemHorizontal.buyButtonText}>Beli</Text>
                  </Pressable>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Heart color={monochromeColors.white()} variant="Bold" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 16}}
              source={{
                uri: 'https://www.99updates.id/wp-content/uploads/2022/09/cupang-blue-rim-thailand.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Nemo Koi Galaxy
                  </Text>
                  <Text style={itemHorizontal.cardPrice}>Rp 480.000</Text>
                  <Pressable style={itemHorizontal.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemHorizontal.buyButtonText}>Beli</Text>
                  </Pressable>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Heart color={monochromeColors.white()} variant="Bold" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 16}}
              source={{
                uri: 'https://www.99updates.id/wp-content/uploads/2022/09/cupang-blue-rim-thailand.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Black Samurai Plakat
                  </Text>
                  <Text style={itemHorizontal.cardPrice}>Rp 425.000</Text>
                  <Pressable style={itemHorizontal.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemHorizontal.buyButtonText}>Beli</Text>
                  </Pressable>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Heart color={monochromeColors.white()} variant="Bold" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 16}}
              source={{
                uri: 'https://www.99updates.id/wp-content/uploads/2022/09/cupang-blue-rim-thailand.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Purple Mustard
                  </Text>
                  <Text style={itemHorizontal.cardPrice}>Rp 390.000</Text>
                  <Pressable style={itemHorizontal.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemHorizontal.buyButtonText}>Beli</Text>
                  </Pressable>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Heart color={monochromeColors.white()} variant="Bold" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        
        <View style={featuredBetta.headerContainer}>
          <Text style={featuredBetta.headerTitle}>Koleksi Terbaru</Text>
          <Text style={featuredBetta.headerSubtitle}>Lihat Semua</Text>
        </View>
        
        <View style={itemVertical.listCard}>
          {/* Modified the vertical list to use two columns */}
          <View style={itemVertical.twoColumnContainer}>
            {/* First column */}
            <View style={itemVertical.column}>
              <View style={itemVertical.cardItemTwo}>
                <Image
                  style={itemVertical.cardImageTwo}
                  source={{
                    uri: 'https://www.nicebettathailand.com/wp-content/uploads/2022/02/Black-Copper-Dragon.jpg',
                  }}
                />
                <View style={itemVertical.cardContentTwo}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={itemVertical.cardCategory}>Halfmoon</Text>
                      <Text style={itemVertical.cardTitle}>
                        Blue Mustard Halfmoon
                      </Text>
                    </View>
                    <Heart
                      color={monochromeColors.black(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={itemVertical.cardInfo}>
                    <Text style={itemVertical.cardPrice}>Rp 225.000</Text>
                    <View style={itemVertical.cardRating}>
                      <Text style={itemVertical.cardRatingText}>4.9</Text>
                      <Text style={itemVertical.cardSold}>Terjual 89</Text>
                    </View>
                  </View>
                  <Pressable style={itemVertical.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemVertical.buyButtonText}>Beli Sekarang</Text>
                  </Pressable>
                </View>
              </View>
              
              <View style={itemVertical.cardItemTwo}>
                <Image
                  style={itemVertical.cardImageTwo}
                  source={{
                    uri: 'https://www.nicebettathailand.com/wp-content/uploads/2022/02/Black-Copper-Dragon.jpg',
                  }}
                />
                <View style={itemVertical.cardContentTwo}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={itemVertical.cardCategory}>Crown Tail</Text>
                      <Text style={itemVertical.cardTitle}>
                        Black Crown Tail
                      </Text>
                    </View>
                    <Heart
                      color={monochromeColors.black(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={itemVertical.cardInfo}>
                    <Text style={itemVertical.cardPrice}>Rp 235.000</Text>
                    <View style={itemVertical.cardRating}>
                      <Text style={itemVertical.cardRatingText}>4.8</Text>
                      <Text style={itemVertical.cardSold}>Terjual 65</Text>
                    </View>
                  </View>
                  <Pressable style={itemVertical.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemVertical.buyButtonText}>Beli Sekarang</Text>
                  </Pressable>
                </View>
              </View>
              
              <View style={itemVertical.cardItemTwo}>
                <Image
                  style={itemVertical.cardImageTwo}
                  source={{
                    uri: 'https://www.nicebettathailand.com/wp-content/uploads/2022/02/Black-Copper-Dragon.jpg',
                  }}
                />
                <View style={itemVertical.cardContentTwo}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={itemVertical.cardCategory}>Giant</Text>
                      <Text style={itemVertical.cardTitle}>
                        Giant Red Albino
                      </Text>
                    </View>
                    <Heart
                      color={monochromeColors.black(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={itemVertical.cardInfo}>
                    <Text style={itemVertical.cardPrice}>Rp 385.000</Text>
                    <View style={itemVertical.cardRating}>
                      <Text style={itemVertical.cardRatingText}>4.6</Text>
                      <Text style={itemVertical.cardSold}>Terjual 42</Text>
                    </View>
                  </View>
                  <Pressable style={itemVertical.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemVertical.buyButtonText}>Beli Sekarang</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            
            {/* Second column */}
            <View style={itemVertical.column}>
              <View style={itemVertical.cardItemTwo}>
                <Image
                  style={itemVertical.cardImageTwo}
                  source={{
                    uri: 'https://www.nicebettathailand.com/wp-content/uploads/2022/02/Black-Copper-Dragon.jpg',
                  }}
                />
                <View style={itemVertical.cardContentTwo}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={itemVertical.cardCategory}>Plakat</Text>
                      <Text style={itemVertical.cardTitle}>
                        Nemo Galaxy Plakat
                      </Text>
                    </View>
                    <Heart
                      color={monochromeColors.black(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={itemVertical.cardInfo}>
                    <Text style={itemVertical.cardPrice}>Rp 180.000</Text>
                    <View style={itemVertical.cardRating}>
                      <Text style={itemVertical.cardRatingText}>4.7</Text>
                      <Text style={itemVertical.cardSold}>Terjual 52</Text>
                    </View>
                  </View>
                  <Pressable style={itemVertical.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemVertical.buyButtonText}>Beli Sekarang</Text>
                  </Pressable>
                </View>
              </View>
              
              <View style={itemVertical.cardItemTwo}>
                <Image
                  style={itemVertical.cardImageTwo}
                  source={{
                    uri: 'https://www.nicebettathailand.com/wp-content/uploads/2022/02/Black-Copper-Dragon.jpg',
                  }}
                />
                <View style={itemVertical.cardContentTwo}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={itemVertical.cardCategory}>Koi</Text>
                      <Text style={itemVertical.cardTitle}>Galaxy Koi Premium</Text>
                    </View>
                    <Heart
                      color={monochromeColors.black(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={itemVertical.cardInfo}>
                    <Text style={itemVertical.cardPrice}>Rp 325.000</Text>
                    <View style={itemVertical.cardRating}>
                      <Text style={itemVertical.cardRatingText}>4.9</Text>
                      <Text style={itemVertical.cardSold}>Terjual 74</Text>
                    </View>
                  </View>
                  <Pressable style={itemVertical.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemVertical.buyButtonText}>Beli Sekarang</Text>
                  </Pressable>
                </View>
              </View>
              
              <View style={itemVertical.cardItemTwo}>
                <Image
                  style={itemVertical.cardImageTwo}
                  source={{
                    uri: 'https://www.nicebettathailand.com/wp-content/uploads/2022/02/Black-Copper-Dragon.jpg',
                  }}
                />
                <View style={itemVertical.cardContentTwo}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{gap: 5, width: '70%'}}>
                      <Text style={itemVertical.cardCategory}>Halfmoon</Text>
                      <Text style={itemVertical.cardTitle}>
                        Copper Gold Halfmoon
                      </Text>
                    </View>
                    <Heart
                      color={monochromeColors.black(0.6)}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                  <View style={itemVertical.cardInfo}>
                    <Text style={itemVertical.cardPrice}>Rp 265.000</Text>
                    <View style={itemVertical.cardRating}>
                      <Text style={itemVertical.cardRatingText}>4.8</Text>
                      <Text style={itemVertical.cardSold}>Terjual 56</Text>
                    </View>
                  </View>
                  <Pressable style={itemVertical.buyButton}>
                    <ShoppingCart size={16} color={monochromeColors.white()} />
                    <Text style={itemVertical.buyButtonText}>Beli Sekarang</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const featuredBetta = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 18,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: fontType['Pjs-Bold'],
    color: monochromeColors.black(),
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    fontFamily: fontType['Pjs-Medium'],
    color: monochromeColors.black(0.7),
    textDecorationLine: 'underline',
  }
});

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 16,
  },
  
  cardItem: {
    backgroundColor: monochromeColors.white(),
    flexDirection: 'row',
    borderRadius: 12,
    shadowColor: monochromeColors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: monochromeColors.grey(0.1),
  },
  // New styles for two column layout
  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
    gap: 16,
  },
  cardItemTwo: {
    backgroundColor: monochromeColors.white(),
    borderRadius: 12,
    shadowColor: monochromeColors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: monochromeColors.grey(0.1),
    marginBottom: 16,
  },
  cardImageTwo: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cardContentTwo: {
    gap: 10,
    padding: 12,
  },
  // Common styles
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
  cardImage: {
    width: 100,
    height: 140,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  cardRating: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    backgroundColor: monochromeColors.grey(0.08),
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
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
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 12,
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
  }
});

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
    textShadowRadius: 10
  },
  cardPrice: {
    fontSize: 16,
    color: monochromeColors.white(),
    fontFamily: fontType['Pjs-ExtraBold'],
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
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
    textShadowRadius: 5
  }
});