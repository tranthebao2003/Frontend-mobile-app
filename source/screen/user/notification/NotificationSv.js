import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
  FlatList
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationStudentDTAction from '../../../redux/action/NotificationStudentDTAction'
import Spinner from 'react-native-loading-spinner-overlay';
import NotificationSvItem from "./NotificationSvItem";

function NotificationSv() {
  const dispatch = useDispatch()

  const { loadingNotification, notification, errorNotification } = useSelector(
    (state) => state.notificationStudentDTReducer
  );

  const [getNotification, setGetNotification] = useState([]);

  useEffect(() => {
    dispatch(NotificationStudentDTAction())
  }
  , [dispatch])

  useEffect(() => {
    if (notification) {
      setGetNotification(notification);
    } else {
      if(errorNotification != null){
        alert('Bạn vui lòng thoát app để vào lại')
      }
    }
  }, [notification]);

  // console.log(infoUser, 'infoUser màn profileSv')


  
  return (
    <SafeAreaView style={{ flex: 1, zIndex: 0 }}>
      <StatusBar barStyle="auto"></StatusBar>
      <ImageBackground
        source={require("../../../resource/iconLogin/bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "120%" }}
      >
        <Spinner
          visible={loadingNotification}
          textContent={"Loading..."}
          textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
        />
        <View>
          <View style={styles.containerHeader}>
            <Text style={[styles.header, {marginLeft: 30}]}>Thông báo</Text>
            <Image
            source={require("../../../resource/iconNotification/notification-bell.png")}
            style={{
              height: 40,
              width: 40,
              position: "absolute",
              left:20,
              top: 20,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
          </View>

              {/* posision, logo */}
        <View style={styles.containerPositionLogo}>
          <Image
            source={require("../../../resource/iconNotification/student.png")}
            style={{
              height: 37,
              width: 37,
              position: "absolute",
              left: 12,
              top: 18,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
          <Text style={[styles.header, {marginLeft: 40,  fontSize: FontSize.sizeHeader - 7,}]}>Sinh viên</Text>
        </View>

        <View style={{ width: "100%" }}>
          <Image
            source={require("../../../resource/iconLogin/lotLogo2.png")}
            style={{
              height: 78,
              width: 78,
              position: "absolute",
              right: 40,
              bottom: -2,
              borderRadius: 8,
              zIndex: 1,
            }}
            resizeMode="contain"
          ></Image>
          <Image
            source={require("../../../resource/iconLogin/logo.png")}
            style={{
              height: 70,
              width: 70,
              position: "absolute",
              right: 45,
              bottom: 0,
              borderRadius: 8,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
        </View>

        <FlatList
          style={{
            marginTop: 30,
            height: 2/3*screenHeight - 40
          }}
            data={getNotification}
            renderItem={({ item }) => (
              <NotificationSvItem
                notification={item}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    zIndex: 2,
    justifyContent: 'center',
    width: 0.7 * screenWidth,
    backgroundColor: Color.colorBgUiTap,
    alignSelf: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 2,
  },
  header: {
    fontSize: FontSize.sizeHeader,
    fontWeight: '700',
    color: Color.colorTextMain,
  },
  containerPositionLogo: {
    width: 0.8 * screenWidth,
    marginLeft: 40,
    paddingVertical: 20,
    paddingLeft: 20,
    backgroundColor: Color.colorBgUiTap,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "black",
  },
});

export default NotificationSv;
