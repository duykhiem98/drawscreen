import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,FlatList } from "react-native";
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import { IC_CHECK2, IC_EXIT, IC_RIGHT, IC_START } from "../../image";
const Filter =()=>{
  const navigation=useNavigation();
    return(
      <Scontainer>
        <Stop>
          <View style={{width:200,flexDirection:'column-reverse',padding:20}}>
            <Text style={{fontSize:24,fontWeight:'bold'}}>TUY CHON</Text>
          </View>
          <View style={{flex:1}}></View>

          <View style={{width:60,flexDirection:'column-reverse',padding:20}} >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image source={IC_EXIT} style={{width:24,height:24}} />
            </TouchableOpacity>

          </View>
        </Stop>

        <Smid1>
          <Stext>
            <View style={{width:40}}>
              <Image source={IC_RIGHT} style={{width:20,height:20,tintColor:'#B404AE'}} />
            </View>
            <View style={{flex:1}}>
              <Text style={{fontSize:18}}>Tat ca</Text>
            </View>
            <View style={{width:30}}>
              <Text style={{fontSize:18}}>11</Text>
            </View>
          </Stext>

          <Stext>
            <View style={{width:40}}>
              <Image source={IC_START} style={{width:20,height:20,tintColor:'#F7FE2E'}} />
            </View>
            <View style={{flex:1}}>
              <Text style={{fontSize:18}}>Thong bao khan</Text>
            </View>
            <View style={{width:30}}>
              <Text style={{fontSize:18}}>1</Text>
            </View>
          </Stext>

          <Stext>
            <View style={{width:40}}>
              <Image source={IC_RIGHT} style={{width:20,height:20,tintColor:'#01DF3A'}} />
            </View>
            <View style={{flex:1}}>
              <Text style={{fontSize:18}}>Thong bao chung</Text>
            </View>
            <View style={{width:30}}>
              <Text style={{fontSize:18}}>5</Text>
            </View>
          </Stext>

          <Stext>
            <View style={{width:40}}>
              <Image source={IC_RIGHT} style={{width:20,height:20,tintColor:'#0489B1'}} />
            </View>
            <View style={{flex:1}}>
              <Text style={{fontSize:18}}>Thong bao noi bo</Text>
            </View>
            <View style={{width:30}}>
              <Text style={{fontSize:18}}>3</Text>
            </View>
          </Stext>



        </Smid1>
        <Smid2>
          <Stext>
            <View style={{width:40}}>
              <Image source={IC_CHECK2} style={{width:20,height:20}} />
            </View>
            <View style={{flex:1}}>
              <Text style={{fontSize:18}}>Tu A1</Text>
            </View>
            <View style={{width:30}}>
              <Text style={{fontSize:18}}>5</Text>
            </View>
          </Stext>

          <Stext>
            <View style={{width:40}}>
              <Image source={IC_CHECK2} style={{width:20,height:20}} />
            </View>
            <View style={{flex:1}}>
              <Text style={{fontSize:18}}>Tu B</Text>
            </View>
            <View style={{width:30}}>
              <Text style={{fontSize:18}}>3</Text>
            </View>
          </Stext>
        </Smid2>
        <Sbot>
          <View>
            <TouchableOpacity style={{borderRadius:7,backgroundColor:'red',width:175,height:60,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'white',fontWeight:"bold"}}>Bo qua</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}></View>
          <View>
            <TouchableOpacity style={{borderRadius:7,backgroundColor:'#DA81F5',width:175,height:60,alignItems:'center',justifyContent:'center',}}>
              <Text style={{color:'white',fontWeight:'bold'}}>Ap dung</Text>
            </TouchableOpacity>
          </View>

        </Sbot>
      </Scontainer>

    )
}
const Scontainer=styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
const Stop=styled.View`
  flex: 1;
  flex-direction: row;
  border-bottom-width: 0.7px;
`;
const Smid1=styled.View`
  flex: 3;
  flex-direction: column;
  border-bottom-width: 0.6px;
`;
const Smid2=styled.View`
  flex:3;
  
`;
const Sbot=styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px 20px 20px 20px;
  align-items: center;
`;
const Stext=styled.View`
  flex-direction: row;
  padding: 20px 20px 20px 20px;
`;

export default Filter
