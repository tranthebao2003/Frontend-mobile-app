import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../../../../component/Color";
import FontSize from "../../../../component/FontSize";
import { useEffect, useState } from "react";

const AccountItemDT = (props) => {

  const {first_name, last_name, account} = props.account;
  const {status_id} = account;
  const [trangThaiTk, setTrangThaiTK] = useState('')

    useEffect(() => {
      if (status_id == 1) {
        setTrangThaiTK("Hoạt động");
      } else if (status_id == 2) {
        setTrangThaiTK("Bị khóa");
      }
    }, [status_id]); 

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
        }}
      >

        <View
          style={{
            flex: 3,
            backgroundColor: Color.colorBtn,
            paddingRight: 5,
          }}
        >
          <Text style={styles.contentText}>{first_name + " " + last_name}</Text>
        </View>

        <View
          style={{
            flex: 2,
            backgroundColor: Color.colorBtn,
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.contentText}>{trangThaiTk}</Text>
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
  
  export default AccountItemDT;