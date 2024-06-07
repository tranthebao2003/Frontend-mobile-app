import { useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import FontSize from "../../../component/FontSize";
import Color from "../../../component/Color";
import { screenWidth, screenHeight } from "../../../component/DimensionsScreen";
import IsoTime from '../../../component/formatTime/IsoTime';

const NotificationSvItem = (props) => {
  
  const {id, message, createdAt, updatedAt,} = props.notification // destructuring an object
  const fortmatCreatedAt = IsoTime(createdAt)
  const fortmatUpdatedAt = IsoTime(updatedAt)

    return (
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          marginBottom: 50,
          backgroundColor: Color.colorBgUiTap,
          elevation: 2,
          borderRadius: 20,
        }}
      >
        <View style={{ flex: 1, marginTop: -5 }}>
          <Text
            style={{
              color: Color.colorTextMain,
              fontSize: 24,
              fontWeight: "700",
              marginBottom: 8,
            }}
          >
            Thông báo : {id}
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: "black",
              width: "100%",
              marginBottom: 8,
            }}
          />

          {/* Nội dung */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: Color.colorBorder,
                fontSize: 22,
                marginBottom: 8,
                fontWeight: '500',
                
              }}
            >
              Nội dung: {''}
              <Text
                style={{
                  color: Color.colorBorder,
                  fontSize: 20,
                  marginBottom: 8,
                   fontWeight: '400'
                }}
              >
                {message}
              </Text>
            </Text>
          </View>

          {/* Ngày tạo */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: Color.colorBorder,
                fontSize: 22,
                marginBottom: 8,
                fontWeight: '500',
                
              }}
            >
              Ngày tạo: {''}
              <Text
                style={{
                  color: Color.colorBorder,
                  fontSize: 20,
                  marginBottom: 8,
                   fontWeight: '400'
                }}
              >
                {fortmatCreatedAt}
              </Text>
            </Text>
          </View>

          {/* Chỉnh sửa lần cuối */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: Color.colorBorder,
                fontSize: 22,
                marginBottom: 8,
                fontWeight: '500',
                
              }}
            >
              Chỉnh sửa lần cuối: {''}
              <Text
                style={{
                  color: Color.colorBorder,
                  fontSize: 20,
                  marginBottom: 8,
                   fontWeight: '400'
                }}
              >
                {fortmatUpdatedAt}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
}

export default NotificationSvItem