import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import plants from '../../const/plants';
import {FlatList} from 'react-native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width / 2 - 30;

const HomeScreen = ({navigation}) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCategoryIndex(index)}
            activeOpacity={0.8}>
            <Text
              style={[
                styles.categoryText,
                categoryIndex === index && styles.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({plant}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', plant)}>
        <View style={styles.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="heart"
                size={18}
                color={plant.like ? COLORS.red : COLORS.dark}
              />
            </View>
          </View>
          <View style={{height: 100, alignItems: 'center'}}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={plant.img}
            />
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {plant.name}
          </Text>
          <View style={{justifyContent: 'flex-end', flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                $ {plant.price}
              </Text>
              <View
                style={{
                  height: 28,
                  width: 25,
                  backgroundColor: COLORS.green,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  }}>
                  +
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, fontWeight: 'bold', color: COLORS.green}}>
            Plant Shop
          </Text>
        </View>
        <Icon name="shopping-cart" size={24} />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="ellipsis-v" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
        numColumns={2}
        data={plants}
        renderItem={({item}) => <Card plant={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    backgroundColor: COLORS.light,
    height: 50,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 245,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});
export default HomeScreen;
