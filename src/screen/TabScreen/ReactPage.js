import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,FlatList } from "react-native";
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import TabButton from "../lichlamviec/TabButton";
const DATA = [
  {
    id: '1',
    title: "Cong tac chuan bi",
    Name:'General Code of Conducts'
  },
  {
    id: '2',
    title: "Lam viec voi doi tac",
    Name:'Workplace policies, Working times and conditions'
  },
  {
    id: '3',
    title: "Lam viec voi doi tac",
    Name:'Workplace policies, Working times and conditions'
  },
  {
    id: '4',
    title: "Lam viec voi doi tac",
    Name:'Workplace policies, Working times and conditions'
  },
  {
    id: '5',
    title: "Lam viec voi doi tac",
    Name:'Workplace policies, Working times and conditions'
  },
  {
    id: '6',
    title: "Lam viec voi doi tac",
    Name:'Workplace policies, Working times and conditions'
  },
];
const Name = styled.Text`
  font-size: 17px;
  color: #111;
  font-weight: bold;
  padding-left: 10px;
`;
const Description = styled.Text`
  font-size: 15px;
  color: #333;
  padding-left: 10px;
`;
const Item = ({ item, style }) => {
  const navigation=useNavigation();
  return (
    <>
      <TouchableOpacity style={[styles.item, style]} onPress={()=>navigation.navigate('TabButton')}>
        <Name>{item.title}</Name>
        <Description>{item.Name}</Description>

      </TouchableOpacity>
    </>
  );
};

const ReactPage =(props)=>{
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };
  return(
      <Scontainer>
      <Stop>
        <Sday>
          <Text>T2</Text>
          <Text>T3</Text>
          <Text>T4</Text>
          <Text>T5</Text>
          <Text>T6</Text>
          <Text>T7</Text>
          <Text>CN</Text>
        </Sday>
        <Sday>
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
          <Text>4</Text>
          <Text>5</Text>
          <Text>6</Text>
          <Text>7</Text>
        </Sday>
        <View style={{flex:1,paddingLeft:20,paddingTop:20}}>
          <Text>THU SAU</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{width:160,paddingLeft:20,paddingBottom:20}}>
            <Text style={{fontSize:15}}>6 thang 02,2021</Text>
          </View>
          <View style={{paddingLeft:'16%',}}>
            <Text style={{fontSize:15}}>24 thang muoi hai,Canh ty</Text>
          </View>
        </View>
      </Stop>
      <Sbot>
        <View style={{paddingTop:10}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

      </Sbot>

    </Scontainer>
  )
}
const Scontainer=styled.View`
  flex: 1;
  background-color: white;
`;
const Stop=styled.View`
  flex: 2;
  border-bottom-width: 0.7px;
`;
const Sbot=styled.View`
  flex: 8;
`;
const Sday=styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 30px;
  padding-top: 10px;
`;
const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    marginHorizontal: 20,
    paddingVertical: 20,
    backgroundColor:'#C1BEBE',
    marginVertical:10,
  },
});

export default ReactPage;
