import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TextInput,
    FlatList,
    TouchableOpacity,
    Alert
  } from 'react-native';
import React, { useState, useEffect} from 'react';
import FontSize from '../../../component/FontSize';
import Color from '../../../component/Color';
import {screenWidth, screenHeight} from '../../../component/DimensionsScreen'
import ActivedItemTruongCLB from './ActivedItemTruongCLB'
import { useSelector, useDispatch} from 'react-redux';
import ActiveParticipatedAction from '../../../redux/action/ActiveParticipatedAction';
import Spinner from 'react-native-loading-spinner-overlay';

export default function ScreenListActivedTruongCLB({navigation}) {
  // đây cũng gọi api trả về từ server những họa động mà
  // sv đã đăng kí tham gia
  
  const dispatch = useDispatch()

  const { loading, activeParticipated, error } = useSelector(
    (state) => state.activeParticipatedReducer
  );
  // console.log(infoUser, 'infoUser màn profileSv')
  
  
  // Khởi tạo useState để lưu trữ dữ liệu
  const [active, setActive] = useState([]);
  const [filterActive, setFilterActive] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Gọi action để lấy dữ liệu khi component được mount
  useEffect(() => {
    dispatch(ActiveParticipatedAction());
  }, [dispatch]);

  // Cập nhật state active khi dữ liệu từ Redux store thay đổi
  useEffect(() => {
    if (activeParticipated) {
      setActive(activeParticipated);
    } else if (error != null && loading == false) {
      Alert.alert("Lỗi", error)  
    }
  }, [activeParticipated, error, loading]);

  // Lọc danh sách dựa trên searchText
  useEffect(() => {
    const filteredActives = () => {
      if (Array.isArray(active)) {
        return active.filter((eachActive) =>
          eachActive.act_name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
    };

    setFilterActive(filteredActives());
  }, [searchText, active]);

  console.log(active, 'active màn ScreenListActived');
  console.log(filterActive, 'filtered active màn ScreenListActived');

  const {showKeyBoard} = useSelector(state => state.keyboardShow)
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
          <Text style={styles.header}>Hoạt động đã tham gia</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            padding: 20,
            borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: { width: 500, height: 500 },
            shadowOpacity: 1,
            elevation: 0.8,
            zIndex: 2,
            borderWidth: 0.8,
            borderColor: Color.colorBorder
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
            <FlatList
              style={{flex: 1,  marginBottom: showKeyBoard ? 95 : 200}}
              data={filterActive}
              renderItem={({ item }) => (
                <ActivedItemTruongCLB
                  active={item}
                  onPressItem={() => {
                    navigation.navigate('detailActivedTruongCLB', {detailActivedTruongCLB : item});
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
