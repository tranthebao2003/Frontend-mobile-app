import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import Dialog from "react-native-dialog";
  import { useState } from "react";
  import FontSize from "../../../component/FontSize";
  import Color from "../../../component/Color";
  import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
  
  // 2 cách:
  // - ListView from a map of objects
  // - FlatList
  export default function DetailActiveDoanTruong(props) {
    const {navigation} = props

    // btn cancel
    const [dialogCancel, setDialogCancel] = useState(false);
    const showHideDialogCancel = () => {
      setDialogCancel(!dialogCancel);
    };
  
    const [yesNotificationCancel, setYesNotificationCancel] = useState(false);
    const yesBtnCancel = () => {
      setDialogCancel(!dialogCancel);
      setYesNotificationCancel(!yesNotificationCancel);
    };

    const navigateFormEdit = () => {
      navigation.navigate("from1EditActiveDoanTruong", {
        nameActiveFromDetail: nameActive,
        timeOrganizeFromDetail: timeOrganize,
        deadlineFromDetail: deadline,
        locationFromDetail: location,
        organizerFromDetail: organizer,
        costFromDetail: cost,
        descriptionFromDetail: description
      });
    };
  
  
    const {
      nameActive,
      timeOrganize,
      deadline,
      location,
      quantityActived,
      organizer,
      timeCreateActive,
      cost,
      personApprove,
      timeApprove,
      description,
      status,
    } = props.route.params.detailActiveDTruong;
  
    return (
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
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

              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                }}
              >
                Trạng thái
              </Text>
            </View>

            {/* content row */}
            <View
              style={{
                width: "100%",
                alignItems: "center",
                marginTop: 20,
                flexDirection: "row",
                borderTopWidth: 0.5,
                borderColor: Color.colorTextMain,
                paddingTop: 26,
                paddingBottom: 13,
              }}
            >
              <View
                style={{
                  flex: 2.4,
                  marginRight: 10,
                }}
              >
                <Text style={styles.contentText}>{nameActive}</Text>
              </View>

              <View
                style={{
                  flex: 2,
                  backgroundColor: Color.colorBtn,
                }}
              >
                <Text style={styles.contentText}>{timeOrganize}</Text>
              </View>

              <View
                style={{
                  flex: 2,
                  backgroundColor: Color.colorBtn,
                  alignItems: "flex-end",
                }}
              >
                <Text style={styles.contentText}>{status}</Text>
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
            {/* deadline*/}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginRight: 20,
                }}
              >
                Hạn chót
              </Text>

              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {deadline}
              </Text>
            </View>

            {/* location*/}
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
                {location}
              </Text>
            </View>

            {/* quantityActived*/}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginRight: 20,
                }}
              >
                Số lượng đã đăng kí
              </Text>

              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {quantityActived}
              </Text>
            </View>

            {/* cost */}
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
                {cost}
              </Text>
            </View>

            {/* organizer */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginRight: 20,
                }}
              >
                Đơn vị tổ chức
              </Text>

              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {organizer}
              </Text>
            </View>

            {/* timeCreateActive */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginRight: 20,
                }}
              >
                Thời gian tạo hoạt động
              </Text>

              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {timeCreateActive}
              </Text>
            </View>

            {/* personApprove */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginRight: 20,
                }}
              >
                Người duyệt hoạt động
              </Text>

              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {personApprove}
              </Text>
            </View>

            {/* timeCreateActive */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginRight: 20,
                }}
              >
                Thời gian tạo hoạt động
              </Text>

              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {timeCreateActive}
              </Text>
            </View>

            {/* timeApprove */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
                  marginRight: 20,
                }}
              >
                Thời gian duyệt hoạt động
              </Text>

              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 400,
                }}
              >
                {timeApprove}
              </Text>
            </View>

            {/* description*/}
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
                {description}
              </Text>
            </View>
          </View>

          {/* buttons */}
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
              <Text style={[styles.resigter, {color: Color.colorRemove}]}>Xóa</Text>
              <Dialog.Container visible={dialogCancel}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description style={{ color: "black", fontSize: FontSize.sizeMain - 2}}>
                  Bạn có chắc muốn xóa hoạt động này?
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
                      color: Color.colorRemove
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

            {/* btn remove hoạt động do đoàn trường tạo */}
            {organizer === "Đoàn trường" ? (
              <TouchableOpacity
                style={styles.btnResigter}
                onPress={navigateFormEdit}
              >
                <Text style={styles.resigter}>Sửa</Text>
              </TouchableOpacity>
            ) : (
              ""
            )}
          </View>
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
      borderColor: Color.colorRemove,
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
  