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
  ScrollView,
  Alert
} from "react-native";
import Dialog from "react-native-dialog";
import { useEffect, useState } from "react";
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import moment from 'moment'
import { useSelector, useDispatch} from "react-redux";
import AcceptActiveByDTAction from '../../../redux/action/putAction/putAcceptAction/AcceptActiveByDTAction'
import Spinner from 'react-native-loading-spinner-overlay'
import {ACCEPT_ACTIVITY_BY_DT_RESET}from '../../../redux/types/typesPutAccept/typesPutAccept/TypesAcceptActiveByDT'
import { CommonActions } from "@react-navigation/native";

export default function DetailActiveAdmin(props) {
 const {navigation} = props
  const dispatch = useDispatch()

  const { loading, data, error } = useSelector(
    (state) => state.acceptActiveByDTReducer
  );


  const {
    id,
    act_name,
    act_description,
    act_address,
    act_price,
    act_status,
    act_time,
    amount,
    creater_id,
    audit_id,
    createdAt,
    updatedAt,
  } = props.route.params.detailActiveAdmin;


  const acceptActiveByDT = () => {
  
    const statusAndId = {
      id: id,
      // nghĩa là duyệt
      status: 2
    };

    dispatch(AcceptActiveByDTAction(statusAndId));

  };
  const unAcceptActiveByDT = () => {
  
    const statusAndId = {
      id: id,
      // nghĩa là ko duyệt
      status: 4
    };

    dispatch(AcceptActiveByDTAction(statusAndId));

  };

  useEffect(() => {
    dispatch({ type: ACCEPT_ACTIVITY_BY_DT_RESET });
  }, [dispatch]);

  useEffect(() => {
    if (error != null && loading == false) {
      Alert.alert("Thông báo", error);
      dispatch({ type: ACCEPT_ACTIVITY_BY_DT_RESET });
    } else if(data != null && loading == false){
      Alert.alert("Bạn đã thực hiện thành công");
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "uiTapAdmin" }],
        })
      );
      dispatch({ type: ACCEPT_ACTIVITY_BY_DT_RESET });
    }
  }, [error, loading, data]);

  // btn cancel
  const [dialogCancel, setDialogCancel] = useState(false);
  const showHideDialogCancel = () => {
    setDialogCancel(!dialogCancel);
  };

  const [yesNotificationCancel, setYesNotificationCancel] = useState(false);
  const yesBtnCancel = () => {
    setDialogCancel(!dialogCancel);
    unAcceptActiveByDT()
    // setYesNotificationCancel(!yesNotificationCancel);
  };

  // btn resigter
  const [dialogResigter, setDialogRegister] = useState(false);
  const showHideDialogRegister = () => {
    setDialogRegister(!dialogResigter);
  };

  const [yesNotificationResigter, setYesNotificationResigter] = useState(false);
  const yesBtnResigter = () => {
    setDialogRegister(!dialogResigter);
    acceptActiveByDT()
    // setYesNotificationResigter(!yesNotificationResigter);
    
  };

  useEffect(() => {
    console.log(data)
   
  }, [data])


  const [statusActive, setStatusActive] = useState()

  const showStatusActive = (act_status) => {
    switch (act_status) {
      case 1:
        setStatusActive("Đợi duyệt");
        break;

      case 2:
        setStatusActive("Đã duyệt");
        break;

      case 3:
        setStatusActive("Đã kết thúc");
        break;

      case 4:
        setStatusActive("Đã hủy");
        break;

      case 5:
        setStatusActive("Đang diễn ra");
        break;

      default:
        setStatusActive("Trạng thái đã lỗi");
        break;
    }
  };
  
  useEffect(() => {
    showStatusActive(act_status)
  },[act_status])

  const formatAct_time = moment(act_time).format('DD/MM/YYYY');
  const formatCreatedAt = moment(createdAt).format('DD/MM/YYYY');
  const formatUpdatedAte = moment(updatedAt).format('DD/MM/YYYY');


  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "white", fontSize: FontSize.sizeHeader }}
      />
      <Image
        source={require("../../../resource/iconListActive/decorTop.png")}
        style={{
          height: 800,
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
        <View style={styles.containerHeader}>
          <Text style={styles.header}>Chi tiết hoạt động</Text>
        </View>
        {/* content 1 */}
        <View
          style={{
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            marginBottom: 50,
            padding: 20,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: { width: 500, height: 500 },
            shadowOpacity: 1,
            elevation: 0.8,
            zIndex: 2,
          }}
        >
          {/* header row*/}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 15,
              }}
            >
              Tên hoạt động
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 30,
              }}
            >
              Thời gian
            </Text>
          </View>

          {/* content row */}
          <View
            style={{
              width: "100%",
              // alignItems: "center",
              flexDirection: "row",
              borderTopWidth: 0.5,
              borderColor: Color.colorTextMain,
              paddingTop: 26,
              paddingBottom: 13,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "50%",
                alignSelf: "center",
              }}
            >
              <Text style={styles.contentText}>{act_name}</Text>
            </View>

            <View
              style={{
                width: "35%",
                alignSelf: "flex-end",
                backgroundColor: Color.colorBtn,
              }}
            >
              <Text style={styles.contentText}>{formatAct_time}</Text>
            </View>
          </View>
        </View>

        {/* content 2 */}
        <View
          style={{
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            padding: 20,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: { width: 500, height: 500 },
            shadowOpacity: 1,
            elevation: 0.8,
            zIndex: 2,
          }}
        >
          {/* header column */}

          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Địa điểm
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {act_address}
            </Text>
          </View>

          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Số lượng
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {amount}
            </Text>
          </View>

          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Lệ phí
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {act_price == null ? 0 : act_price}
            </Text>
          </View>

          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Trạng thái hoạt động
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {statusActive}
            </Text>
          </View>
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Thời gian tạo
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {formatCreatedAt}
            </Text>
          </View>
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Chỉnh sửa lần cuối
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {formatUpdatedAte}
            </Text>
          </View>
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Mô tả
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {act_description}
            </Text>
          </View>
        </View>

        {act_status == 1 || act_status == 2 ? (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {/* btn cancel */}

            <TouchableOpacity
              style={styles.btnCancel}
              onPress={showHideDialogCancel}
            >
              <Text style={styles.resigter}>Không duyệt</Text>
              <Dialog.Container visible={dialogCancel}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description style={{ color: "black" }}>
                  Bạn có chắc không duyệt hoạt động này (chỉ có tác dụng với
                  những hoạt động do đoàn trường tạo)?
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
                  Bạn đã hủy tham gia thành công!
                </Dialog.Description>
                <Dialog.Button
                  label="Ok"
                  onPress={() =>
                    setYesNotificationCancel(!yesNotificationCancel)
                  }
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

            {/* btn resigter */}
            <TouchableOpacity
              style={styles.btnResigter}
              onPress={showHideDialogRegister}
              disabled={act_status == 2 ? true : false}
            >
              <Text style={styles.resigter}>Duyệt</Text>
              <Dialog.Container visible={dialogResigter}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description style={{ color: "black" }}>
                  Bạn có chắc duyệt hoạt động này (chỉ có tác dụng với
                  những hoạt động do đoàn trường tạo)?
                </Dialog.Description>
                <Dialog.Button
                  label="No"
                  onPress={showHideDialogRegister}
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
                <Dialog.Button
                  label="Yes"
                  onPress={yesBtnResigter}
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
              <Dialog.Container visible={yesNotificationResigter}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  THÔNG BÁO
                </Dialog.Title>
                <Dialog.Description style={{ color: "black" }}>
                  Bạn đã duyệt thành công!
                </Dialog.Description>
                <Dialog.Button
                  label="Ok"
                  onPress={() =>
                    setYesNotificationResigter(!yesNotificationResigter)
                  }
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
          </View>
        ) : (
          ""
        )}
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  containerHeader: {
    height: (1 / 10) * screenHeight,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
    zIndex: 2,
  },
  header: {
    fontSize: FontSize.sizeHeader,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
  contentText: {
    color: Color.colorTextMain,
    fontSize: FontSize.sizeMain,
    fontWeight: "400",
  },
  btnCancel: {
    width: 85 * 2,
    height: 30 * 1.6,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#437173",
  },

  btnResigter: {
    width: 85 * 2,
    height: 30 * 1.6,
    borderRadius: 10,
    margin: 20,
    backgroundColor: Color.colorBgUiTap,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Color.colorTextMain,
    shadowOffset: { width: 500, height: 500 },
    shadowOpacity: 0.8,
    elevation: 0.8,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
    color: Color.colorTextMain,
  },
});
