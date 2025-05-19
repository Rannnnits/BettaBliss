import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  DirectInbox,
  Edit2,
  Home,
  SearchNormal,
  Trash,
} from 'iconsax-react-native';
import {fontType, monochromeColors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Profile = () => {
  const navigation = useNavigation();
  const [kontesList, setKontesList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://682a39cdab2b5004cb3635fa.mockapi.io/api/product',
      );
      setKontesList(response.data);
    } catch (error) {
      console.error('Gagal memuat produk:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Ambil data saat pertama kali komponen muncul
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProducts(); // Panggil ulang saat halaman difokuskan kembali
    });
    getProducts(); // Panggil pertama kali
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async id => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda yakin ingin menghapus produk ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: async () => {
            try {
              await axios.delete(
                `https://682a39cdab2b5004cb3635fa.mockapi.io/api/product/${id}`,
              );
              // Refresh data (bisa dengan getProduk() atau filter manual)
              getProducts(); // pastikan kamu punya fungsi ini
            } catch (error) {
              Alert.alert('Gagal', 'Produk gagal dihapus');
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ProdukDetail', {productId: item.id})}>
      <Image source={{uri: item.image}} style={styles.itemImage} />

      <View style={styles.itemDetails}>
        <View style={styles.actionRow}>
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>
              Rp {Number(item.price).toLocaleString()}
            </Text>
            <Text style={styles.itemQuantity}>Tersedia {item.amount}</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() =>
                navigation.navigate('EditProduk', {productId: item.id})
              }>
              <Edit2 size={20} color="#4CAF50" variant="Bold" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => handleDelete(item.id)}>
              <Trash size={20} color="#F44336" variant="Bold" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: 'https://blog.photofeeler.com/wp-content/uploads/2017/02/flattering-pose-profile-pics.jpeg',
          }}
          style={styles.headerBackground}
          blurRadius={2}
        />
        <Text style={styles.headerTitle}>My Profile</Text>
        <SearchNormal
          style={styles.searchIcon}
          size={20}
          color={monochromeColors.white()}
        />
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: 'https://blog.photofeeler.com/wp-content/uploads/2017/02/flattering-pose-profile-pics.jpeg',
            }}
            style={styles.avatar}
          />
        </View>
      </View>

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

      <View style={styles.mediaSection}>
        <Text style={styles.sectionTitle}>Photos</Text>
        <FlatList
          horizontal
          data={kontesList}
          renderItem={({item}) => (
            <Image source={{uri: item.image}} style={styles.mediaImage} />
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.mediaSection}>
        <View style={styles.productHeader}>
          <Text style={styles.sectionTitle}>Product</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('AddProduk')}>
            <Text style={styles.addButtonText}>Add Product</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={kontesList}
          scrollEnabled={false}
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
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: monochromeColors.grey(),
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
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
  actionRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginRight: 8,
  },
});
