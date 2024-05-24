import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../../../component/Color";
import FontSize from "../../../component/FontSize";

const ActiveCreatedItemDT = (props) => {

    const {stt, nameActive, timeOrganize} = props.active; // destructuring an object
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
            flex: 1,
            marginLeft: 12,
          }}
        >
          <Text style={styles.contentText}>{stt}</Text>
        </View>

        <View
          style={{
            flex: 3,
            backgroundColor: Color.colorBtn,
            paddingRight: 5,
          }}
        >
          <Text style={styles.contentText}>{nameActive}</Text>
        </View>

        <View
          style={{
            flex: 2,
            backgroundColor: Color.colorBtn,
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.contentText}>{timeOrganize}</Text>
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
  
  export default ActiveCreatedItemDT;