import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../const/colors';

const DetailScreen = ({navigation, route}) => {
  const plant = route.params;
  // console.log(plant);
  const [quantity, setQuantity] = useState(1);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={24} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={plant.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={styles.detailContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={styles.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best Choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 22}}>{plant.name}</Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              $ {plant.price}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 10,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>About</Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
              lineHeight: 22,
              // marginTop: 10,
              // flex: 1,
              // flexWrap: 'wrap',
            }}>
            {plant.about}
          </Text>

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                  disabled={quantity === 0}
                  onPress={() => setQuantity(quantity - 1)}>
                  <View style={styles.borderBtn}>
                    <Text style={styles.borderBtnText}>-</Text>
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginHorizontal: 10,
                  }}>
                  {quantity}
                </Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                  <View style={styles.borderBtn}>
                    <Text style={styles.borderBtnText}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={styles.buyBtn}
                onStartShouldSetResponder={() =>
                  Alert.alert('Thank You For Your Request...')
                }>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Buy
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    marginTop: 30,
    paddingTop: 30,
    borderRadius: 20,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    height: 40,
    width: 80,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: 'center',
  },
  borderBtn: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default DetailScreen;
