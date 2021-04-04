import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,ScrollView} from "react-native";
import styled from 'styled-components/native';
import { IC_CHECK, IC_OVER } from "../../image";
const JestPage =(props)=>{
  return(
    <Scontainer>
      <ScrollView style={{flexDirection:"column"}}>
        <Stext>
          <Image source={IC_CHECK} style={{width:24,height:24}}/>
          <Text style={{fontSize:20,paddingLeft:10}}>Lien he khach hang</Text>
          <Image source={IC_OVER} style={{width:24,height:24,marginLeft:"35%"}} />
        </Stext>

        <Stext>
          <Image source={IC_CHECK} style={{width:24,height:24}}/>
          <Text style={{fontSize:20,paddingLeft:10}}>Lien he khach hang</Text>
          <Image source={IC_OVER} style={{width:24,height:24,marginLeft:"35%"}} />
        </Stext>

        <Stext>
          <Image source={IC_CHECK} style={{width:24,height:24}}/>
          <Text style={{fontSize:20,paddingLeft:10}}>Lien he khach hang</Text>
          <Image source={IC_OVER} style={{width:24,height:24,marginLeft:"35%"}} />
        </Stext>

        <Stext>
          <Image source={IC_CHECK} style={{width:24,height:24}}/>
          <Text style={{fontSize:20,paddingLeft:10}}>Lien he khach hang</Text>
          <Image source={IC_OVER} style={{width:24,height:24,marginLeft:"35%"}} />
        </Stext>

        <Stext>
          <Image source={IC_CHECK} style={{width:24,height:24}}/>
          <Text style={{fontSize:20,paddingLeft:10}}>Lien he khach hang</Text>
          <Image source={IC_OVER} style={{width:24,height:24,marginLeft:"35%"}} />
        </Stext>


      </ScrollView>
    </Scontainer>
  )
}
const Scontainer=styled.View`
  flex: 1;
  background-color: white;
  padding-left: 20px;
  padding-top: 30px;
  
`;
const Stext=styled.View`
  flex-direction: row;
  padding: 20px 0px 20px 0px;
`;
export default JestPage;

