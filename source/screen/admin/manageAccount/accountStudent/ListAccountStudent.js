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

import GetAllAccountStudentAndDTAction from "../../../../redux/action/GetAllAccountStudentAndDTAction";
import Spinner from "react-native-loading-spinner-overlay";

export default function ListAccountStudent({ navigation }) {
  const [account, setAccount] = useState([]);
  const [filterAccount, setFilterAccount] = useState([]);
  const dispatch = useDispatch();

  const { loading, accountStudentOrDT, error } = useSelector(
    (state) => state.getAllAccountStudentAndDTReducer
  );

  const [searchText, setSearchText] = useState("");

  // chưa có api
  const urlAccountStudent = "users/student";
  // Gọi action để lấy dữ liệu khi component được mount
  useEffect(() => {
    dispatch(GetAllAccountStudentAndDTAction(urlAccountStudent));
  }, [dispatch]);

  useEffect(() => {
    if (accountStudentOrDT) {
      setAccount(accountStudentOrDT);
    } else {
      if (error !== "") {
        alert("Bạn vui lòng thoát app để vào lại");
      }
    }
  }, [accountStudentOrDT]);

  // Lọc danh sách dựa trên searchText
  useEffect(() => {
    const filteredAccount = () => {
      if (Array.isArray(account)) {
        return account.filter((eachAccount) =>
          (eachAccount.MSSV) ? eachAccount.MSSV.toLowerCase().includes(searchText.toLowerCase()) : ''
        );
      }
    };

    setFilterAccount(filteredAccount());
  }, [searchText, account]);

  const { showKeyBoard } = useSelector((state) => state.keyboardShow);

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
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
      />
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
            placeholderTextColor="#afdffe"
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

          <FlatList
            style={{ flex: 1, marginBottom: showKeyBoard ? 95 : 150 }}
            data={filterAccount}
            renderItem={({ item }) => (
              <AccountItemStudent
                account={item}
                onPressItem={() => {
                  navigation.navigate("detailAccountStudent", {
                    detailAccountStudent: item,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.MSSV}
          />
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
