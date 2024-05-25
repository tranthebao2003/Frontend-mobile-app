import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../../../component/Color";
import FontSize from "../../../component/FontSize";

const ItemThongKeHoatDong = (props) => {

    const {mssv, hdDaThamGia} = props.profileSinhVien; // destructuring an object
    const { onPressItem } = props;
    return (
      <TouchableOpacity
        onPress={onPressItem}
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          flexDirection: "row",
          borderTopWidth: 0.5,
          borderColor: Color.colorTextMain,
          paddingTop: 26,
          paddingBottom: 13,
          justifyContent: 'space-between'
        }}
      >
        <View
          style={{
            marginRight: 15
          }}
        >
          <Text style={styles.contentText}>{mssv}</Text>
        </View>


        <View
          style={{
            backgroundColor: Color.colorBtn,
            alignItems: "center",
            width: '40%',
          }}
        >
          <Text style={styles.contentText}>{hdDaThamGia}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  const styles = StyleSheet.create({
    contentText : {
      color: Color.colorTextMain,
      fontSize: FontSize.sizeMain,
      fontWeight: '400',
    }
  })
  
  export default ItemThongKeHoatDong;