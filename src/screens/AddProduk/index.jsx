import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'iconsax-react-native';
import {
  addDoc,
  collection,
  getFirestore,
} from '@react-native-firebase/firestore';
import notifee from '@notifee/react-native';
import { fontType, monochromeColors } from '../../theme'; // Abaikan jika tidak pakai custom theme

const AddProduk = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const displayNotification = async () => {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'produk_channel',
      name: 'Notifikasi Produk',
    });

    await notifee.displayNotification({
      title: 'Produk Ditambahkan',
      body: `Produk "${title}" berhasil disimpan.`,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  const handleAddProduct = async () => {
    if (!title || !price || !quantity || !imageUrl) {
      Alert.alert('Error', 'Semua kolom wajib diisi!');
      return;
    }

    try {
      const newProduct = {
        title,
        category: category || 'Umum',
        price: Number(price),
        rating: 0,
        sold: 0,
        image: imageUrl,
        amount: Number(quantity),
      };

      const db = getFirestore();
      await addDoc(collection(db, 'products'), newProduct);

      await displayNotification(); // Tampilkan notifikasi

      Alert.alert('Berhasil', 'Produk berhasil ditambahkan!');
      navigation.goBack();

      setTitle('');
      setPrice('');
      setQuantity('');
      setImageUrl('');
      setCategory('');
    } catch (e) {
      Alert.alert('Gagal', `Terjadi kesalahan: ${e.message}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Tambah Produk</Text>
      </View>

      <Text style={styles.label}>Nama Produk</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama produk"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Kategori</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Halfmoon"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Harga</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan harga (contoh: 150000)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Jumlah</Text>
      <TextInput
        style={styles.input}
        placeholder="Jumlah stok"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Text style={styles.label}>URL Gambar</Text>
      <TextInput
        style={styles.input}
        placeholder="https://example.com/image.jpg"
        value={imageUrl}
        onChangeText={setImageUrl}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Simpan Produk</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddProduk;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: monochromeColors.white(),
    flexGrow: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  label: {
    fontSize: 16,
    fontFamily: fontType.medium,
    marginBottom: 8,
    color: monochromeColors.grey(0.8),
  },
  input: {
    borderWidth: 1,
    borderColor: monochromeColors.grey(0.3),
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: fontType.regular,
  },
  button: {
    backgroundColor: monochromeColors.black(),
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: monochromeColors.white(),
    fontSize: 16,
    fontFamily: fontType.bold,
  },
});
