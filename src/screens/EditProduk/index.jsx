import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {fontType, monochromeColors} from '../../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ArrowLeft} from 'iconsax-react-native';
import axios from 'axios';

const EditProduk = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {productId} = route.params; // Data produk yang dikirim via navigation

  const [form, setForm] = useState({
    title: '',
    price: '',
    quantity: '',
    imageUrl: '',
    category: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://682a39cdab2b5004cb3635fa.mockapi.io/api/product/${productId}`,
        );
        const data = response.data;
        setForm({
          title: data.title || '',
          price: String(data.price || ''),
          quantity: String(data.amount || ''),
          imageUrl: data.image || '',
          category: data.category || '',
        });
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Gagal mengambil data cupang');
      }
    };

    fetchData();
  }, [productId]);

  const handleChange = (field, value) => {
    setForm({...form, [field]: value});
  };

  const handleUpdateProduct = async () => {
    try {
      if (!form.title || !form.price || !form.quantity || !form.imageUrl || !form.category) {
        Alert.alert('Error', 'Mohon lengkapi semua data yang wajib diisi');
        return;
      }

      const payload = {
        title: form.title || '',
        price: Number(form.quantity || ''),
        quantity: Number(form.amount || ''),
        image: form.imageUrl || '',
        category: form.category || '',
      };

      const response = await axios.put(
        `https://682a39cdab2b5004cb3635fa.mockapi.io/api/product/${productId}`,
        payload,
      );

      if (response.status === 200) {
        Alert.alert('Sukses', 'Data stadion berhasil diperbarui');
        navigation.goBack();
      } else {
        Alert.alert('Gagal', 'Terjadi kesalahan saat memperbarui data');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Gagal memperbarui data: ' + error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Edit Produk</Text>
      </View>

      <Text style={styles.label}>Nama Produk</Text>
      <TextInput
        style={styles.input}
        value={form.title}
        onChangeText={text => handleChange('title', text)}
      />
      <Text style={styles.label}>Kategori</Text>
      <TextInput
        style={styles.input}
        value={form.category}
        onChangeText={text => handleChange('category', text)}
      />

      <Text style={styles.label}>Harga</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={form.price}
        onChangeText={text => handleChange('price', text)}
      />

      <Text style={styles.label}>Jumlah</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={form.quantity}
        onChangeText={text => handleChange('quantity', text)}
      />

      <Text style={styles.label}>URL Gambar</Text>
      <TextInput
        style={styles.input}
        value={form.imageUrl}
        onChangeText={text => handleChange('imageUrl', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdateProduct}>
        <Text style={styles.buttonText}>Perbarui Produk</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProduk;

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
