import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { IC_MORE, IC_NEXT, IC_ROW } from "../../image";
const Tet=()=>{
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
        <Text style={{fontSize:20,fontWeight:'bold'}}>Thong bao nghi tet am lich</Text>
        <Text>19/01/2021    9:00:00</Text>
        <Text style={{fontSize:18}}>Kinh gui:Cac don vi phong ban trong cong ty</Text>
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
export default Tet;
