import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    ImageBackground,
    FlatList,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import FontSize from "../../../component/FontSize";
  import Color from "../../../component/Color";
  import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
  import ApproveSvItemTruongCLB from "./ApproveSvItemTruongCLB";
  import { useSelector, useDispatch } from "react-redux";
  import {ListActiveAction} from '../../../redux/action/ListActiveAction'
  import Spinner from 'react-native-loading-spinner-overlay';
  
  export default function ListApproveSvTruongCLB(props) {
  const {navigation} = props
  const dispatch = useDispatch()

  const { loading, listActive, error} = useSelector(state => state.listActiveReducer)
  // console.log(infoUser, 'infoUser màn profileSv')
  
  
  const urlAllActiveCreated = 'activities/activities_user_created'
  // Khởi tạo useState để lưu trữ dữ liệu
  const [activeCreated, setActiveCreated] = useState([]);
  const [filterActiveCreated, setFilterActiveCreated] = useState([]);
  
  // Gọi action để lấy dữ liệu khi component được mount
  useEffect(() => {
    dispatch(ListActiveAction(urlAllActiveCreated));
  }, [dispatch]);
  
  // Cập nhật state active khi dữ liệu từ Redux store thay đổi
  useEffect(() => {
    if (listActive) {
      setActiveCreated(listActive);
    } else {
      if(error !== ''){
        alert('Bạn vui lòng thoát app để vào lại')
      }
    }
  }, [listActive]);
  
  // Lọc danh sách dựa trên act_status == 2
  useEffect(() => {
    const filteredActives = () => {
      if (Array.isArray(activeCreated)) {
        return activeCreated.filter((eachActiveCreated) => {
          if(eachActiveCreated.act_status == 2){
            return eachActiveCreated
          }
        });
      }
    };
    console.log(filteredActives())
    setFilterActiveCreated(filteredActives());
  }, [activeCreated]);
  
  
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
            <Text style={styles.header}>Phê duyệt sinh viên tham gia</Text>
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
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  color: Color.colorTextMain,
                  fontSize: FontSize.sizeMain,
                  fontWeight: 500,
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
                 Ngày tổ chức
              </Text>
              
              
            </View>
  
            <FlatList
              style={{ flex: 1 }}
              data={filterActiveCreated}
              renderItem={({ item }) => (
                <ApproveSvItemTruongCLB
                approveSvItemTruongCLB={item}
                  onPressItem={() => {
                    navigation.navigate("listStudentRegisterTruongCLB", {
                      listStudentRegisterTruongCLB: item,
                    });
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
      fontWeight: "700",
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
  