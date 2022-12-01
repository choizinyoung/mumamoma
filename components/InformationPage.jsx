import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.one}>
        <View style={styles.whiteView}/>
        <View style={styles.yellowView}>
          <Image style={styles.container} source={require('../assets/images/Information_01.png')} resizeMode='cover'></Image>
        </View>
        <View style={styles.redView}>
          <Image style={styles.container} source={require('../assets/images/Information_02.png')} resizeMode='cover'></Image>
        </View>
          <View style={styles.yellowView}>
          <Image style={styles.container} source={require('../assets/images/Information_03.png')} resizeMode='cover'></Image>
        </View>
          <View style={styles.redView}>
          <Image style={styles.container} source={require('../assets/images/Information_04.png')} resizeMode='cover'></Image>
        </View>
        </View>
        <View style={styles.two}>
          <View style={styles.greenView} />
          <View style={styles.Title1View}><Text>좋음</Text></View>
          <View style={styles.Title2View}><Text>보통</Text></View>
          <View style={styles.Title3View}><Text>나쁨</Text></View>
          <View style={styles.Title4View}><Text>매우나쁨</Text></View>
        </View>
        <View style={styles.third}>
        <View style={styles.FirstView}><Text>통합지수</Text></View>
        <View style={styles.PurpleView}><Text></Text></View>
        <View style={styles.PurpleView}><Text></Text></View>
        <View style={styles.PurpleView}><Text></Text></View>
        <View style={styles.PurpleView}><Text></Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  one: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  whiteView: {
    height: 72,
    width: 72,
    backgroundColor: 'white',
  },
  redView: {
    height: 72,
    width: 72,
    backgroundColor: 'red',
  },
  yellowView: {
    height: 72,
    width: 72,
    backgroundColor: 'yellow',
  },
  two: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  greenView: {
    height: 32,
    width: 72,
    backgroundColor: 'white',
  },
  Title1View: {
    height: 32,
    width: 72,
    backgroundColor: '#AEEDFF',
  },
  Title2View: {
    height: 32,
    width: 72,
    backgroundColor: '#CDFFAE',
  },
  Title3View: {
    height: 32,
    width: 72,
    backgroundColor: '#FFDFAE',
  },
  Title4View: {
    height: 32,
    width: 72,
    backgroundColor: '#FFAEAE',
  },
  third:{
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  PurpleView:{
    height: 40,
    width: 72,
    backgroundColor: '#CEF4FF',
  },
  FirstView:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
