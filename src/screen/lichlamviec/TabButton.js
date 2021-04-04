import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { IC_MORE, IC_NEXT } from "../../image";
var ScrollableTabView = require('react-native-scrollable-tab-view');
import Danhsach from "./Danhsach";
import Hoidap from "./Hoidap";
import Ketluan from "./Ketluan";
import Lichtrinh from "./Lichttrinh";
import Thongtin from "./Thongtin"
import { useNavigation } from "@react-navigation/native";

const App = (props) =>{
  const navigation=useNavigation();
  return(
    <Scontainer>
      <Stop>
        <View style={{width:80}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image resizeMode={'contain'} source={IC_NEXT} style={{tintColor:'black',width:25,height:25,transform:[{rotate:'180deg'}]}}/>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}></View>
        <View style={{width:80,alignItems:'flex-end'}}>
          <TouchableOpacity>
            <Image resizeMode={'contain'} source={IC_MORE} style={{width:25,height:25,alignItems:'flex-end'}}/>
          </TouchableOpacity>
        </View>
      </Stop>

      <Sbot>
        { <ScrollableTabView>
          <Danhsach tabLabel="Danh sach" />
          <Hoidap tabLabel="Hoi dap" />
          <Ketluan tabLabel="Ket luan" />
          <Lichtrinh tabLabel="Lich trinh" />
          <Thongtin tabLabel="Thong tin" />
        </ScrollableTabView>}
      </Sbot>
    </Scontainer>

  )
}
const Scontainer=styled.View`
  flex: 1;
  background-color: white;
`;
const Stop=styled.View`
  flex: 0.6;
  flex-direction: row;
  padding: 20px 10px 20px 10px;
`;
const Sbot=styled.View`
  flex: 9.4;
  padding: 0 20px 0px 20px;
`;
export default App;
