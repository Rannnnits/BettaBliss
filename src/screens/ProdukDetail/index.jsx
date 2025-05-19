import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {products} from '../../data';
import {ArrowLeft, ShoppingCart} from 'iconsax-react-native';
import {VerticalItem} from '../../components';
import {FlatList} from 'react-native-gesture-handler';
import {fontType, monochromeColors} from '../../theme';
import axios from 'axios';

const ProdukDetail = ({ route }) => {
  const { productId } = route.params;
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const getProductDetail = async () => {
    try {
      const res = await axios.get(
        `https://682a39cdab2b5004cb3635fa.mockapi.io/api/product/${productId}`
      );
      setSelected(res.data);
    } catch (err) {
      Alert.alert('Gagal', 'Tidak bisa memuat detail produk');
    }
  };

  const getRecommendations = async () => {
    try {
      const res = await axios.get(
        'https://682a39cdab2b5004cb3635fa.mockapi.io/api/product'
      );
      const filtered = res.data.filter(item => item.id !== productId);
      setRecommendations(filtered.slice(0, 5)); // ambil 5 rekomendasi
    } catch (err) {
      console.log('Gagal mengambil rekomendasi:', err.message);
    }
  };

  useEffect(() => {
    getProductDetail();
    getRecommendations();
  }, [productId]);

  if (!selected) {
    return (
      <View style={styles.container}>
        <Text>Memuat...</Text>
      </View>
    );
  }

  return (
    <View contentContainerStyle={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <VerticalItem item={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <ArrowLeft size={26} color={monochromeColors.white()} />
            </TouchableOpacity>

            {/* Product Image */}
            <Image source={{ uri: selected.image }} style={styles.image} />

            {/* Product Info */}
            <View style={styles.infoWrapper}>
              <Text style={styles.title}>{selected.title}</Text>
              <Text style={styles.price}>
                Rp {Number(selected.price).toLocaleString()}
              </Text>
              <Text style={styles.description}>
                {selected.description || 'Tidak ada deskripsi.'}
              </Text>

              <View style={featuredBetta.headerContainer}>
                <Text style={featuredBetta.headerTitle}>
                  Produk Rekomendasi
                </Text>
                <Text style={featuredBetta.headerSubtitle}>Lihat Semua</Text>
              </View>
            </View>
          </>
        }
      />

      <TouchableOpacity
        style={[
          styles.buyButton,
          { backgroundColor: monochromeColors.white(), paddingHorizontal: '10%' },
        ]}
        onPress={() => alert('Fitur beli belum tersedia')}>
        <ShoppingCart size="24" color={monochromeColors.black()} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buyButton, { right: 0, paddingHorizontal: '25%' }]}
        onPress={() => alert('Fitur beli belum tersedia')}>
        <Text style={styles.buyButtonText}>Beli Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 24,
  },
  backButton: {
    backgroundColor: monochromeColors.grey(0.5),
    paddingTop: 16,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: '100%',
    zIndex: 10,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: 320,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  infoWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: fontType['Pjs-Bold'],
    color: monochromeColors.black(0.7),
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#e53935',
    fontFamily: fontType['Pjs-Bold'],
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: monochromeColors.grey(),
    lineHeight: 22,
    marginBottom: 20,
  },
  buttonContainer: {},
  buyButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: monochromeColors.grey(),
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 2,
  },
  buyButtonText: {
    color: monochromeColors.white(),
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
  },
});

const featuredBetta = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default ProdukDetail;
