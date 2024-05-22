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
import ActiveCreatedItemDT from './ActiveCreatedItemDT'
import {useSelector, useDispatch} from 'react-redux'
import {showKeyBoardAction, hideKeyBoardAction} from '../../../redux/action/KeyBoardAction'


export default function ListActiveCreatedDT({navigation}) {
  // ở đây chỉ bao gồm những hoạt động do đoàn trường tạo
  // do api trả về lun
  const [active, setActive] = useState([
    {
      id: 1,
      stt: 1,
      nameActive: "Trăng cho em",
      timeOrganize: "3/2/2005",
      // deadline này là thuộc tính tính toán được
      deadline: '20/1/2005',
      location: "Học viện cơ sở quận 9 hội trường A",
      quantityActived: 30,
      organizer: "Đoàn trường",
      timeCreateActive: '10/1/2005',
      cost: 20000,
      personApprove: 'không có',
      timeApprove: 'không có',
      minNumber: 50,

      description:
        "Là hoạt động thiện nguyên cho trẻ em vùng cao có hoàn cảnh khó khăn",
      status: 'register'
    },

    {
      id: 2,
      stt: 2,
      nameActive: "Mùa hè xanh",
      timeOrganize: "10/2/2005",
      deadline: '10/10/2005',
      location: "Học viện cơ sở quận 9 hội trường B",
      quantityActived: 10,
      organizer: "Đoàn trường",
      timeCreateActive: '10/1/2005',
      cost: 60000,
      personApprove: 'không có',
      timeApprove: 'không có',
      minNumber: 20,
      description:
        "Là hoạt động để sinh viên có 1 mùa hè ý nghĩa",
      status: 'registered'
    },

    {
      id: 3,
      stt: 3,
      nameActive: "Lập trình cho bé từ 10 đến 12 tuổi",
      timeOrganize: "3/8/2005",
      deadline: '1/9/2005',
      location: "Học viện cơ sở quận 1",
      quantityActived: 50,
      organizer: "Đoàn trường",
      timeCreateActive: '10/1/2005',
      cost: 200000,
      personApprove: 'không có',
      timeApprove: 'không có',
      minNumber: 80,
      description:
        "Là hoạt động giới thiệu lập trình đến các em nh3o",
      status: 'no register'
    },

    {
      id: 4,
      stt: 4,
      nameActive: "Lập trình cho bé từ 10 đến 12 tuổi",
      timeOrganize: "4/10/2005",
      deadline: '12/12/2005',
      location: "Học viện cơ sở quận 9 phòng 2A11",
      quantityActived: 60,
      organizer: "Đoàn trường",
      timeCreateActive: '10/1/2005',
      cost: 0,
      personApprove: 'không có',
      timeApprove: 'không có',
      minNumber: 220,
      description:
        "giới thiệu lập trình đến các em nhỏ",
      status: 'registered'
    },
    {
      id: 5,
      stt: 5,
      nameActive: "Lập trình cho bé từ 10 đến 12 tuổi",
      timeOrganize: "4/10/2005",
      deadline: '12/12/2005',
      location: "Học viện cơ sở quận 9 phòng 2A11",
      quantityActived: 60,
      organizer: "Đoàn trường",
      timeCreateActive: '10/1/2005',
      cost: 0,
      personApprove: 'không có',
      timeApprove: 'không có',
      minNumber: 220,
      description:
        "giới thiệu lập trình đến các em nhỏ",
      status: 'registered'
    },
    {
      id: 6,
      stt: 6,
      nameActive: "Lập trình cho bé từ 10 đến 12 tuổi",
      timeOrganize: "4/10/2005",
      deadline: '12/12/2005',
      location: "Học viện cơ sở quận 9 phòng 2A11",
      quantityActived: 60,
      organizer: "Đoàn trường",
      timeCreateActive: '10/1/2005',
      cost: 0,
      personApprove: 'không có',
      timeApprove: 'không có',
      minNumber: 220,
      description:
        "giới thiệu lập trình đến các em nhỏ",
      status: 'registered'
    },
  ]);


  const [searchText, setSearchText] = useState('')
  const filteredActives = () => {
    return active.filter((eachActive) =>
        eachActive.nameActive.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const {showKeyBoard} = useSelector(state => state.keyboardShow)
  const dispatch = useDispatch()
  
  // event keyboard: event là cho toàn màn hình nằm trong UITapDoanTruong.js là chỉ cần mình ấn vào 
  // ô input ở scrren HĐ đã tham gia hay HĐ thì nó đều bắt đc keyboard

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
            elevation: 0.8,
            zIndex: 2,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 28,
              }}
            >
              STT
            </Text>

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

          {filteredActives().length > 0 ? (
            <FlatList
              style={{flex: 1,  marginBottom: showKeyBoard ? 95 : 150}}
              data={filteredActives()}
              renderItem={({ item }) => (
                <ActiveCreatedItemDT
                  active={item}
                  onPressItem={() => {
                    navigation.navigate('detailActiveDTruong', {detailActiveDTruong : item});
                  }}
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
