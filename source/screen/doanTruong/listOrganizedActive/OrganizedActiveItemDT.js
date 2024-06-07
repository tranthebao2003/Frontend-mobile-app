import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../../../component/Color";
import FontSize from "../../../component/FontSize";
import formatTime from '../../../component/formatTime/DDMMYYYY'

const OrganizedActiveItemDT = (props) => {

    const {act_name, act_time} = props.activeOrganized; // destructuring an object
    const { onPressItem } = props;
    const formatActTime = formatTime(act_time)
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
          <Text style={styles.contentText}>{act_name}</Text>
        </View>

        <View
          style={{
            flex: 2,
            backgroundColor: Color.colorBtn,
            alignItems: "center",
          }}
        >
          <Text style={styles.contentText}>{formatActTime}</Text>
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
  
  export default OrganizedActiveItemDT;