import React, { Component } from 'react';
import {View,TextInput, Image, Button,Text,ScrollView} from 'react-native';
import { WingBlank, WhiteSpace } from '@ant-design/react-native';
import {StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
    box1:{
        flexDirection:'row',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f23030'
    },
    box1_1:{
        width:'80%',
        height:40,
        backgroundColor:'#fbb8b8',
        borderRadius:21.5,
        marginRight:10,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20
    },
    input:{
        paddingLeft:10,
        fontSize:16,
        fontWeight:'normal'
    },
    box2:{
        flexDirection:'column',
        alignItems:'stretch',
        backgroundColor:'#f5f5f5',
        height:440,
        bottom:'3.4%'
    },
    box2_1:{
        height:100,
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor:'#fff'
    },
    img:{
        width:80,
        height:80,
        top:'2%',
        left:'5%'
    },
    text:{
        lineHeight:100,
        fontSize:16,
        left:'40%'
    },
    input:{
        height:40,
        width:'70%',
        backgroundColor:'#f23030',
        borderRadius:10,
        textAlign:'center',
        left:'15%',
        bottom:'30%'

    }


});

export default class Index extends Component {
    render() {
        return (
            <ScrollView>
                <View >
                    <View style={styles.box1}>
                        <View style={styles.box1_1}>
                            <Icon name='search' color='white' size={26}/>
                            <TextInput placeholder='请输入您要搜索的关键字' placeholderTextColor="#FFFFFF" style={styles.input} />
                        </View>
                        <Icon name='cart' color='white' size={26}/>
                    </View>
                </View>
                <Swiper style={{height:300}}  showsButtons={false}>
                    <View >
                        <Image style={{width:'100%'}} source={require('../../assets/4.png')}/>
                    </View>
                    <View >
                        <Image style={{width:'100%'}} source={require('../../assets/1.png')}/>
                    </View>
                    <View >
                        <Image style={{width:'100%'}} source={require('../../assets/2.png')}/>
                    </View>
                </Swiper>
                <View style={styles.box2}>
                    <WingBlank>
                        <WhiteSpace/>
                    <View style={styles.box2_1}>
                        <Image style={styles.img} source={require('../../assets/2.png')}/>
                        <Text style={styles.text}>居家维修保养</Text>
                        <Text style={{color:'#cecece',lineHeight:100,fontSize:16,left:'220%'}}>></Text>
                    </View>
                    <WhiteSpace/>
                    <View style={styles.box2_1}>
                        <Image style={styles.img} source={require('../../assets/1.png')}/>
                        <Text style={styles.text}>住宿优惠</Text>
                        <Text style={{color:'#cecece',lineHeight:100,fontSize:16,left:'250%'}}>></Text>
                    </View>
                    <WhiteSpace/>
                    <View style={styles.box2_1}>
                        <Image style={styles.img} source={require('../../assets/3.png')}/>
                        <Text style={styles.text}>出行接送</Text>
                        <Text style={{color:'#cecece',lineHeight:100,fontSize:16,left:'250%'}}>></Text>
                    </View>
                    <WhiteSpace/>
                    <View style={styles.box2_1}>
                        <Image style={styles.img} source={require('../../assets/5.png')}/>
                        <Text style={styles.text}>E族活动</Text>
                        <Text style={{color:'#cecece',lineHeight:100,fontSize:16,left:'260%'}}>></Text>
                    </View>
                    </WingBlank>

                </View>
                <View>
                    <TextInput style={styles.input}>
                        <Text style={{color:'#fff',textAlign:'center'}}>发布需求</Text>
                    </TextInput>
                </View>
                <View style={{height:30,textAlign:'center'}}>
                    <Text style={{textAlign:'center',color:'#818181'}}>
                        ©E族之家 版权所有
                    </Text>
                </View>
            </ScrollView>
        )
    }
}
