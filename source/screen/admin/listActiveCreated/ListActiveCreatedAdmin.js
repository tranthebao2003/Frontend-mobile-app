import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TextInput,
    FlatList,
    Keyboard
  } from 'react-native';
import React, { useState, useEffect} from 'react';
import FontSize from '../../../component/FontSize';
import Color from '../../../component/Color';
import {screenWidth, screenHeight} from '../../../component/DimensionsScreen'
import ActiveCreatedItemAdmin from './ActiveCreatedItemAdmin'
import {useSelector, useDispatch} from 'react-redux'
import {showKeyBoardAction, hideKeyBoardAction} from '../../../redux/action/KeyBoardAction'
import {ListActiveAction} from '../../../redux/action/ListActiveAction'
import Spinner from 'react-native-loading-spinner-overlay';

export default function ListActiveCreatedAdmin({navigation}) {
  // ở đây chỉ bao gồm những hoạt động do đoàn trường tạo
  // do api trả về lun
  const dispatch = useDispatch()

  const { loading, listActive, error} = useSelector(state => state.listActiveReducer)
  // console.log(infoUser, 'infoUser màn profileSv')
  
  
  const urlAllActiveCreated = 'activities/activities_user_created'
  // Khởi tạo useState để lưu trữ dữ liệu
  const [activeCreated, setActiveCreated] = useState([]);
  const [filterActiveCreated, setFilterActiveCreated] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  // Gọi action để lấy dữ liệu khi component được mount
  useEffect(() => {
    dispatch(ListActiveAction(urlAllActiveCreated));
  }, [dispatch]);
  
  // Cập nhật state active khi dữ liệu từ Redux store thay đổi
  useEffect(() => {
    if (listActive) {
      setActiveCreated(listActive);
    } else {
      if(error !== ''){
        alert('Bạn vui lòng thoát app để vào lại')
      }
    }
  }, [listActive]);
  
  // Lọc danh sách dựa trên searchText
  useEffect(() => {
    const filteredActives = () => {
      if (Array.isArray(activeCreated)) {
        return activeCreated.filter((eachActiveCreated) =>
          eachActiveCreated.act_name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
    };
  
    setFilterActiveCreated(filteredActives());
  }, [searchText, activeCreated]);
  

  const {showKeyBoard} = useSelector(state => state.keyboardShow)
  
  // event keyboard: event là cho toàn màn hình nằm trong UITapDoanTruong.js là chỉ cần mình ấn vào 
  // ô input ở scrren HĐ đã tham gia hay HĐ thì nó đều bắt đc keyboard

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      dispatch(showKeyBoardAction())
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      dispatch(hideKeyBoardAction())
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
      />
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
          <Text style={styles.header}>Hoạt động đã tạo</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            marginBottom: 5,
            padding: 20,
            borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: { width: 500, height: 500 },
            shadowOpacity: 1,
            elevation: 2,
            zIndex: 2,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent:'space-between'
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


            <FlatList
              style={{flex: 1,  marginBottom: showKeyBoard ? 95 : 150}}
              data={filterActiveCreated}
              renderItem={({ item }) => (
                <ActiveCreatedItemAdmin
                  active={item}
                  onPressItem={() => {
                    navigation.navigate('detailActiveAdmin', {detailActiveAdmin : item});
                  }}
                />
              )}
              keyExtractor={(item) => item.id}
            />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
