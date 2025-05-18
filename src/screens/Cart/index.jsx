import React, {useState} from 'react';
import {View, Text, FlatList, Image, Pressable, StyleSheet} from 'react-native';
import {Add, Minus, ShoppingCart, Trash} from 'iconsax-react-native';
import {fontType, monochromeColors} from '../../theme';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Crown Tail Red Dragon',
      price: 'Rp 295.000',
      image:
        'https://aquariumfishindia.com/wp-content/uploads/2023/03/Betta-crowntail-super-red-having-tags-of-Betta_yyth.jpg',
      quantity: 1,
    },
    {
      id: '2',
      title: 'Halfmoon Blue Galaxy',
      price: 'Rp 350.000',
      image:
        'https://www.bettasplendid.com/wp-content/uploads/2017/09/Razer-Koi-Betta_8921-1.jpg',
      quantity: 2,
    },
  ]);

  const updateQuantity = (id, type) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity =
            type === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity < 1 ? 1 : newQuantity,
          };
        }
        return item;
      }),
    );
  };

  const removeItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>Rp {item.price.toLocaleString()}</Text>

        <View style={styles.quantityWrapper}>
          <Pressable
            onPress={() => updateQuantity(item.id, 'decrease')}
            style={styles.qtyButton}>
            <Minus size={16} color={monochromeColors.white()} />
          </Pressable>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <Pressable
            onPress={() => updateQuantity(item.id, 'increase')}
            style={styles.qtyButton}>
            <Add size={16} color={monochromeColors.white()} />
          </Pressable>
        </View>
      </View>
      <Pressable
        onPress={() => removeItem(item.id)}
        style={styles.removeButton}>
        <Trash size={20} color="red" />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Keranjang Belanja</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 16}}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>
          Total: Rp {getTotalPrice().toLocaleString()}
        </Text>
        <Pressable style={styles.checkoutButton}>
          <ShoppingCart size={20} color="white" />
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: monochromeColors.white(),
    paddingTop: 32,
  },
  header: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
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
  removeButton: {
    padding: 6,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: monochromeColors.grey(0.3),
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 18,
  },
  checkoutButton: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    gap: 6,
  },
  checkoutText: {
    fontFamily: fontType['Pjs-Medium'],
    color: 'white',
    fontSize: 16,
  },
  quantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 10,
  },
  qtyButton: {
    backgroundColor: monochromeColors.grey(),
    borderRadius: 4,
    padding: 4,
  },
  quantityText: {
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 16,
    minWidth: 24,
    textAlign: 'center',
  },
});
