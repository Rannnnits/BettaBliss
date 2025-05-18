import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {DirectInbox, Home, SearchNormal} from 'iconsax-react-native';
import {fontType, monochromeColors} from '../../theme';
import { kontesList } from '../../data';

const Profile = () => {
  const photos = [
    {
      id: '1',
      uri: 'https://www.bettasplendid.com/wp-content/uploads/2017/09/Razer-Koi-Betta_8921-1.jpg',
    },
    {
      id: '2',
      uri: 'https://www.bettasplendid.com/wp-content/uploads/2017/09/Razer-Koi-Betta_8911-1.jpg',
    },
    {
      id: '3',
      uri: 'https://aquariumfishindia.com/wp-content/uploads/2023/03/Betta-crowntail-super-red-having-tags-of-Betta_yyth.jpg',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>Rp {item.price}</Text>

        <View style={styles.quantityWrapper}>
          <Text style={styles.quantityText}>Tersedia {item.quantity}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: 'https://blog.photofeeler.com/wp-content/uploads/2017/02/flattering-pose-profile-pics.jpeg',
          }}
          style={styles.headerBackground}
          blurRadius={2}
        />
        <Text style={styles.headerTitle}>My Profile</Text>
        <SearchNormal style={styles.searchIcon} size={20} color={monochromeColors.white()} />
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: 'https://blog.photofeeler.com/wp-content/uploads/2017/02/flattering-pose-profile-pics.jpeg',
            }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>518.3 K</Text>
          <Text style={styles.statsLabel}>Followers</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>54.2 K</Text>
          <Text style={styles.statsLabel}>Following</Text>
        </View>
      </View>

      {/* Info */}
      <View style={styles.infoSection}>
        <Text style={styles.name}>Albert Ross</Text>
        <Text style={styles.role}>Cupang Kontes</Text>
      </View>
      <View style={styles.sosialContainer}>
        <View style={styles.socialRow}>
          <DirectInbox size={28} color="#555" />
          <Text style={styles.email}>realalbertross@hotmail.com</Text>
        </View>
        <View
          style={[
            styles.socialRow,
            {
              borderBottomWidth: 1,
              borderColor: monochromeColors.grey(0.3),
            },
          ]}>
          <Home size={28} color="#555" />
          <Text style={styles.email}>6,894 Produk Terjual</Text>
        </View>
      </View>

      {/* Photos */}
      <View style={styles.mediaSection}>
        <Text style={styles.sectionTitle}>Photos</Text>
        <FlatList
          horizontal
          data={photos}
          renderItem={({item}) => (
            <Image source={{uri: item.uri}} style={styles.mediaImage} />
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Videos */}
      <View style={styles.mediaSection}>
        <Text style={styles.sectionTitle}>Product</Text>
        <FlatList
          data={kontesList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 220,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBackground: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerTitle: {
    position: 'absolute',
    top: 40,
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  searchIcon: {
    position: 'absolute',
    top: 45,
    right: 14,
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  avatarWrapper: {
    position: 'absolute',
    bottom: -70,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 100,
    overflow: 'hidden',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 40,
  },
  statsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -60,
  },
  statsBox: {
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsLabel: {
    fontSize: 14,
    color: 'gray',
  },
  infoSection: {
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  sosialContainer: {
    margin: 20,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: monochromeColors.grey(0.3),
  },
  email: {
    fontFamily: fontType['Pjs-Bold'],
    marginLeft: 5,
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
  mediaSection: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mediaImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 10,
  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  videoTitle: {
    marginLeft: 8,
    fontSize: 15,
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: monochromeColors.grey(0.1),
    padding: 12,
    borderRadius: 12,
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
  },
  itemPrice: {
    fontFamily: fontType['Pjs-Medium'],
    color: 'gray',
    marginTop: 4,
  },
  itemQuantity: {
    fontFamily: fontType['Pjs-Medium'],
    marginTop: 2,
    color: monochromeColors.black(),
  },
});
