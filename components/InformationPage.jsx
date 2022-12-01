import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.one}>
          <View style={[styles.whiteView, styles.width]} />
          <View style={[styles.yellowView, styles.width]}>
            <Image
              style={styles.container}
              source={require("../assets/images/Information_01.png")}
              resizeMode="cover"
            ></Image>
          </View>
          <View style={[styles.redView, styles.width]}>
            <Image
              style={styles.container}
              source={require("../assets/images/Information_02.png")}
              resizeMode="cover"
            ></Image>
          </View>
          <View style={[styles.yellowView, styles.width]}>
            <Image
              style={styles.container}
              source={require("../assets/images/Information_03.png")}
              resizeMode="cover"
            ></Image>
          </View>
          <View style={[styles.redView, styles.width]}>
            <Image
              style={styles.container}
              source={require("../assets/images/Information_04.png")}
              resizeMode="cover"
            ></Image>
          </View>
        </View>
        <View style={styles.two}>
          <View style={[styles.greenView, styles.width]} />
          <View style={[styles.Title1View, styles.width]}>
            <Text>좋음</Text>
          </View>
          <View style={[styles.Title2View, styles.width]}>
            <Text>보통</Text>
          </View>
          <View style={[styles.Title3View, styles.width]}>
            <Text>나쁨</Text>
          </View>
          <View style={[styles.Title4View, styles.width]}>
            <Text>매우나쁨</Text>
          </View>
        </View>
        <View style={styles.third}>
          <View style={[styles.FirstView, styles.width1]}>
            <Text>통합지수</Text>
          </View>
          <View style={[styles.GoodView, styles.width1]}>
            <Text>0~50</Text>
          </View>
          <View style={[styles.NomalView, styles.width1]}>
            <Text>51~100</Text>
          </View>
          <View style={[styles.BadView, styles.width1]}>
            <Text>101~150</Text>
          </View>
          <View style={[styles.VeryView, styles.width1]}>
            <Text>150~</Text>
          </View>
        </View>
        <View style={styles.third}>
          <View style={[styles.FirstView, styles.width1]}>
            <Text>미세먼지</Text>
          </View>
          <View style={[styles.GoodView, styles.width1]}>
            <Text>0~30</Text>
          </View>
          <View style={[styles.NomalView, styles.width1]}>
            <Text>51~100</Text>
          </View>
          <View style={[styles.BadView, styles.width1]}>
            <Text>101~150</Text>
          </View>
          <View style={[styles.VeryView, styles.width1]}>
            <Text>150~</Text>
          </View>
        </View>
        <View style={styles.third}>
          <View style={[styles.FirstView, styles.width1]}>
            <Text>초미세먼지</Text>
          </View>
          <View style={[styles.GoodView, styles.width1]}>
            <Text>0~15</Text>
          </View>
          <View style={[styles.NomalView, styles.width1]}>
            <Text>51~100</Text>
          </View>
          <View style={[styles.BadView, styles.width1]}>
            <Text>101~150</Text>
          </View>
          <View style={[styles.VeryView, styles.width1]}>
            <Text>150~</Text>
          </View>
        </View>
        <View style={styles.third}>
          <View style={[styles.FirstView, styles.width1]}>
            <Text>오존</Text>
          </View>
          <View style={[styles.GoodView, styles.width1]}>
            <Text>0~0.03</Text>
          </View>
          <View style={[styles.NomalView, styles.width1]}>
            <Text>51~100</Text>
          </View>
          <View style={[styles.BadView, styles.width1]}>
            <Text>101~150</Text>
          </View>
          <View style={[styles.VeryView, styles.width1]}>
            <Text>150~</Text>
          </View>
        </View>
        <View style={styles.third}>
          <View style={[styles.FirstView, styles.width1]}>
            <Text>이산화질소</Text>
          </View>
          <View style={[styles.GoodView, styles.width1]}>
            <Text>0~0.03</Text>
          </View>
          <View style={[styles.NomalView, styles.width1]}>
            <Text>51~100</Text>
          </View>
          <View style={[styles.BadView, styles.width1]}>
            <Text>101~150</Text>
          </View>
          <View style={[styles.VeryView, styles.width1]}>
            <Text>150~</Text>
          </View>
        </View>
        <View style={styles.third}>
          <View style={[styles.FirstView, styles.width1]}>
            <Text>일산화질소</Text>
          </View>
          <View style={[styles.GoodView, styles.width1]}>
            <Text>0~2</Text>
          </View>
          <View style={[styles.NomalView, styles.width1]}>
            <Text>51~100</Text>
          </View>
          <View style={[styles.BadView, styles.width1]}>
            <Text>101~150</Text>
          </View>
          <View style={[styles.VeryView, styles.width1]}>
            <Text>150~</Text>
          </View>
        </View>
        <View style={styles.third}>
          <View style={[styles.FirstView, styles.width1]}>
            <Text>아황산가스</Text>
          </View>
          <View style={[styles.GoodView, styles.width1]}>
            <Text>0~2</Text>
          </View>
          <View style={[styles.NomalView, styles.width1]}>
            <Text>51~100</Text>
          </View>
          <View style={[styles.BadView, styles.width1]}>
            <Text>101~150</Text>
          </View>
          <View style={[styles.VeryView, styles.width1]}>
            <Text>150~</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    textAlign: "center",
    alignItems: "center",
  },
  one: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  whiteView: {
    height: 72,
    backgroundColor: "white",
  },
  redView: {
    height: 72,
    backgroundColor: "red",
  },
  yellowView: {
    height: 72,
    backgroundColor: "yellow",
  },
  two: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  greenView: {
    height: 32,
    backgroundColor: "white",
  },
  Title1View: {
    height: 32,
    backgroundColor: "#AEEDFF",
  },
  Title2View: {
    height: 32,
    backgroundColor: "#CDFFAE",
  },
  Title3View: {
    height: 32,
    backgroundColor: "#FFDFAE",
  },
  Title4View: {
    height: 32,
    backgroundColor: "#FFAEAE",
  },
  third: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  GoodView: {
    backgroundColor: "#CEF4FF",
  },
  NomalView: {
    backgroundColor: "#E1FFCE",
  },
  BadView: {
    backgroundColor: "#FFECCE",
  },
  VeryView: {
    backgroundColor: "#FFCECE",
  },
  width : {
    width : 72,
    justifyContent: "center",
  },
  width1 : {
    width : 72,
    height: 40,
    justifyContent: "center",
  },
});
