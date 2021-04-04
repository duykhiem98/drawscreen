import React,{useState} from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import styled from "styled-components/native";
import {IC_ROW,IC_CHECK} from "../../image";

const DATA = [
  {
    id: "1",
    title: "Tong so KPI co ke hoach",
  },
  {
    id: "2",
    title: "Cong viec",
  },
  {
    id: "3",
    title: "Phat sinh",
  },
];
const Name = styled.Text`
  font-size: 15px;
  color: #111;
  padding-left: 10px;
`;
const Item = ({ item, style }) => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const onPress = () => {
    setIsShowInfo(isShowInfo ? false : true);
  };
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Image source={IC_ROW} resizeMode={'contain'} style={{width:20,height:20,tintColor:'black',transform:[{rotate:isShowInfo ? '180deg':'0deg'}] }} />
        <Name>{item.title}</Name>
        <Image source={IC_CHECK} resizeMode={'contain'} style={{width:20,height:20}} />
      </TouchableOpacity>
      {
        isShowInfo
          ? <View style={{flexDirection:'column',padding:20,borderBottomWidth:0.7}}>
              <View style={{flexDirection:"row"}}>
                <Image source={IC_CHECK} resizeMode={'contain'} style={{width:20,height:20}} />
                <Name>DH-001</Name>
                </View>
              <View style={{flexDirection:"column",paddingLeft:30}}>
                <Text>A01-xac dinh DH</Text>
              </View>
           </View>
          : null
      }
    </>
  )
}
  const FlowPage = (props) => {
    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
        />
      );
    };
    return (
      <Scontainer>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Scontainer>
    );
  };
  const Scontainer = styled.View`
    flex: 1;
    background-color: white;
  `;
const styles = StyleSheet.create({
  item: {
    flexDirection:'row',
    paddingVertical: 16,
    backgroundColor:'#BDBDBD',
    paddingLeft:10,
    borderBottomWidth:0.7
  },
})
  export default FlowPage;
