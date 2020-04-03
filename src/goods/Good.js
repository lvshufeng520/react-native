import React from 'react';
import {StyleSheet,View,Text, TextInput,ScrollView, Image} from 'react-native';
import { WhiteSpace, WingBlank} from '@ant-design/react-native';
import { Grid, Icon } from '@ant-design/react-native';

const styles = StyleSheet.create({
  box1:{
    width: '100%',
    height: 61 ,
    backgroundColor: '#fff',
    // alignItems:'stretch'
    justifyContent: 'flex-start'
  },
  box2 :{
    flexDirection: 'row',
    justifyContent: "space-around",
    width: '90%',
    height: 40 ,
  },
  box3:{
    width: '100%',
    justifyContent:'space-around',
    flexDirection: 'column'
  },
  input:{
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    height: 49, 
    marginLeft: 46,
    marginTop: 10,
    width: '80%',
    flexDirection:'row',
    justifyContent:'flex-end'

    
  },
  text:{
    lineHeight: 50
  },
  image:{
    width:'47%',
    height: 300,
    backgroundColor:'#fff',
    marginTop: 10
  }
});

const App = () => {  
  return (
    <ScrollView>
    <View style={{ flexDirection: 'row'}}>
      <View style={styles.box1}>
        <View style={{float:'left'}}>
          <TextInput style={styles.input} placeholder='请输入要搜索的商品'/>
          <Icon name='search' style={{color:'red'}}/>
        </View>
      </View>
    </View>
    <View style={{width:'100%',flexDirection:'row',justifyContent:'center',backgroundColor: '#fff'}}>
      <View style={styles.box2}>
        <Text style={{lineHeight: 50,color: 'red'}} >综合</Text>
        <Text style={styles.text}>销量</Text>
        <Text style={styles.text}>新品</Text>
        <Text style={styles.text}>价格</Text>
        <Text style={styles.text}>信用</Text>
      </View>
    </View>
    <View style={styles.box3}>
      <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'space-around'}}>
        {
         [1,2,3].map((item)=>
         <>
         <View style={styles.image}>
          <Image 
            style={{width:'100%',height:200}}
            source={require('../image/tu1.jpg')} 
          />
          <WingBlank size='sm'>
          <Text style={{fontSize:14,paddingLeft:2}}>
            Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
          </Text>
          </WingBlank>
          <WhiteSpace size="sm" />
          <WingBlank size='md'>
          <Text style={{color:'red',fontSize:12}}>36.00</Text>
          </WingBlank>
        </View>
        <View style={styles.image}>
          <Image 
            style={{width:'100%',height:200}}
            source={require('../image/tu2.jpg')} 
          />
          <WingBlank size='sm'>
          <Text style={{fontSize:14,paddingLeft:2}}>
            Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
          </Text>
          </WingBlank>
          <WhiteSpace size="sm" />
          <WingBlank size='md'>
          <Text style={{color:'red',fontSize:12}}>36.00</Text>
          </WingBlank> 
        </View>
        </>
         )}
      </View>
    </View>
    </ScrollView>
  );
};

export default App;