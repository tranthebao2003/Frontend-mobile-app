import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TextInput,
    FlatList,
    Keyboard,
  } from 'react-native';
import React, { useState, useEffect, createContext} from 'react';
import FontSize from '../../../component/FontSize';
import Color from '../../../component/Color';
import {screenWidth, screenHeight} from '../../../component/DimensionsScreen'
import ActiveItem from './ActiveItem'
import { useDispatch, useSelector } from 'react-redux';
import {showKeyBoardAction, hideKeyBoardAction} from '../../../redux/action/KeyBoardAction'
import {ListActiveAcceptAction} from '../../../redux/action/ListActiveAcceptAction'

import Spinner from 'react-native-loading-spinner-overlay';

export function ScreenList(props) {

  const dispatch = useDispatch()

  const { loading, listActiveAccept, error} = useSelector(state => state.listActiveAcceptReducer)
  // console.log(infoUser, 'infoUser màn profileSv')


  useEffect(() => {
    dispatch(ListActiveAcceptAction())
  }
  , [dispatch])

 
  // console.log(listActiveAccept, 'màn screenlist')

  const{navigation} = props
  const [active, setActive] = useState([]);

  useEffect(() => {
    if(listActiveAccept){
      setActive(listActiveAccept)
    } else{
      setActive([])
    }
  }
  , [listActiveAccept])

  const [filterActive, setFilterActive] = useState([]);
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const filteredActives = () => {
      if(active){
        return active.filter((eachActive) =>
          eachActive.act_name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
    };
    
    setFilterActive(filteredActives());
  }, [searchText, active]);

  // console.log (active.length, 'active màn screenList')



  const {showKeyBoard} = useSelector(state => state.keyboardShow)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      dispatch(showKeyBoardAction())
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      dispatch(hideKeyBoardAction())
    });

    // showSubscription.remove() và hideSubscription.remove() là các phương thức được 
    // sử dụng để gỡ bỏ các hàm xử lý sự kiện đã được đăng ký trước đó thông qua addListener.
    // Khi component bị unmount hoặc useEffect được gọi lại, các hàm xử lý sự kiện này 
    // không còn cần thiết nữa, vì vậy chúng ta gọi remove() để loại bỏ chúng
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../../../resource/iconListActive/decorTop.png")}
        style={{
          height: 900,
          width: 600,
          position: "absolute",
          top: -220,
          right: -100,
          zIndex: 1,
        }}
        resizeMode="contain"
      ></Image>

      <ImageBackground
        source={require("../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%" }}
      >
        <Spinner
          visible={loading}
          textContent={"Loading..."}
          textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
        />
        <View
          style={{
            height: (1 / 10) * screenHeight,
            paddingHorizontal: 14,
            flexDirection: "row",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <TextInput
            placeholder="Search"
            placeholderTextColor={Color.colorTextMain}
            onChangeText={(text) => setSearchText(text)}
            style={{
              fontSize: FontSize.sizeMain,
              backgroundColor: Color.colorBtn,
              width: "100%",
              height: 45,
              paddingRight: 20,
              paddingLeft: 42,
              color: Color.colorTextMain,
              alignSelf: "center",
              borderRadius: 8,
              borderWidth: 0.5,
            }}
          ></TextInput>

          <Image
            source={require("../../../resource/iconListActive/search.png")}
            style={{
              position: "absolute",
              height: 20,
              width: 20,
              left: 26,
              tintColor: Color.colorTextMain,
            }}
            resizeMode="cover"
          ></Image>
        </View>

        <View style={styles.containerHeader}>
          <Text style={styles.header}>Danh sách hoạt động</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            padding: 20,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: { width: 500, height: 500 },
            shadowOpacity: 1,
            elevation: 0.8,
            zIndex: 2,
            borderWidth: 0.8,
            borderColor: Color.colorBorder,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 58,
              }}
            >
              Tên hoạt động
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
              }}
            >
              Thời gian
            </Text>
          </View>

          {filterActive.length > 0 ? (
            <FlatList
              style={{ flex: 1, marginBottom: showKeyBoard ? 95 : 200 }}
              data={filterActive}
              renderItem={({ item }) => (
                <ActiveItem
                  active={item}
                  onPressItem={() =>
                    navigation.navigate("detailActive", { detailActive: item })
                  }
                />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.sizeMain,
                  color: Color.colorTextMain,
                }}
              >
                Not Found
              </Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // cần xử lí sự kiện bàn phím xuất hiện và biến mất
  },
  containerHeader: {
    height: 1/10* screenHeight,
    alignItems: 'center',
    marginBottom: 30,
    zIndex: 2
  },
  header: {
    fontSize: FontSize.sizeHeader,
    fontWeight: '700',
    color: Color.colorTextMain,
  },
});
