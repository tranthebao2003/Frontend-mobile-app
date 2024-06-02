import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';
import FontSize from '../FontSize';
import Color from '../Color';
import {screenWidth, screenHeight} from '../DimensionsScreen'
import { useDispatch, useSelector } from 'react-redux';
import SendEmailAction from '../../redux/action/forgotPasswordAction/SendEmailAction';
import Spinner from 'react-native-loading-spinner-overlay';

const ForgotPassword = (props) => {
  const{navigation} = props
  const {loading} = useSelector(state => state.sendEmailReducer) 
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default"/>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{color: 'white', fontSize: FontSize.sizeHeader}}
      />
      <ImageBackground 
          source={require('../../resource/iconLogin/bg.png')}
          resizeMode='cover'
          style={{width: '100%', height: '100%'}}
      >
        <ScrollView>
         <BannerComponent />
         <MainComponent navigateForgotPassword2 = {navigation}/>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}


const BannerComponent = () => {

return (
  <View
    style={{
      width: "100%",
      height: 0.4 * screenHeight,
      justifyContent: "flex-end",
    }}
  >
    <View style={{ width: "100%"}}>
      <Image
        source={require("../../resource/iconLogin/lotLogo2.png")}
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          left: screenWidth/2 - 50,
          top: -140,
          zIndex: 1,
        }}
        resizeMode="contain"
      ></Image>
      <Image
        source={require("../../resource/iconLogin/logo.png")}
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          left: screenWidth/2 - 50,
          top: -140,
          borderRadius: 16,
          zIndex: 2,
        }}
        resizeMode="contain"
      ></Image>
    </View>
    <Image
      source={require("../../resource/iconLogin/decorTopLeft.png")}
      style={{
        height: 500,
        width: 500,
        position: "absolute",
        top: -180,
        left: -147,
        zIndex: -1,
      }}
      resizeMode="contain"
    ></Image>
    <View style={styles.containerHeader}>
      <Text style={styles.header}>Forgot Password</Text>
    </View>
  </View>
);
}

const MainComponent = ({navigateForgotPassword2}) => {
const [email, onChangeEmail] = useState('')
const [isValidEmail, setValidEmail] = useState(false)
 
const dispatch = useDispatch()
const {error, navigateContinue, loading} = useSelector(state => state.sendEmailReducer) 

useEffect(() => {
  if(error != null){
    Alert.alert("Thông báo", error)
  } else if(navigateContinue == true){
    navigateForgotPassword2.navigate("forgotPassword2")
  }
}, [error, loading])

const verifyEmail = (email) => {
  let regex = new RegExp(/([!#-'*+-9=?A-Z^-~-]+(\.[!#-'*+-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-'*+-9=?A-Z^-~-]+(\.[!#-'*+-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/)
  if(regex.test(email)){ //todo
    return true
  } 
  return false
}

return (
  <View style={{ height: 0.6 * screenHeight, paddingHorizontal: 25 }}>
    {/* email and password */}
    <View style={styles.containerMain}>
      <View style={styles.containerUserName}>
        {/* nếu autoFocus = {true} thì khi component được gắn thì nó sẽ tự động focus */}
        <TextInput
          style={styles.username}
          placeholder="Email"
          placeholderTextColor={Color.colorTextMain}
          autoFocus={true}
          onChangeText={(email) => {
            onChangeEmail(email);
            const isValid = verifyEmail(email);
            isValid ? setValidEmail(true) : setValidEmail(false);
          }}
          // value này để hiển thị lên user
          value={email}
        ></TextInput>

        {isValidEmail === false ? (
          <Text
            style={{
              height: 30,
              fontSize: 16,
              color: "#ff5252",
              fontWeight: "500",
              marginTop: 8,
            }}
          >
            Email is invalid
          </Text>
        ) : (
          ""
        )}
      </View>
    </View>

    {/* btn login and forgot password */}

    <View style={styles.containerBtnLoginFooter}>
      {/* <TouchableOpacity style={styles.btnLogin} onPress={() => alert("lấy lại mk")}>
        <Text style={styles.login}>CONTINUE</Text>
      </TouchableOpacity> */}

      
      <TouchableOpacity style={styles.btnLogin} onPress={() => dispatch(SendEmailAction(email))  }>
        <Text style={styles.login}>NHẬN MÃ OTP</Text>
      </TouchableOpacity>
    </View>

    <View style={{ flex: 1 }}>
      <Image
        source={require("../../resource/iconLogin/decorBottomRight.png")}
        style={{
          height: 650,
          width: 400,
          position: "absolute",
          bottom: -190,
          right: -200,
          zIndex: -1
        }}
        resizeMode="contain"
      ></Image>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1
},

containerHeader: {
  height: 120,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 40
},

header: {
  fontSize: FontSize.sizeHeader,
  fontWeight: '700',
  color: Color.colorTextMain,
},

containerMain: {
  justifyContent: 'center',
  alignItems: 'center'
},

containerUserName: {
  width: '100%',
  height: 30,
  borderBottomWidth: 1,
  borderBottomColor: Color.colorBorder,
  marginBottom: 45,
},

username: {
  width: '100%',
  fontSize: 20,
  color: Color.colorTextMain,
},

containerPassword: {
  width: '100%',
  height: 30,
  borderBottomWidth: 1,
  borderBottomColor: Color.colorBorder,
  marginBottom: 15,
  flexDirection: 'row',
  justifyContent: 'space-between'
},

password: {
  fontSize: 20,
  color: Color.colorTextMain,
  width: '85%'
},

eye: {
  height: 26,
  width: 26
},

containerForgot:{
  justifyContent: 'flex-end',
  width:'100%'
},

forgot: {
  fontSize: FontSize.sizeSmall,
  color: Color.colorTextMain,
  alignSelf: 'flex-end'
},

containerBtnLoginFooter: {
  margin: 50,
  alignItems: 'center',
},
btnLogin: {
  width: 90*2,
  height: 30*1.6,
  borderRadius: 40,
  backgroundColor: Color.colorBtn,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: Color.colorTextMain,
  shadowOffset: { width: 500, height: 500 },
  shadowOpacity: 0.8,
  elevation: 0.8,
},

login: {
  fontSize: FontSize.sizeSmall + 2,
  fontWeight: '700',
  color: Color.colorTextMain,
},

footer: {
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 40
},

footerText: {
  fontSize: FontSize.sizeSmall,
  color: Color.colorTextMain,
  marginRight: 6
},

footerSignUp: {
  fontSize: FontSize.sizeSmall,
  color: Color.colorTextMain
}
})

export default ForgotPassword