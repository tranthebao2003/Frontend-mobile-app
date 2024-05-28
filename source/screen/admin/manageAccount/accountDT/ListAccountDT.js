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
  } from "react-native";
  import { useState, useEffect } from "react";
  import FontSize from "../../../../component/FontSize";
  import Color from "../../../../component/Color";
  import {
    screenWidth,
    screenHeight,
  } from "../../../../component/DimensionsScreen";
  import AccountItemDT from "./AccountItemDT";
  import { useDispatch, useSelector } from "react-redux";
  import {
    showKeyBoardAction,
    hideKeyBoardAction,
  } from "../../../../redux/action/KeyBoardAction";
  
  export default function ListAccountDT({ navigation }) {
    const [account, setAccount] = useState([
      {
        first_name: "Trần Thế",
        last_name: "Bảo",
        phone: "0377253857",
        role_id: 4,
        status_id: 1,
  
        address: "Xã đồi 61",
        gender_id: 1,
        birth_date: "22/3/2003",
        email: 'n221dcpt00@gmail.com',
        position: 'Trưởng phòng'
      },
  
      {
        first_name: "Nguyễn Văn",
        last_name: "An",
        phone: "0356789123",
        role_id: 4,
        status_id: 1,
        address: "Phường Bình An",
        gender_id: 1,
        birth_date: "15/4/2003",
        email: "nguyenvanan@gmail.com",
        position: "Trưởng phòng"
      },
      {
        first_name: "Lê Thị",
        last_name: "Bích",
        phone: "0387654321",
        role_id: 4,
        status_id: 2,
        address: "Phường Xuân Phú",
        gender_id: 2,
        birth_date: "10/5/2003",
        email: "lethibich@gmail.com",
        position: "Trưởng phòng"
      },
      {
        first_name: "Phạm Công",
        last_name: "Cường",
        phone: "0398765432",
        role_id: 4,
        status_id: 1,
        address: "Xã Tân Lập",
        gender_id: 1,
        birth_date: "20/6/2003",
        email: "phamcongcuong@gmail.com",
        position: "Trưởng phòng"
      },
      {
        first_name: "Đỗ Thị",
        last_name: "Dung",
        phone: "0365432109",
        role_id: 4,
        status_id: 2,
        address: "Xã Hòa Bình",
        gender_id: 2,
        birth_date: "30/7/2003",
        email: "dothidung@gmail.com",
        position: "Trưởng phòng"
      },
      {
        first_name: "Trịnh Văn",
        last_name: "Phúc",
        phone: "0376543210",
        role_id: 4,
        status_id: 1,
        address: "Thị trấn Quang Minh",
        gender_id: 1,
        birth_date: "25/8/2003",
        email: "trinhvanphuc@gmail.com",
        position: "Trưởng phòng"
      }
    ]);
  
    const [searchText, setSearchText] = useState("");
    const filteredAccounts = () => {
       
      return account.filter((eachAccount) =>
        (eachAccount.first_name + " " + eachAccount.last_name)
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    };
  
    const { showKeyBoard } = useSelector((state) => state.keyboardShow);
    const dispatch = useDispatch();
  
    // event keyboard: event là cho toàn màn hình nằm trong UITapDoanTruong.js là chỉ cần mình ấn vào
    // ô input ở scrren HĐ đã tham gia hay HĐ thì nó đều bắt đc keyboard
  
    useEffect(() => {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        dispatch(showKeyBoardAction());
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        dispatch(hideKeyBoardAction());
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
          source={require("../../../../resource/iconListActive/decorTop.png")}
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
          source={require("../../../../resource/iconLogin/bg.png")}
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
              placeholder="Mã sinh viên"
              placeholderTextColor='#afdffe'
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
              source={require("../../../../resource/iconListActive/search.png")}
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
            <Text style={styles.header}>Tài khoản đoàn trường</Text>
          </View>
  
          <View
            style={{
             flex: 1,
              backgroundColor: Color.colorBtn,
              marginHorizontal: 10,
              padding: 20,
              paddingBottom: showKeyBoard ? 10 : 60,
              borderRadius: 10,
              shadowColor: "black",
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
                alignItems: "center",
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
                Tên người dùng
              </Text>
  
              <View style={{ flex: 1, alignItems: "center", marginLeft: 50 }}>
                <Text
                  style={{
                    color: Color.colorTextMain,
                    fontSize: FontSize.sizeMain,
                    fontWeight: 500,
                  }}
                >
                  Trạng thái
                </Text>
                <Text
                  style={{
                    color: Color.colorTextMain,
                    fontSize: FontSize.sizeMain,
                    fontWeight: 500,
                  }}
                >
                  tài khoản
                </Text>
              </View>
            </View>
  
            {filteredAccounts().length > 0 ? (
              <FlatList
                style={{ flex: 1, marginBottom: showKeyBoard ? 95 : 150 }}
                data={filteredAccounts()}
                renderItem={({ item }) => (
                  <AccountItemDT
                    account={item}
                      onPressItem={() => {
                        navigation.navigate('detailAccountDT', {detailAccountDT : item});
                      }}
                  />
                )}
                keyExtractor={(item) => item.email}
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
      backgroundColor: "#fff",
    },
    containerHeader: {
      height: (1 / 10) * screenHeight,
      alignItems: "center",
      zIndex: 2,
    },
    header: {
      fontSize: FontSize.sizeHeader,
      fontWeight: "700",
      color: Color.colorTextMain,
    },
  });
  