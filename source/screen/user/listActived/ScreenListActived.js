import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    Image,
    ImageBackground,
    TextInput,
    FlatList,
    TouchableOpacity
  } from 'react-native';
import React, { useState } from 'react';
import FontSize from '../../../component/FontSize';
import Color from '../../../component/Color';
import {screenWidth, screenHeight} from '../../../component/DimensionsScreen'
import ActivedItem from './ActivedItem'
import { useSelector } from 'react-redux';

export default function ListActive({navigation}) {
  // đây cũng gọi api trả về từ server những họa động mà
  // sv đã đăng kí tham gia
  const {showKeyBoard} = useSelector(state => state.keyboardShow)
  const [actived, setActived] = useState([
    {
      id: 1,
      stt: 1,
      nameActive: "Trăng cho em",
      timeOrganize: "3/2/2005",
      deadline: '1/10/2005',
      location: "Học viện cơ sở quận 9 hội trường A",
      quantityActived: 30,
      organizer: "Học viện bưu chính viễn thông",
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
      organizer: "Câu lạc bộ cầu lông",
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
      organizer: "Câu lạc bộ bóng rỗ",
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
      organizer: "Học viện bưu chính viễn thông",
      description:
        "giới thiệu lập trình đến các em nhỏ",
      status: 'registered'
    },

    {
      id: 5,
      stt: 5,
      nameActive: "Vẽ tay",
      timeOrganize: "13/8/2005",
      deadline: '22/12/2005',
      location: "Học viện cơ sở quận 9 sân trường",
      quantityActived: 36,
      organizer: "Trung tâm hỗ trợ trẻ em",
      description: "Hỗ trợ giáo dục và phát triển cho trẻ em mồ côi",
      status: 'no register'
    },

    {
      id: 6,
      stt: 6,
      nameActive: "Vẽ tay",
      timeOrganize: "13/8/2005",
      deadline: '22/12/2005',
      location: "Học viện cơ sở quận 9 sân trường",
      quantityActived: 36,
      organizer: "Trung tâm hỗ trợ trẻ em",
      description: "Hỗ trợ giáo dục và phát triển cho trẻ em mồ côi",
      status: 'no register'
    },
  ]);

  
  const [searchText, setSearchText] = useState('')
  const filteredActives = () => {
    return actived.filter((eachActive) =>
        eachActive.nameActive.toLowerCase().includes(searchText.toLowerCase())
    );
  };
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
          <Text style={styles.header}>Hoạt động đã tham gia</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: Color.colorBtn,
            marginHorizontal: 10,
            padding: 20,
            borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: { width: 500, height: 500 },
            shadowOpacity: 1,
            elevation: 0.8,
            zIndex: 2,
            borderWidth: 0.8,
            borderColor: Color.colorBorder
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
              style={{flex: 1,  marginBottom: showKeyBoard ? 95 : 200}}
              data={filteredActives()}
              renderItem={({ item }) => (
                <ActivedItem
                  active={item}
                  onPressItem={() => {
                    navigation.navigate('detailActived', {detailActived : item});
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
