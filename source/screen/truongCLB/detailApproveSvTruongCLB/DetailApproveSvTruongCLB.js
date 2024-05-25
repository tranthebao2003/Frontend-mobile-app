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
export default function DetailApproveSvTruongCLB(props) {
  const {
    id,
    mssv,
    ho,
    ten,
    email,
    gioiTinh,
    sdt,
    ngaySinh,
    diaChi,
    maLop,
    chucVu,
  } = props.route.params.detailApproveSvTruongCLB;

  // btn no approve
  const [dialogCancel, setDialogCancel] = useState(false);

  const showHideDialogCancel = () => {
    setDialogCancel(!dialogCancel);
  };

  const [yesNotificationCancel, setYesNotificationCancel] = useState(false);
  const yesBtnCancel = () => {
    setDialogCancel(!dialogCancel);
    setYesNotificationCancel(!yesNotificationCancel);
  };

  // btn remove
  const [changeText, setChangeText] = useState("Không duyệt");
  const [dialogRemove, setDialogRemove] = useState(false);
  const showHideDialogRemove = () => {
    setDialogRemove(!dialogRemove);
  };

  const [yesNotificationRemove, setYesNotificationRemove] = useState(false);
  const yesBtnRemove = () => {
    // let save
    setDialogRemove(!dialogRemove);
    setYesNotificationRemove(!yesNotificationRemove);

    // mik phải để cho nó hiện thông báo tầm 3s trước khi chuyển text
    // nếu ko nó sẽ bị lỗi ấn đồng ý duyệt thì nó lại nhảy ra 
    // dialog xóa sv thành công

   
    setTimeout(() => {
      setYesNotificationRemove(false)
      setChangeText("Không duyệt");
    },2500)
   
  };

  // btn approve
  const [dialogApprove, setDialogApprove] = useState(false);
  const showHideDialogApprove = () => {
    setDialogApprove(!dialogApprove);
  };

  const [yesNotificationApprove, setYesNotificationApprove] = useState(false);
  const yesBtnApprove = () => {
    setDialogApprove(!dialogApprove);
    setYesNotificationApprove(!yesNotificationApprove);
    setChangeText("Xóa sinh viên");
  };

  return (
    <ScrollView style={styles.container}>
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
        <View style={styles.containerHeader}>
          <Text style={styles.header}>Sinh viên yêu cầu tham gia</Text>
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
          ></Image>
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
            elevation: 2,
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
                fontWeight: "600",
              }}
            >
              Mã số sinh viên
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: "600",
              }}
            >
              Tên sinh viên
            </Text>
          </View>

          {/* content row */}
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
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
                marginRight: 10,
              }}
            >
              <Text style={styles.contentText}>{mssv}</Text>
            </View>

            <View
              style={{
                backgroundColor: Color.colorBtn,
              }}
            >
              <Text style={styles.contentText}>{ho + " " + ten}</Text>
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
                marginBottom: 2,
              }}
            >
              Email
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {email}
            </Text>
          </View>

          {/* giới tính*/}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Giới tính
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {gioiTinh}
            </Text>
          </View>

          {/* số điện thoại*/}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Số điện thoại
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {sdt}
            </Text>
          </View>

          {/* mã lớp */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Mã lớp
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {maLop}
            </Text>
          </View>

          {/* ngày sinh */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Ngày sinh
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {ngaySinh}
            </Text>
          </View>

          {/* địa chỉ */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Địa chỉ
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 400,
              }}
            >
              {diaChi}
            </Text>
          </View>

          {/* chức vụ */}
          <View style={{ width: "100%", marginBottom: 20 }}>
            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: 500,
                marginBottom: 2,
              }}
            >
              Chức vụ
            </Text>

            <Text
              style={{
                color: Color.colorTextMain,
                fontSize: FontSize.sizeMain,
                fontWeight: "400",
              }}
            >
              {chucVu}
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
          {changeText === "Xóa sinh viên" ? (
            // remove sinh viên khỏi hđ
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={showHideDialogRemove}
            >
              <Text style={[styles.resigter, { color: Color.colorRemove }]}>
                Xóa sinh viên
              </Text>
              <Dialog.Container visible={dialogRemove}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description
                  style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
                >
                  Bạn có muốn xóa sinh viên này khỏi hoạt động?
                </Dialog.Description>
                <Dialog.Button
                  label="No"
                  onPress={showHideDialogRemove}
                  style={[
                    styles.btnCancel,
                    {
                      width: 60,
                      height: 40,
                      marginRight: 30,
                      fontWeight: 500,
                      fontSize: 18,
                      color: Color.colorRemove,
                    },
                  ]}
                />
                <Dialog.Button
                  label="Yes"
                  onPress={yesBtnRemove}
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
              <Dialog.Container visible={yesNotificationRemove}>
                <Dialog.Title
                  style={{
                    color: Color.colorTextMain,
                    fontWeight: "700",
                    fontSize: FontSize.sizeMain - 2,
                  }}
                >
                  THÔNG BÁO
                </Dialog.Title>
                <Dialog.Description
                  style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
                >
                  Bạn đã xóa sinh viên thành công !
                </Dialog.Description>
              </Dialog.Container>
            </TouchableOpacity>
          ) : (
            // ko duyệt
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={showHideDialogCancel}
            >
              <Text style={[styles.resigter, { color: Color.colorRemove }]}>
                Không duyệt
              </Text>
              <Dialog.Container visible={dialogCancel}>
                <Dialog.Title
                  style={{ color: Color.colorTextMain, fontWeight: "700" }}
                >
                  XÁC NHẬN
                </Dialog.Title>
                <Dialog.Description
                  style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
                >
                  Bạn có chắc không duyệt sinh viên này ?
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
                  style={{
                    color: Color.colorTextMain,
                    fontWeight: "700",
                    fontSize: FontSize.sizeMain - 2,
                  }}
                >
                  THÔNG BÁO
                </Dialog.Title>
                <Dialog.Description
                  style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
                >
                  Bạn đã không duyệt sinh viên thành công!
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
          )}

          {/* btn approve */}
          <TouchableOpacity
            style={[
              styles.btnResigter,
              {
                backgroundColor:
                  changeText === "Xóa sinh viên"
                    ? "#f1f1f1"
                    : Color.colorBgUiTap,
              },
            ]}
            onPress={showHideDialogApprove}
            disabled={changeText === "Xóa sinh viên" ? true : false}
          >
            <Text
              style={[
                styles.resigter,
                {
                  color:
                    changeText === "Xóa sinh viên"
                      ? "#bababa"
                      : Color.colorTextMain,
                },
              ]}
            >
              Duyệt
            </Text>
            <Dialog.Container visible={dialogApprove}>
              <Dialog.Title
                style={{ color: Color.colorTextMain, fontWeight: "700" }}
              >
                XÁC NHẬN
              </Dialog.Title>
              <Dialog.Description
                style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
              >
                Bạn có chắc muốn duyệt sinh viên này?
              </Dialog.Description>
              <Dialog.Button
                label="No"
                onPress={showHideDialogApprove}
                style={[
                  styles.btnCancel,
                  {
                    width: 60,
                    height: 40,
                    marginRight: 30,
                    fontWeight: 500,
                    fontSize: 18,
                    color: Color.colorRemove,
                  },
                ]}
              />
              <Dialog.Button
                label="Yes"
                // call api, sau đó chuyển ko duyệt thành xóa
                onPress={yesBtnApprove}
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
            <Dialog.Container visible={yesNotificationApprove}>
              <Dialog.Title
                style={{
                  color: Color.colorTextMain,
                  fontWeight: "700",
                  fontSize: FontSize.sizeMain - 2,
                }}
              >
                THÔNG BÁO
              </Dialog.Title>
              <Dialog.Description
                style={{ color: "black", fontSize: FontSize.sizeMain - 2 }}
              >
                Bạn đã duyệt thành công!
              </Dialog.Description>
              <Dialog.Button
                label="Ok"
                onPress={() =>
                  setYesNotificationApprove(!yesNotificationApprove)
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
    height: (1 / 6) * screenHeight,
    padding: 30,
    paddingRight: 150,
    zIndex: 2,
    width: screenWidth,
    marginBottom: 20,
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
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Color.colorTextMain,
    shadowOffset: { width: 500, height: 500 },
    shadowOpacity: 0.8,
    elevation: 2,
  },

  resigter: {
    fontSize: FontSize.sizeSmall + 6,
    fontWeight: "700",
  },
});
