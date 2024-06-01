import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import ActiveApproveItemAdmin from "./ActiveApproveItemAdmin";
import { useDispatch, useSelector } from 'react-redux';
import {ListActiveAction} from '../../../redux/action/ListActiveAction'
import Dialog from "react-native-dialog";
import Spinner from 'react-native-loading-spinner-overlay';

export default function ListActiveApproveAdmin(props) {
  // ở đây chỉ bao gồm những hoạt động do đoàn trường tạo
  // do api trả về lun
  const {navigation} = props

const dispatch = useDispatch()

const { loading, listActive, error} = useSelector(state => state.listActiveReducer)
// console.log(infoUser, 'infoUser màn profileSv')


// cái này phải thay bằng hoạt động do đoàn trường tạo để admin duyệt
const urlAllActive = 'activities'
// Khởi tạo useState để lưu trữ dữ liệu
const [active, setActive] = useState([]);
const [filterActive, setFilterActive] = useState([]);
const [searchText, setSearchText] = useState('');

// Gọi action để lấy dữ liệu khi component được mount
useEffect(() => {
  dispatch(ListActiveAction(urlAllActive));
}, [dispatch]);

// Cập nhật state active khi dữ liệu từ Redux store thay đổi
useEffect(() => {
  if (listActive) {
    setActive(listActive);
  } else {
    if(error !== ''){
      alert('Bạn vui lòng thoát app để vào lại')
    }
  }
}, [listActive]);

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

console.log(active, 'active màn screenList');
console.log(filterActive, 'filtered active màn screenList');

  // btn duyệt all
  const [dialogCancel, setDialogCancel] = useState(false);
  const showHideDialogCancel = () => {
    setDialogCancel(!dialogCancel);
  };

  const [yesNotificationCancel, setYesNotificationCancel] = useState(false);
  const yesBtnCancel = () => {
    setDialogCancel(!dialogCancel);
    setYesNotificationCancel(!yesNotificationCancel);
  };

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
        style={{ width: "100%", height: "120%", alignItems: "center" }}
      >
        <View style={styles.containerHeader}>
          <Text style={styles.header}>Hoạt động chờ phê duyệt</Text>
          <Image
            source={require("../../../resource/iconLogin/lotLogo2.png")}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              right: 30,
              top: 30,
              zIndex: 1,
            }}
            resizeMode="contain"
          ></Image>
          <Image
            source={require("../../../resource/iconLogin/logo.png")}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              right: 30,
              top: 30,
              borderRadius: 16,
              zIndex: 2,
            }}
            resizeMode="contain"
          ></Image>
        </View>

        <View
          style={{
            width: 0.92 * screenWidth,
            height: 0.6 * screenHeight,
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            marginBottom: 5,
            padding: 20,
            borderRadius: 10,
            shadowColor: Color.colorTextMain,
            shadowOffset: { width: 800, height: 800 },
            shadowOpacity: 2,
            elevation: 2,
            zIndex: 2,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: 'center'
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
            
            <View style ={{flex: 1}}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
              }}
            >
              Đơn vị
            </Text>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
              }}
            >
              tổ chức
            </Text>
            </View>
            
            
          </View>

          <FlatList
            style={{ flex: 1 }}
            data={active}
            renderItem={({ item }) => (
              <ActiveApproveItemAdmin
                activeApprove={item}
                onPressItem={() => {
                  navigation.navigate("detailActiveApproveAdmin", {
                    detailActiveApproveAdmin: item,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* btn approve all */}
        <TouchableOpacity
          style={styles.btnCancel}
          onPress={showHideDialogCancel}
        >
          <Text style={[styles.resigter, { color: Color.colorApproveAll }]}>
            Duyệt tất cả
          </Text>
          <Dialog.Container visible={dialogCancel}>
            <Dialog.Title
              style={{ color: Color.colorTextMain, fontWeight: "700", fontSize: FontSize.sizeMain}}
            >
              XÁC NHẬN
            </Dialog.Title>
            <Dialog.Description style={{ color: "black", fontSize: FontSize.sizeMain - 2}}>
              Bạn có chắc muốn duyệt tất cả hoạt động ?
            </Dialog.Description>
            <Dialog.Button
              label="No"
              onPress={showHideDialogCancel}
              style={[
                styles.btnCancel,
                {
                  width: 60,
                  height: 40,
                  marginRight: 30,
                  fontWeight: 500,
                  fontSize: 18,
                  color: Color.colorRemove,
                  borderColor: Color.colorRemove
                },
              ]}
            />
            <Dialog.Button
              label="Yes"
              onPress={yesBtnCancel}
              style={{
                width: 60,
                height: 40,
                marginRight: 50,
                borderRadius: 5,
                backgroundColor: "#d9ebfe",
                fontWeight: 500,
                fontSize: 18,
              }}
            />
          </Dialog.Container>
          <Dialog.Container visible={yesNotificationCancel}>
            <Dialog.Title
              style={{ color: Color.colorTextMain, fontWeight: "700" }}
            >
              THÔNG BÁO
            </Dialog.Title>
            <Dialog.Description style={{ color: "black" }}>
              Bạn đã xóa hoạt động thành công!
            </Dialog.Description>
            <Dialog.Button
              label="Ok"
              onPress={() => setYesNotificationCancel(!yesNotificationCancel)}
              style={[
                styles.btnCancel,
                {
                  width: 60,
                  height: 40,
                  marginRight: 30,
                  fontWeight: 500,
                  fontSize: 18,
                },
              ]}
            />
          </Dialog.Container>
        </TouchableOpacity>
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
    height: (1 / 6) * screenHeight,
    padding: 30,
    zIndex: 2,
    width: screenWidth,
  },
  header: {
    fontSize: FontSize.sizeHeader - 3,
    fontWeight: "600",
    color: Color.colorTextMain,
    width: (2 / 4) * screenWidth,
  },

  btnCancel: {
    width: 85 * 2,
    height: 30 * 1.6,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.colorApproveAll,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
});
