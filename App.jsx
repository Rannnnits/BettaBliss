import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import {SearchNormal} from 'iconsax-react-native';
import {fontType, monochromeColors} from './src/theme';
import {HorizontalItem, VerticalItem} from './src/components';
import {categories, products} from './src/data';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BettaBliss</Text>
      </View>
      <View style={searchBar.container}>
        <TextInput style={searchBar.input} placeholder="Cari ikan cupang..." />
        <Pressable style={searchBar.button}>
          <SearchNormal size={20} color={monochromeColors.white()} />
        </Pressable>
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((name, idx) => {
            const isActive = name === activeCategory;
            return (
              <Pressable key={name} onPress={() => setActiveCategory(name)}>
                <View
                  style={{
                    ...category.item,
                    marginLeft: idx === 0 ? 24 : 0,
                    marginRight: idx === categories.length - 1 ? 24 : 12,
                    backgroundColor: isActive
                      ? monochromeColors.black(0.1)
                      : 'white',
                  }}>
                  <Text
                    style={{
                      ...category.title,
                      color: isActive ? monochromeColors.black() : 'gray',
                    }}>
                    {name}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => <VerticalItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <>
            <View style={featuredBetta.headerContainer}>
              <Text style={featuredBetta.headerTitle}>Ikan Cupang Kontes</Text>
              <Text style={featuredBetta.headerSubtitle}>Lihat Semua</Text>
            </View>
            <HorizontalItem />

            <View style={featuredBetta.headerContainer}>
              <Text style={featuredBetta.headerTitle}>Best Seller</Text>
              <Text style={featuredBetta.headerSubtitle}>Lihat Semua</Text>
            </View>
            <HorizontalItem />

            <View style={featuredBetta.headerContainer}>
              <Text style={featuredBetta.headerTitle}>Koleksi Terbaru</Text>
              <Text style={featuredBetta.headerSubtitle}>Lihat Semua</Text>
            </View>
          </>
        }
      />
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
