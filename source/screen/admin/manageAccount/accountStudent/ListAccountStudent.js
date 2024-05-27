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
import AccountItemStudent from "./AccountItemStudent";
import { useDispatch, useSelector } from "react-redux";
import {
  showKeyBoardAction,
  hideKeyBoardAction,
} from "../../../../redux/action/KeyBoardAction";

export default function ListAccountStudent({ navigation }) {
  const [account, setAccount] = useState([
    {
      MSSV: "N21DCPT008",
      first_name: "Trần Thế",
      last_name: "Bảo",
      phone: "0377253857",
      role_id: 2,
      status_id: 1,

      address: "Xã đồi 61",
      class_id: "D21CQPT01-N",
      gender_id: 1,
      birth_date: "22/3/2003",
    },

    {
      MSSV: "N21DCPT009",
      first_name: "Nguyễn Văn",
      last_name: "An",
      phone: "0356789123",
      role_id: 2,
      status_id: 1,
      address: "Phường Bình An",
      class_id: "D21CQPT01-N",
      gender_id: 1,
      birth_date: "2003-04-15",
    },
    {
      MSSV: "N21DCPT010",
      first_name: "Lê Thị",
      last_name: "Bích",
      phone: "0387654321",
      role_id: 3,
      status_id: 2,
      address: "Phường Xuân Phú",
      class_id: "D21CQPT02-N",
      gender_id: 2,
      birth_date: "2003-05-10",
    },
    {
      MSSV: "N21DCPT011",
      first_name: "Phạm Công",
      last_name: "Cường",
      phone: "0398765432",
      role_id: 2,
      status_id: 2,
      address: "Xã Tân Lập",
      class_id: "D21CQPT01-N",
      gender_id: 1,
      birth_date: "2003-06-20",
    },
    {
      MSSV: "N21DCPT012",
      first_name: "Đỗ Thị",
      last_name: "Dung",
      phone: "0365432109",
      role_id: 3,
      status_id: 1,
      address: "Xã Hòa Bình",
      class_id: "D21CQPT03-N",
      gender_id: 2,
      birth_date: "2003-07-30",
    },
    {
      MSSV: "N21DCPT013",
      first_name: "Trịnh Văn",
      last_name: "Phúc",
      phone: "0376543210",
      role_id: 2,
      status_id: 2,
      address: "Thị trấn Quang Minh",
      class_id: "D21CQPT01-N",
      gender_id: 1,
      birth_date: "2003-08-25",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const filteredAccounts = () => {
    return account.filter((eachAccount) =>
        eachAccount.MSSV.toLowerCase().includes(searchText.toLowerCase())
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
          <Text style={styles.header}>Tài khoản sinh viên</Text>
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
              Mã số sinh viên
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
                <AccountItemStudent
                  account={item}
                    onPressItem={() => {
                      navigation.navigate('detailAccountStudent', {detailAccountStudent : item});
                    }}
                />
              )}
              keyExtractor={(item) => item.MSSV}
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
